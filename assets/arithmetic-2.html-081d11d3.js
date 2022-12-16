const n=JSON.parse('{"key":"v-2e2b3025","path":"/c/arithmetic-2.html","title":"算法学习（2）","lang":"zh-CN","frontmatter":{"title":"算法学习（2）","date":"2022-07-30T00:00:00.000Z","icon":"code","order":6,"description":"17.1求素数 #include &lt;stdio.h&gt; #include &lt;math.h&gt; int main(void) { \\tint a; \\tprintf(\\"请输入一个整数:\\"); \\tscanf(\\"%d\\",&amp;a); \\tif(a&lt;=1) \\t\\tprintf(\\"这个数不是素数\\\\n\\"); \\telse if(a==2) \\t\\tprintf(\\"这个数是素数\\\\n\\"); \\telse \\t{ \\t\\tdouble b =sqrt(a); //sqrt函数定义在math.h里面，求一个数平方根 \\t\\tfor(int i=2;i&lt;=b;++i) \\t\\t{ \\t\\t\\tif(a%i ==0) \\t\\t\\t{ \\t\\t\\t\\tprintf(\\"这个数不是素数\\\\n\\"); \\t\\t\\t\\treturn 0; \\t\\t\\t} \\t\\t} \\t\\t\\tprintf(\\"这个数是素数\\\\n\\"); \\t} \\treturn 0; }","head":[["meta",{"property":"og:url","content":"https://passwordgloo-github-io.vercel.app/c/arithmetic-2.html"}],["meta",{"property":"og:site_name","content":"麦田守望者文档库"}],["meta",{"property":"og:title","content":"算法学习（2）"}],["meta",{"property":"og:description","content":"17.1求素数 #include &lt;stdio.h&gt; #include &lt;math.h&gt; int main(void) { \\tint a; \\tprintf(\\"请输入一个整数:\\"); \\tscanf(\\"%d\\",&amp;a); \\tif(a&lt;=1) \\t\\tprintf(\\"这个数不是素数\\\\n\\"); \\telse if(a==2) \\t\\tprintf(\\"这个数是素数\\\\n\\"); \\telse \\t{ \\t\\tdouble b =sqrt(a); //sqrt函数定义在math.h里面，求一个数平方根 \\t\\tfor(int i=2;i&lt;=b;++i) \\t\\t{ \\t\\t\\tif(a%i ==0) \\t\\t\\t{ \\t\\t\\t\\tprintf(\\"这个数不是素数\\\\n\\"); \\t\\t\\t\\treturn 0; \\t\\t\\t} \\t\\t} \\t\\t\\tprintf(\\"这个数是素数\\\\n\\"); \\t} \\treturn 0; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"zh-TW"}],["meta",{"property":"article:published_time","content":"2022-07-30T00:00:00.000Z"}],["link",{"rel":"alternate","hreflang":"zh-tw","href":"https://passwordgloo-github-io.vercel.app/tw/c/arithmetic-2.html"}]]},"headers":[{"level":2,"title":"17.1求素数","slug":"_17-1求素数","link":"#_17-1求素数","children":[]},{"level":2,"title":"17.2判断一个数是否是闰年","slug":"_17-2判断一个数是否是闰年","link":"#_17-2判断一个数是否是闰年","children":[]},{"level":2,"title":"17.3判断是否是回文数","slug":"_17-3判断是否是回文数","link":"#_17-3判断是否是回文数","children":[]}],"git":{},"readingTime":{"minutes":0.82,"words":246},"filePathRelative":"c/arithmetic-2.md","localizedDate":"2022年7月30日","excerpt":"<h2> 17.1求素数</h2>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;stdio.h&gt;</span></span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;math.h&gt;</span></span>\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">void</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">int</span> a<span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"请输入一个整数:\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">scanf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%d\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token operator\\">&amp;</span>a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token operator\\">&lt;=</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n\\t\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"这个数不是素数\\\\n\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token operator\\">==</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span>\\n\\t\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"这个数是素数\\\\n\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">else</span>\\n\\t<span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token keyword\\">double</span> b <span class=\\"token operator\\">=</span><span class=\\"token function\\">sqrt</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>        <span class=\\"token comment\\">//sqrt函数定义在math.h里面，求一个数平方根</span>\\n\\t\\t<span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i<span class=\\"token operator\\">=</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">;</span>i<span class=\\"token operator\\">&lt;=</span>b<span class=\\"token punctuation\\">;</span><span class=\\"token operator\\">++</span>i<span class=\\"token punctuation\\">)</span>\\n\\t\\t<span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token operator\\">%</span>i <span class=\\"token operator\\">==</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n\\t\\t\\t<span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"这个数不是素数\\\\n\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t\\t<span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n\\t\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t\\t\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"这个数是素数\\\\n\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
