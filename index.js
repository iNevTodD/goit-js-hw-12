import{a as f,i as n,S as m}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="57579078-06f4961acba6fdcc260ac8e17",h="https://pixabay.com/api/";function y(i){return f.get(h,{params:{key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:t})=>t).catch(t=>{n.error({title:"Error",message:"Failed to fetch images. Please try again later."})})}const p=new m(".gallery a",{captionsData:"alt",captionDelay:250});function g(i){const t=document.querySelector(".gallery");t.innerHTML=i.map(({webformatURL:s,largeImageURL:l,tags:e,likes:r,views:o,comments:c,downloads:u})=>`<li class="gallery-item">
            <a class="gallery-link" href="${l}">
                <img class="gallery-image" src="${s}" alt="${e}" width="360" height="152"/>
            </a>
            <ul class="info">
                <li class="info-item">
                    <h3 class="info-item-title" >Likes</h3>
                    <p class="info-title-value" >${r}</p>
                </li>
                <li class="info-item">
                    <h3 class="info-item-title" >Views</h3>
                    <p class="info-title-value" >${o}</p>
                </li>
                <li class="info-item">
                    <h3 class="info-item-title" >Comments</h3>
                    <p class="info-title-value" >${c}</p>
                </li>
                <li class="info-item">
                    <h3 class="info-item-title" >Downloads</h3>
                    <p class="info-title-value" >${u}</p>
                </li>
            </ul>
        </li>`).join(""),p.refresh()}function L(){const i=document.querySelector(".gallery");i.innerHTML=""}function v(){document.querySelector(".loader").classList.add("is-loading")}function S(){document.querySelector(".loader").classList.remove("is-loading")}const a=document.querySelector(".form-input"),q=document.querySelector(".form");q.addEventListener("submit",i=>{i.preventDefault(),a.value.trim()!==""&&(L(),v(),y(a.value.trim()).then(t=>{if(t.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");g(t.hits)}).catch(t=>{n.error({title:"Error",message:t.message})}).finally(()=>{S()}))});
//# sourceMappingURL=index.js.map
