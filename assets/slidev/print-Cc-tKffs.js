import{d,ah as _,I as p,b as a,e as t,x as s,z as r,F as h,ag as u,o as l,X as f,l as g,g as v}from"../modules/vue-C2TjUINt.js";import{z as x,c as m,x as b,A as y,_ as N}from"../index-C_3oe8n5.js";import{N as k}from"./NoteDisplay-C743cpRF.js";import"../modules/shiki-C2Ye29ZQ.js";const w={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},z={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},S=t("div",{class:"flex-auto"},null,-1),A={key:0,class:"border-main mb-8"},C=d({__name:"print",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),x({title:`Notes - ${m.title}`});const i=p(()=>b.map(o=>{var n;return(n=o.meta)==null?void 0:n.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,n)=>(l(),a("div",w,[t("div",L,[t("div",T,[t("h1",V,s(r(m).title),1),t("div",z,s(new Date().toLocaleString()),1)]),(l(!0),a(h,null,u(i.value,(e,c)=>(l(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(r(y)),1),f(" "+s(e==null?void 0:e.title)+" ",1),S])]),g(k,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(l(),a("hr",A)):v("v-if",!0)]))),128))])]))}}),R=N(C,[["__file","/opt/hostedtoolcache/node/20.11.1/x64/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{R as default};
