import{_ as s,o as i,c as a,a6 as n}from"./chunks/framework.CaqK0m25.js";const F=JSON.parse('{"title":"实现bind","description":"","frontmatter":{"sidebar":{"title":"简单-实现bind","step":1},"isTimeLine":true,"title":"实现bind","date":"2020-09-01T00:00:00.000Z","tags":["手撕代码","javascript"],"categories":["手撕代码"]},"headers":[],"relativePath":"bigWeb/js/myBind.md","filePath":"bigWeb/js/myBind.md","lastUpdated":1718447701000}'),h={name:"bigWeb/js/myBind.md"},l=n(`<h1 id="实现bind" tabindex="-1">实现bind <a class="header-anchor" href="#实现bind" aria-label="Permalink to &quot;实现bind&quot;">​</a></h1><p>面试非常高频率的题</p><h2 id="bind简介" tabindex="-1">bind简介 <a class="header-anchor" href="#bind简介" aria-label="Permalink to &quot;bind简介&quot;">​</a></h2><ul><li>\b改变this指向</li><li>返回一个新的函数</li><li>如果对返回的函数使用new则生成一个新的实例</li><li>多次bind只有第一次bind有效</li><li>第一个参数为新的this，不设置则默认globalThis</li><li>第二个及之后的参数作为其参数传入</li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// undefined</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> print1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> print.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;print1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">print1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// print1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> print2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> print.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;print2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;print22&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">print2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// print2</span></span></code></pre></div><h2 id="简单实现" tabindex="-1">简单实现 <a class="header-anchor" href="#简单实现" aria-label="Permalink to &quot;简单实现&quot;">​</a></h2><p>不考各种边界情况</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mybind</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">thisArg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    thisArg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> thisArg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    thisArg.fn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">arguments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> F</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bindArgs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> args.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">arguments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> F</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> thisArg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bindArgs)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> thisArg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bindArgs)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> print1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> print.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mybind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;print1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">print1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// print1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> print2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> print.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mybind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;print2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mybind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;print22&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">print2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// print2</span></span></code></pre></div><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyc2lkZWJhciUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBJTIyJUU3JUFFJTgwJUU1JThEJTk1LSVFNSVBRSU5RSVFNyU4RSVCMGJpbmQlMjIlMkMlMjJzdGVwJTIyJTNBMSU3RCUyQyUyMmlzVGltZUxpbmUlMjIlM0F0cnVlJTJDJTIydGl0bGUlMjIlM0ElMjIlRTUlQUUlOUUlRTclOEUlQjBiaW5kJTIyJTJDJTIyZGF0ZSUyMiUzQTE1OTg5MTg0MDAwMDAlMkMlMjJ0YWdzJTIyJTNBJTVCJTIyJUU2JTg5JThCJUU2JTkyJTk1JUU0JUJCJUEzJUU3JUEwJTgxJTIyJTJDJTIyamF2YXNjcmlwdCUyMiU1RCUyQyUyMmNhdGVnb3JpZXMlMjIlM0ElNUIlMjIlRTYlODklOEIlRTYlOTIlOTUlRTQlQkIlQTMlRTclQTAlODElMjIlNUQlN0Q="></div>`,10),k=[l];function t(p,e,E,r,d,g){return i(),a("div",null,k)}const c=s(h,[["render",t]]);export{F as __pageData,c as default};
