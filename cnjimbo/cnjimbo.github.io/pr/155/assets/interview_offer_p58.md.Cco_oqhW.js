import{_ as s,o as a,c as i,a5 as l}from"./chunks/framework.B9yybC9n.js";const E=JSON.parse('{"title":"面试题58-.左旋转字符串","description":"","frontmatter":{"isTimeLine":true,"title":"面试题58-.左旋转字符串","date":"2020-04-14T00:00:00.000Z","tags":["计算机基础","剑指offer"],"categories":["计算机基础"]},"headers":[],"relativePath":"interview/offer/p58.md","filePath":"interview/offer/p58.md","lastUpdated":1719297432000}'),n={name:"interview/offer/p58.md"},t=l(`<h1 id="面试题58-ii-左旋转字符串" tabindex="-1">面试题58 - II. 左旋转字符串 <a class="header-anchor" href="#面试题58-ii-左旋转字符串" aria-label="Permalink to &quot;面试题58 - II. 左旋转字符串&quot;">​</a></h1><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>示例 1：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入: s = &quot;abcdefg&quot;, k = 2</span></span>
<span class="line"><span>输出: &quot;cdefgab&quot;</span></span>
<span class="line"><span>示例 2：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入: s = &quot;lrloseumgh&quot;, k = 6</span></span>
<span class="line"><span>输出: &quot;umghlrlose&quot;</span></span></code></pre></div><h2 id="js" tabindex="-1">JS <a class="header-anchor" href="#js" aria-label="Permalink to &quot;JS&quot;">​</a></h2><p><strong>解法1:直接使用剪切字符串API</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {string}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {number}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {string}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reverseLeftWords</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, n)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><a href="https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/" target="_blank" rel="noreferrer">题链</a></p>`,7),e=[t];function p(h,k,r,d,c,o){return a(),i("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMiVFOSU5RCVBMiVFOCVBRiU5NSVFOSVBMiU5ODU4LS4lRTUlQjclQTYlRTYlOTclOEIlRTglQkQlQUMlRTUlQUQlOTclRTclQUMlQTYlRTQlQjglQjIlMjIlMkMlMjJkYXRlJTIyJTNBMTU4NjgyMjQwMDAwMCUyQyUyMnRhZ3MlMjIlM0ElNUIlMjIlRTglQUUlQTElRTclQUUlOTclRTYlOUMlQkElRTUlOUYlQkElRTclQTElODAlMjIlMkMlMjIlRTUlODklOTElRTYlOEMlODdvZmZlciUyMiU1RCUyQyUyMmNhdGVnb3JpZXMlMjIlM0ElNUIlMjIlRTglQUUlQTElRTclQUUlOTclRTYlOUMlQkElRTUlOUYlQkElRTclQTElODAlMjIlNUQlN0Q="},e)}const y=s(n,[["render",p]]);export{E as __pageData,y as default};
