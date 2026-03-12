const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GameScene-BPU2MBpg.js","assets/vendor-phaser-CaWnzXme.js","assets/EventBus-BDki86ks.js","assets/WorldGenerator-Bv_GjGo8.js","assets/WorldItem-BOJGFLBV.js","assets/LifeStage-DLlDtvpU.js","assets/SpriteState-DHYVCsRv.js","assets/WaveUnlockSystem-Bvf3nGwE.js","assets/LanguageSystem-DHPRrcUx.js","assets/World-2y-b4XY2.js","assets/PerfTelemetry-BfzOoXCm.js","assets/ChemicalSet-DyoZSYon.js","assets/UIScene-CBSLdi-n.js","assets/SimulationScheduler-BGLRfRja.js","assets/BiochemistrySystem-DEctV2Ds.js","assets/KeyboardControls-DgK_omeA.js"])))=>i.map(i=>d[i]);
import"./LifeStage-DLlDtvpU.js";import{P as k}from"./vendor-phaser-CaWnzXme.js";import{s as z,U as Me}from"./UIScene-CBSLdi-n.js";import{G as x,a as N,S as Re,b as ke}from"./WorldItem-BOJGFLBV.js";import{e as p}from"./EventBus-BDki86ks.js";import{I as re}from"./LanguageSystem-DHPRrcUx.js";import{P as U}from"./PerfTelemetry-BfzOoXCm.js";import"./ChemicalSet-DyoZSYon.js";const Te="modulepreload",Le=function(r){return"/play/creatures/"+r},se={},ze=function(e,t,o){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");n=Promise.allSettled(t.map(c=>{if(c=Le(c),c in se)return;se[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const g=document.createElement("link");if(g.rel=l?"stylesheet":Te,l||(g.as="script"),g.crossOrigin="",g.href=c,i&&g.setAttribute("nonce",i),document.head.appendChild(g),l)return new Promise((w,C)=>{g.addEventListener("load",w),g.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return n.then(a=>{for(const i of a||[])i.status==="rejected"&&s(i.reason);return e().catch(s)})},ie=658192,ae=1184799,Q=4016762,P="#70758f",le="#c8ccdd",Pe="#e8ecf8",h=72,j=10,ce=3;class Ne extends k.Scene{deleteConfirmSlot=null;_enterKeyHandler=null;constructor(){super({key:"MenuScene"})}create(){const e=document.getElementById("loading-screen");e&&e.classList.add("fade-out"),this._drawBackground(),this._drawTitle(),this._drawSlots(),this._drawNewGameButton(),this._bindEnterKey()}_drawBackground(){this.add.rectangle(x/2,N/2,x,N,ie);const e=this.add.graphics(),t=new k.Math.RandomDataGenerator(["creatures_menu"]);for(let a=0;a<280;a++){const i=t.between(0,x),c=t.between(0,N),l=t.frac()<.15?1.5:.8,d=.2+t.frac()*.6;e.fillStyle(16777215,d),e.fillCircle(i,c,l)}const o=this.add.graphics(),n=x,s=N;for(let a=0;a<12;a++){const i=a/12,c=i*.55,l=(1-i)*Math.min(n,s)*.55;o.fillStyle(ie,c),o.fillRect(-l/2+n/2-n/2,-l/2+s/2-s/2,n+l,l/2),o.fillRect(-l/2+n/2-n/2,s-l/4,n+l,l/2)}}_drawTitle(){this.add.text(x/2,72,"PRECURSORS",{fontSize:"52px",fontFamily:"JetBrains Mono, Menlo, monospace",color:Pe,stroke:"#0a0b10",strokeThickness:6,letterSpacing:8}).setOrigin(.5,.5),this.add.text(x/2,113,"Origins of Folklore",{fontSize:"17px",fontFamily:"Cormorant Garamond, Garamond, serif",fontStyle:"italic",color:"#b4b8ce",letterSpacing:3}).setOrigin(.5,.5),this.add.text(x/2,139,"a living world of evolving minds",{fontSize:"12px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#7a7f98",letterSpacing:2}).setOrigin(.5,.5);const e=this.add.graphics();e.lineStyle(1,5925530,.6),e.lineBetween(x/2-240,160,x/2+240,160)}_drawSlots(){const e=z.listSlots(),t=e.includes("autosave");let o=180;if(t){const s=z.getSlotMeta("autosave");this._drawContinueButton(o,s),o+=h+j+32;const a=this.add.graphics();a.lineStyle(1,2764098,.7),a.lineBetween(x/2-240,o-18,x/2+240,o-18)}const n=e.filter(s=>s!=="autosave").slice(0,ce);if(this.add.text(x/2-240,o,"SAVES",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:P,letterSpacing:4}).setOrigin(0,.5),o+=20,n.length===0)this.add.text(x/2,o+30,"No saved games",{fontSize:"13px",fontFamily:"JetBrains Mono, Menlo, monospace",color:P}).setOrigin(.5,.5),o+=70;else for(const s of n)this._drawSlotRow(o,s),o+=h+j}_drawContinueButton(e,t){const o=x/2,n=480,s=this.add.graphics();if(s.fillStyle(1712192,1),s.fillRoundedRect(o-n/2,e,n,h,6),s.lineStyle(1,4876980,.8),s.strokeRoundedRect(o-n/2,e,n,h,6),this.add.text(o-n/2+18,e+18,"▶  CONTINUE",{fontSize:"16px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#9ab4f4",letterSpacing:2}),t){const i=new Date(t.timestamp).toLocaleString();this.add.text(o-n/2+18,e+44,`autosave  ·  ${i}`,{fontSize:"11px",fontFamily:"JetBrains Mono, Menlo, monospace",color:P})}const a=this.add.zone(o,e+h/2,n,h+16).setInteractive({cursor:"pointer"});a.on("pointerover",()=>{s.clear(),s.fillStyle(1976400,1),s.fillRoundedRect(o-n/2,e,n,h,6),s.lineStyle(1,6982356,1),s.strokeRoundedRect(o-n/2,e,n,h,6)}),a.on("pointerout",()=>{s.clear(),s.fillStyle(1712192,1),s.fillRoundedRect(o-n/2,e,n,h,6),s.lineStyle(1,4876980,.8),s.strokeRoundedRect(o-n/2,e,n,h,6)}),a.on("pointerup",()=>this._startGame("autosave"))}_drawSlotRow(e,t){const o=x/2,n=480,s=70,a=8,i=z.getSlotMeta(t),c=i?new Date(i.timestamp).toLocaleString():"Unknown",l=t.replace(/^imported_/,"").replace(/_/g," "),d=this.add.graphics();d.fillStyle(ae,1),d.fillRoundedRect(o-n/2,e,n-s*2-a*3,h,4),d.lineStyle(1,Q,.4),d.strokeRoundedRect(o-n/2,e,n-s*2-a*3,h,4),this.add.text(o-n/2+14,e+16,l,{fontSize:"13px",fontFamily:"JetBrains Mono, Menlo, monospace",color:le}),this.add.text(o-n/2+14,e+40,c,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:P});const g=o+n/2-s*2-a*2;this._drawSmallButton(g,e,s,h,"LOAD",1716264,3833952,()=>{this._startGame(t)});const w=o+n/2-s-a;this._drawDeleteButton(w,e,s,h,t);const C=this.add.zone(o-s-a,e+h/2,n-s*2-a*3,h).setInteractive({cursor:"pointer"});C.on("pointerover",()=>{d.clear(),d.fillStyle(1579562,1),d.fillRoundedRect(o-n/2,e,n-s*2-a*3,h,4),d.lineStyle(1,Q,.7),d.strokeRoundedRect(o-n/2,e,n-s*2-a*3,h,4)}),C.on("pointerout",()=>{d.clear(),d.fillStyle(ae,1),d.fillRoundedRect(o-n/2,e,n-s*2-a*3,h,4),d.lineStyle(1,Q,.4),d.strokeRoundedRect(o-n/2,e,n-s*2-a*3,h,4)}),C.on("pointerup",()=>this._startGame(t))}_drawSmallButton(e,t,o,n,s,a,i,c){const l=this.add.graphics(),d=w=>{l.clear(),l.fillStyle(w?a+1052688:a,1),l.fillRoundedRect(e,t+8,o,n-16,4),l.lineStyle(1,i,w?1:.7),l.strokeRoundedRect(e,t+8,o,n-16,4)};d(!1),this.add.text(e+o/2,t+n/2,s,{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:le,letterSpacing:1}).setOrigin(.5,.5);const g=this.add.zone(e+o/2,t+n/2,o,n-16).setInteractive({cursor:"pointer"});g.on("pointerover",()=>d(!0)),g.on("pointerout",()=>d(!1)),g.on("pointerup",c)}_drawDeleteButton(e,t,o,n,s){let a=!1;const i=this.add.graphics(),c=this.add.text(e+o/2,t+n/2,"DEL",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#8b6060",letterSpacing:1}).setOrigin(.5,.5),l=(g,w)=>{i.clear();const C=w?8075834:3807770,W=w?11554896:6959152;i.fillStyle(g?C+1052688:C,1),i.fillRoundedRect(e,t+8,o,n-16,4),i.lineStyle(1,W,g?1:.7),i.strokeRoundedRect(e,t+8,o,n-16,4),c.setText(w?"SURE?":"DEL"),c.setColor(w?"#e07070":"#8b6060")};l(!1,!1);const d=this.add.zone(e+o/2,t+n/2,o,n-16).setInteractive({cursor:"pointer"});d.on("pointerover",()=>l(!0,a)),d.on("pointerout",()=>l(!1,a)),d.on("pointerup",()=>{a?(z.deleteSlot(s),this.scene.restart()):(a=!0,l(!1,!0),this.time.delayedCall(2e3,()=>{a=!1,l(!1,!1)}))})}_drawNewGameButton(){const e=z.listSlots(),t=e.includes("autosave"),o=e.filter(g=>g!=="autosave").slice(0,ce);let n=180;t&&(n+=h+j+32),n+=20,o.length===0?n+=70:n+=o.length*(h+j),n+=28;const s=x/2,a=480,i=68,c=this.add.graphics(),l=g=>{c.clear(),c.fillStyle(g?1714208:1318424,1),c.fillRoundedRect(s-a/2,n,a,i,6),c.lineStyle(1,g?7381088:4878400,g?1:.9),c.strokeRoundedRect(s-a/2,n,a,i,6)};l(!1),this.add.text(s,n+i/2-8,"NEW GAME",{fontSize:"16px",fontFamily:"JetBrains Mono, Menlo, monospace",color:"#a0c890",letterSpacing:4}).setOrigin(.5,.5),this.add.text(s,n+i/2+12,"begin a new world",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:P,letterSpacing:1}).setOrigin(.5,.5);const d=this.add.zone(s,n+i/2,a,i+24).setInteractive({cursor:"pointer"});d.on("pointerover",()=>l(!0)),d.on("pointerout",()=>l(!1)),d.on("pointerup",()=>this._startGame(void 0)),this.add.text(s,N-24,"enter ↵ new game  ·  F5 quick-save  ·  F9 quick-load  ·  ` dev panel",{fontSize:"10px",fontFamily:"JetBrains Mono, Menlo, monospace",color:P,letterSpacing:1}).setOrigin(.5,.5)}_bindEnterKey(){this._enterKeyHandler=e=>{if(!this.sys.isActive()||this.sys.game.scene.isActive("GameScene")){document.removeEventListener("keydown",this._enterKeyHandler),this._enterKeyHandler=null;return}if(e.key==="Enter"||e.key==="Return"){const t=e.target?.tagName;if(t==="INPUT"||t==="TEXTAREA")return;const n=z.listSlots().includes("autosave")?"autosave":void 0;this._startGame(n)}},document.addEventListener("keydown",this._enterKeyHandler),this.events.once("shutdown",()=>{this._enterKeyHandler&&(document.removeEventListener("keydown",this._enterKeyHandler),this._enterKeyHandler=null),this.children.removeAll(!0)})}_startGame(e){p.emit("game:loading:show");const t=()=>{e?this.scene.start("GameScene",{loadSlot:e}):this.scene.start("GameScene")};this.sys.game.scene.getScene("GameScene")?t():ze(async()=>{const{GameScene:o}=await import("./GameScene-BPU2MBpg.js");return{GameScene:o}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(({GameScene:o})=>{this.sys.game.scene.add("GameScene",o),t()})}}class Be{knowers=new Map;lost=new Set;spreadAnnounced=new Set;init(){p.on("invention:created",(e,t)=>{this.addKnower(t.name.toLowerCase(),e)}),p.on("invention:witnessed",(e,t,o)=>{e.knownRecipes.has(o.toLowerCase())&&this.addKnower(o.toLowerCase(),e)}),p.on("recipe:learned",(e,t,o)=>{this.addKnower(o.toLowerCase(),e)}),p.on("norn:removed",e=>{this.handleNornDeath(e)})}addKnower(e,t){this.knowers.has(e)||this.knowers.set(e,new Set);const o=this.knowers.get(e);o.add(t.id),o.size>=3&&!this.spreadAnnounced.has(e)&&(this.spreadAnnounced.add(e),p.emit("culture:spread",e,o.size),console.log(`[culture] "${e}" has spread to ${o.size} creatures`))}handleNornDeath(e){for(const t of e.knownRecipes){const o=this.knowers.get(t);o&&(o.delete(e.id),o.size===0&&!this.lost.has(t)&&(this.lost.add(t),this.knowers.delete(t),p.emit("culture:lost",t,e),console.log(`[culture] "${t}" has been lost — ${e.name} was the last who knew it`)))}}getSpreadCount(){let e=0;for(const t of this.knowers.values())t.size>1&&e++;return e}getStats(){let e=0,t=0;for(const o of this.knowers.values())o.size>1?e++:o.size===1&&t++;return{totalRecipes:this.knowers.size+this.lost.size,spreadCount:e,endangeredCount:t,lostCount:this.lost.size}}getKnowerCount(e){return this.knowers.get(e.toLowerCase())?.size??0}isLost(e){return this.lost.has(e.toLowerCase())}}const Ae=new Be,Oe=["lore:first_question","lore:first_naming","lore:first_dream","lore:first_invention","lore:the_remembering","lore:first_teaching","lore:first_grief","lore:first_contact","lore:the_song_that_travels","lore:the_vigil","lore:collective_resonance","lore:the_prometheus","lore:the_assembly","lore:the_chorus_speaks","lore:the_star_map","lore:the_revelation","lore:storm_pact","lore:shared_myths_seeded","lore:the_awakening","lore:the_geological_voice","lore:the_deep_report","lore:norn_death_story","lore:the_grey_compact","lore:the_vision","lore:meme_pandemic"];class ee{currentAge="Instinct";history=[];loreEventCount=0;recursionTriggered=!1;speciesContactPairs=new Set;lastCheckTime=0;static CHECK_INTERVAL_MS=6e4;init(){for(const e of Oe)p.on(e,()=>{this.loreEventCount++});p.on("lore:the_recursion",()=>{this.loreEventCount++,this.recursionTriggered=!0}),p.on("lore:recursion",()=>{this.recursionTriggered=!0}),p.on("lore:first_contact",(e,t)=>{if(e.species!==t.species){const o=[String(e.species),String(t.species)].sort().join(":");this.speciesContactPairs.add(o)}}),p.on("lore:cultural_intersection",(e,t,o)=>{if(t.species!==o.species){const n=[String(t.species),String(o.species)].sort().join(":");this.speciesContactPairs.add(n)}})}update(e,t){if(t-this.lastCheckTime<ee.CHECK_INTERVAL_MS)return;this.lastCheckTime=t;const o=this.computeAge(e);if(o!==this.currentAge){const n=this.currentAge;this.currentAge=o,this.history.push({from:n,to:o,timestamp:t}),p.emit("age:transition",o),console.warn(`[ages] ${n} → ${o}`)}}computeAge(e){if(this.recursionTriggered)return"Transcendence";const t=e.getLivingNorns();if(t.length===0)return"Instinct";const o=t.reduce((a,i)=>a+i.iq,0)/t.length,n=re.count(),s=this.speciesContactPairs.size;return o>=250&&n>=30&&this.loreEventCount>=10?"Wonder":o>=120&&n>=10&&s>=2?"Culture":o>=50?"Awakening":"Instinct"}getCurrentAge(){return this.currentAge}getHistory(){return this.history}getLoreEventCount(){return this.loreEventCount}getSpeciesContactCount(){return this.speciesContactPairs.size}getMetrics(e){const t=e.getLivingNorns(),o=t.length>0?t.reduce((n,s)=>n+s.iq,0)/t.length:0;return{age:this.currentAge,avgIQ:o,inventionCount:re.count(),loreEventCount:this.loreEventCount,speciesContacts:this.speciesContactPairs.size,recursionTriggered:this.recursionTriggered,populationSize:t.length}}}const Ie=new ee;class De{serverUrl;playerId;playerDisplayName;triggerEl;modalEl;modalOpen=!1;constructor(e={}){this.serverUrl=e.serverUrl??"http://localhost:3001",this.playerId=e.playerId??"anonymous",this.playerDisplayName=e.playerDisplayName,this.triggerEl=this._buildTrigger(),this.modalEl=this._buildModal(),document.body.appendChild(this.triggerEl),document.body.appendChild(this.modalEl)}setPlayer(e,t){this.playerId=e,this.playerDisplayName=t}destroy(){this.triggerEl.remove(),this.modalEl.remove()}_buildTrigger(){const e=document.createElement("button");return e.id="folkfork-trigger",e.title="Share lore feedback",e.textContent="◈",e.style.cssText=`
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
    `,t.querySelector("#ff-cancel").addEventListener("click",()=>this._closeModal()),t.querySelector("#ff-submit").addEventListener("click",()=>this._submitFeedback(t)),e.addEventListener("click",o=>{o.target===e&&this._closeModal()}),e.appendChild(t),e}_toggleModal(){this.modalOpen?this._closeModal():this._openModal()}_openModal(){this.modalOpen=!0,this.modalEl.style.display="flex"}_closeModal(){this.modalOpen=!1,this.modalEl.style.display="none",this._resetForm()}_resetForm(){const e=o=>this.modalEl.querySelector(o);e("#ff-suggestion").value="",e("#ff-subject").value="",e("#ff-rationale").value="",e("#ff-type").value="general";const t=e("#ff-status");t.style.display="none",t.textContent=""}async _submitFeedback(e){const t=l=>e.querySelector(l),o=t("#ff-suggestion").value.trim(),n=t("#ff-subject").value.trim(),s=t("#ff-rationale").value.trim(),a=t("#ff-type").value,i=t("#ff-status"),c=t("#ff-submit");if(!o){i.style.color="#f38ba8",i.textContent="Please describe your suggestion.",i.style.display="block";return}c.disabled=!0,c.textContent="Sending…";try{const l=await fetch(`${this.serverUrl}/api/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:a,subject:n||void 0,suggestedChange:o,rationale:s||void 0,playerId:this.playerId,playerDisplayName:this.playerDisplayName,metadata:{gameVersion:typeof __APP_VERSION__<"u"?__APP_VERSION__:"unknown"}})});if(l.ok)i.style.color="rgba(61,252,224,0.8)",i.textContent="✓ Feedback received — thank you.",i.style.display="block",setTimeout(()=>this._closeModal(),2e3);else throw new Error(`Server error ${l.status}`)}catch(l){console.error("[FeedbackButton] submit error:",l),i.style.color="rgba(240,112,64,0.9)",i.textContent="Could not send feedback. Please try again.",i.style.display="block",c.disabled=!1,c.textContent="SEND"}}}class Fe{apiUrl;game;triggerEl;modalEl;modalOpen=!1;screenshotData=null;constructor(e={}){this.apiUrl=e.apiUrl??"https://feedback.multiversestudios.xyz/submit",this.game=e.game??null,this.triggerEl=this._buildTrigger(),this.modalEl=this._buildModal(),document.body.appendChild(this.triggerEl),document.body.appendChild(this.modalEl)}setGame(e){this.game=e}destroy(){this.triggerEl.remove(),this.modalEl.remove()}_buildTrigger(){const e=document.createElement("button");return e.id="bugreport-trigger",e.title="report a substrate anomaly",e.textContent="anomaly?",e.style.cssText=`
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
    `,t.querySelector("#br-cancel").addEventListener("click",()=>this._closeModal()),t.querySelector("#br-submit").addEventListener("click",()=>this._submit(t)),t.querySelector("#br-screenshot-btn").addEventListener("click",()=>this._captureScreenshot(t)),t.querySelector("#br-screenshot-remove").addEventListener("click",()=>this._removeScreenshot(t)),e.addEventListener("click",o=>{o.target===e&&this._closeModal()}),e.appendChild(t),e}_toggleModal(){this.modalOpen?this._closeModal():this._openModal()}_openModal(){this.modalOpen=!0,this.modalEl.style.display="flex"}_closeModal(){this.modalOpen=!1,this.modalEl.style.display="none",this._resetForm()}_resetForm(){const e=o=>this.modalEl.querySelector(o);e("#br-title").value="",e("#br-description").value="",e("#br-contact").value="",e("#br-severity").value="minor",this._removeScreenshot(this.modalEl);const t=e("#br-status");t.style.display="none",t.textContent=""}_captureScreenshot(e){this.modalEl.style.display="none",requestAnimationFrame(()=>{const t=document.querySelector("canvas");if(!t){this.modalEl.style.display="flex";const o=e.querySelector("#br-screenshot-status");o.textContent="No canvas found",o.style.color="rgba(240,112,64,0.8)";return}try{this.screenshotData=t.toDataURL("image/png");const o=e.querySelector("#br-screenshot-preview"),n=e.querySelector("#br-screenshot-img"),s=e.querySelector("#br-screenshot-status");n.src=this.screenshotData,o.style.display="block",s.textContent="Screenshot captured",s.style.color="rgba(61,252,224,0.7)"}catch{const n=e.querySelector("#br-screenshot-status");n.textContent="Could not capture screenshot",n.style.color="rgba(240,112,64,0.8)"}this.modalEl.style.display="flex"})}_removeScreenshot(e){this.screenshotData=null;const t=e.querySelector("#br-screenshot-preview"),o=e.querySelector("#br-screenshot-status");t&&(t.style.display="none"),o&&(o.textContent="",o.style.color="rgba(216,220,232,0.25)")}async _submit(e){const t=d=>e.querySelector(d),o=t("#br-title").value.trim(),n=t("#br-description").value.trim(),s=t("#br-contact").value.trim(),a=t("#br-severity").value,i=t("#br-status"),c=t("#br-submit");if(!o||o.length<3){i.style.color="rgba(240,112,64,0.9)",i.textContent="Please provide a title (at least 3 characters).",i.style.display="block";return}if(!n||n.length<10){i.style.color="rgba(240,112,64,0.9)",i.textContent="Please describe what happened (at least 10 characters).",i.style.display="block";return}c.disabled=!0,c.textContent="SUBMITTING...";const l={type:"bug_report",game:"precursors",title:o,description:n,severity:a,browser:navigator.userAgent};s&&(l.contact=s),this.screenshotData&&(l.screenshot=this.screenshotData);try{const d=await fetch(this.apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(d.ok)i.style.color="rgba(61,252,224,0.8)",i.textContent="Bug report submitted — thank you.",i.style.display="block",setTimeout(()=>this._closeModal(),2e3);else{const g=await d.json().catch(()=>({}));throw new Error(g.error||`Server error ${d.status}`)}}catch(d){console.error("[BugReportOverlay] submit error:",d),i.style.color="rgba(240,112,64,0.9)",i.textContent="Could not submit. Please try again.",i.style.display="block"}finally{c.disabled=!1,c.textContent="SUBMIT"}}}Object.fromEntries(Object.entries(Re).filter(([,r])=>typeof r=="number").map(([r,e])=>[r.toLowerCase(),e]));async function Ge(){}let K=!1,de=!1;function Ue(){if(de)return;de=!0;const r=new URLSearchParams(window.location.search);(r.get("perf_mode")==="1"||r.get("perf_mode")==="true"||r.get("benchmark")==="1"||r.get("benchmark")==="true")&&(K=!0),window.CREATURES_CONFIG?.PERF_MODE&&(K=!0),K&&console.log("[PerfMode] ACTIVE — LLM cognition stubbed, network calls suppressed")}function at(){return K}class lt{timestamps=[];maxPerWindow;windowMs;constructor(e=100,t=6e4){this.maxPerWindow=e,this.windowMs=t}tryAcquire(){const e=performance.now();for(;this.timestamps.length>0&&e-this.timestamps[0]>this.windowMs;)this.timestamps.shift();return this.timestamps.length>=this.maxPerWindow?!1:(this.timestamps.push(e),!0)}get currentCount(){const e=performance.now();for(;this.timestamps.length>0&&e-this.timestamps[0]>this.windowMs;)this.timestamps.shift();return this.timestamps.length}}const pe=()=>({frameStartMs:0,preStepEndMs:0,stepHooksStartMs:0,sceneUpdateStartMs:0,sceneUpdateEndMs:0,postStepEndMs:0,rendererPreRenderStartMs:0,rendererPreRenderEndMs:0,sceneRenderStartMs:0,sceneRenderEndMs:0,rendererPostRenderStartMs:0,rendererPostRenderEndMs:0}),qe=()=>({scenes:new Map}),R=(r,e)=>r>0&&e>0&&e>=r?e-r:0,Je=r=>r.sys.settings.key||r.scene.key||r.constructor.name,Ve=12,He=10,te=r=>r.type||r.constructor?.name||"Unknown",ue=r=>{const e=r;return Array.isArray(e.list)?e.list:[]},oe=(r,e,t=1)=>{r.set(e,(r.get(e)??0)+t)},me=(r,e)=>{for(const[t,o]of e)oe(r,t,o)},Z=(r,e=Ve)=>Array.from(r.entries()).sort((t,o)=>o[1]-t[1]||t[0].localeCompare(o[0])).slice(0,e).map(([t,o])=>({type:t,count:o})),ge=r=>r.visible!==!1,he=(r,e,t=0)=>{if(e.has(r))return{subtreeNodes:0,visibleSubtreeNodes:0,maxDepth:t,typeCounts:new Map};e.add(r);const o=new Map;oe(o,te(r));let n=1,s=ge(r)?1:0,a=t;const i=ue(r);for(let c=0;c<i.length;c++){const l=he(i[c],e,t+1);n+=l.subtreeNodes,s+=l.visibleSubtreeNodes,a=Math.max(a,l.maxDepth),me(o,l.typeCounts)}return{subtreeNodes:n,visibleSubtreeNodes:s,maxDepth:a,typeCounts:o}},$e=r=>{const e=r.texture?.key;return typeof e=="string"&&e.length>0?e:null},je=(r,e)=>{const t=r;return{type:te(r),name:t.name||"",textureKey:$e(r),directChildren:ue(r).length,subtreeNodes:e.subtreeNodes,visibleSubtreeNodes:e.visibleSubtreeNodes,depth:+Number(t.depth??0).toFixed(3),alpha:+Number(t.alpha??1).toFixed(3),visible:ge(r),childTypeCounts:Z(e.typeCounts)}};function Ke(r){const e=r;if(e.__creaturesPhaserStepTelemetryInstalled)return;e.__creaturesPhaserStepTelemetryInstalled=!0;const t=pe(),o=qe(),n=k.Core.Events,s=k.Scenes.Events,a=r.scene,i=r.renderer,c=()=>{Object.assign(t,pe())},l=()=>{o.scenes.clear()},d=u=>{const y=Je(u);let b=o.scenes.get(y);return b||(b={sceneKey:y,active:!!u.sys.settings.active,visible:!!u.sys.settings.visible,displayListChildren:0,globallyVisibleChildren:0,containerChildren:0,layerChildren:0,cameraCount:0,totalVisibleChildren:0,renderTreeNodeCount:0,renderTreeVisibleNodeCount:0,depthSortMs:0,cameraManagerRenderMs:0,totalFilterMs:0,totalCameraRenderMs:0,renderTotalMs:0,topLevelTypeCounts:[],renderTreeTypeCounts:[],largestRoots:[],cameras:[]},o.scenes.set(y,b)),b},g=()=>{const u=Array.from(o.scenes.values()).sort((m,S)=>S.renderTotalMs-m.renderTotalMs);let y=0,b=0,L=0,T=0,J=0,V=0,E=0,v=0;for(let m=0;m<u.length;m++){const S=u[m];y+=S.cameraCount,b+=S.displayListChildren,L+=S.globallyVisibleChildren,T+=S.containerChildren,J+=S.layerChildren,V+=S.totalVisibleChildren,E+=S.renderTreeNodeCount,v+=S.renderTreeVisibleNodeCount}return{frameCount:1,totalScenes:u.length,totalCameras:y,totalDisplayListChildren:b,totalGloballyVisibleChildren:L,totalContainerChildren:T,totalLayerChildren:J,totalVisibleChildren:V,totalRenderTreeNodes:E,totalRenderTreeVisibleNodes:v,scenes:u}},w=u=>{const y=u;if(y.__creaturesRenderTelemetryInstalled)return;y.__creaturesRenderTelemetryInstalled=!0;const b=u.sys,L=b.cameras,T=L,J=b.render.bind(b),V=T.render.bind(T);b.render=E=>{if(!U.isRenderDetailEnabled()){J(E);return}const v=d(u);v.active=!!b.settings.active,v.visible=!!b.settings.visible;const m=b.displayList,S=m.getChildren();v.displayListChildren=S.length;let B=0,A=0,O=0;for(let f=0;f<S.length;f++){const D=S[f];D.visible!==!1&&B++,D.type==="Container"&&A++,D.type==="Layer"&&O++}v.globallyVisibleChildren=B,v.containerChildren=A,v.layerChildren=O;const I=performance.now(),H=I;m.depthSort(),v.depthSortMs=performance.now()-H,b.events.emit(s.PRE_RENDER,E);const _=performance.now();T.render(E,m),v.cameraManagerRenderMs=performance.now()-_,b.events.emit(s.RENDER,E),v.renderTotalMs=performance.now()-I},T.render=(E,v)=>{if(!U.isRenderDetailEnabled()){V(E,v);return}const m=d(u);m.cameras=[],m.cameraCount=0,m.totalVisibleChildren=0,m.renderTreeNodeCount=0,m.renderTreeVisibleNodeCount=0,m.totalFilterMs=0,m.totalCameraRenderMs=0,m.topLevelTypeCounts=[],m.renderTreeTypeCounts=[],m.largestRoots=[];const S=v.getChildren(),B=L.cameras,A=new Set,O=new Map,I=new Map,H=[];for(let _=0;_<B.length;_++){const f=B[_];if(!f.visible||f.alpha<=0)continue;f.preRender();const D=performance.now(),F=L.getVisibleChildren(S,f),Ce=performance.now()-D,_e=performance.now();E.render(u,F,f);const Ee=performance.now()-_e,X={cameraId:Number(f.id??_),name:String(f.name??`camera_${_}`),visibleChildren:F.length,filterMs:+Ce.toFixed(3),renderMs:+Ee.toFixed(3),alpha:+Number(f.alpha??1).toFixed(3),zoom:+Number(f.zoom??1).toFixed(3),width:+Number(f.width??0).toFixed(3),height:+Number(f.height??0).toFixed(3)};m.cameras.push(X),m.cameraCount++,m.totalVisibleChildren+=F.length,m.totalFilterMs+=X.filterMs,m.totalCameraRenderMs+=X.renderMs;for(let Y=0;Y<F.length;Y++){const G=F[Y];if(A.has(G))continue;A.add(G),oe(O,te(G));const $=he(G,new Set);m.renderTreeNodeCount+=$.subtreeNodes,m.renderTreeVisibleNodeCount+=$.visibleSubtreeNodes,me(I,$.typeCounts),H.push(je(G,$))}}m.topLevelTypeCounts=Z(O),m.renderTreeTypeCounts=Z(I),m.largestRoots=H.sort((_,f)=>f.subtreeNodes-_.subtreeNodes||f.visibleSubtreeNodes-_.visibleSubtreeNodes||_.type.localeCompare(f.type)).slice(0,He)}},C=()=>{const u=a.scenes;for(let y=0;y<u.length;y++)w(u[y])},W=()=>{c(),l(),t.frameStartMs=performance.now()},ye=()=>{const u=performance.now();t.preStepEndMs=u,t.stepHooksStartMs=u},xe=()=>{t.postStepEndMs=performance.now()},Se=()=>{if(t.frameStartMs<=0)return;const u=performance.now();U.recordPhaserStepFrame({preStep:R(t.frameStartMs,t.preStepEndMs),stepHooks:R(t.stepHooksStartMs,t.sceneUpdateStartMs||t.postStepEndMs||u),sceneUpdate:R(t.sceneUpdateStartMs,t.sceneUpdateEndMs),postStep:R(t.postStepEndMs,t.rendererPreRenderStartMs||t.sceneRenderStartMs||u),rendererPreRender:R(t.rendererPreRenderStartMs,t.rendererPreRenderEndMs),sceneRender:R(t.sceneRenderStartMs,t.sceneRenderEndMs),rendererPostRender:R(t.rendererPostRenderStartMs,t.rendererPostRenderEndMs),postRender:R(t.rendererPostRenderEndMs||t.sceneRenderEndMs||t.postStepEndMs,u),totalStep:R(t.frameStartMs,u)}),U.isRenderDetailEnabled()&&o.scenes.size>0&&U.recordRenderDetailFrame(g())},ve=a.update.bind(a);a.update=(u,y)=>{t.sceneUpdateStartMs=performance.now();try{ve(u,y)}finally{t.sceneUpdateEndMs=performance.now()}};const we=a.render.bind(a);if(a.render=u=>{C(),t.sceneRenderStartMs=performance.now();try{we(u)}finally{t.sceneRenderEndMs=performance.now()}},i){const u=i.preRender.bind(i);i.preRender=(...b)=>{t.rendererPreRenderStartMs=performance.now();try{u(...b)}finally{t.rendererPreRenderEndMs=performance.now()}};const y=i.postRender.bind(i);i.postRender=(...b)=>{t.rendererPostRenderStartMs=performance.now();try{y(...b)}finally{t.rendererPostRenderEndMs=performance.now()}}}C(),r.events.on(n.PRE_STEP,W),r.events.on(n.STEP,ye),r.events.on(n.POST_STEP,xe),r.events.on(n.POST_RENDER,Se),r.events.once(n.READY,C),r.events.on(n.SYSTEM_READY,C)}Ae.init();Ie.init();Ue();window.CREATURES_CONFIG&&ke(window.CREATURES_CONFIG);await Ge();const be=()=>{const r=document.getElementById("loading-screen");r&&(r.classList.add("fade-out"),setTimeout(()=>{r.style.display="none"},850))},We=()=>{const r=document.getElementById("loading-screen");r&&(r.style.display="",r.classList.remove("fade-out"))};p.on("game:loading:show",We);p.on("game:scene:ready",be);const Xe={type:k.AUTO,width:x,height:N,parent:"game-container",backgroundColor:"#0a0b10",scene:[Ne,Me],pixelArt:!0,render:{powerPreference:"high-performance"},fps:{target:30,forceSetTimeOut:!1},scale:{mode:k.Scale.FIT,autoCenter:k.Scale.CENTER_BOTH},input:{mouse:{preventDefaultWheel:!0}},callbacks:{postBoot:()=>{setTimeout(be,600)}}},q=new k.Game(Xe);Ke(q);const Ye=new De({serverUrl:window.FOLKFORK_SERVER_URL??"http://localhost:3001"});new Fe({game:q});p.on("save:loaded",r=>{const e=r;e?.playerId&&typeof e.playerId=="string"&&Ye.setPlayer(e.playerId,typeof e.playerName=="string"?e.playerName:void 0)});function M(r,e=4e3){const t=document.getElementById("lore-toast");t&&(t.textContent=r,t.classList.add("visible"),setTimeout(()=>t.classList.remove("visible"),e))}p.on("norn:graduated",(r,e,t)=>{M(`${r.name}'s mind has expanded`)});p.on("rune:discovered",(r,e)=>{M(`${e.name} found ancient markings...`)});p.on("lore:first_question",r=>{M("The ground hums in answer...",5e3)});p.on("lore:first_naming",r=>{M("A word takes root in the world",5e3)});p.on("lore:first_teaching",r=>{M("Knowledge passes between minds",5e3)});p.on("lore:first_dream",r=>{M("Something old stirs in the deep...",6e3)});p.on("lore:collective_resonance",()=>{M("The boundaries thin. They feel each other thinking.",7e3)});p.on("norn:hatched",r=>{M(`A new life: ${r.name} has hatched (gen ${r.generation})`,5e3)});p.on("norn:eggLaid",r=>{M(`${r.name} laid an egg`,3e3)});p.on("invention:created",(r,e,t)=>{const o=t.length>1?` from ${t.slice(0,2).join(" + ")}`:t.length===1?` from ${t[0]}`:"";M(`${r.name} invented "${e.name}"${o}`,5e3)});p.on("invention:compound_discovered",(r,e,t,o)=>{Qe(r.name,e.name,t.name,o.name)});function Qe(r,e,t,o){const n=document.createElement("div");n.className="compound-discovery",n.innerHTML=`
    <div class="compound-discovery__inner">
      <div class="compound-discovery__label">COMPOUND DISCOVERY</div>
      <div class="compound-discovery__name">${e}</div>
      <div class="compound-discovery__detail">${r} combined <em>${t}</em> + <em>${o}</em></div>
      <div class="compound-discovery__sub">Something new has emerged in the world</div>
    </div>
  `,document.body.appendChild(n),requestAnimationFrame(()=>n.classList.add("compound-discovery--visible")),setTimeout(()=>{n.classList.remove("compound-discovery--visible"),setTimeout(()=>n.remove(),700)},5e3)}q.events.on("contextlost",()=>{const r=document.getElementById("loading-screen");if(r){r.classList.remove("fade-out");const e=r.querySelector(".loading-sub");e&&(e.textContent="The substrate collapsed — please refresh to re-enter")}});let ne=!1;p.on("game:scene:error",()=>{ne=!0});p.on("game:loading:show",()=>{ne=!1});const fe=()=>{q.scene.isActive("GameScene")&&p.emit("game:scene:error")};window.addEventListener("error",fe);window.addEventListener("unhandledrejection",fe);p.on("game:scene:shutdown",()=>{if(!ne)return;const r=document.getElementById("loading-screen");if(r){r.classList.remove("fade-out");const e=r.querySelector(".loading-sub");e&&(e.textContent="The substrate collapsed — please refresh to re-enter")}});window.__precursors={game:q,eventBus:p};export{Ie as A,lt as R,at as i};
