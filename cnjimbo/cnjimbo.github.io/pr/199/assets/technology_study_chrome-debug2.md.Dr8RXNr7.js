import{_ as s,o as i,c as a,a5 as t}from"./chunks/framework.7NDcLc0w.js";const e="/preview/cnjimbo/cnjimbo.github.io/pr/199/assets/MTYxNzc5OTMzNTA4MQ__617799335081.AgPPgtwe.png",n="/preview/cnjimbo/cnjimbo.github.io/pr/199/assets/MTYxNzc5OTUxNzIwNw__617799517207.DvJDA2uT.png",l="/preview/cnjimbo/cnjimbo.github.io/pr/199/assets/MTYxNzc5OTc2NjQ4Ng__617799766486.C9Vr5N2C.png",h="/preview/cnjimbo/cnjimbo.github.io/pr/199/assets/MTYxNzgwMDUyOTY0Mw__617800529643.Dh7wY32g.png",p="/preview/cnjimbo/cnjimbo.github.io/pr/199/assets/MTYxNzgwMTgyMjU4Mw__617801822583.DDJebGFC.png",o="/preview/cnjimbo/cnjimbo.github.io/pr/199/assets/MTYxNzgwMjIyNjk5Mg__617802226992.CYBzmlkD.png",r="/preview/cnjimbo/cnjimbo.github.io/pr/199/assets/MTYxNzgwMjQxNTc4MQ__617802415781.vUq2gIxt.png",k="/preview/cnjimbo/cnjimbo.github.io/pr/199/assets/MTYxNzgwMjUzMzIzNA__617802533234.Decgn12h.png",d="/preview/cnjimbo/cnjimbo.github.io/pr/199/assets/MTYxNzgwMjY5MTU2MA__617802691560.C7Y1ewfi.png",c="/preview/cnjimbo/cnjimbo.github.io/pr/199/assets/MTYxNzgwMzA2OTUwMQ__617803069501.CXaG8ijC.png",g="/preview/cnjimbo/cnjimbo.github.io/pr/199/assets/MTYxNzgwMzEwODc4Mg__617803108782.BQEYfUzO.png",E="/preview/cnjimbo/cnjimbo.github.io/pr/199/assets/MTYxNzgwMzI0NDMyNA__617803244324.67oMWr9O.png",m="/preview/cnjimbo/cnjimbo.github.io/pr/199/assets/MTYxNzgwMzM5MzIyMw__617803393223.CVRW6_4H.png",y="/preview/cnjimbo/cnjimbo.github.io/pr/199/assets/MTYxNzgwMzUwODYyMA__617803508620.CSlGF3ts.png",b="/preview/cnjimbo/cnjimbo.github.io/pr/199/assets/MTYxNzgwNDAzODE3Nw__617804038177.Bwj876Gk.png",u="/preview/cnjimbo/cnjimbo.github.io/pr/199/assets/live-expression.DZbSBg48.gif?s1=https:/wingman-1300536089.file.myqcloud.com/chrome/C03/live-expression.gif",F="/preview/cnjimbo/cnjimbo.github.io/pr/199/assets/MTYxNzgwNDAwMjcyMg__617804002722.DsNQKvkE.png",B=JSON.parse('{"title":"Chrome调试技巧-Console","description":"","frontmatter":{"title":"Chrome调试技巧-Console","date":"2021-04-07T00:00:00.000Z","tags":["技术笔记","学习笔记"],"categories":["技术笔记"]},"headers":[],"relativePath":"technology/study/chrome-debug2.md","filePath":"technology/study/chrome-debug2.md","lastUpdated":1720544135000}'),_={name:"technology/study/chrome-debug2.md"},C=t('<h1 id="chrome-调试技巧-console" tabindex="-1">Chrome 调试技巧-Console <a class="header-anchor" href="#chrome-调试技巧-console" aria-label="Permalink to &quot;Chrome 调试技巧-Console&quot;">​</a></h1><p>控制台面板是使用频率最高的面板之一,这篇摘抄一些实用性高的内容</p><h2 id="" tabindex="-1">$ <a class="header-anchor" href="#" aria-label="Permalink to &quot;$&quot;">​</a></h2><h3 id="number" tabindex="-1">$number <a class="header-anchor" href="#number" aria-label="Permalink to &quot;$number&quot;">​</a></h3><p><strong>$0</strong> 是对我们当前在 <strong>Element面板</strong> 中选中的 html 节点的引用</p><p><strong>$1</strong> 是对上一次我们选择的节点的引用， <strong>$2</strong> 是对在那之前选择的节点的引用以此类推,直到 <strong>$4</strong></p><p><img src="'+e+'" alt="图片" loading="lazy"></p><h3 id="与" tabindex="-1">$与$$ <a class="header-anchor" href="#与" aria-label="Permalink to &quot;\\$与$$&quot;">​</a></h3><ul><li><strong>$</strong> 等价于 document.querySelector()</li><li><strong>$$</strong> 等价于 document.querySelectorAll()</li></ul><p><img src="'+n+'" alt="图片" loading="lazy"></p><h3 id="-1" tabindex="-1">$_ <a class="header-anchor" href="#-1" aria-label="Permalink to &quot;$_&quot;">​</a></h3><p>上次打印结果的引用</p><p><img src="'+l+'" alt="图片" loading="lazy"></p><h2 id="直接await" tabindex="-1">直接await <a class="header-anchor" href="#直接await" aria-label="Permalink to &quot;直接await&quot;">​</a></h2><p>大多数异步API 都会返回Promise,需要.then才能拿到结果</p><p>在console面板中可以直接await 不需要 async 包裹</p><p><img src="'+h+'" alt="图片" loading="lazy"></p><h2 id="条件断点" tabindex="-1">条件断点 <a class="header-anchor" href="#条件断点" aria-label="Permalink to &quot;条件断点&quot;">​</a></h2><p>TODO: 添加一个合适的示例</p><p>source面板中选择文件,右击行号，选择 Add conditional breakpoint 添加代码</p><p><img src="'+p+`" alt="图片" loading="lazy"></p><h2 id="custom-formatter" tabindex="-1">Custom Formatter <a class="header-anchor" href="#custom-formatter" aria-label="Permalink to &quot;Custom Formatter&quot;">​</a></h2><p>自定义输出对象的函数</p><p>TODO: 补充实用例子</p><h2 id="queryobjects" tabindex="-1">queryObjects <a class="header-anchor" href="#queryobjects" aria-label="Permalink to &quot;queryObjects&quot;">​</a></h2><p>TODO: 补充实用例子</p><h2 id="monitor" tabindex="-1">monitor <a class="header-anchor" href="#monitor" aria-label="Permalink to &quot;monitor&quot;">​</a></h2><p>用于监控函数的入参,自动打印函数名与入参</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">monitor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sum)</span></span></code></pre></div><p><img src="`+o+'" alt="图片" loading="lazy"></p><h2 id="monitorevents" tabindex="-1">monitorEvents <a class="header-anchor" href="#monitorevents" aria-label="Permalink to &quot;monitorEvents&quot;">​</a></h2><p>事件监控</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">monitorEvents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(window,[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;resize&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><p><img src="'+r+'" alt="图片" loading="lazy"></p><h2 id="window-console" tabindex="-1">window.console <a class="header-anchor" href="#window-console" aria-label="Permalink to &quot;window.console&quot;">​</a></h2><p><img src="'+k+`" alt="图片" loading="lazy"></p><p>除了常用的console.log外其它实用的方法</p><h3 id="assert" tabindex="-1">assert <a class="header-anchor" href="#assert" aria-label="Permalink to &quot;assert&quot;">​</a></h3><p>当第一个参数为 false 时， console.assert 打印跟在这个参数后面的值</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;no equal&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;yes&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><img src="`+d+`" alt="图片" loading="lazy"></p><h3 id="table" tabindex="-1">table <a class="header-anchor" href="#table" aria-label="Permalink to &quot;table&quot;">​</a></h3><p>可以将 数组 (或者是 类数组 的对象)打印成一个漂亮的表格</p><p>第二个参数指定要展示的列</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelectorAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;textContent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;href&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(location)</span></span></code></pre></div><p><img src="`+c+'" alt="图片" loading="lazy"></p><p><img src="'+g+`" alt="图片" loading="lazy"></p><h3 id="time与timeend" tabindex="-1">time与timeEnd <a class="header-anchor" href="#time与timeend" aria-label="Permalink to &quot;time与timeEnd&quot;">​</a></h3><p>两个方法配合计算并打印时间戳,用处用于测试方法的执行时间</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(console.timeEnd,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><img src="`+E+`" alt="图片" loading="lazy"></p><h3 id="dir" tabindex="-1">dir <a class="header-anchor" href="#dir" aria-label="Permalink to &quot;dir&quot;">​</a></h3><p>可以用于查看某个dom的属性</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.body)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.body)</span></span></code></pre></div><p><img src="`+m+`" alt="图片" loading="lazy"></p><h3 id="log添加样式" tabindex="-1">log添加样式 <a class="header-anchor" href="#log添加样式" aria-label="Permalink to &quot;log添加样式&quot;">​</a></h3><p>给打印文本加上 <strong>%c</strong> ,%c后面的内容就会被样式参数所影响</p><p>console.log 除第一个参数外的参数都是css规则</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%cred&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;color:red;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%cred%cblue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;color:red;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;color:blue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><img src="`+y+'" alt="图片" loading="lazy"></p><h2 id="实时表达式" tabindex="-1">实时表达式 <a class="header-anchor" href="#实时表达式" aria-label="Permalink to &quot;实时表达式&quot;">​</a></h2><p><img src="'+b+'" alt="图片" loading="lazy"></p><p><img src="'+u+'" alt="" loading="lazy"></p><p><img src="'+F+'" alt="图片" loading="lazy"></p>',64),j=[C];function M(v,w,q,T,x,z){return i(),a("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIydGl0bGUlMjIlM0ElMjJDaHJvbWUlRTglQjAlODMlRTglQUYlOTUlRTYlOEElODAlRTUlQjclQTctQ29uc29sZSUyMiUyQyUyMmRhdGUlMjIlM0ExNjE3NzUzNjAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFNiU4QSU4MCVFNiU5QyVBRiVFNyVBQyU5NCVFOCVBRSVCMCUyMiUyQyUyMiVFNSVBRCVBNiVFNCVCOSVBMCVFNyVBQyU5NCVFOCVBRSVCMCUyMiU1RCUyQyUyMmNhdGVnb3JpZXMlMjIlM0ElNUIlMjIlRTYlOEElODAlRTYlOUMlQUYlRTclQUMlOTQlRTglQUUlQjAlMjIlNUQlN0Q="},j)}const U=s(_,[["render",M]]);export{B as __pageData,U as default};
