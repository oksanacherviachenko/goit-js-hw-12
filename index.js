import{a as d,S as u,i as a}from"./assets/vendor-mdVVRe9K.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const m="46105418-b730233871b128ee828c4e337",g="https://pixabay.com/api/";async function p(n){const r=`${g}?key=${m}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await d.get(r);if(e.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return e.data.hits}catch(e){return console.error(e.message),alert(e.message),[]}}let l;function f(n,r){r.innerHTML="";const e=n.map(s=>`
    <a href="${s.largeImageURL}" class="gallery-link" data-lightbox="image">
      <div class="gallery-item">
        <img src="${s.webformatURL}" alt="${s.tags}" class="gallery-image" loading="lazy" />
        <div class="info">
          <p><b>Likes:</b> ${s.likes}</p>
          <p><b>Views:</b> ${s.views}</p>
          <p><b>Comments:</b> ${s.comments}</p>
          <p><b>Downloads:</b> ${s.downloads}</p>
        </div>
      </div>
    </a>
  `).join("");r.insertAdjacentHTML("beforeend",e),l?l.refresh():l=new u(".gallery-link",{captionsData:"alt",captionDelay:250})}const y=document.getElementById("searchForm"),h=document.getElementById("gallery"),c=document.getElementById("loader-container");y.addEventListener("submit",async function(n){n.preventDefault();const r=document.getElementById("searchInput").value.trim();if(r===""){a.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}c.style.display="block";try{const e=await p(r);e.length>0?(f(e,h),a.success({title:"Success",message:`Found ${e.length} images for "${r}"`,position:"topRight"})):a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(e){a.error({title:"Error",message:e.message,position:"topRight"})}finally{c.style.display="none"}});
//# sourceMappingURL=index.js.map
