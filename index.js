import{i as a}from"./assets/vendor-I1I71QQ2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const c="46105418-b730233871b128ee828c4e337",l="https://pixabay.com/api/";async function u(n){const r=`${l}?key=${c}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await fetch(r);if(!e.ok)throw new Error("Failed to fetch images");const s=await e.json();if(s.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s.hits}catch(e){return console.error(e.message),alert(e.message),[]}}function d(n,r){r.innerHTML="",n.forEach(e=>{const s=document.createElement("div");s.classList.add("image-card"),s.innerHTML=`
      <a href="${e.largeImageURL}" target="_blank">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${e.likes}</p>
        <p><b>Views:</b> ${e.views}</p>
        <p><b>Comments:</b> ${e.comments}</p>
        <p><b>Downloads:</b> ${e.downloads}</p>
      </div>
    `,r.appendChild(s)})}const f=document.getElementById("searchForm"),m=document.getElementById("gallery");f.addEventListener("submit",async function(n){n.preventDefault();const r=document.getElementById("searchInput").value.trim();if(r===""){a.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}const e=await u(r);e.length>0?(d(e,m),a.success({title:"Success",message:`Found ${e.length} images for "${r}"`,position:"topRight"})):a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})});
//# sourceMappingURL=index.js.map
