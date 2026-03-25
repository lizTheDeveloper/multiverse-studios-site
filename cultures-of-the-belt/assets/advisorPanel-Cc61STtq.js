import"./bufferLayout-Dz-mFrPH.js";import{h as e,m as t,s as n}from"./fallbackChain-BrNZYpFp.js";import{r,t as i}from"./hudButtonBar-CSSPaPV7.js";import"./gameState-Diu_0gwj.js";import{i as a}from"./advisorService-BGg36KXp.js";import{a as o,c as s,d as c,f as l,h as u,i as d,l as f,m as p,n as m,o as h,p as g,r as _,s as v,t as y,u as b}from"./index-BbbFbhUL.js";function x(){if(!u.panel)return;let t=document.getElementById(`aria-key-overlay`);if(t){t.remove();return}let r=document.createElement(`div`);r.id=`aria-key-overlay`,r.style.cssText=`
    position: absolute;
    top: 42px;
    left: 0;
    right: 0;
    background: rgba(0, 10, 25, 0.97);
    border-bottom: 1px solid rgba(0, 200, 255, 0.2);
    padding: 10px 12px;
    z-index: 10;
  `;let i=document.createElement(`div`);i.style.cssText=`font-size:9px;color:#06b6d4;letter-spacing:1px;margin-bottom:4px;opacity:0.7;`,i.textContent=`LLM PROVIDER`;let a=document.createElement(`select`);a.style.cssText=`
    width: 100%;
    background: rgba(0, 20, 40, 0.8);
    border: 1px solid rgba(0, 200, 255, 0.25);
    color: #9ecfdf;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    padding: 4px 6px;
    outline: none;
    border-radius: 2px;
    margin-bottom: 8px;
  `;for(let e of[{value:`anthropic`,label:`Anthropic (Claude)`},{value:`groq`,label:`Groq (GPT-OSS)`},{value:`proxy`,label:`Playtest Proxy`},{value:`heuristic`,label:`Heuristic (Offline)`}]){let t=document.createElement(`option`);t.value=e.value,t.textContent=e.label,e.value===u.currentProvider&&(t.selected=!0),a.appendChild(t)}let o={anthropic:`sk-ant-...`,groq:`gsk_...`,proxy:`Proxy key...`},s=document.createElement(`div`);s.style.cssText=`font-size:9px;color:#06b6d4;letter-spacing:1px;margin-bottom:4px;opacity:0.7;`,s.textContent=`API KEY`;let c=document.createElement(`div`);c.style.cssText=`display:flex;gap:6px;`;let l=document.createElement(`input`);l.type=`password`,l.placeholder=o[u.currentProvider]||`API key...`,l.style.cssText=`
    flex: 1;
    background: rgba(0, 20, 40, 0.8);
    border: 1px solid rgba(0, 200, 255, 0.25);
    color: #9ecfdf;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    padding: 4px 6px;
    outline: none;
    border-radius: 2px;
  `,a.addEventListener(`change`,()=>{l.placeholder=o[a.value]||`API key...`,s.textContent=a.value===`proxy`?`PROXY KEY`:`API KEY`});let d=document.createElement(`button`);d.textContent=`SAVE`,d.style.cssText=`
    background: rgba(0, 100, 150, 0.4);
    border: 1px solid rgba(0, 200, 255, 0.3);
    color: #06b6d4;
    font-family: 'Courier New', monospace;
    font-size: 9px;
    padding: 4px 8px;
    cursor: pointer;
    border-radius: 2px;
    letter-spacing: 1px;
  `;let f=document.createElement(`div`);f.style.cssText=`font-size:9px;color:#06b6d4;letter-spacing:1px;margin-bottom:4px;margin-top:8px;opacity:0.7;`,f.textContent=`DAILY TOKEN BUDGET`;let m=document.createElement(`input`);m.type=`number`,m.min=`1000`,m.step=`1000`,m.value=String(n()),m.style.cssText=`
    width: 100%;
    background: rgba(0, 20, 40, 0.8);
    border: 1px solid rgba(0, 200, 255, 0.25);
    color: #9ecfdf;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    padding: 4px 6px;
    outline: none;
    border-radius: 2px;
    box-sizing: border-box;
  `,d.addEventListener(`click`,()=>{u.providerCallback&&u.providerCallback(a.value);let t=l.value.trim();u.apiKeyCallback&&u.apiKeyCallback(t);let n=parseInt(m.value,10);!Number.isNaN(n)&&n>0&&(e(n),p()),r.remove()}),c.appendChild(l),c.appendChild(d),r.appendChild(i),r.appendChild(a),r.appendChild(s),r.appendChild(c),r.appendChild(f),r.appendChild(m),u.panel.appendChild(r),l.focus()}var S=`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background: rgba(0, 6, 18, 0.85);
  border-right: 1px solid rgba(0, 200, 255, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 50;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  color: #9ecfdf;
  transform: translateX(-100%);
  transition: transform 0.25s ease;
  pointer-events: all;
`;function C(){u.panel=document.createElement(`div`),u.panel.style.cssText=S;let e=document.createElement(`div`);e.style.cssText=`
    padding: 10px 12px;
    border-bottom: 1px solid rgba(0, 200, 255, 0.15);
    background: rgba(0, 20, 40, 0.6);
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  `,u.statusDot=document.createElement(`span`),u.statusDot.style.cssText=`
    width: 6px; height: 6px; border-radius: 50%;
    background: #ef4444; flex-shrink: 0;
  `;let t=document.createElement(`span`);t.style.cssText=`color:#06b6d4;letter-spacing:2px;font-size:10px;text-transform:uppercase;`,t.textContent=`ARIA`;let n=document.createElement(`span`);n.style.cssText=`opacity:0.4;font-size:9px;flex:1;`,n.textContent=`Asteroid Resource Intelligence Advisor`;let r=document.createElement(`button`);r.title=`Configure ARIA AI provider`,r.style.cssText=`
    background: none;
    border: 1px solid rgba(0, 200, 255, 0.2);
    color: rgba(0, 200, 255, 0.5);
    font-size: 11px;
    cursor: pointer;
    padding: 2px 5px;
    border-radius: 2px;
    font-family: 'Courier New', monospace;
    flex-shrink: 0;
  `,r.textContent=`🔑`,e.appendChild(u.statusDot),e.appendChild(t),e.appendChild(n),e.appendChild(r),u.panel.appendChild(e);let i=document.createElement(`div`);i.style.cssText=`
    padding: 4px 12px;
    border-bottom: 1px solid rgba(0, 200, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    background: rgba(0, 15, 30, 0.5);
  `;let a=document.createElement(`span`);a.style.cssText=`font-size:9px;letter-spacing:1px;opacity:0.6;`,a.textContent=`COMMANDER MODE`;let o=document.createElement(`button`);o.style.cssText=`
    background: rgba(100, 40, 40, 0.3);
    border: 1px solid rgba(255, 100, 100, 0.3);
    color: #888;
    font-family: 'Courier New', monospace;
    font-size: 9px;
    padding: 2px 8px;
    cursor: pointer;
    border-radius: 2px;
    letter-spacing: 1px;
  `,o.textContent=`OFF`,i.appendChild(a),i.appendChild(o),u.panel.appendChild(i);let s=document.createElement(`div`);s.style.cssText=`
    padding: 4px 12px;
    border-bottom: 1px solid rgba(0, 200, 255, 0.1);
    display: none;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    background: rgba(0, 10, 25, 0.5);
  `;let c=document.createElement(`span`);c.style.cssText=`font-size:9px;letter-spacing:1px;opacity:0.6;`,c.textContent=`AUTO-DELEGATE`;let l=document.createElement(`button`);l.style.cssText=`
    background: rgba(100, 40, 40, 0.3);
    border: 1px solid rgba(255, 100, 100, 0.3);
    color: #888;
    font-family: 'Courier New', monospace;
    font-size: 9px;
    padding: 2px 8px;
    cursor: pointer;
    border-radius: 2px;
    letter-spacing: 1px;
  `,l.textContent=`OFF`,s.appendChild(c),s.appendChild(l),u.panel.appendChild(s),u.pendingActionsEl=document.createElement(`div`),u.pendingActionsEl.style.cssText=`
    flex-shrink: 0;
    max-height: 200px;
    overflow-y: auto;
    display: none;
    border-bottom: 1px solid rgba(200, 200, 0, 0.15);
    scrollbar-width: thin;
    scrollbar-color: rgba(200,200,0,0.2) transparent;
  `,u.panel.appendChild(u.pendingActionsEl),u.messagesEl=document.createElement(`div`),u.messagesEl.style.cssText=`
    flex: 1;
    overflow-y: auto;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    scrollbar-width: thin;
    scrollbar-color: rgba(0,200,255,0.2) transparent;
  `,u.panel.appendChild(u.messagesEl),u.sessionCapNoticeEl=document.createElement(`div`),u.sessionCapNoticeEl.style.cssText=`
    padding: 6px 12px;
    border-top: 1px solid rgba(245, 158, 11, 0.3);
    background: rgba(80, 60, 0, 0.3);
    font-size: 9px;
    color: #f59e0b;
    letter-spacing: 0.5px;
    flex-shrink: 0;
    display: none;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
  `;let d=document.createElement(`span`);d.textContent=`Session token budget exceeded — using onboard analysis`;let f=document.createElement(`button`);f.id=`advisor-opt-back-in`,f.textContent=`OPT BACK IN`,f.style.cssText=`
    background: rgba(80, 60, 0, 0.5);
    border: 1px solid rgba(245, 158, 11, 0.4);
    color: #f59e0b;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    padding: 2px 6px;
    cursor: pointer;
    border-radius: 2px;
    letter-spacing: 0.5px;
    white-space: nowrap;
    flex-shrink: 0;
  `,u.sessionCapNoticeEl.appendChild(d),u.sessionCapNoticeEl.appendChild(f),u.panel.appendChild(u.sessionCapNoticeEl),u.sessionUsageEl=document.createElement(`div`),u.sessionUsageEl.style.cssText=`
    padding: 4px 12px;
    border-top: 1px solid rgba(0, 200, 255, 0.1);
    font-size: 9px;
    color: rgba(158, 207, 223, 0.6);
    letter-spacing: 0.5px;
    flex-shrink: 0;
  `,g(),u.panel.appendChild(u.sessionUsageEl),u.usageSummaryEl=document.createElement(`div`),u.usageSummaryEl.style.cssText=`
    padding: 4px 12px;
    border-top: 1px solid rgba(0, 200, 255, 0.1);
    font-size: 9px;
    color: rgba(158, 207, 223, 0.6);
    letter-spacing: 0.5px;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
  `,p(),u.panel.appendChild(u.usageSummaryEl),u.loadingEl=document.createElement(`div`),u.loadingEl.style.cssText=`
    padding: 6px 12px;
    display: none;
    align-items: center;
    gap: 6px;
    opacity: 0.6;
    flex-shrink: 0;
  `,u.loadingEl.innerHTML=`
    <span class="aria-pulse" style="
      width:6px;height:6px;background:#06b6d4;border-radius:50%;
      animation:ariaPulse 1s ease-in-out infinite;
      display:inline-block;
    "></span>
    <span style="font-size:10px;letter-spacing:1px;">ARIA ANALYZING...</span>
  `,u.panel.appendChild(u.loadingEl);let m=document.createElement(`div`);return m.style.cssText=`
    padding: 8px;
    border-top: 1px solid rgba(0, 200, 255, 0.15);
    display: flex;
    gap: 6px;
    flex-shrink: 0;
  `,u.inputEl=document.createElement(`input`),u.inputEl.type=`text`,u.inputEl.placeholder=`Query ARIA...`,u.inputEl.style.cssText=`
    flex: 1;
    background: rgba(0, 20, 40, 0.8);
    border: 1px solid rgba(0, 200, 255, 0.25);
    color: #9ecfdf;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    padding: 5px 8px;
    outline: none;
    border-radius: 2px;
  `,u.submitBtn=document.createElement(`button`),u.submitBtn.textContent=`→`,u.submitBtn.style.cssText=`
    background: rgba(0, 20, 40, 0.8);
    border: 1px solid rgba(0, 200, 255, 0.25);
    color: #06b6d4;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 2px;
  `,m.appendChild(u.inputEl),m.appendChild(u.submitBtn),u.panel.appendChild(m),{panel:u.panel,subtitleSpan:n,cmdToggle:o,delBar:s,delToggle:l,keyBtn:r,inputEl:u.inputEl,submitBtn:u.submitBtn}}function w(e){let{subtitleSpan:n,cmdToggle:r,delBar:i,delToggle:a,keyBtn:s,inputEl:c,submitBtn:l}=e;s.addEventListener(`click`,()=>x()),r.addEventListener(`click`,()=>{u.commanderEnabled=!u.commanderEnabled,r.textContent=u.commanderEnabled?`ON`:`OFF`,r.style.background=u.commanderEnabled?`rgba(0, 100, 80, 0.4)`:`rgba(100, 40, 40, 0.3)`,r.style.borderColor=u.commanderEnabled?`rgba(0, 200, 150, 0.4)`:`rgba(255, 100, 100, 0.3)`,r.style.color=u.commanderEnabled?`#06d4a4`:`#888`,n.textContent=u.commanderEnabled?`Operational Commander`:`Asteroid Resource Intelligence Advisor`,u.commanderToggleCallback&&u.commanderToggleCallback(u.commanderEnabled)}),a.addEventListener(`click`,()=>{u.delegationEnabled=!u.delegationEnabled,a.textContent=u.delegationEnabled?`ON`:`OFF`,a.style.background=u.delegationEnabled?`rgba(80, 80, 0, 0.4)`:`rgba(100, 40, 40, 0.3)`,a.style.borderColor=u.delegationEnabled?`rgba(200, 200, 0, 0.4)`:`rgba(255, 100, 100, 0.3)`,a.style.color=u.delegationEnabled?`#d4d406`:`#888`,u.delegationToggleCallback&&u.delegationToggleCallback(u.delegationEnabled)}),r.addEventListener(`click`,()=>{i.style.display=u.commanderEnabled?`flex`:`none`,u.commanderEnabled||(u.delegationEnabled=!1,a.textContent=`OFF`,a.style.background=`rgba(100, 40, 40, 0.3)`,a.style.borderColor=`rgba(255, 100, 100, 0.3)`,a.style.color=`#888`,u.delegationToggleCallback&&u.delegationToggleCallback(!1))}),u.sessionCapNoticeEl.querySelector(`#advisor-opt-back-in`).addEventListener(`click`,()=>{t(),g()}),c.addEventListener(`keydown`,e=>{e.key===`Enter`&&o(),e.stopPropagation()}),l.addEventListener(`click`,o)}var T=`
  background: none;
  border: 1px solid;
  font-family: 'Courier New', monospace;
  font-size: 8px;
  padding: 1px 5px;
  cursor: pointer;
  border-radius: 2px;
  letter-spacing: 0.5px;
`;function E(e){if(!u.pendingActionsEl)return;if(e.length===0){u.pendingActionsEl.style.display=`none`,u.pendingActionsEl.innerHTML=``;return}u.pendingActionsEl.style.display=`block`,u.pendingActionsEl.innerHTML=``;let t=document.createElement(`div`);t.style.cssText=`
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(80, 80, 0, 0.2);
    border-bottom: 1px solid rgba(200, 200, 0, 0.1);
  `;let n=document.createElement(`span`);n.style.cssText=`font-size:9px;letter-spacing:1px;color:#d4d406;`,n.textContent=`PENDING ACTIONS (${e.length})`;let r=document.createElement(`div`);r.style.cssText=`display:flex;gap:4px;`;let i=document.createElement(`button`);i.textContent=`ALL`,i.title=`Approve all`,i.style.cssText=T+`border-color:rgba(0,200,100,0.4);color:#22c55e;`,i.addEventListener(`click`,()=>u.pendingApproveAllCallback?.());let a=document.createElement(`button`);a.textContent=`NONE`,a.title=`Reject all`,a.style.cssText=T+`border-color:rgba(200,100,100,0.4);color:#ef4444;`,a.addEventListener(`click`,()=>u.pendingRejectAllCallback?.()),r.appendChild(i),r.appendChild(a),t.appendChild(n),t.appendChild(r),u.pendingActionsEl.appendChild(t);for(let t of e){let e=document.createElement(`div`);e.style.cssText=`
      padding: 4px 8px;
      border-bottom: 1px solid rgba(200, 200, 0, 0.05);
      display: flex;
      align-items: center;
      gap: 6px;
    `;let n=document.createElement(`span`);n.style.cssText=`flex:1;font-size:10px;color:#c8c8a0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;`,n.textContent=t.description,n.title=t.reasoning||t.description;let r=document.createElement(`button`);r.textContent=`Y`,r.title=`Approve`,r.style.cssText=T+`border-color:rgba(0,200,100,0.4);color:#22c55e;`,r.addEventListener(`click`,()=>u.pendingApproveCallback?.(t.id));let i=document.createElement(`button`);i.textContent=`N`,i.title=`Reject`,i.style.cssText=T+`border-color:rgba(200,100,100,0.4);color:#ef4444;`,i.addEventListener(`click`,()=>u.pendingRejectCallback?.(t.id)),e.appendChild(n),e.appendChild(r),e.appendChild(i),u.pendingActionsEl.appendChild(e)}}function D(){u.isOpen=!u.isOpen,u.panel&&(u.panel.style.transform=u.isOpen?`translateX(0)`:`translateX(-100%)`),r(u.isOpen?300:0)}function O(){D()}function k(){if(i(`💬 ADVISOR`,()=>D(),`Open ARIA — Asteroid Resource Intelligence Advisor`,!0),w(C()),document.body.appendChild(u.panel),a()||c(),!document.getElementById(`aria-styles`)){let e=document.createElement(`style`);e.id=`aria-styles`,e.textContent=`
      @keyframes ariaPulse {
        0%, 100% { opacity: 0.3; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.2); }
      }
    `,document.head.appendChild(e)}}function A(e){u.playerSubmitCallback=e}function j(e){!u.loadingEl||!u.inputEl||!u.submitBtn||(u.loadingEl.style.display=e?`flex`:`none`,u.inputEl.disabled=e,u.submitBtn.disabled=e)}function M(e,t=!1){u.statusDot&&(t?(u.statusDot.style.background=`#f59e0b`,u.statusDot.title=`API key invalid or expired`):e?(u.statusDot.style.background=`#22c55e`,u.statusDot.title=`API key configured`):(u.statusDot.style.background=`#ef4444`,u.statusDot.title=`No API key`))}function N(e){u.apiKeyCallback=e}function P(e){u.providerCallback=e}function F(e){u.currentProvider=e}function I(e){u.commanderToggleCallback=e}function L(e){u.delegationToggleCallback=e}function R(e){u.pendingApproveCallback=e}function z(e){u.pendingRejectCallback=e}function B(e){u.pendingApproveAllCallback=e}function V(e){u.pendingRejectAllCallback=e}function H(e){u.tradeOfferResponseCallback=e}export{y as addAdvisorMessage,m as addProactiveBroadcast,_ as addTradeOfferMessage,d as beginBroadcastGracePeriod,k as initAdvisorPanel,N as onApiKeySet,I as onCommanderToggle,L as onDelegationToggle,R as onPendingActionApprove,B as onPendingActionApproveAll,z as onPendingActionReject,V as onPendingActionRejectAll,A as onPlayerSubmit,P as onProviderSet,H as onTradeOfferResponse,l as refreshUsageSummary,h as removeAuthErrorBanner,v as removeOfflineBanner,s as resetBroadcastState,f as resetTradeOfferState,M as setApiKeyStatus,F as setCurrentProvider,j as setLoading,b as showAuthErrorBanner,O as toggleAdvisorPanel,E as updatePendingActions};
//# sourceMappingURL=advisorPanel-Cc61STtq.js.map