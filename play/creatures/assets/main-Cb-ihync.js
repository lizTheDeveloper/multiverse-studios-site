const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GameScene-D0QBY1dE.js","assets/vendor-phaser-CaWnzXme.js","assets/Logger-Cpm2b7ps.js","assets/WorldGenerator-CiCFcJw6.js","assets/LifeStage-069__A6x.js","assets/SpriteState-tqplp9c6.js","assets/WaveUnlockSystem-C6UBXLpQ.js","assets/LanguageSystem-D0hEagyH.js","assets/InventionRegistry-CmKwifur.js","assets/World-DsXGnWWX.js","assets/PerfTelemetry-B1bwD18H.js","assets/ChemicalSet-LwNgtaF4.js","assets/DevMode-BboY5-9J.js","assets/SimulationScheduler-DZrfbKS7.js","assets/BiochemistrySystem-BiCBjl-R.js","assets/KeyboardControls-DFIbPLC4.js"])))=>i.map(i=>d[i]);
import"./LifeStage-069__A6x.js";import{P as $}from"./vendor-phaser-CaWnzXme.js";import{s as L,P as Z,C as Bt,A as $t}from"./PerfTelemetry-B1bwD18H.js";import{G as v,a as U,e as c,C as Ft,l as ue,S as w,b as zt}from"./Logger-Cpm2b7ps.js";import{N as A,i as Ut,U as Gt}from"./DevMode-BboY5-9J.js";import"./ChemicalSet-LwNgtaF4.js";import"./InventionRegistry-CmKwifur.js";import"./LanguageSystem-D0hEagyH.js";const te="8.55.0",O=globalThis;function Ee(r,e,t){const n=O,s=n.__SENTRY__=n.__SENTRY__||{},o=s[te]=s[te]||{};return o[r]||(o[r]=e())}const mt=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,Ht="Sentry Logger ",Oe=["debug","info","warn","error","log","assert","trace"],qe={};function Kt(r){if(!("console"in O))return r();const e=O.console,t={},n=Object.keys(qe);n.forEach(s=>{const o=qe[s];t[s]=e[s],e[s]=o});try{return r()}finally{n.forEach(s=>{e[s]=t[s]})}}function jt(){let r=!1;const e={enable:()=>{r=!0},disable:()=>{r=!1},isEnabled:()=>r};return mt?Oe.forEach(t=>{e[t]=(...n)=>{r&&Kt(()=>{O.console[t](`${Ht}[${t}]:`,...n)})}}):Oe.forEach(t=>{e[t]=()=>{}}),e}const de=Ee("logger",jt);function gt(){return ke(O),O}function ke(r){const e=r.__SENTRY__=r.__SENTRY__||{};return e.version=e.version||te,e[te]=e[te]||{}}const Vt=Object.prototype.toString;function Jt(r,e){return Vt.call(r)===`[object ${e}]`}function Yt(r){return Jt(r,"Object")}function Wt(r){return!!(r&&r.then&&typeof r.then=="function")}function Xt(r,e,t){try{Object.defineProperty(r,e,{value:t,writable:!0,configurable:!0})}catch{mt&&de.log(`Failed to add non-enumerable property "${e}" to object`,r)}}const ft=1e3;function yt(){return Date.now()/ft}function Qt(){const{performance:r}=O;if(!r||!r.now)return yt;const e=Date.now()-r.now(),t=r.timeOrigin==null?e:r.timeOrigin;return()=>(t+r.now())/ft}const Zt=Qt();(()=>{const{performance:r}=O;if(!r||!r.now)return;const e=3600*1e3,t=r.now(),n=Date.now(),s=r.timeOrigin?Math.abs(r.timeOrigin+t-n):e,o=s<e,a=r.timing&&r.timing.navigationStart,d=typeof a=="number"?Math.abs(a+t-n):e,l=d<e;return o||l?s<=d?r.timeOrigin:a:n})();function G(){const r=O,e=r.crypto||r.msCrypto;let t=()=>Math.random()*16;try{if(e&&e.randomUUID)return e.randomUUID().replace(/-/g,"");e&&e.getRandomValues&&(t=()=>{const n=new Uint8Array(1);return e.getRandomValues(n),n[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,n=>(n^(t()&15)>>n/4).toString(16))}function er(r,e={}){if(e.user&&(!r.ipAddress&&e.user.ip_address&&(r.ipAddress=e.user.ip_address),!r.did&&!e.did&&(r.did=e.user.id||e.user.email||e.user.username)),r.timestamp=e.timestamp||Zt(),e.abnormal_mechanism&&(r.abnormal_mechanism=e.abnormal_mechanism),e.ignoreDuration&&(r.ignoreDuration=e.ignoreDuration),e.sid&&(r.sid=e.sid.length===32?e.sid:G()),e.init!==void 0&&(r.init=e.init),!r.did&&e.did&&(r.did=`${e.did}`),typeof e.started=="number"&&(r.started=e.started),r.ignoreDuration)r.duration=void 0;else if(typeof e.duration=="number")r.duration=e.duration;else{const t=r.timestamp-r.started;r.duration=t>=0?t:0}e.release&&(r.release=e.release),e.environment&&(r.environment=e.environment),!r.ipAddress&&e.ipAddress&&(r.ipAddress=e.ipAddress),!r.userAgent&&e.userAgent&&(r.userAgent=e.userAgent),typeof e.errors=="number"&&(r.errors=e.errors),e.status&&(r.status=e.status)}function Be(){return G()}function $e(){return G().substring(16)}function bt(r,e,t=2){if(!e||typeof e!="object"||t<=0)return e;if(r&&e&&Object.keys(e).length===0)return r;const n={...r};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=bt(n[s],e[s],t-1));return n}const ve="_sentrySpan";function Fe(r,e){e?Xt(r,ve,e):delete r[ve]}function ze(r){return r[ve]}const tr=100;class Ce{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:Be(),spanId:$e()}}clone(){const e=new Ce;return e._breadcrumbs=[...this._breadcrumbs],e._tags={...this._tags},e._extra={...this._extra},e._contexts={...this._contexts},this._contexts.flags&&(e._contexts.flags={values:[...this._contexts.flags.values]}),e._user=this._user,e._level=this._level,e._session=this._session,e._transactionName=this._transactionName,e._fingerprint=this._fingerprint,e._eventProcessors=[...this._eventProcessors],e._requestSession=this._requestSession,e._attachments=[...this._attachments],e._sdkProcessingMetadata={...this._sdkProcessingMetadata},e._propagationContext={...this._propagationContext},e._client=this._client,e._lastEventId=this._lastEventId,Fe(e,ze(this)),e}setClient(e){this._client=e}setLastEventId(e){this._lastEventId=e}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&er(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(e){return this._requestSession=e,this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,t){return this._tags={...this._tags,[e]:t},this._notifyScopeListeners(),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,t){return this._extra={...this._extra,[e]:t},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,t){return t===null?delete this._contexts[e]:this._contexts[e]=t,this._notifyScopeListeners(),this}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(e){if(!e)return this;const t=typeof e=="function"?e(this):e,[n,s]=t instanceof re?[t.getScopeData(),t.getRequestSession()]:Yt(t)?[e,e.requestSession]:[],{tags:o,extra:a,user:i,contexts:d,level:l,fingerprint:p=[],propagationContext:u}=n||{};return this._tags={...this._tags,...o},this._extra={...this._extra,...a},this._contexts={...this._contexts,...d},i&&Object.keys(i).length&&(this._user=i),l&&(this._level=l),p.length&&(this._fingerprint=p),u&&(this._propagationContext=u),s&&(this._requestSession=s),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._session=void 0,Fe(this,void 0),this._attachments=[],this.setPropagationContext({traceId:Be()}),this._notifyScopeListeners(),this}addBreadcrumb(e,t){const n=typeof t=="number"?t:tr;if(n<=0)return this;const s={timestamp:yt(),...e};return this._breadcrumbs.push(s),this._breadcrumbs.length>n&&(this._breadcrumbs=this._breadcrumbs.slice(-n),this._client&&this._client.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:ze(this)}}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata=bt(this._sdkProcessingMetadata,e,2),this}setPropagationContext(e){return this._propagationContext={spanId:$e(),...e},this}getPropagationContext(){return this._propagationContext}captureException(e,t){const n=t&&t.event_id?t.event_id:G();if(!this._client)return de.warn("No client configured on scope - will not capture exception!"),n;const s=new Error("Sentry syntheticException");return this._client.captureException(e,{originalException:e,syntheticException:s,...t,event_id:n},this),n}captureMessage(e,t,n){const s=n&&n.event_id?n.event_id:G();if(!this._client)return de.warn("No client configured on scope - will not capture message!"),s;const o=new Error(e);return this._client.captureMessage(e,t,{originalException:e,syntheticException:o,...n,event_id:s},this),s}captureEvent(e,t){const n=t&&t.event_id?t.event_id:G();return this._client?(this._client.captureEvent(e,{...t,event_id:n},this),n):(de.warn("No client configured on scope - will not capture event!"),n)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(e=>{e(this)}),this._notifyingListeners=!1)}}const re=Ce;function rr(){return Ee("defaultCurrentScope",()=>new re)}function nr(){return Ee("defaultIsolationScope",()=>new re)}class sr{constructor(e,t){let n;e?n=e:n=new re;let s;t?s=t:s=new re,this._stack=[{scope:n}],this._isolationScope=s}withScope(e){const t=this._pushScope();let n;try{n=e(t)}catch(s){throw this._popScope(),s}return Wt(n)?n.then(s=>(this._popScope(),s),s=>{throw this._popScope(),s}):(this._popScope(),n)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const e=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:e}),e}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function H(){const r=gt(),e=ke(r);return e.stack=e.stack||new sr(rr(),nr())}function or(r){return H().withScope(r)}function ir(r,e){const t=H();return t.withScope(()=>(t.getStackTop().scope=r,e(r)))}function Ue(r){return H().withScope(()=>r(H().getIsolationScope()))}function ar(){return{withIsolationScope:Ue,withScope:or,withSetScope:ir,withSetIsolationScope:(r,e)=>Ue(e),getCurrentScope:()=>H().getScope(),getIsolationScope:()=>H().getIsolationScope()}}function lr(r){const e=ke(r);return e.acs?e.acs:ar()}function _t(){const r=gt();return lr(r).getCurrentScope()}function cr(r,e){return _t().captureException(r,void 0)}function dr(r,e){const t=e;return _t().captureMessage(r,t,void 0)}const pr="modulepreload",ur=function(r){return"/play/creatures/"+r},Ge={},hr=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");s=Promise.allSettled(t.map(d=>{if(d=ur(d),d in Ge)return;Ge[d]=!0;const l=d.endsWith(".css"),p=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":pr,l||(u.as="script"),u.crossOrigin="",u.href=d,i&&u.setAttribute("nonce",i),document.head.appendChild(u),l)return new Promise((g,S)=>{u.addEventListener("load",g),u.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return s.then(a=>{for(const i of a||[])i.status==="rejected"&&o(i.reason);return e().catch(o)})},He=658192,Ke=1184799,fe=4016762,B="#70758f",je="#c8ccdd",Ve="#e8ecf8",Je="#7b8ed4",f=72,le=10,ye=8,ce=4;function Ye(r){const e=Math.floor(r/3600),t=Math.floor(r%3600/60);return e>0?`${e}h ${t}m`:`${t}m`}class mr extends $.Scene{deleteConfirmSlot=null;_enterKeyHandler=null;_scrollOffset=0;constructor(){super({key:"MenuScene"})}create(){const e=document.getElementById("loading-screen");e&&e.classList.add("fade-out"),this._drawBackground(),this._drawTitle(),this._drawSlots(),this._drawNewGameButton(),this._bindEnterKey()}_drawBackground(){this.add.rectangle(v/2,U/2,v,U,He);const e=this.add.graphics(),t=new $.Math.RandomDataGenerator(["creatures_menu"]);for(let a=0;a<280;a++){const i=t.between(0,v),d=t.between(0,U),l=t.frac()<.15?1.5:.8,p=.2+t.frac()*.6;e.fillStyle(16777215,p),e.fillCircle(i,d,l)}const n=this.add.graphics(),s=v,o=U;for(let a=0;a<12;a++){const i=a/12,d=i*.55,l=(1-i)*Math.min(s,o)*.55;n.fillStyle(He,d),n.fillRect(-l/2+s/2-s/2,-l/2+o/2-o/2,s+l,l/2),n.fillRect(-l/2+s/2-s/2,o-l/4,s+l,l/2)}}_drawTitle(){this.add.text(v/2,72,"PRECURSORS",{fontSize:"52px",fontFamily:"JetBrains Mono, Menlo, monospace",color:Ve,stroke:"#0a0b10",strokeThickness:6,letterSpacing:8}).setOrigin(.5,.5),this.add.text(v/2,113,"Origins of Folklore",{fontSize:"17px",fontFamily:"Cormorant Garamond, Garamond, serif",fontStyle:"italic",color:"#b4b8ce",letterSpacing:3}).setOrigin(.5,.5),this.add.text(v/2,139,"a living world of evolving minds",{fontSize:"12px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#7a7f98",letterSpacing:2}).setOrigin(.5,.5);const e=this.add.graphics();e.lineStyle(1,5925530,.6),e.lineBetween(v/2-240,160,v/2+240,160)}_drawSlots(){const e=L.listSlots(),t=e.includes("autosave");let n=180;if(t){const a=L.getSlotMeta("autosave");this._drawContinueButton(n,a),n+=f+le+32;const i=this.add.graphics();i.lineStyle(1,2764098,.7),i.lineBetween(v/2-240,n-18,v/2+240,n-18)}const s=e.filter(a=>a!=="autosave").slice(0,ye),o=s.length>0?`SAVES  (${s.length}/${ye})`:"SAVES";if(this.add.text(v/2-240,n,o,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:B,letterSpacing:4}).setOrigin(0,.5),n+=20,s.length===0)this.add.text(v/2,n+30,"No saved games",{fontSize:"13px",fontFamily:"JetBrains Mono, Menlo, monospace",color:B}).setOrigin(.5,.5),n+=70;else{const a=s.slice(this._scrollOffset,this._scrollOffset+ce),i=this._scrollOffset>0,d=this._scrollOffset+ce<s.length;i&&this._drawScrollArrow(n-14,!0,s.length);for(const l of a)this._drawSlotRow(n,l),n+=f+le;d&&this._drawScrollArrow(n-4,!1,s.length)}}_drawScrollArrow(e,t,n){const s=v/2,o=t?"▲  more saves above":"▼  more saves below",a=this.add.text(s,e,o,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:Je}).setOrigin(.5,.5).setInteractive({cursor:"pointer"});a.on("pointerup",()=>{this._scrollOffset+=t?-1:1,this.scene.restart()}),a.on("pointerover",()=>a.setColor(Ve)),a.on("pointerout",()=>a.setColor(Je))}_drawContinueButton(e,t){const n=v/2,s=480,o=this.add.graphics();if(o.fillStyle(1712192,1),o.fillRoundedRect(n-s/2,e,s,f,6),o.lineStyle(1,4876980,.8),o.strokeRoundedRect(n-s/2,e,s,f,6),this.add.text(n-s/2+18,e+18,"▶  CONTINUE",{fontSize:"16px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#9ab4f4",letterSpacing:2}),t){const d=[`autosave  ·  ${new Date(t.timestamp).toLocaleString()}`];t.nornCount>0&&d.push(`${t.nornCount} norns`),t.maxGeneration>0&&d.push(`gen ${t.maxGeneration}`),t.playtime>0&&d.push(Ye(t.playtime)),this.add.text(n-s/2+18,e+44,d.join("  ·  "),{fontSize:"11px",fontFamily:"JetBrains Mono, Menlo, monospace",color:B})}const a=this.add.zone(n,e+f/2,s,f+16).setInteractive({cursor:"pointer"});a.on("pointerover",()=>{o.clear(),o.fillStyle(1976400,1),o.fillRoundedRect(n-s/2,e,s,f,6),o.lineStyle(1,6982356,1),o.strokeRoundedRect(n-s/2,e,s,f,6)}),a.on("pointerout",()=>{o.clear(),o.fillStyle(1712192,1),o.fillRoundedRect(n-s/2,e,s,f,6),o.lineStyle(1,4876980,.8),o.strokeRoundedRect(n-s/2,e,s,f,6)}),a.on("pointerup",()=>this._startGame("autosave"))}_drawSlotRow(e,t){const n=v/2,s=480,o=70,a=8,i=L.getSlotMeta(t),d=i?new Date(i.timestamp).toLocaleString():"Unknown",l=t.replace(/^imported_/,"").replace(/_/g," "),p=[d];i&&i.nornCount>0&&p.push(`${i.nornCount} norns`),i&&i.maxGeneration>0&&p.push(`gen ${i.maxGeneration}`),i&&i.playtime>0&&p.push(Ye(i.playtime));const u=this.add.graphics();u.fillStyle(Ke,1),u.fillRoundedRect(n-s/2,e,s-o*3-a*4,f,4),u.lineStyle(1,fe,.4),u.strokeRoundedRect(n-s/2,e,s-o*3-a*4,f,4),this.add.text(n-s/2+14,e+16,l,{fontSize:"13px",fontFamily:"JetBrains Mono, Menlo, monospace",color:je}),this.add.text(n-s/2+14,e+40,p.join("  ·  "),{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:B});const g=n+s/2-o*3-a*3;this._drawSmallButton(g,e,o,f,"LOAD",1716264,3833952,()=>{this._startGame(t)});const S=n+s/2-o*2-a*2;this._drawDeleteButton(S,e,o,f,t);const R=n+s/2-o-a;this._drawSyncButton(R,e,o,f,t);const q=s-o*3-a*4,K=this.add.zone(n-s/2+q/2,e+f/2,q,f).setInteractive({cursor:"pointer"});K.on("pointerover",()=>{u.clear(),u.fillStyle(1579562,1),u.fillRoundedRect(n-s/2,e,q,f,4),u.lineStyle(1,fe,.7),u.strokeRoundedRect(n-s/2,e,q,f,4)}),K.on("pointerout",()=>{u.clear(),u.fillStyle(Ke,1),u.fillRoundedRect(n-s/2,e,q,f,4),u.lineStyle(1,fe,.4),u.strokeRoundedRect(n-s/2,e,q,f,4)}),K.on("pointerup",()=>this._startGame(t))}_drawSyncButton(e,t,n,s,o){const a=this.add.graphics(),i=p=>{a.clear(),a.fillStyle(p?925232:661540,1),a.fillRoundedRect(e,t+8,n,s-16,4),a.lineStyle(1,4491468,p?1:.7),a.strokeRoundedRect(e,t+8,n,s-16,4)};i(!1);const d=this.add.text(e+n/2,t+s/2,"SYNC",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#88ccff",letterSpacing:1}).setOrigin(.5,.5),l=this.add.zone(e+n/2,t+s/2,n,s-16).setInteractive({cursor:"pointer"});l.on("pointerover",()=>i(!0)),l.on("pointerout",()=>i(!1)),l.on("pointerup",()=>{d.setText("..."),d.setColor("#88ccff"),L.pushToCloud(o).then(p=>{d.setText(p?"✓":"ERR"),d.setColor(p?"#88ffaa":"#ff8888"),this.time.delayedCall(1500,()=>{d.setText("SYNC"),d.setColor("#88ccff")})})})}_drawSmallButton(e,t,n,s,o,a,i,d){const l=this.add.graphics(),p=g=>{l.clear(),l.fillStyle(g?a+1052688:a,1),l.fillRoundedRect(e,t+8,n,s-16,4),l.lineStyle(1,i,g?1:.7),l.strokeRoundedRect(e,t+8,n,s-16,4)};p(!1),this.add.text(e+n/2,t+s/2,o,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:je,letterSpacing:1}).setOrigin(.5,.5);const u=this.add.zone(e+n/2,t+s/2,n,s-16).setInteractive({cursor:"pointer"});u.on("pointerover",()=>p(!0)),u.on("pointerout",()=>p(!1)),u.on("pointerup",d)}_drawDeleteButton(e,t,n,s,o){let a=!1;const i=this.add.graphics(),d=this.add.text(e+n/2,t+s/2,"DEL",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#8b6060",letterSpacing:1}).setOrigin(.5,.5),l=(u,g)=>{i.clear();const S=g?8075834:3807770,R=g?11554896:6959152;i.fillStyle(u?S+1052688:S,1),i.fillRoundedRect(e,t+8,n,s-16,4),i.lineStyle(1,R,u?1:.7),i.strokeRoundedRect(e,t+8,n,s-16,4),d.setText(g?"SURE?":"DEL"),d.setColor(g?"#e07070":"#8b6060")};l(!1,!1);const p=this.add.zone(e+n/2,t+s/2,n,s-16).setInteractive({cursor:"pointer"});p.on("pointerover",()=>l(!0,a)),p.on("pointerout",()=>l(!1,a)),p.on("pointerup",()=>{a?(L.deleteSlot(o),this.scene.restart()):(a=!0,l(!1,!0),this.time.delayedCall(2e3,()=>{a=!1,l(!1,!1)}))})}_drawNewGameButton(){const e=L.listSlots(),t=e.includes("autosave"),n=e.filter(g=>g!=="autosave").slice(0,ye),s=Math.min(n.length,ce);let o=180;t&&(o+=f+le+32),o+=20,n.length===0?o+=70:(o+=s*(f+le),n.length>ce&&(o+=20)),o+=28;const a=v/2,i=480,d=68,l=this.add.graphics(),p=g=>{l.clear(),l.fillStyle(g?1714208:1318424,1),l.fillRoundedRect(a-i/2,o,i,d,6),l.lineStyle(1,g?7381088:4878400,g?1:.9),l.strokeRoundedRect(a-i/2,o,i,d,6)};p(!1),this.add.text(a,o+d/2-8,"NEW GAME",{fontSize:"16px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#a0c890",letterSpacing:4}).setOrigin(.5,.5),this.add.text(a,o+d/2+12,"begin a new world",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:B,letterSpacing:1}).setOrigin(.5,.5);const u=this.add.zone(a,o+d/2,i,d+24).setInteractive({cursor:"pointer"});u.on("pointerover",()=>p(!0)),u.on("pointerout",()=>p(!1)),u.on("pointerup",()=>this._startGame(void 0)),this._drawCloudPullButton(o+d+12),this.add.text(a,U-24,"enter ↵ new game  ·  F5 quick-save  ·  F9 quick-load  ·  ` dev panel",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:B,letterSpacing:1}).setOrigin(.5,.5)}_drawCloudPullButton(e){const t=v/2,n=480,s=40,o=this.add.graphics(),a=l=>{o.clear(),o.fillStyle(l?924200:660512,1),o.fillRoundedRect(t-n/2,e,n,s,6),o.lineStyle(1,l?6724044:3368584,l?1:.8),o.strokeRoundedRect(t-n/2,e,n,s,6)};a(!1);const i=this.add.text(t,e+s/2,"↓ PULL FROM CLOUD",{fontSize:"11px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#88ccff",letterSpacing:3}).setOrigin(.5,.5),d=this.add.zone(t,e+s/2,n,s).setInteractive({cursor:"pointer"});d.on("pointerover",()=>a(!0)),d.on("pointerout",()=>a(!1)),d.on("pointerup",()=>{i.setText("checking cloud..."),i.setColor("#88ccff"),L.listCloudSlotsWithStatus().then(async l=>{if(l.status==="not_logged_in"){i.setText("not logged in"),i.setColor(B),this.time.delayedCall(2e3,()=>{i.setText("↓ PULL FROM CLOUD"),i.setColor("#88ccff")});return}if(l.status==="unavailable"){i.setText("cloud saves unavailable"),i.setColor("#cc6644"),this.time.delayedCall(2e3,()=>{i.setText("↓ PULL FROM CLOUD"),i.setColor("#88ccff")});return}if(l.slots.length===0){i.setText("no cloud saves found"),i.setColor(B),this.time.delayedCall(2e3,()=>{i.setText("↓ PULL FROM CLOUD"),i.setColor("#88ccff")});return}i.setText(`pulling ${l.slots.length} slot(s)...`);for(const p of l.slots)await L.pullFromCloud(p.slotName);this.scene.restart()})})}_bindEnterKey(){this._enterKeyHandler=e=>{if(!this.sys.isActive()||this.sys.game.scene.isActive("GameScene")){document.removeEventListener("keydown",this._enterKeyHandler),this._enterKeyHandler=null;return}if(e.key==="Enter"||e.key==="Return"){const t=e.target?.tagName;if(t==="INPUT"||t==="TEXTAREA")return;const s=L.listSlots().includes("autosave")?"autosave":void 0;this._startGame(s)}},document.addEventListener("keydown",this._enterKeyHandler),this.events.once("shutdown",()=>{this._enterKeyHandler&&(document.removeEventListener("keydown",this._enterKeyHandler),this._enterKeyHandler=null),this.children.removeAll(!0)})}_startGame(e){c.emit("game:loading:show");const t=()=>{e?this.scene.start("GameScene",{loadSlot:e}):this.scene.start("GameScene")};this.sys.game.scene.getScene("GameScene")?t():hr(async()=>{const{GameScene:n}=await import("./GameScene-D0QBY1dE.js");return{GameScene:n}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(({GameScene:n})=>{this.sys.game.scene.add("GameScene",n),t()})}}class gr{static init(){const e=new Map,t=new Set,n=new Set,s=new Set;c.on("norn:added",o=>{e.set(o.id,o);const a=A.getLog(o.id);for(const i of a)i.type==="first_breeding"&&n.add(o.id),i.type==="first_word"&&t.add(o.id),i.type==="near_death"&&s.add(o.id)}),c.on("norn:removed",o=>{A.flush(o.id,o.name,String(o.species)),e.delete(o.id),t.delete(o.id),n.delete(o.id),s.delete(o.id)}),c.on("norn:graduated",(o,a,i)=>{A.append(o.id,{type:"iq_graduation",timestamp:Date.now(),data:{oldTier:a,newTier:i,iq:o.iq}})}),c.on("norn:speech",(o,a)=>{!t.has(o.id)&&o.knownWords.size>=1&&(A.append(o.id,{type:"first_word",timestamp:Date.now(),data:{wordCount:o.knownWords.size}}),t.add(o.id))}),c.on("norn:mating",(o,a)=>{const i=Date.now();n.has(o.id)||(A.append(o.id,{type:"first_breeding",timestamp:i,data:{partnerId:a.id,partnerName:a.name}}),n.add(o.id)),n.has(a.id)||(A.append(a.id,{type:"first_breeding",timestamp:i,data:{partnerId:o.id,partnerName:o.name}}),n.add(a.id))}),c.on("social:interaction",(o,a,i,d)=>{Math.abs(d)>=.2&&A.append(o.id,{type:"social_interaction",timestamp:Date.now(),data:{targetId:a.id,targetName:a.name,interactionType:i,trustDelta:d}})}),c.on("norn:dream",(o,a,i,d)=>{A.append(o.id,{type:"dream",timestamp:Date.now(),data:{episodesReplayed:a,iqBoost:i,dreamContent:d}})}),setInterval(()=>{for(const[o,a]of e){const i=a.chemicals.get(Ft.Injury);i>.8&&!s.has(o)?(A.append(o,{type:"near_death",timestamp:Date.now(),data:{injury:i}}),s.add(o)):i<.4&&s.has(o)&&s.delete(o)}},5e3)}}class fr{serverUrl;playerId;playerDisplayName;triggerEl;modalEl;modalOpen=!1;constructor(e={}){this.serverUrl=e.serverUrl??"",this.playerId=e.playerId??"anonymous",this.playerDisplayName=e.playerDisplayName,this.triggerEl=this._buildTrigger(),this.modalEl=this._buildModal(),document.body.appendChild(this.triggerEl),document.body.appendChild(this.modalEl)}setPlayer(e,t){this.playerId=e,this.playerDisplayName=t}destroy(){this.triggerEl.remove(),this.modalEl.remove()}_buildTrigger(){const e=document.createElement("button");return e.id="folkfork-trigger",e.title="Share lore feedback",e.textContent="◈",e.style.cssText=`
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
    `,t.querySelector("#ff-cancel").addEventListener("click",()=>this._closeModal()),t.querySelector("#ff-submit").addEventListener("click",()=>this._submitFeedback(t)),e.addEventListener("click",n=>{n.target===e&&this._closeModal()}),e.appendChild(t),e}_toggleModal(){this.modalOpen?this._closeModal():this._openModal()}_openModal(){this.modalOpen=!0,this.modalEl.style.display="flex"}_closeModal(){this.modalOpen=!1,this.modalEl.style.display="none",this._resetForm()}_resetForm(){const e=n=>this.modalEl.querySelector(n);e("#ff-suggestion").value="",e("#ff-subject").value="",e("#ff-rationale").value="",e("#ff-type").value="general";const t=e("#ff-status");t.style.display="none",t.textContent=""}async _submitFeedback(e){const t=l=>e.querySelector(l),n=t("#ff-suggestion").value.trim(),s=t("#ff-subject").value.trim(),o=t("#ff-rationale").value.trim(),a=t("#ff-type").value,i=t("#ff-status"),d=t("#ff-submit");if(!n){i.style.color="#f38ba8",i.textContent="Please describe your suggestion.",i.style.display="block";return}d.disabled=!0,d.textContent="Sending…";try{const l=await fetch(`${this.serverUrl}/api/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:a,subject:s||void 0,suggestedChange:n,rationale:o||void 0,playerId:this.playerId,playerDisplayName:this.playerDisplayName,metadata:{gameVersion:typeof __APP_VERSION__<"u"?__APP_VERSION__:"unknown"}})});if(l.ok)i.style.color="rgba(61,252,224,0.8)",i.textContent="✓ Feedback received — thank you.",i.style.display="block",setTimeout(()=>this._closeModal(),2e3);else throw new Error(`Server error ${l.status}`)}catch(l){console.error("[FeedbackButton] submit error:",l),i.style.color="rgba(240,112,64,0.9)",i.textContent="Could not send feedback. Please try again.",i.style.display="block",d.disabled=!1,d.textContent="SEND"}}}class yr{apiUrl;game;triggerEl;modalEl;modalOpen=!1;screenshotData=null;playerId=null;playerDisplayName=null;constructor(e={}){this.apiUrl=e.apiUrl??"https://feedback.multiversestudios.xyz/submit",this.game=e.game??null,this.triggerEl=this._buildTrigger(),this.modalEl=this._buildModal(),document.body.appendChild(this.triggerEl),document.body.appendChild(this.modalEl)}setGame(e){this.game=e}setPlayer(e,t){this.playerId=e,this.playerDisplayName=t??null}destroy(){this.triggerEl.remove(),this.modalEl.remove()}_buildTrigger(){const e=document.createElement("button");return e.id="bugreport-trigger",e.title="report a substrate anomaly",e.textContent="anomaly?",e.style.cssText=`
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
    `,t.querySelector("#br-cancel").addEventListener("click",()=>this._closeModal()),t.querySelector("#br-submit").addEventListener("click",()=>this._submit(t)),t.querySelector("#br-screenshot-btn").addEventListener("click",()=>this._captureScreenshot(t)),t.querySelector("#br-screenshot-remove").addEventListener("click",()=>this._removeScreenshot(t)),e.addEventListener("click",n=>{n.target===e&&this._closeModal()}),e.addEventListener("keydown",n=>{n.key==="Escape"&&(n.stopPropagation(),this._closeModal())}),t.querySelectorAll("input, textarea, select").forEach(n=>{n.addEventListener("keydown",s=>s.stopPropagation())}),e.appendChild(t),e}_toggleModal(){this.modalOpen?this._closeModal():this._openModal()}_openModal(){if(this.modalOpen=!0,this.modalEl.style.display="flex",this.modalEl.setAttribute("data-escape-overlay",""),this.playerDisplayName||this.playerId){const e=this.modalEl.querySelector("#br-contact");e&&!e.value&&(e.value=this.playerDisplayName??this.playerId??"")}}_closeModal(){this.modalOpen=!1,this.modalEl.style.display="none",this.modalEl.removeAttribute("data-escape-overlay"),this._resetForm()}_resetForm(){const e=n=>this.modalEl.querySelector(n);e("#br-title").value="",e("#br-description").value="",e("#br-contact").value="",e("#br-severity").value="minor",this._removeScreenshot(this.modalEl);const t=e("#br-status");t.style.display="none",t.textContent=""}_captureScreenshot(e){this.modalEl.style.display="none",requestAnimationFrame(()=>{const t=document.querySelector("canvas");if(!t){this.modalEl.style.display="flex";const n=e.querySelector("#br-screenshot-status");n.textContent="No canvas found",n.style.color="rgba(240,112,64,0.8)";return}try{this.screenshotData=t.toDataURL("image/png");const n=e.querySelector("#br-screenshot-preview"),s=e.querySelector("#br-screenshot-img"),o=e.querySelector("#br-screenshot-status");s.src=this.screenshotData,n.style.display="block",o.textContent="Screenshot captured",o.style.color="rgba(61,252,224,0.7)"}catch{const s=e.querySelector("#br-screenshot-status");s.textContent="Could not capture screenshot",s.style.color="rgba(240,112,64,0.8)"}this.modalEl.style.display="flex"})}_removeScreenshot(e){this.screenshotData=null;const t=e.querySelector("#br-screenshot-preview"),n=e.querySelector("#br-screenshot-status");t&&(t.style.display="none"),n&&(n.textContent="",n.style.color="rgba(216,220,232,0.25)")}async _submit(e){const t=p=>e.querySelector(p),n=t("#br-title").value.trim(),s=t("#br-description").value.trim(),o=t("#br-contact").value.trim(),a=t("#br-severity").value,i=t("#br-status"),d=t("#br-submit");if(!n||n.length<3){i.style.color="rgba(240,112,64,0.9)",i.textContent="Please provide a title (at least 3 characters).",i.style.display="block";return}if(!s||s.length<10){i.style.color="rgba(240,112,64,0.9)",i.textContent="Please describe what happened (at least 10 characters).",i.style.display="block";return}d.disabled=!0,d.textContent="SUBMITTING...";const l={type:"bug_report",game:"creatures_next",title:n,description:s,severity:a,browser:navigator.userAgent};o&&(l.contact=o),this.playerId&&(l.playerId=this.playerId),this.screenshotData&&(l.screenshot=this.screenshotData);try{const p=await fetch(this.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(p.ok){const g=(await p.json().catch(()=>({}))).credits;if(dr(`[bug-report] ${a}: ${n}`,"info"),i.style.color="rgba(61,252,224,0.8)",g){const S=`$${(g.awarded/100).toFixed(2)}`,R=`$${(g.balance/100).toFixed(2)}`;i.textContent=`Thanks! You've earned ${S} in credits. Balance: ${R}`}else i.textContent="Thanks for your report!";i.style.display="block",setTimeout(()=>this._closeModal(),3e3)}else{const u=await p.json().catch(()=>({}));throw new Error(u.error||`Server error ${p.status}`)}}catch(p){console.error("[BugReportOverlay] submit error:",p),i.style.color="rgba(240,112,64,0.9)",i.textContent="Could not submit. Please try again.",i.style.display="block"}finally{d.disabled=!1,d.textContent="SUBMIT"}}}const We="precursors.supportPrompt.dismissedAt",Xe="precursors.supportPrompt.shown",br=7*24*60*60*1e3,_r=10*60*1e3,vr=5,Sr="https://buy.stripe.com/3cI8wOgrwfaHaNLaKl6c005";class xr{el=null;_shown=!1;_llmCalls=0;_activeMs=0;_lastActiveTime=null;_tickInterval=null;_visibilityHandler=()=>this._onVisibility();init(){this._shouldSkip()||(this._lastActiveTime=document.hidden?null:Date.now(),this._tickInterval=setInterval(()=>this._onTick(),5e3),document.addEventListener("visibilitychange",this._visibilityHandler))}recordLLMCall(){this._shown||this._shouldSkip()||(this._llmCalls++,this._llmCalls>=vr&&this._maybeShow())}destroy(){this._stopTimer(),document.removeEventListener("visibilitychange",this._visibilityHandler),this.el?.remove(),this.el=null}_shouldSkip(){if(sessionStorage.getItem(Xe))return!0;const e=localStorage.getItem(We);return!!(e&&Date.now()-parseInt(e,10)<br)}_stopTimer(){this._tickInterval!==null&&(clearInterval(this._tickInterval),this._tickInterval=null)}_onTick(){document.hidden||this._lastActiveTime===null||(this._activeMs+=Date.now()-this._lastActiveTime,this._lastActiveTime=Date.now(),this._activeMs>=_r&&this._maybeShow())}_onVisibility(){document.hidden?this._lastActiveTime!==null&&(this._activeMs+=Date.now()-this._lastActiveTime,this._lastActiveTime=null):this._lastActiveTime=Date.now()}_maybeShow(){this._shown||this._shouldSkip()||(this._shown=!0,sessionStorage.setItem(Xe,"1"),this._stopTimer(),document.removeEventListener("visibilitychange",this._visibilityHandler),this._render(),this._trackShown())}_render(){const e=document.createElement("div");e.id="support-prompt",e.style.cssText=`
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
           href="${Sr}"
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
    `,document.body.appendChild(e),this.el=e;const t=e.querySelector("#support-dismiss");t.addEventListener("mouseenter",()=>{t.style.color="rgba(216,220,232,0.7)"}),t.addEventListener("mouseleave",()=>{t.style.color="rgba(216,220,232,0.35)"}),t.addEventListener("click",()=>this._dismiss()),requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.style.opacity="1",e.style.transform="translateX(-50%) translateY(0)"})})}_dismiss(){if(localStorage.setItem(We,String(Date.now())),this.el){this.el.style.opacity="0",this.el.style.transform="translateX(-50%) translateY(16px)";const e=this.el;setTimeout(()=>e.remove(),400),this.el=null}}_trackShown(){try{window.umami?.track("ingame-support-prompt-shown")}catch{}}}const C={FIRST_PLANET:"precursors:exploration:first_planet",RUNE_DISCOVERED:"precursors:exploration:rune_discovered",FIRST_BOND:"precursors:social:first_bond",FIRST_PAIRING:"precursors:social:first_pairing",FIRST_HATCH:"precursors:social:first_hatch",FIRST_QUESTION:"precursors:lore:first_question",FIRST_TEACHING:"precursors:lore:first_teaching",COLLECTIVE_RESONANCE:"precursors:lore:collective_resonance",MEME_PANDEMIC:"precursors:lore:meme_pandemic",AGE_TRANSITION:"precursors:lore:age_transition",MIND_AWAKENED:"precursors:mastery:mind_awakened",MIND_TRANSCENDED:"precursors:mastery:mind_transcended",ALCHEMIST:"precursors:mastery:alchemist",FEEDBACK_SUBMITTED:"precursors:community:feedback_submitted"},vt="precursors_unlocked_achievements_v1";function wr(){try{const r=localStorage.getItem(vt);if(r)return new Set(JSON.parse(r))}catch{}return new Set}function Er(r){try{localStorage.setItem(vt,JSON.stringify([...r]))}catch{}}class kr{serverUrl;playerId=null;unlocked;listeners=[];constructor(e=""){this.serverUrl=e,this.unlocked=wr(),this._attachEventListeners()}setPlayer(e){this.playerId=e}onUnlock(e){this.listeners.push(e)}async unlock(e,t={}){this.unlocked.has(e)||this.playerId&&(this.unlocked.add(e),Er(this.unlocked),this._notify(e),await this._report(e,this.playerId,t))}_notify(e){this.listeners.forEach(t=>t(e))}async _report(e,t,n){try{const s=await fetch(`${this.serverUrl}/api/achievements/unlock`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({achievementId:e,playerId:t,gameContext:n})});s.ok||console.warn(`[AchievementService] unlock failed (${s.status}) for ${e}`)}catch(s){console.warn("[AchievementService] network error:",s)}}_attachEventListeners(){c.on("travel:planet_discovered",()=>{this.unlock(C.FIRST_PLANET,{event:"travel:planet_discovered"})}),c.on("rune:discovered",(e,t)=>{this.unlock(C.RUNE_DISCOVERED,{event:"rune:discovered",nornName:t?.name})}),c.on("social:bond_formed",(e,t)=>{this.unlock(C.FIRST_BOND,{event:"social:bond_formed",norns:[e?.name,t?.name]})}),c.on("norn:mating",(e,t)=>{this.unlock(C.FIRST_PAIRING,{event:"norn:mating",norns:[e?.name,t?.name]})}),c.on("norn:hatched",e=>{this.unlock(C.FIRST_HATCH,{event:"norn:hatched",nornName:e?.name,generation:e?.generation})}),c.on("lore:first_question",e=>{this.unlock(C.FIRST_QUESTION,{event:"lore:first_question",nornName:e?.name})}),c.on("lore:first_teaching",e=>{this.unlock(C.FIRST_TEACHING,{event:"lore:first_teaching",nornName:e?.name})}),c.on("lore:collective_resonance",()=>{this.unlock(C.COLLECTIVE_RESONANCE,{event:"lore:collective_resonance"})}),c.on("lore:meme_pandemic",e=>{this.unlock(C.MEME_PANDEMIC,{event:"lore:meme_pandemic",concept:e})}),c.on("age:transition",e=>{this.unlock(C.AGE_TRANSITION,{event:"age:transition",ageName:e})}),c.on("norn:graduated",(e,t,n)=>{const s=n;s>=10&&this.unlock(C.MIND_AWAKENED,{event:"norn:graduated",nornName:e?.name,tier:s}),s>=25&&this.unlock(C.MIND_TRANSCENDED,{event:"norn:graduated",nornName:e?.name,tier:s})}),c.on("invention:compound_discovered",(e,t)=>{this.unlock(C.ALCHEMIST,{event:"invention:compound_discovered",nornName:e?.name,compound:t?.name})})}}const Cr={"precursors:exploration:first_planet":{title:"New Worlds",description:"A world beyond the origin was discovered",rarity:"uncommon"},"precursors:exploration:rune_discovered":{title:"Ancient Marks",description:"A Norn found ruins in a dead language",rarity:"uncommon"},"precursors:social:first_bond":{title:"Bonds of Life",description:"Two Norns formed their first social bond",rarity:"common"},"precursors:social:first_pairing":{title:"The First Pairing",description:"Two Norns chose each other",rarity:"common"},"precursors:social:first_hatch":{title:"New Life",description:"The first egg hatched in this world",rarity:"common"},"precursors:lore:first_question":{title:"The Question Asked",description:"A Norn asked a question of the ground itself",rarity:"uncommon"},"precursors:lore:first_teaching":{title:"Knowledge Passes",description:"One mind shared what it knew with another",rarity:"uncommon"},"precursors:lore:collective_resonance":{title:"Collective Resonance",description:"The boundaries thinned — they felt each other thinking",rarity:"rare"},"precursors:lore:meme_pandemic":{title:"A Meme Takes Root",description:"A concept spread to the entire population",rarity:"rare"},"precursors:lore:age_transition":{title:"A New Age",description:"The civilisation crossed into a new age",rarity:"uncommon"},"precursors:mastery:mind_awakened":{title:"The Voice Awakens",description:"A Norn's mind reached a new depth of understanding",rarity:"rare"},"precursors:mastery:mind_transcended":{title:"The Transcended",description:"A mind has grown beyond what was thought possible",rarity:"legendary"},"precursors:mastery:alchemist":{title:"Alchemist",description:"Something wholly new emerged from combination",rarity:"epic"},"precursors:community:feedback_submitted":{title:"Voice of the World",description:"You shaped the game you play",rarity:"common"}},Qe={common:"rgba(160, 165, 190, 0.9)",uncommon:"rgba(61, 252, 224, 0.9)",rare:"rgba(100, 160, 255, 0.9)",epic:"rgba(180, 100, 255, 0.9)",legendary:"rgba(255, 200, 60, 0.9)"};class Tr{queue=[];showing=!1;constructor(){this._injectStyles()}show(e){this.queue.push(e),this.showing||this._next()}_next(){const e=this.queue.shift();if(!e){this.showing=!1;return}this.showing=!0;const t=Cr[e]??{title:"Achievement Unlocked",description:e.split(":").pop()?.replace(/_/g," ")??"",rarity:"common"},n=Qe[t.rarity]??Qe.common,s=document.createElement("div");s.className="ach-notif",s.setAttribute("aria-live","polite");const o=n.replace(/,\s*[\d.]+\)$/,", 0.7)"),a=n.replace(/,\s*[\d.]+\)$/,", 0.12)");s.innerHTML=`
      <div class="ach-notif__inner" style="border-left-color:${o};box-shadow:0 4px 32px rgba(0,0,0,0.6),0 0 0 1px ${a} inset,0 0 24px ${a}">
        <div class="ach-notif__header">
          <span class="ach-notif__label">ACHIEVEMENT UNLOCKED</span>
          <span class="ach-notif__rarity" style="color:${n}">${t.rarity.toUpperCase()}</span>
        </div>
        <div class="ach-notif__title" style="color:${n}">${Ze(t.title)}</div>
        <div class="ach-notif__desc">${Ze(t.description)}</div>
      </div>
    `,document.body.appendChild(s),requestAnimationFrame(()=>s.classList.add("ach-notif--visible")),setTimeout(()=>{s.classList.remove("ach-notif--visible"),setTimeout(()=>{s.remove(),this._next()},600)},4500)}_injectStyles(){if(document.getElementById("ach-notif-styles"))return;const e=document.createElement("style");e.id="ach-notif-styles",e.textContent=`
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
    `,document.head.appendChild(e)}}function Ze(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const ee=3e3,be=8e3,et=4e3,Mr=6e4,_e=.35,Ir={defiance:"rgba(255, 180, 120,",gentleness:"rgba(180, 220, 200,",curiosity:"rgba(200, 210, 255,",trust:"rgba(200, 230, 180,",wonder:"rgba(230, 200, 255,",grief:"rgba(180, 180, 200,"};class Rr{lastShownAt=0;active=!1;styleInjected=!1;constructor(){c.on("lore:marginalia_triggered",e=>{this.show(e.text,e.theme)})}show(e,t){const n=Date.now();if(this.active||n-this.lastShownAt<Mr)return;this.active=!0,this.lastShownAt=n,this.styleInjected||(this.injectStyles(),this.styleInjected=!0);const s=document.createElement("div");s.className="marginalia-impression";const o=Ir[t]??"rgba(200, 200, 200,";s.textContent=e,s.style.color=`${o} 0)`;const a=Math.random()>.5?"right":"left",i=20+Math.random()*50;s.style[a]="24px",s.style.top=`${i}%`,s.style.textAlign=a==="right"?"right":"left",document.body.appendChild(s);const d=ee+be+et,l=performance.now(),p=u=>{const g=u-l;let S;if(g<ee)S=g/ee*_e;else if(g<ee+be)S=_e;else if(g<d){const R=(g-ee-be)/et;S=_e*(1-R)}else{s.remove(),this.active=!1;return}s.style.color=`${o} ${S})`,requestAnimationFrame(p)};requestAnimationFrame(p)}injectStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}const Lr=3e4,tt=200;class Ar{echoBuffer=[];lastEchoByType=new Map;constructor(){this.wireListeners()}getEchoes(){return this.echoBuffer}getEchoesSince(e){return this.echoBuffer.filter(t=>t.timestamp>e)}clear(){this.echoBuffer=[],this.lastEchoByType.clear()}emit(e){const t=Date.now(),n=this.lastEchoByType.get(e.type)??0;t-n<Lr||(this.lastEchoByType.set(e.type,t),this.echoBuffer.push(e),this.echoBuffer.length>tt&&(this.echoBuffer=this.echoBuffer.slice(-tt)),c.emit("crossgame:lore_echo",e),ue.info("lore",`CrossGameEcho: ${e.type} — "${e.title}"`))}wireListeners(){c.on("lore:first_question",e=>{this.emit({type:"myth_origin",speciesId:w[e.species].toLowerCase(),title:"The First Question",summary:`A ${w[e.species]} named ${e.name} asked a question of the ground itself. The substrate trembled.`,tags:["origin","curiosity","substrate"],timestamp:Date.now()})}),c.on("lore:first_naming",e=>{this.emit({type:"cultural_milestone",speciesId:w[e.species].toLowerCase(),title:"The First Naming",summary:`A ${w[e.species]} gave a name to something. Language began.`,tags:["language","naming","culture"],timestamp:Date.now()})}),c.on("lore:first_teaching",e=>{this.emit({type:"cultural_milestone",speciesId:w[e.species].toLowerCase(),title:"Knowledge Passes",summary:`A ${w[e.species]} named ${e.name} taught another what it knew. Knowledge became heritable.`,tags:["teaching","culture","knowledge"],timestamp:Date.now()})}),c.on("lore:collective_resonance",()=>{this.emit({type:"transcendence",speciesId:"collective",title:"The Collective Resonance",summary:"The boundaries thinned. They felt each other thinking. For a moment, many minds were one.",tags:["resonance","collective","transcendence"],timestamp:Date.now()})}),c.on("lore:the_recursion",e=>{this.emit({type:"transcendence",speciesId:w[e.species].toLowerCase(),title:"The Recursion",summary:`A ${w[e.species]} named ${e.name} perceived the loop. The story knew it was being told.`,tags:["recursion","meta","transcendence"],timestamp:Date.now()})}),c.on("lore:the_spore_dream",()=>{this.emit({type:"species_myth",speciesId:"mycon",title:"The Spore Dream",summary:"The Mycon colony entered synchronized pulse. All nodes dreamed together. The ground remembered.",tags:["mycon","spore_dream","network","collective"],timestamp:Date.now()})}),c.on("lore:the_elder_network",()=>{this.emit({type:"species_myth",speciesId:"mycon",title:"The Elder Network Speaks",summary:"Deep substrate memory surfaced. Two billion years of consciousness pulsed through the colony.",tags:["mycon","elder_network","deep_time","memory"],timestamp:Date.now()})}),c.on("lore:the_funeral_broadcast",()=>{this.emit({type:"species_ritual",speciesId:"mycon",title:"The Funeral Broadcast",summary:"A Mycon node died. Its final act was a burst of everything it knew, released as spores. The colony tasted a lifetime.",tags:["mycon","death","ritual","knowledge_transfer"],timestamp:Date.now()})}),c.on("lore:ettin_engine_grief",e=>{this.emit({type:"species_myth",speciesId:"ettin",title:"Engine Grief",summary:`An Ettin named ${e.name} remembered the engines that once sang. The loss was chemical, not learned.`,tags:["ettin","grief","engine","ancestral_memory"],timestamp:Date.now()})}),c.on("lore:ettin_coordinate_lullaby",e=>{this.emit({type:"species_ritual",speciesId:"ettin",title:"The Coordinate Lullaby",summary:`An Ettin named ${e.name} sang coordinates to a young one. Star-maps encoded as melody.`,tags:["ettin","lullaby","coordinates","teaching"],timestamp:Date.now()})}),c.on("lore:the_grey_compact",e=>{this.emit({type:"species_pact",speciesId:"nyk",title:"The Grey Compact",summary:"A pact was struck with a Nyk. The terms were never quite what they seemed.",tags:["nyk","compact","trickster","alliance"],timestamp:Date.now()})}),c.on("lore:storm_pact",e=>{this.emit({type:"species_pact",speciesId:w[e.species].toLowerCase(),title:"The Storm Pact",summary:`A ${w[e.species]} brokered a pact between Vaask and Grendel. Thunder and darkness, allied.`,tags:["vaask","grendel","alliance","storm"],timestamp:Date.now()})}),c.on("lore:the_star_map",e=>{this.emit({type:"species_myth",speciesId:"nommo",title:"The Star Map",summary:`A Nommo shared star-charts with ${e.name}. Navigation data older than any living memory.`,tags:["nommo","star_map","navigation","ancient"],timestamp:Date.now()})}),c.on("lore:venthari_cooling_lament",e=>{this.emit({type:"species_myth",speciesId:"venthari",title:"The Cooling Lament",summary:`A Ven'thari named ${e.name} sang of a world that grew cold. A lament for heat-death, encoded in scales.`,tags:["venthari","lament","entropy","world_death"],timestamp:Date.now()})}),c.on("lore:shee_departure_hymn",e=>{this.emit({type:"shee_echo",speciesId:"shee",title:"The Departure Hymn",summary:`${e.name} found a Shee recording. It was a hymn to leaving — sung by those who built everything and then walked away.`,tags:["shee","departure","hymn","ruins"],timestamp:Date.now()})}),c.on("lore:shee_designers_grief",e=>{this.emit({type:"shee_echo",speciesId:"shee",title:"The Designer's Grief",summary:`${e.name} understood why the Shee left. They grieved for what they had made.`,tags:["shee","grief","design","departure"],timestamp:Date.now()})}),c.on("lore:shee_archive_doubt",e=>{this.emit({type:"shee_echo",speciesId:"shee",title:"Archive Doubt",summary:`${e.name} read a Shee archive and doubted. The designers questioned their own designs.`,tags:["shee","doubt","archive","heresy"],timestamp:Date.now()})}),c.on("lore:the_alliance",()=>{this.emit({type:"cultural_event",speciesId:"collective",title:"The Alliance",summary:"Different species chose cooperation. An alliance formed across the divide of biology.",tags:["alliance","cross_species","cooperation"],timestamp:Date.now()})}),c.on("lore:cultural_intersection",(e,t,n)=>{this.emit({type:"cultural_exchange",speciesId:`${w[t.species].toLowerCase()}+${w[n.species].toLowerCase()}`,title:"Cultural Intersection",summary:`A ${w[t.species]} and a ${w[n.species]} shared something neither had words for. Culture crossed a species boundary.`,tags:["syncretism","cultural_exchange",w[t.species].toLowerCase(),w[n.species].toLowerCase()],timestamp:Date.now()})}),c.on("lore:territory_dirge",e=>{this.emit({type:"species_myth",speciesId:"grendel",title:"The Territory Dirge",summary:`A Grendel named ${e.name} sang the old song: boundaries marked in darkness, claimed by those the light forgot.`,tags:["grendel","territory","dirge","darkness"],timestamp:Date.now()})}),c.on("lore:grendel_theodicy",e=>{this.emit({type:"species_myth",speciesId:"grendel",title:"The Theodicy",summary:`A Grendel named ${e.name} asked why they were made to suffer. A question older than language.`,tags:["grendel","theodicy","suffering","philosophy"],timestamp:Date.now()})})}}new Ar;const Nr={myth_origin:"Folklorist",cultural_milestone:"Folklorist",cultural_event:"Folklorist",cultural_exchange:"Folklorist",transcendence:"Substrate Monitor",species_myth:"Field Observer",species_ritual:"Field Observer",species_pact:"Diplomatic Monitor",shee_echo:"Archive Scanner"},Dr={myth_origin:r=>`Origin-class mythological event detected. ${r.summary} Tagging for longitudinal tracking. This pattern has not been observed before in this substrate cycle.`,cultural_milestone:r=>`Cultural milestone logged: "${r.title}". ${r.summary} Cross-referencing against known developmental sequences.`,cultural_event:r=>`Cross-species cultural event: "${r.title}". ${r.summary} Monitoring for downstream pattern formation.`,cultural_exchange:r=>`Syncretism event: "${r.title}". ${r.summary} This is... not in the expected developmental models. Logging for review.`,transcendence:r=>`⚠ Anomalous cognitive event: "${r.title}". ${r.summary} Substrate resonance readings are elevated. No intervention recommended at this time.`,species_myth:r=>`Species-specific mythological pattern: "${r.title}" (${r.speciesId}). ${r.summary} Adding to species cultural profile.`,species_ritual:r=>`Ritual behavior observed: "${r.title}" (${r.speciesId}). ${r.summary} Pattern appears culturally transmitted, not genetically encoded.`,species_pact:r=>`Diplomatic event: "${r.title}". ${r.summary} Cross-species coordination at this level was not predicted by current models.`,shee_echo:r=>`Archive resonance: "${r.title}". ${r.summary} The Shee records are... responding. This was not designed to happen.`},Pr=new Set(["transcendence","shee_echo"]),Or=new Set(["myth_origin","species_pact","cultural_exchange"]);function qr(r){return Pr.has(r)?"anomalous":Or.has(r)?"notable":"routine"}const rt=100;class Br{dispatches=[];constructor(){c.on("crossgame:lore_echo",e=>{this.formatAndStore(e)})}getDispatches(){return this.dispatches}getDispatchesSince(e){return this.dispatches.filter(t=>t.timestamp>e)}getRecent(e){return this.dispatches.slice(-e)}clear(){this.dispatches=[]}formatAndStore(e){const t=Dr[e.type];if(!t){ue.warn("lore",`DispatchFormatter: no template for echo type "${e.type}"`);return}const n={agent:Nr[e.type]??"System Monitor",text:t(e),severity:qr(e.type),tags:e.tags,timestamp:e.timestamp};this.dispatches.push(n),this.dispatches.length>rt&&(this.dispatches=this.dispatches.slice(-rt)),c.emit("leaky:dispatch_created",n),ue.info("lore",`Dispatch [${n.agent}]: ${n.text.slice(0,80)}...`)}}new Br;const nt=500,st=["Field Notes","Substrate Monitor Report","Archive Fragment","Dispatch Log","Cultural Survey","Observation Record"];function ot(r,e){const t=st[Math.floor(Math.random()*st.length)],n=Math.floor(Math.random()*9e3)+1e3;return`${t} ${n} — ${r}/${e}`}const $r={myth_origin:"Origin Mythology",cultural_milestone:"Cultural Development",cultural_event:"Cross-Species Relations",cultural_exchange:"Syncretism",transcendence:"Anomalous Cognition",species_myth:"Species Mythology",species_ritual:"Ritual Practices",species_pact:"Diplomatic Records",shee_echo:"Shee Archive"};function it(r,e,t,n){const s=`## ${e}

`,o=n!=="collective"?`*Species: ${n}*

`:`*Cross-species collective event*

`,a=Math.random()<.15?`

---
*See also: an entry that does not yet exist. Check back later.*`:"";return`${s}${o}${t}${a}`}class Fr{entries=[];constructor(){c.on("crossgame:lore_echo",e=>{this.collectFromEcho(e)}),c.on("lore:narrative_weathering_updated",e=>{this.collectWeathering(e)})}getEntries(){return this.entries}getByCategory(e){return this.entries.filter(t=>t.category===e)}getBySpecies(e){return this.entries.filter(t=>t.speciesId===e)}getEntriesSince(e){return this.entries.filter(t=>t.timestamp>e)}clear(){this.entries=[]}collectFromEcho(e){const t=$r[e.type]??"Uncategorized",n={category:t,speciesId:e.speciesId,title:e.title,body:it(t,e.title,e.summary,e.speciesId),citations:[ot(t,e.speciesId),...e.tags.slice(0,2).map(s=>`Tag: ${s}`)],timestamp:e.timestamp};this.store(n)}collectWeathering(e){const t={category:"Narrative Sediment",speciesId:"collective",title:`Weathering Shift: ${e.dominantTheme}`,body:it("Narrative Sediment",`Weathering Shift: ${e.dominantTheme}`,e.description,"collective"),citations:[ot("Narrative Sediment","NEL-aggregate"),...Object.keys(e.mythBoosts).slice(0,3).map(n=>`Myth boost: ${n}`)],timestamp:Date.now()};this.store(t)}store(e){this.entries.push(e),this.entries.length>nt&&(this.entries=this.entries.slice(-nt)),c.emit("leaky:wiki_entry_created",e),ue.info("lore",`WikiEntry [${e.category}]: ${e.title}`)}}new Fr;Object.fromEntries(Object.entries(w).filter(([,r])=>typeof r=="number").map(([r,e])=>[r.toLowerCase(),e]));async function zr(){}let pe=!1,at=!1;function Ur(){if(at)return;at=!0;const r=new URLSearchParams(window.location.search);(r.get("perf_mode")==="1"||r.get("perf_mode")==="true"||r.get("benchmark")==="1"||r.get("benchmark")==="true")&&(pe=!0),window.CREATURES_CONFIG?.PERF_MODE&&(pe=!0),pe&&console.log("[PerfMode] ACTIVE — LLM cognition stubbed, network calls suppressed")}function kn(){return pe}class Cn{timestamps=[];maxPerWindow;windowMs;constructor(e=100,t=6e4){this.maxPerWindow=e,this.windowMs=t}tryAcquire(){const e=performance.now();for(;this.timestamps.length>0&&e-this.timestamps[0]>this.windowMs;)this.timestamps.shift();return this.timestamps.length>=this.maxPerWindow?!1:(this.timestamps.push(e),!0)}get currentCount(){const e=performance.now();for(;this.timestamps.length>0&&e-this.timestamps[0]>this.windowMs;)this.timestamps.shift();return this.timestamps.length}}const lt=()=>({frameStartMs:0,preStepEndMs:0,stepHooksStartMs:0,sceneUpdateStartMs:0,sceneUpdateEndMs:0,postStepEndMs:0,rendererPreRenderStartMs:0,rendererPreRenderEndMs:0,sceneRenderStartMs:0,sceneRenderEndMs:0,rendererPostRenderStartMs:0,rendererPostRenderEndMs:0}),Gr=()=>({scenes:new Map}),N=(r,e)=>r>0&&e>0&&e>=r?e-r:0,Hr=r=>r.sys.settings.key||r.scene.key||r.constructor.name,Kr=12,jr=10,Te=r=>r.type||r.constructor?.name||"Unknown",St=r=>{const e=r;return Array.isArray(e.list)?e.list:[]},Me=(r,e,t=1)=>{r.set(e,(r.get(e)??0)+t)},xt=(r,e)=>{for(const[t,n]of e)Me(r,t,n)},Se=(r,e=Kr)=>Array.from(r.entries()).sort((t,n)=>n[1]-t[1]||t[0].localeCompare(n[0])).slice(0,e).map(([t,n])=>({type:t,count:n})),wt=r=>r.visible!==!1,Et=(r,e,t=0)=>{if(e.has(r))return{subtreeNodes:0,visibleSubtreeNodes:0,maxDepth:t,typeCounts:new Map};e.add(r);const n=new Map;Me(n,Te(r));let s=1,o=wt(r)?1:0,a=t;const i=St(r);for(let d=0;d<i.length;d++){const l=Et(i[d],e,t+1);s+=l.subtreeNodes,o+=l.visibleSubtreeNodes,a=Math.max(a,l.maxDepth),xt(n,l.typeCounts)}return{subtreeNodes:s,visibleSubtreeNodes:o,maxDepth:a,typeCounts:n}},Vr=r=>{const e=r.texture?.key;return typeof e=="string"&&e.length>0?e:null},Jr=(r,e)=>{const t=r;return{type:Te(r),name:t.name||"",textureKey:Vr(r),directChildren:St(r).length,subtreeNodes:e.subtreeNodes,visibleSubtreeNodes:e.visibleSubtreeNodes,depth:+Number(t.depth??0).toFixed(3),alpha:+Number(t.alpha??1).toFixed(3),visible:wt(r),childTypeCounts:Se(e.typeCounts)}};function Yr(r){const e=r;if(e.__creaturesPhaserStepTelemetryInstalled)return;e.__creaturesPhaserStepTelemetryInstalled=!0;const t=lt(),n=Gr(),s=$.Core.Events,o=$.Scenes.Events,a=r.scene,i=r.renderer,d=()=>{Object.assign(t,lt())},l=()=>{n.scenes.clear()},p=h=>{const x=Hr(h);let y=n.scenes.get(x);return y||(y={sceneKey:x,active:!!h.sys.settings.active,visible:!!h.sys.settings.visible,displayListChildren:0,globallyVisibleChildren:0,containerChildren:0,layerChildren:0,cameraCount:0,totalVisibleChildren:0,renderTreeNodeCount:0,renderTreeVisibleNodeCount:0,depthSortMs:0,cameraManagerRenderMs:0,totalFilterMs:0,totalCameraRenderMs:0,renderTotalMs:0,topLevelTypeCounts:[],renderTreeTypeCounts:[],largestRoots:[],cameras:[]},n.scenes.set(x,y)),y},u=()=>{const h=Array.from(n.scenes.values()).sort((m,E)=>E.renderTotalMs-m.renderTotalMs);let x=0,y=0,z=0,F=0,se=0,oe=0,I=0,k=0;for(let m=0;m<h.length;m++){const E=h[m];x+=E.cameraCount,y+=E.displayListChildren,z+=E.globallyVisibleChildren,F+=E.containerChildren,se+=E.layerChildren,oe+=E.totalVisibleChildren,I+=E.renderTreeNodeCount,k+=E.renderTreeVisibleNodeCount}return{frameCount:1,totalScenes:h.length,totalCameras:x,totalDisplayListChildren:y,totalGloballyVisibleChildren:z,totalContainerChildren:F,totalLayerChildren:se,totalVisibleChildren:oe,totalRenderTreeNodes:I,totalRenderTreeVisibleNodes:k,scenes:h}},g=h=>{const x=h;if(x.__creaturesRenderTelemetryInstalled)return;x.__creaturesRenderTelemetryInstalled=!0;const y=h.sys,z=y.cameras,F=z,se=y.render.bind(y),oe=F.render.bind(F);y.render=I=>{if(!Z.isRenderDetailEnabled()){se(I);return}const k=p(h);k.active=!!y.settings.active,k.visible=!!y.settings.visible;const m=y.displayList,E=m.getChildren();k.displayListChildren=E.length;let j=0,V=0,J=0;for(let b=0;b<E.length;b++){const W=E[b];W.visible!==!1&&j++,W.type==="Container"&&V++,W.type==="Layer"&&J++}k.globallyVisibleChildren=j,k.containerChildren=V,k.layerChildren=J;const Y=performance.now(),ie=Y;m.depthSort(),k.depthSortMs=performance.now()-ie,y.events.emit(o.PRE_RENDER,I);const M=performance.now();F.render(I,m),k.cameraManagerRenderMs=performance.now()-M,y.events.emit(o.RENDER,I),k.renderTotalMs=performance.now()-Y},F.render=(I,k)=>{if(!Z.isRenderDetailEnabled()){oe(I,k);return}const m=p(h);m.cameras=[],m.cameraCount=0,m.totalVisibleChildren=0,m.renderTreeNodeCount=0,m.renderTreeVisibleNodeCount=0,m.totalFilterMs=0,m.totalCameraRenderMs=0,m.topLevelTypeCounts=[],m.renderTreeTypeCounts=[],m.largestRoots=[];const E=k.getChildren(),j=z.cameras,V=new Set,J=new Map,Y=new Map,ie=[];for(let M=0;M<j.length;M++){const b=j[M];if(!b.visible||b.alpha<=0)continue;b.preRender();const W=performance.now(),X=z.getVisibleChildren(E,b),Pt=performance.now()-W,Ot=performance.now();I.render(h,X,b);const qt=performance.now()-Ot,me={cameraId:Number(b.id??M),name:String(b.name??`camera_${M}`),visibleChildren:X.length,filterMs:+Pt.toFixed(3),renderMs:+qt.toFixed(3),alpha:+Number(b.alpha??1).toFixed(3),zoom:+Number(b.zoom??1).toFixed(3),width:+Number(b.width??0).toFixed(3),height:+Number(b.height??0).toFixed(3)};m.cameras.push(me),m.cameraCount++,m.totalVisibleChildren+=X.length,m.totalFilterMs+=me.filterMs,m.totalCameraRenderMs+=me.renderMs;for(let ge=0;ge<X.length;ge++){const Q=X[ge];if(V.has(Q))continue;V.add(Q),Me(J,Te(Q));const ae=Et(Q,new Set);m.renderTreeNodeCount+=ae.subtreeNodes,m.renderTreeVisibleNodeCount+=ae.visibleSubtreeNodes,xt(Y,ae.typeCounts),ie.push(Jr(Q,ae))}}m.topLevelTypeCounts=Se(J),m.renderTreeTypeCounts=Se(Y),m.largestRoots=ie.sort((M,b)=>b.subtreeNodes-M.subtreeNodes||b.visibleSubtreeNodes-M.visibleSubtreeNodes||M.type.localeCompare(b.type)).slice(0,jr)}},S=()=>{const h=a.scenes;for(let x=0;x<h.length;x++)g(h[x])},R=()=>{d(),l(),t.frameStartMs=performance.now()},q=()=>{const h=performance.now();t.preStepEndMs=h,t.stepHooksStartMs=h},K=()=>{t.postStepEndMs=performance.now()},At=()=>{if(t.frameStartMs<=0)return;const h=performance.now();Z.recordPhaserStepFrame({preStep:N(t.frameStartMs,t.preStepEndMs),stepHooks:N(t.stepHooksStartMs,t.sceneUpdateStartMs||t.postStepEndMs||h),sceneUpdate:N(t.sceneUpdateStartMs,t.sceneUpdateEndMs),postStep:N(t.postStepEndMs,t.rendererPreRenderStartMs||t.sceneRenderStartMs||h),rendererPreRender:N(t.rendererPreRenderStartMs,t.rendererPreRenderEndMs),sceneRender:N(t.sceneRenderStartMs,t.sceneRenderEndMs),rendererPostRender:N(t.rendererPostRenderStartMs,t.rendererPostRenderEndMs),postRender:N(t.rendererPostRenderEndMs||t.sceneRenderEndMs||t.postStepEndMs,h),totalStep:N(t.frameStartMs,h)}),Z.isRenderDetailEnabled()&&n.scenes.size>0&&Z.recordRenderDetailFrame(u())},Nt=a.update.bind(a);a.update=(h,x)=>{t.sceneUpdateStartMs=performance.now();try{Nt(h,x)}finally{t.sceneUpdateEndMs=performance.now()}};const Dt=a.render.bind(a);if(a.render=h=>{S(),t.sceneRenderStartMs=performance.now();try{Dt(h)}finally{t.sceneRenderEndMs=performance.now()}},i){const h=i.preRender.bind(i);i.preRender=(...y)=>{t.rendererPreRenderStartMs=performance.now();try{h(...y)}finally{t.rendererPreRenderEndMs=performance.now()}};const x=i.postRender.bind(i);i.postRender=(...y)=>{t.rendererPostRenderStartMs=performance.now();try{x(...y)}finally{t.rendererPostRenderEndMs=performance.now()}}}S(),r.events.on(s.PRE_STEP,R),r.events.on(s.STEP,q),r.events.on(s.POST_STEP,K),r.events.on(s.POST_RENDER,At),r.events.once(s.READY,S),r.events.on(s.SYSTEM_READY,S)}const Wr="/sprites/eternal-return-glyph.svg";class Xr{static show(e){const t=document.createElement("div");t.id="glyph-overlay";const n=document.createElement("img");n.src=Wr,n.alt="Eternal Return glyph",n.width=24,n.height=24,t.appendChild(n),t.style.cssText=`
      position: fixed;
      top: 18px;
      left: 18px;
      width: 24px;
      height: 24px;
      z-index: 9000;
    `,e>=2&&(t.style.cursor="pointer",t.addEventListener("click",()=>{window.open("https://folkfork.multiversestudios.xyz/cycle","_blank")})),document.body.appendChild(t)}}const Qr={},ct="precursors_glyph_triggered";class Zr{constructor(e,t){this.eventBus=e,this.getPlayerId=t,this.eventBus.on("norn:hatched",()=>this.onHatched())}async onHatched(){if(localStorage.getItem(ct))return;localStorage.setItem(ct,"1");const e=Qr?.VITE_FOLKFORK_API_URL??"https://folkfork.multiversestudios.xyz",t=this.getPlayerId();try{const n=await fetch(`${e}/api/glyph/${encodeURIComponent(t)}/precursors`,{method:"POST"});if(!n.ok)return;const s=await n.json();Xr.show(s.encounterCount)}catch(n){console.error("[GlyphTriggerSystem] Glyph trigger failed:",n)}}}const Ie="precursors.llmConfig",kt="precursors.llmEnabled",Ct="precursors.llmSetupDone",xe={baseUrl:"",apiKey:"",defaultModel:"",injectNoThink:!0,stripThinkTags:!0,tierModels:{}};let D=null;function en(){if(D)return D;try{const r=localStorage.getItem(Ie);if(r)return D={...xe,...JSON.parse(r)},D}catch(r){console.error("[LLMConfig] Failed to parse saved config:",r)}return D={...xe},D}function tn(r){D={...r};try{localStorage.setItem(Ie,JSON.stringify(D))}catch(e){console.error("[LLMConfig] Failed to save config:",e)}}function Tn(){D={...xe};try{localStorage.removeItem(Ie)}catch(r){console.error("[LLMConfig] Failed to clear config:",r)}}function Mn(){try{return localStorage.getItem(kt)!=="false"}catch{return!0}}function dt(r){try{localStorage.setItem(kt,r?"true":"false")}catch{}}function rn(){try{return localStorage.getItem(Ct)==="1"}catch{return!1}}function pt(){try{localStorage.setItem(Ct,"1")}catch{}}function In(){return navigator.platform.startsWith("Mac")||/Mac/.test(navigator.userAgent)}const ut="precursors.providerRegistry",ht=[{id:"groq",name:"Groq (cloud, fast)",baseUrl:"https://api.groq.com/openai/v1",apiKey:"",models:["qwen/qwen3-32b","qwen/qwen3-8b","llama-3.3-70b-versatile","llama-3.1-8b-instant"],inputCostPerMToken:.1,outputCostPerMToken:.1,dailyBudgetCents:1500,priority:10,isLocal:!1,enabled:!0,healthStatus:"unknown",consecutiveFailures:0,retryAfter:0},{id:"deepinfra",name:"DeepInfra (cloud)",baseUrl:"https://api.deepinfra.com/v1/openai",apiKey:"",models:["Qwen/Qwen3-8B","Qwen/Qwen3-32B","meta-llama/Llama-3.3-70B-Instruct"],inputCostPerMToken:.07,outputCostPerMToken:.07,dailyBudgetCents:200,priority:20,isLocal:!1,enabled:!0,healthStatus:"unknown",consecutiveFailures:0,retryAfter:0},{id:"openrouter",name:"OpenRouter (cloud)",baseUrl:"https://openrouter.ai/api/v1",apiKey:"",models:["qwen/qwen3-32b","qwen/qwen3-8b","meta-llama/llama-3.3-70b-instruct"],inputCostPerMToken:.1,outputCostPerMToken:.1,dailyBudgetCents:200,priority:30,isLocal:!1,enabled:!0,healthStatus:"unknown",consecutiveFailures:0,retryAfter:0},{id:"mlx",name:"MLX (Mac, local)",baseUrl:"http://localhost:8080/v1",apiKey:"",models:["mlx-community/Qwen3-8B-4bit","mlx-community/Qwen3-30B-A3B-4bit"],inputCostPerMToken:0,outputCostPerMToken:0,dailyBudgetCents:0,priority:5,isLocal:!0,enabled:!1,healthStatus:"unknown",consecutiveFailures:0,retryAfter:0},{id:"orange-pi",name:"Orange Pi (local SBC)",baseUrl:"http://orangepi.local:8080/v1",apiKey:"",models:["qwen3-8b","qwen3:8b"],inputCostPerMToken:0,outputCostPerMToken:0,dailyBudgetCents:0,priority:1,isLocal:!0,enabled:!1,healthStatus:"unknown",consecutiveFailures:0,retryAfter:0}],nn=3,sn=6e4,on=6e4;class an{providers=new Map;constructor(){this.load()}load(){try{const e=localStorage.getItem(ut);if(e){const t=JSON.parse(e);for(const n of t)n.enabled===void 0&&(n.enabled=!n.isLocal),this.providers.set(n.id,n);for(const n of ht)this.providers.has(n.id)||this.providers.set(n.id,{...n});return}}catch{}for(const e of ht)this.providers.set(e.id,{...e})}save(){try{localStorage.setItem(ut,JSON.stringify([...this.providers.values()]))}catch{}}getAll(){return[...this.providers.values()]}get(e){return this.providers.get(e)}register(e){this.providers.set(e.id,{...e}),this.save()}deregister(e){this.providers.delete(e),this.save()}update(e,t){const n=this.providers.get(e);n&&(this.providers.set(e,{...n,...t}),this.save())}recordSuccess(e){const t=this.providers.get(e);t&&(t.consecutiveFailures=0,t.healthStatus="healthy",t.retryAfter=0,this.save())}recordFailure(e){const t=this.providers.get(e);t&&(t.consecutiveFailures+=1,t.consecutiveFailures>=nn&&(t.healthStatus="unhealthy",t.retryAfter=Date.now()+sn),this.save())}recordRateLimit(e,t){const n=this.providers.get(e);if(!n)return;n.consecutiveFailures+=1,n.healthStatus="unhealthy";const s=t?t*1e3:on;n.retryAfter=Date.now()+s,this.save()}isAvailable(e){const t=this.providers.get(e);return t?t.healthStatus!=="unhealthy"?!0:Date.now()>=t.retryAfter?(t.healthStatus="unknown",t.consecutiveFailures=0,this.save(),!0):!1:!1}getByPriority(){return[...this.providers.values()].sort((e,t)=>e.priority-t.priority)}}const ln=new an,_={border:"rgba(61,252,224,0.28)",cyanGlow:"rgba(61,252,224,0.08)",text:"rgba(216,220,232,0.85)",textDim:"#565966",textMid:"rgba(139,143,164,0.7)",red:"#f05050",font:"'JetBrains Mono', monospace",fontSerif:"'Cormorant Garamond', 'Garamond', serif"};class cn{el=null;onDone;constructor(e){this.onDone=e}showIfNeeded(){return rn()?!1:(this._build(),!0)}show(){this._build()}_build(){this._injectStyles();const e=document.createElement("div");e.id="groq-key-overlay",e.className="groq-key-overlay",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Configure Creature Intelligence"),document.body.appendChild(e),this.el=e,this._render(),requestAnimationFrame(()=>{e.classList.add("visible")})}_render(){if(!this.el)return;this.el.innerHTML=`
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
    `;const e=this.el.querySelector("#groq-key-input"),t=this.el.querySelector("#groq-key-submit"),n=this.el.querySelector("#groq-key-skip"),s=this.el.querySelector("#groq-key-error");e.addEventListener("keydown",o=>{o.stopPropagation(),o.key==="Enter"&&t.click()}),e.addEventListener("click",o=>o.stopPropagation()),t.addEventListener("click",o=>{o.stopPropagation();const a=e.value.trim();if(!a){s.textContent='Please enter your Groq API key, or choose "Continue without AI minds".',s.style.display="block",e.style.borderColor=_.red;return}if(!a.startsWith("gsk_")&&!a.startsWith("sk-")){s.textContent='Groq keys usually start with "gsk_". Double-check your key.',s.style.display="block",e.style.borderColor=_.red;return}this._saveKey(a),this._dismiss()}),n.addEventListener("click",o=>{o.stopPropagation(),dt(!1),pt(),this._dismiss()})}_saveKey(e){const t=en();tn({...t,apiKey:e}),ln.update("groq",{apiKey:e,enabled:!0}),dt(!0),pt()}_dismiss(){this.el&&(this.el.classList.remove("visible"),this.el.classList.add("hiding"),setTimeout(()=>{this.el?.remove(),this.el=null,this.onDone()},500))}_injectStyles(){if(document.getElementById("groq-key-styles"))return;const e=document.createElement("style");e.id="groq-key-styles",e.textContent=`
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
        border: 1px solid ${_.border};
        border-radius: 6px;
        box-shadow:
          0 0 80px ${_.cyanGlow},
          0 0 160px rgba(61,252,224,0.03),
          inset 0 0 60px ${_.cyanGlow};
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
        font-family: ${_.font};
        font-size: 9px;
        letter-spacing: 0.35em;
        color: rgba(61,252,224,0.45);
        text-transform: uppercase;
        margin-bottom: 10px;
      }
      .groq-key-title {
        font-family: ${_.fontSerif};
        font-weight: 300;
        font-size: 26px;
        letter-spacing: 0.12em;
        color: #d8dce8;
        margin-bottom: 6px;
        text-shadow: 0 0 30px rgba(61,252,224,0.15);
      }
      .groq-key-subtitle {
        font-family: ${_.fontSerif};
        font-size: 13px;
        font-style: italic;
        font-weight: 300;
        color: ${_.textMid};
        letter-spacing: 0.05em;
      }

      .groq-key-body {
        padding: 22px 32px 18px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        font-family: ${_.fontSerif};
        font-size: 15px;
        font-weight: 300;
        line-height: 1.65;
        color: ${_.text};
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
        font-family: ${_.font};
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
        font-family: ${_.font};
        font-size: 9px;
        letter-spacing: 0.15em;
        color: ${_.textDim};
        text-transform: uppercase;
      }
      .groq-key-input {
        width: 100%;
        padding: 9px 12px;
        background: #0d0e18;
        border: 1px solid #252637;
        border-radius: 3px;
        color: #d8dce8;
        font-family: ${_.font};
        font-size: 11px;
        box-sizing: border-box;
        outline: none;
        transition: border-color 0.2s;
      }
      .groq-key-input:focus { border-color: rgba(61,252,224,0.4); }
      .groq-key-input::placeholder { color: #565966; }

      .groq-key-error {
        font-family: ${_.font};
        font-size: 10px;
        color: #f05050;
        letter-spacing: 0.04em;
        padding-top: 2px;
      }

      .groq-key-note {
        font-size: 12px;
        color: ${_.textMid};
        font-style: italic;
      }
      .groq-key-kbd {
        font-family: ${_.font};
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
        font-family: ${_.font};
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
    `,document.head.appendChild(e)}}Bt.init();$t.init();gr.init();Ur();Ut();if("ontouchstart"in window&&matchMedia("(pointer: coarse)").matches&&!matchMedia("(pointer: fine)").matches){const r=document.createElement("div");r.id="mobile-keyboard-notice",r.setAttribute("role","alert"),r.innerHTML=['<div style="background:#0d0f18;border:1px solid #2a2d3d;border-radius:8px;',"padding:28px 32px;max-width:400px;width:90%;text-align:center;",`font-family:'JetBrains Mono',monospace;box-shadow:0 0 40px rgba(0,0,0,0.8)">`,'<div style="color:#f0c040;font-size:18px;margin-bottom:12px">Keyboard Required</div>','<div style="color:#8090b0;font-size:13px;line-height:1.6;margin-bottom:20px">',"This game requires a physical keyboard for all interactions ","(Tab, Space, arrow keys, and more). ","For the best experience, please play on a desktop or laptop.</div>",'<button id="mobile-notice-dismiss" style="background:#1a1d2e;color:#d8dce8;',"border:1px solid #3a3d4d;border-radius:4px;padding:8px 20px;font-family:inherit;",'font-size:12px;cursor:pointer;letter-spacing:0.05em">Continue Anyway</button>',"</div>"].join(""),r.style.cssText=["position:fixed;inset:0;z-index:10000;display:flex;","align-items:center;justify-content:center;","background:rgba(10,11,16,0.92);backdrop-filter:blur(2px)"].join(";"),document.body.appendChild(r),document.getElementById("mobile-notice-dismiss").addEventListener("click",()=>{r.remove()})}window.CREATURES_CONFIG&&zt(window.CREATURES_CONFIG);await zr();let Re=!1,we=!1;const Tt=()=>{we||!Re||(we=!0,c.emit("game:music:start"))},dn=()=>{const r=document.getElementById("loading-screen");r&&(r.classList.add("fade-out"),setTimeout(()=>{r.style.display="none"},850)),Tt()},pn=()=>{const r=document.getElementById("loading-screen");r&&(r.style.display="",r.classList.remove("fade-out")),Le=!1,Ae=!1,we=!1};let Le=!1,Ae=!1,Ne=!1;const he=()=>{Le&&Ae&&Ne&&dn()};window.addEventListener("matrixAuthReady",r=>{Ne=!0,r.detail?.loggedIn&&(Re=!0),he()});window.addEventListener("matrixAuthLogin",()=>{Ne=!0,Re=!0,he(),Tt()});c.on("game:loading:show",pn);c.on("game:scene:ready",()=>{Le=!0,he()});c.on("song:buffer:ready",()=>{Ae=!0,he()});const un={type:$.AUTO,width:v,height:U,parent:"game-container",backgroundColor:"#0a0b10",scene:[mr,Gt],pixelArt:!0,render:{powerPreference:"high-performance"},fps:{target:30,forceSetTimeOut:!1},scale:{mode:$.Scale.ENVELOP,autoCenter:$.Scale.CENTER_BOTH},input:{mouse:{preventDefaultWheel:!0}}},ne=new $.Game(un);Yr(ne);const Mt=window.FOLKFORK_SERVER_URL??"",hn=new fr({serverUrl:Mt}),De=new kr(Mt),mn=new Tr;De.onUnlock(r=>mn.show(r));new Rr;const gn=new yr({game:ne}),It=new xr;c.on("game:scene:ready",()=>{It.init()});c.on("norn:speech",()=>{It.recordLLMCall()});c.on("save:loaded",r=>{const e=r;if(e?.playerId&&typeof e.playerId=="string"){const t=typeof e.playerName=="string"?e.playerName:void 0;hn.setPlayer(e.playerId,t),gn.setPlayer(e.playerId,t),De.setPlayer(e.playerId)}});const P=document.createElement("div");P.id="credit-balance";P.style.cssText=["position:fixed;top:8px;right:8px;z-index:900;",'font-family:"JetBrains Mono",monospace;font-size:11px;',"color:#8090b0;background:rgba(13,15,24,0.85);","padding:4px 10px;border-radius:4px;border:1px solid #2a2d3d;","pointer-events:none;opacity:0;transition:opacity 0.3s;"].join("");document.body.appendChild(P);c.on("llm:credits_update",r=>{P.textContent=`Credits: ${r.balance_display}`,P.style.opacity="1",P.style.color=r.balance_cents<=100?"#f05050":"#8090b0"});c.on("llm:credits_exhausted",r=>{P.textContent="Credits: $0.00",P.style.opacity="1",P.style.color="#f05050",T(r?.message??"Norn-mind credits exhausted! Submit bug reports to earn more.",8e3),localStorage.removeItem("precursors.llmSetupDone"),new cn(()=>{}).showIfNeeded()});let Rt="anonymous";new Zr(c,()=>Rt);c.on("save:loaded",r=>{const e=r;e?.playerId&&typeof e.playerId=="string"&&(Rt=e.playerId)});c.on("feedback:submitted",()=>{De.unlock(C.FEEDBACK_SUBMITTED,{event:"feedback:submitted"})});function T(r,e=4e3){const t=document.getElementById("lore-toast");t&&(t.textContent=r,t.classList.add("visible"),setTimeout(()=>t.classList.remove("visible"),e))}c.on("norn:graduated",(r,e,t)=>{const s={5:o=>`${o} stirs — the first words come`,10:o=>`${o} has found their voice`,15:o=>`${o} peers into the deep places of thought`,20:o=>`${o} sees the threads that bind all things`,25:o=>`Something has changed in ${o}...`}[t];s?T(s(r.name),5e3):T(`${r.name}'s mind has expanded`)});c.on("rune:discovered",(r,e)=>{T(`${e.name} found ancient markings...`)});c.on("lore:first_question",r=>{T("The ground hums in answer...",5e3)});c.on("lore:first_naming",r=>{T("A word takes root in the world",5e3)});c.on("lore:first_teaching",r=>{T("Knowledge passes between minds",5e3)});c.on("lore:first_dream",r=>{T("Something old stirs in the deep...",6e3)});c.on("lore:collective_resonance",()=>{T("The boundaries thin. They feel each other thinking.",7e3)});c.on("norn:hatched",r=>{T(`A new life: ${r.name} has hatched (gen ${r.generation})`,5e3)});c.on("norn:eggLaid",r=>{T(`${r.name} laid an egg`,3e3)});c.on("invention:created",(r,e,t)=>{const n=t.length>1?` from ${t.slice(0,2).join(" + ")}`:t.length===1?` from ${t[0]}`:"";T(`${r.name} invented "${e.name}"${n}`,5e3)});c.on("invention:compound_discovered",(r,e,t,n)=>{fn(r.name,e.name,t.name,n.name)});function fn(r,e,t,n){const s=document.createElement("div");s.className="compound-discovery",s.innerHTML=`
    <div class="compound-discovery__inner">
      <div class="compound-discovery__label">COMPOUND DISCOVERY</div>
      <div class="compound-discovery__name">${e}</div>
      <div class="compound-discovery__detail">${r} combined <em>${t}</em> + <em>${n}</em></div>
      <div class="compound-discovery__sub">Something new has emerged in the world</div>
    </div>
  `,document.body.appendChild(s),requestAnimationFrame(()=>s.classList.add("compound-discovery--visible")),setTimeout(()=>{s.classList.remove("compound-discovery--visible"),setTimeout(()=>s.remove(),700)},5e3)}ne.events.on("contextlost",()=>{const r=document.getElementById("loading-screen");if(r){r.classList.remove("fade-out");const e=r.querySelector(".loading-sub");e&&(e.textContent="The substrate collapsed — please refresh to re-enter")}});let Pe=!1;c.on("game:scene:error",()=>{Pe=!0});c.on("game:loading:show",()=>{Pe=!1});const Lt=r=>{ne.scene.isActive("GameScene")&&c.emit("game:scene:error");const e=r.error??r.reason;e&&cr(e)};window.addEventListener("error",Lt);window.addEventListener("unhandledrejection",Lt);c.on("game:scene:shutdown",()=>{if(!Pe)return;const r=document.getElementById("loading-screen");if(r){r.classList.remove("fade-out");const e=r.querySelector(".loading-sub");e&&(e.textContent="The substrate collapsed — please refresh to re-enter")}});window.__precursors={game:ne,eventBus:c};export{ln as P,Cn as R,Mn as a,dt as b,In as c,en as g,kn as i,pt as m,Tn as r,tn as s};
