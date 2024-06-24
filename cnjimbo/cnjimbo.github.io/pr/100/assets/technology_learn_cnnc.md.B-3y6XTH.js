import{_ as s,o as i,c as a,a7 as n}from"./chunks/framework.DjUuv2wz.js";const g=JSON.parse('{"title":"实现自动扫描工作区npm包并同步cnpm","description":"批量且自动的做cnpm的同步，如果你是一个多npm包的项目，那么这个工具非常适合你","frontmatter":{"outline":[2,3],"description":"批量且自动的做cnpm的同步，如果你是一个多npm包的项目，那么这个工具非常适合你","tag":["CLI","技术笔记"]},"headers":[],"relativePath":"technology/learn/cnnc.md","filePath":"technology/learn/cnnc.md","lastUpdated":1694270088000}'),p={name:"technology/learn/cnnc.md"},l=n(`<h1 id="实现自动扫描工作区npm包并同步cnpm" tabindex="-1">实现自动扫描工作区npm包并同步cnpm <a class="header-anchor" href="#实现自动扫描工作区npm包并同步cnpm" aria-label="Permalink to &quot;实现自动扫描工作区npm包并同步cnpm&quot;">​</a></h1><p><strong>省流版: <code>npx cnnc</code></strong></p><p>为避免包名重复，取了2个单词的首尾，<em><span style="color:red;">cn</span>pm sy<span style="color:red;">nc</span></em></p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>在开发一个多npm包的项目时，时常会一次更新多个包的代码，再批量发布到 npm 镜像源后。</p><p>由于国内网络环境的原因，大部分都会使用<a href="https://npmmirror.com/" target="_blank" rel="noreferrer">淘宝的镜像源</a>进行依赖安装，为了确保发布后，通过淘宝源能够顺利的安装，通常会手动同步一下</p><p><code>cnpm sync vue react</code></p><p>但在一些大型的 monorepo 的多包工程里，手动输入包名是一件非常繁琐的事情，所以准备把输入的过程简化一下，改成自动扫描工作区的包名，然后自动同步。</p><p>进而有了这个工具</p><h2 id="工具的使用" tabindex="-1">工具的使用 <a class="header-anchor" href="#工具的使用" aria-label="Permalink to &quot;工具的使用&quot;">​</a></h2><p>直接通过 npx 运行即可，将自动扫描所有的包</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cnnc</span></span></code></pre></div><p><a href="https://app.warp.dev/block/wrTUBqnxdg65BqCTgtSgD5" target="_blank" rel="noreferrer">示例结果</a> 如下</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY5NDI0OTI5MjYwMg==694249292602" alt="" loading="lazy"></p><p>当然也同样支持手动传入要更新的包</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cncc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> react</span></span></code></pre></div><p>如果使用频率较高，也可全局安装<code>npm i -g cnnc</code></p><p>这样可以直接通过<code>cnnc</code>或<code>cs</code>命令调用</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY5NDI1NDAxNTM0Nw==694254015347" alt="" loading="lazy"></p><h2 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-label="Permalink to &quot;实现原理&quot;">​</a></h2><p>核心代码不到20行，下面详细的拆解一下，便于学习与理解</p><p>主要分为3部分</p><ul><li>工作区的包扫描</li><li>过滤出合法的包</li><li>调用 cnpm 同步</li></ul><h3 id="工作区的包扫描" tabindex="-1">工作区的包扫描 <a class="header-anchor" href="#工作区的包扫描" aria-label="Permalink to &quot;工作区的包扫描&quot;">​</a></h3><p>主要目的就是扫描工作区所有的 <code>package.json</code> 文件，然后提取出包名（不包含 node_modules，build 等目录下的文件）</p><p>这里可以 <code>fs.readdirSync</code> 实现一个递归的扫描，也可以用<a href="https://github.com/mrmlnc/fast-glob#readme" target="_blank" rel="noreferrer">fast-glob</a>，图方便我这里选择后者，也是目前目录扫描用得较广泛的一个包</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fast-glob&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pkgNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 通过glob 取所有package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./**/package.json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ignore: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;**/node_modules&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;**/dist&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;**/build&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;**/test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 省略更多的无关目录...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  absolute: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pkgNames.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>通常工作区里有很多无关的目录，比如<code>node_modules</code>、<code>build</code>、<code>dist</code>、<code>test</code>等，这些目录下的<code>package.json</code>都不需要同步，所以可以通过<code>ignore</code>参数来忽略掉，避免不必要的扫描（否则 node_modules 套 node_modules 会增加扫描时间，部分目录是软链的话也会导致扫描路径的异常）</p><h3 id="过滤出合法的包" tabindex="-1">过滤出合法的包 <a class="header-anchor" href="#过滤出合法的包" aria-label="Permalink to &quot;过滤出合法的包&quot;">​</a></h3><p>有些<code>package.json</code>会包含 <code>&quot;private&quot;: true</code> 内容，表明为私有的包，不会发布到npm镜像源，所以需要过滤掉</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 省略其它代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globResult.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">private) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pkgNames.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h3 id="调用-cnpm-同步" tabindex="-1">调用 cnpm 同步 <a class="header-anchor" href="#调用-cnpm-同步" aria-label="Permalink to &quot;调用 cnpm 同步&quot;">​</a></h3><p>最后一步就是调用<code>cnpm sync</code>命令，这里可以通过<code>child_process</code>模块来实现</p><p>通过<code>spawn</code>方法，可以直接调用命令行命令，然后通过<code>stdio: &#39;inherit&#39;</code>将命令行的输出直接打印到终端中</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">spawn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;child_process&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">promisify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;util&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CnpmSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">names</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> promisify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(spawn)(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;npx&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cnpm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sync&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">names], {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cwd: __dirname,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    stdio: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;inherit&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>为防止用户没有全局安装cnpm，这里通过<code>npx cnpm sync</code>的方式来调用，这样就不需要用户自己安装了</p><p>同时可以将<code>cnpm</code>作为包<code>dependencies</code>依赖安装，通过<code>cwd: __dirname</code>参数，将指令运行目录指定为当前目录，这样<code>npx cnpm</code>执行时，就会去<code>cncc</code>目录的<code>node_modules</code>下找到<code>cnpm</code>命令，从而实现调用，不需要重复的在全局进行依赖的安装，大大提升指令执行速度</p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>工具原理很简单，解决的问题也非常明确，希望能够帮助读者省下几分钟的时间，提升开发的幸福度</p><hr><p>当然工具还有很多可优化的点，比如先通过对比 npm 和 cnpm 的版本号，如果一致就不需要同步了，这样可以大大加快同步的速度</p><p>（<em>目前由于网络原因从 npm 镜像源拉包版本信息相对较慢，所以本期没有加这个功能，读者如果有更好的建议，欢迎评论区交流</em>）</p><p>同时可以将这个指令放在 <code>&quot;npm postpublish&quot;</code> 钩子中，这样发布后自动触发同步，更加省心</p><hr><p>完整源码见：<a href="https://github.com/ATQQ/tools/blob/main/packages/cli/sync-cnpm/README.md" target="_blank" rel="noreferrer">GitHub</a></p><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyb3V0bGluZSUyMiUzQSU1QjIlMkMzJTVEJTJDJTIyZGVzY3JpcHRpb24lMjIlM0ElMjIlRTYlODklQjklRTklODclOEYlRTQlQjglOTQlRTglODclQUElRTUlOEElQTglRTclOUElODQlRTUlODElOUFjbnBtJUU3JTlBJTg0JUU1JTkwJThDJUU2JUFEJUE1JUVGJUJDJThDJUU1JUE2JTgyJUU2JTlFJTlDJUU0JUJEJUEwJUU2JTk4JUFGJUU0JUI4JTgwJUU0JUI4JUFBJUU1JUE0JTlBbnBtJUU1JThDJTg1JUU3JTlBJTg0JUU5JUExJUI5JUU3JTlCJUFFJUVGJUJDJThDJUU5JTgyJUEzJUU0JUI5JTg4JUU4JUJGJTk5JUU0JUI4JUFBJUU1JUI3JUE1JUU1JTg1JUI3JUU5JTlEJTlFJUU1JUI4JUI4JUU5JTgwJTgyJUU1JTkwJTg4JUU0JUJEJUEwJTIyJTJDJTIydGFnJTIyJTNBJTVCJTIyQ0xJJTIyJTJDJTIyJUU2JThBJTgwJUU2JTlDJUFGJUU3JUFDJTk0JUU4JUFFJUIwJTIyJTVEJTJDJTIyZGF0ZSUyMiUzQTE2OTQyNzAwODgwMDAlN0Q="></div>`,46),e=[l];function h(t,k,d,r,E,c){return i(),a("div",null,e)}const y=s(p,[["render",h]]);export{g as __pageData,y as default};
