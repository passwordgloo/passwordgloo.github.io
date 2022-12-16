const n=JSON.parse('{"key":"v-d87569c6","path":"/c/choose.html","title":"选择程序设计","lang":"zh-CN","frontmatter":{"title":"选择程序设计","date":"2022-07-30T00:00:00.000Z","icon":"code","order":9,"description":"24.判断两个实型数据是否相等 #include &lt;stdio.h&gt; #include &lt;math.h&gt; int main(void) { \\tfloat a = -2.12,b = -10.33; \\tif(fabs(a-b) &lt;= 1e-4) //double fabs(double), int abs(int) \\t\\tprintf(\\"这两个数相等\\"); \\telse \\t\\tprintf(\\"这两个数不等\\"); \\treturn 0; } ##","head":[["meta",{"property":"og:url","content":"https://passwordgloo-github-io.vercel.app/c/choose.html"}],["meta",{"property":"og:site_name","content":"麦田守望者文档库"}],["meta",{"property":"og:title","content":"选择程序设计"}],["meta",{"property":"og:description","content":"24.判断两个实型数据是否相等 #include &lt;stdio.h&gt; #include &lt;math.h&gt; int main(void) { \\tfloat a = -2.12,b = -10.33; \\tif(fabs(a-b) &lt;= 1e-4) //double fabs(double), int abs(int) \\t\\tprintf(\\"这两个数相等\\"); \\telse \\t\\tprintf(\\"这两个数不等\\"); \\treturn 0; } ##"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"zh-TW"}],["meta",{"property":"article:published_time","content":"2022-07-30T00:00:00.000Z"}],["link",{"rel":"alternate","hreflang":"zh-tw","href":"https://passwordgloo-github-io.vercel.app/tw/c/choose.html"}]]},"headers":[{"level":2,"title":"24.判断两个实型数据是否相等","slug":"_24-判断两个实型数据是否相等","link":"#_24-判断两个实型数据是否相等","children":[]},{"level":2,"title":"25.求一个一元二次方程的根","slug":"_25-求一个一元二次方程的根","link":"#_25-求一个一元二次方程的根","children":[]},{"level":2,"title":"26.逻辑型数据","slug":"_26-逻辑型数据","link":"#_26-逻辑型数据","children":[]},{"level":2,"title":"27.switch语句","slug":"_27-switch语句","link":"#_27-switch语句","children":[]},{"level":2,"title":"28.条件编译","slug":"_28-条件编译","link":"#_28-条件编译","children":[]},{"level":2,"title":"29.头文件","slug":"_29-头文件","link":"#_29-头文件","children":[]},{"level":2,"title":"30例题1","slug":"_30例题1","link":"#_30例题1","children":[]},{"level":2,"title":"31例题2","slug":"_31例题2","link":"#_31例题2","children":[]}],"git":{},"readingTime":{"minutes":2.52,"words":757},"filePathRelative":"c/choose.md","localizedDate":"2022年7月30日","excerpt":"<h2> 24.判断两个实型数据是否相等</h2>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;stdio.h&gt;</span></span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;math.h&gt;</span></span>\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">void</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">float</span> a <span class=\\"token operator\\">=</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">2.12</span><span class=\\"token punctuation\\">,</span>b <span class=\\"token operator\\">=</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">10.33</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">fabs</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token operator\\">-</span>b<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&lt;=</span> <span class=\\"token number\\">1e-4</span><span class=\\"token punctuation\\">)</span>                           <span class=\\"token comment\\">//double fabs(double), int abs(int)</span>\\n\\t\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"这两个数相等\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">else</span>\\n\\t\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"这两个数不等\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n## \\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};