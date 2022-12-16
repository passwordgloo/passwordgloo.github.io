import{_ as n,V as s,W as a,X as t}from"./framework-1e9ccf99.js";const p={},o=t(`<h2 id="_77-文件的基本概念" tabindex="-1"><a class="header-anchor" href="#_77-文件的基本概念" aria-hidden="true">#</a> 77.文件的基本概念</h2><h3 id="文件分类" tabindex="-1"><a class="header-anchor" href="#文件分类" aria-hidden="true">#</a> 文件分类</h3><h4 id="程序文件" tabindex="-1"><a class="header-anchor" href="#程序文件" aria-hidden="true">#</a> 程序文件</h4><blockquote><p>这种文件的内容是程序代码，如源程序文件，目标文件，可执行文件等</p></blockquote><h4 id="数据文件" tabindex="-1"><a class="header-anchor" href="#数据文件" aria-hidden="true">#</a> 数据文件</h4><blockquote><p>其内容不是程序，而是供程序运行时读写的数据 终端即计算机的各种输入输出设备。操作系统把终端都统一作为文件看待 一个文件要有唯一的文件标识，文件标识包括3个部分： ①文件路径 ②文件名主干 ③文件后缀 数据文件分类：ASCII(文本文件)和二进制文件(镜像文件)</p></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token string">&quot;H:/Java/Dos命令.txt&quot;</span><span class="token punctuation">;</span>
	FILE <span class="token operator">*</span>fp <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>               
	<span class="token keyword">if</span><span class="token punctuation">(</span>fp <span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;文件打开失败，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	FILE <span class="token operator">*</span>fp2 <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;H:\\\\Dos命令2.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>fp2 <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;文件打开失败，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">char</span> ch<span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ch <span class="token operator">=</span> <span class="token function">fgetc</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span><span class="token constant">EOF</span><span class="token punctuation">)</span>
		<span class="token function">fputc</span><span class="token punctuation">(</span>ch<span class="token punctuation">,</span>fp2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>fp2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_78-读入文件并输出指定位置" tabindex="-1"><a class="header-anchor" href="#_78-读入文件并输出指定位置" aria-hidden="true">#</a> 78.读入文件并输出指定位置</h2><table><thead><tr><th>文件使用方式</th><th>含义</th><th>如果指定文件不存在</th></tr></thead><tbody><tr><td>&quot;r&quot;(只读)</td><td>为了输出数据，打开一个已存在的文本文件</td><td>出错</td></tr><tr><td>&quot;w&quot;(只写)</td><td>为了输出数据，打开一个文本文件</td><td>建立新文件</td></tr><tr><td>&quot;a&quot;(追加)</td><td>向文本文件末尾添加数据</td><td>建立新文件</td></tr><tr><td>&quot;rb&quot;(只读)</td><td>为了输出数据，打开一个二进制文件</td><td>出错</td></tr><tr><td>&quot;wb&quot;(只写)</td><td>为了输出数据，打开一个二进制文件</td><td>建立新文件</td></tr><tr><td>&quot;ab&quot;(追加)</td><td>向二进制文件末尾添加数据</td><td>建立新文件</td></tr><tr><td>&quot;r+&quot;(读写)</td><td>为了读和写，打开一个文本文件</td><td>出错</td></tr><tr><td>&quot;w+&quot;(读写)</td><td>为了读和写，新建一个文本文件</td><td>建立新文件</td></tr><tr><td>&quot;a+&quot;(读写)</td><td>为了读和写，打开一个文本文件</td><td>建立新文件</td></tr><tr><td>&quot;rb+&quot;(读写)</td><td>为了读和写，打开一个二进制文件</td><td>出错</td></tr><tr><td>&quot;wb+(读写)&quot;</td><td>为了读和写。新建的二进制文件</td><td>建立新文件</td></tr><tr><td>&quot;ab+(读写)&quot;</td><td>为了读和写，打开了一个二进制文件</td><td>建立新文件</td></tr></tbody></table><blockquote><p>不带b，操作的是文本文件，带b操作的是二进制文件，带+是读写；如果指定文件不存在，只有带r的才会出错</p></blockquote><blockquote><p>带w的，若文件存在则文件长度为0，即该文件内容消失，若该文件不存在则建立该文件</p></blockquote><blockquote><p>对一个文件进行读和写，读到或者写到哪一个位置，是通过“文件位置标记”实现的</p></blockquote><blockquote><p>带r和带w的，文件位置标记都是在文件的开头位置；如果我们想对一个文件添加数据，就使用带a的，文件位置标记会在文件的末尾位置</p></blockquote><blockquote><p>如果fopen不能打开文件，其返回值为NULL</p></blockquote><blockquote><p>有的c编译系统可能不能完全提供上述表格的功能，有的会用&quot;rw&quot;,&quot;wr&quot;,&quot;ar&quot;替代&quot;r+&quot;,&quot;w+&quot;,&quot;a+</p></blockquote><blockquote><p>程序中可以使用三个标准流文件——标准输入流、标准输出流、标准出错输入流</p></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> a<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	FILE <span class="token operator">*</span>fp <span class="token operator">=</span><span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;H:\\\\Java\\\\Dos命令.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>fp <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件失败，程序退出&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>


	<span class="token comment">//打开的文件输出到屏幕上</span>
	<span class="token function">fgets</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//程序第一次调用该句，a数数读到换行符时，fgets函数结束读入</span>
	<span class="token function">fputs</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token constant">stdout</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token function">fgets</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//程序第二次调用该句，a数组遇到最大容纳有效字符的格式9时，gets函数结束读入</span>
	<span class="token function">fputs</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token constant">stdout</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token function">fgets</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//程序第三次调用该句，a数组读到文件末尾，gets函数结束读入</span>
	<span class="token function">fputs</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token constant">stdout</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">putchar</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">//键盘输入的数据使用fgets和fputs输出到屏幕上</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token function">fgets</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token constant">stdin</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>   <span class="token comment">//windows系统下，在新的一行(切机)按下ctrl+z回车，就会输入文件结束标志EOF</span>
		<span class="token function">fputs</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token constant">stdout</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>fp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	fp<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>              <span class="token comment">//最好将一个使用完毕的指针赋值为NULL,避免野指针的出现</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

## 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_79-向文件读写一个字符串" tabindex="-1"><a class="header-anchor" href="#_79-向文件读写一个字符串" aria-hidden="true">#</a> 79.向文件读写一个字符串</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	FILE <span class="token operator">*</span> p1 <span class="token operator">=</span><span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;H:/Java/Dos命令.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p1 <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;文件打开失败，程序结束\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	FILE <span class="token operator">*</span> p2 <span class="token operator">=</span><span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;H:\\\\Java\\\\Dos命令3.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p2 <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;文件打开失败，程序结束\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_80-用格式化的方式读写文件" tabindex="-1"><a class="header-anchor" href="#_80-用格式化的方式读写文件" aria-hidden="true">#</a> 80.用格式化的方式读写文件</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> 
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">double</span> score<span class="token punctuation">;</span>
<span class="token punctuation">}</span>Stu<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	Stu a<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span><span class="token number">56.3</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&quot;十分&quot;</span><span class="token punctuation">,</span><span class="token number">99</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span><span class="token number">34</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	FILE <span class="token operator">*</span>p1<span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;H:/Java/Dos命令4.abc&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;wb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p1 <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件失败，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">fwrite</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Stu<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s%.1lf\\n&quot;</span><span class="token punctuation">,</span>a<span class="token operator">-&gt;</span>name<span class="token punctuation">,</span>a<span class="token operator">-&gt;</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	p1 <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;H:/Java/Dos命令4.abc&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;rb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>p1 <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件失败，程序退出\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	Stu b<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token function">fread</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>Stu<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">3</span><span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;第%d个学生的姓名：&amp;s，成绩：%.1lf\\n&quot;</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),c=[o];function e(u,i){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","file-1.html.vue"]]);export{k as default};