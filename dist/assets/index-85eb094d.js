(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();let d=(o=21)=>crypto.getRandomValues(new Uint8Array(o)).reduce((e,r)=>(r&=63,r<36?e+=r.toString(36):r<62?e+=(r-26).toString(36).toUpperCase():r>62?e+="-":e+="_",e),"");/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var u=m;function a(){return new DOMException("The request is not allowed","NotAllowedError")}async function p(o){if(!navigator.clipboard)throw a();return navigator.clipboard.writeText(o)}async function f(o){const e=document.createElement("span");e.textContent=o,e.style.whiteSpace="pre",e.style.webkitUserSelect="auto",e.style.userSelect="all",document.body.appendChild(e);const r=window.getSelection(),c=window.document.createRange();r.removeAllRanges(),c.selectNode(e),r.addRange(c);let t=!1;try{t=window.document.execCommand("copy")}finally{r.removeAllRanges(),window.document.body.removeChild(e)}if(!t)throw a()}async function m(o){try{await p(o)}catch(e){try{await f(o)}catch(r){throw r||e||a()}}}const y=document.querySelector("#passwordButton"),w=document.querySelector("#passwordH2"),i=document.querySelector("#digitInput"),l=document.querySelector("#digitNumberP");setInterval(()=>{i.value<10?l.innerHTML=`0${i.value}`:l.innerHTML=i.value},100);y.addEventListener("click",o=>{o.preventDefault();const{value:e}=i,r=d(e);u(r),w.innerHTML=r,aviso()});
