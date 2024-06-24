import{_ as a,o as l,c as i,a7 as e}from"./chunks/framework.DjUuv2wz.js";const Q=JSON.parse('{"title":"async及await的特点，它们的优点和缺点分别是什么？await原理是什么？","description":"","frontmatter":{"isTimeLine":true,"title":"async及await的特点，它们的优点和缺点分别是什么？await原理是什么？","date":"2020-04-14T00:00:00.000Z","tags":["面试","javascript"],"categories":["面试"]},"headers":[],"relativePath":"bigWeb/js/asyncawait.md","filePath":"bigWeb/js/asyncawait.md","lastUpdated":1718447701000}'),t={name:"bigWeb/js/asyncawait.md"},s=e('<h1 id="async-及-await-的特点-它们的优点和缺点分别是什么-await-原理是什么" tabindex="-1">async 及 await 的特点，它们的优点和缺点分别是什么？await 原理是什么？ <a class="header-anchor" href="#async-及-await-的特点-它们的优点和缺点分别是什么-await-原理是什么" aria-label="Permalink to &quot;async 及 await 的特点，它们的优点和缺点分别是什么？await 原理是什么？&quot;">​</a></h1><h2 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h2><ul><li>一个函数如果加上async 那么其返回值是Promise,async 就是将函数返回值使用 Promise.resolve() 进行包裹,和then处理返回值一样</li><li>await只能配合async使用 不能单独使用</li></ul><h2 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h2><ul><li>相比于Promise来说优势在于能够写出更加清晰的调用链,并且也能优雅的解决回调地狱的问题</li></ul><h2 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h2><ul><li>因为await将异步代码变成了同步代码,如果多个异步之间没有关系,会导致性能降低</li></ul><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><ul><li>await 就是 generator 加上 Promise 的语法糖，且内部实现了自动执行 generator</li></ul><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMmFzeW5jJUU1JThGJThBYXdhaXQlRTclOUElODQlRTclODklQjklRTclODIlQjklRUYlQkMlOEMlRTUlQUUlODMlRTQlQkIlQUMlRTclOUElODQlRTQlQkMlOTglRTclODIlQjklRTUlOTIlOEMlRTclQkMlQkElRTclODIlQjklRTUlODglODYlRTUlODglQUIlRTYlOTglQUYlRTQlQkIlODAlRTQlQjklODglRUYlQkMlOUZhd2FpdCVFNSU4RSU5RiVFNyU5MCU4NiVFNiU5OCVBRiVFNCVCQiU4MCVFNCVCOSU4OCVFRiVCQyU5RiUyMiUyQyUyMmRhdGUlMjIlM0ExNTg2ODIyNDAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFOSU5RCVBMiVFOCVBRiU5NSUyMiUyQyUyMmphdmFzY3JpcHQlMjIlNUQlMkMlMjJjYXRlZ29yaWVzJTIyJTNBJTVCJTIyJUU5JTlEJUEyJUU4JUFGJTk1JTIyJTVEJTdE"></div>',10),r=[s];function n(c,U,o,d,T,y){return l(),i("div",null,r)}const M=a(t,[["render",n]]);export{Q as __pageData,M as default};
