import{_ as i,o as s,c as a,a5 as l}from"./chunks/framework.B9yybC9n.js";const u=JSON.parse('{"title":"回流与重绘","description":"","frontmatter":{"sidebar":{"title":"回流与重绘","step":5},"isTimeLine":true,"title":"回流与重绘","date":"2020-04-14T00:00:00.000Z","tags":["大前端","CSS"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/css/reflow.md","filePath":"bigWeb/css/reflow.md","lastUpdated":1719297432000}'),e={name:"bigWeb/css/reflow.md"},t=l(`<h1 id="回流与重绘" tabindex="-1">回流与重绘 <a class="header-anchor" href="#回流与重绘" aria-label="Permalink to &quot;回流与重绘&quot;">​</a></h1><h2 id="浏览器的渲染过程" tabindex="-1">浏览器的渲染过程 <a class="header-anchor" href="#浏览器的渲染过程" aria-label="Permalink to &quot;浏览器的渲染过程&quot;">​</a></h2><ol><li>解析HTML--&gt;DOM树,解析CSS--&gt;CSSOM树</li><li>DOM树 + CSSOM树 --&gt; Render Tree(渲染树)</li><li><code>回流</code>(Layout):根据生成的渲染树,回流得到节点的几何信息(位置,尺寸)</li><li><code>重绘</code>(Painting):根据渲染树与回流得到的节点几何信息,得到节点的绝对像素</li><li>将像素发送给<code>GPU</code>绘制,然后展示在页面上</li></ol><h2 id="生成渲染树过程" tabindex="-1">生成渲染树过程 <a class="header-anchor" href="#生成渲染树过程" aria-label="Permalink to &quot;生成渲染树过程&quot;">​</a></h2><ol><li>从DOM根节点开始遍历每个可见的节点 <ul><li>不可见节点: <ul><li>不能渲染输出的节点:link,script,meta等等</li><li>使用css隐藏的节点:display:none;</li></ul></li></ul></li><li>对于每个节点在CSSOM树中找到对应的规则并应用</li><li>根据每个可见节点与其对应的css样式,组合生产渲染树</li></ol><h2 id="回流" tabindex="-1">回流 <a class="header-anchor" href="#回流" aria-label="Permalink to &quot;回流&quot;">​</a></h2><p>计算可见的Dom节点在设备视口的位置和尺寸,这个计算阶段就是回流</p><p>为了知道每个可见节点在视口的确切大小和位置,浏览器从渲染树的根节点进行遍历</p><h2 id="重绘" tabindex="-1">重绘 <a class="header-anchor" href="#重绘" aria-label="Permalink to &quot;重绘&quot;">​</a></h2><p>经过生成的渲染树和回流阶段,得到了所有可见节点具体的几何信息与样式,然后将渲染树的每个节点转换成屏幕上的实际像素,这个阶段就叫<code>重绘</code>节点</p><h2 id="回流与重绘何时发生" tabindex="-1">回流与重绘何时发生? <a class="header-anchor" href="#回流与重绘何时发生" aria-label="Permalink to &quot;回流与重绘何时发生?&quot;">​</a></h2><h3 id="回流-1" tabindex="-1">回流 <a class="header-anchor" href="#回流-1" aria-label="Permalink to &quot;回流&quot;">​</a></h3><ul><li>页面第一次加载时</li><li>浏览器窗口尺寸变化</li><li>页面布局发生变化 <ul><li>添加/删除可见元素</li></ul></li><li>节点几何信息发生变化 <ul><li>元素的位置发生变化</li><li>元素的尺寸(外/内边框,外边距,高/宽)</li><li>内容发生变化 <ul><li>文本</li><li>图片(被另一尺寸图片替换)</li></ul></li></ul></li></ul><h3 id="重绘-1" tabindex="-1">重绘 <a class="header-anchor" href="#重绘-1" aria-label="Permalink to &quot;重绘&quot;">​</a></h3><ul><li>回流一定触发重绘</li><li>可见节点样式发生改变</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>回流一定触发重绘,重绘不一定触发回流</p></div><h2 id="如何减少回流与重绘" tabindex="-1">如何减少回流与重绘 <a class="header-anchor" href="#如何减少回流与重绘" aria-label="Permalink to &quot;如何减少回流与重绘&quot;">​</a></h2><h3 id="最小化重绘与重排" tabindex="-1">最小化重绘与重排 <a class="header-anchor" href="#最小化重绘与重排" aria-label="Permalink to &quot;最小化重绘与重排&quot;">​</a></h3><ol><li>减少发生次数:合并多次修改</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e.style.color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;white&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e.style.fontSize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;18px&#39;</span></span></code></pre></div><ul><li>cssText<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e.style.cssText </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;color:white;font-size:18px;&#39;</span></span></code></pre></div></li><li>class<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">el.className </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;active&#39;</span></span></code></pre></div></li></ul><h3 id="批量修改dom" tabindex="-1">批量修改DOM <a class="header-anchor" href="#批量修改dom" aria-label="Permalink to &quot;批量修改DOM&quot;">​</a></h3><p>需要对dom进行一系列修改时候,减少回流重绘次数方案</p><ol><li>使元素脱离文档流</li><li>进行修改</li><li>将元素放回源文档中</li></ol><p><strong>脱离文档流的方式</strong></p><ul><li>隐藏元素</li><li>使用<code>DocumentFragment</code>构建一个子树,然后拷贝会源文档(<code>document.createDocumentFragment()</code>)</li><li>拷贝元素到脱离文档流的节点中,修改节点后,在替换原来的节点</li><li>绝对定位</li><li>浮动</li><li>固定定位</li></ul><h3 id="其它" tabindex="-1">其它 <a class="header-anchor" href="#其它" aria-label="Permalink to &quot;其它&quot;">​</a></h3><ul><li>避免频繁使用 style，而是采用修改class的方式</li><li>resize、scroll 等时间进行防抖或者节流处理</li><li>添加 will-change: tranform:让渲染引擎为其单独实现一个图层，当这些变换发生时，仅仅只是利用合成线程去处理这些变换，而不牵扯到主线程，大大提高渲染效率</li><li>动画使用 transform 实现</li></ul><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://github.com/chenjigeng/blog/blob/master/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BA%86%E8%A7%A3%E5%9B%9E%E6%B5%81%E5%92%8C%E9%87%8D%E7%BB%98%E5%90%97.md" target="_blank" rel="noreferrer">你真的了解回流和重绘吗?</a><br><a href="https://juejin.im/post/5df5bcea6fb9a016091def69#heading-63" target="_blank" rel="noreferrer">掘金(三元大佬):浏览器灵魂之问，请问你能接得住几个？</a></p></div>`,29),h=[t];function n(r,o,p,d,k,c){return s(),a("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyc2lkZWJhciUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBJTIyJUU1JTlCJTlFJUU2JUI1JTgxJUU0JUI4JThFJUU5JTg3JThEJUU3JUJCJTk4JTIyJTJDJTIyc3RlcCUyMiUzQTUlN0QlMkMlMjJpc1RpbWVMaW5lJTIyJTNBdHJ1ZSUyQyUyMnRpdGxlJTIyJTNBJTIyJUU1JTlCJTlFJUU2JUI1JTgxJUU0JUI4JThFJUU5JTg3JThEJUU3JUJCJTk4JTIyJTJDJTIyZGF0ZSUyMiUzQTE1ODY4MjI0MDAwMDAlMkMlMjJ0YWdzJTIyJTNBJTVCJTIyJUU1JUE0JUE3JUU1JTg5JThEJUU3JUFCJUFGJTIyJTJDJTIyQ1NTJTIyJTVEJTJDJTIyY2F0ZWdvcmllcyUyMiUzQSU1QiUyMiVFNSVBNCVBNyVFNSU4OSU4RCVFNyVBQiVBRiUyMiU1RCU3RA=="},h)}const y=i(e,[["render",n]]);export{u as __pageData,y as default};
