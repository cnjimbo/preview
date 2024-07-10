import{_ as s,o as i,c as a,a5 as n}from"./chunks/framework.LgZTV_YJ.js";const y=JSON.parse('{"title":"网络层面优化","description":"","frontmatter":{"isTimeLine":true,"title":"网络层面优化","date":"2020-04-14T00:00:00.000Z","tags":["大前端","性能优化"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/performance/Internet.md","filePath":"bigWeb/performance/Internet.md","lastUpdated":1719297432000}'),l={name:"bigWeb/performance/Internet.md"},e=n(`<h1 id="网络层面优化" tabindex="-1">网络层面优化 <a class="header-anchor" href="#网络层面优化" aria-label="Permalink to &quot;网络层面优化&quot;">​</a></h1><h2 id="dns解析" tabindex="-1">DNS解析 <a class="header-anchor" href="#dns解析" aria-label="Permalink to &quot;DNS解析&quot;">​</a></h2><ul><li>浏览器DNS缓存</li><li><a href="./dnsPre.html">DNS预解析</a></li></ul><h2 id="tcp连接" tabindex="-1">TCP连接 <a class="header-anchor" href="#tcp连接" aria-label="Permalink to &quot;TCP连接&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/yanglianzhuang/article/details/87966866" target="_blank" rel="noreferrer">长连接</a>,HTTP/2中的多路复用</li><li>预连接</li><li>接入 <a href="https://baike.baidu.com/item/SPDY/3399551?fr=aladdin" target="_blank" rel="noreferrer">SPDY</a> 协议</li></ul><h2 id="http请求-响应" tabindex="-1">Http请求/响应 <a class="header-anchor" href="#http请求-响应" aria-label="Permalink to &quot;Http请求/响应&quot;">​</a></h2><ul><li>减少请求次数</li><li>减少单次请求所花费的时间</li></ul><h2 id="webpack-优化" tabindex="-1">webpack 优化 <a class="header-anchor" href="#webpack-优化" aria-label="Permalink to &quot;webpack 优化&quot;">​</a></h2><h3 id="构建过程提速" tabindex="-1">构建过程提速 <a class="header-anchor" href="#构建过程提速" aria-label="Permalink to &quot;构建过程提速&quot;">​</a></h3><p><strong>babel-loader</strong></p><ul><li>使用include 或 exclude避免不必要的转译</li><li>开启缓存</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">js</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  exclude</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(node_modules</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">bower_components)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    loader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;babel-loader?cacheDirectory=true&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      presets</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@babel/preset-env&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>处理第三方库</strong></p><p><a href="https://www.webpackjs.com/plugins/dll-plugin/" target="_blank" rel="noreferrer">DllPlugin</a> 是基于 Windows 动态链接库（dll）的思想被创作出来的。这个插件会把第三方库单独打包到一个文件中，这个文件就是一个单纯的依赖库。这个依赖库不会跟着你的业务代码一起被重新打包，只有当依赖自身发生版本变化时才会重新打包。</p><p><strong>将 loader 由单进程转为多进程</strong></p><p>webpack 是单线程的，当存在多个任务，只能排队一个接一个地等待处理。<a href="https://github.com/amireh/happypack" target="_blank" rel="noreferrer">Happypack</a> 会充分释放 CPU 在多核并发方面的优势，把任务分解给多个子进程去并发执行，大大提升打包效率。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> HappyPack</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;happypack&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.module </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rules: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">js</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 1) replace your original list of loaders with &quot;happypack/loader&quot;:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // loaders: [ &#39;babel-loader?presets[]=es2015&#39; ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      use: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;happypack/loader&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      include: [ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      exclude: [ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.plugins </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 2) create the plugin:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HappyPack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 3) re-add the loaders you replaced above in #1:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    loaders: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;babel-loader?presets[]=es2015&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><h3 id="构建结果体积压缩" tabindex="-1">构建结果体积压缩 <a class="header-anchor" href="#构建结果体积压缩" aria-label="Permalink to &quot;构建结果体积压缩&quot;">​</a></h3><p><a href="https://www.npmjs.com/package/webpack-bundle-analyzer" target="_blank" rel="noreferrer">webpack-bundle-analyzer</a>,文件结构可视化，找出导致体积过大的原因</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> BundleAnalyzerPlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;webpack-bundle-analyzer&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).BundleAnalyzerPlugin;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BundleAnalyzerPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="拆分资源" tabindex="-1">拆分资源 <a class="header-anchor" href="#拆分资源" aria-label="Permalink to &quot;拆分资源&quot;">​</a></h3><h3 id="删除冗余代码" tabindex="-1">删除冗余代码 <a class="header-anchor" href="#删除冗余代码" aria-label="Permalink to &quot;删除冗余代码&quot;">​</a></h3><ul><li>使用<code>Tree-Shaking</code>插件</li></ul><h2 id="gzip-压缩" tabindex="-1">Gzip 压缩 <a class="header-anchor" href="#gzip-压缩" aria-label="Permalink to &quot;Gzip 压缩&quot;">​</a></h2><h3 id="开启gzip" tabindex="-1">开启Gzip <a class="header-anchor" href="#开启gzip" aria-label="Permalink to &quot;开启Gzip&quot;">​</a></h3><p>在request headers中加入</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">accept</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">encoding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:gzip</span></span></code></pre></div><p>压缩后通常能帮我们减少响应 70% 左右的大小</p>`,28),h=[e];function t(p,k,r,d,E,g){return i(),a("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyaXNUaW1lTGluZSUyMiUzQXRydWUlMkMlMjJ0aXRsZSUyMiUzQSUyMiVFNyVCRCU5MSVFNyVCQiU5QyVFNSVCMSU4MiVFOSU5RCVBMiVFNCVCQyU5OCVFNSU4QyU5NiUyMiUyQyUyMmRhdGUlMjIlM0ExNTg2ODIyNDAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFNSVBNCVBNyVFNSU4OSU4RCVFNyVBQiVBRiUyMiUyQyUyMiVFNiU4MCVBNyVFOCU4MyVCRCVFNCVCQyU5OCVFNSU4QyU5NiUyMiU1RCUyQyUyMmNhdGVnb3JpZXMlMjIlM0ElNUIlMjIlRTUlQTQlQTclRTUlODklOEQlRTclQUIlQUYlMjIlNUQlN0Q="},h)}const o=s(l,[["render",t]]);export{y as __pageData,o as default};
