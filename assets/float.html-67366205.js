import{_ as n,V as s,W as a,X as t}from"./framework-1e9ccf99.js";const p={},e=t(`<h1 id="浮动" tabindex="-1"><a class="header-anchor" href="#浮动" aria-hidden="true">#</a> 浮动</h1><h2 id="标准流" tabindex="-1"><a class="header-anchor" href="#标准流" aria-hidden="true">#</a> 标准流</h2><blockquote><p>又称文档流，是浏览器在渲染显示网页内容时默认采用的一套排版规则，规定了以何种方式排列元素</p></blockquote><h3 id="常见标准流排版规则" tabindex="-1"><a class="header-anchor" href="#常见标准流排版规则" aria-hidden="true">#</a> 常见标准流排版规则</h3><p>块级元素：从上往下、<code>垂直布局</code>、独占一行 行内元素或行内块元素：从左至右、<code>水平布局</code>、空间不够自动换行</p><h2 id="浮动-1" tabindex="-1"><a class="header-anchor" href="#浮动-1" aria-hidden="true">#</a> 浮动</h2><h3 id="浮动的作用" tabindex="-1"><a class="header-anchor" href="#浮动的作用" aria-hidden="true">#</a> 浮动的作用</h3><ul><li>图文环绕(早期)</li><li>网页布局(现在)</li></ul><h3 id="浮动的代码" tabindex="-1"><a class="header-anchor" href="#浮动的代码" aria-hidden="true">#</a> 浮动的代码</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">float</span><span class="token punctuation">:</span>left/rifht<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="浮动的特点" tabindex="-1"><a class="header-anchor" href="#浮动的特点" aria-hidden="true">#</a> 浮动的特点</h3><ul><li>浮动元素会脱离标准流(简称：脱标)，在标准流中不占位置</li><li>浮动元素比标准流高半个级别，可以覆盖标准流中的元素</li><li>浮动找浮动，下一个浮动元素会在上一个浮动元素后面左右排列</li></ul><h2 id="css书写顺序" tabindex="-1"><a class="header-anchor" href="#css书写顺序" aria-hidden="true">#</a> CSS书写顺序</h2><p>float/position/display</p><p>盒子模型(margin、padding、borde)</p><p>文字样式</p><h2 id="清除浮动" tabindex="-1"><a class="header-anchor" href="#清除浮动" aria-hidden="true">#</a> 清除浮动</h2><h3 id="直接设置父元素高度" tabindex="-1"><a class="header-anchor" href="#直接设置父元素高度" aria-hidden="true">#</a> 直接设置父元素高度</h3><h4 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;!-- 子集浮动，父级没有高度，设置高度 --&gt;
.top</span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span>0 auto<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>		//父元素设置高度
  <span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span>right<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.bottom</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="额外标签法" tabindex="-1"><a class="header-anchor" href="#额外标签法" aria-hidden="true">#</a> 额外标签法</h3><h4 id="css-1" tabindex="-1"><a class="header-anchor" href="#css-1" aria-hidden="true">#</a> CSS</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;!-- 添加新标签，清除浮动 --&gt;
.top</span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span>0 auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span>right<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.bottom</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix</span><span class="token punctuation">{</span>
  <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>clear属性值both/left/right</p></blockquote><h4 id="html-1" tabindex="-1"><a class="header-anchor" href="#html-1" aria-hidden="true">#</a> HTML</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clearfix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单伪元素清除法" tabindex="-1"><a class="header-anchor" href="#单伪元素清除法" aria-hidden="true">#</a> 单伪元素清除法</h3><h4 id="css-2" tabindex="-1"><a class="header-anchor" href="#css-2" aria-hidden="true">#</a> CSS</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.top</span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span>0 auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span>right<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.bottom</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix::after</span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="html-2" tabindex="-1"><a class="header-anchor" href="#html-2" aria-hidden="true">#</a> HTML</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top clearfix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双伪元素清除法" tabindex="-1"><a class="header-anchor" href="#双伪元素清除法" aria-hidden="true">#</a> 双伪元素清除法</h3><h4 id="css-3" tabindex="-1"><a class="header-anchor" href="#css-3" aria-hidden="true">#</a> CSS</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.top</span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span>0 auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span><span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span>right<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.bottom</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix::before,
.clearfix::after</span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span>table<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix::after</span><span class="token punctuation">{</span>
  <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="html-3" tabindex="-1"><a class="header-anchor" href="#html-3" aria-hidden="true">#</a> HTML</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top clearfix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="父元素设置overflow属性" tabindex="-1"><a class="header-anchor" href="#父元素设置overflow属性" aria-hidden="true">#</a> 父元素设置overflow属性</h3><h4 id="css-4" tabindex="-1"><a class="header-anchor" href="#css-4" aria-hidden="true">#</a> CSS</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 父元素设置overflow:hidden --&gt;
.top{
  margin:0 auto;
  width:300px;
  background-color:yellow;
  overflow:hidden;
}
.left{
  float:left;
  width:100px;
  height:200px;
  background-color:red;
}
.right{
  float:right;
  width:200px;
  height:100px;
  background-color:blue;
}
.bottom{
  width:200px;
  height:300px;
  background-color:pink;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="html-4" tabindex="-1"><a class="header-anchor" href="#html-4" aria-hidden="true">#</a> HTML</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><table><thead><tr><th>方法</th><th>操作</th><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>直接设置父元素高度</td><td>父元素设置高度</td><td>简单粗暴、方便</td><td>有些布局不能固定父元素高度</td></tr><tr><td>额外标签法</td><td>1.在父元素内容的最后添加一个块级元素<br>2.给添加的块级元素设置<code>clear:both</code></td><td></td><td>会添加额外标签，使得HTML结构复杂</td></tr><tr><td>单伪元素清除法</td><td>用一个伪元素替代额外标签</td><td>项目中使用，直接给标签添加类即可清除浮动</td><td></td></tr><tr><td>双伪元素清除法</td><td>使用两个伪元素清除浮动</td><td>项目中使用，直接给标签加类即可清除浮动</td><td></td></tr><tr><td>父元素设置overflow</td><td></td><td>方便</td><td></td></tr></tbody></table>`,45),c=[e];function l(o,i){return s(),a("div",null,c)}const d=n(p,[["render",l],["__file","float.html.vue"]]);export{d as default};