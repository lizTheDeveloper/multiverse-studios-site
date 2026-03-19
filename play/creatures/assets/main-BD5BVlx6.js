const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GameScene-Bub4jPRO.js","assets/vendor-phaser-CaWnzXme.js","assets/Logger-oU1klXnQ.js","assets/WorldGenerator-BLM7oXUr.js","assets/LifeStage-069__A6x.js","assets/SpriteState-tqplp9c6.js","assets/WaveUnlockSystem-WH04QSoM.js","assets/LanguageSystem-DET7RvPI.js","assets/InventionRegistry-BTiZnWcj.js","assets/World-CzrlGlMt.js","assets/PerfTelemetry-DKmuLckd.js","assets/ChemicalSet-Dj17Rb78.js","assets/UIScene-BPG1uxF2.js","assets/SimulationScheduler-DZrfbKS7.js","assets/BiochemistrySystem-CjH6qPl8.js","assets/KeyboardControls-BI-eWDS4.js"])))=>i.map(i=>d[i]);
import"./LifeStage-069__A6x.js";import{P as N}from"./vendor-phaser-CaWnzXme.js";import{s as z,P as q,C as ke,A as Ne}from"./PerfTelemetry-DKmuLckd.js";import{G as x,a as O,e as h,C as Le,S as Pe,b as ze}from"./Logger-oU1klXnQ.js";import{N as k,U as Be}from"./UIScene-BPG1uxF2.js";import"./ChemicalSet-Dj17Rb78.js";import"./InventionRegistry-BTiZnWcj.js";import"./LanguageSystem-DET7RvPI.js";const Oe="modulepreload",Ie=function(s){return"/play/creatures/"+s},ae={},De=function(e,t,o){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=i?.nonce||i?.getAttribute("nonce");r=Promise.allSettled(t.map(d=>{if(d=Ie(d),d in ae)return;ae[d]=!0;const l=d.endsWith(".css"),p=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":Oe,l||(c.as="script"),c.crossOrigin="",c.href=d,a&&c.setAttribute("nonce",a),document.head.appendChild(c),l)return new Promise((g,M)=>{c.addEventListener("load",g),c.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${d}`)))})}))}function n(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return r.then(i=>{for(const a of i||[])a.status==="rejected"&&n(a.reason);return e().catch(n)})},ie=658192,le=1184799,ee=4016762,B="#70758f",de="#c8ccdd",ce="#e8ecf8",pe="#7b8ed4",f=72,W=10,te=8,X=4;function me(s){const e=Math.floor(s/3600),t=Math.floor(s%3600/60);return e>0?`${e}h ${t}m`:`${t}m`}class Ae extends N.Scene{deleteConfirmSlot=null;_enterKeyHandler=null;_scrollOffset=0;constructor(){super({key:"MenuScene"})}create(){const e=document.getElementById("loading-screen");e&&e.classList.add("fade-out"),this._drawBackground(),this._drawTitle(),this._drawSlots(),this._drawNewGameButton(),this._bindEnterKey()}_drawBackground(){this.add.rectangle(x/2,O/2,x,O,ie);const e=this.add.graphics(),t=new N.Math.RandomDataGenerator(["creatures_menu"]);for(let i=0;i<280;i++){const a=t.between(0,x),d=t.between(0,O),l=t.frac()<.15?1.5:.8,p=.2+t.frac()*.6;e.fillStyle(16777215,p),e.fillCircle(a,d,l)}const o=this.add.graphics(),r=x,n=O;for(let i=0;i<12;i++){const a=i/12,d=a*.55,l=(1-a)*Math.min(r,n)*.55;o.fillStyle(ie,d),o.fillRect(-l/2+r/2-r/2,-l/2+n/2-n/2,r+l,l/2),o.fillRect(-l/2+r/2-r/2,n-l/4,r+l,l/2)}}_drawTitle(){this.add.text(x/2,72,"PRECURSORS",{fontSize:"52px",fontFamily:"JetBrains Mono, Menlo, monospace",color:ce,stroke:"#0a0b10",strokeThickness:6,letterSpacing:8}).setOrigin(.5,.5),this.add.text(x/2,113,"Origins of Folklore",{fontSize:"17px",fontFamily:"Cormorant Garamond, Garamond, serif",fontStyle:"italic",color:"#b4b8ce",letterSpacing:3}).setOrigin(.5,.5),this.add.text(x/2,139,"a living world of evolving minds",{fontSize:"12px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#7a7f98",letterSpacing:2}).setOrigin(.5,.5);const e=this.add.graphics();e.lineStyle(1,5925530,.6),e.lineBetween(x/2-240,160,x/2+240,160)}_drawSlots(){const e=z.listSlots(),t=e.includes("autosave");let o=180;if(t){const i=z.getSlotMeta("autosave");this._drawContinueButton(o,i),o+=f+W+32;const a=this.add.graphics();a.lineStyle(1,2764098,.7),a.lineBetween(x/2-240,o-18,x/2+240,o-18)}const r=e.filter(i=>i!=="autosave").slice(0,te),n=r.length>0?`SAVES  (${r.length}/${te})`:"SAVES";if(this.add.text(x/2-240,o,n,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:B,letterSpacing:4}).setOrigin(0,.5),o+=20,r.length===0)this.add.text(x/2,o+30,"No saved games",{fontSize:"13px",fontFamily:"JetBrains Mono, Menlo, monospace",color:B}).setOrigin(.5,.5),o+=70;else{const i=r.slice(this._scrollOffset,this._scrollOffset+X),a=this._scrollOffset>0,d=this._scrollOffset+X<r.length;a&&this._drawScrollArrow(o-14,!0,r.length);for(const l of i)this._drawSlotRow(o,l),o+=f+W;d&&this._drawScrollArrow(o-4,!1,r.length)}}_drawScrollArrow(e,t,o){const r=x/2,n=t?"▲  more saves above":"▼  more saves below",i=this.add.text(r,e,n,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:pe}).setOrigin(.5,.5).setInteractive({cursor:"pointer"});i.on("pointerup",()=>{this._scrollOffset+=t?-1:1,this.scene.restart()}),i.on("pointerover",()=>i.setColor(ce)),i.on("pointerout",()=>i.setColor(pe))}_drawContinueButton(e,t){const o=x/2,r=480,n=this.add.graphics();if(n.fillStyle(1712192,1),n.fillRoundedRect(o-r/2,e,r,f,6),n.lineStyle(1,4876980,.8),n.strokeRoundedRect(o-r/2,e,r,f,6),this.add.text(o-r/2+18,e+18,"▶  CONTINUE",{fontSize:"16px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#9ab4f4",letterSpacing:2}),t){const d=[`autosave  ·  ${new Date(t.timestamp).toLocaleString()}`];t.nornCount>0&&d.push(`${t.nornCount} norns`),t.maxGeneration>0&&d.push(`gen ${t.maxGeneration}`),t.playtime>0&&d.push(me(t.playtime)),this.add.text(o-r/2+18,e+44,d.join("  ·  "),{fontSize:"11px",fontFamily:"JetBrains Mono, Menlo, monospace",color:B})}const i=this.add.zone(o,e+f/2,r,f+16).setInteractive({cursor:"pointer"});i.on("pointerover",()=>{n.clear(),n.fillStyle(1976400,1),n.fillRoundedRect(o-r/2,e,r,f,6),n.lineStyle(1,6982356,1),n.strokeRoundedRect(o-r/2,e,r,f,6)}),i.on("pointerout",()=>{n.clear(),n.fillStyle(1712192,1),n.fillRoundedRect(o-r/2,e,r,f,6),n.lineStyle(1,4876980,.8),n.strokeRoundedRect(o-r/2,e,r,f,6)}),i.on("pointerup",()=>this._startGame("autosave"))}_drawSlotRow(e,t){const o=x/2,r=480,n=70,i=8,a=z.getSlotMeta(t),d=a?new Date(a.timestamp).toLocaleString():"Unknown",l=t.replace(/^imported_/,"").replace(/_/g," "),p=[d];a&&a.nornCount>0&&p.push(`${a.nornCount} norns`),a&&a.maxGeneration>0&&p.push(`gen ${a.maxGeneration}`),a&&a.playtime>0&&p.push(me(a.playtime));const c=this.add.graphics();c.fillStyle(le,1),c.fillRoundedRect(o-r/2,e,r-n*2-i*3,f,4),c.lineStyle(1,ee,.4),c.strokeRoundedRect(o-r/2,e,r-n*2-i*3,f,4),this.add.text(o-r/2+14,e+16,l,{fontSize:"13px",fontFamily:"JetBrains Mono, Menlo, monospace",color:de}),this.add.text(o-r/2+14,e+40,p.join("  ·  "),{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:B});const g=o+r/2-n*2-i*2;this._drawSmallButton(g,e,n,f,"LOAD",1716264,3833952,()=>{this._startGame(t)});const M=o+r/2-n-i;this._drawDeleteButton(M,e,n,f,t);const R=this.add.zone(o-n-i,e+f/2,r-n*2-i*3,f).setInteractive({cursor:"pointer"});R.on("pointerover",()=>{c.clear(),c.fillStyle(1579562,1),c.fillRoundedRect(o-r/2,e,r-n*2-i*3,f,4),c.lineStyle(1,ee,.7),c.strokeRoundedRect(o-r/2,e,r-n*2-i*3,f,4)}),R.on("pointerout",()=>{c.clear(),c.fillStyle(le,1),c.fillRoundedRect(o-r/2,e,r-n*2-i*3,f,4),c.lineStyle(1,ee,.4),c.strokeRoundedRect(o-r/2,e,r-n*2-i*3,f,4)}),R.on("pointerup",()=>this._startGame(t))}_drawSmallButton(e,t,o,r,n,i,a,d){const l=this.add.graphics(),p=g=>{l.clear(),l.fillStyle(g?i+1052688:i,1),l.fillRoundedRect(e,t+8,o,r-16,4),l.lineStyle(1,a,g?1:.7),l.strokeRoundedRect(e,t+8,o,r-16,4)};p(!1),this.add.text(e+o/2,t+r/2,n,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:de,letterSpacing:1}).setOrigin(.5,.5);const c=this.add.zone(e+o/2,t+r/2,o,r-16).setInteractive({cursor:"pointer"});c.on("pointerover",()=>p(!0)),c.on("pointerout",()=>p(!1)),c.on("pointerup",d)}_drawDeleteButton(e,t,o,r,n){let i=!1;const a=this.add.graphics(),d=this.add.text(e+o/2,t+r/2,"DEL",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#8b6060",letterSpacing:1}).setOrigin(.5,.5),l=(c,g)=>{a.clear();const M=g?8075834:3807770,R=g?11554896:6959152;a.fillStyle(c?M+1052688:M,1),a.fillRoundedRect(e,t+8,o,r-16,4),a.lineStyle(1,R,c?1:.7),a.strokeRoundedRect(e,t+8,o,r-16,4),d.setText(g?"SURE?":"DEL"),d.setColor(g?"#e07070":"#8b6060")};l(!1,!1);const p=this.add.zone(e+o/2,t+r/2,o,r-16).setInteractive({cursor:"pointer"});p.on("pointerover",()=>l(!0,i)),p.on("pointerout",()=>l(!1,i)),p.on("pointerup",()=>{i?(z.deleteSlot(n),this.scene.restart()):(i=!0,l(!1,!0),this.time.delayedCall(2e3,()=>{i=!1,l(!1,!1)}))})}_drawNewGameButton(){const e=z.listSlots(),t=e.includes("autosave"),o=e.filter(g=>g!=="autosave").slice(0,te),r=Math.min(o.length,X);let n=180;t&&(n+=f+W+32),n+=20,o.length===0?n+=70:(n+=r*(f+W),o.length>X&&(n+=20)),n+=28;const i=x/2,a=480,d=68,l=this.add.graphics(),p=g=>{l.clear(),l.fillStyle(g?1714208:1318424,1),l.fillRoundedRect(i-a/2,n,a,d,6),l.lineStyle(1,g?7381088:4878400,g?1:.9),l.strokeRoundedRect(i-a/2,n,a,d,6)};p(!1),this.add.text(i,n+d/2-8,"NEW GAME",{fontSize:"16px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#a0c890",letterSpacing:4}).setOrigin(.5,.5),this.add.text(i,n+d/2+12,"begin a new world",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:B,letterSpacing:1}).setOrigin(.5,.5);const c=this.add.zone(i,n+d/2,a,d+24).setInteractive({cursor:"pointer"});c.on("pointerover",()=>p(!0)),c.on("pointerout",()=>p(!1)),c.on("pointerup",()=>this._startGame(void 0)),this.add.text(i,O-24,"enter ↵ new game  ·  F5 quick-save  ·  F9 quick-load  ·  ` dev panel",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:B,letterSpacing:1}).setOrigin(.5,.5)}_bindEnterKey(){this._enterKeyHandler=e=>{if(!this.sys.isActive()||this.sys.game.scene.isActive("GameScene")){document.removeEventListener("keydown",this._enterKeyHandler),this._enterKeyHandler=null;return}if(e.key==="Enter"||e.key==="Return"){const t=e.target?.tagName;if(t==="INPUT"||t==="TEXTAREA")return;const r=z.listSlots().includes("autosave")?"autosave":void 0;this._startGame(r)}},document.addEventListener("keydown",this._enterKeyHandler),this.events.once("shutdown",()=>{this._enterKeyHandler&&(document.removeEventListener("keydown",this._enterKeyHandler),this._enterKeyHandler=null),this.children.removeAll(!0)})}_startGame(e){h.emit("game:loading:show");const t=()=>{e?this.scene.start("GameScene",{loadSlot:e}):this.scene.start("GameScene")};this.sys.game.scene.getScene("GameScene")?t():De(async()=>{const{GameScene:o}=await import("./GameScene-Bub4jPRO.js");return{GameScene:o}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(({GameScene:o})=>{this.sys.game.scene.add("GameScene",o),t()})}}class Fe{static init(){const e=new Map,t=new Set,o=new Set,r=new Set;h.on("norn:added",n=>{e.set(n.id,n)}),h.on("norn:removed",n=>{k.flush(n.id,n.name,String(n.species)),e.delete(n.id),t.delete(n.id),o.delete(n.id),r.delete(n.id)}),h.on("norn:graduated",(n,i,a)=>{k.append(n.id,{type:"iq_graduation",timestamp:Date.now(),data:{oldTier:i,newTier:a,iq:n.iq}})}),h.on("norn:speech",(n,i)=>{!t.has(n.id)&&n.knownWords.size>=1&&(k.append(n.id,{type:"first_word",timestamp:Date.now(),data:{wordCount:n.knownWords.size}}),t.add(n.id))}),h.on("norn:mating",(n,i)=>{const a=Date.now();o.has(n.id)||(k.append(n.id,{type:"first_breeding",timestamp:a,data:{partnerId:i.id,partnerName:i.name}}),o.add(n.id)),o.has(i.id)||(k.append(i.id,{type:"first_breeding",timestamp:a,data:{partnerId:n.id,partnerName:n.name}}),o.add(i.id))}),h.on("social:interaction",(n,i,a,d)=>{Math.abs(d)>=.2&&k.append(n.id,{type:"social_interaction",timestamp:Date.now(),data:{targetId:i.id,targetName:i.name,interactionType:a,trustDelta:d}})}),h.on("norn:dream",(n,i,a,d)=>{k.append(n.id,{type:"dream",timestamp:Date.now(),data:{episodesReplayed:i,iqBoost:a,dreamContent:d}})}),setInterval(()=>{for(const[n,i]of e){const a=i.chemicals.get(Le.Injury);a>.8&&!r.has(n)?(k.append(n,{type:"near_death",timestamp:Date.now(),data:{injury:a}}),r.add(n)):a<.4&&r.has(n)&&r.delete(n)}},5e3)}}class Ge{serverUrl;playerId;playerDisplayName;triggerEl;modalEl;modalOpen=!1;constructor(e={}){this.serverUrl=e.serverUrl??"http://localhost:3001",this.playerId=e.playerId??"anonymous",this.playerDisplayName=e.playerDisplayName,this.triggerEl=this._buildTrigger(),this.modalEl=this._buildModal(),document.body.appendChild(this.triggerEl),document.body.appendChild(this.modalEl)}setPlayer(e,t){this.playerId=e,this.playerDisplayName=t}destroy(){this.triggerEl.remove(),this.modalEl.remove()}_buildTrigger(){const e=document.createElement("button");return e.id="folkfork-trigger",e.title="Share lore feedback",e.textContent="◈",e.style.cssText=`
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
    `,t.querySelector("#ff-cancel").addEventListener("click",()=>this._closeModal()),t.querySelector("#ff-submit").addEventListener("click",()=>this._submitFeedback(t)),e.addEventListener("click",o=>{o.target===e&&this._closeModal()}),e.appendChild(t),e}_toggleModal(){this.modalOpen?this._closeModal():this._openModal()}_openModal(){this.modalOpen=!0,this.modalEl.style.display="flex"}_closeModal(){this.modalOpen=!1,this.modalEl.style.display="none",this._resetForm()}_resetForm(){const e=o=>this.modalEl.querySelector(o);e("#ff-suggestion").value="",e("#ff-subject").value="",e("#ff-rationale").value="",e("#ff-type").value="general";const t=e("#ff-status");t.style.display="none",t.textContent=""}async _submitFeedback(e){const t=l=>e.querySelector(l),o=t("#ff-suggestion").value.trim(),r=t("#ff-subject").value.trim(),n=t("#ff-rationale").value.trim(),i=t("#ff-type").value,a=t("#ff-status"),d=t("#ff-submit");if(!o){a.style.color="#f38ba8",a.textContent="Please describe your suggestion.",a.style.display="block";return}d.disabled=!0,d.textContent="Sending…";try{const l=await fetch(`${this.serverUrl}/api/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:i,subject:r||void 0,suggestedChange:o,rationale:n||void 0,playerId:this.playerId,playerDisplayName:this.playerDisplayName,metadata:{gameVersion:typeof __APP_VERSION__<"u"?__APP_VERSION__:"unknown"}})});if(l.ok)a.style.color="rgba(61,252,224,0.8)",a.textContent="✓ Feedback received — thank you.",a.style.display="block",setTimeout(()=>this._closeModal(),2e3);else throw new Error(`Server error ${l.status}`)}catch(l){console.error("[FeedbackButton] submit error:",l),a.style.color="rgba(240,112,64,0.9)",a.textContent="Could not send feedback. Please try again.",a.style.display="block",d.disabled=!1,d.textContent="SEND"}}}class Ue{apiUrl;game;triggerEl;modalEl;modalOpen=!1;screenshotData=null;playerId=null;playerDisplayName=null;constructor(e={}){this.apiUrl=e.apiUrl??"https://feedback.multiversestudios.xyz/submit",this.game=e.game??null,this.triggerEl=this._buildTrigger(),this.modalEl=this._buildModal(),document.body.appendChild(this.triggerEl),document.body.appendChild(this.modalEl)}setGame(e){this.game=e}setPlayer(e,t){this.playerId=e,this.playerDisplayName=t??null}destroy(){this.triggerEl.remove(),this.modalEl.remove()}_buildTrigger(){const e=document.createElement("button");return e.id="bugreport-trigger",e.title="report a substrate anomaly",e.textContent="anomaly?",e.style.cssText=`
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
    `,t.querySelector("#br-cancel").addEventListener("click",()=>this._closeModal()),t.querySelector("#br-submit").addEventListener("click",()=>this._submit(t)),t.querySelector("#br-screenshot-btn").addEventListener("click",()=>this._captureScreenshot(t)),t.querySelector("#br-screenshot-remove").addEventListener("click",()=>this._removeScreenshot(t)),e.addEventListener("click",o=>{o.target===e&&this._closeModal()}),e.addEventListener("keydown",o=>{o.key==="Escape"&&(o.stopPropagation(),this._closeModal())}),t.querySelectorAll("input, textarea, select").forEach(o=>{o.addEventListener("keydown",r=>r.stopPropagation())}),e.appendChild(t),e}_toggleModal(){this.modalOpen?this._closeModal():this._openModal()}_openModal(){if(this.modalOpen=!0,this.modalEl.style.display="flex",this.modalEl.setAttribute("data-escape-overlay",""),this.playerDisplayName||this.playerId){const e=this.modalEl.querySelector("#br-contact");e&&!e.value&&(e.value=this.playerDisplayName??this.playerId??"")}}_closeModal(){this.modalOpen=!1,this.modalEl.style.display="none",this.modalEl.removeAttribute("data-escape-overlay"),this._resetForm()}_resetForm(){const e=o=>this.modalEl.querySelector(o);e("#br-title").value="",e("#br-description").value="",e("#br-contact").value="",e("#br-severity").value="minor",this._removeScreenshot(this.modalEl);const t=e("#br-status");t.style.display="none",t.textContent=""}_captureScreenshot(e){this.modalEl.style.display="none",requestAnimationFrame(()=>{const t=document.querySelector("canvas");if(!t){this.modalEl.style.display="flex";const o=e.querySelector("#br-screenshot-status");o.textContent="No canvas found",o.style.color="rgba(240,112,64,0.8)";return}try{this.screenshotData=t.toDataURL("image/png");const o=e.querySelector("#br-screenshot-preview"),r=e.querySelector("#br-screenshot-img"),n=e.querySelector("#br-screenshot-status");r.src=this.screenshotData,o.style.display="block",n.textContent="Screenshot captured",n.style.color="rgba(61,252,224,0.7)"}catch{const r=e.querySelector("#br-screenshot-status");r.textContent="Could not capture screenshot",r.style.color="rgba(240,112,64,0.8)"}this.modalEl.style.display="flex"})}_removeScreenshot(e){this.screenshotData=null;const t=e.querySelector("#br-screenshot-preview"),o=e.querySelector("#br-screenshot-status");t&&(t.style.display="none"),o&&(o.textContent="",o.style.color="rgba(216,220,232,0.25)")}async _submit(e){const t=p=>e.querySelector(p),o=t("#br-title").value.trim(),r=t("#br-description").value.trim(),n=t("#br-contact").value.trim(),i=t("#br-severity").value,a=t("#br-status"),d=t("#br-submit");if(!o||o.length<3){a.style.color="rgba(240,112,64,0.9)",a.textContent="Please provide a title (at least 3 characters).",a.style.display="block";return}if(!r||r.length<10){a.style.color="rgba(240,112,64,0.9)",a.textContent="Please describe what happened (at least 10 characters).",a.style.display="block";return}d.disabled=!0,d.textContent="SUBMITTING...";const l={type:"bug_report",game:"creatures_next",title:o,description:r,severity:i,browser:navigator.userAgent};n&&(l.contact=n),this.playerId&&(l.playerId=this.playerId),this.screenshotData&&(l.screenshot=this.screenshotData);try{const p=await fetch(this.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(p.ok){const g=(await p.json().catch(()=>({}))).credits;if(a.style.color="rgba(61,252,224,0.8)",g){const M=`$${(g.awarded/100).toFixed(2)}`,R=`$${(g.balance/100).toFixed(2)}`;a.textContent=`Thanks! You've earned ${M} in credits. Balance: ${R}`}else a.textContent="Thanks for your report!";a.style.display="block",setTimeout(()=>this._closeModal(),3e3)}else{const c=await p.json().catch(()=>({}));throw new Error(c.error||`Server error ${p.status}`)}}catch(p){console.error("[BugReportOverlay] submit error:",p),a.style.color="rgba(240,112,64,0.9)",a.textContent="Could not submit. Please try again.",a.style.display="block"}finally{d.disabled=!1,d.textContent="SUBMIT"}}}Object.fromEntries(Object.entries(Pe).filter(([,s])=>typeof s=="number").map(([s,e])=>[s.toLowerCase(),e]));async function $e(){}let Y=!1,ue=!1;function qe(){if(ue)return;ue=!0;const s=new URLSearchParams(window.location.search);(s.get("perf_mode")==="1"||s.get("perf_mode")==="true"||s.get("benchmark")==="1"||s.get("benchmark")==="true")&&(Y=!0),window.CREATURES_CONFIG?.PERF_MODE&&(Y=!0),Y&&console.log("[PerfMode] ACTIVE — LLM cognition stubbed, network calls suppressed")}function ct(){return Y}class pt{timestamps=[];maxPerWindow;windowMs;constructor(e=100,t=6e4){this.maxPerWindow=e,this.windowMs=t}tryAcquire(){const e=performance.now();for(;this.timestamps.length>0&&e-this.timestamps[0]>this.windowMs;)this.timestamps.shift();return this.timestamps.length>=this.maxPerWindow?!1:(this.timestamps.push(e),!0)}get currentCount(){const e=performance.now();for(;this.timestamps.length>0&&e-this.timestamps[0]>this.windowMs;)this.timestamps.shift();return this.timestamps.length}}const he=()=>({frameStartMs:0,preStepEndMs:0,stepHooksStartMs:0,sceneUpdateStartMs:0,sceneUpdateEndMs:0,postStepEndMs:0,rendererPreRenderStartMs:0,rendererPreRenderEndMs:0,sceneRenderStartMs:0,sceneRenderEndMs:0,rendererPostRenderStartMs:0,rendererPostRenderEndMs:0}),Je=()=>({scenes:new Map}),T=(s,e)=>s>0&&e>0&&e>=s?e-s:0,Ve=s=>s.sys.settings.key||s.scene.key||s.constructor.name,je=12,He=10,ne=s=>s.type||s.constructor?.name||"Unknown",ge=s=>{const e=s;return Array.isArray(e.list)?e.list:[]},re=(s,e,t=1)=>{s.set(e,(s.get(e)??0)+t)},fe=(s,e)=>{for(const[t,o]of e)re(s,t,o)},oe=(s,e=je)=>Array.from(s.entries()).sort((t,o)=>o[1]-t[1]||t[0].localeCompare(o[0])).slice(0,e).map(([t,o])=>({type:t,count:o})),be=s=>s.visible!==!1,ye=(s,e,t=0)=>{if(e.has(s))return{subtreeNodes:0,visibleSubtreeNodes:0,maxDepth:t,typeCounts:new Map};e.add(s);const o=new Map;re(o,ne(s));let r=1,n=be(s)?1:0,i=t;const a=ge(s);for(let d=0;d<a.length;d++){const l=ye(a[d],e,t+1);r+=l.subtreeNodes,n+=l.visibleSubtreeNodes,i=Math.max(i,l.maxDepth),fe(o,l.typeCounts)}return{subtreeNodes:r,visibleSubtreeNodes:n,maxDepth:i,typeCounts:o}},Ke=s=>{const e=s.texture?.key;return typeof e=="string"&&e.length>0?e:null},We=(s,e)=>{const t=s;return{type:ne(s),name:t.name||"",textureKey:Ke(s),directChildren:ge(s).length,subtreeNodes:e.subtreeNodes,visibleSubtreeNodes:e.visibleSubtreeNodes,depth:+Number(t.depth??0).toFixed(3),alpha:+Number(t.alpha??1).toFixed(3),visible:be(s),childTypeCounts:oe(e.typeCounts)}};function Xe(s){const e=s;if(e.__creaturesPhaserStepTelemetryInstalled)return;e.__creaturesPhaserStepTelemetryInstalled=!0;const t=he(),o=Je(),r=N.Core.Events,n=N.Scenes.Events,i=s.scene,a=s.renderer,d=()=>{Object.assign(t,he())},l=()=>{o.scenes.clear()},p=m=>{const S=Ve(m);let b=o.scenes.get(S);return b||(b={sceneKey:S,active:!!m.sys.settings.active,visible:!!m.sys.settings.visible,displayListChildren:0,globallyVisibleChildren:0,containerChildren:0,layerChildren:0,cameraCount:0,totalVisibleChildren:0,renderTreeNodeCount:0,renderTreeVisibleNodeCount:0,depthSortMs:0,cameraManagerRenderMs:0,totalFilterMs:0,totalCameraRenderMs:0,renderTotalMs:0,topLevelTypeCounts:[],renderTreeTypeCounts:[],largestRoots:[],cameras:[]},o.scenes.set(S,b)),b},c=()=>{const m=Array.from(o.scenes.values()).sort((u,v)=>v.renderTotalMs-u.renderTotalMs);let S=0,b=0,P=0,L=0,V=0,j=0,C=0,w=0;for(let u=0;u<m.length;u++){const v=m[u];S+=v.cameraCount,b+=v.displayListChildren,P+=v.globallyVisibleChildren,L+=v.containerChildren,V+=v.layerChildren,j+=v.totalVisibleChildren,C+=v.renderTreeNodeCount,w+=v.renderTreeVisibleNodeCount}return{frameCount:1,totalScenes:m.length,totalCameras:S,totalDisplayListChildren:b,totalGloballyVisibleChildren:P,totalContainerChildren:L,totalLayerChildren:V,totalVisibleChildren:j,totalRenderTreeNodes:C,totalRenderTreeVisibleNodes:w,scenes:m}},g=m=>{const S=m;if(S.__creaturesRenderTelemetryInstalled)return;S.__creaturesRenderTelemetryInstalled=!0;const b=m.sys,P=b.cameras,L=P,V=b.render.bind(b),j=L.render.bind(L);b.render=C=>{if(!q.isRenderDetailEnabled()){V(C);return}const w=p(m);w.active=!!b.settings.active,w.visible=!!b.settings.visible;const u=b.displayList,v=u.getChildren();w.displayListChildren=v.length;let I=0,D=0,A=0;for(let y=0;y<v.length;y++){const G=v[y];G.visible!==!1&&I++,G.type==="Container"&&D++,G.type==="Layer"&&A++}w.globallyVisibleChildren=I,w.containerChildren=D,w.layerChildren=A;const F=performance.now(),H=F;u.depthSort(),w.depthSortMs=performance.now()-H,b.events.emit(n.PRE_RENDER,C);const E=performance.now();L.render(C,u),w.cameraManagerRenderMs=performance.now()-E,b.events.emit(n.RENDER,C),w.renderTotalMs=performance.now()-F},L.render=(C,w)=>{if(!q.isRenderDetailEnabled()){j(C,w);return}const u=p(m);u.cameras=[],u.cameraCount=0,u.totalVisibleChildren=0,u.renderTreeNodeCount=0,u.renderTreeVisibleNodeCount=0,u.totalFilterMs=0,u.totalCameraRenderMs=0,u.topLevelTypeCounts=[],u.renderTreeTypeCounts=[],u.largestRoots=[];const v=w.getChildren(),I=P.cameras,D=new Set,A=new Map,F=new Map,H=[];for(let E=0;E<I.length;E++){const y=I[E];if(!y.visible||y.alpha<=0)continue;y.preRender();const G=performance.now(),U=P.getVisibleChildren(v,y),Ce=performance.now()-G,Re=performance.now();C.render(m,U,y);const Te=performance.now()-Re,Q={cameraId:Number(y.id??E),name:String(y.name??`camera_${E}`),visibleChildren:U.length,filterMs:+Ce.toFixed(3),renderMs:+Te.toFixed(3),alpha:+Number(y.alpha??1).toFixed(3),zoom:+Number(y.zoom??1).toFixed(3),width:+Number(y.width??0).toFixed(3),height:+Number(y.height??0).toFixed(3)};u.cameras.push(Q),u.cameraCount++,u.totalVisibleChildren+=U.length,u.totalFilterMs+=Q.filterMs,u.totalCameraRenderMs+=Q.renderMs;for(let Z=0;Z<U.length;Z++){const $=U[Z];if(D.has($))continue;D.add($),re(A,ne($));const K=ye($,new Set);u.renderTreeNodeCount+=K.subtreeNodes,u.renderTreeVisibleNodeCount+=K.visibleSubtreeNodes,fe(F,K.typeCounts),H.push(We($,K))}}u.topLevelTypeCounts=oe(A),u.renderTreeTypeCounts=oe(F),u.largestRoots=H.sort((E,y)=>y.subtreeNodes-E.subtreeNodes||y.visibleSubtreeNodes-E.visibleSubtreeNodes||E.type.localeCompare(y.type)).slice(0,He)}},M=()=>{const m=i.scenes;for(let S=0;S<m.length;S++)g(m[S])},R=()=>{d(),l(),t.frameStartMs=performance.now()},ve=()=>{const m=performance.now();t.preStepEndMs=m,t.stepHooksStartMs=m},we=()=>{t.postStepEndMs=performance.now()},Me=()=>{if(t.frameStartMs<=0)return;const m=performance.now();q.recordPhaserStepFrame({preStep:T(t.frameStartMs,t.preStepEndMs),stepHooks:T(t.stepHooksStartMs,t.sceneUpdateStartMs||t.postStepEndMs||m),sceneUpdate:T(t.sceneUpdateStartMs,t.sceneUpdateEndMs),postStep:T(t.postStepEndMs,t.rendererPreRenderStartMs||t.sceneRenderStartMs||m),rendererPreRender:T(t.rendererPreRenderStartMs,t.rendererPreRenderEndMs),sceneRender:T(t.sceneRenderStartMs,t.sceneRenderEndMs),rendererPostRender:T(t.rendererPostRenderStartMs,t.rendererPostRenderEndMs),postRender:T(t.rendererPostRenderEndMs||t.sceneRenderEndMs||t.postStepEndMs,m),totalStep:T(t.frameStartMs,m)}),q.isRenderDetailEnabled()&&o.scenes.size>0&&q.recordRenderDetailFrame(c())},Ee=i.update.bind(i);i.update=(m,S)=>{t.sceneUpdateStartMs=performance.now();try{Ee(m,S)}finally{t.sceneUpdateEndMs=performance.now()}};const _e=i.render.bind(i);if(i.render=m=>{M(),t.sceneRenderStartMs=performance.now();try{_e(m)}finally{t.sceneRenderEndMs=performance.now()}},a){const m=a.preRender.bind(a);a.preRender=(...b)=>{t.rendererPreRenderStartMs=performance.now();try{m(...b)}finally{t.rendererPreRenderEndMs=performance.now()}};const S=a.postRender.bind(a);a.postRender=(...b)=>{t.rendererPostRenderStartMs=performance.now();try{S(...b)}finally{t.rendererPostRenderEndMs=performance.now()}}}M(),s.events.on(r.PRE_STEP,R),s.events.on(r.STEP,ve),s.events.on(r.POST_STEP,we),s.events.on(r.POST_RENDER,Me),s.events.once(r.READY,M),s.events.on(r.SYSTEM_READY,M)}ke.init();Ne.init();Fe.init();qe();window.CREATURES_CONFIG&&ze(window.CREATURES_CONFIG);await $e();const xe=()=>{const s=document.getElementById("loading-screen");s&&(s.classList.add("fade-out"),setTimeout(()=>{s.style.display="none"},850))},Ye=()=>{const s=document.getElementById("loading-screen");s&&(s.style.display="",s.classList.remove("fade-out"))};h.on("game:loading:show",Ye);h.on("game:scene:ready",xe);const Qe={type:N.AUTO,width:x,height:O,parent:"game-container",backgroundColor:"#0a0b10",scene:[Ae,Be],pixelArt:!0,render:{powerPreference:"high-performance"},fps:{target:30,forceSetTimeOut:!1},scale:{mode:N.Scale.ENVELOP,autoCenter:N.Scale.CENTER_BOTH},input:{mouse:{preventDefaultWheel:!0}},callbacks:{postBoot:()=>{setTimeout(xe,600)}}},J=new N.Game(Qe);Xe(J);const Ze=new Ge({serverUrl:window.FOLKFORK_SERVER_URL??"http://localhost:3001"}),et=new Ue({game:J});h.on("save:loaded",s=>{const e=s;if(e?.playerId&&typeof e.playerId=="string"){const t=typeof e.playerName=="string"?e.playerName:void 0;Ze.setPlayer(e.playerId,t),et.setPlayer(e.playerId,t)}});function _(s,e=4e3){const t=document.getElementById("lore-toast");t&&(t.textContent=s,t.classList.add("visible"),setTimeout(()=>t.classList.remove("visible"),e))}h.on("norn:graduated",(s,e,t)=>{const r={5:n=>`${n} stirs — the first words come`,10:n=>`${n} has found their voice`,15:n=>`${n} peers into the deep places of thought`,20:n=>`${n} sees the threads that bind all things`,25:n=>`Something has changed in ${n}...`}[t];r?_(r(s.name),5e3):_(`${s.name}'s mind has expanded`)});h.on("rune:discovered",(s,e)=>{_(`${e.name} found ancient markings...`)});h.on("lore:first_question",s=>{_("The ground hums in answer...",5e3)});h.on("lore:first_naming",s=>{_("A word takes root in the world",5e3)});h.on("lore:first_teaching",s=>{_("Knowledge passes between minds",5e3)});h.on("lore:first_dream",s=>{_("Something old stirs in the deep...",6e3)});h.on("lore:collective_resonance",()=>{_("The boundaries thin. They feel each other thinking.",7e3)});h.on("norn:hatched",s=>{_(`A new life: ${s.name} has hatched (gen ${s.generation})`,5e3)});h.on("norn:eggLaid",s=>{_(`${s.name} laid an egg`,3e3)});h.on("invention:created",(s,e,t)=>{const o=t.length>1?` from ${t.slice(0,2).join(" + ")}`:t.length===1?` from ${t[0]}`:"";_(`${s.name} invented "${e.name}"${o}`,5e3)});h.on("invention:compound_discovered",(s,e,t,o)=>{tt(s.name,e.name,t.name,o.name)});function tt(s,e,t,o){const r=document.createElement("div");r.className="compound-discovery",r.innerHTML=`
    <div class="compound-discovery__inner">
      <div class="compound-discovery__label">COMPOUND DISCOVERY</div>
      <div class="compound-discovery__name">${e}</div>
      <div class="compound-discovery__detail">${s} combined <em>${t}</em> + <em>${o}</em></div>
      <div class="compound-discovery__sub">Something new has emerged in the world</div>
    </div>
  `,document.body.appendChild(r),requestAnimationFrame(()=>r.classList.add("compound-discovery--visible")),setTimeout(()=>{r.classList.remove("compound-discovery--visible"),setTimeout(()=>r.remove(),700)},5e3)}J.events.on("contextlost",()=>{const s=document.getElementById("loading-screen");if(s){s.classList.remove("fade-out");const e=s.querySelector(".loading-sub");e&&(e.textContent="The substrate collapsed — please refresh to re-enter")}});let se=!1;h.on("game:scene:error",()=>{se=!0});h.on("game:loading:show",()=>{se=!1});const Se=()=>{J.scene.isActive("GameScene")&&h.emit("game:scene:error")};window.addEventListener("error",Se);window.addEventListener("unhandledrejection",Se);h.on("game:scene:shutdown",()=>{if(!se)return;const s=document.getElementById("loading-screen");if(s){s.classList.remove("fade-out");const e=s.querySelector(".loading-sub");e&&(e.textContent="The substrate collapsed — please refresh to re-enter")}});window.__precursors={game:J,eventBus:h};export{pt as R,ct as i};
