const n=JSON.parse('{"key":"v-e2b4a2ca","path":"/tw/c/array-1.html","title":"數組（1）","lang":"zh-TW","frontmatter":{"title":"數組（1）","date":"2022-07-30T00:00:00.000Z","icon":"code","order":11,"description":"38.單位換算 1KB=2^10B=1024B 1MB=2^10KB=1024KB 1GB=2^10MB=1024MB #include &lt;stdio.h&gt; int main(void) { \\tint a,b,c; \\tprintf(\\"%p,%p,%p\\",&amp;a,&amp;b,&amp;c); //%p,%o,%x以16進制格式輸出,但是隨機產生的數值可能不連續 \\tint d[3]; \\td[0] = 1,d[1] = 2,d[2]= 3; \\tprintf(\\"%d,%d,%d\\",d[0],d[1],d[2]); \\tprintf(\\"%p,%p,%p\\\\n\\",&amp;d[0],&amp;d[1],&amp;d[2]); \\treturn 0; }","head":[["meta",{"property":"og:url","content":"https://passwordgloo-github-io.vercel.app/tw/c/array-1.html"}],["meta",{"property":"og:site_name","content":"麦田守望者文档库"}],["meta",{"property":"og:title","content":"數組（1）"}],["meta",{"property":"og:description","content":"38.單位換算 1KB=2^10B=1024B 1MB=2^10KB=1024KB 1GB=2^10MB=1024MB #include &lt;stdio.h&gt; int main(void) { \\tint a,b,c; \\tprintf(\\"%p,%p,%p\\",&amp;a,&amp;b,&amp;c); //%p,%o,%x以16進制格式輸出,但是隨機產生的數值可能不連續 \\tint d[3]; \\td[0] = 1,d[1] = 2,d[2]= 3; \\tprintf(\\"%d,%d,%d\\",d[0],d[1],d[2]); \\tprintf(\\"%p,%p,%p\\\\n\\",&amp;d[0],&amp;d[1],&amp;d[2]); \\treturn 0; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-07-30T00:00:00.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://passwordgloo-github-io.vercel.app/c/array-1.html"}]]},"headers":[{"level":2,"title":"38.單位換算","slug":"_38-單位換算","link":"#_38-單位換算","children":[]},{"level":2,"title":"39.數組定義時初始化","slug":"_39-數組定義時初始化","link":"#_39-數組定義時初始化","children":[]},{"level":2,"title":"40.數組排序","slug":"_40-數組排序","link":"#_40-數組排序","children":[]},{"level":2,"title":"41.指針","slug":"_41-指針","link":"#_41-指針","children":[]},{"level":2,"title":"42.數組的增刪改查及倒置","slug":"_42-數組的增刪改查及倒置","link":"#_42-數組的增刪改查及倒置","children":[]},{"level":2,"title":"43.1二維數組定義初始化","slug":"_43-1二維數組定義初始化","link":"#_43-1二維數組定義初始化","children":[]}],"git":{},"readingTime":{"minutes":3.3,"words":991},"filePathRelative":"tw/c/array-1.md","localizedDate":"2022年7月30日","excerpt":"<h2> 38.單位換算</h2>\\n<blockquote>\\n<p>1KB=2^10B=1024B\\n1MB=2^10KB=1024KB\\n1GB=2^10MB=1024MB</p>\\n</blockquote>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;stdio.h&gt;</span></span>\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">void</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">int</span> a<span class=\\"token punctuation\\">,</span>b<span class=\\"token punctuation\\">,</span>c<span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%p,%p,%p\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token operator\\">&amp;</span>a<span class=\\"token punctuation\\">,</span><span class=\\"token operator\\">&amp;</span>b<span class=\\"token punctuation\\">,</span><span class=\\"token operator\\">&amp;</span>c<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>               <span class=\\"token comment\\">//%p,%o,%x以16進制格式輸出,但是隨機產生的數值可能不連續</span>\\n\\n\\n\\t<span class=\\"token keyword\\">int</span> d<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n\\td<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span>d<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span>d<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">=</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%d,%d,%d\\"</span><span class=\\"token punctuation\\">,</span>d<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>d<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>d<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%p,%p,%p\\\\n\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token operator\\">&amp;</span>d<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span><span class=\\"token operator\\">&amp;</span>d<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span><span class=\\"token operator\\">&amp;</span>d<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};