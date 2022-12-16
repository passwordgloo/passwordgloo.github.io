import{_ as n,V as s,W as a,X as t}from"./framework-1e9ccf99.js";const p={},e=t(`<h2 id="_38-單位換算" tabindex="-1"><a class="header-anchor" href="#_38-單位換算" aria-hidden="true">#</a> 38.單位換算</h2><blockquote><p>1KB=2^10B=1024B 1MB=2^10KB=1024KB 1GB=2^10MB=1024MB</p></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p,%p,%p&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">,</span><span class="token operator">&amp;</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">//%p,%o,%x以16進制格式輸出,但是隨機產生的數值可能不連續</span>


	<span class="token keyword">int</span> d<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d,%d&quot;</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p,%p,%p\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>d<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>d<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_39-數組定義時初始化" tabindex="-1"><a class="header-anchor" href="#_39-數組定義時初始化" aria-hidden="true">#</a> 39.數組定義時初始化</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdbool.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//1.定義數組</span>
<span class="token comment">/*	int a[2*2];
	int b =2;
	int c[2*b];    error
	return 0;
*/</span>
	<span class="token keyword">const</span> <span class="token keyword">int</span> b<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>  <span class="token comment">//整型常變量b</span>
	<span class="token keyword">int</span> c<span class="token punctuation">[</span><span class="token number">2</span><span class="token operator">*</span>b<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//	int e[3.1]     error 必須為整數</span>
	<span class="token keyword">int</span> e<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token number">3.1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> f<span class="token punctuation">[</span><span class="token char">&#39;A&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> g<span class="token punctuation">[</span>true<span class="token punctuation">]</span><span class="token punctuation">;</span> 


	<span class="token comment">//2.定義並初始化數組</span>
	<span class="token comment">/*
	int a[4]={1,2,3,4};           //數組完全初始化
	int a[ ]={1,2,3,4};
	*/</span>
	<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>                 <span class="token comment">//數組部分初始化，沒有元素默認為0</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">4</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_40-數組排序" tabindex="-1"><a class="header-anchor" href="#_40-數組排序" aria-hidden="true">#</a> 40.數組排序</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">89</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">64</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">54</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> len <span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>
	<span class="token comment">//冒泡排序</span>
<span class="token comment">/*	for(int k=0;k&lt;len-1;++k)
	{
		for(int i =0;i&lt;len-1-k,++i)
		{
			int b = a[i];
			a[i]=a[i+1];
			a[i+1]=b;
		}
	}
*/</span>
	<span class="token comment">//選擇排序</span>
	<span class="token keyword">int</span> b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>i<span class="token punctuation">,</span>j<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>k<span class="token operator">&lt;</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token operator">++</span>k<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token operator">-</span>k<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token operator">&lt;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
				c<span class="token operator">=</span>i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">int</span> b<span class="token operator">=</span> a<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">;</span>
		a<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		a<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>b<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>len<span class="token punctuation">;</span><span class="token operator">++</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">putchar</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_41-指針" tabindex="-1"><a class="header-anchor" href="#_41-指針" aria-hidden="true">#</a> 41.指針</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> a <span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	b<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>c<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token operator">*</span>c<span class="token operator">=</span>a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span><span class="token operator">*</span>p<span class="token punctuation">;</span>                      <span class="token comment">//p是int*類型的，用來存放int型變量的地址，讀作：定義了壹個指向int 的指針變量b</span>
	p <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>                     <span class="token comment">//p指向a</span>
	<span class="token operator">*</span>p <span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>                      <span class="token comment">//*p等價於a</span>
	<span class="token function">f1</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">f2</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>                     <span class="token comment">//通過函數改變main函數當中的壹個變量，就需要對這個變量取地址</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>


	<span class="token keyword">int</span> d<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>                   <span class="token comment">//數組d是int *類型的常量，其值為d[0]地址</span>
	p<span class="token operator">=</span>d<span class="token punctuation">;</span>
	p<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
	p<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">//	printf(&quot;%d,%d,%d,%d&quot;,d[-1],d[4],d[5])  error報錯</span>
	<span class="token operator">*</span>p <span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token operator">*</span><span class="token punctuation">(</span>p<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span>                   <span class="token comment">//等價於*(d+1)=20;，但是是壹個常數，不能再次賦值</span>
	<span class="token operator">*</span><span class="token punctuation">(</span>p<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">;</span>		     <span class="token comment">//*p(p+2)-&gt;p[2] *(p+2)和*2(p)  *(2+p)等價</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%o,%o,%0,%o&quot;</span><span class="token punctuation">,</span>p<span class="token punctuation">,</span>p<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>p<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">3</span><span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%5d&quot;</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//p+n實際上是p +sizeof(*p)*n</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_42-數組的增刪改查及倒置" tabindex="-1"><a class="header-anchor" href="#_42-數組的增刪改查及倒置" aria-hidden="true">#</a> 42.數組的增刪改查及倒置</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdbool.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LEN</span> <span class="token expression"><span class="token number">10</span></span></span>
<span class="token keyword">int</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span> a<span class="token punctuation">)</span> <span class="token comment">//參數可以寫成int a[LEN]或者int a[]都代表a是壹個int *a的變量</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>j<span class="token operator">&lt;</span>LEN<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span>
		<span class="token operator">++</span>j<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> j<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> len <span class="token operator">=</span><span class="token function">length</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%5d&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">putchar</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
bool <span class="token function">del</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> index<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token function">length</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">==</span><span class="token number">0</span> <span class="token operator">||</span> index<span class="token operator">&gt;</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> false<span class="token punctuation">;</span>
	<span class="token keyword">else</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
			a<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		a<span class="token punctuation">[</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> true<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
bool <span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span>a<span class="token punctuation">,</span><span class="token keyword">int</span> index<span class="token punctuation">,</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token comment">//插入</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> len<span class="token operator">=</span><span class="token function">length</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>len<span class="token operator">==</span>LEN <span class="token operator">||</span> index <span class="token operator">&gt;</span>len<span class="token punctuation">)</span>
		<span class="token keyword">return</span> false<span class="token punctuation">;</span>
	<span class="token keyword">else</span>
	<span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&gt;=</span>index<span class="token punctuation">;</span><span class="token operator">--</span>i<span class="token punctuation">)</span>
		a<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> true<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">invert</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span>a<span class="token punctuation">)</span>                      <span class="token comment">//倒置</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> len <span class="token operator">=</span><span class="token function">length</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> from<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> end<span class="token operator">=</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>from<span class="token operator">&lt;</span>end<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">int</span> d <span class="token operator">=</span>a<span class="token punctuation">[</span>from<span class="token punctuation">]</span><span class="token punctuation">;</span>
		a<span class="token punctuation">[</span>from<span class="token punctuation">]</span><span class="token operator">=</span>a<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">;</span>
		a<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token operator">=</span>d<span class="token punctuation">;</span>
		from<span class="token operator">++</span><span class="token punctuation">;</span>
		end<span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">int</span> <span class="token function">find1</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span>a<span class="token punctuation">,</span><span class="token keyword">int</span> value<span class="token punctuation">)</span>             <span class="token comment">//查找</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> len<span class="token operator">=</span><span class="token function">length</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>value<span class="token punctuation">)</span>
			<span class="token keyword">return</span> i<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">find2</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span>a<span class="token punctuation">,</span><span class="token keyword">int</span> value<span class="token punctuation">)</span>            <span class="token comment">//二分查找，數組必須按序排列</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token function">length</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> from<span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> end<span class="token operator">=</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span>from<span class="token operator">&lt;=</span>end<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token operator">==</span> a<span class="token punctuation">[</span><span class="token punctuation">(</span>from<span class="token operator">+</span>end<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span> <span class="token punctuation">(</span>from<span class="token operator">+</span>end<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token operator">&gt;</span>a<span class="token punctuation">[</span>from<span class="token operator">+</span>end<span class="token punctuation">]</span><span class="token punctuation">)</span>
			from<span class="token operator">=</span><span class="token punctuation">(</span>from<span class="token operator">+</span>end<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">else</span>
			end<span class="token operator">=</span><span class="token punctuation">(</span>from<span class="token operator">+</span>end<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">[</span>LEN<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">invert</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">insert</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">del</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token function">show</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;刪除失敗&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span>  <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_43-1二維數組定義初始化" tabindex="-1"><a class="header-anchor" href="#_43-1二維數組定義初始化" aria-hidden="true">#</a> 43.1二維數組定義初始化</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token comment">// int a[3][4]={1,2,3,4,5,6,7,8,9,10,11,12};     完全初始化</span>
	<span class="token comment">/*
	int a[3][4]={
		{1,2,3,4}
		{5,6,7,8}
		{9,10,11,12}
		};
	*/</span>

<span class="token comment">//	int a[3][4]={1};                         第壹位為1，其余為0</span>
<span class="token comment">//	int a[3][4]={{1,2,3,4}{}{9,10,11,12}};   只適合部分編譯器</span>
<span class="token comment">//	int a[3][4]={{1}{2,3}{4}};</span>
<span class="token comment">//	int a[3][4]={{1}{2,3}};</span>
	<span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token comment">/*輸出方式
	for(int i =0;i&lt;3;++i)
		for(int j=0;j&lt;4;++j)
			printf(&quot;%d\\n&quot;,a[i][j]);
	*/</span>
	<span class="token comment">//輸出方式2</span>
	<span class="token keyword">int</span> j<span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">12</span><span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>i<span class="token operator">/</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">%</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>	
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","array-1.html.vue"]]);export{k as default};
