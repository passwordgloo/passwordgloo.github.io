import{_ as n,V as s,W as a,X as t}from"./framework-1e9ccf99.js";const p={},o=t(`<h2 id="_64-指针数组和多重指针" tabindex="-1"><a class="header-anchor" href="#_64-指针数组和多重指针" aria-hidden="true">#</a> 64.指针数组和多重指针</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//对一个字符型数组指针数组排序</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">int</span> len<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
		<span class="token function">puts</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">*</span>a<span class="token punctuation">,</span><span class="token keyword">int</span> len<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>len<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token operator">++</span>j<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>a<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				<span class="token keyword">char</span> <span class="token operator">*</span>p<span class="token operator">=</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
				a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>a<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				a<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span>p<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> <span class="token operator">*</span>a<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;haha&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;lala&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;hehe&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">show</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_65-指针数组做main函数形参" tabindex="-1"><a class="header-anchor" href="#_65-指针数组做main函数形参" aria-hidden="true">#</a> 65.指针数组做main函数形参</h2><blockquote><ul><li>函数无参时，调用main函数时不必给出实参</li><li>main函数可以带参，例如int main(<span style="color:red;">int argc,char*argv[]</span>)</li></ul></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//该程序功能 输出argv中元素的内容</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span><span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>argc<span class="token operator">--</span> <span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span><span class="token punctuation">(</span>argv<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>argc和argv是main函数的形参，它们是程序的&quot;命令行参数&quot; argc表示参数个数，argv表示参数向量，它是一个指向字符指针的指针变量，其每一个元素指向一个字符串</p></blockquote><h2 id="_66-void指针" tabindex="-1"><a class="header-anchor" href="#_66-void指针" aria-hidden="true">#</a> 66.void指针</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">*</span>p1<span class="token punctuation">;</span>
	p1 <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
	<span class="token keyword">char</span> ch <span class="token operator">=</span> <span class="token char">&#39;0&#39;</span><span class="token punctuation">,</span><span class="token operator">*</span>p2<span class="token punctuation">;</span>
	p2 <span class="token operator">=</span> <span class="token operator">&amp;</span>ch<span class="token punctuation">;</span>
	
	<span class="token keyword">void</span> <span class="token operator">*</span>p3 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span>p1<span class="token punctuation">;</span> <span class="token comment">//也可以写成void *p3 =p1;因为其他指针和void*类型的指针发生相互赋值时。会进行隐式数据类型转换</span>

<span class="token comment">//	p2 = p1;</span>
<span class="token comment">// printf(&quot;%d\\n&quot;,*p3);  error因为p3不是void *类型，不指向确定类型的指针，所以无法通过*p3来访问变量a</span>

p3<span class="token operator">=</span>p2<span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span>p3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),e=[o];function c(l,i){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","pointer-1.html.vue"]]);export{r as default};