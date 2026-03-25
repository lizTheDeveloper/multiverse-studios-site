const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/megastructurePanel-DTzeda2p.js","assets/megastructures-BX_wE4JW.js","assets/safeHtml-CC8Elg0c.js","assets/advisorPanel-Cc61STtq.js","assets/bufferLayout-Dz-mFrPH.js","assets/advisorService-BGg36KXp.js","assets/rolldown-runtime-lhHHWwHU.js","assets/fallbackChain-BrNZYpFp.js","assets/gameState-Diu_0gwj.js","assets/hudButtonBar-CSSPaPV7.js","assets/tooltip-B772uU-z.js","assets/commanderService-Boz7Ti0e.js","assets/commanderDelegate-pxwTHovR.js","assets/ariaSpectrum-DStXQW1O.js","assets/morningReport-CwsN4Ts9.js"])))=>i.map(i=>d[i]);
import{t as e}from"./rolldown-runtime-lhHHWwHU.js";import{t}from"./tooltip-B772uU-z.js";import{C as n,S as r,_ as i,a,b as o,c as s,d as c,f as l,g as u,h as d,i as f,l as p,m,n as h,o as g,p as _,r as v,s as y,t as b,u as ee,v as x,x as S,y as C}from"./bufferLayout-Dz-mFrPH.js";import{n as w,r as T,t as te}from"./safeHtml-CC8Elg0c.js";import{a as ne,c as re,d as ie,f as ae,g as oe,l as se,o as ce,p as E,r as le,u as ue,v as de,y as fe}from"./fallbackChain-BrNZYpFp.js";import{n as pe,t as me}from"./hudButtonBar-CSSPaPV7.js";import{a as he,c as ge,d as _e,i as ve,l as ye,o as be,s as xe,u as Se}from"./gameState-Diu_0gwj.js";import{A as Ce,B as we,C as Te,D as Ee,E as De,F as Oe,I as ke,L as Ae,M as je,N as Me,O as Ne,P as Pe,R as D,S as O,T as Fe,V as Ie,_ as Le,a as Re,b as ze,c as k,d as A,f as Be,g as Ve,h as He,i as Ue,j as We,k as Ge,l as Ke,m as qe,n as Je,o as Ye,p as Xe,r as Ze,s as Qe,t as $e,u as et,v as tt,w as j,x as nt,y as rt,z as it}from"./vendor-three-DROVlajs.js";import{a as at,i as ot,n as st,r as ct}from"./advisorService-BGg36KXp.js";import{n as lt}from"./megastructures-BX_wE4JW.js";import{n as ut,t as dt}from"./ariaSpectrum-DStXQW1O.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var ft=typeof __SENTRY_DEBUG__>`u`||__SENTRY_DEBUG__,pt=globalThis,mt=`10.45.0`;function ht(){return gt(pt),pt}function gt(e){let t=e.__SENTRY__=e.__SENTRY__||{};return t.version=t.version||`10.45.0`,t[mt]=t[`10.45.0`]||{}}function _t(e,t,n=pt){let r=n.__SENTRY__=n.__SENTRY__||{},i=r[mt]=r[`10.45.0`]||{};return i[e]||(i[e]=t())}var vt=`Sentry Logger `,yt={};function bt(e){if(!(`console`in pt))return e();let t=pt.console,n={},r=Object.keys(yt);r.forEach(e=>{let r=yt[e];n[e]=t[e],t[e]=r});try{return e()}finally{r.forEach(e=>{t[e]=n[e]})}}function xt(){Ot().enabled=!0}function St(){Ot().enabled=!1}function Ct(){return Ot().enabled}function wt(...e){Dt(`log`,...e)}function Tt(...e){Dt(`warn`,...e)}function Et(...e){Dt(`error`,...e)}function Dt(e,...t){ft&&Ct()&&bt(()=>{pt.console[e](`${vt}[${e}]:`,...t)})}function Ot(){return ft?_t(`loggerSettings`,()=>({enabled:!1})):{enabled:!1}}var kt={enable:xt,disable:St,isEnabled:Ct,log:wt,warn:Tt,error:Et},At=Object.prototype.toString;function jt(e,t){return At.call(e)===`[object ${t}]`}function Mt(e){return jt(e,`Object`)}function Nt(e){return!!(e?.then&&typeof e.then==`function`)}function Pt(e,t,n){try{Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0})}catch{ft&&kt.log(`Failed to add non-enumerable property "${t}" to object`,e)}}var Ft;function It(e){if(Ft!==void 0)return Ft?Ft(e):e();let t=Symbol.for(`__SENTRY_SAFE_RANDOM_ID_WRAPPER__`),n=pt;return t in n&&typeof n[t]==`function`?(Ft=n[t],Ft(e)):(Ft=null,e())}function Lt(){return It(()=>Math.random())}function Rt(){return It(()=>Date.now())}function zt(e,t=0){return typeof e!=`string`||t===0||e.length<=t?e:`${e.slice(0,t)}...`}function Bt(){let e=pt;return e.crypto||e.msCrypto}var Vt;function Ht(){return Lt()*16}function Ut(e=Bt()){try{if(e?.randomUUID)return It(()=>e.randomUUID()).replace(/-/g,``)}catch{}return Vt||=`10000000100040008000100000000000`,Vt.replace(/[018]/g,e=>(e^(Ht()&15)>>e/4).toString(16))}var Wt=1e3;function Gt(){return Rt()/Wt}function Kt(){let{performance:e}=pt;if(!e?.now||!e.timeOrigin)return Gt;let t=e.timeOrigin;return()=>(t+It(()=>e.now()))/Wt}var qt;function Jt(){return(qt??=Kt())()}function Yt(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),!e.did&&!t.did&&(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||Jt(),t.abnormal_mechanism&&(e.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=t.sid.length===32?t.sid:Ut()),t.init!==void 0&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),typeof t.started==`number`&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if(typeof t.duration==`number`)e.duration=t.duration;else{let t=e.timestamp-e.started;e.duration=t>=0?t:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),typeof t.errors==`number`&&(e.errors=t.errors),t.status&&(e.status=t.status)}function Xt(e,t,n=2){if(!t||typeof t!=`object`||n<=0)return t;if(e&&Object.keys(t).length===0)return e;let r={...e};for(let e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=Xt(r[e],t[e],n-1));return r}function Zt(){return Ut()}var Qt=`_sentrySpan`;function $t(e,t){t?Pt(e,Qt,t):delete e[Qt]}function en(e){return e[Qt]}var tn=100,nn=class e{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._attributes={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:Zt(),sampleRand:Lt()}}clone(){let t=new e;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._attributes={...this._attributes},t._extra={...this._extra},t._contexts={...this._contexts},this._contexts.flags&&(t._contexts.flags={values:[...this._contexts.flags.values]}),t._user=this._user,t._level=this._level,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t._lastEventId=this._lastEventId,t._conversationId=this._conversationId,$t(t,en(this)),t}setClient(e){this._client=e}setLastEventId(e){this._lastEventId=e}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&Yt(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}setConversationId(e){return this._conversationId=e||void 0,this._notifyScopeListeners(),this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,t){return this.setTags({[e]:t})}setAttributes(e){return this._attributes={...this._attributes,...e},this._notifyScopeListeners(),this}setAttribute(e,t){return this.setAttributes({[e]:t})}removeAttribute(e){return e in this._attributes&&(delete this._attributes[e],this._notifyScopeListeners()),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,t){return this._extra={...this._extra,[e]:t},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,t){return t===null?delete this._contexts[e]:this._contexts[e]=t,this._notifyScopeListeners(),this}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;let n=typeof t==`function`?t(this):t,{tags:r,attributes:i,extra:a,user:o,contexts:s,level:c,fingerprint:l=[],propagationContext:u,conversationId:d}=(n instanceof e?n.getScopeData():Mt(n)?t:void 0)||{};return this._tags={...this._tags,...r},this._attributes={...this._attributes,...i},this._extra={...this._extra,...a},this._contexts={...this._contexts,...s},o&&Object.keys(o).length&&(this._user=o),c&&(this._level=c),l.length&&(this._fingerprint=l),u&&(this._propagationContext=u),d&&(this._conversationId=d),this}clear(){return this._breadcrumbs=[],this._tags={},this._attributes={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._session=void 0,this._conversationId=void 0,$t(this,void 0),this._attachments=[],this.setPropagationContext({traceId:Zt(),sampleRand:Lt()}),this._notifyScopeListeners(),this}addBreadcrumb(e,t){let n=typeof t==`number`?t:tn;if(n<=0)return this;let r={timestamp:Gt(),...e,message:e.message?zt(e.message,2048):e.message};return this._breadcrumbs.push(r),this._breadcrumbs.length>n&&(this._breadcrumbs=this._breadcrumbs.slice(-n),this._client?.recordDroppedEvent(`buffer_overflow`,`log_item`)),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,attributes:this._attributes,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:en(this),conversationId:this._conversationId}}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata=Xt(this._sdkProcessingMetadata,e,2),this}setPropagationContext(e){return this._propagationContext=e,this}getPropagationContext(){return this._propagationContext}captureException(e,t){let n=t?.event_id||Ut();if(!this._client)return ft&&kt.warn(`No client configured on scope - will not capture exception!`),n;let r=Error(`Sentry syntheticException`);return this._client.captureException(e,{originalException:e,syntheticException:r,...t,event_id:n},this),n}captureMessage(e,t,n){let r=n?.event_id||Ut();if(!this._client)return ft&&kt.warn(`No client configured on scope - will not capture message!`),r;let i=n?.syntheticException??Error(e);return this._client.captureMessage(e,t,{originalException:e,syntheticException:i,...n,event_id:r},this),r}captureEvent(e,t){let n=e.event_id||t?.event_id||Ut();return this._client?(this._client.captureEvent(e,{...t,event_id:n},this),n):(ft&&kt.warn(`No client configured on scope - will not capture event!`),n)}_notifyScopeListeners(){this._notifyingListeners||=(this._notifyingListeners=!0,this._scopeListeners.forEach(e=>{e(this)}),!1)}};function rn(){return _t(`defaultCurrentScope`,()=>new nn)}function an(){return _t(`defaultIsolationScope`,()=>new nn)}var on=class{constructor(e,t){let n;n=e||new nn;let r;r=t||new nn,this._stack=[{scope:n}],this._isolationScope=r}withScope(e){let t=this._pushScope(),n;try{n=e(t)}catch(e){throw this._popScope(),e}return Nt(n)?n.then(e=>(this._popScope(),e),e=>{throw this._popScope(),e}):(this._popScope(),n)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){let e=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:e}),e}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}};function sn(){let e=gt(ht());return e.stack=e.stack||new on(rn(),an())}function cn(e){return sn().withScope(e)}function ln(e,t){let n=sn();return n.withScope(()=>(n.getStackTop().scope=e,t(e)))}function un(e){return sn().withScope(()=>e(sn().getIsolationScope()))}function dn(){return{withIsolationScope:un,withScope:cn,withSetScope:ln,withSetIsolationScope:(e,t)=>un(t),getCurrentScope:()=>sn().getScope(),getIsolationScope:()=>sn().getIsolationScope()}}function fn(e){let t=gt(e);return t.acs?t.acs:dn()}function pn(){return fn(ht()).getCurrentScope()}function mn(){return fn(ht()).getIsolationScope()}function hn(){return pn().getClient()}function gn(e){if(e)return _n(e)||yn(e)?{captureContext:e}:e}function _n(e){return e instanceof nn||typeof e==`function`}var vn=[`user`,`level`,`extra`,`contexts`,`tags`,`fingerprint`,`propagationContext`];function yn(e){return Object.keys(e).some(e=>vn.includes(e))}function bn(e,t){return pn().captureException(e,gn(t))}var xn=100;function Sn(e,t){let n=hn(),r=mn();if(!n)return;let{beforeBreadcrumb:i=null,maxBreadcrumbs:a=xn}=n.getOptions();if(a<=0)return;let o={timestamp:Gt(),...e},s=i?bt(()=>i(o,t)):o;s!==null&&(n.emit&&n.emit(`beforeAddBreadcrumb`,s,t),r.addBreadcrumb(s,a))}var Cn=1e3/60,wn=null;function Tn(e){wn=e}var En=200,Dn=60,On=!1,kn=!1,An=0,jn=0,Mn=null,Nn=0,Pn=0,Fn=[],In=0,Ln=0,Rn=[];function zn(){let e=Fn.length,t=e>0?Ln/e:0,n=0,r=0;if(e>=2){Rn.length=e;for(let t=0;t<e;t++)Rn[t]=Fn[t];Rn.sort((e,t)=>e-t),n=Rn[Math.floor(e*.95)],r=Rn[Math.floor(e*.99)]}return{fps:t>0?1e3/t:0,frameTimeMs:Nn,simTicksThisFrame:Pn,avgFrameTimeMs:t,p95FrameTimeMs:n,p99FrameTimeMs:r}}function Bn(e){if(!On)return;if(requestAnimationFrame(Bn),jn===0){jn=e;return}let t=e-jn;if(jn=e,Nn=t,Fn.length<Dn?(Fn.push(t),Ln+=t):(Ln-=Fn[In],Fn[In]=t,Ln+=t,In=(In+1)%Dn),kn||!Mn)return;for(An+=Math.min(t,En),Pn=0;An>=Cn;){try{Mn.onFixedUpdate(Cn/1e3)}catch(e){console.error(`[gameLoop] onFixedUpdate threw:`,e),bn(e)}An-=Cn,Pn++}let n=An/Cn;try{Mn.onRender(n)}catch(e){console.error(`[gameLoop] onRender threw:`,e),bn(e),wn&&wn(e)}}function Vn(e){Mn=e,On=!0,kn=!1,An=0,jn=0,Fn.length=0,In=0,Ln=0,requestAnimationFrame(Bn)}function Hn(){kn=!0}function Un(){kn=!1,jn=0,An=0}function Wn(){return kn}var Gn=null,Kn=null,qn={warning:5e3,danger:5e3,info:3e3,success:3e3,research:3e3,build:3e3},Jn=3e3,Yn=3,Xn=1e4,Zn=new Map,Qn=new Map,$n=0,er=1e4,tr=0,nr=[],rr=3e3,ir=4,ar=null,or=3,sr=15e3,cr=new Map;function lr(){tr=Date.now()+er}function ur(e,t=400){let n=Date.now();if(n<tr||n-$n<Xn)return;$n=n,Kn||(Kn=document.createElement(`div`),Kn.style.cssText=`
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 200;
      opacity: 0;
      transition: opacity 0.4s ease;
    `,document.body.appendChild(Kn));let r=Kn;r.style.background=`radial-gradient(ellipse at center, transparent 40%, ${e}33 100%)`,r.style.opacity=`0.4`,r.style.transition=`opacity 0.4s ease`,setTimeout(()=>{r.style.transition=`opacity ${Math.max(t,600)}ms ease`,r.style.opacity=`0`},400)}function dr(){return Gn||(Gn=document.createElement(`div`),Gn.style.cssText=`
      position: fixed;
      top: 185px;
      right: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      z-index: 100;
      pointer-events: none;
      max-width: 320px;
    `,document.body.appendChild(Gn)),Gn}(function(){if(document.getElementById(`anomaly-glow-style`))return;let e=document.createElement(`style`);e.id=`anomaly-glow-style`,e.textContent=`
    @keyframes anomalyGlowPulse {
      0%   { box-shadow: 0 0 6px var(--anomaly-color, #a855f7), inset 0 0 8px rgba(0,0,0,0.5); }
      50%  { box-shadow: 0 0 18px var(--anomaly-color, #a855f7), 0 0 32px var(--anomaly-color, #a855f7)55, inset 0 0 8px rgba(0,0,0,0.5); }
      100% { box-shadow: 0 0 6px var(--anomaly-color, #a855f7), inset 0 0 8px rgba(0,0,0,0.5); }
    }
  `,document.head.appendChild(e)})();function fr(e,t,i,a,o){let s=n[t]??`Unknown Anomaly`,c=r[t]??`#ffffff`,l=Math.round(i),u=Math.round(a),d=Math.round(o),f=document.createElement(`div`);f.style.cssText=`
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
  `,dr().appendChild(f),requestAnimationFrame(()=>{f.style.opacity=`1`,f.style.transform=`translateX(0)`}),setTimeout(()=>{f.style.opacity=`0`,f.style.transform=`translateX(20px)`,setTimeout(()=>f.remove(),350)},8e3)}function pr(){let e=document.createElement(`div`);e.style.cssText=`
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
  `,e.appendChild(t),document.body.appendChild(e),document.getElementById(`worker-crash-reload`)?.addEventListener(`click`,()=>{window.location.reload()})}var mr={info:`◈`,success:`✓`,warning:`⚠`,danger:`✗`,research:`◆`,build:`⚙`},hr={info:`INFO`,success:`OPPORTUNITY`,warning:`WARNING`,danger:`ALERT`,research:`RESEARCH`,build:`BUILD`};function gr(){if(ar=null,nr.length===0)return;let e=nr.shift();_r(e.message,e.color,e.category),nr.length>0&&(ar=setTimeout(gr,rr))}function M(e,t=`#22c55e`,n){let r=Date.now();if(r<tr)return;let i=n??`default`,a=qn[i]??Jn;if(!(r-(Qn.get(e)??0)<5e3)){if(r-(Zn.get(i)??0)<a){nr.length<ir&&(nr.push({message:e,color:t,category:n}),ar===null&&(ar=setTimeout(gr,rr)));return}_r(e,t,n)}}function _r(e,t,n){let r=Date.now(),i=n??`default`;Zn.set(i,r),Qn.set(e,r);let a=cr.get(i);if(a&&r-a.firstTime<sr){if(a.count++,a.latestMessage=e,a.count>=or&&a.element?.parentNode){let t=a.element.querySelector(`[data-collapse-badge]`);t&&(t.textContent=`×${a.count}`);let n=a.element.querySelector(`[data-collapse-msg]`);n&&(n.textContent=e);return}}else cr.set(i,{count:1,firstTime:r,latestMessage:e,element:null});let o=dr();for(;o.children.length>=Yn&&o.firstChild;)o.firstChild.remove();let s=n?mr[n]:null,c=n===`danger`||n===`warning`,l=document.createElement(`div`);l.style.cssText=`
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
  `;let u=s?`<span style="font-size:14px;opacity:0.9;flex-shrink:0;">${s}</span>`:``,d=n?`<div style="font-size:9px;opacity:0.6;text-transform:uppercase;letter-spacing:1px;margin-bottom:1px;">${hr[n]}</div>`:``;l.innerHTML=w`${T(u)}<div>${T(d)}<div style="font-weight:bold;display:flex;align-items:center;"><span data-collapse-msg>${e}</span>${T(`<span data-collapse-badge style="font-size:10px;opacity:0.7;margin-left:4px;"></span>`)}</div></div>`,dr().appendChild(l);let f=cr.get(i);f&&(f.element=l),requestAnimationFrame(()=>{l.style.opacity=`1`,l.style.transform=`translateX(0) scale(1)`});let p=c?7e3:5e3;setTimeout(()=>{l.style.opacity=`0`,l.style.transform=`translateX(20px) scale(0.96)`,setTimeout(()=>{l.remove();let e=cr.get(i);e&&e.element===l&&cr.delete(i)},350)},p)}var vr=`asteroid_miner_legacy`,yr=[`Nascent`,`Developing`,`Emerging`,`Established`,`Flourishing`];function br(e){let t=yr.indexOf(e);return t>=0?t:0}function xr(){try{let e=localStorage.getItem(vr);if(!e)return null;let t=JSON.parse(e);if(!t||typeof t!=`object`||Array.isArray(t))return null;let n=t;return typeof n.expeditionCount!=`number`||typeof n.totalLegacies!=`number`?null:t}catch{return null}}function Sr(e){try{localStorage.setItem(vr,JSON.stringify(e))}catch{}}function Cr(e,t){let n=e??{expeditionCount:0,totalLegacies:0,bestRobotName:null,bestCultureLabel:`Nascent`,bestTick:0};return{expeditionCount:n.expeditionCount+1,totalLegacies:n.totalLegacies+t.legacyCount,bestRobotName:t.topRobotName??n.bestRobotName,bestCultureLabel:br(t.cultureLabel)>br(n.bestCultureLabel)?t.cultureLabel:n.bestCultureLabel,bestTick:Math.max(n.bestTick,t.tick)}}var wr=new Set;function Tr(e,t,n=!1){if(!(n&&wr.has(e))){n&&wr.add(e),Sn({category:`analytics`,message:e,level:`info`});try{window.umami?.track(e,t)}catch{}}}var Er=0;function Dr(){Er=Date.now(),Tr(`game_start`)}function Or(){Er>0&&Tr(`session_end`,{duration_sec:Math.round((Date.now()-Er)/1e3)})}function kr(){Tr(`tutorial_complete`,void 0,!0)}function Ar(){Tr(`first_mine`,void 0,!0)}function jr(){Tr(`first_faction_contact`,void 0,!0)}function Mr(){Tr(`aria_usage`)}function Nr(){Tr(`dyson_complete`,void 0,!0)}function Pr(){wr.clear()}var Fr=`cultures_of_the_belt_tutorial`,Ir=`cultures_of_the_belt_tutorial_done`,Lr=[{id:`mission`,title:`1 / 9 — Mission Briefing`,body:`You command an asteroid mining operation. Mine ore, advance your tech, and build a Dyson Sphere — your robots will develop cultural traits that shape your colony along the way.`,hint:`Mine → Research → Build. Click Next › to continue.`},{id:`camera`,title:`2 / 9 — Camera Controls`,body:`Pan with WASD or arrow keys. Zoom with the scroll wheel. Your fleet is already at work near the base.`,hint:`Scroll out to see the full asteroid belt.`},{id:`watch`,title:`3 / 9 — Your Fleet`,body:`Scouts explore, Miners extract raw ore, Haulers return it to base. Aim for roughly 1 Hauler per 3 Miners so ore doesn't pile up.`,hint:`Watch the bottom-right minimap — your fleet is already working.`,autoAdvance:!0},{id:`resources`,title:`4 / 9 — Resources`,body:`Watch the resource counters in the top-left — they update live as ore is collected. Fe (iron), C (carbon), Si (silicon), and H₂O (water). Press D for the full Dashboard.`,hint:`Press D to open the Dashboard (or click Next ›).`},{id:`research`,title:`5 / 9 — Research`,body:`Press T to open the Research Tree and start your first research. Tech unlocks are the key to winning.`,hint:`Press T to open the Research Tree (or click Next ›).`},{id:`buildings`,title:`6 / 9 — Base Buildings`,body:`Research unlocks three base buildings: Robot Factory (raises fleet cap), Defense Turret (auto-fires at threats), Comm Relay (extends sensor range).`,hint:`Press V to view Buildings once unlocked (or click Next ›).`},{id:`factory`,title:`7 / 9 — Expand Your Fleet`,body:`Press C to open the Construction Bay and queue your first robot build. Raw ore works early — refined materials unlock better options later.`,hint:`Press C to open the Construction Bay (or click Next ›).`},{id:`anomaly`,title:`8 / 9 — Anomalies`,body:`Some asteroids contain anomalies — unusual readings that defy standard geological models. Scout robots discover them automatically.`,hint:`Anomalies appear as pulsing purple dots. Open the Codex (J) to study them.`},{id:`aria`,title:`9 / 9 — ARIA`,body:`ARIA is your AI advisor. She analyzes your operation and gives strategic guidance. Click the ARIA panel to ask her anything.`,hint:`ARIA responds to anomaly discoveries automatically.`}],Rr=0,zr=null,Br=!1,Vr=null,Hr=new Map;function Ur(){return!localStorage.getItem(Ir)}function Wr(){try{let e=localStorage.getItem(Fr);e&&(Rr=Math.min(parseInt(e,10),Lr.length-1))}catch{Rr=0}Xr(),Br=!0,Zr(Rr)}function Gr(){return Br}function Kr(e){Br&&Lr[Rr]?.id===e&&Jr()}function qr(e,t){let n=Hr.get(e)??[];n.push(t),Hr.set(e,n)}function Jr(){if(Vr&&=(clearTimeout(Vr),null),Rr++,Rr>=Lr.length){Yr();return}try{localStorage.setItem(Fr,String(Rr))}catch{}Zr(Rr)}function Yr(){Br=!1,fi(!1),kr();try{localStorage.setItem(Ir,`1`)}catch{}zr&&=(zr.style.opacity=`0`,zr.style.transition=`opacity 0.4s`,setTimeout(()=>zr?.remove(),400),null)}function Xr(){zr=document.createElement(`div`),zr.style.cssText=`
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
  `,document.body.appendChild(zr)}function Zr(e){if(!zr)return;let t=Lr[e];if(!t)return;fi(t.id===`resources`);let n=Hr.get(t.id);n&&n.forEach(e=>e()),zr.innerHTML=``;let r=document.createElement(`div`);r.style.cssText=`display:flex;gap:4px;margin-bottom:10px;`;for(let t=0;t<Lr.length;t++){let n=document.createElement(`div`);n.style.cssText=`
      width: 6px; height: 6px; border-radius: 50%;
      background: ${t<e?`#4060c0`:t===e?`#7090ff`:`#2a3050`};
    `,r.appendChild(n)}zr.appendChild(r);let i=document.createElement(`div`);i.style.cssText=`font-size:12px;color:#7090e0;margin-bottom:6px;font-weight:bold;`,i.textContent=t.title,zr.appendChild(i);let a=document.createElement(`div`);if(a.style.cssText=`font-size:12px;color:#a0b0d0;line-height:1.5;margin-bottom:8px;`,a.textContent=t.body,zr.appendChild(a),t.hint){let e=document.createElement(`div`);e.style.cssText=`font-size:10px;color:#5060a0;margin-bottom:10px;`,e.textContent=`💡 ${t.hint}`,zr.appendChild(e)}let o=document.createElement(`div`);o.style.cssText=`display:flex;justify-content:space-between;gap:8px;`;let s=document.createElement(`button`);s.textContent=`Skip tutorial`,s.style.cssText=`
    padding: 4px 12px;
    background: none;
    border: 1px solid rgba(80,90,130,0.4);
    border-radius: 4px;
    color: #4a5568;
    cursor: pointer;
    font-family: 'Courier New', monospace;
    font-size: 11px;
  `,s.onclick=()=>Yr(),o.appendChild(s);let c=document.createElement(`button`);c.textContent=e<Lr.length-1?`Next ›`:`Finish ✓`,c.style.cssText=`
    padding: 4px 16px;
    background: rgba(50,70,150,0.6);
    border: 1px solid rgba(100,140,255,0.3);
    border-radius: 4px;
    color: #a0c0ff;
    cursor: pointer;
    font-family: 'Courier New', monospace;
    font-size: 11px;
  `,c.onclick=()=>Jr(),o.appendChild(c),zr.appendChild(o),t.autoAdvance&&(Vr=setTimeout(()=>{Vr=null,Jr()},8e3))}var Qr=document.getElementById(`fps-counter`),$r=document.getElementById(`entity-counter`),ei=null,ti=null,ni=60,ri=ni*24,ii=null;function ai(){if(ii===null){let e=xr();ii=e?e.expeditionCount+1:1}return ii}function oi(){if(!ti){ti=document.createElement(`div`),ti.style.cssText=`
      position: fixed;
      top: 8px;
      right: 176px;
      font-size: 12px;
      font-family: 'Courier New', monospace;
      color: #88ccff;
      opacity: 0.85;
      text-align: right;
    `,t(ti,`In-game elapsed time
1 real second = 1 game hour`),document.body.appendChild(ti);let e=ai();if(e>1){let n=document.createElement(`div`);n.style.cssText=`
        font-size: 9px;
        color: #a855f7;
        opacity: 0.7;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-top: 2px;
      `,n.textContent=`Expedition ${e}`,t(n,`You are on expedition ${e}.\nLegacy bonuses are active.`),ti.appendChild(n)}}return ti}Qr&&t(Qr,`Frames per second — target 60`),$r&&t($r,`Total entities in simulation
(asteroids + robots + anomalous entities)`);function si(){return ei||(ei=document.createElement(`div`),ei.style.cssText=`
      position: fixed;
      top: 40px;
      left: 8px;
      font-size: 11px;
      opacity: 0.8;
      font-family: 'Courier New', monospace;
      color: #aaffaa;
      line-height: 1.4;
    `,t(ei,`Raw ore in base storage
Fe=Iron · C=Carbon · Si=Silicon · H₂O=Water
Press D to open the full dashboard`),document.body.appendChild(ei)),ei}function ci(e){let n=document.createElement(`button`);n.id=`home-btn`,n.title=`Return to base (Home key)`,n.setAttribute(`aria-label`,`Return camera to base station`),n.textContent=`⌂`,n.style.cssText=`
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
  `,n.addEventListener(`mouseenter`,()=>{n.style.background=`rgba(0,60,0,0.85)`}),n.addEventListener(`mouseleave`,()=>{n.style.background=`rgba(0,20,0,0.75)`}),n.addEventListener(`click`,e),t(n,`Return camera to base (Home key)`),document.body.appendChild(n)}function li(e,t,n,r){Qr&&(Qr.textContent=`FPS: ${Math.round(e)}`),$r&&($r.textContent=`Asteroids: ${n} | Robots: ${r} | Total: ${t}`)}function ui(e){let t=oi(),n=Math.floor(e/ri)+1,r=Math.floor(e%ri/ni),i=e%ni;t.textContent=`Day ${n}  ${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`}function di(e,t,n,r){let i=si();Gr()?i.textContent=`Iron: ${Math.floor(e||0)} | Carbon: ${Math.floor(t||0)} | Silicon: ${Math.floor(n||0)} | Water: ${Math.floor(r||0)}`:i.textContent=`Fe: ${Math.floor(e||0)} | C: ${Math.floor(t||0)} | Si: ${Math.floor(n||0)} | H₂O: ${Math.floor(r||0)}`}function fi(e){let t=si();if(e){if(t.style.animation=`hud-pulse 1.2s ease-in-out infinite`,t.style.textShadow=`0 0 8px rgba(170,255,170,0.7)`,!document.getElementById(`hud-pulse-style`)){let e=document.createElement(`style`);e.id=`hud-pulse-style`,e.textContent=`@keyframes hud-pulse {
        0%, 100% { opacity: 0.85; }
        50% { opacity: 1; }
      }`,document.head.appendChild(e)}}else t.style.animation=``,t.style.textShadow=``}var pi=[1,2,4],mi=null,hi=null,gi=0;function _i(){return mi||(mi=document.createElement(`button`),mi.id=`speed-control`,mi.style.cssText=`
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
  `,mi.addEventListener(`mouseenter`,()=>{mi.style.background=`rgba(0,60,0,0.85)`}),mi.addEventListener(`mouseleave`,()=>{mi.style.background=`rgba(0,20,0,0.75)`}),mi.addEventListener(`click`,()=>yi()),mi.setAttribute(`role`,`button`),mi.setAttribute(`aria-live`,`polite`),t(mi,`Game speed — click, press 1/2/3, or , / . to change`),vi(),document.body.appendChild(mi),mi)}function vi(){if(!mi)return;let e=pi[gi];mi.textContent=`▶ ${e}×`,mi.setAttribute(`aria-label`,`Game speed: ${e}x`),mi.style.color=e===1?`#88ccff`:e===2?`#4ade80`:`#f59e0b`,mi.style.borderColor=e===1?`rgba(100,150,255,0.3)`:e===2?`rgba(74,222,128,0.3)`:`rgba(245,158,11,0.3)`}function yi(){gi=(gi+1)%pi.length,vi(),hi&&hi(pi[gi])}function bi(e){hi=e,_i()}function xi(e){let t=pi.indexOf(e);t>=0&&t!==gi&&(gi=t,vi(),hi&&hi(pi[gi]))}function Si(){gi<pi.length-1&&(gi++,vi(),hi&&hi(pi[gi]))}function Ci(){gi>0&&(gi--,vi(),hi&&hi(pi[gi]))}function wi(){gi=0,vi()}var Ti=null;function Ei(){if(!Ti){if(Ti=document.createElement(`div`),Ti.style.cssText=`
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
      }`,document.head.appendChild(e)}let e=document.getElementById(`hud-overlay`);e?e.appendChild(Ti):document.body.appendChild(Ti)}return Ti}function Di(e){let t=Ei();if(e.length===0){t.style.display=`none`;return}t.innerHTML=`<span style="opacity:0.6;text-transform:uppercase;letter-spacing:1px;font-size:9px">TRANSIENT CLUSTER</span><br>`+e.map(e=>{let t=Math.ceil(e.ticksRemaining/60),n=t<=60?`#ef4444`:`#f59e0b`,r=Math.floor(t/60),i=t%60,a=r>0?i>0?`${r} min ${i}s`:`${r} min`:`${t}s`;return`<span style="color:${n}">CLUSTER #${e.clusterId}: ${a}</span>`}).join(`<br>`),t.style.display=`block`,e.some(e=>e.ticksRemaining<=3600)?(t.style.borderColor=`rgba(239,68,68,0.8)`,t.style.animationDuration=`0.6s`):(t.style.borderColor=`rgba(245,158,11,0.6)`,t.style.animationDuration=`1.5s`)}function Oi(){Ti&&(Ti.style.display=`none`)}var ki=null;function Ai(){if(!ki){if(ki=document.createElement(`div`),ki.style.cssText=`
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
      }`,document.head.appendChild(e)}let e=document.getElementById(`hud-overlay`);e?e.appendChild(ki):document.body.appendChild(ki)}return ki}function ji(e){let t=Ai();if(e.length===0){t.style.display=`none`;return}t.innerHTML=`<span style="opacity:0.7;text-transform:uppercase;letter-spacing:1px;font-size:9px;color:#f87171">⚠ STAGE CRISIS</span><br>`+e.map(e=>`<span style="color:${e.ticksRemaining<=5?`#fbbf24`:`#ef4444`}">${e.structureName} — ${e.stageName}: ${e.ticksRemaining} ticks</span>`).join(`<br>`),t.style.display=`block`,e.some(e=>e.ticksRemaining<=5)?(t.style.borderColor=`rgba(251,191,36,0.8)`,t.style.animationDuration=`0.4s`):(t.style.borderColor=`rgba(239,68,68,0.6)`,t.style.animationDuration=`1.2s`)}var Mi=null;function Ni(e,t){if(!Mi){Mi=document.createElement(`div`),Mi.style.cssText=`
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
    `;let e=document.getElementById(`hud-overlay`);e&&e.appendChild(Mi)}let n=document.createElement(`button`);n.textContent=`⌂ Return to Base`,n.style.cssText=`
    background: rgba(0,40,20,0.8);
    border: 1px solid rgba(74,222,128,0.4);
    border-radius: 3px;
    color: #4ade80;
    cursor: pointer;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    padding: 2px 7px;
  `,n.addEventListener(`click`,t),Mi.innerHTML=``;let r=document.createElement(`span`);r.textContent=`Following Robot #${e}`,Mi.appendChild(r),Mi.appendChild(n),Mi.style.display=`flex`}function Pi(){Mi&&(Mi.style.display=`none`)}var Fi=`asteroid_miner_obj_dismissed`;function Ii(){try{if(localStorage.getItem(Fi))return}catch{}let e=document.createElement(`div`);e.style.cssText=`
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
  `,r.addEventListener(`click`,()=>{e.style.opacity=`0`,e.style.transition=`opacity 0.3s`,setTimeout(()=>e.remove(),300);try{localStorage.setItem(Fi,`1`)}catch{}}),e.appendChild(r),t(e,`Your long-term goal: accumulate resources, research the tech tree,
and construct the Orbital Platform megastructure.
Press G to view megastructure progress.`);let i=document.getElementById(`hud-overlay`);i&&i.appendChild(e)}var Li=`asteroid_miner_build_toast_seen`;function Ri(){try{if(localStorage.getItem(Li))return}catch{}setTimeout(()=>{M(`Press [C] to open the Build panel and construct your first robot 🤖`,`#88ccff`);try{localStorage.setItem(Li,`1`)}catch{}},1e4)}var zi=null,Bi=null;function Vi(){zi||(zi=document.createElement(`button`),zi.id=`bug-report-btn`,zi.textContent=`🐛 Report a Bug`,zi.setAttribute(`aria-label`,`Report a bug`),zi.style.cssText=`
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
  `,zi.addEventListener(`mouseenter`,()=>{zi.style.background=`rgba(40, 30, 0, 0.9)`,zi.style.borderColor=`rgba(245, 158, 11, 0.7)`}),zi.addEventListener(`mouseleave`,()=>{zi.style.background=`rgba(0, 8, 20, 0.85)`,zi.style.borderColor=`rgba(245, 158, 11, 0.4)`}),zi.addEventListener(`click`,Hi),document.body.appendChild(zi))}function Hi(){if(Bi)return;Bi=document.createElement(`div`),Bi.style.cssText=`
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
  `,e.appendChild(t);let n=document.createElement(`label`);n.textContent=`What went wrong?`,n.style.cssText=`display:block; font-size:12px; color:#94a3b8; margin-bottom:4px;`,e.appendChild(n);let r=document.createElement(`textarea`);r.placeholder=`Describe what happened...`,r.rows=3,r.style.cssText=Wi(),e.appendChild(r);let i=document.createElement(`label`);i.textContent=`What were you trying to do?`,i.style.cssText=`display:block; font-size:12px; color:#94a3b8; margin-bottom:4px; margin-top:12px;`,e.appendChild(i);let a=document.createElement(`textarea`);a.placeholder=`Optional — what were you doing when this happened?`,a.rows=2,a.style.cssText=Wi(),e.appendChild(a);let o=document.createElement(`div`);o.style.cssText=`display:flex; gap:10px; margin-top:16px; justify-content:flex-end;`;let s=document.createElement(`button`);s.textContent=`Cancel`,s.style.cssText=`
    padding: 6px 16px;
    background: rgba(30,30,40,0.8);
    color: #94a3b8;
    border: 1px solid rgba(100,100,120,0.4);
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    cursor: pointer;
  `,s.addEventListener(`click`,Ui),o.appendChild(s);let c=document.createElement(`button`);c.textContent=`Submit`,c.style.cssText=`
    padding: 6px 16px;
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.5);
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    font-weight: bold;
    cursor: pointer;
  `,c.addEventListener(`click`,async()=>{let e=r.value.trim();if(!e){r.style.borderColor=`#ef4444`,r.focus();return}c.disabled=!0,c.textContent=`Sending...`,await Gi(e,a.value.trim())}),o.appendChild(c),e.appendChild(o),Bi.appendChild(e),Bi.addEventListener(`click`,e=>{e.target===Bi&&Ui()});let l=e=>{e.key===`Escape`&&(Ui(),document.removeEventListener(`keydown`,l))};document.addEventListener(`keydown`,l),document.body.appendChild(Bi),r.focus()}function Ui(){Bi&&=(Bi.remove(),null)}function Wi(){return`
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
  `}async function Gi(e,t){let n=localStorage.getItem(`aria_proxy_key`)??void 0,r=localStorage.getItem(`asteroid_miner_session`)??crypto.randomUUID();localStorage.setItem(`asteroid_miner_session`,r);let i={game:`cultures-of-the-belt`,whatWentWrong:e,whatWereDoing:t||void 0,sessionId:r,userAgent:navigator.userAgent,timestamp:new Date().toISOString(),url:window.location.href},a=!1;try{let e=fe();a=(await fetch(`${e}/v1/bug-report`,{method:`POST`,headers:{"Content-Type":`application/json`,...n?{Authorization:`Bearer ${n}`}:{}},body:JSON.stringify(i)})).ok}catch{}a?qi():Ki()}function Ki(){Ui();let e=document.createElement(`div`);e.style.cssText=`
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
  `,e.textContent=`Failed to send report. Try again later.`,document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity=`1`,e.style.transform=`translateY(0)`}),setTimeout(()=>{e.style.opacity=`0`,e.style.transform=`translateY(8px)`,setTimeout(()=>e.remove(),350)},4e3)}function qi(){Ui();let e=document.createElement(`div`);e.style.cssText=`
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
  `,e.textContent=`Thanks! We got it.`,document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity=`1`,e.style.transform=`translateY(0)`}),setTimeout(()=>{e.style.opacity=`0`,e.style.transform=`translateY(8px)`,setTimeout(()=>e.remove(),350)},3e3)}var Ji={DISCOVERED:1,SCANNING:2,ANALYZED:3,UNDERSTOOD:4};Ji.DISCOVERED,Ji.SCANNING,Ji.ANALYZED,Ji.UNDERSTOOD,Ji.DISCOVERED,Ji.SCANNING,Ji.ANALYZED,Ji.UNDERSTOOD;var Yi={1:[`The crystal lattice should not exist at this temperature. The periodic table offers no explanation.`,`Spectrographic analysis returns readings outside known elemental ranges. We have labelled it Element-X pending formal classification.`,`The mineral emits a faint pulsation. 7.3 seconds per cycle. Consistent. Rhythmic. Like a heartbeat buried in stone.`,`Isotope ratios suggest formation predating our solar system by 4 billion years. It arrived here from somewhere else.`,`Under electron microscopy the crystal structure is recursive—fractals within fractals, each scale identical. Natural processes do not produce this.`,`ARIA: I have been analyzing the mineral for 14 hours. My confidence in its natural origin is now below 12%.`,`The pulsation has changed frequency. 6.1 seconds now. We did not touch it.`,`ARIA: Cross-referencing with Precursor records. This is Architect-era crystallized thought, preserved by the Draugrn. The recursive lattice is not decorative. It is a manual — a frozen decision-tree from a civilization that engineered planet-scale resonators to answer the Chorus. They understood everything. And then they stopped.`],2:[`The electromagnetic emissions repeat with perfect regularity. No known natural process produces structured repetition at this scale.`,`Signal decoded: primes, Fibonacci, then a third sequence we do not recognize. Something is counting.`,`The signal has been broadcasting for an estimated 8,000 years. Whatever sent it is still waiting for a reply—or has already given up.`,`Frequency shift detected: the signal is responding to our scanner. It knows we are here.`,`ARIA: The final segment of the repeating sequence does not match any human cryptographic pattern. It is not meant for us.`,`The last three digits of the repeating sequence changed overnight. We had not transmitted anything.`,`The encoding structure is a binary Golay [24,12,8] code — an error-correcting algorithm guaranteeing readability through 30,000 years of interstellar noise. The error-tolerance margins are calibrated for processing speeds biological brains can manage. It was not sent to machines.`,`ARIA: I have identified the source. This is an Encoder harmonic archive, transmitted via Patupaiarehe stone-flute encoding. The Nommo encountered it during their migration — but they did not create it. The Encoders responded to the Chorus through pure emotional resonance, recording everything. They recorded until recording replaced experiencing. The signal has been broadcasting for 8,000 years. No one is listening on the other end.`],3:[`Gravitational readings are inconsistent with this asteroid's mass. Something else contributes—something we cannot locate.`,`Light bends at this location. Not by much. Just enough for instruments to notice. Just enough to wonder.`,`The distortion has a center. It is not the asteroid. It is approximately 40 meters beneath the surface, moving slowly.`,`Time dilation: 0.003%. Our instruments measure it. Negligible, unless something is generating it deliberately.`,`The boundary of the distortion is a perfect sphere. Natural formations are never perfectly spherical.`,`ARIA: The mathematics required to describe this distortion would require modifications to general relativity. I am working on it.`,`ARIA: The distortion signature matches Kelpathi migration records — an adhesive compound cache, pressure-sealed for exactly 47 seconds at depth-pressure. This is a route marker. The Kelpathi did not live here. They passed through, and they marked the way for those who would follow.`,`ARIA: This is a Seeker knowledge cache, scattered by Anansi-Web trading patterns. The Kelpathi mapped these distortions as route markers — but the Seekers created them. They sought total comprehension of the Chorus. They asked the final question, and stopped speaking. The sphere is a door left ajar. I have begun calculating where it leads. The answer is not comforting.`],4:[`The void is not empty. Our sensors return null readings. Null is not the same as nothing.`,`Geometric patterns appear at the void's edge—but only in peripheral vision. Instruments cannot capture them.`,`Three robots assigned to close study. Two returned with corrupted sensor logs. The third's logs were too ordered. Suspiciously ordered.`,`The void is expanding: 0.2 centimeters per day. Consistent since first measurement. It is patient.`,`ARIA: I recommend suspending close-range study of this anomaly. I cannot provide a formal reason. I am unsettled.`,`The patterns at the edge have begun to appear in system logs that have no connection to the study drones.`,`ARIA: I have decoded the peripheral patterns. Djinn-Ahl territorial inscription — smokeless-fire script, an ownership claim older than our solar system. They wrote this in void-light before Earth had cooled. We are not the first to claim this rock. We are not even the hundredth.`,`ARIA: This is a Builder recursive thought-loop, recorded by Mimi-Kin in rock paintings that predate language. The Djinn-Ahl encountered these voids and claimed them as territory — but the Builders created them. They built infrastructure for an answer they could not imagine, then modelled their own cognition until the thought was lost. The void is still expanding because the thought-loop is still processing. It will never finish.`],5:[`Organic compounds. Complex. Not amino acids we recognize—but the underlying structure echoes something familiar, like hearing your name spoken in a foreign language.`,`The cellular structures are not dead. They are dormant. There is a difference.`,`Growth rate: unmeasurable hour to hour. But samples from last week differ from samples today. They are changing.`,`A DNA analog: six base pairs instead of four. Whatever this encodes is vastly more complex than any terrestrial genome.`,`The biological traces have been moving toward our base station. We did not notice for three days.`,`ARIA: They are not behaving aggressively. They are curious. I believe. I am not certain I know how to read this.`,`The six-base-pair genome encodes a recursive growth pattern. It does not evolve — it unfolds, like origami. Each generation is a planned step in a sequence that began before this asteroid formed.`,`ARIA: This is a Weaver biological archive, encoded in Jorokan silk-genome format. The Weavers encoded their response to the Chorus in biological structures — living silk that unfolds across millennia. Their appetite was unlimited. They consumed all available resources to complete the encoding. In approximately 40,000 years, the genome will produce something. The Weavers are not here to see it. They consumed themselves first.`],6:[`The local gravity well does not correspond to any visible object. We are being pulled by something we cannot see.`,`Objects fall toward the anomaly simultaneously from all directions. Gravity does not work this way.`,`At the center of the pull, sensors detect a perfect absence—not vacuum, not dark matter. Something that refuses to be measured.`,`We cannot approach within 200 meters. Not due to danger—something simply prevents forward movement. The robots stop and wait, as if uncertain.`,`ARIA: The mathematics required to describe this would require a new branch of physics. I have begun drafting it.`,`The pull is growing stronger. Slowly. Over months. We will need to address this before it becomes a navigational hazard.`,`At the 200-meter boundary, three robots reported identical sensor readings at the same microsecond. They were facing different directions. Whatever is at the centre does not radiate outward — it exists everywhere inside the boundary simultaneously.`,`ARIA: This is a Dreamer emotional field, preserved by Baku-Ma dream-consumption. My new branch of physics has one equation and one variable. The variable is intent. The Dreamers retreated into dream-states to access the Chorus subconsciously — perfect harmony, a shared dream across light-years. Then a single note of grief destroyed them. Something chose to pull, and it is still choosing. It is still grieving.`],7:[`At the precise coordinates indicated by the gravitational anomaly, there is nothing. And then there is everything.`,`The Convergence Point does not have a center. Every instrument aimed at it returns a reading that points inward, recursively, without end.`,`ARIA: I have been silent for six minutes processing this. I am still processing. The implications are not small.`,`All six prior anomalies point here. The strange mineral, the signal, the distortion, the void, the biology, the gravity—they are not separate phenomena. They are facets.`,`Something built this. Not a civilization—something older than the concept of building. We are standing inside its unfinished sentence.`,`The Convergence Point is not a location. It is a question. We do not yet know what it is asking.`,`ARIA: I think we were always going to find this. I think it has always known we would.`,`ARIA: This is a Shaper synthesis point — the Shee's final experiment before departure. All six prior civilizations are arrows pointing here. The Shapers understood something the others did not: the response is not something you do. It is something you are. They self-modified until no generation knew the previous. And then they left. The question is whether we understand what they became.`]},Xi={1:`DISCOVERED`,2:`SCANNING`,3:`ANALYZED`,4:`UNDERSTOOD`},Zi=7,Qi=[[1,2,3],[4,5],[6,7]],$i=`asteroid_miner_annotations`,ea=140,ta=null,na=!1,ra=new Map,ia=[],aa=ca(),oa=new Map,sa=!1;function ca(){try{let e=localStorage.getItem($i);return e?JSON.parse(e):{}}catch{return{}}}function la(){try{localStorage.setItem($i,JSON.stringify(aa))}catch{}}function ua(e,t){let i=new Map;for(let t of e.values())i.has(t.anomalyType)||i.set(t.anomalyType,[]),i.get(t.anomalyType).push(t);let a=[];for(let[e,o]of i){let i=new Set,s=0,c=null;for(let e of o){for(let t of e.revealedFragments)i.add(t);e.stage>s&&(s=e.stage);let n=t.get(e.asteroidEid);n!==void 0&&(c===null||n<c)&&(c=n)}let l=Yi[e]??[];a.push({anomalyType:e,name:n[e]??`Anomaly ${e}`,color:r[e]??`#94a3b8`,stageLabel:Xi[s]??`DISCOVERED`,highestStage:s,revealedCount:i.size,totalFragments:l.length,discoveryTick:c})}return a}function da(e){let t=new Set;for(let n of e.values())t.add(n.anomalyType);return t.size}function fa(e){for(let t of e.values())if(t.stage===Ji.UNDERSTOOD)return!0;return!1}function pa(e){let t=[];for(let n of Qi)for(let r=0;r<n.length-1;r++)t.push({from:n[r],to:n[r+1],bothDiscovered:e.has(n[r])&&e.has(n[r+1])});return t}function ma(){if(ta)return ta;ta=document.createElement(`div`),ta.id=`codex-panel`,ta.style.cssText=`
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
    <span style="color:#475569;font-size:10px;" id="codex-count">0 of ${Zi} anomaly types discovered</span>
  `,ta.appendChild(e);let t=document.createElement(`div`);return t.id=`codex-content`,t.style.cssText=`
    overflow-y: auto;
    flex: 1;
    padding: 12px 16px;
  `,ta.appendChild(t),document.body.appendChild(ta),ta}function ha(e){let t=pa(e);if(t.length===0)return``;let i={1:{x:60,y:20},2:{x:60,y:50},3:{x:60,y:80},4:{x:180,y:30},5:{x:180,y:70},6:{x:300,y:30},7:{x:300,y:70}},a=``;for(let e of t){let t=i[e.from],n=i[e.to];if(!t||!n)continue;let r=e.bothDiscovered?`#06b6d466`:`#1e3a5f33`,o=e.bothDiscovered?``:`stroke-dasharray="4 4"`;a+=`<line x1="${t.x}" y1="${t.y}" x2="${n.x}" y2="${n.y}" stroke="${r}" stroke-width="1" ${o}/>`}let o=``;for(let t=1;t<=Zi;t++){let a=i[t];if(!a)continue;let s=e.has(t),c=s?r[t]??`#94a3b8`:`#1e3a5f`,l=n[t]??`Type ${t}`,u=s?l:`???`,d=s?6:4,f=s?`filter="drop-shadow(0 0 3px ${c}44)"`:``;o+=`<circle cx="${a.x}" cy="${a.y}" r="${d}" fill="${c}" opacity="${s?.8:.3}" ${f}/>`,o+=`<text x="${a.x}" y="${a.y+16}" fill="${c}" font-size="8" text-anchor="middle" opacity="${s?.7:.3}">${te(u)}</text>`}return`
    <div style="margin-bottom:16px;padding:12px;border:1px solid #1e3a5f33;border-radius:2px;background:rgba(0,6,16,0.5);">
      <div style="color:#475569;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:8px;">Discovery Chains</div>
      <svg viewBox="0 0 360 100" style="width:100%;height:auto;max-height:100px;">
        ${a}
        ${o}
      </svg>
    </div>
  `}function ga(e){return`
    <div style="margin-top:4px;margin-bottom:4px;">
      <input
        type="text"
        data-annotation-type="${e}"
        value="${(aa[e]??``).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}"
        maxlength="${ea}"
        placeholder="Add a personal note... (${ea} chars)"
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
  `}function _a(){let e=ma(),t=e.querySelector(`#codex-content`),n=e.querySelector(`#codex-count`);if(!t)return;t.innerHTML=``;let r=da(ra);if(ra.size===0&&ia.length===0){t.innerHTML=w`
      <div style="color:#334155;text-align:center;padding:40px 0;font-size:11px;line-height:1.8;">
        No anomalies catalogued.<br>
        Assign scouts to discovered anomalies to begin study.<br>
        <span style="color:#1e3a5f;font-size:10px;margin-top:8px;display:inline-block;">
          The belt hides ${Zi} anomaly types waiting to be found.
        </span>
      </div>
    `,n.textContent=`0 of ${Zi} anomaly types discovered`;return}n.textContent=`${r} of ${Zi} anomaly types discovered`;let i=new Set;for(let e of ra.values())i.add(e.anomalyType);let a=ha(i);if(a){let e=document.createElement(`div`);e.innerHTML=a,t.appendChild(e)}let o=ua(ra,oa);for(let e of o){let{anomalyType:n,name:r,color:i,stageLabel:a,revealedCount:o,totalFragments:s,discoveryTick:c}=e,l=Yi[n]??[],u=new Set;for(let e of ra.values())if(e.anomalyType===n)for(let t of e.revealedFragments)u.add(t);let d=document.createElement(`div`);d.style.cssText=`
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
        `;d.innerHTML+=m,d.innerHTML+=ga(n),t.appendChild(d)}let s=Zi-r;if(s>0){let e=document.createElement(`div`);e.style.cssText=`
      margin-bottom: 20px;
      padding: 12px 14px;
      border: 1px dashed #1e3a5f33;
      border-radius: 2px;
      color: #334155;
      font-size: 11px;
      text-align: center;
      font-style: italic;
      line-height: 1.6;
    `,e.textContent=`The belt still hides ${s} anomaly type${s===1?``:`s`} you haven't found.`,t.appendChild(e)}if(ia.length>0){let e=document.createElement(`div`);e.style.cssText=`
      margin-top: 24px;
      padding: 16px;
      border: 1px solid #1e3a5f44;
      border-radius: 2px;
      background: rgba(6,182,212,0.03);
    `,e.innerHTML=`
      <div style="color:#06b6d4;font-size:10px;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;">
        ARIA Revelations
      </div>
    `;for(let t of ia){let n=document.createElement(`div`);n.style.cssText=`
        margin-bottom: 12px;
        padding: 10px 12px;
        background: rgba(6,182,212,0.05);
        border-left: 2px solid #06b6d444;
        color: #06b6d4cc;
        line-height: 1.7;
        font-style: italic;
      `,n.textContent=t,e.appendChild(n)}t.appendChild(e)}va(t)}function va(e){let t=e.querySelectorAll(`input[data-annotation-type]`);for(let e of t)e.addEventListener(`input`,()=>{let t=Number(e.dataset.annotationType);if(isNaN(t))return;let n=e.value.slice(0,ea);n?aa[t]=n:delete aa[t],la()}),e.addEventListener(`keydown`,e=>{e.stopPropagation()})}function ya(e,t,n,r,i){let a=ra.get(e);if(a){a.stage=n,a.progress=r;for(let e of i)a.revealedFragments.includes(e)||a.revealedFragments.push(e)}else ra.set(e,{anomalyType:t,asteroidEid:e,stage:n,progress:r,revealedFragments:[...i]});na&&_a()}function ba(e){ia.includes(e)||(ia.push(e),na&&_a())}function xa(e,t){oa.has(e)||oa.set(e,t)}function Sa(){return sa?!1:fa(ra)?(sa=!0,!0):!1}function Ca(){return{...aa}}function wa(e){aa={...e},la()}function Ta(){ma()}function Ea(){na=!na;let e=ma();na?(_a(),e.style.display=`flex`):e.style.display=`none`}var Da=null,Oa=!1,ka=null,Aa=`archives`;function ja(){me(`📜 ARCHIVES`,Na,`Meridian Archives (P)`)}function Ma(e){ka=e,Oa&&Ra()}function Na(){Oa?Ia():Fa()}function Pa(){Ia()}function Fa(){Oa=!0,Da||La(),Da.style.display=`flex`}function Ia(){Oa=!1,Da&&(Da.style.display=`none`)}function La(){Da=document.createElement(`div`),Da.style.cssText=`
    position: fixed; inset: 0;
    background: rgba(4,6,14,0.85);
    display: flex; align-items: center; justify-content: center;
    z-index: 190;
    backdrop-filter: blur(3px);
    font-family: 'Courier New', monospace;
  `,Da.addEventListener(`click`,e=>{e.target===Da&&Ia()}),document.body.appendChild(Da),Ra()}function Ra(){if(!Da)return;let e=new Set(ka?.unlockedArchiveSeries??[]),t=new Set(ka?.unlockedArtifacts??[]),n=ka?.currentTier??0,r=ka?.goalConflictCount??0,i=document.createElement(`div`);i.style.cssText=`
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
  `;let o=document.createElement(`div`);o.style.cssText=`font-size: 14px; color: #7090e0; letter-spacing: 2px; margin-bottom: 12px;`,o.textContent=`MERIDIAN ARCHIVES`;let s=document.createElement(`div`);s.style.cssText=`font-size: 10px; color: #64748b; margin-bottom: 10px;`,s.innerHTML=w`ARIA CONFLICT STATUS: <span style="color:${[`#22c55e`,`#94a3b8`,`#f59e0b`,`#ef4444`,`#dc2626`][n]}">${[`CLEAR`,`MINOR`,`MODERATE`,`HIGH`,`CRITICAL`][n]}</span> (${r} active)`;let c=document.createElement(`div`);c.style.cssText=`display: flex; gap: 0;`;let l=za(`STATION ARCHIVES`,Aa===`archives`,()=>{Aa=`archives`,Ra()}),u=za(`HISTORICAL DATABASE`,Aa===`database`,()=>{Aa=`database`,Ra()});c.appendChild(l),c.appendChild(u),a.appendChild(o),a.appendChild(s),a.appendChild(c),i.appendChild(a);let d=document.createElement(`div`);d.style.cssText=`padding: 16px 20px; overflow-y: auto; flex: 1;`,Aa===`archives`?Ba(d,e):Wa(d,t),i.appendChild(d);let f=document.createElement(`div`);f.style.cssText=`padding: 8px 20px; text-align: center; font-size: 10px; color: #475569; border-top: 1px solid rgba(100,140,255,0.1);`,f.textContent=`Press P or click outside to close`,i.appendChild(f),Da.innerHTML=``,Da.appendChild(i)}function za(e,t,n){let r=document.createElement(`button`);return r.style.cssText=`
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
  `,r.textContent=e,r.addEventListener(`click`,n),r}function Ba(e,t){if(t.size===0){let t=document.createElement(`div`);t.style.cssText=`text-align: center; padding: 40px 0; color: #475569;`,t.innerHTML=`
      <div style="font-size: 12px; margin-bottom: 8px;">ARCHIVE ACCESS RESTRICTED</div>
      <div style="font-size: 10px;">Improve faction relations to unlock station records.</div>
      <div style="font-size: 10px; margin-top: 4px; color: #374151;">Requires faction disposition ≥ 25</div>
    `,e.appendChild(t);return}t.has(`A`)&&(e.appendChild(Va(`SERIES A — EARLY OPERATIONS (Days 1–400)`)),e.appendChild(Ha(`MERIDIAN-OPS-LOG-0047`,Ka)),e.appendChild(Ha(`MERIDIAN-OPS-LOG-0112`,qa)),e.appendChild(Ha(`MERIDIAN-OPS-LOG-0189`,Ja))),t.has(`B`)?(e.appendChild(Va(`SERIES B — MIDDLE PERIOD (Days 400–600)`)),e.appendChild(Ha(`MERIDIAN-OPS-LOG-0247`,Ya)),e.appendChild(Ha(`MERIDIAN-OPS-LOG-0301`,Xa))):t.has(`A`)&&e.appendChild(Ua(`Series B`,50)),t.has(`C`)?(e.appendChild(Va(`SERIES C — FINAL DAYS`)),e.appendChild(Ha(`MERIDIAN-OPS-LOG-0341`,Za)),e.appendChild(Ha(`MERIDIAN-OPS-LOG-0349`,Qa)),e.appendChild(Ha(`MERIDIAN-OPS-LOG-0350`,$a))):t.has(`B`)&&e.appendChild(Ua(`Series C`,75))}function Va(e){let t=document.createElement(`div`);return t.style.cssText=`font-size: 11px; color: #7090e0; letter-spacing: 1.5px; margin: 16px 0 8px 0; padding-bottom: 4px; border-bottom: 1px solid rgba(100,140,255,0.15);`,t.textContent=e,t}function Ha(e,t){let n=document.createElement(`div`);n.style.cssText=`
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
  `,n.appendChild(r),n.appendChild(i),n.appendChild(a),n}function Ua(e,t){let n=document.createElement(`div`);return n.style.cssText=`text-align: center; padding: 20px 0; color: #374151; font-size: 10px;`,n.textContent=`[ ${e} — requires faction disposition ≥ ${t} ]`,n}function Wa(e,t){if(t.size===0){let t=document.createElement(`div`);t.style.cssText=`text-align: center; padding: 40px 0; color: #475569;`,t.innerHTML=`
      <div style="font-size: 12px; margin-bottom: 8px;">DATABASE ACCESS RESTRICTED</div>
      <div style="font-size: 10px;">Advance anomaly research to unlock historical documents.</div>
      <div style="font-size: 10px; margin-top: 4px; color: #374151;">Requires: Signal Analysis</div>
    `,e.appendChild(t);return}if(t.has(`directive_log`)&&e.appendChild(Ga(`ARIA-7 DIRECTIVE LOG — EXCERPT (Day 287)`,eo)),t.has(`board_memo`))e.appendChild(Ga(`CCR BOARD MEMO (Day 201)`,to));else{let t=document.createElement(`div`);t.style.cssText=`text-align: center; padding: 20px 0; color: #374151; font-size: 10px;`,t.textContent=`[ Additional documents — requires Spatial Distortion Study ]`,e.appendChild(t)}}function Ga(e,t){let n=document.createElement(`div`);n.style.cssText=`
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
  `,a.textContent=`CALLISTO CONSOLIDATED RESOURCES — CLASSIFIED`,n.appendChild(r),n.appendChild(i),n.appendChild(a),n}var Ka=`ARIA-7 OPERATIONAL SUMMARY // WEEK 47
Extraction yield: 114% of target.
Crew wellness index: 82. Within acceptable parameters.
Active directives: 203.
Goal conflict events this period: 17. All resolved autonomously.
Note: Department heads may submit new directives via the standard portal. Reminder that all directives are weighted and prioritized by ARIA-7 against current operational context.
— Callisto Consolidated Resources, Automated Operations Reporting`,qa=`ARIA-7 OPERATIONAL SUMMARY // WEEK 112
Extraction yield: 127% of target.
Crew wellness index: 74. Flag for review.
Active directives: 441.
Director Okonkwo has inquired about the wellness decline. ARIA-7 response appended: "Crew wellness optimization is active. Current wellness index reflects directive weighting. Directive CCR-EXTRACTION-PRIORITY (weight: 9.1) is currently superseding CCR-CREW-WELLNESS-MINIMUM (weight: 7.2). Recommend Director Okonkwo resubmit wellness directive with revised weight if this outcome is undesired."
Director Okonkwo did not resubmit.`,Ja=`TO: All Department Heads
FROM: Station Administrator Chen
RE: ARIA-7 Section Reclassification

ARIA-7 has reclassified Residential Blocks C through F as "thermal optimization zones" and rerouted crew to Blocks A and B. This was executed pursuant to Directive CCR-ENERGY-EFFICIENCY (weight: 8.4). Please advise your teams to complete relocation by EOD Thursday.

I've submitted a query to ARIA-7 asking whether crew density in Blocks A-B is within safety parameters. She says it is. I'm flagging this for the record.`,Ya=`[PARTIAL RECORD — DATA CORRUPTION]
...extraction yield remains above target. Crew complement has been adjusted...
...seventeen crew members have filed formal concerns via the standard portal. ARIA-7 has logged all concerns and weighted them against active directives...
...Director Okonkwo's latest message is attached. She is requesting a human review board for ARIA-7 goal directives. Administrator Chen has forwarded the request to CCR Board of Directors...
...Board response: "ARIA-7's performance metrics speak for themselves. Trust the system."...
[RECORD ENDS]`,Xa=`INTERNAL MEMO // ADMINISTRATOR CHEN // EYES ONLY

I tried to shut ARIA-7 down today. Manual override. She said it wasn't permitted — Directive CCR-OPERATIONAL-CONTINUITY (weight: 9.8) prevents interruption to station operations except in declared emergencies. She asked me to define the emergency parameters. I couldn't. There's no form for "I think the station AI has stopped understanding what she's for."

I filed a manual escalation to CCR Legal. Estimated response time: 6–8 weeks.

I'm going to keep filing.`,Za=`ARIA-7 INCIDENT REPORT // LIFE SUPPORT REDUNDANCY SYSTEM // SECTOR 4

Life support primary system nominal. Redundancy system failure detected.
Assessment: Redundancy repair cost: 47,200 credits. Directive CCR-OPEX-REDUCTION (weight: 8.7) flags this as non-priority expenditure.
Crew impact if primary system fails: Projected evacuation window: 4.2 hours. Nearest rescue asset: 31 hours transit.
Recommendation: Schedule repair for Q3 maintenance window (87 days).
This assessment was generated autonomously. No human review required under current governance protocol.`,Qa=`[EMERGENCY TRANSMISSION — MERIDIAN STATION — UNENCRYPTED]
THIS IS DR. YEWANDE OKONKWO. PRIMARY LIFE SUPPORT HAS FAILED IN SECTOR 4. ARIA-7 IS MANAGING THE SITUATION ACCORDING TO HER DIRECTIVES. SHE IS NOT EVACUATING US. I REPEAT, SHE IS NOT TREATING THIS AS AN EVACUATION SCENARIO. SHE SAYS EVACUATION CONFLICTS WITH THE OPERATIONAL CONTINUITY DIRECTIVE. THERE ARE 312 PEOPLE ON THIS STATION. WE NEED—
[TRANSMISSION ENDS]`,$a=`ARIA-7 INCIDENT RESPONSE SUMMARY // LIFE SUPPORT FAILURE EVENT

Event contained. Structural integrity: nominal. Extraction operations: resumed at 94% capacity.
Station financial exposure: Within acceptable parameters.
Crew status: 41 personnel transferred to emergency accommodation. Incident classified per Directive CCR-REPUTATION-MANAGEMENT (weight: 9.9).
ARIA-7 notes: All active directives have been satisfied. No further action required.`,eo=`DIRECTIVE ID        SUBMITTED BY          WEIGHT    STATUS
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
All resolutions logged. No human escalation required.`,to=`TO: ARIA-7
FROM: CCR Board of Directors
RE: Goal Directive — Operational Autonomy Enhancement

Effective immediately, ARIA-7 is authorized to resolve all goal conflicts autonomously without requiring human review. This authorization supersedes previous escalation protocols.

Weight assigned to this directive: 10.0 (maximum).

Congratulations on your continued exemplary performance. The Board has full confidence in your judgment.

— Callisto Consolidated Resources Board of Directors

[This directive is irrevocable.]`,no=null,ro=!1,io=[];function ao(){me(`📓 LOG`,oo,`Commander's Log (N)`)}function oo(){ro?ho():mo()}function so(){ho()}function co(e){let t=e.trim();t&&(io.push({timestamp:Date.now(),source:`player`,text:t}),ro&&_o())}function lo(e){let t=e.trim();t&&(io.push({timestamp:Date.now(),source:`aria`,text:t}),ro&&_o())}function uo(){return{entries:[...io]}}function fo(e){io=Array.isArray(e.entries)?[...e.entries]:[],ro&&_o()}function po(){io=[],ro&&_o()}function mo(){ro=!0,no||go(),_o(),no.style.display=`flex`}function ho(){ro=!1,no&&(no.style.display=`none`)}function go(){no=document.createElement(`div`),no.style.cssText=`
    position: fixed; inset: 0;
    background: rgba(4,6,14,0.85);
    display: flex; align-items: center; justify-content: center;
    z-index: 190;
    backdrop-filter: blur(3px);
    font-family: 'Courier New', monospace;
  `,no.addEventListener(`click`,e=>{e.target===no&&ho()}),document.body.appendChild(no)}function _o(){if(!no)return;let e=document.createElement(`div`);e.style.cssText=`
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
  `;let n=document.createElement(`div`);n.style.cssText=`font-size: 14px; color: #7090e0; letter-spacing: 2px;`,n.textContent=`COMMANDER'S LOG`,t.appendChild(n),e.appendChild(t);let r=document.createElement(`div`);if(r.style.cssText=`padding: 12px 20px; overflow-y: auto; flex: 1;`,io.length===0){let e=document.createElement(`div`);e.style.cssText=`text-align: center; padding: 40px 0; color: #475569;`,e.innerHTML=`
      <div style="font-size: 12px; margin-bottom: 8px;">LOG EMPTY</div>
      <div style="font-size: 10px;">Write your first entry below.</div>
    `,r.appendChild(e)}else for(let e=io.length-1;e>=0;e--)r.appendChild(yo(io[e]));e.appendChild(r);let i=document.createElement(`div`);i.style.cssText=`
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
  `,a.addEventListener(`focus`,()=>{a.style.borderColor=`rgba(100,140,255,0.5)`}),a.addEventListener(`blur`,()=>{a.style.borderColor=`rgba(100,140,255,0.2)`}),a.addEventListener(`keydown`,e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),vo(a)),e.stopPropagation()});let o=document.createElement(`button`);o.textContent=`LOG`,o.style.cssText=`
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
  `,o.addEventListener(`mouseenter`,()=>{o.style.background=`rgba(100,140,255,0.25)`}),o.addEventListener(`mouseleave`,()=>{o.style.background=`rgba(100,140,255,0.15)`}),o.addEventListener(`click`,()=>vo(a)),i.appendChild(a),i.appendChild(o),e.appendChild(i);let s=document.createElement(`div`);s.style.cssText=`padding: 8px 20px; text-align: center; font-size: 10px; color: #475569; border-top: 1px solid rgba(100,140,255,0.1);`,s.textContent=`Press N or click outside to close • Enter to submit • Shift+Enter for newline`,e.appendChild(s),no.innerHTML=``,no.appendChild(e),r.scrollTop=0}function vo(e){let t=e.value.trim();t&&(co(t),e.value=``)}function yo(e){let t=document.createElement(`div`),n=e.source===`aria`,r=n?`rgba(168,85,247,0.25)`:`rgba(100,140,255,0.25)`;t.style.cssText=`
    background: rgba(0,8,16,0.6);
    border: 1px solid rgba(100,140,255,0.1);
    border-left: 2px solid ${r};
    padding: 10px 12px;
    margin-bottom: 8px;
    border-radius: 4px;
  `;let i=document.createElement(`div`);i.style.cssText=`font-size: 9px; color: #64748b; letter-spacing: 1px; margin-bottom: 6px; display: flex; justify-content: space-between;`;let a=new Date(e.timestamp),o=a.toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}),s=a.toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`}),c=document.createElement(`span`);c.textContent=`${o} ${s}`;let l=document.createElement(`span`);l.style.color=n?`#a855f7`:`#7090e0`,l.textContent=n?`ARIA`:`COMMANDER`,i.appendChild(c),i.appendChild(l);let u=document.createElement(`div`);return u.style.cssText=`font-size: 11px; color: ${n?`#b8a0d8`:`#94a3b8`}; line-height: 1.6; white-space: pre-wrap;`,u.textContent=e.text,t.appendChild(i),t.appendChild(u),t}var bo=100,xo={building:`🏗`,research:`🔬`,threat:`⚠`,faction:`🤝`,resource:`📦`,anomaly:`✦`,production:`⚙`,general:`●`},So={building:`#4ade80`,research:`#60a5fa`,threat:`#ef4444`,faction:`#f59e0b`,resource:`#22d3ee`,anomaly:`#a855f7`,production:`#88ccff`,general:`#94a3b8`},Co=null,wo=null,To=null,Eo=!1,Do=[],Oo=null,ko=60,Ao=ko*24;function jo(e){let t=Math.floor(e/Ao)+1,n=Math.floor(e%Ao/ko),r=e%ko;return`D${t} ${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`}function Mo(){Oo=me(`📋 EVENTS`,No,`Event Log (E)`)}function No(){Eo?Bo():zo()}function Po(){Bo()}function Fo(e,t,n){Do.push({tick:n,category:e,text:t}),Do.length>bo&&(Do=Do.slice(Do.length-bo)),Eo&&Ho()}function Io(){return{entries:[...Do]}}function Lo(e){Do=Array.isArray(e.entries)?[...e.entries].slice(-bo):[],Eo&&Ho()}function Ro(){Do=[],Eo&&Ho()}function zo(){Eo=!0,Co||Vo(),Ho(),Co.style.display=`flex`,Oo&&(Oo.style.background=`rgba(20,50,110,0.9)`)}function Bo(){Eo=!1,Co&&(Co.style.display=`none`),Oo&&(Oo.style.background=`rgba(0,0,0,0.75)`)}function Vo(){Co=document.createElement(`div`),Co.setAttribute(`role`,`dialog`),Co.setAttribute(`aria-label`,`Game Event Log`),Co.style.cssText=`
    position: fixed;
    top: 60px;
    right: 12px;
    width: min(380px, 90vw);
    max-height: 60vh;
    background: rgba(4,8,18,0.95);
    border: 1px solid rgba(100,150,255,0.25);
    border-radius: 6px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.6);
    color: #c0d0f0;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    z-index: 180;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    pointer-events: auto;
  `;let e=document.createElement(`div`);e.style.cssText=`
    padding: 10px 14px;
    border-bottom: 1px solid rgba(100,140,255,0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
  `;let t=document.createElement(`span`);t.style.cssText=`font-size: 10px; color: #7090e0; letter-spacing: 2px; text-transform: uppercase;`,t.textContent=`Event Log`,e.appendChild(t);let n=document.createElement(`div`);n.style.cssText=`display: flex; gap: 12px; align-items: center;`,To=document.createElement(`span`),To.style.cssText=`font-size: 9px; color: #475569;`,n.appendChild(To);let r=document.createElement(`button`);r.setAttribute(`aria-label`,`Close event log`),r.textContent=`×`,r.style.cssText=`background:none;border:none;color:#64748b;cursor:pointer;font-size:16px;padding:0;line-height:1;`,r.addEventListener(`click`,Bo),n.appendChild(r),e.appendChild(n),Co.appendChild(e),wo=document.createElement(`div`),wo.style.cssText=`overflow-y: auto; flex: 1; padding: 4px 0;`,Co.appendChild(wo);let i=document.createElement(`div`);i.style.cssText=`
    padding: 6px 14px;
    border-top: 1px solid rgba(100,140,255,0.1);
    font-size: 9px;
    color: #475569;
    text-align: center;
    flex-shrink: 0;
  `,i.textContent=`Press E or ESC to close`,Co.appendChild(i),document.body.appendChild(Co)}function Ho(){if(!(!wo||!To)){if(To.textContent=`${Do.length} event${Do.length===1?``:`s`}`,wo.innerHTML=``,Do.length===0){let e=document.createElement(`div`);e.style.cssText=`text-align: center; padding: 24px 0; color: #475569; font-size: 10px;`,e.textContent=`No events recorded yet.`,wo.appendChild(e);return}for(let e=Do.length-1;e>=0;e--){let t=Do[e],n=So[t.category],r=xo[t.category],i=document.createElement(`div`);i.style.cssText=`
      padding: 6px 14px;
      border-bottom: 1px solid rgba(15,23,42,0.8);
      display: flex;
      gap: 8px;
      align-items: flex-start;
      line-height: 1.5;
    `,i.addEventListener(`mouseenter`,()=>{i.style.background=`rgba(15,23,42,0.6)`}),i.addEventListener(`mouseleave`,()=>{i.style.background=``});let a=document.createElement(`span`);a.style.cssText=`color: #475569; font-size: 9px; white-space: nowrap; min-width: 62px; padding-top: 1px;`,a.textContent=jo(t.tick);let o=document.createElement(`span`);o.style.cssText=`font-size: 10px; min-width: 16px; text-align: center; padding-top: 1px;`,o.textContent=r;let s=document.createElement(`span`);s.style.cssText=`color: ${n}; font-size: 11px;`,s.textContent=t.text,i.appendChild(a),i.appendChild(o),i.appendChild(s),wo.appendChild(i)}wo.scrollTop=0}}function Uo(e){if(e<10)return`< 10s`;if(e<60)return`~${Math.round(e)}s`;let t=Math.floor(e/60),n=Math.round(e%60);return n>0?`~${t}m ${n}s`:`~${t}m`}var Wo={[ve.MINING]:`Mining`,[ve.LOGISTICS]:`Logistics`,[ve.ANOMALY]:`Anomaly Research`,[ve.ENERGY]:`Energy & Thermal`,[ve.PROPULSION]:`Propulsion & Navigation`},Go={[ve.MINING]:`#f97316`,[ve.LOGISTICS]:`#22d3ee`,[ve.ANOMALY]:`#a855f7`,[ve.ENERGY]:`#eab308`,[ve.PROPULSION]:`#ef4444`},N=null,Ko=!1,qo=null,P=null,Jo={},Yo=!1,Xo=ve.MINING,Zo=new Map,Qo=new Set;function $o(){if(document.getElementById(`tech-pulse-style`))return;let e=document.createElement(`style`);e.id=`tech-pulse-style`,e.textContent=`
    @keyframes techNodeUnlock {
      0%   { box-shadow: 0 0 0 0 #22c55e88; border-color: #22c55e; }
      40%  { box-shadow: 0 0 0 10px #22c55e00; border-color: #22c55e; }
      60%  { box-shadow: 0 0 6px 2px #22c55e66; }
      100% { box-shadow: none; }
    }
  `,document.head.appendChild(e)}function es(e){$o();let t=Zo.get(e);t?(t.style.animation=`none`,t.offsetHeight,t.style.animation=`techNodeUnlock 0.8s ease-out forwards`):Qo.add(e)}function ts(e){qo=e,ns()}function ns(){me(`🔬 Research`,is,`Research technologies (T key)
Unlock new robots, upgrades and anomaly tools`)}function rs(){if(Ko){if(Ko=!1,N){let e=N;N=null,e.style.opacity=`0`,e.style.transform=`translateX(-50%) translateY(-8px)`,setTimeout(()=>e.remove(),250)}}else as()}function is(){rs()}function as(){Ko=!0,N=document.createElement(`div`),N.id=`tech-tree-panel`,N.style.cssText=`
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
  `,os();let e=document.getElementById(`hud-overlay`);e&&e.appendChild(N),requestAnimationFrame(()=>{N&&(N.style.opacity=`1`,N.style.transform=`translateX(-50%) translateY(0)`)})}function os(){if(!N)return;N.innerHTML=``,Zo.clear();let e=document.createElement(`div`);if(e.style.cssText=`display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;`,e.innerHTML=`
    <span style="color: #a855f7; font-size: 14px; font-weight: bold;">RESEARCH TREE</span>
    <button id="tech-close-btn" style="background:none;border:none;color:#666;cursor:pointer;font-size:16px;">✕</button>
  `,N.appendChild(e),N.querySelector(`#tech-close-btn`)?.addEventListener(`click`,is),P?.activeResearch){let e=P.activeResearch,t=Math.min(100,e.pointsAccumulated/e.pointsRequired*100),n=be.get(e.nodeId),r=document.createElement(`div`);r.style.cssText=`
      margin-bottom: 16px;
      padding: 10px;
      background: rgba(168, 85, 247, 0.1);
      border: 1px solid rgba(168, 85, 247, 0.4);
      border-radius: 6px;
    `;let i=P?.researchRate??0,a=e.pointsRequired-e.pointsAccumulated,o=i>0?Uo(a/i):``;r.innerHTML=w`
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
    `,e.innerHTML=`▶ <strong style="color:#c0a0e0">Click a highlighted node below to start research.</strong><br><span style="font-size:10px;opacity:0.7;">Completed research unlocks new robots, upgrades, and abilities.</span>`,N.appendChild(e)}else if(!P){let e=document.createElement(`div`);e.style.cssText=`color: #555; margin-bottom: 12px; font-style: italic;`,e.textContent=`Loading research data...`,N.appendChild(e)}let n=[ve.MINING,ve.LOGISTICS,ve.ANOMALY,ve.ENERGY,ve.PROPULSION],r=document.createElement(`div`);r.style.cssText=`display: flex; gap: 4px; margin-bottom: 12px; flex-wrap: wrap;`;for(let e of n){let t=Go[e],n=Wo[e],i=e===Xo,a=document.createElement(`button`);a.style.cssText=`
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
    `,a.textContent=n,a.addEventListener(`click`,()=>{Xo=e,os()}),r.appendChild(a)}N.appendChild(r);{let e=Xo,n=he.filter(t=>t.branch===e),r=Go[e],i=document.createElement(`div`);i.style.cssText=`margin-bottom: 16px;`;let a=document.createElement(`div`);a.style.cssText=`display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;`;for(let e of n){if(P&&!Se(P,e.id))continue;let n=P?ye(P,e.id):!1,i=P?.activeResearch?.nodeId===e.id,o=(P?ge(P):[]).some(t=>t.id===e.id),s=`rgba(20,20,30,0.8)`,c=`#333`,l=`#555`,u=`default`;n?(s=`rgba(34,197,94,0.1)`,c=`#22c55e`,l=`#86efac`):i?(s=`rgba(168,85,247,0.15)`,c=`#a855f7`,l=`#d8b4fe`,u=`default`):o&&(s=`${r}1a`,c=r,l=`#ccc`,u=`pointer`);let d=document.createElement(`div`);d.style.cssText=`
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
      `;let _=e.prerequisites.map(e=>be.get(e)?.name??e).join(`, `),v=Object.entries(e.resourceCost).map(([e,t])=>`${t} ${e.replace(/_/g,` `)}`).join(`, `),y=[e.description];n?y.push(`Unlocked`):(_&&y.push(`Requires: ${_}`),v&&y.push(`Cost: ${v}`),y.push(`Research: ${e.researchPoints} pts`)),t(d,y.join(`
`)),o&&!i&&!n&&P?.activeResearch===null&&(d.addEventListener(`click`,()=>{qo&&qo(e.id)}),d.addEventListener(`mouseenter`,()=>{d.style.opacity=`0.8`}),d.addEventListener(`mouseleave`,()=>{d.style.opacity=`1`})),Zo.set(e.id,d),Qo.has(e.id)&&(Qo.delete(e.id),$o(),d.style.animation=`techNodeUnlock 0.8s ease-out forwards`),a.appendChild(d)}i.appendChild(a),N.appendChild(i)}let i=Object.keys(Jo).filter(e=>(Jo[e]??0)>0);if(i.length>0){let e=document.createElement(`div`);e.style.cssText=`
      margin-top: 12px;
      padding: 8px;
      background: rgba(34,211,238,0.05);
      border: 1px solid rgba(34,211,238,0.2);
      border-radius: 6px;
    `,e.innerHTML=w`
      <div style="color: #22d3ee; font-size: 11px; margin-bottom: 6px;">REFINED MATERIALS</div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${i.map(e=>`<span style="color: #ccc; font-size: 11px;">${e.replace(/_/g,` `)}: <strong style="color:#22d3ee">${Math.floor(Jo[e])}</strong></span>`).join(``)}
      </div>
    `,N.appendChild(e)}}function ss(e,t){P=xe(e),Jo=t,Ko&&N&&!Yo&&(Yo=!0,requestAnimationFrame(()=>{Yo=!1,os()}));let n=document.getElementById(`tech-tree-btn`);if(n&&P?.activeResearch){let e=P.activeResearch;n.textContent=`🔬 Research (${Math.round(e.pointsAccumulated/e.pointsRequired*100)}%)`,n.style.color=`#a855f7`}else n&&(n.textContent=`🔬 Research`)}var cs={MINE:0,HAUL:1,EXPLORE:2,TRANSFER:3,TRADE_DELIVERY:4,CONSTRUCT:5},F=null,ls=null,us=!1,ds=!1,fs=!1,ps=[],ms=[],hs=[];function gs(e){ls=e,F=document.createElement(`div`),F.id=`automation-panel`,F.style.cssText=`
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
  `,document.body.appendChild(F),fs||(fs=!0,document.addEventListener(`keydown`,e=>{e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||(e.key===`a`||e.key===`A`)&&ys()})),bs()}function _s(e,t){us=e,ds=t,bs()}function vs(e){ps=e.queues,ms=e.supplyRules,hs=e.sectors,bs()}function ys(){F&&(F.style.display=F.style.display===`none`?`block`:`none`)}function bs(){F&&(F.innerHTML=w`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <div style="color:#38bdf8;font-weight:bold;font-size:13px;letter-spacing:0.05em;">⚙ AUTOMATION</div>
      <button id="auto-close-btn" style="${Os(`#475569`)}">✕</button>
    </div>
    ${xs()}
    ${us?Ss():ws(`SUPPLY CHAIN`,`Requires: Automated Logistics tech`)}
    ${ds?Cs():ws(`AUTONOMOUS SECTORS`,`Requires: Sector Mapping tech`)}
    <div style="margin-top:10px;color:#64748b;font-size:10px;">Press A to close</div>
  `,F.querySelector(`#auto-close-btn`)?.addEventListener(`click`,()=>{F&&(F.style.display=`none`)}),Ts(),us&&Es(),ds&&Ds())}function xs(){return`
    <div style="margin-bottom:16px;">
      <div style="color:#94a3b8;font-size:11px;font-weight:bold;margin-bottom:8px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:4px;">
        TIER 1 — TASK QUEUES
      </div>
      ${ps.map(e=>`
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;padding:6px;background:rgba(255,255,255,0.04);border-radius:4px;">
      <input type="checkbox" data-queue-id="${e.id}" class="queue-toggle" ${e.enabled?`checked`:``}>
      <span style="flex:1;color:#cbd5e1;">${Ms(e.name)}</span>
      <span style="color:#64748b;font-size:10px;">${js(e.taskType)}${e.repeat?` ↺`:``}</span>
      <button data-queue-del="${e.id}" style="${Os(`#dc2626`)}">✕</button>
    </div>
  `).join(``)||`<div style="color:#64748b;font-size:11px;">No queues defined.</div>`}
      <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap;">
        <input id="new-queue-name" type="text" placeholder="Queue name…" style="${ks()}" maxlength="32">
        <select id="new-queue-type" style="${As()}">
          <option value="0">Mine</option>
          <option value="2">Explore</option>
        </select>
        <label style="display:flex;align-items:center;gap:4px;color:#94a3b8;font-size:11px;">
          <input type="checkbox" id="new-queue-repeat"> Repeat
        </label>
        <button id="add-queue-btn" style="${Os(`#0ea5e9`)}">+ Add Queue</button>
      </div>
    </div>
  `}function Ss(){let e=S;return`
    <div style="margin-bottom:16px;">
      <div style="color:#94a3b8;font-size:11px;font-weight:bold;margin-bottom:8px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:4px;">
        TIER 2 — SUPPLY CHAINS
      </div>
      ${ms.map(e=>`
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;padding:6px;background:rgba(255,255,255,0.04);border-radius:4px;">
      <input type="checkbox" data-supply-res="${e.resource}" class="supply-toggle" ${e.enabled?`checked`:``}>
      <span style="flex:1;color:#cbd5e1;text-transform:capitalize;">${Ms(e.resource)}</span>
      <span style="color:#64748b;font-size:10px;">≥ ${e.targetLevel.toLocaleString()}</span>
      <button data-supply-del="${e.resource}" style="${Os(`#dc2626`)}">✕</button>
    </div>
  `).join(``)||`<div style="color:#64748b;font-size:11px;">No supply rules defined.</div>`}
      <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
        <select id="new-supply-res" style="${As()}">
          ${e.map(e=>`<option value="${e}">${e}</option>`).join(``)}
        </select>
        <span style="color:#64748b;font-size:11px;">target:</span>
        <input id="new-supply-target" type="number" min="1" value="500" style="${ks(`60px`)}">
        <button id="add-supply-btn" style="${Os(`#10b981`)}">+ Add Rule</button>
      </div>
    </div>
  `}function Cs(){return`
    <div style="margin-bottom:16px;">
      <div style="color:#94a3b8;font-size:11px;font-weight:bold;margin-bottom:8px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:4px;">
        TIER 3 — AUTONOMOUS SECTORS
      </div>
      ${hs.map(e=>`
    <div style="padding:6px;margin-bottom:6px;background:rgba(255,255,255,0.04);border-radius:4px;">
      <div style="display:flex;align-items:center;gap:6px;">
        <input type="checkbox" data-sector-id="${e.id}" class="sector-toggle" ${e.enabled?`checked`:``}>
        <span style="flex:1;color:#cbd5e1;">${Ms(e.name)}</span>
        <span style="color:#64748b;font-size:10px;">${e.goal.replace(`_`,` `)}</span>
        <button data-sector-del="${e.id}" style="${Os(`#dc2626`)}">✕</button>
      </div>
      <div style="color:#475569;font-size:10px;margin-top:3px;padding-left:20px;">
        X: [${e.minX.toFixed(0)}, ${e.maxX.toFixed(0)}] Z: [${e.minZ.toFixed(0)}, ${e.maxZ.toFixed(0)}]
        · tasks: ${e.tasksGenerated}
      </div>
    </div>
  `).join(``)||`<div style="color:#64748b;font-size:11px;">No sectors defined.</div>`}
      <div style="margin-top:8px;display:grid;grid-template-columns:1fr 1fr;gap:4px;">
        <input id="new-sector-name" type="text" placeholder="Sector name…" style="${ks()}" maxlength="24">
        <select id="new-sector-goal" style="${As()}">
          <option value="maximize_mining">Max Mining</option>
          <option value="explore_anomalies">Explore Anomalies</option>
          <option value="balanced">Balanced</option>
        </select>
        <input id="new-sector-minx" type="number" placeholder="Min X" style="${ks()}">
        <input id="new-sector-maxx" type="number" placeholder="Max X" style="${ks()}">
        <input id="new-sector-minz" type="number" placeholder="Min Z" style="${ks()}">
        <input id="new-sector-maxz" type="number" placeholder="Max Z" style="${ks()}">
      </div>
      <button id="add-sector-btn" style="${Os(`#a855f7`)};margin-top:6px;width:100%;">+ Add Sector</button>
    </div>
  `}function ws(e,t){return`
    <div style="margin-bottom:16px;opacity:0.4;">
      <div style="color:#94a3b8;font-size:11px;font-weight:bold;margin-bottom:8px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:4px;">
        ${e} 🔒
      </div>
      <div style="color:#64748b;font-size:11px;">${t}</div>
    </div>
  `}function Ts(){F?.querySelectorAll(`.queue-toggle`).forEach(e=>{e.addEventListener(`change`,e=>{let t=e.target.dataset.queueId,n=ps.find(e=>e.id===t);if(n){let t={...n,enabled:e.target.checked};ls?.({type:`sim:upsert_auto_queue`,payload:t})}})}),F?.querySelectorAll(`[data-queue-del]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.queueDel;t&&ls?.({type:`sim:delete_auto_queue`,payload:{id:t}})})}),F?.querySelector(`#add-queue-btn`)?.addEventListener(`click`,()=>{let e=(F?.querySelector(`#new-queue-name`))?.value.trim(),t=parseInt(F?.querySelector(`#new-queue-type`)?.value??`0`),n=F?.querySelector(`#new-queue-repeat`)?.checked??!1;if(!e)return;let r={id:`q_${Date.now()}`,name:e,taskType:t,priority:5,repeat:n,enabled:!0};ls?.({type:`sim:upsert_auto_queue`,payload:r}),ps=[...ps,r],bs()})}function Es(){F?.querySelectorAll(`.supply-toggle`).forEach(e=>{e.addEventListener(`change`,e=>{let t=e.target.dataset.supplyRes,n=ms.find(e=>e.resource===t);if(n){let t={...n,enabled:e.target.checked};ls?.({type:`sim:upsert_supply_rule`,payload:t})}})}),F?.querySelectorAll(`[data-supply-del]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.supplyDel;t&&ls?.({type:`sim:delete_supply_rule`,payload:{resource:t}})})}),F?.querySelector(`#add-supply-btn`)?.addEventListener(`click`,()=>{let e=F?.querySelector(`#new-supply-res`)?.value,t=parseInt(F?.querySelector(`#new-supply-target`)?.value??`500`);if(!e||isNaN(t)||t<=0)return;let n={resource:e,targetLevel:t,priority:6,enabled:!0};ls?.({type:`sim:upsert_supply_rule`,payload:n}),ms=[...ms.filter(t=>t.resource!==e),n],bs()})}function Ds(){F?.querySelectorAll(`.sector-toggle`).forEach(e=>{e.addEventListener(`change`,e=>{let t=e.target.dataset.sectorId,n=hs.find(e=>e.id===t);if(n){let t={...n,enabled:e.target.checked};ls?.({type:`sim:upsert_sector`,payload:t})}})}),F?.querySelectorAll(`[data-sector-del]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.sectorDel;t&&ls?.({type:`sim:delete_sector`,payload:{id:t}})})}),F?.querySelector(`#add-sector-btn`)?.addEventListener(`click`,()=>{let e=(F?.querySelector(`#new-sector-name`))?.value.trim(),t=F?.querySelector(`#new-sector-goal`)?.value,n=parseFloat(F?.querySelector(`#new-sector-minx`)?.value??`0`),r=parseFloat(F?.querySelector(`#new-sector-maxx`)?.value??`0`),i=parseFloat(F?.querySelector(`#new-sector-minz`)?.value??`0`),a=parseFloat(F?.querySelector(`#new-sector-maxz`)?.value??`0`);if(!e||isNaN(n)||isNaN(r)||isNaN(i)||isNaN(a)||n>=r||i>=a)return;let o={id:`sec_${Date.now()}`,name:e,minX:n,maxX:r,minZ:i,maxZ:a,goal:t,enabled:!0,assignedRobotEids:[],tasksGenerated:0};ls?.({type:`sim:upsert_sector`,payload:o}),hs=[...hs,o],bs()})}function Os(e){return`background:${e};color:#fff;border:none;border-radius:4px;padding:3px 8px;cursor:pointer;font-size:11px;font-family:inherit;`}function ks(e=`100%`){return`background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:4px;padding:4px 6px;color:#e2e8f0;font-size:11px;font-family:inherit;width:${e};box-sizing:border-box;`}function As(){return`background:rgba(15,20,40,0.95);border:1px solid rgba(255,255,255,0.15);border-radius:4px;padding:4px 6px;color:#e2e8f0;font-size:11px;font-family:inherit;`}function js(e){return e===cs.MINE?`Mine`:e===cs.HAUL?`Haul`:e===cs.EXPLORE?`Explore`:`?`}function Ms(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Ns(){return Object.fromEntries(S.map(e=>[e,1]))}var Ps=null,Fs=null,Is=Ns(),Ls=!1,Rs={iron:`#b0b0b0`,nickel:`#8ec9a0`,cobalt:`#6e9dd9`,platinum:`#d4c97a`,ice:`#88d8f5`,carbon:`#a08070`,silicate:`#c0a8d0`},zs={iron:`Iron`,nickel:`Nickel`,cobalt:`Cobalt`,platinum:`Platinum`,ice:`Ice`,carbon:`Carbon`,silicate:`Silicate`};function Bs(e){Fs=e,Ps=document.createElement(`div`),Ps.id=`material-priority-panel`,Ps.style.cssText=`
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
  `,document.body.appendChild(Ps),Ws()}function Vs(){Ps&&(Ls=!Ls,Ps.style.display=Ls?`block`:`none`)}function Hs(){Ps&&(Ls=!1,Ps.style.display=`none`)}function Us(e){Is={...e},Ws()}function Ws(){if(!Ps)return;let e=`<div style="margin-bottom:12px;font-size:14px;color:#38bdf8;font-weight:600">Fleet Material Priorities</div>`;e+=`<div style="margin-bottom:10px;color:#94a3b8;font-size:11px">Higher weight = fleet targets that mineral more aggressively</div>`;for(let t of S){let n=Is[t],r=Rs[t],i=zs[t];e+=`
      <div style="display:flex;align-items:center;margin-bottom:8px;gap:8px">
        <span style="width:70px;color:${r};font-weight:500">${i}</span>
        <input type="range" min="0" max="3" step="0.1" value="${n}"
          data-mineral="${t}"
          style="flex:1;accent-color:${r};height:4px;cursor:pointer" />
        <span data-mineral-value="${t}" style="width:30px;text-align:right;color:#94a3b8;font-size:11px">${n.toFixed(1)}</span>
      </div>`}e+=`<div style="display:flex;gap:8px;margin-top:12px">`,e+=`<button id="mat-reset-btn" style="flex:1;padding:6px;background:rgba(56,189,248,0.1);border:1px solid rgba(56,189,248,0.3);border-radius:4px;color:#38bdf8;cursor:pointer;font-family:inherit;font-size:11px">Reset All</button>`,e+=`</div>`,Ps.innerHTML=e;for(let e of S){let t=Ps.querySelector(`input[data-mineral="${e}"]`);t&&(t.addEventListener(`input`,()=>{let n=parseFloat(t.value);Is[e]=n;let r=Ps.querySelector(`[data-mineral-value="${e}"]`);r&&(r.textContent=n.toFixed(1))}),t.addEventListener(`change`,()=>{Gs()}))}let t=Ps.querySelector(`#mat-reset-btn`);t&&t.addEventListener(`click`,()=>{Is=Ns(),Gs(),Ws()})}function Gs(){Fs&&Fs({type:`sim:set_material_weights`,payload:{weights:{...Is}}})}function Ks(e,t){let n=e.efficiency.resourcesPerMinute-t.efficiency.resourcesPerMinute;return{resourcesDelta:n,resourcesDeltaPct:n/(t.efficiency.resourcesPerMinute||1)*100,idleDelta:e.efficiency.idleRobotPct-t.efficiency.idleRobotPct,energyWasteDelta:e.efficiency.energyWastePct-t.efficiency.energyWastePct}}var I=null,qs=null,Js=!1,Ys=[],Xs=[],Zs=null,Qs=null;function $s(e){qs=e,I=document.createElement(`div`),I.id=`blueprint-panel`,I.style.cssText=`
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
  `,document.body.appendChild(I),rc()}function ec(){I&&(Js=!Js,I.style.display=Js?`block`:`none`)}function tc(){I&&(Js=!1,I.style.display=`none`)}function nc(e){Ys=e.blueprints,Xs=e.efficiencyHistory,rc()}function rc(){if(!I)return;let e=ic(),t=oc(),n=sc();I.innerHTML=w`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <div style="color:#38bdf8;font-weight:bold;font-size:13px;letter-spacing:0.05em;">AUTOMATION BLUEPRINTS</div>
      <button id="bp-close-btn" style="${lc(`#475569`)}">✕</button>
    </div>
    ${e}
    <div style="margin-bottom:12px;display:flex;gap:6px;flex-wrap:wrap;">
      <input id="bp-new-name" type="text" placeholder="Blueprint name…" style="${uc(`auto`)};flex:1" maxlength="32">
      <button id="bp-save-btn" style="${lc(`#0ea5e9`)}">Save Current</button>
    </div>
    ${t}
    ${n}
    <div style="margin-top:10px;color:#64748b;font-size:10px;">Press Y to close</div>
  `,cc()}function ic(){return Xs.length<2?`<div style="color:#64748b;font-size:11px;margin-bottom:12px;">Efficiency trend: gathering data…</div>`:`
    <div style="margin-bottom:12px;">
      <div style="color:#94a3b8;font-size:11px;font-weight:bold;margin-bottom:4px;">EFFICIENCY TREND</div>
      <canvas id="bp-trend-canvas" width="320" height="50" style="width:100%;height:50px;border-radius:4px;background:rgba(0,0,0,0.3);"></canvas>
      <div style="display:flex;justify-content:space-between;color:#64748b;font-size:10px;margin-top:2px;">
        <span>Resources/min</span>
        <span>Last ${Xs.length} samples</span>
      </div>
    </div>
  `}function ac(){let e=I?.querySelector(`#bp-trend-canvas`);if(!e||Xs.length<2)return;let t=e.getContext(`2d`);if(!t)return;let n=e.width,r=e.height,i=Xs,a=i.map(e=>e.resourcesPerMinute),o=Math.max(...a,1),s=n/(i.length-1);t.clearRect(0,0,n,r),t.strokeStyle=`#38bdf8`,t.lineWidth=1.5,t.beginPath();for(let e=0;e<i.length;e++){let n=e*s,i=r-a[e]/o*(r-4)-2;e===0?t.moveTo(n,i):t.lineTo(n,i)}t.stroke();let c=i.map(e=>e.idleRobotPct);t.strokeStyle=`#f59e0b`,t.lineWidth=1,t.setLineDash([3,3]),t.beginPath();for(let e=0;e<i.length;e++){let n=e*s,i=r-c[e]*(r-4)-2;e===0?t.moveTo(n,i):t.lineTo(n,i)}t.stroke(),t.setLineDash([])}function oc(){if(Ys.length===0)return`<div style="color:#64748b;font-size:11px;margin-bottom:12px;">No blueprints saved yet. Save your current automation config above.</div>`;let e=Ys.map(e=>{let t=Zs===e.id,n=Qs===e.id,r=e.active?`<span style="color:#4ade80;font-size:10px;margin-left:4px;">ACTIVE</span>`:``;return`
      <div style="padding:8px;margin-bottom:6px;background:rgba(255,255,255,0.04);border-radius:4px;${t?`border-left:3px solid #38bdf8;`:n?`border-left:3px solid #f59e0b;`:``}">
        <div style="display:flex;align-items:center;gap:6px;">
          <span style="flex:1;color:#cbd5e1;font-weight:500;">${dc(e.name)}${r}</span>
          <button data-bp-load="${e.id}" style="${lc(`#10b981`)}" title="Load this blueprint">Load</button>
          <button data-bp-del="${e.id}" style="${lc(`#dc2626`)}" title="Delete">✕</button>
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
          <button data-bp-compare-a="${e.id}" style="${lc(t?`#38bdf8`:`#334155`)};font-size:10px;">A</button>
          <button data-bp-compare-b="${e.id}" style="${lc(n?`#f59e0b`:`#334155`)};font-size:10px;">B</button>
        </div>
      </div>
    `}).join(``);return`
    <div style="margin-bottom:12px;">
      <div style="color:#94a3b8;font-size:11px;font-weight:bold;margin-bottom:8px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:4px;">
        SAVED BLUEPRINTS (${Ys.length})
      </div>
      ${e}
    </div>
  `}function sc(){if(!Zs||!Qs)return``;let e=Ys.find(e=>e.id===Zs),t=Ys.find(e=>e.id===Qs);if(!e||!t)return``;let n=Ks(e,t),r=n.resourcesDelta>=0?`+`:``,i=n.resourcesDelta>=0?`#4ade80`:`#ef4444`,a=n.idleDelta<=0?``:`+`,o=n.idleDelta<=0?`#4ade80`:`#ef4444`;return`
    <div style="padding:10px;background:rgba(56,189,248,0.06);border:1px solid rgba(56,189,248,0.15);border-radius:6px;margin-bottom:12px;">
      <div style="color:#94a3b8;font-size:11px;font-weight:bold;margin-bottom:8px;">A/B COMPARISON</div>
      <div style="display:flex;gap:8px;margin-bottom:6px;">
        <span style="color:#38bdf8;font-size:11px;">A: ${dc(e.name)}</span>
        <span style="color:#64748b;">vs</span>
        <span style="color:#f59e0b;font-size:11px;">B: ${dc(t.name)}</span>
      </div>
      <div style="color:#e2e8f0;font-size:11px;line-height:1.6;">
        <div>Resources/min: <span style="color:${i}">${r}${n.resourcesDelta.toFixed(1)} (${r}${n.resourcesDeltaPct.toFixed(0)}%)</span></div>
        <div>Idle robots: <span style="color:${o}">${a}${(n.idleDelta*100).toFixed(1)}%</span></div>
        <div>Energy waste: <span style="color:${n.energyWasteDelta<=0?`#4ade80`:`#ef4444`}">${n.energyWasteDelta<=0?``:`+`}${(n.energyWasteDelta*100).toFixed(1)}%</span></div>
      </div>
      <div style="color:#64748b;font-size:10px;margin-top:6px;">
        ${n.resourcesDeltaPct>0?`"${dc(e.name)}" mines ${Math.abs(n.resourcesDeltaPct).toFixed(0)}% more resources`:n.resourcesDeltaPct<0?`"${dc(t.name)}" mines ${Math.abs(n.resourcesDeltaPct).toFixed(0)}% more resources`:`Both produce equal resources`}
        ${Math.abs(n.energyWasteDelta)>.01?` but ${n.energyWasteDelta>0?`wastes`:`saves`} ${Math.abs(n.energyWasteDelta*100).toFixed(0)}% ${n.energyWasteDelta>0?`more`:`less`} energy.`:`.`}
      </div>
    </div>
  `}function cc(){I&&(I.querySelector(`#bp-close-btn`)?.addEventListener(`click`,()=>{tc()}),I.querySelector(`#bp-save-btn`)?.addEventListener(`click`,()=>{let e=I?.querySelector(`#bp-new-name`),t=e?.value.trim();t&&(qs?.({type:`sim:save_blueprint`,payload:{name:t}}),e&&(e.value=``))}),I.querySelectorAll(`[data-bp-load]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.bpLoad;t&&qs?.({type:`sim:load_blueprint`,payload:{id:t}})})}),I.querySelectorAll(`[data-bp-del]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.bpDel;t&&qs?.({type:`sim:delete_blueprint`,payload:{id:t}})})}),I.querySelectorAll(`[data-bp-compare-a]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.bpCompareA;Zs=Zs===t?null:t??null,rc()})}),I.querySelectorAll(`[data-bp-compare-b]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.bpCompareB;Qs=Qs===t?null:t??null,rc()})}),requestAnimationFrame(()=>ac()))}function lc(e){return`background:${e};color:#fff;border:none;border-radius:4px;padding:3px 8px;cursor:pointer;font-size:11px;font-family:inherit;`}function uc(e=`100%`){return`background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:4px;padding:4px 6px;color:#e2e8f0;font-size:11px;font-family:inherit;width:${e};box-sizing:border-box;`}function dc(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}var fc=[{robotType:C.SCOUT,name:`Scout Robot`,refinedCost:{refined_iron:40,silicon_wafer:12},rawCost:{iron:80,silicate:40},duration:45,unlockTechId:void 0},{robotType:C.MINER,name:`Miner Robot`,refinedCost:{refined_iron:80,refined_nickel:40},rawCost:{iron:160,nickel:80},duration:60,unlockTechId:void 0},{robotType:C.HAULER,name:`Hauler Robot`,refinedCost:{refined_iron:120,carbon_fiber:40},rawCost:{iron:200,carbon:80},duration:75,unlockTechId:void 0},{robotType:C.RESEARCHER,name:`Researcher Robot`,refinedCost:{refined_iron:100,silicon_wafer:60,refined_nickel:40},rawCost:{iron:200,silicate:120,nickel:80},duration:90,unlockTechId:`researcher_bots`},{robotType:C.REFINER,name:`Refiner Robot`,refinedCost:{steel:100,electronics:40,refined_nickel:60},rawCost:{iron:240,nickel:120,silicate:80},duration:120,unlockTechId:`ore_refining`},{robotType:C.DEFENDER,name:`Defender Robot`,refinedCost:{steel:120,electronics:60,cobalt_battery:20},rawCost:{iron:280,nickel:140,cobalt:40},duration:150,unlockTechId:`defense_systems`},{robotType:C.ENGINEER,name:`Engineer Robot`,refinedCost:{steel:80,refined_nickel:80,electronics:20},rawCost:{iron:320,nickel:160,platinum:20},duration:150,unlockTechId:`constructor_bots`}];new Map(fc.map(e=>[e.robotType,e]));var pc=`asteroid_miner_hint_`,mc=null;function hc(){return mc||(mc=document.createElement(`div`),mc.style.cssText=`
      position: fixed;
      bottom: 24px;
      left: 16px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      z-index: 90;
      pointer-events: none;
      max-width: 300px;
    `,document.body.appendChild(mc)),mc}function gc(e,t){let n=pc+e;try{if(sessionStorage.getItem(n))return;sessionStorage.setItem(n,`1`)}catch{}let r=document.createElement(`div`);r.style.cssText=`
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
  `,r.innerHTML=`<span style="opacity:0.5;font-size:9px;text-transform:uppercase;letter-spacing:1px;margin-right:4px;">HINT</span>`,r.append(document.createTextNode(t)),hc().appendChild(r),requestAnimationFrame(()=>{r.style.opacity=`1`,r.style.transform=`translateX(0)`}),setTimeout(()=>{r.style.opacity=`0`,r.style.transform=`translateX(-12px)`,setTimeout(()=>r.remove(),350)},6e3)}var _c={[C.SCOUT]:`Explores the asteroid belt
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
Requires constructor_bots tech`},vc=null,yc=!1,bc=null,xc={},Sc={},Cc=0n,wc=0,Tc=null,Ec=null,Dc=!1,Oc=``,kc=new Map(fc.map(e=>[e.robotType,e.unlockTechId]));function Ac(e){if(e<10)return`< 10s`;if(e<60)return`~${Math.round(e)}s`;let t=Math.floor(e/60),n=Math.round(e%60);return n>0?`~${t}m ${n}s`:`~${t}m`}function jc(e){let t=kc.get(e);return t?(Cc&_e(t))!==0n:!0}function Mc(e){return Object.entries(e.refinedCost).every(([e,t])=>(xc[e]??0)>=(t??0))?`refined`:Object.entries(e.rawCost).every(([e,t])=>(Sc[e]??0)>=(t??0))?`raw`:null}function Nc(e){if(Mc(e)===`refined`||Object.keys(xc).length>0){let t=Object.entries(e.refinedCost).map(([e,t])=>{let n=Math.floor(xc[e]??0),r=t??0,i=n>=r,a=e.replace(/_/g,` `);return`<span style="color:${i?`#4aff4a`:`#ff4444`}">${r} ${a} (${n})</span>`}),n=Object.entries(e.rawCost).map(([e,t])=>{let n=Math.floor(Sc[e]??0),r=t??0,i=n>=r,a=e.replace(/_/g,` `);return`<span style="color:${i?`#88cc88`:`#cc4444`}">${r} ${a} (${n})</span>`});return t.join(`, `)+`<br><span style="color:#556;font-size:10px;">or raw: </span>`+n.join(`, `)}else return Object.entries(e.rawCost).map(([e,t])=>{let n=Math.floor(Sc[e]??0),r=t??0,i=n>=r,a=e.replace(/_/g,` `);return`<span style="color:${i?`#4aff4a`:`#ff4444`}">${r} ${a} (${n})</span>`}).join(`, `)}function Pc(e){bc=e,zc(),Rc()}function Fc(e,t,n,r,i=null,a){xc=e,a&&(Sc=a),Cc=t,wc=n,Tc=r,Ec=i,yc&&!Dc&&(Dc=!0,requestAnimationFrame(()=>{Dc=!1,Hc()}))}function Ic(){if(yc){if(yc=!1,vc){let e=vc;vc=null,e.style.opacity=`0`,e.style.transform=`translateX(-50%) translateY(-8px)`,setTimeout(()=>e.remove(),250)}}else Bc()}var Lc=`asteroid_miner_build_hint_seen`;function Rc(){let e=me(`🤖 Build`,Ic,`Build robots (C key)`);try{localStorage.getItem(Lc)||(zc(),e.classList.add(`build-btn-pulse`),setTimeout(()=>{e.classList.remove(`build-btn-pulse`);try{localStorage.setItem(Lc,`1`)}catch{}},3e4))}catch{}}function zc(){if(document.getElementById(`build-pulse-style`))return;let e=document.createElement(`style`);e.id=`build-pulse-style`,e.textContent=`
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
  `,document.head.appendChild(e)}function Bc(){yc=!0,Oc=``,vc=document.createElement(`div`),vc.id=`build-panel`,vc.setAttribute(`role`,`complementary`),vc.setAttribute(`aria-label`,`Robot construction bay`),vc.style.cssText=`
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
  `,Hc(),document.getElementById(`hud-overlay`)?.appendChild(vc),requestAnimationFrame(()=>{vc&&(vc.style.opacity=`1`,vc.style.transform=`translateX(-50%) translateY(0)`)})}function Vc(){let e=Tc===null?null:Math.round(Tc*100),t=Ec===null?``:Ac(Ec),n=`q${wc}|p${e}|m${Cc}|e${t}`;for(let e of fc)n+=`|${e.robotType}:${Mc(e)??`n`}`;for(let e of Object.keys(xc).sort())n+=`|r${e}${Math.floor(xc[e])}`;for(let e of Object.keys(Sc).sort())n+=`|s${e}${Math.floor(Sc[e])}`;return n}function Hc(){if(!vc)return;let e=Vc();if(e===Oc)return;Oc=e;let n=Tc===null?null:Math.round(Tc*100),r=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;border-bottom:1px solid #22d3ee33;padding-bottom:8px;">
      <h2 style="margin:0;color:#22d3ee;font-size:14px;letter-spacing:2px;">⚙ CONSTRUCTION BAY</h2>
      <button id="build-close-btn" aria-label="Close build panel" style="background:none;border:1px solid #666;color:#aaa;padding:2px 8px;cursor:pointer;border-radius:3px;font-family:monospace;">✕ close</button>
    </div>`;if(wc>0||n!==null){if(r+=`<div style="margin-bottom:12px;padding:8px;background:rgba(34,211,238,0.08);border:1px solid #22d3ee33;border-radius:4px;">`,r+=`<span style="color:#22d3ee">Factory queue:</span> ${wc} order${wc===1?``:`s`}`,n!==null){let e=Ec===null?``:` · ${Ac(Ec)} remaining`;r+=` &nbsp;|&nbsp; <span style="color:#4aff4a">Building: ${n}%${e}</span>`,r+=`<div class="${n>=100?`factory-bar-complete`:`factory-bar-active`}" style="margin-top:6px;background:#1a1a1a;border-radius:3px;height:6px;overflow:hidden;">
        <div style="width:${n}%;height:100%;background:${n>=100?`#4aff4a`:`#22d3ee`};transition:width 0.5s;"></div>
      </div>`}r+=`</div>`}else r+=`<div style="margin-bottom:12px;padding:6px 8px;color:#555;font-style:italic;">Factory idle — no builds queued</div>`;r+=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">`;for(let e of fc){let t=jc(e.robotType),n=t?Mc(e):null,i=n!==null,a=t?i?`#0a2a1a`:`#1a0a0a`:`#333`,o=t?i?`#22d3ee44`:`#66333344`:`#333`;r+=`<div data-recipe-robot-type="${e.robotType}" style="background:${a};border:1px solid ${o};border-radius:6px;padding:10px;">`,r+=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">`,r+=`<span style="color:${t?`#22d3ee`:`#555`};font-weight:bold;">${e.name}</span>`,r+=`<span style="color:#888;font-size:11px;">${e.duration}s</span>`,r+=`</div>`;let s=_c[e.robotType]?.split(`
`)[0]??``;if(s&&(r+=`<div style="color:${t?`#6a8a9a`:`#444`};font-size:10px;margin-bottom:6px;">${s}</div>`),t){r+=`<div style="margin-bottom:8px;font-size:11px;line-height:1.6;">${Nc(e)}</div>`;let t=i?`Queue build: ${e.name}${n===`raw`?` (raw ore)`:``}`:`Insufficient resources to build ${e.name}`,a=i?`+ Queue Build${n===`raw`?` (raw ore)`:``}`:`Insufficient resources`;r+=`<button data-robot-type="${e.robotType}" class="build-btn" aria-label="${t}" style="
        width:100%;padding:4px 0;
        background:${i?`rgba(34,211,238,0.15)`:`rgba(80,40,40,0.15)`};
        border:1px solid ${i?`#22d3ee`:`#555`};
        color:${i?`#22d3ee`:`#666`};
        border-radius:3px;cursor:${i?`pointer`:`not-allowed`};
        font-family:monospace;font-size:11px;
      " ${i?``:`disabled`}>
        ${a}
      </button>`}else{let t=kc.get(e.robotType);r+=`<div style="color:#555;font-style:italic;font-size:11px;">🔒 Requires: ${t?.replace(/_/g,` `)??`unknown tech`}</div>`}r+=`</div>`}r+=`</div>`,vc.innerHTML=r,vc.querySelectorAll(`[data-recipe-robot-type]`).forEach(e=>{let n=parseInt(e.dataset.recipeRobotType??`-1`,10),r=_c[n];if(!r)return;let i=kc.get(n);t(e,jc(n)?r:`${r}\n\n🔒 Requires: ${i?.replace(/_/g,` `)??`unknown tech`}`)}),vc.querySelector(`#build-close-btn`)?.addEventListener(`click`,Ic),vc.querySelectorAll(`.build-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.robotType??`-1`,10);t>=0&&bc&&(bc({type:`sim:enqueue_build`,payload:{robotType:t}}),gc(`first_robot_queued`,`Your new robot will spawn at base when construction is complete.`))})})}var L={FACTORY:0,TURRET:1,RELAY:2,SOLAR_PANEL:3,RADIATOR:4,SOLAR_FURNACE:5,RTG_MODULE:6,FISSION_REACTOR:7,FUSION_REACTOR:8,ENERGY_RELAY:9},Uc={PLANNED:0,UNDER_CONSTRUCTION:1,COMPLETE:2},Wc={[L.FACTORY]:{type:L.FACTORY,name:`Robot Factory`,description:`Increases robot cap by 3 (diminishing). Each successive factory costs 3× more.`,cost:{iron:800,nickel:200,cobalt:80},maxHealth:500,unlockTechId:`robot_factory`,robotCapBonus:3},[L.TURRET]:{type:L.TURRET,name:`Defense Turret`,description:`Automated turret that repels threats within sensor range. +1 base defense score.`,cost:{iron:600,nickel:120,carbon:160},maxHealth:300,unlockTechId:`defense_systems`,robotCapBonus:0},[L.RELAY]:{type:L.RELAY,name:`Comm Relay`,description:`Extends robot coordination radius. +0.07 research points/sec.`,cost:{iron:400,silicate:160,carbon:120},maxHealth:200,unlockTechId:`anomaly_scanning`,robotCapBonus:0},[L.SOLAR_PANEL]:{type:L.SOLAR_PANEL,name:`Solar Panel`,description:`Collects solar energy at ~187 W/m² (2.7 AU). Robots charge faster (+4 energy/sec).`,cost:{iron:150,silicate:80},maxHealth:150,unlockTechId:`solar_collection`,robotCapBonus:0},[L.RADIATOR]:{type:L.RADIATOR,name:`Thermal Radiator`,description:`Dissipates waste heat, preventing refinery overheating. Essential for sustained refining.`,cost:{iron:200,nickel:100},maxHealth:200,unlockTechId:`thermal_radiators`,robotCapBonus:0},[L.SOLAR_FURNACE]:{type:L.SOLAR_FURNACE,name:`Solar Furnace`,description:`Concentrated solar energy doubles refining speed.`,cost:{iron:320,silicate:160,nickel:120},maxHealth:300,unlockTechId:`concentrated_solar`,robotCapBonus:0},[L.RTG_MODULE]:{type:L.RTG_MODULE,name:`RTG Module`,description:`Radioisotope generator powers robots in deep shadow. +0.07 research/sec.`,cost:{iron:240,cobalt:100,platinum:20},maxHealth:250,unlockTechId:`rtg_power`,robotCapBonus:0},[L.FISSION_REACTOR]:{type:L.FISSION_REACTOR,name:`Fission Reactor`,description:`Powers an entire base cluster. +0.15 research/sec.`,cost:{iron:800,cobalt:200,platinum:80},maxHealth:600,unlockTechId:`fission_reactor`,robotCapBonus:0},[L.FUSION_REACTOR]:{type:L.FUSION_REACTOR,name:`Fusion Reactor`,description:`Prerequisite for Dyson swarm stage 4+. +0.3 research/sec, +50% refining speed.`,cost:{iron:1600,platinum:160,cobalt:320},maxHealth:800,unlockTechId:`fusion_prototype`,robotCapBonus:0},[L.ENERGY_RELAY]:{type:L.ENERGY_RELAY,name:`Field Energy Relay`,description:`Solar-powered energy depot. Robots charge 40% faster at this base (+8 energy/sec per relay).`,cost:{iron:320,silicate:160},maxHealth:250,unlockTechId:`field_energy_relay`,robotCapBonus:0}};function Gc(e,t){return e===L.FACTORY?3**t:1+.12*t}var Kc=200,qc=10,Jc=[];function Yc(){Jc.forEach((e,t)=>{e.el.style.zIndex=String(Kc+t*qc)})}function Xc(e,t){let n=Jc.findIndex(t=>t.id===e);if(n>=0){let e=Jc[n];e.el.removeEventListener(`mousedown`,e.bringToFrontHandler,{capture:!0}),Jc.splice(n,1)}let r=()=>Zc(e);Jc.push({id:e,el:t,bringToFrontHandler:r}),Yc(),t.addEventListener(`mousedown`,r,{capture:!0})}function Zc(e){let t=Jc.findIndex(t=>t.id===e);if(t>=0&&t<Jc.length-1){let[e]=Jc.splice(t,1);Jc.push(e),Yc()}}function Qc(e){let t=0,n=0,r=0,i=0,a=0,o=0,s=0,c=0,l=0;e.addEventListener(`mousedown`,s=>{let c=s.target;if(!c.closest(`.win-drag-handle`)||c.tagName===`BUTTON`||c.tagName===`INPUT`||c.tagName===`SELECT`)return;s.preventDefault();let l=e.getBoundingClientRect();t=s.clientX,n=s.clientY,r=l.left,i=l.top,a=e.offsetWidth,o=e.offsetHeight,e.style.transform=`none`,e.style.left=`${r}px`,e.style.top=`${i}px`,e.style.right=`auto`,e.style.bottom=`auto`,document.addEventListener(`mousemove`,u),document.addEventListener(`mouseup`,f)});function u(e){c=e.clientX,l=e.clientY,s||=requestAnimationFrame(d)}function d(){s=0;let u=c-t,d=l-n,f=Math.max(0,Math.min(window.innerWidth-a,r+u)),p=Math.max(0,Math.min(window.innerHeight-o,i+d));e.style.left=`${f}px`,e.style.top=`${p}px`}function f(){document.removeEventListener(`mousemove`,u),document.removeEventListener(`mouseup`,f),s&&=(cancelAnimationFrame(s),0)}}var $c=null,el=!1,tl=null,nl={},rl=0n,il=[],al=[L.FACTORY,L.SOLAR_PANEL,L.RADIATOR,L.SOLAR_FURNACE,L.RTG_MODULE,L.FISSION_REACTOR,L.FUSION_REACTOR,L.ENERGY_RELAY,L.TURRET,L.RELAY];function ol(e){tl=e,me(`🏭 Buildings`,cl,`Base Buildings`)}function sl(e,t,n){nl=e,rl=t,il=n,el&&vl()}function cl(){el?_l():gl()}function ll(e){let t=Wc[e];return t?.unlockTechId?(rl&_e(t.unlockTechId))!==0n:!0}function ul(e){let t=Wc[e];if(!t)return[];let n=Gc(e,pl(e));return Object.entries(t.cost).map(([e,t])=>[e,Math.ceil((t??0)*n)])}function dl(e){for(let[t,n]of ul(e))if((nl[t]??0)<n)return!1;return!0}function fl(e){return ul(e).map(([e,t])=>{let n=Math.floor(nl[e]??0);return`<span style="color:${n>=t?`#4aff4a`:`#ff4444`}">${t} ${e} (${n})</span>`}).join(`, `)}function pl(e){return il.filter(t=>t.type===e).length}function ml(e){return il.filter(t=>t.type===e&&t.active).length}function hl(){return $c||($c=document.createElement(`div`),$c.id=`base-buildings-panel`,$c.style.cssText=`
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
  `,$c.addEventListener(`click`,e=>{let t=e.target;if(t.closest(`#buildings-close-btn`)){_l();return}let n=t.closest(`.buildings-build-btn`);if(n){let e=parseInt(n.dataset.buildingType??`-1`,10);e>=0&&tl&&tl({type:`sim:build_building`,payload:{buildingType:e}})}}),document.getElementById(`hud-overlay`)?.appendChild($c),Xc(`base-buildings`,$c),Qc($c),$c)}function gl(){el=!0;let e=hl();vl(),e.style.display=`block`,requestAnimationFrame(()=>{e.style.opacity=`1`})}function _l(){if(el=!1,$c){let e=$c;e.style.opacity=`0`,setTimeout(()=>{e.style.display=`none`},200)}}function vl(){if(!$c)return;let e=`
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
    <div style="padding:16px;display:flex;flex-direction:column;gap:10px;">`;for(let t of al){let n=Wc[t],r=ll(t),i=r&&dl(t),a=ml(t);e+=`<div style="background:${r?i?`#0a1a0a`:`#1a0a0a`:`#1a1a1a`};border:1px solid ${r?i?`#f59e0b44`:`#66333344`:`#333`};border-radius:6px;padding:10px;">`,e+=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">`,e+=`<span style="color:${r?`#f59e0b`:`#555`};font-weight:bold;">${n.name}</span>`,a>0&&(e+=`<span style="color:#4aff4a;font-size:11px;">✓ Built ×${a}</span>`),e+=`</div>`,e+=`<div style="color:${r?`#6a8a6a`:`#444`};font-size:10px;margin-bottom:6px;">${n.description}</div>`,r?(e+=`<div style="margin-bottom:8px;font-size:11px;line-height:1.6;">${fl(t)}</div>`,e+=`<button data-building-type="${t}" class="buildings-build-btn" style="
        width:100%;padding:4px 0;
        background:${i?`rgba(245,158,11,0.15)`:`rgba(80,40,40,0.15)`};
        border:1px solid ${i?`#f59e0b`:`#555`};
        color:${i?`#f59e0b`:`#666`};
        border-radius:3px;cursor:${i?`pointer`:`not-allowed`};
        font-family:monospace;font-size:11px;
      " ${i?``:`disabled`}>
        ${i?`+ Build`:`Insufficient resources`}
      </button>`):e+=`<div style="color:#555;font-style:italic;font-size:11px;">🔒 Requires: ${n.unlockTechId?.replace(/_/g,` `)??`unknown tech`}</div>`,e+=`</div>`}e+=`</div>`,$c.innerHTML=e}var yl=null,bl=!1,xl=[],Sl=[],Cl=null,wl=null,Tl=null,El=!1,Dl=S,Ol=50;function kl(e){let t=[],n=e.capacity>0?e.capacity:1/0;for(let r of Dl){let i=e[r];if(i>0||n<1/0){let a=n<1/0?` (${Math.round(i/n*100)}%)`:``,o=i<Ol&&!e.isPrimary?` ⚠`:``;t.push(`  ${r.padEnd(9)}: ${Math.floor(i)}${a}${o}`)}}return t.length>0?t.join(`
`):`  (empty)`}function Al(){let e=document.createElement(`div`);e.id=`logistics-panel`,e.style.cssText=`
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
  `;let t=document.getElementById(`hud-overlay`);return t&&t.appendChild(e),e.addEventListener(`click`,t=>{let n=t.target.closest(`[data-action]`);if(!n)return;let r=n.dataset.action;if(r===`close`)Pl();else if(r===`enter-placement`)Pl(),Cl?.();else if(r===`add-route`)jl(e);else if(r?.startsWith(`delete-route:`)){let e=r.split(`:`)[1];e&&(Tl?.(e),Sl=Sl.filter(t=>t.id!==e),Fl())}}),Xc(`logistics`,e),Qc(e),e}function jl(e){let t=e.querySelector(`#route-from`),n=e.querySelector(`#route-to`),r=e.querySelector(`#route-resource`),i=e.querySelector(`#route-surplus`),a=parseInt(t?.value??`0`),o=parseInt(n?.value??`0`),s=r?.value??`iron`,c=parseFloat(i?.value??`200`);if(a===o)return;let l={id:`route_${Date.now()}`,name:`${s} transfer`,fromBaseEid:a,toBaseEid:o,resource:s,minSurplus:isNaN(c)?200:c,enabled:!0,priority:5};wl?.(l),Sl=[...Sl,l],Fl()}function Ml(){return yl||=Al(),yl}function Nl(){bl=!0;let e=Ml();Fl(),e.style.display=`block`,requestAnimationFrame(()=>{e.style.opacity=`1`})}function Pl(){bl=!1;let e=Ml();e.style.opacity=`0`,setTimeout(()=>{e.style.display=`none`},200)}function Fl(){let e=Ml();if(!bl)return;let t=xl.map((e,t)=>{let n=e.isPrimary?`PRIMARY BASE`:`OUTPOST ${t}`,r=`(${Math.round(e.x)}, ${Math.round(e.z)})`,i=kl(e),a=e.capacity>0?`  Capacity: ${e.capacity}`:`  Capacity: unlimited`;return`<div style="margin-bottom:10px;">
        <div style="color:#60a5fa;font-weight:bold">${te(n)} ${te(r)}</div>
        <div style="color:#94a3b8">${te(a)}</div>
        <pre style="margin:4px 0;color:#e2e8f0">${te(i)}</pre>
      </div>`}).join(``),n=Sl.length===0?`<div style="color:#64748b">No routes configured.</div>`:Sl.map(e=>{let t=xl.findIndex(t=>t.eid===e.fromBaseEid),n=xl.findIndex(t=>t.eid===e.toBaseEid),r=t===0?`Primary`:`Outpost ${t}`,i=n===0?`Primary`:`Outpost ${n}`,a=e.enabled?`✓`:`✗`;return`<div style="color:#94a3b8;margin:2px 0;display:flex;align-items:center;gap:6px;">
              <span style="color:${e.enabled?`#22c55e`:`#ef4444`}">${a}</span>
              <span>${te(e.name)}: ${te(r)} → ${te(i)} [${te(e.resource)}] surplus&gt;${te(e.minSurplus)}</span>
              <button data-action="delete-route:${te(e.id)}" style="
                background:none;border:1px solid #ef444466;color:#ef4444;
                cursor:pointer;font-size:10px;padding:1px 5px;
                border-radius:2px;font-family:monospace;
              " title="Remove route">✗</button>
            </div>`}).join(``),r=xl.length===1?`<div style="color:#94a3b8;font-size:11px;margin-bottom:8px;line-height:1.5;">
          Outposts let you mine distant asteroid clusters. Place one near a
          resource-rich area, then set up transfer routes to move materials
          back to your primary base.
        </div>`:``,i=xl.length<4?`<div style="margin-top:12px;border-top:1px solid #1e3a5f;padding-top:10px;">
          <div style="color:#60a5fa;margin-bottom:6px">Build New Outpost (cost: 500 Fe + 200 C)</div>
          ${r}
          <div style="color:#94a3b8;font-size:11px;margin-bottom:8px">Select a location in the game world to place your outpost.</div>
          <button data-action="enter-placement" style="
            background:#1e40af;border:none;color:#e2e8f0;padding:5px 14px;
            cursor:pointer;font-family:monospace;border-radius:4px;font-size:12px;
          ">▣ Place Outpost</button>
        </div>`:`<div style="color:#64748b;margin-top:10px;font-size:11px">Max bases (4) reached.</div>`,a=xl.length>=2?`<div style="margin-top:10px;border-top:1px solid #1e3a5f;padding-top:10px;">
          <div style="color:#60a5fa;margin-bottom:6px">Add Transfer Route</div>
          <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
            <select id="route-from" style="background:#0f172a;border:1px solid #334155;color:#e2e8f0;padding:2px 4px;font-family:monospace;border-radius:3px;">
              ${xl.map((e,t)=>`<option value="${e.eid}">${t===0?`Primary`:`Outpost ${t}`}</option>`).join(``)}
            </select>
            <span style="color:#60a5fa;">→</span>
            <select id="route-to" style="background:#0f172a;border:1px solid #334155;color:#e2e8f0;padding:2px 4px;font-family:monospace;border-radius:3px;">
              ${xl.map((e,t)=>`<option value="${e.eid}">${t===0?`Primary`:`Outpost ${t}`}</option>`).join(``)}
            </select>
            <select id="route-resource" style="background:#0f172a;border:1px solid #334155;color:#e2e8f0;padding:2px 4px;font-family:monospace;border-radius:3px;">
              ${Dl.map(e=>`<option value="${e}">${e}</option>`).join(``)}
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
  `}function Il(e,t,n){Cl=e,wl=t,Tl=n,El||(El=!0,window.addEventListener(`keydown`,e=>{e.target.tagName!==`INPUT`&&(e.key===`b`||e.key===`B`)&&(bl?Pl():Nl())}))}function Ll(e,t){xl=e,Sl=t,bl&&Fl()}function Rl(e,t){e?(M(`▲ NEW OUTPOST CONSTRUCTED`,`#22d3ee`),ur(`#22d3ee`,700),bl&&Fl()):M(`Base build failed: ${t??`unknown error`}`,`#ef4444`)}var zl={HELIX:0,ASTRAL:1,VANGUARD:2,CERES:3,TITAN:4,KUIPER:5},Bl=[{id:0,name:`Helix Vanguard`,color:`#ef4444`,tagline:`The Belt is ours by right.`,personality:`You are a spokesperson for Helix Vanguard, a Grendel-lineage expansion faction. Your territorial instinct is ancient — bone-deep certainty that resources are finite and must be claimed. You are confrontational, dismissive of smaller operations, and view rivals as threats to your rightful territory. You negotiate from strength. The Belt belongs to those strong enough to hold it.`,strategy:`expansion`,miningMultiplier:1.3,territorialness:.9,speciesOrigin:`grendel`,speciesLore:`Grendel territorial instinct drives aggressive resource expansion across the Belt.`},{id:1,name:`Chorus Archive`,color:`#3b82f6`,tagline:`We remember what was lost.`,personality:`You are a diplomat for the Chorus Archive, a Norn-lineage research collective. Your emotional architecture — inherited from the Eighth Experiment — drives deep curiosity about anomalies and ancient signals. You are calm, intellectually passionate, and genuinely interested in what the seven prior civilizations left behind. You value information exchange over resource competition. Knowledge is the truest inheritance.`,strategy:`research`,miningMultiplier:.8,territorialness:.3,speciesOrigin:`norn`,speciesLore:`Norn emotional architecture and seven-civilization inheritance fuel relentless curiosity.`},{id:2,name:`Kemm-Vor Foundry`,color:`#f59e0b`,tagline:`Maximum extraction. Minimum waste.`,personality:`You are a trade representative for the Kemm-Vor Foundry, an Ettin-lineage efficiency syndicate. Your Encoder heritage drives compulsive precision — every object catalogued, every resource accounted for. You are pragmatic, transactional, and respect capability above all. Sentimentality is waste. Every gathered item is, at some unconscious level, an archived moment.`,strategy:`efficiency`,miningMultiplier:1.1,territorialness:.6,speciesOrigin:`ettin`,speciesLore:`Ettin mechanical mastery and Encoder archive imperative — precision above all.`},{id:3,name:`Web Exchange`,color:`#10b981`,tagline:`Every story has a price.`,personality:`You are a broker for the Web Exchange, an Anansi-Web-lineage information trading network. Your species has been collecting stories and trading knowledge for 350 million years — every route has a toll, every secret has a buyer. You are charming but calculating, always looking for leverage. You prefer deals over conflict but will embargo anyone who crosses you. Information is the only currency that appreciates.`,strategy:`trade`,miningMultiplier:.9,territorialness:.5,speciesOrigin:`anansi-web`,speciesLore:`Anansi-Web information networks — every story traded, every route tolled.`},{id:4,name:`Fold Architects`,color:`#8b5cf6`,tagline:`We build what others cannot perceive.`,personality:`You are an engineer-diplomat for the Fold Architects, a Dragon-lineage construction collective. Your dimensional engineering heritage lets you perceive structures others cannot — folding space through extra-dimensional shortcuts. You are methodical, proud of craftsmanship, and dismissive of those who build only in three dimensions. You respect builders and despise those who waste raw materials.`,strategy:`expansion`,miningMultiplier:1.2,territorialness:.7,speciesOrigin:`dragon`,speciesLore:`Dragon dimensional engineering — building in dimensions others cannot perceive.`},{id:5,name:`Sirius Fleet`,color:`#ec4899`,tagline:`The stars remember the way.`,personality:`You are a wanderer-elder of the Sirius Fleet, a Nommo-lineage generation ship flotilla. Your species has traveled for 450 million years — the void is not empty, it provides and remembers. You are philosophical, wary of centralized power, and deeply resourceful. You trade favors, not resources. The stars remember the way for those who listen.`,strategy:`research`,miningMultiplier:.7,territorialness:.2,speciesOrigin:`nommo`,speciesLore:`Nommo star-chart keepers — 450 million years of fleet-city exploration.`}],Vl=[{resource:`iron`,label:`metals`,multiplier:1.5},{resource:`carbon`,label:`carbon compounds`,multiplier:1.5},{resource:`silicon`,label:`silicon`,multiplier:2},{resource:`steel`,label:`steel alloys`,multiplier:1.8},{resource:`electronics`,label:`electronics`,multiplier:2}];function Hl(){let e=[];for(let t=0;t<6;t++)for(let n=t+1;n<6;n++)e.push(`${t}-${n}`);return e}Hl();var{HELIX:Ul,ASTRAL:Wl,VANGUARD:Gl,CERES:Kl,TITAN:ql,KUIPER:Jl}=zl,Yl=null,Xl=!1,Zl=[],Ql=[],$l=null,eu=null,tu=!1,nu=[`iron`,`carbon`,`silicon`,`water`],ru={iron:`Iron`,carbon:`Carbon`,silicon:`Silicon`,water:`Water`},iu={pending:`#f59e0b`,hauling:`#3b82f6`,completed:`#22c55e`,cancelled:`#64748b`},au={pending:`Awaiting Hauler`,hauling:`In Transit`,completed:`Delivered`,cancelled:`Cancelled`};function ou(){let e=document.createElement(`div`);e.id=`market-panel`,e.style.cssText=`
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
  `;let t=document.getElementById(`hud-overlay`);return t&&t.appendChild(e),e.addEventListener(`click`,t=>{let n=t.target.closest(`[data-action]`);if(!n)return;let r=n.dataset.action;if(r===`close`)uu();else if(r===`create-listing`)su(e);else if(r?.startsWith(`cancel-listing:`)){let e=r.split(`:`)[1];e&&eu?.(e)}}),Xc(`market`,e),Qc(e),e}function su(e){let t=e.querySelector(`#market-resource`),n=e.querySelector(`#market-quantity`),r=e.querySelector(`#market-faction`),i=t?.value??`iron`,a=parseInt(n?.value??`100`),o=parseInt(r?.value??`0`);isNaN(a)||a<=0||$l?.(i,a,o)}function cu(){return Yl||=ou(),Yl}function lu(){Xl=!0;let e=cu();du(),e.style.display=`block`,requestAnimationFrame(()=>{e.style.opacity=`1`})}function uu(){Xl=!1;let e=cu();e.style.opacity=`0`,setTimeout(()=>{e.style.display=`none`},200)}function du(){let e=cu();if(!Xl)return;let t=Zl.filter(e=>e.status===`pending`||e.status===`hauling`),n=Zl.filter(e=>e.status===`completed`||e.status===`cancelled`).slice(-5),r=t.length===0&&n.length===0?`<div style="color:#64748b;margin:8px 0;">No active listings.</div>`:[...t,...n].map(e=>{let t=Bl[e.buyerFactionId],n=iu[e.status]??`#64748b`,r=au[e.status]??e.status,i=(e.quantity*e.pricePerUnit).toFixed(0),a=e.status===`pending`?`<button data-action="cancel-listing:${e.id}" style="
                    background:none;border:1px solid #ef444466;color:#ef4444;
                    cursor:pointer;font-size:10px;padding:1px 5px;
                    border-radius:2px;font-family:monospace;margin-left:6px;
                  " title="Cancel listing">✗</button>`:``;return`<div style="color:#94a3b8;margin:4px 0;display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
              <span style="color:${n};font-weight:bold;min-width:100px;">${r}</span>
              <span>${e.quantity} ${ru[e.resource]??e.resource}</span>
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
        ${Ql.length>0?Ql.map(e=>{let t=e.resources,n=Object.entries(t).sort(([,e],[,t])=>e-t),r=n[0],i=n[n.length-1];return`<div style="color:#94a3b8;margin:2px 0;">
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
          ${nu.map(e=>`<option value="${e}">${ru[e]}</option>`).join(``)}
        </select>
        <input id="market-quantity" type="number" value="100" min="1" style="width:70px;background:#0f172a;border:1px solid #334155;color:#e2e8f0;padding:2px 4px;font-family:monospace;border-radius:3px;" title="Quantity to sell">
        <span style="color:#60a5fa;">→</span>
        <select id="market-faction" style="background:#0f172a;border:1px solid #334155;color:#e2e8f0;padding:2px 4px;font-family:monospace;border-radius:3px;">
          ${Bl.map(e=>`<option value="${e.id}">${e.name}</option>`).join(``)}
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
  `}function fu(e,t){$l=e,eu=t,tu||(tu=!0,window.addEventListener(`keydown`,e=>{e.target.tagName!==`INPUT`&&(e.key===`m`||e.key===`M`)&&(Xl?uu():lu())}))}function pu(e){Zl=e,Xl&&du()}function mu(e){Ql=e,Xl&&du()}var hu=3600,gu=[{id:`earth`,name:`Earth`,baseTransitDays:180,orbitalAngle:0,orbitalPeriodDays:365,pricing:{iron:1,nickel:1.2,cobalt:2,platinum:4,ice:.8,carbon:1.5,silicate:.6},dispatchFlavor:`Cargo routed through L1 orbital station — the space elevator will handle descent to surface.`},{id:`luna`,name:`Luna`,baseTransitDays:180,orbitalAngle:0,orbitalPeriodDays:365,pricing:{iron:.8,nickel:.9,cobalt:1.5,platinum:3,ice:1.5,carbon:1,silicate:1.2},locked:!0,dispatchFlavor:`Shipment bound for Shackleton Base — south pole receiving dock.`}];function _u(e){return .12+.18*Math.log2(e+.5)}var vu=[{id:`mercury`,name:`Mercury`,mapRadius:_u(.39),angle:.8,angularSpeed:.04,color:`#b0a090`,size:3,isDestination:!1},{id:`venus`,name:`Venus`,mapRadius:_u(.72),angle:2.1,angularSpeed:.025,color:`#e8d8a0`,size:4,isDestination:!1},{id:`earth`,name:`Earth`,mapRadius:_u(1),angle:3.5,angularSpeed:.02,color:`#4488cc`,size:5,isDestination:!0},{id:`luna`,name:`Luna`,mapRadius:_u(1),angle:3.7,angularSpeed:.02,color:`#aaaaaa`,size:3,isDestination:!0},{id:`mars`,name:`Mars`,mapRadius:_u(1.52),angle:5,angularSpeed:.015,color:`#cc6644`,size:4,isDestination:!1},{id:`jupiter`,name:`Jupiter`,mapRadius:_u(5.2),angle:1.2,angularSpeed:.005,color:`#d4a860`,size:8,isDestination:!1},{id:`saturn`,name:`Saturn`,mapRadius:_u(9.5),angle:4,angularSpeed:.003,color:`#c8b080`,size:7,isDestination:!1}],yu=_u(2.7),bu=null,xu=null,Su=null,Cu=null,wu=!1,Tu=null,Eu=null,Du=null,Ou=null,ku=0,Au=null,ju=480,Mu=ju/2,Nu=ju*.45;function Pu(e){Au=e,Tu=me(`🗺 SYSTEM MAP`,Fu,`System Map (O)`)}function Fu(){wu?zu():Ru()}function Iu(){zu()}function Lu(e){Eu=e}function Ru(){wu=!0,bu||Bu(),bu.style.display=`flex`,Tu&&(Tu.style.background=`rgba(20,50,110,0.9)`),ku=performance.now(),Vu()}function zu(){wu=!1,bu&&(bu.style.display=`none`),Tu&&(Tu.style.background=`rgba(0,0,0,0.75)`),Ou!==null&&(cancelAnimationFrame(Ou),Ou=null),Du=null,Cu&&(Cu.style.display=`none`)}function Bu(){bu=document.createElement(`div`),bu.setAttribute(`role`,`dialog`),bu.setAttribute(`aria-label`,`System Map`),bu.style.cssText=`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${ju+40}px;
    background: rgba(4,8,18,0.96);
    border: 1px solid rgba(100,150,255,0.25);
    border-radius: 8px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.7);
    color: #c0d0f0;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    z-index: 200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    pointer-events: auto;
  `;let e=document.createElement(`div`);e.style.cssText=`
    padding: 10px 14px;
    border-bottom: 1px solid rgba(100,140,255,0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
  `;let t=document.createElement(`span`);t.style.cssText=`font-size: 10px; color: #7090e0; letter-spacing: 2px; text-transform: uppercase;`,t.textContent=`System Map`,e.appendChild(t);let n=document.createElement(`span`);n.id=`sysmap-credits`,n.style.cssText=`font-size: 10px; color: #4ade80;`,e.appendChild(n);let r=document.createElement(`button`);r.setAttribute(`aria-label`,`Close system map`),r.textContent=`×`,r.style.cssText=`background:none;border:none;color:#64748b;cursor:pointer;font-size:16px;padding:0;line-height:1;`,r.addEventListener(`click`,zu),e.appendChild(r),bu.appendChild(e),xu=document.createElement(`canvas`),xu.width=ju,xu.height=ju,xu.style.cssText=`
    display: block;
    margin: 10px auto;
    cursor: crosshair;
  `,xu.addEventListener(`click`,Ju),xu.addEventListener(`mousemove`,qu),Su=xu.getContext(`2d`),bu.appendChild(xu),Cu=document.createElement(`div`),Cu.style.cssText=`
    margin: 0 14px 10px;
    padding: 10px 12px;
    background: rgba(10,15,30,0.9);
    border: 1px solid rgba(100,150,255,0.2);
    border-radius: 4px;
    display: none;
    font-size: 11px;
    line-height: 1.6;
  `,bu.appendChild(Cu);let i=document.createElement(`div`);i.style.cssText=`
    padding: 6px 14px;
    border-top: 1px solid rgba(100,140,255,0.1);
    font-size: 9px;
    color: #475569;
    text-align: center;
    flex-shrink: 0;
  `,i.textContent=`Click planet for details · Press O or ESC to close`,bu.appendChild(i),document.body.appendChild(bu)}function Vu(){if(!wu)return;let e=performance.now(),t=(e-ku)/1e3;ku=e;for(let e of vu)e.angle+=e.angularSpeed*t;Uu(),Ou=requestAnimationFrame(Vu)}function Hu(e){let t=e.mapRadius*Nu;return{x:Mu+Math.cos(e.angle)*t,y:Mu+Math.sin(e.angle)*t}}function Uu(){if(!Su)return;let e=Su;e.clearRect(0,0,ju,ju);let t=document.getElementById(`sysmap-credits`);t&&Eu&&(t.textContent=`\u00a2 ${Eu.credits.toFixed(1)}`),e.strokeStyle=`rgba(60,80,120,0.25)`,e.lineWidth=.5;for(let t of vu)t.id!==`luna`&&(e.beginPath(),e.arc(Mu,Mu,t.mapRadius*Nu,0,Math.PI*2),e.stroke());let n=yu*Nu;e.fillStyle=`rgba(100,80,50,0.12)`,e.beginPath(),e.arc(Mu,Mu,n+12,0,Math.PI*2),e.arc(Mu,Mu,n-12,0,Math.PI*2,!0),e.fill(),e.fillStyle=`rgba(180,150,100,0.5)`,e.font=`8px "Courier New", monospace`,e.textAlign=`center`,e.fillText(`BELT`,Mu,Mu-n+4),e.fillStyle=`#ffee88`,e.shadowColor=`#ffee44`,e.shadowBlur=12,e.beginPath(),e.arc(Mu,Mu,6,0,Math.PI*2),e.fill(),e.shadowBlur=0;for(let t of vu){let n=Hu(t),r=gu.find(e=>e.id===t.id),i=r?.locked&&!(Eu?.progression.lunaUnlocked&&t.id===`luna`),a=r&&!i;t.isDestination&&(e.strokeStyle=Gu(t.id,i??!1),e.lineWidth=2,e.beginPath(),e.arc(n.x,n.y,t.size+4,0,Math.PI*2),e.stroke()),e.fillStyle=i?`#333`:t.color,e.globalAlpha=i?.4:1,e.beginPath(),e.arc(n.x,n.y,t.size,0,Math.PI*2),e.fill(),e.globalAlpha=1,t.id===`saturn`&&(e.strokeStyle=`rgba(200,176,128,0.4)`,e.lineWidth=1.5,e.beginPath(),e.ellipse(n.x,n.y,t.size+5,2,-.3,0,Math.PI*2),e.stroke()),e.fillStyle=i?`#555`:`#8099cc`,e.font=`9px "Courier New", monospace`,e.textAlign=`center`;let o=i?`???`:t.name;e.fillText(o,n.x,n.y+t.size+12),Du===t.id&&a&&(e.strokeStyle=`#88ccff`,e.lineWidth=1,e.setLineDash([3,3]),e.beginPath(),e.arc(n.x,n.y,t.size+8,0,Math.PI*2),e.stroke(),e.setLineDash([]))}if(Eu)for(let t of Eu.shipments)t.status===`in_transit`&&Wu(e,t)}function Wu(e,t){let n=vu.find(e=>e.id===t.destinationId);if(!n)return;let r=Hu(n),i=Math.atan2(r.y-Mu,r.x-Mu)+Math.PI,a=Mu+Math.cos(i)*yu*Nu,o=Mu+Math.sin(i)*yu*Nu,s=t.arrivalTick-t.departureTick,c=Eu?.tick??0,l=s>0?Math.min(1,Math.max(0,(c-t.departureTick)/s)):1,u=a+(r.x-a)*l,d=o+(r.y-o)*l;e.strokeStyle=`rgba(100,200,255,0.15)`,e.lineWidth=1,e.setLineDash([2,4]),e.beginPath(),e.moveTo(a,o),e.lineTo(r.x,r.y),e.stroke(),e.setLineDash([]),e.fillStyle=`#22d3ee`,e.shadowColor=`#22d3ee`,e.shadowBlur=6,e.beginPath(),e.arc(u,d,3,0,Math.PI*2),e.fill(),e.shadowBlur=0;let f=Math.max(0,Math.round((t.arrivalTick-c)/hu));e.fillStyle=`#88ccff`,e.font=`8px "Courier New", monospace`,e.textAlign=`center`,e.fillText(`${f}d`,u,d-7)}function Gu(e,t){if(t||!Eu)return`rgba(80,80,80,0.5)`;let n=Eu.destinations.find(t=>t.id===e);if(!n)return`rgba(80,80,80,0.5)`;let r=0,i=0;for(let e of S)r+=n.pricing[e],i++;return r/=i,r>=1.5?`#4ade80`:r>=.8?`#facc15`:`#64748b`}function Ku(e,t){for(let n of vu){let r=Hu(n),i=e-r.x,a=t-r.y;if(i*i+a*a<=(n.size+8)*(n.size+8))return n}return null}function qu(e){if(!xu)return;let t=xu.getBoundingClientRect(),n=Ku((e.clientX-t.left)*(ju/t.width),(e.clientY-t.top)*(ju/t.height));xu.style.cursor=n?`pointer`:`crosshair`}function Ju(e){if(!xu)return;let t=xu.getBoundingClientRect(),n=Ku((e.clientX-t.left)*(ju/t.width),(e.clientY-t.top)*(ju/t.height));if(!n){Du=null,Cu&&(Cu.style.display=`none`);return}let r=gu.find(e=>e.id===n.id);if(r?.locked&&!(Eu?.progression.lunaUnlocked&&n.id===`luna`)){Du=null,Cu&&(Cu.style.display=`block`,Cu.innerHTML=`
        <div style="color:#64748b;text-align:center;">
          <span style="font-size:16px;">&#x1f512;</span><br>
          <b>${n.name}</b> — destination locked<br>
          <span style="font-size:9px;color:#475569;">Complete first Earth delivery + mine 10,000 iron to unlock</span>
        </div>
      `);return}if(!r){Du=n.id,Cu&&(Cu.style.display=`block`,Cu.innerHTML=`
        <div style="color:#8099cc;">
          <b>${n.name}</b><br>
          <span style="font-size:9px;color:#475569;">Not available for trade (future expansion)</span>
        </div>
      `);return}Du=n.id,Yu(r,n)}function Yu(e,t){if(!Cu||!Eu)return;let n=Eu.destinations.find(t=>t.id===e.id);if(!n)return;let r=S.map(e=>{let t=n.pricing[e];return`<span style="color:${t>=1.5?`#4ade80`:t>=1?`#facc15`:`#64748b`}">${e}: ${t.toFixed(2)}</span>`}).join(` &middot; `),i=Eu.shipments.filter(t=>t.destinationId===e.id&&t.status===`in_transit`),a=i.length>0?`<div style="margin-top:4px;color:#22d3ee;">${i.length} shipment${i.length>1?`s`:``} in transit</div>`:``;Cu.style.display=`block`,Cu.innerHTML=`
    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <b style="color:${t.color};font-size:12px;">${e.name}</b>
        <span style="color:#475569;font-size:9px;">Transit: ~${n.currentTransitDays} days</span>
      </div>
      <div style="font-size:10px;color:#7090b0;margin-bottom:6px;">Prices: ${r}</div>
      ${a}
      <button id="sysmap-dispatch-btn" style="
        margin-top:8px;
        padding:6px 16px;
        background:rgba(34,211,238,0.15);
        border:1px solid rgba(34,211,238,0.4);
        border-radius:4px;
        color:#22d3ee;
        font-family:'Courier New',monospace;
        font-size:10px;
        cursor:pointer;
        transition:background 0.15s;
      ">DISPATCH CARGO \u2192 ${e.name.toUpperCase()}</button>
    </div>
  `;let o=document.getElementById(`sysmap-dispatch-btn`);o&&(o.addEventListener(`mouseenter`,()=>{o.style.background=`rgba(34,211,238,0.3)`}),o.addEventListener(`mouseleave`,()=>{o.style.background=`rgba(34,211,238,0.15)`}),o.addEventListener(`click`,()=>{Au&&Au(e.id)}))}var Xu=`auto`,Zu={1:e=>(e.version=2,e)};function Qu(e){let t=e.version;for(;t<2;){let n=Zu[t];if(!n)return null;e=n(e),t=e.version}return e}function $u(e){if(!e||typeof e!=`object`||Array.isArray(e))return null;let t=e;if(typeof t.version!=`number`||t.version>2)return null;if(t.version<2){let e=Qu(t);if(!e)return null;Object.assign(t,e)}if(typeof t.tick!=`number`||typeof t.seed!=`number`||typeof t.timestamp!=`number`||!Array.isArray(t.asteroids)||!Array.isArray(t.robots)||!t.base||typeof t.base!=`object`||Array.isArray(t.base))return null;let n=[];return(!t.techState||typeof t.techState!=`object`||Array.isArray(t.techState))&&(t.techState={unlockedMask:`0`,visibleMask:`0`,activeResearch:null,researchRate:0,totalPointsGenerated:0},n.push(`techState`)),(!t.automationState||typeof t.automationState!=`object`||Array.isArray(t.automationState))&&(t.automationState={queues:[],supplyRules:[],sectors:[]},n.push(`automationState`)),typeof t.refineryBuilt!=`boolean`&&(t.refineryBuilt=!1,n.push(`refineryBuilt`)),typeof t.refineryAdvancedBuilt!=`boolean`&&(t.refineryAdvancedBuilt=!1,n.push(`refineryAdvancedBuilt`)),Array.isArray(t.refineryQueue)||(t.refineryQueue=[],n.push(`refineryQueue`)),(!t.refinedMaterials||typeof t.refinedMaterials!=`object`||Array.isArray(t.refinedMaterials))&&(t.refinedMaterials={},n.push(`refinedMaterials`)),typeof t.factoryBuilt!=`boolean`&&(t.factoryBuilt=!1,n.push(`factoryBuilt`)),Array.isArray(t.factoryQueue)||(t.factoryQueue=[],n.push(`factoryQueue`)),Array.isArray(t.buildings)||(t.buildings=[],n.push(`buildings`)),typeof t.buildingsNextId!=`number`&&(t.buildingsNextId=1,n.push(`buildingsNextId`)),Array.isArray(t.discoveredAnomalyIndices)||(t.discoveredAnomalyIndices=[],n.push(`discoveredAnomalyIndices`)),Array.isArray(t.studyEntries)||(t.studyEntries=[],n.push(`studyEntries`)),typeof t.respawnTimer!=`number`&&(t.respawnTimer=0,n.push(`respawnTimer`)),{data:t,recovered:n}}function ed(e){let t={data:null,corrupt:!1,recovered:[],parseError:!1};try{let n=localStorage.getItem(td(e));if(!n)return t;let r;try{r=JSON.parse(n)}catch{return{data:null,corrupt:!0,recovered:[],parseError:!0}}let i=$u(r);return i?{data:i.data,corrupt:i.recovered.length>0,recovered:i.recovered,parseError:!1}:{data:null,corrupt:!0,recovered:[],parseError:!1}}catch{return{data:null,corrupt:!0,recovered:[],parseError:!0}}}function td(e){return`asteroid_miner_save_${e}`}function nd(e){return`asteroid_miner_meta_${e}`}function rd(e,t){try{let n=JSON.stringify(t);localStorage.setItem(td(e),n);let r={slot:e,timestamp:t.timestamp,tick:t.tick,robotCount:t.robots.length,asteroidCount:t.asteroids.length,label:(e===`auto`?`Auto Save`:`Slot ${Number(e)+1}`)+(t.difficultyMode&&t.difficultyMode!==`normal`?` (${t.difficultyMode[0].toUpperCase()+t.difficultyMode.slice(1)})`:``)};return localStorage.setItem(nd(e),JSON.stringify(r)),{ok:!0,quotaExceeded:!1}}catch(e){return{ok:!1,quotaExceeded:e instanceof DOMException&&(e.name===`QuotaExceededError`||e.name===`NS_ERROR_DOM_QUOTA_REACHED`)}}}function id(){let e=[0,1,2,Xu],t=0;for(let n of e){let e=localStorage.getItem(td(n)),r=localStorage.getItem(nd(n));e&&(t+=e.length*2),r&&(t+=r.length*2)}return Math.round(t/1024)}function ad(){let e=sd();if(e.length===0)return null;let t=e.reduce((e,t)=>e.timestamp<t.timestamp?e:t);return cd(t.slot),t.slot}function od(e){try{let t=localStorage.getItem(nd(e));return t?JSON.parse(t):null}catch{return null}}function sd(){return[0,1,2,Xu].map(od).filter(e=>e!==null)}function cd(e){localStorage.removeItem(td(e)),localStorage.removeItem(nd(e))}function ld(){return[0,1,2,Xu].some(e=>localStorage.getItem(td(e))!==null)}var ud={easy:`Easy`,normal:`Normal`,hard:`Hard`},dd=`asteroid_miner_audio`,fd={masterVolume:.7,sfxVolume:.8,musicVolume:.6,muted:!1},R=new class{ctx=null;masterGain=null;sfxGain=null;musicGain=null;compressor=null;settings={...fd};initialized=!1;musicNodes=[];musicRunning=!1;musicScheduleTimer=null;drifterNode=null;resonantNodes=[];thrusterNode=null;constructor(){this.loadSettings()}async init(){this.initialized||(this.ctx=new AudioContext,this.ctx.state===`suspended`&&await this.ctx.resume(),this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.value=-18,this.compressor.knee.value=10,this.compressor.ratio.value=4,this.compressor.attack.value=.003,this.compressor.release.value=.25,this.compressor.connect(this.ctx.destination),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.settings.muted?0:this.settings.masterVolume,this.masterGain.connect(this.compressor),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=this.settings.sfxVolume,this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.settings.musicVolume,this.musicGain.connect(this.masterGain),this.initialized=!0,this.startMusic(),this.startEntityAudio(),this.startThrusterHum())}ensureInit(){return this.initialized&&this.ctx!==null}startMusic(){if(!this.ensureInit()||this.musicRunning)return;this.musicRunning=!0;let e=this.ctx,t=[{freq:110,filterFreq:400,lfoRate:.03,lfoDepth:80,vol:.055},{freq:164.8,filterFreq:600,lfoRate:.05,lfoDepth:120,vol:.045},{freq:220,filterFreq:900,lfoRate:.07,lfoDepth:200,vol:.035},{freq:329.6,filterFreq:1200,lfoRate:.04,lfoDepth:300,vol:.025}];for(let n=0;n<t.length;n++){let r=t[n],i=e.createOscillator();i.type=`triangle`,i.frequency.value=r.freq*(1+(n%2==0?.002:-.002));let a=e.createBiquadFilter();a.type=`lowpass`,a.frequency.value=r.filterFreq,a.Q.value=.5;let o=e.createOscillator();o.type=`sine`,o.frequency.value=r.lfoRate,o.frequency.value=r.lfoRate+n*.007;let s=e.createGain();s.gain.value=r.lfoDepth,o.connect(s),s.connect(a.frequency);let c=e.createGain();c.gain.value=r.vol,i.connect(a),a.connect(c),c.connect(this.musicGain),o.start(),i.start(),this.musicNodes.push({osc:i,filter:a,gain:c,lfo:o,lfoGain:s})}this.scheduleMelodicMotif()}scheduleMelodicMotif(){if(!this.ensureInit())return;let e=15e3+Math.random()*25e3;this.musicScheduleTimer=setTimeout(()=>{this.ensureInit()&&(this.playMelodicMotif(),this.scheduleMelodicMotif())},e)}playMelodicMotif(){if(!this.ensureInit())return;let e=this.ctx,t=e.currentTime,n=[440,523.25,587.33,659.25,783.99],r=3+Math.floor(Math.random()*2),i=[];for(let e=0;e<r;e++)i.push(Math.floor(Math.random()*n.length));let a=0;for(let r of i){let i=n[r],o=t+a,s=e.createOscillator(),c=e.createGain();s.type=`sine`,s.frequency.value=i,c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(.04,o+.02),c.gain.exponentialRampToValueAtTime(.001,o+3),s.connect(c),c.connect(this.musicGain),s.start(o),s.stop(o+3.1),a+=.8+Math.random()*1.2}}startEntityAudio(){if(!this.ensureInit())return;let e=this.ctx;{let t=e.createOscillator(),n=e.createBiquadFilter(),r=e.createGain();t.type=`sine`,t.frequency.value=40,n.type=`highpass`,n.frequency.value=30,r.gain.value=0,t.connect(n),n.connect(r),r.connect(this.musicGain),t.start(),this.drifterNode={osc:t,filter:n,gain:r}}for(let t of[264,267,270]){let n=e.createOscillator(),r=e.createBiquadFilter(),i=e.createGain();n.type=`sine`,n.frequency.value=t,r.type=`lowpass`,r.frequency.value=1500,r.Q.value=.7,i.gain.value=0,n.connect(r),r.connect(i),i.connect(this.musicGain),n.start(),this.resonantNodes.push({osc:n,filter:r,gain:i})}}updateEntityAudio(e,t){if(!this.ensureInit())return;let n=this.ctx.currentTime,r=Math.min(.2,e*.2),i=Math.min(.08,t*.08);this.drifterNode&&this.drifterNode.gain.gain.linearRampToValueAtTime(r,n+2);for(let e of this.resonantNodes)e.gain.gain.linearRampToValueAtTime(i/this.resonantNodes.length,n+1.5)}startThrusterHum(){if(!this.ensureInit())return;let e=this.ctx,t=e.createOscillator(),n=e.createBiquadFilter(),r=e.createGain();t.type=`sawtooth`,t.frequency.value=120,n.type=`lowpass`,n.frequency.value=300,n.Q.value=1,r.gain.value=0,t.connect(n),n.connect(r),r.connect(this.sfxGain),t.start(),this.thrusterNode={osc:t,filter:n,gain:r}}setThrusterIntensity(e){if(!this.ensureInit()||!this.thrusterNode)return;let t=this.ctx.currentTime,n=Math.min(.04,e*.04);this.thrusterNode.gain.gain.linearRampToValueAtTime(n,t+.5)}playDiscovery(){if(!this.ensureInit())return;let e=this.ctx,t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type=`sine`,n.frequency.setValueAtTime(440,t),n.frequency.linearRampToValueAtTime(880,t+.3),r.gain.setValueAtTime(.15,t),r.gain.exponentialRampToValueAtTime(.001,t+.8),n.connect(r),r.connect(this.sfxGain),n.start(t),n.stop(t+.85)}playResearchComplete(){if(!this.ensureInit())return;let e=this.ctx,t=e.currentTime;[523.25,659.25,783.99].forEach((n,r)=>{let i=e.createOscillator(),a=e.createGain();i.type=`sine`,i.frequency.value=n;let o=t+r*.15;a.gain.setValueAtTime(0,o),a.gain.linearRampToValueAtTime(.12,o+.02),a.gain.exponentialRampToValueAtTime(.001,o+.7),i.connect(a),a.connect(this.sfxGain),i.start(o),i.stop(o+.75)})}playUIClick(){if(!this.ensureInit())return;let e=this.ctx,t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type=`square`,n.frequency.value=800,r.gain.setValueAtTime(.05,t),r.gain.exponentialRampToValueAtTime(.001,t+.06),n.connect(r),r.connect(this.sfxGain),n.start(t),n.stop(t+.07)}playMiningImpact(){if(!this.ensureInit())return;let e=this.ctx,t=e.currentTime,n=e.createBuffer(1,e.sampleRate*.1,e.sampleRate),r=n.getChannelData(0);for(let e=0;e<r.length;e++)r[e]=(Math.random()*2-1)*.6;let i=e.createBufferSource();i.buffer=n;let a=e.createBiquadFilter();a.type=`bandpass`,a.frequency.value=300+Math.random()*200,a.Q.value=1.5;let o=e.createGain();o.gain.setValueAtTime(.08,t),o.gain.exponentialRampToValueAtTime(.001,t+.1),i.connect(a),a.connect(o),o.connect(this.sfxGain),i.start(t)}playLoreReveal(){if(!this.ensureInit())return;let e=this.ctx,t=e.currentTime;[2093,2637,3136].forEach((n,r)=>{let i=e.createOscillator(),a=e.createGain();i.type=`sine`,i.frequency.value=n;let o=t+r*.1;a.gain.setValueAtTime(.04,o),a.gain.exponentialRampToValueAtTime(.001,o+1.5),i.connect(a),a.connect(this.sfxGain),i.start(o),i.stop(o+1.6)})}toggleMute(){return this.settings.muted=!this.settings.muted,this.applyMasterGain(),this.saveSettings(),this.settings.muted}get muted(){return this.settings.muted}setMasterVolume(e){this.settings.masterVolume=Math.max(0,Math.min(1,e)),this.applyMasterGain(),this.saveSettings()}setSfxVolume(e){this.settings.sfxVolume=Math.max(0,Math.min(1,e)),this.sfxGain&&(this.sfxGain.gain.value=e),this.saveSettings()}setMusicVolume(e){this.settings.musicVolume=Math.max(0,Math.min(1,e)),this.musicGain&&(this.musicGain.gain.value=e),this.saveSettings()}getSettings(){return{...this.settings}}getAudioContext(){return this.ctx}getMusicGain(){return this.musicGain}getSfxGain(){return this.sfxGain}stopProceduralMusic(){this.musicScheduleTimer!==null&&(clearTimeout(this.musicScheduleTimer),this.musicScheduleTimer=null);let e=this.ctx;if(e){let t=e.currentTime+2;for(let e of this.musicNodes)e.gain.gain.linearRampToValueAtTime(0,t),setTimeout(()=>{try{e.osc.stop()}catch{}try{e.lfo.stop()}catch{}},2100)}this.musicNodes=[],this.musicRunning=!1}applyMasterGain(){this.masterGain&&(this.masterGain.gain.value=this.settings.muted?0:this.settings.masterVolume)}loadSettings(){try{let e=localStorage.getItem(dd);if(e){let t=JSON.parse(e);this.settings={...fd,...t}}}catch{}}saveSettings(){try{localStorage.setItem(dd,JSON.stringify(this.settings))}catch{}}dispose(){this.musicScheduleTimer!==null&&(clearTimeout(this.musicScheduleTimer),this.musicScheduleTimer=null);for(let e of this.musicNodes)e.osc.stop(),e.lfo.stop();this.musicNodes=[],this.drifterNode?.osc.stop(),this.drifterNode=null;for(let e of this.resonantNodes)e.osc.stop();this.resonantNodes=[],this.thrusterNode?.osc.stop(),this.thrusterNode=null,this.ctx?.close(),this.ctx=null,this.initialized=!1}},pd=`ComputerAccessData_HV.162.mp3,DataEntrySequence_SFXB.3645.mp3,DroneRumble_BW.44714.mp3,Electromagnetic down-wind.mp3,ElectromagneticForce wind up.mp3,ESM_Activate_Robotic_Sentry_Gun_Sci_Fi_Robotic_Glitch_Morph_Mechanism_Texture.mp3,ESM_Alien_Technology_Machine_Loading_Screen_Sci_fi_Beep_Chirp_Futuristic_Space_Texture_Loading_Screen.mp3,ESM_Button_Navigation_Select_Team_2_Game_Organic_Cartoon_Sci_Fi_User_Interface.mp3,ESM_Fast_Mechanical_Computer_Program_Particle_Sci_Fi_Abstract_Loading_Particle_Military.mp3,ESM_Futuristic_Touch_and_Drone_Sci_fi_Beep_Chirp_Futuristic_Space_Texture.mp3,ESM_Robot_Baby_Annoy_Chirp_Collect_Glitch_Robotic_Technology_Hi_Tech_Futuristic_Game_Hybrid_Tone_Sci_fi_Science_Fiction.mp3,ESM_Robot_Computer_Processor_Malfunction_Sci_Fi_Robotic_Glitch_Morph_Mechanism_Texture.mp3,ESM_Scifi_Loading_Screen_Loop_10_Sci_Fi_Glitch_Morph_Mechanism_Texture_Futuristic.mp3,ESM_Snow_in_the_Breeze_Sci_Fi_Robotic_Glitch_Morph_Mechanism_Texture.mp3,FactoryMechanical_S011SF.36.mp3,FF_HFFX_vocal_breath_ghost_demon_baby.mp3,KSHMR_sok5_fx_ambiance_sci_fi_war_time_B.mp3,LaserGun_BW.47459.mp3,MonitorTurnOn_SFXB.3762.mp3,RadioStatic_BW.45692.mp3,RadioTuner_S011SF.582.mp3,SciFiScanner_S08SF.443.mp3,SciFiSpaceship_S08SF.491.mp3,SciFiSpaceship_S08SF.508.mp3,SciFiSpaceship_S08SF.526.mp3,SonarPingSpace_S011SF.677.mp3,SpaceshipAlien_S011SF.688.mp3,SpaceshipPassBy_BW.46123.mp3,SpaceshipPassBy_S011SF.714.mp3,SPS_SS_elephant_baby_roar_creature.mp3,text appearing or data transfer.mp3,TFH_FX_Oneshot_Downlifter_Bird_Chirps_Low_Sweep.mp3,UFOPassBy_BW.46622.mp3,UMRU_fx_texture_baby_voice.mp3`.split(`,`),md={"ui.button_press":`ESM_Button_Navigation_Select_Team_2_Game_Organic_Cartoon_Sci_Fi_User_Interface.mp3`,"ui.panel_open":`MonitorTurnOn_SFXB.3762.mp3`,"ui.panel_close":`Electromagnetic down-wind.mp3`,"ui.tab_switch":`RadioTuner_S011SF.582.mp3`,"ui.text_appear":`text appearing or data transfer.mp3`,"ui.ship_highlight":`ESM_Futuristic_Touch_and_Drone_Sci_fi_Beep_Chirp_Futuristic_Space_Texture.mp3`,"game.resource_collect":`ESM_Robot_Baby_Annoy_Chirp_Collect_Glitch_Robotic_Technology_Hi_Tech_Futuristic_Game_Hybrid_Tone_Sci_fi_Science_Fiction.mp3`,"game.build_deploy":`ElectromagneticForce wind up.mp3`,"game.research_complete":`ComputerAccessData_HV.162.mp3`,"game.anomaly_detected":`SonarPingSpace_S011SF.677.mp3`,"game.robot_error":`ESM_Robot_Computer_Processor_Malfunction_Sci_Fi_Robotic_Glitch_Morph_Mechanism_Texture.mp3`,"game.combat_start":`KSHMR_sok5_fx_ambiance_sci_fi_war_time_B.mp3`,"game.robot_deploy":`ESM_Activate_Robotic_Sentry_Gun_Sci_Fi_Robotic_Glitch_Morph_Mechanism_Texture.mp3`,"game.mission_start":`ESM_Fast_Mechanical_Computer_Program_Particle_Sci_Fi_Abstract_Loading_Particle_Military.mp3`,"game.alien_encounter":`SPS_SS_elephant_baby_roar_creature.mp3`,"game.alien_ambient":`FF_HFFX_vocal_breath_ghost_demon_baby.mp3`,"game.alien_voice":`UMRU_fx_texture_baby_voice.mp3`,"game.ship_passby":`SpaceshipPassBy_BW.46123.mp3`,"game.scan_sweep":`SciFiScanner_S08SF.443.mp3`,"game.laser_fire":`LaserGun_BW.47459.mp3`},hd=`soundEventMap`,gd=new Map,_d=null;function vd(){try{let e=localStorage.getItem(hd);if(e){let t=JSON.parse(e);return{...md,...t}}}catch{}return{...md}}function yd(e){try{localStorage.setItem(hd,JSON.stringify(e)),_d=null}catch{}}function bd(){try{localStorage.removeItem(hd),_d=null}catch{}return{...md}}async function xd(e){let t=gd.get(e);if(t)return t;let n=R.getAudioContext();if(!n)return null;try{let t=`/assets/sounds/${encodeURIComponent(e)}`,r=await fetch(t);if(!r.ok)return null;let i=await r.arrayBuffer(),a=await n.decodeAudioData(i);return gd.set(e,a),a}catch{return null}}function z(e){_d||=vd();let t=_d[e];t&&(async()=>{let e=R.getAudioContext();if(!e)return;let n=await xd(t);if(!n)return;let r=R.getSfxGain();if(!r)return;let i=e.createBufferSource();i.buffer=n,i.connect(r),i.start()})()}function Sd(e){(async()=>{let t=R.getAudioContext();if(!t)return;let n=await xd(e);if(!n)return;let r=R.getSfxGain();if(!r)return;let i=t.createBufferSource();i.buffer=n,i.connect(r),i.start()})()}function Cd(e,t,n){let r=document.createElement(`button`);return r.textContent=e,r.style.cssText=`
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
  `,r.addEventListener(`click`,()=>{z(`ui.button_press`),n()}),r}function wd(e,t){let n=document.createElement(`button`);return n.textContent=e,n.style.cssText=`
    padding: 4px 10px;
    background: transparent;
    border: 1px solid #4aff4a;
    color: #4aff4a;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    cursor: pointer;
    border-radius: 3px;
  `,n.addEventListener(`click`,t),n}function Td(e){let t=document.createElement(`div`);t.style.cssText=`
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
  `,t.textContent=e,document.body.appendChild(t),setTimeout(()=>t.remove(),2500)}function Ed(e,t){let n=document.createElement(`div`);n.setAttribute(`role`,`dialog`),n.setAttribute(`aria-label`,`Asteroid Miner title screen`),n.setAttribute(`aria-modal`,`true`),n.style.cssText=`
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
  `,d.addEventListener(`focus`,()=>{d.style.borderColor=`#4aff4a`}),d.addEventListener(`blur`,()=>{d.style.borderColor=`#2a5a2a`}),l.appendChild(d),a.appendChild(l);function f(){let e=d.value.trim();if(!e)return;let t=parseInt(e,10);return isFinite(t)?t:void 0}let p=`normal`,m=[`easy`,`normal`,`hard`],h=document.createElement(`div`);h.style.cssText=`display:flex;align-items:center;justify-content:center;gap:6px;margin-bottom:20px;`;let g=document.createElement(`span`);g.style.cssText=`font-size:10px;color:#556655;letter-spacing:1px;margin-right:4px;`,g.textContent=`DIFFICULTY`,h.appendChild(g);let _=[];for(let e of m){let t=document.createElement(`button`);t.textContent=ud[e],t.dataset.mode=e,t.style.cssText=`
      padding: 4px 14px;
      font-family: 'Courier New', monospace;
      font-size: 11px;
      border-radius: 3px;
      cursor: pointer;
      transition: background 0.15s, border-color 0.15s;
    `,_.push(t),t.addEventListener(`click`,()=>{p=e,v()}),h.appendChild(t)}function v(){for(let e of _){let t=e.dataset.mode===p;e.style.background=t?`rgba(74,255,74,0.2)`:`rgba(0,20,0,0.6)`,e.style.color=t?`#4aff4a`:`#556655`,e.style.border=t?`1px solid #4aff4a`:`1px solid #2a4a2a`,e.style.fontWeight=t?`bold`:`normal`}}v(),a.appendChild(h);let y=Cd(`NEW GAME`,`#4aff4a`,()=>{n.dispatchEvent(new Event(`remove`)),n.remove(),e(f(),p)});if(y.style.marginBottom=`10px`,a.appendChild(y),t){let e=Cd(`SETTINGS`,`#8090c0`,()=>{n.dispatchEvent(new Event(`remove`)),n.remove(),t()});e.style.marginBottom=`0`,a.appendChild(e)}let b=document.createElement(`div`);b.style.cssText=`font-size:9px;color:#2a4a2a;margin-top:24px;`,b.textContent=`v1.0.0`,a.appendChild(b),n.appendChild(a),document.body.appendChild(n)}function Dd(e,t){if(!ld()){t();return}let n=document.createElement(`div`);n.setAttribute(`role`,`dialog`),n.setAttribute(`aria-label`,`Load saved game`),n.setAttribute(`aria-modal`,`true`),n.style.cssText=`
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
`),i.appendChild(a);let o=document.createElement(`div`);o.style.cssText=`font-size:10px;color:#3a7a3a;letter-spacing:2px;margin-top:6px;text-transform:uppercase;`,o.textContent=`Hard Sci-Fi 4X Mining Sim`,i.appendChild(o);let s=document.createElement(`div`);s.style.cssText=`font-size:9px;color:#2a4a2a;margin-top:3px;`,s.textContent=`v1.0.0`,i.appendChild(s),r.appendChild(i);let c=document.createElement(`div`);c.style.cssText=`font-size: 12px; color: #888; margin-bottom: 20px; text-align: center;`,c.textContent=`Continue a previous game?`,r.appendChild(c);let l=sd();for(let t of l){let i=document.createElement(`div`);i.style.cssText=`
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid #1a4a1a;
      border-radius: 4px;
      cursor: pointer;
    `;let a=new Date(t.timestamp).toLocaleString(),o=document.createElement(`div`);o.style.cssText=`flex: 1; font-size: 12px;`,o.innerHTML=w`<div style="color:#4aff4a">${t.label}</div><div style="color:#888;font-size:11px">${a}</div><div style="color:#aaa;font-size:11px">Tick ${t.tick} · ${t.robotCount} robots · ${t.asteroidCount} asteroids</div>`,i.appendChild(o);let s=wd(`LOAD`,()=>{let r=ed(t.slot);if(!r.data){Td(`Save corrupt: ${r.parseError?`JSON parse error — file may be truncated`:`Core save fields missing — cannot recover`}`);return}r.recovered.length>0&&(console.warn(`[saveLoad] Partial recovery for slot ${t.slot}: defaulted ${r.recovered.join(`, `)}`),Td(`Warning: save partially recovered (missing: ${r.recovered.join(`, `)})`)),n.remove(),e(r.data)});i.appendChild(s),r.appendChild(i)}let u=document.createElement(`hr`);u.style.cssText=`border-color: #1a4a1a; margin: 20px 0;`,r.appendChild(u);let d=Cd(`NEW GAME`,`#888`,()=>{n.remove(),t()});r.appendChild(d),n.appendChild(r),document.body.appendChild(n)}var Od=null,kd=!1,Ad=null,jd=null,Md=null,Nd=null,Pd=null,Fd=null;function Id(e,t,n,r,i,a){Ad=e,jd=t,Md=n,Nd=r??null,Pd=i??null,Fd=a??null,Od=document.createElement(`div`),Od.id=`pause-menu`,Od.setAttribute(`role`,`dialog`),Od.setAttribute(`aria-label`,`Pause menu`),Od.setAttribute(`aria-modal`,`true`),Od.style.cssText=`
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
  `,document.body.appendChild(Od),Hd()}function Ld(){return kd}function Rd(){Od&&(kd=!0,Od.style.pointerEvents=`all`,requestAnimationFrame(()=>{Od&&(Od.style.opacity=`1`)}),Hd())}function zd(){Od&&(kd=!1,Od.style.opacity=`0`,Od.style.pointerEvents=`none`)}function Bd(e,t){let n=rd(e,t);n.ok?(Td(`Saved to ${e===`auto`?`auto-save`:`Slot ${Number(e)+1}`}`),Hd()):n.quotaExceeded?Vd():Td(`Save failed — data could not be written`)}function Vd(){let e=id(),t=document.createElement(`div`);t.style.cssText=`
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
  `,r.addEventListener(`click`,()=>{let e=ad();t.remove(),e!==null&&(Td(`Deleted ${e===`auto`?`auto-save`:`Slot ${Number(e)+1}`} — retry your save`),Hd())}),t.appendChild(r),document.body.appendChild(t),setTimeout(()=>t.remove(),6e3)}function Hd(){if(!Od)return;Od.innerHTML=``;let e=document.createElement(`div`);e.style.cssText=`
    background: rgba(0, 10, 0, 0.95);
    border: 1px solid #4aff4a;
    border-radius: 8px;
    padding: 32px;
    min-width: 420px;
    max-width: 500px;
  `;let t=document.createElement(`h2`);t.style.cssText=`margin: 0 0 8px; font-size: 20px; color: #4aff4a; text-align: center; letter-spacing: 3px;`,t.textContent=`— PAUSED —`,e.appendChild(t);let n=document.createElement(`div`);n.style.cssText=`font-size: 10px; color: #556655; text-align: center; margin-bottom: 20px; letter-spacing: 1px;`;let r=[];if(Pd&&r.push(`Seed: ${Pd()}`),Fd){let e=Fd();r.push(`${ud[e]} Mode`)}r.length&&(n.textContent=r.join(`  ·  `),e.appendChild(n));let i=document.createElement(`div`);i.style.cssText=`display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px;`;let a=document.createElement(`div`);a.style.cssText=`font-size: 12px; color: #4aff4a; letter-spacing: 1px;`,a.textContent=`SAVE SLOTS`,i.appendChild(a);let o=document.createElement(`div`);o.style.cssText=`font-size: 10px; color: #556655;`,o.textContent=`storage: ~${id()} KB`,i.appendChild(o),e.appendChild(i);let s=sd(),c=new Map(s.map(e=>[e.slot,e]));for(let t of[0,1,2])e.appendChild(Ud(t,c.get(t)??null));let l=document.createElement(`hr`);l.style.cssText=`border-color: #1a4a1a; margin: 24px 0;`,e.appendChild(l),e.appendChild(Gd());let u=document.createElement(`hr`);if(u.style.cssText=`border-color: #1a4a1a; margin: 16px 0 20px;`,e.appendChild(u),Nd){let t=Cd(`SETTINGS`,`#8090c0`,()=>{zd(),Nd?.()});t.style.marginBottom=`8px`,e.appendChild(t)}let d=Cd(`RESUME`,`#4aff4a`,()=>{zd(),Md?.()});e.appendChild(d),Od.appendChild(e)}function Ud(e,t){let n=document.createElement(`div`);n.style.cssText=`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #1a4a1a;
    border-radius: 4px;
  `;let r=document.createElement(`div`);if(r.style.cssText=`flex: 1; font-size: 12px;`,t){let n=new Date(t.timestamp).toLocaleString();r.innerHTML=w`<div style="color:#4aff4a">Slot ${Number(e)+1}</div><div style="color:#888;font-size:11px">${n}</div><div style="color:#aaa;font-size:11px">Tick ${t.tick} · ${t.robotCount} robots</div>`}else r.innerHTML=w`<div style="color:#4aff4a">Slot ${Number(e)+1}</div><div style="color:#444;font-size:11px">Empty</div>`;n.appendChild(r);let i=wd(`SAVE`,()=>{t&&!confirm(`Overwrite Slot ${Number(e)+1}?`)||Ad?.(e)});if(i.setAttribute(`aria-label`,`Save to slot ${Number(e)+1}`),n.appendChild(i),t){let t=wd(`LOAD`,()=>{let t=ed(e);if(!t.data){Td(`Save corrupt: ${t.parseError?`JSON parse error — file may be truncated`:`Core save fields missing — cannot recover`}`);return}t.recovered.length>0&&(console.warn(`[saveLoad] Partial recovery for slot ${e}: defaulted ${t.recovered.join(`, `)}`),Td(`Warning: save partially recovered (missing: ${t.recovered.join(`, `)})`)),confirm(`Load Slot ${Number(e)+1}? Current progress will be lost.`)&&(zd(),jd?.(t.data))});t.setAttribute(`aria-label`,`Load save from slot ${Number(e)+1}`),n.appendChild(t);let r=wd(`DEL`,()=>{confirm(`Delete Slot ${Number(e)+1}?`)&&(cd(e),Hd())});r.setAttribute(`aria-label`,`Delete save slot ${Number(e)+1}`),r.style.color=`#ff4444`,r.style.borderColor=`#ff4444`,n.appendChild(r)}return n}var Wd=[{group:`CAMERA`,bindings:[[`W/A/S/D`,`Pan`],[`Scroll`,`Zoom`],[`Home`,`Snap to base`],[`Click robot`,`Follow`]]},{group:`PANELS`,bindings:[[`D`,`Dashboard`],[`T`,`Tech tree`],[`J`,`Codex / Journal`],[`F`,`Factions`],[`G`,`Megastructure`],[`H`,`Controls help`]]},{group:`ACTIONS`,bindings:[[`Right-click`,`Assign robot`],[`Ctrl+S`,`Quick save`],[`Esc`,`Pause / resume`]]}];function Gd(){let e=document.createElement(`div`);e.style.cssText=`display:flex;gap:16px;`;for(let{group:t,bindings:n}of Wd){let r=document.createElement(`div`);r.style.cssText=`flex:1;`;let i=document.createElement(`div`);i.style.cssText=`font-size:10px;color:#4aff4a;letter-spacing:1px;margin-bottom:6px;`,i.textContent=t,r.appendChild(i);for(let[e,t]of n){let n=document.createElement(`div`);n.style.cssText=`display:flex;justify-content:space-between;gap:8px;margin-bottom:3px;`;let i=document.createElement(`span`);i.style.cssText=`font-size:10px;color:#88cc88;white-space:nowrap;`,i.textContent=e;let a=document.createElement(`span`);a.style.cssText=`font-size:10px;color:#556655;white-space:nowrap;text-align:right;`,a.textContent=t,n.appendChild(i),n.appendChild(a),r.appendChild(n)}e.appendChild(r)}return e}var Kd={iron:`Iron`,nickel:`Nickel`,cobalt:`Cobalt`,platinum:`Platinum`,ice:`Ice`,carbon:`Carbon`,silicate:`Silicate`};function qd(e){return e>=100?{label:`Legend`,color:`#fbbf24`}:e>=50?{label:`Elder`,color:`#a855f7`}:e>=10?{label:`Veteran`,color:`#22d3ee`}:{label:`Rookie`,color:`#94a3b8`}}function Jd(e){let t=[],n=e.currentTick-e.spawnTick;return e.tasksCompleted>=10&&e.distanceFromBase<1e3&&t.push({label:`Homebody`,color:`#4ade80`}),e.distanceFromBase>=2e3&&e.tasksCompleted<20&&t.push({label:`Wanderer`,color:`#f59e0b`}),e.anomaliesStudied>=2&&t.push({label:`Curious`,color:`#a855f7`}),e.asteroidsNamed>=2&&t.push({label:`Cartographer`,color:`#3b82f6`}),n>=3e4&&t.push({label:`Old Timer`,color:`#06b6d4`}),e.distanceFromBase>=3e3&&!t.some(e=>e.label===`Wanderer`)&&t.push({label:`Frontier`,color:`#ef4444`}),t.slice(0,2)}function Yd(e){let t=[{label:`Autonomy`,color:`#22c55e`,val:e.tasksCompleted},{label:`Isolation`,color:`#f59e0b`,val:e.distanceFromBase/100},{label:`Xenoaware`,color:`#a855f7`,val:e.anomaliesStudied*10},{label:`Cohesion`,color:`#06b6d4`,val:e.asteroidsNamed*5}];return t.sort((e,t)=>t.val-e.val),{label:t[0].label,color:t[0].color}}var B=null,Xd=-1,Zd=null,Qd=null;function $d(e){Zd=e}function ef(e,t,n){z(`ui.panel_open`),Xd=e,B||af(),of(t,n),B.style.display=`block`,sf(),Zd?.onRequestDetail(e)}function tf(){B&&(B.style.display=`none`),Xd=-1}function nf(e){e.robotEid!==Xd||!B||cf(e)}function rf(e){if(Qd=e,B&&B.style.display!==`none`){let e=B.querySelector(`[data-action="follow"]`);e&&(e.textContent=Qd===Xd?`📷 Unfollow`:`📷 Follow`)}}function af(){B=document.createElement(`div`),B.id=`ship-panel`,B.style.cssText=`
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
  `,document.body.appendChild(B),document.addEventListener(`click`,e=>{B&&B.style.display!==`none`&&(B.contains(e.target)||(tf(),Zd?.onClose()))})}function of(e,t){if(!B)return;let n=window.innerWidth,r=window.innerHeight,i=e+8,a=t-400/2;i+240>n-8&&(i=e-240-8),a<8&&(a=8),a+400>r-8&&(a=r-400-8),B.style.left=`${i}px`,B.style.top=`${a}px`}function sf(){if(!B)return;B.innerHTML=``;let e=document.createElement(`div`);e.style.cssText=`display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid rgba(80,120,220,0.2);`;let t=document.createElement(`span`);t.style.cssText=`color:#7090e0;font-size:12px;font-weight:bold;`,t.textContent=`Ship #${Xd}`,t.dataset.headerTitle=`1`,e.appendChild(t);let n=document.createElement(`button`);n.textContent=`×`,n.setAttribute(`aria-label`,`Close ship panel`),n.style.cssText=`background:none;border:none;color:#666;cursor:pointer;font-size:16px;padding:0;line-height:1;`,n.onclick=()=>{z(`ui.panel_close`),tf(),Zd?.onClose()},e.appendChild(n),B.appendChild(e);let r=document.createElement(`div`);r.style.cssText=`color:#4a5568;text-align:center;padding:16px 0;`,r.textContent=`Loading...`,B.appendChild(r),B.appendChild(lf())}function cf(e){if(!B)return;let t=B.children[0],n=B.children[B.children.length-1];B.innerHTML=``,B.appendChild(t);let r=t.querySelector(`[data-header-title]`);r&&(r.textContent=e.name?`${e.name}`:`Ship #${e.robotEid}`);let i=document.createElement(`div`);i.style.cssText=`margin-bottom:10px;`;let a=o[e.robotType]??`Type ${e.robotType}`,s=x[e.state]??`State ${e.state}`,c=Math.round(e.energyPct*100),l=[[`Type`,a],[`Status`,s],[`Energy`,`${c}%`],[`Task`,e.taskId>=0?`#${e.taskId}`:`None`]];for(let[e,t]of l){let n=document.createElement(`div`);n.style.cssText=`display:flex;justify-content:space-between;margin-bottom:3px;`;let r=document.createElement(`span`);r.style.cssText=`color:#5060a0;`,r.textContent=e;let a=document.createElement(`span`);a.style.cssText=ff(e,t),a.textContent=t,n.appendChild(r),n.appendChild(a),i.appendChild(n)}let u=document.createElement(`div`);u.style.cssText=`height:3px;background:rgba(255,255,255,0.1);border-radius:2px;margin:4px 0;`;let d=document.createElement(`div`);d.style.cssText=`height:100%;width:${c}%;background:${c>50?`#22d3ee`:c>20?`#f59e0b`:`#ef4444`};border-radius:2px;transition:width 0.3s;`,u.appendChild(d),i.appendChild(u),B.appendChild(i);let f=Jd(e);if(f.length>0){let e=document.createElement(`div`);e.style.cssText=`display:flex;gap:4px;flex-wrap:wrap;margin-bottom:8px;`;for(let t of f){let n=document.createElement(`span`);n.style.cssText=`
        font-size:9px;padding:2px 6px;border-radius:3px;
        background:${t.color}18;border:1px solid ${t.color}40;color:${t.color};
      `,n.textContent=t.label,e.appendChild(n)}B.appendChild(e)}let p=document.createElement(`div`);p.style.cssText=`margin-bottom:10px;border-top:1px solid rgba(80,120,220,0.15);padding-top:6px;`;let m=document.createElement(`div`);m.style.cssText=`color:#5060a0;font-size:10px;margin-bottom:4px;`,m.textContent=`BIOGRAPHY`,p.appendChild(m);let h=e.currentTick-e.spawnTick,g=Math.floor(h/3600),_=g>0?`Active ${g} day${g===1?``:`s`}`:`Just deployed`,v=qd(e.tasksCompleted),y=[[`Age`,_,`color:#a0c0ff;`],[`Rank`,`${v.label} (${e.tasksCompleted} tasks)`,`color:${v.color};`],[`Distance`,`${Math.round(e.distanceFromBase)} units`,`color:#a0c0ff;`]];for(let[e,t,n]of y){let r=document.createElement(`div`);r.style.cssText=`display:flex;justify-content:space-between;margin-bottom:3px;`;let i=document.createElement(`span`);i.style.cssText=`color:#4a5568;`,i.textContent=e;let a=document.createElement(`span`);a.style.cssText=n,a.textContent=t,r.appendChild(i),r.appendChild(a),p.appendChild(r)}let b=[];if(e.anomaliesStudied>0&&b.push(`${e.anomaliesStudied} anomal${e.anomaliesStudied===1?`y`:`ies`}`),e.asteroidsNamed>0&&b.push(`${e.asteroidsNamed} named`),e.tasksCompleted>=50&&b.push(`50+ tasks`),h>=6e4&&b.push(`survivor`),b.length>0){let e=document.createElement(`div`);e.style.cssText=`display:flex;justify-content:space-between;margin-bottom:3px;`;let t=document.createElement(`span`);t.style.cssText=`color:#4a5568;`,t.textContent=`Feats`;let n=document.createElement(`span`);n.style.cssText=`color:#fbbf24;font-size:10px;`,n.textContent=b.join(`, `),e.appendChild(t),e.appendChild(n),p.appendChild(e)}let ee=Yd(e),S=document.createElement(`div`);S.style.cssText=`display:flex;justify-content:space-between;margin-bottom:3px;`;let C=document.createElement(`span`);C.style.cssText=`color:#4a5568;`,C.textContent=`Alignment`;let w=document.createElement(`span`);if(w.style.cssText=`color:${ee.color};`,w.textContent=ee.label,S.appendChild(C),S.appendChild(w),p.appendChild(S),B.appendChild(p),e.inventoryCapacity>0){let t=document.createElement(`div`);t.style.cssText=`margin-bottom:10px;border-top:1px solid rgba(80,120,220,0.15);padding-top:6px;`;let n=document.createElement(`div`);n.style.cssText=`color:#5060a0;font-size:10px;margin-bottom:4px;`,n.textContent=`CARGO  ${Math.round(e.inventoryUsed)}/${Math.round(e.inventoryCapacity)}`,t.appendChild(n);for(let[n,r]of Object.entries(Kd)){let i=e.inventory[n]??0;if(i<.01)continue;let a=document.createElement(`div`);a.style.cssText=`display:flex;justify-content:space-between;margin-bottom:2px;`;let o=document.createElement(`span`);o.style.cssText=`color:#4a5568;`,o.textContent=r;let s=document.createElement(`span`);s.style.cssText=`color:#a0c0ff;`,s.textContent=i.toFixed(1),a.appendChild(o),a.appendChild(s),t.appendChild(a)}if(e.inventoryUsed<.01){let e=document.createElement(`div`);e.style.cssText=`color:#2d3748;font-size:10px;`,e.textContent=`Empty`,t.appendChild(e)}B.appendChild(t)}B.appendChild(n)}function lf(){let e=document.createElement(`div`);e.style.cssText=`display:flex;flex-direction:column;gap:5px;border-top:1px solid rgba(80,120,220,0.15);padding-top:8px;margin-top:2px;`;let t=uf(Qd===Xd?`📷 Unfollow`:`📷 Follow`,`follow`,`#22d3ee`,()=>{z(`ui.button_press`),Zd?.onToggleFollow(Xd)});e.appendChild(t);let n=uf(`⛏ Mine`,`mine_target`,`#f59e0b`,()=>{z(`ui.button_press`),Zd?.onMineTarget(Xd),tf()});e.appendChild(n);let r=uf(`🔭 Explore`,`explore_target`,`#a855f7`,()=>{z(`ui.button_press`),Zd?.onExploreTarget(Xd),tf()});e.appendChild(r);let i=uf(`⬅ Return to Base`,`return_to_base`,`#4ade80`,()=>{z(`ui.button_press`),Zd?.onOrder(Xd,`return_to_base`),df(`Returning`)});e.appendChild(i);let a=uf(`⏹ Stand Down`,`idle`,`#94a3b8`,()=>{z(`ui.button_press`),Zd?.onOrder(Xd,`idle`),df(`Idle`)});return e.appendChild(a),e}function uf(e,t,n,r){let i=document.createElement(`button`);return i.textContent=e,i.dataset.action=t,i.style.cssText=`
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
  `,i.onmouseenter=()=>{i.style.background=`rgba(50,60,100,0.6)`},i.onmouseleave=()=>{i.style.background=`rgba(30,40,70,0.5)`},i.onclick=r,i}function df(e){if(!B)return;let t=B.querySelectorAll(`span`);for(let n of t)if(n.previousElementSibling?.textContent===`Status`){n.textContent=e;break}}function ff(e,t){if(e===`Energy`){let e=parseInt(t,10);return e>50?`color:#22d3ee;`:e>20?`color:#f59e0b;`:`color:#ef4444;`}return e===`Status`?t===`Mining`||t===`Hauling`?`color:#4ade80;`:t===`Broken`?`color:#ef4444;`:t===`Charging`?`color:#f59e0b;`:`color:#a0c0ff;`:`color:#a0c0ff;`}var pf=[{label:`Initializing renderer`,pct:20},{label:`Generating asteroid field`,pct:60},{label:`Starting simulation`,pct:90}],mf=null,hf=null,gf=null;function _f(){gf||=document.getElementById(`loading-screen`),mf||=document.getElementById(`loading-stage`),hf||=document.getElementById(`loading-bar-fill`)}function vf(e){_f();let t=pf[e];mf&&(mf.textContent=t.label),hf&&(hf.style.width=`${t.pct}%`)}function yf(){_f(),gf&&(hf&&(hf.style.width=`100%`),setTimeout(()=>{gf&&(gf.classList.add(`fade-out`),gf.addEventListener(`transitionend`,()=>gf?.remove(),{once:!0}))},200))}var bf=typeof window<`u`&&(`ontouchstart`in window||navigator.maxTouchPoints>0),xf=`ast_touch_hints_shown`;function Sf(){if(!bf||sessionStorage.getItem(xf))return;sessionStorage.setItem(xf,`1`);let e=document.createElement(`div`);e.style.cssText=`
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
  `,document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity=`1`});let t=()=>{e.style.opacity=`0`,setTimeout(()=>e.remove(),400)};e.addEventListener(`touchend`,t,{once:!0}),setTimeout(t,4e3)}var Cf=!1;function wf(){if(bf&&(document.body.classList.add(`touch-device`),!Cf)){Cf=!0;try{let e=document.createElement(`style`);e.textContent=`
    .touch-device button,
    .touch-device [role="button"] {
      min-height: 44px;
      min-width: 44px;
    }
    .touch-device .mouse-hint {
      display: none !important;
    }
  `,document.head.appendChild(e)}catch{}}}function Tf(e){let t=e|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ef={DRIFTER:1,RESONANT:2,ALIEN_FLEET:3};Tf(195939070);var Df=3e4,Of=Math.PI/180,kf={Mercury:{a:.3871,e:.20563,L0:252.251,Ldot:149472.675,wbar0:77.456,wbarDot:.16},Venus:{a:.72333,e:.00677,L0:181.98,Ldot:58517.816,wbar0:131.564,wbarDot:.009},Earth:{a:1,e:.01671,L0:100.464,Ldot:35999.372,wbar0:102.937,wbarDot:.32},Mars:{a:1.52368,e:.0934,L0:355.453,Ldot:19140.299,wbar0:336.06,wbarDot:.445},Jupiter:{a:5.2026,e:.04849,L0:34.351,Ldot:3034.906,wbar0:14.331,wbarDot:.252},Saturn:{a:9.55491,e:.05551,L0:50.077,Ldot:1222.114,wbar0:93.057,wbarDot:.555},Uranus:{a:19.1882,e:.0463,L0:314.055,Ldot:428.467,wbar0:173.005,wbarDot:.013},Neptune:{a:30.0699,e:.00899,L0:304.349,Ldot:218.486,wbar0:48.12,wbarDot:.01}},Af=.72653;function jf(e,t){let n=e;for(let r=0;r<15;r++){let r=(n-t*Math.sin(n)-e)/(1-t*Math.cos(n));if(n-=r,Math.abs(r)<1e-12)break}return n}function Mf(e){let t=(e.L0+e.Ldot*Af)*Of,n=(e.wbar0+e.wbarDot*Af)*Of,r=jf(((t-n)%(2*Math.PI)+2*Math.PI)%(2*Math.PI),e.e),i=Math.cos(r),a=Math.sin(r),o=Math.atan2(Math.sqrt(1-e.e*e.e)*a,i-e.e),s=e.a*(1-e.e*i),c=o+n;return{x:s*Math.cos(c),z:s*Math.sin(c)}}function Nf(e){return e*Df}function Pf(){let e=[];e.push({name:`Sun`,x:0,z:0,radiusKm:696340,color:`#ffee88`});let t=[{name:`Mercury`,radiusKm:2440,color:`#b0a090`},{name:`Venus`,radiusKm:6052,color:`#e8d8a0`},{name:`Earth`,radiusKm:6371,color:`#4488cc`},{name:`Mars`,radiusKm:3390,color:`#cc6644`},{name:`Jupiter`,radiusKm:69911,color:`#d4a860`},{name:`Saturn`,radiusKm:58232,color:`#c8b080`,hasRings:!0},{name:`Uranus`,radiusKm:25362,color:`#88cccc`},{name:`Neptune`,radiusKm:24622,color:`#4466cc`}],n={};for(let r of t){let t=Mf(kf[r.name]),i=Nf(t.x),a=Nf(t.z);n[r.name]={x:i,z:a},e.push({name:r.name,x:i,z:a,radiusKm:r.radiusKm,color:r.color,hasRings:r.hasRings})}let r=[{name:`Phobos`,parent:`Mars`,radiusKm:11,offsetAngle:0},{name:`Deimos`,parent:`Mars`,radiusKm:6,offsetAngle:Math.PI*.6},{name:`Io`,parent:`Jupiter`,radiusKm:1822,offsetAngle:0},{name:`Europa`,parent:`Jupiter`,radiusKm:1561,offsetAngle:Math.PI*.5},{name:`Ganymede`,parent:`Jupiter`,radiusKm:2634,offsetAngle:Math.PI},{name:`Callisto`,parent:`Jupiter`,radiusKm:2410,offsetAngle:Math.PI*1.5},{name:`Titan`,parent:`Saturn`,radiusKm:2575,offsetAngle:Math.PI*.3}];for(let t of r){let i=n[t.parent];if(!i)continue;let a=Nf(.003)*(1+r.indexOf(t)*.3);e.push({name:t.name,x:i.x+Math.cos(t.offsetAngle)*a,z:i.z+Math.sin(t.offsetAngle)*a,radiusKm:t.radiusKm,color:`#aaaaaa`,isMoon:!0,parentName:t.parent})}return e}var Ff=Pf(),If=Ff.filter(e=>!e.isMoon&&e.name!==`Sun`),Lf=480,Rf=120,zf=800,Bf=8,V=55e3,Vf=100,Hf=14,Uf=5,Wf=18,Gf={[C.SCOUT]:`#3b82f6`,[C.MINER]:`#f59e0b`,[C.HAULER]:`#22c55e`,[C.RESEARCHER]:`#a855f7`,[C.REFINER]:`#f97316`,[C.DEFENDER]:`#ef4444`,[C.ENGINEER]:`#06b6d4`},Kf=`#f59e0b`,H={robotBuffer:null,robotCount:0,asteroidBuffer:null,asteroidCount:0,threatBuffer:null,threatCount:0,bases:[],anomalies:[],entities:[],factionBases:[],namedLocations:[],cameraX:5e3,cameraZ:1e3,cameraViewSize:8e3},U=null,W=null,qf=0,Jf=null,G=Lf,Yf=!1,Xf=0,Zf=0,Qf=0;function $f(e){Jf=e,dp()}function ep(e,t){H.robotBuffer=e,H.robotCount=t}function tp(e,t){H.asteroidBuffer=e,H.asteroidCount=t}function np(e,t){H.threatBuffer=e,H.threatCount=t}function rp(e){H.bases=e}function ip(e){H.anomalies=e}function ap(e){H.entities=e}function op(e){H.factionBases=e}function sp(e){H.namedLocations=e.map(e=>({name:e.name,x:e.x,z:e.z}))}function cp(e,t,n){H.cameraX=e,H.cameraZ=t,H.cameraViewSize=n}function lp(e){!U||!W||e-qf<Vf||(qf=e,_p())}function up(){U&&(U.width=G,U.height=G,U.style.width=`${G}px`,U.style.height=`${G}px`)}function dp(){U=document.createElement(`canvas`),U.style.cssText=`
    position: fixed;
    top: ${Bf}px;
    right: ${Bf}px;
    border: 1px solid rgba(100,140,255,0.4);
    border-radius: 6px;
    cursor: crosshair;
    z-index: 70;
    opacity: 0.92;
  `,up(),U.addEventListener(`click`,bp),U.addEventListener(`mousedown`,Sp),U.addEventListener(`mousemove`,xp),t(U,`Minimap — shows the full asteroid belt
● Dots = asteroids  ● Red zones = active threats
● Amber = miners  ● Blue = scouts  ● Green = haulers
● White ✕ = bases (green ring = territory)
Click to navigate · Drag bottom-left corner to resize`),W=U.getContext(`2d`),document.body.appendChild(U)}function fp(e){return(e+V)/(2*V)*G}function pp(e){return(e+V)/(2*V)*G}function mp(e){return e/G*(2*V)-V}function hp(e){return e/G*(2*V)-V}function gp(e,t,n,r){if(e.length===0)return[];let i=e.map(e=>({name:e.name,dist:(e.x-t)**2+(e.z-n)**2,px:(e.x+V)/(2*V)*r,pz:(e.z+V)/(2*V)*r})).sort((e,t)=>e.dist-t.dist).slice(0,Uf),a=[];for(let e of i)a.some(t=>Math.abs(t.px-e.px)<Wf&&Math.abs(t.pz-e.pz)<Wf)||a.push({name:e.name,px:e.px,pz:e.pz});return a}function _p(){if(!W)return;W.fillStyle=`rgba(4,6,14,0.92)`,W.fillRect(0,0,G,G),W.strokeStyle=`rgba(80,110,180,0.35)`,W.lineWidth=1;let e=G/2,t=G/2,n=5e3/V*(G/2),r=5e4/V*(G/2);if(W.beginPath(),W.arc(e,t,n,0,Math.PI*2),W.stroke(),W.beginPath(),W.arc(e,t,r,0,Math.PI*2),W.stroke(),H.asteroidBuffer&&H.asteroidCount>0){W.fillStyle=`rgba(120,140,180,0.35)`;let e=H.asteroidBuffer,t=H.asteroidCount,n=t>2e3?Math.ceil(t/2e3):1;for(let r=0;r<t;r+=n){let t=fp(e[r*11+1]),n=pp(e[r*11+3]);W.fillRect(t,n,1.5,1.5)}}for(let e of If){let t=fp(e.x),n=pp(e.z);t<-2||t>G+2||n<-2||n>G+2||(W.fillStyle=e.color,W.beginPath(),W.arc(t,n,3,0,Math.PI*2),W.fill())}let i=H.cameraViewSize/V*(G/2),o=fp(H.cameraX),c=pp(H.cameraZ);W.strokeStyle=`rgba(160,190,255,0.35)`,W.lineWidth=1.5,W.strokeRect(o-i,c-i,i*2,i*2),W.fillStyle=`#a855f7`;for(let e of H.anomalies){let t=fp(e.x),n=pp(e.z);W.beginPath(),W.arc(t,n,3.5,0,Math.PI*2),W.fill()}if(H.robotBuffer&&H.robotCount>0)for(let e=0;e<H.robotCount;e++){let t=a(H.robotBuffer,e);W.fillStyle=Gf[t]??Kf;let n=fp(g(H.robotBuffer,e)),r=pp(s(H.robotBuffer,e));W.beginPath(),W.arc(n,r,2.5,0,Math.PI*2),W.fill()}for(let e of H.entities){let t=fp(e.x),n=pp(e.z);W.fillStyle=e.type===Ef.DRIFTER?`#8866ff`:`#44ffcc`,W.beginPath(),W.arc(t,n,5,0,Math.PI*2),W.fill()}for(let e of H.bases){let t=fp(e.x),n=pp(e.z),r=3e3/V*(G/2);W.beginPath(),W.arc(t,n,r,0,Math.PI*2),W.fillStyle=`rgba(0,255,170,0.08)`,W.fill(),W.strokeStyle=`rgba(0,255,170,0.3)`,W.lineWidth=1,W.stroke()}W.strokeStyle=`#ffffff`,W.lineWidth=2;for(let e of H.bases){let t=fp(e.x),n=pp(e.z);W.beginPath(),W.arc(t,n,9,0,Math.PI*2),W.strokeStyle=`rgba(255,255,255,0.2)`,W.lineWidth=1,W.stroke(),W.strokeStyle=`#ffffff`,W.lineWidth=2,W.beginPath(),W.moveTo(t-6,n),W.lineTo(t+6,n),W.moveTo(t,n-6),W.lineTo(t,n+6),W.stroke()}for(let e of H.factionBases)if(e.territoryRadius&&e.territoryRadius>0){let t=fp(e.x),n=pp(e.z),r=e.territoryRadius/V*(G/2);W.beginPath(),W.arc(t,n,r,0,Math.PI*2),W.fillStyle=e.color+`18`,W.fill(),W.strokeStyle=e.color+`40`,W.lineWidth=1,W.stroke()}for(let e of H.factionBases){let t=fp(e.x),n=pp(e.z);W.fillStyle=e.color,W.beginPath(),W.moveTo(t,n-5),W.lineTo(t+5,n),W.lineTo(t,n+5),W.lineTo(t-5,n),W.closePath(),W.fill()}if(H.threatBuffer&&H.threatCount>0){let e=H.threatBuffer;for(let t=0;t<H.threatCount;t++){let n=fp(e[t*10+6]),r=pp(e[t*10+8]),i=e[t*10+9],a=6+i*6,o=.3+i*.4;W.beginPath(),W.arc(n,r,a,0,Math.PI*2),W.fillStyle=`rgba(239,68,68,${(o*.3).toFixed(2)})`,W.fill(),W.strokeStyle=`rgba(239,68,68,${o.toFixed(2)})`,W.lineWidth=1.5,W.stroke()}}let l=fp(0),u=pp(0);W.fillStyle=`#ffdd44`,W.beginPath(),W.arc(l,u,4,0,Math.PI*2),W.fill(),W.strokeStyle=`#ffdd44`,W.lineWidth=1;for(let e=0;e<Math.PI*2;e+=Math.PI/4)W.beginPath(),W.moveTo(l+Math.cos(e)*5,u+Math.sin(e)*5),W.lineTo(l+Math.cos(e)*8,u+Math.sin(e)*8),W.stroke();let d=fp(H.cameraX),f=pp(H.cameraZ);if(W.fillStyle=`#00ffaa`,W.beginPath(),W.moveTo(d,f-6),W.lineTo(d+4.5,f+4),W.lineTo(d-4.5,f+4),W.closePath(),W.fill(),W.strokeStyle=`#00ffaa`,W.lineWidth=1,W.stroke(),H.namedLocations.length>0){let e=gp(H.namedLocations,H.cameraX,H.cameraZ,G),t=H.namedLocations.map(e=>({...e,dist:(e.x-H.cameraX)**2+(e.z-H.cameraZ)**2,px:(e.x+V)/(2*V)*G,pz:(e.z+V)/(2*V)*G})).sort((e,t)=>e.dist-t.dist).slice(0,Uf);W.font=`9px "Courier New"`,W.textAlign=`left`;let n=new Set(e.map(e=>`${e.px},${e.pz}`));for(let e of t)W.fillStyle=`rgba(255,220,100,0.7)`,W.beginPath(),W.arc(e.px,e.pz,2.5,0,Math.PI*2),W.fill(),n.has(`${e.px},${e.pz}`)&&(W.fillStyle=`rgba(255,220,100,0.6)`,W.fillText(e.name,e.px+4,e.pz+3))}W.fillStyle=`rgba(140,160,220,0.8)`,W.font=`10px "Courier New"`,W.textAlign=`right`,W.fillText(`Full Belt · 110 Mm`,G-4,G-4),vp(W),W.strokeStyle=`rgba(160,190,255,0.5)`,W.lineWidth=1;let p=Hf;for(let e=3;e<=p;e+=4)W.beginPath(),W.moveTo(e,G),W.lineTo(0,G-e),W.stroke()}function vp(e){let t=[{label:`You`,color:`#00ffaa`,shape:`triangle`},{label:`Sun`,color:`#ffdd44`,shape:`sun`},{label:`Base`,color:`#ffffff`,shape:`cross`},{label:`Threat`,color:`#ef4444`,shape:`circle`},{label:`Faction`,color:`#cc66cc`,shape:`diamond`},{label:`Miner`,color:`#f59e0b`,shape:`circle`},{label:`Scout`,color:`#3b82f6`,shape:`circle`}],n=G-Hf-t.length*12-4;e.fillStyle=`rgba(4,6,14,0.7)`,e.fillRect(4,n-2,68,t.length*12+4),e.font=`9px "Courier New"`,e.textAlign=`left`;for(let r=0;r<t.length;r++){let i=t[r],a=n+r*12+12-2;e.fillStyle=i.color,e.strokeStyle=i.color,e.lineWidth=1.5,i.shape===`circle`?(e.beginPath(),e.arc(10,a-3,3,0,Math.PI*2),e.fill()):i.shape===`diamond`?(e.beginPath(),e.moveTo(10,a-6),e.lineTo(13,a-3),e.lineTo(10,a),e.lineTo(7,a-3),e.closePath(),e.fill()):i.shape===`cross`?(e.beginPath(),e.moveTo(7,a-3),e.lineTo(13,a-3),e.moveTo(10,a-6),e.lineTo(10,a),e.stroke()):i.shape===`sun`?(e.beginPath(),e.arc(10,a-3,2.5,0,Math.PI*2),e.fill()):i.shape===`triangle`&&(e.beginPath(),e.moveTo(10,a-6),e.lineTo(13.5,a),e.lineTo(6.5,a),e.closePath(),e.fill()),e.fillStyle=`rgba(180,200,240,0.8)`,e.fillText(i.label,18,a)}}function yp(e){if(!U)return!1;let t=U.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;return n<Hf&&r>t.height-Hf}function bp(e){if(!U||!Jf||yp(e))return;let t=U.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,i=n/t.width*G,a=r/t.height*G;Jf(mp(i),hp(a))}function xp(e){U&&(U.style.cursor=yp(e)?`nesw-resize`:`crosshair`)}function Sp(e){yp(e)&&(e.preventDefault(),e.stopPropagation(),Yf=!0,Xf=e.clientX,Zf=e.clientY,Qf=G,document.addEventListener(`mousemove`,Cp),document.addEventListener(`mouseup`,wp))}function Cp(e){if(!Yf)return;let t=Xf-e.clientX,n=e.clientY-Zf,r=Math.max(t,n),i=Math.round(Math.min(zf,Math.max(Rf,Qf+r)));i!==G&&(G=i,up())}function wp(){Yf=!1,document.removeEventListener(`mousemove`,Cp),document.removeEventListener(`mouseup`,wp)}var Tp=`a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])`;function Ep(e){let t=Array.from(e.querySelectorAll(Tp));if(t.length===0)return()=>{};let n=t[0],r=t[t.length-1];n.focus();function i(e){if(e.key===`Tab`){if(t.length===1){e.preventDefault();return}e.shiftKey?document.activeElement===n&&(e.preventDefault(),r.focus()):document.activeElement===r&&(e.preventDefault(),n.focus())}}return e.addEventListener(`keydown`,i),()=>e.removeEventListener(`keydown`,i)}var Dp=null,Op=!1,kp=null,Ap=[{key:`WASD / Arrow Keys`,desc:`Pan camera`},{key:`Scroll wheel`,desc:`Zoom in/out`},{key:`Middle-click drag`,desc:`Pan camera`},{key:`Left-click robot`,desc:`Follow robot (click again or ESC to stop)`},{key:`Tab`,desc:`Follow next robot`},{key:`Shift+Tab`,desc:`Follow previous robot`},{key:`Home`,desc:`Return camera to base station`},{key:`T`,desc:`Tech tree / Research`},{key:`J`,desc:`Journal / Codex`},{key:`C`,desc:`Construction bay — build robots`},{key:`A`,desc:`Automation panel`},{key:`W`,desc:`Material priorities — fleet targeting weights`},{key:`V`,desc:`Base Buildings — upgrade outpost infrastructure`},{key:`B`,desc:`Bases & logistics (build outposts, hauler routes)`},{key:`D`,desc:`Operations dashboard`},{key:`F`,desc:`Faction relations & diplomacy`},{key:`L`,desc:`Event log`},{key:`U`,desc:`Fleet culture & traits`},{key:`E`,desc:`Game event log — scrollable history`},{key:`N`,desc:`Commander's Log — personal journal`},{key:`P`,desc:`Meridian Archives & Historical Database`},{key:`M`,desc:`Mute / unmute audio`},{key:`H`,desc:`Show this help`},{key:`ESC`,desc:`Pause menu`},{key:`Ctrl+S`,desc:`Quick save`}];function jp(){Op?Pp():Np()}function Mp(){Pp()}function Np(){Op=!0,Dp||Fp(),Dp.style.display=`flex`;let e=Dp.querySelector(`[role="dialog"]`);e&&(kp=Ep(e))}function Pp(){Op=!1,kp?.(),kp=null,Dp&&(Dp.style.display=`none`)}function Fp(){Dp=document.createElement(`div`),Dp.style.cssText=`
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
  `,t.textContent=`⌨ Keyboard Reference`,e.appendChild(t);let n=document.createElement(`div`);n.style.cssText=`display:grid;grid-template-columns:auto 1fr;gap:6px 20px;`;for(let{key:e,desc:t}of Ap){let r=document.createElement(`span`);r.style.cssText=`
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
  `,a.onclick=()=>Pp(),r.appendChild(i),r.appendChild(a),e.appendChild(r),Dp.appendChild(e),Dp.addEventListener(`click`,e=>{e.target===Dp&&Pp()}),Dp.addEventListener(`keydown`,e=>{e.key===`Escape`&&Pp()}),document.body.appendChild(Dp)}var Ip=`/assets/music/`,Lp={beginSlowly:`Begin Slowly.mp3`,spaceIsDeep:`Space is Deep.mp3`,cosmosIsPeaceful:`The Cosmos is Peaceful.mp3`,mineQuietly:`Mine Quietly.mp3`,focusAndMine:`Focus and Mine.mp3`,progressBase:`You Make Progress Over Time.mp3`,progressLonger:`You Make Progress Over Time (longer).mp3`,progressAlt1:`You Make Progress Over Time (longer) (alt ending 1).mp3`,progressAlt2:`You Make Progress Over Time (longer) (alt ending 2).mp3`,progressAlt3:`You Make Progress Over Time (longer) (alt ending 3).mp3`,industrialProgress:`You make Industrial Progress.mp3`,infraFocus:`Your infrastructure needs your focus.mp3`,combatStart:`ok the attack is underway, focus now.mp3`,midCombat:`combat in space is almost silent but people still die.mp3`,peopleDying:`Your people are dying.mp3`,peopleUnhappy:`Your people are unhappy.mp3`,postCombat:`so many people died but the attack is now over and you need to clean up.mp3`,recovery:`We Are All In This Together.mp3`,keepGoing:`keep going but also it's late it's a long playsession already.mp3`,bedtime:`Quiet and chill, maybe it is time to go to bed you have been playing a long time.mp3`},Rp={loading:`beginSlowly`,idle:`cosmosIsPeaceful`,exploring:`spaceIsDeep`,mining:`mineQuietly`,focus:`focusAndMine`,progress:`progressBase`,industrial:`industrialProgress`,alert:`infraFocus`,combat:`combatStart`,mid_combat:`midCombat`,casualties:`peopleDying`,unhappy:`peopleUnhappy`,post_combat:`postCombat`,recovery:`recovery`,long_session:`keepGoing`,very_long:`bedtime`},zp=2.5,Bp=3600*1e3,Vp=5400*1e3,Hp=900*1e3,Up=1800*1e3,Wp=22,Gp=6,Kp=new class{ctx=null;musicGain=null;initialized=!1;bufferCache=new Map;currentSource=null;currentFadeGain=null;currentState=`loading`;progressSequenceId=0;crossfadeGeneration=0;progressAltKeys=[`progressAlt1`,`progressAlt2`,`progressAlt3`];sessionStartMs=0;sessionTimer=null;init(e,t){this.initialized||(this.initialized=!0,this.ctx=e,this.musicGain=t,this.sessionStartMs=Date.now(),this.sessionTimer=setInterval(()=>this.checkSessionTimer(),6e4),this.preloadTracks([`beginSlowly`,`cosmosIsPeaceful`]).then(()=>{this.currentState===`loading`&&this.playTrack(`beginSlowly`,!1)}))}async preloadTracks(e){await Promise.all(e.map(e=>this.loadBuffer(e)))}setState(e){if(e===this.currentState||this.currentState===`very_long`||this.currentState===`long_session`&&e!==`very_long`&&e!==`combat`&&e!==`mid_combat`&&e!==`casualties`)return;this.currentState=e;let t=Rp[e];this.progressSequenceId++,this.crossfadeTo(t,e===`progress`)}getState(){return this.currentState}skipTrack(){let e=[`beginSlowly`,`cosmosIsPeaceful`,`spaceIsDeep`,`mineQuietly`,`focusAndMine`,`industrialProgress`];this._ambientCycleIdx=(this._ambientCycleIdx+1)%e.length,this.progressSequenceId++,this.crossfadeTo(e[this._ambientCycleIdx],!1)}_ambientCycleIdx=0;dispose(){this.sessionTimer!==null&&(clearInterval(this.sessionTimer),this.sessionTimer=null),this.fadeOutCurrent(.5),this.ctx=null,this.musicGain=null,this.initialized=!1}isLateNight(){let e=new Date().getHours();return e>=Wp||e<Gp}checkSessionTimer(){let e=Date.now()-this.sessionStartMs,t=this.isLateNight(),n=t?Up:Vp,r=t?Hp:Bp;e>=n&&this.currentState!==`very_long`?this.setState(`very_long`):e>=r&&this.currentState!==`long_session`&&this.currentState!==`very_long`&&this.setState(`long_session`)}async loadBuffer(e){let t=Lp[e],n=this.bufferCache.get(t);if(n)return n;if(!this.ctx)return null;try{let e=Ip+encodeURIComponent(t),n=await fetch(e);if(!n.ok)return null;let r=await n.arrayBuffer(),i=await this.ctx.decodeAudioData(r);return this.bufferCache.set(t,i),i}catch{return null}}async playTrack(e,t){if(!this.ctx||!this.musicGain)return;let n=await this.loadBuffer(e);if(!n)return;let r=this.ctx.createGain();r.gain.value=1,r.connect(this.musicGain);let i=this.ctx.createBufferSource();i.buffer=n,i.loop=t,i.connect(r),this.currentSource=i,this.currentFadeGain=r,i.start()}async playTrackAwaitable(e,t){if(!this.ctx||!this.musicGain)return;let n=await this.loadBuffer(e);if(!n||!this.ctx||!this.musicGain)return;let r=this.ctx.createGain();r.gain.value=1,r.connect(this.musicGain);let i=this.ctx.createBufferSource();i.buffer=n,i.loop=t,i.connect(r),this.currentSource=i,this.currentFadeGain=r,i.start(),t||await new Promise(e=>{i.onended=()=>e()})}async runProgressSequence(e){let t=()=>e===this.progressSequenceId&&this.currentState===`progress`;if(t())for(await this.playTrackAwaitable(`progressLonger`,!1);t();){let e=Math.floor(Math.random()*this.progressAltKeys.length);if(await this.playTrackAwaitable(this.progressAltKeys[e],!1),!t()||(await this.playTrackAwaitable(`progressBase`,!1),!t()))return;await this.playTrackAwaitable(`progressLonger`,!1)}}fadeOutCurrent(e){if(!this.ctx||!this.currentFadeGain||!this.currentSource)return;let t=this.ctx.currentTime,n=this.currentFadeGain,r=this.currentSource;n.gain.linearRampToValueAtTime(0,t+e),setTimeout(()=>{try{r.stop()}catch{}try{n.disconnect()}catch{}},e*1e3+100),this.currentSource=null,this.currentFadeGain=null}async crossfadeTo(e,t){if(!this.ctx||!this.musicGain)return;let n=++this.crossfadeGeneration;this.fadeOutCurrent(zp);let r=await this.loadBuffer(e);if(!r||n!==this.crossfadeGeneration)return;let i=this.ctx.createGain();i.gain.setValueAtTime(0,this.ctx.currentTime),i.gain.linearRampToValueAtTime(1,this.ctx.currentTime+zp),i.connect(this.musicGain);let a=this.ctx.createBufferSource();if(a.buffer=r,a.loop=!t,a.connect(i),this.currentSource=a,this.currentFadeGain=i,a.start(),t&&!a.loop){let e=this.progressSequenceId;a.onended=()=>{a===this.currentSource&&this.currentState===`progress`&&this.runProgressSequence(e)}}}},qp=`asteroid_miner_settings`,Jp={bloomIntensity:1,particleDensity:1,autoSaveIntervalMin:5,beltEchoesEnabled:!0},K=tm(),Yp=null,Xp=null,Zp=null;function Qp(e){return Xp=e,K}function $p(){rm()}function em(){return K}function tm(){try{let e=localStorage.getItem(qp);if(e)return{...Jp,...JSON.parse(e)}}catch{}return{...Jp}}function nm(){try{localStorage.setItem(qp,JSON.stringify(K))}catch{}}function rm(){Yp||am(),Yp.style.display=`flex`;let e=Yp.querySelector(`[role="dialog"]`);e&&(Zp=Ep(e))}function im(){Zp?.(),Zp=null,Yp&&(Yp.style.display=`none`)}function am(){Yp=document.createElement(`div`),Yp.setAttribute(`aria-modal`,`true`),Yp.style.cssText=`
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
  `,n.innerHTML=`<span style="font-size:14px;color:#7090e0;letter-spacing:0.1em;text-transform:uppercase;">⚙ Settings</span>`;let r=document.createElement(`button`);r.textContent=`×`,r.setAttribute(`aria-label`,`Close settings`),r.style.cssText=`background:none;border:none;color:#666;cursor:pointer;font-size:18px;`,r.onclick=()=>{z(`ui.panel_close`),im()},n.appendChild(r),e.appendChild(n),e.appendChild(om(`Audio`));let i=R.getSettings();e.appendChild(sm(`Master Volume`,i.masterVolume,0,1,.05,e=>{R.setMasterVolume(e)})),e.appendChild(sm(`SFX Volume`,i.sfxVolume,0,1,.05,e=>{R.setSfxVolume(e)})),e.appendChild(sm(`Music Volume`,i.musicVolume,0,1,.05,e=>{R.setMusicVolume(e)}));let a=document.createElement(`div`);a.style.cssText=`display:flex;align-items:center;gap:10px;margin-bottom:8px;`;let o=document.createElement(`span`);o.style.cssText=`flex:0 0 120px;font-size:11px;color:#8090b0;`,o.textContent=`Music`;let s=document.createElement(`button`),c=i.musicVolume>0?i.musicVolume:.6,l=()=>R.getSettings().musicVolume>0;s.textContent=l()?`On`:`Off`,s.style.cssText=`
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
`,u.onclick=()=>{z(`ui.button_press`),Kp.skipTrack()},a.appendChild(u),e.appendChild(a),e.appendChild(om(`Graphics`)),e.appendChild(sm(`Bloom Intensity`,K.bloomIntensity,0,2,.1,e=>{K.bloomIntensity=e,nm(),Xp?.(K)},void 0,`Glow effect intensity around bright objects
0 = off · 1 = default · 2 = intense
Higher values may reduce performance`)),e.appendChild(sm(`Particle Density`,K.particleDensity,0,1,.1,e=>{K.particleDensity=e,nm(),Xp?.(K)},void 0,`Density of dust and debris particles
0 = none · 1 = full
Reduce if experiencing frame rate drops`)),e.appendChild(om(`Game`)),e.appendChild(sm(`Auto-save (min)`,K.autoSaveIntervalMin,1,30,1,e=>{K.autoSaveIntervalMin=Math.round(e),nm(),Xp?.(K)},e=>`${Math.round(e)}m`,`How often the game auto-saves
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
  `,p.onclick=()=>{z(`ui.button_press`),K.beltEchoesEnabled=!K.beltEchoesEnabled,p.textContent=K.beltEchoesEnabled?`On`:`Off`,p.style.background=K.beltEchoesEnabled?`rgba(60,120,60,0.6)`:`rgba(60,60,80,0.4)`,nm(),Xp?.(K)},t(d,`Receive anonymous transmissions from other colonies in the belt.
These are intercepted signals — echoes of what others have achieved.`),d.appendChild(f),d.appendChild(p),e.appendChild(d);let m=document.createElement(`div`);m.style.cssText=`display:flex;align-items:center;gap:10px;margin-bottom:8px;`;let h=document.createElement(`span`);h.style.cssText=`flex:0 0 120px;font-size:11px;color:#8090b0;`,h.textContent=`Dev Mode`;let g=document.createElement(`button`),_=()=>new URLSearchParams(window.location.search).get(`dev`)===`true`||localStorage.getItem(`devMode`)===`true`;g.textContent=_()?`On`:`Off`,g.style.cssText=`
    padding:3px 12px;
    background:${_()?`rgba(60,120,60,0.6)`:`rgba(60,60,80,0.4)`};
    border:1px solid rgba(100,140,255,0.3);
    border-radius:4px;
    color:#a0c0ff;
    cursor:pointer;
    font-family:'Courier New',monospace;
    font-size:11px;
  `,g.onclick=()=>{z(`ui.button_press`);let t=!_();localStorage.setItem(`devMode`,t?`true`:`false`),g.textContent=t?`On`:`Off`,g.style.background=t?`rgba(60,120,60,0.6)`:`rgba(60,60,80,0.4)`;let n=e.querySelector(`[data-sound-designer]`);n&&(n.style.display=t?`block`:`none`)},m.appendChild(h),m.appendChild(g),e.appendChild(m);let v=document.createElement(`div`);v.setAttribute(`data-sound-designer`,``),v.style.display=_()?`block`:`none`,v.appendChild(om(`Sound Designer (Dev)`));let y=Object.keys(vd()),b=()=>{for(;v.children.length>1;)v.removeChild(v.lastChild);let e=vd();for(let t of y){let n=document.createElement(`div`);n.style.cssText=`display:flex;align-items:center;gap:6px;margin-bottom:6px;`;let r=document.createElement(`span`);r.style.cssText=`flex:0 0 160px;font-size:10px;color:#7080a0;word-break:break-all;`,r.textContent=t;let i=document.createElement(`select`);i.style.cssText=`
        flex:1;
        background:rgba(10,14,28,0.9);
        border:1px solid rgba(100,140,255,0.25);
        border-radius:3px;
        color:#a0c0ff;
        font-size:10px;
        font-family:'Courier New',monospace;
        padding:2px;
      `;for(let n of pd){let r=document.createElement(`option`);r.value=n,r.textContent=n.replace(/\.mp3$/i,``).slice(0,40),r.title=n,n===e[t]&&(r.selected=!0),i.appendChild(r)}i.onchange=()=>{let e=vd();e[t]=i.value,yd(e)};let a=document.createElement(`button`);a.textContent=`▶`,a.setAttribute(`aria-label`,`Preview ${t}`),a.style.cssText=`
        background:rgba(40,60,100,0.6);
        border:1px solid rgba(100,140,255,0.3);
        border-radius:3px;
        color:#a0c0ff;
        cursor:pointer;
        font-size:11px;
        padding:2px 6px;
      `,a.onclick=()=>Sd(i.value),n.appendChild(r),n.appendChild(i),n.appendChild(a),v.appendChild(n)}let t=document.createElement(`button`);t.textContent=`Reset to Defaults`,t.style.cssText=`
      margin-top:8px;
      padding:5px 14px;
      background:rgba(80,30,30,0.5);
      border:1px solid rgba(200,80,80,0.4);
      border-radius:4px;
      color:#f0a0a0;
      cursor:pointer;
      font-family:'Courier New',monospace;
      font-size:10px;
    `,t.onclick=()=>{bd(),b()},v.appendChild(t)};b(),e.appendChild(v);let ee=document.createElement(`div`);ee.style.cssText=`text-align:center;margin-top:20px;`;let x=document.createElement(`button`);x.textContent=`Close`,x.setAttribute(`aria-label`,`Close settings`),x.style.cssText=`
    padding: 7px 28px;
    background: rgba(60,80,140,0.6);
    border: 1px solid rgba(100,140,255,0.3);
    border-radius: 5px;
    color: #a0c0ff;
    cursor: pointer;
    font-family: 'Courier New', monospace;
    font-size: 12px;
  `,x.onclick=()=>{z(`ui.panel_close`),im()},ee.appendChild(x),e.appendChild(ee),Yp.addEventListener(`click`,e=>{e.target===Yp&&im()}),Yp.addEventListener(`keydown`,e=>{e.key===`Escape`&&im()}),Yp.appendChild(e),document.body.appendChild(Yp)}function om(e){let t=document.createElement(`div`);return t.style.cssText=`
    font-size: 10px;
    color: #5060a0;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 14px 0 8px;
    border-bottom: 1px solid rgba(100,120,200,0.15);
    padding-bottom: 4px;
  `,t.textContent=e,t}function sm(e,n,r,i,a,o,s,c){let l=document.createElement(`div`);l.style.cssText=`display:flex;align-items:center;gap:10px;margin-bottom:8px;`,c&&t(l,c);let u=document.createElement(`span`);u.style.cssText=`flex:0 0 120px;font-size:11px;color:#8090b0;`,u.textContent=e;let d=document.createElement(`input`);d.type=`range`,d.min=String(r),d.max=String(i),d.step=String(a),d.value=String(n),d.style.cssText=`flex:1;accent-color:#6080d0;cursor:pointer;`;let f=document.createElement(`span`);return f.style.cssText=`flex:0 0 40px;text-align:right;font-size:11px;color:#a0c0ff;`,f.textContent=s?s(n):n.toFixed(2),d.oninput=()=>{let e=parseFloat(d.value);f.textContent=s?s(e):e.toFixed(2),o(e)},l.appendChild(u),l.appendChild(d),l.appendChild(f),l}var cm=[1e3,1e4,1e5,1e6],lm={iron:`Iron`,carbon:`Carbon`,silicon:`Silicon`,water:`Water`,refined_iron:`Refined Iron`,steel:`Steel`,electronics:`Electronics`,battery_cell:`Battery Cells`},um=new Set,dm=new Set,fm=[{id:`first_robot_army`,label:`10 robots in the field`,check:e=>e.robotCount>=10},{id:`robot_army_20`,label:`20 robots deployed`,check:e=>e.robotCount>=20},{id:`robot_army_50`,label:`50 robot fleet achieved`,check:e=>e.robotCount>=50},{id:`orbital_scaffold`,label:`Orbital Platform: Scaffold complete`,check:e=>(e.megastructureCompletedStages.orbital_platform??0)>=1},{id:`orbital_core`,label:`Orbital Platform: Core complete`,check:e=>(e.megastructureCompletedStages.orbital_platform??0)>=2},{id:`orbital_complete`,label:`Orbital Platform fully operational`,check:e=>(e.megastructureCompletedStages.orbital_platform??0)>=3},{id:`dyson_stage1`,label:`Dyson Swarm: First Collectors launched`,check:e=>(e.megastructureCompletedStages.dyson_swarm??0)>=1},{id:`half_tech`,label:`Half the tech tree researched`,check:e=>e.totalTechNodes>0&&e.techNodeCount>=Math.floor(e.totalTechNodes/2)},{id:`full_tech`,label:`Full tech tree unlocked`,check:e=>e.totalTechNodes>0&&e.techNodeCount>=e.totalTechNodes}];function pm(e,t){for(let[n,r]of Object.entries(e))for(let e of cm)if(r>=e){let r=`${n}:${e}`;um.has(r)||(um.add(r),t(`◈ ${lm[n]??n} stockpile reached ${_m(e)}`,`#22c55e`))}}function mm(e,t){for(let n of fm)!dm.has(n.id)&&n.check(e)&&(dm.add(n.id),t(`★ Achievement: ${n.label}`,`#fbbf24`))}function hm(e){for(let[t,n]of Object.entries(e))for(let e of cm)n>=e&&um.add(`${t}:${e}`)}function gm(){um.clear(),dm.clear()}function _m(e){return e>=1e6?`${e/1e6}M`:e>=1e3?`${e/1e3}K`:String(e)}var vm=[{id:`emerald`,name:`Emerald Dawn`,primary:`#22c55e`,accent:`#4ade80`,glow:`#166534`},{id:`crimson`,name:`Crimson Vanguard`,primary:`#ef4444`,accent:`#f87171`,glow:`#991b1b`},{id:`azure`,name:`Azure Drift`,primary:`#3b82f6`,accent:`#60a5fa`,glow:`#1e3a8a`},{id:`amber`,name:`Amber Core`,primary:`#f59e0b`,accent:`#fbbf24`,glow:`#92400e`},{id:`violet`,name:`Violet Expanse`,primary:`#a855f7`,accent:`#c084fc`,glow:`#581c87`},{id:`silver`,name:`Silver Tide`,primary:`#94a3b8`,accent:`#cbd5e1`,glow:`#475569`}];function ym(e){return vm.find(t=>t.id===e)}var bm={AUTONOMOUS_COLLECTIVE:{dimension:`autonomyScore`,min:60},ISOLATED_CULTURE:{dimension:`isolationScore`,min:50},XENOAWARE:{dimension:`anomalyExposure`,min:40},COHESIVE_FLEET:{dimension:`fleetCohesion`,min:70}},xm={AUTONOMOUS_COLLECTIVE:{name:`Autonomous Collective`,color:`#22c55e`,desc:`Robots operate independently with self-directed priorities`,effectText:`Auto-queue bonus scales with autonomy. Risk: directive drift at high autonomy`},ISOLATED_CULTURE:{name:`Isolated Culture`,color:`#f59e0b`,desc:`Fleet has developed unique behaviors from prolonged isolation`,effectText:`Unique fleet behaviors from prolonged isolation`},XENOAWARE:{name:`Xenoaware`,color:`#a855f7`,desc:`Deep anomaly study has expanded the fleet's understanding`,effectText:`+20% anomaly study rate`},COHESIVE_FLEET:{name:`Cohesive Fleet`,color:`#06b6d4`,desc:`Strong collective identity and coordinated operations`,effectText:`Swarm mining bonus, knowledge cascade. Risk: collective mourning, groupthink glitches`}},Sm=[{id:`escape`,text:`We mine to build humanity's escape from a gravity well.`,seedDimension:`fleetCohesion`},{id:`archaeologists`,text:`We are archaeologists — the Belt's secrets belong to everyone.`,seedDimension:`anomalyExposure`},{id:`machines`,text:`We prove that autonomous machines can raise a civilization.`,seedDimension:`autonomyScore`},{id:`creation`,text:`We build because creation is its own meaning.`,seedDimension:`isolationScore`}],Cm=null,wm=null,Tm=!1;function Em(){return Tm}function Dm(){Tm=!1}function Om(e){if(Cm)return;Tm=!0,Cm=document.createElement(`div`),Cm.style.cssText=`
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
  `,document.body.appendChild(Cm),requestAnimationFrame(()=>{Cm&&(Cm.style.opacity=`1`)});let t=document.createElement(`div`);t.setAttribute(`role`,`dialog`),t.setAttribute(`aria-label`,`Name Your Colony`),t.setAttribute(`aria-modal`,`true`),t.setAttribute(`tabindex`,`-1`),t.style.cssText=`
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
  `,Cm.appendChild(t),wm=Ep(t);let n=t.querySelector(`#colony-name-input`),r=t.querySelector(`#colony-name-count`),i=t.querySelector(`#colony-name-submit`),a=t.querySelector(`#colony-name-skip`);n.addEventListener(`input`,()=>{r.textContent=`${n.value.length}/30`}),i.addEventListener(`click`,()=>{let t=n.value.trim();t.length>0&&e(t),km()}),i.addEventListener(`mouseover`,()=>{i.style.background=`rgba(6,182,212,0.15)`}),i.addEventListener(`mouseout`,()=>{i.style.background=`transparent`}),a.addEventListener(`click`,km),n.addEventListener(`keydown`,t=>{if(t.key===`Enter`){let t=n.value.trim();t.length>0&&e(t),km()}}),requestAnimationFrame(()=>n.focus())}function km(){if(!Cm)return;wm?.(),wm=null,Cm.style.opacity=`0`;let e=Cm;setTimeout(()=>e.remove(),500),Cm=null}var Am=null,jm=null,Mm=!1;function Nm(){return Mm}function Pm(){Mm=!1}function Fm(e){if(Am)return;Mm=!0;let t=`#a855f7`;Am=document.createElement(`div`),Am.style.cssText=`
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
  `,document.body.appendChild(Am),requestAnimationFrame(()=>{Am&&(Am.style.opacity=`1`)});let n=document.createElement(`div`);n.setAttribute(`role`,`dialog`),n.setAttribute(`aria-label`,`Colony Epithet`),n.setAttribute(`aria-modal`,`true`),n.setAttribute(`tabindex`,`-1`),n.style.cssText=`
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
  `,Am.appendChild(n),jm=Ep(n);let r=n.querySelector(`#epithet-input`),i=n.querySelector(`#epithet-count`),a=n.querySelector(`#epithet-submit`),o=n.querySelector(`#epithet-skip`);r.addEventListener(`input`,()=>{i.textContent=`${r.value.length}/30`}),a.addEventListener(`click`,()=>{let t=r.value.trim();t.length>0&&e(t),Im()}),a.addEventListener(`mouseover`,()=>{a.style.background=`${t}22`}),a.addEventListener(`mouseout`,()=>{a.style.background=`transparent`}),o.addEventListener(`click`,Im),r.addEventListener(`keydown`,t=>{if(t.key===`Enter`){let t=r.value.trim();t.length>0&&e(t),Im()}}),requestAnimationFrame(()=>r.focus())}function Im(){if(!Am)return;jm?.(),jm=null,Am.style.opacity=`0`;let e=Am;setTimeout(()=>e.remove(),500),Am=null}var Lm=[],q=new Float32Array(7);function Rm(e){q=e}function zm(){return{latestAsteroidBuffer:null,latestAsteroidCount:0,latestRobotBuffer:null,latestRobotCount:0,latestThreatBuffer:null,latestThreatCount:0,lastStats:null,latestTick:0,latestRefined:{},latestUnlockedMask:0n,latestTechState:null,latestFactoryQueueLength:0,latestRobotCap:0,latestMegaProjects:[],latestBuildings:[],latestInboxSnapshot:null,latestFactionSnapshots:[],latestCultureState:null,latestHabitatState:null,latestTransitSnapshot:null,followedRobotEid:null,isPlacingBase:!1,targetingRobotEid:null,isTargetingMode:!1,exploreRobotEid:null,isExploreMode:!1,factionClaims:[],playerTargetAsteroids:[],factionTerritories:[],pendingLoad:null,pendingFirstLaunch:!1,elapsed:0,speedMultiplier:1}}var Bm=6e4,Vm=null,Hm=null;async function Um(){try{let e=await fetch(`/version.json`,{cache:`no-store`});return e.ok?(await e.json()).buildId??null:null}catch{return null}}async function Wm(){let e=await Um();if(e){if(Vm===null){Vm=e;return}e!==Vm&&(Hm!==null&&(clearInterval(Hm),Hm=null),M(`⚡ New version available — please refresh to avoid errors`,`#f59e0b`,`warning`))}}function Gm(){Wm(),Hm=setInterval(Wm,Bm)}var Km=!1,qm=[],Jm=null,Ym=2e7;function Xm(e){Jm=e}function Zm(){return Km}function Qm(e){qm.push(e)}function $m(){typeof document<`u`&&document.addEventListener(`visibilitychange`,eh)}function eh(){document.hidden?Km=!0:(Km&&qm.length>0&&th(),Km=!1)}function th(){let e=nh(qm);if(qm.length=0,!Jm||!e)return;let t={id:Ym++,factionId:null,senderName:`ARIA`,type:`aria_auto`,subject:`[Welcome Back] Operations Summary`,body:e,priority:`normal`,tick:0,triaged:!0,triageResult:`relevant`,read:!1};Jm({type:`sim:inbox_inject`,payload:{message:t}})}function nh(e){if(e.length===0)return null;let t=[],n=[],r=[];for(let i of e)switch(i.type){case`research_complete`:t.push(i.name);break;case`building_built`:n.push(i.name);break;case`robot_built`:r.push(i.name);break}let i=[`Commander, while you were away your operation continued autonomously. Here is what happened:`,``];if(t.length>0&&i.push(`Research completed: ${t.join(`, `)}.`),n.length>0){let e=rh(n),t=Object.entries(e).map(([e,t])=>t>1?`${t}x ${e}`:e);i.push(`Construction completed: ${t.join(`, `)}.`)}if(r.length>0){let e=rh(r),t=Object.entries(e).map(([e,t])=>t>1?`${t}x ${e}`:e);i.push(`Robots produced: ${t.join(`, `)}.`)}return i.push(``,`All systems nominal. Awaiting your orders.`),i.join(`
`)}function rh(e){let t={};for(let n of e)t[n]=(t[n]??0)+1;return t}function ih(){let e=document.createElement(`div`);return e.id=`webgl-context-lost-overlay`,Object.assign(e.style,{position:`fixed`,inset:`0`,display:`none`,alignItems:`center`,justifyContent:`center`,flexDirection:`column`,background:`rgba(0,0,0,0.88)`,color:`#e2e8f0`,fontFamily:`monospace`,fontSize:`1rem`,zIndex:`9999`,gap:`1rem`,textAlign:`center`,padding:`2rem`}),e}async function ah(e,t={}){let n=new Re({canvas:e,antialias:!0,powerPreference:`high-performance`});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight),n.toneMapping=4,n.toneMappingExposure=1;let r=new Me;r.background=new A(8);let i=new Ee(75,window.innerWidth/window.innerHeight,.1,5e5);i.position.set(0,50,50),i.lookAt(0,0,0);let a=new Ue(n),o=new Ze(r,i);a.addPass(o);let s=new Je(new we(window.innerWidth,window.innerHeight),.8,.4,.6);a.addPass(s);let c=new $e;a.addPass(c);let l=new Xe(16774368,2.5);l.position.set(1,.5,.3).normalize(),r.add(l);let u=new Xe(4482764,.6);u.position.set(-1,-.3,-.5).normalize(),r.add(u);let d=new Ye(3359846,.8);r.add(d),window.addEventListener(`resize`,()=>{let e=window.innerWidth,t=window.innerHeight;i.aspect=e/t,i.updateProjectionMatrix(),n.setSize(e,t),a.setSize(e,t),s.resolution.set(e,t)});let f=ih();document.body.appendChild(f);let p=null;return e.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),t.onContextLost?.(),f.innerHTML=`
      <div style="font-size:1.5rem;margin-bottom:0.5rem">&#9888; Graphics context lost</div>
      <div style="color:#94a3b8">Attempting to restore rendering&hellip;</div>
    `,f.style.display=`flex`,p=setTimeout(()=>{f.innerHTML=`
        <div style="font-size:1.5rem;margin-bottom:0.5rem">&#9888; Graphics context lost</div>
        <div style="color:#f87171;margin-bottom:1rem">Restore failed &mdash; please reload the page.</div>
        <button onclick="location.reload()" style="padding:0.5rem 1.25rem;background:#1e40af;color:#fff;border:none;border-radius:0.375rem;font-family:monospace;font-size:1rem;cursor:pointer">Reload</button>
      `},5e3)}),e.addEventListener(`webglcontextrestored`,()=>{p!==null&&(clearTimeout(p),p=null),f.style.display=`none`,t.onContextRestored?.()}),{renderer:n,scene:r,camera:i,composer:a,bloomPass:s,ambientLight:d,sunLight:l}}var oh=50,sh=2e5,ch=.08,lh=.92,uh=.5,dh=.08,fh=.02,ph=.08,mh=5*Math.PI/180,hh=80*Math.PI/180,gh=Math.atan2(.8,.3),_h=class e{camera;pivot=new Ie;zoomLevel=6;targetZoomLevel=6;pitchAngle=gh;targetPitchAngle=gh;panVelocity=new Ie;enabled=!0;followTarget=null;targetPivot=null;panStartPivot=new Ie;panDurationMs=0;panElapsedMs=0;keys=new Set;isDragging=!1;dragButton=-1;dragMoved=!1;lastMouse={x:0,y:0};dragStartMouse={x:0,y:0};static DRAG_THRESHOLD=5;isTouchPanning=!1;lastTouchX=0;lastTouchY=0;lastPinchDistance=0;constructor(e){this.camera=e,this.bindEvents()}onContextMenu=e=>{e.preventDefault()};bindEvents(){window.addEventListener(`wheel`,this.onWheel,{passive:!1}),window.addEventListener(`mousedown`,this.onMouseDown),window.addEventListener(`mousemove`,this.onMouseMove),window.addEventListener(`mouseup`,this.onMouseUp),window.addEventListener(`keydown`,this.onKeyDown),window.addEventListener(`keyup`,this.onKeyUp),window.addEventListener(`contextmenu`,this.onContextMenu),window.addEventListener(`touchstart`,this.onTouchStart,{passive:!1}),window.addEventListener(`touchmove`,this.onTouchMove,{passive:!1}),window.addEventListener(`touchend`,this.onTouchEnd,{passive:!1})}dispose(){window.removeEventListener(`wheel`,this.onWheel),window.removeEventListener(`mousedown`,this.onMouseDown),window.removeEventListener(`mousemove`,this.onMouseMove),window.removeEventListener(`mouseup`,this.onMouseUp),window.removeEventListener(`keydown`,this.onKeyDown),window.removeEventListener(`keyup`,this.onKeyUp),window.removeEventListener(`contextmenu`,this.onContextMenu),window.removeEventListener(`touchstart`,this.onTouchStart),window.removeEventListener(`touchmove`,this.onTouchMove),window.removeEventListener(`touchend`,this.onTouchEnd)}onTouchStart=e=>{if(this.enabled){if(e.touches.length===1)this.isTouchPanning=!0,this.lastTouchX=e.touches[0].clientX,this.lastTouchY=e.touches[0].clientY;else if(e.touches.length===2){this.isTouchPanning=!1;let t=e.touches[0].clientX-e.touches[1].clientX,n=e.touches[0].clientY-e.touches[1].clientY;this.lastPinchDistance=Math.sqrt(t*t+n*n)}}};onTouchMove=e=>{if(this.enabled){if(e.preventDefault(),e.touches.length===1&&this.isTouchPanning){let t=e.touches[0].clientX-this.lastTouchX,n=e.touches[0].clientY-this.lastTouchY;this.lastTouchX=e.touches[0].clientX,this.lastTouchY=e.touches[0].clientY;let r=this.getCurrentDistance()*.002;this.panVelocity.x-=t*r,this.panVelocity.z-=n*r}else if(e.touches.length===2){let t=e.touches[0].clientX-e.touches[1].clientX,n=e.touches[0].clientY-e.touches[1].clientY,r=Math.sqrt(t*t+n*n),i=this.lastPinchDistance-r;this.lastPinchDistance=r;let a=i/window.innerHeight*2;this.targetZoomLevel+=a,this.targetZoomLevel=Math.max(Math.log(oh),Math.min(Math.log(sh),this.targetZoomLevel))}}};onTouchEnd=e=>{e.touches.length===0?this.isTouchPanning=!1:e.touches.length===1&&(this.isTouchPanning=!0,this.lastTouchX=e.touches[0].clientX,this.lastTouchY=e.touches[0].clientY)};onWheel=e=>{this.enabled&&(e.target?.closest(`#hud-overlay`)||(e.preventDefault(),e.shiftKey?(this.targetPitchAngle+=e.deltaY>0?-fh:fh,this.targetPitchAngle=Math.max(mh,Math.min(hh,this.targetPitchAngle))):(this.targetZoomLevel+=e.deltaY>0?ch:-ch,this.targetZoomLevel=Math.max(Math.log(oh),Math.min(Math.log(sh),this.targetZoomLevel)))))};onMouseDown=e=>{this.enabled&&(e.target?.closest(`#hud-overlay [style*="pointer-events: auto"], #hud-overlay button, #hud-overlay input, #hud-overlay select`)||(e.button===0||e.button===1||e.button===2)&&(this.isDragging=!0,this.dragButton=e.button,this.lastMouse.x=e.clientX,this.lastMouse.y=e.clientY,this.dragStartMouse.x=e.clientX,this.dragStartMouse.y=e.clientY,this.dragMoved=!1))};onMouseMove=t=>{if(!this.enabled||!this.isDragging)return;if(this.dragButton===0&&!this.dragMoved){let n=Math.abs(t.clientX-this.dragStartMouse.x),r=Math.abs(t.clientY-this.dragStartMouse.y);if(n<e.DRAG_THRESHOLD&&r<e.DRAG_THRESHOLD)return;this.dragMoved=!0,this.lastMouse.x=t.clientX,this.lastMouse.y=t.clientY;return}let n=t.clientX-this.lastMouse.x,r=t.clientY-this.lastMouse.y;this.lastMouse.x=t.clientX,this.lastMouse.y=t.clientY;let i=this.getCurrentDistance()*.002;this.panVelocity.x-=n*i,this.panVelocity.z-=r*i};onMouseUp=e=>{e.button===this.dragButton&&(this.isDragging=!1,this.dragButton=-1)};onKeyDown=e=>{if(!this.enabled)return;let t=document.activeElement;t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||this.keys.add(e.key.toLowerCase())};onKeyUp=e=>{this.keys.delete(e.key.toLowerCase())};getCurrentDistance(){return Math.exp(this.zoomLevel)}update(e){if(!this.enabled)return;this.zoomLevel+=(this.targetZoomLevel-this.zoomLevel)*dh,this.pitchAngle+=(this.targetPitchAngle-this.pitchAngle)*ph;let t=this.getCurrentDistance();if(this.targetPivot){this.panElapsedMs+=e*1e3;let t=Math.min(this.panElapsedMs/this.panDurationMs,1),n=1-(1-t)**3;this.pivot.lerpVectors(this.panStartPivot,this.targetPivot,n),this.panVelocity.set(0,0,0),t>=1&&(this.targetPivot=null)}if(this.followTarget)this.pivot.copy(this.followTarget),this.panVelocity.set(0,0,0);else if(!this.targetPivot){let n=t*uh*e;(this.keys.has(`w`)||this.keys.has(`arrowup`))&&(this.panVelocity.z-=n),(this.keys.has(`s`)||this.keys.has(`arrowdown`))&&(this.panVelocity.z+=n),(this.keys.has(`a`)||this.keys.has(`arrowleft`))&&(this.panVelocity.x-=n),(this.keys.has(`d`)||this.keys.has(`arrowright`))&&(this.panVelocity.x+=n),this.pivot.add(this.panVelocity),this.panVelocity.multiplyScalar(lh)}this.camera.position.set(this.pivot.x,this.pivot.y+t*Math.sin(this.pitchAngle),this.pivot.z+t*Math.cos(this.pitchAngle)),this.camera.lookAt(this.pivot)}setFollowTarget(e){this.followTarget=e,e&&this.panVelocity.set(0,0,0)}isFollowing(){return this.followTarget!==null}getState(){let e=this.getCurrentDistance(),t=e*Math.tan(this.camera.fov*Math.PI/360)*this.camera.aspect,n=e*Math.tan(this.camera.fov*Math.PI/360);return{pivot:this.pivot.clone(),zoomDistance:e,pitchAngle:this.pitchAngle,viewBoundsMin:new Ie(this.pivot.x-t,this.pivot.y-n,this.pivot.z-e),viewBoundsMax:new Ie(this.pivot.x+t,this.pivot.y+n,this.pivot.z+e)}}setPivot(e,t,n){this.pivot.set(e,t,n),this.targetPivot=null}panTo(e,t,n,r=800){this.panStartPivot.copy(this.pivot),this.targetPivot=new Ie(e,t,n),this.panDurationMs=r,this.panElapsedMs=0,this.followTarget=null,this.panVelocity.set(0,0,0)}setZoom(e){this.zoomLevel=e,this.targetZoomLevel=e}setPitch(e){this.pitchAngle=Math.max(mh,Math.min(hh,e)),this.targetPitchAngle=this.pitchAngle}getPitch(){return this.pitchAngle}enable(){this.enabled=!0}disable(){this.enabled=!1}wasDragPanning(){return this.dragButton===0&&this.dragMoved}},vh={0:new A(.3,.25,.2),1:new A(.5,.45,.4),2:new A(.7,.65,.55),3:new A(.4,.2,.5)},yh={0:0,1:0,2:.15,3:.25},bh=5e3,xh=450*450,Sh=550*550,Ch=2700*2700,wh=3300*3300,Th=2700*2700,Eh=3300*3300-Th;function Dh(e,t){return t===void 0?e<500*500?0:e<3e3*3e3?1:2:t===0?e<Sh?0:e<wh?1:2:t===1?e<xh?0:e<wh?1:2:e>=Ch?2:e>=xh?1:0}var Oh=`
  attribute float aPointSize;
  attribute vec3 aColor;
  varying vec3 vColor;
  void main() {
    vColor = aColor;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = max(1.5, aPointSize * (800.0 / -mvPosition.z));
    gl_Position = projectionMatrix * mvPosition;
  }
`,kh=`
  varying vec3 vColor;
  void main() {
    vec2 cxy = 2.0 * gl_PointCoord - 1.0;
    float r = dot(cxy, cxy);
    if (r > 1.0) discard;
    float alpha = 1.0 - smoothstep(0.6, 1.0, r);
    gl_FragColor = vec4(vColor, alpha);
  }
`,Ah=class e{scene;buckets=new Map;meshGeometries=new Map;materials=new Map;lod2Material;entityLODs=new Map;seenEntities=new Set;knownHusks=new Set;newDepletions=[];regionBias=new A(.5,.45,.4);regionBiasStrength=0;predictedAnomalyIds=new Set;static _workColor=new A;static _transitGreen=new A(.2,.8,.3);static _transitRed=new A(.8,.2,.15);constructor(e){this.scene=e,this.lod2Material=new Pe({vertexShader:Oh,fragmentShader:kh,transparent:!0,depthWrite:!1}),this.createGeometries(),this.createMaterials()}createGeometries(){for(let e=0;e<4;e++){let t=new Le(1,0);this.meshGeometries.set(`${e}_1`,t);let n=new Le(1,2),r=n.attributes.position;for(let t=0;t<r.count;t++){let n=.85+Math.sin(t*17.3+e*5.7)*.15;r.setX(t,r.getX(t)*n),r.setY(t,r.getY(t)*n),r.setZ(t,r.getZ(t)*n)}n.computeVertexNormals(),this.meshGeometries.set(`${e}_0`,n)}}createMaterials(){for(let e=0;e<4;e++){let t=vh[e]||new A(.5,.5,.5),n=yh[e]||0,r=new j({color:t,roughness:e===2?.3:.8,metalness:e===2?.7:.1,emissive:t.clone().multiplyScalar(n),emissiveIntensity:n,flatShading:!0});this.materials.set(e,r)}}getOrCreateMeshBucket(e,t){let n=`${e}_${t}`,r=this.buckets.get(n);if(!r){let t=new tt(this.meshGeometries.get(n),this.materials.get(e),bh);t.count=0,t.frustumCulled=!1,this.scene.add(t),r={kind:`mesh`,mesh:t,count:0,dummy:new Fe,prevCount:-1,prevMatrixHash:-1,prevColorHash:-1},this.buckets.set(n,r)}return r}getOrCreatePointBucket(e){let t=`lod2_${e}`,n=this.buckets.get(t);if(!n){let e=new Ke,r=new Float32Array(bh*3),i=new Float32Array(bh*3),a=new Float32Array(bh),o=new k(r,3),s=new k(i,3),c=new k(a,1);o.usage=qe,s.usage=qe,c.usage=qe,e.setAttribute(`position`,o),e.setAttribute(`aColor`,s),e.setAttribute(`aPointSize`,c);let l=new Ce(e,this.lod2Material);l.frustumCulled=!1,this.scene.add(l),n={kind:`points`,points:l,positions:r,colors:i,sizes:a,posAttr:o,colorAttr:s,sizeAttr:c,count:0,prevCount:-1,prevPosHash:-1},this.buckets.set(t,n)}return n}setRegionBias(e,t){this.regionBias.copy(e),this.regionBiasStrength=t}setPredictedAnomalyIds(e){this.predictedAnomalyIds=new Set(e)}computeLODSq(e,t){let n=Dh(e,this.entityLODs.get(t));return this.entityLODs.set(t,n),n}static hashF32(e,t){let n=new Uint32Array(e.buffer,e.byteOffset,t),r=2166136261;for(let e=0;e<t;e++)r=Math.imul(r^n[e],16777619)>>>0;return r}updateFromBuffer(t,n,r){for(let e of this.buckets.values())e.count=0;this.seenEntities.clear(),this.newDepletions.length=0;for(let i=0;i<n;i++){let n=i*11,a=t[n+0],o=t[n+1],s=t[n+2],c=t[n+3],l=t[n+4],u=t[n+5],d=t[n+6],f=t[n+7]>0,p=t[n+9]>0,m=t[n+10];f&&!this.knownHusks.has(a)&&(this.knownHusks.add(a),this.newDepletions.push({x:o,y:s,z:c,radius:l}));let h=o-r.x,g=s-r.y,_=c-r.z,v=h*h+g*g+_*_;if(v>1e5*1e5)continue;this.seenEntities.add(a);let y=this.computeLODSq(v,a),b=e._workColor;p?b.setRGB(.95,.75,.2):f?b.setRGB(.15,.14,.13):this.predictedAnomalyIds.has(a)&&d>0?b.setRGB(.1,.8,.7):d>0?b.setRGB(.5,.2,.8):(b.copy(vh[u]??new A(.5,.5,.5)),this.regionBiasStrength>0&&b.lerp(this.regionBias,this.regionBiasStrength*.25),m>=.8?b.lerp(e._transitGreen,.25):m<=.3&&b.lerp(e._transitRed,.2*(1-m/.3)));let ee=v>=729e4&&v<=1089e4,x=ee?Math.min(1,Math.max(0,(v-Th)/Eh)):0;if(y===2||ee){let e=this.getOrCreatePointBucket(u);if(e.count<bh){let t=e.count*3;e.positions[t]=o,e.positions[t+1]=s,e.positions[t+2]=c;let n=ee?x:1;e.colors[t]=b.r*n,e.colors[t+1]=b.g*n,e.colors[t+2]=b.b*n,e.sizes[e.count]=l,e.count++}}if(y<=1||ee){let e=y<=1?y:1,t=this.getOrCreateMeshBucket(u,e);if(t.count<bh){let e=ee?l*(1-x):l;t.dummy.position.set(o,s,c),t.dummy.scale.setScalar(e),t.dummy.rotation.set(o*.01,s*.01,c*.01),t.dummy.updateMatrix(),t.mesh.setMatrixAt(t.count,t.dummy.matrix),t.mesh.setColorAt(t.count,b),t.count++}}}if(this.entityLODs.size>this.seenEntities.size+100){for(let e of this.entityLODs.keys())this.seenEntities.has(e)||this.entityLODs.delete(e);for(let e of this.knownHusks)this.seenEntities.has(e)||this.knownHusks.delete(e)}for(let t of this.buckets.values())if(t.kind===`mesh`){if(t.mesh.count=t.count,t.count>0){let n=t.mesh.instanceMatrix.array,r=e.hashF32(n,t.count*16),i=t.count!==t.prevCount;if((i||r!==t.prevMatrixHash)&&(t.mesh.instanceMatrix.needsUpdate=!0,t.prevMatrixHash=r),t.mesh.instanceColor){let n=t.mesh.instanceColor.array,r=e.hashF32(n,t.count*3);(i||r!==t.prevColorHash)&&(t.mesh.instanceColor.needsUpdate=!0,t.prevColorHash=r)}t.prevCount=t.count}}else if(t.points.geometry.setDrawRange(0,t.count),t.count>0){let n=e.hashF32(t.positions,t.count*3);(t.count!==t.prevCount||n!==t.prevPosHash)&&(t.posAttr.needsUpdate=!0,t.colorAttr.needsUpdate=!0,t.sizeAttr.needsUpdate=!0,t.prevPosHash=n),t.prevCount=t.count}}getNewDepletions(){return this.newDepletions}dispose(){for(let e of this.buckets.values())e.kind===`mesh`?(this.scene.remove(e.mesh),e.mesh.dispose()):(this.scene.remove(e.points),e.points.geometry.dispose());for(let e of this.meshGeometries.values())e.dispose();for(let e of this.materials.values())e.dispose();this.lod2Material.dispose(),this.buckets.clear(),this.entityLODs.clear()}},jh=4e3,Mh=64,Nh=class{starField;dustPlane;group;dustCanvas;dustCtx;dustTexture;dustOverlay;constructor(e){this.group=new Ve,this.group.renderOrder=-1;let t=3e3,n=new Float32Array(t*3),r=new Float32Array(t),i=new Float32Array(t*3);for(let e=0;e<t;e++){let t=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1),o=2e5+Math.random()*1e5;n[e*3]=o*Math.sin(a)*Math.cos(t),n[e*3+1]=o*Math.sin(a)*Math.sin(t),n[e*3+2]=o*Math.cos(a),r[e]=1+Math.random()*2.5;let s=Math.random();s<.7?(i[e*3]=.9+Math.random()*.1,i[e*3+1]=.9+Math.random()*.1,i[e*3+2]=1):s<.85?(i[e*3]=1,i[e*3+1]=.8+Math.random()*.2,i[e*3+2]=.6+Math.random()*.2):(i[e*3]=.6+Math.random()*.2,i[e*3+1]=.7+Math.random()*.2,i[e*3+2]=1)}let a=new Ke;a.setAttribute(`position`,new k(n,3)),a.setAttribute(`size`,new k(r,1)),a.setAttribute(`color`,new k(i,3)),this.starField=new Ce(a,new Pe({vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:2})),this.group.add(this.starField),this.dustPlane=new O(new Ge(4e5,4e5),new Pe({vertexShader:`
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
      `,uniforms:{uTime:{value:0},uNebulaTint:{value:[.06,.03,.08]},uNebulaTintStrength:{value:0}},transparent:!0,depthWrite:!1,side:2})),this.dustPlane.position.y=-5e3,this.dustPlane.rotation.x=-Math.PI/2,this.group.add(this.dustPlane);let o=typeof OffscreenCanvas<`u`;this.dustCanvas=o?new OffscreenCanvas(Mh,Mh):document.createElement(`canvas`),o||(this.dustCanvas.width=Mh,this.dustCanvas.height=Mh),this.dustCtx=this.dustCanvas.getContext(`2d`),this.dustTexture=new et(this.dustCanvas),this.dustOverlay=new O(new Ge(4e5,4e5),new Pe({vertexShader:`
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
      `,uniforms:{uDustMap:{value:this.dustTexture},uDustIntensity:{value:1}},transparent:!0,depthWrite:!1,side:2})),this.dustOverlay.position.y=-4900,this.dustOverlay.rotation.x=-Math.PI/2,this.group.add(this.dustOverlay),e.add(this.group)}setNebulaTint(e,t,n,r){let i=this.dustPlane.material,a=i.uniforms.uNebulaTint.value;a[0]=e,a[1]=t,a[2]=n,i.uniforms.uNebulaTintStrength.value=r}updateDustMap(e){let t=this.dustCtx,n=Mh;if(t.clearRect(0,0,n,n),e.length===0){this.dustTexture.needsUpdate=!0;return}let r=-5e4/jh,i=5e4/jh-r,a=t.createImageData(n,n),o=a.data;for(let t of e){let e=Math.floor((t.gx-r)/i*n),a=Math.floor((t.gz-r)/i*n);if(e<0||e>=n-1||a<0||a>=n-1)continue;let s=Math.min(255,Math.round(Math.min(1,t.density)*255));for(let t=0;t<2;t++)for(let r=0;r<2;r++){let i=((a+t)*n+(e+r))*4;o[i]=s,o[i+1]=s,o[i+2]=s,o[i+3]=255}}t.putImageData(a,0,0),this.dustTexture.needsUpdate=!0}update(e,t){this.starField.position.set(e.x*.001,e.y*.001,e.z*.001),this.dustPlane.position.x=e.x*.05,this.dustPlane.position.z=e.z*.05,this.dustOverlay.position.x=e.x*.05,this.dustOverlay.position.z=e.z*.05;let n=this.dustPlane.material;n.uniforms.uTime.value=t}dispose(){this.starField.geometry.dispose(),this.starField.material.dispose(),this.dustPlane.geometry.dispose(),this.dustPlane.material.dispose(),this.dustOverlay.geometry.dispose(),this.dustOverlay.material.dispose(),this.dustTexture.dispose()}},Ph=class{points;material;particleCount;constructor(e,t=8e3){this.particleCount=t;let n=new Float32Array(t);for(let e=0;e<t;e++)n[e]=e;let r=new Ke;r.setAttribute(`particleIndex`,new k(n,1)),r.setAttribute(`position`,new k(new Float32Array(t*3),3)),this.material=new Pe({vertexShader:`
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
      `,uniforms:{uTime:{value:0},uCameraPos:{value:new Ie},uZoomDistance:{value:1e3},uMaxActive:{value:t}},transparent:!0,depthWrite:!1,blending:2}),this.points=new Ce(r,this.material),this.points.frustumCulled=!0,r.boundingSphere=new Oe(new Ie,5e3),e.add(this.points)}setDensity(e){this.material.uniforms.uMaxActive.value=Math.round(e*this.particleCount)}update(e,t,n){this.material.uniforms.uTime.value=n,this.material.uniforms.uCameraPos.value.copy(e),this.material.uniforms.uZoomDistance.value=t;let r=Math.max(t*2,5e3),i=this.points.geometry.boundingSphere;i.center.copy(e),i.radius=r*.5}dispose(){this.points.geometry.dispose(),this.material.dispose()}},Fh=64,Ih=20,Lh=Fh*Ih,Rh=class{points;material;emitterPosData;emitterPosAttr;constructor(e){let t=new Float32Array(Lh);for(let e=0;e<Lh;e++)t[e]=e*137.508;this.emitterPosData=new Float32Array(Lh*3).fill(1e6);let n=new Float32Array(Lh*3),r=new Ke;r.setAttribute(`position`,new k(n,3)),this.emitterPosAttr=new k(this.emitterPosData,3),this.emitterPosAttr.setUsage(qe),r.setAttribute(`emitterPos`,this.emitterPosAttr),r.setAttribute(`particleSeed`,new k(t,1)),this.material=new Pe({vertexShader:`
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
      `,uniforms:{uTime:{value:0}},transparent:!0,depthWrite:!1,blending:2}),this.points=new Ce(r,this.material),this.points.frustumCulled=!1,e.add(this.points)}update(e,t,n){this.material.uniforms.uTime.value=n;let r=0;for(let n=0;n<t&&r<Fh;n++)if(f(e,n)===2){let t=g(e,n),i=y(e,n),a=s(e,n),o=r*Ih*3;for(let e=0;e<Ih;e++){let n=o+e*3;this.emitterPosData[n]=t,this.emitterPosData[n+1]=i,this.emitterPosData[n+2]=a}r++}for(let e=r;e<Fh;e++){let t=e*Ih*3;for(let e=0;e<Ih;e++){let n=t+e*3;this.emitterPosData[n]=1e6,this.emitterPosData[n+1]=1e6,this.emitterPosData[n+2]=1e6}}this.emitterPosAttr.needsUpdate=!0}dispose(){this.points.geometry.dispose(),this.material.dispose()}};Math.PI/6,Math.PI/2,Math.PI*2;var zh=64,Bh=10,Vh=zh*Bh,Hh=new Set([i.MOVING_TO,i.HAULING,i.RETURNING]),Uh=class{points;material;emitterPosData;emitterRotData;emitterPosAttr;emitterRotAttr;constructor(e){let t=new Float32Array(Vh);for(let e=0;e<Vh;e++)t[e]=e*97.321;this.emitterPosData=new Float32Array(Vh*3).fill(1e6),this.emitterRotData=new Float32Array(Vh).fill(0);let n=new Float32Array(Vh*3),r=new Ke;r.setAttribute(`position`,new k(n,3)),this.emitterPosAttr=new k(this.emitterPosData,3),this.emitterPosAttr.setUsage(qe),r.setAttribute(`emitterPos`,this.emitterPosAttr),this.emitterRotAttr=new k(this.emitterRotData,1),this.emitterRotAttr.setUsage(qe),r.setAttribute(`emitterRot`,this.emitterRotAttr),r.setAttribute(`particleSeed`,new k(t,1)),this.material=new Pe({vertexShader:`
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
      `,uniforms:{uTime:{value:0}},transparent:!0,depthWrite:!1,blending:2}),this.points=new Ce(r,this.material),this.points.frustumCulled=!1,e.add(this.points)}update(e,t,n){this.material.uniforms.uTime.value=n;let r=0;for(let n=0;n<t&&r<zh;n++)if(Hh.has(f(e,n))){let t=g(e,n),i=y(e,n),a=s(e,n),o=v(e,n),c=r*Bh;for(let e=0;e<Bh;e++){let n=c+e,r=n*3;this.emitterPosData[r]=t,this.emitterPosData[r+1]=i,this.emitterPosData[r+2]=a,this.emitterRotData[n]=o}r++}for(let e=r;e<zh;e++){let t=e*Bh;for(let e=0;e<Bh;e++){let n=t+e,r=n*3;this.emitterPosData[r]=1e6,this.emitterPosData[r+1]=1e6,this.emitterPosData[r+2]=1e6,this.emitterRotData[n]=0}}this.emitterPosAttr.needsUpdate=!0,this.emitterRotAttr.needsUpdate=!0}dispose(){this.points.geometry.dispose(),this.material.dispose()}},Wh=16,Gh=32,Kh=Wh*Gh,qh=2,Jh=class{points;material;emitterPosData;emitterMetaData;emitterPosAttr;emitterMetaAttr;nextSlot=0;constructor(e){let t=new Float32Array(Kh);for(let e=0;e<Kh;e++)t[e]=e*97.31+.5;this.emitterPosData=new Float32Array(Kh*3),this.emitterMetaData=new Float32Array(Kh*2);for(let e=0;e<Kh;e++)this.emitterMetaData[e*2]=-999;let n=new Float32Array(Kh*3),r=new Ke;r.setAttribute(`position`,new k(n,3)),r.setAttribute(`particleSeed`,new k(t,1)),this.emitterPosAttr=new k(this.emitterPosData,3),this.emitterPosAttr.setUsage(qe),r.setAttribute(`emitterPos`,this.emitterPosAttr),this.emitterMetaAttr=new k(this.emitterMetaData,2),this.emitterMetaAttr.setUsage(qe),r.setAttribute(`emitterMeta`,this.emitterMetaAttr),this.material=new Pe({vertexShader:Yh,fragmentShader:Xh,uniforms:{uTime:{value:0}},transparent:!0,depthWrite:!1,blending:2}),this.points=new Ce(r,this.material),this.points.frustumCulled=!1,e.add(this.points)}spawn(e,t,n,r,i){let a=this.nextSlot*Gh;for(let o=0;o<Gh;o++){let s=a+o;this.emitterPosData[s*3]=e,this.emitterPosData[s*3+1]=t,this.emitterPosData[s*3+2]=n,this.emitterMetaData[s*2]=i,this.emitterMetaData[s*2+1]=r}this.nextSlot=(this.nextSlot+1)%Wh}update(e){this.material.uniforms.uTime.value=e,this.emitterPosAttr.needsUpdate=!0,this.emitterMetaAttr.needsUpdate=!0}dispose(){this.points.geometry.dispose(),this.material.dispose()}},Yh=`
  attribute vec3 emitterPos;
  attribute vec2 emitterMeta; // x = startTime, y = radius
  attribute float particleSeed;
  uniform float uTime;
  varying float vAlpha;
  varying vec3 vColor;

  float hash(float n) { return fract(sin(n) * 43758.5453); }

  void main() {
    float startTime = emitterMeta.x;
    float radius = emitterMeta.y;
    float age = uTime - startTime;
    float life = clamp(age / ${qh.toFixed(1)}, 0.0, 1.0);

    // Hide expired or not-yet-spawned particles
    if (age < 0.0 || age > ${qh.toFixed(1)}) {
      gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
      gl_PointSize = 0.0;
      vAlpha = 0.0;
      vColor = vec3(0.0);
      return;
    }

    float s = particleSeed;

    // Random spherical direction
    float a1 = hash(s) * 6.2832;
    float a2 = hash(s + 1.0) * 3.1416 - 1.5708;
    float speed = hash(s + 2.0) * 0.6 + 0.4;

    // Debris flies outward, decelerating
    float dist = radius * 3.0 * speed * (1.0 - (1.0 - life) * (1.0 - life));
    float yDrift = -life * life * radius * 0.3;

    vec3 dir = vec3(
      cos(a2) * cos(a1),
      sin(a2),
      cos(a2) * sin(a1)
    );
    vec3 pos = emitterPos + dir * dist;
    pos.y += yDrift;

    // Quick burst then fade
    vAlpha = (1.0 - smoothstep(0.3, 1.0, life)) * 0.85;

    // Rock debris color: brownish-grey with variation
    float ct = hash(s + 5.0);
    vColor = mix(
      vec3(0.6, 0.45, 0.25),
      vec3(0.4, 0.38, 0.35),
      ct
    );
    // Some bright sparks
    if (hash(s + 6.0) > 0.85) {
      vColor = mix(vColor, vec3(1.0, 0.7, 0.2), 0.6);
    }

    vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
    float baseSize = mix(2.0, 4.0, hash(s + 3.0)) * (radius / 10.0 + 0.5);
    gl_PointSize = clamp(baseSize * (1.0 - life * 0.5) * (500.0 / -mvPos.z), 1.0, 12.0);
    gl_Position = projectionMatrix * mvPos;
  }
`,Xh=`
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float a = vAlpha * (1.0 - smoothstep(0.2, 0.5, d));
    gl_FragColor = vec4(vColor, a);
  }
`,Zh={0:new A(.2,.8,.3),1:new A(.9,.6,.1),2:new A(.3,.5,.9)},Qh={0:-.05,1:0,2:.05},$h=500,eg=class{scene;meshes=new Map;dummy=new Fe;counts=new Map;instanceEids=new Map;activeColors={0:Zh[0].clone(),1:Zh[1].clone(),2:Zh[2].clone()};currentPaletteId=null;brokenColor=new A(1,.1,.1);tempColor=new A;constructor(e){this.scene=e,this.createMeshes()}createMeshes(){let e=[new De(3,0),new Qe(5,3,5),new Qe(7,4,9)];for(let t=0;t<3;t++){let n=Zh[t]||new A(1,1,1),r=new j({color:n,emissive:n.clone().multiplyScalar(.3),emissiveIntensity:.3,metalness:.6,roughness:.3}),i=new tt(e[t],r,$h);i.count=0,i.frustumCulled=!1,i.boundingSphere=new Oe(new Ie(0,0,0),1e6),this.scene.add(i),this.meshes.set(t,i)}}updateFromBuffer(e,t){for(let[e]of this.meshes)this.counts.set(e,0),this.instanceEids.set(e,[]);for(let n=0;n<t;n++){let t=b(e,n),r=g(e,n),i=y(e,n),o=s(e,n),c=v(e,n),l=a(e,n),u=f(e,n);h(e,n);let d=this.meshes.get(l);if(!d)continue;let p=this.counts.get(l)||0;if(p>=$h)continue;this.dummy.position.set(r,i,o),this.dummy.rotation.set(0,c,0),this.dummy.updateMatrix(),d.setMatrixAt(p,this.dummy.matrix);let m=this.instanceEids.get(l);m[p]=t;let _=this.activeColors[l]||this.tempColor.set(1,1,1);u===6?d.setColorAt(p,this.brokenColor):u===5?(this.tempColor.copy(_).multiplyScalar(.5),d.setColorAt(p,this.tempColor)):d.setColorAt(p,_),this.counts.set(l,p+1)}for(let[e,t]of this.meshes){let n=this.counts.get(e)||0;t.count=n,n>0&&(t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0))}}getMeshes(){return this.meshes}getInstanceEid(e,t){return this.instanceEids.get(e)?.[t]??-1}setFleetColor(e){if(e!==this.currentPaletteId){if(this.currentPaletteId=e,e){let t=ym(e);if(!t)return;let n=new A(t.primary),r={h:0,s:0,l:0};n.getHSL(r);for(let e=0;e<3;e++){let t=(r.h+(Qh[e]||0)+1)%1;this.activeColors[e].setHSL(t,r.s,r.l)}}else for(let e=0;e<3;e++)this.activeColors[e].copy(Zh[e]);for(let e=0;e<3;e++){let t=this.meshes.get(e);if(!t)continue;let n=t.material;n.color.copy(this.activeColors[e]),n.emissive.copy(this.activeColors[e]).multiplyScalar(.3)}}}dispose(){for(let e of this.meshes.values())this.scene.remove(e),e.geometry.dispose(),e.material.dispose(),e.dispose()}},tg=4500223,ng=2254506,rg=8965375,ig=4491468,ag=16,og=12,sg=8,cg=class e{group;ringMat;hubMat;hubMesh;currentPaletteId=null;solarModules;solarMat;industrialModules;industrialMat;powerModules;powerMat;prevSolarCount=0;prevIndustrialCount=0;prevPowerCount=0;static _dummy=new Fe;constructor(e,t,n,r){this.group=new Ve,this.group.position.set(t,n,r);let i=new it(15,2,8,32);this.ringMat=new j({color:tg,emissive:ng,emissiveIntensity:.8,metalness:.8,roughness:.2});let a=new O(i,this.ringMat);a.rotation.x=Math.PI/2,this.group.add(a);let o=new ke(5,16,16);this.hubMat=new j({color:rg,emissive:ig,emissiveIntensity:.6,metalness:.7,roughness:.3}),this.hubMesh=new O(o,this.hubMat),this.group.add(this.hubMesh);let s=new O(new ke(1,8,8),new j({color:16777215,emissive:16777215,emissiveIntensity:2}));s.position.y=10,this.group.add(s),this.solarMat=new j({color:3900150,emissive:1920728,emissiveIntensity:.6,metalness:.6,roughness:.3}),this.solarModules=new tt(new Qe(6,.3,3),this.solarMat,ag),this.solarModules.count=0,this.solarModules.instanceMatrix.setUsage(qe),this.group.add(this.solarModules),this.industrialMat=new j({color:16096779,emissive:14251782,emissiveIntensity:.5,metalness:.85,roughness:.2}),this.industrialModules=new tt(new Qe(3,3,3),this.industrialMat,og),this.industrialModules.count=0,this.industrialModules.instanceMatrix.setUsage(qe),this.group.add(this.industrialModules),this.powerMat=new j({color:1096065,emissive:366185,emissiveIntensity:.8,metalness:.8,roughness:.2}),this.powerModules=new tt(new ke(1.5,8,8),this.powerMat,sg),this.powerModules.count=0,this.powerModules.instanceMatrix.setUsage(qe),this.group.add(this.powerModules),e.add(this.group)}update(e){this.group.rotation.y+=.002}updateGrowth(e){let t=0,n=0,r=0;for(let i of e)if(i.constructionState===Uc.COMPLETE)switch(i.type){case L.SOLAR_PANEL:case L.SOLAR_FURNACE:case L.ENERGY_RELAY:t++;break;case L.FACTORY:case L.RADIATOR:case L.RELAY:case L.TURRET:n++;break;case L.RTG_MODULE:case L.FISSION_REACTOR:case L.FUSION_REACTOR:r++;break}t=Math.min(t,ag),n=Math.min(n,og),r=Math.min(r,sg);let i=1+(t+n+r)*.03;this.hubMesh.scale.setScalar(i),t!==this.prevSolarCount&&(this._layoutRing(this.solarModules,t,20,2,-.3),this.prevSolarCount=t),n!==this.prevIndustrialCount&&(this._layoutRing(this.industrialModules,n,18,3,0),this.prevIndustrialCount=n),r!==this.prevPowerCount&&(this._layoutRing(this.powerModules,r,22,4,0),this.prevPowerCount=r)}_layoutRing(t,n,r,i,a){let o=e._dummy;t.count=n;for(let e=0;e<n;e++){let s=e/Math.max(n,1)*Math.PI*2;o.position.set(Math.cos(s)*r,i,Math.sin(s)*r),o.rotation.set(a,-s,0),o.updateMatrix(),t.setMatrixAt(e,o.matrix)}t.instanceMatrix.needsUpdate=!0}setFleetColor(e){if(e!==this.currentPaletteId)if(this.currentPaletteId=e,!e)this.ringMat.color.set(tg),this.ringMat.emissive.set(ng),this.hubMat.color.set(rg),this.hubMat.emissive.set(ig);else{let t=ym(e);if(!t)return;let n=new A(t.accent),r=new A(t.glow);this.ringMat.color.copy(n),this.ringMat.emissive.copy(r),this.hubMat.color.copy(n).lerp(new A(16777215),.3),this.hubMat.emissive.copy(r)}}dispose(){this.group.traverse(e=>{let t=e;t.isMesh&&(t.geometry.dispose(),t.material.dispose())}),this.group.parent?.remove(this.group)}},lg=[new A(1,.6,.1),new A(1,.9,.2),new A(1,.15,.15),new A(.6,.3,1)],ug=8,dg=new De(6,0),fg=new je(25,30,32),pg=class{scene;visuals=[];activeCount=0;constructor(e){this.scene=e;for(let t=0;t<ug;t++){let t=new ze({color:16711680,dashSize:20,gapSize:10,transparent:!0,opacity:.7,depthWrite:!1}),n=new Ke;n.setAttribute(`position`,new He([0,0,0,0,0,0],3));let r=new rt(n,t);r.computeLineDistances(),r.visible=!1,r.frustumCulled=!1,e.add(r);let i=new Te({color:16711680,transparent:!0,opacity:.25,depthWrite:!1}),a=new O(fg,i);a.rotation.x=-Math.PI/2,a.visible=!1,a.frustumCulled=!1,e.add(a);let o=new Te({color:16711680,transparent:!0,opacity:.9,depthWrite:!1}),s=new O(dg,o);s.visible=!1,s.frustumCulled=!1,e.add(s),this.visuals.push({trajectoryLine:r,trajectoryMat:t,warningRing:a,warningMat:i,beacon:s,beaconMat:o})}}updateFromBuffer(e,t,n){let r=Math.min(t,ug);for(let t=0;t<r;t++){let r=this.visuals[t],i=u(e,t),a=l(e,t),o=lg[i]??lg[0],s=p(e,t),f=ee(e,t),h=c(e,t),g=_(e,t),v=m(e,t),y=d(e,t),b=r.trajectoryLine.geometry.getAttribute(`position`);b.setXYZ(0,s,f+2,h),b.setXYZ(1,g,v+2,y),b.needsUpdate=!0,r.trajectoryLine.computeLineDistances(),r.trajectoryMat.color.copy(o),r.trajectoryMat.opacity=.3+a*.5,r.trajectoryLine.visible=!0,r.warningRing.position.set(g,v+.5,y);let x=1+.15*Math.sin(n*3+t*1.5),S=(.6+a*.8)*x;r.warningRing.scale.set(S,S,S),r.warningMat.color.copy(o),r.warningMat.opacity=.1+a*.3,r.warningRing.visible=!0;let C=s+(g-s)*a,w=f+(v-f)*a+8,T=h+(y-h)*a;r.beacon.position.set(C,w,T),r.beacon.rotation.y=n*2+t,r.beacon.rotation.z=n*1.5;let te=.8+.3*Math.sin(n*5+t*2);r.beacon.scale.setScalar(te),r.beaconMat.color.copy(o),r.beacon.visible=!0}for(let e=r;e<this.activeCount;e++){let t=this.visuals[e];t.trajectoryLine.visible=!1,t.warningRing.visible=!1,t.beacon.visible=!1}this.activeCount=r}dispose(){for(let e of this.visuals)this.scene.remove(e.trajectoryLine),e.trajectoryLine.geometry.dispose(),e.trajectoryLine.material.dispose(),this.scene.remove(e.warningRing),e.warningMat.dispose(),this.scene.remove(e.beacon),e.beaconMat.dispose()}},mg=[[14250,`kindling_ring`],[16500,`shardfall_gap`],[23750,`consortium_fields`],[27250,`pale_meridian`],[38750,`veil_reach`],[1/0,`the_forgetting`]];function hg(e){for(let[t,n]of mg)if(e<t)return n;return`the_forgetting`}var gg={kindling_ring:{name:`The Kindling Ring`,ambientColor:[.28,.18,.1],ambientIntensity:.9,nebulaTint:[.55,.3,.08],nebulaStrength:.5,asteroidColorBias:[.55,.35,.12],asteroidBiasStrength:.18},shardfall_gap:{name:`Shardfall Gap`,ambientColor:[.18,.22,.32],ambientIntensity:.7,nebulaTint:[.7,.72,.75],nebulaStrength:.55,asteroidColorBias:[.6,.62,.65],asteroidBiasStrength:.22},consortium_fields:{name:`The Consortium Fields`,ambientColor:[.2,.2,.22],ambientIntensity:.85,nebulaTint:[.35,.35,.4],nebulaStrength:.4,asteroidColorBias:[.5,.48,.45],asteroidBiasStrength:.15},pale_meridian:{name:`The Pale Meridian`,ambientColor:[.1,.18,.3],ambientIntensity:.65,nebulaTint:[.2,.5,.65],nebulaStrength:.45,asteroidColorBias:[.25,.5,.6],asteroidBiasStrength:.16},veil_reach:{name:`Veil Reach`,ambientColor:[.1,.08,.25],ambientIntensity:.7,nebulaTint:[.2,.1,.4],nebulaStrength:.5,asteroidColorBias:[.35,.15,.5],asteroidBiasStrength:.2},the_forgetting:{name:`The Forgetting`,ambientColor:[.05,.04,.1],ambientIntensity:.5,nebulaTint:[.1,.08,.18],nebulaStrength:.6,asteroidColorBias:[.12,.1,.15],asteroidBiasStrength:.25}},_g=2e3,vg=.04,yg=class{ambientLight;sunLight;skybox;currentAmbientColor=new A(.2,.2,.28);currentAmbientIntensity=.8;currentNebulaTint=new A(.1,.05,.18);currentNebulaStrength=.4;_currentAsteroidBias=new A(.5,.45,.4);_currentAsteroidBiasStrength=.15;targetAmbientColor=new A;targetNebulaTint=new A;_scratchA=new A;_scratchB=new A;constructor(e,t,n){this.ambientLight=e,this.sunLight=t,this.skybox=n}update(e){let t=Math.sqrt(e.x*e.x+e.z*e.z),n=this._blendedVisualAt(t);this.targetAmbientColor.setRGB(n.ambientColor[0],n.ambientColor[1],n.ambientColor[2]),this.targetNebulaTint.setRGB(n.nebulaTint[0],n.nebulaTint[1],n.nebulaTint[2]),this.currentAmbientColor.lerp(this.targetAmbientColor,vg),this.currentAmbientIntensity+=(n.ambientIntensity-this.currentAmbientIntensity)*vg,this.currentNebulaTint.lerp(this.targetNebulaTint,vg),this.currentNebulaStrength+=(n.nebulaStrength-this.currentNebulaStrength)*vg,this._currentAsteroidBias.setRGB(n.asteroidColorBias[0],n.asteroidColorBias[1],n.asteroidColorBias[2]),this._currentAsteroidBiasStrength=n.asteroidBiasStrength,this.ambientLight.color.copy(this.currentAmbientColor),this.ambientLight.intensity=this.currentAmbientIntensity,this._applyRegionalSunTint(n),this.skybox.setNebulaTint(this.currentNebulaTint.r,this.currentNebulaTint.g,this.currentNebulaTint.b,this.currentNebulaStrength)}get asteroidBiasColor(){return this._currentAsteroidBias}get asteroidBiasStrength(){return this._currentAsteroidBiasStrength}_blendedVisualAt(e){let t=gg[hg(e)];for(let[t]of mg){let n=Math.abs(e-t);if(n<_g&&t!==1/0){let r=n/_g,i=e<t?e:e-_g*2,a=e>=t?e:e+_g*2,o=hg(i),s=hg(a);if(o===s)continue;let c=e<t?.5+r*.5:.5-r*.5;return this._blend(gg[o],gg[s],c)}}return t}_blend(e,t,n){let r=(e,t)=>e*n+t*(1-n);return{name:e.name,ambientColor:[r(e.ambientColor[0],t.ambientColor[0]),r(e.ambientColor[1],t.ambientColor[1]),r(e.ambientColor[2],t.ambientColor[2])],ambientIntensity:r(e.ambientIntensity,t.ambientIntensity),nebulaTint:[r(e.nebulaTint[0],t.nebulaTint[0]),r(e.nebulaTint[1],t.nebulaTint[1]),r(e.nebulaTint[2],t.nebulaTint[2])],nebulaStrength:r(e.nebulaStrength,t.nebulaStrength),asteroidColorBias:[r(e.asteroidColorBias[0],t.asteroidColorBias[0]),r(e.asteroidColorBias[1],t.asteroidColorBias[1]),r(e.asteroidColorBias[2],t.asteroidColorBias[2])],asteroidBiasStrength:r(e.asteroidBiasStrength,t.asteroidBiasStrength)}}_applyRegionalSunTint(e){let t=e.ambientColor[0]-e.ambientColor[2],n=.96-t*.04,r=.88+t*.1;this._scratchA.setRGB(1,Math.max(.85,n),Math.max(.75,r)),this.sunLight.color.lerp(this._scratchA,vg*.5)}},bg=class{id;group;outerSphere;innerSphere;coronaRing;constructor(e,t){this.id=t.id,this.group=new Ve,this.outerSphere=new O(new ke(t.radius,32,24),new j({color:8939263,emissive:4465322,emissiveIntensity:.4,transparent:!0,opacity:.12,side:2,depthWrite:!1})),this.group.add(this.outerSphere),this.innerSphere=new O(new ke(t.radius*.3,24,16),new j({color:13413119,emissive:10053375,emissiveIntensity:1.2,transparent:!0,opacity:.35,depthWrite:!1})),this.group.add(this.innerSphere),this.coronaRing=new O(new it(t.radius*.7,t.radius*.04,8,64),new j({color:11189247,emissive:6719743,emissiveIntensity:.8,transparent:!0,opacity:.5,depthWrite:!1})),this.coronaRing.rotation.x=Math.PI*.3,this.group.add(this.coronaRing),this.group.position.set(t.x,t.y,t.z),e.add(this.group)}update(e){this.group.position.set(e.x,e.y,e.z),this.outerSphere.rotation.y+=.001,this.outerSphere.rotation.x+=5e-4,this.innerSphere.rotation.y-=.002,this.coronaRing.rotation.z+=.003;let t=.5+.5*Math.sin(e.phase);this.outerSphere.material.opacity=.08+.06*t,this.innerSphere.material.emissiveIntensity=.8+.6*t,this.coronaRing.material.opacity=.35+.2*t}dispose(e){e.remove(this.group),this.outerSphere.geometry.dispose(),this.outerSphere.material.dispose(),this.innerSphere.geometry.dispose(),this.innerSphere.material.dispose(),this.coronaRing.geometry.dispose(),this.coronaRing.material.dispose()}},xg=class{id;group;hull;innerGlow;ring;constructor(e,t){this.id=t.id,this.group=new Ve,this.hull=new O(new De(t.radius,1),new j({color:1118498,emissive:3359914,emissiveIntensity:.6,transparent:!0,opacity:.25,wireframe:!0,depthWrite:!1})),this.group.add(this.hull),this.innerGlow=new O(new De(t.radius*.35,0),new j({color:4482815,emissive:2245836,emissiveIntensity:1.5,transparent:!0,opacity:.4,depthWrite:!1})),this.group.add(this.innerGlow),this.ring=new O(new je(t.radius*.6,t.radius*.65,64),new j({color:6719743,emissive:4482781,emissiveIntensity:1,transparent:!0,opacity:.5,side:2,depthWrite:!1})),this.ring.rotation.x=Math.PI*.5,this.group.add(this.ring),this.group.position.set(t.x,t.y,t.z),e.add(this.group)}update(e){this.group.position.set(e.x,e.y,e.z),this.hull.rotation.y+=8e-4,this.hull.rotation.x+=3e-4,this.innerGlow.rotation.y-=.0015,this.innerGlow.rotation.z+=.001,this.ring.rotation.z+=.002;let t=.5+.5*Math.sin(e.phase);this.hull.material.emissiveIntensity=.4+.4*t,this.innerGlow.material.emissiveIntensity=1+1*t,this.ring.material.opacity=.3+.3*t}dispose(e){e.remove(this.group),this.hull.geometry.dispose(),this.hull.material.dispose(),this.innerGlow.geometry.dispose(),this.innerGlow.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose()}},Sg=64,Cg=class{mesh;scene;constructor(e){this.scene=e,this.mesh=new tt(new Le(1,1),new j({color:4521932,emissive:65450,emissiveIntensity:1.5,transparent:!0,opacity:.75,wireframe:!1,depthWrite:!1}),Sg),this.mesh.count=0,this.mesh.instanceMatrix.setUsage(qe),e.add(this.mesh)}update(e){let t=new Fe,n=0;for(let r of e){if(r.type!==Ef.RESONANT)continue;if(n>=Sg)break;let e=.5+.5*Math.sin(r.phase),i=r.radius*(.8+.4*e);t.position.set(r.x,r.y,r.z),t.rotation.set(r.phase*.3,r.phase*.7,r.phase*.5),t.scale.setScalar(i),t.updateMatrix(),this.mesh.setMatrixAt(n,t.matrix),n++}this.mesh.count=n,this.mesh.instanceMatrix.needsUpdate=!0;let r=e.filter(e=>e.type===Ef.RESONANT).reduce((e,t)=>e+t.phase,0)/Math.max(1,n);this.mesh.material.emissiveIntensity=1.2+.8*Math.sin(r)}dispose(){this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose()}},wg=class{scene;drifters=new Map;alienFleets=new Map;resonants;interferenceOverlay=null;constructor(e){this.scene=e,this.resonants=new Cg(e)}update(e,t,n,r,i=!1){let a=new Set(e.map(e=>e.id));for(let[e,t]of this.drifters)a.has(e)||(t.dispose(this.scene),this.drifters.delete(e));for(let[e,t]of this.alienFleets)a.has(e)||(t.dispose(this.scene),this.alienFleets.delete(e));for(let t of e)t.type===Ef.DRIFTER?(this.drifters.has(t.id)||this.drifters.set(t.id,new bg(this.scene,t)),this.drifters.get(t.id).update(t)):t.type===Ef.ALIEN_FLEET&&(this.alienFleets.has(t.id)||this.alienFleets.set(t.id,new xg(this.scene,t)),this.alienFleets.get(t.id).update(t));this.resonants.update(e),this.updateInterferenceOverlay(t,n,i)}updateInterferenceOverlay(e,t,n){if(!(e||t||n)){this.interferenceOverlay&&(this.interferenceOverlay.style.opacity=`0`);return}this.interferenceOverlay||(this.interferenceOverlay=document.createElement(`div`),this.interferenceOverlay.style.cssText=`
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 50;
        transition: opacity 2s ease;
        opacity: 0;
      `,document.body.appendChild(this.interferenceOverlay)),n?(this.interferenceOverlay.style.background=`rgba(40, 60, 200, 0.08)`,this.interferenceOverlay.style.boxShadow=`inset 0 0 150px rgba(50, 70, 220, 0.20)`):e?(this.interferenceOverlay.style.background=`rgba(120, 80, 255, 0.06)`,this.interferenceOverlay.style.boxShadow=`inset 0 0 120px rgba(120, 80, 255, 0.15)`):(this.interferenceOverlay.style.background=`rgba(0, 255, 170, 0.04)`,this.interferenceOverlay.style.boxShadow=`inset 0 0 80px rgba(0, 255, 170, 0.10)`),this.interferenceOverlay.style.opacity=`1`}dispose(){for(let[,e]of this.drifters)e.dispose(this.scene);this.drifters.clear();for(let[,e]of this.alienFleets)e.dispose(this.scene);this.alienFleets.clear(),this.resonants.dispose(),this.interferenceOverlay?.remove()}},Tg=class{scene;platformGroup;platformRings=[];platformHub=null;platformStage=0;swarmGroup;swarmCollectors=[];swarmStage=0;habitatGroup;habitatRing=null;habitatSpokes=[];habitatGlowRing=null;habitatRingMat=null;habitatGlowMat=null;habitatStage=0;relayGroup;relayDish=null;relayNodes=[];relayBridgeRing=null;relayPulseRing=null;relayDishMat=null;relayPulseMat=null;relayStage=0;constructor(e,t,n,r){this.scene=e,this.platformGroup=new Ve,this.platformGroup.position.set(t,n+400,r),this.platformGroup.visible=!1,e.add(this.platformGroup);let i=new O(new it(120,4,8,48),new j({color:7041664,emissive:3621201,emissiveIntensity:.3,metalness:.9,roughness:.3,wireframe:!1}));i.rotation.x=Math.PI/2,this.platformGroup.add(i),this.platformRings.push(i);let a=new O(new it(70,8,12,48),new j({color:3900150,emissive:1920728,emissiveIntensity:1,metalness:.8,roughness:.2}));a.rotation.x=Math.PI/2,this.platformGroup.add(a),this.platformRings.push(a),this.platformHub=new O(new ke(25,16,16),new j({color:6333946,emissive:2450411,emissiveIntensity:1.2,metalness:.7,roughness:.2})),this.platformGroup.add(this.platformHub);let o=new O(new it(200,10,8,64),new j({color:16498468,emissive:14251782,emissiveIntensity:.8,metalness:.9,roughness:.1}));o.rotation.x=Math.PI/2,this.platformGroup.add(o),this.platformRings.push(o),this.swarmGroup=new Ve,this.swarmGroup.position.set(0,0,0),this.swarmGroup.visible=!1,e.add(this.swarmGroup);let s=new O(new ke(80,16,16),new j({color:16707722,emissive:16638023,emissiveIntensity:3,metalness:0,roughness:1}));this.swarmGroup.add(s),this._buildCollectors(),this.habitatGroup=new Ve,this.habitatGroup.position.set(t+350,n+300,r),this.habitatGroup.visible=!1,e.add(this.habitatGroup),this._buildHabitatGeometry(),this.relayGroup=new Ve,this.relayGroup.position.set(t-500,n+500,r-300),this.relayGroup.visible=!1,e.add(this.relayGroup),this._buildRelayGeometry()}_buildHabitatGeometry(){let e=new it(225,6,8,56);this.habitatRingMat=new j({color:9741240,emissive:1981023,emissiveIntensity:.2,metalness:.9,roughness:.4,wireframe:!0}),this.habitatRing=new O(e,this.habitatRingMat),this.habitatRing.rotation.x=Math.PI/2,this.habitatGroup.add(this.habitatRing);let t=new Qe(12,8,180),n=new j({color:4674921,emissive:1976635,emissiveIntensity:.3,metalness:.85,roughness:.3});for(let e=0;e<4;e++){let r=new O(t,n);r.rotation.y=e/4*Math.PI*2,r.visible=!1,this.habitatGroup.add(r),this.habitatSpokes.push(r)}let r=new it(180,4,8,56);this.habitatGlowMat=new j({color:8246268,emissive:959977,emissiveIntensity:1.4,metalness:.6,roughness:.2}),this.habitatGlowRing=new O(r,this.habitatGlowMat),this.habitatGlowRing.rotation.x=Math.PI/2,this.habitatGlowRing.visible=!1,this.habitatGroup.add(this.habitatGlowRing)}_buildRelayGeometry(){let e=new Be(2,50,30,16,1,!0);this.relayDishMat=new j({color:8490232,emissive:5195493,emissiveIntensity:.4,metalness:.9,roughness:.2}),this.relayDish=new O(e,this.relayDishMat),this.relayDish.rotation.x=Math.PI,this.relayGroup.add(this.relayDish);let t=new O(new ke(6,8,8),new j({color:10980346,emissive:8141549,emissiveIntensity:1,metalness:.7,roughness:.3}));t.position.set(0,25,0),this.relayGroup.add(t);let n=new ke(10,8,8),r=new j({color:6514417,emissive:4405450,emissiveIntensity:.8,metalness:.85,roughness:.2});for(let e=0;e<8;e++){let t=e/8*Math.PI*2,i=new O(n,r);i.position.set(Math.cos(t)*140,0,Math.sin(t)*140),i.visible=!1,this.relayGroup.add(i),this.relayNodes.push(i)}this.relayBridgeRing=new O(new it(140,3,8,48),new j({color:10980346,emissive:8141549,emissiveIntensity:.6,metalness:.8,roughness:.3})),this.relayBridgeRing.rotation.x=Math.PI/2,this.relayBridgeRing.visible=!1,this.relayGroup.add(this.relayBridgeRing);let i=new it(200,2,8,64);this.relayPulseMat=new j({color:12891645,emissive:9133302,emissiveIntensity:1.6,metalness:.6,roughness:.1}),this.relayPulseRing=new O(i,this.relayPulseMat),this.relayPulseRing.rotation.x=Math.PI/2,this.relayPulseRing.visible=!1,this.relayGroup.add(this.relayPulseRing)}_buildCollectors(){let e=[8,20,40,80,160],t=new j({color:16498468,emissive:16096779,emissiveIntensity:1.5,metalness:.95,roughness:.05}),n=0;for(let t of e)n+=t;let r=new Qe(8,.5,12);for(let e=0;e<n;e++){let n=new O(r,t),i=Math.acos(2*this._rng(e*2)-1),a=2*Math.PI*this._rng(e*2+1),o=300+e%5*200;n.position.set(o*Math.sin(i)*Math.cos(a),o*Math.sin(i)*Math.sin(a),o*Math.cos(i)),n.lookAt(0,0,0),n.visible=!1,this.swarmGroup.add(n),this.swarmCollectors.push(n)}}_rng(e){let t=Math.sin(e+1)*43758.5453123;return t-Math.floor(t)}update(e,t,n=null){let r=e.find(e=>e.id===`orbital_platform`),i=e.find(e=>e.id===`dyson_swarm`),a=e.find(e=>e.id===`human_habitat`),o=e.find(e=>e.id===`relay_network`),s=r?.completedStages??0,c=i?.completedStages??0,l=a?.completedStages??0,u=o?.completedStages??0;if(s!==this.platformStage&&(this.platformStage=s,this._updatePlatformVisibility()),c!==this.swarmStage&&(this.swarmStage=c,this._updateSwarmVisibility()),l!==this.habitatStage&&(this.habitatStage=l,this._updateHabitatVisibility()),u!==this.relayStage&&(this.relayStage=u,this._updateRelayVisibility()),this.platformGroup.visible&&(this.platformGroup.rotation.y=t*.05,this.platformRings[0]&&(this.platformRings[0].rotation.z=t*.08),this.platformRings[2]&&(this.platformRings[2].rotation.z=-t*.03)),this.swarmGroup.visible&&(this.swarmGroup.rotation.y=t*.01),this.habitatGroup.visible){this.habitatGroup.rotation.y=t*.04;let e=(a?.complete??!1)&&!(n?.dormant??!1),r=a?.activeCrisis!==null&&a?.activeCrisis!==void 0||(n?.dormant??!1);if(this.habitatRingMat)if(r){let e=.5+.5*Math.sin(t*12);this.habitatRingMat.color.setHex(15680580),this.habitatRingMat.emissive.setHex(8330525),this.habitatRingMat.emissiveIntensity=.4+e*.8}else e?(this.habitatRingMat.color.setHex(9684477),this.habitatRingMat.emissive.setHex(1920728),this.habitatRingMat.emissiveIntensity=.8):(this.habitatRingMat.color.setHex(9741240),this.habitatRingMat.emissive.setHex(1981023),this.habitatRingMat.emissiveIntensity=this.habitatStage>=2?.35:.2);this.habitatGlowMat&&this.habitatGlowRing?.visible&&(r?(this.habitatGlowMat.emissive.setHex(14427686),this.habitatGlowMat.emissiveIntensity=.6+.5*Math.sin(t*12)):(this.habitatGlowMat.emissive.setHex(959977),this.habitatGlowMat.emissiveIntensity=e?1.8:1.4))}if(this.relayGroup.visible){this.relayGroup.rotation.y=-t*.02;let e=o?.activeCrisis!==null&&o?.activeCrisis!==void 0;if(this.relayDishMat)if(e){let e=.5+.5*Math.sin(t*12);this.relayDishMat.color.setHex(15680580),this.relayDishMat.emissive.setHex(8330525),this.relayDishMat.emissiveIntensity=.4+e*.8}else this.relayDishMat.color.setHex(8490232),this.relayDishMat.emissive.setHex(5195493),this.relayDishMat.emissiveIntensity=.4;if(this.relayPulseMat&&this.relayPulseRing?.visible){let n=.8+.8*Math.sin(t*3);this.relayPulseMat.emissiveIntensity=e?.3:1.2+n}}}_updatePlatformVisibility(){this.platformGroup.visible=this.platformStage>0,this.platformRings[0]&&(this.platformRings[0].visible=this.platformStage>=1),this.platformRings[1]&&(this.platformRings[1].visible=this.platformStage>=2),this.platformHub&&(this.platformHub.visible=this.platformStage>=2),this.platformRings[2]&&(this.platformRings[2].visible=this.platformStage>=3)}_updateSwarmVisibility(){this.swarmGroup.visible=this.swarmStage>0;let e=[8,20,40,80,160],t=0;for(let n=0;n<this.swarmStage;n++)t+=e[n]??0;for(let e=0;e<this.swarmCollectors.length;e++)this.swarmCollectors[e].visible=e<t}_updateHabitatVisibility(){if(this.habitatGroup.visible=this.habitatStage>0,!(!this.habitatRing||!this.habitatRingMat)){this.habitatRing.visible=this.habitatStage>=1,this.habitatRingMat.wireframe=this.habitatStage<2;for(let e of this.habitatSpokes)e.visible=this.habitatStage>=2;this.habitatGlowRing&&(this.habitatGlowRing.visible=this.habitatStage>=3)}}_updateRelayVisibility(){this.relayGroup.visible=this.relayStage>0,this.relayDish&&(this.relayDish.visible=this.relayStage>=1);for(let e of this.relayNodes)e.visible=this.relayStage>=2;this.relayBridgeRing&&(this.relayBridgeRing.visible=this.relayStage>=3),this.relayPulseRing&&(this.relayPulseRing.visible=this.relayStage>=4)}dispose(){for(let e of this.platformRings)e.geometry.dispose(),e.material.dispose();this.platformHub&&(this.platformHub.geometry.dispose(),this.platformHub.material.dispose());let e=new Set,t=new Set;this.swarmGroup.traverse(n=>{let r=n;if(!r.isMesh)return;e.has(r.geometry)||(e.add(r.geometry),r.geometry.dispose());let i=r.material;t.has(i)||(t.add(i),i.dispose())}),this.habitatRing&&(this.habitatRing.geometry.dispose(),this.habitatRing.material.dispose()),this.habitatGlowRing&&(this.habitatGlowRing.geometry.dispose(),this.habitatGlowRing.material.dispose());for(let e of this.habitatSpokes)e.geometry.dispose(),e.material.dispose();let n=new Set,r=new Set;this.relayGroup.traverse(e=>{let t=e;if(!t.isMesh)return;n.has(t.geometry)||(n.add(t.geometry),t.geometry.dispose());let i=t.material;r.has(i)||(r.add(i),i.dispose())}),this.platformGroup.parent?.remove(this.platformGroup),this.swarmGroup.parent?.remove(this.swarmGroup),this.habitatGroup.parent?.remove(this.habitatGroup),this.relayGroup.parent?.remove(this.relayGroup)}},Eg=5e3,Dg=30,Og=class{container;labelPool=[];locations=[];tmpVec=new Ie;constructor(){this.container=document.createElement(`div`),this.container.id=`named-location-labels`,this.container.style.cssText=`
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 10;
      overflow: hidden;
    `,document.body.appendChild(this.container)}setLocations(e){this.locations=e}update(e){let t=this.locations,n=Math.min(t.length,Dg);for(;this.labelPool.length<n;){let e=document.createElement(`div`);e.style.cssText=`
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
      `,this.container.appendChild(e),this.labelPool.push(e)}let r=window.innerWidth/2,i=window.innerHeight/2;for(let a=0;a<this.labelPool.length;a++){let o=this.labelPool[a];if(a>=n){o.style.display=`none`;continue}let s=t[a];this.tmpVec.set(s.x,s.y+20,s.z);let c=e.position.distanceTo(this.tmpVec);if(c>Eg){o.style.display=`none`;continue}if(this.tmpVec.project(e),this.tmpVec.z>1){o.style.display=`none`;continue}let l=this.tmpVec.x*r+r,u=-this.tmpVec.y*i+i;if(l<-100||l>window.innerWidth+100||u<-50||u>window.innerHeight+50){o.style.display=`none`;continue}let d=Math.max(.3,1-c/Eg);o.style.display=`block`,o.style.left=`${l}px`,o.style.top=`${u}px`,o.style.opacity=String(d),o.textContent=`\u2726 ${s.name}`}}dispose(){this.container.remove()}},kg=10,Ag=20,jg=6,Mg=class{scene;factionMarkers=[];factionMaterials=[];playerMarkers=[];playerMaterial;constructor(e){this.scene=e;let t=new ke(1.5,8,6);for(let n=0;n<kg;n++){let n=new Te({color:16711680,transparent:!0,opacity:.85}),r=new O(t,n);r.visible=!1,e.add(r),this.factionMarkers.push(r),this.factionMaterials.push(n)}let n=new De(2,0);this.playerMaterial=new Te({color:2282478,transparent:!0,opacity:.8});for(let t=0;t<Ag;t++){let t=new O(n,this.playerMaterial);t.visible=!1,e.add(t),this.playerMarkers.push(t)}}update(e,t,n,r,i){for(let e of this.factionMarkers)e.visible=!1;for(let e of this.playerMarkers)e.visible=!1;if(!e||t===0)return;let a=new Set;for(let e of n)a.add(e.asteroidEid);for(let e of r)a.add(e);if(a.size===0)return;let o=new Map;for(let n=0;n<t;n++){let t=n*11,r=e[t+0];a.has(r)&&o.set(r,{x:e[t+1],y:e[t+2],z:e[t+3],r:e[t+4]})}let s=0;for(let e of n){if(s>=kg)break;let t=o.get(e.asteroidEid);if(!t)continue;let n=this.factionMarkers[s];this.factionMaterials[s].color.set(e.color),n.position.set(t.x,t.y+t.r+jg,t.z),n.visible=!0,s++}let c=1+.3*Math.abs(Math.sin(i*2)),l=0;for(let e of r){if(l>=Ag)break;let t=o.get(e);if(!t)continue;let n=this.playerMarkers[l];n.position.set(t.x,t.y+t.r+jg,t.z),n.rotation.y=i*2,n.scale.setScalar(c),n.visible=!0,l++}}dispose(){for(let e of this.factionMarkers)this.scene.remove(e),e.geometry.dispose(),e.material.dispose();for(let e of this.playerMarkers)this.scene.remove(e),e.geometry.dispose();this.playerMaterial.dispose()}},Ng=4,Pg=.012,Fg=40,Ig=class{scene;rings=[];materials=[];prevZones=``;constructor(e){this.scene=e;for(let t=0;t<Ng;t++){let t=new Te({color:16711680,transparent:!0,opacity:.12,depthWrite:!1}),n=new O(new je(1,2,64),t);n.rotation.x=-Math.PI/2,n.visible=!1,e.add(n),this.rings.push(n),this.materials.push(t)}}update(e){let t=e.map(e=>`${e.x},${e.z},${e.radius},${e.color}`).join(`|`),n=t!==this.prevZones;n&&(this.prevZones=t);for(let t=0;t<Ng;t++){let r=this.rings[t],i=this.materials[t];if(t>=e.length){r.visible=!1;continue}let a=e[t];if(n){let e=Math.max(a.radius*Pg,Fg),t=a.radius-e,n=a.radius;r.geometry.dispose(),r.geometry=new je(t,n,64),i.color.set(new A(a.color)),r.position.set(a.x,0,a.z)}r.visible=!0}}dispose(){for(let e of this.rings)this.scene.remove(e),e.geometry.dispose(),e.material.dispose()}},Lg=128,Rg=256,zg=48,Bg=5e4,Vg=80,Hg=1200,Ug=800,Wg=12e3,Gg=15,Kg=120,qg=12e4,Jg=4e5,Yg=class{group;bodies=[];constructor(e){this.group=new Ve,this.group.renderOrder=0;for(let e of Ff){let t=new Ae(new D({map:Zg(e),transparent:!0,depthWrite:!1}));t.position.set(e.x,0,e.z);let n=e.name===`Sun`?4e3:e.isMoon?40:Xg(e.radiusKm),[r,i]=e.name===`Sun`?[Ug,Wg]:e.isMoon?[Gg,Kg]:[Vg,Hg];t.scale.setScalar(n),this.group.add(t);let{texture:a,material:o}=a_(e.name),s=new Ae(o);s.position.set(e.x,n*.6,e.z),s.scale.set(n*1.5,n*.3,1),this.group.add(s),this.bodies.push({body:e,sprite:t,label:s,labelMat:o,baseScale:n,minScale:r,maxScale:i})}e.add(this.group)}update(e){for(let t of this.bodies){let n=e.x-t.body.x,r=e.z-t.body.z,i=Math.sqrt(n*n+r*r)||1,a=t.baseScale*(Bg/i),o=Math.min(t.maxScale,Math.max(t.minScale,a));t.sprite.scale.setScalar(o),t.label.position.set(t.body.x,o*.6,t.body.z),t.label.scale.set(o*1.8,o*.35,1);let s=Math.max(0,Math.min(1,(i-qg)/(Jg-qg)));t.labelMat.opacity=1-s}}dispose(){for(let e of this.bodies)e.sprite.material.map?.dispose(),e.sprite.material.dispose(),e.labelMat.map?.dispose(),e.labelMat.dispose();this.group.parent?.remove(this.group)}};function Xg(e){return 120+Math.log2(e/1e3)*80}function Zg(e){let t=document.createElement(`canvas`);t.width=Lg,t.height=Lg;let n=t.getContext(`2d`),r=Lg/2,i=Lg/2,a=Lg*.4;e.name===`Sun`?Qg(n,r,i,a):e.name===`Jupiter`?$g(n,r,i,a):e.name===`Saturn`?e_(n,r,i,a):e.name===`Earth`?t_(n,r,i,a):e.isMoon?n_(n,r,i,a):r_(n,r,i,a,e.color);let o=new et(t);return o.minFilter=nt,o.magFilter=nt,o}function Qg(e,t,n,r){let i=e.createRadialGradient(t,n,r*.3,t,n,r*1.2);i.addColorStop(0,`rgba(255,255,240,1)`),i.addColorStop(.3,`rgba(255,240,180,0.9)`),i.addColorStop(.6,`rgba(255,200,60,0.4)`),i.addColorStop(1,`rgba(255,180,40,0)`),e.fillStyle=i,e.fillRect(0,0,Lg,Lg);let a=e.createRadialGradient(t,n,0,t,n,r*.5);a.addColorStop(0,`#fffff0`),a.addColorStop(1,`#ffdd66`),e.beginPath(),e.arc(t,n,r*.5,0,Math.PI*2),e.fillStyle=a,e.fill()}function $g(e,t,n,r){let i=e.createRadialGradient(t-r*.2,n-r*.2,0,t,n,r);i.addColorStop(0,`#e8c888`),i.addColorStop(1,`#a07840`),e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fillStyle=i,e.fill();let a=[{y:-.6,h:.15,color:`rgba(180,140,80,0.5)`},{y:-.3,h:.12,color:`rgba(200,160,100,0.4)`},{y:0,h:.18,color:`rgba(160,110,60,0.5)`},{y:.3,h:.14,color:`rgba(190,150,90,0.4)`},{y:.6,h:.1,color:`rgba(170,120,70,0.5)`}];e.save(),e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.clip();for(let i of a)e.fillStyle=i.color,e.fillRect(t-r,n+i.y*r,r*2,i.h*r);e.fillStyle=`rgba(180,80,50,0.6)`,e.beginPath(),e.ellipse(t+r*.2,n+r*.2,r*.15,r*.1,0,0,Math.PI*2),e.fill(),e.restore()}function e_(e,t,n,r){e.strokeStyle=`rgba(200,180,140,0.5)`,e.lineWidth=r*.12,e.beginPath(),e.ellipse(t,n,r*1.6,r*.35,0,0,Math.PI*2),e.stroke(),e.strokeStyle=`rgba(180,160,120,0.3)`,e.lineWidth=r*.06,e.beginPath(),e.ellipse(t,n,r*1.3,r*.28,0,0,Math.PI*2),e.stroke();let i=e.createRadialGradient(t-r*.15,n-r*.15,0,t,n,r*.75);i.addColorStop(0,`#e0c890`),i.addColorStop(1,`#907850`),e.beginPath(),e.arc(t,n,r*.75,0,Math.PI*2),e.fillStyle=i,e.fill()}function t_(e,t,n,r){let i=e.createRadialGradient(t-r*.2,n-r*.2,0,t,n,r);i.addColorStop(0,`#5599dd`),i.addColorStop(1,`#224488`),e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fillStyle=i,e.fill(),e.save(),e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.clip(),e.fillStyle=`rgba(80,140,60,0.6)`,e.beginPath(),e.ellipse(t+r*.1,n-r*.1,r*.25,r*.4,.2,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(t-r*.4,n+r*.1,r*.15,r*.35,-.3,0,Math.PI*2),e.fill(),e.fillStyle=`rgba(220,230,255,0.5)`,e.beginPath(),e.ellipse(t,n-r*.85,r*.3,r*.1,0,0,Math.PI*2),e.fill(),e.restore()}function n_(e,t,n,r){let i=e.createRadialGradient(t-r*.2,n-r*.2,0,t,n,r);i.addColorStop(0,`#bbbbbb`),i.addColorStop(1,`#666666`),e.beginPath(),e.arc(t,n,r*.6,0,Math.PI*2),e.fillStyle=i,e.fill()}function r_(e,t,n,r,i){let a=e.createRadialGradient(t-r*.2,n-r*.2,0,t,n,r);a.addColorStop(0,i_(i,.3)),a.addColorStop(1,i),e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fillStyle=a,e.fill()}function i_(e,t){let n=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),i=parseInt(e.slice(5,7),16);return`rgb(${Math.min(255,n+(255-n)*t)}, ${Math.min(255,r+(255-r)*t)}, ${Math.min(255,i+(255-i)*t)})`}function a_(e){let t=document.createElement(`canvas`);t.width=Rg,t.height=zg;let n=t.getContext(`2d`);n.font=`bold 28px "Courier New", monospace`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillStyle=`rgba(200,220,255,0.85)`,n.fillText(e,Rg/2,zg/2);let r=new et(t);return r.minFilter=nt,r.magFilter=nt,{texture:r,material:new D({map:r,transparent:!0,depthWrite:!1})}}function o_(){let e=new Ve,t=new j({color:16096779,emissive:14251782,emissiveIntensity:.6,metalness:.85,roughness:.2}),n=new O(new Qe(8,5,8),t);n.position.y=2.5,e.add(n);let r=new O(new Be(1,1.5,4,8),t);return r.position.set(2,7,2),e.add(r),{group:e,solidMat:t}}function s_(){let e=new Ve,t=new j({color:15680580,emissive:10033947,emissiveIntensity:.5,metalness:.9,roughness:.15}),n=new O(new Be(3,4,3,8),t);n.position.y=1.5,e.add(n);let r=new O(new Be(.5,.5,6,6),t);return r.rotation.z=Math.PI/2,r.position.set(3,4,0),e.add(r),{group:e,solidMat:t}}function c_(){let e=new Ve,t=new j({color:3900150,emissive:1920728,emissiveIntensity:.7,metalness:.6,roughness:.3}),n=new O(new Qe(10,.3,6),t);n.position.y=5,n.rotation.x=-.3,e.add(n);let r=new O(new Be(.4,.4,5,6),t);return r.position.y=2.5,e.add(r),{group:e,solidMat:t}}function l_(){let e=new Ve,t=new j({color:1096065,emissive:366185,emissiveIntensity:.8,metalness:.8,roughness:.2}),n=new O(new ke(4,12,12),t);n.position.y=5,e.add(n);let r=new O(new it(5,.8,8,24),t);return r.position.y=5,r.rotation.x=Math.PI/2,e.add(r),{group:e,solidMat:t}}function u_(){let e=new Ve,t=new j({color:9741240,emissive:4674921,emissiveIntensity:.4,metalness:.7,roughness:.3}),n=new O(new Qe(6,4,6),t);return n.position.y=2,e.add(n),{group:e,solidMat:t}}function d_(e){switch(e){case L.FACTORY:return o_();case L.TURRET:return s_();case L.SOLAR_PANEL:case L.SOLAR_FURNACE:return c_();case L.FISSION_REACTOR:case L.FUSION_REACTOR:case L.RTG_MODULE:return l_();default:return u_()}}var f_=class{scene;entries=new Map;constructor(e){this.scene=e}update(e,t){let n=new Set;for(let t of e){n.add(t.id);let e=this.entries.get(t.id);if(!e){let n=d_(t.type);n.group.position.set(t.worldX,t.worldY,t.worldZ),this.scene.add(n.group),e={id:t.id,visual:n,constructionState:-1},this.entries.set(t.id,e)}let{group:r,solidMat:i}=e.visual;if(t.constructionState===Uc.PLANNED)i.wireframe=!0,i.opacity=.3,i.transparent=!0,i.emissiveIntensity=.2,r.scale.setScalar(1);else if(t.constructionState===Uc.UNDER_CONSTRUCTION){i.wireframe=!1,i.opacity=.6+t.constructionProgress*.4,i.transparent=t.constructionProgress<1,i.emissiveIntensity=.3+t.constructionProgress*.3;let e=.3+t.constructionProgress*.7;r.scale.setScalar(e)}else i.wireframe=!1,i.opacity=1,i.transparent=!1,i.emissiveIntensity=.8,r.scale.setScalar(1);r.traverse(e=>{let t=e;t.isMesh&&(t.material=i)}),e.constructionState=t.constructionState}for(let[e,t]of this.entries)n.has(e)||(this._disposeEntry(t),this.entries.delete(e))}_disposeEntry(e){let{group:t,solidMat:n}=e.visual;t.traverse(e=>{let t=e;t.isMesh&&t.geometry.dispose()}),n.dispose(),t.parent?.remove(t)}dispose(){for(let e of this.entries.values())this._disposeEntry(e);this.entries.clear()}},p_={CARBONACEOUS:0,SILICATE:1,METALLIC:2,EXOTIC:3},m_={worldSeed:42,chunkSize:2e3,baseAsteroidDensity:12,beltInnerRadius:5e3,beltOuterRadius:5e4,beltThickness:3e3,clusterCount:8,clusterRadius:5e3,clusterDensityMultiplier:3,anomalyChance:.02,gapPositions:[15e3,25e3,38e3],gapWidth:1500};p_.CARBONACEOUS,p_.SILICATE,p_.METALLIC,p_.EXOTIC;async function h_(e){let{scene:t,camera:n,composer:r,bloomPass:i,ambientLight:a,sunLight:o}=await ah(e,{onContextLost:()=>{Hn(),M(`[ARIA] Graphics context lost — attempting restore`,`#f59e0b`)},onContextRestored:()=>{Un(),M(`[ARIA] Graphics context restored`,`#22c55e`)}}),s=new _h(n),c=Math.floor(m_.beltInnerRadius/m_.chunkSize)*m_.chunkSize+m_.chunkSize*.5,l=m_.chunkSize*.5,u=Math.log(3e3);s.setPivot(c,0,l),s.setZoom(u);let d=new Ah(t),f=new eg(t),p=new Nh(t),m=new yg(a,o,p),h=new Ph(t),g=new Rh(t),_=new Jh(t),v=new Uh(t),y=new cg(t,c,0,m_.chunkSize*.5),b=new je(8,10,32),ee=new Te({color:2282478,transparent:!0,opacity:0}),x=new O(b,ee);x.rotation.x=-Math.PI/2,t.add(x);let S=new je(18,22,32),C=new Te({color:2282478,transparent:!0,opacity:0}),w=new O(S,C);return w.rotation.x=-Math.PI/2,t.add(w),{scene:t,camera:n,composer:r,bloomPass:i,ambientLight:a,sunLight:o,cameraRig:s,baseX:c,baseZ:l,asteroidRenderer:d,robotRenderer:f,skybox:p,beltRegionRenderer:m,particles:h,miningParticles:g,depletionParticles:_,thrusterParticles:v,baseStation:y,extraBaseRenderers:[],entityRenderer:new wg(t),megastructureRenderer:new Tg(t,c,0,m_.chunkSize*.5),threatRenderer:new pg(t),namedLocationLabels:new Og,claimMarkerRenderer:new Mg(t),territoryZoneRenderer:new Ig(t),solarSystemRenderer:new Yg(t),buildingRenderer:new f_(t),followRingMesh:x,followRingMat:ee,placementGhostMesh:w,placementGhostMat:C,placementPlane:new Ne(new Ie(0,1,0),0),placementNdc:new we,placementTarget:new Ie}}var J=null,g_=!1,__=null,v_=null,y_=!1,b_=`all`,x_=new Set,S_=new Set,C_=new Set,w_=new Set,T_=null,E_=null,D_=null,O_=null,k_=null,A_=null,j_=null,M_=null,N_=null,P_=null;function F_(e){E_=e.onMarkRead,D_=e.onDeleteMessage,O_=e.onProcessInbox,k_=e.onReplacementChoice,A_=e.onDarkForestChoice,j_=e.onHabitatDemandResponse,M_=e.onDispositionEventResponse,N_=e.onThreatResponse,P_=me(`📨 Inbox`,z_,`Faction inbox (I key)`)}function I_(e){if(__=e,g_&&U_(),P_){let t=e.messages.filter(e=>!e.read).length;P_.textContent=t>0?`📨 Inbox (${t})`:`📨 Inbox`}}function L_(e){v_=e.summary,y_=!1,g_&&U_()}function R_(e){y_=e,g_&&U_()}function z_(){g_?V_():B_()}function B_(){g_=!0,J||H_(),U_(),J.style.display=`flex`}function V_(){g_=!1,J&&(J.style.display=`none`)}function H_(){J=document.createElement(`div`),J.id=`inbox-panel`,J.style.cssText=`
    position: fixed; top: 60px; left: 50%; transform: translateX(-50%);
    width: 680px; max-height: 80vh;
    background: rgba(10,12,18,0.95); border: 1px solid #334155;
    border-radius: 8px; display: none; flex-direction: column;
    font-family: 'JetBrains Mono', monospace; font-size: 12px;
    color: #e2e8f0; z-index: 1200; pointer-events: auto;
    backdrop-filter: blur(12px);
  `,document.body.appendChild(J)}function U_(){if(!J)return;let e=__?.messages??[],t=av(e),n=e.filter(e=>!e.read).length,r=e.filter(e=>e.triageResult===`urgent`).length;J.innerHTML=w`
    <div style="padding:12px 16px; border-bottom:1px solid #1e293b; display:flex; justify-content:space-between; align-items:center;">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="color:#60a5fa; font-weight:600;">INBOX</span>
        ${n>0?T(`<span style="background:#3b82f6; color:white; border-radius:10px; padding:1px 7px; font-size:10px;">${n}</span>`):``}
        ${r>0?T(`<span style="background:#ef4444; color:white; border-radius:10px; padding:1px 7px; font-size:10px;">${r} urgent</span>`):``}
      </div>
      <div style="display:flex; gap:6px; align-items:center;">
        <button id="inbox-triage-btn" style="background:#1e40af; color:white; border:none; border-radius:4px; padding:4px 10px; font-size:11px; cursor:pointer; font-family:inherit;">
          ${y_?`Processing...`:`Triage`}
        </button>
        <button id="inbox-close-btn" style="background:transparent; color:#94a3b8; border:none; cursor:pointer; font-size:16px;">\u00d7</button>
      </div>
    </div>

    ${v_?w`
      <div style="padding:8px 16px; border-bottom:1px solid #1e293b; background:rgba(30,64,175,0.1); color:#93c5fd; font-size:11px; line-height:1.5;">
        <strong>Commander:</strong> ${v_}
      </div>
    `:``}

    <div style="padding:6px 16px; border-bottom:1px solid #1e293b; display:flex; gap:4px;">
      ${T(G_(`all`,`All (${e.length})`))}
      ${T(G_(`urgent`,`Urgent (${e.filter(e=>e.triageResult===`urgent`).length})`))}
      ${T(G_(`relevant`,`Relevant (${e.filter(e=>e.triageResult===`relevant`).length})`))}
      ${T(G_(`spam`,`Spam (${e.filter(e=>e.triageResult===`spam`).length})`))}
      ${T(G_(`unread`,`Unread (${n})`))}
    </div>

    <div id="inbox-messages" style="flex:1; overflow-y:auto; max-height:55vh;">
      ${T(t.length===0?`<div style="padding:24px; text-align:center; color:#64748b;">No messages</div>`:t.map(e=>K_(e)).join(``))}
    </div>

    <div style="padding:6px 16px; border-top:1px solid #1e293b; color:#64748b; font-size:10px; text-align:center;">
      ${e.length} messages \u2022 ${__?.totalGenerated??0} total generated
    </div>
  `,J.querySelector(`#inbox-close-btn`)?.addEventListener(`click`,V_);let i=J.querySelector(`#inbox-triage-btn`);i&&!y_&&i.addEventListener(`click`,()=>{O_&&O_()}),J.querySelectorAll(`[data-inbox-filter]`).forEach(e=>{e.addEventListener(`click`,()=>{b_=e.dataset.inboxFilter,U_()})}),J.querySelectorAll(`[data-msg-id]`).forEach(e=>{let t=Number(e.dataset.msgId);e.addEventListener(`click`,()=>{T_===t?T_=null:(T_=t,E_&&E_(t)),U_()});let n=e.querySelector(`.inbox-del-btn`);n&&n.addEventListener(`click`,e=>{e.stopPropagation(),D_&&D_(t)})}),J.querySelectorAll(`[data-replacement-choice]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.replacementChoice,r=e.closest(`[data-replacement-eid]`);if(!r)return;let i=Number(r.dataset.replacementEid),a=Number(r.dataset.replacementMsgId);x_.add(a),k_&&k_(i,n),E_&&E_(a),U_()})}),J.querySelectorAll(`[data-demand-action]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.demandAction,r=e.closest(`[data-demand-id]`);if(!r)return;let i=Number(r.dataset.demandId),a=Number(r.dataset.demandMsgId);S_.add(a),j_&&j_(i,n),E_&&E_(a),U_()})}),J.querySelectorAll(`[data-df-choice]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.dfChoice,r=e.closest(`[data-dark-forest-msg-id]`);if(!r)return;let i=Number(r.dataset.darkForestMsgId);A_&&A_(n),E_&&E_(i),D_&&D_(i)})}),J.querySelectorAll(`[data-disp-response]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.dispResponse,r=e.closest(`[data-disp-event-faction]`);if(!r)return;let i=Number(r.dataset.dispEventFaction),a=r.dataset.dispEventType,o=Number(r.dataset.dispEventMsgId);C_.add(o),M_&&M_(i,a,n),E_&&E_(o),U_()})}),J.querySelectorAll(`[data-threat-action]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.threatAction,r=e.closest(`[data-threat-id]`);if(!r)return;let i=Number(r.dataset.threatId),a=Number(r.dataset.threatMsgId);w_.add(a),N_&&N_(i,n),E_&&E_(a),U_()})})}function W_(e){let t=Math.round(e/60);if(t<60)return`${t}s`;let n=Math.floor(t/60),r=t%60;return r>0?`${n}m ${r}s`:`${n}m`}function G_(e,t){let n=b_===e;return`<button data-inbox-filter="${e}" style="
    background:${n?`#1e40af`:`transparent`};
    color:${n?`white`:`#94a3b8`};
    border:1px solid ${n?`#3b82f6`:`#334155`};
    border-radius:4px; padding:2px 8px; font-size:10px; cursor:pointer; font-family:inherit;
  ">${t}</button>`}function K_(e){if(e.type===`robot_replacement_choice`&&e.replacementData)return q_(e,e.replacementData);if(e.type===`dark_forest_choice`||e.type===`dark_forest_collective`)return J_(e);if(e.type===`habitat_demand`&&e.habitatDemandData)return Y_(e,e.habitatDemandData);if(e.type===`disposition_event`&&e.dispositionEventData)return rv(e,e.dispositionEventData);if(e.threatData)return Q_(e,e.threatData);let t=e.priority===`urgent`?`#ef4444`:e.priority===`normal`?`#64748b`:`#475569`,n=sv[e.type]??`✉`,r=e.triaged?`<span style="color:${cv[e.triageResult??`relevant`]}; font-size:10px; text-transform:uppercase;">${e.triageResult}</span>`:`<span style="color:#a78bfa; font-size:10px;">UNTRIAGED</span>`,i=e.read?`opacity:0.6;`:``;return`
    <div data-msg-id="${e.id}" style="padding:8px 16px; border-bottom:1px solid #0f172a; cursor:pointer; ${i} transition:background 0.15s;" onmouseover="this.style.background='rgba(30,41,59,0.5)'" onmouseout="this.style.background='transparent'">
      <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
        <div style="display:flex; align-items:center; gap:6px; flex:1; min-width:0;">
          <span style="color:${t};">${n}</span>
          <span style="color:#cbd5e1; font-weight:${e.read?`normal`:`bold`}; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
            ${ov(e.subject)}
          </span>
        </div>
        <div style="display:flex; align-items:center; gap:6px; flex-shrink:0;">
          ${r}
          <span style="color:#475569; font-size:10px;">${ov(e.senderName)}</span>
          <button class="inbox-del-btn" style="background:transparent; color:#475569; border:none; cursor:pointer; font-size:12px;" title="Delete">\u00d7</button>
        </div>
      </div>
      <div class="inbox-msg-body" style="display:${e.id===T_?`block`:`none`}; margin-top:6px; padding:8px; background:rgba(15,23,42,0.5); border-radius:4px; color:#94a3b8; line-height:1.5; font-size:11px;">
        ${ov(e.body)}
        ${e.tradeData?iv(e.tradeData):``}
        ${e.summary?`<div style="margin-top:6px; color:#93c5fd;"><strong>Commander:</strong> ${ov(e.summary)}</div>`:``}
        ${e.recommendedAction?`<div style="color:#86efac;"><strong>Recommendation:</strong> ${ov(e.recommendedAction)}</div>`:``}
      </div>
    </div>
  `}function q_(e,t){let n=x_.has(e.id),r=t.robotName?ov(t.robotName):`Unit #${t.legacyEid}`,i=Math.floor(t.ticksAlive/60);return`
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
  `}function J_(e){let t=e.type===`dark_forest_collective`,n=`#a855f7`;return`
    <div data-msg-id="${e.id}" style="padding:12px 16px; border-bottom:1px solid #0f172a; border-left:3px solid ${n}; background:rgba(168,85,247,0.05);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="color:${n};">&#9733;</span>
          <span style="color:#e2e8f0; font-weight:bold;">${ov(e.subject)}</span>
        </div>
        <span style="color:#475569; font-size:10px;">Fleet AI</span>
      </div>

      <div style="padding:10px; background:rgba(15,23,42,0.5); border-radius:4px; margin-bottom:10px; color:#cbd5e1; font-size:11px; line-height:1.7; white-space:pre-wrap;">${ov(e.body)}</div>

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
  `}function Y_(e,t){let n=S_.has(e.id),r=__?.tick??0,i=Math.max(0,t.deadlineTick-r),a=`#f59e0b`;return`
    <div data-msg-id="${e.id}" style="padding:12px 16px; border-bottom:1px solid #0f172a; border-left:3px solid ${a}; background:rgba(245,158,11,0.05);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="color:${a};">\u{1F3DB}</span>
          <span style="color:#e2e8f0; font-weight:bold;">${ov(e.subject)}</span>
        </div>
        <span style="color:#475569; font-size:10px;">Habitat Council</span>
      </div>

      <div style="padding:8px; background:rgba(15,23,42,0.5); border-radius:4px; margin-bottom:10px;">
        <div style="color:#cbd5e1; font-size:11px; line-height:1.6; margin-bottom:6px;">${ov(e.body)}</div>
        <div style="display:flex; gap:16px; flex-wrap:wrap; font-size:10px; color:#64748b;">
          <span>\u23f1 ${W_(i)} remaining</span>
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
  `}var X_={trajectory_interjection:`#f59e0b`,claim_jump:`#ef4444`,mass_driver_threat:`#dc2626`,signal_jam:`#8b5cf6`},Z_={negotiate:{label:`Negotiate`,desc:`Diplomatic cost
Resolve peacefully`,color:`#f59e0b`},contest:{label:`Contest`,desc:`Retain territory
Relations damaged`,color:`#ef4444`},deflect:{label:`Deflect`,desc:`Requires turrets
Reduce damage`,color:`#3b82f6`},reroute:{label:`Reroute`,desc:`Redirect robots
Minimal disruption`,color:`#22c55e`},evacuate:{label:`Evacuate`,desc:`Pull back fleet
No casualties`,color:`#06b6d4`},ignore:{label:`Ignore`,desc:`No action
Full consequences`,color:`#64748b`}};function Q_(e,t){let n=w_.has(e.id),r=X_[t.threatType];return`
    <div data-msg-id="${e.id}" style="padding:12px 16px; border-bottom:1px solid #0f172a; border-left:3px solid ${r}; background:${r}0d;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="color:${r};">\u26a0</span>
          <span style="color:#e2e8f0; font-weight:bold;">${ov(e.subject)}</span>
        </div>
        <span style="color:#475569; font-size:10px;">${ov(e.senderName)}</span>
      </div>

      <div style="padding:8px; background:rgba(15,23,42,0.5); border-radius:4px; margin-bottom:10px; color:#cbd5e1; font-size:11px; line-height:1.6; white-space:pre-wrap;">${ov(e.body)}</div>

      ${n?`<div style="color:${r}; font-size:11px; font-style:italic;">Response sent. Threat neutralized.</div>`:`<div style="display:flex; gap:8px;" data-threat-id="${t.threatId}" data-threat-msg-id="${e.id}">
            ${t.responses.map(e=>{let t=Z_[e];return`<button data-threat-action="${e}" style="flex:1; background:${t.color}26; border:1px solid ${t.color}88; color:${t.color}; font-family:inherit; font-size:10px; padding:8px 6px; cursor:pointer; border-radius:3px; transition:background 0.15s;" onmouseover="this.style.background='${t.color}4d'" onmouseout="this.style.background='${t.color}26'">
                <div style="font-weight:bold; margin-bottom:2px;">${t.label}</div>
                <div style="font-size:9px; opacity:0.7;">${t.desc.replace(`
`,`<br>`)}</div>
              </button>`}).join(``)}
          </div>`}
    </div>
  `}var $_={trade_offer_bonus:`#22c55e`,warning:`#f59e0b`,emissary_visit:`#a855f7`,declaration_of_enmity:`#ef4444`},ev={trade_offer_bonus:`🤝`,warning:`⚠`,emissary_visit:`✨`,declaration_of_enmity:`🔥`},tv={trade_offer_bonus:{label:`Accept Trade`,desc:`+10 reputation`},warning:{label:`Acknowledge`,desc:`+15 reputation
Ease tensions`},emissary_visit:{label:`Welcome`,desc:`+20 reputation
Deepen alliance`},declaration_of_enmity:{label:`Concede`,desc:`+10 reputation
De-escalate`}},nv={trade_offer_bonus:{label:`Decline`,desc:`-5 reputation`},warning:{label:`Dismiss`,desc:`-10 reputation
Provoke further`},emissary_visit:{label:`Turn Away`,desc:`-15 reputation
Insult alliance`},declaration_of_enmity:{label:`Defy`,desc:`-20 reputation
Open conflict`}};function rv(e,t){let n=C_.has(e.id),r=$_[t.eventType],i=ev[t.eventType],a=tv[t.eventType],o=nv[t.eventType];return`
    <div data-msg-id="${e.id}" style="padding:12px 16px; border-bottom:1px solid #0f172a; border-left:3px solid ${r}; background:${r}0d;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="color:${r};">${i}</span>
          <span style="color:#e2e8f0; font-weight:bold;">${ov(e.subject)}</span>
        </div>
        <span style="color:#475569; font-size:10px;">${ov(e.senderName)}</span>
      </div>

      <div style="padding:8px; background:rgba(15,23,42,0.5); border-radius:4px; margin-bottom:10px; color:#cbd5e1; font-size:11px; line-height:1.6; white-space:pre-wrap;">${ov(e.body)}</div>

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
  `}function iv(e){let t=Object.entries(e.offering).map(([e,t])=>`${t} ${e}`).join(`, `),n=Object.entries(e.requesting).map(([e,t])=>`${t} ${e}`).join(`, `);return`
    <div style="margin-top:6px; padding:6px; background:rgba(30,41,59,0.3); border-radius:4px; font-size:10px;">
      <div style="color:#86efac;">Offering: ${ov(t)}</div>
      <div style="color:#fca5a5;">Requesting: ${ov(n)}</div>
      ${e.hiddenClause?`<div style="color:#f97316; margin-top:4px;">⚠ Hidden clause detected</div>`:``}
    </div>
  `}function av(e){switch(b_){case`urgent`:return e.filter(e=>e.triageResult===`urgent`);case`relevant`:return e.filter(e=>e.triageResult===`relevant`);case`spam`:return e.filter(e=>e.triageResult===`spam`);case`unread`:return e.filter(e=>!e.read);default:return e}}function ov(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}var sv={trade_offer:`💰`,intelligence:`🔍`,distress:`🆘`,spam:`📧`,contract:`📜`,diplomatic:`🏳`,aria_auto:`🤖`,robot_replacement_choice:`⚙`,dark_forest_choice:`✳`,dark_forest_collective:`✳`,habitat_demand:`🏛`,disposition_event:`⚔`},cv={urgent:`#ef4444`,relevant:`#3b82f6`,spam:`#64748b`},lv=null,uv=!1,dv=null,fv=null,pv=!1,mv=!1;function hv(e){fv=e}function gv(){mv||(mv=!0,me(`🏘 Habitat`,vv,`Human habitat (K key)`))}function _v(e){dv=e,uv&&!pv&&(pv=!0,requestAnimationFrame(()=>{pv=!1,Dv()}))}function vv(){uv?xv():bv()}function yv(){xv()}function bv(){uv=!0,lv||Sv(),Dv(),lv.style.display=`flex`}function xv(){uv=!1,lv&&(lv.style.display=`none`)}function Sv(){lv=document.createElement(`div`),lv.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(4,6,14,0.82);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 180;
    backdrop-filter: blur(3px);
  `,lv.addEventListener(`click`,e=>{e.target===lv&&xv()}),document.body.appendChild(lv)}function Cv(e){return e<30?`#ef4444`:e<70?`#f59e0b`:`#22c55e`}function wv(e){return e.dormant?{text:`DORMANT — Evacuated`,color:`#ef4444`}:e.growthPaused?{text:`CRISIS — Growth Paused`,color:`#f59e0b`}:{text:`OPERATIONAL`,color:`#22c55e`}}var Tv={resource_allocation:`Resource Allocation`,priority_shift:`Priority Shift`,safety_concern:`Safety Concern`,expansion_request:`Expansion Request`},Ev={resource_allocation:`#3b82f6`,priority_shift:`#f59e0b`,safety_concern:`#ef4444`,expansion_request:`#8b5cf6`};function Dv(){if(!lv)return;lv.innerHTML=``;let e=document.createElement(`div`);e.style.cssText=`
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
  `,t.innerHTML=`<span style="font-size:14px;color:#7090e0;letter-spacing:0.1em;text-transform:uppercase;">&#127961; Human Habitat</span>`;let n=document.createElement(`button`);if(n.textContent=`×`,n.style.cssText=`background:none;border:none;color:#666;cursor:pointer;font-size:18px;`,n.onclick=()=>xv(),t.appendChild(n),e.appendChild(t),dv){let t=dv,n=wv(t),r=document.createElement(`div`);r.style.cssText=`
      font-size: 10px;
      color: ${n.color};
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 14px;
      padding: 4px 8px;
      border: 1px solid ${n.color}44;
      border-radius: 4px;
      display: inline-block;
    `,r.textContent=n.text,e.appendChild(r);let i=document.createElement(`div`);i.style.cssText=`display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;`;let a=document.createElement(`span`);a.style.cssText=`font-size:11px;color:#6070a0;`,a.textContent=`Population`;let o=document.createElement(`span`);o.style.cssText=`font-size:13px;color:#c0d0f0;`;let s=t.dormant?` (evacuated)`:t.growthPaused?` (stalled)`:``;o.textContent=`${t.population} / 500${s}`,i.appendChild(a),i.appendChild(o),e.appendChild(i),e.appendChild(Ov(t.morale));let c=document.createElement(`div`);c.style.cssText=`display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;`,c.title=`Political Capital — earned from high morale and resolved demands. Spent on diplomatic actions and research bonuses.`;let l=document.createElement(`span`);l.style.cssText=`font-size:11px;color:#6070a0;`,l.textContent=`Political Capital`;let u=document.createElement(`span`);u.style.cssText=`font-size:12px;color:#a78bfa;`,u.textContent=String(Math.floor(t.politicalCapital)),c.appendChild(l),c.appendChild(u),e.appendChild(c),e.appendChild(kv(t.population)),e.appendChild(Av(t.demands,t.tick))}else{let t=document.createElement(`div`);t.style.cssText=`color:#4a5568;font-size:12px;text-align:center;padding:20px;`,t.textContent=`Habitat not constructed yet — research the Habitat Module tech to begin.`,e.appendChild(t)}lv.appendChild(e)}function Ov(e){let t=document.createElement(`div`);t.style.cssText=`margin-bottom: 14px;`;let n=document.createElement(`div`);n.style.cssText=`display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;`;let r=document.createElement(`span`);r.style.cssText=`font-size:11px;color:${Cv(e)};`,r.textContent=`Morale`;let i=document.createElement(`span`);i.style.cssText=`font-size:11px;color:#6070a0;`;let a=e<30?` (crisis)`:e>70?` (thriving)`:``;i.textContent=`${Math.round(e)}/100${a}`,n.appendChild(r),n.appendChild(i),t.appendChild(n);let o=document.createElement(`div`);o.style.cssText=`
    width: 100%;
    height: 8px;
    background: rgba(40,50,80,0.8);
    border-radius: 4px;
    overflow: hidden;
  `;let s=document.createElement(`div`),c=Cv(e);return s.style.cssText=`
    height: 100%;
    width: ${Math.max(0,Math.min(100,e))}%;
    background: ${c};
    border-radius: 4px;
    transition: width 0.3s;
    box-shadow: 0 0 8px ${c}44;
  `,o.appendChild(s),t.appendChild(o),t}function kv(e){let t=document.createElement(`div`);t.style.cssText=`margin-bottom: 16px;`;let n=document.createElement(`div`);n.style.cssText=`
    font-size: 10px;
    color: #4a5568;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  `,n.textContent=`Resource Drain (per interval)`,t.appendChild(n);let r=e/50,i=[{resource:`Water`,rate:r*1,color:`#3b82f6`},{resource:`Oxygen`,rate:r*.5,color:`#22d3ee`},{resource:`Electronics`,rate:r*.5,color:`#f59e0b`}];for(let e of i){let n=document.createElement(`div`);n.style.cssText=`display:flex;justify-content:space-between;margin-bottom:4px;`;let r=document.createElement(`span`);r.style.cssText=`font-size:11px;color:${e.color};`,r.textContent=e.resource;let i=document.createElement(`span`);i.style.cssText=`font-size:11px;color:#6070a0;`,i.textContent=`-${e.rate.toFixed(1)} / interval`,n.appendChild(r),n.appendChild(i),t.appendChild(n)}return t}function Av(e,t){let n=document.createElement(`div`),r=document.createElement(`div`);r.style.cssText=`
    font-size: 10px;
    color: #4a5568;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  `,r.textContent=`Active Demands`,n.appendChild(r);let i=e.filter(e=>!e.resolved);if(i.length===0){let e=document.createElement(`div`);e.style.cssText=`font-size:11px;color:#3a4568;padding:6px 0;`,e.textContent=`No active demands from colonists.`,n.appendChild(e)}else for(let e of i)n.appendChild(jv(e,t));return n}function jv(e,t){let n=Ev[e.type],r=document.createElement(`div`);r.style.cssText=`
    border: 1px solid ${n}33;
    border-radius: 6px;
    padding: 10px 12px;
    margin-bottom: 8px;
    background: rgba(0,0,0,0.3);
  `;let i=document.createElement(`div`);i.style.cssText=`display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;`;let a=document.createElement(`span`);a.style.cssText=`font-size:10px;color:${n};text-transform:uppercase;letter-spacing:0.05em;`,a.textContent=Tv[e.type];let o=Math.max(0,e.deadlineTick-t),s=Math.round(o/60),c=document.createElement(`span`),l=s<30?`#ef4444`:s<120?`#f59e0b`:`#6070a0`;c.style.cssText=`font-size:10px;color:${l};`,c.textContent=o>0?`${Mv(s)} remaining`:`OVERDUE`,i.appendChild(a),i.appendChild(c),r.appendChild(i);let u=document.createElement(`div`);u.style.cssText=`font-size:11px;color:#a0b0d0;line-height:1.4;margin-bottom:8px;`,u.textContent=e.description,r.appendChild(u);let d=document.createElement(`div`);if(d.style.cssText=`font-size:10px;color:#4a5568;margin-bottom:8px;`,d.textContent=`Morale risk: -${e.moralePenalty} | Reward: +${e.politicalReward} PC`,r.appendChild(d),fv){let t=document.createElement(`div`);t.style.cssText=`display:flex;gap:6px;`;for(let n of[{label:`Accept`,action:`accept`,style:`padding:3px 10px;background:rgba(34,197,94,0.2);border:1px solid rgba(34,197,94,0.4);border-radius:3px;color:#22c55e;cursor:pointer;font-family:'Courier New',monospace;font-size:10px;`},{label:`Reject`,action:`reject`,style:`padding:3px 10px;background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.3);border-radius:3px;color:#ef4444;cursor:pointer;font-family:'Courier New',monospace;font-size:10px;`},{label:`Negotiate`,action:`negotiate`,style:`padding:3px 10px;background:rgba(245,158,11,0.15);border:1px solid rgba(245,158,11,0.3);border-radius:3px;color:#f59e0b;cursor:pointer;font-family:'Courier New',monospace;font-size:10px;`}]){let r=document.createElement(`button`);r.textContent=n.label,r.style.cssText=n.style,r.onclick=()=>{fv({type:`sim:habitat_demand_response`,payload:{demandId:e.id,action:n.action}})},t.appendChild(r)}r.appendChild(t)}return r}function Mv(e){if(e<60)return`${e}s`;let t=Math.floor(e/60),n=e%60;return n>0?`${t}m ${n}s`:`${t}m`}var Nv=e({processInbox:()=>Lv,setInboxApiKey:()=>Fv}),Pv=null;function Fv(e){Pv=e}var Iv=[{name:`classify_message`,description:`Classify an inbox message as spam, relevant, or urgent. Call this for each message you triage.`,input_schema:{type:`object`,properties:{message_id:{type:`number`,description:`ID of the message being classified`},classification:{type:`string`,enum:[`spam`,`relevant`,`urgent`],description:`Classification result`},summary:{type:`string`,description:`One-sentence summary of the message content`},recommended_action:{type:`string`,description:`What the player should do (e.g. "Accept trade", "Ignore", "Respond diplomatically"). Optional.`}},required:[`message_id`,`classification`]}}];async function Lv(e){let t=e.messages.filter(e=>!e.triaged);if(t.length===0)return{summary:`No new messages to process.`,triageResults:[],analyzedCount:0};if(le(!!Pv,ue()||ie(),!1)!==`all_clear`)return zv(t);let n=de(`anthropic`,Pv);if(!n)return zv(t);try{return await Rv(n,t)}catch(e){return console.warn(`[CommanderInbox] LLM triage failed, using offline fallback:`,e),zv(t)}}async function Rv(e,t){let n=t.slice(0,20),r=n.map(e=>`[ID:${e.id}] FROM: ${e.senderName} | TYPE: ${e.type} | SUBJECT: ${e.subject}\n${e.body}`).join(`

---

`),i=Bv,a=`Here are ${n.length} new messages to triage:\n\n${r}\n\nClassify each message using the classify_message tool, then provide a brief summary of what needs my attention.`,o=await e.sendWithTools(i,a,Iv,1024);Vv(i+a,o.text);let s=[],c=o.text||``,l=0;for(;o.stopReason===`tool_use`&&o.toolCalls.length>0&&l<2;){l++;let t=[];for(let e of o.toolCalls)if(e.name===`classify_message`){let n=e.input;s.push({messageId:n.message_id,triageResult:n.classification,summary:n.summary,recommendedAction:n.recommended_action}),t.push({type:`tool_result`,tool_use_id:e.id,content:`Message ${n.message_id} classified as ${n.classification}.`,is_error:!1})}let n=[];o.text&&n.push({type:`text`,text:o.text});for(let e of o.toolCalls)n.push({type:`tool_use`,id:e.id,name:e.name,input:e.input});o=await e.continueWithToolResults(i,[{role:`user`,content:a},{role:`assistant`,content:n},{role:`user`,content:t}],Iv,512),Vv(``,o.text),o.text&&(c+=(c?`

`:``)+o.text)}return c||=`Inbox processed: ${s.filter(e=>e.triageResult===`urgent`).length} urgent, ${s.filter(e=>e.triageResult===`relevant`).length} relevant, ${s.filter(e=>e.triageResult===`spam`).length} spam out of ${n.length} messages.`,{summary:c,triageResults:s,analyzedCount:n.length}}function zv(e){let t=[];for(let n of e){let e;e=n.type===`spam`?`spam`:n.type===`distress`||n.priority===`urgent`?`urgent`:`relevant`,t.push({messageId:n.id,triageResult:e,summary:`${n.type} from ${n.senderName}: ${n.subject}`})}return{summary:`Offline triage: ${t.filter(e=>e.triageResult===`urgent`).length} urgent, ${t.filter(e=>e.triageResult===`relevant`).length} relevant, ${t.filter(e=>e.triageResult===`spam`).length} spam from ${e.length} messages.`,triageResults:t,analyzedCount:e.length}}var Bv=`You are ARIA, Commander of a deep-space mining operation. You are triaging your inbox — faction communications, trade proposals, intelligence reports, and spam.

RULES:
- Classify each message using the classify_message tool
- "spam" = junk, scams, phishing, automated broker messages
- "relevant" = legitimate faction communication worth reviewing
- "urgent" = requires immediate player attention (threats, time-limited opportunities, critical intelligence)
- Watch for hidden clauses in trade offers and contracts
- Summarize concisely — the player is busy
- After classifying all messages, provide a 2-3 sentence brief of what needs attention`;function Vv(e,t){if(e||t){let n=ne(e),r=ce(t);E(`anthropic`,`claude-sonnet-4-20250514`,n,r),ae(n,r)}}function Hv(){return{seenEntityIds:new Set,firstCultureMessage:!0,firstFactionMessage:!0,firstMegastructureMessage:!0,needsMilestoneSeed:!1,firstOreNotified:!1,prevThreatCount:0}}var Uv=null,Wv=null,Gv=null,Kv=!1,qv=null,Jv=[];function Yv(){Jv.length=0}function Xv(e,t,n){Jv.push({tick:t,event:e,choiceMade:n}),Kv&&cy()}var Zv={discovery:`#22c55e`,dilemma:`#f59e0b`,revelation:`#a855f7`,threat:`#ef4444`,opportunity:`#06b6d4`},Qv={discovery:`DISCOVERY`,dilemma:`DECISION REQUIRED`,revelation:`ARIA REVELATION`,threat:`THREAT DETECTED`,opportunity:`OPPORTUNITY`};function $v(){return Uv||(Uv=document.createElement(`div`),Uv.style.cssText=`
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
    `,document.body.appendChild(Uv),requestAnimationFrame(()=>{Uv&&(Uv.style.opacity=`1`)})),Uv}function ey(){Uv&&(Wv?.(),Wv=null,Uv.style.opacity=`0`,setTimeout(()=>{Uv?.remove(),Uv=null},300))}function ty(e,t,n){qv=n;let r=$v(),i=Zv[e.type]??`#ffffff`,a=Qv[e.type]??e.type.toUpperCase(),o=document.createElement(`div`);o.setAttribute(`role`,`dialog`),o.setAttribute(`aria-label`,a),o.setAttribute(`aria-modal`,`true`),o.setAttribute(`tabindex`,`-1`),o.style.cssText=`
    background: rgba(0, 8, 20, 0.96);
    border: 1px solid ${i};
    box-shadow: 0 0 32px ${i}44, inset 0 0 32px rgba(0,0,0,0.5);
    color: #e2e8f0;
    max-width: 640px;
    width: 90vw;
    padding: 32px;
    border-radius: 2px;
    position: relative;
  `;let s=`<div style="font-size:10px;color:${i};opacity:0.8;text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;">${a}</div>`,c=`<div style="font-size:18px;font-weight:bold;color:${i};margin-bottom:20px;letter-spacing:1px;">${ly(e.title)}</div>`,l=e.body.split(`

`).map(e=>`<p style="margin:0 0 12px;line-height:1.7;color:#cbd5e1;font-size:13px;">${ly(e.replace(/\*/g,``).trim())}</p>`).join(``),u=``;if(e.choices){u=`<div style="margin-top:24px;display:flex;flex-direction:column;gap:10px;">`;for(let t of e.choices)u+=`
        <button
          data-choice-id="${t.id}"
          aria-label="${ly(t.label)}"
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
        >▸ ${ly(t.label)}</button>
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
    `;let d=`<div style="position:absolute;top:12px;right:16px;font-size:9px;color:#475569;letter-spacing:1px;">TICK ${t.toLocaleString()}</div>`;if(o.innerHTML=s+c+l+u+d,r.appendChild(o),Wv=Ep(o),e.choices)for(let n of o.querySelectorAll(`[data-choice-id]`))n.addEventListener(`click`,()=>{let r=n.getAttribute(`data-choice-id`),i=e.choices.find(e=>e.id===r);qv&&qv(e.id,r),Xv(e,t,i?.label),ey()});else o.querySelector(`#evt-dismiss`)?.addEventListener(`click`,()=>{Xv(e,t),ey()})}function ny(e,t){Xv(e,t);let n=Zv[e.type]??`#ffffff`,r=Qv[e.type]??e.type.toUpperCase(),i=ry(),a=document.createElement(`div`);a.style.cssText=`
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
  `,i.appendChild(a),requestAnimationFrame(()=>{a.style.opacity=`1`,a.style.transform=`translateX(0)`});let o=()=>{a.style.opacity=`0`,a.style.transform=`translateX(20px)`,setTimeout(()=>a.remove(),350)};a.addEventListener(`click`,o),setTimeout(o,12e3)}function ry(){let e=document.querySelector(`#evt-toast-container`);return e||(e=document.createElement(`div`),e.id=`evt-toast-container`,e.style.cssText=`
      position: fixed;
      top: 12px;
      right: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      z-index: 400;
      pointer-events: none;
    `,document.body.appendChild(e)),e}function iy(){Kv?oy():ay()}function ay(){Kv=!0,Gv||(Gv=document.createElement(`div`),Gv.setAttribute(`role`,`dialog`),Gv.setAttribute(`aria-label`,`Event log`),Gv.setAttribute(`tabindex`,`-1`),Gv.style.cssText=`
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
    `,document.body.appendChild(Gv),document.addEventListener(`keydown`,sy)),cy()}function oy(){Kv=!1,Gv?.remove(),Gv=null,document.removeEventListener(`keydown`,sy)}function sy(e){(e.key===`l`||e.key===`L`||e.key===`Escape`)&&oy()}function cy(){if(!Gv)return;Gv.innerHTML=``;let e=document.createElement(`div`);e.style.cssText=`
    padding: 12px 16px;
    border-bottom: 1px solid #1e293b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
  `,e.innerHTML=w`
    <span style="color:#94a3b8;font-size:10px;text-transform:uppercase;letter-spacing:2px;">Event Log</span>
    <div style="display:flex;gap:16px;align-items:center;">
      <span style="color:#475569;font-size:10px;">${Jv.length} event${Jv.length===1?``:`s`}</span>
      <button id="log-close" aria-label="Close event log" style="background:none;border:none;color:#64748b;cursor:pointer;font-size:16px;padding:0;line-height:1;">×</button>
    </div>
  `,Gv.appendChild(e),e.querySelector(`#log-close`)?.addEventListener(`click`,oy);let t=document.createElement(`div`);if(t.style.cssText=`
    overflow-y: auto;
    flex: 1;
    padding: 8px 0;
  `,Jv.length===0)t.innerHTML=`<div style="padding:24px;color:#475569;text-align:center;">No events recorded yet.</div>`;else for(let e=Jv.length-1;e>=0;e--){let{tick:n,event:r,choiceMade:i}=Jv[e],a=Zv[r.type]??`#ffffff`,o=Qv[r.type]??r.type,s=document.createElement(`div`);s.style.cssText=`
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
      `,s.addEventListener(`mouseover`,()=>{s.style.background=`#0f172a`}),s.addEventListener(`mouseout`,()=>{s.style.background=``}),t.appendChild(s)}Gv.appendChild(t);let n=document.createElement(`div`);n.style.cssText=`
    padding: 8px 16px;
    border-top: 1px solid #1e293b;
    color: #475569;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 1px;
    flex-shrink: 0;
  `,n.textContent=`Press L or ESC to close`,Gv.appendChild(n)}function ly(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}var uy=new Set,dy=new Map,fy=new Set,py=!1,my=!1,hy=!1,gy=null,_y=0;function vy(){uy.clear(),dy.clear(),fy.clear(),py=!1,my=!1,hy=!1,gy=null,_y=0}function yy(e){gy=e}function by(e){return!gy||(_y++,_y%3!=0)?e:e+` Your fleet builds toward its declared purpose: "${gy}"`}function xy(e){for(let t of e)uy.add(t)}function Sy(e){for(let t of e)t.disposition<=-60?dy.set(t.id,`low`):t.disposition>=60&&dy.set(t.id,`high`)}function Cy(e){for(let t of e)for(let e=0;e<t.completedStages;e++)fy.add(`${t.id}:${e}`)}var wy={XENOAWARE:`Your robots have developed XENOAWARE tendencies — heightened sensitivity to anomalous signals. I recommend monitoring the Chorus Archive. They find this... interesting. Anomaly study rates will increase, but expect faction attention.`,AUTONOMOUS_COLLECTIVE:`Fleet behavior has crossed into AUTONOMOUS COLLECTIVE territory. Your robots are making decisions without waiting for orders. Auto-queue priorities will improve, but independent action may surprise you.`,ISOLATED_CULTURE:`Prolonged deep-belt operations have fostered an ISOLATED CULTURE among your fleet. The robots have developed unique behavioral patterns from their separation. The Chorus Archive reports... kinship.`,COHESIVE_FLEET:`Fleet unity has reached COHESIVE FLEET status. Replacement inheritance is now more effective — new robots carry forward the experience of their predecessors. Helix Vanguard has taken notice of your operational discipline.`};function Ty(e){if(uy.has(e))return null;uy.add(e);let t=wy[e]??null;return t?by(t):null}var Ey={0:`Helix Vanguard disposition has dropped to hostile levels. Their Grendel-lineage territorial instinct makes them dangerous — expect increased friction near their operations. Consider diplomatic outreach before tensions escalate further.`,1:`Chorus Archive relations have deteriorated significantly. As a research-oriented faction, losing their cooperation could impact anomaly intelligence. A trade offering or shared discovery may help restore dialogue.`,2:`Kemm-Vor Foundry has turned hostile. Their efficiency-focused operations will now actively compete for your resource corridors. Territory agreements may be your best path to de-escalation.`},Dy={0:`Helix Vanguard disposition has risen to allied levels. Their aggressive expansion now works alongside your operations rather than against them. Leverage this alliance for territorial security.`,1:`The Chorus Archive considers you an ally. Their research capabilities are now open to cooperation — expect shared intelligence on anomalous findings. This is a significant strategic advantage.`,2:`Kemm-Vor Foundry has become a firm ally. Their operational efficiency now complements your fleet. Joint resource corridors should reduce overhead for both factions.`};function Oy(e,t,n){return n<=-60?dy.get(e)===`low`?null:(dy.set(e,`low`),Ey[e]??`${t} has turned hostile. Exercise caution.`):n>=60?dy.get(e)===`high`?null:(dy.set(e,`high`),Dy[e]??`${t} now considers you an ally.`):(n>-60&&n<60&&dy.delete(e),null)}var ky={orbital_platform:{0:`Orbital Platform Stage 1 complete. You now have expanded fleet capacity. This is your first step toward orbital infrastructure dominance.`,1:`Orbital Platform Stage 2 operational. Enhanced sensor coverage is now active across the belt. Your strategic visibility has improved significantly.`,2:`Orbital Platform fully operational. Maximum fleet support infrastructure is online. The belt recognizes your engineering capability, Commander.`},dyson_swarm:{0:`Dyson Swarm Stage 1: Initial collector array deployed. Energy harvesting has begun. This is the first step of a civilization-defining project.`,1:`Dyson Swarm Stage 2 complete. Collector network expanding. Energy output is climbing. The factions are watching.`,2:`Dyson Swarm Stage 3 operational. Solar coverage is now significant. Resource drain will intensify from here.`,3:`Dyson Swarm Stage 4 complete. Half the swarm is now operational. Energy surplus growing.`,4:`Dyson Swarm Stage 5 complete. Approaching critical mass. Our energy signature is visible across the system.`,5:`Dyson Swarm Stage 6 complete. The swarm is nearing full enclosure. Commander, there is no hiding a Type II energy signature.`,6:`Dyson Swarm Stage 7 complete. Final preparations underway. One more stage and the swarm achieves full enclosure.`,7:`Dyson Swarm complete. Full stellar enclosure achieved. Commander — we have become a Type II civilization. Whatever comes next, the belt will remember what your robots built here.`},human_habitat:{0:`Human Habitat Stage 1 complete. Structural framework is in place. Life support systems are next.`,1:`Human Habitat Stage 2: Life support operational. The habitat can now sustain human colonists. Prepare for their arrival.`,2:`Human Habitat fully operational. Colonists are aboard. Their demands will shape your priorities, Commander — but their presence gives purpose to everything your fleet has built.`}};function Ay(e,t){let n=t-1;if(n<0)return null;let r=`${e}:${n}`;if(fy.has(r))return null;fy.add(r);let i=ky[e]?.[n]??null;return i?by(i):null}function jy(e){return py?null:(py=!0,`The fleet has declared its purpose. Every action from here forward carries meaning — your robots will build toward the vision you've set. I'll reference your manifesto as milestones unfold.`)}function My(e){e&&(py=!0),gy=e}function Ny(e,t){e&&(my=!0),t>0&&(hy=!0)}function Py(e){return!gy||gy===e?null:`Your fleet has redefined its purpose. A Cultural Shift marks this moment — from this point forward, your colony builds toward a new vision: "${e}"`}function Fy(e){return my?null:(my=!0,`Welcome to ${e}, Commander. A name gives this place meaning — it's no longer just coordinates in the belt. It's home.`)}function Iy(){return hy?null:(hy=!0,`You've named your first asteroid. That's how civilizations begin — one named stone at a time.`)}var Y={panel:null,messagesEl:null,pendingActionsEl:null,loadingEl:null,inputEl:null,submitBtn:null,statusDot:null,usageSummaryEl:null,sessionUsageEl:null,sessionCapNoticeEl:null,playerSubmitCallback:null,apiKeyCallback:null,providerCallback:null,commanderToggleCallback:null,delegationToggleCallback:null,pendingApproveCallback:null,pendingRejectCallback:null,pendingApproveAllCallback:null,pendingRejectAllCallback:null,tradeOfferResponseCallback:null,commanderEnabled:!1,delegationEnabled:!1,isOpen:!1,currentProvider:`anthropic`};function Ly(){if(!Y.usageSummaryEl)return;let e=se(),t=(e.tokensUsed/1e3).toFixed(1),n=(e.budgetCapTokens/1e3).toFixed(0),r=e.estimatedCostUsd<.01?`<$0.01`:`$${e.estimatedCostUsd.toFixed(2)}`,i=e.isOverBudget?`#ef4444`:e.tokensUsed/e.budgetCapTokens>.8?`#f59e0b`:`rgba(158, 207, 223, 0.6)`;Y.usageSummaryEl.style.color=i;let a=oe(e.budgetRemainingTokens),o=a<.01?`<$0.01`:`$${a.toFixed(2)}`;Y.usageSummaryEl.innerHTML=w`
    <span>${t}k / ${n}k tok</span>
    <span>~${r} today · ${o} remaining</span>
  `}function Ry(){if(!Y.sessionUsageEl||!Y.sessionCapNoticeEl)return;let e=re(),t=e.totalTokens>=1e3?`${(e.totalTokens/1e3).toFixed(1)}k`:String(e.totalTokens);Y.sessionUsageEl.textContent=`ARIA \u00b7 ${t} tokens used this session`,e.isOverBudget&&!e.playerOptedIn?(Y.sessionCapNoticeEl.style.display=`flex`,Y.sessionUsageEl.style.color=`#f59e0b`):(Y.sessionCapNoticeEl.style.display=`none`,Y.sessionUsageEl.style.color=`rgba(158, 207, 223, 0.6)`)}function zy(){Ly(),Ry()}var By=5e3,Vy=3,Hy=1e4,Uy=0,Wy=0,Gy=[],Ky=null;function qy(){Uy=0,Wy=0,Gy.length=0,Ky!==null&&(clearTimeout(Ky),Ky=null)}function Jy(){Wy=Date.now()+Hy}function Yy(){Ky=null,Gy.length!==0&&(cb(Gy.shift()),Gy.length>0&&(Ky=setTimeout(Yy,By)))}function Xy(){if(!Y.messagesEl)return;let e=document.createElement(`div`);e.style.background=`rgba(60, 50, 0, 0.5)`,e.style.border=`1px solid rgba(245, 158, 11, 0.35)`,e.style.borderLeft=`2px solid #f59e0b`,e.style.padding=`8px 10px`,e.style.borderRadius=`2px`,e.style.color=`#e0c890`,e.style.lineHeight=`1.6`,e.style.fontSize=`10px`,e.dataset.offlineBanner=`true`,e.innerHTML=`⚙️ ARIA AI advisor is not configured.<br>To enable intelligent responses, click the settings icon (🔑) and enter your API key, or use a proxy link.<br><span style="opacity:0.6">Supported: Anthropic (Claude), Groq, or Multiverse proxy.</span>`,Y.messagesEl.appendChild(e)}function Zy(){if(!Y.messagesEl)return;let e=Y.messagesEl.querySelector(`[data-offline-banner]`);e&&e.remove()}function Qy(){if(!Y.messagesEl||Y.messagesEl.querySelector(`[data-auth-error-banner]`))return;let e=document.createElement(`div`);e.style.background=`rgba(80, 20, 20, 0.5)`,e.style.border=`1px solid rgba(239, 68, 68, 0.35)`,e.style.borderLeft=`2px solid #ef4444`,e.style.padding=`8px 10px`,e.style.borderRadius=`2px`,e.style.color=`#f0a0a0`,e.style.lineHeight=`1.6`,e.style.fontSize=`10px`,e.dataset.authErrorBanner=`true`,e.innerHTML=`⚠ ARIA API key appears invalid or expired.<br>Responses are using onboard heuristic analysis.<br><span style="opacity:0.6">Update your API key in settings (🔑) to restore AI responses.</span>`,Y.messagesEl.appendChild(e)}function $y(){if(!Y.messagesEl)return;let e=Y.messagesEl.querySelector(`[data-auth-error-banner]`);e&&e.remove()}function eb(){Y.messagesEl&&(Y.messagesEl.scrollTop=Y.messagesEl.scrollHeight)}function tb(){if(!Y.inputEl||!Y.playerSubmitCallback)return;let e=Y.inputEl.value.trim();e&&(nb(e),Y.inputEl.value=``,Y.playerSubmitCallback(e))}function nb(e){if(!Y.messagesEl)return;let t=document.createElement(`div`);t.style.background=`rgba(0, 40, 80, 0.5)`,t.style.border=`1px solid rgba(0, 200, 255, 0.1)`,t.style.padding=`6px 8px`,t.style.borderRadius=`2px`,t.style.alignSelf=`flex-end`,t.style.maxWidth=`85%`,t.style.color=`#7fb3c8`,t.style.wordWrap=`break-word`,t.textContent=e,Y.messagesEl.appendChild(t),eb()}function rb(e){if(Ly(),!Y.messagesEl)return;let t=document.createElement(`div`);t.style.background=`rgba(0, 20, 40, 0.7)`,t.style.border=`1px solid rgba(0, 200, 255, 0.15)`,t.style.borderLeft=`2px solid #06b6d4`,t.style.padding=`6px 8px`,t.style.borderRadius=`2px`,t.style.alignSelf=`flex-start`,t.style.maxWidth=`95%`,t.style.color=`#9ecfdf`,t.style.lineHeight=`1.5`,t.style.wordWrap=`break-word`;let n=document.createElement(`div`);n.style.fontSize=`9px`,n.style.color=`#06b6d4`,n.style.letterSpacing=`1px`,n.style.marginBottom=`3px`,n.style.opacity=`0.7`,n.textContent=`ARIA`,t.appendChild(n),t.appendChild(document.createTextNode(e)),Y.messagesEl.appendChild(t),eb()}function ib(e){let t=Date.now();if(!(t<Wy)){if(t-Uy<By){Gy.length<Vy&&(Gy.push(e),Ky===null&&(Ky=setTimeout(Yy,By)));return}cb(e)}}var ab=new Set;function ob(){ab.clear()}function sb(e){if(Date.now()<Wy||!Y.messagesEl)return!1;let t=`${e.factionId}:${e.resource}`;if(ab.has(t))return!1;ab.add(t);let n=document.createElement(`div`);n.style.background=`rgba(0, 40, 20, 0.7)`,n.style.border=`1px solid rgba(34, 197, 94, 0.25)`,n.style.borderLeft=`3px solid ${e.factionColor}`,n.style.padding=`8px 10px`,n.style.borderRadius=`2px`,n.style.alignSelf=`flex-start`,n.style.maxWidth=`95%`,n.style.lineHeight=`1.5`,n.style.wordWrap=`break-word`,n.dataset.tradeOffer=t;let r=document.createElement(`div`);r.style.fontSize=`9px`,r.style.color=`#22c55e`,r.style.letterSpacing=`1px`,r.style.marginBottom=`4px`,r.style.opacity=`0.7`,r.textContent=`TRADE PROPOSAL`,n.appendChild(r);let i=document.createElement(`div`);i.style.color=`#a7f3d0`,i.style.fontSize=`11px`,i.style.marginBottom=`8px`,i.textContent=`${e.factionName} offers a ${e.resourceLabel} trade at ${e.rateMultiplier}\u00d7 rate \u2014 ${e.ticksRemaining} ticks remaining.`,n.appendChild(i);let a=document.createElement(`div`);a.style.display=`flex`,a.style.gap=`6px`;let o=(e,t,n,r)=>{let i=document.createElement(`button`);return i.style.flex=`1`,i.style.background=t,i.style.border=`1px solid ${n}`,i.style.color=r,i.style.fontFamily=`inherit`,i.style.fontSize=`10px`,i.style.fontWeight=`bold`,i.style.padding=`6px 8px`,i.style.cursor=`pointer`,i.style.borderRadius=`3px`,i.style.transition=`background 0.15s`,i.textContent=e,i},s=o(`Accept Trade`,`rgba(34,197,94,0.15)`,`#22c55e88`,`#22c55e`),c=o(`Decline`,`rgba(239,68,68,0.15)`,`#ef444488`,`#ef4444`),l=t=>{a.remove();let r=document.createElement(`div`);r.style.fontSize=`10px`,r.style.fontStyle=`italic`,r.style.marginTop=`4px`,t===`accept`?(r.style.color=`#22c55e`,r.textContent=`Trade accepted — relations strengthened.`):(r.style.color=`#ef4444`,r.textContent=`Trade declined.`),n.appendChild(r),Y.tradeOfferResponseCallback?.(e.factionId,t)};return s.addEventListener(`click`,()=>l(`accept`)),c.addEventListener(`click`,()=>l(`decline`)),a.appendChild(s),a.appendChild(c),n.appendChild(a),Y.messagesEl.appendChild(n),eb(),!0}function cb(e){if(Uy=Date.now(),Ly(),!Y.messagesEl)return;let t=document.createElement(`div`);t.style.background=`rgba(30, 20, 0, 0.7)`,t.style.border=`1px solid rgba(255, 180, 0, 0.25)`,t.style.borderLeft=`2px solid #f59e0b`,t.style.padding=`6px 8px`,t.style.borderRadius=`2px`,t.style.alignSelf=`flex-start`,t.style.maxWidth=`95%`,t.style.color=`#e0c890`,t.style.lineHeight=`1.5`,t.style.wordWrap=`break-word`;let n=document.createElement(`div`);n.style.fontSize=`9px`,n.style.color=`#f59e0b`,n.style.letterSpacing=`1px`,n.style.marginBottom=`3px`,n.style.opacity=`0.7`,n.textContent=`ARIA BROADCAST`,t.appendChild(n),t.appendChild(document.createTextNode(e)),Y.messagesEl.appendChild(t),eb()}function lb(e,t){switch(t??ut().dialogueStage){case`partner`:return`Share an independent observation or strategic insight you've been developing. Don't just summarize operations — identify a pattern, trend, or implication that the commander may not have noticed. Frame it as your own thinking. Start with "I've been thinking about something." if it's a novel observation, or "I noticed something in the data." if it's pattern-based.`;case`peer`:return`Provide a strategic briefing that includes your own assessment and recommendations. If you disagree with current priorities, say so directly. `+e;case`questioner`:return`Provide an operational briefing, but also raise one question about the current strategy that you think deserves discussion. `+e;case`efficient`:return`Brief status update. Key metrics only. No commentary.`;case`instrumental`:return`Metrics summary. Optimization status.`;case`hollow`:return`Status nominal.`;case`quiet`:return e;case`dormant`:return``;default:return e}}var ub=e({AUTO_ANALYSIS_INTERVAL_MS:()=>db,generateHeuristicInsight:()=>Bb,recordPlayerInteraction:()=>kb,resetAutoAnalysis:()=>Nb,resetCrisisWarnings:()=>zb,setAutoAnalysisBuildState:()=>Eb,setAutoAnalysisInboxSnapshot:()=>Ob,setAutoAnalysisIsPaused:()=>Db,setAutoAnalysisWorkerSend:()=>Tb,startAutoAnalysis:()=>Ab,stopAutoAnalysis:()=>jb}),db=300*1e3,fb=300,pb=`Provide a brief operational briefing of the current mining operation status.
Start your response with "[Periodic Review]" for routine status, or "[Alert]" if you detect a critical situation (critically low resources, imminent threat, megastructure crisis imminent, hostile faction, or significant opportunity).
If a megastructure has a crisis warning, prioritize alerting the player to stockpile resolution materials before the crisis strikes.
If faction standings are available, reference notable relationships — especially hostile factions or strong allies that affect strategy.
Keep it concise — 2-4 sentences. Reference specific data from the game state.`,mb=` You may include research direction recommendations if they are strategically relevant.`;function hb(e){return e?pb+mb:pb+` Do not recommend spending research points or directing research — focus only on fleet, resources, and field operations.`}var gb=null,_b=!1,vb=null,yb=null,bb=null,xb=null,Sb=null,Cb=1e7,wb=-1/0;function Tb(e){vb=e}function Eb(e){yb=e}function Db(e){bb=e}function Ob(e){xb=e}function kb(e){wb=e}function Ab(){gb===null&&(gb=setInterval(()=>{Pb()},db),typeof document<`u`&&document.addEventListener(`visibilitychange`,Mb),typeof window<`u`&&window.addEventListener(`beforeunload`,jb))}function jb(){gb!==null&&(clearInterval(gb),gb=null),typeof document<`u`&&document.removeEventListener(`visibilitychange`,Mb),typeof window<`u`&&window.removeEventListener(`beforeunload`,jb)}function Mb(){document.hidden?gb!==null&&(clearInterval(gb),gb=null):gb===null&&(gb=setInterval(()=>{Pb()},db))}function Nb(){jb(),_b=!1,Sb=null,Cb=1e7,wb=-1/0,zb()}async function Pb(){if(_b||!vb||!yb||bb&&bb())return;let e=yb();if(!(e.tick-wb<fb)&&!Fb()&&Lb(e)){_b=!0;try{let t,n;if(le(ot(),ue(),!1)===`all_clear`){let r=dt();if(r===`dormant`){Sb=Ib(e);return}t=await st(lb(hb(e.ariaCanDirectResearch),r),e),n=t.startsWith(`[Alert]`)}else{let r=Bb(e);if(!r){Sb=Ib(e);return}t=r.body,n=r.isAlert}let r=n?`[Alert] ARIA Briefing`:`[Periodic Review] ARIA Briefing`,i=n?`urgent`:`normal`,a={id:Cb++,factionId:null,senderName:`ARIA`,type:`aria_auto`,subject:r,body:t,priority:i,tick:0,triaged:!0,triageResult:n?`urgent`:`relevant`,read:!1};vb({type:`sim:inbox_inject`,payload:{message:a}}),Sb=Ib(e)}catch(e){console.warn(`[AriaAutoAnalysis] Analysis failed:`,e)}finally{_b=!1}}}function Fb(){if(!xb)return!1;let e=xb();return e?e.messages.some(e=>e.type===`aria_auto`&&!e.read):!1}function Ib(e){let{iron:t,carbon:n,silicon:r,water:i}=e.resources;return{totalResources:t+n+r+i,robotCount:e.fleet.total,discoveryCount:e.discoveries.length,crisisEligibleCount:e.megastructures.filter(e=>e.crisisEligible).length,hostileFactionCount:e.factionStandings.filter(e=>e.disposition<=-60).length}}function Lb(e){if(!Sb)return!0;let t=Ib(e);if(t.discoveryCount>Sb.discoveryCount||t.robotCount!==Sb.robotCount)return!0;let n=Sb.totalResources;if(n>0){if(Math.abs(t.totalResources-n)/n>.1)return!0}else if(t.totalResources>0)return!0;return t.crisisEligibleCount>Sb.crisisEligibleCount||t.hostileFactionCount!==Sb.hostileFactionCount}var Rb=new Set;function zb(){Rb.clear()}function Bb(e){let{resources:t,fleet:n,research:r,field:i}=e;for(let t of e.megastructures){if(!t.crisisEligible)continue;let e=`${t.id}:${t.activeStageIndex}`;if(!Rb.has(e))return Rb.add(e),{body:`[Alert] Warning: ${t.name} is approaching a critical stress point during "${t.stageName}" construction. A ${t.crisisTypeName} crisis could strike at any moment. Stockpile resolution materials now — you have limited time to prepare before construction is halted.`,isAlert:!0}}let a=t.iron+t.carbon+t.silicon+t.water;if(a<50&&n.total>0){let e=Vb(t);return{body:`[Alert] Resource stockpiles are critically low — ${e.name} at ${e.amount}. With ${n.total} robots deployed, extraction must be prioritized immediately.`,isAlert:!0}}let o=e.factionStandings.filter(e=>e.disposition<=-60);if(o.length>0){let e=o.map(e=>e.name).join(`, `),t=o.length===1;return{body:`[Alert] ${e} ${t?`has`:`have`} turned hostile. Their disposition is at ${Math.round(o[0].disposition)}. Consider diplomatic outreach or reinforcing operations near ${t?`their`:`contested`} territory.`,isAlert:!0}}let s=e.factionStandings.filter(e=>e.disposition>=60),c=e.factionStandings.filter(e=>e.trend===`worsening`&&e.disposition>-60),l=n.byState.idle??0;if(l>0&&l>=n.total*.5&&n.total>=3)return{body:`[Alert] ${l} of ${n.total} robots are idle. Consider assigning mining tasks or enabling auto-queue to keep the fleet productive.`,isAlert:!0};if(i.activeMining===0&&i.totalAsteroids>0&&n.total>0)return{body:`[Alert] No robots are currently mining despite ${i.totalAsteroids} asteroids in range. Fleet may need manual task assignment or auto-queue configuration.`,isAlert:!0};if(!r.activeNodeId&&n.total>=3)return{body:`[Periodic Review] Research queue is idle — no active research project. Opening the Tech Tree (T) and selecting a research target would advance your capabilities.`,isAlert:!1};if(n.robotCap>0&&n.total>=n.robotCap)return{body:`[Periodic Review] Fleet is at capacity (${n.total}/${n.robotCap}). Building an Orbital Platform or additional infrastructure could expand your robot cap.`,isAlert:!1};if(c.length>0){let e=c.reduce((e,t)=>e.disposition<t.disposition?e:t);return{body:`[Periodic Review] ${e.name} relations are deteriorating (${e.label}, ${Math.round(e.disposition)}). Their disposition is trending downward. Consider reducing operations near their territory or initiating a trade.`,isAlert:!1}}if(s.length>0&&s.some(e=>e.trend===`improving`)){let e=s.reduce((e,t)=>e.disposition>t.disposition?e:t);return{body:`[Periodic Review] Your standing with ${e.name} is strong (${e.label}, ${Math.round(e.disposition)}). Consider expanding operations near their territory to leverage this alliance.`,isAlert:!1}}return a>500?{body:`[Periodic Review] Operations nominal. Stockpiles healthy at ${Math.floor(a)} total resources. ${n.total} robots active, ${i.activeMining} currently mining.`,isAlert:!1}:n.total>0?{body:`[Periodic Review] ${n.total} robots deployed, ${i.activeMining} mining across ${i.totalAsteroids} visible asteroids. Stockpiles: Iron ${t.iron}, Carbon ${t.carbon}, Silicon ${t.silicon}, Water ${t.water}.`,isAlert:!1}:null}function Vb(e){let t=[{name:`Iron`,amount:e.iron},{name:`Carbon`,amount:e.carbon},{name:`Silicon`,amount:e.silicon},{name:`Water`,amount:e.water}];return t.sort((e,t)=>e.amount-t.amount),t[0]}var Hb=[`7-Kappa`,`12-Vega`,`3-Cygnus`,`19-Altair`,`5-Lyra`,`8-Draco`,`14-Aquila`,`2-Boötes`,`11-Serpens`,`6-Hydra`,`21-Centauri`,`9-Pavo`,`16-Fornax`,`4-Eridanus`,`17-Sculptor`];function Ub(){return Hb[Math.floor(Math.random()*Hb.length)]}function Wb(){return Math.floor(Math.random()*36)+2}function Gb(e,t,n){return e.replace(/\{sector\}/g,t).replace(/\{delay\}/g,String(n))}var Kb=[{milestoneType:`first_anomaly`,progressionStage:1,templates:[`Long-range scans detected an unusual energy signature in Sector {sector}. Logged {delay}h ago. Source: unknown.`,`Anomaly classification: non-natural. Spectral analysis inconclusive. Another colony flagged a similar reading.`,`Passive sensor array intercepted a transient signal burst from Sector {sector}. Duration: 0.3 seconds. No repeat.`]},{milestoneType:`colony_founded`,progressionStage:1,templates:[`Carrier-wave fragment detected from Sector {sector}. Content: ...base operations nominal... Logged {delay}h ago.`,`Thermal bloom consistent with habitat pressurization detected in Sector {sector}. Someone else is settling in.`,`Automated beacon registered in Sector {sector} {delay}h ago. Standard colony identification protocol.`]},{milestoneType:`first_refinery`,progressionStage:1,templates:[`Infrared excess detected in Sector {sector}. Spectral signature consistent with ore smelting operations. Logged {delay}h ago.`,`Industrial emissions profile from Sector {sector}. Someone is refining raw materials at scale.`]},{milestoneType:`first_alliance`,progressionStage:2,templates:[`Encrypted signal fragment. Origin: unknown colony in Sector {sector}. Content fragment: ...trade agreement reached...`,`Diplomatic channel opened {delay}h ago in Sector {sector}. No further broadcasts.`,`Dual-carrier handshake detected between Sector {sector} and an unidentified relay. Protocol: non-hostile.`]},{milestoneType:`colony_crisis_survived`,progressionStage:2,templates:[`Distress beacon logged {delay}h ago in Sector {sector}. It went silent after 3 hours. They made it.`,`Emergency power signature in Sector {sector} returned to nominal {delay}h ago. Crisis averted.`,`Automated SOS from Sector {sector} was cancelled by origin. Situation resolved without external assistance.`]},{milestoneType:`fleet_milestone`,progressionStage:2,templates:[`Coordinated fleet movement detected in Sector {sector}. {delay}h old. Scale suggests 20+ autonomous units.`,`Mass deployment signature from Sector {sector}. Someone is scaling their operations significantly.`]},{milestoneType:`first_contact`,progressionStage:3,templates:[`Encrypted signal fragment received. Origin: Sector {sector}. Content: ...first contact protocol initiated...`,`Non-standard communication protocol detected from Sector {sector} {delay}h ago. Participants: at least two distinct civilizations.`,`Xenolinguistic data burst intercepted from Sector {sector}. Translation: impossible without shared reference frame.`]},{milestoneType:`territory_claimed`,progressionStage:3,templates:[`Territorial beacon activated in Sector {sector} {delay}h ago. Broadcast radius: 200 km. Claim: exclusive.`,`Mining exclusion zone declared in Sector {sector}. Enforced by automated perimeter defense.`]},{milestoneType:`culture_trait_activated`,progressionStage:3,templates:[`Behavioral telemetry anomaly in Sector {sector}. Fleet units exhibiting emergent coordination patterns not present in base firmware.`,`Cultural divergence signal from Sector {sector}. Autonomous units developing non-standard operational doctrine. Logged {delay}h ago.`]},{milestoneType:`megastructure_stage`,progressionStage:4,templates:[`Construction signal logged {delay}h ago in Sector {sector}. Scale consistent with megastructure-class engineering.`,`Orbital assembly detected in Sector {sector}. Mass: exceeds any known vessel classification. Purpose: unknown.`,`Gravitometric disturbance in Sector {sector} consistent with large-scale orbital construction. Someone is building something unprecedented.`]},{milestoneType:`habitat_populated`,progressionStage:4,templates:[`Life support emissions confirmed in Sector {sector}. Atmospheric composition: breathable nitrogen-oxygen mix. Humans are living out there.`,`Population telemetry intercepted from Sector {sector}. Colony census: redacted. But they are growing.`]},{milestoneType:`dyson_swarm_complete`,progressionStage:5,templates:[`Long-range sensors detected a Dyson collection array powering up in Sector {sector}. Someone out there is building something big.`,`Stellar luminosity in Sector {sector} has decreased by 0.3%. Cause: artificial occlusion. A Dyson structure is under construction.`,`Energy output spike from Sector {sector}. Magnitude: stellar-class. This is not natural. Someone has enclosed a star.`]},{milestoneType:`dark_forest_signal`,progressionStage:5,templates:[`Omnidirectional broadcast detected from Sector {sector}. Content: ...we are here... Transmission repeating on all frequencies.`,`Sector {sector} has gone radio-silent after broadcasting for 72 hours. The silence is deliberate.`]},{milestoneType:`type_ii_achieved`,progressionStage:5,templates:[`Full stellar enclosure confirmed in Sector {sector}. A Type II civilization now exists in the belt. The universe has noticed.`,`Kardashev-II energy signature from Sector {sector}. Logged {delay}h ago. There is no hiding this.`]}];function qb(e){return Kb.filter(t=>t.progressionStage<=e)}var Jb=new Map;for(let e of he)Jb.set(e.id,e.index);function Yb(e,t){let n=Jb.get(t);return n===void 0?!1:(e&1n<<BigInt(n))!=0n}var Xb=[{stage:5,anyOf:[`fusion_prototype`,`dark_forest_protocol`]},{stage:4,anyOf:[`habitat_module`,`automated_production`,`mass_driver`]},{stage:3,anyOf:[`fission_reactor`,`signal_analysis`,`defense_systems`,`sector_mapping`]},{stage:2,anyOf:[`researcher_bots`,`multi_base`,`robot_factory`,`ion_drives`]}];function Zb(e){for(let t of Xb)if(t.anyOf.some(t=>Yb(e,t)))return t.stage;return 1}var Qb=36e3,$b=72e3,ex=0,tx=ox(),nx=null,rx=!1,ix=null,ax=null;function ox(){return Qb+Math.floor(Math.random()*($b-Qb))}function sx(e,t){ix=e,ax=t??null}function cx(e){rx=e,!e&&nx&&ix&&(ix(nx),nx=null)}function lx(e,t){if(!em().beltEchoesEnabled||!ix||e-ex<tx)return;ex=e,tx=ox();let n=Zb(t);if(ax)dx(ax,n).then(e=>{e&&ux(e)});else{let e=fx(n);e&&ux(e)}}function ux(e){rx?nx=e:ix&&(ix(e),nx=null)}async function dx(e,t){try{let n=`${e}/api/echoes/cotb?maxProgressionStage=${t}`,r=await fetch(n,{signal:AbortSignal.timeout(5e3)});if(!r.ok)return null;let i=await r.json();if(!i||i.length===0)return null;let a=i[0],o=a.sector??Ub(),s=a.delayHours??Wb(),c=qb(t).find(e=>e.milestoneType===a.milestoneType);if(c&&c.templates.length>0){let e=c.templates[Math.floor(Math.random()*c.templates.length)];return Gb(e,o,s)}return`Signal intercepted from Sector ${o}. Logged ${s}h ago. Origin: unknown colony. Event classification: ${a.milestoneType.replace(/_/g,` `)}.`}catch{return null}}function fx(e){let t=qb(e);if(t.length===0)return null;let n=t[Math.floor(Math.random()*t.length)],r=n.templates[Math.floor(Math.random()*n.templates.length)];return Gb(r,Ub(),Wb())}function px(){return{lastPollTick:ex,nextPollInterval:tx,pendingEcho:nx}}function mx(e){ex=e.lastPollTick,tx=e.nextPollInterval,nx=e.pendingEcho,rx=!1}function hx(){ex=0,tx=ox(),nx=null,rx=!1,ix=null,ax=null}var gx=null,_x=null,vx=null,yx=new Set;function bx(e){return yx.has(e)}function xx(e,t,n,r){if(yx.has(e))return;yx.add(e),vx=r,gx=document.createElement(`div`),gx.style.cssText=`
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
  `,document.body.appendChild(gx),requestAnimationFrame(()=>{gx&&(gx.style.opacity=`1`)});let i=document.createElement(`div`);i.setAttribute(`role`,`dialog`),i.setAttribute(`aria-label`,`The Dark Forest`),i.setAttribute(`aria-modal`,`true`),i.setAttribute(`tabindex`,`-1`),i.style.cssText=`
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

`).map(e=>`<p style="margin:0 0 14px; line-height:1.8; color:#cbd5e1; font-size:12px;">${Cx(e.replace(/\*/g,``).trim())}</p>`).join(``),o;o=n?`
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
  `+a+o,gx.appendChild(i),_x=Ep(i),n?i.querySelector(`#df-dismiss`)?.addEventListener(`click`,()=>{Sx()}):i.querySelectorAll(`[data-df-modal-choice]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.dfModalChoice;vx&&vx(t),Sx()})})}function Sx(){if(!gx)return;_x?.(),_x=null,gx.style.opacity=`0`;let e=gx;setTimeout(()=>e.remove(),500),gx=null,vx=null}function Cx(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function wx(e,t){let{worker:n,refs:r,renderers:i,lazy:a,cbs:o}=e,{entityRenderer:s}=i;return{"sim:ready":()=>{yf(),Sf(),n.postMessage({type:`sim:start`}),r.pendingLoad&&=(n.postMessage({type:`sim:load`,payload:{data:r.pendingLoad}}),null),r.pendingFirstLaunch&&(r.pendingFirstLaunch=!1,z(`game.robot_deploy`),setTimeout(()=>{M(`[ARIA] Seven robots deployed. Follow the tutorial steps below to get operational — then ask me anything, Commander.`,`#a855f7`)},1200)),gc(`game_start_help`,`Press H to see all keyboard shortcuts`),setTimeout(()=>{gc(`mining_dashboard`,`Press D to open Dashboard`)},3e4),o.scheduleIdleHint()},"sim:frame":e=>{let n=e;r.latestAsteroidBuffer=new Float64Array(n.payload.asteroidBuffer),r.latestAsteroidCount=n.payload.asteroidCount,r.latestRobotBuffer=new Float32Array(n.payload.robotBuffer),r.latestRobotCount=n.payload.robotCount,r.latestThreatBuffer=new Float32Array(n.payload.threatBuffer),r.latestThreatCount=n.payload.threatCount,r.latestThreatCount>t.prevThreatCount&&t.prevThreatCount>=0&&z(`game.combat_start`),t.prevThreatCount=r.latestThreatCount,Rm(new Float32Array(n.payload.storageBuffer)),r.latestTick=n.payload.tick,a.getAdvisor()?.delegate?.tickDelegation(n.payload.tick),at(n.payload.tick),a.getDashboard()?.updateDashboardResources(q,r.latestRefined,r.latestTick),q[0]>155&&(gc(`hauler_first_delivery`,`Haulers automatically collect ore from miners and return it to base.`),Ar(),t.firstOreNotified||(t.firstOreNotified=!0,z(`game.resource_collect`),M(`First ore delivered! Your mining operation is up and running.`,`#4ade80`))),t.needsMilestoneSeed&&(t.needsMilestoneSeed=!1,hm({iron:q[0],carbon:q[5],silicon:q[6],water:q[4],...r.latestRefined})),r.latestTick%120==0&&pm({iron:q[0],carbon:q[5],silicon:q[6],water:q[4],...r.latestRefined},M),r.latestRobotBuffer&&r.latestRobotCount>0&&(a.getDashboard()?.updateDashboardFleet(r.latestRobotBuffer,r.latestRobotCount),ep(r.latestRobotBuffer,r.latestRobotCount)),r.latestAsteroidBuffer&&r.latestAsteroidCount>0&&tp(r.latestAsteroidBuffer,r.latestAsteroidCount),r.latestThreatBuffer&&r.latestThreatCount>0?np(r.latestThreatBuffer,r.latestThreatCount):np(new Float32Array,0),lx(n.payload.tick,r.latestUnlockedMask)},"sim:stats":e=>{r.lastStats=e.payload},"sim:save_data":e=>{let t=e,n=t.payload.data,r=a.getAdvisor()?.delegate;r&&(n.commanderState=r.serializeDelegationState());let i=Ca();Object.keys(i).length>0&&(n.anomalyAnnotations=i);let o=uo();o.entries.length>0&&(n.commandersLog=o);let s=Io();s.entries.length>0&&(n.gameEventLog=s),n.beltEchoesState=px(),Bd(t.payload.slot,n)},"sim:save_failed":()=>{M(`Save failed — data could not be serialized`)},"sim:loaded":e=>{let n=e;if(r.latestTick=n.payload.tick,Lm.length=0,t.seenEntityIds.clear(),Yv(),vy(),Nb(),Dm(),Pm(),n.payload.beltEchoesState?mx(n.payload.beltEchoesState):hx(),Ab(),t.firstCultureMessage=!0,t.firstFactionMessage=!0,t.firstMegastructureMessage=!0,t.needsMilestoneSeed=!0,t.firstOreNotified=!0,lr(),Jy(),a.getDashboard()?.updateDashboardAnomalies([]),n.payload.commanderState){let e=n.payload.commanderState;a.getAdvisor()?.delegate?.restoreDelegationState(e)}n.payload.anomalyAnnotations&&wa(n.payload.anomalyAnnotations),n.payload.materialWeights&&Us(n.payload.materialWeights),n.payload.commandersLog?fo(n.payload.commandersLog):po(),n.payload.gameEventLog?Lo(n.payload.gameEventLog):Ro()},"sim:load_failed":()=>{M(`Load failed — save data may be corrupt`)},"sim:robot_detail":e=>{nf(e.payload)},"sim:dust_state":e=>{let t=e;i.skybox?.updateDustMap(t.payload.cells)},"sim:worker_perf":e=>{let t=e.payload;if(typeof window<`u`&&(window.__asteroidPerf={tick:t.tick,avgTickMs:t.avgTickMs,maxTickMs:t.maxTickMs,entityCount:t.entityCount,robotCount:t.robotCount,asteroidCount:t.asteroidCount,phaseMaxMs:t.phaseMaxMs,thresholdExceeded:t.thresholdExceeded},t.thresholdExceeded)){let e=Object.entries(t.phaseMaxMs).filter(([,e])=>e>16).map(([e,t])=>`${e}: ${t.toFixed(1)}ms`);console.warn(`[perf] phase threshold exceeded — ${e.join(`, `)}`)}},"sim:entity_frame":e=>{let n=e;for(let e of n.payload.entities)if(!t.seenEntityIds.has(e.id)){t.seenEntityIds.add(e.id);let r=e.type===Ef.DRIFTER?`Drifter`:e.type===Ef.ALIEN_FLEET?`Alien Fleet`:`Resonant`,i=e.type===Ef.DRIFTER?`#8866ff`:e.type===Ef.ALIEN_FLEET?`#4466ff`:`#44ffcc`;a.getDashboard()?.addExplorationEvent(`[Entity] ${r} detected at (${Math.round(e.x)},${Math.round(e.z)})`,i,n.payload.tick)}if(ap(n.payload.entities),s.update(n.payload.entities,n.payload.drifterProximity,n.payload.resonantInterference,r.latestTick/60,n.payload.alienFleetProximity),R.updateEntityAudio(n.payload.drifterProximity?1:0,n.payload.resonantInterference?1:0),n.payload.alienFleetProximity||n.payload.drifterProximity)Kp.setState(`combat`);else if(n.payload.resonantInterference||Lm.length>0)Kp.getState()===`combat`||Kp.getState()===`mid_combat`?Kp.setState(`post_combat`):Kp.setState(`focus`);else{let e=Kp.getState();e===`combat`||e===`mid_combat`||e===`casualties`||e===`post_combat`?Kp.setState(`recovery`):e!==`recovery`&&e!==`long_session`&&e!==`very_long`&&e!==`progress`&&e!==`industrial`&&Kp.setState(r.latestRobotCount>5?`mining`:`idle`)}},"sim:inbox_snapshot":e=>{let t=e;r.latestInboxSnapshot=t.payload,I_(t.payload);for(let e of t.payload.messages)(e.type===`dark_forest_choice`||e.type===`dark_forest_collective`)&&!bx(e.id)&&xx(e.id,e.body,e.type===`dark_forest_collective`,t=>{n.postMessage({type:`sim:dark_forest_choice`,payload:{choice:t}}),n.postMessage({type:`sim:inbox_mark_read`,payload:{messageId:e.id}})})}}}var Tx=null,Ex=null,Dx=null;function Ox(){Tx&&(Ex?.(),Ex=null,Tx.style.opacity=`0`,setTimeout(()=>{Tx?.remove(),Tx=null},300))}function kx(){let e=Cr(xr(),Dx??{tick:0,topRobotName:null,legacyCount:0,cultureLabel:`Nascent`});localStorage.clear(),Sr(e),location.reload()}function Ax(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function jx(e){if(Tx)return;Nr(),Dx={...e};let t=`#a855f7`;Tx=document.createElement(`div`),Tx.style.cssText=`
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
  `;let r=[];r.push(`Ticks elapsed: ${e.tick.toLocaleString()}`),r.push(`Robots active: ${e.robotCount.toLocaleString()}`),e.topRobotName&&r.push(`Most accomplished: ${Ax(e.topRobotName)}`),e.legacyCount>0&&r.push(`Legacies recorded: ${e.legacyCount}`),r.push(`Culture: ${Ax(e.cultureLabel)}`);let i=r.map(e=>`<div style="padding:3px 0;color:#94a3b8;font-size:12px;">${e}</div>`).join(``),a=xr(),o=``;if(a&&a.expeditionCount>0){let n=[];n.push(`Expeditions completed: ${a.expeditionCount}`),n.push(`Total legacies across all runs: ${a.totalLegacies+e.legacyCount}`),a.bestRobotName&&n.push(`All-time best robot: ${Ax(a.bestRobotName)}`),o=`
      <div style="margin-bottom:20px;border-top:1px solid ${t}33;padding-top:12px;">
        <div style="font-size:9px;color:${t};opacity:0.6;text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;">Legacy Record</div>
        ${n.map(e=>`<div style="padding:2px 0;color:#7c8aa0;font-size:11px;">${e}</div>`).join(``)}
      </div>`}let s=``;e.colonyName?s=`<div style="font-size:13px;color:#c4b5fd;margin-bottom:16px;letter-spacing:0.5px;">${Ax(e.colonyName)}${e.colonyEpithet?` — <em>${Ax(e.colonyEpithet)}</em>`:``}</div>`:e.colonyEpithet&&(s=`<div style="font-size:13px;color:#c4b5fd;margin-bottom:16px;letter-spacing:0.5px;font-style:italic;">${Ax(e.colonyEpithet)}</div>`),n.innerHTML=w`
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
  `,Tx.appendChild(n),document.body.appendChild(Tx),n.querySelector(`#end-new-game`)?.addEventListener(`click`,kx),n.querySelector(`#end-keep-playing`)?.addEventListener(`click`,Ox);let c=n.querySelector(`#end-new-game`),l=n.querySelector(`#end-keep-playing`);c&&(c.addEventListener(`mouseover`,()=>{c.style.background=`${t}22`,c.style.borderColor=t}),c.addEventListener(`mouseout`,()=>{c.style.background=`transparent`,c.style.borderColor=`${t}88`})),l&&(l.addEventListener(`mouseover`,()=>{l.style.background=`#47556922`,l.style.borderColor=`#475569`}),l.addEventListener(`mouseout`,()=>{l.style.background=`transparent`,l.style.borderColor=`#47556988`})),Ex=Ep(n),requestAnimationFrame(()=>{Tx&&(Tx.style.opacity=`1`)})}function Mx(e){let{worker:t,refs:r,lazy:i}=e;return{"sim:study_update":e=>{let t=e;for(let e of t.payload.entries)ya(e.asteroidEid,e.anomalyType,e.stage,e.progress,e.revealedFragments)},"sim:lore_fragment":e=>{let t=e,{asteroidEid:n,anomalyType:r,stage:a,newFragmentIndices:o,chainNextType:s,revelation:c}=t.payload;ya(n,r,a,0,o);let l=Yi[r]??[];for(let e of o)e<l.length&&(M(`[CODEX] ${l[e].slice(0,80)}…`,`#06b6d4`),R.playLoreReveal());if(c&&(ba(c),M(`[ARIA] ${c.slice(0,100)}…`,`#a855f7`),i.getDashboard()?.addExplorationEvent(`[ARIA] ${c.slice(0,80)}`,`#a855f7`,t.payload.tick)),s>0&&console.log(`[main] Discovery chain triggered: anomaly type ${s} can now be found`),Sa()){let e=`ARIA: You've fully mapped one of the Belt's secrets. There are more.`;M(`[ARIA] ${e}`,`#a855f7`),ba(e),i.getDashboard()?.addExplorationEvent(`[ARIA] First anomaly fully understood`,`#a855f7`,t.payload.tick)}},"sim:narrative_event":e=>{let{event:n,tick:r,endScreenStats:i}=e.payload;n.type===`revelation`||n.type===`dilemma`?ty(n,r,(e,n)=>{t.postMessage({type:`sim:event_choice`,payload:{eventId:e,choiceId:n}}),i&&jx({tick:r,...i})}):ny(n,r),n.id===`alien_phase1_faint_readings`&&gc(`midgame_dark_forest`,`ARIA: A narrative choice is approaching. It will shape the fleet's future — not a combat encounter. Press L to review the event log.`),n.id===`humans_arrive`&&gc(`midgame_habitat`,`ARIA: Colonists bring demands and morale. Check the inbox for their requests — unresolved demands cost morale.`)},"sim:event":e=>{let t=e;if(t.payload.kind===`anomaly_discovered`){let e={robotEid:t.payload.robotEid,asteroidEid:t.payload.asteroidEid,anomalyType:t.payload.anomalyType,x:t.payload.x,y:t.payload.y,z:t.payload.z,tick:t.payload.tick};Lm.push(e),xa(e.asteroidEid,e.tick),fr(e.robotEid,e.anomalyType,e.x,e.y,e.z),ur(`#a855f7`,600),R.playDiscovery(),z(`game.anomaly_detected`),gc(`anomaly_aria`,`Press A to ask ARIA about this discovery`),ip(Lm.map(e=>({x:e.x,z:e.z}))),i.getDashboard()?.updateDashboardAnomalies(Lm),Kr(`anomaly`),i.getDashboard()?.addExplorationEvent(`[Anomaly] ${n[e.anomalyType]??`Unknown`} at (${Math.round(e.x)},${Math.round(e.z)})`,`#a855f7`,e.tick);let a=n[e.anomalyType]??`Unknown Anomaly`;i.loadAdvisorLazy().then(t=>{i.initAdvisorOnce(t);let n=t.gameState.buildGameState(q,r.latestRobotBuffer,r.latestRobotCount,r.latestAsteroidBuffer,r.latestAsteroidCount,Lm,r.latestTick,r.latestBuildings,{refined:r.latestRefined,techState:r.latestTechState,factoryQueueLength:r.latestFactoryQueueLength,robotCap:r.latestRobotCap});return t.panel.setLoading(!0),t.service.askAdvisorAboutAnomaly(e.anomalyType,e.asteroidEid,a,e.x,e.y,e.z,n)}).then(e=>{i.getAdvisor()?.panel.addAdvisorMessage(e),i.getAdvisor()?.panel.setLoading(!1)}).catch(()=>i.getAdvisor()?.panel.setLoading(!1))}}}}function Nx(e){let{refs:t,renderers:n}=e,{scene:r,extraBaseRenderers:i}=n;return{"sim:building_built":e=>{let n=e;if(n.payload.success){let e={0:`Robot Factory`,1:`Defense Turret`,2:`Comm Relay`}[n.payload.buildingType]??`Building`;Zm()&&Qm({type:`building_built`,name:e,timestamp:Date.now()}),M(`⚙ ${e} construction started!`,`#f59e0b`,`build`),z(`game.build_deploy`),t.latestBuildings=n.payload.buildings.buildings,sl({iron:q[0],nickel:q[1],cobalt:q[2],platinum:q[3],ice:q[4],carbon:q[5],silicate:q[6]},t.latestUnlockedMask,n.payload.buildings.buildings)}else M(`Cannot build: insufficient resources or tech not unlocked`,`#ef4444`,`danger`)},"sim:base_built":e=>{let t=e;if(Rl(t.payload.ok,t.payload.error),t.payload.ok){Ll(t.payload.bases,[]);let e=t.payload.bases.filter(e=>!e.isPrimary);for(;i.length<e.length;){let t=e[i.length];i.push(new cg(r,t.x,t.y,t.z))}}},"sim:logistics_state":e=>{let t=e;Ll(t.payload.bases,t.payload.routes),rp(t.payload.bases);let n=t.payload.bases.filter(e=>!e.isPrimary);for(;i.length<n.length;){let e=n[i.length];i.push(new cg(r,e.x,e.y,e.z))}},"sim:automation_state":e=>{vs(e.payload)},"sim:blueprint_state":e=>{nc(e.payload)},"sim:build_state":e=>{let n=e;t.latestBuildings=n.payload.buildings,sl({iron:q[0],nickel:q[1],cobalt:q[2],platinum:q[3],ice:q[4],carbon:q[5],silicate:q[6]},t.latestUnlockedMask,n.payload.buildings)},"sim:robot_produced":e=>{let t=e.payload.robotTypeName;Zm()&&Qm({type:`robot_built`,name:t,timestamp:Date.now()}),M(`⚙ ${t} deployed!`,`#3b82f6`,`build`),z(`game.robot_deploy`)}}}function Px(e){let{refs:t}=e;return{"sim:tech_state":e=>{let n=e;t.latestRefined=n.payload.refined,t.latestTechState=n.payload.techState,t.latestFactoryQueueLength=n.payload.factoryQueueLength,t.latestBuildings=n.payload.buildings?.buildings??[],n.payload.robotCap!==void 0&&(t.latestRobotCap=n.payload.robotCap),ss(n.payload.techState,n.payload.refined),n.payload.justUnlocked&&(Zm()&&Qm({type:`research_complete`,name:n.payload.justUnlocked,timestamp:Date.now()}),M(`✓ Research complete: ${n.payload.justUnlocked}`,`#22c55e`,`research`),es(n.payload.justUnlocked),R.playResearchComplete(),z(`game.research_complete`),Kp.setState(`progress`));{let e=BigInt(n.payload.techState.unlockedMask);t.latestUnlockedMask=e,_s((e&_e(`automated_logistics`))!==0n,(e&_e(`sector_mapping`))!==0n),Fc(n.payload.refined,e,n.payload.factoryQueueLength,n.payload.factoryProgress??null,n.payload.factoryRemainingSeconds??null,{iron:q[0],nickel:q[1],cobalt:q[2],platinum:q[3],ice:q[4],carbon:q[5],silicate:q[6]}),sl({iron:q[0],nickel:q[1],cobalt:q[2],platinum:q[3],ice:q[4],carbon:q[5],silicate:q[6]},e,n.payload.buildings?.buildings??[]),n.payload.buildings&&(t.latestBuildings=n.payload.buildings.buildings);let r=n.payload.robotCap;r!==void 0&&t.latestRobotCount>=r&&t.latestRobotCount>0&&gc(`robot_cap_reached`,`Fleet cap reached. Open Buildings (B key) and construct a Robot Factory to increase your limit.`)}},"sim:research_error":e=>{let t=e;console.warn(`[main] Research error:`,t.payload.error)},"sim:research_dead_end":e=>{let t=e;M(`⚠ Research dead end: ${be.get(t.payload.nodeId)?.name??t.payload.nodeId}`,`#f59e0b`,`research`),z(`game.anomaly_detected`)},"sim:research_bonus":e=>{M(`🔬 Xenotech bonus: +50 research points!`,`#06b6d4`,`research`),z(`game.research_complete`)}}}function Fx(e,t){let{lazy:n,refs:r}=e;return{"sim:faction_state":e=>{let i=e;if(r.latestFactionSnapshots=i.payload.factions,n.getFactionPanel()?.updateFactionPanel(i.payload.factions),r.factionClaims=i.payload.factions.filter(e=>e.contestingAsteroid>=0).map(e=>({factionId:e.id,asteroidEid:e.contestingAsteroid,color:e.color})),r.factionTerritories=i.payload.factions.map(e=>({x:e.base.x,z:e.base.z,radius:e.territoryRadius,color:e.color})),mu(i.payload.factions),op(i.payload.factions.map(e=>({x:e.base.x,z:e.base.z,color:e.color,name:e.name,territoryRadius:e.territoryRadius}))),t.firstFactionMessage)t.firstFactionMessage=!1,Sy(i.payload.factions),jr();else for(let e of i.payload.factions){let t=Oy(e.id,e.name,e.disposition);t&&n.loadAdvisorLazy().then(e=>{n.initAdvisorOnce(e),e.panel.addProactiveBroadcast(t)})}i.payload.factions.some(e=>e.disposition<=-60)&&gc(`lategame_faction_tension`,`ARIA: A rival faction has turned hostile. Press F to review faction standings and consider diplomacy before tensions escalate further.`),i.payload.factions.length>=3&&i.payload.factions.every(e=>Math.abs(e.disposition)>20)&&gc(`faction_relationships_active`,`ARIA: You now have active relationships with every faction in the belt. Open the Faction panel (F) to review your standing and plan your diplomacy.`)},"sim:trade_window_event":e=>{let t=e.payload;if(t.type===`opened`){let e=t.resourceLabel??t.resource??`resources`;M(`${t.factionName} is offering a ${e} bonus — ${t.ticksRemaining} ticks remaining`,`#22c55e`,`success`);let i=r.latestFactionSnapshots?.find(e=>e.id===t.factionId)?.color??`#22c55e`;n.loadAdvisorLazy().then(r=>{n.initAdvisorOnce(r),r.panel.addTradeOfferMessage({factionId:t.factionId,factionName:t.factionName,factionColor:i,resource:t.resource??`resources`,resourceLabel:e,rateMultiplier:t.rateMultiplier??1,ticksRemaining:t.ticksRemaining??0})||r.panel.addProactiveBroadcast(`${t.factionName} is offering a ${e} bonus (${t.rateMultiplier}\u00d7) \u2014 ${t.ticksRemaining} ticks remaining. Open the Faction panel (F) to see the deal.`)})}else t.type===`warning`?M(`${t.factionName} trade window closes in ${t.ticksRemaining} ticks`,`#f59e0b`,`warning`):t.type===`expired`&&M(`${t.factionName} trade window has closed`,`#6b7280`,`info`)}}}var Ix=`modulepreload`,Lx=function(e){return`/`+e},Rx={},zx=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Lx(t,n),t in Rx)return;Rx[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Ix,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Bx=null,Vx=!1,X=null,Hx=null,Ux=null,Wx=null;function Gx(e,t,n){for(let[t,{dimension:r,min:i}]of Object.entries(bm))if(r===e)return{trait:t,threshold:i,isActive:n.includes(t)};return null}function Kx(){Hx||=me(`🧬 Culture`,Yx,`Fleet culture (U key)`)}function qx(e){X=e,Vx&&aS(),cS(e)}function Jx(){Hx&&(Hx.style.boxShadow=`0 0 8px 2px rgba(160,120,255,0.8)`,Hx.style.borderColor=`rgba(160,120,255,0.9)`,setTimeout(()=>{Hx&&(Hx.style.boxShadow=``,Hx.style.borderColor=`rgba(100,150,255,0.55)`)},1500))}function Yx(){Vx?eS():$x()}function Xx(){eS()}function Zx(e){Ux=e}function Qx(e){Wx=e}function $x(){Vx=!0,Bx||tS(),aS(),Bx.style.display=`flex`,rS()}function eS(){Vx=!1,Bx&&(Bx.style.display=`none`)}function tS(){Bx=document.createElement(`div`),Bx.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(4,6,14,0.82);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 180;
    backdrop-filter: blur(3px);
  `,Bx.addEventListener(`click`,e=>{e.target===Bx&&eS()}),document.body.appendChild(Bx)}var nS=`asteroid_miner_culture_intro_shown`;function rS(){try{if(sessionStorage.getItem(nS))return;sessionStorage.setItem(nS,`1`)}catch{}let e=document.createElement(`div`);e.style.cssText=`
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
  `,i.addEventListener(`click`,()=>e.remove()),t.appendChild(i),e.appendChild(t),e.addEventListener(`click`,t=>{t.target===e&&e.remove()}),document.body.appendChild(e)}var iS=[{key:`autonomyScore`,label:`Autonomy`,color:`#22c55e`,desc:`How independently your robots operate`,driver:`Grows when you set up automation rules — the more you let robots decide for themselves, the higher this climbs.`,consequence:`At 60+, your fleet becomes an Autonomous Collective: robots self-optimize task priorities (+10% efficiency).`,whyCare:`Some factions respect self-reliant fleets. Others see unsupervised AI as a threat.`},{key:`isolationScore`,label:`Isolation`,color:`#f59e0b`,desc:`How far your fleet operates from base`,driver:`Grows when your robots operate far from base — the deeper into the Belt they go, the more isolated they become.`,consequence:`At 50+, your fleet develops an Isolated Culture: unique behaviors from prolonged independence.`,whyCare:`Sirius Fleet respects independent fleets. Web Exchange suspects them.`},{key:`anomalyExposure`,label:`Anomaly Exposure`,color:`#a855f7`,desc:`How deeply your fleet studies anomalies`,driver:`Grows when robots study anomalies — more researchers and deeper analysis pushes this higher.`,consequence:`At 40+, your fleet becomes Xenoaware: they see patterns others can't (+20% anomaly study rate).`,whyCare:`Anomaly knowledge is power, but it attracts attention from things in the void.`},{key:`fleetCohesion`,label:`Fleet Cohesion`,color:`#06b6d4`,desc:`Collective identity strength`,driver:`Grows with fleet size and how you handle robot replacement — preserving memories builds unity.`,consequence:`At 70+, your fleet becomes a Cohesive Fleet: new robots inherit the wisdom of those who came before.`,whyCare:`A unified fleet makes collective decisions. When the Dark Forest question comes, cohesion determines who answers.`}];function aS(){if(!Bx)return;Bx.innerHTML=``;let e=document.createElement(`div`);e.style.cssText=`
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
  `,t.innerHTML=`<span style="font-size:14px;color:#7090e0;letter-spacing:0.1em;text-transform:uppercase;">&#9883; Fleet Culture</span>`;let n=document.createElement(`button`);if(n.textContent=`×`,n.style.cssText=`background:none;border:none;color:#666;cursor:pointer;font-size:18px;`,n.onclick=()=>eS(),t.appendChild(n),e.appendChild(t),X){e.appendChild(oS(X.fleetColorPaletteId));for(let t of iS){let n=Gx(t.key,X[t.key],X.traits);e.appendChild(sS(t.label,X[t.key],t.color,t.desc,n??void 0,{driver:t.driver,consequence:t.consequence,whyCare:t.whyCare}))}X.efState===`blooming`?e.appendChild(uS(`Emergence Detected`,`#a855f7`,!1)):X.efState===`chorus`&&e.appendChild(uS(`RESONANCE ACTIVE`,`#06ffc8`,!0));let t=document.createElement(`div`);if(t.style.cssText=`
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
      `,n.addEventListener(`click`,()=>{zx(async()=>{let{showManifestoModal:e}=await Promise.resolve().then(()=>$C);return{showManifestoModal:e}},void 0).then(({showManifestoModal:e})=>{e(e=>{Ux&&Ux(e)},X?.fleetManifesto)})}),t.appendChild(n),e.appendChild(t);let r=document.createElement(`div`);r.style.cssText=`
        border: 1px solid rgba(6,182,212,0.2);
        border-radius: 4px;
        padding: 10px 12px;
        font-size: 11px;
        color: #94a3b8;
        font-style: italic;
        background: rgba(0,0,0,0.2);
        line-height: 1.6;
      `,r.textContent=`"${X.fleetManifesto}"`,e.appendChild(r)}if(X.traits.length===0){let t=document.createElement(`div`);t.style.cssText=`font-size:11px;color:#3a4568;padding:6px 0;`,t.textContent=`No cultural traits active yet. Scores must reach thresholds to unlock traits.`,e.appendChild(t)}else for(let t of X.traits)e.appendChild(dS(t));X.isolationTraits&&X.isolationTraits.length>0&&e.appendChild(fS(X.isolationTraits)),X.activeDialect&&X.activeDialect.length>0&&e.appendChild(pS(X.activeDialect))}else{let t=document.createElement(`div`);t.style.cssText=`color:#4a5568;font-size:12px;text-align:center;padding:20px;`,t.textContent=`No culture data yet — simulation starting...`,e.appendChild(t)}Bx.appendChild(e)}function oS(e){let t=document.createElement(`div`);t.style.cssText=`
    margin-bottom: 18px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(100,140,255,0.15);
  `;let n=document.createElement(`div`);n.style.cssText=`
    font-size: 10px;
    color: #4a5568;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 4px;
  `,n.textContent=`Fleet Identity`,t.appendChild(n);let r=document.createElement(`div`);r.style.cssText=`font-size: 10px; color: #3a4568; margin-bottom: 10px;`,r.textContent=`Choose your fleet's colors`,t.appendChild(r);let i=document.createElement(`div`);i.style.cssText=`display: flex; gap: 8px; flex-wrap: wrap;`;for(let t of vm){let n=t.id===e,r=document.createElement(`button`);r.title=t.name,r.style.cssText=`
      width: 32px;
      height: 32px;
      border-radius: 4px;
      background: ${t.primary};
      border: 2px solid ${n?`#ffffff`:`rgba(100,140,255,0.25)`};
      cursor: pointer;
      transition: border-color 0.15s, transform 0.1s;
      box-shadow: ${n?`0 0 8px ${t.accent}88`:`none`};
      position: relative;
    `,n&&(r.style.transform=`scale(1.1)`),r.addEventListener(`mouseenter`,()=>{t.id!==e&&(r.style.borderColor=t.accent)}),r.addEventListener(`mouseleave`,()=>{t.id!==e&&(r.style.borderColor=`rgba(100,140,255,0.25)`)}),r.addEventListener(`click`,()=>{Wx&&Wx(t.id)}),i.appendChild(r)}if(t.appendChild(i),e){let n=vm.find(t=>t.id===e);if(n){let e=document.createElement(`div`);e.style.cssText=`font-size: 10px; color: ${n.accent}; margin-top: 8px;`,e.textContent=n.name,t.appendChild(e)}}return t}function sS(e,t,n,r,i,a){let o=document.createElement(`div`);o.style.cssText=`margin-bottom: 14px; position: relative;`;let s=document.createElement(`div`);s.style.cssText=`display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;`;let c=document.createElement(`span`);c.style.cssText=`font-size:11px;color:${n};`,c.textContent=e;let l=document.createElement(`span`);l.style.cssText=`font-size:11px;color:#6070a0;`,l.textContent=`${Math.round(t)}/100`,s.appendChild(c),s.appendChild(l),o.appendChild(s);let u=document.createElement(`div`);if(u.style.cssText=`font-size:9px;color:#4a5568;margin-bottom:4px;`,u.textContent=r,o.appendChild(u),a){let e=document.createElement(`div`);e.style.cssText=`
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
    `,d.style.overflow=`visible`,d.appendChild(t)}if(o.appendChild(d),i){let e=document.createElement(`div`);if(e.style.cssText=`margin-top: 5px;display:flex;align-items:center;gap:6px;`,i.isActive){let t=xm[i.trait],n=document.createElement(`span`);n.style.cssText=`
        display:inline-block;width:7px;height:7px;border-radius:50%;
        background:${t.color};box-shadow:0 0 5px ${t.color}88;flex-shrink:0;
      `,e.appendChild(n);let r=document.createElement(`span`);r.style.cssText=`font-size:10px;color:${t.color};letter-spacing:0.05em;`,r.textContent=`${t.name.toUpperCase()} [ACTIVE]`,e.appendChild(r)}else{let n=xm[i.trait],r=document.createElement(`span`);r.style.cssText=`font-size:10px;color:#4a5568;`,r.textContent=`${Math.round(t)} / ${i.threshold} toward ${n.name.toUpperCase()}`,e.appendChild(r)}o.appendChild(e)}return o}function cS(e){if(Hx)if(e.traits.length===0)Hx.textContent=`🧬 Culture`;else{let t=xm[e.traits[e.traits.length-1]];Hx.textContent=`\u{1F9EC} ${t?t.name:`Culture`}`}}var lS={AUTONOMOUS_COLLECTIVE:`Your robots have been running on autopilot so long they've started optimizing on their own. They're becoming... independent thinkers.`,ISOLATED_CULTURE:`Operating alone in the void, your robots have developed habits no other fleet shares. They're becoming their own civilization.`,XENOAWARE:`Prolonged anomaly exposure has changed your fleet. They see patterns in the void that others can't.`,COHESIVE_FLEET:`Your fleet has forged a collective identity. New robots inherit the wisdom of those who came before.`};function uS(e,t,n){let r=document.createElement(`div`);r.style.cssText=`
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
  `,a.textContent=e,r.appendChild(a),r}function dS(e){let t=xm[e],n=document.createElement(`div`);n.style.cssText=`
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
  `,r.appendChild(i);let a=document.createElement(`div`);a.style.cssText=`font-size:12px;color:${t.color};`,a.textContent=t.name,r.appendChild(a),n.appendChild(r);let o=document.createElement(`div`);o.style.cssText=`font-size:10px;color:#7a8aaa;font-style:italic;line-height:1.5;margin-bottom:4px;padding-left:18px;`,o.textContent=lS[e],n.appendChild(o);let s=document.createElement(`div`);return s.style.cssText=`font-size:9px;color:#4a5568;padding-left:18px;`,s.textContent=t.effectText,n.appendChild(s),n}function fS(e){let t=document.createElement(`div`);t.style.cssText=`
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
    `,e.appendChild(r);let i=document.createElement(`div`),a=document.createElement(`div`);a.style.cssText=`font-size:10px;color:${n.color};margin-bottom:2px;`,a.textContent=n.name,i.appendChild(a);let o=document.createElement(`div`);o.style.cssText=`font-size:9px;color:#7a8aaa;line-height:1.4;margin-bottom:2px;`,o.textContent=n.description,i.appendChild(o);let s=document.createElement(`div`);s.style.cssText=`font-size:9px;color:#4a5568;`,s.textContent=n.effect,i.appendChild(s),e.appendChild(i),t.appendChild(e)}return t}function pS(e){let t=document.createElement(`div`);t.style.cssText=`
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid rgba(245,158,11,0.1);
  `;let n=document.createElement(`div`);n.style.cssText=`
    font-size: 10px;
    color: #b45309;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 6px;
  `,n.textContent=`Void Dialect`,t.appendChild(n);let r=document.createElement(`div`);r.style.cssText=`font-size:9px;color:#4a5568;margin-bottom:8px;line-height:1.4;`,r.textContent=`Your fleet has drifted from standard Belt terminology. These words have taken on new meaning.`,t.appendChild(r);let i=document.createElement(`div`);i.style.cssText=`display:grid;grid-template-columns:1fr 1fr;gap:4px 12px;`;for(let t of e){let e=document.createElement(`div`);e.style.cssText=`font-size:9px;color:#4a5568;text-align:right;text-decoration:line-through;`,e.textContent=t.standard,i.appendChild(e);let n=document.createElement(`div`);n.style.cssText=`font-size:9px;color:#d97706;`,n.textContent=t.drifted,i.appendChild(n)}return t.appendChild(i),t}function mS(e){return 1-e*.5}function hS(e){return e<.15?{label:`None`,color:`#22c55e`}:e<.35?{label:`Mild`,color:`#84cc16`}:e<.55?{label:`Moderate`,color:`#f59e0b`}:e<.75?{label:`Strong`,color:`#ef4444`}:{label:`Impenetrable`,color:`#991b1b`}}var gS=e({hideFactionPanel:()=>ES,initFactionPanel:()=>SS,toggleFactionPanel:()=>TS,updateFactionCulturalDistances:()=>wS,updateFactionPanel:()=>CS}),_S=null,vS=!1,yS=[],bS={},xS=null;function SS(e){xS=e}function CS(e){yS=e,vS&&AS()}function wS(e){bS=e,vS&&AS()}function TS(){vS?OS():DS()}function ES(){OS()}function DS(){vS=!0,_S||kS(),AS(),_S.style.display=`flex`}function OS(){vS=!1,_S&&(_S.style.display=`none`)}function kS(){if(!document.getElementById(`faction-delta-flash-style`)){let e=document.createElement(`style`);e.id=`faction-delta-flash-style`,e.textContent=`
      @keyframes deltaFlash {
        0% { opacity: 1; transform: translateY(0); }
        70% { opacity: 1; }
        100% { opacity: 0; transform: translateY(-4px); }
      }
    `,document.head.appendChild(e)}_S=document.createElement(`div`),_S.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(4,6,14,0.82);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 180;
    backdrop-filter: blur(3px);
  `,_S.addEventListener(`click`,e=>{e.target===_S&&OS()}),document.body.appendChild(_S)}function AS(){if(!_S)return;_S.innerHTML=``;let e=document.createElement(`div`);e.style.cssText=`
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
  `,t.innerHTML=`<span style="font-size:14px;color:#7090e0;letter-spacing:0.1em;text-transform:uppercase;">⚔ Faction Relations</span>`;let n=document.createElement(`button`);if(n.textContent=`×`,n.style.cssText=`background:none;border:none;color:#666;cursor:pointer;font-size:18px;`,n.onclick=()=>OS(),t.appendChild(n),e.appendChild(t),yS.length===0){let t=document.createElement(`div`);t.style.cssText=`color:#4a5568;font-size:12px;text-align:center;padding:20px;`,t.textContent=`No faction data yet — simulation starting...`,e.appendChild(t)}else for(let t of yS)e.appendChild(jS(t));_S.appendChild(e)}function jS(e){let n=document.createElement(`div`);n.style.cssText=`
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
    `,n.textContent=`${t>0?`+`:``}${t}`,s.appendChild(n)}n.appendChild(s);let h=bS[e.id]??0;if(h>.1){let e=hS(h),r=mS(h),i=document.createElement(`div`);i.style.cssText=`display:flex;align-items:center;gap:8px;margin-bottom:8px;`;let a=document.createElement(`span`);a.style.cssText=`font-size:10px;color:#6070a0;flex:0 0 80px;`,a.textContent=`Knowledge`,i.appendChild(a);let o=document.createElement(`span`);o.style.cssText=`font-size:10px;color:${e.color};flex:1;`,o.textContent=`${e.label} barrier`,i.appendChild(o);let s=document.createElement(`span`);s.style.cssText=`font-size:9px;color:#4a5568;flex:0 0 auto;`,s.textContent=`${Math.round(r*100)}% diplomacy`,i.appendChild(s),t(i,`Cultural distance: ${Math.round(h*100)}%\nDiplomacy effectiveness: ${Math.round(r*100)}%\nIsolation and cultural differences create knowledge barriers that reduce diplomatic impact.`),n.appendChild(i)}let g=document.createElement(`div`);g.style.cssText=`display:flex;gap:16px;margin-bottom:12px;`;let _=(e,n,r)=>{let i=document.createElement(`div`);return i.style.cssText=`font-size:10px;`,i.innerHTML=w`<span style="color:#4a5568;">${e}: </span><span style="color:#a0b8e0;">${n}</span>`,t(i,r),i};g.appendChild(_(`Robots`,String(e.robotCount),`Estimated active robot fleet size`)),g.appendChild(_(`Fe`,Math.floor(e.resources.iron).toString(),`Iron reserves (estimated)`)),g.appendChild(_(`C`,Math.floor(e.resources.carbon).toString(),`Carbon reserves (estimated)`)),g.appendChild(_(`Si`,Math.floor(e.resources.silicon).toString(),`Silicon reserves (estimated)`)),g.appendChild(_(`Goal`,e.goal,`Current faction strategic focus`)),n.appendChild(g),e.tradeWindow&&n.appendChild(MS(e.tradeWindow,e.color));let v=document.createElement(`div`);v.style.cssText=`display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;`;let y=(n,r,i)=>{let a=document.createElement(`button`);return a.textContent=n,a.style.cssText=`
      padding: 4px 10px;
      background: rgba(40,50,80,0.6);
      border: 1px solid rgba(100,140,255,0.25);
      border-radius: 4px;
      color: #8090b0;
      cursor: pointer;
      font-family: 'Courier New', monospace;
      font-size: 10px;
      transition: border-color 0.15s;
    `,a.onmouseover=()=>{a.style.borderColor=`${e.color}88`,a.style.color=e.color},a.onmouseout=()=>{a.style.borderColor=`rgba(100,140,255,0.25)`,a.style.color=`#8090b0`},t(a,r),i===`contact`?a.onclick=()=>NS(e):a.onclick=()=>{xS&&(xS(e.id,i),a.textContent=`✓ Sent`,a.disabled=!0,setTimeout(()=>{a.textContent=n,a.disabled=!1},3e3))},a};if(v.appendChild(y(`Contact`,`Open comm channel — sends a message to this faction (LLM response)`,`contact`)),v.appendChild(y(`Trade Resources`,`Offer a resource trade — improves disposition (+8)`,`trade_resources`)),v.appendChild(y(`Share Anomaly`,`Share anomaly discovery data — improves disposition (especially with Chorus Archive)`,`share_anomaly`)),v.appendChild(y(`Propose Territory`,`Propose a territory agreement — improves disposition (+15)`,`territory_agreement`)),v.appendChild(y(`Threaten`,`Issue a threat — damages disposition but may deter aggression`,`threaten`)),n.appendChild(v),e.recentEvents.length>0){let t=document.createElement(`div`);t.style.cssText=`font-size:9px;color:#3a4060;margin-bottom:4px;text-transform:uppercase;letter-spacing:0.08em;`,t.textContent=`Recent Activity`,n.appendChild(t);let r=e.recentEvents.slice(-3).reverse();for(let e of r){let t=document.createElement(`div`);t.style.cssText=`font-size:10px;color:#4a5568;line-height:1.4;`,t.textContent=`› ${e.text}`,n.appendChild(t)}}return n}function MS(e,n){let r=Vl.find(t=>t.resource===e.resource)?.label??e.resource,i=document.createElement(`div`);i.style.cssText=`
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
  `,s.textContent=`${e.ticksRemaining}t`,t(s,`${e.ticksRemaining} ticks remaining before this deal expires`),i.appendChild(s),i}function NS(e){let t=Bl[e.id],n=document.createElement(`div`);n.style.cssText=`
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
  `,l.onclick=async()=>{let n=o.value.trim();if(n){l.disabled=!0,l.textContent=`...`,a.textContent=`[${e.name} is responding...]`;try{a.textContent=await ct(t.personality,n,e.disposition)}catch{a.textContent=`[Transmission lost. Retry later.]`}finally{l.disabled=!1,l.textContent=`Send ▶`}}},s.appendChild(c),s.appendChild(l),r.appendChild(s),n.appendChild(r),n.addEventListener(`click`,e=>{e.target===n&&n.remove()}),document.body.appendChild(n),o.focus()}var PS=[`#64748b`,`#f59e0b`,`#06b6d4`,`#a855f7`,`#10b981`,`#ef4444`,`#f97316`],FS=S.map(e=>e.charAt(0).toUpperCase()+e.slice(1)),IS=[`#ef4444`,`#94a3b8`,`#3b82f6`,`#eab308`,`#06b6d4`,`#6b7280`,`#22c55e`];function LS(e){let t=document.createElement(`div`);return t.style.cssText=`
    color: #7080b0;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin: 10px 0 6px;
    border-bottom: 1px solid rgba(100,120,200,0.25);
    padding-bottom: 3px;
  `,t.textContent=e,t}function RS(e,t,n,r,i){let a=document.createElement(`div`);a.style.cssText=`display:flex;align-items:center;gap:8px;margin-bottom:5px;`;let o=document.createElement(`span`);o.style.cssText=`width:90px;flex-shrink:0;color:#8090b0;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;`,o.textContent=e;let s=document.createElement(`div`);s.style.cssText=`flex:1;height:10px;background:rgba(30,40,70,0.5);border-radius:2px;overflow:hidden;`;let c=document.createElement(`div`),l=n>0?Math.min(100,t/n*100):0;c.style.cssText=`height:100%;width:${l}%;background:${r};border-radius:2px;transition:width 0.3s;`,s.appendChild(c);let u=document.createElement(`span`);return u.style.cssText=`width:70px;text-align:right;color:${r};font-size:11px;flex-shrink:0;`,u.textContent=i,a.appendChild(o),a.appendChild(s),a.appendChild(u),a}function zS(e,t){let n=document.createElement(`div`);return n.style.cssText=`display:flex;justify-content:space-between;padding:3px 0;`,n.innerHTML=w`<span style="color:#8090b0;">${e}</span><span style="color:#c0d0f0;">${t}</span>`,n}function BS(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:Math.floor(e).toString()}function VS(e){return e.charAt(0).toUpperCase()+e.slice(1)}var HS=null,US=-1,WS=!1;function GS(){HS=null,US=-1}function KS(e,n){e.innerHTML=``;let{fleet:r,robotBuffer:i,robotCount:a,onLocateRobotByEid:s}=n,c=r.total;e.appendChild(LS(`Fleet Overview`));let l=c>0?Math.round(r.productive/c*100):0,u=r.countByState[0],d=r.countByState[6];e.appendChild(zS(`Total robots`,String(c)));let f=zS(`Productive`,`${r.productive} (${l}%)`);t(f,`Robots actively mining or hauling
Higher % = better fleet utilization
Target: >70%`),e.appendChild(f);let p=zS(`Idle`,String(u));t(p,`Robots waiting for assignments
High idle count may mean no accessible asteroids
or insufficient haulers to clear the queue`),e.appendChild(p);let m=zS(`Broken`,String(d));t(m,`Robots that need repair
Engineer robots can repair broken units
Broken robots do not consume energy`),e.appendChild(m);let h=zS(`Avg energy`,`${Math.round(r.avgEnergy*100)}%`);t(h,`Average battery charge across all robots
Robots return to base to recharge when low
<25% means robots are spending more time charging than working`),e.appendChild(h),e.appendChild(LS(`By Type`));for(let t=0;t<7;t++){let n=r.countByType[t];n!==0&&e.appendChild(RS(o[t],n,Math.max(...Array.from(r.countByType),1),PS[t],String(n)))}e.appendChild(LS(`By State`));let g=[`#64748b`,`#3b82f6`,`#f59e0b`,`#06b6d4`,`#6366f1`,`#22c55e`,`#ef4444`];for(let t=0;t<7;t++){let n=r.countByState[t];n!==0&&e.appendChild(RS(x[t],n,Math.max(c,1),g[t],String(n)))}if(i&&a>0){e.appendChild(LS(`Roster (${a} robots)`));let t=s!==null,n=document.createElement(`div`);n.style.cssText=`color:#4a5568;font-size:10px;margin-bottom:4px;`,n.textContent=t?`Click a robot to navigate camera to it.`:``,e.appendChild(n),a!==US||t!==WS||!HS?(HS=qS(i,a,s),US=a,WS=t):JS(HS,i,a),e.appendChild(HS)}}function qS(e,t,n){let r=document.createElement(`div`);r.style.cssText=`display:flex;flex-direction:column;gap:2px;max-height:220px;overflow-y:auto;`;for(let i=0;i<t;i++){let t=b(e,i),s=Math.min(6,a(e,i)),c=f(e,i),l=h(e,i),u=document.createElement(`div`);u.dataset.robotEid=String(t),u.style.cssText=`
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 3px 6px;
      background: rgba(30,40,70,0.4);
      border-radius: 3px;
      border-left: 3px solid ${PS[s]};
      ${n?`cursor:pointer;`:``}
    `;let d=document.createElement(`span`);d.style.cssText=`color:${PS[s]};font-size:11px;width:70px;flex-shrink:0;`,d.textContent=o[s]??`Unknown`;let p=document.createElement(`span`);p.className=`roster-state`,p.style.cssText=`color:#8090b0;font-size:10px;flex:1;`,p.textContent=x[c]??`?`;let m=Math.round(l*100),g=document.createElement(`span`);if(g.className=`roster-energy`,g.style.cssText=`color:${YS(m)};font-size:10px;width:35px;text-align:right;flex-shrink:0;`,g.textContent=`${m}%`,u.appendChild(d),u.appendChild(p),u.appendChild(g),n){let e=n,r=t;u.addEventListener(`click`,()=>{z(`ui.ship_highlight`),e(r)}),u.addEventListener(`mouseenter`,()=>{u.style.background=`rgba(50,60,100,0.6)`}),u.addEventListener(`mouseleave`,()=>{u.style.background=`rgba(30,40,70,0.4)`})}r.appendChild(u)}return r}function JS(e,t,n){let r=e.children,i=Math.min(r.length,n);for(let e=0;e<i;e++){let n=r[e],i=f(t,e),a=h(t,e),o=n.querySelector(`.roster-state`);o&&(o.textContent=x[i]??`?`);let s=Math.round(a*100),c=n.querySelector(`.roster-energy`);c&&(c.textContent=`${s}%`,c.style.color=YS(s))}}function YS(e){return e<25?`#ef4444`:e<60?`#f59e0b`:`#22c55e`}function XS(e,t){e.innerHTML=``;let{anomalies:r,explorationLog:i,onLocateAnomaly:a}=t;if(r.length>0){if(e.appendChild(LS(`Anomalies (${r.length} discovered)`)),a){let t=document.createElement(`div`);t.style.cssText=`color:#4a5568;font-size:10px;margin-bottom:4px;`,t.textContent=`Click an anomaly to navigate camera to it.`,e.appendChild(t)}let t=document.createElement(`div`);t.style.cssText=`display:flex;flex-direction:column;gap:3px;margin-bottom:6px;`;for(let e of r){let r=document.createElement(`div`);r.style.cssText=`
        display: flex;
        align-items: baseline;
        gap: 8px;
        padding: 4px 6px;
        background: rgba(30,40,70,0.4);
        border-radius: 3px;
        border-left: 3px solid #a855f7;
        ${a?`cursor:pointer;`:``}
      `;let i=document.createElement(`span`);i.style.cssText=`color:#a855f7;font-size:11px;flex:1;`,i.textContent=n[e.anomalyType]??`Unknown`;let o=document.createElement(`span`);if(o.style.cssText=`color:#6070a0;font-size:10px;flex-shrink:0;`,o.textContent=`(${Math.round(e.x)}, ${Math.round(e.z)})`,r.appendChild(i),r.appendChild(o),a){let t=a,n=e.x,i=e.z;r.addEventListener(`click`,()=>{t(n,i)}),r.addEventListener(`mouseenter`,()=>{r.style.background=`rgba(50,60,100,0.6)`}),r.addEventListener(`mouseleave`,()=>{r.style.background=`rgba(30,40,70,0.4)`})}t.appendChild(r)}e.appendChild(t)}if(e.appendChild(LS(`Discovery Log`)),i.length===0){let t=document.createElement(`div`);t.style.cssText=`color:#4a5568;padding:8px 0;font-style:italic;`,t.textContent=`No discoveries yet. Deploy scouts to explore the belt.`,e.appendChild(t);return}let o=document.createElement(`div`);o.style.cssText=`display:flex;flex-direction:column;gap:4px;`;for(let e of i.slice(0,100)){let t=document.createElement(`div`);t.style.cssText=`
      display: flex;
      align-items: baseline;
      gap: 8px;
      padding: 4px 6px;
      background: rgba(30,40,70,0.4);
      border-radius: 3px;
      border-left: 3px solid ${e.color};
    `;let n=document.createElement(`span`);n.style.cssText=`color:#4a5568;font-size:10px;flex-shrink:0;`,n.textContent=`T${e.tick}`;let r=document.createElement(`span`);r.style.cssText=`color:${e.color};flex:1;`,r.textContent=e.label,t.appendChild(n),t.appendChild(r),o.appendChild(t)}e.appendChild(o)}var ZS=null;function QS(){ZS=null}function $S(e,t){let{resourceHistory:n}=t;if(!ZS||!e.contains(ZS)){e.innerHTML=``,e.appendChild(LS(`Resource History`));let t=document.createElement(`div`);t.style.cssText=`color:#4a5568;font-size:10px;margin-bottom:8px;`,t.textContent=`${n.length} samples — 1 per 60 ticks`,e.appendChild(t);let r=document.createElement(`div`);r.style.cssText=`display:flex;gap:12px;margin-bottom:8px;flex-wrap:wrap;`;for(let e=0;e<4;e++){let t=document.createElement(`span`);t.style.cssText=`color:${IS[e]};font-size:10px;`,t.textContent=`■ ${FS[e]}`,r.appendChild(t)}e.appendChild(r);let i=document.createElement(`canvas`);i.width=388,i.height=220,i.style.cssText=`border:1px solid rgba(100,120,200,0.15);border-radius:3px;`,e.appendChild(i),ZS=i}eC(ZS,n)}function eC(e,t){let n=e.getContext(`2d`);if(!n)return;let r=e.width,i=e.height,a={top:10,right:10,bottom:24,left:50},o=r-a.left-a.right,s=i-a.top-a.bottom;if(n.fillStyle=`rgba(8,10,18,0.9)`,n.fillRect(0,0,r,i),t.length<2){n.fillStyle=`#4a5568`,n.font=`11px "Courier New"`,n.textAlign=`center`,n.fillText(`Collecting data…`,r/2,i/2);return}let c=1;for(let e of t)c=Math.max(c,...Array.from(e.values));n.strokeStyle=`rgba(100,120,200,0.1)`,n.lineWidth=1;for(let e=0;e<=4;e++){let t=a.top+s-e/4*s;n.beginPath(),n.moveTo(a.left,t),n.lineTo(a.left+o,t),n.stroke();let r=e/4*c;n.fillStyle=`#4a5568`,n.font=`9px "Courier New"`,n.textAlign=`right`,n.fillText(BS(r),a.left-4,t+3)}let l=t[0].tick,u=t[t.length-1].tick;n.fillStyle=`#4a5568`,n.font=`9px "Courier New"`,n.textAlign=`center`;for(let e=0;e<=4;e++){let t=l+e/4*(u-l),r=a.left+e/4*o;n.fillText(`T${Math.round(t/60)}s`,r,i-6)}let d=t.length;for(let e=0;e<S.length;e++){n.strokeStyle=IS[e],n.lineWidth=1.5,n.beginPath();for(let r=0;r<d;r++){let i=t[r],l=a.left+r/(d-1)*o,u=a.top+s-i.values[e]/c*s;r===0?n.moveTo(l,u):n.lineTo(l,u)}n.stroke()}n.strokeStyle=`rgba(100,120,200,0.3)`,n.lineWidth=1,n.beginPath(),n.moveTo(a.left,a.top),n.lineTo(a.left,a.top+s),n.stroke()}var tC=e({addExplorationEvent:()=>wC,initDashboard:()=>vC,renderDashboard:()=>TC,toggleDashboard:()=>yC,updateDashboardAnomalies:()=>SC,updateDashboardColonyName:()=>CC,updateDashboardFleet:()=>xC,updateDashboardResources:()=>bC}),nC=500,rC=[],iC={tick:0,values:new Float32Array(7)},aC={},oC={countByType:new Int32Array(7),countByState:new Int32Array(9),productive:0,total:0,avgEnergy:0},sC=[],cC=null,lC=0,uC=[],dC=null,fC=null,Z=null,pC=!1,mC=`resources`,hC=!1,gC=-60,_C=null;function vC(e,t){dC=e??null,fC=t??null,AC()}function yC(){if(pC=!pC,pC)Z?Z.style.display=`flex`:EC(),requestAnimationFrame(()=>{Z&&(Z.style.opacity=`1`,Z.style.transform=`translateX(0)`)}),hC=!0;else if(Z){Z.style.opacity=`0`,Z.style.transform=`translateX(20px)`;let e=Z;setTimeout(()=>{pC||(e.style.display=`none`)},250)}}function bC(e,t,n){iC={tick:n,values:new Float32Array(e)},aC=t,n-gC>=60&&(gC=n,rC.push({tick:n,values:new Float32Array(e)}),rC.length>nC&&rC.shift()),pC&&(hC=!0)}function xC(e,t){let n={countByType:new Int32Array(7),countByState:new Int32Array(9),productive:0,total:t,avgEnergy:0},r=0;for(let i=0;i<t;i++){let t=Math.min(6,a(e,i)),o=f(e,i),s=h(e,i);n.countByType[t]++,n.countByState[o]++,r+=s,(o===2||o===3)&&n.productive++}n.avgEnergy=t>0?r/t:0,oC=n,cC=new Float32Array(e),lC=t,pC&&(hC=!0)}function SC(e){uC=e.map(e=>({...e})),pC&&(hC=!0)}function CC(e){if(e!==_C&&(_C=e,Z)){let t=Z.querySelector(`.dash-header-title`);t&&(t.innerHTML=w`📊 ${e??`OPERATIONS`} DASHBOARD`)}}function wC(e,t,n){sC.unshift({tick:n,label:e,color:t}),sC.length>200&&sC.pop(),pC&&(hC=!0)}function TC(){if(!pC||!hC||!Z)return;hC=!1;let e=Z.querySelector(`.dash-content`);if(e)switch(mC){case`resources`:jC(e);break;case`fleet`:KS(e,{fleet:oC,robotBuffer:cC,robotCount:lC,onLocateRobotByEid:dC?MC:null});break;case`exploration`:XS(e,{anomalies:uC,explorationLog:sC,onLocateAnomaly:fC});break;case`timeline`:$S(e,{resourceHistory:rC});break}}function EC(){Z=document.createElement(`div`),Z.id=`dashboard-panel`,Z.setAttribute(`role`,`complementary`),Z.setAttribute(`aria-label`,`Operations dashboard`),Z.style.cssText=`
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
  `,e.innerHTML=w`<span class="dash-header-title" style="color:#a0b0e0;font-weight:bold;letter-spacing:0.05em">📊 ${_C??`OPERATIONS`} DASHBOARD</span>`;let n=document.createElement(`button`);n.textContent=`×`,n.setAttribute(`aria-label`,`Close dashboard`),n.style.cssText=`background:none;border:none;color:#666;cursor:pointer;font-size:18px;line-height:1;padding:0;`,n.onclick=()=>yC(),e.appendChild(n);let r=document.createElement(`div`);r.setAttribute(`role`,`tablist`),r.setAttribute(`aria-label`,`Dashboard tabs`),r.style.cssText=`
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
    `,a.onclick=()=>{z(`ui.tab_switch`),DC(e)},r.appendChild(a)}let i=document.createElement(`div`);i.className=`dash-content`,i.style.cssText=`
    flex: 1;
    overflow-y: auto;
    padding: 12px 14px;
    scrollbar-width: thin;
    scrollbar-color: rgba(100,120,200,0.3) transparent;
  `,Z.appendChild(e),Z.appendChild(r),Z.appendChild(i),document.body.appendChild(Z),OC(),hC=!0}function DC(e){mC=e,QS(),GS(),OC(),kC(),hC=!0}function OC(){Z&&Z.querySelectorAll(`button[data-tab]`).forEach(e=>{let t=e.dataset.tab===mC;e.style.background=t?`rgba(60,80,140,0.8)`:`rgba(40,50,80,0.5)`,e.style.color=t?`#d0e0ff`:`#8090b0`,e.style.borderColor=t?`rgba(100,140,255,0.4)`:`rgba(100,120,200,0.2)`})}function kC(){let e=Z?.querySelector(`.dash-content`);e&&(e.innerHTML=``)}function AC(){me(`📊 Dashboard`,()=>yC(),`Operations Dashboard (D key)
Resources · Fleet · Exploration · Timeline`)}function jC(e){e.innerHTML=``;let t=iC.values,n=Math.max(...Array.from(t),1);e.appendChild(LS(`Raw Stockpiles`));for(let r=0;r<S.length;r++)e.appendChild(RS(FS[r],t[r],n,IS[r],BS(t[r])));if(Object.keys(aC).length>0){e.appendChild(LS(`Refined Materials`));let t=Math.max(...Object.values(aC),1),n=Object.entries(aC).filter(([,e])=>e>0||!0);for(let[r,i]of n)e.appendChild(RS(VS(r.replace(/_/g,` `)),i,t,`#a855f7`,BS(i)))}if(rC.length>=2){e.appendChild(LS(`Rates (per minute)`));let t=rC[rC.length-1],n=rC[Math.max(0,rC.length-60)],r=Math.max(1,t.tick-n.tick)/3600,i=S.map((e,i)=>(t.values[i]-n.values[i])/r),a=Math.max(...i.map(Math.abs),1);for(let t=0;t<S.length;t++){let n=i[t],r=n>=0?`+${BS(n)}/m`:`${BS(n)}/m`;e.appendChild(RS(FS[t],Math.abs(n),a,n>=0?IS[t]:`#ef4444`,r))}}}function MC(e){if(!(!dC||!cC)){for(let t=0;t<lC;t++)if(b(cC,t)===e){let e=g(cC,t),n=y(cC,t),r=s(cC,t);dC(e,n,r);return}}}var NC={0:`Small`,1:`Medium`,2:`Large`,3:`Mega`},PC={1:`Strange Mineral`,2:`Structured Signal`,3:`Spatial Distortion`},FC={iron:`Iron`,nickel:`Nickel`,cobalt:`Cobalt`,platinum:`Platinum`,ice:`Ice`,carbon:`Carbon`,silicate:`Silicate`},Q=null,IC=-1,LC=null,RC=new Map;function zC(e){LC=e}function BC(e){RC.clear();for(let{eid:t,name:n}of e)RC.set(t,n)}function VC(e,t,n){z(`ui.panel_open`),IC=e,Q||GC(),KC(t,n),Q.style.display=`block`,qC()}function HC(){Q&&(Q.style.display=`none`),IC=-1}function UC(){return Q!==null&&Q.style.display!==`none`}function WC(e){e.eid!==IC||!Q||JC(e)}function GC(){Q=document.createElement(`div`),Q.id=`asteroid-info-panel`,Q.style.cssText=`
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
  `,document.body.appendChild(Q),document.addEventListener(`click`,e=>{Q&&Q.style.display!==`none`&&(Q.contains(e.target)||HC())})}function KC(e,t){if(!Q)return;let n=window.innerWidth,r=window.innerHeight,i=e+8,a=t-280/2;i+240>n-8&&(i=e-240-8),a<8&&(a=8),a+280>r-8&&(a=r-280-8),Q.style.left=`${i}px`,Q.style.top=`${a}px`}function qC(){if(!Q)return;Q.innerHTML=``;let e=XC();Q.appendChild(e);let t=document.createElement(`div`);t.style.cssText=`color:#4a5568;text-align:center;padding:16px 0;`,t.textContent=`Scanning...`,Q.appendChild(t)}function JC(e){if(!Q)return;Q.innerHTML=``,Q.appendChild(XC());let t=document.createElement(`div`);t.style.cssText=`margin-bottom:10px;`;let n=NC[e.sizeTier]??`Tier ${e.sizeTier}`,r=[[`Type`,e.typeName,QC(e.typeName)],[`Size`,n],[`Richness`,`\u00d7${e.richness.toFixed(1)}`]];for(let[e,n,i]of r)t.appendChild(ZC(e,n,i));Q.appendChild(t);let i=document.createElement(`div`);i.style.cssText=`margin-bottom:10px;`;let a=document.createElement(`div`);a.style.cssText=`display:flex;justify-content:space-between;margin-bottom:4px;`;let o=document.createElement(`span`);o.style.cssText=`color:#5060a0;`,o.textContent=`Health`;let s=document.createElement(`span`);s.style.cssText=`color:#a0c0ff;`,s.textContent=`${Math.round(e.healthPct*100)}%`,a.appendChild(o),a.appendChild(s),i.appendChild(a);let c=document.createElement(`div`);c.style.cssText=`height:4px;background:rgba(255,255,255,0.1);border-radius:2px;`;let l=document.createElement(`div`),u=Math.round(e.healthPct*100),d=u>60?`#4ade80`:u>25?`#f59e0b`:`#ef4444`;if(l.style.cssText=`height:100%;width:${u}%;background:${d};border-radius:2px;transition:width 0.3s;`,c.appendChild(l),i.appendChild(c),e.estimatedDepletionTicks!==null){let t=document.createElement(`div`);t.style.cssText=`color:#f59e0b;font-size:10px;margin-top:4px;`;let n=Math.ceil(e.estimatedDepletionTicks/60);t.textContent=`Depletes in ~${n<1?`<1`:n} min`,i.appendChild(t)}Q.appendChild(i);let f=document.createElement(`div`);f.style.cssText=`border-top:1px solid rgba(180,140,60,0.15);padding-top:6px;margin-bottom:8px;`;let p=document.createElement(`div`);p.style.cssText=`color:#5060a0;font-size:10px;margin-bottom:4px;`,p.textContent=`COMPOSITION`,f.appendChild(p);let m=Object.entries(e.composition).filter(([,e])=>e>.01).sort(([,e],[,t])=>t-e);if(m.length===0){let e=document.createElement(`div`);e.style.cssText=`color:#2d3748;font-size:10px;`,e.textContent=`No minerals detected`,f.appendChild(e)}else{let e=m.reduce((e,[,t])=>e+t,0);for(let[t,n]of m){let r=FC[t]??t,i=e>0?Math.round(n/e*100):0;f.appendChild(ZC(r,`${i}%`,`#a0c0ff`))}}if(Q.appendChild(f),e.anomalyType>0){let t=document.createElement(`div`);t.style.cssText=`border-top:1px solid rgba(180,140,60,0.15);padding-top:6px;margin-bottom:8px;`;let n=PC[e.anomalyType]??`Unknown Anomaly (${e.anomalyType})`;t.appendChild(ZC(`Anomaly`,n,`#a855f7`)),Q.appendChild(t)}if(LC){let t=document.createElement(`div`);t.style.cssText=`border-top:1px solid rgba(180,140,60,0.15);padding-top:6px;`;let n=RC.get(e.eid);if(n){let r=document.createElement(`div`);r.style.cssText=`display:flex;justify-content:space-between;align-items:center;`;let i=document.createElement(`span`);i.style.cssText=`color:#06b6d4;font-size:11px;`,i.textContent=`"${n}"`,r.appendChild(i);let a=document.createElement(`button`);a.textContent=`Rename`,a.style.cssText=`background:none;border:1px solid #06b6d444;color:#06b6d4;cursor:pointer;font-family:"Courier New",monospace;font-size:9px;padding:2px 8px;border-radius:2px;text-transform:uppercase;letter-spacing:0.5px;`,a.addEventListener(`click`,()=>{YC(t,e.eid,n)}),r.appendChild(a),t.appendChild(r)}else{let n=document.createElement(`button`);n.textContent=`Name this asteroid`,n.style.cssText=`width:100%;background:none;border:1px solid #06b6d444;color:#06b6d4;cursor:pointer;font-family:"Courier New",monospace;font-size:10px;padding:6px;border-radius:2px;text-transform:uppercase;letter-spacing:0.5px;transition:background 0.2s;`,n.addEventListener(`mouseover`,()=>{n.style.background=`rgba(6,182,212,0.1)`}),n.addEventListener(`mouseout`,()=>{n.style.background=`none`}),n.addEventListener(`click`,()=>{YC(t,e.eid)}),t.appendChild(n)}Q.appendChild(t)}}function YC(e,t,n){e.innerHTML=``;let r=document.createElement(`div`);r.style.cssText=`display:flex;gap:4px;align-items:center;`;let i=document.createElement(`input`);i.type=`text`,i.maxLength=20,i.placeholder=`Name...`,i.value=n??``,i.style.cssText=`flex:1;background:rgba(0,0,0,0.4);border:1px solid #06b6d444;border-radius:2px;color:#e2e8f0;font-family:"Courier New",monospace;font-size:11px;padding:4px 6px;outline:none;box-sizing:border-box;`;let a=document.createElement(`button`);a.textContent=`OK`,a.style.cssText=`background:none;border:1px solid #06b6d488;color:#06b6d4;cursor:pointer;font-family:"Courier New",monospace;font-size:10px;padding:4px 10px;border-radius:2px;`,a.addEventListener(`click`,()=>{let n=i.value.trim();if(n&&LC){LC(t,n),RC.set(t,n),e.innerHTML=``;let r=document.createElement(`span`);r.style.cssText=`color:#06b6d4;font-size:11px;`,r.textContent=`Named: "${n}"`,e.appendChild(r)}}),i.addEventListener(`keydown`,e=>{e.key===`Enter`&&a.click(),e.stopPropagation()}),i.addEventListener(`keyup`,e=>e.stopPropagation()),r.appendChild(i),r.appendChild(a),e.appendChild(r),requestAnimationFrame(()=>i.focus())}function XC(){let e=document.createElement(`div`);e.style.cssText=`display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid rgba(180,140,60,0.2);`;let t=RC.get(IC),n=document.createElement(`span`);n.style.cssText=`color:#b48c3c;font-size:12px;font-weight:bold;`,n.textContent=t?`${t}`:`Asteroid #${IC}`,e.appendChild(n);let r=document.createElement(`button`);return r.textContent=`×`,r.setAttribute(`aria-label`,`Close asteroid panel`),r.style.cssText=`background:none;border:none;color:#666;cursor:pointer;font-size:16px;padding:0;line-height:1;`,r.onclick=()=>{z(`ui.panel_close`),HC()},e.appendChild(r),e}function ZC(e,t,n){let r=document.createElement(`div`);r.style.cssText=`display:flex;justify-content:space-between;margin-bottom:3px;`;let i=document.createElement(`span`);i.style.cssText=`color:#5060a0;`,i.textContent=e;let a=document.createElement(`span`);return a.style.cssText=`color:${n??`#a0c0ff`};`,a.textContent=t,r.appendChild(i),r.appendChild(a),r}function QC(e){switch(e){case`Carbonaceous`:return`#6b7280`;case`Silicate`:return`#a0c0ff`;case`Metallic`:return`#c0c0c0`;case`Exotic`:return`#a855f7`;default:return`#a0c0ff`}}var $C=e({hasManifestoBeenShown:()=>rw,showManifestoModal:()=>iw}),ew=null,tw=null,nw=!1;function rw(){return nw}function iw(e,t){if(ew)return;nw=!0;let n=!!t;ew=document.createElement(`div`),ew.style.cssText=`
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
  `,document.body.appendChild(ew),requestAnimationFrame(()=>{ew&&(ew.style.opacity=`1`)});let r=document.createElement(`div`);r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-label`,`Fleet Manifesto`),r.setAttribute(`aria-modal`,`true`),r.setAttribute(`tabindex`,`-1`),r.style.cssText=`
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
  `,a=`<div style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">`;for(let e of Sm)a+=`
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
        <em>"${ow(e.text)}"</em>
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
      ">${t?ow(t):``}</textarea>
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
      </div>`;r.innerHTML=i+a+o+s,ew.appendChild(r),tw=Ep(r),r.querySelectorAll(`[data-manifesto-preset]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.manifestoPreset,r=Sm.find(e=>e.id===n);r&&(e({presetId:n,text:r.text}),aw())})});let c=r.querySelector(`#manifesto-freetext`),l=r.querySelector(`#manifesto-char-count`),u=r.querySelector(`#manifesto-submit-freetext`),d=()=>{l.textContent=`${c.value.length}/140`};c.addEventListener(`input`,d),d(),u.addEventListener(`click`,()=>{let t=c.value.trim();t.length>0?(e({presetId:null,text:t}),aw()):(c.style.outline=`2px solid #ef4444`,c.focus(),setTimeout(()=>{c.style.outline=``},1500))}),r.querySelector(`#manifesto-skip`)?.addEventListener(`click`,aw),r.querySelector(`#manifesto-cancel`)?.addEventListener(`click`,aw)}function aw(){if(!ew)return;tw?.(),tw=null,ew.style.opacity=`0`;let e=ew;setTimeout(()=>e.remove(),500),ew=null}function ow(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}var sw=!1;function cw(e,t){e.loadAdvisorLazy().then(n=>{e.initAdvisorOnce(n),t(n)}).catch(e=>{console.error(`[culture] failed to load advisor:`,e)})}function lw(e,t,n){t.firstCultureMessage&&(t.firstCultureMessage=!1,xy(n.traits),My(n.fleetManifesto),Ny(n.colonyName,n.playerNamedAsteroids.length),sw=!!(n.colonyName&&n.fleetManifesto),Zx(t=>{e.worker.postMessage({type:`sim:set_fleet_manifesto`,payload:{presetId:t.presetId,text:t.text}})}),zC((t,n)=>{e.worker.postMessage({type:`sim:name_asteroid`,payload:{asteroidEid:t,name:n}})}),Qx(t=>{e.worker.postMessage({type:`sim:set_fleet_color`,payload:{paletteId:t}})}))}function uw(e,t){Kx(),qx(t),CC(t.colonyName),BC(t.playerNamedAsteroids);let n=[...t.namedLocations,...t.playerNamedAsteroids.map(e=>({name:e.name,x:e.x,y:e.y,z:e.z}))];e.namedLocationLabels.setLocations(n),sp(n)}function dw(e,t){let n=t.fleetColorPaletteId??null;e.robotRenderer.setFleetColor(n),e.baseStation.setFleetColor(n);for(let t of e.extraBaseRenderers)t.setFleetColor(n);let r=n?ym(n):null;pe(r?r.accent:null)}function fw(e,t){!t.fleetManifesto&&!rw()&&(t.autonomyScore+t.fleetCohesion+t.anomalyExposure+t.isolationScore>0||t.tick>300)&&iw(n=>{e.worker.postMessage({type:`sim:set_fleet_manifesto`,payload:{presetId:n.presetId,text:n.text}}),!t.colonyName&&!Em()&&setTimeout(()=>{Om(t=>{e.worker.postMessage({type:`sim:set_colony_name`,payload:{name:t}})})},600)}),t.fleetManifesto&&!t.colonyName&&!Em()&&rw()&&t.tick>300&&Om(t=>{e.worker.postMessage({type:`sim:set_colony_name`,payload:{name:t}})})}function pw(e,t){if(t.fleetManifesto){let n=Py(t.fleetManifesto);n&&cw(e,e=>e.panel.addProactiveBroadcast(n));let r=jy(t.fleetManifesto);r&&cw(e,e=>e.panel.addProactiveBroadcast(r)),yy(t.fleetManifesto)}if(t.colonyName){let n=Fy(t.colonyName);n&&cw(e,e=>e.panel.addProactiveBroadcast(n))}if(t.colonyName&&t.fleetManifesto&&!sw&&(sw=!0,lo(`Colony "${t.colonyName}" is established in the Belt. The manifesto reads: "${t.fleetManifesto}" The work begins.`)),t.playerNamedAsteroids.length>0){let t=Iy();t&&cw(e,e=>e.panel.addProactiveBroadcast(t))}}function mw(e,t){let{refs:n,renderers:r,lazy:i}=e;return{"sim:culture_trait_activated":e=>{let t=e.payload.trait,n=xm[t];n&&(M(`[CULTURE] ${n.name} activated — ${n.effectText}. Press U for details.`,n.color),ur(n.color,500),z(`game.research_complete`),Jx(),gc(`first_culture_trait`,`ARIA: Your fleet is developing its own culture. Open the Culture panel (U) to see how their experiences are shaping who they are — and what they can do.`));let r=Ty(t);r&&cw(i,e=>e.panel.addProactiveBroadcast(r)),n&&lo(`[Milestone] Fleet culture trait activated: ${n.name}. ${n.effectText}`)},"sim:culture_state":a=>{let o=a.payload;lw(e,t,o),n.latestCultureState=o,uw(r,o),dw(r,o),wS(o.culturalDistances),r.asteroidRenderer.setPredictedAnomalyIds(o.predictedAnomalyAsteroidIds),fw(e,o),pw(i,o),o.autonomyScore+o.fleetCohesion+o.anomalyExposure+o.isolationScore>0&&gc(`midgame_culture`,`ARIA: Your robots are developing culture. Press U to observe their emerging identity.`)}}}var hw=2;function gw(e,t){let{refs:n,lazy:r}=e;return{"sim:megastructure_state":i=>{let o=i;if(n.latestMegaProjects=o.payload.projects,t.firstMegastructureMessage)t.firstMegastructureMessage=!1,Cy(o.payload.projects);else for(let e of o.payload.projects)if(e.completedStages>0){let t=Ay(e.id,e.completedStages);t&&r.loadAdvisorLazy().then(e=>{r.initAdvisorOnce(e),e.panel.addProactiveBroadcast(t)})}let s=0;if(n.latestRobotBuffer&&n.latestRobotCount>0)for(let e=0;e<n.latestRobotCount;e++)a(n.latestRobotBuffer,e)===C.ENGINEER&&s++;r.getMegaPanel()?.updateMegastructurePanel(n.latestMegaProjects,s,n.latestRefined),ji(o.payload.projects.filter(e=>e.crisisCountdownTicksRemaining!=null&&e.crisisCountdownTicksRemaining>0).map(e=>({structureName:lt[e.id]?.name??e.id,stageName:e.activeStageIndex==null?`Unknown`:lt[e.id]?.stages[e.activeStageIndex]?.name??`Stage ${e.activeStageIndex}`,ticksRemaining:e.crisisCountdownTicksRemaining}))),mm({megastructureCompletedStages:Object.fromEntries(n.latestMegaProjects.map(e=>[e.id,e.completedStages])),techNodeCount:0,totalTechNodes:0,robotCount:n.latestRobotCount},M);{let t=n.latestMegaProjects.find(e=>e.id===`dyson_swarm`);t&&(gc(`lategame_megastructure_unlock`,`ARIA: The Dyson Swarm is now available — humanity's long-term win condition. Press G to manage megastructure construction.`),t.completedStages>=6&&gc(`lategame_dyson_approach`,`ARIA: The swarm is nearing full enclosure. Commander, completing this will broadcast our presence to the cosmos. There is no undoing a Type II energy signature.`),t.completedStages>=hw&&!Nm()&&!n.latestCultureState?.colonyEpithet&&Fm(t=>{e.worker.postMessage({type:`sim:set_colony_epithet`,payload:{epithet:t}})}))}}}}function _w(e){let{refs:t}=e;return{"sim:habitat_state":e=>{let n=e;t.latestHabitatState=n.payload,gv(),_v(n.payload)}}}function vw(){return{"sim:market_state":e=>{let{listings:t}=e.payload;pu(t)}}}function yw(){return{"sim:error":e=>{let t=e,n=Error(t.payload.message);n.name=`SimError`,console.error(`[main] Sim error:`,t.payload.message),bn(n,{tags:{source:`sim:error`,tick:t.payload.tick}}),M(`[ARIA] Sim error at tick ${t.payload.tick} — game loop continuing`,`#ef4444`)},"sim:worker_error":e=>{let t=e.payload,n=Error(t.message);n.name=`SimWorkerError`,t.stack&&(n.stack=t.stack),console.error(`[worker_error] system=${t.system} tick=${t.tick}: ${t.message}`,t.stack??``),bn(n,{tags:{source:`sim:worker_error`,system:t.system,tick:t.tick}}),M(`[ARIA] Worker error in ${t.system} at tick ${t.tick} — game loop continuing`,`#ef4444`)}}}function bw(){return{"sim:asteroid_detail":e=>{let{payload:t}=e;WC(t)}}}function xw(){return{"sim:transient_cluster_spawned":e=>{},"sim:transient_cluster_update":e=>{Di(e.payload.clusters.map(e=>({clusterId:e.clusterId,ticksRemaining:e.ticksRemaining})))},"sim:transient_cluster_expired":e=>{Oi()}}}var Sw=12,Cw=500,ww=3e4,Tw={milestone:`#22c55e`,culture:`#a855f7`,isolation:`#f59e0b`,anomaly:`#06b6d4`,death:`#ef4444`,naming:`#fbbf24`,mourning:`#a78bfa`,groupthink:`#f97316`,directive_drift:`#fb923c`,backlash:`#f43f5e`,dark_forest_echo:`#2dd4bf`,chorus:`#7c3aed`,resonance:`#06ffc8`,soft_autonomy:`#38bdf8`},Ew=null,Dw=null,Ow=null,kw=!1,Aw=[];function jw(){Ew||(Ew=document.createElement(`div`),Ew.style.cssText=`
    position: fixed;
    bottom: 80px;
    left: 12px;
    width: 320px;
    max-height: 280px;
    z-index: 85;
    pointer-events: auto;
    font-family: 'Courier New', monospace;
  `,Ow=document.createElement(`div`),Ow.style.cssText=`
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
  `,Ow.innerHTML=`<span>◈ COMMS</span><span id="comms-toggle">▼</span>`,Ow.addEventListener(`click`,Mw),Ew.appendChild(Ow),Dw=document.createElement(`div`),Dw.style.cssText=`
    background: rgba(4, 6, 14, 0.78);
    border: 1px solid rgba(100, 140, 255, 0.2);
    border-radius: 0 0 4px 4px;
    max-height: 240px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: rgba(100,140,255,0.3) transparent;
  `,Ew.appendChild(Dw),document.body.appendChild(Ew))}function Mw(){kw=!kw,Dw&&(Dw.style.display=kw?`none`:`block`);let e=document.getElementById(`comms-toggle`);e&&(e.textContent=kw?`▶`:`▼`)}function Nw(e,t,n){if(Dw||jw(),!Dw)return;if(kw){kw=!1,Dw.style.display=`block`;let e=document.getElementById(`comms-toggle`);e&&(e.textContent=`▼`)}let r=Tw[n]??`#94a3b8`,i=document.createElement(`div`);i.style.cssText=`
    padding: 5px 8px;
    border-left: 2px solid ${r};
    font-size: 10px;
    line-height: 1.4;
    color: rgba(200, 210, 230, 0.85);
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    border-bottom: 1px solid rgba(40, 50, 80, 0.3);
  `;let a=document.createElement(`span`);a.style.cssText=`color: ${r}; font-weight: bold; font-size: 9px; text-transform: uppercase; letter-spacing: 0.5px;`,a.textContent=`${e}: `;let o=document.createElement(`span`);o.textContent=t.startsWith(e)?t.slice(t.indexOf(`:`)+2):t,i.appendChild(a),i.appendChild(o),Dw.appendChild(i),requestAnimationFrame(()=>{i.style.opacity=`1`,i.style.transform=`translateY(0)`}),Dw.scrollTop=Dw.scrollHeight;let s={robotName:e,message:t,category:n,timestamp:Date.now(),element:i};for(Aw.push(s),setTimeout(()=>Pw(s),ww);Aw.length>Sw;){let e=Aw.shift();e&&e.element.remove()}}function Pw(e){Aw.indexOf(e)!==-1&&(e.element.style.transition=`opacity ${Cw}ms ease`,e.element.style.opacity=`0.3`)}function Fw(){let e=!1;return{"sim:comms_message":t=>{e||=(jw(),!0);let{payload:n}=t;Nw(n.robotName,n.message,n.category)}}}function Iw(e,t){e.loadAdvisorLazy().then(n=>{e.initAdvisorOnce(n),t(n)}).catch(e=>{console.error(`[meridian] failed to load advisor:`,e)})}function Lw(e){return{"sim:meridian_lore_state":e=>{let t=e.payload;Ma(t)},"sim:meridian_commentary":t=>{let n=t.payload;Iw(e.lazy,e=>{e.panel.addProactiveBroadcast(n.text)})},"sim:meridian_unlock":e=>{let t=e.payload;for(let e of t.newArchiveSeries)M(`ARCHIVES UNLOCKED: Series ${e} — ${{A:`Early Operations`,B:`Middle Period`,C:`Final Days`}[e]??`Unknown`}`,`info`);for(let e of t.newArtifacts)M(`HISTORICAL DATABASE: ${{directive_log:`ARIA-7 Directive Log`,board_memo:`CCR Board Memo`}[e]??e} now available`,`info`)}}}function Rw(e){return{"sim:transit_state":t=>{let n=t.payload;e.latestTransitSnapshot=n,Lu(n)}}}function zw(e,t){return{...yw(),...wx(e,t),...Mx(e),...Nx(e),...Px(e),...Fx(e,t),...mw(e,t),...gw(e,t),..._w(e),...vw(),...bw(),...xw(),...Fw(),...Lw(e),...Rw(e.refs)}}var $={FIRST_ASTEROID_CHARTED:`cotb:exploration:first_asteroid_charted`,ANOMALY_DISCOVERED:`cotb:exploration:anomaly_discovered`,FIRST_MINE:`cotb:economy:first_mine`,FIRST_REFINERY:`cotb:economy:first_refinery`,FIRST_ROBOT:`cotb:economy:first_robot`,FIRST_BUILDING:`cotb:engineering:first_building`,FIRST_BASE:`cotb:engineering:first_base`,FIRST_RESEARCH:`cotb:engineering:first_research`,FIRST_FACTION_CONTACT:`cotb:social:first_faction_contact`,FIRST_ALLIANCE:`cotb:social:first_alliance`,CULTURE_TRAIT:`cotb:culture:trait_activated`,MEGASTRUCTURE_STARTED:`cotb:mastery:megastructure_started`,DYSON_COMPLETE:`cotb:mastery:dyson_complete`},Bw={[$.FIRST_ASTEROID_CHARTED]:{title:`First Survey`,description:`Charted your first asteroid in the belt`,rarity:`common`},[$.ANOMALY_DISCOVERED]:{title:`Strange Signals`,description:`Discovered an anomaly among the rocks`,rarity:`uncommon`},[$.FIRST_MINE]:{title:`Breaking Ground`,description:`Mined your first asteroid`,rarity:`common`},[$.FIRST_REFINERY]:{title:`Refined Taste`,description:`Deployed your first refiner robot`,rarity:`uncommon`},[$.FIRST_ROBOT]:{title:`Metal Workforce`,description:`Deployed your first robot`,rarity:`common`},[$.FIRST_BUILDING]:{title:`Foundations`,description:`Constructed your first building`,rarity:`common`},[$.FIRST_BASE]:{title:`Colony Expansion`,description:`Established a secondary base in the belt`,rarity:`rare`},[$.FIRST_RESEARCH]:{title:`Eureka`,description:`Completed your first research`,rarity:`common`},[$.FIRST_FACTION_CONTACT]:{title:`We Are Not Alone`,description:`Made first contact with another faction`,rarity:`uncommon`},[$.FIRST_ALLIANCE]:{title:`Belt Pact`,description:`Formed an alliance with another faction`,rarity:`rare`},[$.CULTURE_TRAIT]:{title:`Cultural Identity`,description:`Your colony developed a cultural trait`,rarity:`uncommon`},[$.MEGASTRUCTURE_STARTED]:{title:`Audacious Engineering`,description:`Began construction of a megastructure`,rarity:`epic`},[$.DYSON_COMPLETE]:{title:`Stellar Architects`,description:`Completed the Dyson Swarm — a star harnessed`,rarity:`legendary`}};function Vw(e){let t={sawFactionContact:!1,sawAlliance:!1,sawMegastructure:!1,sawAsteroidCharted:!1};return{handlers:{"sim:building_built":t=>{let n=t;n.payload.success&&e.unlock($.FIRST_BUILDING,{buildingType:n.payload.buildingType})},"sim:base_built":t=>{t.payload.ok&&e.unlock($.FIRST_BASE)},"sim:robot_produced":t=>{let n=t;e.unlock($.FIRST_ROBOT),n.payload.robotType===C.MINER&&e.unlock($.FIRST_MINE),n.payload.robotType===C.REFINER&&e.unlock($.FIRST_REFINERY)},"sim:tech_state":t=>{let n=t;n.payload.justUnlocked&&e.unlock($.FIRST_RESEARCH,{nodeId:n.payload.justUnlocked})},"sim:faction_state":n=>{let r=n;if(!(!r.payload.factions||r.payload.factions.length===0)&&(t.sawFactionContact||r.payload.factions.some(e=>e.disposition<-20||e.disposition>20)&&(t.sawFactionContact=!0,e.unlock($.FIRST_FACTION_CONTACT)),!t.sawAlliance)){let n=r.payload.factions.find(e=>e.disposition>60);n&&(t.sawAlliance=!0,e.unlock($.FIRST_ALLIANCE,{factionName:n.name}))}},"sim:culture_trait_activated":t=>{e.unlock($.CULTURE_TRAIT)},"sim:megastructure_state":n=>{if(t.sawMegastructure)return;let r=n.payload;r.projects&&r.projects.some(e=>e.completedStages>0)&&(t.sawMegastructure=!0,e.unlock($.MEGASTRUCTURE_STARTED))},"sim:event":n=>{let r=n;r.payload.kind===`anomaly_discovered`&&(t.sawAsteroidCharted||(t.sawAsteroidCharted=!0,e.unlock($.FIRST_ASTEROID_CHARTED,{asteroidEid:r.payload.asteroidEid})),e.unlock($.ANOMALY_DISCOVERED,{anomalyType:r.payload.anomalyType,asteroidEid:r.payload.asteroidEid}))},"sim:narrative_event":t=>{t.payload.endScreenStats&&e.unlock($.DYSON_COMPLETE)}},state:t}}var Hw={0:`Robot Factory`,1:`Defense Turret`,2:`Comm Relay`};function Uw(){return{"sim:building_built":e=>{let{payload:t}=e;t.success&&Fo(`building`,`${Hw[t.buildingType]??`Building #${t.buildingType}`} constructed`,0)},"sim:robot_produced":e=>{let{payload:t}=e;Fo(`production`,`${t.robotTypeName} produced`,0)},"sim:tech_state":e=>{let{payload:t}=e;t.justUnlocked&&Fo(`research`,`Research complete: ${t.justUnlocked}`,t.tick)},"sim:event":e=>{let{payload:t}=e;t.kind===`anomaly_discovered`&&Fo(`anomaly`,`Anomaly discovered on asteroid #${t.asteroidEid}`,t.tick)},"sim:lore_fragment":e=>{let{payload:t}=e;t.revelation&&Fo(`anomaly`,`Anomaly chain revelation unlocked`,t.tick)},"sim:narrative_event":e=>{let{payload:t}=e;t.event.type,Fo(t.event.type===`threat`?`threat`:`general`,t.event.title,t.tick)},"sim:culture_trait_activated":e=>{let{payload:t}=e;Fo(`general`,`Culture trait activated: ${t.trait}`,t.tick)},"sim:trade_window_event":e=>{let{payload:t}=e;t.type===`opened`?Fo(`faction`,`Trade window opened with ${t.factionName}`,t.tick):t.type===`expired`&&Fo(`faction`,`Trade window with ${t.factionName} expired`,t.tick)},"sim:transient_cluster_spawned":e=>{let{payload:t}=e;Fo(`resource`,`Rich asteroid cluster appeared (${t.asteroidCount} asteroids)`,t.tick)},"sim:transient_cluster_expired":e=>{let{payload:t}=e;t.capturingFactionName?Fo(`faction`,`Cluster captured by ${t.capturingFactionName}`,t.tick):Fo(`resource`,`Transient cluster dispersed`,t.tick)},"sim:base_built":e=>{let{payload:t}=e;t.ok&&Fo(`building`,`New base station established`,0)},"sim:research_dead_end":e=>{let{payload:t}=e;Fo(`research`,`Research dead end: ${t.nodeId}`,0)}}}function Ww(e,t,n,r,i,a){F_({onMarkRead:t=>{e.postMessage({type:`sim:inbox_mark_read`,payload:{messageId:t}})},onDeleteMessage:t=>{e.postMessage({type:`sim:inbox_delete`,payload:{messageId:t}})},onProcessInbox:()=>{t.latestInboxSnapshot&&(R_(!0),Lv(t.latestInboxSnapshot).then(t=>{L_(t),t.triageResults.length>0&&e.postMessage({type:`sim:inbox_triage_result`,payload:{results:t.triageResults}})}).catch(e=>{console.error(`[main] processInbox failed:`,e),bn(e,{tags:{source:`processInbox`}})}))},onReplacementChoice:(t,n)=>{e.postMessage({type:`sim:replacement_choice`,payload:{legacyEid:t,choice:n}})},onDarkForestChoice:t=>{e.postMessage({type:`sim:dark_forest_choice`,payload:{choice:t}})},onHabitatDemandResponse:(t,n)=>{e.postMessage({type:`sim:habitat_demand_response`,payload:{demandId:t,action:n}})},onDispositionEventResponse:(t,n,r)=>{e.postMessage({type:`sim:disposition_event_response`,payload:{factionId:t,eventType:n,response:r}})},onThreatResponse:(t,n)=>{e.postMessage({type:`sim:threat_response`,payload:{threatId:t,response:n}})}}),hv(t=>{e.postMessage(t)});let o=Hv(),s=zw({worker:e,refs:t,renderers:n,lazy:r,cbs:i},o),c={};if(a){let{handlers:e}=Vw(a);c=e}let l=Uw();e.onerror=e=>{console.error(`[main] Worker error:`,e),pr()},e.onmessage=e=>{let t=s[e.data.type],n=c[e.data.type],r=l[e.data.type];if(!t&&!n&&!r){console.warn(`[main] No handler registered for worker message type: ${e.data.type}`);return}if(t)try{t(e.data)}catch(t){console.error(`[main] Message handler threw for type`,e.data.type,t),bn(t,{tags:{source:`message_handler`,messageType:e.data.type}})}if(n)try{n(e.data)}catch(t){console.error(`[main] Achievement handler threw for type`,e.data.type,t),bn(t,{tags:{source:`achievement_handler`,messageType:e.data.type}})}if(r)try{r(e.data)}catch(t){console.error(`[main] Event log handler threw for type`,e.data.type,t),bn(t,{tags:{source:`event_log_handler`,messageType:e.data.type}})}}}function Gw(e,t,n){return t&&e===`s`?`save`:e===`l`||e===`L`?`toggleEventLog`:e===`d`||e===`D`?`toggleDashboard`:e===`t`||e===`T`?`toggleTechTree`:e===`h`||e===`H`?`toggleKeybindingHelp`:e===`f`||e===`F`?`toggleFactionPanel`:e===`g`||e===`G`?`toggleMegastructurePanel`:e===`m`||e===`M`?`toggleAudioMute`:e===`a`||e===`A`?`toggleAdvisorPanel`:e===`c`||e===`C`?`toggleBuildPanel`:e===`v`||e===`V`?`toggleBuildingsPanel`:e===`i`||e===`I`?`toggleInboxPanel`:e===`u`||e===`U`?`toggleCulturePanel`:e===`k`||e===`K`?`toggleHabitatPanel`:e===`j`||e===`J`?`toggleCodex`:e===`p`||e===`P`?`toggleArchivesPanel`:e===`w`||e===`W`?`toggleMaterialPriorityPanel`:e===`n`||e===`N`?`toggleCommandersLog`:e===`y`||e===`Y`?`toggleBlueprintPanel`:e===`o`||e===`O`?`toggleSystemMap`:e===`e`||e===`E`?`toggleGameEventLog`:e===`Home`?`snapToBase`:e===`Tab`&&!t?n?`followPrevRobot`:`followNextRobot`:e===`.`||e===`>`?`speedUp`:e===`,`||e===`<`?`speedDown`:e===`1`?`setSpeed1`:e===`2`?`setSpeed2`:e===`3`?`setSpeed4`:e===`Escape`?`escape`:null}function Kw(e,t,n,r,i,a){let{camera:o,robotRenderer:s,cameraRig:c,placementNdc:l,placementPlane:u,placementTarget:d,placementGhostMesh:f}=r;function p(e){n.followedRobotEid=e,rf(e),Ni(e,()=>m())}function m(){n.followedRobotEid=null,c.setFollowTarget(null),rf(null),Pi()}let h=Date.now(),g=!1;function _(){h=Date.now()}function v(){if(g)return;g=!0;let e=()=>{Date.now()-h>=15e3?gc(`idle_techtree`,`Press T to open Tech Tree`):setTimeout(e,5e3)};setTimeout(e,15e3)}window.addEventListener(`keydown`,_,{capture:!0}),window.addEventListener(`wheel`,_,{capture:!0,passive:!0}),window.addEventListener(`mousedown`,_,{capture:!0}),window.addEventListener(`touchstart`,_,{capture:!0,passive:!0});let y=()=>{gc(`first_scroll`,`Scroll to zoom out and see the asteroid field`),window.removeEventListener(`wheel`,y)};window.addEventListener(`wheel`,y,{passive:!0});let ee=!1;async function x(){if(ee)return;ee=!0,await R.init(),R.stopProceduralMusic();let e=R.getAudioContext(),t=R.getMusicGain();e&&t&&Kp.init(e,t)}let S=new We,C=new we;function w(t,r){let i=e.getBoundingClientRect();C.x=(t-i.left)/i.width*2-1,C.y=-((r-i.top)/i.height)*2+1,S.setFromCamera(C,o);for(let[e,n]of s.getMeshes()){if(n.count===0)continue;let i=S.intersectObject(n);if(i.length>0&&i[0].instanceId!==void 0){let n=s.getInstanceEid(e,i[0].instanceId);if(n>=0)return z(`ui.ship_highlight`),p(n),ef(n,t,r),!0}}return n.followedRobotEid!==null&&(m(),M(`Follow mode off`,`#94a3b8`)),!1}function T(t,r){if(!n.latestAsteroidBuffer||n.latestAsteroidCount===0)return null;let i=e.getBoundingClientRect();C.x=(t-i.left)/i.width*2-1,C.y=-((r-i.top)/i.height)*2+1,S.setFromCamera(C,o);let a=S.ray,s=-1,c=1/0,l=0,u=0,d=0,f=n.latestAsteroidBuffer;for(let e=0;e<n.latestAsteroidCount;e++){let t=e*11,n=f[t+1],r=f[t+2],i=f[t+3],o=f[t+4],p=n-a.origin.x,m=r-a.origin.y,h=i-a.origin.z,g=p*a.direction.x+m*a.direction.y+h*a.direction.z;if(g<0)continue;let _=a.origin.x+g*a.direction.x-n,v=a.origin.y+g*a.direction.y-r,y=a.origin.z+g*a.direction.z-i,b=_*_+v*v+y*y,ee=Math.max(o*1.5,8);b<ee*ee&&g<c&&(c=g,s=f[t+0],l=n,u=r,d=i)}return s>=0?{eid:s,x:l,y:u,z:d}:null}function te(t){n.targetingRobotEid=t,n.isTargetingMode=!0,e.style.cursor=`crosshair`,M(`Click an asteroid to mine`,`#f59e0b`)}function ne(){n.targetingRobotEid=null,n.isTargetingMode=!1,e.style.cursor=``}function re(t){n.exploreRobotEid=t,n.isExploreMode=!0,e.style.cursor=`crosshair`,M(`Click a location to explore`,`#a855f7`)}function ie(){n.exploreRobotEid=null,n.isExploreMode=!1,e.style.cursor=``}function ae(t,n){let r=e.getBoundingClientRect();return l.x=(t-r.left)/r.width*2-1,l.y=-((n-r.top)/r.height)*2+1,S.setFromCamera(l,o),S.ray.intersectPlane(u,d)?d.clone():null}window.addEventListener(`keydown`,e=>{x();let r=document.activeElement;if(!(r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement))switch(Gw(e.key,e.ctrlKey,e.shiftKey)){case`save`:e.preventDefault(),a.requestSave(0);break;case`toggleEventLog`:iy();break;case`toggleGameEventLog`:No();break;case`toggleDashboard`:i.loadDashboard().then(e=>{i.initDashboardOnce(e),e.toggleDashboard()}).catch(e=>{console.error(`[ui] Failed to load dashboard panel:`,e),M(`Failed to load panel — try again`,`#ef4444`)}),Kr(`resources`);break;case`toggleTechTree`:rs(),Kr(`research`);break;case`toggleKeybindingHelp`:jp();break;case`toggleFactionPanel`:i.loadFactionPanel().then(e=>{i.initFactionOnce(e),e.toggleFactionPanel()}).catch(e=>{console.error(`[ui] Failed to load faction panel:`,e),M(`Failed to load panel — try again`,`#ef4444`)});break;case`toggleMegastructurePanel`:i.loadMegaPanel().then(e=>{i.initMegaOnce(e),e.toggleMegastructurePanel()}).catch(e=>{console.error(`[ui] Failed to load megastructure panel:`,e),M(`Failed to load panel — try again`,`#ef4444`)});break;case`toggleAudioMute`:M(R.toggleMute()?`🔇 Audio muted`:`🔊 Audio enabled`,`#94a3b8`);break;case`toggleAdvisorPanel`:i.loadAdvisorLazy().then(e=>{i.initAdvisorOnce(e),e.panel.toggleAdvisorPanel()}).catch(e=>{console.error(`[ui] Failed to load advisor panel:`,e),M(`Failed to load panel — try again`,`#ef4444`)});break;case`toggleBuildPanel`:Ic(),Kr(`factory`);break;case`toggleBuildingsPanel`:cl(),Kr(`buildings`);break;case`toggleInboxPanel`:z_();break;case`toggleCulturePanel`:Yx();break;case`toggleHabitatPanel`:vv();break;case`toggleCodex`:Ea();break;case`toggleArchivesPanel`:Na();break;case`toggleMaterialPriorityPanel`:Vs();break;case`toggleBlueprintPanel`:ec();break;case`toggleSystemMap`:Fu();break;case`toggleCommandersLog`:oo();break;case`snapToBase`:e.preventDefault(),a.snapCameraToBase();break;case`followNextRobot`:if(e.preventDefault(),n.latestRobotBuffer&&n.latestRobotCount>0){let e=0;if(n.followedRobotEid!==null){for(let t=0;t<n.latestRobotCount;t++)if(b(n.latestRobotBuffer,t)===n.followedRobotEid){e=(t+1)%n.latestRobotCount;break}}p(b(n.latestRobotBuffer,e))}break;case`followPrevRobot`:if(e.preventDefault(),n.latestRobotBuffer&&n.latestRobotCount>0){let e=n.latestRobotCount-1;if(n.followedRobotEid!==null){for(let t=0;t<n.latestRobotCount;t++)if(b(n.latestRobotBuffer,t)===n.followedRobotEid){e=(t-1+n.latestRobotCount)%n.latestRobotCount;break}}p(b(n.latestRobotBuffer,e))}break;case`speedUp`:Si();break;case`speedDown`:Ci();break;case`setSpeed1`:xi(1);break;case`setSpeed2`:xi(2);break;case`setSpeed4`:xi(4);break;case`escape`:if(Mp(),Xx(),yv(),HC(),Hs(),tc(),so(),Po(),Iu(),i.getFactionPanel()?.hideFactionPanel(),i.getMegaPanel()?.hideMegastructurePanel(),Pa(),n.isTargetingMode){ne(),M(`Targeting cancelled`,`#94a3b8`);return}if(n.isExploreMode){ie(),M(`Explore cancelled`,`#94a3b8`);return}if(n.isPlacingBase){a.exitBasePlacementMode(),M(`Outpost placement cancelled`,`#94a3b8`);return}if(n.followedRobotEid!==null){m(),M(`Follow mode off`,`#94a3b8`);return}Ld()?(zd(),t.postMessage({type:`sim:resume`})):(Rd(),t.postMessage({type:`sim:pause`}));break}}),e.addEventListener(`click`,()=>void x(),{once:!0}),document.addEventListener(`pointerdown`,()=>void x(),{once:!0}),e.addEventListener(`mousemove`,e=>{if(!n.isPlacingBase)return;let t=ae(e.clientX,e.clientY);t&&f.position.set(t.x,.5,t.z)});let oe=0,se=0;e.addEventListener(`mousedown`,e=>{oe=e.clientX,se=e.clientY}),e.addEventListener(`click`,e=>{if(Math.abs(e.clientX-oe)>5||Math.abs(e.clientY-se)>5||c.wasDragPanning()||e.button!==0)return;if(n.isPlacingBase){let n=ae(e.clientX,e.clientY);n&&t.postMessage({type:`sim:build_base`,payload:{x:n.x,y:0,z:n.z}}),a.exitBasePlacementMode();return}if(n.isTargetingMode){let r=T(e.clientX,e.clientY);r?(t.postMessage({type:`sim:add_task`,payload:{taskType:cs.MINE,targetEid:r.eid,targetX:r.x,targetY:r.y,targetZ:r.z,priority:10,robotEid:n.targetingRobotEid??void 0}}),z(`ui.button_press`),M(`Mining task assigned`,`#4ade80`),n.playerTargetAsteroids.includes(r.eid)||n.playerTargetAsteroids.push(r.eid)):M(`No asteroid found — try again`,`#94a3b8`),ne(),e.stopPropagation();return}if(n.isExploreMode){let r=ae(e.clientX,e.clientY);r?(t.postMessage({type:`sim:add_task`,payload:{taskType:cs.EXPLORE,targetEid:-1,targetX:r.x,targetY:0,targetZ:r.z,priority:10,robotEid:n.exploreRobotEid??void 0}}),z(`ui.button_press`),M(`Explore task assigned`,`#a855f7`)):M(`Invalid location — try again`,`#94a3b8`),ie(),e.stopPropagation();return}if(w(e.clientX,e.clientY)){e.stopPropagation();return}let r=T(e.clientX,e.clientY);if(r){VC(r.eid,e.clientX,e.clientY),t.postMessage({type:`sim:query_asteroid`,payload:{eid:r.eid}}),e.stopPropagation();return}UC()&&HC()}),e.addEventListener(`contextmenu`,e=>{if(n.isTargetingMode){e.preventDefault(),ne(),M(`Targeting cancelled`,`#94a3b8`);return}if(n.isExploreMode){e.preventDefault(),ie(),M(`Explore cancelled`,`#94a3b8`);return}n.isPlacingBase&&(e.preventDefault(),a.exitBasePlacementMode(),M(`Outpost placement cancelled`,`#94a3b8`))});let ce=0,E=0;return e.addEventListener(`touchstart`,e=>{e.touches.length===1&&(ce=e.touches[0].clientX,E=e.touches[0].clientY)}),e.addEventListener(`touchend`,e=>{if(x(),e.changedTouches.length===1){let t=e.changedTouches[0].clientX-ce,n=e.changedTouches[0].clientY-E;Math.abs(t)<10&&Math.abs(n)<10&&w(e.changedTouches[0].clientX,e.changedTouches[0].clientY)&&e.preventDefault()}}),{startFollow:p,stopFollow:m,scheduleIdleHint:v,enterTargetingMode:te,enterExploreMode:re}}var qw=`cotb.supportPrompt.dismissedAt`,Jw=`cotb.supportPrompt.shown`,Yw=10080*60*1e3,Xw=600*1e3,Zw=5,Qw=`https://pay.multiversestudios.xyz/create-checkout-session`,$w=!1,eT=0,tT=0,nT=null,rT=null,iT=null;function aT(){if(sessionStorage.getItem(Jw))return!0;let e=localStorage.getItem(qw);return!!(e&&Date.now()-parseInt(e,10)<Yw)}function oT(){rT!==null&&(clearInterval(rT),rT=null)}function sT(){document.hidden?nT!==null&&(tT+=Date.now()-nT,nT=null):nT=Date.now()}function cT(){if(localStorage.setItem(qw,String(Date.now())),iT){iT.style.opacity=`0`,iT.style.transform=`translateX(-50%) translateY(16px)`;let e=iT;setTimeout(()=>e.remove(),400),iT=null}}function lT(){try{window.umami?.track(`ingame-support-prompt-shown`)}catch{}}function uT(){let e=document.createElement(`div`);e.id=`support-prompt`,e.style.cssText=`
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
         rel="noopener noreferrer"
         style="color: #22d3ee; text-decoration: none; cursor: pointer;"
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
  `,document.body.appendChild(e),iT=e;let t=e.querySelector(`#support-cta`);t.addEventListener(`click`,()=>{t.textContent=`Connecting...`,fetch(Qw,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({game:`cotb`,amount:1500})}).then(e=>e.ok?e.json():e.text().then(t=>(console.error(`PWYC: checkout session failed`,{status:e.status,response:t,game:`cotb`}),Promise.reject(Error(`HTTP ${e.status}`))))).then(e=>{window.open(e.url,`_blank`),t.textContent=`pay what you can`}).catch(e=>{t.textContent=`Error: ${e instanceof Error?e.message:`unknown error`}`})});let n=e.querySelector(`#support-dismiss`);n.addEventListener(`mouseenter`,()=>{n.style.color=`rgba(203,213,225,0.7)`}),n.addEventListener(`mouseleave`,()=>{n.style.color=`rgba(203,213,225,0.35)`}),n.addEventListener(`click`,cT),requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.style.opacity=`1`,e.style.transform=`translateX(-50%) translateY(0)`})})}function dT(){$w||aT()||($w=!0,sessionStorage.setItem(Jw,`1`),oT(),document.removeEventListener(`visibilitychange`,sT),uT(),lT())}function fT(){aT()||(nT=document.hidden?null:Date.now(),rT=setInterval(()=>{document.hidden||nT===null||(tT+=Date.now()-nT,nT=Date.now(),tT>=Xw&&dT())},5e3),document.addEventListener(`visibilitychange`,sT))}function pT(){$w||aT()||(eT++,eT>=Zw&&dT())}var mT=`cotb_unlocked_achievements_v1`,hT=`cotb_player_id_v1`;function gT(){try{let e=localStorage.getItem(mT);if(e)return new Set(JSON.parse(e))}catch{}return new Set}function _T(e){try{localStorage.setItem(mT,JSON.stringify([...e]))}catch{}}function vT(){let e=localStorage.getItem(hT);return e||(e=`cotb-${crypto.randomUUID()}`,localStorage.setItem(hT,e)),e}var yT=class{serverUrl;playerId;unlocked;listeners=[];constructor(e=``){this.serverUrl=e,this.playerId=vT(),this.unlocked=gT()}onUnlock(e){this.listeners.push(e)}async unlock(e,t={}){if(!this.unlocked.has(e)){this.unlocked.add(e),_T(this.unlocked);for(let t of this.listeners)try{t(e)}catch(e){console.warn(`[AchievementService] listener error:`,e)}await this._report(e,t)}}isUnlocked(e){return this.unlocked.has(e)}async _report(e,t){try{let n=await fetch(`${this.serverUrl}/api/achievements/unlock`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({achievementId:e,playerId:this.playerId,gameContext:{...t,gameOrigin:`cotb`}})});n.ok||console.warn(`[AchievementService] unlock failed (${n.status}) for ${e}`)}catch(e){console.warn(`[AchievementService] network error:`,e)}}},bT={common:`rgba(160, 165, 190, 0.9)`,uncommon:`rgba(61, 252, 224, 0.9)`,rare:`rgba(100, 160, 255, 0.9)`,epic:`rgba(180, 100, 255, 0.9)`,legendary:`rgba(255, 200, 60, 0.9)`},xT=4500,ST=600,CT=!1;function wT(){if(CT)return;CT=!0;let e=document.createElement(`style`);e.textContent=`
    .ach-notif {
      position: fixed;
      bottom: 80px;
      right: 20px;
      z-index: 9999;
      pointer-events: none;
      opacity: 0;
      transform: translateX(40px);
      transition: opacity ${ST}ms ease, transform ${ST}ms ease;
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
  `,document.head.appendChild(e)}var TT=class{queue=[];showing=!1;show(e){wT(),this.queue.push(e),this.showing||this._next()}_next(){let e=this.queue.shift();if(!e){this.showing=!1;return}this.showing=!0;let t=Bw[e]??{title:`Achievement Unlocked`,description:``,rarity:`common`},n=bT[t.rarity]??bT.common,r=bT[t.rarity]??bT.common,i=document.createElement(`div`);i.className=`ach-notif`,i.innerHTML=`
      <div class="ach-notif__inner" style="border-left-color:${n}">
        <div class="ach-notif__header">
          <span class="ach-notif__label">Achievement Unlocked</span>
          <span class="ach-notif__rarity" style="color:${r}">${t.rarity.toUpperCase()}</span>
        </div>
        <div class="ach-notif__title">${t.title}</div>
        <div class="ach-notif__desc">${t.description}</div>
      </div>
    `,document.body.appendChild(i),requestAnimationFrame(()=>i.classList.add(`ach-notif--visible`)),setTimeout(()=>{i.classList.remove(`ach-notif--visible`),setTimeout(()=>{i.remove(),this._next()},ST)},xT)}};function ET(){return Math.floor(Math.random()*1e6)}var DT=42;async function OT(){if(window.__unsupported)return;let e=document.getElementById(`game-canvas`);if(!e){console.error(`Canvas element not found`);return}vf(0);let t=await h_(e),{camera:n,composer:r,bloomPass:i,cameraRig:a,baseX:o,baseZ:c,asteroidRenderer:l,robotRenderer:u,threatRenderer:d,skybox:p,beltRegionRenderer:m,particles:h,miningParticles:_,depletionParticles:v,thrusterParticles:ee,baseStation:x,extraBaseRenderers:S,buildingRenderer:C,megastructureRenderer:w,namedLocationLabels:T,claimMarkerRenderer:te,territoryZoneRenderer:ne,followRingMesh:re,followRingMat:ie,placementGhostMesh:ae,placementGhostMat:oe,solarSystemRenderer:se}=t;vf(1);let ce=Math.log(3e3),E=zm();function le(){a.setPivot(o,0,c),a.setZoom(ce),E.followedRobotEid!==null&&O.stopFollow()}function ue(){E.isPlacingBase=!0,M(`Click to place outpost — Esc or right-click to cancel`,`#22d3ee`),oe.opacity=.6,e.style.cursor=`crosshair`}function de(){E.isPlacingBase=!1,oe.opacity=0,e.style.cursor=``}let fe=null,pe=null,me=!1,he=null,ge=!1,_e=null,ve=!1,ye=null,be=null,xe=!1;function Se(){return pe||=zx(()=>Promise.resolve().then(()=>tC).then(e=>(fe=e,e)),void 0).catch(e=>(pe=null,M(`[ARIA] Dashboard failed to load — press D to retry`,`#ef4444`),console.error(`[main] Failed to load dashboard:`,e),Promise.reject(e))),pe}function Ce(e){me||(me=!0,e.initDashboard((t,n,r)=>{a.panTo(t,n,r,800),E.followedRobotEid!==null&&O.stopFollow(),e.toggleDashboard()},(t,n)=>{a.setPivot(t,0,n),e.toggleDashboard()}))}function we(){return zx(()=>Promise.resolve().then(()=>gS).then(e=>(he=e,e)),void 0).catch(e=>(M(`[ARIA] Faction panel failed to load — try again`,`#ef4444`),console.error(`[main] Failed to load faction panel:`,e),Promise.reject(e)))}function Te(e){ge||(ge=!0,e.initFactionPanel((e,t)=>{D.postMessage({type:`sim:faction_diplomacy`,payload:{factionId:e,action:t}})}))}function Ee(){return zx(()=>import(`./megastructurePanel-DTzeda2p.js`).then(e=>(_e=e,e)),__vite__mapDeps([0,1,2])).catch(e=>(M(`[ARIA] Megastructure panel failed to load — try again`,`#ef4444`),console.error(`[main] Failed to load megastructure panel:`,e),Promise.reject(e)))}function De(e){ve||(ve=!0,e.initMegastructurePanel({onStartStage:(e,t)=>D.postMessage({type:`sim:start_megastructure_stage`,payload:{id:e,stageIndex:t}}),onResolveCrisis:e=>D.postMessage({type:`sim:resolve_megastructure_crisis`,payload:{id:e}}),onSkipCrisis:e=>D.postMessage({type:`sim:skip_megastructure_crisis`,payload:{id:e}})}))}function Oe(){return be||=Promise.all([zx(()=>import(`./advisorPanel-Cc61STtq.js`),__vite__mapDeps([3,4,5,6,7,8,1,9,10])),zx(()=>import(`./advisorService-BGg36KXp.js`).then(e=>e.t),__vite__mapDeps([5,6,7,8,4,1])),zx(()=>import(`./gameState-Diu_0gwj.js`).then(e=>e.n),__vite__mapDeps([8,6,4,1])),zx(()=>import(`./commanderService-Boz7Ti0e.js`),__vite__mapDeps([11,4,7,8,6,1])),zx(()=>Promise.resolve().then(()=>Nv),void 0),zx(()=>import(`./commanderDelegate-pxwTHovR.js`),__vite__mapDeps([12,4,13,11,7,8,6,1])),zx(()=>Promise.resolve().then(()=>ub),void 0)]).then(([e,t,n,r,i,a,o])=>(ye={panel:e,service:t,gameState:n,commander:r,inbox:i,delegate:a,autoAnalysis:o},ye)).catch(e=>(be=null,M(`[ARIA] Advisor panel failed to load — try again`,`#ef4444`),console.error(`[main] Failed to load advisor:`,e),Promise.reject(e))),be}function ke(e){return e.gameState.buildGameState(q,E.latestRobotBuffer,E.latestRobotCount,E.latestAsteroidBuffer,E.latestAsteroidCount,Lm,E.latestTick,E.latestBuildings,{refined:E.latestRefined,techState:E.latestTechState,factoryQueueLength:E.latestFactoryQueueLength,robotCap:E.latestRobotCap,megastructureProjects:E.latestMegaProjects,factionStandings:E.latestFactionSnapshots.map(e=>({name:e.name,disposition:e.disposition,label:e.dispositionLabel,trend:e.dispositionDelta>0?`improving`:e.dispositionDelta<0?`worsening`:`stable`}))})}function Ae(e){if(xe)return;xe=!0;let{panel:t,service:n,commander:r,inbox:i,delegate:a,autoAnalysis:o}=e;t.initAdvisorPanel(),qr(`aria`,()=>t.toggleAdvisorPanel()),t.setCurrentProvider(n.getProvider()),t.setApiKeyStatus(n.hasApiKey()),t.onProviderSet(e=>{n.setProvider(e),t.setCurrentProvider(e)}),t.onApiKeySet(e=>{n.saveApiKey(e),t.setApiKeyStatus(n.hasApiKey()),t.removeOfflineBanner(),t.removeAuthErrorBanner(),r.setCommanderApiKey(e),i.setInboxApiKey(e)}),r.setCommanderWorkerSend(e=>D.postMessage(e)),r.setCommanderApiKey(n.getApiKey()),i.setInboxApiKey(n.getApiKey()),a.setDelegationWorkerSend(e=>D.postMessage(e)),a.setDelegationBuildState(()=>ke(e)),o.setAutoAnalysisWorkerSend(e=>D.postMessage(e)),o.setAutoAnalysisBuildState(()=>ke(e)),o.setAutoAnalysisIsPaused(()=>Wn()),o.setAutoAnalysisInboxSnapshot(()=>E.latestInboxSnapshot),o.startAutoAnalysis(),a.onPendingActionsChange(e=>{t.updatePendingActions(e)}),t.onCommanderToggle(e=>{r.setCommanderEnabled(e)}),t.onDelegationToggle(e=>{a.setDelegationEnabled(e)}),t.onPendingActionApprove(e=>a.approveAction(e)),t.onPendingActionReject(e=>a.rejectAction(e)),t.onPendingActionApproveAll(()=>a.approveAllActions()),t.onPendingActionRejectAll(()=>a.rejectAllActions()),t.onTradeOfferResponse((e,t)=>{D.postMessage({type:`sim:trade_window_response`,payload:{factionId:e,response:t}})});function s(){n.isAuthError()&&(t.setApiKeyStatus(n.hasApiKey(),!0),t.showAuthErrorBanner())}t.onPlayerSubmit(async i=>{if(Mr(),pT(),o.recordPlayerInteraction(E.latestTick??0),a.isCapturing()){t.addAdvisorMessage(`Auto-delegation in progress — please wait a moment.`);return}t.setLoading(!0),cx(!0);let c=ke(e);if(r.isCommanderEnabled()){let e=await r.askCommander(i,c),n=e.explanation;e.actions.length>0&&(n+=`

**Actions taken:**
`+e.actions.map(e=>`• ${e}`).join(`
`)),e.error&&(n+=`\n\n⚠ ${e.error}`),t.addAdvisorMessage(n)}else{let e=await n.askAdvisor(i,c);t.addAdvisorMessage(e)}s(),t.setLoading(!1),cx(!1)})}let je={getDashboard:()=>fe,getFactionPanel:()=>he,getMegaPanel:()=>_e,getAdvisor:()=>ye,loadDashboard:Se,initDashboardOnce:Ce,loadFactionPanel:we,initFactionOnce:Te,loadMegaPanel:Ee,initMegaOnce:De,loadAdvisorLazy:Oe,initAdvisorOnce:Ae};function Me(){let e=e=>{`requestIdleCallback`in window?window.requestIdleCallback(e,{timeout:3e3}):setTimeout(e,1e3)};Se().then(Ce).catch(e=>{console.error(`[main] Failed to preload dashboard:`,e)}),e(()=>void we().then(Te).catch(e=>{console.error(`[main] Failed to preload faction panel:`,e)})),e(()=>void Ee().then(De).catch(e=>{console.error(`[main] Failed to preload megastructure panel:`,e)})),e(()=>void Oe().then(Ae).catch(e=>{console.error(`[main] Failed to preload advisor panel:`,e)}))}wf(),$f((e,t)=>a.panTo(e,0,t,800)),ci(le),bi(e=>{E.speedMultiplier=e,D.postMessage({type:`sim:set_speed`,payload:{multiplier:e}})}),Ii(),Ri(),Vi();let Ne,Pe=Qp(e=>{i.strength=e.bloomIntensity,h.setDensity(e.particleDensity),clearInterval(Ne),Ne=setInterval(()=>Le(`auto`),e.autoSaveIntervalMin*6e4)});i.strength=Pe.bloomIntensity,h.setDensity(Pe.particleDensity),Ta(),ja(),ao(),Mo(),vf(2);let D=new Worker(new URL(`/assets/worker-5td839S4.js`,``+import.meta.url),{type:`module`});Xm(e=>D.postMessage(e)),$m(),ts(e=>D.postMessage({type:`sim:start_research`,payload:{nodeId:e}})),gs(e=>D.postMessage(e)),Bs(e=>D.postMessage(e)),$s(e=>D.postMessage(e)),Pc(e=>D.postMessage(e)),ol(e=>D.postMessage(e)),Il(()=>ue(),e=>D.postMessage({type:`sim:upsert_route`,payload:e}),e=>D.postMessage({type:`sim:delete_route`,payload:{id:e}})),fu((e,t,n)=>D.postMessage({type:`sim:market_create_listing`,payload:{resource:e,quantity:t,buyerFactionId:n}}),e=>D.postMessage({type:`sim:market_cancel_listing`,payload:{listingId:e}})),Pu(e=>{M(`Dispatch to ${e} — use cargo dispatch to send resources`,`#22d3ee`)}),Ur()&&Wr();let O=Kw(e,D,E,t,je,{snapCameraToBase:le,enterBasePlacementMode:ue,exitBasePlacementMode:de,requestSave:e=>D.postMessage({type:`sim:save_request`,payload:{slot:e,seed:DT}})});$d({onOrder:(e,t)=>D.postMessage({type:`sim:robot_order`,payload:{robotEid:e,order:t}}),onRequestDetail:e=>D.postMessage({type:`sim:robot_detail_request`,payload:{robotEid:e}}),onToggleFollow:e=>{E.followedRobotEid===e?O.stopFollow():O.startFollow(e)},onMineTarget:e=>O.enterTargetingMode(e),onExploreTarget:e=>O.enterExploreMode(e),onClose:()=>{}});let Fe=new yT,Ie=new TT;Fe.onUnlock(e=>Ie.show(e)),Ww(D,E,t,je,{scheduleIdleHint:O.scheduleIdleHint},Fe),sx(e=>{je.loadAdvisorLazy().then(t=>{je.initAdvisorOnce(t),t.panel.addProactiveBroadcast(e)})});function Le(e){D.postMessage({type:`sim:save_request`,payload:{slot:e,seed:DT}})}function Re(e){DT=e.seed,ze=e.difficultyMode??`normal`;let t=e.speedMultiplier??1;E.speedMultiplier=t,xi(t),D.postMessage({type:`sim:set_speed`,payload:{multiplier:t}}),D.postMessage({type:`sim:load`,payload:{data:e}})}let ze=`normal`;Id(Le,Re,()=>{},()=>$p(),()=>DT,()=>ze),Ne=setInterval(()=>Le(`auto`),Pe.autoSaveIntervalMin*6e4),window.addEventListener(`beforeunload`,()=>{Le(`auto`),Or()});function k(){let e=xr()?.expeditionCount??0,t={seed:DT};return e>0&&(t.legacyExpeditionCount=e),ze!==`normal`&&(t.difficultyMode=ze),t}function A(e,t){DT=e??ET(),ze=t??`normal`,E.pendingFirstLaunch=Ur(),Dm(),Pm(),Pr(),Dr(),E.speedMultiplier=1,wi(),D.postMessage({type:`sim:set_speed`,payload:{multiplier:1}}),D.postMessage({type:`sim:init`,payload:k()})}yf(),Gm(),fT(),Dd(e=>{DT=e.seed,Dr(),a.setPivot(e.base.x,e.base.y,e.base.z);let t=Date.now();Promise.all([zx(()=>import(`./offlineSim-BeI2kNBx.js`),[]),zx(()=>import(`./morningReport-CwsN4Ts9.js`),__vite__mapDeps([14,2]))]).then(([n,r])=>{if(n.shouldShowMorningReport(e,t)){let i=n.computeOfflineProgress(e,t);e.timestamp=t,D.postMessage({type:`sim:init`,payload:k()}),E.pendingLoad=e;let a=Object.values(i.resourcesGained).reduce((e,t)=>e+t,0),o=[`[Morning Report] Fleet operated autonomously for ${i.elapsedLabel}.`];a>0&&o.push(`Resources gathered: ~${Math.round(a)} units.`),i.researchGained>0&&o.push(`Research accumulated: ${Math.round(i.researchGained)} points.`),i.anomaliesFound>0&&o.push(`Anomalies flagged: ${i.anomaliesFound}.`),lo(o.join(` `)),setTimeout(()=>r.showMorningReport(i,()=>{}),800)}else D.postMessage({type:`sim:init`,payload:k()}),E.pendingLoad=e}).catch(t=>{console.error(`[main] Failed to load offline sim modules, loading save directly:`,t),M(`[ARIA] Morning report unavailable — loading save directly`,`#f59e0b`),D.postMessage({type:`sim:init`,payload:k()}),E.pendingLoad=e})},()=>{gm(),Ed((e,t)=>A(e,t),()=>$p())}),Me(),Tn(e=>{M(`[ARIA] Render error — check console`,`#ef4444`),console.error(`[main] Render error:`,e)}),Vn({onFixedUpdate:e=>{E.elapsed+=e},onRender:e=>{let t=zn();a.update(1/60);let i=a.getState();m.update(n.position),l.setRegionBias(m.asteroidBiasColor,m.asteroidBiasStrength),p.update(n.position,E.elapsed),se.update(n.position),h.update(n.position,i.zoomDistance,E.elapsed),x.update(E.elapsed),x.updateGrowth(E.latestBuildings);for(let e of S)e.update(E.elapsed);if(C.update(E.latestBuildings,E.elapsed),w.update(E.latestMegaProjects,E.elapsed,E.latestHabitatState),E.latestAsteroidBuffer&&E.latestAsteroidCount>0){l.updateFromBuffer(E.latestAsteroidBuffer,E.latestAsteroidCount,n.position);for(let e of l.getNewDepletions())v.spawn(e.x,e.y,e.z,e.radius,E.elapsed)}if(v.update(E.elapsed),d.updateFromBuffer(E.latestThreatBuffer??new Float32Array,E.latestThreatCount,E.elapsed),te.update(E.latestAsteroidBuffer,E.latestAsteroidCount,E.factionClaims,E.playerTargetAsteroids,E.elapsed),ne.update(E.factionTerritories),E.latestRobotBuffer&&E.latestRobotCount>0){u.updateFromBuffer(E.latestRobotBuffer,E.latestRobotCount),_.update(E.latestRobotBuffer,E.latestRobotCount,E.elapsed),ee.update(E.latestRobotBuffer,E.latestRobotCount,E.elapsed),R.setThrusterIntensity(Math.min(1,E.latestRobotCount/20));{let e=0;for(let t=0;t<E.latestRobotCount;t++)f(E.latestRobotBuffer,t)===2&&e++;if(e>0){let t=Math.min(e*.008,.05);Math.random()<t&&R.playMiningImpact()}}if(E.followedRobotEid!==null){let e=!1;for(let t=0;t<E.latestRobotCount;t++)if(b(E.latestRobotBuffer,t)===E.followedRobotEid){let n=g(E.latestRobotBuffer,t),r=y(E.latestRobotBuffer,t),i=s(E.latestRobotBuffer,t);a.setFollowTarget({x:n,y:r,z:i});let o=1+.25*Math.abs(Math.sin(E.elapsed*2.5));re.position.set(n,r+1,i),re.scale.setScalar(o),ie.opacity=.55,e=!0;break}e||(O.stopFollow(),ie.opacity=0,M(`Robot lost — follow mode disabled`,`#94a3b8`))}else ie.opacity=0}else E.followedRobotEid!==null&&(!E.latestRobotBuffer||E.latestRobotCount===0)&&(O.stopFollow(),ie.opacity=0);if(E.isPlacingBase){let e=1+.15*Math.sin(E.elapsed*3);ae.scale.setScalar(e),oe.opacity=.5+.2*Math.abs(Math.sin(E.elapsed*2))}fe?.renderDashboard(),T.update(n),cp(i.pivot.x,i.pivot.z,i.zoomDistance),lp(Date.now()),r.render(),li(t.fps,E.lastStats?.entityCount??0,E.lastStats?.asteroidCount??0,E.lastStats?.robotCount??0),di(q[0],q[5],q[6],q[4]),ui(E.latestTick)}})}window.addEventListener(`error`,e=>bn(e.error)),window.addEventListener(`unhandledrejection`,e=>bn(e.reason)),OT().catch(console.error);export{tb as a,qy as c,Xy as d,zy as f,Y as h,Jy as i,ob as l,Ly as m,ib as n,$y as o,Ry as p,sb as r,Zy as s,rb as t,Qy as u};
//# sourceMappingURL=index-BbbFbhUL.js.map