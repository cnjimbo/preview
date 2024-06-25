import{_ as e,o as a,c as t,a6 as i}from"./chunks/framework.CaqK0m25.js";const h=JSON.parse('{"title":"服务端渲染","description":"","frontmatter":{"isTimeLine":true,"title":"服务端渲染","date":"2020-04-14T00:00:00.000Z","tags":["大前端","性能优化"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/performance/ssr.md","filePath":"bigWeb/performance/ssr.md","lastUpdated":1670770660000}'),r={name:"bigWeb/performance/ssr.md"},l=i('<h1 id="服务端渲染" tabindex="-1">服务端渲染 <a class="header-anchor" href="#服务端渲染" aria-label="Permalink to &quot;服务端渲染&quot;">​</a></h1><h2 id="客户端渲染" tabindex="-1">客户端渲染 <a class="header-anchor" href="#客户端渲染" aria-label="Permalink to &quot;客户端渲染&quot;">​</a></h2><p>客户端渲染模式下，服务端会把渲染需要的静态文件发送给客户端，客户端加载过来之后，自己在浏览器里跑一遍 JS，根据 JS 的运行结果，生成相应的 DOM。这种特性使得客户端渲染的源代码总是特别简洁。</p><p><strong>特点</strong></p><p>页面上呈现的内容，html 源文件里里找不到</p><h2 id="服务端渲染-1" tabindex="-1">服务端渲染 <a class="header-anchor" href="#服务端渲染-1" aria-label="Permalink to &quot;服务端渲染&quot;">​</a></h2><p>服务端渲染的模式下，当用户第一次请求页面时，由服务器把需要的组件或页面渲染成 HTML 字符串，然后把它返回给客户端。客户端拿到手的，是可以直接渲染然后呈现给用户的 HTML 内容，不需要为了生成 DOM 内容自己再去跑一遍 JS 代码。</p><p>服务端渲染本质上是本该浏览器做的事情，分担给服务器去做。这样当资源抵达浏览器时，它呈现的速度就快了。</p><p><strong>特点</strong></p><p>所见即所得，页面上呈现的内容，在 html 源文件里也能找到。</p><p><strong>服务端渲染解决了什么性能问题?</strong></p><blockquote><p>假设 A 网站页面中有一个关键字叫“前端性能优化”，这个关键字是 JS 代码跑过一遍后添加到 HTML 页面中的。那么客户端渲染模式下，我们在搜索引擎搜索这个关键字，是找不到 A 网站的——搜索引擎只会查找现成的内容，不会帮你跑 JS 代码。A 网站的运营方见此情形，感到很头大：搜索引擎搜不出来，用户找不到我们，谁还会用我的网站呢？为了把“现成的内容”拿给搜索引擎看，A 网站不得不启用服务端渲染。</p></blockquote><blockquote><p>但性能在其次，不代表性能不重要。服务端渲染解决了一个非常关键的性能问题——首屏加载速度过慢。在客户端渲染模式下，我们除了加载 HTML，还要等渲染所需的这部分 JS 加载完，之后还得把这部分 JS 在浏览器上再跑一遍。这一切都是发生在用户点击了我们的链接之后的事情，在这个过程结束之前，用户始终见不到我们网页的庐山真面目，也就是说用户一直在等！相比之下，服务端渲染模式下，服务器给到客户端的已经是一个直接可以拿来呈现给用户的网页，中间环节早在服务端就帮我们做掉了，用户岂不“美滋滋”？</p></blockquote><h3 id="vue-ssr" tabindex="-1">Vue SSR <a class="header-anchor" href="#vue-ssr" aria-label="Permalink to &quot;Vue SSR&quot;">​</a></h3><p>...wait</p><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMiVFNiU5QyU4RCVFNSU4QSVBMSVFNyVBQiVBRiVFNiVCOCVCMiVFNiU5RiU5MyUyMiUyQyUyMmRhdGUlMjIlM0ExNTg2ODIyNDAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFNSVBNCVBNyVFNSU4OSU4RCVFNyVBQiVBRiUyMiUyQyUyMiVFNiU4MCVBNyVFOCU4MyVCRCVFNCVCQyU5OCVFNSU4QyU5NiUyMiU1RCUyQyUyMmNhdGVnb3JpZXMlMjIlM0ElNUIlMjIlRTUlQTQlQTclRTUlODklOEQlRTclQUIlQUYlMjIlNUQlN0Q="></div>',16),o=[l];function s(n,U,p,c,d,y){return a(),t("div",null,o)}const V=e(r,[["render",s]]);export{h as __pageData,V as default};
