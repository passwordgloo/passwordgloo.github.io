import{_ as t,V as a,W as s,X as e}from"./framework-1e9ccf99.js";const n={},i=e(`<h2 id="css初识" tabindex="-1"><a class="header-anchor" href="#css初识" aria-hidden="true">#</a> CSS初识</h2><h3 id="css的介绍" tabindex="-1"><a class="header-anchor" href="#css的介绍" aria-hidden="true">#</a> CSS的介绍</h3><p>CSS(Cascading style sheets)层迭样式表，用于美化<code>HTML标签</code></p><h3 id="css的语法规则" tabindex="-1"><a class="header-anchor" href="#css的语法规则" aria-hidden="true">#</a> CSS的语法规则</h3><p>写在style标签中，style标签一般写在和head标签里面，title标签下面</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>美化对象<span class="token punctuation">{</span>
	属性名:属性值
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css引入方式" tabindex="-1"><a class="header-anchor" href="#css引入方式" aria-hidden="true">#</a> CSS引入方式</h2><table><thead><tr><th>引入方式</th><th>书写位置</th><th>作为范围</th><th>使用场景</th></tr></thead><tbody><tr><td>内嵌式</td><td>CSS写在style标签中</td><td>当前页面</td><td>单页面</td></tr><tr><td>外联式</td><td>CSS写在一个单独的.css文件中<br>需要通过link标签在网页中引入</td><td>多个页面</td><td>项目中</td></tr><tr><td>行内式</td><td>CSS写在标签的style属性中</td><td>当前标签</td><td>配合js使用</td></tr></tbody></table><h2 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> 媒体查询</h2><h3 id="内联样式" tabindex="-1"><a class="header-anchor" href="#内联样式" aria-hidden="true">#</a> 内联样式</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 视口宽度小于等于768px， 网页背景色是粉色 */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 视口宽度大于等于1200px， 网页背景色是skyblue */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外部css" tabindex="-1"><a class="header-anchor" href="#外部css" aria-hidden="true">#</a> 外部CSS</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;link rel=<span class="token string">&quot;stylesheet&quot;</span> href=<span class="token string">&quot;./one.css&quot;</span> media=<span class="token string">&quot;(min-width: 992px)&quot;</span>&gt;
&lt;link rel=<span class="token string">&quot;stylesheet&quot;</span> href=<span class="token string">&quot;./two.css&quot;</span> media=<span class="token string">&quot;(min-width: 1200px)&quot;</span>&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="显示模式" tabindex="-1"><a class="header-anchor" href="#显示模式" aria-hidden="true">#</a> 显示模式</h2><blockquote><p>display有下列属性</p></blockquote><ul><li>inline</li><li>inline-block</li><li>block</li></ul><h2 id="字体样式" tabindex="-1"><a class="header-anchor" href="#字体样式" aria-hidden="true">#</a> 字体样式</h2><table><thead><tr><th>属性名</th><th>含义</th><th>取值</th><th>注意</th></tr></thead><tbody><tr><td>font-size</td><td>字号</td><td>1.数字+px/em/rm<br>2.百分比<br>3.inherit</td><td>谷歌默认文字大小为16px<br>单位需要设置</td></tr><tr><td>font-weight</td><td>字重</td><td>1.normal/bold<br>2.100的整百数</td><td>不是所有字体都支持</td></tr><tr><td>font-style</td><td>倾斜</td><td>normal/italic</td><td></td></tr><tr><td>font-family</td><td>字体</td><td>字体名称</td><td>最后一项不需要引号包裹</td></tr></tbody></table><h2 id="文本样式" tabindex="-1"><a class="header-anchor" href="#文本样式" aria-hidden="true">#</a> 文本样式</h2><table><thead><tr><th>名称</th><th>说明</th><th>值</th></tr></thead><tbody><tr><td>text-indent</td><td>缩进</td><td></td></tr><tr><td>text-align</td><td>水平对齐</td><td>left/center/right</td></tr><tr><td>text-decoration</td><td>修饰线</td><td>underline/line-through/overline/none</td></tr><tr><td>line-height</td><td>行高</td><td></td></tr></tbody></table><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><ul><li>background-color</li><li>background-position</li><li>background-repeat</li><li>background-image</li><li>background-size</li></ul><h2 id="盒子模型" tabindex="-1"><a class="header-anchor" href="#盒子模型" aria-hidden="true">#</a> 盒子模型</h2><blockquote><p><code>box-sizing:border-box</code>设置自动内减</p></blockquote><ul class="task-list-container"><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> border</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> margin</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> padding</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> box-shadow</label></p></li></ul>`,25),d=[i];function l(c,r){return a(),s("div",null,d)}const p=t(n,[["render",l],["__file","intro.html.vue"]]);export{p as default};
