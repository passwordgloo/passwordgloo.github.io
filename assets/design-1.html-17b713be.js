import{_ as n,V as s,W as a,X as t}from"./framework-1e9ccf99.js";const p={},e=t(`<h2 id="_1-最简单的c语言程序" tabindex="-1"><a class="header-anchor" href="#_1-最简单的c语言程序" aria-hidden="true">#</a> 1.最简单的C语言程序</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;C programme\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-基本格式-1" tabindex="-1"><a class="header-anchor" href="#_2-基本格式-1" aria-hidden="true">#</a> 2.基本格式（1）</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span>                 <span class="token comment">//函数原型/首部  返回值类型·函数名·参数及参数类型   该处参数被称为形式参数</span>
<span class="token punctuation">{</span>			     <span class="token comment">//2.函数体</span>
	<span class="token keyword">return</span> a<span class="token operator">*</span>a<span class="token punctuation">;</span>	     
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span>          <span class="token comment">//void 空类型</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token punctuation">;</span>             <span class="token comment">//如果函数没有返回值，可以省略return</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//函数调用中的参数，称为这个函数的实际参数，简称实参</span>
	<span class="token function">g</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-基本格式-2" tabindex="-1"><a class="header-anchor" href="#_3-基本格式-2" aria-hidden="true">#</a> 3.基本格式（2）</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token comment">/*                           //去掉注释，程序编译报错，各个函数之间应该是平行的，一个函数定义不能放在另一个函数的函数体
void g(void)
{
	void h(int a)
{
	printf(&quot;%d\\n&quot;,a);
} 
	printf(&quot;2222\\n&quot;);
}
*/</span>
<span class="token keyword">void</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">//函数首部·分号 即函数声明  可以扩展函数名作用域到此</span>
<span class="token keyword">void</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment">//函数声明的形式变量可以省略</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>               <span class="token comment">//main函数位置任意，但c99建议放在开头</span>
<span class="token punctuation">{</span>
	<span class="token function">f9</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    <span class="token comment">//不会执行</span>
	<span class="token function">h</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                     
	<span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;1111\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                     <span class="token comment">//h函数的定义必须在g函数的定义域内，因为h函数有g函数的调用</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-求两个整数的和" tabindex="-1"><a class="header-anchor" href="#_4-求两个整数的和" aria-hidden="true">#</a> 4.求两个整数的和</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>sum<span class="token punctuation">;</span>
	a<span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">;</span>
	b<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
	sum<span class="token operator">=</span>a<span class="token operator">+</span>b<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;sum is %d\\n&quot;</span><span class="token punctuation">,</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-1求两个整数最大值" tabindex="-1"><a class="header-anchor" href="#_5-1求两个整数最大值" aria-hidden="true">#</a> 5.1求两个整数最大值</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span><span class="token keyword">int</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">//对被调用函数max的声明</span>
	<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入两个整数\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">//输入a,b</span>
	c<span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>                    <span class="token comment">//调用函数max，将值赋给c</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;max=%d\\n&quot;</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">//10进制输出c</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span><span class="token keyword">int</span> y<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> z<span class="token punctuation">;</span>                         <span class="token comment">//max函数声明，定义整型变量z</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&gt;</span>y<span class="token punctuation">)</span>z<span class="token operator">=</span>x<span class="token punctuation">;</span>                    <span class="token comment">//如果x&gt;y,将x值赋给z</span>
	<span class="token keyword">else</span> z<span class="token operator">=</span>y<span class="token punctuation">;</span>                      <span class="token comment">//否则将y的值赋给z</span>
	<span class="token keyword">return</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>                     <span class="token comment">//返回到调用max函数位置</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-2求两个数最大值" tabindex="-1"><a class="header-anchor" href="#_5-2求两个数最大值" aria-hidden="true">#</a> 5.2求两个数最大值</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span>                    <span class="token comment">//printf和scanf函数声明在stdio.h里</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">double</span> a<span class="token punctuation">,</span>b<span class="token punctuation">;</span>                       <span class="token comment">//double浮点型数据类型</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入两个数\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%lf%lf,&amp;a,&amp;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//&amp;取地址</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a is %lf,b is %lf&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//%lf是在对一个浮点型数据进行格式输入输出所用到的格式说明符</span>
	<span class="token comment">/*                                方法1
	if(a &gt;= b)                        //表达式是数字和运算符的组合
		printf(&quot;a是最大值，其值为:%lf\\n&quot;,a);
	else
		printf(&quot;b是最大值，其值为:%lf\\n&quot;,b);
	*/</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span>                         <span class="token comment">//方法2</span>
		a <span class="token operator">=</span> b<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;最大值为:%lf\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-scanf函数与printf函数" tabindex="-1"><a class="header-anchor" href="#_6-scanf函数与printf函数" aria-hidden="true">#</a> 6.scanf函数与printf函数</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;haha\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//printf函数的返回值为整型，会把所输出的字符个数返回</span>

<span class="token comment">/*输出
	haha
	5
*/</span>
	<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//scanf函数的会返回其按照正确格式输入的变量的个数</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-给定分数判断成绩是否合格" tabindex="-1"><a class="header-anchor" href="#_7-给定分数判断成绩是否合格" aria-hidden="true">#</a> 7.给定分数判断成绩是否合格</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">double</span> a<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入你的成绩：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//增强程序界面友好性</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%lf&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*方法1*/</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">&lt;</span><span class="token number">0</span> <span class="token operator">||</span> a<span class="token operator">&gt;=</span><span class="token number">100</span><span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;成绩不可能\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a<span class="token operator">&lt;</span><span class="token number">60</span><span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;成绩不及格\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">&gt;=</span><span class="token number">60</span> <span class="token operator">&amp;&amp;</span> a<span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;成绩合格\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*方法2
	if(a&lt;0 || a&gt;=100)
		printf(&quot;成绩不可能\\n&quot;);
	else
	{
		if(a&lt;60)
		printgf(&quot;成绩不及格\\n&quot;);
		else
			printf(&quot;成绩及格\\n&quot;);	
	}
	return 0;
/*

/*方法3
	if(a&lt;0 || a&gt;100)
		printf(&quot;成绩不可能\\n&quot;);
	else if(a&lt;60)
		printf(&quot;成绩不及格\\n&quot;);
	else
		printf(&quot;成绩及格\\n&quot;);
	return 0;*/</span>
<span class="token punctuation">}</span>
<span class="token comment">//一个if语句中有且只有一个if，else if可以有多个，else语句至多只能有一个</span>

## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-if语句" tabindex="-1"><a class="header-anchor" href="#_8-if语句" aria-hidden="true">#</a> 8.if语句</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d\\n&quot;</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token operator">&gt;</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token operator">&lt;</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//输出1，0</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>                          <span class="token comment">//表达式值为0,为假，表达式值为非0值，为真</span>
	<span class="token punctuation">{</span>                              <span class="token comment">//if语句中，控制语句如果为多句，需要加上一个花括号</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;hero\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
 		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;英雄\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span>                           <span class="token comment">//多个if语句同时使用时，else属于紧挨着它上面的if语句</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;拉拉\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-scanf函数注意事项" tabindex="-1"><a class="header-anchor" href="#_9-scanf函数注意事项" aria-hidden="true">#</a> 9.scanf函数注意事项</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
（1）使用scanf函数输入数据，按回车可以刷新键盘缓冲区的内容，键盘缓冲区会有一个换行字符
（2）scanf函数遇到错误会停止
（3) scanf函数的格式字符串中的字符分类：
1格式声明(格式说明符)
2空白字符 换行、空格、tab键（\\n、&quot;&quot;、\\t），scanf函数会忽略1个或者多个空白符
3非空白字符---scanf函数剔除掉与这个非空白字符一样的字符
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">/*学习scanf函数注意事项（1）和（2)*/</span>
	<span class="token keyword">char</span> a<span class="token operator">=</span><span class="token char">&#39;A&#39;</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>


	<span class="token keyword">int</span> b<span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%c&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">==</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span>                             <span class="token comment">//==等于号 如果两边的表达式的值为真则整个表达式为真，否则为假</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a的值是一个换行符\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//如果正确输入b变量的值按下回车，则该句会被输出</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>                       <span class="token comment">//如果b变量输入格式错误，程序会将值赋给a</span>
	
	<span class="token comment">/*学习scanf函数注意事项（3）-2*/</span>
	<span class="token keyword">int</span> c<span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>                       <span class="token comment">//再次输入c变量的值后只能输入一个错误值结束</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">/*学习scanf函数注意事项（3）-3*/</span>
	<span class="token keyword">int</span> d<span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;hero is %d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment">//若d的值为12，应当输入hero is 12</span>
	
	<span class="token comment">/*学习scanf函数注意事项（4)*/</span>
	<span class="token keyword">int</span> e<span class="token punctuation">,</span>f<span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>e<span class="token punctuation">,</span><span class="token operator">&amp;</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a=%d,b=%d&quot;</span><span class="token punctuation">,</span>e<span class="token punctuation">,</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">//连续整数或浮点型数据，可以用空白符间隔</span>
	
	<span class="token keyword">char</span> ch1<span class="token punctuation">,</span>ch2<span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%c%c&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>ch1<span class="token punctuation">,</span><span class="token operator">&amp;</span>ch2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ch1 = %c,ch2 = %c\\n&quot;</span><span class="token punctuation">,</span>ch1<span class="token punctuation">,</span>ch2<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//char函数会记录空白字符，输入1个数据后不需要加空白字符</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),c=[e];function o(i,l){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","design-1.html.vue"]]);export{d as default};
