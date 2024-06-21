import{j as s,b as i,c as a,a7 as n}from"./chunks/framework.C1mW_7mk.js";const y=JSON.parse('{"title":"学习过程中学到的一些取巧之法","description":"","frontmatter":{"isTimeLine":true,"title":"学习过程中学到的一些取巧之法","date":"2020-04-14T00:00:00.000Z","tags":["大前端","javascript"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/js/p0.md","filePath":"bigWeb/js/p0.md","lastUpdated":1670770660000}'),l={name:"bigWeb/js/p0.md"},h=n(`<h1 id="学习过程中学到的一些取巧之法" tabindex="-1">学习过程中学到的一些取巧之法 <a class="header-anchor" href="#学习过程中学到的一些取巧之法" aria-label="Permalink to &quot;学习过程中学到的一些取巧之法&quot;">​</a></h1><h2 id="" tabindex="-1">!! <a class="header-anchor" href="#" aria-label="Permalink to &quot;!!&quot;">​</a></h2><p>强制转换为布尔值,代替<code>Boolean(param)</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // false</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // false</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // false</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // false</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abc&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div><h2 id="-1" tabindex="-1">~~ <a class="header-anchor" href="#-1" aria-label="Permalink to &quot;~~&quot;">​</a></h2><p>位运算符<code>~</code>反转所有位,<code>~~</code>代替<code>Math.floor()</code>速度更快</p><div class="tip custom-block"><p class="custom-block-title">规则</p><ul><li>正数:向下取整</li><li>负数:向上取整</li></ul></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 正数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">floor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~~</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0123</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 负数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">floor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// -1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~~-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.123</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // -2</span></span></code></pre></div><h2 id="-2" tabindex="-1">+ <a class="header-anchor" href="#-2" aria-label="Permalink to &quot;+&quot;">​</a></h2><p>字符串转换为数字(整数),代替</p><ul><li>parseInt(str)</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~~</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;-1&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       // -1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// -1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~~</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;1.234&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-1.234&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// -1.234</span></span></code></pre></div>`,12),t=[h];function p(e,k,d,r,c,g){return i(),a("div",null,t)}const E=s(l,[["render",p]]);export{y as __pageData,E as default};
