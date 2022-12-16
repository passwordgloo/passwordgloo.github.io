import{_ as n,V as s,W as a,X as t}from"./framework-1e9ccf99.js";const p={},e=t(`<h2 id="_10-初等運算符及單目運算符" tabindex="-1"><a class="header-anchor" href="#_10-初等運算符及單目運算符" aria-hidden="true">#</a> 10.初等運算符及單目運算符</h2><blockquote><ol><li>優先級、操作數、結合方向--初等運算符優先級為1，單目運算符優先級為2</li><li>只有單目運算符和賦值運算符的結合方向是自右往左的</li></ol></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//概念理解</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d\\n&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">2</span><span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//學習目標（2）</span>


	<span class="token comment">//！邏輯非運算符，求該操作數的邏輯反值，如果該操作數值為真，則整個表達式為假，否則整個表達式值為真</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d,%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">!</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">!</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//輸出0，0，1</span>
	
	<span class="token comment">//-負號運算符</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token operator">*</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">//乘號比負號的優先級低，括號可以省略</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-算術運算符及賦值運算符" tabindex="-1"><a class="header-anchor" href="#_11-算術運算符及賦值運算符" aria-hidden="true">#</a> 11.算術運算符及賦值運算符</h2><blockquote><p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="" loading="lazy">乘號，除號，取余運算符的優先級為3；加號，減號的優先級為4；賦值運算符的優先級為14.</p></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">//算術運算符</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%lf\\n&quot;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5.0</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
  <span class="token comment">/*輸出2，2.500000 除號運算符的操作數如果都為整型，那麽其結果也為整型。會省略掉商後面的小數部分*/</span>
	<span class="token keyword">int</span> a<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token operator">=</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d\\n&quot;</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token operator">%</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token operator">%</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">/*  printf(&quot;%d\\n&quot;,3.0%2);    報錯。取余運算符兩邊的操作數必須為整型，否則會報錯*/</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d,%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">13</span><span class="token operator">%</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token operator">%</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">12</span><span class="token operator">%</span><span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">//賦值運算符</span>
	<span class="token keyword">int</span> b<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>c<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>b<span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	 <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>c<span class="token operator">/=</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">//b+c=100;    錯誤，賦值運算符的左操作數比必須為壹個左值，非常數</span>
	
	<span class="token comment">//檢測賦值表達式是壹個常數還是壹個左值</span>
	a<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>c<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span>a <span class="token operator">=</span> b<span class="token punctuation">)</span><span class="token operator">=</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//輸出3</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-逗號-關系及邏輯運算符" tabindex="-1"><a class="header-anchor" href="#_12-逗號-關系及邏輯運算符" aria-hidden="true">#</a> 12.逗號，關系及邏輯運算符</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
學習目標：
(1)優先等級：逗號15(所有運算符中優先等級最低的)；邏輯與11，邏輯或12，不等於7，關系運算符(除了等於與不等於之外)6
(2)在c語言中，優先級並不完全決定運算順序；
1.只有4種運算符(&amp;&amp;,||,逗號，條件運算符)規定了運算順序，必須自左至右
2.操作數的求值順序，不同的編譯器可能有所不同---不要依賴任何不可移植的操作，應避免出現
(3)&amp;&amp;和||都先 計算左邊表達式的值，如果左邊表達式的值能夠確定整個表達式的值那麽右邊表達式的值就不會計算
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//逗號運算符</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">!=</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//逗號運算符輸出最右邊表達式的值</span>


	<span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	a<span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">(</span>a<span class="token operator">*=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//輸出2而不是1，學習目標(2)-1</span>
	
	<span class="token comment">//邏輯與運算符</span>
	a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token number">0</span><span class="token operator">&amp;&amp;</span><span class="token punctuation">(</span>a<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//輸出a的值為0，學習目標(2)-1</span>
	
	<span class="token comment">//邏輯或運算符</span>
	a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token number">1</span><span class="token operator">||</span><span class="token punctuation">(</span>a<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//輸出a的值為0，學習目標(3)及(2)-1</span>
	
	<span class="token comment">//學習目標(2)-2</span>
	a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token punctuation">(</span>a<span class="token operator">*=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-條件運算符" tabindex="-1"><a class="header-anchor" href="#_13-條件運算符" aria-hidden="true">#</a> 13.條件運算符</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
(1)條件運算符是c語言中唯壹的三目運算符，其優先級為13
(2)c語言中條件運算符的運算方向也是必須從左至右的
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token number">1</span><span class="token operator">?</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;哈哈\\n&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;呵呵\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">/*等價於
	if(1)
		printf(&quot;哈哈\\n&quot;);
	else
		printf(&quot;呵呵\\n&quot;);
	*/</span>


	<span class="token number">1</span><span class="token operator">?</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;1\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;2\\n&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;3\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;4\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//加上圓括號控制多個語句</span>
	<span class="token comment">/*等價於
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
	
	<span class="token number">1</span><span class="token operator">?</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;1\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;2\\n&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;3\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;4\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//不加圓括號會得到另壹個結果</span>
	<span class="token comment">/*等價於
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
	<span class="token comment">/*等價於
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
	<span class="token comment">/*等價於
	if(0)
		printf(&quot;A\\n&quot;);
	else if(0)
		printf(&quot;B\\n&quot;);
	else
		printf(&quot;C\\n&quot;);
	*/</span>
	
	<span class="token comment">//學習(2)</span>
	<span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token number">0</span><span class="token operator">?</span><span class="token punctuation">(</span>a<span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">;</span>     <span class="token comment">//程序會按照自左至右的順序計算該表達式，並不會按照優先級高低，先去計算括號裏面的</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//	0?return 0;printf(&quot;123\\n&quot;);  //error 表達式是數字和運算符的組合，return是關鍵字，所以return 0不是表達式</span>
<span class="token comment">//	0?int x:printf(&quot;123\\n&quot;);     //error int x不是表達式</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token operator">&gt;</span>b<span class="token operator">?</span>a<span class="token operator">:</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//如果a&gt;b成立，輸出a，否則輸出b</span>
<span class="token comment">//等價於  a&gt;b?printf(&quot;%d\\n&quot;,a):printf(&quot;%d\\n&quot;,b);</span>
<span class="token comment">/*等價於上壹句
	if(a&gt;b)
		printf(&quot;%d\\n&quot;,a);
	else
		printf(&quot;%d\\n&quot;,b);
*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>序號</th><th>關鍵字</th><th>備註</th><th>序號</th><th>關鍵字</th><th>備註</th></tr></thead><tbody><tr><td>1</td><td>auto</td><td></td><td>2</td><td>break</td><td></td></tr><tr><td>3</td><td>case</td><td></td><td>4</td><td>char</td><td></td></tr><tr><td>5</td><td>const</td><td></td><td>6</td><td>continue</td><td></td></tr><tr><td>7</td><td>default</td><td></td><td>8</td><td>do</td><td></td></tr><tr><td>9</td><td>double</td><td></td><td>10</td><td>else</td><td></td></tr><tr><td>11</td><td>enum</td><td></td><td>12</td><td>extern</td><td></td></tr><tr><td>13</td><td>float</td><td></td><td>14</td><td>for</td><td></td></tr><tr><td>15</td><td>goto</td><td></td><td>16</td><td>if</td><td></td></tr><tr><td>17</td><td><code>inline</code></td><td>C99新增</td><td>18</td><td>int</td><td></td></tr><tr><td>19</td><td>long</td><td></td><td>20</td><td><code>register</code></td><td>C99新增</td></tr><tr><td>21</td><td>restrict</td><td></td><td>22</td><td>return</td><td></td></tr><tr><td>23</td><td>short</td><td></td><td>24</td><td>signed</td><td></td></tr><tr><td>25</td><td>sizeof</td><td></td><td>26</td><td>static</td><td></td></tr><tr><td>27</td><td>struct</td><td></td><td>28</td><td>switch</td><td></td></tr><tr><td>29</td><td>typedef</td><td></td><td>30</td><td>union</td><td></td></tr><tr><td>31</td><td>unsigned</td><td></td><td>32</td><td>void</td><td></td></tr><tr><td>33</td><td>volatile</td><td></td><td>34</td><td>while</td><td></td></tr><tr><td>35</td><td><code>_bool</code></td><td>C99新增</td><td>36</td><td><code>_Complex</code></td><td>C99新</td></tr><tr><td>37</td><td><code>_Imaginary</code></td><td>C99新增</td><td></td><td></td><td></td></tr></tbody></table>`,11),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","design-3.html.vue"]]);export{d as default};
