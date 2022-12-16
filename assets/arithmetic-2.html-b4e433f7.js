import{_ as n,V as s,W as a,X as t}from"./framework-1e9ccf99.js";const p={},e=t(`<h2 id="_17-1求素數" tabindex="-1"><a class="header-anchor" href="#_17-1求素數" aria-hidden="true">#</a> 17.1求素數</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;請輸入壹個整數:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">&lt;=</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;這個數不是素數\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;這個數是素數\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">double</span> b <span class="token operator">=</span><span class="token function">sqrt</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//sqrt函數定義在math.h裏面，求壹個數平方根</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>b<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">%</span>i <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;這個數不是素數\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;這個數是素數\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17-2判斷壹個數是否是閏年" tabindex="-1"><a class="header-anchor" href="#_17-2判斷壹個數是否是閏年" aria-hidden="true">#</a> 17.2判斷壹個數是否是閏年</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;請輸入壹個整數：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">(</span>a<span class="token operator">%</span><span class="token number">4</span><span class="token operator">==</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a<span class="token operator">%</span><span class="token number">100</span><span class="token operator">!=</span><span class="token number">0</span> <span class="token operator">||</span> a<span class="token operator">%</span><span class="token number">400</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;這個數是閏年\\n&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;這個數不是閏年\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17-3判斷是否是回文數" tabindex="-1"><a class="header-anchor" href="#_17-3判斷是否是回文數" aria-hidden="true">#</a> 17.3判斷是否是回文數</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;請輸入壹個整數：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	 <span class="token keyword">int</span> s<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	 <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>a<span class="token punctuation">;</span>i<span class="token operator">*=</span><span class="token number">10</span><span class="token punctuation">)</span>
	 <span class="token punctuation">{</span>
	 	s<span class="token operator">=</span>a<span class="token operator">%</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token operator">*</span>i<span class="token punctuation">)</span><span class="token operator">/</span>i <span class="token operator">+</span><span class="token number">10</span><span class="token operator">*</span>s<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">==</span>s<span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;這個數是回文數\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;這個數不是回文數\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","arithmetic-2.html.vue"]]);export{r as default};
