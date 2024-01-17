import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="modulepreload",p=function(_,i){return new URL(_,i).href},O={},t=function(i,n,c){let e=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");e=Promise.all(n.map(o=>{if(o=p(o,c),o in O)return;O[o]=!0;const l=o.endsWith(".css"),E=l?'[rel="stylesheet"]':"";if(!!c)for(let u=r.length-1;u>=0;u--){const a=r[u];if(a.href===o&&(!l||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${E}`))return;const s=document.createElement("link");if(s.rel=l?"stylesheet":d,l||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),l)return new Promise((u,a)=>{s.addEventListener("load",u),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${o}`)))})}))}return e.then(()=>i()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,m=R({page:"preview"});f.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=m);const P={"./src/stories/Button.stories.ts":async()=>t(()=>import("./Button.stories-kxVEP-9Z.js"),__vite__mapDeps([0,1,2]),import.meta.url),"./src/stories/Configure.mdx":async()=>t(()=>import("./Configure-zIa76RG5.js"),__vite__mapDeps([3,4,5,6,7,8,9,10]),import.meta.url),"./src/stories/Counter.stories.ts":async()=>t(()=>import("./Counter.stories-0XjsGn_E.js"),__vite__mapDeps([]),import.meta.url),"./src/stories/Header.stories.ts":async()=>t(()=>import("./Header.stories-UAVAtOiX.js"),__vite__mapDeps([11,12,1,2,13]),import.meta.url),"./src/stories/Page.stories.ts":async()=>t(()=>import("./Page.stories-LFR7HN-N.js"),__vite__mapDeps([14,12,1,2,13,15]),import.meta.url),"./src/stories/components/buttons.stories.ts":async()=>t(()=>import("./buttons.stories-TvAGRbq6.js"),__vite__mapDeps([]),import.meta.url)};async function T(_){return P[_]()}const{composeConfigs:w,PreviewWeb:L,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,v=async()=>{const _=await Promise.all([t(()=>import("./entry-preview-8lgUVhYG.js"),__vite__mapDeps([16,9]),import.meta.url),t(()=>import("./entry-preview-docs-9MJIY5Re.js"),__vite__mapDeps([17,8,5]),import.meta.url),t(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([18,7]),import.meta.url),t(()=>import("./preview-bicOdALM.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-7_AR4B57.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([19,9]),import.meta.url),t(()=>import("./preview-FekBEZxm.js"),__vite__mapDeps([20,9]),import.meta.url),t(()=>import("./preview-TkXSQy1x.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([21,9]),import.meta.url),t(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-37XjEtlT.js"),__vite__mapDeps([22,5]),import.meta.url),t(()=>import("./preview-Cq8TUqvV.js"),__vite__mapDeps([23,4,5,24]),import.meta.url)]);return w(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:T,getProjectAnnotations:v});export{t as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Button.stories-kxVEP-9Z.js","./Button-7rAGAjg8.js","./Button-X8hm4PDT.css","./Configure-zIa76RG5.js","./index-XiNr8FW2.js","./_commonjsHelpers-5-cIlDoe.js","./index-6vXeiX4y.js","./index-ogXoivrg.js","./index-8LwkIDqE.js","./index-PPLHz8o0.js","./index-7MmEg4M7.js","./Header.stories-UAVAtOiX.js","./Header-k8RHlPtT.js","./Header-Yyx952jD.css","./Page.stories-LFR7HN-N.js","./Page-fZ7a-HXz.css","./entry-preview-8lgUVhYG.js","./entry-preview-docs-9MJIY5Re.js","./preview-VI2eoWmp.js","./preview-OnO0tzRj.js","./preview-FekBEZxm.js","./preview-u8M_OEO2.js","./preview-37XjEtlT.js","./preview-Cq8TUqvV.js","./preview-ajD2B-_R.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
