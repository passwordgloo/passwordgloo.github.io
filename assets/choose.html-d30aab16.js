import{_ as n,V as s,W as a,X as t}from"./framework-1e9ccf99.js";const p={},e=t(`<h2 id="_24-判斷兩個實型數據是否相等" tabindex="-1"><a class="header-anchor" href="#_24-判斷兩個實型數據是否相等" aria-hidden="true">#</a> 24.判斷兩個實型數據是否相等</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">float</span> a <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2.12</span><span class="token punctuation">,</span>b <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10.33</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">fabs</span><span class="token punctuation">(</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">1e-4</span><span class="token punctuation">)</span>                           <span class="token comment">//double fabs(double), int abs(int)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;這兩個數相等&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;這兩個數不等&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_25-求壹個壹元二次方程的根" tabindex="-1"><a class="header-anchor" href="#_25-求壹個壹元二次方程的根" aria-hidden="true">#</a> 25.求壹個壹元二次方程的根</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">double</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;請輸入壹元二次方程的3個系數&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%lf%lf%lf&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">,</span><span class="token operator">&amp;</span>c<span class="token punctuation">,</span><span class="token operator">&amp;</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">fabs</span><span class="token punctuation">(</span>a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span><span class="token number">1e-6</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;輸入有誤,程序結束&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	d <span class="token operator">=</span> b<span class="token operator">*</span>b<span class="token operator">-</span><span class="token number">4</span><span class="token operator">*</span>a<span class="token operator">*</span>c<span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>d<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;此方程無實數根&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span>  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">fabs</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">&lt;=</span><span class="token number">1e-6</span><span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;此方程有兩個相同的實數根:%lf\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">-</span>b<span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;此方程的兩個實數根為:%lf,&amp;lf\\n&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token operator">-</span>b<span class="token operator">+</span><span class="token function">sqrt</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token operator">*</span>a<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token operator">-</span>b<span class="token operator">-</span><span class="token function">sqrt</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token operator">*</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_26-邏輯型數據" tabindex="-1"><a class="header-anchor" href="#_26-邏輯型數據" aria-hidden="true">#</a> 26.邏輯型數據</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdbool.h&gt;</span>                <span class="token comment">//該文件中有_Bool這個數據類型，_Bool與bool是同義詞，vc++沒有這個文件</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//定義布爾型變量——c99新增變量</span>
	bool a <span class="token operator">=</span> false<span class="token punctuation">;</span>                    <span class="token comment">//等價於bool a = 0;</span>
	bool b <span class="token operator">=</span> true<span class="token punctuation">;</span>                     <span class="token comment">//等價於bool b = 1;</span>
<span class="token comment">//	_bool c;                           //與bool c;等價</span>


	b <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">//布爾型數據占1個字節</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_27-switch語句" tabindex="-1"><a class="header-anchor" href="#_27-switch語句" aria-hidden="true">#</a> 27.switch語句</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;請輸入所要到達的樓層:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> a<span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">switch</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	<span class="token keyword">default</span><span class="token operator">:</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;沒有這個樓層\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;上壹樓\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;上二樓\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;上三樓\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_28-條件編譯" tabindex="-1"><a class="header-anchor" href="#_28-條件編譯" aria-hidden="true">#</a> 28.條件編譯</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">DAXIE</span> <span class="token expression"><span class="token number">1</span></span></span>
<span class="token keyword">void</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token comment">//	f2();</span>
	<span class="token function">f3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> ch<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>ch <span class="token operator">=</span> <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!=</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token number">1</span>                                    </span><span class="token comment">//1為真，0為假</span></span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>ch <span class="token operator">&gt;=</span><span class="token char">&#39;A&#39;</span> <span class="token operator">&amp;&amp;</span> ch <span class="token operator">&lt;=</span> <span class="token char">&#39;z&#39;</span><span class="token punctuation">)</span>
		ch<span class="token operator">+=</span><span class="token number">32</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>ch <span class="token operator">&gt;=</span><span class="token char">&#39;a&#39;</span> <span class="token operator">&amp;&amp;</span> ch <span class="token operator">&lt;=</span><span class="token char">&#39;z&#39;</span><span class="token punctuation">)</span>
		ch<span class="token operator">-=</span><span class="token number">32</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
	<span class="token function">putchar</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> ch<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>ch <span class="token operator">=</span> <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!=</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">DAXIE                                    </span><span class="token comment">//使用宏變量，不加標識符執行else，加了標識符執行本行</span></span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>ch <span class="token operator">&gt;=</span><span class="token char">&#39;A&#39;</span> <span class="token operator">&amp;&amp;</span> ch <span class="token operator">&lt;=</span> <span class="token char">&#39;z&#39;</span><span class="token punctuation">)</span>
		ch<span class="token operator">+=</span><span class="token number">32</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>ch <span class="token operator">&gt;=</span><span class="token char">&#39;a&#39;</span> <span class="token operator">&amp;&amp;</span> ch <span class="token operator">&lt;=</span><span class="token char">&#39;z&#39;</span><span class="token punctuation">)</span>
		ch<span class="token operator">-=</span><span class="token number">32</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
	<span class="token function">putchar</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> ch<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>ch <span class="token operator">=</span> <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!=</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">DAXIE                                   </span><span class="token comment">//不加標識符執行本行，加了標識符執行else</span></span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>ch <span class="token operator">&gt;=</span><span class="token char">&#39;A&#39;</span> <span class="token operator">&amp;&amp;</span> ch <span class="token operator">&lt;=</span> <span class="token char">&#39;z&#39;</span><span class="token punctuation">)</span>
		ch<span class="token operator">+=</span><span class="token number">32</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>ch <span class="token operator">&gt;=</span><span class="token char">&#39;a&#39;</span> <span class="token operator">&amp;&amp;</span> ch <span class="token operator">&lt;=</span><span class="token char">&#39;z&#39;</span><span class="token punctuation">)</span>
		ch<span class="token operator">-=</span><span class="token number">32</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
	<span class="token function">putchar</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_29-頭文件" tabindex="-1"><a class="header-anchor" href="#_29-頭文件" aria-hidden="true">#</a> 29.頭文件</h2><blockquote><p>#include &lt;文件名&gt; 系統到存放C庫函數頭文件的目錄中尋找要包含的文件，這稱為標準方式。 #include &quot;文件名&quot;系統現在用戶當前目錄中尋找要包含的文件，要是找不到，再按標準方式查找。</p></blockquote><blockquote><p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/danger.svg" alt="" loading="lazy">頭文件的後綴可以是&#39;.c&#39;、&#39;.h&#39;或者沒有</p></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span>                         <span class="token comment">//調用printf函數</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">P1</span> <span class="token expression"><span class="token operator">=</span><span class="token number">3.14159</span></span></span>

<span class="token keyword">int</span> E <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span><span class="token keyword">int</span> y<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	x<span class="token operator">&gt;</span>y<span class="token operator">?</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span>x<span class="token operator">=</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_30例題1" tabindex="-1"><a class="header-anchor" href="#_30例題1" aria-hidden="true">#</a> 30例題1</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d<span class="token punctuation">,</span>e<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;請輸入3個整數：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">,</span><span class="token operator">&amp;</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">&gt;</span>b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	d<span class="token operator">=</span>b<span class="token punctuation">;</span>
	b<span class="token operator">=</span>a<span class="token punctuation">;</span>
	a<span class="token operator">=</span>d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token number">0</span></span></span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d,%d&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d,%d&quot;</span><span class="token punctuation">,</span>c<span class="token punctuation">,</span>b<span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_31例題2" tabindex="-1"><a class="header-anchor" href="#_31例題2" aria-hidden="true">#</a> 31例題2</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;請輸入數字1/2/3: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> a<span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">switch</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;abc\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ab\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;c\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">default</span><span class="token operator">:</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;數字無效\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","choose.html.vue"]]);export{r as default};
