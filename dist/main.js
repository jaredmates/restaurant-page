(()=>{"use strict";function e(){const e=document.createElement("div");e.classList.add("home-container");const t=document.createElement("h1");t.textContent="Jared's Tacos";const n=document.createElement("h3");n.textContent="Where Men's Dreams Come True!";const c=document.createElement("p");c.textContent="Come eat my tacos. Super cheap and you're guaranteed to leave with a smile!";const d=document.createElement("img");return d.src="images/tacos.jpg",e.appendChild(t),e.appendChild(n),e.appendChild(c),e.appendChild(d),e}const t=document.querySelector("#content");t.appendChild(function(){const n=document.createElement("div");n.classList.add("button-container");const c=document.createElement("button");c.textContent="Home",c.addEventListener("click",(()=>{t.removeChild(t.children[1]),t.appendChild(e())}));const d=document.createElement("button");d.textContent="Menu",d.addEventListener("click",(()=>{t.removeChild(t.children[1]),t.appendChild(function(){const e=document.createElement("div");e.classList.add("menu-container");const t=document.createElement("h1");return t.textContent="Menu Page",e.appendChild(t),e}())}));const o=document.createElement("button");return o.textContent="Contact",o.addEventListener("click",(()=>{t.removeChild(t.children[1]),t.appendChild(function(){const e=document.createElement("div");e.classList.add("contact-container");const t=document.createElement("h1");return t.textContent="Contact Page",e.appendChild(t),e}())})),n.appendChild(c),n.appendChild(d),n.appendChild(o),n}()),t.appendChild(e())})();