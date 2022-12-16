const n=JSON.parse('{"key":"v-a918da98","path":"/c/file-1.html","title":"对文件的输入输出（1）","lang":"zh-CN","frontmatter":{"title":"对文件的输入输出（1）","date":"2022-07-30T00:00:00.000Z","icon":"code","order":17,"description":"77.文件的基本概念 文件分类 程序文件 这种文件的内容是程序代码，如源程序文件，目标文件，可执行文件等 数据文件 其内容不是程序，而是供程序运行时读写的数据 终端即计算机的各种输入输出设备。操作系统把终端都统一作为文件看待 一个文件要有唯一的文件标识，文件标识包括3个部分： ①文件路径 ②文件名主干 ③文件后缀 数据文件分类：ASCII(文本文件)和二进制文件(镜像文件) #include &lt;stdio.h&gt; #include &lt;stdlib.h&gt; int main(void) { \\tchar name[50]= \\"H:/Java/Dos命令.txt\\"; \\tFILE *fp = fopen(name,\\"r\\"); \\tif(fp ==NULL) \\t{ \\t\\tprintf(\\"文件打开失败，程序退出\\\\n\\"); \\t\\texit(-1); \\t} \\tFILE *fp2 = fopen(\\"H:\\\\\\\\Dos命令2.txt\\",\\"w\\"); \\tif(fp2 == NULL) \\t{ \\t\\tprintf(\\"文件打开失败，程序退出\\\\n\\"); \\t\\texit(-1); \\t} \\tchar ch; \\twhile((ch = fgetc(fp)) !=EOF) \\t\\tfputc(ch,fp2); \\tfclose(fp); \\tfclose(fp2); \\treturn 0; }","head":[["meta",{"property":"og:url","content":"https://passwordgloo-github-io.vercel.app/c/file-1.html"}],["meta",{"property":"og:site_name","content":"麦田守望者文档库"}],["meta",{"property":"og:title","content":"对文件的输入输出（1）"}],["meta",{"property":"og:description","content":"77.文件的基本概念 文件分类 程序文件 这种文件的内容是程序代码，如源程序文件，目标文件，可执行文件等 数据文件 其内容不是程序，而是供程序运行时读写的数据 终端即计算机的各种输入输出设备。操作系统把终端都统一作为文件看待 一个文件要有唯一的文件标识，文件标识包括3个部分： ①文件路径 ②文件名主干 ③文件后缀 数据文件分类：ASCII(文本文件)和二进制文件(镜像文件) #include &lt;stdio.h&gt; #include &lt;stdlib.h&gt; int main(void) { \\tchar name[50]= \\"H:/Java/Dos命令.txt\\"; \\tFILE *fp = fopen(name,\\"r\\"); \\tif(fp ==NULL) \\t{ \\t\\tprintf(\\"文件打开失败，程序退出\\\\n\\"); \\t\\texit(-1); \\t} \\tFILE *fp2 = fopen(\\"H:\\\\\\\\Dos命令2.txt\\",\\"w\\"); \\tif(fp2 == NULL) \\t{ \\t\\tprintf(\\"文件打开失败，程序退出\\\\n\\"); \\t\\texit(-1); \\t} \\tchar ch; \\twhile((ch = fgetc(fp)) !=EOF) \\t\\tfputc(ch,fp2); \\tfclose(fp); \\tfclose(fp2); \\treturn 0; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"zh-TW"}],["meta",{"property":"article:published_time","content":"2022-07-30T00:00:00.000Z"}],["link",{"rel":"alternate","hreflang":"zh-tw","href":"https://passwordgloo-github-io.vercel.app/tw/c/file-1.html"}]]},"headers":[{"level":2,"title":"77.文件的基本概念","slug":"_77-文件的基本概念","link":"#_77-文件的基本概念","children":[{"level":3,"title":"文件分类","slug":"文件分类","link":"#文件分类","children":[]}]},{"level":2,"title":"78.读入文件并输出指定位置","slug":"_78-读入文件并输出指定位置","link":"#_78-读入文件并输出指定位置","children":[]},{"level":2,"title":"79.向文件读写一个字符串","slug":"_79-向文件读写一个字符串","link":"#_79-向文件读写一个字符串","children":[]},{"level":2,"title":"80.用格式化的方式读写文件","slug":"_80-用格式化的方式读写文件","link":"#_80-用格式化的方式读写文件","children":[]}],"git":{},"readingTime":{"minutes":4.25,"words":1275},"filePathRelative":"c/file-1.md","localizedDate":"2022年7月30日","excerpt":"<h2> 77.文件的基本概念</h2>\\n<h3> 文件分类</h3>\\n<h4> 程序文件</h4>\\n<blockquote>\\n<p>这种文件的内容是程序代码，如源程序文件，目标文件，可执行文件等</p>\\n</blockquote>\\n<h4> 数据文件</h4>\\n<blockquote>\\n<p>其内容不是程序，而是供程序运行时读写的数据\\n终端即计算机的各种输入输出设备。操作系统把终端都统一作为文件看待\\n一个文件要有唯一的文件标识，文件标识包括3个部分：\\n①文件路径 ②文件名主干 ③文件后缀\\n数据文件分类：ASCII(文本文件)和二进制文件(镜像文件)</p>\\n</blockquote>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;stdio.h&gt;</span></span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;stdlib.h&gt;</span></span>\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">void</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">char</span> name<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">50</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"H:/Java/Dos命令.txt\\"</span><span class=\\"token punctuation\\">;</span>\\n\\tFILE <span class=\\"token operator\\">*</span>fp <span class=\\"token operator\\">=</span> <span class=\\"token function\\">fopen</span><span class=\\"token punctuation\\">(</span>name<span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"r\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>               \\n\\t<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>fp <span class=\\"token operator\\">==</span><span class=\\"token constant\\">NULL</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"文件打开失败，程序退出\\\\n\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token function\\">exit</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\tFILE <span class=\\"token operator\\">*</span>fp2 <span class=\\"token operator\\">=</span> <span class=\\"token function\\">fopen</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"H:\\\\\\\\Dos命令2.txt\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"w\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>fp2 <span class=\\"token operator\\">==</span> <span class=\\"token constant\\">NULL</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"文件打开失败，程序退出\\\\n\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token function\\">exit</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token keyword\\">char</span> ch<span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">while</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>ch <span class=\\"token operator\\">=</span> <span class=\\"token function\\">fgetc</span><span class=\\"token punctuation\\">(</span>fp<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">!=</span><span class=\\"token constant\\">EOF</span><span class=\\"token punctuation\\">)</span>\\n\\t\\t<span class=\\"token function\\">fputc</span><span class=\\"token punctuation\\">(</span>ch<span class=\\"token punctuation\\">,</span>fp2<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">fclose</span><span class=\\"token punctuation\\">(</span>fp<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">fclose</span><span class=\\"token punctuation\\">(</span>fp2<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};