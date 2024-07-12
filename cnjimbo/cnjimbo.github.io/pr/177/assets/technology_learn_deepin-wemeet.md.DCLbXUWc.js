import{_ as i,o as e,c as s,a5 as a}from"./chunks/framework.Cg5dCsWX.js";const t="/preview/cnjimbo/cnjimbo.github.io/pr/177/assets/MTYyMTUyNDAxNTE2NA__621524015164.DusupmJG.png",n="/preview/cnjimbo/cnjimbo.github.io/pr/177/assets/MTYyMTUyNDI0Mzk1NA__621524243954.C5zAXcFW.png",l="/preview/cnjimbo/cnjimbo.github.io/pr/177/assets/MTYyMTUyNDQyODMyMA__621524428320.CCGbB8s1.png",p="/preview/cnjimbo/cnjimbo.github.io/pr/177/assets/MTYyMTUyNTEzNTA3OA__621525135078.D5S_DH8R.png",m=JSON.parse('{"title":"在linux-deepin上使用deepin-wine5完美运行腾讯会议/QQ/微信等此类应用","description":"","frontmatter":{"title":"在linux-deepin上使用deepin-wine5完美运行腾讯会议/QQ/微信等此类应用","date":"2021-05-20T00:00:00.000Z","tags":["技术笔记","技术教程"],"categories":["技术笔记"]},"headers":[],"relativePath":"technology/learn/deepin-wemeet.md","filePath":"technology/learn/deepin-wemeet.md","lastUpdated":1720544135000}'),h={name:"technology/learn/deepin-wemeet.md"},d=a('<h1 id="在linux-deepin上使用deepin-wine5完美运行腾讯会议-qq-微信等此类应用" tabindex="-1">在linux-deepin上使用deepin-wine5完美运行腾讯会议/QQ/微信等此类应用 <a class="header-anchor" href="#在linux-deepin上使用deepin-wine5完美运行腾讯会议-qq-微信等此类应用" aria-label="Permalink to &quot;在linux-deepin上使用deepin-wine5完美运行腾讯会议/QQ/微信等此类应用&quot;">​</a></h1><h2 id="效果" tabindex="-1">效果 <a class="header-anchor" href="#效果" aria-label="Permalink to &quot;效果&quot;">​</a></h2><p>捣鼓了一下午，终于把腾讯会议整好了</p><p>咱先上效果免得说骗人</p><p><img src="'+t+'" alt="图片" loading="lazy"></p><ul><li>腾讯会议:支持屏幕共享、语音、录屏等等</li><li>QQ/微信:常用功能均可用</li></ul><p>笔者是用的deepin-15.11，如果是其它linux发行版，请先安装deepin-wine5</p><p>如果是deepin用户，先看看是否有deepin-wine5环境</p><p><img src="'+n+'" alt="图片" loading="lazy"></p><p>没试用过其它发行版，各位如不是deepin，不妨也可试试看</p><h2 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h2><h3 id="安装deepin-wine5" tabindex="-1">安装deepin-wine5 <a class="header-anchor" href="#安装deepin-wine5" aria-label="Permalink to &quot;安装deepin-wine5&quot;">​</a></h3><p>添加源</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/sources.list</span></span></code></pre></div><p>加入下述内容</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [by-hash=force] https://community-packages.deepin.com/deepin/ apricot main contrib non-free</span></span></code></pre></div><p><img src="'+l+'" alt="图片" loading="lazy"></p><p>更新源</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span></code></pre></div><p>安装deepin-wine5</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deepin-wine5</span></span></code></pre></div><p>安装完后,查看是否安装成功</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deepin-wine5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span></code></pre></div><h3 id="安装腾讯会议" tabindex="-1">安装腾讯会议 <a class="header-anchor" href="#安装腾讯会议" aria-label="Permalink to &quot;安装腾讯会议&quot;">​</a></h3><p>添加deepin-wine移植的仓库地址</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://deepin-wine.i-m.dev/setup.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sh</span></span></code></pre></div><p>更新源信息</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span></code></pre></div><p>安装腾讯会议</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.tencent.meeting.deepin</span></span></code></pre></div><p>其它应用的名称请前往 <a href="https://deepin-wine.i-m.dev/" target="_blank" rel="noreferrer">此链接</a> 查看，如：</p><ul><li>QQ：com.qq.im.deepin</li><li>微信：com.qq.weixin.deepin</li></ul><p>大工告成，<strong>重启一下系统</strong>就找到菜单中的相应的运行图标了</p><h2 id="qa" tabindex="-1">QA <a class="header-anchor" href="#qa" aria-label="Permalink to &quot;QA&quot;">​</a></h2><h3 id="没有运行的图标" tabindex="-1">没有运行的图标 <a class="header-anchor" href="#没有运行的图标" aria-label="Permalink to &quot;没有运行的图标&quot;">​</a></h3><p>如重启系统仍然在菜单中找不到，那采用手动的方式</p><p>手动进入安装目录</p><p>记得<strong>替换user</strong>为你自己的用户名</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/home/user/.deepinwine/Deepin-WeMeet/drive_c/Program</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Files/Tencent/WeMeet</span></span></code></pre></div><p>运行</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deepin-wine5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wemeetapp.exe</span></span></code></pre></div><p><img src="'+p+'" alt="图片" loading="lazy"></p><p>如果过程中遇到问题的老哥，欢迎评论区交流</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://github.com/zq1997/deepin-wine" target="_blank" rel="noreferrer">Github:zq1997/deepin-wine</a></li><li><a href="https://www.jianshu.com/p/6740f6c73033" target="_blank" rel="noreferrer">简书:记录完整的在Ubuntu 20.04下使用deepin-wine5安装微信3.0的过程</a></li></ul>',45),o=[d];function r(c,k,g,u,y,b){return e(),s("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIydGl0bGUlMjIlM0ElMjIlRTUlOUMlQThsaW51eC1kZWVwaW4lRTQlQjglOEElRTQlQkQlQkYlRTclOTQlQThkZWVwaW4td2luZTUlRTUlQUUlOEMlRTclQkUlOEUlRTglQkYlOTAlRTglQTElOEMlRTglODUlQkUlRTglQUUlQUYlRTQlQkMlOUElRTglQUUlQUUlMkZRUSUyRiVFNSVCRSVBRSVFNCVCRiVBMSVFNyVBRCU4OSVFNiVBRCVBNCVFNyVCMSVCQiVFNSVCQSU5NCVFNyU5NCVBOCUyMiUyQyUyMmRhdGUlMjIlM0ExNjIxNDY4ODAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFNiU4QSU4MCVFNiU5QyVBRiVFNyVBQyU5NCVFOCVBRSVCMCUyMiUyQyUyMiVFNiU4QSU4MCVFNiU5QyVBRiVFNiU5NSU5OSVFNyVBOCU4QiUyMiU1RCUyQyUyMmNhdGVnb3JpZXMlMjIlM0ElNUIlMjIlRTYlOEElODAlRTYlOUMlQUYlRTclQUMlOTQlRTglQUUlQjAlMjIlNUQlN0Q="},o)}const C=i(h,[["render",r]]);export{m as __pageData,C as default};
