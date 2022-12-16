import{_ as n,V as s,W as a,X as t}from"./framework-1e9ccf99.js";const p={},e=t(`<h2 id="_1-最簡單的c語言程序" tabindex="-1"><a class="header-anchor" href="#_1-最簡單的c語言程序" aria-hidden="true">#</a> 1.最簡單的C語言程序</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;C programme\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-基本格式-1" tabindex="-1"><a class="header-anchor" href="#_2-基本格式-1" aria-hidden="true">#</a> 2.基本格式（1）</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span>                 <span class="token comment">//函數原型/首部  返回值類型·函數名·參數及參數類型   該處參數被稱為形式參數</span>
<span class="token punctuation">{</span>			     <span class="token comment">//2.函數體</span>
	<span class="token keyword">return</span> a<span class="token operator">*</span>a<span class="token punctuation">;</span>	     
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span>          <span class="token comment">//void 空類型</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token punctuation">;</span>             <span class="token comment">//如果函數沒有返回值，可以省略return</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//函數調用中的參數，稱為這個函數的實際參數，簡稱實參</span>
	<span class="token function">g</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-基本格式-2" tabindex="-1"><a class="header-anchor" href="#_3-基本格式-2" aria-hidden="true">#</a> 3.基本格式（2）</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token comment">/*                           //去掉註釋，程序編譯報錯，各個函數之間應該是平行的，壹個函數定義不能放在另壹個函數的函數體
void g(void)
{
	void h(int a)
{
	printf(&quot;%d\\n&quot;,a);
} 
	printf(&quot;2222\\n&quot;);
}
*/</span>
<span class="token keyword">void</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">//函數首部·分號 即函數聲明  可以擴展函數名作用域到此</span>
<span class="token keyword">void</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment">//函數聲明的形式變量可以省略</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>               <span class="token comment">//main函數位置任意，但c99建議放在開頭</span>
<span class="token punctuation">{</span>
	<span class="token function">f9</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                    <span class="token comment">//不會執行</span>
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
	<span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                     <span class="token comment">//h函數的定義必須在g函數的定義域內，因為h函數有g函數的調用</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-求兩個整數的和" tabindex="-1"><a class="header-anchor" href="#_4-求兩個整數的和" aria-hidden="true">#</a> 4.求兩個整數的和</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>sum<span class="token punctuation">;</span>
	a<span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">;</span>
	b<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
	sum<span class="token operator">=</span>a<span class="token operator">+</span>b<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;sum is %d\\n&quot;</span><span class="token punctuation">,</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-1求兩個整數最大值" tabindex="-1"><a class="header-anchor" href="#_5-1求兩個整數最大值" aria-hidden="true">#</a> 5.1求兩個整數最大值</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span><span class="token keyword">int</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">//對被調用函數max的聲明</span>
	<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;請輸入兩個整數\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">//輸入a,b</span>
	c<span class="token operator">=</span><span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>                    <span class="token comment">//調用函數max，將值賦給c</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;max=%d\\n&quot;</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">//10進制輸出c</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span><span class="token keyword">int</span> y<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> z<span class="token punctuation">;</span>                         <span class="token comment">//max函數聲明，定義整型變量z</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&gt;</span>y<span class="token punctuation">)</span>z<span class="token operator">=</span>x<span class="token punctuation">;</span>                    <span class="token comment">//如果x&gt;y,將x值賦給z</span>
	<span class="token keyword">else</span> z<span class="token operator">=</span>y<span class="token punctuation">;</span>                      <span class="token comment">//否則將y的值賦給z</span>
	<span class="token keyword">return</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>                     <span class="token comment">//返回到調用max函數位置</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-2求兩個數最大值" tabindex="-1"><a class="header-anchor" href="#_5-2求兩個數最大值" aria-hidden="true">#</a> 5.2求兩個數最大值</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span>                    <span class="token comment">//printf和scanf函數聲明在stdio.h裏</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">double</span> a<span class="token punctuation">,</span>b<span class="token punctuation">;</span>                       <span class="token comment">//double浮點型數據類型</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;請輸入兩個數\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%lf%lf,&amp;a,&amp;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//&amp;取地址</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a is %lf,b is %lf&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//%lf是在對壹個浮點型數據進行格式輸入輸出所用到的格式說明符</span>
	<span class="token comment">/*                                方法1
	if(a &gt;= b)                        //表達式是數字和運算符的組合
		printf(&quot;a是最大值，其值為:%lf\\n&quot;,a);
	else
		printf(&quot;b是最大值，其值為:%lf\\n&quot;,b);
	*/</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span>                         <span class="token comment">//方法2</span>
		a <span class="token operator">=</span> b<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;最大值為:%lf\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-scanf函數與printf函數" tabindex="-1"><a class="header-anchor" href="#_6-scanf函數與printf函數" aria-hidden="true">#</a> 6.scanf函數與printf函數</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;haha\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//printf函數的返回值為整型，會把所輸出的字符個數返回</span>

<span class="token comment">/*輸出
	haha
	5
*/</span>
	<span class="token keyword">int</span> a<span class="token punctuation">,</span>b<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//scanf函數的會返回其按照正確格式輸入的變量的個數</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-給定分數判斷成績是否合格" tabindex="-1"><a class="header-anchor" href="#_7-給定分數判斷成績是否合格" aria-hidden="true">#</a> 7.給定分數判斷成績是否合格</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">double</span> a<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;請輸入妳的成績：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//增強程序界面友好性</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%lf&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*方法1*/</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">&lt;</span><span class="token number">0</span> <span class="token operator">||</span> a<span class="token operator">&gt;=</span><span class="token number">100</span><span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;成績不可能\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a<span class="token operator">&lt;</span><span class="token number">60</span><span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;成績不及格\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">&gt;=</span><span class="token number">60</span> <span class="token operator">&amp;&amp;</span> a<span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;成績合格\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*方法2
	if(a&lt;0 || a&gt;=100)
		printf(&quot;成績不可能\\n&quot;);
	else
	{
		if(a&lt;60)
		printgf(&quot;成績不及格\\n&quot;);
		else
			printf(&quot;成績及格\\n&quot;);	
	}
	return 0;
/*

/*方法3
	if(a&lt;0 || a&gt;100)
		printf(&quot;成績不可能\\n&quot;);
	else if(a&lt;60)
		printf(&quot;成績不及格\\n&quot;);
	else
		printf(&quot;成績及格\\n&quot;);
	return 0;*/</span>
<span class="token punctuation">}</span>
<span class="token comment">//壹個if語句中有且只有壹個if，else if可以有多個，else語句至多只能有壹個</span>

## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-if語句" tabindex="-1"><a class="header-anchor" href="#_8-if語句" aria-hidden="true">#</a> 8.if語句</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d\\n&quot;</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token operator">&gt;</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token operator">&lt;</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//輸出1，0</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>                          <span class="token comment">//表達式值為0,為假，表達式值為非0值，為真</span>
	<span class="token punctuation">{</span>                              <span class="token comment">//if語句中，控制語句如果為多句，需要加上壹個花括號</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;hero\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
 		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;英雄\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span>                           <span class="token comment">//多個if語句同時使用時，else屬於緊挨著它上面的if語句</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;拉拉\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-scanf函數註意事項" tabindex="-1"><a class="header-anchor" href="#_9-scanf函數註意事項" aria-hidden="true">#</a> 9.scanf函數註意事項</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
（1）使用scanf函數輸入數據，按回車可以刷新鍵盤緩沖區的內容，鍵盤緩沖區會有壹個換行字符
（2）scanf函數遇到錯誤會停止
（3) scanf函數的格式字符串中的字符分類：
1格式聲明(格式說明符)
2空白字符 換行、空格、tab鍵（\\n、&quot;&quot;、\\t），scanf函數會忽略1個或者多個空白符
3非空白字符---scanf函數剔除掉與這個非空白字符壹樣的字符
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">/*學習scanf函數註意事項（1）和（2)*/</span>
	<span class="token keyword">char</span> a<span class="token operator">=</span><span class="token char">&#39;A&#39;</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>


	<span class="token keyword">int</span> b<span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%c&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">==</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span>                             <span class="token comment">//==等於號 如果兩邊的表達式的值為真則整個表達式為真，否則為假</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a的值是壹個換行符\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//如果正確輸入b變量的值按下回車，則該句會被輸出</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>                       <span class="token comment">//如果b變量輸入格式錯誤，程序會將值賦給a</span>
	
	<span class="token comment">/*學習scanf函數註意事項（3）-2*/</span>
	<span class="token keyword">int</span> c<span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>                       <span class="token comment">//再次輸入c變量的值後只能輸入壹個錯誤值結束</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">/*學習scanf函數註意事項（3）-3*/</span>
	<span class="token keyword">int</span> d<span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;hero is %d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment">//若d的值為12，應當輸入hero is 12</span>
	
	<span class="token comment">/*學習scanf函數註意事項（4)*/</span>
	<span class="token keyword">int</span> e<span class="token punctuation">,</span>f<span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>e<span class="token punctuation">,</span><span class="token operator">&amp;</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a=%d,b=%d&quot;</span><span class="token punctuation">,</span>e<span class="token punctuation">,</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">//連續整數或浮點型數據，可以用空白符間隔</span>
	
	<span class="token keyword">char</span> ch1<span class="token punctuation">,</span>ch2<span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%c%c&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>ch1<span class="token punctuation">,</span><span class="token operator">&amp;</span>ch2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ch1 = %c,ch2 = %c\\n&quot;</span><span class="token punctuation">,</span>ch1<span class="token punctuation">,</span>ch2<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//char函數會記錄空白字符，輸入1個數據後不需要加空白字符</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),c=[e];function o(i,l){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","design-1.html.vue"]]);export{d as default};
