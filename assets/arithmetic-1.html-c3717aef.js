import{_ as n,V as s,W as a,X as e}from"./framework-1e9ccf99.js";const t={},i=e(`<h2 id="_16-算法的基本概念" tabindex="-1"><a class="header-anchor" href="#_16-算法的基本概念" aria-hidden="true">#</a> 16.算法的基本概念</h2><h3 id="程序" tabindex="-1"><a class="header-anchor" href="#程序" aria-hidden="true">#</a> 程序</h3><p><code>對程序的描述</code>在程序中要指定哪些數據以及這些數據的類型和數據的組織形式。這就是數據結構 <code>對數據的描述</code>。即要求計算機進行操作的步驟，也就是<code>算法</code>。</p><h3 id="沃斯公式" tabindex="-1"><a class="header-anchor" href="#沃斯公式" aria-hidden="true">#</a> 沃斯公式</h3><blockquote><p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/warning.svg" alt="" loading="lazy">該說法已經不合時宜</p></blockquote><p><code>算法+數據類型=程序</code></p><h3 id="分類" tabindex="-1"><a class="header-anchor" href="#分類" aria-hidden="true">#</a> 分類</h3><ul><li>數值運算算法</li><li>非數值運算算法</li></ul><h3 id="算法的特性" tabindex="-1"><a class="header-anchor" href="#算法的特性" aria-hidden="true">#</a> 算法的特性</h3><ol><li>有窮性</li><li>確定性</li><li>有零個或多個輸入</li><li>有壹個或多個輸出</li><li>有效性</li></ol><h2 id="_17-認識循環語句" tabindex="-1"><a class="header-anchor" href="#_17-認識循環語句" aria-hidden="true">#</a> 17.認識循環語句</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> i<span class="token punctuation">;</span>
方法<span class="token number">1</span>
<span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	i<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>     <span class="token comment">//方法2</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//後自增運算符，其表達式的值是沒有執行後自增運算之前的值</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">++</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//前自增運算符，其表達式的值是該變量執行前自增運算之後的值</span>
	
	i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">++</span>i<span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//printf參數的計算順序是自右至左的</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-算法的表示" tabindex="-1"><a class="header-anchor" href="#_18-算法的表示" aria-hidden="true">#</a> 18.算法的表示</h2><h3 id="方法壹" tabindex="-1"><a class="header-anchor" href="#方法壹" aria-hidden="true">#</a> 方法壹</h3><ol><li>2！1*2</li><li>3！ 2！*3</li><li>4！3！*4</li><li>5！ 4！*5</li></ol><h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h3><ol><li>1 → t</li><li>2 → i</li><li>t*i → t</li><li>i+i → i</li><li>當i&lt;=5 調到第三步，否則跳轉到第六步開始執行</li><li>輸出t</li></ol><h3 id="偽代碼" tabindex="-1"><a class="header-anchor" href="#偽代碼" aria-hidden="true">#</a> 偽代碼</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>begin
<span class="token number">1</span> → t
<span class="token number">2</span> → i
 <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">)</span>
 <span class="token punctuation">{</span>
	t<span class="token operator">*</span>i<span class="token operator">=</span>t<span class="token punctuation">;</span>
	i<span class="token operator">+</span><span class="token number">1</span><span class="token operator">=</span>i<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 printf t
 end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),p=[i];function o(c,l){return s(),a("div",null,p)}const u=n(t,[["render",o],["__file","arithmetic-1.html.vue"]]);export{u as default};