import{_ as s,o as i,c as a,a6 as n}from"./chunks/framework.CaqK0m25.js";const y=JSON.parse('{"title":"垃圾回收机制","description":"","frontmatter":{"sidebar":{"title":"垃圾回收","step":8},"isTimeLine":true,"title":"垃圾回收机制","date":"2020-04-14T00:00:00.000Z","tags":["大前端","javascript"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/js/garbage.md","filePath":"bigWeb/js/garbage.md","lastUpdated":1670770660000}'),l={name:"bigWeb/js/garbage.md"},t=n(`<h1 id="垃圾回收机制" tabindex="-1">垃圾回收机制 <a class="header-anchor" href="#垃圾回收机制" aria-label="Permalink to &quot;垃圾回收机制&quot;">​</a></h1><p>JavaScript 中的内存管理是自动执行的，而且是不可见的。</p><h2 id="垃圾" tabindex="-1">垃圾? <a class="header-anchor" href="#垃圾" aria-label="Permalink to &quot;垃圾?&quot;">​</a></h2><ul><li>没有被引用的对象</li><li>几个对象引用形成一个环,互相引用,但无法访问到</li></ul><h2 id="可达性" tabindex="-1">可达性 <a class="header-anchor" href="#可达性" aria-label="Permalink to &quot;可达性&quot;">​</a></h2><p>简单地说，“可达性” 值就是那些<strong>以某种方式可访问或可用的值</strong>，它们被保证存储在内存中</p><ol><li>有一组基本的固有可达值，由于显而易见的原因无法删除</li></ol><ul><li>本地函数的局部变量和和参数</li><li>嵌套调用链上的其它函数的变量与参数</li><li>全局变量</li><li>其它的内部变量</li></ul><p>这些值称为根。</p><ol start="2"><li>如果引用或引用链可以从根访问任何其他值，则认为该值是可访问的</li></ol><ul><li>如果局部变量中有对象，并且该对象具有引用另一个对象的属性，则该对象被视为可达性，它引用的那些也是可以访问的</li></ul><h2 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h2><ol><li>单个对象的引用</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;xiaoming&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// user --&gt; {name:&#39;xiaoming&#39;}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// user -x-  {name:xiaoming}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 回收</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 因为{name:&#39;小明&#39;} 无法再被访问到</span></span></code></pre></div><ol start="2"><li>两个对象引用同一个</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;xiaoming&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// user --&gt; {name:&#39;xiaoming&#39;}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;xiaoming&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// user1 --&gt; {name:&#39;xiaoming&#39;}  &lt;-- user2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// user1 -x- {name:&#39;xiaoming&#39;}  &lt;-- user2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这里还可以通过user访问到{name:&#39;xiaoming&#39;} 所以不会回收</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// user1 -x- {name:&#39;xiaoming&#39;}  -x- user2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 回收{name:&#39;小明&#39;}</span></span></code></pre></div><ol start="3"><li>相互引用</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> marray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">woman</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">man</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    woman.husband </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> man</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    man.wife </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> woman</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        male: man,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        female: woman</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> woman </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;qq&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// woman --&gt; qq</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> man </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;tb&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// man --&gt; tb</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> couple </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> marray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(woman, man)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// couple --&gt; male --&gt; tb x qq  &lt;-- female &lt;--couple</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// tb x qq = tb --&gt;wife --&gt; qq     qq --&gt; husband --&gt;tb</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果要回收 {name:&#39;tb&#39;}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">man </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// man -x- tb</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">couple.male </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// couple --&gt; male -x- tb</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">couple.female.husband </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// qq --&gt; husband -x- tb</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(couple)</span></span></code></pre></div><ol start="4"><li>无法访问的数据块</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> marray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},{name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 直接回收数据块</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li>不具有<strong>可达性</strong>的块或值会被清理</li></ul><h2 id="内部算法" tabindex="-1">内部算法 <a class="header-anchor" href="#内部算法" aria-label="Permalink to &quot;内部算法&quot;">​</a></h2><h3 id="标记-清除算法" tabindex="-1">标记-清除算法 <a class="header-anchor" href="#标记-清除算法" aria-label="Permalink to &quot;标记-清除算法&quot;">​</a></h3><ol><li>垃圾回收器获取根并“标记”(记住)它们。</li><li>然后它访问并“标记”所有来自它们的引用。</li><li>然后它访问标记的对象并标记它们的引用。所有被访问的对象都被记住，以便以后不再访问同一个对象两次。</li><li>以此类推，直到没有未访问的引用(能从根访问)为止。</li><li>除标记的对象外，其它对象都被删除。</li></ol><h3 id="优化" tabindex="-1">优化 <a class="header-anchor" href="#优化" aria-label="Permalink to &quot;优化&quot;">​</a></h3><ul><li>分代回收——对象分为两组:“新对象”和“旧对象”。许多对象出现，完成它们的工作并迅速结 ，它们很快就会被清理干净。那些活得足够久的对象，会变“老”，并且很少接受检查。</li><li>增量回收——如果有很多对象，并且我们试图一次遍历并标记整个对象集，那么可能会花费一些时间，并在执行中会有一定的延迟。因此，引擎试图将垃圾回收分解为多个部分。然后，各个部分分别执行。这需要额外的标记来跟踪变化，这样有很多微小的延迟，而不是很大的延迟。</li><li>空闲时间收集——垃圾回收器只在 CPU 空闲时运行，以减少对执行的可能影响。</li></ul><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://segmentfault.com/a/1190000018605776?utm_source=tag-newest#item-1" target="_blank" rel="noreferrer">前端面试：谈谈 JS 垃圾回收机制</a></p></div><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyc2lkZWJhciUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBJTIyJUU1JTlFJTgzJUU1JTlDJUJFJUU1JTlCJTlFJUU2JTk0JUI2JTIyJTJDJTIyc3RlcCUyMiUzQTglN0QlMkMlMjJpc1RpbWVMaW5lJTIyJTNBdHJ1ZSUyQyUyMnRpdGxlJTIyJTNBJTIyJUU1JTlFJTgzJUU1JTlDJUJFJUU1JTlCJTlFJUU2JTk0JUI2JUU2JTlDJUJBJUU1JTg4JUI2JTIyJTJDJTIyZGF0ZSUyMiUzQTE1ODY4MjI0MDAwMDAlMkMlMjJ0YWdzJTIyJTNBJTVCJTIyJUU1JUE0JUE3JUU1JTg5JThEJUU3JUFCJUFGJTIyJTJDJTIyamF2YXNjcmlwdCUyMiU1RCUyQyUyMmNhdGVnb3JpZXMlMjIlM0ElNUIlMjIlRTUlQTQlQTclRTUlODklOEQlRTclQUIlQUYlMjIlNUQlN0Q="></div>`,29),h=[t];function p(e,k,r,d,E,g){return i(),a("div",null,h)}const o=s(l,[["render",p]]);export{y as __pageData,o as default};
