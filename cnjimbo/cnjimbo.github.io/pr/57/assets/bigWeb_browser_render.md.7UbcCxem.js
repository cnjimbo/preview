import{j as s,b as i,c as a,a7 as t}from"./chunks/framework.Cn2Y4FsX.js";const c=JSON.parse('{"title":"浏览器-渲染原理","description":"","frontmatter":{"sidebar":{"title":"渲染机制","step":1},"isTimeLine":true,"title":"浏览器-渲染原理","date":"2020-10-26T00:00:00.000Z","tags":["大前端","浏览器"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/browser/render.md","filePath":"bigWeb/browser/render.md","lastUpdated":1671802927000}'),l={name:"bigWeb/browser/render.md"},h=t(`<h1 id="渲染原理" tabindex="-1">渲染原理 <a class="header-anchor" href="#渲染原理" aria-label="Permalink to &quot;渲染原理&quot;">​</a></h1><p>篇幅较长，需赖心阅读</p><p><strong>示例代码</strong></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;viewport&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;width=device-width,initial-scale=1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;style.css&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylesheet&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Critical Path&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;web performance&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; students!&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;awesome-photo.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="_1-构建对象模型" tabindex="-1">1. 构建对象模型 <a class="header-anchor" href="#_1-构建对象模型" aria-label="Permalink to &quot;1. 构建对象模型&quot;">​</a></h2><p>浏览器渲染页面前需要先构建 DOM 和 CSSOM 树</p><h3 id="文档对象模型-dom" tabindex="-1">文档对象模型(DOM) <a class="header-anchor" href="#文档对象模型-dom" aria-label="Permalink to &quot;文档对象模型(DOM)&quot;">​</a></h3><p><strong>构建过程</strong></p><ol><li>转换：浏览器从磁盘或网络读取 HTML 的原始字节，并根据文件的指定编码（例如 UTF-8）将它们转换成各个字符</li><li>令牌化：浏览器将字符串转换成 <a href="https://html.spec.whatwg.org/" target="_blank" rel="noreferrer">W3C HTML5 标准</a>规定的各种令牌，例如，<code>&lt;html&gt;</code>、<code>&lt;body&gt;</code>，以及其他尖括号内的字符串。每个令牌都具有特殊含义和一组规则</li><li>词法分析：将令牌转换成定义了属性和规则的“对象”</li><li>DOM构建：由于 HTML 标记定义不同标记之间的关系（一些标记包含在其他标记内），创建的对象链接在一个树数据结构内，此结构也会捕获原始标记中定义的父项-子项关系：HTML 对象是 body 对象的父项，body 是 paragraph 对象的父项，依此类推</li></ol><img style="background-color:white;" src="https://img.cdn.sugarat.top/mdImg/MTYwMzYxNzU0MDI0Ng==603617540246"><p>整个流程的最终输出是文档对象模型 (DOM)，浏览器对页面做进一步处理时会用到它</p><p>浏览器每次处理 HTML 标记时，都会完成以上所有步骤：将字节转换成字符，确定令牌，将令牌转换成节点，然后构建 DOM 树。</p><h3 id="css对象模型-cssom" tabindex="-1">CSS对象模型(CSSOM) <a class="header-anchor" href="#css对象模型-cssom" aria-label="Permalink to &quot;CSS对象模型(CSSOM)&quot;">​</a></h3><blockquote><p>在浏览器构建我们这个简单页面的 DOM 时，在文档的 head 部分遇到了一个 link 标记，该标记引用一个外部 CSS 样式表：style.css。</p></blockquote><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">font-weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bold</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><p>与处理 HTML 时的流程类似</p><p>CSS 字节转换成字符，接着转换成令牌和节点，最后链接为为一个“CSS 对象模型”(CSSOM) 的树结构内</p><p><img style="background-color:white;" src="https://img.cdn.sugarat.top/mdImg/MTYwMzYxODk4NjE2Mw==603618986163">/&gt;</p><p><img style="background-color:white;" src="https://img.cdn.sugarat.top/mdImg/MTYwMzYxOTEwMjEzNA==603619102134">/&gt;</p><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h3><ul><li>浏览器渲染页面前需要先构建 DOM树 和 CSSOM 树</li><li>构建流程：字节(Bytes) → 字符(Characters) → 令牌(Tokens) → 节点(Nodes) → 对象模型(Dom)</li><li>DOM 和 CSSOM 是相互独立的数据结构</li></ul><h2 id="_2-渲染树构建" tabindex="-1">2. 渲染树构建 <a class="header-anchor" href="#_2-渲染树构建" aria-label="Permalink to &quot;2. 渲染树构建&quot;">​</a></h2><h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>渲染树用于计算每个可见元素的几何信息，然后根据这些元素的几何信息绘制出屏幕上的实际像素</p><h3 id="构建过程" tabindex="-1">构建过程 <a class="header-anchor" href="#构建过程" aria-label="Permalink to &quot;构建过程&quot;">​</a></h3><p>浏览器将 DOM 数和 CSSOM 数合并成“渲染树”，包含页面上所有可见的内容，以及每个节点的所有 CSSOM 样式信息</p><p><img style="background-color:white;" src="https://img.cdn.sugarat.top/mdImg/MTYwMzYyMjExNzA4Ng==603622117086">/&gt;</p><ul><li>从 DOM 树的根节点开始遍历每个可见节点 <ul><li>某些节点不可见（例如脚本标记、元标记等--title,meta,link）</li><li>某些节点通过 CSS 隐藏，因此在渲染树中也会被忽略（display:none）</li></ul></li><li>对于每个可见节点，为其找到适配的 CSSOM 规则并应用它们</li></ul><h3 id="小结-1" tabindex="-1">小结 <a class="header-anchor" href="#小结-1" aria-label="Permalink to &quot;小结&quot;">​</a></h3><ol><li>DOM 树和 CSSOM 树合并生成渲染树</li><li>渲染树只包含渲染网页所需的节点(可见节点)</li></ol><h2 id="_3-回流与重绘" tabindex="-1">3. 回流与重绘 <a class="header-anchor" href="#_3-回流与重绘" aria-label="Permalink to &quot;3. 回流与重绘&quot;">​</a></h2><h3 id="回流" tabindex="-1">回流 <a class="header-anchor" href="#回流" aria-label="Permalink to &quot;回流&quot;">​</a></h3><p>也有 “布局”,“重排”等叫法</p><p>根据生成的渲染树，从渲染树的根节点开始进行遍历，计算每个节点的几何信息(在设备视口内的确切位置和大小)</p><p>输出是一个“盒模型”，它会精确地捕获每个元素在视口内的确切位置和尺寸：所有相对测量值都会转换为屏幕上的绝对像素</p><h3 id="重绘" tabindex="-1">重绘 <a class="header-anchor" href="#重绘" aria-label="Permalink to &quot;重绘&quot;">​</a></h3><p>也叫 “绘制”或“栅格化”</p><p>经过生成的渲染树和回流阶段,得到了所有可见节点具体的几何信息与样式,然后将渲染树的每个节点转换成屏幕上的实际像素</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><h3 id="_1-解析html-构建dom" tabindex="-1">1. 解析HTML-构建DOM <a class="header-anchor" href="#_1-解析html-构建dom" aria-label="Permalink to &quot;1. 解析HTML-构建DOM&quot;">​</a></h3><p>浏览器解析接收到的 HTML ，并构建出 DOM 树</p><ol><li>在网络中传输的内容其实都是0和1这些字节数据。当浏览器接收到这些字节数据以后，会将这些字节数据转换为字符串</li><li>将这些字符串通过词法分析转换为标记（token），这一过程在词法分析中叫做标记化（tokenization）</li><li>标记转换为 Node，根据不同 Node 之前的联系构建为一棵 DOM 树</li><li>在解析 HTML 文件的时候，当遇到 CSS 和 JS 文件，这时候浏览器也会去下载并解析这些文件，此时就会存在阻塞解析/渲染的问题</li></ol><h3 id="_2-解析css-构建cssom" tabindex="-1">2. 解析CSS-构建CSSOM <a class="header-anchor" href="#_2-解析css-构建cssom" aria-label="Permalink to &quot;2. 解析CSS-构建CSSOM&quot;">​</a></h3><p>解析样式表，构建出 CSSOM 树</p><p>在这一过程中，浏览器会确定下每一个节点的样式是什么(这一过程其实是很消耗资源的，因为样式你可以自行设置给某个节点，也可以通过继承获得)，于是会递归 CSSOM 树，然后确定具体的元素到底是什么样式</p><p>因此：</p><ul><li>尽可能的避免写过于具体的 CSS 选择器</li><li>对于 HTML 来说也尽量少的添加无意义标签，保证层级扁平</li></ul><h3 id="_3-合并dom-cssom-生成渲染树" tabindex="-1">3. 合并DOM/CSSOM-生成渲染树 <a class="header-anchor" href="#_3-合并dom-cssom-生成渲染树" aria-label="Permalink to &quot;3. 合并DOM/CSSOM-生成渲染树&quot;">​</a></h3><p>生成 DOM 树和 CSSOM 树之后，就会将这两棵树组合为渲染树</p><p>渲染树只会包括需要显示的节点和这些节点的样式信息</p><p><strong>不显示的节点</strong></p><ul><li>css:display:nonoe</li><li>标签:script,link,meta等等</li></ul><h3 id="_4-回流" tabindex="-1">4. 回流 <a class="header-anchor" href="#_4-回流" aria-label="Permalink to &quot;4. 回流&quot;">​</a></h3><p>根据生成的渲染树，从渲染树的根节点开始进行遍历，计算每个节点的几何信息(在设备视口内的确切位置和大小)</p><h3 id="_5-重绘" tabindex="-1">5. 重绘 <a class="header-anchor" href="#_5-重绘" aria-label="Permalink to &quot;5. 重绘&quot;">​</a></h3><p>经过生成的渲染树和回流阶段,得到了所有可见节点具体的几何信息与样式,然后将渲染树的每个节点转换成屏幕上的实际像素</p><div class="tip custom-block"><p class="custom-block-title">参考</p><ul><li><a href="https://yuchengkai.cn/docs/frontend/browser.html" target="_blank" rel="noreferrer">浏览器|前端进阶之道</a></li><li><a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path" target="_blank" rel="noreferrer">developers.google</a></li></ul></div>`,57),n=[h];function e(p,k,r,d,E,o){return i(),a("div",null,n)}const y=s(l,[["render",e]]);export{c as __pageData,y as default};
