import{t as e}from"./tooltip-B772uU-z.js";var t=130,n=`rgba(100,150,255,0.45)`,r=null,i=null,a=[];function o(){return r||(r=document.createElement(`div`),r.id=`hud-button-bar`,r.style.cssText=`
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 6px;
    background: rgba(0,6,18,0.75);
    border-right: 1px solid rgba(100,150,255,0.25);
    border-radius: 0 6px 6px 0;
    pointer-events: auto;
    z-index: 25;
    transition: left 0.25s ease;
  `,document.body.appendChild(r),r)}function s(n,r,s,c=!1){let l=o(),u=document.createElement(`button`);return u.textContent=n,u.style.cssText=`
    width: ${t}px;
    padding: 7px 10px;
    background: rgba(0,0,0,0.75);
    color: #88ccff;
    border: 1px solid rgba(100,150,255,0.45);
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    text-align: left;
    cursor: pointer;
    pointer-events: auto;
    transition: background 0.15s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,u.addEventListener(`mouseenter`,()=>{u.style.background=`rgba(20,50,110,0.9)`}),u.addEventListener(`mouseleave`,()=>{u.style.background=`rgba(0,0,0,0.75)`}),u.addEventListener(`click`,r),s&&e(u,s),i&&(u.style.borderColor=i),a.push(u),c&&l.firstChild?l.insertBefore(u,l.firstChild):l.appendChild(u),u}function c(e){let t=o();t.style.left=`${e}px`}function l(e){i=e;let t=e??n;for(let e of a)e.style.borderColor=t;r&&(r.style.borderRightColor=e??`rgba(100,150,255,0.25)`)}export{l as n,c as r,s as t};
//# sourceMappingURL=hudButtonBar-CSSPaPV7.js.map