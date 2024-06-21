import{j as e,b as i,c as a,a7 as t}from"./chunks/framework.C1mW_7mk.js";const g=JSON.parse('{"title":"小程序的原理?","description":"","frontmatter":{"isTimeLine":true,"title":"小程序的原理?","date":"2020-04-14T00:00:00.000Z","tags":["面试","小程序"],"categories":["面试"]},"headers":[],"relativePath":"interview/mini/principle.md","filePath":"interview/mini/principle.md","lastUpdated":1670770660000}'),r={name:"interview/mini/principle.md"},l=t('<h1 id="小程序的原理" tabindex="-1">小程序的原理? <a class="header-anchor" href="#小程序的原理" aria-label="Permalink to &quot;小程序的原理?&quot;">​</a></h1><p><strong>微信小程序为例</strong></p><h2 id="运行环境" tabindex="-1">运行环境 <a class="header-anchor" href="#运行环境" aria-label="Permalink to &quot;运行环境&quot;">​</a></h2><h3 id="渲染层" tabindex="-1">渲染层 <a class="header-anchor" href="#渲染层" aria-label="Permalink to &quot;渲染层&quot;">​</a></h3><ul><li>WXML与WXSS工作在渲染层</li><li>界面使用WebView 进行渲染</li><li>一个小程序存在多个界面，所以渲染层存在多个WebView线程</li></ul><h3 id="逻辑层" tabindex="-1">逻辑层 <a class="header-anchor" href="#逻辑层" aria-label="Permalink to &quot;逻辑层&quot;">​</a></h3><ul><li>JS脚本工作在逻辑层</li><li>采用JsCore线程运行JS脚本</li><li>逻辑层发送网络请求也经由微信客户端转发</li></ul><p><strong>总结</strong></p><ul><li>渲染层和逻辑层分别由2个线程管理</li><li>两个线程的通信会经由微信客户端做中转</li><li>逻辑层将数据进行处理后发送给视图层，同时接受视图层的事件反馈</li><li>逻辑层并非运行在浏览器中,即JavaScript 在 web 中一些能力都无法使用</li></ul><p><strong>微信小程序通信模型</strong><img src="https://img.cdn.sugarat.top/mdImg/MTU4NjMyMjQ4MzQ5Mg==586322483492" alt="图片" loading="lazy"></p><p><strong>小程序框架图</strong><img src="https://img.cdn.sugarat.top/mdImg/MTU4NjMyMzEzNjU0OQ==586323136549" alt="图片" loading="lazy"></p><ul><li>native层就是小程序的框架,这个框架里封装了ui层组件和逻辑层组件,组件可以通过微信app提供的接口调用操作系统的一些API</li><li>视图层和逻辑层的交互的数据经由native层处理</li><li>视图层和逻辑层都可以调用native框架里封装好的组件和方法</li></ul><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%B8%8E%E6%99%AE%E9%80%9A%E7%BD%91%E9%A1%B5%E5%BC%80%E5%8F%91%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">微信小程序官方文档</a><br><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/MINA.html" target="_blank" rel="noreferrer">微信小程序框架文档</a><br><a href="https://www.cnblogs.com/SophiaLees/p/11409339.html" target="_blank" rel="noreferrer">博客园:小程序工作原理浅析</a></p></div>',13),o=[l];function n(s,p,c,d,m,h){return i(),a("div",null,o)}const u=e(r,[["render",n]]);export{g as __pageData,u as default};
