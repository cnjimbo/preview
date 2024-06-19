import{j as e,b as i,c as t,a7 as l}from"./chunks/framework.CJt2Im9v.js";const g=JSON.parse('{"title":"BFC","description":"","frontmatter":{"sidebar":{"title":"BFC","step":9},"isTimeLine":true,"title":"BFC","date":"2020-04-14T00:00:00.000Z","tags":["大前端","CSS"],"categories":["大前端"]},"headers":[],"relativePath":"bigWeb/css/bfc.md","filePath":"bigWeb/css/bfc.md","lastUpdated":1670770660000}'),o={name:"bigWeb/css/bfc.md"},a=l('<h1 id="bfc" tabindex="-1">BFC <a class="header-anchor" href="#bfc" aria-label="Permalink to &quot;BFC&quot;">​</a></h1><p>BFC规范(块级格式化上下文：block formatting context)</p><p>规定了内部的Block Box如何布局</p><ul><li>内部的Box会垂直依次序排列</li><li>两个盒子的垂直距离由 margin 属性决定</li><li>属于同一个BFC的两个相邻Box的margin会发生重叠(取较大者的margin)</li><li>BFC内部,每个元素的margin box的左边，与包含块border box的左边相接触(每个盒子的左外边缘接触内部盒子的左边缘)</li><li>BFC的区域不会与float box重叠</li><li>计算BFC的高度时，浮动元素也会参与计算</li><li>隔离的独立容器，容器里面的子元素不会影响到外面的元素</li></ul><p><strong>触发BFC条件</strong></p><ul><li>根元素:html</li><li>float值不为<code>none</code></li><li>overflow<strong>不为</strong><code>visible</code></li><li>display的值<strong>为</strong>inline-block、table-cell、table-caption</li><li>position的值为absolute或fixed</li></ul>',6),s=[a];function c(r,n,d,b,_,p){return i(),t("div",null,s)}const m=e(o,[["render",c]]);export{g as __pageData,m as default};
