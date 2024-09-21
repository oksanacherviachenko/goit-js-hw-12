import{S as d,i}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const u="46105418-b730233871b128ee828c4e337",m="https://pixabay.com/api/";async function g(n){const o=`${m}?key=${u}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await fetch(o);if(!e.ok)throw new Error("Failed to fetch images");const r=await e.json();if(r.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.hits}catch(e){return console.error(e.message),alert(e.message),[]}}let l;function p(n,o){o.innerHTML="";const e=n.map(r=>`
    <a href="${r.largeImageURL}" class="gallery-link" data-lightbox="image">
      <div class="gallery-item">
        <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-image" loading="lazy" />
        <div class="info">
          <p><b>Likes:</b> ${r.likes}</p>
          <p><b>Views:</b> ${r.views}</p>
          <p><b>Comments:</b> ${r.comments}</p>
          <p><b>Downloads:</b> ${r.downloads}</p>
        </div>
      </div>
    </a>
  `).join("");o.insertAdjacentHTML("beforeend",e),l?l.refresh():l=new d(".gallery-link",{captionsData:"alt",captionDelay:250})}const f=document.getElementById("searchForm"),y=document.getElementById("gallery"),c=document.getElementById("loader-container");f.addEventListener("submit",async function(n){n.preventDefault();const o=document.getElementById("searchInput").value.trim();if(o===""){i.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}c.style.display="block";try{const e=await g(o);e.length>0?(p(e,y),i.success({title:"Success",message:`Found ${e.length} images for "${o}"`,position:"topRight"})):i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(e){i.error({title:"Error",message:e.message,position:"topRight"})}finally{c.style.display="none"}});
//# sourceMappingURL=index.js.map
