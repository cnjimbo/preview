import{_ as i,o as s,c as a,a5 as t}from"./chunks/framework.6H6-9EJT.js";const g=JSON.parse('{"title":"如何判断变量类型是对象","description":"","frontmatter":{"isTimeLine":true,"title":"如何判断变量类型是对象","date":"2020-09-11T00:00:00.000Z","tags":["面试","javascript"],"categories":["面试"]},"headers":[],"relativePath":"bigWeb/js/judgeObj.md","filePath":"bigWeb/js/judgeObj.md","lastUpdated":1719297432000}'),e={name:"bigWeb/js/judgeObj.md"},n=t(`<h1 id="如何判断变量类型是对象" tabindex="-1">如何判断变量类型是对象 <a class="header-anchor" href="#如何判断变量类型是对象" aria-label="Permalink to &quot;如何判断变量类型是对象&quot;">​</a></h1><blockquote><p>指广义上的对象这里，Array,RegExp,function。。。。等等</p></blockquote><h2 id="_1-instanceof" tabindex="-1">1. instanceof <a class="header-anchor" href="#_1-instanceof" aria-label="Permalink to &quot;1. instanceof&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Object</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Object</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // true</span></span></code></pre></div><h2 id="_2-typeof" tabindex="-1">2. typeof <a class="header-anchor" href="#_2-typeof" aria-label="Permalink to &quot;2. typeof&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isObject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;object&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;function&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>其余方案,编写<code>isObject</code>函数稍许麻烦</p><ul><li>constructor</li><li>Object.prototype.toString.call</li></ul>`,8),l=[n];function h(p,k,d,r,o,c){return s(),a("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMiVFNSVBNiU4MiVFNCVCRCU5NSVFNSU4OCVBNCVFNiU5NiVBRCVFNSU4RiU5OCVFOSU4NyU4RiVFNyVCMSVCQiVFNSU5RSU4QiVFNiU5OCVBRiVFNSVBRiVCOSVFOCVCMSVBMSUyMiUyQyUyMmRhdGUlMjIlM0ExNTk5NzgyNDAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFOSU5RCVBMiVFOCVBRiU5NSUyMiUyQyUyMmphdmFzY3JpcHQlMjIlNUQlMkMlMjJjYXRlZ29yaWVzJTIyJTNBJTVCJTIyJUU5JTlEJUEyJUU4JUFGJTk1JTIyJTVEJTdE"},l)}const E=i(e,[["render",h]]);export{g as __pageData,E as default};
