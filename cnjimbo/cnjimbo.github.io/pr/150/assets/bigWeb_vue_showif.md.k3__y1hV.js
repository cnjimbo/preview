import{_ as l,o as e,c as i,a5 as a}from"./chunks/framework.D2iPnCvv.js";const M=JSON.parse('{"title":"v-show与v-if","description":"","frontmatter":{"sidebar":{"title":"v-show 与 v-if","step":8},"isTimeLine":true,"title":"v-show与v-if","date":"2020-04-14T00:00:00.000Z","tags":["大前端","vue"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/vue/showif.md","filePath":"bigWeb/vue/showif.md","lastUpdated":1719297432000}'),t={name:"bigWeb/vue/showif.md"},o=a('<h1 id="v-show-与-v-if" tabindex="-1">v-show 与 v-if <a class="header-anchor" href="#v-show-与-v-if" aria-label="Permalink to &quot;v-show 与 v-if&quot;">​</a></h1><h2 id="v-show" tabindex="-1">v-show <a class="header-anchor" href="#v-show" aria-label="Permalink to &quot;v-show&quot;">​</a></h2><ul><li><code>v-show</code> 只是在 display: none 和 display: block|inline-block|flex ... 之间切换。无论初始条件是什么都会被渲染出来</li><li>初始渲染时有更高的开销 <ul><li>切换开销很小，适合于频繁切换的场景</li></ul></li></ul><h2 id="v-if" tabindex="-1">v-if <a class="header-anchor" href="#v-if" aria-label="Permalink to &quot;v-if&quot;">​</a></h2><ul><li>属性初始为 false 时，组件就不会被渲染</li><li>条件为 true时渲染出来，并且切换条件时会触发销毁/挂载组件 <ul><li>切换时开销更高</li><li>适合不经常切换的场景。</li></ul></li></ul>',5),s=[o];function d(h,r,U,J,n,T){return e(),i("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyc2lkZWJhciUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBJTIydi1zaG93JTIwJUU0JUI4JThFJTIwdi1pZiUyMiUyQyUyMnN0ZXAlMjIlM0E4JTdEJTJDJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMnYtc2hvdyVFNCVCOCU4RXYtaWYlMjIlMkMlMjJkYXRlJTIyJTNBMTU4NjgyMjQwMDAwMCUyQyUyMnRhZ3MlMjIlM0ElNUIlMjIlRTUlQTQlQTclRTUlODklOEQlRTclQUIlQUYlMjIlMkMlMjJ2dWUlMjIlNUQlMkMlMjJjYXRlZ29yaWVzJTIyJTNBJTVCJTIyJUU1JUE0JUE3JUU1JTg5JThEJUU3JUFCJUFGJTIyJTVEJTdE"},s)}const f=l(t,[["render",d]]);export{M as __pageData,f as default};
