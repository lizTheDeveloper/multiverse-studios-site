import{n as e}from"./safeHtml-CC8Elg0c.js";function t(e,t){let n=i(e,t);document.body.appendChild(n)}function n(e){return e>=1e3?`${(e/1e3).toFixed(1)}k`:Math.round(e).toString()}function r(e){let{robotCounts:t,elapsedLabel:r,researchGained:i,anomaliesFound:a}=e;if(Object.values(t).reduce((e,t)=>e+t,0)===0)return`[ARIA] Fleet status: dormant. No robots were active during your absence of ${r}. Operations are ready to resume on your command.`;let o=[];if(o.push(`[ARIA] Overnight report — you were away for ${r}.`),t.miners>0){let r=Object.values(e.resourcesGained).reduce((e,t)=>e+t,0);o.push(`${t.miners} Miner${t.miners>1?`s`:``} continued extraction operations, adding approximately ${n(r)} units of raw ore to storage.`)}return t.researchers>0&&i>0&&o.push(`Research teams accumulated ${n(i)} research points — check the tech tree for any newly affordable nodes.`),a>0&&o.push(`Scout sweep patterns flagged ${a} potential anomal${a>1?`ies`:`y`} worth investigating.`),e.wasCapped&&o.push(`Note: simulation was capped at 8 hours. Additional elapsed time was not simulated.`),o.push(`All systems nominal. Ready when you are, operator.`),o.join(` `)}function i(t,i){let o=document.createElement(`div`);o.id=`morning-report-overlay`,o.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(4,6,14,0.92);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 500;
    backdrop-filter: blur(6px);
  `;let s=document.createElement(`div`);s.style.cssText=`
    width: 560px;
    max-height: 80vh;
    overflow-y: auto;
    background: #080e1a;
    border: 1px solid #1e3a5f;
    border-radius: 10px;
    padding: 28px;
    color: #c8d8e8;
    font-family: 'Courier New', monospace;
    font-size: 13px;
  `,s.innerHTML=e`
    <div style="margin-bottom:20px">
      <div style="font-size:20px;font-weight:bold;color:#e2e8f0;margin-bottom:4px">
        ◈ OVERNIGHT REPORT
      </div>
      <div style="color:#64748b;font-size:11px">
        You were away for <span style="color:#94a3b8">${t.elapsedLabel}</span>
        ${t.wasCapped?` <span style="color:#f59e0b">(capped at 8h)</span>`:``}
        · ${n(t.ticksSimulated)} sim ticks estimated
      </div>
    </div>
  `;let{robotCounts:c}=t;if(Object.values(c).reduce((e,t)=>e+t,0)>0){let t=document.createElement(`div`);t.style.cssText=`margin-bottom:16px`,t.innerHTML=e`
      <div style="color:#60a5fa;font-size:11px;font-weight:bold;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px">Fleet Activity</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
        ${c.miners>0?a(`Miners`,c.miners,`active, ore extraction`):``}
        ${c.scouts>0?a(`Scouts`,c.scouts,`active, sweep patterns`):``}
        ${c.haulers>0?a(`Haulers`,c.haulers,`active, logistics`):``}
        ${c.researchers>0?a(`Researchers`,c.researchers,`active, research`):``}
        ${c.refiners>0?a(`Refiners`,c.refiners,`active, processing`):``}
      </div>
    `,s.appendChild(t)}if(Object.values(t.resourcesGained).some(e=>e>.5)){let r=document.createElement(`div`);r.style.cssText=`margin-bottom:16px`,r.innerHTML=`<div style="color:#22c55e;font-size:11px;font-weight:bold;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px">Resources Gathered</div>`;let i=document.createElement(`div`);i.style.cssText=`display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px`;for(let[r,a]of Object.entries(t.resourcesGained)){if(a<.5)continue;let t=document.createElement(`div`);t.style.cssText=`background:rgba(20,30,50,0.8);border:1px solid #1f2937;border-radius:4px;padding:6px 8px`,t.innerHTML=e`
        <div style="color:#94a3b8;font-size:10px;text-transform:capitalize">${r}</div>
        <div style="color:#4ade80;font-weight:bold">+${n(a)}</div>
      `,i.appendChild(t)}if(r.appendChild(i),Object.values(t.refinedGained).some(e=>e>0)){let e=document.createElement(`div`);e.style.cssText=`margin-top:8px;color:#a78bfa;font-size:11px`;let i=Object.entries(t.refinedGained).filter(([,e])=>e>.5).map(([e,t])=>`${n(t)} ${e.replace(/_/g,` `)}`).join(`, `);i&&(e.textContent=`Refinery output: ${i}`),r.appendChild(e)}s.appendChild(r)}if(t.researchGained>1){let r=document.createElement(`div`);r.style.cssText=`margin-bottom:16px`,r.innerHTML=e`
      <div style="color:#f59e0b;font-size:11px;font-weight:bold;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px">Research</div>
      <div style="background:rgba(20,30,50,0.8);border:1px solid #1f2937;border-radius:4px;padding:8px">
        <span style="color:#fbbf24">+${n(t.researchGained)}</span>
        <span style="color:#64748b"> research points accumulated — check the tech tree</span>
      </div>
    `,s.appendChild(r)}if(t.anomaliesFound>0){let n=document.createElement(`div`);n.style.cssText=`margin-bottom:16px`,n.innerHTML=e`
      <div style="color:#a855f7;font-size:11px;font-weight:bold;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px">Anomaly Sweep</div>
      <div style="background:rgba(20,10,40,0.8);border:1px solid #3b1f6e;border-radius:4px;padding:8px;color:#c084fc">
        Scouts flagged ${t.anomaliesFound} potential anomal${t.anomaliesFound>1?`ies`:`y`}.
        Deploy scout units to investigate.
      </div>
    `,s.appendChild(n)}let l=document.createElement(`div`);l.style.cssText=`
    margin-bottom: 24px;
    padding: 12px;
    background: rgba(100, 0, 150, 0.08);
    border: 1px solid #4c1d95;
    border-radius: 6px;
    color: #c084fc;
    font-size: 12px;
    line-height: 1.5;
  `,l.textContent=r(t),s.appendChild(l);let u=document.createElement(`button`);return u.textContent=`▶ Resume Operations`,u.style.cssText=`
    width: 100%;
    padding: 12px;
    background: #1d4ed8;
    color: #e2e8f0;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    font-family: inherit;
    letter-spacing: 0.5px;
  `,u.onmouseover=()=>u.style.background=`#2563eb`,u.onmouseout=()=>u.style.background=`#1d4ed8`,u.onclick=()=>{o.remove(),i()},s.appendChild(u),o.appendChild(s),o}function a(e,t,n){return`
    <div style="background:rgba(20,30,50,0.8);border:1px solid #1f2937;border-radius:4px;padding:6px 8px">
      <div style="color:#94a3b8;font-size:10px">${e}</div>
      <div><span style="color:#60a5fa;font-weight:bold">${t}</span>
        <span style="color:#374151;font-size:10px"> ${n}</span>
      </div>
    </div>
  `}export{t as showMorningReport};
//# sourceMappingURL=morningReport-CwsN4Ts9.js.map