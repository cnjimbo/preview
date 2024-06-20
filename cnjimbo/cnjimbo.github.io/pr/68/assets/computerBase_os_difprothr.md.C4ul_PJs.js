import{j as a,b as t,c as e,a7 as i}from"./chunks/framework.Dz2NkhCU.js";const m=JSON.parse('{"title":"进程与线程的区别","description":"","frontmatter":{"sidebar":{"title":"进程与线程的区别","step":2},"isTimeLine":true,"title":"进程与线程的区别","date":"2020-04-14T00:00:00.000Z","tags":["计算机基础","操作系统"],"categories":["计算机基础"]},"headers":[],"relativePath":"computerBase/os/difprothr.md","filePath":"computerBase/os/difprothr.md","lastUpdated":1670770660000}'),l={name:"computerBase/os/difprothr.md"},r=i('<h1 id="进程与线程的区别" tabindex="-1">进程与线程的区别 <a class="header-anchor" href="#进程与线程的区别" aria-label="Permalink to &quot;进程与线程的区别&quot;">​</a></h1><h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h2><p><strong>进程</strong></p><p>具有一定独立功能的程序关于某个数据集合上的一次运行活动,进程是系统进行资源分配和调度的一个独立单位</p><p><strong>线程</strong></p><p>是进程中的一个实体，是被系统独立调度的基本单位。比进程更小的能独立运行的基本单位。</p><h2 id="关系" tabindex="-1">关系 <a class="header-anchor" href="#关系" aria-label="Permalink to &quot;关系&quot;">​</a></h2><ul><li>一个线程可以创建和撤销另一个线程;同一个进程中的多个线程之间可以并发执行.</li><li>线程是一个更加接近于执行体的概念，它可以与同进程中的其他线程共享数据，但拥有自己的栈空间，拥有独立的执行序列。</li></ul><h2 id="目的" tabindex="-1">目的 <a class="header-anchor" href="#目的" aria-label="Permalink to &quot;目的&quot;">​</a></h2><ul><li>进程:为了使多个程序更好的并发执行，改善资源利用率、提高系统效率。</li><li>线程:为了减少并发执行时所付出的时空开销，使并发粒度更细、并发性更好</li></ul><h2 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h2><p><strong>进程</strong></p><ul><li>独立的地址空间:一个进程崩溃后，在保护模式下不会对其它进程产生影响</li></ul><p><strong>线程</strong></p><ul><li>只是进程中的不同执行路径</li><li>有独立的堆栈与局部变量</li><li>没有单独的地址空间</li><li>一个线程死掉等于整个进程死掉</li></ul><p><strong>总结</strong></p><ul><li>多进程程序比多线程程序健壮</li><li>进程切换时耗费资源更大,效率较差</li><li>线程执行开销小，但不利于资源的管理和保护</li><li>要求同时进行又要共享某些变量的并发操作，只能用线程，不能用进程。</li><li>多个线程共享内存，从而极大地提高了程序的运行效率</li><li>进程在执行过程中拥有独立的内存单元</li></ul>',17),o=[r];function s(n,d,h,p,c,u){return t(),e("div",null,o)}const f=a(l,[["render",s]]);export{m as __pageData,f as default};
