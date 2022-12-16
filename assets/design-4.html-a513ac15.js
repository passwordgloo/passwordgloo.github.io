import{_ as n,V as s,W as a,X as t}from"./framework-1e9ccf99.js";const e={},p=t(`<h2 id="_14-全局變量及宏定義" tabindex="-1"><a class="header-anchor" href="#_14-全局變量及宏定義" aria-hidden="true">#</a> 14.全局變量及宏定義</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
學習目標
(1)宏名，全局變量建議大寫
(2)#開頭的都是預處理指令，預處理是發生在預編譯階段(編譯之前)，對源程序進行壹些簡單的文本替換
(3)全局變量的作用域就是從定義處開始，到整個文件的末尾
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">P1</span> <span class="token expression"><span class="token number">3.1415926</span>   </span><span class="token comment">//定義壹個宏名P1，程序會在預編譯階段把該定義出之後的所有的P1地方替換為3.1415926</span></span>

<span class="token keyword">int</span> A<span class="token punctuation">;</span>                 <span class="token comment">//未初始化的全局變量A，初始值4的全局變量B</span>
<span class="token keyword">int</span> B<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d\\n&quot;</span><span class="token punctuation">,</span>A<span class="token punctuation">,</span>B<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;P1\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//	P1=10；         //error 符號常量P1不能被賦值</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d\\n&quot;</span><span class="token punctuation">,</span>A<span class="token punctuation">,</span>B<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-標識符命名規範" tabindex="-1"><a class="header-anchor" href="#_15-標識符命名規範" aria-hidden="true">#</a> 15.標識符命名規範</h2><blockquote><p>在程序中使用的變量名、函數名、宏名等統稱為<strong>標識符</strong>。 除庫函數的函數名由系統指定外，其余都由用戶自定義。C規定，標識符只能是字母、數字、下劃線(_)組成的字符串，並且其第壹個字符必須是字母或下劃線。</p></blockquote><ol><li>標識符不能和C語言的關鍵字相同，也不能和用戶自定義的函數或C語言庫函數重名。</li><li>不同的C語言編譯器對標識符的長度規定不同。</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
(1)變量的作用域，就看變量直接隸屬於哪個&quot;花括號&quot;，那麽其作用域就是從定義域開始，到這個&quot;花括號&quot;的末尾結束。
(2)同個&quot;花括號&quot;中不可以&quot;直接&quot;定義重名變量。
(3)在文件中的某壹處引用重名變量時，所引用的變量就是作用域較小的那壹個變量。
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> a <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">//int a;    error 註意事項(2)</span>
<span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//函數聲明中的形式參數變量名，無作用域</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>


	<span class="token keyword">int</span> a <span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>     <span class="token comment">//註意事項(3)</span>

<span class="token comment">//      int a;    error 註意事項(2)</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">//              int a;    error 註意事項(2)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token comment">//      int a;    error 註意事項(2)</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),i=[p];function c(o,l){return s(),a("div",null,i)}const d=n(e,[["render",c],["__file","design-4.html.vue"]]);export{d as default};
