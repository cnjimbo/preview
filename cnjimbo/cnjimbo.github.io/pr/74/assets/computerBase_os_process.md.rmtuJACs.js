import{j as l,b as a,c as e,a7 as i}from"./chunks/framework.C1mW_7mk.js";const m=JSON.parse('{"title":"进程","description":"","frontmatter":{"sidebar":{"title":"进程","step":0},"isTimeLine":true,"title":"进程","date":"2020-04-14T00:00:00.000Z","tags":["计算机基础","操作系统"],"categories":["计算机基础"]},"headers":[],"relativePath":"computerBase/os/process.md","filePath":"computerBase/os/process.md","lastUpdated":1670770660000}'),t={name:"computerBase/os/process.md"},o=i('<h1 id="进程" tabindex="-1">进程 <a class="header-anchor" href="#进程" aria-label="Permalink to &quot;进程&quot;">​</a></h1><blockquote><p>系统进行资源分配和调度的一个独立单位。</p></blockquote><ul><li>进程是可并发执行的程序在一个数据集合上的运行过程。</li><li>进程是指进程实体的运行过程。</li></ul><h2 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h2><ul><li>结构性:由程序(段),数据(段),进程控制块(PCB)三部分组成</li><li>动态性:进程是程序的执行过程</li><li>并发性:多个进程可同时存在于内存中,能在一段时间内同时运行</li><li>独立性:独立运行的基本单位,独立获得资源与调度的基本单位</li><li>异步性:各自的进程独立的按不可预知的速度推进</li></ul><h2 id="状态" tabindex="-1">状态 <a class="header-anchor" href="#状态" aria-label="Permalink to &quot;状态&quot;">​</a></h2><ul><li>运行(Running):占用CPU且正在CPU上运行</li><li>就绪(Ready):已具备运行条件(获取了除CPU以外的其它所需资源),但CPU没有空闲</li><li>等待/阻塞/睡眠(Waiting/Blocked):因等待某一事件而不能运行</li></ul><p><img src="https://img.cdn.sugarat.top/mdImg/MTU4NDMyOTQ0ODQ1OA==584329448458" alt="图片" loading="lazy"></p><h2 id="低级调度" tabindex="-1">低级调度 <a class="header-anchor" href="#低级调度" aria-label="Permalink to &quot;低级调度&quot;">​</a></h2><ul><li>非抢占式调度:不允许某进程抢占已经分配出去的处理机。</li><li>抢占式调度:允许调度程序根据某种原则，暂停正在执行的进程，将处理机重新分配给另一进程。 <ul><li>原则: <ul><li>优先权原则</li><li>短作业（进程）优先原则</li><li>时间片原则</li></ul></li></ul></li></ul><h2 id="切换" tabindex="-1">切换 <a class="header-anchor" href="#切换" aria-label="Permalink to &quot;切换&quot;">​</a></h2><blockquote><p>为了控制进程的执行，内核必须有能力挂起正在CPU上执行的进程，并恢复以前挂起的某个进程的执行，这叫做进程切换、任务切换、上下文切换</p></blockquote><ol><li>保存被中断进程的上下文</li><li>转向进程调度</li><li>恢复待运行进程的上下文</li></ol>',13),r=[o];function s(c,n,d,u,h,p){return a(),e("div",null,r)}const b=l(t,[["render",s]]);export{m as __pageData,b as default};
