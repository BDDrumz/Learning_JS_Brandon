(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{28362:function(e,t,n){Promise.resolve().then(n.bind(n,2157))},49079:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(13127)},13313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return i},default:function(){return l}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let i=r[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?o[i]=!!n[e]:o.setAttribute(i,n[e])}let{children:i,dangerouslySetInnerHTML:l}=n;return l?o.innerHTML=l.__html||"":i&&(o.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),o}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function l(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),l=Number(r.content),a=[];for(let t=0,n=r.previousElementSibling;t<l;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&a.push(n)}let c=t.map(o).filter(e=>{for(let t=0,n=a.length;t<n;t++)if(i(a[t],e))return a.splice(t,1),!1;return!0});a.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(l-a.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},52185:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},85935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return y},initScriptLoader:function(){return g},default:function(){return b}});let r=n(86921),o=n(91884),i=n(57437),l=r._(n(54887)),a=o._(n(2265)),u=n(27484),c=n(13313),s=n(52185),d=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],h=e=>{if(l.default.preinit){e.forEach(e=>{l.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:l="",strategy:a="afterInteractive",onError:u,stylesheets:s}=e,m=n||t;if(m&&f.has(m))return;if(d.has(t)){f.add(m),d.get(t).then(r,u);return}let y=()=>{o&&o(),f.add(m)},g=document.createElement("script"),v=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(i?(g.innerHTML=i.__html||"",y()):l?(g.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",y()):t&&(g.src=t,d.set(t,v)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();g.setAttribute(e,r)}"worker"===a&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",a),s&&h(s),document.body.appendChild(g)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>m(e))}):m(e)}function g(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function v(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:c="afterInteractive",onError:d,stylesheets:p,...h}=e,{updateScripts:y,scripts:g,getIsSsr:v,appDir:b,nonce:_}=(0,a.useContext)(u.HeadManagerContext),w=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;w.current||(o&&e&&f.has(e)&&o(),w.current=!0)},[o,t,n]);let j=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!j.current&&("afterInteractive"===c?m(e):"lazyOnload"===c&&("complete"===document.readyState?(0,s.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>m(e))})),j.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(y?(g[c]=(g[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:d,...h}]),y(g)):v&&v()?f.add(t||n):v&&!v()&&m(e)),b){if(p&&p.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(l.default.preload(n,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"}),(0,i.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...h,id:t}])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,i.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h,id:t}])+")"}}));"afterInteractive"===c&&n&&l.default.preload(n,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"})}return null}Object.defineProperty(v,"__nextScript",{value:!0});let b=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},13127:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:l}catch(e){n=l}}();var u=[],c=!1,s=-1;function d(){c&&r&&(c=!1,r.length?u=r.concat(u):s=-1,u.length&&f())}function f(){if(!c){var e=a(d);c=!0;for(var t=u.length;t;){for(r=u,u=[];++s<t;)r&&r[s].run();s=-1,t=u.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===l||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||c||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},l=!0;try{t[e](i,i.exports,r),l=!1}finally{l&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},2157:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(57437),o=n(2265),i=n(85935),l=n.n(i),a=n(30828),u=n(27842),c=n(87039);function s(e){let{children:t}=e,{isColorModeSet:n,setColorMode:i}=(0,u.d)("coreui-pro-next-js-admin-template-theme-modern");return(0,o.useEffect)(()=>{let e=new URLSearchParams(window.location.href.split("?")[1]),t=e.get("theme")&&e.get("theme").match(/^[A-Za-z0-9\s]+/)[0];if(t&&i(t),n())return},[]),(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("head",{children:[(0,r.jsx)("title",{children:"CoreUI PRO Next.js Admin Template"}),(0,r.jsx)(l(),{id:"get-color-scheme",strategy:"beforeInteractive",dangerouslySetInnerHTML:{__html:"\n        const userMode = localStorage.getItem('coreui-pro-next-js-admin-template-theme-modern');\n        const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;\n        if (userMode === 'dark' || (userMode !== 'light' && systemDarkMode)) {\n          document.documentElement.dataset.coreuiTheme = 'dark';\n        }"}}),(0,r.jsx)(l(),{id:"google-analytics",dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer','GTM-KX4JH47');"}})]}),(0,r.jsx)("body",{children:(0,r.jsx)(a.zt,{store:c.ZP,children:t})})]})}n(10658),n(86058)},87039:function(e,t,n){"use strict";n.d(t,{ix:function(){return a}});var r=n(35972),o=n(30828);let i={sidebarShow:!0,sidebarUnfoldable:!1,asideShow:!1,theme:"default"},l=(0,r.xC)({reducer:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,{type:t,...n}=arguments.length>1?arguments[1]:void 0;return"set"===t?{...e,...n}:e}});t.ZP=l;let a=o.v9},86058:function(){},10658:function(){}},function(e){e.O(0,[8548,2971,8069,1744],function(){return e(e.s=28362)}),_N_E=e.O()}]);