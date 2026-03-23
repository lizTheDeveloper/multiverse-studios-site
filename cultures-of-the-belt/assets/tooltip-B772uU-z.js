var e=null,t=null;function n(){return e||(e=document.createElement(`div`),e.style.cssText=`
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      background: rgba(8,12,24,0.95);
      border: 1px solid rgba(100,140,255,0.45);
      border-radius: 5px;
      padding: 6px 10px;
      font-family: 'Courier New', monospace;
      font-size: 11px;
      color: #a0b8e0;
      max-width: 240px;
      line-height: 1.45;
      white-space: pre-wrap;
      box-shadow: 0 4px 16px rgba(0,0,0,0.6);
      display: none;
    `,document.body.appendChild(e)),e}var r=0,i=0,a=``;function o(e,t,o){let s=n(),c=e!==a;c&&(s.textContent=e,a=e),(s.style.display===`none`||c)&&(s.style.display=`block`,r=s.offsetWidth||200,i=s.offsetHeight||40);let l=t+12,u=o-8;l+r>window.innerWidth-8&&(l=t-r-12),u+i>window.innerHeight-8&&(u=o-i-12),u<8&&(u=8),s.style.left=`${l}px`,s.style.top=`${u}px`}function s(){e&&(e.style.display=`none`),t=null,a=``}function c(e,n){e.addEventListener(`mouseenter`,e=>{t=e.currentTarget,o(n,e.clientX,e.clientY)}),e.addEventListener(`mousemove`,e=>{t===e.currentTarget&&o(n,e.clientX,e.clientY)}),e.addEventListener(`mouseleave`,e=>{t===e.currentTarget&&s()})}export{c as t};
//# sourceMappingURL=tooltip-B772uU-z.js.map