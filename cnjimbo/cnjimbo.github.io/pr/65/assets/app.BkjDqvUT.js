import{W as o,aT as p,aU as u,aV as l,aW as c,aX as f,aY as d,aZ as m,a_ as h,a$ as g,b0 as A,d as b,u as P,o as v,B as w,b1 as y,b2 as C,b3 as R,a4 as _}from"./chunks/framework.DCSCGRqn.js";import{R as T}from"./chunks/theme.BsWy3goi.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(T),E=b({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=P();return v(()=>{w(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&y(),C(),R(),s.setup&&s.setup(),()=>_(s.Layout)}});async function S(){globalThis.__VITEPRESS__=!0;const e=V(),a=D();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function D(){return h(E)}function V(){let e=o,a;return g(t=>{let n=A(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&S().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{S as createApp};
