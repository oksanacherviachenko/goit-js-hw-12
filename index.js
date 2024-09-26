import{a as v,S as b,i as n}from"./assets/vendor-mdVVRe9K.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&e(p)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const w="46105418-b730233871b128ee828c4e337",I="https://pixabay.com/api/";async function h(r,o=1){const i=`${I}?key=${w}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=15`;try{const e=await v.get(i);if(e.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return{images:e.data.hits,totalHits:e.data.totalHits}}catch(e){return console.error(e.message),alert(e.message),{images:[],totalHits:0}}}let y;function f(r,o){o.innerHTML="";const i=r.map(e=>`
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
  `).join("");o.insertAdjacentHTML("beforeend",i),y?y.refresh():y=new b(".gallery-link",{captionsData:"alt",captionDelay:250})}const L=document.getElementById("searchForm"),u=document.getElementById("gallery"),g=document.getElementById("loader-container"),c=document.getElementById("loadMoreBtn");let a="",m=1,d=0,l=0;c.style.display="none";L.addEventListener("submit",async function(r){if(r.preventDefault(),a=document.getElementById("searchInput").value.trim(),a===""){n.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}c.style.display="none",m=1,u.innerHTML="",l=0,g.style.display="block";try{const{images:o,totalHits:i}=await h(a,m);o.length>0?(d=i,l=o.length,f(o,u),setTimeout(()=>{const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})},350),n.success({title:"Success",message:`Found ${d} images for "${a}"`,position:"topRight"}),l<d&&(c.style.display="block")):n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(o){n.error({title:"Error",message:o.message,position:"topRight"})}finally{g.style.display="none"}});c.addEventListener("click",async function(){m+=1,g.style.display="block";try{const{images:r}=await h(a,m);r.length>0&&(l+=r.length,f(r,u),setTimeout(()=>{const i=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})},350),l>=d&&(c.style.display="none",n.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})))}catch(r){n.error({title:"Error",message:r.message,position:"topRight"})}finally{g.style.display="none"}});
//# sourceMappingURL=index.js.map
