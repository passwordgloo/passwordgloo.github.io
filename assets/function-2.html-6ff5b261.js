import{_ as n,V as s,W as a,X as t}from"./framework-1e9ccf99.js";const p={},e=t(`<h2 id="_57-extern用法-1" tabindex="-1"><a class="header-anchor" href="#_57-extern用法-1" aria-hidden="true">#</a> 57.extern用法(1)</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">extern</span> <span class="token keyword">int</span> A<span class="token punctuation">;</span>         <span class="token comment">//extern可以在文件内扩展一个全局变量的作用域，extern只能修饰全局变量</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>A<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> A <span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_58-extern用法-2" tabindex="-1"><a class="header-anchor" href="#_58-extern用法-2" aria-hidden="true">#</a> 58.extern用法(2)</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">extern</span> <span class="token keyword">int</span> A<span class="token punctuation">;</span>          <span class="token comment">//extern可以将全局变量的作用域扩展到其他文件①在不同的文件中不可以有重名的非静态的全局变量②编译时遇到extern先在本文件中搜寻</span>
<span class="token keyword">extern</span> <span class="token keyword">int</span> B<span class="token punctuation">;</span>
<span class="token keyword">extern</span> <span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>A<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//	pritnf(&quot;%d\\n&quot;,B); error因为B是静态外部变量，不可以在其他文件中通过变量名来引用它</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//可以通过指针间接的引用其他文件中的静态全局变量</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//static int A = 14;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_59-static局部变量" tabindex="-1"><a class="header-anchor" href="#_59-static局部变量" aria-hidden="true">#</a> 59.static局部变量</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//静态局部变量是在编译的时候初始化，即只复制一次，不会随函数调用结束后其存储单元自行消失</span>
<span class="token comment">//自动变量是在函数调用时赋初值的，调用一次，赋一次，调用结束后其存储单元就消失</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token keyword">static</span> <span class="token keyword">int</span> j<span class="token punctuation">;</span>            <span class="token comment">//如果定义静态局部变量的时候没有初始化，它将有一个默认值0</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d\\n&quot;</span><span class="token punctuation">,</span>i<span class="token operator">++</span><span class="token punctuation">,</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	p<span class="token operator">=</span><span class="token operator">&amp;</span>j<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token comment">//	printf(&quot;%d\\n&quot;,j);  error因为j的作用域不在此</span>
	<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//可以通过指针引用在其他函数定义的静态局部变量</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_60-1内部函数和外部函数" tabindex="-1"><a class="header-anchor" href="#_60-1内部函数和外部函数" aria-hidden="true">#</a> 60.1内部函数和外部函数</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//①在不同的文件中不可以有重名的外部函数定义②函数声明 先从本文件中寻找函数定义，找不到，再从其他文件中寻找外部函数的定义</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span> <span class="token comment">//因为f函数需要用到printf语句</span></span>
<span class="token keyword">extern</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">extern</span> <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//	g();  error 如果想正常运行该语句，g函数要么定义在本文中，那么是定义在其他文件的外部函数，我们不能企图调用一个来自其他文件中定义的内容</span>
	<span class="token punctuation">(</span><span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//可以通过函数的指针间接调用其它文件中定义的内部函数</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;1111\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_60-2变量的存储方式和生存期" tabindex="-1"><a class="header-anchor" href="#_60-2变量的存储方式和生存期" aria-hidden="true">#</a> 60.2变量的存储方式和生存期</h2><blockquote><p>变量的存在时间即生存期，在程序运行整个过程中都存在的变量是在内存大静态存储区存放的；有的变量则是在调用其所在的函数时才临时分配存储单元，调用结束后该存储单元被释放，这种变量是存放在内存的动态存储区的。</p></blockquote><table><thead><tr><th>关键词</th><th>可修饰变量类型</th><th>内存的存储位置</th></tr></thead><tbody><tr><td>auto(可省)</td><td>局部变量</td><td>动态存储区</td></tr><tr><td>register(好的编译器可自动优化，所以基本不用)</td><td>局部变量</td><td>动态存储区</td></tr><tr><td>extern(可省略数据类型名)</td><td>全局变量</td><td>静态存储区</td></tr><tr><td>static</td><td>局部变量，全局变量</td><td>静态存储区</td></tr></tbody></table><p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/warning.svg" alt="" loading="lazy">建立存储空间的声明是定义声明(如 int a;)，不需要建立存储空间的声明是引用声明</p><h2 id="_61-undef-extern小知识点" tabindex="-1"><a class="header-anchor" href="#_61-undef-extern小知识点" aria-hidden="true">#</a> 61.undef,extern小知识点</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">undef</span> <span class="token expression">AB</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">undef</span> <span class="token expression">AB        </span><span class="token comment">//可以终止同一个宏名的作用域，即使这个宏名没有被定义</span></span>
<span class="token keyword">extern</span> <span class="token keyword">int</span> a<span class="token punctuation">;</span>
<span class="token keyword">extern</span> <span class="token keyword">int</span> a<span class="token punctuation">;</span>    <span class="token comment">//可以多次扩展同一个全局变量的作用域，即使这个变量没有被定义</span>
<span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//可以多次扩展同一个函数的作用域，即使这个函数没有被定义</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_62-递归——求5的阶乘" tabindex="-1"><a class="header-anchor" href="#_62-递归——求5的阶乘" aria-hidden="true">#</a> 62.递归——求5的阶乘</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">==</span><span class="token number">1</span> <span class="token operator">||</span> a <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">&gt;</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> a<span class="token operator">*</span><span class="token function">f</span><span class="token punctuation">(</span>a<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span>
		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_63-递归求汉诺塔" tabindex="-1"><a class="header-anchor" href="#_63-递归求汉诺塔" aria-hidden="true">#</a> 63.递归求汉诺塔</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">char</span> a<span class="token punctuation">,</span><span class="token keyword">char</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;从%c柱子上往%c柱子上挪动一个圆盘\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">char</span> a<span class="token punctuation">,</span><span class="token keyword">char</span> b<span class="token punctuation">,</span><span class="token keyword">char</span> c<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">f</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">f</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">f</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&gt;</span><span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">g</span><span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>c<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">f</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">g</span><span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>b<span class="token punctuation">,</span>a<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>	
	<span class="token function">g</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token char">&#39;A&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;B&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),c=[e];function o(i,l){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","function-2.html.vue"]]);export{d as default};