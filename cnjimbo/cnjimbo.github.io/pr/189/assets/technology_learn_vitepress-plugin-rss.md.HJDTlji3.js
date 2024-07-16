import{_ as s,o as i,c as a,a5 as n}from"./chunks/framework._h6O0Qk-.js";const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAzCAYAAAAKLSELAAAACXBIWXMAAAsTAAALEwEAmpwYAAACT0lEQVRoge2Xv6ryMBiHf0eFTGfvIAoOrqUtCNLNy3DSQVAoLt6A1xCKS4e6ew9uBStqCTgJCtpLcHIQv+FQ0finnpwczifk2ZI3sY9J3zfpx+l0OuE/J/PXAq+gJGWhJGWhJGWhJGWhJGWhJGXxFpI50YmO4yAIAti2DcuyAADNZlOa2CUfIvdJ3/dBKb0b63a7AOQKC0kyxtBoNFLHdbtdKbLZfr/f/+4kTdNACEEYhk/HhWEIQggymQw0TRN1FFtJHsYYFovFw1cA+NmqSpG8JO19FRGVLpnwSFZE9EeSjDHouv40fi/BhsPh03k8UkpQWtlJaqqoqJQTh1IKSikMw4Dv+zdx13Vh2/ZVn+d5L/++kKRpmg9jlNK7oq1W66odBAEYYy89T0hS13VEUXTeZh5KKRzHuZnDj391NYWKeYJhGGi32yCEIJfLIY7jcyyOYxBCYBjG1fjlcnkeF8cxqtVqaqGXWoLulR0+QfiMt20bruv+nuR2u8XxeESpVHoqGkXRVftydYH0TBd6J3e7HQaDAXq9Hur1OjqdDsbjMYCvMsRnMp8gfDwNIcn5fA7P87Ber3E4HDCZTDAajc5xPpP5BEmLS5FcrVY3fVEUYbPZAPjK5MvV4gv5d04bQFDy8/Pzpi+fzyObzT6c82zL+T/BIyRZqVRu+mq1GorF4rnNbym/esknB4CH9TZBOLtnsxmm0yn2+z3K5TIsy0KhULgak5w8pmne3eIknnYr+rWrmkze4pNWScpCScpCScpCScpCScpCScriLST/AYhxCmGdGLqyAAAAAElFTkSuQmCC",p="/preview/cnjimbo/cnjimbo.github.io/pr/189/assets/MTY5MjQ1NTAzMzcwMg__692455033702.DjV5TAWC.png",t="/preview/cnjimbo/cnjimbo.github.io/pr/189/assets/MTY5MjQ1NTQ4MDYxMg__692455480612.CPEmsNz5.png",e="/preview/cnjimbo/cnjimbo.github.io/pr/189/assets/MTY5MjYyNzE4MDA4MA__692627180080.D6bHOZ9-.png",h="/preview/cnjimbo/cnjimbo.github.io/pr/189/assets/MTY5MjYyODA0OTEzMA__692628049130.D964gkjL.png",k="/preview/cnjimbo/cnjimbo.github.io/pr/189/assets/MTY5MjYyODE0MzUyNw__692628143527.Bs5FpdDZ.png",r="/preview/cnjimbo/cnjimbo.github.io/pr/189/assets/MTY5MjYyODMxNTQyMA__692628315420.tZQitHB9.png",d="/preview/cnjimbo/cnjimbo.github.io/pr/189/assets/MTY5MjYyODc2MjI2MQ__692628762261.DNcorZ0t.png",E="/preview/cnjimbo/cnjimbo.github.io/pr/189/assets/MTY5MjYyODY2MDQ3OQ__692628660479.CWSKOTNb.png",D=JSON.parse('{"title":"实现自动为 VitePress 网站添加 RSS 订阅的插件","description":"使用 VitePress 作为个人博客的站点越来越多，RSS支持也是博客上的一个功能点，方便读者订阅，本文将介绍如何通过Vite 插件为 VitePress 站点一键添加RSS支持","frontmatter":{"outline":[2,3],"description":"使用 VitePress 作为个人博客的站点越来越多，RSS支持也是博客上的一个功能点，方便读者订阅，本文将介绍如何通过Vite 插件为 VitePress 站点一键添加RSS支持"},"headers":[],"relativePath":"technology/learn/vitepress-plugin-rss.md","filePath":"technology/learn/vitepress-plugin-rss.md","lastUpdated":1720544135000}'),g={name:"technology/learn/vitepress-plugin-rss.md"},o=n('<h1 id="实现自动为-vitepress-网站添加-rss-订阅的插件" tabindex="-1">实现自动为 VitePress 网站添加 RSS 订阅的插件 <a class="header-anchor" href="#实现自动为-vitepress-网站添加-rss-订阅的插件" aria-label="Permalink to &quot;实现自动为 VitePress 网站添加 RSS 订阅的插件&quot;">​</a></h1><p>省流：使用 <a href="https://www.npmjs.com/package/vitepress-plugin-rss" target="_blank" rel="noreferrer">vitepress-plugin-rss</a> 这个插件</p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>在看许多个人博客站点的时候，右上角总会有个RSS订阅的标志</p><p><img src="'+l+`" alt="" loading="lazy"></p><p>恰好<a href="https://www.dmsrs.org/" target="_blank" rel="noreferrer">我的博客</a>也是基于 <a href="https://vitepress.dev/" target="_blank" rel="noreferrer">VitePress</a> 搭建的，就想看看能不能也实现这个功能呢？</p><p>动手前先搜了一下，先是看到了<a href="https://github.com/clark-cui/vitepress-blog-zaun" target="_blank" rel="noreferrer">vitepress-blog-zaun</a>上有这个RSS的实现支持，再搜了一下发现Vue的官方博客 <a href="https://github.com/vuejs/blog/tree/main" target="_blank" rel="noreferrer">vuejs/blog</a> 也是用的这样的实现</p><p>大概就是自定义 VitePress 的 <a href="https://vitepress.dev/reference/site-config#buildend" target="_blank" rel="noreferrer">buildEnd</a> 钩子，在里面实现逻辑获取 <code>md</code> 文件列表，然后通过 <a href="https://www.npmjs.com/package/feed" target="_blank" rel="noreferrer">feed</a> 生成 RSS 文件，<a href="https://github.com/vuejs/blog/blob/main/.vitepress/genFeed.ts" target="_blank" rel="noreferrer">整个逻辑就 50+ 行代码</a></p><p>由于我的博客还分离了独立的主题包 <a href="https://theme.sugarat.top/" target="_blank" rel="noreferrer">@sugarat/theme</a>，我想把这个功能加到我的主题包里，这样使用这个主题的就可以简单的配置一下就能使用了，当然也为了方便广大 VitePress 用户更加简便的使用，我将这段逻辑单独分离封装到了 <a href="https://www.npmjs.com/package/vitepress-plugin-rss" target="_blank" rel="noreferrer">vitepress-plugin-rss</a> 这个插件里。</p><p><strong>接下来我将会先介绍一下如何食用这个插件，再介绍它的核心实现原理</strong></p><h2 id="插件使用" tabindex="-1">插件使用 <a class="header-anchor" href="#插件使用" aria-label="Permalink to &quot;插件使用&quot;">​</a></h2><p>通过 <code>pnpm/npm/yarn</code> 安装插件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-rss</span></span></code></pre></div><p>在 <code>.vitepress/config.ts</code> 配置文件中添加配置使用</p><p>下面是最基础的使用配置</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { RSSOptions, RssPlugin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-plugin-rss&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> baseUrl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;https://www.dmsrs.org&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> RSS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RSSOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;代码收容所&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  baseUrl,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  copyright: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Copyright (c) 2018-present, 代码收容所&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vite: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ↓↓↓↓↓</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plugins: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RssPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RSS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ↑↑↑↑↑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>然后运行 build 命令，你可以看到在<code>rendering pages...</code>后打印了生成 <code>feed.rss</code> 日志...</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><p><img src="`+p+'" alt="" loading="lazy"></p><p>同时会在导航栏的 socialLinks 中添加 rss 图标链接</p><p><img src="'+t+'" alt="" loading="lazy"></p><p>使用是不是非常简单，只需要 10 行代码。</p><p>如果你对插件的实现原理感兴趣，请接着往下看 🎉 🎉 🎉。</p><h2 id="核心实现原理解析" tabindex="-1">核心实现原理解析 <a class="header-anchor" href="#核心实现原理解析" aria-label="Permalink to &quot;核心实现原理解析&quot;">​</a></h2><p>VitePress 的拓展在官方文档 <a href="https://vitepress.dev/guide/what-is-vitepress#use-cases" target="_blank" rel="noreferrer">Use Cases</a> 部分有提到</p><p><img src="'+e+`" alt="" loading="lazy"></p><p>其是基于 Vite 的，因此可以使用 Vite 的插件机制来实现主题内容的拓展。</p><h3 id="buildend-修改" tabindex="-1">buildEnd 修改 <a class="header-anchor" href="#buildend-修改" aria-label="Permalink to &quot;buildEnd 修改&quot;">​</a></h3><p>从官方的demo种可以看到，RSS 的生成逻辑是放在 buildEnd 中的，因此咱们插件也需要实现间接修改 buildEnd 方法</p><p>这个非常的简单，利用 Vite 的插件提供的 <a href="https://vitejs.dev/guide/api-plugin.html#configresolved" target="_blank" rel="noreferrer">configResolved</a> 钩子就行</p><p>下面是简单的demo</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { SiteConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> resolveConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> configResolved</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 避免多次执行</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (resolveConfig) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  resolveConfig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> VPConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SiteConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config.vitepress</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VPConfig) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> selfBuildEnd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> VPConfig.buildEnd</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 自定义 buildEnd 方法，添加 rss 生成支持</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  VPConfig.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">buildEnd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">siteConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 调用自己的</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> selfBuildEnd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">?.(siteConfig)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;buildEnd&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;生成 rss 文件&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>通过<code>config.vitepress</code>即可拿到vitepress的配置，然后重新定义 <code>buildEnd</code> 方法即可</p><p>这里可以直接快速的验证一下</p><p><img src="`+h+'" alt="" loading="lazy"></p><p>运行后可以看到打印了 <code>buildEnd 生成 rss 文件</code>，说明我们的插件的修改已经生效了</p><p><img src="'+k+'" alt="" loading="lazy"></p><h3 id="icon-添加" tabindex="-1">icon 添加 <a class="header-anchor" href="#icon-添加" aria-label="Permalink to &quot;icon 添加&quot;">​</a></h3><p>这个也非常的简单，VitePress 在官方文档里有介绍 <a href="https://vitepress.dev/reference/default-theme-config#sociallinks" target="_blank" rel="noreferrer">socialLinks</a></p><p><img src="'+r+`" alt="" loading="lazy"></p><p>我们只需要在配置修改中添加一个 <code>socialLinks</code> 的配置即可</p><p>接着上述的demo，添加如下代码</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VPConfig.site.themeConfig.socialLinks </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    icon: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      svg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;svg icon&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rss url&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">VPConfig.site.themeConfig.socialLinks</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>svg的图标可以通过 <a href="https://www.xicons.org/#/zh-CN" target="_blank" rel="noreferrer">xicons</a> 这个网站查找</p><p>比如我这里找了一个 sun 的图标配上</p><p><img src="`+d+'" alt="" loading="lazy"></p><p>启动博客后就能看见右上角这个小太阳了</p><p><img src="'+E+`" alt="" loading="lazy"></p><h3 id="md文件获取与解析" tabindex="-1">MD文件获取与解析 <a class="header-anchor" href="#md文件获取与解析" aria-label="Permalink to &quot;MD文件获取与解析&quot;">​</a></h3><p>这个是最核心的逻辑了，① 需要获取所有的 <code>md</code> 文件，② 解析里面的 frontmatter ③ 渲染HTML</p><p>这个在 <code>vuejs/blog</code> 中可以看到使用的是 VitePress 内置的 <a href="https://vitepress.dev/guide/data-loading#createcontentloader" target="_blank" rel="noreferrer">createContentLoader</a> 方法（里面包含了上述3部分逻辑）</p><p>这里把其核心实现拆出来，方便大家理解和更好的自定义（笔者在插件里也没直接使用 <code>createContentLoader</code> 这个方法）</p><p><strong>① 通过 fast-glob 获取所有的 md 文件</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> glob </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;fast-glob&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> files</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> glob.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">srcDir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/**/*.md\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { ignore: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;node_modules&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] })</span></span></code></pre></div><p>其中 <code>srcDir</code> 即文章所在的目录，可以通过如下方式获取到相对路径</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// config 即 SiteConfig</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> srcDir</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config.srcDir.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(config.root, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> process.argv.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)?.[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ||</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;.&#39;</span></span></code></pre></div><p><strong>② 通过 gray-matter 解析 frontmatter</strong></p><p>这里<code>frontmatter</code>就是文章开头里两个<code>---</code>之间的内容</p><p>例如</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">示例标题</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">文章介绍</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div><p>利用 gray-matter 解析</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;fs&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> matter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;gray-matter&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> files) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fileContent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readFileSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">frontmatter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">excerpt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> matter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fileContent, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    excerpt: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>其中 <code>excerpt</code> 即为文章的摘要信息(description)</p><p><strong>③ MD 渲染为 HTML</strong></p><p>这个使用 VitePress 提供的 <code>createMarkdownRenderer</code> 即可</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 由于插件里最后构建成 CJS/ESM 两种格式，VitePress 最新的版本支持 ESM，因此需要动态引入</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">createMarkdownRenderer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vitepress&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mdRender</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createMarkdownRenderer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  config.srcDir,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  config.markdown,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  config.site.base,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  config.logger</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> files) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fileContent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readFileSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 生成html</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> html</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mdRender.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fileContent)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="rss文件生成" tabindex="-1">RSS文件生成 <a class="header-anchor" href="#rss文件生成" aria-label="Permalink to &quot;RSS文件生成&quot;">​</a></h3><p>通过上面的 markdown 文件的解析，我们已经拿到了所有的文章信息，接下来就是通过 <a href="https://www.npmjs.com/package/feed" target="_blank" rel="noreferrer">feed</a> 这个库生成 RSS 文件了</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Feed } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;feed&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> feedOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> feed</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Feed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(feedOptions)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> files) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 通过前面解析的信息，生成 feed item</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  feed.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id: link,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    link,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    description,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    content: html,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    author: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        name: author,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">authorInfo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    image: frontmatter?.cover,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    date: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(date)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> RSSFilename</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;feed.rss&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> RSSFilepath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(config.outDir, RSSFilename)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 生成 rss 文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeFileSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(RSSFilepath, feed.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rss2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span></code></pre></div><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>插件的完整源码见 <a href="https://github.com/cnjimbo/cnjimbo.github.io/tree/master/packages/vitepress-plugin-rss" target="_blank" rel="noreferrer">GitHub</a>，欢迎大家试用和反馈</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://www.npmjs.com/package/feed" target="_blank" rel="noreferrer">jpmonette/feed</a></li><li><a href="https://github.com/vuejs/blog/tree/main" target="_blank" rel="noreferrer">vuejs/blog</a></li></ul>`,73),c=[o];function y(F,C,A,b,u,f){return i(),a("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyb3V0bGluZSUyMiUzQSU1QjIlMkMzJTVEJTJDJTIyZGVzY3JpcHRpb24lMjIlM0ElMjIlRTQlQkQlQkYlRTclOTQlQTglMjBWaXRlUHJlc3MlMjAlRTQlQkQlOUMlRTQlQjglQkElRTQlQjglQUElRTQlQkElQkElRTUlOEQlOUElRTUlQUUlQTIlRTclOUElODQlRTclQUIlOTklRTclODIlQjklRTglQjYlOEElRTYlOUQlQTUlRTglQjYlOEElRTUlQTQlOUElRUYlQkMlOENSU1MlRTYlOTQlQUYlRTYlOEMlODElRTQlQjklOUYlRTYlOTglQUYlRTUlOEQlOUElRTUlQUUlQTIlRTQlQjglOEElRTclOUElODQlRTQlQjglODAlRTQlQjglQUElRTUlOEElOUYlRTglODMlQkQlRTclODIlQjklRUYlQkMlOEMlRTYlOTYlQjklRTQlQkUlQkYlRTglQUYlQkIlRTglODAlODUlRTglQUUlQTIlRTklOTglODUlRUYlQkMlOEMlRTYlOUMlQUMlRTYlOTYlODclRTUlQjAlODYlRTQlQkIlOEIlRTclQkIlOEQlRTUlQTYlODIlRTQlQkQlOTUlRTklODAlOUElRTglQkYlODdWaXRlJTIwJUU2JThGJTkyJUU0JUJCJUI2JUU0JUI4JUJBJTIwVml0ZVByZXNzJTIwJUU3JUFCJTk5JUU3JTgyJUI5JUU0JUI4JTgwJUU5JTk0JUFFJUU2JUI3JUJCJUU1JThBJUEwUlNTJUU2JTk0JUFGJUU2JThDJTgxJTIyJTJDJTIyZGF0ZSUyMiUzQTE3MjA1NDQxMzUwMDAlN0Q="},c)}const v=s(g,[["render",y]]);export{D as __pageData,v as default};
