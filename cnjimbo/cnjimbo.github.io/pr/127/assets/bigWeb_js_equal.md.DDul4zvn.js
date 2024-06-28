import{_ as s,o as i,c as a,a5 as t}from"./chunks/framework.nTTieaYa.js";const c=JSON.parse('{"title":"==和===有什么区别","description":"","frontmatter":{"isTimeLine":true,"title":"==和===有什么区别","date":"2020-04-14T00:00:00.000Z","tags":["面试","javascript"],"categories":["面试"]},"headers":[],"relativePath":"bigWeb/js/equal.md","filePath":"bigWeb/js/equal.md","lastUpdated":1719297432000}'),l={name:"bigWeb/js/equal.md"},n=t(`<h1 id="和-有什么区别" tabindex="-1">== 和 === 有什么区别 <a class="header-anchor" href="#和-有什么区别" aria-label="Permalink to &quot;== 和 === 有什么区别&quot;">​</a></h1><h2 id="" tabindex="-1">== <a class="header-anchor" href="#" aria-label="Permalink to &quot;==&quot;">​</a></h2><ol><li>首先会判断两者类型是否相同。相同的话就直接进行比较</li><li>如果对比双方的类型不一样的话，就会进行类型转换</li><li>null 与 undefined : true</li><li>string 与 number : string-&gt;number</li><li>其中一方为 boolean:boolean -&gt; number</li><li>object 与 string、number、symbol : object -&gt; 原始值类型</li></ol><p><strong>示例</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // true</span></span></code></pre></div><h2 id="-1" tabindex="-1">=== <a class="header-anchor" href="#-1" aria-label="Permalink to &quot;===&quot;">​</a></h2><p>判断两者类型和值是否相同</p><p><strong>示例</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;true&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // false 类型不同</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;true&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;true&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NaN</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // false</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">更多参考</p><p><a href="./../../bigWeb/js/typeConvert.html">JS中的类型转换</a></p></div><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMiUzRCUzRCVFNSU5MiU4QyUzRCUzRCUzRCVFNiU5QyU4OSVFNCVCQiU4MCVFNCVCOSU4OCVFNSU4QyVCQSVFNSU4OCVBQiUyMiUyQyUyMmRhdGUlMjIlM0ExNTg2ODIyNDAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFOSU5RCVBMiVFOCVBRiU5NSUyMiUyQyUyMmphdmFzY3JpcHQlMjIlNUQlMkMlMjJjYXRlZ29yaWVzJTIyJTNBJTVCJTIyJUU5JTlEJUEyJUU4JUFGJTk1JTIyJTVEJTdE"></div>`,11),e=[n];function h(p,k,r,d,o,y){return i(),a("div",null,e)}const F=s(l,[["render",h]]);export{c as __pageData,F as default};
