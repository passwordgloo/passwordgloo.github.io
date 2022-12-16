import{_ as n,V as s,W as a,X as p}from"./framework-1e9ccf99.js";const t={},o=p(`<h2 id="_67-動態內存分配" tabindex="-1"><a class="header-anchor" href="#_67-動態內存分配" aria-hidden="true">#</a> 67.動態內存分配</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//輸入學生數，再輸入每個學生對應的姓名和成績，最後把這些信息輸出</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span>   <span class="token comment">//有nalloc calloc free exit的函數聲明</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;malloc.h&gt;</span>   <span class="token comment">//alloc calloc free</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> n<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;請輸入學生數：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//	void *malloc(unsigned int size):其功能是在堆區分配連續的size個字節的存儲空間並且返回這段存儲空間開頭的地址，如果內存分配失敗，會返回空指針</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>p1<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//強制數據類型轉換可以省略</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p1 <span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span>                                <span class="token comment">//判斷是否是空指針</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;內存分配失敗，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//void *calloc(unsigned int n,unsigned int size);</span>
	<span class="token keyword">char</span> <span class="token punctuation">(</span><span class="token operator">*</span>p2<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token function">calloc</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p2 <span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;內存分配失敗，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;請輸入第%d個學生的成績和姓名：\\n&quot;</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%s&quot;</span><span class="token punctuation">,</span>p1<span class="token operator">+</span>i<span class="token punctuation">,</span>p2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;第%d個學生的成績為%d,姓名為%s&quot;</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>p1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>p2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//void free(void *p);</span>
	<span class="token function">free</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>                                    <span class="token comment">//釋放動態存儲空間</span>
	<span class="token function">free</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_68-1realloc函數" tabindex="-1"><a class="header-anchor" href="#_68-1realloc函數" aria-hidden="true">#</a> 68.1realloc函數</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
1，創建壹段動態內存空間，存放兩個整型數據
2.對這段動態內存空間進行擴容，然後再存放兩個整型數據，再把這4個整型數據輸出
3.用這段動態內存空間存放兩個double型數據，最後輸出兩個double型數據
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token comment">//	int *p=malloc(sizeof)(int)*2);   error 因為程序實際上是壹個c++程序，在c++中可以把壹個其他類型的指針賦給壹個void指針變量，反之程序就會出錯</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;內存分配失敗，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	p<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d\\n&quot;</span><span class="token punctuation">,</span>p<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//void *realloc(void *p,unsigned int size);   //其功能是吧p所指向的動態存儲內存空間改成size個字節，如果不成功則返回壹個空指針</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">realloc</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token comment">//stdlib.h和malloc.h都有realloc的函數聲明，其指針參數必須是以個已經指向了壹段動態內存空間的指針</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;內存分配失敗，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	p<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
	p<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
	p<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d,%d,%d\\n&quot;</span><span class="token punctuation">,</span>p<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>p<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>p<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">double</span> <span class="token operator">*</span>p1<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">double</span> <span class="token operator">*</span><span class="token punctuation">)</span>p<span class="token punctuation">;</span>
	p1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">3.14</span><span class="token punctuation">;</span>
	p1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">69.3</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%lf,%lf\\n&quot;</span><span class="token punctuation">,</span>p1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>p1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_68-2-動態內存空間存儲信息" tabindex="-1"><a class="header-anchor" href="#_68-2-動態內存空間存儲信息" aria-hidden="true">#</a> 68.2.動態內存空間存儲信息</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> n<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;請輸入學生數：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> <span class="token operator">*</span>a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">62</span><span class="token operator">*</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;內存分配失敗，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;請輸入第%d個學生的姓名，年齡和成績：\\n&quot;</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s%d%lf&quot;</span><span class="token punctuation">,</span>a<span class="token operator">+</span><span class="token number">62</span><span class="token operator">*</span>i<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span>a<span class="token operator">+</span><span class="token number">50</span><span class="token operator">+</span><span class="token number">62</span><span class="token operator">*</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">double</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span>a<span class="token operator">+</span><span class="token number">54</span><span class="token operator">+</span><span class="token number">62</span><span class="token operator">*</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;第%d個學生的姓名：%s年齡：%d成績；%lf\\n&quot;</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>a<span class="token operator">+</span><span class="token number">62</span><span class="token operator">*</span>i<span class="token punctuation">,</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span>a<span class="token operator">+</span><span class="token number">50</span><span class="token operator">+</span><span class="token number">62</span><span class="token operator">*</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">double</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span>a<span class="token operator">+</span><span class="token number">54</span><span class="token operator">+</span><span class="token number">62</span><span class="token operator">*</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">free</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_69-free和realloc函數" tabindex="-1"><a class="header-anchor" href="#_69-free和realloc函數" aria-hidden="true">#</a> 69.free和realloc函數</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>   <span class="token comment">//free函數的註意事項</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;分配內存失敗，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token comment">//	free(p+1); 1. error free函數的實參必須是壹個動態空間的首地址或者空指針</span>
	<span class="token function">free</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//2.如果分配的動態內存空間不人為釋放，將在程序結束後，系統收回</span>
	p<span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>  <span class="token comment">//3.free函數對值為NULL的指針操作多次，程序不會報錯，可以有效的避免野指針</span>
	<span class="token function">free</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//4.在堆區有兩個動態內存A和B（A前B後），p1和p2分別指向他們，如果free(p1);不會把B的內存空間釋放掉，因為在堆區不存在2段連續的動態內存空間，即使有free(p1)對B的動態內存空間也沒有影響</span>
<span class="token punctuation">}</span>
	<span class="token keyword">void</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>  <span class="token comment">//realloc函數註意事項</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//1.realloc重新分配動態內存成功的話，會返回該動態內存空間的首地址，否則返回空指針</span>
		<span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">realloc</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//2.如果realloc的指針實參為NULL，則會開辟新的動態內存空間。</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;分配內存失敗，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">4</span><span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
			p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>i<span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;地址為%p\\n&quot;</span><span class="token punctuation">,</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">/*
		printf(&quot;地址為%p\\n&quot;,realooc(p,1000)); //3.realloc對壹段動態內存空間擴容的時候，會根據其後是否有足夠d連續的未被其他程序的空間來選擇擴容的方式，如果有，會直接擴容，並把指針實參的值返回，如果沒有，則會開辟新的動態內存空間，將原有的動態內存空間的數據拷貝到新的動態內存空間並把原來的動態內存空間釋放掉，最後返回新的動態內存空間的首地址
		free(p);  4.error因為在該句被運作之前，p指向的動態內存空間已經被釋放，p成了壹個野指針
		*/</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;地址為%p\\n&quot;</span><span class="token punctuation">,</span>p<span class="token operator">=</span><span class="token function">realloc</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//5.使用realloc函數時，把函數返回值賦給它的指針實參，有效防止野指針</span>
		<span class="token function">realloc</span><span class="token punctuation">(</span>p<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//6.error realloc函數的指針必須是壹個動態內存空間的首地址或者空指針</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p\\n&quot;</span><span class="token punctuation">,</span><span class="token function">realloc</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//7.如果realloc函數所分配的大小為0個字節，則等價於free(p);其返回值為NULL </span>
	<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_70-指針小結" tabindex="-1"><a class="header-anchor" href="#_70-指針小結" aria-hidden="true">#</a> 70.指針小結</h2><p>指針就是地址，地址不僅有值，而且有數據類型 指針指向變量的意思是通過指針我們可以訪問這個變量。 指針P指向數組元素時，這個元素的上壹個元素的地址是p-1，下壹個元素的地址是p+1； 如果p1和p2指向的元素同屬壹個數組的，那麽[p1-p2]就代表這兩個元素下表差，而[p1+p2]毫無意義</p>`,10),e=[o];function c(l,i){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","pointer-2.html.vue"]]);export{k as default};
