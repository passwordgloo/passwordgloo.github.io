import{_ as n,V as s,W as a,X as t}from"./framework-1e9ccf99.js";const p={},e=t(`<h2 id="_10-初等运算符及单目运算符" tabindex="-1"><a class="header-anchor" href="#_10-初等运算符及单目运算符" aria-hidden="true">#</a> 10.初等运算符及单目运算符</h2><blockquote><ol><li>优先级、操作数、结合方向--初等运算符优先级为1，单目运算符优先级为2</li><li>只有单目运算符和赋值运算符的结合方向是自右往左的</li></ol></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//概念理解</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d\\n&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">2</span><span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//学习目标（2）</span>


	<span class="token comment">//！逻辑非运算符，求该操作数的逻辑反值，如果该操作数值为真，则整个表达式为假，否则整个表达式值为真</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d,%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">!</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">!</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//输出0，0，1</span>
	
	<span class="token comment">//-负号运算符</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token operator">*</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//乘号比负号的优先级低，括号可以省略</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-算术运算符及赋值运算符" tabindex="-1"><a class="header-anchor" href="#_11-算术运算符及赋值运算符" aria-hidden="true">#</a> 11.算术运算符及赋值运算符</h2><blockquote><p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">乘号，除号，取余运算符的优先级为3；加号，减号的优先级为4；赋值运算符的优先级为14.</p></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">//算术运算符</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%lf\\n&quot;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5.0</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
  <span class="token comment">/*输出2，2.500000 除号运算符的操作数如果都为整型，那么其结果也为整型。会省略掉商后面的小数部分*/</span>
	<span class="token keyword">int</span> a<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token operator">=</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d\\n&quot;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token operator">%</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token operator">%</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">/*  printf(&quot;%d\\n&quot;,3.0%2);    报错。取余运算符两边的操作数必须为整型，否则会报错*/</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d,%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">13</span><span class="token operator">%</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token operator">%</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">12</span><span class="token operator">%</span><span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">//赋值运算符</span>
	<span class="token keyword">int</span> b<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>c<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>b<span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	 <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>c<span class="token operator">/=</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">//b+c=100;    错误，赋值运算符的左操作数比必须为一个左值，非常数</span>
	
	<span class="token comment">//检测赋值表达式是一个常数还是一个左值</span>
	a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>c<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span>a <span class="token operator">=</span> b<span class="token punctuation">)</span><span class="token operator">=</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//输出3</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-逗号-关系及逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_12-逗号-关系及逻辑运算符" aria-hidden="true">#</a> 12.逗号，关系及逻辑运算符</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
学习目标：
(1)优先等级：逗号15(所有运算符中优先等级最低的)；逻辑与11，逻辑或12，不等于7，关系运算符(除了等于与不等于之外)6
(2)在c语言中，优先级并不完全决定运算顺序；
1.只有4种运算符(&amp;&amp;,||,逗号，条件运算符)规定了运算顺序，必须自左至右
2.操作数的求值顺序，不同的编译器可能有所不同---不要依赖任何不可移植的操作，应避免出现
(3)&amp;&amp;和||都先 计算左边表达式的值，如果左边表达式的值能够确定整个表达式的值那么右边表达式的值就不会计算
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//逗号运算符</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">!=</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//逗号运算符输出最右边表达式的值</span>


	<span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	a<span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">(</span>a<span class="token operator">*=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//输出2而不是1，学习目标(2)-1</span>
	
	<span class="token comment">//逻辑与运算符</span>
	a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token number">0</span><span class="token operator">&amp;&amp;</span><span class="token punctuation">(</span>a<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//输出a的值为0，学习目标(2)-1</span>
	
	<span class="token comment">//逻辑或运算符</span>
	a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token number">1</span><span class="token operator">||</span><span class="token punctuation">(</span>a<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//输出a的值为0，学习目标(3)及(2)-1</span>
	
	<span class="token comment">//学习目标(2)-2</span>
	a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token punctuation">(</span>a<span class="token operator">*=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-条件运算符" tabindex="-1"><a class="header-anchor" href="#_13-条件运算符" aria-hidden="true">#</a> 13.条件运算符</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
(1)条件运算符是c语言中唯一的三目运算符，其优先级为13
(2)c语言中条件运算符的运算方向也是必须从左至右的
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token number">1</span><span class="token operator">?</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;哈哈\\n&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;呵呵\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">/*等价于
	if(1)
		printf(&quot;哈哈\\n&quot;);
	else
		printf(&quot;呵呵\\n&quot;);
	*/</span>


	<span class="token number">1</span><span class="token operator">?</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;1\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;2\\n&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;3\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;4\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//加上圆括号控制多个语句</span>
	<span class="token comment">/*等价于
	if(1)
	{
		printf(&quot;1\\n&quot;);
		printf(&quot;2\\n&quot;);
	}
	else
	{
		printf(&quot;3\\n&quot;);
		printf(&quot;4\\n&quot;);
	}*/</span>
	
	<span class="token number">1</span><span class="token operator">?</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;1\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;2\\n&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;3\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;4\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//不加圆括号会得到另一个结果</span>
	<span class="token comment">/*等价于
	if(1)
	{
		printf(&quot;1\\n&quot;);
		printf(&quot;2\\n&quot;);
	}
	else
	{
		printf(&quot;3\\n&quot;);
	printf(&quot;4\\n&quot;);
	}*/</span>
	
	<span class="token number">0</span><span class="token operator">?</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;A\\n&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token number">0</span><span class="token operator">?</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;B\\n&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;C\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">/*等价于
	if(0)
		printf(&quot;A\\n&quot;);
	else
	{
		if(0)
			printf(&quot;B\\n&quot;);
		else
			printf(&quot;C\\n&quot;);
	}
	*/</span>	
	<span class="token comment">/*等价于
	if(0)
		printf(&quot;A\\n&quot;);
	else if(0)
		printf(&quot;B\\n&quot;);
	else
		printf(&quot;C\\n&quot;);
	*/</span>
	
	<span class="token comment">//学习(2)</span>
	<span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token number">0</span><span class="token operator">?</span><span class="token punctuation">(</span>a<span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">;</span>     <span class="token comment">//程序会按照自左至右的顺序计算该表达式，并不会按照优先级高低，先去计算括号里面的</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//	0?return 0;printf(&quot;123\\n&quot;);  //error 表达式是数字和运算符的组合，return是关键字，所以return 0不是表达式</span>
<span class="token comment">//	0?int x:printf(&quot;123\\n&quot;);     //error int x不是表达式</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token operator">&gt;</span>b<span class="token operator">?</span>a<span class="token operator">:</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//如果a&gt;b成立，输出a，否则输出b</span>
<span class="token comment">//等价于  a&gt;b?printf(&quot;%d\\n&quot;,a):printf(&quot;%d\\n&quot;,b);</span>
<span class="token comment">/*等价于上一句
	if(a&gt;b)
		printf(&quot;%d\\n&quot;,a);
	else
		printf(&quot;%d\\n&quot;,b);
*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>序号</th><th>关键字</th><th>备注</th><th>序号</th><th>关键字</th><th>备注</th></tr></thead><tbody><tr><td>1</td><td>auto</td><td></td><td>2</td><td>break</td><td></td></tr><tr><td>3</td><td>case</td><td></td><td>4</td><td>char</td><td></td></tr><tr><td>5</td><td>const</td><td></td><td>6</td><td>continue</td><td></td></tr><tr><td>7</td><td>default</td><td></td><td>8</td><td>do</td><td></td></tr><tr><td>9</td><td>double</td><td></td><td>10</td><td>else</td><td></td></tr><tr><td>11</td><td>enum</td><td></td><td>12</td><td>extern</td><td></td></tr><tr><td>13</td><td>float</td><td></td><td>14</td><td>for</td><td></td></tr><tr><td>15</td><td>goto</td><td></td><td>16</td><td>if</td><td></td></tr><tr><td>17</td><td><code>inline</code></td><td>C99新增</td><td>18</td><td>int</td><td></td></tr><tr><td>19</td><td>long</td><td></td><td>20</td><td><code>register</code></td><td>C99新增</td></tr><tr><td>21</td><td>restrict</td><td></td><td>22</td><td>return</td><td></td></tr><tr><td>23</td><td>short</td><td></td><td>24</td><td>signed</td><td></td></tr><tr><td>25</td><td>sizeof</td><td></td><td>26</td><td>static</td><td></td></tr><tr><td>27</td><td>struct</td><td></td><td>28</td><td>switch</td><td></td></tr><tr><td>29</td><td>typedef</td><td></td><td>30</td><td>union</td><td></td></tr><tr><td>31</td><td>unsigned</td><td></td><td>32</td><td>void</td><td></td></tr><tr><td>33</td><td>volatile</td><td></td><td>34</td><td>while</td><td></td></tr><tr><td>35</td><td><code>_bool</code></td><td>C99新增</td><td>36</td><td><code>_Complex</code></td><td>C99新</td></tr><tr><td>37</td><td><code>_Imaginary</code></td><td>C99新增</td><td></td><td></td><td></td></tr></tbody></table>`,11),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","design-3.html.vue"]]);export{d as default};
