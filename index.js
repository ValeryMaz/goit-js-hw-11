import{a as f,S as g,i as o}from"./assets/vendor-AbNyTJzi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h="49396254-d7c9e863026433b693f793a3f",y="https://pixabay.com/api/";function l(s){return f.get(y,{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:r})=>r)}l("cats").then(s=>console.log(s.data)).catch(s=>console.error("Ошибка:",s));const d=document.querySelector(".gallery"),L=new g(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function v(s){const r=s.map(({webformatURL:a,largeImageURL:n,tags:e,likes:t,views:i,comments:u,downloads:m})=>`<li class="gallery-item">
	<a class="gallery-link" href="${n}">
		<img
		  class="gallery-image"
		  src="${a}"
		  alt="${e}"
          width="360"
          height="152"

		/>
        <div class='desc-container'>
        <div class='desc'>
            <p class='desc-text'>Likes:</p>
            <span class='desc-n'>${t}</span>
        </div>
        <div class='text-wrapper'>
            <p class='desc-text'>Views:</p>
            <span class='desc-n'>${i}</span>
        </div>
        <div class='text-wrapper'>
            <p class='desc-text'>Comments:</p>
             <span class='desc-n'>${u}</span>
        </div>
        <div class='text-wrapper'>
            <p class='desc-text'>Downloads:</p>
             <span class='desc-n'>${m}</span>
        </div>

        </div>
	</a>
</li>`).join("");d.insertAdjacentHTML("beforeend",r),L.refresh()}function x(){d.innerHTML=""}const p=document.querySelector(".form"),c=document.querySelector(".loader");p.addEventListener("submit",b);function b(s){s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){o.warning({title:"Warning",message:"Sorry, the query string is empty. Please enter something!",position:"topRight",timeout:3e3});return}x(),c.classList.remove("hidden"),l(r).then(({hits:a})=>{if(a.length===0){o.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3});return}v(a)}).catch(a=>{console.log(a)}).finally(()=>{c.classList.add("hidden"),p.reset()})}
//# sourceMappingURL=index.js.map
