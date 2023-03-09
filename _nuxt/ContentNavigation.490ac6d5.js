import{W as V,a2 as j,O as s,h as d,A as N,a1 as $,P as E,K as k,D as v,T as O,al as B,az as A,a7 as L,a8 as P,G as C,x as n,aw as x,as as w,ag as M}from"./query.d67b8d24.js";import{u as z}from"./ContentQuery.ae8ff20f.js";import{q as H,w as S,h as c,e as F,s as q,_ as r,j as U,l as I,u as Q,a as W,b as T,T as G,d as K,f as Y}from"./entry.11c2c7bc.js";/* empty css                        */import"./ContentDoc.faef5b28.js";import"./ContentList.db29dd2e.js";import"./ContentRenderer.f9f20a3e.js";import"./ContentRendererMarkdown.b58f01b7.js";import"./ContentSlot.e0e45e19.js";import"./DocumentDrivenEmpty.47a452f4.js";import"./DocumentDrivenNotFound.687f9a35.js";import"./Markdown.4bc0a478.js";import"./ProseCode.ef8fc51b.js";import{u as J}from"./composables.26d5fdb4.js";import"./index.a6ef77ff.js";const X=async t=>{const{content:e}=V().public;typeof(t==null?void 0:t.params)!="function"&&(t=H(t));const i=t.params(),a=e.experimental.stripQueryParameters?S(`/navigation/${`${c(i)}.${e.integrity}`}/${F(i)}.json`):S(`/navigation/${c(i)}.${e.integrity}.json`);if(q())return(await r(()=>import("./client-db.3df9030e.js"),["./client-db.3df9030e.js","./query.d67b8d24.js","./index.a6ef77ff.js"],import.meta.url).then(l=>l.generateNavigation))(i);const o=await $fetch(a,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:U(i),previewToken:j("previewToken").value}});if(typeof o=="string"&&o.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return o};const Z=s({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(t,e){const i=await I[t.name]().then(a=>a.default||a);return()=>d(i,e.attrs,e.slots)}}),tt=s({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const i=N("_route"),a=i===$()?Q():i,o=E(()=>k(t.name)??a.meta.layout??"default");return()=>{const u=o.value&&o.value in I,l=a.meta.layoutTransition??W;return T(G,u&&l,{default:()=>T(Z,u&&{key:o.value,name:o.value,...e.attrs},e.slots).default()}).default()}}}),et=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"})),rt=s({emits:{error(t){return!0}},setup(t,{slots:e,emit:i}){const a=v(null),o=O();return B(u=>{if(!o.isHydrating)return i("error",u),a.value=u,!1}),()=>{var u,l;return a.value?(u=e.error)==null?void 0:u.call(e,{error:a}):(l=e.default)==null?void 0:l.call(e)}}}),nt=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"})),ot=s({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:i}){const a=v(!1);return A(()=>{a.value=!0}),o=>{var _;if(a.value)return(_=e.default)==null?void 0:_.call(e);const u=e.fallback||e.placeholder;if(u)return u();const l=o.fallback||o.placeholder||"",m=o.fallbackTag||o.placeholderTag||"span";return L(m,i,l)}}}),g=new WeakMap;function it(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(i,...a)=>{if(i.mounted$){const o=t.render(i,...a);return o.children===null||typeof o.children=="string"?P(o.type,o.props,o.children,o.patchFlag,o.dynamicProps,o.shapeFlag):d(o)}else return d("div",i.$attrs??i._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(i,a)=>{var u;const o=v(!1);return A(()=>{o.value=!0}),Promise.resolve(((u=t.setup)==null?void 0:u.call(t,i,a))||{}).then(l=>typeof l!="function"?{...l,mounted$:o}:(...m)=>{if(o.value){const _=l(...m);return _.children===null||typeof _.children=="string"?P(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):d(_)}else return d("div",a.attrs)})},g.set(t,e),e}const at=Object.freeze(Object.defineProperty({__proto__:null,createClientOnly:it,default:ot},Symbol.toStringTag,{value:"Module"})),ut=s({name:"DevOnly",setup(t,e){return()=>null}}),lt=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"})),_t=s({name:"ServerPlaceholder",render(){return L("div")}}),st=Object.freeze(Object.defineProperty({__proto__:null,default:_t},Symbol.toStringTag,{value:"Module"})),dt=s({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:[String,Boolean],default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const i=mt({duration:t.duration,throttle:t.throttle}),a=O();return a.hook("page:start",i.start),a.hook("page:finish",i.finish),C(()=>i.clear),()=>d("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${i.progress.value}%`,height:`${t.height}px`,opacity:i.isLoading.value?1:0,background:t.color||void 0,backgroundSize:`${100/i.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function mt(t){const e=v(0),i=v(!1),a=E(()=>1e4/t.duration);let o=null,u=null;function l(){_(),e.value=0,t.throttle?u=setTimeout(()=>{i.value=!0,y()},t.throttle):(i.value=!0,y())}function m(){e.value=100,R()}function _(){clearInterval(o),clearTimeout(u),o=null,u=null}function D(b){e.value=Math.min(100,e.value+b)}function R(){_(),setTimeout(()=>{i.value=!1,setTimeout(()=>{e.value=0},400)},500)}function y(){o=setInterval(()=>{D(a.value)},100)}return{progress:e,isLoading:i,start:l,finish:m,clear:_}}const pt=Object.freeze(Object.defineProperty({__proto__:null,default:dt},Symbol.toStringTag,{value:"Module"})),ft=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(i,a)=>(J(()=>t({...ft(i),...a.attrs},a)),()=>{var o,u;return e?(u=(o=a.slots).default)==null?void 0:u.call(o):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},ht=s({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var o;const i={...t},a=(((o=e.default)==null?void 0:o.call(e))||[]).filter(({children:u})=>u).map(({children:u})=>u).join("");return a&&(i.children=a),{noscript:[i]}})}),vt=s({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),gt=s({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),ct=s({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var a,o,u;return{title:((u=(o=(a=e.default)==null?void 0:a.call(e))==null?void 0:o[0])==null?void 0:u.children)||null}})}),Et=s({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),yt=s({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var o,u,l;const i={...t},a=(l=(u=(o=e.default)==null?void 0:o.call(e))==null?void 0:u[0])==null?void 0:l.children;return a&&(i.children=a),{style:[i]}})}),Pt=s({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var i,a;return(a=(i=e.slots).default)==null?void 0:a.call(i)}}),St=s({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),Tt=s({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),p=Object.freeze(Object.defineProperty({__proto__:null,Base:gt,Body:Tt,Head:Pt,Html:St,Link:vt,Meta:Et,NoScript:ht,Style:yt,Title:ct},Symbol.toStringTag,{value:"Module"}));n(()=>r(()=>import("./entry.11c2c7bc.js").then(t=>t.A),["./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./AppNavSearch.327fd0f2.js"),["./AppNavSearch.327fd0f2.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./AppSidebar.8a397fa0.js"),["./AppSidebar.8a397fa0.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ArticleItem.3d87009f.js"),["./ArticleItem.3d87009f.js","./ArticleItem.vue.363e2f60.js","./query.d67b8d24.js","./ArticleItem.fb9c4e7e.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentDoc.faef5b28.js"),["./ContentDoc.faef5b28.js","./query.d67b8d24.js","./composables.26d5fdb4.js","./ContentRenderer.f9f20a3e.js","./ContentRendererMarkdown.b58f01b7.js","./index.a6ef77ff.js","./ContentQuery.ae8ff20f.js","./entry.11c2c7bc.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentList.db29dd2e.js"),["./ContentList.db29dd2e.js","./ContentQuery.ae8ff20f.js","./query.d67b8d24.js","./entry.11c2c7bc.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>At),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentQuery.ae8ff20f.js").then(t=>t.C),["./ContentQuery.ae8ff20f.js","./query.d67b8d24.js","./entry.11c2c7bc.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentRenderer.f9f20a3e.js"),["./ContentRenderer.f9f20a3e.js","./ContentRendererMarkdown.b58f01b7.js","./query.d67b8d24.js","./index.a6ef77ff.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentRendererMarkdown.b58f01b7.js"),["./ContentRendererMarkdown.b58f01b7.js","./query.d67b8d24.js","./index.a6ef77ff.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentSlot.e0e45e19.js"),["./ContentSlot.e0e45e19.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DocumentDrivenEmpty.47a452f4.js"),["./DocumentDrivenEmpty.47a452f4.js","./query.d67b8d24.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DocumentDrivenNotFound.687f9a35.js"),["./DocumentDrivenNotFound.687f9a35.js","./query.d67b8d24.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./Markdown.4bc0a478.js"),["./Markdown.4bc0a478.js","./ContentSlot.e0e45e19.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseA.22e294f6.js"),["./ProseA.22e294f6.js","./query.d67b8d24.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseBlockquote.7fa5d1eb.js"),["./ProseBlockquote.7fa5d1eb.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseCode.ef8fc51b.js"),["./ProseCode.ef8fc51b.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseCodeInline.53c7007b.js"),["./ProseCodeInline.53c7007b.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseEm.602a91f7.js"),["./ProseEm.602a91f7.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH1.2c5614c1.js"),["./ProseH1.2c5614c1.js","./query.d67b8d24.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH2.6ae363b9.js"),["./ProseH2.6ae363b9.js","./query.d67b8d24.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH3.0bccbd4b.js"),["./ProseH3.0bccbd4b.js","./query.d67b8d24.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH4.3bc1ad69.js"),["./ProseH4.3bc1ad69.js","./query.d67b8d24.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH5.aa87a99a.js"),["./ProseH5.aa87a99a.js","./query.d67b8d24.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH6.cc87647f.js"),["./ProseH6.cc87647f.js","./query.d67b8d24.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseHr.f315058a.js"),["./ProseHr.f315058a.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseImg.acced2af.js"),["./ProseImg.acced2af.js","./query.d67b8d24.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseLi.d68a8f1c.js"),["./ProseLi.d68a8f1c.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseOl.eb3c1776.js"),["./ProseOl.eb3c1776.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseP.b5b56fa7.js"),["./ProseP.b5b56fa7.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseStrong.c45690af.js"),["./ProseStrong.c45690af.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTable.a7079377.js"),["./ProseTable.a7079377.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTbody.0302f775.js"),["./ProseTbody.0302f775.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTd.c848b654.js"),["./ProseTd.c848b654.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTh.fea93522.js"),["./ProseTh.fea93522.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseThead.5b12cf1e.js"),["./ProseThead.5b12cf1e.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTr.2f0e7157.js"),["./ProseTr.2f0e7157.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseUl.5a9e337a.js"),["./ProseUl.5a9e337a.js","./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./welcome.52d39645.js"),["./welcome.52d39645.js","./query.d67b8d24.js","./composables.26d5fdb4.js","./entry.11c2c7bc.js","./entry.3638b351.css","./ContentQuery.ae8ff20f.js","./ContentDoc.faef5b28.js","./ContentRenderer.f9f20a3e.js","./ContentRendererMarkdown.b58f01b7.js","./index.a6ef77ff.js","./ContentList.db29dd2e.js","./ContentSlot.e0e45e19.js","./DocumentDrivenEmpty.47a452f4.js","./DocumentDrivenNotFound.687f9a35.js","./Markdown.4bc0a478.js","./ProseCode.ef8fc51b.js","./ProseCode.e63e49c6.css","./ArticleItem.fb9c4e7e.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>nt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>at),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>lt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>st),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./query.d67b8d24.js").then(t=>t.aM),[],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>pt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.11c2c7bc.js").then(t=>t.p),["./entry.11c2c7bc.js","./query.d67b8d24.js","./entry.3638b351.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.NoScript));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Link));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Base));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Title));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Meta));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Style));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Head));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Html));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Body));const Ot=s({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=x(t),i=E(()=>{var o;return typeof((o=e.value)==null?void 0:o.params)=="function"?e.value.params():e.value});if(!i.value&&K("dd-navigation").value){const{navigation:o}=Y();return{navigation:o}}const{data:a}=await z(`content-navigation-${c(i.value)}`,()=>X(i.value));return{navigation:a}},render(t){const e=w(),{navigation:i}=t,a=l=>d(M,{to:l._path},()=>l.title),o=(l,m)=>d("ul",m?{"data-level":m}:null,l.map(_=>_.children?d("li",null,[a(_),o(_.children,m+1)]):d("li",null,a(_)))),u=l=>o(l,0);return e!=null&&e.default?e.default({navigation:i,...this.$attrs}):u(i)}}),At=Object.freeze(Object.defineProperty({__proto__:null,default:Ot},Symbol.toStringTag,{value:"Module"}));export{Ot as default};
