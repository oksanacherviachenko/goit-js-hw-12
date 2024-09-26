import{a as v,S as b,i as a}from"./assets/vendor-mdVVRe9K.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&e(m)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const E="46105418-b730233871b128ee828c4e337",L="https://pixabay.com/api/";async function f(s,r=1){const i=`${L}?key=${E}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=15`;try{const e=await v.get(i);if(e.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return{images:e.data.hits,totalHits:e.data.totalHits}}catch(e){return console.error(e.message),alert(e.message),{images:[],totalHits:0}}}let y;function h(s,r){const i=s.map(e=>`
    <a href="${e.largeImageURL}" class="gallery-link" data-lightbox="image">
      <div class="gallery-item">
        <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-image" loading="lazy" />
        <div class="info">
          <div class="info-item">
            <p>Likes</p>
            <p>${e.likes}</p>
          </div>
          <div class="info-item">
            <p>Views</p>
            <p>${e.views}</p>
          </div>
          <div class="info-item">
            <p>Comments</p>
            <p>${e.comments}</p>
          </div>
          <div class="info-item">
            <p>Downloads</p>
            <p>${e.downloads}</p>
          </div>
        </div>
      </div>
    </a>
  `).join("");r.insertAdjacentHTML("beforeend",i),y?y.refresh():y=new b(".gallery-link",{captionsData:"alt",captionDelay:250})}const w=document.getElementById("searchForm"),u=document.getElementById("gallery"),p=document.getElementById("loader-container"),c=document.getElementById("loadMoreBtn");let n="",g=1,d=0,l=0;c.style.display="none";w.addEventListener("submit",async function(s){if(s.preventDefault(),n=document.getElementById("searchInput").value.trim(),n===""){a.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}c.style.display="none",g=1,u.innerHTML="",l=0,p.style.display="block";try{const{images:r,totalHits:i}=await f(n,g);r.length>0?(d=i,l=r.length,h(r,u),a.success({title:"Success",message:`Found ${d} images for "${n}"`,position:"topRight"}),l<d&&(c.style.display="block")):a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(r){a.error({title:"Error",message:r.message,position:"topRight"})}finally{p.style.display="none"}});c.addEventListener("click",async function(){g+=1,p.style.display="block";try{const{images:s}=await f(n,g);s.length>0&&(l+=s.length,h(s,u),l>=d&&(c.style.display="none",a.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})))}catch(s){a.error({title:"Error",message:s.message,position:"topRight"})}finally{p.style.display="none"}});
//# sourceMappingURL=index.js.map
