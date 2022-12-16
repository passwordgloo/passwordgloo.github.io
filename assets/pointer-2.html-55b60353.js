import{_ as n,V as s,W as a,X as p}from"./framework-1e9ccf99.js";const t={},o=p(`<h2 id="_67-动态内存分配" tabindex="-1"><a class="header-anchor" href="#_67-动态内存分配" aria-hidden="true">#</a> 67.动态内存分配</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//输入学生数，再输入每个学生对应的姓名和成绩，最后把这些信息输出</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span>   <span class="token comment">//有nalloc calloc free exit的函数声明</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;malloc.h&gt;</span>   <span class="token comment">//alloc calloc free</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> n<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入学生数：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//	void *malloc(unsigned int size):其功能是在堆区分配连续的size个字节的存储空间并且返回这段存储空间开头的地址，如果内存分配失败，会返回空指针</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>p1<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//强制数据类型转换可以省略</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p1 <span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span>                                <span class="token comment">//判断是否是空指针</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;内存分配失败，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//void *calloc(unsigned int n,unsigned int size);</span>
	<span class="token keyword">char</span> <span class="token punctuation">(</span><span class="token operator">*</span>p2<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token function">calloc</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p2 <span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;内存分配失败，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入第%d个学生的成绩和姓名：\\n&quot;</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%s&quot;</span><span class="token punctuation">,</span>p1<span class="token operator">+</span>i<span class="token punctuation">,</span>p2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;第%d个学生的成绩为%d,姓名为%s&quot;</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>p1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>p2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//void free(void *p);</span>
	<span class="token function">free</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>                                    <span class="token comment">//释放动态存储空间</span>
	<span class="token function">free</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_68-1realloc函数" tabindex="-1"><a class="header-anchor" href="#_68-1realloc函数" aria-hidden="true">#</a> 68.1realloc函数</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
1，创建一段动态内存空间，存放两个整型数据
2.对这段动态内存空间进行扩容，然后再存放两个整型数据，再把这4个整型数据输出
3.用这段动态内存空间存放两个double型数据，最后输出两个double型数据
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token comment">//	int *p=malloc(sizeof)(int)*2);   error 因为程序实际上是一个c++程序，在c++中可以把一个其他类型的指针赋给一个void指针变量，反之程序就会出错</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;内存分配失败，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	p<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d\\n&quot;</span><span class="token punctuation">,</span>p<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//void *realloc(void *p,unsigned int size);   //其功能是吧p所指向的动态存储内存空间改成size个字节，如果不成功则返回一个空指针</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">realloc</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token comment">//stdlib.h和malloc.h都有realloc的函数声明，其指针参数必须是以个已经指向了一段动态内存空间的指针</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;内存分配失败，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_68-2-动态内存空间存储信息" tabindex="-1"><a class="header-anchor" href="#_68-2-动态内存空间存储信息" aria-hidden="true">#</a> 68.2.动态内存空间存储信息</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> n<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入学生数：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> <span class="token operator">*</span>a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">62</span><span class="token operator">*</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;内存分配失败，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入第%d个学生的姓名，年龄和成绩：\\n&quot;</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s%d%lf&quot;</span><span class="token punctuation">,</span>a<span class="token operator">+</span><span class="token number">62</span><span class="token operator">*</span>i<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span>a<span class="token operator">+</span><span class="token number">50</span><span class="token operator">+</span><span class="token number">62</span><span class="token operator">*</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">double</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span>a<span class="token operator">+</span><span class="token number">54</span><span class="token operator">+</span><span class="token number">62</span><span class="token operator">*</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;第%d个学生的姓名：%s年龄：%d成绩；%lf\\n&quot;</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>a<span class="token operator">+</span><span class="token number">62</span><span class="token operator">*</span>i<span class="token punctuation">,</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span>a<span class="token operator">+</span><span class="token number">50</span><span class="token operator">+</span><span class="token number">62</span><span class="token operator">*</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">double</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">(</span>a<span class="token operator">+</span><span class="token number">54</span><span class="token operator">+</span><span class="token number">62</span><span class="token operator">*</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">free</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_69-free和realloc函数" tabindex="-1"><a class="header-anchor" href="#_69-free和realloc函数" aria-hidden="true">#</a> 69.free和realloc函数</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>   <span class="token comment">//free函数的注意事项</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;分配内存失败，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token comment">//	free(p+1); 1. error free函数的实参必须是一个动态空间的首地址或者空指针</span>
	<span class="token function">free</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//2.如果分配的动态内存空间不人为释放，将在程序结束后，系统收回</span>
	p<span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>  <span class="token comment">//3.free函数对值为NULL的指针操作多次，程序不会报错，可以有效的避免野指针</span>
	<span class="token function">free</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//4.在堆区有两个动态内存A和B（A前B后），p1和p2分别指向他们，如果free(p1);不会把B的内存空间释放掉，因为在堆区不存在2段连续的动态内存空间，即使有free(p1)对B的动态内存空间也没有影响</span>
<span class="token punctuation">}</span>
	<span class="token keyword">void</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>  <span class="token comment">//realloc函数注意事项</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//1.realloc重新分配动态内存成功的话，会返回该动态内存空间的首地址，否则返回空指针</span>
		<span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">realloc</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//2.如果realloc的指针实参为NULL，则会开辟新的动态内存空间。</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;分配内存失败，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">4</span><span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
			p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>i<span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;地址为%p\\n&quot;</span><span class="token punctuation">,</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">/*
		printf(&quot;地址为%p\\n&quot;,realooc(p,1000)); //3.realloc对一段动态内存空间扩容的时候，会根据其后是否有足够d连续的未被其他程序的空间来选择扩容的方式，如果有，会直接扩容，并把指针实参的值返回，如果没有，则会开辟新的动态内存空间，将原有的动态内存空间的数据拷贝到新的动态内存空间并把原来的动态内存空间释放掉，最后返回新的动态内存空间的首地址
		free(p);  4.error因为在该句被运作之前，p指向的动态内存空间已经被释放，p成了一个野指针
		*/</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;地址为%p\\n&quot;</span><span class="token punctuation">,</span>p<span class="token operator">=</span><span class="token function">realloc</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//5.使用realloc函数时，把函数返回值赋给它的指针实参，有效防止野指针</span>
		<span class="token function">realloc</span><span class="token punctuation">(</span>p<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//6.error realloc函数的指针必须是一个动态内存空间的首地址或者空指针</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p\\n&quot;</span><span class="token punctuation">,</span><span class="token function">realloc</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//7.如果realloc函数所分配的大小为0个字节，则等价于free(p);其返回值为NULL </span>
	<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_70-指针小结" tabindex="-1"><a class="header-anchor" href="#_70-指针小结" aria-hidden="true">#</a> 70.指针小结</h2><p>指针就是地址，地址不仅有值，而且有数据类型 指针指向变量的意思是通过指针我们可以访问这个变量。 指针P指向数组元素时，这个元素的上一个元素的地址是p-1，下一个元素的地址是p+1； 如果p1和p2指向的元素同属一个数组的，那么[p1-p2]就代表这两个元素下表差，而[p1+p2]毫无意义</p>`,10),e=[o];function c(l,i){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","pointer-2.html.vue"]]);export{k as default};