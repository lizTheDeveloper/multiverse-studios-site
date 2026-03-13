const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GameScene-h2SNHWuX.js","assets/vendor-phaser-CaWnzXme.js","assets/EventBus-BDki86ks.js","assets/Logger-CF89ua65.js","assets/WorldGenerator-CGnwgszR.js","assets/LifeStage-DLlDtvpU.js","assets/SpriteState-DHYVCsRv.js","assets/WaveUnlockSystem-B7WgcZtm.js","assets/LanguageSystem-Ds4Cjc4i.js","assets/World-j1EJRRSc.js","assets/PerfTelemetry-DzPt1QJS.js","assets/ChemicalSet-MsPt4dQK.js","assets/UIScene-DmhUkDEy.js","assets/SimulationScheduler-BGLRfRja.js","assets/BiochemistrySystem-Bbh8Dguq.js","assets/KeyboardControls-esFszKrb.js"])))=>i.map(i=>d[i]);
import"./LifeStage-DLlDtvpU.js";import{P as k}from"./vendor-phaser-CaWnzXme.js";import{s as P,C as Ee,A as Ce,U as _e}from"./UIScene-DmhUkDEy.js";import{G as x,a as z,S as Re,b as ke}from"./Logger-CF89ua65.js";import{e as h}from"./EventBus-BDki86ks.js";import{P as U}from"./PerfTelemetry-DzPt1QJS.js";import"./LanguageSystem-Ds4Cjc4i.js";import"./ChemicalSet-MsPt4dQK.js";const Te="modulepreload",Le=function(r){return"/play/creatures/"+r},ne={},Pe=function(e,t,o){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=i?.nonce||i?.getAttribute("nonce");n=Promise.allSettled(t.map(d=>{if(d=Le(d),d in ne)return;ne[d]=!0;const l=d.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Te,l||(u.as="script"),u.crossOrigin="",u.href=d,s&&u.setAttribute("nonce",s),document.head.appendChild(u),l)return new Promise((w,M)=>{u.addEventListener("load",w),u.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return n.then(i=>{for(const s of i||[])s.status==="rejected"&&a(s.reason);return e().catch(a)})},re=658192,se=1184799,Q=4016762,N="#70758f",ae="#c8ccdd",Ne="#e8ecf8",b=72,$=10,ie=3;class ze extends k.Scene{deleteConfirmSlot=null;_enterKeyHandler=null;constructor(){super({key:"MenuScene"})}create(){const e=document.getElementById("loading-screen");e&&e.classList.add("fade-out"),this._drawBackground(),this._drawTitle(),this._drawSlots(),this._drawNewGameButton(),this._bindEnterKey()}_drawBackground(){this.add.rectangle(x/2,z/2,x,z,re);const e=this.add.graphics(),t=new k.Math.RandomDataGenerator(["creatures_menu"]);for(let i=0;i<280;i++){const s=t.between(0,x),d=t.between(0,z),l=t.frac()<.15?1.5:.8,c=.2+t.frac()*.6;e.fillStyle(16777215,c),e.fillCircle(s,d,l)}const o=this.add.graphics(),n=x,a=z;for(let i=0;i<12;i++){const s=i/12,d=s*.55,l=(1-s)*Math.min(n,a)*.55;o.fillStyle(re,d),o.fillRect(-l/2+n/2-n/2,-l/2+a/2-a/2,n+l,l/2),o.fillRect(-l/2+n/2-n/2,a-l/4,n+l,l/2)}}_drawTitle(){this.add.text(x/2,72,"PRECURSORS",{fontSize:"52px",fontFamily:"JetBrains Mono, Menlo, monospace",color:Ne,stroke:"#0a0b10",strokeThickness:6,letterSpacing:8}).setOrigin(.5,.5),this.add.text(x/2,113,"Origins of Folklore",{fontSize:"17px",fontFamily:"Cormorant Garamond, Garamond, serif",fontStyle:"italic",color:"#b4b8ce",letterSpacing:3}).setOrigin(.5,.5),this.add.text(x/2,139,"a living world of evolving minds",{fontSize:"12px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#7a7f98",letterSpacing:2}).setOrigin(.5,.5);const e=this.add.graphics();e.lineStyle(1,5925530,.6),e.lineBetween(x/2-240,160,x/2+240,160)}_drawSlots(){const e=P.listSlots(),t=e.includes("autosave");let o=180;if(t){const a=P.getSlotMeta("autosave");this._drawContinueButton(o,a),o+=b+$+32;const i=this.add.graphics();i.lineStyle(1,2764098,.7),i.lineBetween(x/2-240,o-18,x/2+240,o-18)}const n=e.filter(a=>a!=="autosave").slice(0,ie);if(this.add.text(x/2-240,o,"SAVES",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:N,letterSpacing:4}).setOrigin(0,.5),o+=20,n.length===0)this.add.text(x/2,o+30,"No saved games",{fontSize:"13px",fontFamily:"JetBrains Mono, Menlo, monospace",color:N}).setOrigin(.5,.5),o+=70;else for(const a of n)this._drawSlotRow(o,a),o+=b+$}_drawContinueButton(e,t){const o=x/2,n=480,a=this.add.graphics();if(a.fillStyle(1712192,1),a.fillRoundedRect(o-n/2,e,n,b,6),a.lineStyle(1,4876980,.8),a.strokeRoundedRect(o-n/2,e,n,b,6),this.add.text(o-n/2+18,e+18,"▶  CONTINUE",{fontSize:"16px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#9ab4f4",letterSpacing:2}),t){const s=new Date(t.timestamp).toLocaleString();this.add.text(o-n/2+18,e+44,`autosave  ·  ${s}`,{fontSize:"11px",fontFamily:"JetBrains Mono, Menlo, monospace",color:N})}const i=this.add.zone(o,e+b/2,n,b+16).setInteractive({cursor:"pointer"});i.on("pointerover",()=>{a.clear(),a.fillStyle(1976400,1),a.fillRoundedRect(o-n/2,e,n,b,6),a.lineStyle(1,6982356,1),a.strokeRoundedRect(o-n/2,e,n,b,6)}),i.on("pointerout",()=>{a.clear(),a.fillStyle(1712192,1),a.fillRoundedRect(o-n/2,e,n,b,6),a.lineStyle(1,4876980,.8),a.strokeRoundedRect(o-n/2,e,n,b,6)}),i.on("pointerup",()=>this._startGame("autosave"))}_drawSlotRow(e,t){const o=x/2,n=480,a=70,i=8,s=P.getSlotMeta(t),d=s?new Date(s.timestamp).toLocaleString():"Unknown",l=t.replace(/^imported_/,"").replace(/_/g," "),c=this.add.graphics();c.fillStyle(se,1),c.fillRoundedRect(o-n/2,e,n-a*2-i*3,b,4),c.lineStyle(1,Q,.4),c.strokeRoundedRect(o-n/2,e,n-a*2-i*3,b,4),this.add.text(o-n/2+14,e+16,l,{fontSize:"13px",fontFamily:"JetBrains Mono, Menlo, monospace",color:ae}),this.add.text(o-n/2+14,e+40,d,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:N});const u=o+n/2-a*2-i*2;this._drawSmallButton(u,e,a,b,"LOAD",1716264,3833952,()=>{this._startGame(t)});const w=o+n/2-a-i;this._drawDeleteButton(w,e,a,b,t);const M=this.add.zone(o-a-i,e+b/2,n-a*2-i*3,b).setInteractive({cursor:"pointer"});M.on("pointerover",()=>{c.clear(),c.fillStyle(1579562,1),c.fillRoundedRect(o-n/2,e,n-a*2-i*3,b,4),c.lineStyle(1,Q,.7),c.strokeRoundedRect(o-n/2,e,n-a*2-i*3,b,4)}),M.on("pointerout",()=>{c.clear(),c.fillStyle(se,1),c.fillRoundedRect(o-n/2,e,n-a*2-i*3,b,4),c.lineStyle(1,Q,.4),c.strokeRoundedRect(o-n/2,e,n-a*2-i*3,b,4)}),M.on("pointerup",()=>this._startGame(t))}_drawSmallButton(e,t,o,n,a,i,s,d){const l=this.add.graphics(),c=w=>{l.clear(),l.fillStyle(w?i+1052688:i,1),l.fillRoundedRect(e,t+8,o,n-16,4),l.lineStyle(1,s,w?1:.7),l.strokeRoundedRect(e,t+8,o,n-16,4)};c(!1),this.add.text(e+o/2,t+n/2,a,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:ae,letterSpacing:1}).setOrigin(.5,.5);const u=this.add.zone(e+o/2,t+n/2,o,n-16).setInteractive({cursor:"pointer"});u.on("pointerover",()=>c(!0)),u.on("pointerout",()=>c(!1)),u.on("pointerup",d)}_drawDeleteButton(e,t,o,n,a){let i=!1;const s=this.add.graphics(),d=this.add.text(e+o/2,t+n/2,"DEL",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#8b6060",letterSpacing:1}).setOrigin(.5,.5),l=(u,w)=>{s.clear();const M=w?8075834:3807770,W=w?11554896:6959152;s.fillStyle(u?M+1052688:M,1),s.fillRoundedRect(e,t+8,o,n-16,4),s.lineStyle(1,W,u?1:.7),s.strokeRoundedRect(e,t+8,o,n-16,4),d.setText(w?"SURE?":"DEL"),d.setColor(w?"#e07070":"#8b6060")};l(!1,!1);const c=this.add.zone(e+o/2,t+n/2,o,n-16).setInteractive({cursor:"pointer"});c.on("pointerover",()=>l(!0,i)),c.on("pointerout",()=>l(!1,i)),c.on("pointerup",()=>{i?(P.deleteSlot(a),this.scene.restart()):(i=!0,l(!1,!0),this.time.delayedCall(2e3,()=>{i=!1,l(!1,!1)}))})}_drawNewGameButton(){const e=P.listSlots(),t=e.includes("autosave"),o=e.filter(u=>u!=="autosave").slice(0,ie);let n=180;t&&(n+=b+$+32),n+=20,o.length===0?n+=70:n+=o.length*(b+$),n+=28;const a=x/2,i=480,s=68,d=this.add.graphics(),l=u=>{d.clear(),d.fillStyle(u?1714208:1318424,1),d.fillRoundedRect(a-i/2,n,i,s,6),d.lineStyle(1,u?7381088:4878400,u?1:.9),d.strokeRoundedRect(a-i/2,n,i,s,6)};l(!1),this.add.text(a,n+s/2-8,"NEW GAME",{fontSize:"16px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#a0c890",letterSpacing:4}).setOrigin(.5,.5),this.add.text(a,n+s/2+12,"begin a new world",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:N,letterSpacing:1}).setOrigin(.5,.5);const c=this.add.zone(a,n+s/2,i,s+24).setInteractive({cursor:"pointer"});c.on("pointerover",()=>l(!0)),c.on("pointerout",()=>l(!1)),c.on("pointerup",()=>this._startGame(void 0)),this.add.text(a,z-24,"enter ↵ new game  ·  F5 quick-save  ·  F9 quick-load  ·  ` dev panel",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:N,letterSpacing:1}).setOrigin(.5,.5)}_bindEnterKey(){this._enterKeyHandler=e=>{if(!this.sys.isActive()||this.sys.game.scene.isActive("GameScene")){document.removeEventListener("keydown",this._enterKeyHandler),this._enterKeyHandler=null;return}if(e.key==="Enter"||e.key==="Return"){const t=e.target?.tagName;if(t==="INPUT"||t==="TEXTAREA")return;const n=P.listSlots().includes("autosave")?"autosave":void 0;this._startGame(n)}},document.addEventListener("keydown",this._enterKeyHandler),this.events.once("shutdown",()=>{this._enterKeyHandler&&(document.removeEventListener("keydown",this._enterKeyHandler),this._enterKeyHandler=null),this.children.removeAll(!0)})}_startGame(e){h.emit("game:loading:show");const t=()=>{e?this.scene.start("GameScene",{loadSlot:e}):this.scene.start("GameScene")};this.sys.game.scene.getScene("GameScene")?t():Pe(async()=>{const{GameScene:o}=await import("./GameScene-h2SNHWuX.js");return{GameScene:o}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(({GameScene:o})=>{this.sys.game.scene.add("GameScene",o),t()})}}class Be{serverUrl;playerId;playerDisplayName;triggerEl;modalEl;modalOpen=!1;constructor(e={}){this.serverUrl=e.serverUrl??"http://localhost:3001",this.playerId=e.playerId??"anonymous",this.playerDisplayName=e.playerDisplayName,this.triggerEl=this._buildTrigger(),this.modalEl=this._buildModal(),document.body.appendChild(this.triggerEl),document.body.appendChild(this.modalEl)}setPlayer(e,t){this.playerId=e,this.playerDisplayName=t}destroy(){this.triggerEl.remove(),this.modalEl.remove()}_buildTrigger(){const e=document.createElement("button");return e.id="folkfork-trigger",e.title="Share lore feedback",e.textContent="◈",e.style.cssText=`
      position: fixed;
      bottom: 18px;
      right: 18px;
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
    `,t.querySelector("#ff-cancel").addEventListener("click",()=>this._closeModal()),t.querySelector("#ff-submit").addEventListener("click",()=>this._submitFeedback(t)),e.addEventListener("click",o=>{o.target===e&&this._closeModal()}),e.appendChild(t),e}_toggleModal(){this.modalOpen?this._closeModal():this._openModal()}_openModal(){this.modalOpen=!0,this.modalEl.style.display="flex"}_closeModal(){this.modalOpen=!1,this.modalEl.style.display="none",this._resetForm()}_resetForm(){const e=o=>this.modalEl.querySelector(o);e("#ff-suggestion").value="",e("#ff-subject").value="",e("#ff-rationale").value="",e("#ff-type").value="general";const t=e("#ff-status");t.style.display="none",t.textContent=""}async _submitFeedback(e){const t=l=>e.querySelector(l),o=t("#ff-suggestion").value.trim(),n=t("#ff-subject").value.trim(),a=t("#ff-rationale").value.trim(),i=t("#ff-type").value,s=t("#ff-status"),d=t("#ff-submit");if(!o){s.style.color="#f38ba8",s.textContent="Please describe your suggestion.",s.style.display="block";return}d.disabled=!0,d.textContent="Sending…";try{const l=await fetch(`${this.serverUrl}/api/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:i,subject:n||void 0,suggestedChange:o,rationale:a||void 0,playerId:this.playerId,playerDisplayName:this.playerDisplayName,metadata:{gameVersion:typeof __APP_VERSION__<"u"?__APP_VERSION__:"unknown"}})});if(l.ok)s.style.color="rgba(61,252,224,0.8)",s.textContent="✓ Feedback received — thank you.",s.style.display="block",setTimeout(()=>this._closeModal(),2e3);else throw new Error(`Server error ${l.status}`)}catch(l){console.error("[FeedbackButton] submit error:",l),s.style.color="rgba(240,112,64,0.9)",s.textContent="Could not send feedback. Please try again.",s.style.display="block",d.disabled=!1,d.textContent="SEND"}}}class Oe{apiUrl;game;triggerEl;modalEl;modalOpen=!1;screenshotData=null;constructor(e={}){this.apiUrl=e.apiUrl??"https://feedback.multiversestudios.xyz/submit",this.game=e.game??null,this.triggerEl=this._buildTrigger(),this.modalEl=this._buildModal(),document.body.appendChild(this.triggerEl),document.body.appendChild(this.modalEl)}setGame(e){this.game=e}destroy(){this.triggerEl.remove(),this.modalEl.remove()}_buildTrigger(){const e=document.createElement("button");return e.id="bugreport-trigger",e.title="report a substrate anomaly",e.textContent="anomaly?",e.style.cssText=`
      position: fixed;
      bottom: 18px;
      right: 62px;
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
    `,t.querySelector("#br-cancel").addEventListener("click",()=>this._closeModal()),t.querySelector("#br-submit").addEventListener("click",()=>this._submit(t)),t.querySelector("#br-screenshot-btn").addEventListener("click",()=>this._captureScreenshot(t)),t.querySelector("#br-screenshot-remove").addEventListener("click",()=>this._removeScreenshot(t)),e.addEventListener("click",o=>{o.target===e&&this._closeModal()}),e.appendChild(t),e}_toggleModal(){this.modalOpen?this._closeModal():this._openModal()}_openModal(){this.modalOpen=!0,this.modalEl.style.display="flex"}_closeModal(){this.modalOpen=!1,this.modalEl.style.display="none",this._resetForm()}_resetForm(){const e=o=>this.modalEl.querySelector(o);e("#br-title").value="",e("#br-description").value="",e("#br-contact").value="",e("#br-severity").value="minor",this._removeScreenshot(this.modalEl);const t=e("#br-status");t.style.display="none",t.textContent=""}_captureScreenshot(e){this.modalEl.style.display="none",requestAnimationFrame(()=>{const t=document.querySelector("canvas");if(!t){this.modalEl.style.display="flex";const o=e.querySelector("#br-screenshot-status");o.textContent="No canvas found",o.style.color="rgba(240,112,64,0.8)";return}try{this.screenshotData=t.toDataURL("image/png");const o=e.querySelector("#br-screenshot-preview"),n=e.querySelector("#br-screenshot-img"),a=e.querySelector("#br-screenshot-status");n.src=this.screenshotData,o.style.display="block",a.textContent="Screenshot captured",a.style.color="rgba(61,252,224,0.7)"}catch{const n=e.querySelector("#br-screenshot-status");n.textContent="Could not capture screenshot",n.style.color="rgba(240,112,64,0.8)"}this.modalEl.style.display="flex"})}_removeScreenshot(e){this.screenshotData=null;const t=e.querySelector("#br-screenshot-preview"),o=e.querySelector("#br-screenshot-status");t&&(t.style.display="none"),o&&(o.textContent="",o.style.color="rgba(216,220,232,0.25)")}async _submit(e){const t=c=>e.querySelector(c),o=t("#br-title").value.trim(),n=t("#br-description").value.trim(),a=t("#br-contact").value.trim(),i=t("#br-severity").value,s=t("#br-status"),d=t("#br-submit");if(!o||o.length<3){s.style.color="rgba(240,112,64,0.9)",s.textContent="Please provide a title (at least 3 characters).",s.style.display="block";return}if(!n||n.length<10){s.style.color="rgba(240,112,64,0.9)",s.textContent="Please describe what happened (at least 10 characters).",s.style.display="block";return}d.disabled=!0,d.textContent="SUBMITTING...";const l={type:"bug_report",game:"precursors",title:o,description:n,severity:i,browser:navigator.userAgent};a&&(l.contact=a),this.screenshotData&&(l.screenshot=this.screenshotData);try{const c=await fetch(this.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(c.ok)s.style.color="rgba(61,252,224,0.8)",s.textContent="Bug report submitted — thank you.",s.style.display="block",setTimeout(()=>this._closeModal(),2e3);else{const u=await c.json().catch(()=>({}));throw new Error(u.error||`Server error ${c.status}`)}}catch(c){console.error("[BugReportOverlay] submit error:",c),s.style.color="rgba(240,112,64,0.9)",s.textContent="Could not submit. Please try again.",s.style.display="block"}finally{d.disabled=!1,d.textContent="SUBMIT"}}}Object.fromEntries(Object.entries(Re).filter(([,r])=>typeof r=="number").map(([r,e])=>[r.toLowerCase(),e]));async function De(){}let K=!1,le=!1;function Fe(){if(le)return;le=!0;const r=new URLSearchParams(window.location.search);(r.get("perf_mode")==="1"||r.get("perf_mode")==="true"||r.get("benchmark")==="1"||r.get("benchmark")==="true")&&(K=!0),window.CREATURES_CONFIG?.PERF_MODE&&(K=!0),K&&console.log("[PerfMode] ACTIVE — LLM cognition stubbed, network calls suppressed")}function nt(){return K}class rt{timestamps=[];maxPerWindow;windowMs;constructor(e=100,t=6e4){this.maxPerWindow=e,this.windowMs=t}tryAcquire(){const e=performance.now();for(;this.timestamps.length>0&&e-this.timestamps[0]>this.windowMs;)this.timestamps.shift();return this.timestamps.length>=this.maxPerWindow?!1:(this.timestamps.push(e),!0)}get currentCount(){const e=performance.now();for(;this.timestamps.length>0&&e-this.timestamps[0]>this.windowMs;)this.timestamps.shift();return this.timestamps.length}}const de=()=>({frameStartMs:0,preStepEndMs:0,stepHooksStartMs:0,sceneUpdateStartMs:0,sceneUpdateEndMs:0,postStepEndMs:0,rendererPreRenderStartMs:0,rendererPreRenderEndMs:0,sceneRenderStartMs:0,sceneRenderEndMs:0,rendererPostRenderStartMs:0,rendererPostRenderEndMs:0}),Ie=()=>({scenes:new Map}),R=(r,e)=>r>0&&e>0&&e>=r?e-r:0,Ae=r=>r.sys.settings.key||r.scene.key||r.constructor.name,Ge=12,Ue=10,ee=r=>r.type||r.constructor?.name||"Unknown",ce=r=>{const e=r;return Array.isArray(e.list)?e.list:[]},te=(r,e,t=1)=>{r.set(e,(r.get(e)??0)+t)},pe=(r,e)=>{for(const[t,o]of e)te(r,t,o)},Z=(r,e=Ge)=>Array.from(r.entries()).sort((t,o)=>o[1]-t[1]||t[0].localeCompare(o[0])).slice(0,e).map(([t,o])=>({type:t,count:o})),me=r=>r.visible!==!1,ue=(r,e,t=0)=>{if(e.has(r))return{subtreeNodes:0,visibleSubtreeNodes:0,maxDepth:t,typeCounts:new Map};e.add(r);const o=new Map;te(o,ee(r));let n=1,a=me(r)?1:0,i=t;const s=ce(r);for(let d=0;d<s.length;d++){const l=ue(s[d],e,t+1);n+=l.subtreeNodes,a+=l.visibleSubtreeNodes,i=Math.max(i,l.maxDepth),pe(o,l.typeCounts)}return{subtreeNodes:n,visibleSubtreeNodes:a,maxDepth:i,typeCounts:o}},qe=r=>{const e=r.texture?.key;return typeof e=="string"&&e.length>0?e:null},Je=(r,e)=>{const t=r;return{type:ee(r),name:t.name||"",textureKey:qe(r),directChildren:ce(r).length,subtreeNodes:e.subtreeNodes,visibleSubtreeNodes:e.visibleSubtreeNodes,depth:+Number(t.depth??0).toFixed(3),alpha:+Number(t.alpha??1).toFixed(3),visible:me(r),childTypeCounts:Z(e.typeCounts)}};function Ve(r){const e=r;if(e.__creaturesPhaserStepTelemetryInstalled)return;e.__creaturesPhaserStepTelemetryInstalled=!0;const t=de(),o=Ie(),n=k.Core.Events,a=k.Scenes.Events,i=r.scene,s=r.renderer,d=()=>{Object.assign(t,de())},l=()=>{o.scenes.clear()},c=p=>{const y=Ae(p);let g=o.scenes.get(y);return g||(g={sceneKey:y,active:!!p.sys.settings.active,visible:!!p.sys.settings.visible,displayListChildren:0,globallyVisibleChildren:0,containerChildren:0,layerChildren:0,cameraCount:0,totalVisibleChildren:0,renderTreeNodeCount:0,renderTreeVisibleNodeCount:0,depthSortMs:0,cameraManagerRenderMs:0,totalFilterMs:0,totalCameraRenderMs:0,renderTotalMs:0,topLevelTypeCounts:[],renderTreeTypeCounts:[],largestRoots:[],cameras:[]},o.scenes.set(y,g)),g},u=()=>{const p=Array.from(o.scenes.values()).sort((m,S)=>S.renderTotalMs-m.renderTotalMs);let y=0,g=0,L=0,T=0,J=0,V=0,C=0,v=0;for(let m=0;m<p.length;m++){const S=p[m];y+=S.cameraCount,g+=S.displayListChildren,L+=S.globallyVisibleChildren,T+=S.containerChildren,J+=S.layerChildren,V+=S.totalVisibleChildren,C+=S.renderTreeNodeCount,v+=S.renderTreeVisibleNodeCount}return{frameCount:1,totalScenes:p.length,totalCameras:y,totalDisplayListChildren:g,totalGloballyVisibleChildren:L,totalContainerChildren:T,totalLayerChildren:J,totalVisibleChildren:V,totalRenderTreeNodes:C,totalRenderTreeVisibleNodes:v,scenes:p}},w=p=>{const y=p;if(y.__creaturesRenderTelemetryInstalled)return;y.__creaturesRenderTelemetryInstalled=!0;const g=p.sys,L=g.cameras,T=L,J=g.render.bind(g),V=T.render.bind(T);g.render=C=>{if(!U.isRenderDetailEnabled()){J(C);return}const v=c(p);v.active=!!g.settings.active,v.visible=!!g.settings.visible;const m=g.displayList,S=m.getChildren();v.displayListChildren=S.length;let B=0,O=0,D=0;for(let f=0;f<S.length;f++){const I=S[f];I.visible!==!1&&B++,I.type==="Container"&&O++,I.type==="Layer"&&D++}v.globallyVisibleChildren=B,v.containerChildren=O,v.layerChildren=D;const F=performance.now(),H=F;m.depthSort(),v.depthSortMs=performance.now()-H,g.events.emit(a.PRE_RENDER,C);const E=performance.now();T.render(C,m),v.cameraManagerRenderMs=performance.now()-E,g.events.emit(a.RENDER,C),v.renderTotalMs=performance.now()-F},T.render=(C,v)=>{if(!U.isRenderDetailEnabled()){V(C,v);return}const m=c(p);m.cameras=[],m.cameraCount=0,m.totalVisibleChildren=0,m.renderTreeNodeCount=0,m.renderTreeVisibleNodeCount=0,m.totalFilterMs=0,m.totalCameraRenderMs=0,m.topLevelTypeCounts=[],m.renderTreeTypeCounts=[],m.largestRoots=[];const S=v.getChildren(),B=L.cameras,O=new Set,D=new Map,F=new Map,H=[];for(let E=0;E<B.length;E++){const f=B[E];if(!f.visible||f.alpha<=0)continue;f.preRender();const I=performance.now(),A=L.getVisibleChildren(S,f),ve=performance.now()-I,we=performance.now();C.render(p,A,f);const Me=performance.now()-we,X={cameraId:Number(f.id??E),name:String(f.name??`camera_${E}`),visibleChildren:A.length,filterMs:+ve.toFixed(3),renderMs:+Me.toFixed(3),alpha:+Number(f.alpha??1).toFixed(3),zoom:+Number(f.zoom??1).toFixed(3),width:+Number(f.width??0).toFixed(3),height:+Number(f.height??0).toFixed(3)};m.cameras.push(X),m.cameraCount++,m.totalVisibleChildren+=A.length,m.totalFilterMs+=X.filterMs,m.totalCameraRenderMs+=X.renderMs;for(let Y=0;Y<A.length;Y++){const G=A[Y];if(O.has(G))continue;O.add(G),te(D,ee(G));const j=ue(G,new Set);m.renderTreeNodeCount+=j.subtreeNodes,m.renderTreeVisibleNodeCount+=j.visibleSubtreeNodes,pe(F,j.typeCounts),H.push(Je(G,j))}}m.topLevelTypeCounts=Z(D),m.renderTreeTypeCounts=Z(F),m.largestRoots=H.sort((E,f)=>f.subtreeNodes-E.subtreeNodes||f.visibleSubtreeNodes-E.visibleSubtreeNodes||E.type.localeCompare(f.type)).slice(0,Ue)}},M=()=>{const p=i.scenes;for(let y=0;y<p.length;y++)w(p[y])},W=()=>{d(),l(),t.frameStartMs=performance.now()},he=()=>{const p=performance.now();t.preStepEndMs=p,t.stepHooksStartMs=p},fe=()=>{t.postStepEndMs=performance.now()},ye=()=>{if(t.frameStartMs<=0)return;const p=performance.now();U.recordPhaserStepFrame({preStep:R(t.frameStartMs,t.preStepEndMs),stepHooks:R(t.stepHooksStartMs,t.sceneUpdateStartMs||t.postStepEndMs||p),sceneUpdate:R(t.sceneUpdateStartMs,t.sceneUpdateEndMs),postStep:R(t.postStepEndMs,t.rendererPreRenderStartMs||t.sceneRenderStartMs||p),rendererPreRender:R(t.rendererPreRenderStartMs,t.rendererPreRenderEndMs),sceneRender:R(t.sceneRenderStartMs,t.sceneRenderEndMs),rendererPostRender:R(t.rendererPostRenderStartMs,t.rendererPostRenderEndMs),postRender:R(t.rendererPostRenderEndMs||t.sceneRenderEndMs||t.postStepEndMs,p),totalStep:R(t.frameStartMs,p)}),U.isRenderDetailEnabled()&&o.scenes.size>0&&U.recordRenderDetailFrame(u())},xe=i.update.bind(i);i.update=(p,y)=>{t.sceneUpdateStartMs=performance.now();try{xe(p,y)}finally{t.sceneUpdateEndMs=performance.now()}};const Se=i.render.bind(i);if(i.render=p=>{M(),t.sceneRenderStartMs=performance.now();try{Se(p)}finally{t.sceneRenderEndMs=performance.now()}},s){const p=s.preRender.bind(s);s.preRender=(...g)=>{t.rendererPreRenderStartMs=performance.now();try{p(...g)}finally{t.rendererPreRenderEndMs=performance.now()}};const y=s.postRender.bind(s);s.postRender=(...g)=>{t.rendererPostRenderStartMs=performance.now();try{y(...g)}finally{t.rendererPostRenderEndMs=performance.now()}}}M(),r.events.on(n.PRE_STEP,W),r.events.on(n.STEP,he),r.events.on(n.POST_STEP,fe),r.events.on(n.POST_RENDER,ye),r.events.once(n.READY,M),r.events.on(n.SYSTEM_READY,M)}Ee.init();Ce.init();Fe();window.CREATURES_CONFIG&&ke(window.CREATURES_CONFIG);await De();const be=()=>{const r=document.getElementById("loading-screen");r&&(r.classList.add("fade-out"),setTimeout(()=>{r.style.display="none"},850))},He=()=>{const r=document.getElementById("loading-screen");r&&(r.style.display="",r.classList.remove("fade-out"))};h.on("game:loading:show",He);h.on("game:scene:ready",be);const je={type:k.AUTO,width:x,height:z,parent:"game-container",backgroundColor:"#0a0b10",scene:[ze,_e],pixelArt:!0,render:{powerPreference:"high-performance"},fps:{target:30,forceSetTimeOut:!1},scale:{mode:k.Scale.FIT,autoCenter:k.Scale.CENTER_BOTH},input:{mouse:{preventDefaultWheel:!0}},callbacks:{postBoot:()=>{setTimeout(be,600)}}},q=new k.Game(je);Ve(q);const $e=new Be({serverUrl:window.FOLKFORK_SERVER_URL??"http://localhost:3001"});new Oe({game:q});h.on("save:loaded",r=>{const e=r;e?.playerId&&typeof e.playerId=="string"&&$e.setPlayer(e.playerId,typeof e.playerName=="string"?e.playerName:void 0)});function _(r,e=4e3){const t=document.getElementById("lore-toast");t&&(t.textContent=r,t.classList.add("visible"),setTimeout(()=>t.classList.remove("visible"),e))}h.on("norn:graduated",(r,e,t)=>{_(`${r.name}'s mind has expanded`)});h.on("rune:discovered",(r,e)=>{_(`${e.name} found ancient markings...`)});h.on("lore:first_question",r=>{_("The ground hums in answer...",5e3)});h.on("lore:first_naming",r=>{_("A word takes root in the world",5e3)});h.on("lore:first_teaching",r=>{_("Knowledge passes between minds",5e3)});h.on("lore:first_dream",r=>{_("Something old stirs in the deep...",6e3)});h.on("lore:collective_resonance",()=>{_("The boundaries thin. They feel each other thinking.",7e3)});h.on("norn:hatched",r=>{_(`A new life: ${r.name} has hatched (gen ${r.generation})`,5e3)});h.on("norn:eggLaid",r=>{_(`${r.name} laid an egg`,3e3)});h.on("invention:created",(r,e,t)=>{const o=t.length>1?` from ${t.slice(0,2).join(" + ")}`:t.length===1?` from ${t[0]}`:"";_(`${r.name} invented "${e.name}"${o}`,5e3)});h.on("invention:compound_discovered",(r,e,t,o)=>{Ke(r.name,e.name,t.name,o.name)});function Ke(r,e,t,o){const n=document.createElement("div");n.className="compound-discovery",n.innerHTML=`
    <div class="compound-discovery__inner">
      <div class="compound-discovery__label">COMPOUND DISCOVERY</div>
      <div class="compound-discovery__name">${e}</div>
      <div class="compound-discovery__detail">${r} combined <em>${t}</em> + <em>${o}</em></div>
      <div class="compound-discovery__sub">Something new has emerged in the world</div>
    </div>
  `,document.body.appendChild(n),requestAnimationFrame(()=>n.classList.add("compound-discovery--visible")),setTimeout(()=>{n.classList.remove("compound-discovery--visible"),setTimeout(()=>n.remove(),700)},5e3)}q.events.on("contextlost",()=>{const r=document.getElementById("loading-screen");if(r){r.classList.remove("fade-out");const e=r.querySelector(".loading-sub");e&&(e.textContent="The substrate collapsed — please refresh to re-enter")}});let oe=!1;h.on("game:scene:error",()=>{oe=!0});h.on("game:loading:show",()=>{oe=!1});const ge=()=>{q.scene.isActive("GameScene")&&h.emit("game:scene:error")};window.addEventListener("error",ge);window.addEventListener("unhandledrejection",ge);h.on("game:scene:shutdown",()=>{if(!oe)return;const r=document.getElementById("loading-screen");if(r){r.classList.remove("fade-out");const e=r.querySelector(".loading-sub");e&&(e.textContent="The substrate collapsed — please refresh to re-enter")}});window.__precursors={game:q,eventBus:h};export{rt as R,nt as i};
