(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=document.querySelectorAll(".triangle_button button");c.forEach((r,o)=>{r.addEventListener("click",()=>{r.classList.add("bg-red"),c.forEach((l,f)=>{o!==f&&l.classList.remove("bg-red")});const i=document.querySelector(".triangle"),s=r.offsetWidth,e=r.getBoundingClientRect().left,t=document.querySelector(".triangle_wrapper").getBoundingClientRect().left,n=e-t+s/2-i.offsetWidth/2;i.style.left=`${n}px`})});
