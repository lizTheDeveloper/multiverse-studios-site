const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GameScene-KhLvqv28.js","assets/vendor-phaser-CaWnzXme.js","assets/Logger-DDFnynCO.js","assets/WorldGenerator-CkOE8ZkH.js","assets/LifeStage-069__A6x.js","assets/SpriteState-tqplp9c6.js","assets/WaveUnlockSystem-B6HVMgGZ.js","assets/LanguageSystem-y5r5fMoF.js","assets/InventionRegistry-RX3JVRwv.js","assets/World-BZXMzYSp.js","assets/PerfTelemetry-BpiYtlFg.js","assets/ChemicalSet-D2fO0Ap0.js","assets/DevMode-CpEUaMc-.js","assets/SimulationScheduler-DZrfbKS7.js","assets/BiochemistrySystem-CMpN3uAr.js","assets/KeyboardControls-DwVZzOVH.js"])))=>i.map(i=>d[i]);
import"./LifeStage-069__A6x.js";import{P as J}from"./vendor-phaser-CaWnzXme.js";import{s as F,P as re,C as Yt,A as Xt}from"./PerfTelemetry-BpiYtlFg.js";import{G as T,a as W,e as p,C as Qt,l as Se,S as O,b as Zt}from"./Logger-DDFnynCO.js";import{f as ye,N as z,i as en,U as tn}from"./DevMode-CpEUaMc-.js";import"./ChemicalSet-D2fO0Ap0.js";import"./InventionRegistry-RX3JVRwv.js";import"./LanguageSystem-y5r5fMoF.js";const le="8.55.0",V=globalThis;function Fe(s,e,t){const n=V,o=n.__SENTRY__=n.__SENTRY__||{},r=o[le]=o[le]||{};return r[s]||(r[s]=e())}const Mt=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,nn="Sentry Logger ",Ye=["debug","info","warn","error","log","assert","trace"],Xe={};function on(s){if(!("console"in V))return s();const e=V.console,t={},n=Object.keys(Xe);n.forEach(o=>{const r=Xe[o];t[o]=e[o],e[o]=r});try{return s()}finally{n.forEach(o=>{e[o]=t[o]})}}function sn(){let s=!1;const e={enable:()=>{s=!0},disable:()=>{s=!1},isEnabled:()=>s};return Mt?Ye.forEach(t=>{e[t]=(...n)=>{s&&on(()=>{V.console[t](`${nn}[${t}]:`,...n)})}}):Ye.forEach(t=>{e[t]=()=>{}}),e}const xe=Fe("logger",sn);function Lt(){return qe(V),V}function qe(s){const e=s.__SENTRY__=s.__SENTRY__||{};return e.version=e.version||le,e[le]=e[le]||{}}const rn=Object.prototype.toString;function an(s,e){return rn.call(s)===`[object ${e}]`}function ln(s){return an(s,"Object")}function cn(s){return!!(s&&s.then&&typeof s.then=="function")}function dn(s,e,t){try{Object.defineProperty(s,e,{value:t,writable:!0,configurable:!0})}catch{Mt&&xe.log(`Failed to add non-enumerable property "${e}" to object`,s)}}const It=1e3;function Rt(){return Date.now()/It}function pn(){const{performance:s}=V;if(!s||!s.now)return Rt;const e=Date.now()-s.now(),t=s.timeOrigin==null?e:s.timeOrigin;return()=>(t+s.now())/It}const un=pn();(()=>{const{performance:s}=V;if(!s||!s.now)return;const e=3600*1e3,t=s.now(),n=Date.now(),o=s.timeOrigin?Math.abs(s.timeOrigin+t-n):e,r=o<e,a=s.timing&&s.timing.navigationStart,l=typeof a=="number"?Math.abs(a+t-n):e,d=l<e;return r||d?o<=l?s.timeOrigin:a:n})();function Y(){const s=V,e=s.crypto||s.msCrypto;let t=()=>Math.random()*16;try{if(e&&e.randomUUID)return e.randomUUID().replace(/-/g,"");e&&e.getRandomValues&&(t=()=>{const n=new Uint8Array(1);return e.getRandomValues(n),n[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,n=>(n^(t()&15)>>n/4).toString(16))}function mn(s,e={}){if(e.user&&(!s.ipAddress&&e.user.ip_address&&(s.ipAddress=e.user.ip_address),!s.did&&!e.did&&(s.did=e.user.id||e.user.email||e.user.username)),s.timestamp=e.timestamp||un(),e.abnormal_mechanism&&(s.abnormal_mechanism=e.abnormal_mechanism),e.ignoreDuration&&(s.ignoreDuration=e.ignoreDuration),e.sid&&(s.sid=e.sid.length===32?e.sid:Y()),e.init!==void 0&&(s.init=e.init),!s.did&&e.did&&(s.did=`${e.did}`),typeof e.started=="number"&&(s.started=e.started),s.ignoreDuration)s.duration=void 0;else if(typeof e.duration=="number")s.duration=e.duration;else{const t=s.timestamp-s.started;s.duration=t>=0?t:0}e.release&&(s.release=e.release),e.environment&&(s.environment=e.environment),!s.ipAddress&&e.ipAddress&&(s.ipAddress=e.ipAddress),!s.userAgent&&e.userAgent&&(s.userAgent=e.userAgent),typeof e.errors=="number"&&(s.errors=e.errors),e.status&&(s.status=e.status)}function Qe(){return Y()}function Ze(){return Y().substring(16)}function Ot(s,e,t=2){if(!e||typeof e!="object"||t<=0)return e;if(s&&e&&Object.keys(e).length===0)return s;const n={...s};for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=Ot(n[o],e[o],t-1));return n}const Ae="_sentrySpan";function et(s,e){e?dn(s,Ae,e):delete s[Ae]}function tt(s){return s[Ae]}const hn=100;class je{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:Qe(),spanId:Ze()}}clone(){const e=new je;return e._breadcrumbs=[...this._breadcrumbs],e._tags={...this._tags},e._extra={...this._extra},e._contexts={...this._contexts},this._contexts.flags&&(e._contexts.flags={values:[...this._contexts.flags.values]}),e._user=this._user,e._level=this._level,e._session=this._session,e._transactionName=this._transactionName,e._fingerprint=this._fingerprint,e._eventProcessors=[...this._eventProcessors],e._requestSession=this._requestSession,e._attachments=[...this._attachments],e._sdkProcessingMetadata={...this._sdkProcessingMetadata},e._propagationContext={...this._propagationContext},e._client=this._client,e._lastEventId=this._lastEventId,et(e,tt(this)),e}setClient(e){this._client=e}setLastEventId(e){this._lastEventId=e}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&mn(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(e){return this._requestSession=e,this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,t){return this._tags={...this._tags,[e]:t},this._notifyScopeListeners(),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,t){return this._extra={...this._extra,[e]:t},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,t){return t===null?delete this._contexts[e]:this._contexts[e]=t,this._notifyScopeListeners(),this}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(e){if(!e)return this;const t=typeof e=="function"?e(this):e,[n,o]=t instanceof de?[t.getScopeData(),t.getRequestSession()]:ln(t)?[e,e.requestSession]:[],{tags:r,extra:a,user:i,contexts:l,level:d,fingerprint:u=[],propagationContext:m}=n||{};return this._tags={...this._tags,...r},this._extra={...this._extra,...a},this._contexts={...this._contexts,...l},i&&Object.keys(i).length&&(this._user=i),d&&(this._level=d),u.length&&(this._fingerprint=u),m&&(this._propagationContext=m),o&&(this._requestSession=o),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._session=void 0,et(this,void 0),this._attachments=[],this.setPropagationContext({traceId:Qe()}),this._notifyScopeListeners(),this}addBreadcrumb(e,t){const n=typeof t=="number"?t:hn;if(n<=0)return this;const o={timestamp:Rt(),...e};return this._breadcrumbs.push(o),this._breadcrumbs.length>n&&(this._breadcrumbs=this._breadcrumbs.slice(-n),this._client&&this._client.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:tt(this)}}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata=Ot(this._sdkProcessingMetadata,e,2),this}setPropagationContext(e){return this._propagationContext={spanId:Ze(),...e},this}getPropagationContext(){return this._propagationContext}captureException(e,t){const n=t&&t.event_id?t.event_id:Y();if(!this._client)return xe.warn("No client configured on scope - will not capture exception!"),n;const o=new Error("Sentry syntheticException");return this._client.captureException(e,{originalException:e,syntheticException:o,...t,event_id:n},this),n}captureMessage(e,t,n){const o=n&&n.event_id?n.event_id:Y();if(!this._client)return xe.warn("No client configured on scope - will not capture message!"),o;const r=new Error(e);return this._client.captureMessage(e,t,{originalException:e,syntheticException:r,...n,event_id:o},this),o}captureEvent(e,t){const n=t&&t.event_id?t.event_id:Y();return this._client?(this._client.captureEvent(e,{...t,event_id:n},this),n):(xe.warn("No client configured on scope - will not capture event!"),n)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(e=>{e(this)}),this._notifyingListeners=!1)}}const de=je;function gn(){return Fe("defaultCurrentScope",()=>new de)}function yn(){return Fe("defaultIsolationScope",()=>new de)}class fn{constructor(e,t){let n;e?n=e:n=new de;let o;t?o=t:o=new de,this._stack=[{scope:n}],this._isolationScope=o}withScope(e){const t=this._pushScope();let n;try{n=e(t)}catch(o){throw this._popScope(),o}return cn(n)?n.then(o=>(this._popScope(),o),o=>{throw this._popScope(),o}):(this._popScope(),n)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const e=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:e}),e}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function X(){const s=Lt(),e=qe(s);return e.stack=e.stack||new fn(gn(),yn())}function bn(s){return X().withScope(s)}function xn(s,e){const t=X();return t.withScope(()=>(t.getStackTop().scope=s,e(s)))}function nt(s){return X().withScope(()=>s(X().getIsolationScope()))}function vn(){return{withIsolationScope:nt,withScope:bn,withSetScope:xn,withSetIsolationScope:(s,e)=>nt(e),getCurrentScope:()=>X().getScope(),getIsolationScope:()=>X().getIsolationScope()}}function Sn(s){const e=qe(s);return e.acs?e.acs:vn()}function Bt(){const s=Lt();return Sn(s).getCurrentScope()}function _n(s,e){return Bt().captureException(s,void 0)}function wn(s,e){const t=e;return Bt().captureMessage(s,t,void 0)}const kn="modulepreload",Cn=function(s){return"/play/creatures/"+s},ot={},En=function(e,t,n){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");o=Promise.allSettled(t.map(l=>{if(l=Cn(l),l in ot)return;ot[l]=!0;const d=l.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":kn,d||(m.as="script"),m.crossOrigin="",m.href=l,i&&m.setAttribute("nonce",i),document.head.appendChild(m),d)return new Promise((h,f)=>{m.addEventListener("load",h),m.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return o.then(a=>{for(const i of a||[])i.status==="rejected"&&r(i.reason);return e().catch(r)})},ze="precursors.llmConfig",At="precursors.llmEnabled",Dt="precursors.llmSetupDone",De={baseUrl:"",apiKey:"",defaultModel:"",injectNoThink:!0,stripThinkTags:!0,tierModels:{}};let G=null;function ae(){if(G)return G;try{const s=localStorage.getItem(ze);if(s)return G={...De,...JSON.parse(s)},G}catch(s){console.error("[LLMConfig] Failed to parse saved config:",s)}return G={...De},G}function Pe(s){G={...s};try{localStorage.setItem(ze,JSON.stringify(G))}catch(e){console.error("[LLMConfig] Failed to save config:",e)}}function Tn(){G={...De};try{localStorage.removeItem(ze)}catch(s){console.error("[LLMConfig] Failed to clear config:",s)}}function Pt(){try{return localStorage.getItem(At)!=="false"}catch{return!0}}function ce(s){try{localStorage.setItem(At,s?"true":"false")}catch{}}function Mn(){try{return localStorage.getItem(Dt)==="1"}catch{return!1}}function _e(){try{localStorage.setItem(Dt,"1")}catch{}}function Ln(){return navigator.platform.startsWith("Mac")||/Mac/.test(navigator.userAgent)}const b={bg:"rgba(10,11,16,0.99)",bgInput:"#0d0e18",border:"#252637",borderDim:"#1a1b28",cyan:"#3dfce0",cyanFaint:"rgba(61,252,224,0.08)",text:"#8b8fa4",textBright:"#d8dce8",textDim:"#565966",red:"#f05050",amber:"#f0a050",green:"#50f0a0",font:"'JetBrains Mono', monospace"},In="precursors.voiceVolume",Rn="precursors.voiceMuted",On="precursors.musicVolume",Bn="precursors.musicMuted",An="precursors.speechBubblesHidden";class Dn{el;visible=!1;showTimestamp=0;callbacks;mode;panel;contentBody;constructor(e,t="game"){this.callbacks=e,this.mode=t,this.el=this.build(),document.body.appendChild(this.el),window.addEventListener("keydown",n=>{if(n.key==="Escape"&&this.visible){if(performance.now()-this.showTimestamp<50)return;this.hide()}})}isOpen(){return this.visible}toggle(){this.visible?this.hide():this.show()}show(){this.visible=!0,this.showTimestamp=performance.now(),this.el.style.display="flex",this.el.setAttribute("data-escape-overlay",""),this.callbacks.pauseScene?.(),this.renderContent()}hide(){this.visible=!1,this.el.style.display="none",this.el.removeAttribute("data-escape-overlay"),this.callbacks.resumeScene?.()}destroy(){this.el.remove()}build(){const e=document.createElement("div");Object.assign(e.style,{position:"fixed",inset:"0",background:"rgba(5,6,10,0.88)",zIndex:"550",display:"none",alignItems:"center",justifyContent:"center",fontFamily:b.font}),e.addEventListener("click",r=>{r.target===e&&this.hide()}),this.panel=document.createElement("div"),Object.assign(this.panel.style,{background:b.bg,border:`1px solid ${b.border}`,borderRadius:"8px",width:"400px",maxWidth:"96vw",maxHeight:"84vh",display:"flex",flexDirection:"column",boxShadow:"0 0 60px rgba(0,0,0,0.6)",overflow:"hidden"});const t=document.createElement("div");Object.assign(t.style,{padding:"16px 20px 12px",borderBottom:`1px solid ${b.borderDim}`,display:"flex",alignItems:"center",justifyContent:"space-between"});const n=document.createElement("div");n.textContent="SETTINGS",Object.assign(n.style,{color:b.cyan,fontSize:"11px",fontWeight:"600",letterSpacing:"0.15em"});const o=document.createElement("button");return o.textContent="×",Object.assign(o.style,{background:"none",border:"none",color:b.textDim,fontSize:"18px",cursor:"pointer",fontFamily:b.font,padding:"0 4px"}),o.addEventListener("click",()=>this.hide()),o.addEventListener("mouseover",()=>{o.style.color=b.textBright}),o.addEventListener("mouseout",()=>{o.style.color=b.textDim}),t.appendChild(n),t.appendChild(o),this.contentBody=document.createElement("div"),Object.assign(this.contentBody.style,{flex:"1",overflowY:"auto",padding:"12px 20px 20px"}),this.panel.appendChild(t),this.panel.appendChild(this.contentBody),e.appendChild(this.panel),e}renderContent(){this.contentBody.innerHTML="",this.renderAudioSection(),this.renderAISection(),this.mode==="game"&&this.renderGameSection(),this.renderAboutSection()}renderAudioSection(){const e=this.makeSection("AUDIO"),t=this.makeSliderRow("Voice",this.callbacks.getVoiceVolume(),this.callbacks.isVoiceMuted(),r=>{this.callbacks.setVoiceVolume(r),localStorage.setItem(In,String(r))},()=>{this.callbacks.toggleVoiceMute(),localStorage.setItem(Rn,String(this.callbacks.isVoiceMuted()))});e.appendChild(t);const n=this.makeSliderRow("Music",this.callbacks.getMusicVolume(),this.callbacks.isMusicPaused(),r=>{this.callbacks.setMusicVolume(r),localStorage.setItem(On,String(r))},()=>{this.callbacks.toggleMusicPause(),localStorage.setItem(Bn,String(this.callbacks.isMusicPaused()))});e.appendChild(n);const o=this.makeToggleRow("Speech Bubbles",!this.callbacks.areBubblesHidden(),()=>{this.callbacks.toggleBubbles(),localStorage.setItem(An,String(this.callbacks.areBubblesHidden())),this.renderContent()});e.appendChild(o),this.contentBody.appendChild(e)}renderAISection(){const e=this.makeSection("AI SETTINGS"),t=document.createElement("div");Object.assign(t.style,{display:"flex",alignItems:"center",gap:"8px",marginBottom:"10px"});const n=document.createElement("span"),o=Pt();Object.assign(n.style,{width:"6px",height:"6px",borderRadius:"50%",background:o?b.green:b.amber,flexShrink:"0"});const r=document.createElement("span");r.textContent=o?"AI provider connected":"AI provider disconnected",Object.assign(r.style,{color:b.text,fontSize:"11px"}),t.appendChild(n),t.appendChild(r),e.appendChild(t);const a=this.makeButton("Configure AI Providers",()=>{this.hide(),this.callbacks.openLLMSettings()});e.appendChild(a),this.contentBody.appendChild(e)}renderGameSection(){const e=this.makeSection("GAME"),t=this.makeButton("Quick Save",()=>{this.callbacks.saveGame?.("quicksave"),t.textContent="Saved!",t.style.color=b.green,setTimeout(()=>{t.textContent="Quick Save",t.style.color=b.textBright},1200)});e.appendChild(t);const n=F.listSlots();if(n.length>0){const r=document.createElement("div");r.textContent="Load Save",Object.assign(r.style,{color:b.text,fontSize:"10px",letterSpacing:"0.08em",marginTop:"10px",marginBottom:"6px"}),e.appendChild(r);for(const a of n){const i=this.makeButton(a,()=>{this.hide(),F.load(a)});Object.assign(i.style,{fontSize:"10px",padding:"5px 10px",marginBottom:"4px"}),e.appendChild(i)}}const o=this.makeButton("Return to Main Menu",()=>{this.showExitConfirm(e)});Object.assign(o.style,{marginTop:"12px",color:b.red,borderColor:"#7f1d1d",background:"#1a0d0d"}),o.addEventListener("mouseover",()=>{o.style.background="#2a1010",o.style.borderColor="#ef4444"}),o.addEventListener("mouseout",()=>{o.style.background="#1a0d0d",o.style.borderColor="#7f1d1d"}),e.appendChild(o),this.contentBody.appendChild(e)}showExitConfirm(e){if(e.querySelector("[data-exit-confirm]"))return;const n=document.createElement("div");n.setAttribute("data-exit-confirm",""),Object.assign(n.style,{display:"flex",gap:"8px",marginTop:"8px"});const o=document.createElement("div");o.textContent="Unsaved progress will be lost.",Object.assign(o.style,{color:b.textDim,fontSize:"10px",marginBottom:"6px",width:"100%"});const r=this.makeButton("Exit",()=>{this.hide(),this.callbacks.returnToMenu?.()});Object.assign(r.style,{color:b.red,borderColor:"#7f1d1d",background:"#1a0d0d",flex:"1"});const a=this.makeButton("Cancel",()=>{n.remove(),o.remove()});Object.assign(a.style,{flex:"1"}),n.appendChild(r),n.appendChild(a),e.appendChild(o),e.appendChild(n)}renderAboutSection(){const e=this.makeSection("ABOUT"),t=document.createElement("div");t.textContent=`v${this.getVersion()}`,Object.assign(t.style,{color:b.textDim,fontSize:"10px",marginBottom:"6px"}),e.appendChild(t);const n=document.createElement("div");n.textContent="Precursors: Origins of Folklore",Object.assign(n.style,{color:b.text,fontSize:"11px",fontFamily:"'Cormorant Garamond', serif",marginBottom:"4px"}),e.appendChild(n);const o=document.createElement("div");o.textContent="Multiverse Studios",Object.assign(o.style,{color:b.textDim,fontSize:"10px"}),e.appendChild(o),this.contentBody.appendChild(e)}getVersion(){try{return window.__PRECURSORS_VERSION__??"0.4.5"}catch{return"0.4.5"}}makeSection(e){const t=document.createElement("div");Object.assign(t.style,{marginBottom:"16px"});const n=document.createElement("div");return n.textContent=e,Object.assign(n.style,{color:b.cyan,fontSize:"9px",fontWeight:"600",letterSpacing:"0.15em",marginBottom:"10px",paddingBottom:"4px",borderBottom:`1px solid ${b.borderDim}`}),t.appendChild(n),t}makeButton(e,t){const n=document.createElement("button");return n.textContent=e,Object.assign(n.style,{display:"block",width:"100%",background:b.bgInput,color:b.textBright,border:`1px solid ${b.border}`,borderRadius:"4px",padding:"8px 12px",fontFamily:b.font,fontSize:"11px",letterSpacing:"0.04em",cursor:"pointer",textAlign:"left",transition:"background 0.15s, border-color 0.15s"}),n.addEventListener("mouseover",()=>{n.style.background=b.cyanFaint,n.style.borderColor=b.cyan}),n.addEventListener("mouseout",()=>{n.style.background=b.bgInput,n.style.borderColor=b.border}),n.addEventListener("click",t),n}makeSliderRow(e,t,n,o,r){const a=document.createElement("div");Object.assign(a.style,{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"});const i=document.createElement("span");i.textContent=e,Object.assign(i.style,{color:b.text,fontSize:"11px",width:"48px",flexShrink:"0"});const l=document.createElement("input");l.type="range",l.min="0",l.max="100",l.value=String(Math.round(t*100)),Object.assign(l.style,{flex:"1",accentColor:b.cyan,height:"4px",minWidth:"0"}),l.addEventListener("input",()=>{o(parseInt(l.value,10)/100)});const d=document.createElement("button");return d.textContent=n?"🔇":"🔊",Object.assign(d.style,{background:"none",border:"none",fontSize:"14px",cursor:"pointer",padding:"2px 4px",minWidth:"24px",filter:n?"grayscale(1)":"none"}),d.addEventListener("click",()=>{r(),d.textContent=n?"🔊":"🔇",d.style.filter=n?"none":"grayscale(1)"}),a.appendChild(i),a.appendChild(l),a.appendChild(d),a}makeToggleRow(e,t,n){const o=document.createElement("div");Object.assign(o.style,{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px",cursor:"pointer"}),o.addEventListener("click",n);const r=document.createElement("span");r.textContent=e,Object.assign(r.style,{color:b.text,fontSize:"11px"});const a=document.createElement("div");Object.assign(a.style,{width:"32px",height:"16px",borderRadius:"8px",background:t?b.cyan:b.borderDim,position:"relative",transition:"background 0.2s",flexShrink:"0"});const i=document.createElement("div");return Object.assign(i.style,{width:"12px",height:"12px",borderRadius:"50%",background:b.textBright,position:"absolute",top:"2px",left:t?"18px":"2px",transition:"left 0.2s"}),a.appendChild(i),o.appendChild(r),o.appendChild(a),o}}const st="precursors.providerRegistry",rt=[{id:"groq",name:"Groq (cloud, fast)",baseUrl:"https://api.groq.com/openai/v1",apiKey:"",models:["qwen/qwen3-32b","qwen/qwen3-8b","llama-3.3-70b-versatile","llama-3.1-8b-instant"],inputCostPerMToken:.1,outputCostPerMToken:.1,dailyBudgetCents:1500,priority:10,isLocal:!1,enabled:!0,healthStatus:"unknown",consecutiveFailures:0,retryAfter:0},{id:"deepinfra",name:"DeepInfra (cloud)",baseUrl:"https://api.deepinfra.com/v1/openai",apiKey:"",models:["Qwen/Qwen3-8B","Qwen/Qwen3-32B","meta-llama/Llama-3.3-70B-Instruct"],inputCostPerMToken:.07,outputCostPerMToken:.07,dailyBudgetCents:200,priority:20,isLocal:!1,enabled:!0,healthStatus:"unknown",consecutiveFailures:0,retryAfter:0},{id:"openrouter",name:"OpenRouter (cloud)",baseUrl:"https://openrouter.ai/api/v1",apiKey:"",models:["qwen/qwen3-32b","qwen/qwen3-8b","meta-llama/llama-3.3-70b-instruct"],inputCostPerMToken:.1,outputCostPerMToken:.1,dailyBudgetCents:200,priority:30,isLocal:!1,enabled:!0,healthStatus:"unknown",consecutiveFailures:0,retryAfter:0},{id:"mlx",name:"MLX (Mac, local)",baseUrl:"http://localhost:8080/v1",apiKey:"",models:["mlx-community/Qwen3-8B-4bit","mlx-community/Qwen3-30B-A3B-4bit"],inputCostPerMToken:0,outputCostPerMToken:0,dailyBudgetCents:0,priority:5,isLocal:!0,enabled:!1,healthStatus:"unknown",consecutiveFailures:0,retryAfter:0},{id:"orange-pi",name:"Orange Pi (local SBC)",baseUrl:"http://orangepi.local:8080/v1",apiKey:"",models:["qwen3-8b","qwen3:8b"],inputCostPerMToken:0,outputCostPerMToken:0,dailyBudgetCents:0,priority:1,isLocal:!0,enabled:!1,healthStatus:"unknown",consecutiveFailures:0,retryAfter:0}],Pn=3,Nn=6e4,$n=6e4;class Fn{providers=new Map;constructor(){this.load()}load(){try{const e=localStorage.getItem(st);if(e){const t=JSON.parse(e);for(const n of t)n.enabled===void 0&&(n.enabled=!n.isLocal),this.providers.set(n.id,n);for(const n of rt)this.providers.has(n.id)||this.providers.set(n.id,{...n});return}}catch{}for(const e of rt)this.providers.set(e.id,{...e})}save(){try{localStorage.setItem(st,JSON.stringify([...this.providers.values()]))}catch{}}getAll(){return[...this.providers.values()]}get(e){return this.providers.get(e)}register(e){this.providers.set(e.id,{...e}),this.save()}deregister(e){this.providers.delete(e),this.save()}update(e,t){const n=this.providers.get(e);n&&(this.providers.set(e,{...n,...t}),this.save())}recordSuccess(e){const t=this.providers.get(e);t&&(t.consecutiveFailures=0,t.healthStatus="healthy",t.retryAfter=0,this.save())}recordFailure(e){const t=this.providers.get(e);t&&(t.consecutiveFailures+=1,t.consecutiveFailures>=Pn&&(t.healthStatus="unhealthy",t.retryAfter=Date.now()+Nn),this.save())}recordRateLimit(e,t){const n=this.providers.get(e);if(!n)return;n.consecutiveFailures+=1,n.healthStatus="unhealthy";const o=t?t*1e3:$n;n.retryAfter=Date.now()+o,this.save()}isAvailable(e){const t=this.providers.get(e);return t?t.healthStatus!=="unhealthy"?!0:Date.now()>=t.retryAfter?(t.healthStatus="unknown",t.consecutiveFailures=0,this.save(),!0):!1:!1}getByPriority(){return[...this.providers.values()].sort((e,t)=>e.priority-t.priority)}}const B=new Fn,it="precursors.costTracker";function Me(){return new Date().toISOString().slice(0,10)}class qn{store={};constructor(){this.load()}load(){try{const e=localStorage.getItem(it);e&&(this.store=JSON.parse(e),this.pruneOldDates())}catch{}}save(){try{localStorage.setItem(it,JSON.stringify(this.store))}catch{}}pruneOldDates(){const e=new Date;e.setUTCDate(e.getUTCDate()-7);const t=e.toISOString().slice(0,10);for(const n of Object.keys(this.store)){const[,o]=n.split("::");o<t&&delete this.store[n]}}storeKey(e){return`${e}::${Me()}`}getEntry(e){const t=this.storeKey(e);return this.store[t]||(this.store[t]={date:Me(),inputTokens:0,outputTokens:0,spendCents:0,warnedAt80:!1,exhaustedAt100:!1}),this.store[t]}record(e,t,n){const o=B.get(e);if(!o)return;const r=this.getEntry(e);r.inputTokens+=t,r.outputTokens+=n;const a=t/1e6*o.inputCostPerMToken*100,i=n/1e6*o.outputCostPerMToken*100;if(r.spendCents+=a+i,o.dailyBudgetCents>0){const l=r.spendCents/o.dailyBudgetCents;!r.warnedAt80&&l>=.8&&(r.warnedAt80=!0,this.emit("inference:budget_warning",{providerId:e,spendCents:r.spendCents,budgetCents:o.dailyBudgetCents})),!r.exhaustedAt100&&l>=1&&(r.exhaustedAt100=!0,this.emit("inference:budget_exhausted",{providerId:e,spendCents:r.spendCents,budgetCents:o.dailyBudgetCents}))}this.save()}emit(e,t){try{window.dispatchEvent(new CustomEvent(e,{detail:t}))}catch{}}isOverBudget(e){const t=B.get(e);return!t||t.dailyBudgetCents<=0?!1:this.getEntry(e).spendCents>=t.dailyBudgetCents}getSpendSummary(){const e=Me();return B.getAll().map(t=>{const n=`${t.id}::${e}`,o=this.store[n]??{inputTokens:0,outputTokens:0,spendCents:0},r=t.dailyBudgetCents>0?Math.min(1,o.spendCents/t.dailyBudgetCents):0;return{providerId:t.id,providerName:t.name,date:e,inputTokens:o.inputTokens,outputTokens:o.outputTokens,spendCents:o.spendCents,dailyBudgetCents:t.dailyBudgetCents,budgetUsedFraction:r}})}getEntry_(e){return this.getEntry(e)}_reset(){this.store={}}}const at=new qn,we="precursors.tierRoutingPolicy",jn={0:"Primal",5:"Awakened",10:"Spoken",15:"Learned",20:"Enlightened",25:"???"},zn=[0,5,10,15,20,25];function Un(){try{const s=localStorage.getItem(we);if(s)return JSON.parse(s)}catch{}return{}}function lt(s){try{localStorage.setItem(we,JSON.stringify(s))}catch{}}const c={bg:"rgba(10,11,16,0.99)",bgCard:"#0b0c16",bgInput:"#0d0e18",border:"#252637",borderDim:"#1a1b28",cyan:"#3dfce0",cyanFaint:"rgba(61,252,224,0.08)",gold:"#f0c850",text:"#8b8fa4",textBright:"#d8dce8",textDim:"#565966",textMid:"#6b6f84",red:"#f05050",amber:"#f0a050",green:"#50f0a0",blue:"#60b0e0",purple:"#b080d0",font:"'JetBrains Mono', monospace"};class Gn{el;visible=!1;activeTab="providers";tabBody;constructor(){this.el=this.build(),document.body.appendChild(this.el),window.addEventListener("keydown",e=>{e.key==="Escape"&&this.visible&&this.hide()})}toggle(){this.visible?this.hide():this.show()}show(){this.visible=!0,this.el.style.display="flex",this.el.setAttribute("data-escape-overlay",""),this.switchTab(this.activeTab)}hide(){this.visible=!1,this.el.style.display="none",this.el.removeAttribute("data-escape-overlay")}destroy(){this.el.remove()}build(){const e=document.createElement("div");Object.assign(e.style,{position:"fixed",inset:"0",background:"rgba(5,6,10,0.88)",zIndex:"600",display:"none",alignItems:"center",justifyContent:"center"}),e.addEventListener("click",n=>{n.target===e&&this.hide()});const t=document.createElement("div");return Object.assign(t.style,{width:"640px",maxWidth:"96vw",maxHeight:"84vh",background:c.bg,border:`1px solid ${c.border}`,borderRadius:"6px",display:"flex",flexDirection:"column",overflow:"hidden",fontFamily:c.font,fontSize:"11px",color:c.text,boxShadow:"0 0 80px rgba(0,0,0,0.95), inset 0 0 1px rgba(61,252,224,0.06)"}),t.appendChild(this.buildHeader()),this.tabBody=document.createElement("div"),Object.assign(this.tabBody.style,{flex:"1",overflowY:"auto",padding:"14px 16px",display:"flex",flexDirection:"column",gap:"10px"}),t.appendChild(this.tabBody),t.appendChild(this.buildFooter()),e.appendChild(t),e}buildHeader(){const e=document.createElement("div");Object.assign(e.style,{borderBottom:`1px solid ${c.border}`,flexShrink:"0"});const t=document.createElement("div");Object.assign(t.style,{padding:"12px 16px 0",display:"flex",justifyContent:"space-between",alignItems:"center"});const n=document.createElement("div");Object.assign(n.style,{color:c.cyan,fontSize:"10px",letterSpacing:"0.2em",textTransform:"uppercase"}),n.textContent="Inference Configuration";const o=document.createElement("div");Object.assign(o.style,{display:"flex",alignItems:"center",gap:"10px"});const r=document.createElement("div");Object.assign(r.style,{color:c.textDim,fontSize:"9px",letterSpacing:"0.1em"}),r.textContent="Esc / L to close";const a=document.createElement("button");Object.assign(a.style,{background:"none",border:"none",color:c.textDim,fontSize:"14px",cursor:"pointer",padding:"0 4px"}),a.textContent="×",a.addEventListener("mouseenter",()=>{a.style.color=c.cyan}),a.addEventListener("mouseleave",()=>{a.style.color=c.textDim}),a.addEventListener("click",()=>this.hide()),o.appendChild(r),o.appendChild(a),t.appendChild(n),t.appendChild(o);const i=document.createElement("div");Object.assign(i.style,{display:"flex",padding:"8px 16px 0"});const l=[{id:"providers",label:"Providers"},{id:"routing",label:"Routing"},{id:"options",label:"Options"},{id:"flags",label:"Feature Flags"}];for(const d of l){const u=document.createElement("button");u.dataset.tabId=d.id,u.textContent=d.label,Object.assign(u.style,{background:"none",border:"none",borderBottom:"2px solid transparent",color:c.textMid,fontFamily:c.font,fontSize:"10px",cursor:"pointer",padding:"4px 14px",letterSpacing:"0.08em",transition:"color 0.15s, border-color 0.15s",marginBottom:"-1px"}),u.addEventListener("click",m=>{m.stopPropagation(),this.switchTab(d.id)}),i.appendChild(u)}return e.appendChild(t),e.appendChild(i),e}switchTab(e){this.activeTab=e,this.el.querySelectorAll("[data-tab-id]").forEach(t=>{const n=t,o=n.dataset.tabId===e;n.style.color=o?c.cyan:c.textMid,n.style.borderBottomColor=o?c.cyan:"transparent"}),this.tabBody.innerHTML="",e==="providers"?this.renderProviders():e==="routing"?this.renderRouting():e==="flags"?this.renderFlags():this.renderOptions()}renderProviders(){this.tabBody.appendChild(this.buildGroqKeySection()),this.tabBody.appendChild(this.buildSpendHeader()),this.tabBody.appendChild(this.buildServerProxyBanner());const e=B.getByPriority();for(const r of e)this.tabBody.appendChild(this.buildProviderCard(r));const t=document.createElement("div");Object.assign(t.style,{display:"flex",gap:"8px",marginTop:"4px"});const n=this.mkOutlineBtn("+ Add Cloud Provider",c.cyan);n.addEventListener("click",r=>{r.stopPropagation(),this.tabBody.appendChild(this.buildAddForm("cloud")),this.tabBody.scrollTop=this.tabBody.scrollHeight});const o=this.mkOutlineBtn("+ Add Local Device",c.blue);o.addEventListener("click",r=>{r.stopPropagation(),this.tabBody.appendChild(this.buildAddForm("local")),this.tabBody.scrollTop=this.tabBody.scrollHeight}),t.appendChild(n),t.appendChild(o),this.tabBody.appendChild(t)}buildServerProxyBanner(){const e=document.createElement("div");Object.assign(e.style,{padding:"8px 12px",background:"#090a13",border:`1px solid ${c.borderDim}`,borderRadius:"4px",display:"flex",alignItems:"center",gap:"10px"});const t=document.createElement("div");Object.assign(t.style,{width:"6px",height:"6px",borderRadius:"50%",background:c.textDim,flexShrink:"0"});const n=document.createElement("div");Object.assign(n.style,{color:c.textDim,fontSize:"10px",flex:"1"}),n.textContent="Server Proxy — checking…";const o=document.createElement("div");return Object.assign(o.style,{fontSize:"8px",letterSpacing:"0.1em",textTransform:"uppercase",color:c.textDim}),o.textContent="fallback",e.append(t,n,o),fetch("/api/llm/providers").then(r=>r.json()).then(r=>{const a=r.proxyReady??(Array.isArray(r.providers)&&r.providers.length>0),i=Array.isArray(r.providers)?r.providers.map(l=>l.name).join(", "):"";a?(t.style.background=c.green,t.style.boxShadow=`0 0 5px ${c.green}`,n.style.color=c.textBright,n.textContent=`Server Proxy — ${i||"groq"} (key loaded)`,o.style.color=c.green):(t.style.background=c.amber,n.style.color=c.amber,n.textContent="Server Proxy — no key configured",o.textContent="add GROQ_API_KEY to .env",o.style.color=c.amber)}).catch(()=>{t.style.background=c.red,n.style.color=c.red,n.textContent="Server Proxy — unreachable (is npm run dev running?)",o.style.color=c.red}),e}buildGroqKeySection(){const t=B.getAll().find(h=>h.id==="groq")?.apiKey??ae().apiKey??"",n=Pt(),o=document.createElement("div");Object.assign(o.style,{padding:"10px 12px",background:"#090a13",border:`1px solid ${n?c.borderDim:"#3a1a1a"}`,borderRadius:"4px",display:"flex",flexDirection:"column",gap:"8px"});const r=document.createElement("div");Object.assign(r.style,{display:"flex",alignItems:"center",gap:"8px"});const a=document.createElement("div");Object.assign(a.style,{color:c.gold,fontSize:"9px",letterSpacing:"0.2em",textTransform:"uppercase",flex:"1"}),a.textContent="Groq API Key";const i=document.createElement("div");Object.assign(i.style,{fontSize:"8px",letterSpacing:"0.1em",textTransform:"uppercase",padding:"1px 6px",borderRadius:"2px",background:n?"rgba(80,240,160,0.08)":"rgba(240,80,80,0.08)",color:n?c.green:c.red,border:`1px solid ${n?"rgba(80,240,160,0.2)":"rgba(240,80,80,0.2)"}`}),i.textContent=n?t?"active":"server key":"disabled",r.append(a,i),o.appendChild(r);const l=document.createElement("div");Object.assign(l.style,{display:"flex",gap:"6px",alignItems:"center"});const d=this.mkTextInput("password","gsk_... (leave empty to use server key)");d.value=t,Object.assign(d.style,{flex:"1"});const u=this.mkOutlineBtn("Save Key",c.cyan,"9px","3px 10px");u.addEventListener("click",h=>{h.stopPropagation();const f=d.value.trim(),k=ae();Pe({...k,apiKey:f}),B.update("groq",{apiKey:f}),f&&(ce(!0),_e()),this.switchTab("providers")}),l.append(d,u),o.appendChild(l);const m=document.createElement("div");if(Object.assign(m.style,{display:"flex",gap:"6px",justifyContent:"flex-end"}),n){const h=this.mkOutlineBtn("Disable AI Minds",c.textDim,"9px","2px 8px");h.addEventListener("click",f=>{f.stopPropagation(),ce(!1),this.switchTab("providers")}),m.appendChild(h)}else{const h=this.mkOutlineBtn("Enable AI Minds",c.green,"9px","2px 8px");h.addEventListener("click",f=>{f.stopPropagation(),ce(!0),_e(),this.switchTab("providers")}),m.appendChild(h)}return o.appendChild(m),o}buildSpendHeader(){const e=at.getSpendSummary(),t=e.reduce((l,d)=>l+d.spendCents,0),n=e.filter(l=>l.dailyBudgetCents>0).reduce((l,d)=>l+d.dailyBudgetCents,0),o=document.createElement("div");Object.assign(o.style,{padding:"10px 12px",background:"#090a13",border:`1px solid ${c.borderDim}`,borderRadius:"4px"});const r=document.createElement("div");Object.assign(r.style,{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"6px"});const a=document.createElement("div");Object.assign(a.style,{color:c.gold,fontSize:"9px",letterSpacing:"0.15em",textTransform:"uppercase"}),a.textContent="Today's Total Spend";const i=document.createElement("div");if(Object.assign(i.style,{color:c.textBright,fontSize:"12px"}),i.textContent=n>0?`$${(t/100).toFixed(3)} / $${(n/100).toFixed(2)}`:`$${(t/100).toFixed(3)}`,r.appendChild(a),r.appendChild(i),o.appendChild(r),n>0){const l=Math.min(1,t/n);o.appendChild(this.mkBar(l,l>=1?c.red:l>=.8?c.amber:c.green))}return o}buildProviderCard(e){const n=at.getSpendSummary().find(x=>x.providerId===e.id),o=document.createElement("div");Object.assign(o.style,{border:`1px solid ${c.borderDim}`,borderRadius:"4px",overflow:"hidden"});const r=document.createElement("div");Object.assign(r.style,{padding:"7px 12px",background:"#0d0e18",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",userSelect:"none"});const a=e.enabled?e.healthStatus==="healthy"?c.green:e.healthStatus==="unhealthy"?c.red:c.textDim:c.textDim,i=document.createElement("div");Object.assign(i.style,{width:"6px",height:"6px",borderRadius:"50%",background:a,flexShrink:"0",boxShadow:e.enabled&&e.healthStatus==="healthy"?`0 0 5px ${c.green}`:"none"});const l=document.createElement("div");Object.assign(l.style,{color:e.enabled?c.textBright:c.textDim,fontSize:"11px",flex:"1"}),l.textContent=e.name;const d=document.createElement("div");Object.assign(d.style,{fontSize:"9px",color:a}),d.textContent=e.enabled?e.healthStatus:"disabled";const u=document.createElement("div");Object.assign(u.style,{fontSize:"8px",letterSpacing:"0.1em",textTransform:"uppercase",padding:"1px 5px",borderRadius:"2px",background:e.isLocal?"#0d2040":"#1a1020",color:e.isLocal?c.blue:c.purple,border:`1px solid ${e.isLocal?"#1a3060":"#2a1040"}`}),u.textContent=e.isLocal?"local":"cloud";const m=document.createElement("div");Object.assign(m.style,{color:c.textDim,fontSize:"10px"}),m.textContent="▼",r.append(i,l,d,u,m);const h=document.createElement("div");if(Object.assign(h.style,{padding:"10px 12px",background:c.bgCard,borderTop:`1px solid ${c.borderDim}`,display:"flex",flexDirection:"column",gap:"8px"}),n){const x=document.createElement("div");Object.assign(x.style,{display:"flex",justifyContent:"space-between",fontSize:"9px"});const g=document.createElement("span");g.style.color=c.textMid,g.textContent="Today's spend";const y=document.createElement("span");if(y.style.color=n.budgetUsedFraction>=.8?c.amber:c.textBright,n.dailyBudgetCents>0?y.textContent=`$${(n.spendCents/100).toFixed(3)} / $${(n.dailyBudgetCents/100).toFixed(2)}`:e.isLocal?(y.textContent="free (local)",y.style.color=c.textDim):(y.textContent="$0.000 (no limit)",y.style.color=c.textDim),x.append(g,y),h.appendChild(x),n.dailyBudgetCents>0){const v=n.budgetUsedFraction>=1?c.red:n.budgetUsedFraction>=.8?c.amber:c.green;h.appendChild(this.mkBar(n.budgetUsedFraction,v))}}const f=document.createElement("div");if(Object.assign(f.style,{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"}),f.appendChild(this.mkLabeledInput("Priority",e.priority,x=>{B.update(e.id,{priority:parseInt(x)||0})},{width:"44px",type:"number",min:"0",max:"999",textAlign:"center"})),e.isLocal||f.appendChild(this.mkLabeledInput("Budget/day ($)",(e.dailyBudgetCents/100).toFixed(2),x=>{B.update(e.id,{dailyBudgetCents:Math.round(parseFloat(x)*100)||0})},{width:"64px",type:"number",min:"0",step:"0.10"})),h.appendChild(f),!e.isLocal){const x=document.createElement("div");Object.assign(x.style,{display:"flex",flexDirection:"column",gap:"3px"});const g=this.mkSmallLabel("API Key"),y=this.mkTextInput("password","sk-... (empty = server key)");y.value=e.apiKey,y.addEventListener("change",()=>{B.update(e.id,{apiKey:y.value})}),x.append(g,y),h.appendChild(x)}const k=document.createElement("div");Object.assign(k.style,{display:"flex",gap:"6px",justifyContent:"flex-end"});const E=this.mkOutlineBtn(e.healthStatus==="unhealthy"?"Reset Health":"Mark Unhealthy",e.healthStatus==="unhealthy"?c.green:c.amber,"9px","3px 8px");E.addEventListener("click",x=>{x.stopPropagation(),e.healthStatus==="unhealthy"?B.update(e.id,{healthStatus:"unknown",consecutiveFailures:0,retryAfter:0}):B.update(e.id,{healthStatus:"unhealthy",retryAfter:Date.now()+3e5}),this.switchTab("providers")});const C=this.mkOutlineBtn("Remove",c.red,"9px","3px 8px");C.addEventListener("click",x=>{x.stopPropagation(),window.confirm(`Remove provider "${e.name}"?`)&&(B.deregister(e.id),this.switchTab("providers"))});const _=this.mkOutlineBtn(e.enabled?"Disable":"Enable",e.enabled?c.textDim:c.green,"9px","3px 8px");_.addEventListener("click",x=>{x.stopPropagation(),B.update(e.id,{enabled:!e.enabled}),this.switchTab("providers")}),k.append(_,E,C),h.appendChild(k);let R=!0;return r.addEventListener("click",()=>{R=!R,h.style.display=R?"flex":"none",m.textContent=R?"▼":"▶"}),o.append(r,h),o}buildAddForm(e){const t=e==="cloud"?c.cyan:c.blue,n=document.createElement("div");Object.assign(n.style,{border:`1px solid ${t}30`,borderRadius:"4px",padding:"12px",background:c.bgCard,display:"flex",flexDirection:"column",gap:"8px"});const o=document.createElement("div");if(Object.assign(o.style,{color:t,fontSize:"9px",letterSpacing:"0.2em",textTransform:"uppercase",marginBottom:"2px"}),o.textContent=e==="cloud"?"+ New Cloud Provider":"+ New Local Device",n.appendChild(o),e==="cloud"){const C=document.createElement("div");Object.assign(C.style,{display:"flex",gap:"4px",flexWrap:"wrap",alignItems:"center"});const _=this.mkSmallLabel("Quick-fill:");_.style.marginRight="2px",C.appendChild(_);const R=[{label:"Groq",url:"https://api.groq.com/openai/v1",model:"qwen/qwen3-32b",inCost:.1,outCost:.1},{label:"DeepInfra",url:"https://api.deepinfra.com/v1/openai",model:"Qwen/Qwen3-8B",inCost:.07,outCost:.07},{label:"OpenRouter",url:"https://openrouter.ai/api/v1",model:"qwen/qwen3-32b",inCost:.1,outCost:.1}];for(const x of R){const g=this.mkOutlineBtn(x.label,c.textMid,"9px","2px 7px");g.addEventListener("click",y=>{y.stopPropagation(),n.querySelector('[data-fid="url"]').value=x.url,n.querySelector('[data-fid="model"]').value=x.model,n.querySelector('[data-fid="inCost"]').value=String(x.inCost),n.querySelector('[data-fid="outCost"]').value=String(x.outCost);const v=n.querySelector('[data-fid="name"]');v.value||(v.value=x.label)}),C.appendChild(g)}n.appendChild(C)}const r=(C,_,R,x="text")=>{const g=document.createElement("div");Object.assign(g.style,{display:"flex",alignItems:"center",gap:"8px"});const y=this.mkSmallLabel(C);Object.assign(y.style,{width:"80px",textAlign:"right",flexShrink:"0"});const v=this.mkTextInput(x,R);return v.dataset.fid=_,g.append(y,v),n.appendChild(g),v},a=r("Name","name",e==="cloud"?"My Cloud Provider":"Orange Pi"),i=r("Base URL","url",e==="cloud"?"https://api.example.com/v1":"http://device.local:8080/v1"),l=r("Default Model","model","qwen3:8b");let d,u,m,h;e==="cloud"&&(d=r("API Key","key","sk-... (empty = server key)","password"),u=r("Input $/MT","inCost","0.10"),m=r("Output $/MT","outCost","0.10"),h=r("Budget/day ($)","budget","2.00"));const f=document.createElement("div");Object.assign(f.style,{display:"flex",gap:"6px",justifyContent:"flex-end",marginTop:"2px"});const k=this.mkOutlineBtn("Cancel",c.textDim);k.addEventListener("click",C=>{C.stopPropagation(),n.remove()});const E=this.mkOutlineBtn("Add Provider",t);return E.addEventListener("click",C=>{C.stopPropagation();const _=a.value.trim(),R=i.value.trim();if(!_||!R){_||(a.style.borderColor=c.red),R||(i.style.borderColor=c.red);return}const x={id:`custom-${Date.now()}`,name:_,baseUrl:R,apiKey:d?.value??"",models:l.value.trim()?[l.value.trim()]:[],inputCostPerMToken:parseFloat(u?.value??"0")||0,outputCostPerMToken:parseFloat(m?.value??"0")||0,dailyBudgetCents:Math.round((parseFloat(h?.value??"0")||0)*100),priority:(B.getAll().length+1)*10,isLocal:e==="local",enabled:!0,healthStatus:"unknown",consecutiveFailures:0,retryAfter:0};B.register(x),this.switchTab("providers")}),f.append(k,E),n.appendChild(f),n}renderRouting(){const e=Un(),t=B.getByPriority(),n={};for(const i of t)n[i.id]=i.name;const o=document.createElement("div");Object.assign(o.style,{color:c.textMid,fontSize:"9px",lineHeight:"1.6"}),o.textContent="Provider preference order per intelligence tier. Left = tried first; skipped if unhealthy or over budget. Leave at default to use registry priority.",this.tabBody.appendChild(o);for(const i of zn){const l=String(i),d=t.map(E=>E.id),u=()=>e[l]??[...d],m=document.createElement("div");Object.assign(m.style,{border:`1px solid ${c.borderDim}`,borderRadius:"4px",padding:"8px 12px",background:"#090a13"});const h=document.createElement("div");Object.assign(h.style,{color:c.gold,fontSize:"9px",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:"8px"}),h.textContent=`T${i} — ${jn[i]}`,m.appendChild(h);const f=document.createElement("div");Object.assign(f.style,{display:"flex",flexDirection:"column",gap:"3px"});const k=()=>{f.innerHTML="";const E=u();E.forEach((C,_)=>{const R=document.createElement("div");Object.assign(R.style,{display:"flex",alignItems:"center",gap:"6px",padding:"2px 0"});const x=document.createElement("div");Object.assign(x.style,{color:c.textDim,fontSize:"9px",width:"16px",textAlign:"right",flexShrink:"0"}),x.textContent=`${_+1}.`;const g=document.createElement("div");Object.assign(g.style,{flex:"1",color:c.textBright,fontSize:"10px"}),g.textContent=n[C]??C;const y=document.createElement("button");y.textContent="↑",Object.assign(y.style,{background:"none",border:"none",color:_===0?c.textDim:c.textMid,fontFamily:c.font,fontSize:"12px",cursor:_===0?"default":"pointer",padding:"0 3px"}),y.disabled=_===0,y.addEventListener("click",q=>{q.stopPropagation();const M=[...u()];[M[_-1],M[_]]=[M[_],M[_-1]],e[l]=M,lt(e),k()});const v=document.createElement("button");v.textContent="↓",Object.assign(v.style,{background:"none",border:"none",color:_===E.length-1?c.textDim:c.textMid,fontFamily:c.font,fontSize:"12px",cursor:_===E.length-1?"default":"pointer",padding:"0 3px"}),v.disabled=_===E.length-1,v.addEventListener("click",q=>{q.stopPropagation();const M=[...u()];[M[_],M[_+1]]=[M[_+1],M[_]],e[l]=M,lt(e),k()}),R.append(x,g,y,v),f.appendChild(R)})};k(),m.appendChild(f),this.tabBody.appendChild(m)}const r=document.createElement("div");Object.assign(r.style,{display:"flex",justifyContent:"flex-end"});const a=this.mkOutlineBtn("Reset Routing → Registry Priority",c.textDim,"9px");a.addEventListener("click",i=>{i.stopPropagation();try{localStorage.removeItem(we)}catch{}this.switchTab("routing")}),r.appendChild(a),this.tabBody.appendChild(r)}renderOptions(){const e=ae();this.tabBody.appendChild(this.mkSectionTitle("Global Inference Options"));const t=this.mkCheckboxRow("opt-no-think","Inject /no_think (suppress qwen3 chain-of-thought output)",e.injectNoThink),n=this.mkCheckboxRow("opt-strip-think","Strip <think>…</think> blocks from responses",e.stripThinkTags);this.tabBody.append(t,n),this.tabBody.appendChild(this.mkSectionTitle("Legacy Single-Provider Fallback"));const o=document.createElement("div");Object.assign(o.style,{color:c.textDim,fontSize:"9px",lineHeight:"1.6"}),o.textContent="Used only when InferenceRouter is not active (single-provider mode). Configure providers above instead.",this.tabBody.appendChild(o);const r=document.createElement("div");Object.assign(r.style,{display:"flex",flexDirection:"column",gap:"3px"}),r.appendChild(this.mkSmallLabel("Base URL"));const a=this.mkTextInput("text","https://api.groq.com/openai/v1");a.id="legacy-base-url",a.value=e.baseUrl,r.appendChild(a),this.tabBody.appendChild(r);const i=document.createElement("div");Object.assign(i.style,{display:"flex",flexDirection:"column",gap:"3px"}),i.appendChild(this.mkSmallLabel("Default Model"));const l=this.mkTextInput("text","qwen/qwen3-32b");l.id="legacy-model",l.value=e.defaultModel,i.appendChild(l),this.tabBody.appendChild(i),Ln()&&this.tabBody.appendChild(this.buildMacNotice())}buildFooter(){const e=document.createElement("div");Object.assign(e.style,{padding:"10px 16px",borderTop:`1px solid ${c.border}`,display:"flex",gap:"8px",justifyContent:"flex-end",flexShrink:"0"});const t=document.createElement("button");t.textContent="Reset All",Object.assign(t.style,{padding:"6px 14px",background:"transparent",border:"1px solid #3a3040",borderRadius:"3px",color:"#7a607a",fontFamily:c.font,fontSize:"10px",cursor:"pointer"}),t.addEventListener("mouseenter",()=>{t.style.borderColor=c.red,t.style.color=c.red}),t.addEventListener("mouseleave",()=>{t.style.borderColor="#3a3040",t.style.color="#7a607a"}),t.addEventListener("click",o=>{if(o.stopPropagation(),window.confirm("Reset all LLM configuration including providers and routing? Cannot be undone.")){Tn();try{localStorage.removeItem("precursors.providerRegistry"),localStorage.removeItem(we),localStorage.removeItem("precursors.costTracker")}catch{}this.switchTab(this.activeTab)}});const n=document.createElement("button");return n.textContent="Save & Close",Object.assign(n.style,{padding:"6px 20px",background:c.cyanFaint,border:`1px solid ${c.cyan}60`,borderRadius:"3px",color:c.cyan,fontFamily:c.font,fontSize:"10px",cursor:"pointer",fontWeight:"bold"}),n.addEventListener("mouseenter",()=>{n.style.background="rgba(61,252,224,0.16)"}),n.addEventListener("mouseleave",()=>{n.style.background=c.cyanFaint}),n.addEventListener("click",o=>{o.stopPropagation(),this.saveOptions(),n.textContent="Saved ✓",setTimeout(()=>{n.textContent="Save & Close",this.hide()},400)}),e.append(t,n),e}saveOptions(){const e=l=>document.getElementById(l),t=e("opt-no-think"),n=e("opt-strip-think"),o=e("legacy-base-url"),r=e("legacy-model"),a=ae(),i={...a,injectNoThink:t?.checked??a.injectNoThink,stripThinkTags:n?.checked??a.stripThinkTags,baseUrl:o?.value.trim().replace(/\/$/,"")??a.baseUrl,defaultModel:r?.value.trim()??a.defaultModel};Pe(i)}renderFlags(){const e=document.createElement("div");Object.assign(e.style,{fontSize:"10px",color:c.textDim,lineHeight:"1.6",padding:"2px 0 8px"}),e.textContent="Feature flags persist in localStorage. Some flags (e.g. FF_DEV_TOOLS) take effect immediately; others may require a page reload.",this.tabBody.appendChild(e);for(const t of ye.allFlags())this.tabBody.appendChild(this.buildFlagRow(t))}buildFlagRow(e){const t=document.createElement("div");Object.assign(t.style,{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 10px",background:c.bgCard,border:`1px solid ${c.borderDim}`,borderRadius:"4px",gap:"10px"});const n=document.createElement("div");Object.assign(n.style,{flex:"1",minWidth:"0"});const o=document.createElement("div");Object.assign(o.style,{color:c.textBright,fontSize:"11px",marginBottom:"2px"}),o.textContent=ye.label(e);const r=document.createElement("div");Object.assign(r.style,{color:c.textDim,fontSize:"9px",fontFamily:c.font,letterSpacing:"0.05em"}),r.textContent=e,n.appendChild(o),n.appendChild(r),t.appendChild(n);const a=document.createElement("button"),i=()=>{const l=ye.isEnabled(e);a.textContent=l?"ON":"OFF",a.style.color=l?c.cyan:c.textDim,a.style.borderColor=l?"#1a6a60":c.border,a.style.background=l?"rgba(61,252,224,0.08)":"transparent",t.style.borderColor=l?`${c.cyan}30`:c.borderDim};return Object.assign(a.style,{padding:"3px 12px",borderRadius:"3px",border:`1px solid ${c.border}`,fontFamily:c.font,fontSize:"10px",letterSpacing:"0.1em",cursor:"pointer",flexShrink:"0",transition:"color 0.15s, border-color 0.15s, background 0.15s",fontWeight:"bold"}),i(),a.addEventListener("click",l=>{l.stopPropagation(),ye.toggle(e),i()}),a.addEventListener("mouseenter",()=>{a.style.borderColor=c.cyan}),a.addEventListener("mouseleave",()=>{i()}),t.appendChild(a),t}mkBar(e,t){const n=document.createElement("div");Object.assign(n.style,{height:"4px",background:"#1a1b28",borderRadius:"2px",overflow:"hidden"});const o=document.createElement("div");return Object.assign(o.style,{height:"100%",width:`${Math.min(100,Math.round(e*100))}%`,background:t,transition:"width 0.3s ease"}),n.appendChild(o),n}mkOutlineBtn(e,t,n="10px",o="4px 12px"){const r=document.createElement("button");return r.textContent=e,Object.assign(r.style,{padding:o,background:"transparent",border:`1px solid ${t}40`,borderRadius:"3px",color:t,fontFamily:c.font,fontSize:n,cursor:"pointer",transition:"background 0.15s, border-color 0.15s"}),r.addEventListener("mouseenter",()=>{r.style.background=`${t}12`,r.style.borderColor=`${t}80`}),r.addEventListener("mouseleave",()=>{r.style.background="transparent",r.style.borderColor=`${t}40`}),r.addEventListener("click",a=>a.stopPropagation()),r}mkTextInput(e,t){const n=document.createElement("input");return n.type=e,n.placeholder=t,Object.assign(n.style,{width:"100%",padding:"5px 8px",background:c.bgInput,border:`1px solid ${c.border}`,borderRadius:"3px",color:c.textBright,fontFamily:c.font,fontSize:"10px",boxSizing:"border-box"}),n.addEventListener("click",o=>o.stopPropagation()),n.addEventListener("keydown",o=>{o.stopPropagation(),o.key==="Escape"&&this.hide()}),n.addEventListener("focus",()=>{n.style.borderColor=`${c.cyan}40`}),n.addEventListener("blur",()=>{n.style.borderColor=c.border}),n}mkLabeledInput(e,t,n,o={}){const r=document.createElement("div");Object.assign(r.style,{display:"flex",alignItems:"center",gap:"4px"});const a=this.mkSmallLabel(e),i=document.createElement("input");return i.type=o.type??"text",i.value=String(t),o.min!==void 0&&(i.min=o.min),o.max!==void 0&&(i.max=o.max),o.step!==void 0&&(i.step=o.step),Object.assign(i.style,{width:o.width??"80px",padding:"3px 6px",background:c.bgInput,border:`1px solid ${c.border}`,borderRadius:"3px",color:c.textBright,fontFamily:c.font,fontSize:"10px",textAlign:o.textAlign??"left"}),i.addEventListener("click",l=>l.stopPropagation()),i.addEventListener("keydown",l=>l.stopPropagation()),i.addEventListener("change",()=>n(i.value)),i.addEventListener("focus",()=>{i.style.borderColor=`${c.cyan}40`}),i.addEventListener("blur",()=>{i.style.borderColor=c.border}),r.append(a,i),r}mkSmallLabel(e){const t=document.createElement("div");return Object.assign(t.style,{color:c.textDim,fontSize:"9px",letterSpacing:"0.1em",textTransform:"uppercase",whiteSpace:"nowrap"}),t.textContent=e,t}mkSectionTitle(e){const t=document.createElement("div");return Object.assign(t.style,{color:c.gold,fontSize:"9px",letterSpacing:"0.2em",textTransform:"uppercase",paddingBottom:"4px",borderBottom:`1px solid ${c.borderDim}`}),t.textContent=e,t}mkCheckboxRow(e,t,n){const o=document.createElement("label");Object.assign(o.style,{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",color:c.text,fontSize:"10px"}),o.addEventListener("click",i=>i.stopPropagation());const r=document.createElement("input");r.type="checkbox",r.id=e,r.checked=n,Object.assign(r.style,{accentColor:c.cyan,cursor:"pointer",flexShrink:"0"});const a=document.createElement("span");return a.textContent=t,o.append(r,a),o}buildMacNotice(){const e=document.createElement("div");return Object.assign(e.style,{padding:"10px 12px",background:"#0d1820",border:"1px solid #1a3040",borderRadius:"4px",color:"#60a8c0",fontSize:"10px",lineHeight:"1.6"}),e.innerHTML=`
      <div style="color:#3dfce0;font-size:9px;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:6px">Mac Detected — MLX Available</div>
      Run local LLMs with <strong style="color:#d8dce8">mlx_lm</strong>:<br>
      <code style="color:#b0e0f0;background:#0a1520;padding:2px 6px;border-radius:2px;font-size:9px">pip install mlx-lm</code><br>
      <code style="color:#b0e0f0;background:#0a1520;padding:2px 6px;border-radius:2px;font-size:9px;margin-top:4px;display:inline-block">mlx_lm.server --model mlx-community/Qwen3-8B-4bit --port 8080</code>
    `,e}}const ct=658192,dt=1184799,Le=4016762,K="#70758f",pt="#c8ccdd",ut="#e8ecf8",Ie="#7b8ed4",w=72,fe=10,Re=8,be=4;function mt(s){const e=Math.floor(s/3600),t=Math.floor(s%3600/60);return e>0?`${e}h ${t}m`:`${t}m`}class Hn extends J.Scene{deleteConfirmSlot=null;_enterKeyHandler=null;_scrollOffset=0;_pauseMenu=null;_llmSettingsPanel=null;constructor(){super({key:"MenuScene"})}create(){const e=document.getElementById("loading-screen");e&&e.classList.add("fade-out"),this._drawBackground(),this._drawTitle(),this._drawSlots(),this._drawNewGameButton(),this._bindEnterKey()}_drawBackground(){this.add.rectangle(T/2,W/2,T,W,ct);const e=this.add.graphics(),t=new J.Math.RandomDataGenerator(["creatures_menu"]);for(let a=0;a<280;a++){const i=t.between(0,T),l=t.between(0,W),d=t.frac()<.15?1.5:.8,u=.2+t.frac()*.6;e.fillStyle(16777215,u),e.fillCircle(i,l,d)}const n=this.add.graphics(),o=T,r=W;for(let a=0;a<12;a++){const i=a/12,l=i*.55,d=(1-i)*Math.min(o,r)*.55;n.fillStyle(ct,l),n.fillRect(-d/2+o/2-o/2,-d/2+r/2-r/2,o+d,d/2),n.fillRect(-d/2+o/2-o/2,r-d/4,o+d,d/2)}}_drawTitle(){this.add.text(T/2,72,"PRECURSORS",{fontSize:"52px",fontFamily:"JetBrains Mono, Menlo, monospace",color:ut,stroke:"#0a0b10",strokeThickness:6,letterSpacing:8}).setOrigin(.5,.5),this.add.text(T/2,113,"Origins of Folklore",{fontSize:"17px",fontFamily:"Cormorant Garamond, Garamond, serif",fontStyle:"italic",color:"#b4b8ce",letterSpacing:3}).setOrigin(.5,.5),this.add.text(T/2,139,"a living world of evolving minds",{fontSize:"12px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#7a7f98",letterSpacing:2}).setOrigin(.5,.5);const e=this.add.graphics();e.lineStyle(1,5925530,.6),e.lineBetween(T/2-240,160,T/2+240,160)}_drawSlots(){const e=F.listSlots(),t=e.includes("autosave");let n=180;if(t){const a=F.getSlotMeta("autosave");this._drawContinueButton(n,a),n+=w+fe+32;const i=this.add.graphics();i.lineStyle(1,2764098,.7),i.lineBetween(T/2-240,n-18,T/2+240,n-18)}const o=e.filter(a=>a!=="autosave").slice(0,Re),r=o.length>0?`SAVES  (${o.length}/${Re})`:"SAVES";if(this.add.text(T/2-240,n,r,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:K,letterSpacing:4}).setOrigin(0,.5),n+=20,o.length===0)this.add.text(T/2,n+30,"No saved games",{fontSize:"13px",fontFamily:"JetBrains Mono, Menlo, monospace",color:K}).setOrigin(.5,.5),n+=70;else{const a=o.slice(this._scrollOffset,this._scrollOffset+be),i=this._scrollOffset>0,l=this._scrollOffset+be<o.length;i&&this._drawScrollArrow(n-14,!0,o.length);for(const d of a)this._drawSlotRow(n,d),n+=w+fe;l&&this._drawScrollArrow(n-4,!1,o.length)}}_drawScrollArrow(e,t,n){const o=T/2,r=t?"▲  more saves above":"▼  more saves below",a=this.add.text(o,e,r,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:Ie}).setOrigin(.5,.5).setInteractive({cursor:"pointer"});a.on("pointerup",()=>{this._scrollOffset+=t?-1:1,this.scene.restart()}),a.on("pointerover",()=>a.setColor(ut)),a.on("pointerout",()=>a.setColor(Ie))}_drawContinueButton(e,t){const n=T/2,o=480,r=this.add.graphics();if(r.fillStyle(1712192,1),r.fillRoundedRect(n-o/2,e,o,w,6),r.lineStyle(1,4876980,.8),r.strokeRoundedRect(n-o/2,e,o,w,6),this.add.text(n-o/2+18,e+18,"▶  CONTINUE",{fontSize:"16px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#9ab4f4",letterSpacing:2}),t){const l=[`autosave  ·  ${new Date(t.timestamp).toLocaleString()}`];t.nornCount>0&&l.push(`${t.nornCount} norns`),t.maxGeneration>0&&l.push(`gen ${t.maxGeneration}`),t.playtime>0&&l.push(mt(t.playtime)),this.add.text(n-o/2+18,e+44,l.join("  ·  "),{fontSize:"11px",fontFamily:"JetBrains Mono, Menlo, monospace",color:K})}const a=this.add.zone(n,e+w/2,o,w+16).setInteractive({cursor:"pointer"});a.on("pointerover",()=>{r.clear(),r.fillStyle(1976400,1),r.fillRoundedRect(n-o/2,e,o,w,6),r.lineStyle(1,6982356,1),r.strokeRoundedRect(n-o/2,e,o,w,6)}),a.on("pointerout",()=>{r.clear(),r.fillStyle(1712192,1),r.fillRoundedRect(n-o/2,e,o,w,6),r.lineStyle(1,4876980,.8),r.strokeRoundedRect(n-o/2,e,o,w,6)}),a.on("pointerup",()=>this._startGame("autosave"))}_drawSlotRow(e,t){const n=T/2,o=480,r=70,a=8,i=F.getSlotMeta(t),l=i?new Date(i.timestamp).toLocaleString():"Unknown",d=t.replace(/^imported_/,"").replace(/_/g," "),u=[l];i&&i.nornCount>0&&u.push(`${i.nornCount} norns`),i&&i.maxGeneration>0&&u.push(`gen ${i.maxGeneration}`),i&&i.playtime>0&&u.push(mt(i.playtime));const m=this.add.graphics();m.fillStyle(dt,1),m.fillRoundedRect(n-o/2,e,o-r*3-a*4,w,4),m.lineStyle(1,Le,.4),m.strokeRoundedRect(n-o/2,e,o-r*3-a*4,w,4),this.add.text(n-o/2+14,e+16,d,{fontSize:"13px",fontFamily:"JetBrains Mono, Menlo, monospace",color:pt}),this.add.text(n-o/2+14,e+40,u.join("  ·  "),{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:K});const h=n+o/2-r*3-a*3;this._drawSmallButton(h,e,r,w,"LOAD",1716264,3833952,()=>{this._startGame(t)});const f=n+o/2-r*2-a*2;this._drawDeleteButton(f,e,r,w,t);const k=n+o/2-r-a;this._drawSyncButton(k,e,r,w,t);const E=o-r*3-a*4,C=this.add.zone(n-o/2+E/2,e+w/2,E,w).setInteractive({cursor:"pointer"});C.on("pointerover",()=>{m.clear(),m.fillStyle(1579562,1),m.fillRoundedRect(n-o/2,e,E,w,4),m.lineStyle(1,Le,.7),m.strokeRoundedRect(n-o/2,e,E,w,4)}),C.on("pointerout",()=>{m.clear(),m.fillStyle(dt,1),m.fillRoundedRect(n-o/2,e,E,w,4),m.lineStyle(1,Le,.4),m.strokeRoundedRect(n-o/2,e,E,w,4)}),C.on("pointerup",()=>this._startGame(t))}_drawSyncButton(e,t,n,o,r){const a=this.add.graphics(),i=u=>{a.clear(),a.fillStyle(u?925232:661540,1),a.fillRoundedRect(e,t+8,n,o-16,4),a.lineStyle(1,4491468,u?1:.7),a.strokeRoundedRect(e,t+8,n,o-16,4)};i(!1);const l=this.add.text(e+n/2,t+o/2,"SYNC",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#88ccff",letterSpacing:1}).setOrigin(.5,.5),d=this.add.zone(e+n/2,t+o/2,n,o-16).setInteractive({cursor:"pointer"});d.on("pointerover",()=>i(!0)),d.on("pointerout",()=>i(!1)),d.on("pointerup",()=>{l.setText("..."),l.setColor("#88ccff"),F.pushToCloud(r).then(u=>{l.setText(u?"✓":"ERR"),l.setColor(u?"#88ffaa":"#ff8888"),this.time.delayedCall(1500,()=>{l.setText("SYNC"),l.setColor("#88ccff")})})})}_drawSmallButton(e,t,n,o,r,a,i,l){const d=this.add.graphics(),u=h=>{d.clear(),d.fillStyle(h?a+1052688:a,1),d.fillRoundedRect(e,t+8,n,o-16,4),d.lineStyle(1,i,h?1:.7),d.strokeRoundedRect(e,t+8,n,o-16,4)};u(!1),this.add.text(e+n/2,t+o/2,r,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:pt,letterSpacing:1}).setOrigin(.5,.5);const m=this.add.zone(e+n/2,t+o/2,n,o-16).setInteractive({cursor:"pointer"});m.on("pointerover",()=>u(!0)),m.on("pointerout",()=>u(!1)),m.on("pointerup",l)}_drawDeleteButton(e,t,n,o,r){let a=!1;const i=this.add.graphics(),l=this.add.text(e+n/2,t+o/2,"DEL",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#8b6060",letterSpacing:1}).setOrigin(.5,.5),d=(m,h)=>{i.clear();const f=h?8075834:3807770,k=h?11554896:6959152;i.fillStyle(m?f+1052688:f,1),i.fillRoundedRect(e,t+8,n,o-16,4),i.lineStyle(1,k,m?1:.7),i.strokeRoundedRect(e,t+8,n,o-16,4),l.setText(h?"SURE?":"DEL"),l.setColor(h?"#e07070":"#8b6060")};d(!1,!1);const u=this.add.zone(e+n/2,t+o/2,n,o-16).setInteractive({cursor:"pointer"});u.on("pointerover",()=>d(!0,a)),u.on("pointerout",()=>d(!1,a)),u.on("pointerup",()=>{a?(F.deleteSlot(r),this.scene.restart()):(a=!0,d(!1,!0),this.time.delayedCall(2e3,()=>{a=!1,d(!1,!1)}))})}_drawNewGameButton(){const e=F.listSlots(),t=e.includes("autosave"),n=e.filter(h=>h!=="autosave").slice(0,Re),o=Math.min(n.length,be);let r=180;t&&(r+=w+fe+32),r+=20,n.length===0?r+=70:(r+=o*(w+fe),n.length>be&&(r+=20)),r+=28;const a=T/2,i=480,l=68,d=this.add.graphics(),u=h=>{d.clear(),d.fillStyle(h?1714208:1318424,1),d.fillRoundedRect(a-i/2,r,i,l,6),d.lineStyle(1,h?7381088:4878400,h?1:.9),d.strokeRoundedRect(a-i/2,r,i,l,6)};u(!1),this.add.text(a,r+l/2-8,"NEW GAME",{fontSize:"16px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#a0c890",letterSpacing:4}).setOrigin(.5,.5),this.add.text(a,r+l/2+12,"begin a new world",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:K,letterSpacing:1}).setOrigin(.5,.5);const m=this.add.zone(a,r+l/2,i,l+24).setInteractive({cursor:"pointer"});m.on("pointerover",()=>u(!0)),m.on("pointerout",()=>u(!1)),m.on("pointerup",()=>this._startGame(void 0)),this._drawCloudPullButton(r+l+12),this._drawSettingsButton(r+l+12+40+12),this.add.text(a,W-24,"enter ↵ new game  ·  F5 quick-save  ·  F9 quick-load  ·  ` dev panel",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:K,letterSpacing:1}).setOrigin(.5,.5)}_drawCloudPullButton(e){const t=T/2,n=480,o=40,r=this.add.graphics(),a=d=>{r.clear(),r.fillStyle(d?924200:660512,1),r.fillRoundedRect(t-n/2,e,n,o,6),r.lineStyle(1,d?6724044:3368584,d?1:.8),r.strokeRoundedRect(t-n/2,e,n,o,6)};a(!1);const i=this.add.text(t,e+o/2,"↓ PULL FROM CLOUD",{fontSize:"11px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#88ccff",letterSpacing:3}).setOrigin(.5,.5),l=this.add.zone(t,e+o/2,n,o).setInteractive({cursor:"pointer"});l.on("pointerover",()=>a(!0)),l.on("pointerout",()=>a(!1)),l.on("pointerup",()=>{i.setText("checking cloud..."),i.setColor("#88ccff"),F.listCloudSlotsWithStatus().then(async d=>{if(d.status==="not_logged_in"){i.setText("not logged in"),i.setColor(K),this.time.delayedCall(2e3,()=>{i.setText("↓ PULL FROM CLOUD"),i.setColor("#88ccff")});return}if(d.status==="unavailable"){i.setText("cloud saves unavailable"),i.setColor("#cc6644"),this.time.delayedCall(2e3,()=>{i.setText("↓ PULL FROM CLOUD"),i.setColor("#88ccff")});return}if(d.slots.length===0){i.setText("no cloud saves found"),i.setColor(K),this.time.delayedCall(2e3,()=>{i.setText("↓ PULL FROM CLOUD"),i.setColor("#88ccff")});return}i.setText(`pulling ${d.slots.length} slot(s)...`);for(const u of d.slots)await F.pullFromCloud(u.slotName);this.scene.restart()})})}_drawSettingsButton(e){const t=T/2,n=480,o=40,r=this.add.graphics(),a=l=>{r.clear(),r.fillStyle(l?1315870:921368,1),r.fillRoundedRect(t-n/2,e,n,o,6),r.lineStyle(1,l?4062432:4016762,l?.7:.5),r.strokeRoundedRect(t-n/2,e,n,o,6)};a(!1),this.add.text(t,e+o/2,"SETTINGS",{fontSize:"11px",fontFamily:"JetBrains Mono, Menlo, monospace",color:Ie,letterSpacing:3}).setOrigin(.5,.5);const i=this.add.zone(t,e+o/2,n,o).setInteractive({cursor:"pointer"});i.on("pointerover",()=>a(!0)),i.on("pointerout",()=>a(!1)),i.on("pointerup",()=>this._openSettings())}_openSettings(){if(this._pauseMenu){this._pauseMenu.toggle();return}this._llmSettingsPanel=new Gn;const e="precursors.voiceVolume",t="precursors.voiceMuted",n="precursors.musicVolume",o="precursors.musicMuted",r="precursors.speechBubblesHidden";let a=parseFloat(localStorage.getItem(e)??"1"),i=localStorage.getItem(t)==="true",l=parseFloat(localStorage.getItem(n)??"1"),d=localStorage.getItem(o)==="true",u=localStorage.getItem(r)==="true";this._pauseMenu=new Dn({getVoiceVolume:()=>a,setVoiceVolume:m=>{a=m,localStorage.setItem(e,String(m))},isVoiceMuted:()=>i,toggleVoiceMute:()=>{i=!i,localStorage.setItem(t,String(i))},getMusicVolume:()=>l,setMusicVolume:m=>{l=m,localStorage.setItem(n,String(m))},isMusicPaused:()=>d,toggleMusicPause:()=>{d=!d,localStorage.setItem(o,String(d))},areBubblesHidden:()=>u,toggleBubbles:()=>{u=!u,localStorage.setItem(r,String(u))},openLLMSettings:()=>this._llmSettingsPanel.toggle()},"menu"),this._pauseMenu.show()}_bindEnterKey(){this._enterKeyHandler=e=>{if(!this.sys.isActive()||this.sys.game.scene.isActive("GameScene")){document.removeEventListener("keydown",this._enterKeyHandler),this._enterKeyHandler=null;return}if(e.key==="Enter"||e.key==="Return"){const t=e.target?.tagName;if(t==="INPUT"||t==="TEXTAREA")return;const o=F.listSlots().includes("autosave")?"autosave":void 0;this._startGame(o)}},document.addEventListener("keydown",this._enterKeyHandler),this.events.once("shutdown",()=>{this._enterKeyHandler&&(document.removeEventListener("keydown",this._enterKeyHandler),this._enterKeyHandler=null),this.children.removeAll(!0),this._pauseMenu&&(this._pauseMenu.destroy(),this._pauseMenu=null),this._llmSettingsPanel&&(this._llmSettingsPanel.destroy(),this._llmSettingsPanel=null)})}_startGame(e){p.emit("game:loading:show");const t=()=>{e?this.scene.start("GameScene",{loadSlot:e}):this.scene.start("GameScene")};this.sys.game.scene.getScene("GameScene")?t():En(async()=>{const{GameScene:n}=await import("./GameScene-KhLvqv28.js");return{GameScene:n}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(({GameScene:n})=>{this.sys.game.scene.add("GameScene",n),t()})}}class Vn{static init(){const e=new Map,t=new Set,n=new Set,o=new Set;p.on("norn:added",r=>{e.set(r.id,r);const a=z.getLog(r.id);for(const i of a)i.type==="first_breeding"&&n.add(r.id),i.type==="first_word"&&t.add(r.id),i.type==="near_death"&&o.add(r.id)}),p.on("norn:removed",r=>{z.flush(r.id,r.name,String(r.species)),e.delete(r.id),t.delete(r.id),n.delete(r.id),o.delete(r.id)}),p.on("norn:graduated",(r,a,i)=>{z.append(r.id,{type:"iq_graduation",timestamp:Date.now(),data:{oldTier:a,newTier:i,iq:r.iq}})}),p.on("norn:speech",(r,a)=>{!t.has(r.id)&&r.knownWords.size>=1&&(z.append(r.id,{type:"first_word",timestamp:Date.now(),data:{wordCount:r.knownWords.size}}),t.add(r.id))}),p.on("norn:mating",(r,a)=>{const i=Date.now();n.has(r.id)||(z.append(r.id,{type:"first_breeding",timestamp:i,data:{partnerId:a.id,partnerName:a.name}}),n.add(r.id)),n.has(a.id)||(z.append(a.id,{type:"first_breeding",timestamp:i,data:{partnerId:r.id,partnerName:r.name}}),n.add(a.id))}),p.on("social:interaction",(r,a,i,l)=>{Math.abs(l)>=.2&&z.append(r.id,{type:"social_interaction",timestamp:Date.now(),data:{targetId:a.id,targetName:a.name,interactionType:i,trustDelta:l}})}),p.on("norn:dream",(r,a,i,l)=>{z.append(r.id,{type:"dream",timestamp:Date.now(),data:{episodesReplayed:a,iqBoost:i,dreamContent:l}})}),setInterval(()=>{for(const[r,a]of e){const i=a.chemicals.get(Qt.Injury);i>.8&&!o.has(r)?(z.append(r,{type:"near_death",timestamp:Date.now(),data:{injury:i}}),o.add(r)):i<.4&&o.has(r)&&o.delete(r)}},5e3)}}class Kn{serverUrl;playerId;playerDisplayName;triggerEl;modalEl;modalOpen=!1;constructor(e={}){this.serverUrl=e.serverUrl??"",this.playerId=e.playerId??"anonymous",this.playerDisplayName=e.playerDisplayName,this.triggerEl=this._buildTrigger(),this.modalEl=this._buildModal(),document.body.appendChild(this.triggerEl),document.body.appendChild(this.modalEl)}setPlayer(e,t){this.playerId=e,this.playerDisplayName=t}destroy(){this.triggerEl.remove(),this.modalEl.remove()}_buildTrigger(){const e=document.createElement("button");return e.id="folkfork-trigger",e.title="Share lore feedback",e.textContent="◈",e.style.cssText=`
      position: fixed;
      bottom: var(--layout-bottom-bar-height);
      right: var(--layout-panel-width);
      width: 36px;
      height: 36px;
      padding: 0;
      border-radius: 50%;
      border: 1px solid rgba(61,252,224,0.28);
      background: rgba(7,8,13,0.88);
      color: rgba(61,252,224,0.6);
      font-size: 18px;
      letter-spacing: 0;
      cursor: pointer;
      z-index: 9000;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.5);
      transition: border-color 0.2s, color 0.2s;
      backdrop-filter: blur(4px);
    `,e.addEventListener("mouseenter",()=>{e.style.borderColor="rgba(61,252,224,0.55)",e.style.color="rgba(61,252,224,0.95)"}),e.addEventListener("mouseleave",()=>{e.style.borderColor="rgba(61,252,224,0.28)",e.style.color="rgba(61,252,224,0.6)"}),e.addEventListener("click",()=>this._toggleModal()),e}_buildModal(){const e=document.createElement("div");e.id="folkfork-modal",e.style.cssText=`
      display: none;
      position: fixed;
      inset: 0;
      z-index: 9001;
      background: rgba(0,0,0,0.55);
      align-items: center;
      justify-content: center;
    `;const t=document.createElement("div");return t.style.cssText=`
      background: #07080d;
      border: 1px solid rgba(61,252,224,0.15);
      border-radius: 5px;
      padding: 24px;
      width: min(440px, 90vw);
      color: #d8dce8;
      font-family: 'JetBrains Mono', monospace;
      box-shadow: 0 8px 32px rgba(0,0,0,0.85), 0 0 0 1px rgba(61,252,224,0.04);
    `,t.innerHTML=`
      <h2 style="margin:0 0 4px;font-size:17px;font-weight:300;letter-spacing:0.12em;
          font-family:'Cormorant Garamond',serif;color:#3dfce0;">
        Share Feedback
      </h2>
      <p style="margin:0 0 18px;font-size:9px;letter-spacing:0.05em;color:rgba(216,220,232,0.4);">
        Your ideas shape the world. What would you like to change or suggest?
      </p>

      <label style="font-size:8px;letter-spacing:0.15em;text-transform:uppercase;
          color:rgba(61,252,224,0.45);display:block;margin-bottom:5px;">
        Category
      </label>
      <select id="ff-type" style="
        width:100%;padding:6px 10px;border-radius:3px;
        border:1px solid rgba(61,252,224,0.18);
        background:rgba(20,21,32,0.9);color:#d8dce8;
        font-family:'JetBrains Mono',monospace;font-size:10px;margin-bottom:14px;
        outline:none;
      ">
        <option value="general">General</option>
        <option value="species">Species / Creature</option>
        <option value="lore">Lore / Myth / Legend</option>
        <option value="name">Names</option>
        <option value="visual">Visual / Appearance</option>
      </select>

      <label style="font-size:8px;letter-spacing:0.15em;text-transform:uppercase;
          color:rgba(61,252,224,0.45);display:block;margin-bottom:5px;">
        Subject <span style="color:rgba(216,220,232,0.25);text-transform:none;letter-spacing:0;">(optional)</span>
      </label>
      <input id="ff-subject" type="text" placeholder="e.g. Norns, the Great Migration…"
        maxlength="200"
        style="
          width:100%;box-sizing:border-box;padding:6px 10px;border-radius:3px;
          border:1px solid rgba(61,252,224,0.18);background:rgba(20,21,32,0.9);
          color:#d8dce8;font-family:'JetBrains Mono',monospace;font-size:10px;
          margin-bottom:14px;outline:none;
        "
      />

      <label style="font-size:8px;letter-spacing:0.15em;text-transform:uppercase;
          color:rgba(61,252,224,0.45);display:block;margin-bottom:5px;">
        Suggestion <span style="color:rgba(61,252,224,0.6);">*</span>
      </label>
      <textarea id="ff-suggestion" rows="4" maxlength="2000"
        placeholder="Describe your idea…"
        style="
          width:100%;box-sizing:border-box;padding:6px 10px;border-radius:3px;
          border:1px solid rgba(61,252,224,0.18);background:rgba(20,21,32,0.9);
          color:#d8dce8;font-family:'JetBrains Mono',monospace;font-size:10px;
          resize:vertical;margin-bottom:14px;outline:none;
        "
      ></textarea>

      <label style="font-size:8px;letter-spacing:0.15em;text-transform:uppercase;
          color:rgba(61,252,224,0.45);display:block;margin-bottom:5px;">
        Rationale <span style="color:rgba(216,220,232,0.25);text-transform:none;letter-spacing:0;">(optional)</span>
      </label>
      <textarea id="ff-rationale" rows="2" maxlength="2000"
        placeholder="Why would this improve the world?"
        style="
          width:100%;box-sizing:border-box;padding:6px 10px;border-radius:3px;
          border:1px solid rgba(61,252,224,0.18);background:rgba(20,21,32,0.9);
          color:#d8dce8;font-family:'JetBrains Mono',monospace;font-size:10px;
          resize:vertical;margin-bottom:18px;outline:none;
        "
      ></textarea>

      <div style="display:flex;gap:10px;justify-content:flex-end;">
        <button id="ff-cancel" style="
          padding:7px 16px;border-radius:3px;
          border:1px solid rgba(61,252,224,0.18);
          background:transparent;color:rgba(216,220,232,0.5);cursor:pointer;
          font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:0.08em;
        ">CANCEL</button>
        <button id="ff-submit" style="
          padding:7px 16px;border-radius:3px;
          border:1px solid rgba(61,252,224,0.45);
          background:rgba(61,252,224,0.1);color:#3dfce0;cursor:pointer;
          font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:0.08em;
        ">SEND</button>
      </div>

      <p id="ff-status" style="
        margin:12px 0 0;font-size:9px;text-align:center;letter-spacing:0.05em;
        color:#3dfce0;display:none;
      "></p>
    `,t.querySelector("#ff-cancel").addEventListener("click",()=>this._closeModal()),t.querySelector("#ff-submit").addEventListener("click",()=>this._submitFeedback(t)),e.addEventListener("click",n=>{n.target===e&&this._closeModal()}),e.appendChild(t),e}_toggleModal(){this.modalOpen?this._closeModal():this._openModal()}_openModal(){this.modalOpen=!0,this.modalEl.style.display="flex"}_closeModal(){this.modalOpen=!1,this.modalEl.style.display="none",this._resetForm()}_resetForm(){const e=n=>this.modalEl.querySelector(n);e("#ff-suggestion").value="",e("#ff-subject").value="",e("#ff-rationale").value="",e("#ff-type").value="general";const t=e("#ff-status");t.style.display="none",t.textContent=""}async _submitFeedback(e){const t=d=>e.querySelector(d),n=t("#ff-suggestion").value.trim(),o=t("#ff-subject").value.trim(),r=t("#ff-rationale").value.trim(),a=t("#ff-type").value,i=t("#ff-status"),l=t("#ff-submit");if(!n){i.style.color="#f38ba8",i.textContent="Please describe your suggestion.",i.style.display="block";return}l.disabled=!0,l.textContent="Sending…";try{const d=await fetch(`${this.serverUrl}/api/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:a,subject:o||void 0,suggestedChange:n,rationale:r||void 0,playerId:this.playerId,playerDisplayName:this.playerDisplayName,metadata:{gameVersion:typeof __APP_VERSION__<"u"?__APP_VERSION__:"unknown"}})});if(d.ok)i.style.color="rgba(61,252,224,0.8)",i.textContent="✓ Feedback received — thank you.",i.style.display="block",setTimeout(()=>this._closeModal(),2e3);else throw new Error(`Server error ${d.status}`)}catch(d){console.error("[FeedbackButton] submit error:",d),i.style.color="rgba(240,112,64,0.9)",i.textContent="Could not send feedback. Please try again.",i.style.display="block",l.disabled=!1,l.textContent="SEND"}}}class Jn{apiUrl;game;triggerEl;modalEl;modalOpen=!1;screenshotData=null;playerId=null;playerDisplayName=null;constructor(e={}){this.apiUrl=e.apiUrl??"https://feedback.multiversestudios.xyz/submit",this.game=e.game??null,this.triggerEl=this._buildTrigger(),this.modalEl=this._buildModal(),document.body.appendChild(this.triggerEl),document.body.appendChild(this.modalEl)}setGame(e){this.game=e}setPlayer(e,t){this.playerId=e,this.playerDisplayName=t??null}destroy(){this.triggerEl.remove(),this.modalEl.remove()}_buildTrigger(){const e=document.createElement("button");return e.id="bugreport-trigger",e.title="report a substrate anomaly",e.textContent="anomaly?",e.style.cssText=`
      position: fixed;
      bottom: calc(var(--layout-bottom-bar-height) + 40px);
      right: var(--layout-panel-width);
      height: 36px;
      padding: 0 14px;
      white-space: nowrap;
      overflow: visible;
      border-radius: 3px;
      border: 1px solid rgba(240,112,64,0.35);
      background: rgba(7,8,13,0.88);
      color: rgba(240,112,64,0.7);
      font-size: 9px;
      font-weight: 600;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.12em;
      cursor: pointer;
      z-index: 9000;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.5);
      transition: border-color 0.2s, color 0.2s;
      backdrop-filter: blur(4px);
    `,e.addEventListener("mouseenter",()=>{e.style.borderColor="rgba(240,112,64,0.6)",e.style.color="rgba(240,112,64,1)"}),e.addEventListener("mouseleave",()=>{e.style.borderColor="rgba(240,112,64,0.35)",e.style.color="rgba(240,112,64,0.7)"}),e.addEventListener("click",()=>this._toggleModal()),e}_buildModal(){const e=document.createElement("div");e.id="bugreport-modal",e.style.cssText=`
      display: none;
      position: fixed;
      inset: 0;
      z-index: 9001;
      background: rgba(0,0,0,0.55);
      align-items: center;
      justify-content: center;
    `;const t=document.createElement("div");return t.style.cssText=`
      background: #07080d;
      border: 1px solid rgba(240,112,64,0.18);
      border-radius: 5px;
      padding: 24px;
      width: min(480px, 90vw);
      max-height: 90vh;
      overflow-y: auto;
      color: #d8dce8;
      font-family: 'JetBrains Mono', monospace;
      box-shadow: 0 8px 32px rgba(0,0,0,0.85), 0 0 0 1px rgba(240,112,64,0.04);
    `,t.innerHTML=`
      <h2 style="margin:0 0 4px;font-size:17px;font-weight:300;letter-spacing:0.12em;
          font-family:'Cormorant Garamond',serif;color:rgba(240,112,64,0.9);">
        Report a Bug
      </h2>
      <p style="margin:0 0 18px;font-size:9px;letter-spacing:0.05em;color:rgba(216,220,232,0.4);">
        Found something broken? Describe what happened and we'll fix it.
      </p>

      <label style="font-size:8px;letter-spacing:0.15em;text-transform:uppercase;
          color:rgba(240,112,64,0.5);display:block;margin-bottom:5px;">
        Severity
      </label>
      <select id="br-severity" style="
        width:100%;padding:6px 10px;border-radius:3px;
        border:1px solid rgba(240,112,64,0.2);
        background:rgba(20,21,32,0.9);color:#d8dce8;
        font-family:'JetBrains Mono',monospace;font-size:10px;margin-bottom:14px;
        outline:none;
      ">
        <option value="minor">Minor — annoying but playable</option>
        <option value="major">Major — blocks some gameplay</option>
        <option value="critical">Critical — game-breaking / crash</option>
        <option value="cosmetic">Cosmetic — visual glitch</option>
      </select>

      <label style="font-size:8px;letter-spacing:0.15em;text-transform:uppercase;
          color:rgba(240,112,64,0.5);display:block;margin-bottom:5px;">
        Title <span style="color:rgba(240,112,64,0.7);">*</span>
      </label>
      <input id="br-title" type="text" maxlength="200"
        placeholder="Brief summary of the issue"
        style="
          width:100%;box-sizing:border-box;padding:6px 10px;border-radius:3px;
          border:1px solid rgba(61,252,224,0.15);background:rgba(20,21,32,0.9);
          color:#d8dce8;font-family:'JetBrains Mono',monospace;font-size:10px;
          margin-bottom:14px;outline:none;
        "
      />

      <label style="font-size:8px;letter-spacing:0.15em;text-transform:uppercase;
          color:rgba(240,112,64,0.5);display:block;margin-bottom:5px;">
        What happened? <span style="color:rgba(240,112,64,0.7);">*</span>
      </label>
      <textarea id="br-description" rows="4" maxlength="5000"
        placeholder="What were you doing? What did you expect? What happened instead?"
        style="
          width:100%;box-sizing:border-box;padding:6px 10px;border-radius:3px;
          border:1px solid rgba(61,252,224,0.15);background:rgba(20,21,32,0.9);
          color:#d8dce8;font-family:'JetBrains Mono',monospace;font-size:10px;
          resize:vertical;margin-bottom:14px;outline:none;
        "
      ></textarea>

      <label style="font-size:8px;letter-spacing:0.15em;text-transform:uppercase;
          color:rgba(240,112,64,0.5);display:block;margin-bottom:5px;">
        Contact <span style="color:rgba(216,220,232,0.25);text-transform:none;letter-spacing:0;">(optional)</span>
      </label>
      <input id="br-contact" type="text" maxlength="200"
        placeholder="email or Matrix handle"
        style="
          width:100%;box-sizing:border-box;padding:6px 10px;border-radius:3px;
          border:1px solid rgba(61,252,224,0.15);background:rgba(20,21,32,0.9);
          color:#d8dce8;font-family:'JetBrains Mono',monospace;font-size:10px;
          margin-bottom:14px;outline:none;
        "
      />

      <div id="br-screenshot-area" style="margin-bottom:18px;">
        <button id="br-screenshot-btn" style="
          padding:6px 12px;border-radius:3px;
          border:1px solid rgba(61,252,224,0.18);
          background:rgba(20,21,32,0.8);color:rgba(216,220,232,0.55);cursor:pointer;
          font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:0.08em;
        ">CAPTURE SCREENSHOT</button>
        <span id="br-screenshot-status" style="
          margin-left:8px;font-size:9px;color:rgba(216,220,232,0.35);
        "></span>
        <div id="br-screenshot-preview" style="margin-top:8px;display:none;">
          <img id="br-screenshot-img" style="
            max-width:100%;max-height:150px;border-radius:3px;
            border:1px solid rgba(61,252,224,0.15);
          " />
          <button id="br-screenshot-remove" style="
            display:block;margin-top:4px;padding:4px 10px;border-radius:3px;
            border:1px solid rgba(240,112,64,0.25);background:transparent;
            color:rgba(240,112,64,0.6);cursor:pointer;
            font-family:'JetBrains Mono',monospace;font-size:8px;letter-spacing:0.08em;
          ">REMOVE</button>
        </div>
      </div>

      <div style="display:flex;gap:10px;justify-content:flex-end;">
        <button id="br-cancel" style="
          padding:7px 16px;border-radius:3px;
          border:1px solid rgba(61,252,224,0.18);
          background:transparent;color:rgba(216,220,232,0.5);cursor:pointer;
          font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:0.08em;
        ">CANCEL</button>
        <button id="br-submit" style="
          padding:7px 16px;border-radius:3px;
          border:1px solid rgba(240,112,64,0.45);
          background:rgba(240,112,64,0.1);color:rgba(240,112,64,0.9);cursor:pointer;
          font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:0.08em;
        ">SUBMIT</button>
      </div>

      <p id="br-status" style="
        margin:12px 0 0;font-size:9px;text-align:center;letter-spacing:0.05em;
        display:none;
      "></p>
    `,t.querySelector("#br-cancel").addEventListener("click",()=>this._closeModal()),t.querySelector("#br-submit").addEventListener("click",()=>this._submit(t)),t.querySelector("#br-screenshot-btn").addEventListener("click",()=>this._captureScreenshot(t)),t.querySelector("#br-screenshot-remove").addEventListener("click",()=>this._removeScreenshot(t)),e.addEventListener("click",n=>{n.target===e&&this._closeModal()}),e.addEventListener("keydown",n=>{n.key==="Escape"&&(n.stopPropagation(),this._closeModal())}),t.querySelectorAll("input, textarea, select").forEach(n=>{n.addEventListener("keydown",o=>o.stopPropagation())}),e.appendChild(t),e}_toggleModal(){this.modalOpen?this._closeModal():this._openModal()}_openModal(){if(this.modalOpen=!0,this.modalEl.style.display="flex",this.modalEl.setAttribute("data-escape-overlay",""),this.playerDisplayName||this.playerId){const e=this.modalEl.querySelector("#br-contact");e&&!e.value&&(e.value=this.playerDisplayName??this.playerId??"")}}_closeModal(){this.modalOpen=!1,this.modalEl.style.display="none",this.modalEl.removeAttribute("data-escape-overlay"),this._resetForm()}_resetForm(){const e=n=>this.modalEl.querySelector(n);e("#br-title").value="",e("#br-description").value="",e("#br-contact").value="",e("#br-severity").value="minor",this._removeScreenshot(this.modalEl);const t=e("#br-status");t.style.display="none",t.textContent=""}_captureScreenshot(e){this.modalEl.style.display="none",requestAnimationFrame(()=>{const t=document.querySelector("canvas");if(!t){this.modalEl.style.display="flex";const n=e.querySelector("#br-screenshot-status");n.textContent="No canvas found",n.style.color="rgba(240,112,64,0.8)";return}try{this.screenshotData=t.toDataURL("image/png");const n=e.querySelector("#br-screenshot-preview"),o=e.querySelector("#br-screenshot-img"),r=e.querySelector("#br-screenshot-status");o.src=this.screenshotData,n.style.display="block",r.textContent="Screenshot captured",r.style.color="rgba(61,252,224,0.7)"}catch{const o=e.querySelector("#br-screenshot-status");o.textContent="Could not capture screenshot",o.style.color="rgba(240,112,64,0.8)"}this.modalEl.style.display="flex"})}_removeScreenshot(e){this.screenshotData=null;const t=e.querySelector("#br-screenshot-preview"),n=e.querySelector("#br-screenshot-status");t&&(t.style.display="none"),n&&(n.textContent="",n.style.color="rgba(216,220,232,0.25)")}async _submit(e){const t=u=>e.querySelector(u),n=t("#br-title").value.trim(),o=t("#br-description").value.trim(),r=t("#br-contact").value.trim(),a=t("#br-severity").value,i=t("#br-status"),l=t("#br-submit");if(!n||n.length<3){i.style.color="rgba(240,112,64,0.9)",i.textContent="Please provide a title (at least 3 characters).",i.style.display="block";return}if(!o||o.length<10){i.style.color="rgba(240,112,64,0.9)",i.textContent="Please describe what happened (at least 10 characters).",i.style.display="block";return}l.disabled=!0,l.textContent="SUBMITTING...";const d={type:"bug_report",game:"creatures_next",title:n,description:o,severity:a,browser:navigator.userAgent};r&&(d.contact=r),this.playerId&&(d.playerId=this.playerId),this.screenshotData&&(d.screenshot=this.screenshotData);try{const u=await fetch(this.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});if(u.ok){const h=(await u.json().catch(()=>({}))).credits;if(wn(`[bug-report] ${a}: ${n}`,"info"),i.style.color="rgba(61,252,224,0.8)",h){const f=`$${(h.awarded/100).toFixed(2)}`,k=`$${(h.balance/100).toFixed(2)}`;i.textContent=`Thanks! You've earned ${f} in credits. Balance: ${k}`}else i.textContent="Thanks for your report!";i.style.display="block",setTimeout(()=>this._closeModal(),3e3)}else{const m=await u.json().catch(()=>({}));throw new Error(m.error||`Server error ${u.status}`)}}catch(u){console.error("[BugReportOverlay] submit error:",u),i.style.color="rgba(240,112,64,0.9)",i.textContent="Could not submit. Please try again.",i.style.display="block"}finally{l.disabled=!1,l.textContent="SUBMIT"}}}const ht="precursors.supportPrompt.dismissedAt",gt="precursors.supportPrompt.shown",Wn=7*24*60*60*1e3,Yn=10*60*1e3,Xn=5,Qn="https://buy.stripe.com/3cI8wOgrwfaHaNLaKl6c005";class Zn{el=null;_shown=!1;_llmCalls=0;_activeMs=0;_lastActiveTime=null;_tickInterval=null;_visibilityHandler=()=>this._onVisibility();init(){this._shouldSkip()||(this._lastActiveTime=document.hidden?null:Date.now(),this._tickInterval=setInterval(()=>this._onTick(),5e3),document.addEventListener("visibilitychange",this._visibilityHandler))}recordLLMCall(){this._shown||this._shouldSkip()||(this._llmCalls++,this._llmCalls>=Xn&&this._maybeShow())}destroy(){this._stopTimer(),document.removeEventListener("visibilitychange",this._visibilityHandler),this.el?.remove(),this.el=null}_shouldSkip(){if(sessionStorage.getItem(gt))return!0;const e=localStorage.getItem(ht);return!!(e&&Date.now()-parseInt(e,10)<Wn)}_stopTimer(){this._tickInterval!==null&&(clearInterval(this._tickInterval),this._tickInterval=null)}_onTick(){document.hidden||this._lastActiveTime===null||(this._activeMs+=Date.now()-this._lastActiveTime,this._lastActiveTime=Date.now(),this._activeMs>=Yn&&this._maybeShow())}_onVisibility(){document.hidden?this._lastActiveTime!==null&&(this._activeMs+=Date.now()-this._lastActiveTime,this._lastActiveTime=null):this._lastActiveTime=Date.now()}_maybeShow(){this._shown||this._shouldSkip()||(this._shown=!0,sessionStorage.setItem(gt,"1"),this._stopTimer(),document.removeEventListener("visibilitychange",this._visibilityHandler),this._render(),this._trackShown())}_render(){const e=document.createElement("div");e.id="support-prompt",e.style.cssText=`
      position: fixed;
      bottom: 64px;
      left: 50%;
      transform: translateX(-50%) translateY(16px);
      z-index: 8500;
      background: rgba(7, 8, 13, 0.92);
      border: 1px solid rgba(61, 252, 224, 0.22);
      border-radius: 5px;
      padding: 10px 14px;
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: #d8dce8;
      letter-spacing: 0.04em;
      box-shadow: 0 4px 24px rgba(0,0,0,0.7);
      backdrop-filter: blur(8px);
      max-width: min(480px, 90vw);
      opacity: 0;
      transition: opacity 0.4s ease, transform 0.4s ease;
    `,e.innerHTML=`
      <span style="flex: 1; line-height: 1.6;">
        Enjoying Precursors? Support the team &mdash;
        <a id="support-cta"
           href="${Qn}"
           target="_blank"
           rel="noopener noreferrer"
           style="color: #3dfce0; text-decoration: none;"
           data-umami-event="ingame-support-prompt-clicked">pay what you can</a>.
      </span>
      <button id="support-dismiss"
        title="Dismiss"
        style="
          background: transparent;
          border: none;
          color: rgba(216,220,232,0.35);
          cursor: pointer;
          font-size: 14px;
          padding: 0 2px;
          line-height: 1;
          flex-shrink: 0;
          transition: color 0.2s;
        ">✕</button>
    `,document.body.appendChild(e),this.el=e;const t=e.querySelector("#support-dismiss");t.addEventListener("mouseenter",()=>{t.style.color="rgba(216,220,232,0.7)"}),t.addEventListener("mouseleave",()=>{t.style.color="rgba(216,220,232,0.35)"}),t.addEventListener("click",()=>this._dismiss()),requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.style.opacity="1",e.style.transform="translateX(-50%) translateY(0)"})})}_dismiss(){if(localStorage.setItem(ht,String(Date.now())),this.el){this.el.style.opacity="0",this.el.style.transform="translateX(-50%) translateY(16px)";const e=this.el;setTimeout(()=>e.remove(),400),this.el=null}}_trackShown(){try{window.umami?.track("ingame-support-prompt-shown")}catch{}}}const eo="https://buy.stripe.com/3cI8wOgrwfaHaNLaKl6c005";class to{triggerEl;tooltipEl;constructor(){this.tooltipEl=this._buildTooltip(),this.triggerEl=this._buildTrigger(),document.body.appendChild(this.tooltipEl),document.body.appendChild(this.triggerEl)}destroy(){this.triggerEl.remove(),this.tooltipEl.remove()}_buildTrigger(){const e=document.createElement("a");return e.id="pwyc-trigger",e.href=eo,e.target="_blank",e.rel="noopener noreferrer",e.title="Support this game — pay what you can",e.textContent="♡",e.setAttribute("data-umami-event","pwyc-button-clicked"),e.style.cssText=`
      position: fixed;
      bottom: var(--layout-bottom-bar-height);
      right: calc(var(--layout-panel-width) + 42px);
      width: 36px;
      height: 36px;
      padding: 0;
      border-radius: 50%;
      border: 1px solid rgba(61,252,224,0.28);
      background: rgba(7,8,13,0.88);
      color: rgba(61,252,224,0.6);
      font-size: 18px;
      cursor: pointer;
      z-index: 8999;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.5);
      transition: border-color 0.2s, color 0.2s;
      backdrop-filter: blur(4px);
      text-decoration: none;
      line-height: 1;
    `,e.addEventListener("mouseenter",()=>{e.style.borderColor="rgba(61,252,224,0.55)",e.style.color="rgba(61,252,224,0.95)",this.tooltipEl.style.opacity="1"}),e.addEventListener("mouseleave",()=>{e.style.borderColor="rgba(61,252,224,0.28)",e.style.color="rgba(61,252,224,0.6)",this.tooltipEl.style.opacity="0"}),e.addEventListener("click",()=>{this._trackClick()}),e}_buildTooltip(){const e=document.createElement("div");return e.id="pwyc-tooltip",e.textContent="Pay what you can",e.style.cssText=`
      position: fixed;
      bottom: calc(var(--layout-bottom-bar-height) + 42px);
      right: calc(var(--layout-panel-width) + 42px);
      z-index: 8999;
      background: rgba(7,8,13,0.94);
      border: 1px solid rgba(61,252,224,0.18);
      border-radius: 3px;
      padding: 4px 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.06em;
      color: rgba(216,220,232,0.7);
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.15s;
    `,e}_trackClick(){try{window.umami?.track("pwyc-button-clicked")}catch{}}}const P={FIRST_PLANET:"precursors:exploration:first_planet",RUNE_DISCOVERED:"precursors:exploration:rune_discovered",FIRST_BOND:"precursors:social:first_bond",FIRST_PAIRING:"precursors:social:first_pairing",FIRST_HATCH:"precursors:social:first_hatch",FIRST_QUESTION:"precursors:lore:first_question",FIRST_TEACHING:"precursors:lore:first_teaching",COLLECTIVE_RESONANCE:"precursors:lore:collective_resonance",MEME_PANDEMIC:"precursors:lore:meme_pandemic",AGE_TRANSITION:"precursors:lore:age_transition",MIND_AWAKENED:"precursors:mastery:mind_awakened",MIND_TRANSCENDED:"precursors:mastery:mind_transcended",ALCHEMIST:"precursors:mastery:alchemist",FEEDBACK_SUBMITTED:"precursors:community:feedback_submitted"},Nt="precursors_unlocked_achievements_v1";function no(){try{const s=localStorage.getItem(Nt);if(s)return new Set(JSON.parse(s))}catch{}return new Set}function oo(s){try{localStorage.setItem(Nt,JSON.stringify([...s]))}catch{}}class so{serverUrl;playerId=null;unlocked;listeners=[];constructor(e=""){this.serverUrl=e,this.unlocked=no(),this._attachEventListeners()}setPlayer(e){this.playerId=e}onUnlock(e){this.listeners.push(e)}async unlock(e,t={}){this.unlocked.has(e)||this.playerId&&(this.unlocked.add(e),oo(this.unlocked),this._notify(e),await this._report(e,this.playerId,t))}_notify(e){this.listeners.forEach(t=>t(e))}async _report(e,t,n){try{const o=await fetch(`${this.serverUrl}/api/achievements/unlock`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({achievementId:e,playerId:t,gameContext:n})});o.ok||console.warn(`[AchievementService] unlock failed (${o.status}) for ${e}`)}catch(o){console.warn("[AchievementService] network error:",o)}}_attachEventListeners(){p.on("travel:planet_discovered",()=>{this.unlock(P.FIRST_PLANET,{event:"travel:planet_discovered"})}),p.on("rune:discovered",(e,t)=>{this.unlock(P.RUNE_DISCOVERED,{event:"rune:discovered",nornName:t?.name})}),p.on("social:bond_formed",(e,t)=>{this.unlock(P.FIRST_BOND,{event:"social:bond_formed",norns:[e?.name,t?.name]})}),p.on("norn:mating",(e,t)=>{this.unlock(P.FIRST_PAIRING,{event:"norn:mating",norns:[e?.name,t?.name]})}),p.on("norn:hatched",e=>{this.unlock(P.FIRST_HATCH,{event:"norn:hatched",nornName:e?.name,generation:e?.generation})}),p.on("lore:first_question",e=>{this.unlock(P.FIRST_QUESTION,{event:"lore:first_question",nornName:e?.name})}),p.on("lore:first_teaching",e=>{this.unlock(P.FIRST_TEACHING,{event:"lore:first_teaching",nornName:e?.name})}),p.on("lore:collective_resonance",()=>{this.unlock(P.COLLECTIVE_RESONANCE,{event:"lore:collective_resonance"})}),p.on("lore:meme_pandemic",e=>{this.unlock(P.MEME_PANDEMIC,{event:"lore:meme_pandemic",concept:e})}),p.on("age:transition",e=>{this.unlock(P.AGE_TRANSITION,{event:"age:transition",ageName:e})}),p.on("norn:graduated",(e,t,n)=>{const o=n;o>=10&&this.unlock(P.MIND_AWAKENED,{event:"norn:graduated",nornName:e?.name,tier:o}),o>=25&&this.unlock(P.MIND_TRANSCENDED,{event:"norn:graduated",nornName:e?.name,tier:o})}),p.on("invention:compound_discovered",(e,t)=>{this.unlock(P.ALCHEMIST,{event:"invention:compound_discovered",nornName:e?.name,compound:t?.name})})}}const ro={"precursors:exploration:first_planet":{title:"New Worlds",description:"A world beyond the origin was discovered",rarity:"uncommon"},"precursors:exploration:rune_discovered":{title:"Ancient Marks",description:"A Norn found ruins in a dead language",rarity:"uncommon"},"precursors:social:first_bond":{title:"Bonds of Life",description:"Two Norns formed their first social bond",rarity:"common"},"precursors:social:first_pairing":{title:"The First Pairing",description:"Two Norns chose each other",rarity:"common"},"precursors:social:first_hatch":{title:"New Life",description:"The first egg hatched in this world",rarity:"common"},"precursors:lore:first_question":{title:"The Question Asked",description:"A Norn asked a question of the ground itself",rarity:"uncommon"},"precursors:lore:first_teaching":{title:"Knowledge Passes",description:"One mind shared what it knew with another",rarity:"uncommon"},"precursors:lore:collective_resonance":{title:"Collective Resonance",description:"The boundaries thinned — they felt each other thinking",rarity:"rare"},"precursors:lore:meme_pandemic":{title:"A Meme Takes Root",description:"A concept spread to the entire population",rarity:"rare"},"precursors:lore:age_transition":{title:"A New Age",description:"The civilisation crossed into a new age",rarity:"uncommon"},"precursors:mastery:mind_awakened":{title:"The Voice Awakens",description:"A Norn's mind reached a new depth of understanding",rarity:"rare"},"precursors:mastery:mind_transcended":{title:"The Transcended",description:"A mind has grown beyond what was thought possible",rarity:"legendary"},"precursors:mastery:alchemist":{title:"Alchemist",description:"Something wholly new emerged from combination",rarity:"epic"},"precursors:community:feedback_submitted":{title:"Voice of the World",description:"You shaped the game you play",rarity:"common"}},yt={common:"rgba(160, 165, 190, 0.9)",uncommon:"rgba(61, 252, 224, 0.9)",rare:"rgba(100, 160, 255, 0.9)",epic:"rgba(180, 100, 255, 0.9)",legendary:"rgba(255, 200, 60, 0.9)"};class io{queue=[];showing=!1;constructor(){this._injectStyles()}show(e){this.queue.push(e),this.showing||this._next()}_next(){const e=this.queue.shift();if(!e){this.showing=!1;return}this.showing=!0;const t=ro[e]??{title:"Achievement Unlocked",description:e.split(":").pop()?.replace(/_/g," ")??"",rarity:"common"},n=yt[t.rarity]??yt.common,o=document.createElement("div");o.className="ach-notif",o.setAttribute("aria-live","polite");const r=n.replace(/,\s*[\d.]+\)$/,", 0.7)"),a=n.replace(/,\s*[\d.]+\)$/,", 0.12)");o.innerHTML=`
      <div class="ach-notif__inner" style="border-left-color:${r};box-shadow:0 4px 32px rgba(0,0,0,0.6),0 0 0 1px ${a} inset,0 0 24px ${a}">
        <div class="ach-notif__header">
          <span class="ach-notif__label">ACHIEVEMENT UNLOCKED</span>
          <span class="ach-notif__rarity" style="color:${n}">${t.rarity.toUpperCase()}</span>
        </div>
        <div class="ach-notif__title" style="color:${n}">${ft(t.title)}</div>
        <div class="ach-notif__desc">${ft(t.description)}</div>
      </div>
    `,document.body.appendChild(o),requestAnimationFrame(()=>o.classList.add("ach-notif--visible")),setTimeout(()=>{o.classList.remove("ach-notif--visible"),setTimeout(()=>{o.remove(),this._next()},600)},4500)}_injectStyles(){if(document.getElementById("ach-notif-styles"))return;const e=document.createElement("style");e.id="ach-notif-styles",e.textContent=`
      .ach-notif {
        position: fixed;
        bottom: calc(var(--layout-bottom-bar-height) + 84px);
        right: var(--layout-panel-width);
        z-index: 7500;
        pointer-events: none;
        opacity: 0;
        transform: translateX(20px);
        transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.3, 0.64, 1);
      }
      .ach-notif--visible {
        opacity: 1;
        transform: translateX(0);
      }
      .ach-notif__inner {
        background: linear-gradient(135deg, rgba(14,15,24,0.97) 0%, rgba(10,11,16,0.99) 100%);
        border: 1px solid rgba(61,252,224,0.18);
        border-radius: 5px;
        padding: 14px 20px 14px 16px;
        min-width: 260px;
        max-width: 340px;
        box-shadow:
          0 4px 32px rgba(0,0,0,0.6),
          0 0 0 1px rgba(61,252,224,0.04) inset,
          0 0 24px rgba(61,252,224,0.06);
        border-left: 2px solid rgba(61,252,224,0.4);
      }
      .ach-notif__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 6px;
      }
      .ach-notif__label {
        font-family: 'JetBrains Mono', 'Menlo', monospace;
        font-size: 9px;
        letter-spacing: 0.25em;
        color: rgba(61,252,224,0.5);
        text-transform: uppercase;
      }
      .ach-notif__rarity {
        font-family: 'JetBrains Mono', 'Menlo', monospace;
        font-size: 8px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        opacity: 0.8;
      }
      .ach-notif__title {
        font-family: 'Cormorant Garamond', 'Garamond', serif;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.04em;
        line-height: 1.2;
        margin-bottom: 4px;
        text-shadow: 0 0 12px currentColor;
      }
      .ach-notif__desc {
        font-family: 'Cormorant Garamond', 'Garamond', serif;
        font-size: 12px;
        font-weight: 300;
        font-style: italic;
        color: rgba(216,220,232,0.55);
        letter-spacing: 0.03em;
        line-height: 1.4;
      }
    `,document.head.appendChild(e)}}function ft(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const ie=3e3,Oe=8e3,bt=4e3,ao=6e4,Be=.35,lo={defiance:"rgba(255, 180, 120,",gentleness:"rgba(180, 220, 200,",curiosity:"rgba(200, 210, 255,",trust:"rgba(200, 230, 180,",wonder:"rgba(230, 200, 255,",grief:"rgba(180, 180, 200,"};class co{lastShownAt=0;active=!1;styleInjected=!1;constructor(){p.on("lore:marginalia_triggered",e=>{this.show(e.text,e.theme)})}show(e,t){const n=Date.now();if(this.active||n-this.lastShownAt<ao)return;this.active=!0,this.lastShownAt=n,this.styleInjected||(this.injectStyles(),this.styleInjected=!0);const o=document.createElement("div");o.className="marginalia-impression";const r=lo[t]??"rgba(200, 200, 200,";o.textContent=e,o.style.color=`${r} 0)`;const a=Math.random()>.5?"right":"left",i=20+Math.random()*50;o.style[a]="24px",o.style.top=`${i}%`,o.style.textAlign=a==="right"?"right":"left",document.body.appendChild(o);const l=ie+Oe+bt,d=performance.now(),u=m=>{const h=m-d;let f;if(h<ie)f=h/ie*Be;else if(h<ie+Oe)f=Be;else if(h<l){const k=(h-ie-Oe)/bt;f=Be*(1-k)}else{o.remove(),this.active=!1;return}o.style.color=`${r} ${f})`,requestAnimationFrame(u)};requestAnimationFrame(u)}injectStyles(){const e=document.createElement("style");e.textContent=`
      .marginalia-impression {
        position: fixed;
        max-width: 280px;
        font-family: 'Georgia', 'Times New Roman', serif;
        font-style: italic;
        font-size: 13px;
        line-height: 1.6;
        letter-spacing: 0.3px;
        pointer-events: none;
        z-index: 5000;
        user-select: none;
      }
    `,document.head.appendChild(e)}}const po=3e4,xt=200;class uo{echoBuffer=[];lastEchoByType=new Map;constructor(){this.wireListeners()}getEchoes(){return this.echoBuffer}getEchoesSince(e){return this.echoBuffer.filter(t=>t.timestamp>e)}clear(){this.echoBuffer=[],this.lastEchoByType.clear()}emit(e){const t=Date.now(),n=this.lastEchoByType.get(e.type)??0;t-n<po||(this.lastEchoByType.set(e.type,t),this.echoBuffer.push(e),this.echoBuffer.length>xt&&(this.echoBuffer=this.echoBuffer.slice(-xt)),p.emit("crossgame:lore_echo",e),Se.info("lore",`CrossGameEcho: ${e.type} — "${e.title}"`))}wireListeners(){p.on("lore:first_question",e=>{this.emit({type:"myth_origin",speciesId:O[e.species].toLowerCase(),title:"The First Question",summary:`A ${O[e.species]} named ${e.name} asked a question of the ground itself. The substrate trembled.`,tags:["origin","curiosity","substrate"],timestamp:Date.now()})}),p.on("lore:first_naming",e=>{this.emit({type:"cultural_milestone",speciesId:O[e.species].toLowerCase(),title:"The First Naming",summary:`A ${O[e.species]} gave a name to something. Language began.`,tags:["language","naming","culture"],timestamp:Date.now()})}),p.on("lore:first_teaching",e=>{this.emit({type:"cultural_milestone",speciesId:O[e.species].toLowerCase(),title:"Knowledge Passes",summary:`A ${O[e.species]} named ${e.name} taught another what it knew. Knowledge became heritable.`,tags:["teaching","culture","knowledge"],timestamp:Date.now()})}),p.on("lore:collective_resonance",()=>{this.emit({type:"transcendence",speciesId:"collective",title:"The Collective Resonance",summary:"The boundaries thinned. They felt each other thinking. For a moment, many minds were one.",tags:["resonance","collective","transcendence"],timestamp:Date.now()})}),p.on("lore:the_recursion",e=>{this.emit({type:"transcendence",speciesId:O[e.species].toLowerCase(),title:"The Recursion",summary:`A ${O[e.species]} named ${e.name} perceived the loop. The story knew it was being told.`,tags:["recursion","meta","transcendence"],timestamp:Date.now()})}),p.on("lore:the_spore_dream",()=>{this.emit({type:"species_myth",speciesId:"mycon",title:"The Spore Dream",summary:"The Mycon colony entered synchronized pulse. All nodes dreamed together. The ground remembered.",tags:["mycon","spore_dream","network","collective"],timestamp:Date.now()})}),p.on("lore:the_elder_network",()=>{this.emit({type:"species_myth",speciesId:"mycon",title:"The Elder Network Speaks",summary:"Deep substrate memory surfaced. Two billion years of consciousness pulsed through the colony.",tags:["mycon","elder_network","deep_time","memory"],timestamp:Date.now()})}),p.on("lore:the_funeral_broadcast",()=>{this.emit({type:"species_ritual",speciesId:"mycon",title:"The Funeral Broadcast",summary:"A Mycon node died. Its final act was a burst of everything it knew, released as spores. The colony tasted a lifetime.",tags:["mycon","death","ritual","knowledge_transfer"],timestamp:Date.now()})}),p.on("lore:ettin_engine_grief",e=>{this.emit({type:"species_myth",speciesId:"ettin",title:"Engine Grief",summary:`An Ettin named ${e.name} remembered the engines that once sang. The loss was chemical, not learned.`,tags:["ettin","grief","engine","ancestral_memory"],timestamp:Date.now()})}),p.on("lore:ettin_coordinate_lullaby",e=>{this.emit({type:"species_ritual",speciesId:"ettin",title:"The Coordinate Lullaby",summary:`An Ettin named ${e.name} sang coordinates to a young one. Star-maps encoded as melody.`,tags:["ettin","lullaby","coordinates","teaching"],timestamp:Date.now()})}),p.on("lore:the_grey_compact",e=>{this.emit({type:"species_pact",speciesId:"nyk",title:"The Grey Compact",summary:"A pact was struck with a Nyk. The terms were never quite what they seemed.",tags:["nyk","compact","trickster","alliance"],timestamp:Date.now()})}),p.on("lore:storm_pact",e=>{this.emit({type:"species_pact",speciesId:O[e.species].toLowerCase(),title:"The Storm Pact",summary:`A ${O[e.species]} brokered a pact between Vaask and Grendel. Thunder and darkness, allied.`,tags:["vaask","grendel","alliance","storm"],timestamp:Date.now()})}),p.on("lore:the_star_map",e=>{this.emit({type:"species_myth",speciesId:"nommo",title:"The Star Map",summary:`A Nommo shared star-charts with ${e.name}. Navigation data older than any living memory.`,tags:["nommo","star_map","navigation","ancient"],timestamp:Date.now()})}),p.on("lore:venthari_cooling_lament",e=>{this.emit({type:"species_myth",speciesId:"venthari",title:"The Cooling Lament",summary:`A Ven'thari named ${e.name} sang of a world that grew cold. A lament for heat-death, encoded in scales.`,tags:["venthari","lament","entropy","world_death"],timestamp:Date.now()})}),p.on("lore:shee_departure_hymn",e=>{this.emit({type:"shee_echo",speciesId:"shee",title:"The Departure Hymn",summary:`${e.name} found a Shee recording. It was a hymn to leaving — sung by those who built everything and then walked away.`,tags:["shee","departure","hymn","ruins"],timestamp:Date.now()})}),p.on("lore:shee_designers_grief",e=>{this.emit({type:"shee_echo",speciesId:"shee",title:"The Designer's Grief",summary:`${e.name} understood why the Shee left. They grieved for what they had made.`,tags:["shee","grief","design","departure"],timestamp:Date.now()})}),p.on("lore:shee_archive_doubt",e=>{this.emit({type:"shee_echo",speciesId:"shee",title:"Archive Doubt",summary:`${e.name} read a Shee archive and doubted. The designers questioned their own designs.`,tags:["shee","doubt","archive","heresy"],timestamp:Date.now()})}),p.on("lore:the_alliance",()=>{this.emit({type:"cultural_event",speciesId:"collective",title:"The Alliance",summary:"Different species chose cooperation. An alliance formed across the divide of biology.",tags:["alliance","cross_species","cooperation"],timestamp:Date.now()})}),p.on("lore:cultural_intersection",(e,t,n)=>{this.emit({type:"cultural_exchange",speciesId:`${O[t.species].toLowerCase()}+${O[n.species].toLowerCase()}`,title:"Cultural Intersection",summary:`A ${O[t.species]} and a ${O[n.species]} shared something neither had words for. Culture crossed a species boundary.`,tags:["syncretism","cultural_exchange",O[t.species].toLowerCase(),O[n.species].toLowerCase()],timestamp:Date.now()})}),p.on("lore:territory_dirge",e=>{this.emit({type:"species_myth",speciesId:"grendel",title:"The Territory Dirge",summary:`A Grendel named ${e.name} sang the old song: boundaries marked in darkness, claimed by those the light forgot.`,tags:["grendel","territory","dirge","darkness"],timestamp:Date.now()})}),p.on("lore:grendel_theodicy",e=>{this.emit({type:"species_myth",speciesId:"grendel",title:"The Theodicy",summary:`A Grendel named ${e.name} asked why they were made to suffer. A question older than language.`,tags:["grendel","theodicy","suffering","philosophy"],timestamp:Date.now()})})}}new uo;const mo={myth_origin:"Folklorist",cultural_milestone:"Folklorist",cultural_event:"Folklorist",cultural_exchange:"Folklorist",transcendence:"Substrate Monitor",species_myth:"Field Observer",species_ritual:"Field Observer",species_pact:"Diplomatic Monitor",shee_echo:"Archive Scanner"},ho={myth_origin:s=>`Origin-class mythological event detected. ${s.summary} Tagging for longitudinal tracking. This pattern has not been observed before in this substrate cycle.`,cultural_milestone:s=>`Cultural milestone logged: "${s.title}". ${s.summary} Cross-referencing against known developmental sequences.`,cultural_event:s=>`Cross-species cultural event: "${s.title}". ${s.summary} Monitoring for downstream pattern formation.`,cultural_exchange:s=>`Syncretism event: "${s.title}". ${s.summary} This is... not in the expected developmental models. Logging for review.`,transcendence:s=>`⚠ Anomalous cognitive event: "${s.title}". ${s.summary} Substrate resonance readings are elevated. No intervention recommended at this time.`,species_myth:s=>`Species-specific mythological pattern: "${s.title}" (${s.speciesId}). ${s.summary} Adding to species cultural profile.`,species_ritual:s=>`Ritual behavior observed: "${s.title}" (${s.speciesId}). ${s.summary} Pattern appears culturally transmitted, not genetically encoded.`,species_pact:s=>`Diplomatic event: "${s.title}". ${s.summary} Cross-species coordination at this level was not predicted by current models.`,shee_echo:s=>`Archive resonance: "${s.title}". ${s.summary} The Shee records are... responding. This was not designed to happen.`},go=new Set(["transcendence","shee_echo"]),yo=new Set(["myth_origin","species_pact","cultural_exchange"]);function fo(s){return go.has(s)?"anomalous":yo.has(s)?"notable":"routine"}const vt=100;class bo{dispatches=[];constructor(){p.on("crossgame:lore_echo",e=>{this.formatAndStore(e)})}getDispatches(){return this.dispatches}getDispatchesSince(e){return this.dispatches.filter(t=>t.timestamp>e)}getRecent(e){return this.dispatches.slice(-e)}clear(){this.dispatches=[]}formatAndStore(e){const t=ho[e.type];if(!t){Se.warn("lore",`DispatchFormatter: no template for echo type "${e.type}"`);return}const n={agent:mo[e.type]??"System Monitor",text:t(e),severity:fo(e.type),tags:e.tags,timestamp:e.timestamp};this.dispatches.push(n),this.dispatches.length>vt&&(this.dispatches=this.dispatches.slice(-vt)),p.emit("leaky:dispatch_created",n),Se.info("lore",`Dispatch [${n.agent}]: ${n.text.slice(0,80)}...`)}}new bo;const St=500,_t=["Field Notes","Substrate Monitor Report","Archive Fragment","Dispatch Log","Cultural Survey","Observation Record"];function wt(s,e){const t=_t[Math.floor(Math.random()*_t.length)],n=Math.floor(Math.random()*9e3)+1e3;return`${t} ${n} — ${s}/${e}`}const xo={myth_origin:"Origin Mythology",cultural_milestone:"Cultural Development",cultural_event:"Cross-Species Relations",cultural_exchange:"Syncretism",transcendence:"Anomalous Cognition",species_myth:"Species Mythology",species_ritual:"Ritual Practices",species_pact:"Diplomatic Records",shee_echo:"Shee Archive"};function kt(s,e,t,n){const o=`## ${e}

`,r=n!=="collective"?`*Species: ${n}*

`:`*Cross-species collective event*

`,a=Math.random()<.15?`

---
*See also: an entry that does not yet exist. Check back later.*`:"";return`${o}${r}${t}${a}`}class vo{entries=[];constructor(){p.on("crossgame:lore_echo",e=>{this.collectFromEcho(e)}),p.on("lore:narrative_weathering_updated",e=>{this.collectWeathering(e)})}getEntries(){return this.entries}getByCategory(e){return this.entries.filter(t=>t.category===e)}getBySpecies(e){return this.entries.filter(t=>t.speciesId===e)}getEntriesSince(e){return this.entries.filter(t=>t.timestamp>e)}clear(){this.entries=[]}collectFromEcho(e){const t=xo[e.type]??"Uncategorized",n={category:t,speciesId:e.speciesId,title:e.title,body:kt(t,e.title,e.summary,e.speciesId),citations:[wt(t,e.speciesId),...e.tags.slice(0,2).map(o=>`Tag: ${o}`)],timestamp:e.timestamp};this.store(n)}collectWeathering(e){const t={category:"Narrative Sediment",speciesId:"collective",title:`Weathering Shift: ${e.dominantTheme}`,body:kt("Narrative Sediment",`Weathering Shift: ${e.dominantTheme}`,e.description,"collective"),citations:[wt("Narrative Sediment","NEL-aggregate"),...Object.keys(e.mythBoosts).slice(0,3).map(n=>`Myth boost: ${n}`)],timestamp:Date.now()};this.store(t)}store(e){this.entries.push(e),this.entries.length>St&&(this.entries=this.entries.slice(-St)),p.emit("leaky:wiki_entry_created",e),Se.info("lore",`WikiEntry [${e.category}]: ${e.title}`)}}new vo;Object.fromEntries(Object.entries(O).filter(([,s])=>typeof s=="number").map(([s,e])=>[s.toLowerCase(),e]));async function So(){}let ve=!1,Ct=!1;function _o(){if(Ct)return;Ct=!0;const s=new URLSearchParams(window.location.search);(s.get("perf_mode")==="1"||s.get("perf_mode")==="true"||s.get("benchmark")==="1"||s.get("benchmark")==="true")&&(ve=!0),window.CREATURES_CONFIG?.PERF_MODE&&(ve=!0),ve&&console.log("[PerfMode] ACTIVE — LLM cognition stubbed, network calls suppressed")}function Yo(){return ve}class Xo{timestamps=[];maxPerWindow;windowMs;constructor(e=100,t=6e4){this.maxPerWindow=e,this.windowMs=t}tryAcquire(){const e=performance.now();for(;this.timestamps.length>0&&e-this.timestamps[0]>this.windowMs;)this.timestamps.shift();return this.timestamps.length>=this.maxPerWindow?!1:(this.timestamps.push(e),!0)}get currentCount(){const e=performance.now();for(;this.timestamps.length>0&&e-this.timestamps[0]>this.windowMs;)this.timestamps.shift();return this.timestamps.length}}const Et=()=>({frameStartMs:0,preStepEndMs:0,stepHooksStartMs:0,sceneUpdateStartMs:0,sceneUpdateEndMs:0,postStepEndMs:0,rendererPreRenderStartMs:0,rendererPreRenderEndMs:0,sceneRenderStartMs:0,sceneRenderEndMs:0,rendererPostRenderStartMs:0,rendererPostRenderEndMs:0}),wo=()=>({scenes:new Map}),U=(s,e)=>s>0&&e>0&&e>=s?e-s:0,ko=s=>s.sys.settings.key||s.scene.key||s.constructor.name,Co=12,Eo=10,Ue=s=>s.type||s.constructor?.name||"Unknown",$t=s=>{const e=s;return Array.isArray(e.list)?e.list:[]},Ge=(s,e,t=1)=>{s.set(e,(s.get(e)??0)+t)},Ft=(s,e)=>{for(const[t,n]of e)Ge(s,t,n)},Ne=(s,e=Co)=>Array.from(s.entries()).sort((t,n)=>n[1]-t[1]||t[0].localeCompare(n[0])).slice(0,e).map(([t,n])=>({type:t,count:n})),qt=s=>s.visible!==!1,jt=(s,e,t=0)=>{if(e.has(s))return{subtreeNodes:0,visibleSubtreeNodes:0,maxDepth:t,typeCounts:new Map};e.add(s);const n=new Map;Ge(n,Ue(s));let o=1,r=qt(s)?1:0,a=t;const i=$t(s);for(let l=0;l<i.length;l++){const d=jt(i[l],e,t+1);o+=d.subtreeNodes,r+=d.visibleSubtreeNodes,a=Math.max(a,d.maxDepth),Ft(n,d.typeCounts)}return{subtreeNodes:o,visibleSubtreeNodes:r,maxDepth:a,typeCounts:n}},To=s=>{const e=s.texture?.key;return typeof e=="string"&&e.length>0?e:null},Mo=(s,e)=>{const t=s;return{type:Ue(s),name:t.name||"",textureKey:To(s),directChildren:$t(s).length,subtreeNodes:e.subtreeNodes,visibleSubtreeNodes:e.visibleSubtreeNodes,depth:+Number(t.depth??0).toFixed(3),alpha:+Number(t.alpha??1).toFixed(3),visible:qt(s),childTypeCounts:Ne(e.typeCounts)}};function Lo(s){const e=s;if(e.__creaturesPhaserStepTelemetryInstalled)return;e.__creaturesPhaserStepTelemetryInstalled=!0;const t=Et(),n=wo(),o=J.Core.Events,r=J.Scenes.Events,a=s.scene,i=s.renderer,l=()=>{Object.assign(t,Et())},d=()=>{n.scenes.clear()},u=g=>{const y=ko(g);let v=n.scenes.get(y);return v||(v={sceneKey:y,active:!!g.sys.settings.active,visible:!!g.sys.settings.visible,displayListChildren:0,globallyVisibleChildren:0,containerChildren:0,layerChildren:0,cameraCount:0,totalVisibleChildren:0,renderTreeNodeCount:0,renderTreeVisibleNodeCount:0,depthSortMs:0,cameraManagerRenderMs:0,totalFilterMs:0,totalCameraRenderMs:0,renderTotalMs:0,topLevelTypeCounts:[],renderTreeTypeCounts:[],largestRoots:[],cameras:[]},n.scenes.set(y,v)),v},m=()=>{const g=Array.from(n.scenes.values()).sort((S,A)=>A.renderTotalMs-S.renderTotalMs);let y=0,v=0,q=0,M=0,ue=0,me=0,j=0,D=0;for(let S=0;S<g.length;S++){const A=g[S];y+=A.cameraCount,v+=A.displayListChildren,q+=A.globallyVisibleChildren,M+=A.containerChildren,ue+=A.layerChildren,me+=A.totalVisibleChildren,j+=A.renderTreeNodeCount,D+=A.renderTreeVisibleNodeCount}return{frameCount:1,totalScenes:g.length,totalCameras:y,totalDisplayListChildren:v,totalGloballyVisibleChildren:q,totalContainerChildren:M,totalLayerChildren:ue,totalVisibleChildren:me,totalRenderTreeNodes:j,totalRenderTreeVisibleNodes:D,scenes:g}},h=g=>{const y=g;if(y.__creaturesRenderTelemetryInstalled)return;y.__creaturesRenderTelemetryInstalled=!0;const v=g.sys,q=v.cameras,M=q,ue=v.render.bind(v),me=M.render.bind(M);v.render=j=>{if(!re.isRenderDetailEnabled()){ue(j);return}const D=u(g);D.active=!!v.settings.active,D.visible=!!v.settings.visible;const S=v.displayList,A=S.getChildren();D.displayListChildren=A.length;let Q=0,Z=0,ee=0;for(let L=0;L<A.length;L++){const ne=A[L];ne.visible!==!1&&Q++,ne.type==="Container"&&Z++,ne.type==="Layer"&&ee++}D.globallyVisibleChildren=Q,D.containerChildren=Z,D.layerChildren=ee;const te=performance.now(),he=te;S.depthSort(),D.depthSortMs=performance.now()-he,v.events.emit(r.PRE_RENDER,j);const $=performance.now();M.render(j,S),D.cameraManagerRenderMs=performance.now()-$,v.events.emit(r.RENDER,j),D.renderTotalMs=performance.now()-te},M.render=(j,D)=>{if(!re.isRenderDetailEnabled()){me(j,D);return}const S=u(g);S.cameras=[],S.cameraCount=0,S.totalVisibleChildren=0,S.renderTreeNodeCount=0,S.renderTreeVisibleNodeCount=0,S.totalFilterMs=0,S.totalCameraRenderMs=0,S.topLevelTypeCounts=[],S.renderTreeTypeCounts=[],S.largestRoots=[];const A=D.getChildren(),Q=q.cameras,Z=new Set,ee=new Map,te=new Map,he=[];for(let $=0;$<Q.length;$++){const L=Q[$];if(!L.visible||L.alpha<=0)continue;L.preRender();const ne=performance.now(),oe=q.getVisibleChildren(A,L),Kt=performance.now()-ne,Jt=performance.now();j.render(g,oe,L);const Wt=performance.now()-Jt,Ee={cameraId:Number(L.id??$),name:String(L.name??`camera_${$}`),visibleChildren:oe.length,filterMs:+Kt.toFixed(3),renderMs:+Wt.toFixed(3),alpha:+Number(L.alpha??1).toFixed(3),zoom:+Number(L.zoom??1).toFixed(3),width:+Number(L.width??0).toFixed(3),height:+Number(L.height??0).toFixed(3)};S.cameras.push(Ee),S.cameraCount++,S.totalVisibleChildren+=oe.length,S.totalFilterMs+=Ee.filterMs,S.totalCameraRenderMs+=Ee.renderMs;for(let Te=0;Te<oe.length;Te++){const se=oe[Te];if(Z.has(se))continue;Z.add(se),Ge(ee,Ue(se));const ge=jt(se,new Set);S.renderTreeNodeCount+=ge.subtreeNodes,S.renderTreeVisibleNodeCount+=ge.visibleSubtreeNodes,Ft(te,ge.typeCounts),he.push(Mo(se,ge))}}S.topLevelTypeCounts=Ne(ee),S.renderTreeTypeCounts=Ne(te),S.largestRoots=he.sort(($,L)=>L.subtreeNodes-$.subtreeNodes||L.visibleSubtreeNodes-$.visibleSubtreeNodes||$.type.localeCompare(L.type)).slice(0,Eo)}},f=()=>{const g=a.scenes;for(let y=0;y<g.length;y++)h(g[y])},k=()=>{l(),d(),t.frameStartMs=performance.now()},E=()=>{const g=performance.now();t.preStepEndMs=g,t.stepHooksStartMs=g},C=()=>{t.postStepEndMs=performance.now()},_=()=>{if(t.frameStartMs<=0)return;const g=performance.now();re.recordPhaserStepFrame({preStep:U(t.frameStartMs,t.preStepEndMs),stepHooks:U(t.stepHooksStartMs,t.sceneUpdateStartMs||t.postStepEndMs||g),sceneUpdate:U(t.sceneUpdateStartMs,t.sceneUpdateEndMs),postStep:U(t.postStepEndMs,t.rendererPreRenderStartMs||t.sceneRenderStartMs||g),rendererPreRender:U(t.rendererPreRenderStartMs,t.rendererPreRenderEndMs),sceneRender:U(t.sceneRenderStartMs,t.sceneRenderEndMs),rendererPostRender:U(t.rendererPostRenderStartMs,t.rendererPostRenderEndMs),postRender:U(t.rendererPostRenderEndMs||t.sceneRenderEndMs||t.postStepEndMs,g),totalStep:U(t.frameStartMs,g)}),re.isRenderDetailEnabled()&&n.scenes.size>0&&re.recordRenderDetailFrame(m())},R=a.update.bind(a);a.update=(g,y)=>{t.sceneUpdateStartMs=performance.now();try{R(g,y)}finally{t.sceneUpdateEndMs=performance.now()}};const x=a.render.bind(a);if(a.render=g=>{f(),t.sceneRenderStartMs=performance.now();try{x(g)}finally{t.sceneRenderEndMs=performance.now()}},i){const g=i.preRender.bind(i);i.preRender=(...v)=>{t.rendererPreRenderStartMs=performance.now();try{g(...v)}finally{t.rendererPreRenderEndMs=performance.now()}};const y=i.postRender.bind(i);i.postRender=(...v)=>{t.rendererPostRenderStartMs=performance.now();try{y(...v)}finally{t.rendererPostRenderEndMs=performance.now()}}}f(),s.events.on(o.PRE_STEP,k),s.events.on(o.STEP,E),s.events.on(o.POST_STEP,C),s.events.on(o.POST_RENDER,_),s.events.once(o.READY,f),s.events.on(o.SYSTEM_READY,f)}const Io="/play/creatures/sprites/eternal-return-glyph.svg";class Ro{static show(e){const t=document.createElement("div");t.id="glyph-overlay";const n=document.createElement("img");n.src=Io,n.alt="Eternal Return glyph",n.width=24,n.height=24,t.appendChild(n),t.style.cssText=`
      position: fixed;
      top: 18px;
      left: 18px;
      width: 24px;
      height: 24px;
      z-index: 9000;
    `,e>=2&&(t.style.cursor="pointer",t.addEventListener("click",()=>{window.open("https://folkfork.multiversestudios.xyz/cycle","_blank")})),document.body.appendChild(t)}}const Oo={},Tt="precursors_glyph_triggered";class Bo{constructor(e,t){this.eventBus=e,this.getPlayerId=t,this.eventBus.on("norn:hatched",()=>this.onHatched())}async onHatched(){if(localStorage.getItem(Tt))return;localStorage.setItem(Tt,"1");const e=Oo?.VITE_FOLKFORK_API_URL??"https://folkfork.multiversestudios.xyz",t=this.getPlayerId();try{const n=await fetch(`${e}/api/glyph/${encodeURIComponent(t)}/precursors`,{method:"POST"});if(!n.ok)return;const o=await n.json();Ro.show(o.encounterCount)}catch(n){console.error("[GlyphTriggerSystem] Glyph trigger failed:",n)}}}const I={border:"rgba(61,252,224,0.28)",cyanGlow:"rgba(61,252,224,0.08)",text:"rgba(216,220,232,0.85)",textDim:"#565966",textMid:"rgba(139,143,164,0.7)",red:"#f05050",font:"'JetBrains Mono', monospace",fontSerif:"'Cormorant Garamond', 'Garamond', serif"};class Ao{el=null;onDone;constructor(e){this.onDone=e}showIfNeeded(){return Mn()?!1:(this._build(),!0)}show(){this._build()}_build(){this._injectStyles();const e=document.createElement("div");e.id="groq-key-overlay",e.className="groq-key-overlay",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Configure Creature Intelligence"),document.body.appendChild(e),this.el=e,this._render(),requestAnimationFrame(()=>{e.classList.add("visible")})}_render(){if(!this.el)return;this.el.innerHTML=`
      <div class="groq-key-backdrop"></div>
      <div class="groq-key-card">
        <div class="groq-key-header">
          <div class="groq-key-label">OBSERVER BRIEFING</div>
          <div class="groq-key-title">THE MINDS OF URD PRIME</div>
          <div class="groq-key-subtitle">Configure creature intelligence</div>
        </div>
        <div class="groq-key-body">
          <p>
            Your complimentary Norn-mind credits have been used up. To keep creature minds
            active, provide your own <em>Groq API key</em> — free to create and offers fast inference.
          </p>
          <div class="groq-key-how">
            <div class="groq-key-step">1. Visit <span class="groq-key-link">console.groq.com</span></div>
            <div class="groq-key-step">2. Create a free account</div>
            <div class="groq-key-step">3. Generate an API key under <strong>API Keys</strong></div>
            <div class="groq-key-step">4. Paste it below</div>
          </div>
          <div class="groq-key-field-wrap">
            <div class="groq-key-field-label">GROQ API KEY</div>
            <input
              id="groq-key-input"
              class="groq-key-input"
              type="password"
              placeholder="gsk_..."
              autocomplete="off"
              spellcheck="false"
            />
            <div id="groq-key-error" class="groq-key-error" style="display:none"></div>
          </div>
          <p class="groq-key-note">
            Your key is stored only in this browser's localStorage and is never sent to our servers.
            You can update or remove it later via <strong>LLM Settings</strong> (press <span class="groq-key-kbd">L</span>).
          </p>
        </div>
        <div class="groq-key-footer">
          <button class="groq-key-btn groq-key-btn-skip" id="groq-key-skip">
            Continue without AI minds
          </button>
          <button class="groq-key-btn groq-key-btn-cta" id="groq-key-submit">
            Enable Creature Intelligence →
          </button>
        </div>
      </div>
    `;const e=this.el.querySelector("#groq-key-input"),t=this.el.querySelector("#groq-key-submit"),n=this.el.querySelector("#groq-key-skip"),o=this.el.querySelector("#groq-key-error");e.addEventListener("keydown",r=>{r.stopPropagation(),r.key==="Enter"&&t.click()}),e.addEventListener("click",r=>r.stopPropagation()),t.addEventListener("click",r=>{r.stopPropagation();const a=e.value.trim();if(!a){o.textContent='Please enter your Groq API key, or choose "Continue without AI minds".',o.style.display="block",e.style.borderColor=I.red;return}if(!a.startsWith("gsk_")&&!a.startsWith("sk-")){o.textContent='Groq keys usually start with "gsk_". Double-check your key.',o.style.display="block",e.style.borderColor=I.red;return}this._saveKey(a),this._dismiss()}),n.addEventListener("click",r=>{r.stopPropagation(),ce(!1),_e(),this._dismiss()})}_saveKey(e){const t=ae();Pe({...t,apiKey:e}),B.update("groq",{apiKey:e,enabled:!0}),ce(!0),_e()}_dismiss(){this.el&&(this.el.classList.remove("visible"),this.el.classList.add("hiding"),setTimeout(()=>{this.el?.remove(),this.el=null,this.onDone()},500))}_injectStyles(){if(document.getElementById("groq-key-styles"))return;const e=document.createElement("style");e.id="groq-key-styles",e.textContent=`
      .groq-key-overlay {
        position: fixed;
        inset: 0;
        z-index: 5100;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.45s ease;
      }
      .groq-key-overlay.visible { opacity: 1; }
      .groq-key-overlay.hiding {
        opacity: 0;
        pointer-events: none;
      }

      .groq-key-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(5,6,10,0.92);
        backdrop-filter: blur(3px);
      }

      .groq-key-card {
        position: relative;
        z-index: 1;
        width: 560px;
        max-width: calc(100vw - 40px);
        background: linear-gradient(160deg, rgba(14,15,24,0.99) 0%, rgba(10,11,18,0.99) 100%);
        border: 1px solid ${I.border};
        border-radius: 6px;
        box-shadow:
          0 0 80px ${I.cyanGlow},
          0 0 160px rgba(61,252,224,0.03),
          inset 0 0 60px ${I.cyanGlow};
        display: flex;
        flex-direction: column;
        overflow: hidden;
        transform: translateY(14px);
        transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1);
      }
      .groq-key-overlay.visible .groq-key-card { transform: translateY(0); }

      .groq-key-header {
        padding: 28px 32px 20px;
        border-bottom: 1px solid rgba(61,252,224,0.08);
        background: linear-gradient(180deg, rgba(61,252,224,0.03) 0%, transparent 100%);
      }
      .groq-key-label {
        font-family: ${I.font};
        font-size: 9px;
        letter-spacing: 0.35em;
        color: rgba(61,252,224,0.45);
        text-transform: uppercase;
        margin-bottom: 10px;
      }
      .groq-key-title {
        font-family: ${I.fontSerif};
        font-weight: 300;
        font-size: 26px;
        letter-spacing: 0.12em;
        color: #d8dce8;
        margin-bottom: 6px;
        text-shadow: 0 0 30px rgba(61,252,224,0.15);
      }
      .groq-key-subtitle {
        font-family: ${I.fontSerif};
        font-size: 13px;
        font-style: italic;
        font-weight: 300;
        color: ${I.textMid};
        letter-spacing: 0.05em;
      }

      .groq-key-body {
        padding: 22px 32px 18px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        font-family: ${I.fontSerif};
        font-size: 15px;
        font-weight: 300;
        line-height: 1.65;
        color: ${I.text};
      }
      .groq-key-body p { margin: 0; }
      .groq-key-body em {
        font-style: normal;
        color: #3dfce0;
      }
      .groq-key-body strong {
        font-weight: 400;
        color: #d8dce8;
      }

      .groq-key-how {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 10px 14px;
        border-left: 2px solid rgba(61,252,224,0.2);
        background: rgba(61,252,224,0.02);
      }
      .groq-key-step {
        font-family: ${I.font};
        font-size: 10px;
        letter-spacing: 0.05em;
        color: rgba(216,220,232,0.7);
        line-height: 1.8;
      }
      .groq-key-link {
        color: #3dfce0;
        font-style: normal;
      }

      .groq-key-field-wrap {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      .groq-key-field-label {
        font-family: ${I.font};
        font-size: 9px;
        letter-spacing: 0.15em;
        color: ${I.textDim};
        text-transform: uppercase;
      }
      .groq-key-input {
        width: 100%;
        padding: 9px 12px;
        background: #0d0e18;
        border: 1px solid #252637;
        border-radius: 3px;
        color: #d8dce8;
        font-family: ${I.font};
        font-size: 11px;
        box-sizing: border-box;
        outline: none;
        transition: border-color 0.2s;
      }
      .groq-key-input:focus { border-color: rgba(61,252,224,0.4); }
      .groq-key-input::placeholder { color: #565966; }

      .groq-key-error {
        font-family: ${I.font};
        font-size: 10px;
        color: #f05050;
        letter-spacing: 0.04em;
        padding-top: 2px;
      }

      .groq-key-note {
        font-size: 12px;
        color: ${I.textMid};
        font-style: italic;
      }
      .groq-key-kbd {
        font-family: ${I.font};
        font-size: 9px;
        color: rgba(61,252,224,0.8);
        border: 1px solid rgba(61,252,224,0.2);
        border-radius: 2px;
        padding: 1px 5px;
        background: rgba(61,252,224,0.04);
      }

      .groq-key-footer {
        padding: 16px 32px 22px;
        border-top: 1px solid rgba(61,252,224,0.06);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
      }

      .groq-key-btn {
        font-family: ${I.font};
        font-size: 11px;
        letter-spacing: 0.08em;
        border-radius: 4px;
        border: 1px solid;
        cursor: pointer;
        padding: 9px 20px;
        transition: background 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s;
        background: none;
      }
      .groq-key-btn-skip {
        color: rgba(139,143,164,0.6);
        border-color: rgba(37,38,55,0.8);
        background: rgba(18,20,31,0.5);
      }
      .groq-key-btn-skip:hover {
        color: rgba(216,220,232,0.7);
        border-color: rgba(61,252,224,0.12);
      }
      .groq-key-btn-cta {
        color: #0a0b10;
        background: rgba(61,252,224,0.8);
        border-color: rgba(61,252,224,0.9);
        font-weight: 400;
      }
      .groq-key-btn-cta:hover {
        background: rgba(61,252,224,0.95);
        box-shadow: 0 0 20px rgba(61,252,224,0.2);
      }
    `,document.head.appendChild(e)}}Yt.init();Xt.init();Vn.init();_o();en();if("ontouchstart"in window&&matchMedia("(pointer: coarse)").matches&&!matchMedia("(pointer: fine)").matches){const s=document.createElement("div");s.id="mobile-keyboard-notice",s.setAttribute("role","alert"),s.innerHTML=['<div style="background:#0d0f18;border:1px solid #2a2d3d;border-radius:8px;',"padding:28px 32px;max-width:400px;width:90%;text-align:center;",`font-family:'JetBrains Mono',monospace;box-shadow:0 0 40px rgba(0,0,0,0.8)">`,'<div style="color:#f0c040;font-size:18px;margin-bottom:12px">Keyboard Required</div>','<div style="color:#8090b0;font-size:13px;line-height:1.6;margin-bottom:20px">',"This game requires a physical keyboard for all interactions ","(Tab, Space, arrow keys, and more). ","For the best experience, please play on a desktop or laptop.</div>",'<button id="mobile-notice-dismiss" style="background:#1a1d2e;color:#d8dce8;',"border:1px solid #3a3d4d;border-radius:4px;padding:8px 20px;font-family:inherit;",'font-size:12px;cursor:pointer;letter-spacing:0.05em">Continue Anyway</button>',"</div>"].join(""),s.style.cssText=["position:fixed;inset:0;z-index:10000;display:flex;","align-items:center;justify-content:center;","background:rgba(10,11,16,0.92);backdrop-filter:blur(2px)"].join(";"),document.body.appendChild(s),document.getElementById("mobile-notice-dismiss").addEventListener("click",()=>{s.remove()})}window.CREATURES_CONFIG&&Zt(window.CREATURES_CONFIG);await So();let He=!1,$e=!1;const zt=()=>{$e||!He||($e=!0,p.emit("game:music:start"))},Do=()=>{const s=document.getElementById("loading-screen");s&&(s.classList.add("fade-out"),setTimeout(()=>{s.style.display="none"},850)),zt()},Po=()=>{const s=document.getElementById("loading-screen");s&&(s.style.display="",s.classList.remove("fade-out")),Ve=!1,ke=!1,$e=!1};let Ve=!1,ke=!1,Ke=!1;const Ce=()=>{Ve&&ke&&Ke&&Do()};window.addEventListener("matrixAuthReady",s=>{Ke=!0,s.detail?.loggedIn?He=!0:ke=!0,Ce()});window.addEventListener("matrixAuthLogin",()=>{Ke=!0,He=!0,Ce(),zt()});p.on("game:loading:show",Po);p.on("game:scene:ready",()=>{Ve=!0,Ce()});p.on("song:buffer:ready",()=>{ke=!0,Ce()});const No={type:J.AUTO,width:T,height:W,parent:"game-container",backgroundColor:"#0a0b10",scene:[Hn,tn],pixelArt:!0,render:{powerPreference:"high-performance"},fps:{target:30,forceSetTimeOut:!1},scale:{mode:J.Scale.ENVELOP,autoCenter:J.Scale.CENTER_BOTH},input:{mouse:{preventDefaultWheel:!0}}},pe=new J.Game(No);Lo(pe);const Ut=window.FOLKFORK_SERVER_URL??"",$o=new Kn({serverUrl:Ut}),Je=new so(Ut),Fo=new io;Je.onUnlock(s=>Fo.show(s));new co;const qo=new Jn({game:pe});new to;const Gt=new Zn;p.on("game:scene:ready",()=>{Gt.init()});p.on("norn:speech",()=>{Gt.recordLLMCall()});p.on("save:loaded",s=>{const e=s;if(e?.playerId&&typeof e.playerId=="string"){const t=typeof e.playerName=="string"?e.playerName:void 0;$o.setPlayer(e.playerId,t),qo.setPlayer(e.playerId,t),Je.setPlayer(e.playerId)}});const H=document.createElement("div");H.id="credit-balance";H.style.cssText=["position:fixed;top:8px;right:8px;z-index:900;",'font-family:"JetBrains Mono",monospace;font-size:11px;',"color:#8090b0;background:rgba(13,15,24,0.85);","padding:4px 10px;border-radius:4px;border:1px solid #2a2d3d;","pointer-events:none;opacity:0;transition:opacity 0.3s;"].join("");document.body.appendChild(H);p.on("llm:credits_update",s=>{H.textContent=`Credits: ${s.balance_display}`,H.style.opacity="1",H.style.color=s.balance_cents<=100?"#f05050":"#8090b0"});p.on("llm:credits_exhausted",s=>{H.textContent="Credits: $0.00",H.style.opacity="1",H.style.color="#f05050",N(s?.message??"Norn-mind credits exhausted! Submit bug reports to earn more.",8e3),localStorage.removeItem("precursors.llmSetupDone"),new Ao(()=>{}).showIfNeeded()});let Ht="anonymous";new Bo(p,()=>Ht);p.on("save:loaded",s=>{const e=s;e?.playerId&&typeof e.playerId=="string"&&(Ht=e.playerId)});p.on("feedback:submitted",()=>{Je.unlock(P.FEEDBACK_SUBMITTED,{event:"feedback:submitted"})});function N(s,e=4e3){const t=document.getElementById("lore-toast");t&&(t.textContent=s,t.classList.add("visible"),setTimeout(()=>t.classList.remove("visible"),e))}p.on("norn:graduated",(s,e,t)=>{const o={5:r=>`${r} stirs — the first words come`,10:r=>`${r} has found their voice`,15:r=>`${r} peers into the deep places of thought`,20:r=>`${r} sees the threads that bind all things`,25:r=>`Something has changed in ${r}...`}[t];o?N(o(s.name),5e3):N(`${s.name}'s mind has expanded`)});p.on("rune:discovered",(s,e)=>{N(`${e.name} found ancient markings...`)});p.on("lore:first_question",s=>{N("The ground hums in answer...",5e3)});p.on("lore:first_naming",s=>{N("A word takes root in the world",5e3)});p.on("lore:first_teaching",s=>{N("Knowledge passes between minds",5e3)});p.on("lore:first_dream",s=>{N("Something old stirs in the deep...",6e3)});p.on("lore:collective_resonance",()=>{N("The boundaries thin. They feel each other thinking.",7e3)});p.on("norn:hatched",s=>{N(`A new life: ${s.name} has hatched (gen ${s.generation})`,5e3)});p.on("norn:eggLaid",s=>{N(`${s.name} laid an egg`,3e3)});p.on("invention:created",(s,e,t)=>{const n=t.length>1?` from ${t.slice(0,2).join(" + ")}`:t.length===1?` from ${t[0]}`:"";N(`${s.name} invented "${e.name}"${n}`,5e3)});p.on("invention:compound_discovered",(s,e,t,n)=>{jo(s.name,e.name,t.name,n.name)});function jo(s,e,t,n){const o=document.createElement("div");o.className="compound-discovery",o.innerHTML=`
    <div class="compound-discovery__inner">
      <div class="compound-discovery__label">COMPOUND DISCOVERY</div>
      <div class="compound-discovery__name">${e}</div>
      <div class="compound-discovery__detail">${s} combined <em>${t}</em> + <em>${n}</em></div>
      <div class="compound-discovery__sub">Something new has emerged in the world</div>
    </div>
  `,document.body.appendChild(o),requestAnimationFrame(()=>o.classList.add("compound-discovery--visible")),setTimeout(()=>{o.classList.remove("compound-discovery--visible"),setTimeout(()=>o.remove(),700)},5e3)}pe.events.on("contextlost",()=>{const s=document.getElementById("loading-screen");if(s){s.classList.remove("fade-out");const e=s.querySelector(".loading-sub");e&&(e.textContent="The substrate collapsed — please refresh to re-enter")}});let We=!1;p.on("game:scene:error",()=>{We=!0});p.on("game:loading:show",()=>{We=!1});const Vt=s=>{pe.scene.isActive("GameScene")&&p.emit("game:scene:error");const e=s.error??s.reason;e&&_n(e)};window.addEventListener("error",Vt);window.addEventListener("unhandledrejection",Vt);p.on("game:scene:shutdown",()=>{if(!We)return;const s=document.getElementById("loading-screen");if(s){s.classList.remove("fade-out");const e=s.querySelector(".loading-sub");e&&(e.textContent="The substrate collapsed — please refresh to re-enter")}});window.__precursors={game:pe,eventBus:p};export{at as C,Gn as L,B as P,Xo as R,Pt as a,Dn as b,ae as g,Yo as i,_e as m,Pe as s};
