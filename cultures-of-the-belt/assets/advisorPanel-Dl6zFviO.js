import"./bufferLayout-CBw95Q_j.js";import{h as e,m as t,s as n}from"./fallbackChain-BrNZYpFp.js";import{r,t as i}from"./hudButtonBar-CSSPaPV7.js";import"./gameState-DqPpzQi2.js";import{i as a}from"./advisorService-DbuA5BmR.js";import{a as o,c as s,d as c,f as l,i as u,l as d,n as f,o as p,p as m,r as h,s as g,t as _,u as v}from"./index-DV6TxUtP.js";function y(){if(!m.panel)return;let t=document.getElementById(`aria-key-overlay`);if(t){t.remove();return}let r=document.createElement(`div`);r.id=`aria-key-overlay`,r.style.cssText=`
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
  `;for(let e of[{value:`anthropic`,label:`Anthropic (Claude)`},{value:`groq`,label:`Groq (GPT-OSS)`},{value:`proxy`,label:`Playtest Proxy`},{value:`heuristic`,label:`Heuristic (Offline)`}]){let t=document.createElement(`option`);t.value=e.value,t.textContent=e.label,e.value===m.currentProvider&&(t.selected=!0),a.appendChild(t)}let o={anthropic:`sk-ant-...`,groq:`gsk_...`,proxy:`Proxy key...`},s=document.createElement(`div`);s.style.cssText=`font-size:9px;color:#06b6d4;letter-spacing:1px;margin-bottom:4px;opacity:0.7;`,s.textContent=`API KEY`;let c=document.createElement(`div`);c.style.cssText=`display:flex;gap:6px;`;let u=document.createElement(`input`);u.type=`password`,u.placeholder=o[m.currentProvider]||`API key...`,u.style.cssText=`
    flex: 1;
    background: rgba(0, 20, 40, 0.8);
    border: 1px solid rgba(0, 200, 255, 0.25);
    color: #9ecfdf;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    padding: 4px 6px;
    outline: none;
    border-radius: 2px;
  `,a.addEventListener(`change`,()=>{u.placeholder=o[a.value]||`API key...`,s.textContent=a.value===`proxy`?`PROXY KEY`:`API KEY`});let d=document.createElement(`button`);d.textContent=`SAVE`,d.style.cssText=`
    background: rgba(0, 100, 150, 0.4);
    border: 1px solid rgba(0, 200, 255, 0.3);
    color: #06b6d4;
    font-family: 'Courier New', monospace;
    font-size: 9px;
    padding: 4px 8px;
    cursor: pointer;
    border-radius: 2px;
    letter-spacing: 1px;
  `;let f=document.createElement(`div`);f.style.cssText=`font-size:9px;color:#06b6d4;letter-spacing:1px;margin-bottom:4px;margin-top:8px;opacity:0.7;`,f.textContent=`DAILY TOKEN BUDGET`;let p=document.createElement(`input`);p.type=`number`,p.min=`1000`,p.step=`1000`,p.value=String(n()),p.style.cssText=`
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
  `,d.addEventListener(`click`,()=>{m.providerCallback&&m.providerCallback(a.value);let t=u.value.trim();m.apiKeyCallback&&m.apiKeyCallback(t);let n=parseInt(p.value,10);!Number.isNaN(n)&&n>0&&(e(n),l()),r.remove()}),c.appendChild(u),c.appendChild(d),r.appendChild(i),r.appendChild(a),r.appendChild(s),r.appendChild(c),r.appendChild(f),r.appendChild(p),m.panel.appendChild(r),u.focus()}var b=`
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
`;function x(){m.panel=document.createElement(`div`),m.panel.style.cssText=b;let e=document.createElement(`div`);e.style.cssText=`
    padding: 10px 12px;
    border-bottom: 1px solid rgba(0, 200, 255, 0.15);
    background: rgba(0, 20, 40, 0.6);
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  `,m.statusDot=document.createElement(`span`),m.statusDot.style.cssText=`
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
  `,r.textContent=`🔑`,e.appendChild(m.statusDot),e.appendChild(t),e.appendChild(n),e.appendChild(r),m.panel.appendChild(e);let i=document.createElement(`div`);i.style.cssText=`
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
  `,o.textContent=`OFF`,i.appendChild(a),i.appendChild(o),m.panel.appendChild(i);let s=document.createElement(`div`);s.style.cssText=`
    padding: 4px 12px;
    border-bottom: 1px solid rgba(0, 200, 255, 0.1);
    display: none;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    background: rgba(0, 10, 25, 0.5);
  `;let u=document.createElement(`span`);u.style.cssText=`font-size:9px;letter-spacing:1px;opacity:0.6;`,u.textContent=`AUTO-DELEGATE`;let d=document.createElement(`button`);d.style.cssText=`
    background: rgba(100, 40, 40, 0.3);
    border: 1px solid rgba(255, 100, 100, 0.3);
    color: #888;
    font-family: 'Courier New', monospace;
    font-size: 9px;
    padding: 2px 8px;
    cursor: pointer;
    border-radius: 2px;
    letter-spacing: 1px;
  `,d.textContent=`OFF`,s.appendChild(u),s.appendChild(d),m.panel.appendChild(s),m.pendingActionsEl=document.createElement(`div`),m.pendingActionsEl.style.cssText=`
    flex-shrink: 0;
    max-height: 200px;
    overflow-y: auto;
    display: none;
    border-bottom: 1px solid rgba(200, 200, 0, 0.15);
    scrollbar-width: thin;
    scrollbar-color: rgba(200,200,0,0.2) transparent;
  `,m.panel.appendChild(m.pendingActionsEl),m.messagesEl=document.createElement(`div`),m.messagesEl.style.cssText=`
    flex: 1;
    overflow-y: auto;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    scrollbar-width: thin;
    scrollbar-color: rgba(0,200,255,0.2) transparent;
  `,m.panel.appendChild(m.messagesEl),m.sessionCapNoticeEl=document.createElement(`div`),m.sessionCapNoticeEl.style.cssText=`
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
  `;let f=document.createElement(`span`);f.textContent=`Session token budget exceeded — using onboard analysis`;let p=document.createElement(`button`);p.id=`advisor-opt-back-in`,p.textContent=`OPT BACK IN`,p.style.cssText=`
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
  `,m.sessionCapNoticeEl.appendChild(f),m.sessionCapNoticeEl.appendChild(p),m.panel.appendChild(m.sessionCapNoticeEl),m.sessionUsageEl=document.createElement(`div`),m.sessionUsageEl.style.cssText=`
    padding: 4px 12px;
    border-top: 1px solid rgba(0, 200, 255, 0.1);
    font-size: 9px;
    color: rgba(158, 207, 223, 0.6);
    letter-spacing: 0.5px;
    flex-shrink: 0;
  `,c(),m.panel.appendChild(m.sessionUsageEl),m.usageSummaryEl=document.createElement(`div`),m.usageSummaryEl.style.cssText=`
    padding: 4px 12px;
    border-top: 1px solid rgba(0, 200, 255, 0.1);
    font-size: 9px;
    color: rgba(158, 207, 223, 0.6);
    letter-spacing: 0.5px;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
  `,l(),m.panel.appendChild(m.usageSummaryEl),m.loadingEl=document.createElement(`div`),m.loadingEl.style.cssText=`
    padding: 6px 12px;
    display: none;
    align-items: center;
    gap: 6px;
    opacity: 0.6;
    flex-shrink: 0;
  `,m.loadingEl.innerHTML=`
    <span class="aria-pulse" style="
      width:6px;height:6px;background:#06b6d4;border-radius:50%;
      animation:ariaPulse 1s ease-in-out infinite;
      display:inline-block;
    "></span>
    <span style="font-size:10px;letter-spacing:1px;">ARIA ANALYZING...</span>
  `,m.panel.appendChild(m.loadingEl);let h=document.createElement(`div`);return h.style.cssText=`
    padding: 8px;
    border-top: 1px solid rgba(0, 200, 255, 0.15);
    display: flex;
    gap: 6px;
    flex-shrink: 0;
  `,m.inputEl=document.createElement(`input`),m.inputEl.type=`text`,m.inputEl.placeholder=`Query ARIA...`,m.inputEl.style.cssText=`
    flex: 1;
    background: rgba(0, 20, 40, 0.8);
    border: 1px solid rgba(0, 200, 255, 0.25);
    color: #9ecfdf;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    padding: 5px 8px;
    outline: none;
    border-radius: 2px;
  `,m.submitBtn=document.createElement(`button`),m.submitBtn.textContent=`→`,m.submitBtn.style.cssText=`
    background: rgba(0, 20, 40, 0.8);
    border: 1px solid rgba(0, 200, 255, 0.25);
    color: #06b6d4;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 2px;
  `,h.appendChild(m.inputEl),h.appendChild(m.submitBtn),m.panel.appendChild(h),{panel:m.panel,subtitleSpan:n,cmdToggle:o,delBar:s,delToggle:d,keyBtn:r,inputEl:m.inputEl,submitBtn:m.submitBtn}}function S(e){let{subtitleSpan:n,cmdToggle:r,delBar:i,delToggle:a,keyBtn:o,inputEl:s,submitBtn:l}=e;o.addEventListener(`click`,()=>y()),r.addEventListener(`click`,()=>{m.commanderEnabled=!m.commanderEnabled,r.textContent=m.commanderEnabled?`ON`:`OFF`,r.style.background=m.commanderEnabled?`rgba(0, 100, 80, 0.4)`:`rgba(100, 40, 40, 0.3)`,r.style.borderColor=m.commanderEnabled?`rgba(0, 200, 150, 0.4)`:`rgba(255, 100, 100, 0.3)`,r.style.color=m.commanderEnabled?`#06d4a4`:`#888`,n.textContent=m.commanderEnabled?`Operational Commander`:`Asteroid Resource Intelligence Advisor`,m.commanderToggleCallback&&m.commanderToggleCallback(m.commanderEnabled)}),a.addEventListener(`click`,()=>{m.delegationEnabled=!m.delegationEnabled,a.textContent=m.delegationEnabled?`ON`:`OFF`,a.style.background=m.delegationEnabled?`rgba(80, 80, 0, 0.4)`:`rgba(100, 40, 40, 0.3)`,a.style.borderColor=m.delegationEnabled?`rgba(200, 200, 0, 0.4)`:`rgba(255, 100, 100, 0.3)`,a.style.color=m.delegationEnabled?`#d4d406`:`#888`,m.delegationToggleCallback&&m.delegationToggleCallback(m.delegationEnabled)}),r.addEventListener(`click`,()=>{i.style.display=m.commanderEnabled?`flex`:`none`,m.commanderEnabled||(m.delegationEnabled=!1,a.textContent=`OFF`,a.style.background=`rgba(100, 40, 40, 0.3)`,a.style.borderColor=`rgba(255, 100, 100, 0.3)`,a.style.color=`#888`,m.delegationToggleCallback&&m.delegationToggleCallback(!1))}),m.sessionCapNoticeEl.querySelector(`#advisor-opt-back-in`).addEventListener(`click`,()=>{t(),c()}),s.addEventListener(`keydown`,e=>{e.key===`Enter`&&u(),e.stopPropagation()}),l.addEventListener(`click`,u)}var C=`
  background: none;
  border: 1px solid;
  font-family: 'Courier New', monospace;
  font-size: 8px;
  padding: 1px 5px;
  cursor: pointer;
  border-radius: 2px;
  letter-spacing: 0.5px;
`;function w(e){if(!m.pendingActionsEl)return;if(e.length===0){m.pendingActionsEl.style.display=`none`,m.pendingActionsEl.innerHTML=``;return}m.pendingActionsEl.style.display=`block`,m.pendingActionsEl.innerHTML=``;let t=document.createElement(`div`);t.style.cssText=`
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(80, 80, 0, 0.2);
    border-bottom: 1px solid rgba(200, 200, 0, 0.1);
  `;let n=document.createElement(`span`);n.style.cssText=`font-size:9px;letter-spacing:1px;color:#d4d406;`,n.textContent=`PENDING ACTIONS (${e.length})`;let r=document.createElement(`div`);r.style.cssText=`display:flex;gap:4px;`;let i=document.createElement(`button`);i.textContent=`ALL`,i.title=`Approve all`,i.style.cssText=C+`border-color:rgba(0,200,100,0.4);color:#22c55e;`,i.addEventListener(`click`,()=>m.pendingApproveAllCallback?.());let a=document.createElement(`button`);a.textContent=`NONE`,a.title=`Reject all`,a.style.cssText=C+`border-color:rgba(200,100,100,0.4);color:#ef4444;`,a.addEventListener(`click`,()=>m.pendingRejectAllCallback?.()),r.appendChild(i),r.appendChild(a),t.appendChild(n),t.appendChild(r),m.pendingActionsEl.appendChild(t);for(let t of e){let e=document.createElement(`div`);e.style.cssText=`
      padding: 4px 8px;
      border-bottom: 1px solid rgba(200, 200, 0, 0.05);
      display: flex;
      align-items: center;
      gap: 6px;
    `;let n=document.createElement(`span`);n.style.cssText=`flex:1;font-size:10px;color:#c8c8a0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;`,n.textContent=t.description,n.title=t.reasoning||t.description;let r=document.createElement(`button`);r.textContent=`Y`,r.title=`Approve`,r.style.cssText=C+`border-color:rgba(0,200,100,0.4);color:#22c55e;`,r.addEventListener(`click`,()=>m.pendingApproveCallback?.(t.id));let i=document.createElement(`button`);i.textContent=`N`,i.title=`Reject`,i.style.cssText=C+`border-color:rgba(200,100,100,0.4);color:#ef4444;`,i.addEventListener(`click`,()=>m.pendingRejectCallback?.(t.id)),e.appendChild(n),e.appendChild(r),e.appendChild(i),m.pendingActionsEl.appendChild(e)}}function T(){m.isOpen=!m.isOpen,m.panel&&(m.panel.style.transform=m.isOpen?`translateX(0)`:`translateX(-100%)`),r(m.isOpen?300:0)}function E(){T()}function D(){if(i(`💬 ADVISOR`,()=>T(),`Open ARIA — Asteroid Resource Intelligence Advisor`,!0),S(x()),document.body.appendChild(m.panel),a()||d(),!document.getElementById(`aria-styles`)){let e=document.createElement(`style`);e.id=`aria-styles`,e.textContent=`
      @keyframes ariaPulse {
        0%, 100% { opacity: 0.3; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.2); }
      }
    `,document.head.appendChild(e)}}function O(e){m.playerSubmitCallback=e}function k(e){!m.loadingEl||!m.inputEl||!m.submitBtn||(m.loadingEl.style.display=e?`flex`:`none`,m.inputEl.disabled=e,m.submitBtn.disabled=e)}function A(e,t=!1){m.statusDot&&(t?(m.statusDot.style.background=`#f59e0b`,m.statusDot.title=`API key invalid or expired`):e?(m.statusDot.style.background=`#22c55e`,m.statusDot.title=`API key configured`):(m.statusDot.style.background=`#ef4444`,m.statusDot.title=`No API key`))}function j(e){m.apiKeyCallback=e}function M(e){m.providerCallback=e}function N(e){m.currentProvider=e}function P(e){m.commanderToggleCallback=e}function F(e){m.delegationToggleCallback=e}function I(e){m.pendingApproveCallback=e}function L(e){m.pendingRejectCallback=e}function R(e){m.pendingApproveAllCallback=e}function z(e){m.pendingRejectAllCallback=e}export{_ as addAdvisorMessage,f as addProactiveBroadcast,h as beginBroadcastGracePeriod,D as initAdvisorPanel,j as onApiKeySet,P as onCommanderToggle,F as onDelegationToggle,I as onPendingActionApprove,R as onPendingActionApproveAll,L as onPendingActionReject,z as onPendingActionRejectAll,O as onPlayerSubmit,M as onProviderSet,v as refreshUsageSummary,o as removeAuthErrorBanner,p as removeOfflineBanner,g as resetBroadcastState,A as setApiKeyStatus,N as setCurrentProvider,k as setLoading,s as showAuthErrorBanner,E as toggleAdvisorPanel,w as updatePendingActions};
//# sourceMappingURL=advisorPanel-Dl6zFviO.js.map