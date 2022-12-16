import{_ as n,V as s,W as a,X as t}from"./framework-1e9ccf99.js";const p={},o=t(`<h2 id="_77-文件的基本概念" tabindex="-1"><a class="header-anchor" href="#_77-文件的基本概念" aria-hidden="true">#</a> 77.文件的基本概念</h2><h3 id="文件分類" tabindex="-1"><a class="header-anchor" href="#文件分類" aria-hidden="true">#</a> 文件分類</h3><h4 id="程序文件" tabindex="-1"><a class="header-anchor" href="#程序文件" aria-hidden="true">#</a> 程序文件</h4><blockquote><p>這種文件的內容是程序代碼，如源程序文件，目標文件，可執行文件等</p></blockquote><h4 id="數據文件" tabindex="-1"><a class="header-anchor" href="#數據文件" aria-hidden="true">#</a> 數據文件</h4><blockquote><p>其內容不是程序，而是供程序運行時讀寫的數據 終端即計算機的各種輸入輸出設備。操作系統把終端都統壹作為文件看待 壹個文件要有唯壹的文件標識，文件標識包括3個部分： ①文件路徑 ②文件名主幹 ③文件後綴 數據文件分類：ASCII(文本文件)和二進制文件(鏡像文件)</p></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token string">&quot;H:/Java/Dos命令.txt&quot;</span><span class="token punctuation">;</span>
	FILE <span class="token operator">*</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>               
	<span class="token keyword">if</span><span class="token punctuation">(</span>fp <span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;文件打開失敗，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	FILE <span class="token operator">*</span>fp2 <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;H:\\\\Dos命令2.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>fp2 <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;文件打開失敗，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">char</span> ch<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ch <span class="token operator">=</span> <span class="token function">fgetc</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span><span class="token constant">EOF</span><span class="token punctuation">)</span>
		<span class="token function">fputc</span><span class="token punctuation">(</span>ch<span class="token punctuation">,</span>fp2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>fp2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_78-讀入文件並輸出指定位置" tabindex="-1"><a class="header-anchor" href="#_78-讀入文件並輸出指定位置" aria-hidden="true">#</a> 78.讀入文件並輸出指定位置</h2><table><thead><tr><th>文件使用方式</th><th>含義</th><th>如果指定文件不存在</th></tr></thead><tbody><tr><td>&quot;r&quot;(只讀)</td><td>為了輸出數據，打開壹個已存在的文本文件</td><td>出錯</td></tr><tr><td>&quot;w&quot;(只寫)</td><td>為了輸出數據，打開壹個文本文件</td><td>建立新文件</td></tr><tr><td>&quot;a&quot;(追加)</td><td>向文本文件末尾添加數據</td><td>建立新文件</td></tr><tr><td>&quot;rb&quot;(只讀)</td><td>為了輸出數據，打開壹個二進制文件</td><td>出錯</td></tr><tr><td>&quot;wb&quot;(只寫)</td><td>為了輸出數據，打開壹個二進制文件</td><td>建立新文件</td></tr><tr><td>&quot;ab&quot;(追加)</td><td>向二進制文件末尾添加數據</td><td>建立新文件</td></tr><tr><td>&quot;r+&quot;(讀寫)</td><td>為了讀和寫，打開壹個文本文件</td><td>出錯</td></tr><tr><td>&quot;w+&quot;(讀寫)</td><td>為了讀和寫，新建壹個文本文件</td><td>建立新文件</td></tr><tr><td>&quot;a+&quot;(讀寫)</td><td>為了讀和寫，打開壹個文本文件</td><td>建立新文件</td></tr><tr><td>&quot;rb+&quot;(讀寫)</td><td>為了讀和寫，打開壹個二進制文件</td><td>出錯</td></tr><tr><td>&quot;wb+(讀寫)&quot;</td><td>為了讀和寫。新建的二進制文件</td><td>建立新文件</td></tr><tr><td>&quot;ab+(讀寫)&quot;</td><td>為了讀和寫，打開了壹個二進制文件</td><td>建立新文件</td></tr></tbody></table><blockquote><p>不帶b，操作的是文本文件，帶b操作的是二進制文件，帶+是讀寫；如果指定文件不存在，只有帶r的才會出錯</p></blockquote><blockquote><p>帶w的，若文件存在則文件長度為0，即該文件內容消失，若該文件不存在則建立該文件</p></blockquote><blockquote><p>對壹個文件進行讀和寫，讀到或者寫到哪壹個位置，是通過“文件位置標記”實現的</p></blockquote><blockquote><p>帶r和帶w的，文件位置標記都是在文件的開頭位置；如果我們想對壹個文件添加數據，就使用帶a的，文件位置標記會在文件的末尾位置</p></blockquote><blockquote><p>如果fopen不能打開文件，其返回值為NULL</p></blockquote><blockquote><p>有的c編譯系統可能不能完全提供上述表格的功能，有的會用&quot;rw&quot;,&quot;wr&quot;,&quot;ar&quot;替代&quot;r+&quot;,&quot;w+&quot;,&quot;a+</p></blockquote><blockquote><p>程序中可以使用三個標準流文件——標準輸入流、標準輸出流、標準出錯輸入流</p></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> a<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	FILE <span class="token operator">*</span>fp <span class="token operator">=</span><span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;H:\\\\Java\\\\Dos命令.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>fp <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打開文件失敗，程序退出&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>


	<span class="token comment">//打開的文件輸出到屏幕上</span>
	<span class="token function">fgets</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//程序第壹次調用該句，a數數讀到換行符時，fgets函數結束讀入</span>
	<span class="token function">fputs</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token constant">stdout</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token function">fgets</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//程序第二次調用該句，a數組遇到最大容納有效字符的格式9時，gets函數結束讀入</span>
	<span class="token function">fputs</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token constant">stdout</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token function">fgets</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//程序第三次調用該句，a數組讀到文件末尾，gets函數結束讀入</span>
	<span class="token function">fputs</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token constant">stdout</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">putchar</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">//鍵盤輸入的數據使用fgets和fputs輸出到屏幕上</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token function">fgets</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token constant">stdin</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>   <span class="token comment">//windows系統下，在新的壹行(切機)按下ctrl+z回車，就會輸入文件結束標誌EOF</span>
		<span class="token function">fputs</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token constant">stdout</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	fp<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>              <span class="token comment">//最好將壹個使用完畢的指針賦值為NULL,避免野指針的出現</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_79-向文件讀寫壹個字符串" tabindex="-1"><a class="header-anchor" href="#_79-向文件讀寫壹個字符串" aria-hidden="true">#</a> 79.向文件讀寫壹個字符串</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	FILE <span class="token operator">*</span> p1 <span class="token operator">=</span><span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;H:/Java/Dos命令.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p1 <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;文件打開失敗，程序結束\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	FILE <span class="token operator">*</span> p2 <span class="token operator">=</span><span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;H:\\\\Java\\\\Dos命令3.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p2 <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;文件打開失敗，程序結束\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">int</span> a<span class="token punctuation">;</span>
	<span class="token keyword">double</span> b<span class="token punctuation">;</span>
	<span class="token keyword">char</span> c <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token function">fscanf</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span><span class="token string">&quot;%d%lf%s&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fprintf</span><span class="token punctuation">(</span>p2<span class="token punctuation">,</span><span class="token string">&quot;%d\\n%.llf\\n%s&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	p1 <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
	p2 <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_80-用格式化的方式讀寫文件" tabindex="-1"><a class="header-anchor" href="#_80-用格式化的方式讀寫文件" aria-hidden="true">#</a> 80.用格式化的方式讀寫文件</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> 
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">double</span> score<span class="token punctuation">;</span>
<span class="token punctuation">}</span>Stu<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	Stu a<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">&quot;張三&quot;</span><span class="token punctuation">,</span><span class="token number">56.3</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&quot;十分&quot;</span><span class="token punctuation">,</span><span class="token number">99</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span><span class="token number">34</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	FILE <span class="token operator">*</span>p1<span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;H:/Java/Dos命令4.abc&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;wb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p1 <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打開文件失敗，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">fwrite</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Stu<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s%.1lf\\n&quot;</span><span class="token punctuation">,</span>a<span class="token operator">-&gt;</span>name<span class="token punctuation">,</span>a<span class="token operator">-&gt;</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	p1 <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;H:/Java/Dos命令4.abc&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;rb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p1 <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打開文件失敗，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	Stu b<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token function">fread</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Stu<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">3</span><span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;第%d個學生的姓名：&amp;s，成績：%.1lf\\n&quot;</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),c=[o];function e(u,i){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","file-1.html.vue"]]);export{k as default};