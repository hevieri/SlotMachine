(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const m=25,f=35,I=40,p=800,y=850,O=890,o=["src/assets/img/1.jpeg","src/assets/img/2.jpeg","src/assets/img/3.jpeg","src/assets/img/4.jpeg","src/assets/img/5.jpeg","src/assets/img/6.jpeg"],a=()=>{const r=o.length;return Math.floor(Math.random()*r)},M=document.querySelector("#toPlay"),l=document.querySelector(".transitionOne"),u=document.querySelector(".transitionTwo"),d=document.querySelector(".transitionThree"),g=r=>{clearInterval(r)},_=()=>{let r=0;const n=setInterval(()=>{r++;const s=a();console.log(s,o[s]),l.classList.add("transition-one"),l.style.backgroundImage=`url(${o[s]})`,r===m&&(g(n),l.classList.remove("transition-one"))},p);let c=0;const i=setInterval(()=>{c++;const s=a();u.classList.add("transition-two"),u.style.backgroundImage=`url(${o[s]})`,c===f&&(g(i),u.classList.remove("transition-two"))},y);let e=0;const t=setInterval(()=>{e++;const s=a();d.classList.add("transition-three"),d.style.backgroundImage=`url(${o[s]})`,e===I&&(g(t),d.classList.remove("transition-three"))},O)};M.addEventListener("click",()=>{_()});console.log(o);
