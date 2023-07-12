(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),a=n.n(o),r=n(645),i=n.n(r)()(a());i.push([e.id,"#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n}\n\n.header {\n    width: 100%;\n    font-size: 24px;\n    background-color: #cbadcb;\n    display: flex;\n    justify-content: center;\n    gap: 25px;\n}\n\n.header button {\n    width: 100px;\n    background-color: #c5c1c5;\n    text-align: center;\n    padding: 1rem;\n    border: 0;\n    margin: 1rem 0;\n}\n\n.header button:hover {\n    background-color: #ffffff;\n}\n\n.bgimage {\n    margin: 70px 20vw;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.bgimage * {\n    width: 640px;\n}\n\n.card {\n    padding: 0 50px;\n    text-align: center;\n    font-size: 16px;\n}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);o&&i[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},i=[],s=0;s<e.length;s++){var d=e[s],c=o.base?d[0]+o.base:d[0],u=r[c]||0,m="".concat(c," ").concat(u);r[c]=u+1;var l=n(m),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)t[l].references++,t[l].updater(p);else{var f=a(p,o);o.byIndex=s,t.splice(s,0,{identifier:m,updater:f,references:1})}i.push(m)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=n(r[i]);t[s].references--}for(var d=o(e,a),c=0;c<r.length;c++){var u=n(r[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=n.p+"c1f970303cb4db8211ab.jpg",t=n.p+"18351870d2a72d2be804.jpg",o=n.p+"68cf85ba748b10f7a562.jpg",a=()=>{const t=document.getElementById("main");for(;t.hasChildNodes();)t.removeChild(t.firstChild);const n=document.createElement("div");n.classList.add("image"),t.appendChild(n);const o=document.createElement("img");o.setAttribute("src",e),o.setAttribute("alt","Restaurant Background Image"),n.appendChild(o);const a=document.createElement("div");a.classList.add("card"),t.appendChild(a);const r=document.createElement("h1");r.textContent="Welcome to my Restaurant",a.appendChild(r);const i=document.createElement("p");i.textContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",a.appendChild(i)};var r=n(379),i=n.n(r),s=n(795),d=n.n(s),c=n(569),u=n.n(c),m=n(565),l=n.n(m),p=n(216),f=n.n(p),g=n(589),h=n.n(g),v=n(426),b={};b.styleTagTransform=h(),b.setAttributes=l(),b.insert=u().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=f(),i()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals,(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("header"),e.appendChild(t);const n=document.createElement("button");n.textContent="Home",n.id="home",t.appendChild(n);const o=document.createElement("button");o.textContent="Menu",o.id="menu",t.appendChild(o);const a=document.createElement("button");a.textContent="Contact",a.id="contact",t.appendChild(a);const r=document.createElement("div");r.classList.add("bgimage"),r.id="main",e.appendChild(r)})(),document.getElementById("home").onclick=()=>a(),document.getElementById("menu").onclick=()=>(()=>{const e=document.getElementById("main");for(;e.hasChildNodes();)e.removeChild(e.firstChild);const n=document.createElement("div");n.classList.add("image"),e.appendChild(n);const o=document.createElement("img");o.setAttribute("src",t),o.setAttribute("alt","Menu Image"),n.appendChild(o);const a=document.createElement("div");a.classList.add("card"),e.appendChild(a);const r=document.createElement("h1");r.textContent="Menu",a.appendChild(r);const i=document.createElement("p");i.textContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",a.appendChild(i)})(),document.getElementById("contact").onclick=()=>(()=>{const e=document.getElementById("main");for(;e.hasChildNodes();)e.removeChild(e.firstChild);const t=document.createElement("div");t.classList.add("image"),e.appendChild(t);const n=document.createElement("img");n.setAttribute("src",o),n.setAttribute("alt","Contact Image"),t.appendChild(n);const a=document.createElement("div");a.classList.add("card"),e.appendChild(a);const r=document.createElement("h1");r.textContent="Contact Us",a.appendChild(r);const i=document.createElement("p");i.textContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",a.appendChild(i)})(),a()})()})();