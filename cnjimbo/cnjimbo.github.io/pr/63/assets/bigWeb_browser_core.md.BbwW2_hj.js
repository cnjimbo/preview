import{j as t,b as e,c as a,a7 as r}from"./chunks/framework.DU49VhnK.js";const u=JSON.parse('{"title":"浏览器-内核","description":"","frontmatter":{"sidebar":{"title":"内核","step":0},"isTimeLine":true,"title":"浏览器-内核","date":"2020-10-26T00:00:00.000Z","tags":["大前端","浏览器"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/browser/core.md","filePath":"bigWeb/browser/core.md","lastUpdated":1670770660000}'),i={name:"bigWeb/browser/core.md"},l=r('<h1 id="内核" tabindex="-1">内核 <a class="header-anchor" href="#内核" aria-label="Permalink to &quot;内核&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>浏览器最重要或者说核心的部分。</p><p>通常还有“<strong>Rendering Engine-页面渲染引擎</strong>”,“<strong>Layout Engine-排版引擎</strong>”,“<strong>Browser Engine-浏览器引擎</strong>”等其它叫法。</p><p><strong>浏览器内核</strong>决定了浏览器如何显示网页的内容以及页面的格式信息</p><p>主要负责对网页语法（HTML，JS，CSS）的解释，标记，整理，并将排版后的发送至输出设备（显示器，打印机等）。</p><p>不同浏览器的内核实现有所差异，导致对网页编写语法的解释也有不同，因此同一网页在不同的内核的浏览器里的渲染结果也可能不同，这就抛出了常见的 “<strong>浏览器兼容性问题</strong>”</p><h2 id="常见浏览器内核" tabindex="-1">常见浏览器内核 <a class="header-anchor" href="#常见浏览器内核" aria-label="Permalink to &quot;常见浏览器内核&quot;">​</a></h2><p>这里不过多赘述内核的发展史，读者可以在文末的参考文章中进行拓展阅读</p><table tabindex="0"><thead><tr><th style="text-align:center;">浏览器名称</th><th style="text-align:center;">内核</th><th style="text-align:center;">补充</th></tr></thead><tbody><tr><td style="text-align:center;">IE</td><td style="text-align:center;">Trident</td><td style="text-align:center;">主要包含在 window操作系统的 IE浏览器中</td></tr><tr><td style="text-align:center;">firefox</td><td style="text-align:center;">Gecko</td><td style="text-align:center;">Gecko的特点是代码完全公开，因此，其可开发程度很高</td></tr><tr><td style="text-align:center;">Safari</td><td style="text-align:center;">webkit</td><td style="text-align:center;">苹果公司自己的内核，包含WebCore排版引擎及JavaScriptCore解析引擎</td></tr><tr><td style="text-align:center;">chrome</td><td style="text-align:center;">Chromium/Blink/webkit</td><td style="text-align:center;">Blink是开源引擎WebKit中WebCore组件的一个分支</td></tr><tr><td style="text-align:center;">Opera</td><td style="text-align:center;">blink/Webkit/Presto</td><td style="text-align:center;">现在跟随chrome的步伐，同时参与开发</td></tr></tbody></table><p><strong>发展时间线</strong></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwMzYxMjcwNTI2MQ==603612705261" alt="图片" loading="lazy"></p><p><strong>内核之间的关系</strong></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTYwNzc4MTYxNDEzMw==607781614133" alt="图片" loading="lazy"></p><h2 id="浏览器内核构成" tabindex="-1">浏览器内核构成 <a class="header-anchor" href="#浏览器内核构成" aria-label="Permalink to &quot;浏览器内核构成&quot;">​</a></h2><blockquote><p>最开始渲染引擎和JS引擎并没有明确区分，随着不断的迭代，JS引擎越来越独立，内核更就倾向于只指渲染引擎</p></blockquote><p>核心的部分是“渲染引擎”，主要包括以下线程：</p><h3 id="_1-gui渲染线程" tabindex="-1">1. GUI渲染线程 <a class="header-anchor" href="#_1-gui渲染线程" aria-label="Permalink to &quot;1. GUI渲染线程&quot;">​</a></h3><ul><li>HTML Parser 解析HTML</li><li>CSS Parser 解析Style数据</li><li>Layout过程，为每个可见节点的几何信息</li><li>Painting过程，遍历Render Tree，调用UI接口绘制每个节点</li></ul><h3 id="_2-javascript-引擎线程" tabindex="-1">2. JavaScript 引擎线程 <a class="header-anchor" href="#_2-javascript-引擎线程" aria-label="Permalink to &quot;2. JavaScript 引擎线程&quot;">​</a></h3><p>负责解析Javascript脚本，运行代码</p><h3 id="_3-定时触发器线程" tabindex="-1">3. 定时触发器线程 <a class="header-anchor" href="#_3-定时触发器线程" aria-label="Permalink to &quot;3. 定时触发器线程&quot;">​</a></h3><p>浏览器定时计数器并不是由 JavaScript 引擎计数的, 因为 JavaScript 引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确, 因此通过单独线程来计时并触发定时</p><h3 id="_4-事件触发线程" tabindex="-1">4. 事件触发线程 <a class="header-anchor" href="#_4-事件触发线程" aria-label="Permalink to &quot;4. 事件触发线程&quot;">​</a></h3><p>当一个事件被触发时该线程会把事件添加到待处理队列的队尾，等待 JavaScript 引擎的处理</p><h3 id="_5-异步http请求线程" tabindex="-1">5. 异步http请求线程 <a class="header-anchor" href="#_5-异步http请求线程" aria-label="Permalink to &quot;5. 异步http请求线程&quot;">​</a></h3><p>XMLHttpRequest 请求会在浏览器中新开一个线程请求， 将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件放到 JavaScript 引擎的处理队列中</p><h2 id="移动端内核" tabindex="-1">移动端内核 <a class="header-anchor" href="#移动端内核" aria-label="Permalink to &quot;移动端内核&quot;">​</a></h2><p>主要有：</p><ul><li>webkit: IOS内置浏览器，Android4.4之前</li><li>chromium：Android4.4之后内置</li><li>blink</li><li>trident：<s>Windows Phone 8 这个玩意儿感觉不用关注了</s></li><li>u3: UC打造 -&gt; UC浏览器</li><li>x5: 腾讯打造 -&gt; QQ浏览器，腾讯系App内置webview</li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><h3 id="兼容问题" tabindex="-1">兼容问题 <a class="header-anchor" href="#兼容问题" aria-label="Permalink to &quot;兼容问题&quot;">​</a></h3><p>正由于内核的 <code>&quot;多彩缤纷&quot;</code>, 前端开发者最头疼的问题莫过于此</p><h4 id="pc" tabindex="-1">PC <a class="header-anchor" href="#pc" aria-label="Permalink to &quot;PC&quot;">​</a></h4><p>最头痛的就是兼容IE,尽管js能力可以通过polyfill支持一部分，但部分样式能力的缺失是无法弥补的</p><h4 id="移动端" tabindex="-1">移动端 <a class="header-anchor" href="#移动端" aria-label="Permalink to &quot;移动端&quot;">​</a></h4><p>最头痛的就是在使用跨端开发框架时（uni-app,React Native等）样式在双端的差异有时比较大</p><p>尤其是在低版本的Android机上，需要花费大量的去做兼容测试与视图适配</p><p><strong>浏览器内核能力的统一，还有很长的路要走，需要一个契机</strong></p><h3 id="现状" tabindex="-1">现状 <a class="header-anchor" href="#现状" aria-label="Permalink to &quot;现状&quot;">​</a></h3><ul><li>google、opera拥抱的blink</li><li>IOS拥抱webkit</li><li>Firefox拥抱Gecko</li><li>微软新版Edge已经采用Chromium内核，旧版为EdgeHTML</li></ul><div class="tip custom-block"><p class="custom-block-title">参考</p><ul><li><a href="https://zh.wikipedia.org/wiki/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%95%E6%93%8E" target="_blank" rel="noreferrer">维基百科-浏览器引擎</a></li><li><a href="https://baike.baidu.com/item/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8" target="_blank" rel="noreferrer">百度百科-浏览器内核</a></li><li><a href="https://segmentfault.com/a/1190000018277184" target="_blank" rel="noreferrer">腾讯云+社区-一文看透浏览器架构</a></li><li><a href="https://www.jianshu.com/p/db1b230e3415" target="_blank" rel="noreferrer">简书-全面了解浏览器（内核）发展史</a></li></ul></div>',42),o=[l];function n(d,s,h,c,p,b){return e(),a("div",null,o)}const m=t(i,[["render",n]]);export{u as __pageData,m as default};
