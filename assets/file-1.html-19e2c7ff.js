const n=JSON.parse('{"key":"v-0fca090c","path":"/tw/c/file-1.html","title":"對文件的輸入輸出（1）","lang":"zh-TW","frontmatter":{"title":"對文件的輸入輸出（1）","date":"2022-07-30T00:00:00.000Z","icon":"code","order":17,"description":"77.文件的基本概念 文件分類 程序文件 這種文件的內容是程序代碼，如源程序文件，目標文件，可執行文件等 數據文件 其內容不是程序，而是供程序運行時讀寫的數據 終端即計算機的各種輸入輸出設備。操作系統把終端都統壹作為文件看待 壹個文件要有唯壹的文件標識，文件標識包括3個部分： ①文件路徑 ②文件名主幹 ③文件後綴 數據文件分類：ASCII(文本文件)和二進制文件(鏡像文件) #include &lt;stdio.h&gt; #include &lt;stdlib.h&gt; int main(void) { \\tchar name[50]= \\"H:/Java/Dos命令.txt\\"; \\tFILE *fp = fopen(name,\\"r\\"); \\tif(fp ==NULL) \\t{ \\t\\tprintf(\\"文件打開失敗，程序退出\\\\n\\"); \\t\\texit(-1); \\t} \\tFILE *fp2 = fopen(\\"H:\\\\\\\\Dos命令2.txt\\",\\"w\\"); \\tif(fp2 == NULL) \\t{ \\t\\tprintf(\\"文件打開失敗，程序退出\\\\n\\"); \\t\\texit(-1); \\t} \\tchar ch; \\twhile((ch = fgetc(fp)) !=EOF) \\t\\tfputc(ch,fp2); \\tfclose(fp); \\tfclose(fp2); \\treturn 0; }","head":[["meta",{"property":"og:url","content":"https://passwordgloo-github-io.vercel.app/tw/c/file-1.html"}],["meta",{"property":"og:site_name","content":"麦田守望者文档库"}],["meta",{"property":"og:title","content":"對文件的輸入輸出（1）"}],["meta",{"property":"og:description","content":"77.文件的基本概念 文件分類 程序文件 這種文件的內容是程序代碼，如源程序文件，目標文件，可執行文件等 數據文件 其內容不是程序，而是供程序運行時讀寫的數據 終端即計算機的各種輸入輸出設備。操作系統把終端都統壹作為文件看待 壹個文件要有唯壹的文件標識，文件標識包括3個部分： ①文件路徑 ②文件名主幹 ③文件後綴 數據文件分類：ASCII(文本文件)和二進制文件(鏡像文件) #include &lt;stdio.h&gt; #include &lt;stdlib.h&gt; int main(void) { \\tchar name[50]= \\"H:/Java/Dos命令.txt\\"; \\tFILE *fp = fopen(name,\\"r\\"); \\tif(fp ==NULL) \\t{ \\t\\tprintf(\\"文件打開失敗，程序退出\\\\n\\"); \\t\\texit(-1); \\t} \\tFILE *fp2 = fopen(\\"H:\\\\\\\\Dos命令2.txt\\",\\"w\\"); \\tif(fp2 == NULL) \\t{ \\t\\tprintf(\\"文件打開失敗，程序退出\\\\n\\"); \\t\\texit(-1); \\t} \\tchar ch; \\twhile((ch = fgetc(fp)) !=EOF) \\t\\tfputc(ch,fp2); \\tfclose(fp); \\tfclose(fp2); \\treturn 0; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-07-30T00:00:00.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://passwordgloo-github-io.vercel.app/c/file-1.html"}]]},"headers":[{"level":2,"title":"77.文件的基本概念","slug":"_77-文件的基本概念","link":"#_77-文件的基本概念","children":[{"level":3,"title":"文件分類","slug":"文件分類","link":"#文件分類","children":[]}]},{"level":2,"title":"78.讀入文件並輸出指定位置","slug":"_78-讀入文件並輸出指定位置","link":"#_78-讀入文件並輸出指定位置","children":[]},{"level":2,"title":"79.向文件讀寫壹個字符串","slug":"_79-向文件讀寫壹個字符串","link":"#_79-向文件讀寫壹個字符串","children":[]},{"level":2,"title":"80.用格式化的方式讀寫文件","slug":"_80-用格式化的方式讀寫文件","link":"#_80-用格式化的方式讀寫文件","children":[]}],"git":{},"readingTime":{"minutes":4.25,"words":1275},"filePathRelative":"tw/c/file-1.md","localizedDate":"2022年7月30日","excerpt":"<h2> 77.文件的基本概念</h2>\\n<h3> 文件分類</h3>\\n<h4> 程序文件</h4>\\n<blockquote>\\n<p>這種文件的內容是程序代碼，如源程序文件，目標文件，可執行文件等</p>\\n</blockquote>\\n<h4> 數據文件</h4>\\n<blockquote>\\n<p>其內容不是程序，而是供程序運行時讀寫的數據\\n終端即計算機的各種輸入輸出設備。操作系統把終端都統壹作為文件看待\\n壹個文件要有唯壹的文件標識，文件標識包括3個部分：\\n①文件路徑 ②文件名主幹 ③文件後綴\\n數據文件分類：ASCII(文本文件)和二進制文件(鏡像文件)</p>\\n</blockquote>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;stdio.h&gt;</span></span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;stdlib.h&gt;</span></span>\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">void</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">char</span> name<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">50</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"H:/Java/Dos命令.txt\\"</span><span class=\\"token punctuation\\">;</span>\\n\\tFILE <span class=\\"token operator\\">*</span>fp <span class=\\"token operator\\">=</span> <span class=\\"token function\\">fopen</span><span class=\\"token punctuation\\">(</span>name<span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"r\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>               \\n\\t<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>fp <span class=\\"token operator\\">==</span><span class=\\"token constant\\">NULL</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"文件打開失敗，程序退出\\\\n\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token function\\">exit</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\tFILE <span class=\\"token operator\\">*</span>fp2 <span class=\\"token operator\\">=</span> <span class=\\"token function\\">fopen</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"H:\\\\\\\\Dos命令2.txt\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"w\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>fp2 <span class=\\"token operator\\">==</span> <span class=\\"token constant\\">NULL</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"文件打開失敗，程序退出\\\\n\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t<span class=\\"token function\\">exit</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token keyword\\">char</span> ch<span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">while</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>ch <span class=\\"token operator\\">=</span> <span class=\\"token function\\">fgetc</span><span class=\\"token punctuation\\">(</span>fp<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">!=</span><span class=\\"token constant\\">EOF</span><span class=\\"token punctuation\\">)</span>\\n\\t\\t<span class=\\"token function\\">fputc</span><span class=\\"token punctuation\\">(</span>ch<span class=\\"token punctuation\\">,</span>fp2<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">fclose</span><span class=\\"token punctuation\\">(</span>fp<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">fclose</span><span class=\\"token punctuation\\">(</span>fp2<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
