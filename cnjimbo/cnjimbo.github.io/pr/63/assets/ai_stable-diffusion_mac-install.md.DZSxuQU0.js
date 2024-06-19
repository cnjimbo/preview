import{j as a,b as t,c as s,a7 as e}from"./chunks/framework.DU49VhnK.js";const m=JSON.parse('{"title":"Mac 安装 stable-diffusion","description":"Mac 实操安装 stable-diffusion，包含环境配置，sd插件安装，模型安装等内容","frontmatter":{"outline":[2,3],"description":"Mac 实操安装 stable-diffusion，包含环境配置，sd插件安装，模型安装等内容","cover":"https://img.cdn.sugarat.top/mdImg/MTY4ODMwOTEzMzUzNA==688309133534"},"headers":[],"relativePath":"ai/stable-diffusion/mac-install.md","filePath":"ai/stable-diffusion/mac-install.md","lastUpdated":1688654582000}'),i={name:"ai/stable-diffusion/mac-install.md"},l=e('<h1 id="mac-安装-stable-diffusion" tabindex="-1">Mac 安装 stable-diffusion <a class="header-anchor" href="#mac-安装-stable-diffusion" aria-label="Permalink to &quot;Mac 安装 stable-diffusion&quot;">​</a></h1><p>笔者所使用设备 Mac mini（macOS Ventura），如读者你是 window 请自行谷歌 window 安装 stable-diffusion 教程。</p><p>笔者不会python，也不会机器学习，安装过程可能不是最佳的方式，但是能跑起来（hh）。</p><blockquote><nav class="table-of-contents"><ul><li><a href="#环境准备">环境准备</a><ul><li><a href="#安装python">安装python</a></li><li><a href="#安装-stable-diffusion-webui">安装 stable-diffusion-webui</a></li></ul></li><li><a href="#配置-stable-diffusion-webui">配置 stable-diffusion-webui</a><ul><li><a href="#汉化">汉化</a></li><li><a href="#安装插件">安装插件</a></li></ul></li><li><a href="#安装模型">安装模型</a></li><li><a href="#简单使用">简单使用</a></li></ul></nav></blockquote><h2 id="环境准备" tabindex="-1">环境准备 <a class="header-anchor" href="#环境准备" aria-label="Permalink to &quot;环境准备&quot;">​</a></h2><ul><li>科学上网工具：确保安装过程网络通畅</li><li><a href="https://www.python.org/downloads/release/python-3106/" target="_blank" rel="noreferrer">python 3.16.0</a> ：确保大部分依赖库能顺利运行</li><li><a href="https://github.com/AUTOMATIC1111/stable-diffusion-webui" target="_blank" rel="noreferrer">stable-diffusion-webui</a>：sd 网页应用</li></ul><h3 id="安装python" tabindex="-1">安装python <a class="header-anchor" href="#安装python" aria-label="Permalink to &quot;安装python&quot;">​</a></h3><blockquote><p>笔者的操作不一定是最佳实践</p></blockquote><p>我这里使用安装包傻瓜式的一键安装，从官网下载 <a href="https://www.python.org/downloads/release/python-3106/" target="_blank" rel="noreferrer">python 3.16.0</a> 安装包</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwMDc3OTM2Mg==688300779362" alt="" loading="lazy"></p><p>打开下载好的安装包，无脑选择下一步即可</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwMDgyMDQyMw==688300820423" alt="" loading="lazy"></p><p>安装完后打开终端输入，<a href="https://app.warp.dev/block/s9LVoqUBc12tgLXmwl1sQO" target="_blank" rel="noreferrer">查看 python 版本</a></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span></code></pre></div><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwMTAyODI2Nw==688301028267" alt="" loading="lazy"></p><p>这里可以在<code>~/.zshrc</code>中设置一个别名<code>python</code>，方便后续使用</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> python</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">python3</span></span></code></pre></div><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwMTEwMTgzNw==688301101837" alt="" loading="lazy"></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwMTEzMjgzNQ==688301132835" alt="" loading="lazy"></p><h3 id="安装-stable-diffusion-webui" tabindex="-1">安装 stable-diffusion-webui <a class="header-anchor" href="#安装-stable-diffusion-webui" aria-label="Permalink to &quot;安装 stable-diffusion-webui&quot;">​</a></h3><p>clone 项目到本地</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/AUTOMATIC1111/stable-diffusion-webui.git</span></span></code></pre></div><p>克隆完成后进入项目目录</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stable-diffusion-webui</span></span></code></pre></div><p>安装项目依赖(此过程会持续一段时间)</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements.txt</span></span></code></pre></div><p>启动项目</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./webui.sh</span></span></code></pre></div><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwMTU4NTA0Mw==688301585043" alt="" loading="lazy"></p><p>访问 <code>http://127.0.0.1:7860/</code> 即可应用的内容</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwMTY2MTk5MA==688301661990" alt="" loading="lazy"></p><h2 id="配置-stable-diffusion-webui" tabindex="-1">配置 stable-diffusion-webui <a class="header-anchor" href="#配置-stable-diffusion-webui" aria-label="Permalink to &quot;配置 stable-diffusion-webui&quot;">​</a></h2><h3 id="汉化" tabindex="-1">汉化 <a class="header-anchor" href="#汉化" aria-label="Permalink to &quot;汉化&quot;">​</a></h3><p>为了方便后续的使用我们可以将 stable-diffusion-webui 汉化一下</p><p>使用插件<a href="https://github.com/VinsonLaro/stable-diffusion-webui-chinese" target="_blank" rel="noreferrer">stable-diffusion-webui-chinese</a></p><p>安装操作路径: <code>Extensions</code> =&gt; <code>URL for extension&#39;s git repository</code> =&gt; <code>Install</code></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwMTc1ODg0MQ==688301758841" alt="" loading="lazy"></p><p>输入插件地址：<code>https://github.com/VinsonLaro/stable-diffusion-webui-chinese</code>,点击<code>Install</code>即可</p><p>紧接着应用插件：<code>Installed</code> =&gt; <code>Apply and restart UI</code></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwMTk0NTg4Nw==688301945887" alt="" loading="lazy"></p><p>设置汉化：<code>Settings</code> =&gt; <code>User Interface</code> =&gt; <code>Localization</code> =&gt; <code>Apply Settings</code> =&gt; <code>Reload UI</code></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwMjA5NjAwMQ==688302096001" alt="" loading="lazy"></p><p>推荐使用中英对照，方便观看部分英文教程</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwMjM3MTAwNw==688302371007" alt="" loading="lazy"></p><p>再次访问即可看到英文汉化的内容</p><h3 id="安装插件" tabindex="-1">安装插件 <a class="header-anchor" href="#安装插件" aria-label="Permalink to &quot;安装插件&quot;">​</a></h3><p>由于网络问题可能会出现访问失败的情况，如下图所示</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwMjQ0NDUwNg==688302444506" alt="" loading="lazy"></p><p>这里可以使用笔者的CV下来的配置<code>https://script.sugarat.top/json/sd.json</code></p><p>或者浏览器访问<a href="https://raw.githubusercontent.com/AUTOMATIC1111/stable-diffusion-webui-extensions/master/index.json" target="_blank" rel="noreferrer">链接资源</a>，将其下载到本地，本地启动一个服务（比如使用<a href="https://www.npmjs.com/package/http-server" target="_blank" rel="noreferrer">http-server</a>）</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http-server</span></span></code></pre></div><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwMjc3ODEzNg==688302778136" alt="" loading="lazy"></p><p>url设置为<code>http://127.0.0.1:8080/sd.json</code>即可，点击 加载 即可看到插件列表</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwMzI4NTY5Mg==688303285692" alt="" loading="lazy"></p><p>例如 安装 <code>sd-webui-controlnet</code> 和 <code>3D Openpose Editor</code></p><p>搜索<code>controlnet</code>，找到相应的插件，点击 <code>Installed</code> 即可</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwNTU2NjA0Mw==688305566043" alt="" loading="lazy"></p><p>在已安装列表即可看到安装的插件</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwNjIyOTMxNg==688306229316" alt="" loading="lazy"></p><p>重启后即可看到刚安装的插件生效了</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwNjc4MzcxMg==688306783712" alt="" loading="lazy"></p><h2 id="安装模型" tabindex="-1">安装模型 <a class="header-anchor" href="#安装模型" aria-label="Permalink to &quot;安装模型&quot;">​</a></h2><blockquote><p>从 <a href="https://civitai.com/" target="_blank" rel="noreferrer">C 站</a>：<a href="https://civitai.com/" target="_blank" rel="noreferrer">https://civitai.com/</a> 下载（需要科学上网工具才能访问）</p></blockquote><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwOTEzMzUzNA==688309133534" alt="" loading="lazy"></p><p>比如 <a href="https://civitai.com/models/6424?modelVersionId=11745" target="_blank" rel="noreferrer">ChilloutMix</a> 模型</p><p>点击下载</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwOTI2NTU3Mg==688309265572" alt="" loading="lazy"></p><p>导入下载的模型到目录 <code>models/Stable-diffusion</code></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwOTUyMDk4MA==688309520980" alt="" loading="lazy"></p><p>然后重启服务或者点击刷新</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODU3MDA2NDczNA==688570064734" alt="" loading="lazy"></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwOTYxMDkyOA==688309610928" alt="" loading="lazy"></p><h2 id="简单使用" tabindex="-1">简单使用 <a class="header-anchor" href="#简单使用" aria-label="Permalink to &quot;简单使用&quot;">​</a></h2><p>可以直接 Copy 其它用户分享到C站上的提示词</p><p>比如下面<a href="https://civitai.com/images/312507?period=AllTime&amp;periodMode=published&amp;sort=Newest&amp;view=categories&amp;modelVersionId=27828&amp;modelId=23302&amp;postId=79817" target="_blank" rel="noreferrer">这个例子</a></p><p>查看大图时滑到右下角</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwOTg3ODUxOA==688309878518" alt="" loading="lazy"></p><p>或者缩略图右下角的 “i”</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMwOTkwMzgwOA==688309903808" alt="" loading="lazy"></p><p>下面实操使用一下上面的提示词</p><p>我这里把步数调成了30</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-eBnx1" id="tab-DauYfRy" checked><label for="tab-DauYfRy">① 提示词</label><input type="radio" name="group-eBnx1" id="tab--CJL7B6"><label for="tab--CJL7B6">② 反向提示词</label><input type="radio" name="group-eBnx1" id="tab-mHBN_ci"><label for="tab-mHBN_ci">③ 采样器</label><input type="radio" name="group-eBnx1" id="tab-p8cePnZ"><label for="tab-p8cePnZ">④ 步数</label><input type="radio" name="group-eBnx1" id="tab-hLCorX6"><label for="tab-hLCorX6">⑤ 引导系数</label></div><div class="blocks"><div class="language-txt vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>extremely detailed CG uniform 8k illustrations, high color substitution, sketches graffiti art, illustrations photo, masterpiece, hyper detailed, best quality, ultra high res, high resolution, (intricate details), perfect lighting, best shadow, (graffiti wall:1.4), 1 girl, (extremely detailed face and eyes), (shiny big eyes), (shiny graffiti long hair:1.2), ((colorful)), ((colorful illustrations)), face focus, lip gloss, random eyes color,</span></span></code></pre></div><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>by bad-picture-chill-75v, nude, porn, nipples, pussy, pornography, canvas frame, cartoon, 3d, ((disfigured)), ((bad art)), ((deformed)),((extra limbs)),((close up)),((b&amp;w)), wierd colors, blurry, (((duplicate))), ((morbid)), ((mutilated)), [out of frame], extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))), out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck))), Photoshop, video game, ugly, tiling, poorly drawn hands, poorly drawn feet, poorly drawn face, out of frame, mutation, mutated, extra limbs, extra legs, extra arms, disfigured, deformed, cross-eye, body out of frame, blurry, bad art, bad anatomy, 3d render, background blur, (blurred background),  (briefs), (triangle pants), watermark, astigmatism, scattered light, lens astigmatism, chest light, shiny boobs, glowing boobs, halo, fog, hazy,</span></span></code></pre></div><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DPM++ SDE Karras</span></span></code></pre></div><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>30</span></span></code></pre></div><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>9</span></span></code></pre></div></div></div><p>最后效果如下</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMxMTAyMTY2Ng==688311021666" alt="" loading="lazy"></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY4ODMxMTI1MTEzNw==688311251137" alt="" loading="lazy"></p>',85),o=[l];function p(n,d,r,c,h,g){return t(),s("div",null,o)}const b=a(i,[["render",p]]);export{m as __pageData,b as default};
