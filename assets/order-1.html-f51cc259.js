import{_ as a,V as t,W as e,Y as s,X as n}from"./framework-1e9ccf99.js";const p={},o=n(`<h2 id="_18-1轉義字符" tabindex="-1"><a class="header-anchor" href="#_18-1轉義字符" aria-hidden="true">#</a> 18.1轉義字符</h2><table><thead><tr><th>轉義字符</th><th>字符值</th><th>輸出結果</th><th>轉義字符</th><th>字符值</th><th>輸出結果</th></tr></thead><tbody><tr><td>\\&#39;</td><td>壹個單撇號(&#39;)</td><td>具有此8進制的字符</td><td>\\&quot;</td><td>壹個雙撇號(&quot;)</td><td>輸出此字符</td></tr><tr><td>?</td><td>壹個問號(?)</td><td>輸出此字符</td><td>\\\\</td><td>壹個反斜線(\\)</td><td>輸出此字符</td></tr><tr><td>\\a</td><td>警告</td><td>產生視覺或聲音信號</td><td>\\b</td><td>退格</td><td>將當前位置後退壹個字符</td></tr><tr><td><code>\\f</code></td><td>換頁</td><td>將當前位置移到下壹頁的開頭</td><td>\\n</td><td>換行</td><td>將當前位置移到下壹行的開頭</td></tr><tr><td><code>\\r</code></td><td>回車</td><td>將當前位置移到本行的開頭</td><td>\\t</td><td>水平制表符</td><td>將當前位置移到下壹個Tab位置</td></tr><tr><td>\\v</td><td>垂直制表符</td><td>將當前位置移到下壹個垂直制表對齊點</td><td>\\o、\\oo、\\ooo</td><td>ASCII碼</td><td></td></tr><tr><td>\\xh[h=……](16進制數字)</td><td>與該16進制碼對的ASCII字符</td><td>與該16進制碼對應的字符</td><td></td><td></td><td></td></tr></tbody></table><h2 id="_18-2字面常量" tabindex="-1"><a class="header-anchor" href="#_18-2字面常量" aria-hidden="true">#</a> 18.2字面常量</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
常量分類:
①字面常量(直接常量)：數值常量(分為整型常量和浮點型常量)，字符串常量和字符常量
②符號常量
③常變量
*/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;dio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//1.整型常量</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span><span class="token number">2355</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//2.浮點型常量</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%lf,%lf&quot;</span><span class="token punctuation">,</span><span class="token number">3.23</span><span class="token punctuation">,</span><span class="token number">3e-2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//3.字符串常量</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;%dsaxc\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//4.字符型常量</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c,%d\\n&quot;</span><span class="token punctuation">,</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c,%c,%c,%c\\n&quot;</span><span class="token punctuation">,</span><span class="token char">&#39;\\\\&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;\\&#39;&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;\\?&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;\\&quot;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;1111\\b\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;4444\\t5555\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\101 \\102 \\103\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\x41\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-3符號常量和常變量" tabindex="-1"><a class="header-anchor" href="#_18-3符號常量和常變量" aria-hidden="true">#</a> 18.3符號常量和常變量</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">P1</span> <span class="token expression"><span class="token number">3.14</span>    </span><span class="token comment">//1.符號常量 只存在於預編譯階段，編譯階段就不存在了。經過預編譯後，全部變為字面常量</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">ID</span> <span class="token expression"><span class="token number">101</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">CH</span> <span class="token char">&#39;A&#39;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">S</span> <span class="token string">&quot;haha&quot;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%lf,%d,%c,%s\\n&quot;</span><span class="token punctuation">,</span>P1<span class="token punctuation">,</span>ID<span class="token punctuation">,</span>CH<span class="token punctuation">,</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token keyword">int</span> a <span class="token operator">=</span><span class="token number">45</span><span class="token punctuation">;</span>   <span class="token comment">//2.常變量必須在定義的時候初始化，初始化之後其值不可以被修改</span>
<span class="token comment">//const int b;     error 因為定義常變量未指定初始值</span>
<span class="token comment">//a = 90;          error 因為常變量的值不可以被修改</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-4補碼" tabindex="-1"><a class="header-anchor" href="#_18-4補碼" aria-hidden="true">#</a> 18.4補碼</h2><blockquote><p>補碼：整型以補碼的形式存放</p></blockquote><blockquote><p>求壹個正整數的二進制：除以2，直至商為0，余數倒序排列。</p></blockquote><blockquote><p>壹個負數的補碼，先求其絕對值的補碼，然後該補碼所有位取反，所得之數最後加1</p></blockquote><blockquote><p>0的補碼，所有位全是0</p></blockquote><blockquote><p>在存放整型存儲單元中最左邊壹位是用來表示符號的。</p></blockquote><h3 id="n進制補碼的整數範圍" tabindex="-1"><a class="header-anchor" href="#n進制補碼的整數範圍" aria-hidden="true">#</a> n進制補碼的整數範圍</h3><table><thead><tr><th>進制</th><th>整數範圍</th></tr></thead><tbody><tr><td>2進制</td><td>-2^(2-1)~2*(2-1)-1</td></tr><tr><td>8進制</td><td>-2^(8-1)~2*(8-1)-1</td></tr><tr><td>16進制</td><td>-2^(15-1)~2*(15-1)-1</td></tr><tr><td>n進制</td><td>-2^(n-1)~2*(n-1)-1</td></tr></tbody></table><blockquote><p>只有整型(包括字符型)數據可以加<code>signed</code>或<code>uusigned</code>修飾符，實數型不能加，對無符號整型數據用<code>%u</code>格式輸出</p></blockquote><h3 id="整型數據常見的存儲空間和值的範圍" tabindex="-1"><a class="header-anchor" href="#整型數據常見的存儲空間和值的範圍" aria-hidden="true">#</a> 整型數據常見的存儲空間和值的範圍</h3><table><thead><th>字節數</th><th>類型</th><th>有符號的取值範圍</th></thead><tr><td>2</td><td>short,int</td><td>-2^15~2^15-1(-32768~32767)</td></tr><tr><td>4</td><td>int,long</td><td>-2^31~2^31-1</td></tr><tr><td>8</td><td>long,long</td><td>-2^63~2^63-1</td></tr><thead><th>字節數</th><th>類型</th><th>無符號的取值範圍</th></thead><tr><td>2</td><td>unsigned short,unsigned int</td><td>0~2^16-1</td></tr><tr><td>4</td><td>unsigned int,unsigned long</td><td>0~2^32-1</td></tr><tr><td>8</td><td>unsigned long,long</td><td>0~2^64-1</td></tr><tbody></tbody></table>`,17),c=n('<table><thead><th rowspan="2">類型</th><th colspan="3">格式聲明</th></thead><thead><th></th><th>十進制</th><th>八進制</th><th>十六進制(標紅為printf函數可用)</th></thead><tbody><tr><td>short</td><td>%hd,%hi</td><td>%ho</td><td>%hx,%hX,<span style="color:red;">%#hx,%#hX</span></td></tr><tr><td>int</td><td>%d,%i</td><td>%o</td><td>%x,%X,<span style="color:red;">%#x,%#X</span></td></tr><tr><td>long</td><td>%ld,%li</td><td>%lo</td><td>%lx,%hX,<span style="color:red;">%#lx,%#lX</span></td></tr><tr><td>long long</td><td>%lld,%lli</td><td>%llo</td><td>%llx,%llX,<span style="color:red;">%#llx,%#llX</span></td></tr><tr><td>unsigned short</td><td>%hu</td><td>%ho</td><td>%hx,%hX,<span style="color:red;">%#hx,%#hX</span></td></tr><tr><td>unsigned int</td><td>%u</td><td>%o</td><td>%x,%X,<span style="color:red;">%#x,%#X</span></td></tr><tr><td>unsigned long</td><td>%lu</td><td>%lo</td><td>%lx,%lX,<span style="color:red;">%#lx,%#lX</span></td></tr><tr><td>unsigned long long</td><td>%llu</td><td>%llo</td><td>%llx,%llX,<span style="color:red;">%#llx,%#llX</span></td></tr></tbody></table>',1),l=n(`<table><thead><th>類型</th><th>常量末尾所加符號(建議都大寫)</th></thead><tbody><tr><td>short</td><td rowspan="3">NONE</td></tr><tr><td>unsigned short</td></tr><tr><td>int</td></tr><tr><td>unsigned int</td><td>U,u</td></tr><tr><td>long</td><td>L,l</td></tr><tr><td>unsigned long</td><td>UL,ul,Ul,uL</td></tr><tr><td>long long</td><td>LL,ll,Ll,lL</td></tr><tr><td>unsigned long long</td><td>ULL,ull,Ull,UlL,uLL,uLl,ulL,</td></tr></tbody></table><h2 id="_18-5整型數據類型轉換" tabindex="-1"><a class="header-anchor" href="#_18-5整型數據類型轉換" aria-hidden="true">#</a> 18.5整型數據類型轉換</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//1.定義整型——帶符號整型 signed和int可以省略</span>
	<span class="token keyword">short</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> b <span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token keyword">long</span> c <span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">;</span>
	<span class="token keyword">long</span> <span class="token keyword">long</span> d <span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">;</span>     <span class="token comment">//可能會報錯</span>


	<span class="token comment">//2.定義整型——無符號類型 int可以省略</span>
	<span class="token keyword">unsigned</span> <span class="token keyword">short</span> e <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
	<span class="token keyword">unsigned</span> <span class="token keyword">int</span> f <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token keyword">unsigned</span> <span class="token keyword">long</span> g <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	
	<span class="token comment">//3.求壹個數據類型或者數值所占的字節符——使用sizeof運算符，註意它不是函數</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d,%d\\n&quot;</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">sizeof</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">//4.整型數據輸出10進制數，所使用的格式聲明</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%hd,%d,%ld\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">//等價於printf(&quot;%hi,%i,%li&quot;,a,b,c);</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%hu,%u,%lu\\n&quot;</span><span class="token punctuation">,</span>e<span class="token punctuation">,</span>f<span class="token punctuation">,</span>g<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">//5.整型數據輸出8進制或16進制數，所使用的格式聲明</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%o,%x,%X,%#x,%#X\\n&quot;</span><span class="token punctuation">,</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">123</span><span class="token punctuation">,</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">//6.scanf函數中不可以使用帶&quot;#&quot;的格式字符</span>

<span class="token comment">//	scanf(&quot;%#x&quot;,&amp;b);     error 報錯</span>

	<span class="token comment">//7.隱式數據類型轉換——長賦短，截斷</span>
	<span class="token keyword">unsigned</span> <span class="token keyword">short</span> us <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%hu,m%hd\\n&quot;</span><span class="token punctuation">,</span>us<span class="token punctuation">,</span>us<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">//8.隱式數據類型轉換——”無符號“賦長，先把&quot;短的&quot;全部復制到&quot;長的&quot;低幾位，高幾位填0</span>
	<span class="token keyword">unsigned</span> <span class="token keyword">int</span> ui <span class="token operator">=</span>us<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%u\\n,ui&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">//9.隱式數據類型轉換——帶符短賦給長，先把”短的“內容復制到&quot;長的&quot;低幾位，如果&quot;短的&quot;是自然數，&quot;長的&quot;高幾位填0，如果&quot;短的&quot;是負數，&quot;長的&quot;高幾位填1</span>
	<span class="token keyword">short</span> ss <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	ui<span class="token operator">=</span>ss<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%u\\n&quot;</span><span class="token punctuation">,</span>ui<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	ss<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	ui<span class="token operator">=</span>ss<span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%u\\n&quot;</span><span class="token punctuation">,</span>ui<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">//10.隱式數據類型轉換——等長，則保留原有補碼</span>
	ui<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%u\\n&quot;</span><span class="token punctuation">,</span>ui<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">//11.整型常量——顯示數據類型轉換</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%u,%ld,%lu\\n&quot;</span><span class="token punctuation">,</span><span class="token number">1U</span><span class="token punctuation">,</span><span class="token number">1L</span><span class="token punctuation">,</span><span class="token number">1UL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">//12.整型數據的強制數據類型轉換——(數據類型)該處的括號為強制類型轉換符，是壹個單目運算符</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%hu,%d\\n&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">short</span><span class="token punctuation">)</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>ui<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function i(d,u){return t(),e("div",null,[o,s(" ### printf與scanf函數不同進制格式聲明 "),c,s(" ### 整型常量的類型轉換 "),l])}const k=a(p,[["render",i],["__file","order-1.html.vue"]]);export{k as default};