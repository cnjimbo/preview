import{_ as s,o as i,c as a,a5 as n}from"./chunks/framework.B-glaTZB.js";const t="/preview/cnjimbo/cnjimbo.github.io/pr/121/assets/MTU4MzEzODA3NjQxMQ__583138076411.CXQ3kC0Q.png?s1=https:/img.cdn.sugarat.top/mdImg/MTU4MzEzODA3NjQxMQ==583138076411",l="/preview/cnjimbo/cnjimbo.github.io/pr/121/assets/MTU4MzEzODIxNzEwOQ__583138217109.x_eK0d7i.png?s1=https:/img.cdn.sugarat.top/mdImg/MTU4MzEzODIxNzEwOQ==583138217109",b=JSON.parse('{"title":"盒模型","description":"","frontmatter":{"sidebar":{"title":"盒模型","step":6},"isTimeLine":true,"title":"盒模型","date":"2020-04-14T00:00:00.000Z","tags":["大前端","CSS"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/css/box.md","filePath":"bigWeb/css/box.md","lastUpdated":1719501177000}'),p={name:"bigWeb/css/box.md"},h=n(`<h1 id="盒模型" tabindex="-1">盒模型 <a class="header-anchor" href="#盒模型" aria-label="Permalink to &quot;盒模型&quot;">​</a></h1><p>浏览器展现一个元素时，这个元素会占据一定的空间,这个元素可以看做是一个盒子，封装周围的HTML元素。这个空间由四部分组成。</p><ul><li>边距(margin):清除边框外的区域，外边距是透明的。</li><li>边框(border):围绕在内边距和内容外的边框。</li><li>填充(padding):清除内容周围的区域，内边距是透明的。</li><li>实际内容(context):盒子的内容,显示文本和图像</li></ul><h2 id="box-sizing" tabindex="-1">box-sizing <a class="header-anchor" href="#box-sizing" aria-label="Permalink to &quot;box-sizing&quot;">​</a></h2><p>用来设置width与height的作用对象,属性有:</p><ul><li><code>content-box</code></li><li>padding-box</li><li>border-box</li></ul><p>更符合实际生活逻辑的是 border-box</p><p>例子</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>此时的元素实际宽度为140px</p><p><img src="`+t+'" alt="图片" loading="lazy"></p><p>当设置为 <code>border-box</code> 时才会是预期的结果</p><p><img src="'+l+`" alt="图片" loading="lazy"></p><h2 id="全局设置" tabindex="-1">全局设置 <a class="header-anchor" href="#全局设置" aria-label="Permalink to &quot;全局设置&quot;">​</a></h2><p>推荐全局使用border-box</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">::before</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">::after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    box-sizing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">border-box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>继承写法</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    box-sizing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">border-box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">::before</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">::after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    box-sizing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">inherit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyc2lkZWJhciUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBJTIyJUU3JTlCJTkyJUU2JUE4JUExJUU1JTlFJThCJTIyJTJDJTIyc3RlcCUyMiUzQTYlN0QlMkMlMjJpc1RpbWVMaW5lJTIyJTNBdHJ1ZSUyQyUyMnRpdGxlJTIyJTNBJTIyJUU3JTlCJTkyJUU2JUE4JUExJUU1JTlFJThCJTIyJTJDJTIyZGF0ZSUyMiUzQTE1ODY4MjI0MDAwMDAlMkMlMjJ0YWdzJTIyJTNBJTVCJTIyJUU1JUE0JUE3JUU1JTg5JThEJUU3JUFCJUFGJTIyJTJDJTIyQ1NTJTIyJTVEJTJDJTIyY2F0ZWdvcmllcyUyMiUzQSU1QiUyMiVFNSVBNCVBNyVFNSU4OSU4RCVFNyVBQiVBRiUyMiU1RCU3RA=="></div>`,20),e=[h];function k(d,E,r,g,o,c){return i(),a("div",null,e)}const J=s(p,[["render",k]]);export{b as __pageData,J as default};
