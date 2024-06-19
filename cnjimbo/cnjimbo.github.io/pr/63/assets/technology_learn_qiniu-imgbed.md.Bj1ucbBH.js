import{j as s,b as i,c as a,a7 as n}from"./chunks/framework.DU49VhnK.js";const y=JSON.parse('{"title":"3分钟使用OSS搭建个人的在线图床","description":"","frontmatter":{"title":"3分钟使用OSS搭建个人的在线图床","date":"2021-06-07T00:00:00.000Z","tags":["技术笔记","技术教程"],"categories":["技术笔记"]},"headers":[],"relativePath":"technology/learn/qiniu-imgbed.md","filePath":"technology/learn/qiniu-imgbed.md","lastUpdated":1670770660000}'),t={name:"technology/learn/qiniu-imgbed.md"},h=n(`<h1 id="使用免费的七牛云oss-10g-搭建个人的在线图床" tabindex="-1">使用免费的七牛云OSS(10G)搭建个人的在线图床 <a class="header-anchor" href="#使用免费的七牛云oss-10g-搭建个人的在线图床" aria-label="Permalink to &quot;使用免费的七牛云OSS(10G)搭建个人的在线图床&quot;">​</a></h1><p><a href="https://github.com/ATQQ/image-bed-qiniu" target="_blank" rel="noreferrer">代码</a>已经提前给大伙儿<strong>码好了</strong>(原生三大件，无框架代码),大伙儿只需要注册个七牛云账号,<strong>改4行</strong>代码即可</p><p>最终效果如下,非常简洁(麻雀虽小五脏俱全)</p><p>支持<strong>复制粘贴</strong>，<strong>截图</strong>，<strong>手动选择</strong>，<strong>拖拽</strong>等四种常见的上传方案</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2fbcf37d23694a0a9a3b4a515a61a921~tplv-k3u1fbpfcp-zoom-1.image" alt="图片" loading="lazy"></p><h2 id="线上预览" tabindex="-1">线上预览 <a class="header-anchor" href="#线上预览" aria-label="Permalink to &quot;线上预览&quot;">​</a></h2><ul><li><a href="https://imgbed.sugarat.top/" target="_blank" rel="noreferrer">线上demo</a></li><li><a href="https://stackblitz.com/edit/github-2scsen?file=README.md" target="_blank" rel="noreferrer">在线编码</a></li></ul><h2 id="所需准备" tabindex="-1">所需准备 <a class="header-anchor" href="#所需准备" aria-label="Permalink to &quot;所需准备&quot;">​</a></h2><blockquote><p>记得选择创建公开的存储空间</p></blockquote><ul><li><a href="https://portal.qiniu.com/" target="_blank" rel="noreferrer">七牛云</a>账号一枚</li><li><a href="https://portal.qiniu.com/bucket/create" target="_blank" rel="noreferrer">七牛云对象存储空间</a>(免费10G)</li><li>安装<a href="http://nodejs.cn/" target="_blank" rel="noreferrer">Node.js</a></li></ul><h2 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h2><h3 id="_1-clone仓库" tabindex="-1">1.clone仓库 <a class="header-anchor" href="#_1-clone仓库" aria-label="Permalink to &quot;1.clone仓库&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/ATQQ/image-bed-qiniu.git</span></span></code></pre></div><h3 id="_2-安装依赖" tabindex="-1">2.安装依赖 <a class="header-anchor" href="#_2-安装依赖" aria-label="Permalink to &quot;2.安装依赖&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><h3 id="_3-修改环境变量" tabindex="-1">3.修改环境变量 <a class="header-anchor" href="#_3-修改环境变量" aria-label="Permalink to &quot;3.修改环境变量&quot;">​</a></h3><p>根目录<code>创建.env.local</code>或者直接<code>修改.env</code>文件,加入以下内容</p><p>这4项均需自己配置</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">QINIU_ACCESS_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">AccessKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">QINIU_SECRET_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SecretKey</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">QINIU_BUCKET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Bucket</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # OSS空间名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">QINIU_DOMAIN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">domain</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 图床域名(包含协议https/http)</span></span></code></pre></div><p>下面通过截图展现了几个变量的获取位置</p><details><summary>查看 bucket</summary><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b906243abb94329a8efdfaba5e66a58~tplv-k3u1fbpfcp-zoom-1.image" alt="" loading="lazy"></p></details><details><summary>查看 Access Key和Secret Key</summary><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c60966aa203a41f49ba0cffdaad80141~tplv-k3u1fbpfcp-zoom-1.image" alt="" loading="lazy"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/36299d27ec07496ebeb58021fc49ade7~tplv-k3u1fbpfcp-zoom-1.image" alt="" loading="lazy"></p></details><details><summary>查看域名</summary><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e678a09cee3c4ec4b087bba565d8bb8a~tplv-k3u1fbpfcp-zoom-1.image" alt="图片" loading="lazy"></p></details><h3 id="_4-启动" tabindex="-1">4. 启动 <a class="header-anchor" href="#_4-启动" aria-label="Permalink to &quot;4. 启动&quot;">​</a></h3><p>开发环境预览</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>生产构建</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><p>构建结果可直接进行进行部署</p><p>没有云服务的掘友,可采用免费的腾讯云Serverless部署</p><p>站内查看<a href="https://juejin.cn/post/6964015528662794254" target="_blank" rel="noreferrer">Serverless部署静态资源站点的手把手教程</a></p><h2 id="关键实现部分介绍" tabindex="-1">关键实现部分介绍 <a class="header-anchor" href="#关键实现部分介绍" aria-label="Permalink to &quot;关键实现部分介绍&quot;">​</a></h2><p>以<strong>textarea</strong>区域承载上述操作</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pastePanel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pastePanel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="读取剪贴板中的内容" tabindex="-1">读取剪贴板中的内容 <a class="header-anchor" href="#读取剪贴板中的内容" aria-label="Permalink to &quot;读取剪贴板中的内容&quot;">​</a></h3><ul><li>监听目标Dom的<code>paste</code>事件</li><li>在回调函数中的<code>event.clipboardData.items</code>中获取剪贴板中的内容</li><li>其中<code>items</code>的每一个元素<code>item</code>有<code>kind</code>和<code>type</code>两个属性</li><li>通过<code>kind</code>属性筛选剪贴版中内容的类型，通过<code>type</code>判断值的<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types" target="_blank" rel="noreferrer">MIME 类型</a>是否为图片</li><li>判断结果是我们所需要得图片文件之后调用<code>item.getAsFile</code>方法将内容转为<code>File</code>对象</li><li>调用上传方法即可</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 监听粘贴事件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pastePanel.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;paste&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;paste&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 阻止触发默认的粘贴事件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    e.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">preventDefault</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { items } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e.clipboardData;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> items) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (item.kind </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;file&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item.type.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            //上传的文件对象</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> file </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAsFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            //文件名(加一个前缀相当于目录)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fileName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;mdImg/&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> btoa</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">substring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            //开始上传</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            uploadFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file, fileName);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (item.type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;text/plain&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            item.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAsString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                e.target.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h3 id="获取拖拽得文件" tabindex="-1">获取拖拽得文件 <a class="header-anchor" href="#获取拖拽得文件" aria-label="Permalink to &quot;获取拖拽得文件&quot;">​</a></h3><ul><li>首先禁用document上的<code>drop</code>事件</li><li>监听目标Dom的<code>drop</code>事件</li><li>在回调函数中的<code>event.dataTransfer.files</code>中获取拖拽释放的内容</li><li>通过<code>file.type</code>判断文件的<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types" target="_blank" rel="noreferrer">MIME 类型</a>是否为图片</li><li>调用上传方法</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 禁用默认的拖拽触发的内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;drop&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    e.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">preventDefault</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;dragover&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    e.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">preventDefault</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pastePanel.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;drop&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { files } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e.dataTransfer;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> files) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (file.type.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            //文件名(加一个前缀相当于目录)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fileName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;mdImg/&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> btoa</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">substring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            //开始上传</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            uploadFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file, fileName);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h3 id="将内容写入剪贴板" tabindex="-1">将内容写入剪贴板 <a class="header-anchor" href="#将内容写入剪贴板" aria-label="Permalink to &quot;将内容写入剪贴板&quot;">​</a></h3><p>这个就是最简单的一个写法，不考虑兼容性</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 将结果写入的剪贴板</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {String}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> text</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> copyRes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> input</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;input&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    document.body.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(input);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    input.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;value&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, text);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    input.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">execCommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;copy&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">execCommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;copy&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    document.body.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(input);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,43),l=[h];function e(p,k,E,r,d,g){return i(),a("div",null,l)}const c=s(t,[["render",e]]);export{y as __pageData,c as default};
