import{_ as e,o as t,c as a,a5 as i}from"./chunks/framework.nTTieaYa.js";const s="/preview/cnjimbo/cnjimbo.github.io/pr/127/assets/MTYyNDEwODI4NzY0MQ__624108287641.CewYJwt6.png?s1=https:/img.cdn.sugarat.top/mdImg/MTYyNDEwODI4NzY0MQ==624108287641",l="/preview/cnjimbo/cnjimbo.github.io/pr/127/assets/MTYyNDEwOTA4NDYxNg__624109084616.C51-tmDF.png?s1=https:/img.cdn.sugarat.top/mdImg/MTYyNDEwOTA4NDYxNg==624109084616",r="/preview/cnjimbo/cnjimbo.github.io/pr/127/assets/MTYyNDEwOTE2NDE2OQ__624109164169.DuY4tKn2.png?s1=https:/img.cdn.sugarat.top/mdImg/MTYyNDEwOTE2NDE2OQ==624109164169",p="/preview/cnjimbo/cnjimbo.github.io/pr/127/assets/MTYyNDExMTcwODU3OQ__ss-template.DsB17pH1.gif?s1=https:/img.cdn.sugarat.top/mdImg/MTYyNDExMTcwODU3OQ==ss-template.gif",o="/preview/cnjimbo/cnjimbo.github.io/pr/127/assets/MTYyNDExMjM3MjM3NQ__ss-vue.TWCC5K2l.gif?s1=https:/img.cdn.sugarat.top/mdImg/MTYyNDExMjM3MjM3NQ==ss-vue.gif",n="/preview/cnjimbo/cnjimbo.github.io/pr/127/assets/MTYyNDExMjg1ODQ5OQ__ss-react.tIm2qTU_.gif?s1=https:/img.cdn.sugarat.top/mdImg/MTYyNDExMjg1ODQ5OQ==ss-react.gif",U=JSON.parse('{"title":"一个通过NPM包共(分)享代码块的解决方案","description":"","frontmatter":{"title":"一个通过NPM包共(分)享代码块的解决方案","date":"2021-06-19T00:00:00.000Z","tags":["技术笔记","个人作品"],"categories":["技术笔记"]},"headers":[],"relativePath":"technology/works/snippets.md","filePath":"technology/works/snippets.md","lastUpdated":1719501177000}'),d={name:"technology/works/snippets.md"},c=i('<h1 id="一个通过npm包共-分-享代码块的解决方案" tabindex="-1">一个通过NPM包共(分)享代码块的解决方案 <a class="header-anchor" href="#一个通过npm包共-分-享代码块的解决方案" aria-label="Permalink to &quot;一个通过NPM包共(分)享代码块的解决方案&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>最近又看到了许多小伙伴更新了Vs Code设置代码块的实践教程，简单总结就是，<a href="https://code.visualstudio.com/docs/editor/userdefinedsnippets" target="_blank" rel="noreferrer">按规则</a>编写一个<code>code-snippets</code>文件即可：</p><ul><li>项目级：将文件放在.vsode目录下</li><li>全局：首选项 -&gt; 用户片段 -&gt; 全局代码块</li></ul><h2 id="一些问题" tabindex="-1">一些问题 <a class="header-anchor" href="#一些问题" aria-label="Permalink to &quot;一些问题&quot;">​</a></h2><p>此种方案我觉得仅能简单满足个人需要，但当个人需要编写大量snippet的时候，编写<code>code-snippets</code>配置文件比较麻</p><p>当然有大神做了<a href="https://snippet-generator.app/" target="_blank" rel="noreferrer">在线的snippet配置生成</a>的网站解决编写配置文件的繁琐，但也要复制粘贴。。</p><p>有没有不编写<code>code-snippets</code>配置文件也能加载自定义代码块的方式呢?有，当然有，后文会介绍到</p><p>但还有另一问题，比如你想把你的snippet分享给其它同事或者朋友，有如下一些方案:</p><ul><li>拷贝code-snippets文件</li><li>编写snippet插件，发到插件市场</li><li>。。。</li></ul><p>可以看出这些常规的方案有一丝繁琐，不便于分享与传播</p><h2 id="share-snippets" tabindex="-1">Share Snippets <a class="header-anchor" href="#share-snippets" aria-label="Permalink to &quot;Share Snippets&quot;">​</a></h2><p>大概三个月前我也写了篇文章简单介绍了这个插件出现的背景：<a href="https://juejin.cn/post/6940258156232736798#heading-0" target="_blank" rel="noreferrer">助你轻松编写与分享snippet的VsCode插件｜项目复盘</a></p><p>大概就是，我来做插件的工作，你只负责编写简单的代码块配置文件</p><p>允许你以npm包的形式，将代码块的配置文件分享给全球开发者使用</p><p>但可能由于阅读量不高，目前下载体验的朋友也不多</p><p><img src="'+s+'" alt="图片" loading="lazy"></p><h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>支持通过npm的形式分享你的代码块</p><p>即支持<strong>从node_modules中读取代码块的配置文件</strong>，并在编辑器中注册</p><p>除了支持加载官方的<code>code-snippets配置</code>文件，为了简化书写，也定义了一个更加简单的<code>.snippets.json</code>文件配置方案</p><h3 id="特色" tabindex="-1">特色 <a class="header-anchor" href="#特色" aria-label="Permalink to &quot;特色&quot;">​</a></h3><ul><li>简化配置，支持直接指定文件作为代码块</li><li>为HTML标签，Vue/React组件的代码块进行了定制，支持非常完善的属性提示</li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>当然是先装上插件</p><p><img src="'+l+'" alt="图片" loading="lazy"></p><p>tips：编写完新的代码块，如需立即生效，需手动执行 SP Refresh 命令</p><p><img src="'+r+'" alt="图片" loading="lazy"></p><p>下面是编写配置文件的演示，插件提供了快速生成配置文件内容的代码块:</p><table tabindex="0"><thead><tr><th style="text-align:center;">prefix</th><th style="text-align:left;">简介</th></tr></thead><tbody><tr><td style="text-align:center;">ss-file</td><td style="text-align:left;">模板文件代码块</td></tr><tr><td style="text-align:center;">ss-vue</td><td style="text-align:left;">vue组件代码块</td></tr><tr><td style="text-align:center;">ss-react</td><td style="text-align:left;">react组件代码块</td></tr><tr><td style="text-align:center;">ss-tag</td><td style="text-align:left;">html标签代码块</td></tr></tbody></table><p>一个配置文件，可以编写多个代码块</p><p>完整的<a href="https://github.com/ATQQ/ShareSnippet/blob/master/README.md" target="_blank" rel="noreferrer">配置文件编写文档</a></p><h3 id="指定文件内容作为代码块" tabindex="-1">指定文件内容作为代码块 <a class="header-anchor" href="#指定文件内容作为代码块" aria-label="Permalink to &quot;指定文件内容作为代码块&quot;">​</a></h3><p>这里以几个简单的vue3代码块为例：</p><p><img src="'+p+'" alt="图片" loading="lazy"></p><p>编写者只需要指定代码块<code>内容文件的相对路径</code>和<code>激活代码块的前缀</code>两项配置即可</p><h3 id="vue组件的代码块" tabindex="-1">Vue组件的代码块 <a class="header-anchor" href="#vue组件的代码块" aria-label="Permalink to &quot;Vue组件的代码块&quot;">​</a></h3><p>以一个默认的 <code>my-input</code> 组件进行演示示例</p><p><img src="'+o+'" alt="图片" loading="lazy"></p><p>支持完整的属性提示，支持以sp-开头展示组件的所有的可用属性</p><h3 id="react组件代码块" tabindex="-1">React组件代码块 <a class="header-anchor" href="#react组件代码块" aria-label="Permalink to &quot;React组件代码块&quot;">​</a></h3><p>以一个默认的 <code>MyButton</code> 组件进行演示示例</p><p><img src="'+n+'" alt="图片" loading="lazy"></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>个人认为，此插件不仅可以帮助编写与分享代码块</p><p>也可用于业务开发中，公共业务组件添加一个<code>.snippets.json</code>配置，其它人使用的时候就能获得很友好的属性提示</p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>欢迎大家评论区交流，提出迭代意见</p><p>欢迎大家体验插件，提出宝贵的修改意见</p><ul><li><a href="https://github.com/ATQQ/ShareSnippet" target="_blank" rel="noreferrer">插件源码</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=sugar.snippet" target="_blank" rel="noreferrer">插件体验</a></li></ul><div style="display:none;" data-pagefind-meta="base64:JTdCJTIydGl0bGUlMjIlM0ElMjIlRTQlQjglODAlRTQlQjglQUElRTklODAlOUElRTglQkYlODdOUE0lRTUlOEMlODUlRTUlODUlQjEoJUU1JTg4JTg2KSVFNCVCQSVBQiVFNCVCQiVBMyVFNyVBMCU4MSVFNSU5RCU5NyVFNyU5QSU4NCVFOCVBNyVBMyVFNSU4NiVCMyVFNiU5NiVCOSVFNiVBMSU4OCUyMiUyQyUyMmRhdGUlMjIlM0ExNjI0MDYwODAwMDAwJTJDJTIydGFncyUyMiUzQSU1QiUyMiVFNiU4QSU4MCVFNiU5QyVBRiVFNyVBQyU5NCVFOCVBRSVCMCUyMiUyQyUyMiVFNCVCOCVBQSVFNCVCQSVCQSVFNCVCRCU5QyVFNSU5MyU4MSUyMiU1RCUyQyUyMmNhdGVnb3JpZXMlMjIlM0ElNUIlMjIlRTYlOEElODAlRTYlOUMlQUYlRTclQUMlOTQlRTglQUUlQjAlMjIlNUQlN0Q="></div>',51),h=[c];function g(m,u,y,M,b,_){return t(),a("div",null,h)}const f=e(d,[["render",g]]);export{U as __pageData,f as default};
