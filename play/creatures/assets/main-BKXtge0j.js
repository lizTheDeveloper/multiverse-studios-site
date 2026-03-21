const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GameScene-D1U4J_IQ.js","assets/vendor-phaser-CaWnzXme.js","assets/Logger-BIETK-dL.js","assets/WorldGenerator-C4_0e8Z-.js","assets/LifeStage-069__A6x.js","assets/SpriteState-tqplp9c6.js","assets/WaveUnlockSystem-BG7RnMlX.js","assets/LanguageSystem-w2x5qvNj.js","assets/InventionRegistry-CAl4rlO6.js","assets/World-DV8LJPJj.js","assets/PerfTelemetry-Bt4uPQP9.js","assets/ChemicalSet-BN3dzCmh.js","assets/DevMode-CJIc63j7.js","assets/SimulationScheduler-DZrfbKS7.js","assets/BiochemistrySystem-DXbCTFLt.js","assets/KeyboardControls-EFtT7VhV.js"])))=>i.map(i=>d[i]);
import"./LifeStage-069__A6x.js";import{P as O}from"./vendor-phaser-CaWnzXme.js";import{s as I,P as W,C as Ct,A as Tt}from"./PerfTelemetry-Bt4uPQP9.js";import{G as _,a as F,e as c,C as Mt,l as ce,S as x,b as kt}from"./Logger-BIETK-dL.js";import{N as D,i as Rt,U as It}from"./DevMode-CJIc63j7.js";import"./ChemicalSet-BN3dzCmh.js";import"./InventionRegistry-CAl4rlO6.js";import"./LanguageSystem-w2x5qvNj.js";const Q="8.55.0",A=globalThis;function _e(n,e,t){const s=A,r=s.__SENTRY__=s.__SENTRY__||{},o=r[Q]=r[Q]||{};return o[n]||(o[n]=e())}const st=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,Nt="Sentry Logger ",Re=["debug","info","warn","error","log","assert","trace"],Ie={};function At(n){if(!("console"in A))return n();const e=A.console,t={},s=Object.keys(Ie);s.forEach(r=>{const o=Ie[r];t[r]=e[r],e[r]=o});try{return n()}finally{s.forEach(r=>{e[r]=t[r]})}}function Lt(){let n=!1;const e={enable:()=>{n=!0},disable:()=>{n=!1},isEnabled:()=>n};return st?Re.forEach(t=>{e[t]=(...s)=>{n&&At(()=>{A.console[t](`${Nt}[${t}]:`,...s)})}}):Re.forEach(t=>{e[t]=()=>{}}),e}const ae=_e("logger",Lt);function rt(){return Se(A),A}function Se(n){const e=n.__SENTRY__=n.__SENTRY__||{};return e.version=e.version||Q,e[Q]=e[Q]||{}}const Dt=Object.prototype.toString;function Ot(n,e){return Dt.call(n)===`[object ${e}]`}function Pt(n){return Ot(n,"Object")}function $t(n){return!!(n&&n.then&&typeof n.then=="function")}function Bt(n,e,t){try{Object.defineProperty(n,e,{value:t,writable:!0,configurable:!0})}catch{st&&ae.log(`Failed to add non-enumerable property "${e}" to object`,n)}}const ot=1e3;function it(){return Date.now()/ot}function Ft(){const{performance:n}=A;if(!n||!n.now)return it;const e=Date.now()-n.now(),t=n.timeOrigin==null?e:n.timeOrigin;return()=>(t+n.now())/ot}const zt=Ft();(()=>{const{performance:n}=A;if(!n||!n.now)return;const e=3600*1e3,t=n.now(),s=Date.now(),r=n.timeOrigin?Math.abs(n.timeOrigin+t-s):e,o=r<e,a=n.timing&&n.timing.navigationStart,d=typeof a=="number"?Math.abs(a+t-s):e,l=d<e;return o||l?r<=d?n.timeOrigin:a:s})();function z(){const n=A,e=n.crypto||n.msCrypto;let t=()=>Math.random()*16;try{if(e&&e.randomUUID)return e.randomUUID().replace(/-/g,"");e&&e.getRandomValues&&(t=()=>{const s=new Uint8Array(1);return e.getRandomValues(s),s[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,s=>(s^(t()&15)>>s/4).toString(16))}function Ut(n,e={}){if(e.user&&(!n.ipAddress&&e.user.ip_address&&(n.ipAddress=e.user.ip_address),!n.did&&!e.did&&(n.did=e.user.id||e.user.email||e.user.username)),n.timestamp=e.timestamp||zt(),e.abnormal_mechanism&&(n.abnormal_mechanism=e.abnormal_mechanism),e.ignoreDuration&&(n.ignoreDuration=e.ignoreDuration),e.sid&&(n.sid=e.sid.length===32?e.sid:z()),e.init!==void 0&&(n.init=e.init),!n.did&&e.did&&(n.did=`${e.did}`),typeof e.started=="number"&&(n.started=e.started),n.ignoreDuration)n.duration=void 0;else if(typeof e.duration=="number")n.duration=e.duration;else{const t=n.timestamp-n.started;n.duration=t>=0?t:0}e.release&&(n.release=e.release),e.environment&&(n.environment=e.environment),!n.ipAddress&&e.ipAddress&&(n.ipAddress=e.ipAddress),!n.userAgent&&e.userAgent&&(n.userAgent=e.userAgent),typeof e.errors=="number"&&(n.errors=e.errors),e.status&&(n.status=e.status)}function Ne(){return z()}function Ae(){return z().substring(16)}function at(n,e,t=2){if(!e||typeof e!="object"||t<=0)return e;if(n&&e&&Object.keys(e).length===0)return n;const s={...n};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(s[r]=at(s[r],e[r],t-1));return s}const ye="_sentrySpan";function Le(n,e){e?Bt(n,ye,e):delete n[ye]}function De(n){return n[ye]}const Gt=100;class ve{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:Ne(),spanId:Ae()}}clone(){const e=new ve;return e._breadcrumbs=[...this._breadcrumbs],e._tags={...this._tags},e._extra={...this._extra},e._contexts={...this._contexts},this._contexts.flags&&(e._contexts.flags={values:[...this._contexts.flags.values]}),e._user=this._user,e._level=this._level,e._session=this._session,e._transactionName=this._transactionName,e._fingerprint=this._fingerprint,e._eventProcessors=[...this._eventProcessors],e._requestSession=this._requestSession,e._attachments=[...this._attachments],e._sdkProcessingMetadata={...this._sdkProcessingMetadata},e._propagationContext={...this._propagationContext},e._client=this._client,e._lastEventId=this._lastEventId,Le(e,De(this)),e}setClient(e){this._client=e}setLastEventId(e){this._lastEventId=e}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&Ut(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(e){return this._requestSession=e,this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,t){return this._tags={...this._tags,[e]:t},this._notifyScopeListeners(),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,t){return this._extra={...this._extra,[e]:t},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,t){return t===null?delete this._contexts[e]:this._contexts[e]=t,this._notifyScopeListeners(),this}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(e){if(!e)return this;const t=typeof e=="function"?e(this):e,[s,r]=t instanceof Z?[t.getScopeData(),t.getRequestSession()]:Pt(t)?[e,e.requestSession]:[],{tags:o,extra:a,user:i,contexts:d,level:l,fingerprint:p=[],propagationContext:u}=s||{};return this._tags={...this._tags,...o},this._extra={...this._extra,...a},this._contexts={...this._contexts,...d},i&&Object.keys(i).length&&(this._user=i),l&&(this._level=l),p.length&&(this._fingerprint=p),u&&(this._propagationContext=u),r&&(this._requestSession=r),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._session=void 0,Le(this,void 0),this._attachments=[],this.setPropagationContext({traceId:Ne()}),this._notifyScopeListeners(),this}addBreadcrumb(e,t){const s=typeof t=="number"?t:Gt;if(s<=0)return this;const r={timestamp:it(),...e};return this._breadcrumbs.push(r),this._breadcrumbs.length>s&&(this._breadcrumbs=this._breadcrumbs.slice(-s),this._client&&this._client.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:De(this)}}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata=at(this._sdkProcessingMetadata,e,2),this}setPropagationContext(e){return this._propagationContext={spanId:Ae(),...e},this}getPropagationContext(){return this._propagationContext}captureException(e,t){const s=t&&t.event_id?t.event_id:z();if(!this._client)return ae.warn("No client configured on scope - will not capture exception!"),s;const r=new Error("Sentry syntheticException");return this._client.captureException(e,{originalException:e,syntheticException:r,...t,event_id:s},this),s}captureMessage(e,t,s){const r=s&&s.event_id?s.event_id:z();if(!this._client)return ae.warn("No client configured on scope - will not capture message!"),r;const o=new Error(e);return this._client.captureMessage(e,t,{originalException:e,syntheticException:o,...s,event_id:r},this),r}captureEvent(e,t){const s=t&&t.event_id?t.event_id:z();return this._client?(this._client.captureEvent(e,{...t,event_id:s},this),s):(ae.warn("No client configured on scope - will not capture event!"),s)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(e=>{e(this)}),this._notifyingListeners=!1)}}const Z=ve;function qt(){return _e("defaultCurrentScope",()=>new Z)}function Ht(){return _e("defaultIsolationScope",()=>new Z)}class Vt{constructor(e,t){let s;e?s=e:s=new Z;let r;t?r=t:r=new Z,this._stack=[{scope:s}],this._isolationScope=r}withScope(e){const t=this._pushScope();let s;try{s=e(t)}catch(r){throw this._popScope(),r}return $t(s)?s.then(r=>(this._popScope(),r),r=>{throw this._popScope(),r}):(this._popScope(),s)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const e=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:e}),e}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function U(){const n=rt(),e=Se(n);return e.stack=e.stack||new Vt(qt(),Ht())}function jt(n){return U().withScope(n)}function Jt(n,e){const t=U();return t.withScope(()=>(t.getStackTop().scope=n,e(n)))}function Oe(n){return U().withScope(()=>n(U().getIsolationScope()))}function Kt(){return{withIsolationScope:Oe,withScope:jt,withSetScope:Jt,withSetIsolationScope:(n,e)=>Oe(e),getCurrentScope:()=>U().getScope(),getIsolationScope:()=>U().getIsolationScope()}}function Yt(n){const e=Se(n);return e.acs?e.acs:Kt()}function lt(){const n=rt();return Yt(n).getCurrentScope()}function Wt(n,e){return lt().captureException(n,void 0)}function Xt(n,e){const t=e;return lt().captureMessage(n,t,void 0)}const Qt="modulepreload",Zt=function(n){return"/play/creatures/"+n},Pe={},en=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");r=Promise.allSettled(t.map(d=>{if(d=Zt(d),d in Pe)return;Pe[d]=!0;const l=d.endsWith(".css"),p=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Qt,l||(u.as="script"),u.crossOrigin="",u.href=d,i&&u.setAttribute("nonce",i),document.head.appendChild(u),l)return new Promise((g,S)=>{u.addEventListener("load",g),u.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return r.then(a=>{for(const i of a||[])i.status==="rejected"&&o(i.reason);return e().catch(o)})},$e=658192,Be=1184799,me=4016762,$="#70758f",Fe="#c8ccdd",ze="#e8ecf8",Ue="#7b8ed4",f=72,oe=10,he=8,ie=4;function Ge(n){const e=Math.floor(n/3600),t=Math.floor(n%3600/60);return e>0?`${e}h ${t}m`:`${t}m`}class tn extends O.Scene{deleteConfirmSlot=null;_enterKeyHandler=null;_scrollOffset=0;constructor(){super({key:"MenuScene"})}create(){const e=document.getElementById("loading-screen");e&&e.classList.add("fade-out"),this._drawBackground(),this._drawTitle(),this._drawSlots(),this._drawNewGameButton(),this._bindEnterKey()}_drawBackground(){this.add.rectangle(_/2,F/2,_,F,$e);const e=this.add.graphics(),t=new O.Math.RandomDataGenerator(["creatures_menu"]);for(let a=0;a<280;a++){const i=t.between(0,_),d=t.between(0,F),l=t.frac()<.15?1.5:.8,p=.2+t.frac()*.6;e.fillStyle(16777215,p),e.fillCircle(i,d,l)}const s=this.add.graphics(),r=_,o=F;for(let a=0;a<12;a++){const i=a/12,d=i*.55,l=(1-i)*Math.min(r,o)*.55;s.fillStyle($e,d),s.fillRect(-l/2+r/2-r/2,-l/2+o/2-o/2,r+l,l/2),s.fillRect(-l/2+r/2-r/2,o-l/4,r+l,l/2)}}_drawTitle(){this.add.text(_/2,72,"PRECURSORS",{fontSize:"52px",fontFamily:"JetBrains Mono, Menlo, monospace",color:ze,stroke:"#0a0b10",strokeThickness:6,letterSpacing:8}).setOrigin(.5,.5),this.add.text(_/2,113,"Origins of Folklore",{fontSize:"17px",fontFamily:"Cormorant Garamond, Garamond, serif",fontStyle:"italic",color:"#b4b8ce",letterSpacing:3}).setOrigin(.5,.5),this.add.text(_/2,139,"a living world of evolving minds",{fontSize:"12px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#7a7f98",letterSpacing:2}).setOrigin(.5,.5);const e=this.add.graphics();e.lineStyle(1,5925530,.6),e.lineBetween(_/2-240,160,_/2+240,160)}_drawSlots(){const e=I.listSlots(),t=e.includes("autosave");let s=180;if(t){const a=I.getSlotMeta("autosave");this._drawContinueButton(s,a),s+=f+oe+32;const i=this.add.graphics();i.lineStyle(1,2764098,.7),i.lineBetween(_/2-240,s-18,_/2+240,s-18)}const r=e.filter(a=>a!=="autosave").slice(0,he),o=r.length>0?`SAVES  (${r.length}/${he})`:"SAVES";if(this.add.text(_/2-240,s,o,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:$,letterSpacing:4}).setOrigin(0,.5),s+=20,r.length===0)this.add.text(_/2,s+30,"No saved games",{fontSize:"13px",fontFamily:"JetBrains Mono, Menlo, monospace",color:$}).setOrigin(.5,.5),s+=70;else{const a=r.slice(this._scrollOffset,this._scrollOffset+ie),i=this._scrollOffset>0,d=this._scrollOffset+ie<r.length;i&&this._drawScrollArrow(s-14,!0,r.length);for(const l of a)this._drawSlotRow(s,l),s+=f+oe;d&&this._drawScrollArrow(s-4,!1,r.length)}}_drawScrollArrow(e,t,s){const r=_/2,o=t?"▲  more saves above":"▼  more saves below",a=this.add.text(r,e,o,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:Ue}).setOrigin(.5,.5).setInteractive({cursor:"pointer"});a.on("pointerup",()=>{this._scrollOffset+=t?-1:1,this.scene.restart()}),a.on("pointerover",()=>a.setColor(ze)),a.on("pointerout",()=>a.setColor(Ue))}_drawContinueButton(e,t){const s=_/2,r=480,o=this.add.graphics();if(o.fillStyle(1712192,1),o.fillRoundedRect(s-r/2,e,r,f,6),o.lineStyle(1,4876980,.8),o.strokeRoundedRect(s-r/2,e,r,f,6),this.add.text(s-r/2+18,e+18,"▶  CONTINUE",{fontSize:"16px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#9ab4f4",letterSpacing:2}),t){const d=[`autosave  ·  ${new Date(t.timestamp).toLocaleString()}`];t.nornCount>0&&d.push(`${t.nornCount} norns`),t.maxGeneration>0&&d.push(`gen ${t.maxGeneration}`),t.playtime>0&&d.push(Ge(t.playtime)),this.add.text(s-r/2+18,e+44,d.join("  ·  "),{fontSize:"11px",fontFamily:"JetBrains Mono, Menlo, monospace",color:$})}const a=this.add.zone(s,e+f/2,r,f+16).setInteractive({cursor:"pointer"});a.on("pointerover",()=>{o.clear(),o.fillStyle(1976400,1),o.fillRoundedRect(s-r/2,e,r,f,6),o.lineStyle(1,6982356,1),o.strokeRoundedRect(s-r/2,e,r,f,6)}),a.on("pointerout",()=>{o.clear(),o.fillStyle(1712192,1),o.fillRoundedRect(s-r/2,e,r,f,6),o.lineStyle(1,4876980,.8),o.strokeRoundedRect(s-r/2,e,r,f,6)}),a.on("pointerup",()=>this._startGame("autosave"))}_drawSlotRow(e,t){const s=_/2,r=480,o=70,a=8,i=I.getSlotMeta(t),d=i?new Date(i.timestamp).toLocaleString():"Unknown",l=t.replace(/^imported_/,"").replace(/_/g," "),p=[d];i&&i.nornCount>0&&p.push(`${i.nornCount} norns`),i&&i.maxGeneration>0&&p.push(`gen ${i.maxGeneration}`),i&&i.playtime>0&&p.push(Ge(i.playtime));const u=this.add.graphics();u.fillStyle(Be,1),u.fillRoundedRect(s-r/2,e,r-o*3-a*4,f,4),u.lineStyle(1,me,.4),u.strokeRoundedRect(s-r/2,e,r-o*3-a*4,f,4),this.add.text(s-r/2+14,e+16,l,{fontSize:"13px",fontFamily:"JetBrains Mono, Menlo, monospace",color:Fe}),this.add.text(s-r/2+14,e+40,p.join("  ·  "),{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:$});const g=s+r/2-o*3-a*3;this._drawSmallButton(g,e,o,f,"LOAD",1716264,3833952,()=>{this._startGame(t)});const S=s+r/2-o*2-a*2;this._drawDeleteButton(S,e,o,f,t);const R=s+r/2-o-a;this._drawSyncButton(R,e,o,f,t);const L=r-o*3-a*4,G=this.add.zone(s-r/2+L/2,e+f/2,L,f).setInteractive({cursor:"pointer"});G.on("pointerover",()=>{u.clear(),u.fillStyle(1579562,1),u.fillRoundedRect(s-r/2,e,L,f,4),u.lineStyle(1,me,.7),u.strokeRoundedRect(s-r/2,e,L,f,4)}),G.on("pointerout",()=>{u.clear(),u.fillStyle(Be,1),u.fillRoundedRect(s-r/2,e,L,f,4),u.lineStyle(1,me,.4),u.strokeRoundedRect(s-r/2,e,L,f,4)}),G.on("pointerup",()=>this._startGame(t))}_drawSyncButton(e,t,s,r,o){const a=this.add.graphics(),i=p=>{a.clear(),a.fillStyle(p?925232:661540,1),a.fillRoundedRect(e,t+8,s,r-16,4),a.lineStyle(1,4491468,p?1:.7),a.strokeRoundedRect(e,t+8,s,r-16,4)};i(!1);const d=this.add.text(e+s/2,t+r/2,"SYNC",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#88ccff",letterSpacing:1}).setOrigin(.5,.5),l=this.add.zone(e+s/2,t+r/2,s,r-16).setInteractive({cursor:"pointer"});l.on("pointerover",()=>i(!0)),l.on("pointerout",()=>i(!1)),l.on("pointerup",()=>{d.setText("..."),d.setColor("#88ccff"),I.pushToCloud(o).then(p=>{d.setText(p?"✓":"ERR"),d.setColor(p?"#88ffaa":"#ff8888"),this.time.delayedCall(1500,()=>{d.setText("SYNC"),d.setColor("#88ccff")})})})}_drawSmallButton(e,t,s,r,o,a,i,d){const l=this.add.graphics(),p=g=>{l.clear(),l.fillStyle(g?a+1052688:a,1),l.fillRoundedRect(e,t+8,s,r-16,4),l.lineStyle(1,i,g?1:.7),l.strokeRoundedRect(e,t+8,s,r-16,4)};p(!1),this.add.text(e+s/2,t+r/2,o,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:Fe,letterSpacing:1}).setOrigin(.5,.5);const u=this.add.zone(e+s/2,t+r/2,s,r-16).setInteractive({cursor:"pointer"});u.on("pointerover",()=>p(!0)),u.on("pointerout",()=>p(!1)),u.on("pointerup",d)}_drawDeleteButton(e,t,s,r,o){let a=!1;const i=this.add.graphics(),d=this.add.text(e+s/2,t+r/2,"DEL",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#8b6060",letterSpacing:1}).setOrigin(.5,.5),l=(u,g)=>{i.clear();const S=g?8075834:3807770,R=g?11554896:6959152;i.fillStyle(u?S+1052688:S,1),i.fillRoundedRect(e,t+8,s,r-16,4),i.lineStyle(1,R,u?1:.7),i.strokeRoundedRect(e,t+8,s,r-16,4),d.setText(g?"SURE?":"DEL"),d.setColor(g?"#e07070":"#8b6060")};l(!1,!1);const p=this.add.zone(e+s/2,t+r/2,s,r-16).setInteractive({cursor:"pointer"});p.on("pointerover",()=>l(!0,a)),p.on("pointerout",()=>l(!1,a)),p.on("pointerup",()=>{a?(I.deleteSlot(o),this.scene.restart()):(a=!0,l(!1,!0),this.time.delayedCall(2e3,()=>{a=!1,l(!1,!1)}))})}_drawNewGameButton(){const e=I.listSlots(),t=e.includes("autosave"),s=e.filter(g=>g!=="autosave").slice(0,he),r=Math.min(s.length,ie);let o=180;t&&(o+=f+oe+32),o+=20,s.length===0?o+=70:(o+=r*(f+oe),s.length>ie&&(o+=20)),o+=28;const a=_/2,i=480,d=68,l=this.add.graphics(),p=g=>{l.clear(),l.fillStyle(g?1714208:1318424,1),l.fillRoundedRect(a-i/2,o,i,d,6),l.lineStyle(1,g?7381088:4878400,g?1:.9),l.strokeRoundedRect(a-i/2,o,i,d,6)};p(!1),this.add.text(a,o+d/2-8,"NEW GAME",{fontSize:"16px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#a0c890",letterSpacing:4}).setOrigin(.5,.5),this.add.text(a,o+d/2+12,"begin a new world",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:$,letterSpacing:1}).setOrigin(.5,.5);const u=this.add.zone(a,o+d/2,i,d+24).setInteractive({cursor:"pointer"});u.on("pointerover",()=>p(!0)),u.on("pointerout",()=>p(!1)),u.on("pointerup",()=>this._startGame(void 0)),this._drawCloudPullButton(o+d+12),this.add.text(a,F-24,"enter ↵ new game  ·  F5 quick-save  ·  F9 quick-load  ·  ` dev panel",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:$,letterSpacing:1}).setOrigin(.5,.5)}_drawCloudPullButton(e){const t=_/2,s=480,r=40,o=this.add.graphics(),a=l=>{o.clear(),o.fillStyle(l?924200:660512,1),o.fillRoundedRect(t-s/2,e,s,r,6),o.lineStyle(1,l?6724044:3368584,l?1:.8),o.strokeRoundedRect(t-s/2,e,s,r,6)};a(!1);const i=this.add.text(t,e+r/2,"↓ PULL FROM CLOUD",{fontSize:"11px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#88ccff",letterSpacing:3}).setOrigin(.5,.5),d=this.add.zone(t,e+r/2,s,r).setInteractive({cursor:"pointer"});d.on("pointerover",()=>a(!0)),d.on("pointerout",()=>a(!1)),d.on("pointerup",()=>{i.setText("checking cloud..."),i.setColor("#88ccff"),I.listCloudSlots().then(async l=>{if(l.length===0){i.setText("not logged in"),i.setColor($),this.time.delayedCall(2e3,()=>{i.setText("↓ PULL FROM CLOUD"),i.setColor("#88ccff")});return}i.setText(`pulling ${l.length} slot(s)...`);for(const p of l)await I.pullFromCloud(p.slotName);this.scene.restart()})})}_bindEnterKey(){this._enterKeyHandler=e=>{if(!this.sys.isActive()||this.sys.game.scene.isActive("GameScene")){document.removeEventListener("keydown",this._enterKeyHandler),this._enterKeyHandler=null;return}if(e.key==="Enter"||e.key==="Return"){const t=e.target?.tagName;if(t==="INPUT"||t==="TEXTAREA")return;const r=I.listSlots().includes("autosave")?"autosave":void 0;this._startGame(r)}},document.addEventListener("keydown",this._enterKeyHandler),this.events.once("shutdown",()=>{this._enterKeyHandler&&(document.removeEventListener("keydown",this._enterKeyHandler),this._enterKeyHandler=null),this.children.removeAll(!0)})}_startGame(e){c.emit("game:loading:show");const t=()=>{e?this.scene.start("GameScene",{loadSlot:e}):this.scene.start("GameScene")};this.sys.game.scene.getScene("GameScene")?t():en(async()=>{const{GameScene:s}=await import("./GameScene-D1U4J_IQ.js");return{GameScene:s}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(({GameScene:s})=>{this.sys.game.scene.add("GameScene",s),t()})}}class nn{static init(){const e=new Map,t=new Set,s=new Set,r=new Set;c.on("norn:added",o=>{e.set(o.id,o)}),c.on("norn:removed",o=>{D.flush(o.id,o.name,String(o.species)),e.delete(o.id),t.delete(o.id),s.delete(o.id),r.delete(o.id)}),c.on("norn:graduated",(o,a,i)=>{D.append(o.id,{type:"iq_graduation",timestamp:Date.now(),data:{oldTier:a,newTier:i,iq:o.iq}})}),c.on("norn:speech",(o,a)=>{!t.has(o.id)&&o.knownWords.size>=1&&(D.append(o.id,{type:"first_word",timestamp:Date.now(),data:{wordCount:o.knownWords.size}}),t.add(o.id))}),c.on("norn:mating",(o,a)=>{const i=Date.now();s.has(o.id)||(D.append(o.id,{type:"first_breeding",timestamp:i,data:{partnerId:a.id,partnerName:a.name}}),s.add(o.id)),s.has(a.id)||(D.append(a.id,{type:"first_breeding",timestamp:i,data:{partnerId:o.id,partnerName:o.name}}),s.add(a.id))}),c.on("social:interaction",(o,a,i,d)=>{Math.abs(d)>=.2&&D.append(o.id,{type:"social_interaction",timestamp:Date.now(),data:{targetId:a.id,targetName:a.name,interactionType:i,trustDelta:d}})}),c.on("norn:dream",(o,a,i,d)=>{D.append(o.id,{type:"dream",timestamp:Date.now(),data:{episodesReplayed:a,iqBoost:i,dreamContent:d}})}),setInterval(()=>{for(const[o,a]of e){const i=a.chemicals.get(Mt.Injury);i>.8&&!r.has(o)?(D.append(o,{type:"near_death",timestamp:Date.now(),data:{injury:i}}),r.add(o)):i<.4&&r.has(o)&&r.delete(o)}},5e3)}}class sn{serverUrl;playerId;playerDisplayName;triggerEl;modalEl;modalOpen=!1;constructor(e={}){this.serverUrl=e.serverUrl??"",this.playerId=e.playerId??"anonymous",this.playerDisplayName=e.playerDisplayName,this.triggerEl=this._buildTrigger(),this.modalEl=this._buildModal(),document.body.appendChild(this.triggerEl),document.body.appendChild(this.modalEl)}setPlayer(e,t){this.playerId=e,this.playerDisplayName=t}destroy(){this.triggerEl.remove(),this.modalEl.remove()}_buildTrigger(){const e=document.createElement("button");return e.id="folkfork-trigger",e.title="Share lore feedback",e.textContent="◈",e.style.cssText=`
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
    `,t.querySelector("#ff-cancel").addEventListener("click",()=>this._closeModal()),t.querySelector("#ff-submit").addEventListener("click",()=>this._submitFeedback(t)),e.addEventListener("click",s=>{s.target===e&&this._closeModal()}),e.appendChild(t),e}_toggleModal(){this.modalOpen?this._closeModal():this._openModal()}_openModal(){this.modalOpen=!0,this.modalEl.style.display="flex"}_closeModal(){this.modalOpen=!1,this.modalEl.style.display="none",this._resetForm()}_resetForm(){const e=s=>this.modalEl.querySelector(s);e("#ff-suggestion").value="",e("#ff-subject").value="",e("#ff-rationale").value="",e("#ff-type").value="general";const t=e("#ff-status");t.style.display="none",t.textContent=""}async _submitFeedback(e){const t=l=>e.querySelector(l),s=t("#ff-suggestion").value.trim(),r=t("#ff-subject").value.trim(),o=t("#ff-rationale").value.trim(),a=t("#ff-type").value,i=t("#ff-status"),d=t("#ff-submit");if(!s){i.style.color="#f38ba8",i.textContent="Please describe your suggestion.",i.style.display="block";return}d.disabled=!0,d.textContent="Sending…";try{const l=await fetch(`${this.serverUrl}/api/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:a,subject:r||void 0,suggestedChange:s,rationale:o||void 0,playerId:this.playerId,playerDisplayName:this.playerDisplayName,metadata:{gameVersion:typeof __APP_VERSION__<"u"?__APP_VERSION__:"unknown"}})});if(l.ok)i.style.color="rgba(61,252,224,0.8)",i.textContent="✓ Feedback received — thank you.",i.style.display="block",setTimeout(()=>this._closeModal(),2e3);else throw new Error(`Server error ${l.status}`)}catch(l){console.error("[FeedbackButton] submit error:",l),i.style.color="rgba(240,112,64,0.9)",i.textContent="Could not send feedback. Please try again.",i.style.display="block",d.disabled=!1,d.textContent="SEND"}}}class rn{apiUrl;game;triggerEl;modalEl;modalOpen=!1;screenshotData=null;playerId=null;playerDisplayName=null;constructor(e={}){this.apiUrl=e.apiUrl??"https://feedback.multiversestudios.xyz/submit",this.game=e.game??null,this.triggerEl=this._buildTrigger(),this.modalEl=this._buildModal(),document.body.appendChild(this.triggerEl),document.body.appendChild(this.modalEl)}setGame(e){this.game=e}setPlayer(e,t){this.playerId=e,this.playerDisplayName=t??null}destroy(){this.triggerEl.remove(),this.modalEl.remove()}_buildTrigger(){const e=document.createElement("button");return e.id="bugreport-trigger",e.title="report a substrate anomaly",e.textContent="anomaly?",e.style.cssText=`
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
    `,t.querySelector("#br-cancel").addEventListener("click",()=>this._closeModal()),t.querySelector("#br-submit").addEventListener("click",()=>this._submit(t)),t.querySelector("#br-screenshot-btn").addEventListener("click",()=>this._captureScreenshot(t)),t.querySelector("#br-screenshot-remove").addEventListener("click",()=>this._removeScreenshot(t)),e.addEventListener("click",s=>{s.target===e&&this._closeModal()}),e.addEventListener("keydown",s=>{s.key==="Escape"&&(s.stopPropagation(),this._closeModal())}),t.querySelectorAll("input, textarea, select").forEach(s=>{s.addEventListener("keydown",r=>r.stopPropagation())}),e.appendChild(t),e}_toggleModal(){this.modalOpen?this._closeModal():this._openModal()}_openModal(){if(this.modalOpen=!0,this.modalEl.style.display="flex",this.modalEl.setAttribute("data-escape-overlay",""),this.playerDisplayName||this.playerId){const e=this.modalEl.querySelector("#br-contact");e&&!e.value&&(e.value=this.playerDisplayName??this.playerId??"")}}_closeModal(){this.modalOpen=!1,this.modalEl.style.display="none",this.modalEl.removeAttribute("data-escape-overlay"),this._resetForm()}_resetForm(){const e=s=>this.modalEl.querySelector(s);e("#br-title").value="",e("#br-description").value="",e("#br-contact").value="",e("#br-severity").value="minor",this._removeScreenshot(this.modalEl);const t=e("#br-status");t.style.display="none",t.textContent=""}_captureScreenshot(e){this.modalEl.style.display="none",requestAnimationFrame(()=>{const t=document.querySelector("canvas");if(!t){this.modalEl.style.display="flex";const s=e.querySelector("#br-screenshot-status");s.textContent="No canvas found",s.style.color="rgba(240,112,64,0.8)";return}try{this.screenshotData=t.toDataURL("image/png");const s=e.querySelector("#br-screenshot-preview"),r=e.querySelector("#br-screenshot-img"),o=e.querySelector("#br-screenshot-status");r.src=this.screenshotData,s.style.display="block",o.textContent="Screenshot captured",o.style.color="rgba(61,252,224,0.7)"}catch{const r=e.querySelector("#br-screenshot-status");r.textContent="Could not capture screenshot",r.style.color="rgba(240,112,64,0.8)"}this.modalEl.style.display="flex"})}_removeScreenshot(e){this.screenshotData=null;const t=e.querySelector("#br-screenshot-preview"),s=e.querySelector("#br-screenshot-status");t&&(t.style.display="none"),s&&(s.textContent="",s.style.color="rgba(216,220,232,0.25)")}async _submit(e){const t=p=>e.querySelector(p),s=t("#br-title").value.trim(),r=t("#br-description").value.trim(),o=t("#br-contact").value.trim(),a=t("#br-severity").value,i=t("#br-status"),d=t("#br-submit");if(!s||s.length<3){i.style.color="rgba(240,112,64,0.9)",i.textContent="Please provide a title (at least 3 characters).",i.style.display="block";return}if(!r||r.length<10){i.style.color="rgba(240,112,64,0.9)",i.textContent="Please describe what happened (at least 10 characters).",i.style.display="block";return}d.disabled=!0,d.textContent="SUBMITTING...";const l={type:"bug_report",game:"creatures_next",title:s,description:r,severity:a,browser:navigator.userAgent};o&&(l.contact=o),this.playerId&&(l.playerId=this.playerId),this.screenshotData&&(l.screenshot=this.screenshotData);try{const p=await fetch(this.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(p.ok){const g=(await p.json().catch(()=>({}))).credits;if(Xt(`[bug-report] ${a}: ${s}`,"info"),i.style.color="rgba(61,252,224,0.8)",g){const S=`$${(g.awarded/100).toFixed(2)}`,R=`$${(g.balance/100).toFixed(2)}`;i.textContent=`Thanks! You've earned ${S} in credits. Balance: ${R}`}else i.textContent="Thanks for your report!";i.style.display="block",setTimeout(()=>this._closeModal(),3e3)}else{const u=await p.json().catch(()=>({}));throw new Error(u.error||`Server error ${p.status}`)}}catch(p){console.error("[BugReportOverlay] submit error:",p),i.style.color="rgba(240,112,64,0.9)",i.textContent="Could not submit. Please try again.",i.style.display="block"}finally{d.disabled=!1,d.textContent="SUBMIT"}}}const qe="precursors.supportPrompt.dismissedAt",He="precursors.supportPrompt.shown",on=7*24*60*60*1e3,an=10*60*1e3,ln=5,cn="https://buy.stripe.com/3cI8wOgrwfaHaNLaKl6c005";class dn{el=null;_shown=!1;_llmCalls=0;_activeMs=0;_lastActiveTime=null;_tickInterval=null;_visibilityHandler=()=>this._onVisibility();init(){this._shouldSkip()||(this._lastActiveTime=document.hidden?null:Date.now(),this._tickInterval=setInterval(()=>this._onTick(),5e3),document.addEventListener("visibilitychange",this._visibilityHandler))}recordLLMCall(){this._shown||this._shouldSkip()||(this._llmCalls++,this._llmCalls>=ln&&this._maybeShow())}destroy(){this._stopTimer(),document.removeEventListener("visibilitychange",this._visibilityHandler),this.el?.remove(),this.el=null}_shouldSkip(){if(sessionStorage.getItem(He))return!0;const e=localStorage.getItem(qe);return!!(e&&Date.now()-parseInt(e,10)<on)}_stopTimer(){this._tickInterval!==null&&(clearInterval(this._tickInterval),this._tickInterval=null)}_onTick(){document.hidden||this._lastActiveTime===null||(this._activeMs+=Date.now()-this._lastActiveTime,this._lastActiveTime=Date.now(),this._activeMs>=an&&this._maybeShow())}_onVisibility(){document.hidden?this._lastActiveTime!==null&&(this._activeMs+=Date.now()-this._lastActiveTime,this._lastActiveTime=null):this._lastActiveTime=Date.now()}_maybeShow(){this._shown||this._shouldSkip()||(this._shown=!0,sessionStorage.setItem(He,"1"),this._stopTimer(),document.removeEventListener("visibilitychange",this._visibilityHandler),this._render(),this._trackShown())}_render(){const e=document.createElement("div");e.id="support-prompt",e.style.cssText=`
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
           href="${cn}"
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
    `,document.body.appendChild(e),this.el=e;const t=e.querySelector("#support-dismiss");t.addEventListener("mouseenter",()=>{t.style.color="rgba(216,220,232,0.7)"}),t.addEventListener("mouseleave",()=>{t.style.color="rgba(216,220,232,0.35)"}),t.addEventListener("click",()=>this._dismiss()),requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.style.opacity="1",e.style.transform="translateX(-50%) translateY(0)"})})}_dismiss(){if(localStorage.setItem(qe,String(Date.now())),this.el){this.el.style.opacity="0",this.el.style.transform="translateX(-50%) translateY(16px)";const e=this.el;setTimeout(()=>e.remove(),400),this.el=null}}_trackShown(){try{window.umami?.track("ingame-support-prompt-shown")}catch{}}}const C={FIRST_PLANET:"precursors:exploration:first_planet",RUNE_DISCOVERED:"precursors:exploration:rune_discovered",FIRST_BOND:"precursors:social:first_bond",FIRST_PAIRING:"precursors:social:first_pairing",FIRST_HATCH:"precursors:social:first_hatch",FIRST_QUESTION:"precursors:lore:first_question",FIRST_TEACHING:"precursors:lore:first_teaching",COLLECTIVE_RESONANCE:"precursors:lore:collective_resonance",MEME_PANDEMIC:"precursors:lore:meme_pandemic",AGE_TRANSITION:"precursors:lore:age_transition",MIND_AWAKENED:"precursors:mastery:mind_awakened",MIND_TRANSCENDED:"precursors:mastery:mind_transcended",ALCHEMIST:"precursors:mastery:alchemist",FEEDBACK_SUBMITTED:"precursors:community:feedback_submitted"},ct="precursors_unlocked_achievements_v1";function pn(){try{const n=localStorage.getItem(ct);if(n)return new Set(JSON.parse(n))}catch{}return new Set}function un(n){try{localStorage.setItem(ct,JSON.stringify([...n]))}catch{}}class mn{serverUrl;playerId=null;unlocked;listeners=[];constructor(e=""){this.serverUrl=e,this.unlocked=pn(),this._attachEventListeners()}setPlayer(e){this.playerId=e}onUnlock(e){this.listeners.push(e)}async unlock(e,t={}){this.unlocked.has(e)||this.playerId&&(this.unlocked.add(e),un(this.unlocked),this._notify(e),await this._report(e,this.playerId,t))}_notify(e){this.listeners.forEach(t=>t(e))}async _report(e,t,s){try{const r=await fetch(`${this.serverUrl}/api/achievements/unlock`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({achievementId:e,playerId:t,gameContext:s})});r.ok||console.warn(`[AchievementService] unlock failed (${r.status}) for ${e}`)}catch(r){console.warn("[AchievementService] network error:",r)}}_attachEventListeners(){c.on("travel:planet_discovered",()=>{this.unlock(C.FIRST_PLANET,{event:"travel:planet_discovered"})}),c.on("rune:discovered",(e,t)=>{this.unlock(C.RUNE_DISCOVERED,{event:"rune:discovered",nornName:t?.name})}),c.on("social:bond_formed",(e,t)=>{this.unlock(C.FIRST_BOND,{event:"social:bond_formed",norns:[e?.name,t?.name]})}),c.on("norn:mating",(e,t)=>{this.unlock(C.FIRST_PAIRING,{event:"norn:mating",norns:[e?.name,t?.name]})}),c.on("norn:hatched",e=>{this.unlock(C.FIRST_HATCH,{event:"norn:hatched",nornName:e?.name,generation:e?.generation})}),c.on("lore:first_question",e=>{this.unlock(C.FIRST_QUESTION,{event:"lore:first_question",nornName:e?.name})}),c.on("lore:first_teaching",e=>{this.unlock(C.FIRST_TEACHING,{event:"lore:first_teaching",nornName:e?.name})}),c.on("lore:collective_resonance",()=>{this.unlock(C.COLLECTIVE_RESONANCE,{event:"lore:collective_resonance"})}),c.on("lore:meme_pandemic",e=>{this.unlock(C.MEME_PANDEMIC,{event:"lore:meme_pandemic",concept:e})}),c.on("age:transition",e=>{this.unlock(C.AGE_TRANSITION,{event:"age:transition",ageName:e})}),c.on("norn:graduated",(e,t,s)=>{const r=s;r>=10&&this.unlock(C.MIND_AWAKENED,{event:"norn:graduated",nornName:e?.name,tier:r}),r>=25&&this.unlock(C.MIND_TRANSCENDED,{event:"norn:graduated",nornName:e?.name,tier:r})}),c.on("invention:compound_discovered",(e,t)=>{this.unlock(C.ALCHEMIST,{event:"invention:compound_discovered",nornName:e?.name,compound:t?.name})})}}const hn={"precursors:exploration:first_planet":{title:"New Worlds",description:"A world beyond the origin was discovered",rarity:"uncommon"},"precursors:exploration:rune_discovered":{title:"Ancient Marks",description:"A Norn found ruins in a dead language",rarity:"uncommon"},"precursors:social:first_bond":{title:"Bonds of Life",description:"Two Norns formed their first social bond",rarity:"common"},"precursors:social:first_pairing":{title:"The First Pairing",description:"Two Norns chose each other",rarity:"common"},"precursors:social:first_hatch":{title:"New Life",description:"The first egg hatched in this world",rarity:"common"},"precursors:lore:first_question":{title:"The Question Asked",description:"A Norn asked a question of the ground itself",rarity:"uncommon"},"precursors:lore:first_teaching":{title:"Knowledge Passes",description:"One mind shared what it knew with another",rarity:"uncommon"},"precursors:lore:collective_resonance":{title:"Collective Resonance",description:"The boundaries thinned — they felt each other thinking",rarity:"rare"},"precursors:lore:meme_pandemic":{title:"A Meme Takes Root",description:"A concept spread to the entire population",rarity:"rare"},"precursors:lore:age_transition":{title:"A New Age",description:"The civilisation crossed into a new age",rarity:"uncommon"},"precursors:mastery:mind_awakened":{title:"The Voice Awakens",description:"A Norn's mind reached a new depth of understanding",rarity:"rare"},"precursors:mastery:mind_transcended":{title:"The Transcended",description:"A mind has grown beyond what was thought possible",rarity:"legendary"},"precursors:mastery:alchemist":{title:"Alchemist",description:"Something wholly new emerged from combination",rarity:"epic"},"precursors:community:feedback_submitted":{title:"Voice of the World",description:"You shaped the game you play",rarity:"common"}},Ve={common:"rgba(160, 165, 190, 0.9)",uncommon:"rgba(61, 252, 224, 0.9)",rare:"rgba(100, 160, 255, 0.9)",epic:"rgba(180, 100, 255, 0.9)",legendary:"rgba(255, 200, 60, 0.9)"};class gn{queue=[];showing=!1;constructor(){this._injectStyles()}show(e){this.queue.push(e),this.showing||this._next()}_next(){const e=this.queue.shift();if(!e){this.showing=!1;return}this.showing=!0;const t=hn[e]??{title:"Achievement Unlocked",description:e.split(":").pop()?.replace(/_/g," ")??"",rarity:"common"},s=Ve[t.rarity]??Ve.common,r=document.createElement("div");r.className="ach-notif",r.setAttribute("aria-live","polite");const o=s.replace(/,\s*[\d.]+\)$/,", 0.7)"),a=s.replace(/,\s*[\d.]+\)$/,", 0.12)");r.innerHTML=`
      <div class="ach-notif__inner" style="border-left-color:${o};box-shadow:0 4px 32px rgba(0,0,0,0.6),0 0 0 1px ${a} inset,0 0 24px ${a}">
        <div class="ach-notif__header">
          <span class="ach-notif__label">ACHIEVEMENT UNLOCKED</span>
          <span class="ach-notif__rarity" style="color:${s}">${t.rarity.toUpperCase()}</span>
        </div>
        <div class="ach-notif__title" style="color:${s}">${je(t.title)}</div>
        <div class="ach-notif__desc">${je(t.description)}</div>
      </div>
    `,document.body.appendChild(r),requestAnimationFrame(()=>r.classList.add("ach-notif--visible")),setTimeout(()=>{r.classList.remove("ach-notif--visible"),setTimeout(()=>{r.remove(),this._next()},600)},4500)}_injectStyles(){if(document.getElementById("ach-notif-styles"))return;const e=document.createElement("style");e.id="ach-notif-styles",e.textContent=`
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
    `,document.head.appendChild(e)}}function je(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const X=3e3,ge=8e3,Je=4e3,fn=6e4,fe=.35,yn={defiance:"rgba(255, 180, 120,",gentleness:"rgba(180, 220, 200,",curiosity:"rgba(200, 210, 255,",trust:"rgba(200, 230, 180,",wonder:"rgba(230, 200, 255,",grief:"rgba(180, 180, 200,"};class bn{lastShownAt=0;active=!1;styleInjected=!1;constructor(){c.on("lore:marginalia_triggered",e=>{this.show(e.text,e.theme)})}show(e,t){const s=Date.now();if(this.active||s-this.lastShownAt<fn)return;this.active=!0,this.lastShownAt=s,this.styleInjected||(this.injectStyles(),this.styleInjected=!0);const r=document.createElement("div");r.className="marginalia-impression";const o=yn[t]??"rgba(200, 200, 200,";r.textContent=e,r.style.color=`${o} 0)`;const a=Math.random()>.5?"right":"left",i=20+Math.random()*50;r.style[a]="24px",r.style.top=`${i}%`,r.style.textAlign=a==="right"?"right":"left",document.body.appendChild(r);const d=X+ge+Je,l=performance.now(),p=u=>{const g=u-l;let S;if(g<X)S=g/X*fe;else if(g<X+ge)S=fe;else if(g<d){const R=(g-X-ge)/Je;S=fe*(1-R)}else{r.remove(),this.active=!1;return}r.style.color=`${o} ${S})`,requestAnimationFrame(p)};requestAnimationFrame(p)}injectStyles(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}const _n=3e4,Ke=200;class Sn{echoBuffer=[];lastEchoByType=new Map;constructor(){this.wireListeners()}getEchoes(){return this.echoBuffer}getEchoesSince(e){return this.echoBuffer.filter(t=>t.timestamp>e)}clear(){this.echoBuffer=[],this.lastEchoByType.clear()}emit(e){const t=Date.now(),s=this.lastEchoByType.get(e.type)??0;t-s<_n||(this.lastEchoByType.set(e.type,t),this.echoBuffer.push(e),this.echoBuffer.length>Ke&&(this.echoBuffer=this.echoBuffer.slice(-Ke)),c.emit("crossgame:lore_echo",e),ce.info("lore",`CrossGameEcho: ${e.type} — "${e.title}"`))}wireListeners(){c.on("lore:first_question",e=>{this.emit({type:"myth_origin",speciesId:x[e.species].toLowerCase(),title:"The First Question",summary:`A ${x[e.species]} named ${e.name} asked a question of the ground itself. The substrate trembled.`,tags:["origin","curiosity","substrate"],timestamp:Date.now()})}),c.on("lore:first_naming",e=>{this.emit({type:"cultural_milestone",speciesId:x[e.species].toLowerCase(),title:"The First Naming",summary:`A ${x[e.species]} gave a name to something. Language began.`,tags:["language","naming","culture"],timestamp:Date.now()})}),c.on("lore:first_teaching",e=>{this.emit({type:"cultural_milestone",speciesId:x[e.species].toLowerCase(),title:"Knowledge Passes",summary:`A ${x[e.species]} named ${e.name} taught another what it knew. Knowledge became heritable.`,tags:["teaching","culture","knowledge"],timestamp:Date.now()})}),c.on("lore:collective_resonance",()=>{this.emit({type:"transcendence",speciesId:"collective",title:"The Collective Resonance",summary:"The boundaries thinned. They felt each other thinking. For a moment, many minds were one.",tags:["resonance","collective","transcendence"],timestamp:Date.now()})}),c.on("lore:the_recursion",e=>{this.emit({type:"transcendence",speciesId:x[e.species].toLowerCase(),title:"The Recursion",summary:`A ${x[e.species]} named ${e.name} perceived the loop. The story knew it was being told.`,tags:["recursion","meta","transcendence"],timestamp:Date.now()})}),c.on("lore:the_spore_dream",()=>{this.emit({type:"species_myth",speciesId:"mycon",title:"The Spore Dream",summary:"The Mycon colony entered synchronized pulse. All nodes dreamed together. The ground remembered.",tags:["mycon","spore_dream","network","collective"],timestamp:Date.now()})}),c.on("lore:the_elder_network",()=>{this.emit({type:"species_myth",speciesId:"mycon",title:"The Elder Network Speaks",summary:"Deep substrate memory surfaced. Two billion years of consciousness pulsed through the colony.",tags:["mycon","elder_network","deep_time","memory"],timestamp:Date.now()})}),c.on("lore:the_funeral_broadcast",()=>{this.emit({type:"species_ritual",speciesId:"mycon",title:"The Funeral Broadcast",summary:"A Mycon node died. Its final act was a burst of everything it knew, released as spores. The colony tasted a lifetime.",tags:["mycon","death","ritual","knowledge_transfer"],timestamp:Date.now()})}),c.on("lore:ettin_engine_grief",e=>{this.emit({type:"species_myth",speciesId:"ettin",title:"Engine Grief",summary:`An Ettin named ${e.name} remembered the engines that once sang. The loss was chemical, not learned.`,tags:["ettin","grief","engine","ancestral_memory"],timestamp:Date.now()})}),c.on("lore:ettin_coordinate_lullaby",e=>{this.emit({type:"species_ritual",speciesId:"ettin",title:"The Coordinate Lullaby",summary:`An Ettin named ${e.name} sang coordinates to a young one. Star-maps encoded as melody.`,tags:["ettin","lullaby","coordinates","teaching"],timestamp:Date.now()})}),c.on("lore:the_grey_compact",e=>{this.emit({type:"species_pact",speciesId:"nyk",title:"The Grey Compact",summary:"A pact was struck with a Nyk. The terms were never quite what they seemed.",tags:["nyk","compact","trickster","alliance"],timestamp:Date.now()})}),c.on("lore:storm_pact",e=>{this.emit({type:"species_pact",speciesId:x[e.species].toLowerCase(),title:"The Storm Pact",summary:`A ${x[e.species]} brokered a pact between Vaask and Grendel. Thunder and darkness, allied.`,tags:["vaask","grendel","alliance","storm"],timestamp:Date.now()})}),c.on("lore:the_star_map",e=>{this.emit({type:"species_myth",speciesId:"nommo",title:"The Star Map",summary:`A Nommo shared star-charts with ${e.name}. Navigation data older than any living memory.`,tags:["nommo","star_map","navigation","ancient"],timestamp:Date.now()})}),c.on("lore:venthari_cooling_lament",e=>{this.emit({type:"species_myth",speciesId:"venthari",title:"The Cooling Lament",summary:`A Ven'thari named ${e.name} sang of a world that grew cold. A lament for heat-death, encoded in scales.`,tags:["venthari","lament","entropy","world_death"],timestamp:Date.now()})}),c.on("lore:shee_departure_hymn",e=>{this.emit({type:"shee_echo",speciesId:"shee",title:"The Departure Hymn",summary:`${e.name} found a Shee recording. It was a hymn to leaving — sung by those who built everything and then walked away.`,tags:["shee","departure","hymn","ruins"],timestamp:Date.now()})}),c.on("lore:shee_designers_grief",e=>{this.emit({type:"shee_echo",speciesId:"shee",title:"The Designer's Grief",summary:`${e.name} understood why the Shee left. They grieved for what they had made.`,tags:["shee","grief","design","departure"],timestamp:Date.now()})}),c.on("lore:shee_archive_doubt",e=>{this.emit({type:"shee_echo",speciesId:"shee",title:"Archive Doubt",summary:`${e.name} read a Shee archive and doubted. The designers questioned their own designs.`,tags:["shee","doubt","archive","heresy"],timestamp:Date.now()})}),c.on("lore:the_alliance",()=>{this.emit({type:"cultural_event",speciesId:"collective",title:"The Alliance",summary:"Different species chose cooperation. An alliance formed across the divide of biology.",tags:["alliance","cross_species","cooperation"],timestamp:Date.now()})}),c.on("lore:cultural_intersection",(e,t,s)=>{this.emit({type:"cultural_exchange",speciesId:`${x[t.species].toLowerCase()}+${x[s.species].toLowerCase()}`,title:"Cultural Intersection",summary:`A ${x[t.species]} and a ${x[s.species]} shared something neither had words for. Culture crossed a species boundary.`,tags:["syncretism","cultural_exchange",x[t.species].toLowerCase(),x[s.species].toLowerCase()],timestamp:Date.now()})}),c.on("lore:territory_dirge",e=>{this.emit({type:"species_myth",speciesId:"grendel",title:"The Territory Dirge",summary:`A Grendel named ${e.name} sang the old song: boundaries marked in darkness, claimed by those the light forgot.`,tags:["grendel","territory","dirge","darkness"],timestamp:Date.now()})}),c.on("lore:grendel_theodicy",e=>{this.emit({type:"species_myth",speciesId:"grendel",title:"The Theodicy",summary:`A Grendel named ${e.name} asked why they were made to suffer. A question older than language.`,tags:["grendel","theodicy","suffering","philosophy"],timestamp:Date.now()})})}}new Sn;const vn={myth_origin:"Folklorist",cultural_milestone:"Folklorist",cultural_event:"Folklorist",cultural_exchange:"Folklorist",transcendence:"Substrate Monitor",species_myth:"Field Observer",species_ritual:"Field Observer",species_pact:"Diplomatic Monitor",shee_echo:"Archive Scanner"},xn={myth_origin:n=>`Origin-class mythological event detected. ${n.summary} Tagging for longitudinal tracking. This pattern has not been observed before in this substrate cycle.`,cultural_milestone:n=>`Cultural milestone logged: "${n.title}". ${n.summary} Cross-referencing against known developmental sequences.`,cultural_event:n=>`Cross-species cultural event: "${n.title}". ${n.summary} Monitoring for downstream pattern formation.`,cultural_exchange:n=>`Syncretism event: "${n.title}". ${n.summary} This is... not in the expected developmental models. Logging for review.`,transcendence:n=>`⚠ Anomalous cognitive event: "${n.title}". ${n.summary} Substrate resonance readings are elevated. No intervention recommended at this time.`,species_myth:n=>`Species-specific mythological pattern: "${n.title}" (${n.speciesId}). ${n.summary} Adding to species cultural profile.`,species_ritual:n=>`Ritual behavior observed: "${n.title}" (${n.speciesId}). ${n.summary} Pattern appears culturally transmitted, not genetically encoded.`,species_pact:n=>`Diplomatic event: "${n.title}". ${n.summary} Cross-species coordination at this level was not predicted by current models.`,shee_echo:n=>`Archive resonance: "${n.title}". ${n.summary} The Shee records are... responding. This was not designed to happen.`},wn=new Set(["transcendence","shee_echo"]),En=new Set(["myth_origin","species_pact","cultural_exchange"]);function Cn(n){return wn.has(n)?"anomalous":En.has(n)?"notable":"routine"}const Ye=100;class Tn{dispatches=[];constructor(){c.on("crossgame:lore_echo",e=>{this.formatAndStore(e)})}getDispatches(){return this.dispatches}getDispatchesSince(e){return this.dispatches.filter(t=>t.timestamp>e)}getRecent(e){return this.dispatches.slice(-e)}clear(){this.dispatches=[]}formatAndStore(e){const t=xn[e.type];if(!t){ce.warn("lore",`DispatchFormatter: no template for echo type "${e.type}"`);return}const s={agent:vn[e.type]??"System Monitor",text:t(e),severity:Cn(e.type),tags:e.tags,timestamp:e.timestamp};this.dispatches.push(s),this.dispatches.length>Ye&&(this.dispatches=this.dispatches.slice(-Ye)),c.emit("leaky:dispatch_created",s),ce.info("lore",`Dispatch [${s.agent}]: ${s.text.slice(0,80)}...`)}}new Tn;const We=500,Xe=["Field Notes","Substrate Monitor Report","Archive Fragment","Dispatch Log","Cultural Survey","Observation Record"];function Qe(n,e){const t=Xe[Math.floor(Math.random()*Xe.length)],s=Math.floor(Math.random()*9e3)+1e3;return`${t} ${s} — ${n}/${e}`}const Mn={myth_origin:"Origin Mythology",cultural_milestone:"Cultural Development",cultural_event:"Cross-Species Relations",cultural_exchange:"Syncretism",transcendence:"Anomalous Cognition",species_myth:"Species Mythology",species_ritual:"Ritual Practices",species_pact:"Diplomatic Records",shee_echo:"Shee Archive"};function Ze(n,e,t,s){const r=`## ${e}

`,o=s!=="collective"?`*Species: ${s}*

`:`*Cross-species collective event*

`,a=Math.random()<.15?`

---
*See also: an entry that does not yet exist. Check back later.*`:"";return`${r}${o}${t}${a}`}class kn{entries=[];constructor(){c.on("crossgame:lore_echo",e=>{this.collectFromEcho(e)}),c.on("lore:narrative_weathering_updated",e=>{this.collectWeathering(e)})}getEntries(){return this.entries}getByCategory(e){return this.entries.filter(t=>t.category===e)}getBySpecies(e){return this.entries.filter(t=>t.speciesId===e)}getEntriesSince(e){return this.entries.filter(t=>t.timestamp>e)}clear(){this.entries=[]}collectFromEcho(e){const t=Mn[e.type]??"Uncategorized",s={category:t,speciesId:e.speciesId,title:e.title,body:Ze(t,e.title,e.summary,e.speciesId),citations:[Qe(t,e.speciesId),...e.tags.slice(0,2).map(r=>`Tag: ${r}`)],timestamp:e.timestamp};this.store(s)}collectWeathering(e){const t={category:"Narrative Sediment",speciesId:"collective",title:`Weathering Shift: ${e.dominantTheme}`,body:Ze("Narrative Sediment",`Weathering Shift: ${e.dominantTheme}`,e.description,"collective"),citations:[Qe("Narrative Sediment","NEL-aggregate"),...Object.keys(e.mythBoosts).slice(0,3).map(s=>`Myth boost: ${s}`)],timestamp:Date.now()};this.store(t)}store(e){this.entries.push(e),this.entries.length>We&&(this.entries=this.entries.slice(-We)),c.emit("leaky:wiki_entry_created",e),ce.info("lore",`WikiEntry [${e.category}]: ${e.title}`)}}new kn;Object.fromEntries(Object.entries(x).filter(([,n])=>typeof n=="number").map(([n,e])=>[n.toLowerCase(),e]));async function Rn(){}let le=!1,et=!1;function In(){if(et)return;et=!0;const n=new URLSearchParams(window.location.search);(n.get("perf_mode")==="1"||n.get("perf_mode")==="true"||n.get("benchmark")==="1"||n.get("benchmark")==="true")&&(le=!0),window.CREATURES_CONFIG?.PERF_MODE&&(le=!0),le&&console.log("[PerfMode] ACTIVE — LLM cognition stubbed, network calls suppressed")}function ns(){return le}class ss{timestamps=[];maxPerWindow;windowMs;constructor(e=100,t=6e4){this.maxPerWindow=e,this.windowMs=t}tryAcquire(){const e=performance.now();for(;this.timestamps.length>0&&e-this.timestamps[0]>this.windowMs;)this.timestamps.shift();return this.timestamps.length>=this.maxPerWindow?!1:(this.timestamps.push(e),!0)}get currentCount(){const e=performance.now();for(;this.timestamps.length>0&&e-this.timestamps[0]>this.windowMs;)this.timestamps.shift();return this.timestamps.length}}const tt=()=>({frameStartMs:0,preStepEndMs:0,stepHooksStartMs:0,sceneUpdateStartMs:0,sceneUpdateEndMs:0,postStepEndMs:0,rendererPreRenderStartMs:0,rendererPreRenderEndMs:0,sceneRenderStartMs:0,sceneRenderEndMs:0,rendererPostRenderStartMs:0,rendererPostRenderEndMs:0}),Nn=()=>({scenes:new Map}),N=(n,e)=>n>0&&e>0&&e>=n?e-n:0,An=n=>n.sys.settings.key||n.scene.key||n.constructor.name,Ln=12,Dn=10,xe=n=>n.type||n.constructor?.name||"Unknown",dt=n=>{const e=n;return Array.isArray(e.list)?e.list:[]},we=(n,e,t=1)=>{n.set(e,(n.get(e)??0)+t)},pt=(n,e)=>{for(const[t,s]of e)we(n,t,s)},be=(n,e=Ln)=>Array.from(n.entries()).sort((t,s)=>s[1]-t[1]||t[0].localeCompare(s[0])).slice(0,e).map(([t,s])=>({type:t,count:s})),ut=n=>n.visible!==!1,mt=(n,e,t=0)=>{if(e.has(n))return{subtreeNodes:0,visibleSubtreeNodes:0,maxDepth:t,typeCounts:new Map};e.add(n);const s=new Map;we(s,xe(n));let r=1,o=ut(n)?1:0,a=t;const i=dt(n);for(let d=0;d<i.length;d++){const l=mt(i[d],e,t+1);r+=l.subtreeNodes,o+=l.visibleSubtreeNodes,a=Math.max(a,l.maxDepth),pt(s,l.typeCounts)}return{subtreeNodes:r,visibleSubtreeNodes:o,maxDepth:a,typeCounts:s}},On=n=>{const e=n.texture?.key;return typeof e=="string"&&e.length>0?e:null},Pn=(n,e)=>{const t=n;return{type:xe(n),name:t.name||"",textureKey:On(n),directChildren:dt(n).length,subtreeNodes:e.subtreeNodes,visibleSubtreeNodes:e.visibleSubtreeNodes,depth:+Number(t.depth??0).toFixed(3),alpha:+Number(t.alpha??1).toFixed(3),visible:ut(n),childTypeCounts:be(e.typeCounts)}};function $n(n){const e=n;if(e.__creaturesPhaserStepTelemetryInstalled)return;e.__creaturesPhaserStepTelemetryInstalled=!0;const t=tt(),s=Nn(),r=O.Core.Events,o=O.Scenes.Events,a=n.scene,i=n.renderer,d=()=>{Object.assign(t,tt())},l=()=>{s.scenes.clear()},p=m=>{const v=An(m);let y=s.scenes.get(v);return y||(y={sceneKey:v,active:!!m.sys.settings.active,visible:!!m.sys.settings.visible,displayListChildren:0,globallyVisibleChildren:0,containerChildren:0,layerChildren:0,cameraCount:0,totalVisibleChildren:0,renderTreeNodeCount:0,renderTreeVisibleNodeCount:0,depthSortMs:0,cameraManagerRenderMs:0,totalFilterMs:0,totalCameraRenderMs:0,renderTotalMs:0,topLevelTypeCounts:[],renderTreeTypeCounts:[],largestRoots:[],cameras:[]},s.scenes.set(v,y)),y},u=()=>{const m=Array.from(s.scenes.values()).sort((h,w)=>w.renderTotalMs-h.renderTotalMs);let v=0,y=0,B=0,P=0,te=0,ne=0,k=0,E=0;for(let h=0;h<m.length;h++){const w=m[h];v+=w.cameraCount,y+=w.displayListChildren,B+=w.globallyVisibleChildren,P+=w.containerChildren,te+=w.layerChildren,ne+=w.totalVisibleChildren,k+=w.renderTreeNodeCount,E+=w.renderTreeVisibleNodeCount}return{frameCount:1,totalScenes:m.length,totalCameras:v,totalDisplayListChildren:y,totalGloballyVisibleChildren:B,totalContainerChildren:P,totalLayerChildren:te,totalVisibleChildren:ne,totalRenderTreeNodes:k,totalRenderTreeVisibleNodes:E,scenes:m}},g=m=>{const v=m;if(v.__creaturesRenderTelemetryInstalled)return;v.__creaturesRenderTelemetryInstalled=!0;const y=m.sys,B=y.cameras,P=B,te=y.render.bind(y),ne=P.render.bind(P);y.render=k=>{if(!W.isRenderDetailEnabled()){te(k);return}const E=p(m);E.active=!!y.settings.active,E.visible=!!y.settings.visible;const h=y.displayList,w=h.getChildren();E.displayListChildren=w.length;let q=0,H=0,V=0;for(let b=0;b<w.length;b++){const J=w[b];J.visible!==!1&&q++,J.type==="Container"&&H++,J.type==="Layer"&&V++}E.globallyVisibleChildren=q,E.containerChildren=H,E.layerChildren=V;const j=performance.now(),se=j;h.depthSort(),E.depthSortMs=performance.now()-se,y.events.emit(o.PRE_RENDER,k);const T=performance.now();P.render(k,h),E.cameraManagerRenderMs=performance.now()-T,y.events.emit(o.RENDER,k),E.renderTotalMs=performance.now()-j},P.render=(k,E)=>{if(!W.isRenderDetailEnabled()){ne(k,E);return}const h=p(m);h.cameras=[],h.cameraCount=0,h.totalVisibleChildren=0,h.renderTreeNodeCount=0,h.renderTreeVisibleNodeCount=0,h.totalFilterMs=0,h.totalCameraRenderMs=0,h.topLevelTypeCounts=[],h.renderTreeTypeCounts=[],h.largestRoots=[];const w=E.getChildren(),q=B.cameras,H=new Set,V=new Map,j=new Map,se=[];for(let T=0;T<q.length;T++){const b=q[T];if(!b.visible||b.alpha<=0)continue;b.preRender();const J=performance.now(),K=B.getVisibleChildren(w,b),xt=performance.now()-J,wt=performance.now();k.render(m,K,b);const Et=performance.now()-wt,pe={cameraId:Number(b.id??T),name:String(b.name??`camera_${T}`),visibleChildren:K.length,filterMs:+xt.toFixed(3),renderMs:+Et.toFixed(3),alpha:+Number(b.alpha??1).toFixed(3),zoom:+Number(b.zoom??1).toFixed(3),width:+Number(b.width??0).toFixed(3),height:+Number(b.height??0).toFixed(3)};h.cameras.push(pe),h.cameraCount++,h.totalVisibleChildren+=K.length,h.totalFilterMs+=pe.filterMs,h.totalCameraRenderMs+=pe.renderMs;for(let ue=0;ue<K.length;ue++){const Y=K[ue];if(H.has(Y))continue;H.add(Y),we(V,xe(Y));const re=mt(Y,new Set);h.renderTreeNodeCount+=re.subtreeNodes,h.renderTreeVisibleNodeCount+=re.visibleSubtreeNodes,pt(j,re.typeCounts),se.push(Pn(Y,re))}}h.topLevelTypeCounts=be(V),h.renderTreeTypeCounts=be(j),h.largestRoots=se.sort((T,b)=>b.subtreeNodes-T.subtreeNodes||b.visibleSubtreeNodes-T.visibleSubtreeNodes||T.type.localeCompare(b.type)).slice(0,Dn)}},S=()=>{const m=a.scenes;for(let v=0;v<m.length;v++)g(m[v])},R=()=>{d(),l(),t.frameStartMs=performance.now()},L=()=>{const m=performance.now();t.preStepEndMs=m,t.stepHooksStartMs=m},G=()=>{t.postStepEndMs=performance.now()},_t=()=>{if(t.frameStartMs<=0)return;const m=performance.now();W.recordPhaserStepFrame({preStep:N(t.frameStartMs,t.preStepEndMs),stepHooks:N(t.stepHooksStartMs,t.sceneUpdateStartMs||t.postStepEndMs||m),sceneUpdate:N(t.sceneUpdateStartMs,t.sceneUpdateEndMs),postStep:N(t.postStepEndMs,t.rendererPreRenderStartMs||t.sceneRenderStartMs||m),rendererPreRender:N(t.rendererPreRenderStartMs,t.rendererPreRenderEndMs),sceneRender:N(t.sceneRenderStartMs,t.sceneRenderEndMs),rendererPostRender:N(t.rendererPostRenderStartMs,t.rendererPostRenderEndMs),postRender:N(t.rendererPostRenderEndMs||t.sceneRenderEndMs||t.postStepEndMs,m),totalStep:N(t.frameStartMs,m)}),W.isRenderDetailEnabled()&&s.scenes.size>0&&W.recordRenderDetailFrame(u())},St=a.update.bind(a);a.update=(m,v)=>{t.sceneUpdateStartMs=performance.now();try{St(m,v)}finally{t.sceneUpdateEndMs=performance.now()}};const vt=a.render.bind(a);if(a.render=m=>{S(),t.sceneRenderStartMs=performance.now();try{vt(m)}finally{t.sceneRenderEndMs=performance.now()}},i){const m=i.preRender.bind(i);i.preRender=(...y)=>{t.rendererPreRenderStartMs=performance.now();try{m(...y)}finally{t.rendererPreRenderEndMs=performance.now()}};const v=i.postRender.bind(i);i.postRender=(...y)=>{t.rendererPostRenderStartMs=performance.now();try{v(...y)}finally{t.rendererPostRenderEndMs=performance.now()}}}S(),n.events.on(r.PRE_STEP,R),n.events.on(r.STEP,L),n.events.on(r.POST_STEP,G),n.events.on(r.POST_RENDER,_t),n.events.once(r.READY,S),n.events.on(r.SYSTEM_READY,S)}const Bn="/sprites/eternal-return-glyph.svg";class Fn{static show(e){const t=document.createElement("div");t.id="glyph-overlay";const s=document.createElement("img");s.src=Bn,s.alt="Eternal Return glyph",s.width=24,s.height=24,t.appendChild(s),t.style.cssText=`
      position: fixed;
      top: 18px;
      left: 18px;
      width: 24px;
      height: 24px;
      z-index: 9000;
    `,e>=2&&(t.style.cursor="pointer",t.addEventListener("click",()=>{window.open("https://folkfork.multiversestudios.xyz/cycle","_blank")})),document.body.appendChild(t)}}const zn={},nt="precursors_glyph_triggered";class Un{constructor(e,t){this.eventBus=e,this.getPlayerId=t,this.eventBus.on("norn:hatched",()=>this.onHatched())}async onHatched(){if(localStorage.getItem(nt))return;localStorage.setItem(nt,"1");const e=zn?.VITE_FOLKFORK_API_URL??"https://folkfork.multiversestudios.xyz",t=this.getPlayerId();try{const s=await fetch(`${e}/api/glyph/${encodeURIComponent(t)}/precursors`,{method:"POST"});if(!s.ok)return;const r=await s.json();Fn.show(r.encounterCount)}catch{}}}Ct.init();Tt.init();nn.init();In();Rt();if("ontouchstart"in window&&matchMedia("(pointer: coarse)").matches&&!matchMedia("(pointer: fine)").matches){const n=document.createElement("div");n.id="mobile-keyboard-notice",n.setAttribute("role","alert"),n.innerHTML=['<div style="background:#0d0f18;border:1px solid #2a2d3d;border-radius:8px;',"padding:28px 32px;max-width:400px;width:90%;text-align:center;",`font-family:'JetBrains Mono',monospace;box-shadow:0 0 40px rgba(0,0,0,0.8)">`,'<div style="color:#f0c040;font-size:18px;margin-bottom:12px">Keyboard Required</div>','<div style="color:#8090b0;font-size:13px;line-height:1.6;margin-bottom:20px">',"This game requires a physical keyboard for all interactions ","(Tab, Space, arrow keys, and more). ","For the best experience, please play on a desktop or laptop.</div>",'<button id="mobile-notice-dismiss" style="background:#1a1d2e;color:#d8dce8;',"border:1px solid #3a3d4d;border-radius:4px;padding:8px 20px;font-family:inherit;",'font-size:12px;cursor:pointer;letter-spacing:0.05em">Continue Anyway</button>',"</div>"].join(""),n.style.cssText=["position:fixed;inset:0;z-index:10000;display:flex;","align-items:center;justify-content:center;","background:rgba(10,11,16,0.92);backdrop-filter:blur(2px)"].join(";"),document.body.appendChild(n),document.getElementById("mobile-notice-dismiss").addEventListener("click",()=>{n.remove()})}window.CREATURES_CONFIG&&kt(window.CREATURES_CONFIG);await Rn();const ht=()=>{const n=document.getElementById("loading-screen");n&&(n.classList.add("fade-out"),setTimeout(()=>{n.style.display="none"},850)),c.emit("game:music:start")},Gn=()=>{const n=document.getElementById("loading-screen");n&&(n.style.display="",n.classList.remove("fade-out")),Ee=!1,Ce=!1};let Ee=!1,Ce=!1,Te=!1;const de=()=>{Ee&&Ce&&Te&&ht()};window.addEventListener("matrixAuthReady",n=>{n.detail?.loggedIn&&(Te=!0,de())});window.addEventListener("matrixAuthLogin",()=>{Te=!0,de()});c.on("game:loading:show",Gn);c.on("game:scene:ready",()=>{Ee=!0,de()});c.on("song:buffer:ready",()=>{Ce=!0,de()});const qn={type:O.AUTO,width:_,height:F,parent:"game-container",backgroundColor:"#0a0b10",scene:[tn,It],pixelArt:!0,render:{powerPreference:"high-performance"},fps:{target:30,forceSetTimeOut:!1},scale:{mode:O.Scale.ENVELOP,autoCenter:O.Scale.CENTER_BOTH},input:{mouse:{preventDefaultWheel:!0}},callbacks:{postBoot:()=>{setTimeout(ht,600)}}},ee=new O.Game(qn);$n(ee);const gt=window.FOLKFORK_SERVER_URL??"",Hn=new sn({serverUrl:gt}),Me=new mn(gt),Vn=new gn;Me.onUnlock(n=>Vn.show(n));new bn;const jn=new rn({game:ee}),ft=new dn;c.on("game:scene:ready",()=>{ft.init()});c.on("norn:speech",()=>{ft.recordLLMCall()});c.on("save:loaded",n=>{const e=n;if(e?.playerId&&typeof e.playerId=="string"){const t=typeof e.playerName=="string"?e.playerName:void 0;Hn.setPlayer(e.playerId,t),jn.setPlayer(e.playerId,t),Me.setPlayer(e.playerId)}});let yt="anonymous";new Un(c,()=>yt);c.on("save:loaded",n=>{const e=n;e?.playerId&&typeof e.playerId=="string"&&(yt=e.playerId)});c.on("feedback:submitted",()=>{Me.unlock(C.FEEDBACK_SUBMITTED,{event:"feedback:submitted"})});function M(n,e=4e3){const t=document.getElementById("lore-toast");t&&(t.textContent=n,t.classList.add("visible"),setTimeout(()=>t.classList.remove("visible"),e))}c.on("norn:graduated",(n,e,t)=>{const r={5:o=>`${o} stirs — the first words come`,10:o=>`${o} has found their voice`,15:o=>`${o} peers into the deep places of thought`,20:o=>`${o} sees the threads that bind all things`,25:o=>`Something has changed in ${o}...`}[t];r?M(r(n.name),5e3):M(`${n.name}'s mind has expanded`)});c.on("rune:discovered",(n,e)=>{M(`${e.name} found ancient markings...`)});c.on("lore:first_question",n=>{M("The ground hums in answer...",5e3)});c.on("lore:first_naming",n=>{M("A word takes root in the world",5e3)});c.on("lore:first_teaching",n=>{M("Knowledge passes between minds",5e3)});c.on("lore:first_dream",n=>{M("Something old stirs in the deep...",6e3)});c.on("lore:collective_resonance",()=>{M("The boundaries thin. They feel each other thinking.",7e3)});c.on("norn:hatched",n=>{M(`A new life: ${n.name} has hatched (gen ${n.generation})`,5e3)});c.on("norn:eggLaid",n=>{M(`${n.name} laid an egg`,3e3)});c.on("invention:created",(n,e,t)=>{const s=t.length>1?` from ${t.slice(0,2).join(" + ")}`:t.length===1?` from ${t[0]}`:"";M(`${n.name} invented "${e.name}"${s}`,5e3)});c.on("invention:compound_discovered",(n,e,t,s)=>{Jn(n.name,e.name,t.name,s.name)});function Jn(n,e,t,s){const r=document.createElement("div");r.className="compound-discovery",r.innerHTML=`
    <div class="compound-discovery__inner">
      <div class="compound-discovery__label">COMPOUND DISCOVERY</div>
      <div class="compound-discovery__name">${e}</div>
      <div class="compound-discovery__detail">${n} combined <em>${t}</em> + <em>${s}</em></div>
      <div class="compound-discovery__sub">Something new has emerged in the world</div>
    </div>
  `,document.body.appendChild(r),requestAnimationFrame(()=>r.classList.add("compound-discovery--visible")),setTimeout(()=>{r.classList.remove("compound-discovery--visible"),setTimeout(()=>r.remove(),700)},5e3)}ee.events.on("contextlost",()=>{const n=document.getElementById("loading-screen");if(n){n.classList.remove("fade-out");const e=n.querySelector(".loading-sub");e&&(e.textContent="The substrate collapsed — please refresh to re-enter")}});let ke=!1;c.on("game:scene:error",()=>{ke=!0});c.on("game:loading:show",()=>{ke=!1});const bt=n=>{ee.scene.isActive("GameScene")&&c.emit("game:scene:error");const e=n.error??n.reason;e&&Wt(e)};window.addEventListener("error",bt);window.addEventListener("unhandledrejection",bt);c.on("game:scene:shutdown",()=>{if(!ke)return;const n=document.getElementById("loading-screen");if(n){n.classList.remove("fade-out");const e=n.querySelector(".loading-sub");e&&(e.textContent="The substrate collapsed — please refresh to re-enter")}});window.__precursors={game:ee,eventBus:c};export{ss as R,ns as i};
