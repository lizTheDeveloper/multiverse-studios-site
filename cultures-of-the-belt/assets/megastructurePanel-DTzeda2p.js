import{n as e,r as t}from"./safeHtml-CC8Elg0c.js";import{n,t as r}from"./megastructures-BX_wE4JW.js";var i=null,a=!1,o=[],s=0,c={},l=null,u=null,d=null;function f(e){l=e.onStartStage,u=e.onResolveCrisis,d=e.onSkipCrisis}function p(e,t,n){o=e,s=t,c=n,a&&T()}function m(){a?_():g()}function h(){_()}function g(){a=!0,i||v(),T(),i.style.display=`flex`}function _(){a=!1,i&&(i.style.display=`none`)}function v(){i=document.createElement(`div`),i.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(4,6,14,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 185;
    backdrop-filter: blur(4px);
  `,i.addEventListener(`click`,e=>{e.target===i&&_()}),document.body.appendChild(i)}function y(e){return e>=1e3?`${(e/1e3).toFixed(1)}k`:String(Math.round(e))}function b(e){let t=Math.ceil(e/60);if(t<60)return`${t}s`;let n=Math.floor(t/60),r=t%60;return r>0?`${n}m ${r}s`:`${n}m`}function x(e){for(let[t,n]of Object.entries(e))if((c[t]??0)<(n??0))return!1;return!0}function S(e){return Object.entries(e).map(([e,t])=>{let n=c[e]??0,r=n>=(t??0)?`#22c55e`:`#ef4444`,i=e.replace(/_/g,` `);return`<span style="color:${r}">${y(t??0)} ${i} (${y(n)})</span>`}).join(`, `)}function C(e,t){let n=Math.round(t/60);return`${Object.entries(e).map(([e,t])=>{let n=e.replace(/_/g,` `);return`${y(t??0)} ${n}`}).join(` + `)} every ${n}s`}function w(t,n){let i=n.activeCrisis;if(!i)return;let a=r[i.crisisId];if(!a)return;let o=!i.pending&&(i.pauseTicksRemaining??0)>0,s=document.createElement(`div`);s.style.cssText=`
    border: 1px solid ${o?`#d97706`:`#dc2626`};
    border-radius: 6px;
    padding: 14px;
    margin-bottom: 10px;
    background: ${o?`rgba(120,53,15,0.2)`:`rgba(127,29,29,0.25)`};
    ${o?``:`animation: crisis-pulse 2s ease-in-out infinite;`}
  `;let c=document.createElement(`div`);if(c.style.cssText=`font-weight:bold;color:${o?`#fbbf24`:`#f87171`};margin-bottom:6px;font-size:13px`,c.textContent=o?`⟳ REPAIRS IN PROGRESS: ${a.name}`:`⚠ CRISIS: ${a.name}`,s.appendChild(c),o){let e=document.createElement(`div`);e.style.cssText=`color:#fde68a;font-size:12px;line-height:1.5`,e.textContent=`Materials paid. Repair crews at work — construction resumes in ~${Math.ceil((i.pauseTicksRemaining??0)/60)}s.`,s.appendChild(e),t.appendChild(s);return}let l=document.createElement(`div`);l.style.cssText=`color:#fca5a5;font-size:12px;margin-bottom:10px;line-height:1.5`,l.textContent=a.description,s.appendChild(l);let f=document.createElement(`div`);f.style.cssText=`display:flex;gap:10px;flex-wrap:wrap`;let p=x(a.resolutionCost),m=document.createElement(`button`);m.style.cssText=`
    padding: 6px 14px;
    background: ${p?`#166534`:`#374151`};
    color: ${p?`#86efac`:`#6b7280`};
    border: 1px solid ${p?`#166534`:`#374151`};
    border-radius: 4px;
    font-size: 11px;
    cursor: ${p?`pointer`:`not-allowed`};
    font-family: inherit;
  `;let h=Object.entries(a.resolutionCost).map(([e,t])=>`${y(t??0)} ${e.replace(/_/g,` `)}`).join(` + `);m.innerHTML=p?e`✓ Resolve: pay ${h}`:e`✗ Need ${h}`,p&&u&&(m.onmouseover=()=>m.style.background=`#15803d`,m.onmouseout=()=>m.style.background=`#166534`,m.onclick=()=>{u&&u(n.id)}),f.appendChild(m);let g=document.createElement(`button`),_=Math.round(a.progressPenalty*100);g.style.cssText=`
    padding: 6px 14px;
    background: #7c2d12;
    color: #fdba74;
    border: 1px solid #7c2d12;
    border-radius: 4px;
    font-size: 11px;
    cursor: pointer;
    font-family: inherit;
  `,g.textContent=`⚡ Skip: lose ${_}% progress`,g.onmouseover=()=>g.style.background=`#9a3412`,g.onmouseout=()=>g.style.background=`#7c2d12`,g.onclick=()=>{d&&d(n.id)},f.appendChild(g),s.appendChild(f),t.appendChild(s)}function T(){if(!i)return;if(i.innerHTML=``,!document.getElementById(`mega-crisis-style`)){let e=document.createElement(`style`);e.id=`mega-crisis-style`,e.textContent=`
      @keyframes crisis-pulse {
        0%, 100% { border-color: #dc2626; }
        50% { border-color: #ef4444; box-shadow: 0 0 12px rgba(239,68,68,0.4); }
      }
    `,document.head.appendChild(e)}let a=document.createElement(`div`);a.style.cssText=`
    width: 720px;
    max-height: 85vh;
    overflow-y: auto;
    background: #080e1a;
    border: 1px solid #1e3a5f;
    border-radius: 8px;
    padding: 24px;
    color: #c8d8e8;
    font-family: 'Courier New', monospace;
    font-size: 13px;
  `;let c=document.createElement(`div`);c.style.cssText=`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #1e3a5f;
    padding-bottom: 12px;
  `,c.innerHTML=e`
    <div>
      <div style="font-size:18px;font-weight:bold;color:#e2e8f0">⬡ MEGASTRUCTURES</div>
      <div style="color:#64748b;font-size:11px;margin-top:2px">Endgame construction — Engineer robots required</div>
    </div>
    <div style="text-align:right">
      <div style="color:#94a3b8">Engineers available</div>
      <div style="font-size:20px;font-weight:bold;color:${s>0?`#22c55e`:`#ef4444`}">${s}</div>
    </div>
  `;let u=document.createElement(`button`);u.textContent=`✕`,u.style.cssText=`
    background: none; border: none; color: #64748b; font-size: 18px;
    cursor: pointer; padding: 0 0 0 16px;
  `,u.onclick=_,c.appendChild(u),a.appendChild(c);for(let i of Object.values(n)){let c=o.find(e=>e.id===i.id),u=c?.completedStages??0,d=c?.activeStageIndex??null,f=c?.complete??!1,p=!0,m=``;i.prerequisite&&(o.find(e=>e.id===i.prerequisite.id)?.completedStages??0)<i.prerequisite.minCompletedStages&&(p=!1,m=`Requires ${n[i.prerequisite.id].name} fully complete`);let h=document.createElement(`div`);h.style.cssText=`
      border: 1px solid ${f?`#854d0e`:p?`#1e3a5f`:`#1f2937`};
      border-radius: 6px;
      padding: 16px;
      margin-bottom: 16px;
      background: ${f?`rgba(120,53,15,0.15)`:`rgba(14,22,40,0.6)`};
    `;let g=document.createElement(`div`);g.style.cssText=`display:flex;justify-content:space-between;align-items:center;margin-bottom:10px`,g.innerHTML=e`
      <div>
        <span style="font-size:15px;font-weight:bold;color:${f?`#fbbf24`:`#e2e8f0`}">${i.name}</span>
        ${f?` <span style="color:#fbbf24;font-size:11px">✓ COMPLETE</span>`:``}
        ${p?``:e` <span style="color:#6b7280;font-size:11px">(${m})</span>`}
      </div>
      <div style="color:#64748b;font-size:11px">${u}/${i.stages.length} stages</div>
    `,h.appendChild(g);let _=document.createElement(`div`);if(_.style.cssText=`color:#64748b;font-size:11px;margin-bottom:12px`,_.textContent=i.description,h.appendChild(_),c?.activeCrisis&&w(h,c),c?.drainStalled){let e=document.createElement(`div`);e.style.cssText=`
        border: 1px solid #d97706;
        border-radius: 4px;
        padding: 8px 12px;
        margin-bottom: 10px;
        background: rgba(120,53,15,0.2);
        color: #fbbf24;
        font-size: 12px;
      `,e.textContent=`⚠ STALLED — resource drain cannot be paid. Restock to resume construction.`,h.appendChild(e)}for(let n of i.stages){let a=n.index<u,o=n.index===d,m=n.index===u&&!f,g=document.createElement(`div`);g.style.cssText=`
        padding: 8px 10px;
        margin-bottom: 6px;
        border-radius: 4px;
        border: 1px solid ${a?`#166534`:o?`#1d4ed8`:`#1f2937`};
        background: ${a?`rgba(20,83,45,0.25)`:o?`rgba(30,58,138,0.3)`:`transparent`};
        opacity: ${m||a||o?`1`:`0.45`};
      `;let _=document.createElement(`div`);_.style.cssText=`display:flex;justify-content:space-between;align-items:center`,_.innerHTML=e`
        <span style="color:${a?`#4ade80`:o?`#60a5fa`:`#94a3b8`}">
          ${a?`✓ `:o?`⟳ `:`${n.index+1}. `}
          <strong>${n.name}</strong>
        </span>
        <span style="color:#64748b;font-size:11px">${b(n.baseTicks)} @ ${n.engineersRequired} eng</span>
      `,g.appendChild(_);let v=document.createElement(`div`);if(v.style.cssText=`color:#a78bfa;font-size:11px;margin:3px 0`,v.textContent=`Bonus: ${n.bonus.description}`,g.appendChild(v),(m||o)&&n.activeDrain){let e=document.createElement(`div`);e.style.cssText=`color:#f59e0b;font-size:11px;margin:3px 0`;let t=n.drainIntervalTicks??3600;e.textContent=`⚡ Active drain: ${C(n.activeDrain,t)} — keep refinery running`,g.appendChild(e)}if((m||o)&&n.crisisType){let e=document.createElement(`div`);e.style.cssText=`color:#f87171;font-size:11px;margin:3px 0`,e.textContent=`⚠ Crisis risk: ${r[n.crisisType]?.name??n.crisisType}`,g.appendChild(e)}if(!a){let r=document.createElement(`div`);r.style.cssText=`font-size:11px;margin-top:4px`,r.innerHTML=e`Cost: ${t(S(n.cost))}`,g.appendChild(r)}if(o&&c){let t=c.stageProgressPct*100,n=c.drainStalled||c.activeCrisis!==null||s===0,r=n?` — STALLED`:c.estimatedTicksRemaining===null?``:` — ETA ${b(c.estimatedTicksRemaining)}`,i=document.createElement(`div`);if(i.style.cssText=`margin-top:8px`,i.innerHTML=e`
          <div style="display:flex;justify-content:space-between;font-size:11px;color:#94a3b8;margin-bottom:4px">
            <span>Construction progress${r}</span>
            <span>${t.toFixed(1)}%</span>
          </div>
          <div style="background:#1f2937;border-radius:3px;height:8px;overflow:hidden">
            <div style="width:${t.toFixed(1)}%;height:100%;background:${n?`linear-gradient(90deg,#92400e,#d97706)`:`linear-gradient(90deg,#1d4ed8,#3b82f6)`};border-radius:3px;transition:width 0.5s"></div>
          </div>
        `,g.appendChild(i),c.crisisCountdownTicksRemaining!=null&&c.crisisCountdownTicksRemaining>0){let e=c.crisisCountdownTicksRemaining<=5,t=document.createElement(`div`);t.style.cssText=`
            border: 1px solid ${e?`#fbbf24`:`#ef4444`};
            border-radius: 4px;
            padding: 8px 12px;
            margin-top: 8px;
            background: ${e?`rgba(120,53,15,0.3)`:`rgba(127,29,29,0.3)`};
            color: ${e?`#fbbf24`:`#f87171`};
            font-size: 12px;
            font-weight: bold;
            ${e?`animation: mega-crisis-pulse 0.4s ease-in-out infinite;`:`animation: mega-crisis-pulse 1.2s ease-in-out infinite;`}
          `,t.textContent=`⚠ STAGE CRISIS — ${c.crisisCountdownTicksRemaining} ticks until stage is lost!`,g.appendChild(t)}if(c.hasDrain&&c.drainIntervalTicks!==null){let t=c.drainAccumulator/c.drainIntervalTicks*100,n=document.createElement(`div`);n.style.cssText=`margin-top:4px`,n.innerHTML=e`
            <div style="font-size:10px;color:#64748b;margin-bottom:2px">Next drain in ${b(c.drainIntervalTicks-c.drainAccumulator)}</div>
            <div style="background:#1f2937;border-radius:2px;height:3px;overflow:hidden">
              <div style="width:${t.toFixed(1)}%;height:100%;background:#f59e0b;border-radius:2px"></div>
            </div>
          `,g.appendChild(n)}}if(m&&!o&&p){let e=x(n.cost),t=document.createElement(`button`);t.style.cssText=`
          margin-top: 8px;
          padding: 5px 14px;
          background: ${e?`#1d4ed8`:`#374151`};
          color: ${e?`#e2e8f0`:`#6b7280`};
          border: none;
          border-radius: 4px;
          font-size: 12px;
          cursor: ${e?`pointer`:`not-allowed`};
          font-family: inherit;
        `,t.disabled=!e,t.textContent=e?`▶ Begin Stage ${n.index+1}: ${n.name}`:`✗ Insufficient resources`,e&&(t.onmouseover=()=>t.style.background=`#2563eb`,t.onmouseout=()=>t.style.background=`#1d4ed8`,t.onclick=()=>{l&&l(i.id,n.index)}),g.appendChild(t)}h.appendChild(g)}a.appendChild(h)}let d=document.createElement(`div`);d.style.cssText=`text-align:center;color:#374151;font-size:11px;margin-top:8px`,d.textContent=`[G] to close  ·  Requires Engineer robots in fleet  ·  Active drain stages require sustained supply`,a.appendChild(d),i.appendChild(a)}export{h as hideMegastructurePanel,f as initMegastructurePanel,m as toggleMegastructurePanel,p as updateMegastructurePanel};
//# sourceMappingURL=megastructurePanel-DTzeda2p.js.map