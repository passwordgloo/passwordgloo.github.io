const n=JSON.parse('{"key":"v-4b1dcf4f","path":"/c/design-4.html","title":"程序设计和C语言（4）","lang":"zh-CN","frontmatter":{"title":"程序设计和C语言（4）","date":"2022-07-30T00:00:00.000Z","icon":"code","order":4,"description":"14.全局变量及宏定义 /* 学习目标 (1)宏名，全局变量建议大写 (2)#开头的都是预处理指令，预处理是发生在预编译阶段(编译之前)，对源程序进行一些简单的文本替换 (3)全局变量的作用域就是从定义处开始，到整个文件的末尾 */ #include &lt;stdio.h&gt; #define P1 3.1415926 //定义一个宏名P1，程序会在预编译阶段把该定义出之后的所有的P1地方替换为3.1415926 int A; //未初始化的全局变量A，初始值4的全局变量B int B=4; int main(void) { \\tprintf(\\"%d,%d\\\\n\\",A,B); \\tprintf(\\"P1\\\\n\\"); //\\tP1=10； //error 符号常量P1不能被赋值 \\tprintf(\\"%d,%d\\\\n\\",A,B); \\treturn 0; }","head":[["meta",{"property":"og:url","content":"https://passwordgloo-github-io.vercel.app/c/design-4.html"}],["meta",{"property":"og:site_name","content":"麦田守望者文档库"}],["meta",{"property":"og:title","content":"程序设计和C语言（4）"}],["meta",{"property":"og:description","content":"14.全局变量及宏定义 /* 学习目标 (1)宏名，全局变量建议大写 (2)#开头的都是预处理指令，预处理是发生在预编译阶段(编译之前)，对源程序进行一些简单的文本替换 (3)全局变量的作用域就是从定义处开始，到整个文件的末尾 */ #include &lt;stdio.h&gt; #define P1 3.1415926 //定义一个宏名P1，程序会在预编译阶段把该定义出之后的所有的P1地方替换为3.1415926 int A; //未初始化的全局变量A，初始值4的全局变量B int B=4; int main(void) { \\tprintf(\\"%d,%d\\\\n\\",A,B); \\tprintf(\\"P1\\\\n\\"); //\\tP1=10； //error 符号常量P1不能被赋值 \\tprintf(\\"%d,%d\\\\n\\",A,B); \\treturn 0; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"zh-TW"}],["meta",{"property":"article:published_time","content":"2022-07-30T00:00:00.000Z"}],["link",{"rel":"alternate","hreflang":"zh-tw","href":"https://passwordgloo-github-io.vercel.app/tw/c/design-4.html"}]]},"headers":[{"level":2,"title":"14.全局变量及宏定义","slug":"_14-全局变量及宏定义","link":"#_14-全局变量及宏定义","children":[]},{"level":2,"title":"15.标识符命名规范","slug":"_15-标识符命名规范","link":"#_15-标识符命名规范","children":[]}],"git":{},"readingTime":{"minutes":1.85,"words":554},"filePathRelative":"c/design-4.md","localizedDate":"2022年7月30日","excerpt":"<h2> 14.全局变量及宏定义</h2>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token comment\\">/*\\n学习目标\\n(1)宏名，全局变量建议大写\\n(2)#开头的都是预处理指令，预处理是发生在预编译阶段(编译之前)，对源程序进行一些简单的文本替换\\n(3)全局变量的作用域就是从定义处开始，到整个文件的末尾\\n*/</span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;stdio.h&gt;</span> </span>\\n<span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">define</span> <span class=\\"token macro-name\\">P1</span> <span class=\\"token expression\\"><span class=\\"token number\\">3.1415926</span>   </span><span class=\\"token comment\\">//定义一个宏名P1，程序会在预编译阶段把该定义出之后的所有的P1地方替换为3.1415926</span></span>\\n\\n<span class=\\"token keyword\\">int</span> A<span class=\\"token punctuation\\">;</span>                 <span class=\\"token comment\\">//未初始化的全局变量A，初始值4的全局变量B</span>\\n<span class=\\"token keyword\\">int</span> B<span class=\\"token operator\\">=</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">void</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%d,%d\\\\n\\"</span><span class=\\"token punctuation\\">,</span>A<span class=\\"token punctuation\\">,</span>B<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"P1\\\\n\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">//\\tP1=10；         //error 符号常量P1不能被赋值</span>\\n\\n\\t<span class=\\"token function\\">printf</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"%d,%d\\\\n\\"</span><span class=\\"token punctuation\\">,</span>A<span class=\\"token punctuation\\">,</span>B<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};