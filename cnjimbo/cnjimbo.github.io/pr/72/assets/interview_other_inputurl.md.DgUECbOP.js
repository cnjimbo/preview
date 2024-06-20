import{j as l,b as i,c as t,a7 as a}from"./chunks/framework.C_oLX9Q3.js";const k=JSON.parse('{"title":"在浏览器中输入URL到页面渲染的整个过程","description":"","frontmatter":{"isTimeLine":true,"title":"在浏览器中输入URL到页面渲染的整个过程","date":"2020-03-03T00:00:00.000Z","tags":["面试","其它"],"categories":["面试"]},"headers":[],"relativePath":"interview/other/inputurl.md","filePath":"interview/other/inputurl.md","lastUpdated":1670770660000}'),e={name:"interview/other/inputurl.md"},o=a(`<h1 id="在浏览器中输入url到页面渲染的整个过程" tabindex="-1">在浏览器中输入URL到页面渲染的整个过程 <a class="header-anchor" href="#在浏览器中输入url到页面渲染的整个过程" aria-label="Permalink to &quot;在浏览器中输入URL到页面渲染的整个过程&quot;">​</a></h1><h2 id="构建请求行" tabindex="-1">构建请求行 <a class="header-anchor" href="#构建请求行" aria-label="Permalink to &quot;构建请求行&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GET</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     HTTP/1.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">方法</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  请求路径</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 请求的协议/版本</span></span></code></pre></div><h2 id="查找强缓存" tabindex="-1">查找强缓存 <a class="header-anchor" href="#查找强缓存" aria-label="Permalink to &quot;查找强缓存&quot;">​</a></h2><p>检查资源是否存在强缓存,存在的话直接进行资源解析</p><h2 id="读取dns缓存" tabindex="-1">读取DNS缓存 <a class="header-anchor" href="#读取dns缓存" aria-label="Permalink to &quot;读取DNS缓存&quot;">​</a></h2><ol><li>浏览器先检查自身缓存中有没有被解析过的这个域名对应的ip地址，如果有，解析结束</li><li>检查操作系统缓存中有没有对应的已解析过的结果(win中的hosts文件)</li><li>都没有则进行下一步</li></ol><h2 id="dns解析" tabindex="-1">DNS解析 <a class="header-anchor" href="#dns解析" aria-label="Permalink to &quot;DNS解析&quot;">​</a></h2><ol><li>请求本地域名服务器（LDNS）来解析这个域名,没有则进行下一步</li><li>DNS 根服务器查询</li></ol><h2 id="建立tcp连接" tabindex="-1">建立TCP连接 <a class="header-anchor" href="#建立tcp连接" aria-label="Permalink to &quot;建立TCP连接&quot;">​</a></h2><p>可以在此简述建立TCP链接的3次握手的过程</p><ol><li><code>客户端</code>向<code>服务端</code>发送请求报文</li><li><code>服务端</code>收到请求报文,同意连接则向<code>客户端</code>发送一个应答</li><li><code>客户端</code>收到<code>服务端</code>的应答,并告知<code>服务端</code>我准备好了</li></ol><p>TCP 的一些特性</p><ul><li>建立连接需要进行三次握手</li><li>断开连接都需要四次握手</li><li>在传输数据的过程中，通过各种算法保证数据的可靠性</li><li>相比 UDP 来说不那么的高效。</li></ul><h2 id="判断是否是https请求" tabindex="-1">判断是否是Https请求 <a class="header-anchor" href="#判断是否是https请求" aria-label="Permalink to &quot;判断是否是Https请求&quot;">​</a></h2><p>是:进行<code>TLS握手</code></p><ol><li>客户端发送一个<strong>随机值</strong>以及支持的<strong>协议</strong>和<strong>加密方式</strong></li><li>服务端收到客户端的<strong>随机值</strong>，自己也产生一个<strong>随机值</strong>，确定使用的协议与加密方式，并且发送自己的<strong>证书</strong>（如果需要验证客户端证书需要说明）</li><li>客户端收到服务端的<strong>证书</strong>并验证是否有效，<strong>验证通过</strong>会再生成一个<strong>随机值</strong>，通过服务端发送的证书中的<strong>公钥</strong>去加密这个随机值并发送给服务端</li><li>服务端收到加密过的随机值并使用<strong>私钥</strong>解密获得第三个随机值，这时候两端都拥有了<strong>三个随机值</strong>，结合之前的两个明文随机数，计算生成本次会话所用的&quot;会话密钥&quot;，接下来的通信就可以通过该密钥来加密解密</li></ol><p><strong>基本过程</strong></p><ol><li>客户端向服务器端索要并验证公钥</li><li>双方协商生成”对话密钥”</li><li>双方采用”对话密钥”进行加密通信</li></ol><p><strong>详细握手过程</strong></p><ol><li>客户端发出请求: <ul><li>一个随机值(用于生成对话秘钥)</li><li>支持的协议</li><li>支持加密方式</li><li>支持压缩的方法</li></ul></li><li>服务端收到客户端的请求，向客户端发出回应: <ul><li>一个随机值(用于生成对话秘钥)</li><li>确定使用的协议</li><li>确定使用的加密方式</li><li>发送自己的证书（如果需要验证客户端证书需要说明）</li></ul></li><li>客户端收到服务端的证书并验证是否有效，如果证书没问题,向服务端发送一个请求: <ul><li>生成一个随机值(用证书公钥加密)</li><li>编码改变通知(随后的信息将使用双方商定的加密方法和秘钥发送)</li><li>客户端握手结束通知(前面发送的所有内容的hash值，用来提供给服务器校验)</li></ul></li><li>服务端最后响应 <ul><li>服务器收到客户端的第三个随机数之后(用私钥解密)结合之前的两个明文随机数，计算生成本次会话所用的&quot;会话密钥&quot;</li><li>编码改变通知(随后的信息都将用双方商定的加密方法和密钥发送)</li><li>服务器握手结束通知(前面发送的所有内容的hash值，用来提供给客户端校验)</li></ul></li></ol><blockquote><p>在 TLS 握手阶段，两端使用非对称加密的方式来通信，但是因为非对称加密损耗的性能比对称加密大，所以在正式传输数据时，两端使用对称加密的方式通信</p></blockquote><p><strong>否:发起Http请求</strong></p><h2 id="发送http请求" tabindex="-1">发送HTTP请求 <a class="header-anchor" href="#发送http请求" aria-label="Permalink to &quot;发送HTTP请求&quot;">​</a></h2><p>向服务端正式发送http请求</p><h2 id="返回http报文" tabindex="-1">返回HTTP报文 <a class="header-anchor" href="#返回http报文" aria-label="Permalink to &quot;返回HTTP报文&quot;">​</a></h2><p>服务器处理请求响应结果,并返回Http报文</p><p><strong>判断状态码是什么?</strong></p><p>200:继续解析，如果 4xx 或 5xx 的话就会报错，如果 3xx 进行重定向</p><p>如果是<strong>gzip</strong>格式的话会先解压一下，然后通过文件的编码格式去解码文件</p><h2 id="浏览器解析渲染页面" tabindex="-1">浏览器解析渲染页面 <a class="header-anchor" href="#浏览器解析渲染页面" aria-label="Permalink to &quot;浏览器解析渲染页面&quot;">​</a></h2><ol><li>针对下载完成后的HTML文件 <ul><li>词法分析:标记化</li><li>语法分析:构建DOM树</li></ul></li><li>解析HTML(超文本标记语言)--&gt;DOM(文档对象模型)树 <ul><li>遇到 script 标签的话，会判断是否存在 async 或者 defer属性 <ul><li>async:并行进行下载,下载完成后并执行js</li><li>defer:先并行下载文件，然后等待 HTML 解析完成后顺序执行。</li><li>如果都没有:就会阻塞住渲染流程直到 JS 下载并执行完毕</li></ul></li><li>遇到link下载并解析CSS(层叠样式表)--&gt;CSSOM(CSS对象模型)树 <ul><li>link标签引用</li><li>style标签中的样式</li><li>元素的内嵌style属性</li></ul></li></ul></li><li>DOM树 + CSSOM树 --&gt; Render Tree(渲染树):CSSOM 树和 DOM 树构建完成后开始生成渲染树</li><li>回流(Layout):根据生成的渲染树,回流得到节点的几何信息(位置,尺寸) <ul><li>计算可见的Dom节点在设备视口的位置和尺寸,这个计算阶段就是回流</li><li>为了知道每个可见节点在视口的确切大小和位置,浏览器从渲染树的根节点进行遍历</li></ul></li><li>重绘(Painting):根据渲染树与回流得到的节点几何信息,得到节点的绝对像素 <ul><li>经过生成的渲染树和回流阶段,得到了所有可见节点具体的几何信息与样式,然后将渲染树的每个节点转换成屏幕上的实际像素,这个阶段就叫重绘节点</li></ul></li><li>将像素发送给GPU绘制,合成图层,然后展示在页面上</li></ol><blockquote><p>在下载文件时可以使用 HTTP/2 协议(多路复用)可以解决队头阻塞的问题</p></blockquote><h2 id="断开tcp连接" tabindex="-1">断开TCP连接 <a class="header-anchor" href="#断开tcp连接" aria-label="Permalink to &quot;断开TCP连接&quot;">​</a></h2><p>断开进行4次数握手</p><ol><li><code>客户端</code>对<code>服务端</code>发送释放连接的请求</li><li><code>服务端</code>收到<code>客户端</code>的请求后,告知应用层释放连接</li><li><code>服务端</code>将数据发送完毕后,再向<code>客户端</code>发送释放连接请求</li><li><code>客户端</code>收到释放请求后,并向<code>服务端</code>发送确认释放的应答,同意释放</li></ol>`,36),s=[o];function r(n,d,h,c,p,u){return i(),t("div",null,s)}const T=l(e,[["render",r]]);export{k as __pageData,T as default};
