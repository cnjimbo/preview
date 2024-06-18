import{j as e,b as a,c as r,a7 as l}from"./chunks/framework.Cn2Y4FsX.js";const g=JSON.parse('{"title":"开发日记 | 不定时更新","description":"记录一下每天干的杂事，写的杂七杂八的代码，用于日后回顾，翻开尘封的记忆","frontmatter":{"description":"记录一下每天干的杂事，写的杂七杂八的代码，用于日后回顾，翻开尘封的记忆"},"headers":[],"relativePath":"essay/dev/changelog-2024.md","filePath":"essay/dev/changelog-2024.md","lastUpdated":1717088804000}'),i={name:"essay/dev/changelog-2024.md"},t=l('<h1 id="开发日记-不定时更新" tabindex="-1">开发日记 | 不定时更新 <a class="header-anchor" href="#开发日记-不定时更新" aria-label="Permalink to &quot;开发日记 | 不定时更新&quot;">​</a></h1><p>记录一下每天干的杂事，写的杂七杂八的代码，用于日后回顾，翻开尘封的记忆。</p><nav class="table-of-contents"><ul><li><a href="#_2024-03-27">2024/03/27</a></li><li><a href="#_2024-03-23">2024/03/23</a></li><li><a href="#_2024-03-16">2024/03/16</a></li><li><a href="#_2024-03-14">2024/03/14</a><ul><li><a href="#七牛云图床">七牛云图床</a></li></ul></li><li><a href="#_2024-03-13">2024/03/13</a><ul><li><a href="#博客主题">博客主题</a></li></ul></li><li><a href="#_2024-03-11">2024/03/11</a><ul><li><a href="#博客主题-1">博客主题</a></li></ul></li><li><a href="#_2024-03-10">2024-03-10</a><ul><li><a href="#博客主题cli">博客主题CLI</a></li></ul></li><li><a href="#_2024-03-09">2024-03-09</a><ul><li><a href="#七牛云图床-1">七牛云图床</a></li></ul></li><li><a href="#_2024-03-05">2024-03-05</a><ul><li><a href="#七牛云图床-2">七牛云图床</a></li></ul></li><li><a href="#_2024-03-04">2024-03-04</a><ul><li><a href="#周刊自动化创建工具">周刊自动化创建工具</a></li><li><a href="#七牛云图床-3">七牛云图床</a></li></ul></li></ul></nav><h2 id="_2024-03-27" tabindex="-1">2024/03/27 <a class="header-anchor" href="#_2024-03-27" aria-label="Permalink to &quot;2024/03/27&quot;">​</a></h2><p><em><a href="https://github.com/cnjimbo/cnjimbo.github.io/tree/master/packages/theme" target="_blank" rel="noreferrer">@sugarat/theme</a></em></p><ul><li>feat: 新增各个模块可选开启的开关</li><li>fix: Hydration error</li><li>fix: 生成的链接兼容 <code>cleanUrls</code> 配置</li><li>Updated dependencies <ul><li>vitepress-plugin-pagefind@0.2.14</li><li>oh-my-live2d@0.15.2</li></ul></li></ul><h2 id="_2024-03-23" tabindex="-1">2024/03/23 <a class="header-anchor" href="#_2024-03-23" aria-label="Permalink to &quot;2024/03/23&quot;">​</a></h2><p><em><a href="https://github.com/ATQQ/demos/tree/main/pages/jpg-compress" target="_blank" rel="noreferrer">JPG 图片压缩</a></em></p><ul><li>编写 <a href="https://demos.sugarat.top/pages/jpg-compress/" target="_blank" rel="noreferrer">JPG 压缩在线 Demo</a></li></ul><h2 id="_2024-03-16" tabindex="-1">2024/03/16 <a class="header-anchor" href="#_2024-03-16" aria-label="Permalink to &quot;2024/03/16&quot;">​</a></h2><p><em><a href="https://github.com/ATQQ/demos/tree/main/pages/png-compress" target="_blank" rel="noreferrer">PNG 图片压缩 | UPNG.js</a></em></p><ul><li>编写 UPNG.js 在线 Demo</li></ul><p><em><a href="https://github.com/cnjimbo/cnjimbo.github.io/tree/master/packages/theme" target="_blank" rel="noreferrer">@sugarat/theme</a></em></p><ul><li>依赖更新 看板娘 和 VitePress1.0.1</li><li>footer 支持更丰富的定制（参加<a href="https://www.upyun.com/league" target="_blank" rel="noreferrer">又拍云活动</a>）</li></ul><h2 id="_2024-03-14" tabindex="-1">2024/03/14 <a class="header-anchor" href="#_2024-03-14" aria-label="Permalink to &quot;2024/03/14&quot;">​</a></h2><h3 id="七牛云图床" tabindex="-1">七牛云图床 <a class="header-anchor" href="#七牛云图床" aria-label="Permalink to &quot;七牛云图床&quot;">​</a></h3><p><em><a href="https://github.com/ATQQ/image-bed-qiniu/tree/master/packages/client#-%E4%B8%83%E7%89%9B%E4%BA%91oss%E5%9B%BE%E5%BA%8A-" target="_blank" rel="noreferrer">image-bed-qiniu</a></em></p><ul><li>fix：压缩后更大，仍使用了压缩的图片</li><li>feat：查看详情增加压缩率展示</li></ul><h2 id="_2024-03-13" tabindex="-1">2024/03/13 <a class="header-anchor" href="#_2024-03-13" aria-label="Permalink to &quot;2024/03/13&quot;">​</a></h2><h3 id="博客主题" tabindex="-1">博客主题 <a class="header-anchor" href="#博客主题" aria-label="Permalink to &quot;博客主题&quot;">​</a></h3><p><em><a href="https://github.com/cnjimbo/cnjimbo.github.io/tree/master/packages/theme" target="_blank" rel="noreferrer">@sugarat/theme</a></em></p><ul><li>内置开箱即用的看板娘支持（<a href="https://github.com/oh-my-live2d/oh-my-live2d" target="_blank" rel="noreferrer">oh-my-live2d</a>）</li></ul><h2 id="_2024-03-11" tabindex="-1">2024/03/11 <a class="header-anchor" href="#_2024-03-11" aria-label="Permalink to &quot;2024/03/11&quot;">​</a></h2><h3 id="博客主题-1" tabindex="-1">博客主题 <a class="header-anchor" href="#博客主题-1" aria-label="Permalink to &quot;博客主题&quot;">​</a></h3><p><em><a href="https://github.com/cnjimbo/cnjimbo.github.io/tree/master/packages/theme" target="_blank" rel="noreferrer">@sugarat/theme</a></em></p><ul><li>fix：主题 <code>showSelf: false</code> 失效的问题</li><li>fix：pagefind 搜索插件 SSR 编译时影响 SVG 图标导入</li></ul><h2 id="_2024-03-10" tabindex="-1">2024-03-10 <a class="header-anchor" href="#_2024-03-10" aria-label="Permalink to &quot;2024-03-10&quot;">​</a></h2><h3 id="博客主题cli" tabindex="-1">博客主题CLI <a class="header-anchor" href="#博客主题cli" aria-label="Permalink to &quot;博客主题CLI&quot;">​</a></h3><p><em><a href="https://github.com/cnjimbo/cnjimbo.github.io/tree/master/packages/create-theme" target="_blank" rel="noreferrer">@sugarat/create-theme</a></em></p><ul><li>模板更新 <ul><li>添加 GitHub/Gitee Pages 部署所需文件</li><li>添加引导使用文档</li></ul></li></ul><h2 id="_2024-03-09" tabindex="-1">2024-03-09 <a class="header-anchor" href="#_2024-03-09" aria-label="Permalink to &quot;2024-03-09&quot;">​</a></h2><h3 id="七牛云图床-1" tabindex="-1">七牛云图床 <a class="header-anchor" href="#七牛云图床-1" aria-label="Permalink to &quot;七牛云图床&quot;">​</a></h3><p><em><a href="https://github.com/ATQQ/image-bed-qiniu/tree/master/packages/client#-%E4%B8%83%E7%89%9B%E4%BA%91oss%E5%9B%BE%E5%BA%8A-" target="_blank" rel="noreferrer">image-bed-qiniu</a></em></p><ul><li>基于 <a href="https://github.com/photopea/UPNG.js" target="_blank" rel="noreferrer">UPNG.js</a> 支持 PNG 图片的上传自动压缩</li></ul><p><img src="https://img.cdn.sugarat.top/mdImg/sugar/727ade06e155fd9541cfcab78bdaab7f" alt="" loading="lazy"></p><h2 id="_2024-03-05" tabindex="-1">2024-03-05 <a class="header-anchor" href="#_2024-03-05" aria-label="Permalink to &quot;2024-03-05&quot;">​</a></h2><h3 id="七牛云图床-2" tabindex="-1">七牛云图床 <a class="header-anchor" href="#七牛云图床-2" aria-label="Permalink to &quot;七牛云图床&quot;">​</a></h3><p><em><a href="https://github.com/ATQQ/image-bed-qiniu/tree/master/packages/client#-%E4%B8%83%E7%89%9B%E4%BA%91oss%E5%9B%BE%E5%BA%8A-" target="_blank" rel="noreferrer">image-bed-qiniu</a></em></p><ul><li>文案优化</li><li>尝试本地压缩部分图片资源</li></ul><h2 id="_2024-03-04" tabindex="-1">2024-03-04 <a class="header-anchor" href="#_2024-03-04" aria-label="Permalink to &quot;2024-03-04&quot;">​</a></h2><h3 id="周刊自动化创建工具" tabindex="-1">周刊自动化创建工具 <a class="header-anchor" href="#周刊自动化创建工具" aria-label="Permalink to &quot;周刊自动化创建工具&quot;">​</a></h3><p><em><a href="https://www.npmjs.com/package/@sugarat/cli-plugin-blog" target="_blank" rel="noreferrer">@sugarat/cli-plugin-blog@0.0.10</a></em></p><ul><li>迭代生成周刊的模板 <ul><li><code>frontmatter</code> 默认添加注释掉的 <code>createTime</code></li><li>移除 <a href="https://www.wenjuan.com/s/AN32YrD/" target="_blank" rel="noreferrer">投稿</a> 👈🏻分享内容</li><li>格式调优</li><li><a href="https://sorrycc.com/mdh/" target="_blank" rel="noreferrer">云谦：MDH 前端周刊</a> 切换到<a href="https://sorrycc.com/mdh/" target="_blank" rel="noreferrer">新地址</a></li></ul></li><li>新增 option <code>--weekly-dir</code> 用于设置周刊目录</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">q</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blog</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --weekly-dir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./packages/blogpress/weekly</span></span></code></pre></div><ul><li>创建周刊优化 <ul><li>自动根据周刊目录拼接周刊文章创建路径（减少一次复制粘贴的时间）</li><li>自动更新周刊序号（减少来回切确认周刊期数）</li></ul></li></ul><p><img src="https://img.cdn.sugarat.top/mdImg/sugar/3f4b2c2c0497eb31ce8b4d86d16b63b4" alt="" loading="lazy"></p><h3 id="七牛云图床-3" tabindex="-1">七牛云图床 <a class="header-anchor" href="#七牛云图床-3" aria-label="Permalink to &quot;七牛云图床&quot;">​</a></h3><p><em><a href="https://github.com/ATQQ/image-bed-qiniu/tree/master/packages/client#-%E4%B8%83%E7%89%9B%E4%BA%91oss%E5%9B%BE%E5%BA%8A-" target="_blank" rel="noreferrer">image-bed-qiniu</a></em></p><ul><li>显示上传图片的大小信息</li></ul><p><img src="https://img.cdn.sugarat.top/mdImg/sugar/951b7a23af37d64c0ee1414a6faee899" alt="" loading="lazy"></p>',50),h=[t];function o(s,n,c,u,d,m){return a(),r("div",null,h)}const b=e(i,[["render",o]]);export{g as __pageData,b as default};
