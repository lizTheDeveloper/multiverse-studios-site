const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GameScene-Cx_EM80d.js","assets/vendor-phaser-CaWnzXme.js","assets/InventionRegistry-zijTimNg.js","assets/Logger-DyW83vO_.js","assets/WorldGenerator-COommsbP.js","assets/LifeStage-069__A6x.js","assets/SpriteState-tqplp9c6.js","assets/WaveUnlockSystem-J0YU0Z3Q.js","assets/LanguageSystem-CMlI24lC.js","assets/World-CiAETbqI.js","assets/PerfTelemetry-DO5L_tn5.js","assets/ChemicalSet-Ct7VLFvF.js","assets/SimulationScheduler-BGLRfRja.js","assets/BiochemistrySystem-C18b4oNE.js","assets/UIScene-DwBcaT88.js","assets/KeyboardControls-mPjJ5CLj.js"])))=>i.map(i=>d[i]);
import"./LifeStage-069__A6x.js";import{P as T}from"./vendor-phaser-CaWnzXme.js";import{s as N,P as q,C as Te,A as ke}from"./PerfTelemetry-DO5L_tn5.js";import{G as x,a as z,S as Le,b as Pe}from"./Logger-DyW83vO_.js";import{e as h}from"./InventionRegistry-zijTimNg.js";import{U as Ne}from"./UIScene-DwBcaT88.js";import"./ChemicalSet-Ct7VLFvF.js";import"./LanguageSystem-CMlI24lC.js";const Be="modulepreload",ze=function(n){return"/play/creatures/"+n},se={},Oe=function(e,t,o){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=a?.nonce||a?.getAttribute("nonce");r=Promise.allSettled(t.map(d=>{if(d=ze(d),d in se)return;se[d]=!0;const l=d.endsWith(".css"),p=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":Be,l||(c.as="script"),c.crossOrigin="",c.href=d,s&&c.setAttribute("nonce",s),document.head.appendChild(c),l)return new Promise((f,M)=>{c.addEventListener("load",f),c.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return r.then(a=>{for(const s of a||[])s.status==="rejected"&&i(s.reason);return e().catch(i)})},ae=658192,ie=1184799,Z=4016762,B="#70758f",le="#c8ccdd",de="#e8ecf8",ce="#7b8ed4",b=72,K=10,ee=8,W=4;function pe(n){const e=Math.floor(n/3600),t=Math.floor(n%3600/60);return e>0?`${e}h ${t}m`:`${t}m`}class De extends T.Scene{deleteConfirmSlot=null;_enterKeyHandler=null;_scrollOffset=0;constructor(){super({key:"MenuScene"})}create(){const e=document.getElementById("loading-screen");e&&e.classList.add("fade-out"),this._drawBackground(),this._drawTitle(),this._drawSlots(),this._drawNewGameButton(),this._bindEnterKey()}_drawBackground(){this.add.rectangle(x/2,z/2,x,z,ae);const e=this.add.graphics(),t=new T.Math.RandomDataGenerator(["creatures_menu"]);for(let a=0;a<280;a++){const s=t.between(0,x),d=t.between(0,z),l=t.frac()<.15?1.5:.8,p=.2+t.frac()*.6;e.fillStyle(16777215,p),e.fillCircle(s,d,l)}const o=this.add.graphics(),r=x,i=z;for(let a=0;a<12;a++){const s=a/12,d=s*.55,l=(1-s)*Math.min(r,i)*.55;o.fillStyle(ae,d),o.fillRect(-l/2+r/2-r/2,-l/2+i/2-i/2,r+l,l/2),o.fillRect(-l/2+r/2-r/2,i-l/4,r+l,l/2)}}_drawTitle(){this.add.text(x/2,72,"PRECURSORS",{fontSize:"52px",fontFamily:"JetBrains Mono, Menlo, monospace",color:de,stroke:"#0a0b10",strokeThickness:6,letterSpacing:8}).setOrigin(.5,.5),this.add.text(x/2,113,"Origins of Folklore",{fontSize:"17px",fontFamily:"Cormorant Garamond, Garamond, serif",fontStyle:"italic",color:"#b4b8ce",letterSpacing:3}).setOrigin(.5,.5),this.add.text(x/2,139,"a living world of evolving minds",{fontSize:"12px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#7a7f98",letterSpacing:2}).setOrigin(.5,.5);const e=this.add.graphics();e.lineStyle(1,5925530,.6),e.lineBetween(x/2-240,160,x/2+240,160)}_drawSlots(){const e=N.listSlots(),t=e.includes("autosave");let o=180;if(t){const a=N.getSlotMeta("autosave");this._drawContinueButton(o,a),o+=b+K+32;const s=this.add.graphics();s.lineStyle(1,2764098,.7),s.lineBetween(x/2-240,o-18,x/2+240,o-18)}const r=e.filter(a=>a!=="autosave").slice(0,ee),i=r.length>0?`SAVES  (${r.length}/${ee})`:"SAVES";if(this.add.text(x/2-240,o,i,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:B,letterSpacing:4}).setOrigin(0,.5),o+=20,r.length===0)this.add.text(x/2,o+30,"No saved games",{fontSize:"13px",fontFamily:"JetBrains Mono, Menlo, monospace",color:B}).setOrigin(.5,.5),o+=70;else{const a=r.slice(this._scrollOffset,this._scrollOffset+W),s=this._scrollOffset>0,d=this._scrollOffset+W<r.length;s&&this._drawScrollArrow(o-14,!0,r.length);for(const l of a)this._drawSlotRow(o,l),o+=b+K;d&&this._drawScrollArrow(o-4,!1,r.length)}}_drawScrollArrow(e,t,o){const r=x/2,i=t?"▲  more saves above":"▼  more saves below",a=this.add.text(r,e,i,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:ce}).setOrigin(.5,.5).setInteractive({cursor:"pointer"});a.on("pointerup",()=>{this._scrollOffset+=t?-1:1,this.scene.restart()}),a.on("pointerover",()=>a.setColor(de)),a.on("pointerout",()=>a.setColor(ce))}_drawContinueButton(e,t){const o=x/2,r=480,i=this.add.graphics();if(i.fillStyle(1712192,1),i.fillRoundedRect(o-r/2,e,r,b,6),i.lineStyle(1,4876980,.8),i.strokeRoundedRect(o-r/2,e,r,b,6),this.add.text(o-r/2+18,e+18,"▶  CONTINUE",{fontSize:"16px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#9ab4f4",letterSpacing:2}),t){const d=[`autosave  ·  ${new Date(t.timestamp).toLocaleString()}`];t.nornCount>0&&d.push(`${t.nornCount} norns`),t.maxGeneration>0&&d.push(`gen ${t.maxGeneration}`),t.playtime>0&&d.push(pe(t.playtime)),this.add.text(o-r/2+18,e+44,d.join("  ·  "),{fontSize:"11px",fontFamily:"JetBrains Mono, Menlo, monospace",color:B})}const a=this.add.zone(o,e+b/2,r,b+16).setInteractive({cursor:"pointer"});a.on("pointerover",()=>{i.clear(),i.fillStyle(1976400,1),i.fillRoundedRect(o-r/2,e,r,b,6),i.lineStyle(1,6982356,1),i.strokeRoundedRect(o-r/2,e,r,b,6)}),a.on("pointerout",()=>{i.clear(),i.fillStyle(1712192,1),i.fillRoundedRect(o-r/2,e,r,b,6),i.lineStyle(1,4876980,.8),i.strokeRoundedRect(o-r/2,e,r,b,6)}),a.on("pointerup",()=>this._startGame("autosave"))}_drawSlotRow(e,t){const o=x/2,r=480,i=70,a=8,s=N.getSlotMeta(t),d=s?new Date(s.timestamp).toLocaleString():"Unknown",l=t.replace(/^imported_/,"").replace(/_/g," "),p=[d];s&&s.nornCount>0&&p.push(`${s.nornCount} norns`),s&&s.maxGeneration>0&&p.push(`gen ${s.maxGeneration}`),s&&s.playtime>0&&p.push(pe(s.playtime));const c=this.add.graphics();c.fillStyle(ie,1),c.fillRoundedRect(o-r/2,e,r-i*2-a*3,b,4),c.lineStyle(1,Z,.4),c.strokeRoundedRect(o-r/2,e,r-i*2-a*3,b,4),this.add.text(o-r/2+14,e+16,l,{fontSize:"13px",fontFamily:"JetBrains Mono, Menlo, monospace",color:le}),this.add.text(o-r/2+14,e+40,p.join("  ·  "),{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:B});const f=o+r/2-i*2-a*2;this._drawSmallButton(f,e,i,b,"LOAD",1716264,3833952,()=>{this._startGame(t)});const M=o+r/2-i-a;this._drawDeleteButton(M,e,i,b,t);const k=this.add.zone(o-i-a,e+b/2,r-i*2-a*3,b).setInteractive({cursor:"pointer"});k.on("pointerover",()=>{c.clear(),c.fillStyle(1579562,1),c.fillRoundedRect(o-r/2,e,r-i*2-a*3,b,4),c.lineStyle(1,Z,.7),c.strokeRoundedRect(o-r/2,e,r-i*2-a*3,b,4)}),k.on("pointerout",()=>{c.clear(),c.fillStyle(ie,1),c.fillRoundedRect(o-r/2,e,r-i*2-a*3,b,4),c.lineStyle(1,Z,.4),c.strokeRoundedRect(o-r/2,e,r-i*2-a*3,b,4)}),k.on("pointerup",()=>this._startGame(t))}_drawSmallButton(e,t,o,r,i,a,s,d){const l=this.add.graphics(),p=f=>{l.clear(),l.fillStyle(f?a+1052688:a,1),l.fillRoundedRect(e,t+8,o,r-16,4),l.lineStyle(1,s,f?1:.7),l.strokeRoundedRect(e,t+8,o,r-16,4)};p(!1),this.add.text(e+o/2,t+r/2,i,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:le,letterSpacing:1}).setOrigin(.5,.5);const c=this.add.zone(e+o/2,t+r/2,o,r-16).setInteractive({cursor:"pointer"});c.on("pointerover",()=>p(!0)),c.on("pointerout",()=>p(!1)),c.on("pointerup",d)}_drawDeleteButton(e,t,o,r,i){let a=!1;const s=this.add.graphics(),d=this.add.text(e+o/2,t+r/2,"DEL",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#8b6060",letterSpacing:1}).setOrigin(.5,.5),l=(c,f)=>{s.clear();const M=f?8075834:3807770,k=f?11554896:6959152;s.fillStyle(c?M+1052688:M,1),s.fillRoundedRect(e,t+8,o,r-16,4),s.lineStyle(1,k,c?1:.7),s.strokeRoundedRect(e,t+8,o,r-16,4),d.setText(f?"SURE?":"DEL"),d.setColor(f?"#e07070":"#8b6060")};l(!1,!1);const p=this.add.zone(e+o/2,t+r/2,o,r-16).setInteractive({cursor:"pointer"});p.on("pointerover",()=>l(!0,a)),p.on("pointerout",()=>l(!1,a)),p.on("pointerup",()=>{a?(N.deleteSlot(i),this.scene.restart()):(a=!0,l(!1,!0),this.time.delayedCall(2e3,()=>{a=!1,l(!1,!1)}))})}_drawNewGameButton(){const e=N.listSlots(),t=e.includes("autosave"),o=e.filter(f=>f!=="autosave").slice(0,ee),r=Math.min(o.length,W);let i=180;t&&(i+=b+K+32),i+=20,o.length===0?i+=70:(i+=r*(b+K),o.length>W&&(i+=20)),i+=28;const a=x/2,s=480,d=68,l=this.add.graphics(),p=f=>{l.clear(),l.fillStyle(f?1714208:1318424,1),l.fillRoundedRect(a-s/2,i,s,d,6),l.lineStyle(1,f?7381088:4878400,f?1:.9),l.strokeRoundedRect(a-s/2,i,s,d,6)};p(!1),this.add.text(a,i+d/2-8,"NEW GAME",{fontSize:"16px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#a0c890",letterSpacing:4}).setOrigin(.5,.5),this.add.text(a,i+d/2+12,"begin a new world",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:B,letterSpacing:1}).setOrigin(.5,.5);const c=this.add.zone(a,i+d/2,s,d+24).setInteractive({cursor:"pointer"});c.on("pointerover",()=>p(!0)),c.on("pointerout",()=>p(!1)),c.on("pointerup",()=>this._startGame(void 0)),this.add.text(a,z-24,"enter ↵ new game  ·  F5 quick-save  ·  F9 quick-load  ·  ` dev panel",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:B,letterSpacing:1}).setOrigin(.5,.5)}_bindEnterKey(){this._enterKeyHandler=e=>{if(!this.sys.isActive()||this.sys.game.scene.isActive("GameScene")){document.removeEventListener("keydown",this._enterKeyHandler),this._enterKeyHandler=null;return}if(e.key==="Enter"||e.key==="Return"){const t=e.target?.tagName;if(t==="INPUT"||t==="TEXTAREA")return;const r=N.listSlots().includes("autosave")?"autosave":void 0;this._startGame(r)}},document.addEventListener("keydown",this._enterKeyHandler),this.events.once("shutdown",()=>{this._enterKeyHandler&&(document.removeEventListener("keydown",this._enterKeyHandler),this._enterKeyHandler=null),this.children.removeAll(!0)})}_startGame(e){h.emit("game:loading:show");const t=()=>{e?this.scene.start("GameScene",{loadSlot:e}):this.scene.start("GameScene")};this.sys.game.scene.getScene("GameScene")?t():Oe(async()=>{const{GameScene:o}=await import("./GameScene-Cx_EM80d.js");return{GameScene:o}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(({GameScene:o})=>{this.sys.game.scene.add("GameScene",o),t()})}}class Ie{serverUrl;playerId;playerDisplayName;triggerEl;modalEl;modalOpen=!1;constructor(e={}){this.serverUrl=e.serverUrl??"http://localhost:3001",this.playerId=e.playerId??"anonymous",this.playerDisplayName=e.playerDisplayName,this.triggerEl=this._buildTrigger(),this.modalEl=this._buildModal(),document.body.appendChild(this.triggerEl),document.body.appendChild(this.modalEl)}setPlayer(e,t){this.playerId=e,this.playerDisplayName=t}destroy(){this.triggerEl.remove(),this.modalEl.remove()}_buildTrigger(){const e=document.createElement("button");return e.id="folkfork-trigger",e.title="Share lore feedback",e.textContent="◈",e.style.cssText=`
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
    `,t.querySelector("#ff-cancel").addEventListener("click",()=>this._closeModal()),t.querySelector("#ff-submit").addEventListener("click",()=>this._submitFeedback(t)),e.addEventListener("click",o=>{o.target===e&&this._closeModal()}),e.appendChild(t),e}_toggleModal(){this.modalOpen?this._closeModal():this._openModal()}_openModal(){this.modalOpen=!0,this.modalEl.style.display="flex"}_closeModal(){this.modalOpen=!1,this.modalEl.style.display="none",this._resetForm()}_resetForm(){const e=o=>this.modalEl.querySelector(o);e("#ff-suggestion").value="",e("#ff-subject").value="",e("#ff-rationale").value="",e("#ff-type").value="general";const t=e("#ff-status");t.style.display="none",t.textContent=""}async _submitFeedback(e){const t=l=>e.querySelector(l),o=t("#ff-suggestion").value.trim(),r=t("#ff-subject").value.trim(),i=t("#ff-rationale").value.trim(),a=t("#ff-type").value,s=t("#ff-status"),d=t("#ff-submit");if(!o){s.style.color="#f38ba8",s.textContent="Please describe your suggestion.",s.style.display="block";return}d.disabled=!0,d.textContent="Sending…";try{const l=await fetch(`${this.serverUrl}/api/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:a,subject:r||void 0,suggestedChange:o,rationale:i||void 0,playerId:this.playerId,playerDisplayName:this.playerDisplayName,metadata:{gameVersion:typeof __APP_VERSION__<"u"?__APP_VERSION__:"unknown"}})});if(l.ok)s.style.color="rgba(61,252,224,0.8)",s.textContent="✓ Feedback received — thank you.",s.style.display="block",setTimeout(()=>this._closeModal(),2e3);else throw new Error(`Server error ${l.status}`)}catch(l){console.error("[FeedbackButton] submit error:",l),s.style.color="rgba(240,112,64,0.9)",s.textContent="Could not send feedback. Please try again.",s.style.display="block",d.disabled=!1,d.textContent="SEND"}}}class Ae{apiUrl;game;triggerEl;modalEl;modalOpen=!1;screenshotData=null;constructor(e={}){this.apiUrl=e.apiUrl??"https://feedback.multiversestudios.xyz/submit",this.game=e.game??null,this.triggerEl=this._buildTrigger(),this.modalEl=this._buildModal(),document.body.appendChild(this.triggerEl),document.body.appendChild(this.modalEl)}setGame(e){this.game=e}destroy(){this.triggerEl.remove(),this.modalEl.remove()}_buildTrigger(){const e=document.createElement("button");return e.id="bugreport-trigger",e.title="report a substrate anomaly",e.textContent="anomaly?",e.style.cssText=`
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
    `,t.querySelector("#br-cancel").addEventListener("click",()=>this._closeModal()),t.querySelector("#br-submit").addEventListener("click",()=>this._submit(t)),t.querySelector("#br-screenshot-btn").addEventListener("click",()=>this._captureScreenshot(t)),t.querySelector("#br-screenshot-remove").addEventListener("click",()=>this._removeScreenshot(t)),e.addEventListener("click",o=>{o.target===e&&this._closeModal()}),e.appendChild(t),e}_toggleModal(){this.modalOpen?this._closeModal():this._openModal()}_openModal(){this.modalOpen=!0,this.modalEl.style.display="flex"}_closeModal(){this.modalOpen=!1,this.modalEl.style.display="none",this._resetForm()}_resetForm(){const e=o=>this.modalEl.querySelector(o);e("#br-title").value="",e("#br-description").value="",e("#br-contact").value="",e("#br-severity").value="minor",this._removeScreenshot(this.modalEl);const t=e("#br-status");t.style.display="none",t.textContent=""}_captureScreenshot(e){this.modalEl.style.display="none",requestAnimationFrame(()=>{const t=document.querySelector("canvas");if(!t){this.modalEl.style.display="flex";const o=e.querySelector("#br-screenshot-status");o.textContent="No canvas found",o.style.color="rgba(240,112,64,0.8)";return}try{this.screenshotData=t.toDataURL("image/png");const o=e.querySelector("#br-screenshot-preview"),r=e.querySelector("#br-screenshot-img"),i=e.querySelector("#br-screenshot-status");r.src=this.screenshotData,o.style.display="block",i.textContent="Screenshot captured",i.style.color="rgba(61,252,224,0.7)"}catch{const r=e.querySelector("#br-screenshot-status");r.textContent="Could not capture screenshot",r.style.color="rgba(240,112,64,0.8)"}this.modalEl.style.display="flex"})}_removeScreenshot(e){this.screenshotData=null;const t=e.querySelector("#br-screenshot-preview"),o=e.querySelector("#br-screenshot-status");t&&(t.style.display="none"),o&&(o.textContent="",o.style.color="rgba(216,220,232,0.25)")}async _submit(e){const t=p=>e.querySelector(p),o=t("#br-title").value.trim(),r=t("#br-description").value.trim(),i=t("#br-contact").value.trim(),a=t("#br-severity").value,s=t("#br-status"),d=t("#br-submit");if(!o||o.length<3){s.style.color="rgba(240,112,64,0.9)",s.textContent="Please provide a title (at least 3 characters).",s.style.display="block";return}if(!r||r.length<10){s.style.color="rgba(240,112,64,0.9)",s.textContent="Please describe what happened (at least 10 characters).",s.style.display="block";return}d.disabled=!0,d.textContent="SUBMITTING...";const l={type:"bug_report",game:"precursors",title:o,description:r,severity:a,browser:navigator.userAgent};i&&(l.contact=i),this.screenshotData&&(l.screenshot=this.screenshotData);try{const p=await fetch(this.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(p.ok)s.style.color="rgba(61,252,224,0.8)",s.textContent="Bug report submitted — thank you.",s.style.display="block",setTimeout(()=>this._closeModal(),2e3);else{const c=await p.json().catch(()=>({}));throw new Error(c.error||`Server error ${p.status}`)}}catch(p){console.error("[BugReportOverlay] submit error:",p),s.style.color="rgba(240,112,64,0.9)",s.textContent="Could not submit. Please try again.",s.style.display="block"}finally{d.disabled=!1,d.textContent="SUBMIT"}}}Object.fromEntries(Object.entries(Le).filter(([,n])=>typeof n=="number").map(([n,e])=>[n.toLowerCase(),e]));async function Fe(){}let X=!1,ue=!1;function Ge(){if(ue)return;ue=!0;const n=new URLSearchParams(window.location.search);(n.get("perf_mode")==="1"||n.get("perf_mode")==="true"||n.get("benchmark")==="1"||n.get("benchmark")==="true")&&(X=!0),window.CREATURES_CONFIG?.PERF_MODE&&(X=!0),X&&console.log("[PerfMode] ACTIVE — LLM cognition stubbed, network calls suppressed")}function at(){return X}class it{timestamps=[];maxPerWindow;windowMs;constructor(e=100,t=6e4){this.maxPerWindow=e,this.windowMs=t}tryAcquire(){const e=performance.now();for(;this.timestamps.length>0&&e-this.timestamps[0]>this.windowMs;)this.timestamps.shift();return this.timestamps.length>=this.maxPerWindow?!1:(this.timestamps.push(e),!0)}get currentCount(){const e=performance.now();for(;this.timestamps.length>0&&e-this.timestamps[0]>this.windowMs;)this.timestamps.shift();return this.timestamps.length}}const me=()=>({frameStartMs:0,preStepEndMs:0,stepHooksStartMs:0,sceneUpdateStartMs:0,sceneUpdateEndMs:0,postStepEndMs:0,rendererPreRenderStartMs:0,rendererPreRenderEndMs:0,sceneRenderStartMs:0,sceneRenderEndMs:0,rendererPostRenderStartMs:0,rendererPostRenderEndMs:0}),Ue=()=>({scenes:new Map}),R=(n,e)=>n>0&&e>0&&e>=n?e-n:0,qe=n=>n.sys.settings.key||n.scene.key||n.constructor.name,Je=12,$e=10,oe=n=>n.type||n.constructor?.name||"Unknown",be=n=>{const e=n;return Array.isArray(e.list)?e.list:[]},ne=(n,e,t=1)=>{n.set(e,(n.get(e)??0)+t)},ge=(n,e)=>{for(const[t,o]of e)ne(n,t,o)},te=(n,e=Je)=>Array.from(n.entries()).sort((t,o)=>o[1]-t[1]||t[0].localeCompare(o[0])).slice(0,e).map(([t,o])=>({type:t,count:o})),he=n=>n.visible!==!1,fe=(n,e,t=0)=>{if(e.has(n))return{subtreeNodes:0,visibleSubtreeNodes:0,maxDepth:t,typeCounts:new Map};e.add(n);const o=new Map;ne(o,oe(n));let r=1,i=he(n)?1:0,a=t;const s=be(n);for(let d=0;d<s.length;d++){const l=fe(s[d],e,t+1);r+=l.subtreeNodes,i+=l.visibleSubtreeNodes,a=Math.max(a,l.maxDepth),ge(o,l.typeCounts)}return{subtreeNodes:r,visibleSubtreeNodes:i,maxDepth:a,typeCounts:o}},Ve=n=>{const e=n.texture?.key;return typeof e=="string"&&e.length>0?e:null},je=(n,e)=>{const t=n;return{type:oe(n),name:t.name||"",textureKey:Ve(n),directChildren:be(n).length,subtreeNodes:e.subtreeNodes,visibleSubtreeNodes:e.visibleSubtreeNodes,depth:+Number(t.depth??0).toFixed(3),alpha:+Number(t.alpha??1).toFixed(3),visible:he(n),childTypeCounts:te(e.typeCounts)}};function He(n){const e=n;if(e.__creaturesPhaserStepTelemetryInstalled)return;e.__creaturesPhaserStepTelemetryInstalled=!0;const t=me(),o=Ue(),r=T.Core.Events,i=T.Scenes.Events,a=n.scene,s=n.renderer,d=()=>{Object.assign(t,me())},l=()=>{o.scenes.clear()},p=u=>{const S=qe(u);let g=o.scenes.get(S);return g||(g={sceneKey:S,active:!!u.sys.settings.active,visible:!!u.sys.settings.visible,displayListChildren:0,globallyVisibleChildren:0,containerChildren:0,layerChildren:0,cameraCount:0,totalVisibleChildren:0,renderTreeNodeCount:0,renderTreeVisibleNodeCount:0,depthSortMs:0,cameraManagerRenderMs:0,totalFilterMs:0,totalCameraRenderMs:0,renderTotalMs:0,topLevelTypeCounts:[],renderTreeTypeCounts:[],largestRoots:[],cameras:[]},o.scenes.set(S,g)),g},c=()=>{const u=Array.from(o.scenes.values()).sort((m,v)=>v.renderTotalMs-m.renderTotalMs);let S=0,g=0,P=0,L=0,$=0,V=0,C=0,w=0;for(let m=0;m<u.length;m++){const v=u[m];S+=v.cameraCount,g+=v.displayListChildren,P+=v.globallyVisibleChildren,L+=v.containerChildren,$+=v.layerChildren,V+=v.totalVisibleChildren,C+=v.renderTreeNodeCount,w+=v.renderTreeVisibleNodeCount}return{frameCount:1,totalScenes:u.length,totalCameras:S,totalDisplayListChildren:g,totalGloballyVisibleChildren:P,totalContainerChildren:L,totalLayerChildren:$,totalVisibleChildren:V,totalRenderTreeNodes:C,totalRenderTreeVisibleNodes:w,scenes:u}},f=u=>{const S=u;if(S.__creaturesRenderTelemetryInstalled)return;S.__creaturesRenderTelemetryInstalled=!0;const g=u.sys,P=g.cameras,L=P,$=g.render.bind(g),V=L.render.bind(L);g.render=C=>{if(!q.isRenderDetailEnabled()){$(C);return}const w=p(u);w.active=!!g.settings.active,w.visible=!!g.settings.visible;const m=g.displayList,v=m.getChildren();w.displayListChildren=v.length;let O=0,D=0,I=0;for(let y=0;y<v.length;y++){const F=v[y];F.visible!==!1&&O++,F.type==="Container"&&D++,F.type==="Layer"&&I++}w.globallyVisibleChildren=O,w.containerChildren=D,w.layerChildren=I;const A=performance.now(),j=A;m.depthSort(),w.depthSortMs=performance.now()-j,g.events.emit(i.PRE_RENDER,C);const E=performance.now();L.render(C,m),w.cameraManagerRenderMs=performance.now()-E,g.events.emit(i.RENDER,C),w.renderTotalMs=performance.now()-A},L.render=(C,w)=>{if(!q.isRenderDetailEnabled()){V(C,w);return}const m=p(u);m.cameras=[],m.cameraCount=0,m.totalVisibleChildren=0,m.renderTreeNodeCount=0,m.renderTreeVisibleNodeCount=0,m.totalFilterMs=0,m.totalCameraRenderMs=0,m.topLevelTypeCounts=[],m.renderTreeTypeCounts=[],m.largestRoots=[];const v=w.getChildren(),O=P.cameras,D=new Set,I=new Map,A=new Map,j=[];for(let E=0;E<O.length;E++){const y=O[E];if(!y.visible||y.alpha<=0)continue;y.preRender();const F=performance.now(),G=P.getVisibleChildren(v,y),Ce=performance.now()-F,_e=performance.now();C.render(u,G,y);const Re=performance.now()-_e,Y={cameraId:Number(y.id??E),name:String(y.name??`camera_${E}`),visibleChildren:G.length,filterMs:+Ce.toFixed(3),renderMs:+Re.toFixed(3),alpha:+Number(y.alpha??1).toFixed(3),zoom:+Number(y.zoom??1).toFixed(3),width:+Number(y.width??0).toFixed(3),height:+Number(y.height??0).toFixed(3)};m.cameras.push(Y),m.cameraCount++,m.totalVisibleChildren+=G.length,m.totalFilterMs+=Y.filterMs,m.totalCameraRenderMs+=Y.renderMs;for(let Q=0;Q<G.length;Q++){const U=G[Q];if(D.has(U))continue;D.add(U),ne(I,oe(U));const H=fe(U,new Set);m.renderTreeNodeCount+=H.subtreeNodes,m.renderTreeVisibleNodeCount+=H.visibleSubtreeNodes,ge(A,H.typeCounts),j.push(je(U,H))}}m.topLevelTypeCounts=te(I),m.renderTreeTypeCounts=te(A),m.largestRoots=j.sort((E,y)=>y.subtreeNodes-E.subtreeNodes||y.visibleSubtreeNodes-E.visibleSubtreeNodes||E.type.localeCompare(y.type)).slice(0,$e)}},M=()=>{const u=a.scenes;for(let S=0;S<u.length;S++)f(u[S])},k=()=>{d(),l(),t.frameStartMs=performance.now()},Se=()=>{const u=performance.now();t.preStepEndMs=u,t.stepHooksStartMs=u},ve=()=>{t.postStepEndMs=performance.now()},we=()=>{if(t.frameStartMs<=0)return;const u=performance.now();q.recordPhaserStepFrame({preStep:R(t.frameStartMs,t.preStepEndMs),stepHooks:R(t.stepHooksStartMs,t.sceneUpdateStartMs||t.postStepEndMs||u),sceneUpdate:R(t.sceneUpdateStartMs,t.sceneUpdateEndMs),postStep:R(t.postStepEndMs,t.rendererPreRenderStartMs||t.sceneRenderStartMs||u),rendererPreRender:R(t.rendererPreRenderStartMs,t.rendererPreRenderEndMs),sceneRender:R(t.sceneRenderStartMs,t.sceneRenderEndMs),rendererPostRender:R(t.rendererPostRenderStartMs,t.rendererPostRenderEndMs),postRender:R(t.rendererPostRenderEndMs||t.sceneRenderEndMs||t.postStepEndMs,u),totalStep:R(t.frameStartMs,u)}),q.isRenderDetailEnabled()&&o.scenes.size>0&&q.recordRenderDetailFrame(c())},Me=a.update.bind(a);a.update=(u,S)=>{t.sceneUpdateStartMs=performance.now();try{Me(u,S)}finally{t.sceneUpdateEndMs=performance.now()}};const Ee=a.render.bind(a);if(a.render=u=>{M(),t.sceneRenderStartMs=performance.now();try{Ee(u)}finally{t.sceneRenderEndMs=performance.now()}},s){const u=s.preRender.bind(s);s.preRender=(...g)=>{t.rendererPreRenderStartMs=performance.now();try{u(...g)}finally{t.rendererPreRenderEndMs=performance.now()}};const S=s.postRender.bind(s);s.postRender=(...g)=>{t.rendererPostRenderStartMs=performance.now();try{S(...g)}finally{t.rendererPostRenderEndMs=performance.now()}}}M(),n.events.on(r.PRE_STEP,k),n.events.on(r.STEP,Se),n.events.on(r.POST_STEP,ve),n.events.on(r.POST_RENDER,we),n.events.once(r.READY,M),n.events.on(r.SYSTEM_READY,M)}Te.init();ke.init();Ge();window.CREATURES_CONFIG&&Pe(window.CREATURES_CONFIG);await Fe();const ye=()=>{const n=document.getElementById("loading-screen");n&&(n.classList.add("fade-out"),setTimeout(()=>{n.style.display="none"},850))},Ke=()=>{const n=document.getElementById("loading-screen");n&&(n.style.display="",n.classList.remove("fade-out"))};h.on("game:loading:show",Ke);h.on("game:scene:ready",ye);const We={type:T.AUTO,width:x,height:z,parent:"game-container",backgroundColor:"#0a0b10",scene:[De,Ne],pixelArt:!0,render:{powerPreference:"high-performance"},fps:{target:30,forceSetTimeOut:!1},scale:{mode:T.Scale.FIT,autoCenter:T.Scale.CENTER_BOTH},input:{mouse:{preventDefaultWheel:!0}},callbacks:{postBoot:()=>{setTimeout(ye,600)}}},J=new T.Game(We);He(J);const Xe=new Ie({serverUrl:window.FOLKFORK_SERVER_URL??"http://localhost:3001"});new Ae({game:J});h.on("save:loaded",n=>{const e=n;e?.playerId&&typeof e.playerId=="string"&&Xe.setPlayer(e.playerId,typeof e.playerName=="string"?e.playerName:void 0)});function _(n,e=4e3){const t=document.getElementById("lore-toast");t&&(t.textContent=n,t.classList.add("visible"),setTimeout(()=>t.classList.remove("visible"),e))}h.on("norn:graduated",(n,e,t)=>{_(`${n.name}'s mind has expanded`)});h.on("rune:discovered",(n,e)=>{_(`${e.name} found ancient markings...`)});h.on("lore:first_question",n=>{_("The ground hums in answer...",5e3)});h.on("lore:first_naming",n=>{_("A word takes root in the world",5e3)});h.on("lore:first_teaching",n=>{_("Knowledge passes between minds",5e3)});h.on("lore:first_dream",n=>{_("Something old stirs in the deep...",6e3)});h.on("lore:collective_resonance",()=>{_("The boundaries thin. They feel each other thinking.",7e3)});h.on("norn:hatched",n=>{_(`A new life: ${n.name} has hatched (gen ${n.generation})`,5e3)});h.on("norn:eggLaid",n=>{_(`${n.name} laid an egg`,3e3)});h.on("invention:created",(n,e,t)=>{const o=t.length>1?` from ${t.slice(0,2).join(" + ")}`:t.length===1?` from ${t[0]}`:"";_(`${n.name} invented "${e.name}"${o}`,5e3)});h.on("invention:compound_discovered",(n,e,t,o)=>{Ye(n.name,e.name,t.name,o.name)});function Ye(n,e,t,o){const r=document.createElement("div");r.className="compound-discovery",r.innerHTML=`
    <div class="compound-discovery__inner">
      <div class="compound-discovery__label">COMPOUND DISCOVERY</div>
      <div class="compound-discovery__name">${e}</div>
      <div class="compound-discovery__detail">${n} combined <em>${t}</em> + <em>${o}</em></div>
      <div class="compound-discovery__sub">Something new has emerged in the world</div>
    </div>
  `,document.body.appendChild(r),requestAnimationFrame(()=>r.classList.add("compound-discovery--visible")),setTimeout(()=>{r.classList.remove("compound-discovery--visible"),setTimeout(()=>r.remove(),700)},5e3)}J.events.on("contextlost",()=>{const n=document.getElementById("loading-screen");if(n){n.classList.remove("fade-out");const e=n.querySelector(".loading-sub");e&&(e.textContent="The substrate collapsed — please refresh to re-enter")}});let re=!1;h.on("game:scene:error",()=>{re=!0});h.on("game:loading:show",()=>{re=!1});const xe=()=>{J.scene.isActive("GameScene")&&h.emit("game:scene:error")};window.addEventListener("error",xe);window.addEventListener("unhandledrejection",xe);h.on("game:scene:shutdown",()=>{if(!re)return;const n=document.getElementById("loading-screen");if(n){n.classList.remove("fade-out");const e=n.querySelector(".loading-sub");e&&(e.textContent="The substrate collapsed — please refresh to re-enter")}});window.__precursors={game:J,eventBus:h};export{it as R,at as i};
