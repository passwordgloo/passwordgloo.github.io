import{_ as n,V as s,W as a,X as t}from"./framework-1e9ccf99.js";const e={},p=t(`<h2 id="_14-全局变量及宏定义" tabindex="-1"><a class="header-anchor" href="#_14-全局变量及宏定义" aria-hidden="true">#</a> 14.全局变量及宏定义</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
学习目标
(1)宏名，全局变量建议大写
(2)#开头的都是预处理指令，预处理是发生在预编译阶段(编译之前)，对源程序进行一些简单的文本替换
(3)全局变量的作用域就是从定义处开始，到整个文件的末尾
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span> </span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">P1</span> <span class="token expression"><span class="token number">3.1415926</span>   </span><span class="token comment">//定义一个宏名P1，程序会在预编译阶段把该定义出之后的所有的P1地方替换为3.1415926</span></span>

<span class="token keyword">int</span> A<span class="token punctuation">;</span>                 <span class="token comment">//未初始化的全局变量A，初始值4的全局变量B</span>
<span class="token keyword">int</span> B<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d\\n&quot;</span><span class="token punctuation">,</span>A<span class="token punctuation">,</span>B<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;P1\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//	P1=10；         //error 符号常量P1不能被赋值</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d\\n&quot;</span><span class="token punctuation">,</span>A<span class="token punctuation">,</span>B<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-标识符命名规范" tabindex="-1"><a class="header-anchor" href="#_15-标识符命名规范" aria-hidden="true">#</a> 15.标识符命名规范</h2><blockquote><p>在程序中使用的变量名、函数名、宏名等统称为<strong>标识符</strong>。 除库函数的函数名由系统指定外，其余都由用户自定义。C规定，标识符只能是字母、数字、下划线(_)组成的字符串，并且其第一个字符必须是字母或下划线。</p></blockquote><ol><li>标识符不能和C语言的关键字相同，也不能和用户自定义的函数或C语言库函数重名。</li><li>不同的C语言编译器对标识符的长度规定不同。</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
(1)变量的作用域，就看变量直接隶属于哪个&quot;花括号&quot;，那么其作用域就是从定义域开始，到这个&quot;花括号&quot;的末尾结束。
(2)同个&quot;花括号&quot;中不可以&quot;直接&quot;定义重名变量。
(3)在文件中的某一处引用重名变量时，所引用的变量就是作用域较小的那一个变量。
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> a <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">//int a;    error 注意事项(2)</span>
<span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//函数声明中的形式参数变量名，无作用域</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>


	<span class="token keyword">int</span> a <span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>     <span class="token comment">//注意事项(3)</span>

<span class="token comment">//      int a;    error 注意事项(2)</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">//              int a;    error 注意事项(2)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token comment">//      int a;    error 注意事项(2)</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),i=[p];function c(o,l){return s(),a("div",null,i)}const d=n(e,[["render",c],["__file","design-4.html.vue"]]);export{d as default};
