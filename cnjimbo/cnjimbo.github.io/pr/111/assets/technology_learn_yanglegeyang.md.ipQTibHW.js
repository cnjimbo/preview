import{_ as a,o as t,c as l,a5 as e}from"./chunks/framework.Cd3Yx4w9.js";const M=JSON.parse('{"title":"Mac上抓包秒通关羊了个羊","description":"","frontmatter":{"title":"Mac上抓包秒通关羊了个羊","date":"2022-09-19T00:00:00.000Z","tags":["技术笔记","技术教程"],"categories":["技术笔记"]},"headers":[],"relativePath":"technology/learn/yanglegeyang.md","filePath":"technology/learn/yanglegeyang.md","lastUpdated":1719297432000}'),s={name:"technology/learn/yanglegeyang.md"},i=e('<h1 id="mac上抓包秒通关羊了个羊" tabindex="-1">Mac上抓包秒通关羊了个羊 <a class="header-anchor" href="#mac上抓包秒通关羊了个羊" aria-label="Permalink to &quot;Mac上抓包秒通关羊了个羊&quot;">​</a></h1><p>最近这游戏是火得不行，睡前玩几把，几天了从未通过。那只能上科技了。。。</p><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>看网上<strong>大部分是 Windows 微信小游戏</strong>的抓包教程通关文章，因为Mac微信不支持小游戏（尴尬了。）</p><p>对于真机抓包的话，高版本Android配置CA太麻烦（Root），相信 大部分都是10左右的安卓</p><p>手里只有台Mac，那咱就直接用 Mac 配安卓模拟器搞定抓包（<code>Whistle</code> + <code>MuMu</code>）</p><p>PS：文中有最终演示视频</p><h2 id="工具介绍-使用" tabindex="-1">工具介绍&amp;使用 <a class="header-anchor" href="#工具介绍-使用" aria-label="Permalink to &quot;工具介绍&amp;使用&quot;">​</a></h2><h3 id="whistle" tabindex="-1">Whistle <a class="header-anchor" href="#whistle" aria-label="Permalink to &quot;Whistle&quot;">​</a></h3><p><a href="https://github.com/avwo/whistle" target="_blank" rel="noreferrer">whistle</a>，是基于 Node 实现的跨平台抓包调试工具</p><p>对咱前端同学比较友好，安装配置都很简单</p><p>安装</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> whistle</span></span></code></pre></div><p>启动</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">w2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div><p>访问 <code>http://localhost:8899/#network</code> 即可看到</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2MzU2NjE2NzMwMg==663566167302" alt="图片" loading="lazy"></p><p>然后就是配置CA证书，参照<a href="http://wproxy.org/whistle/webui/https.html" target="_blank" rel="noreferrer">官方文档: Mac安装根证书</a>，这里不再赘述（CV），只有几个步骤1分钟就能完成配置。</p><p>获取一下ip，后面会用到</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">172.30.43.170</span></span></code></pre></div><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2MzU2NjIyNjg3MQ==663566226871" alt="图片" loading="lazy"></p><h3 id="mumu" tabindex="-1">MuMu <a class="header-anchor" href="#mumu" aria-label="Permalink to &quot;MuMu&quot;">​</a></h3><p><a href="https://mumu.163.com/mac/index.html" target="_blank" rel="noreferrer">MuMu模拟器</a> 网易出品的安卓模拟器（Android6），在Mac上运行稳定，用来娱乐或者开发调试都还是比较方便</p><p>安装就是官网下载，一顿下一步就行，下面介绍模拟器中的配置（当然大家装完后把微信安装并登录上）</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2MzU2NjQ3NjE0NA==663566476144" alt="图片" loading="lazy"></p><p>登录微信后，咱就开始配置CA证书</p><p>先配置模拟器网络，添加代理，IP就是咱们前面获取的本机ip</p><p>长按Wifi名 =&gt; 修改网络 =&gt; 代理（手动）</p><p>输入本机ip，端口<code>8899</code>，whistle使用</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2MzU2NjY4ODc0Ng==663566688746" alt="图片" loading="lazy"></p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2MzU2NjU0MzE4OQ==663566543189" alt="图片" loading="lazy"></p><p>使用浏览器访问 <code>rootca.pro</code> 安装CA证书</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2MzU4NjA4MjIzNQ==663586082235" alt="图片" loading="lazy"></p><p>配置完毕，不出意外的话，咱们打开羊了个羊就看见网络请求了</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2MzU2NzAxMDc0MQ==663567010741" alt="图片" loading="lazy"></p><h2 id="方案1-修改关卡数据" tabindex="-1">方案1：修改关卡数据 <a class="header-anchor" href="#方案1-修改关卡数据" aria-label="Permalink to &quot;方案1：修改关卡数据&quot;">​</a></h2><p>咱把第二关的数据改成第一关，享受游戏的乐趣</p><p>点击加入羊群（开始游戏），可以看到两个接口 /maps/xxxx.txt</p><p>”PS:如果看到的是一个就操作删除羊了个羊小程序，重新打开“</p><p>返回的就是游戏地图数据</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2MzU2ODA2MDg4MQ==663568060881" alt="图片" loading="lazy"></p><p>好家伙：第二关比第一关的数据多了不是点吧点</p><p>下面开始一顿操作修改关卡数据</p><ol><li>复制第一关的数据，添加到whistle Values 面板</li></ol><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2MzU2OTM2OTcyNw==663569369727" alt="图片" loading="lazy"></p><ol start="2"><li>添加转发规则，在whistle Rules 面板操作</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">^cat-match-static.easygame2021.com/maps/***.txt$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> resBody://{羊1}</span></span></code></pre></div><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2MzU2OTk5OTIxNQ==663569999215" alt="图片" loading="lazy"></p><ol start="3"><li>删除小游戏重新进入</li></ol><p>”羊了个羊“会使用已经拉取的关卡数据，不会重复请求，所以需要删除，重新进入</p><p>再次打开即可看见，2关都是用的咱们修改后的数据</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2MzU2OTczNTA0Mg==663569735042" alt="图片" loading="lazy"></p><p>下面是演示录屏 <video controls style="width:100%;" src="https://img.cdn.sugarat.top/mdImg/MTY2MzU4MTkxODU3Mw==羊了个羊.mp4"></video></p><h2 id="方案2-直接调用成功接口" tabindex="-1">方案2：直接调用成功接口 <a class="header-anchor" href="#方案2-直接调用成功接口" aria-label="Permalink to &quot;方案2：直接调用成功接口&quot;">​</a></h2><ul><li><s>接口1：<code>https://cat-match.easygame2021.com/sheep/v1/game/game_over?rank_score=1&amp;rank_state=1&amp;rank_time=40&amp;rank_role=1&amp;skin=1</code></s> 过了一天换接口了</li><li>接口2：POST <a href="https://cat-match.easygame2021.com/sheep/v1/game/game_over_ex" target="_blank" rel="noreferrer">https://cat-match.easygame2021.com/sheep/v1/game/game_over_ex</a></li><li>鉴权：request header 上的 t 参数，扒拉下来就能用 <img src="https://img.cdn.sugarat.top/mdImg/MTY2MzU2NzI2NzkzNA==663567267934" alt="图片" loading="lazy"></li></ul><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2MzU4MjE5MjQwNw==663582192407" alt="图片" loading="lazy"></p><p>使用 whistle 直接发起请求</p><p>选择目标请求 <img src="https://img.cdn.sugarat.top/mdImg/MTY2MzU4MjM5Nzk2OQ==663582397969" alt="图片" loading="lazy"></p><p>修改参数，点击右上角小飞机发起请求</p><p><img src="https://img.cdn.sugarat.top/mdImg/MTY2MzU4NjIyMjcyNQ==663586222725" alt="图片" loading="lazy"></p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>Whistle 这个工具真的很好用，再次安利一下</p><p>如果上述方法有问题，欢迎评论区交流</p><div style="display:none;" data-pagefind-meta="base64:JTdCJTIydGl0bGUlMjIlM0ElMjJNYWMlRTQlQjglOEElRTYlOEElOTMlRTUlOEMlODUlRTclQTclOTIlRTklODAlOUElRTUlODUlQjMlRTclQkUlOEElRTQlQkElODYlRTQlQjglQUElRTclQkUlOEElMjIlMkMlMjJkYXRlJTIyJTNBMTY2MzU0NTYwMDAwMCUyQyUyMnRhZ3MlMjIlM0ElNUIlMjIlRTYlOEElODAlRTYlOUMlQUYlRTclQUMlOTQlRTglQUUlQjAlMjIlMkMlMjIlRTYlOEElODAlRTYlOUMlQUYlRTYlOTUlOTklRTclQTglOEIlMjIlNUQlMkMlMjJjYXRlZ29yaWVzJTIyJTNBJTVCJTIyJUU2JThBJTgwJUU2JTlDJUFGJUU3JUFDJTk0JUU4JUFFJUIwJTIyJTVEJTdE"></div>',64),p=[i];function o(n,h,r,d,c,g){return t(),l("div",null,p)}const u=a(s,[["render",o]]);export{M as __pageData,u as default};
