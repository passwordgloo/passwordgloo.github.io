import{_ as s,V as r,W as o,Z as t,Y as d,$ as a,a0 as c,X as e,D as i}from"./framework-1e9ccf99.js";const h={},u=e(`<h2 id="標題" tabindex="-1"><a class="header-anchor" href="#標題" aria-hidden="true">#</a> 標題</h2><table><caption></caption><thead><th>Atx形式</th><th>Setext形式</th><th>效果</th></thead><tbody><tr><td># 標題1</td><td>標題1<br>===</td><td><h1>標題1</h1></td></tr><tr><td>## 標題2</td><td>標題2<br>---</td><td><h2>標題2</h2></td></tr><tr><td>### 標題3</td><td>無</td><td><h3>標題3</h3></td></tr><tr><td>#### 標題4</td><td>無</td><td><h4>標題4</h4></td></tr><tr><td>##### 標題5</td><td>無</td><td><h5>標題5</h5></td></tr><tr><td>###### 標題6</td><td>無</td><td><h6>標題6</h6></td></tr></tbody></table><hr><h2 id="字體樣式" tabindex="-1"><a class="header-anchor" href="#字體樣式" aria-hidden="true">#</a> 字體樣式</h2><table id="table-6"><caption></caption><thead><th>樣式</th><th>表示</th><th>備註</th></thead><tbody><tr><td>* 文本 *</td><td>斜體</td><td></td></tr><tr><td>** 文本 **</td><td>加粗</td><td></td></tr><tr><td>*** 文本 ***</td><td>斜體加粗</td><td></td></tr><tr><td>~~ 文本 ~~</td><td>刪除線</td><td></td></tr><tr><td>&lt;font color=red&gt;文本&lt;/font&gt;</td><td>顏色</td><td>可用16進制替換</td></tr></tbody></table><hr><h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2><h3 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表" aria-hidden="true">#</a> 有序列表</h3><ol><li></li><li></li><li></li></ol><h3 id="無序列表" tabindex="-1"><a class="header-anchor" href="#無序列表" aria-hidden="true">#</a> 無序列表</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span>  文本  //寫法1
<span class="token list punctuation">+</span>  文本  //寫法2
<span class="token list punctuation">*</span>  文本  //寫法3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>文本 //寫法1</li></ul><ul><li>文本 //寫法2</li></ul><ul><li>文本 //寫法3</li></ul><h3 id="列表嵌套" tabindex="-1"><a class="header-anchor" href="#列表嵌套" aria-hidden="true">#</a> 列表嵌套</h3>`,15),p=t("code",null,"tab",-1),m=t("strong",null,"空格鍵",-1),b=e('<ul><li>壹級無序列表 <ul><li>二級無序列表</li><li>二級無序列表 <ul><li>三級無序列表</li></ul></li></ul></li></ul><ol><li>壹級有序列表 <ul><li>二級無序列表 <ul><li>三級無序列表</li></ul></li></ul></li></ol><hr><h2 id="表情" tabindex="-1"><a class="header-anchor" href="#表情" aria-hidden="true">#</a> 表情</h2><p>:表情名稱:，例如<code>:smile:</code></p>',5),g={href:"https://gist.github.com/rxaviers/7360908",target:"_blank",rel:"noopener noreferrer"},k=e('<h2 id="任務清單" tabindex="-1"><a class="header-anchor" href="#任務清單" aria-hidden="true">#</a> 任務清單</h2><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 未完成  <code>-[ ]</code></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 完成   <code>-[X]</code></label></li></ul><hr><h2 id="標記" tabindex="-1"><a class="header-anchor" href="#標記" aria-hidden="true">#</a> 標記</h2>',4),v=t("p",null,[t("mark",null,"標記"),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mtext",null,"  "),t("mtext",null,"  "),t("mtext",null,"  "),t("mtext",null,"  ")]),t("annotation",{encoding:"application/x-tex"},"\\;\\;\\;\\;")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0em"}}),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),t("span",{class:"mspace",style:{"margin-right":"0.2778em"}})])])]),t("code",null,"==標記==")],-1),x=e(`<hr><h2 id="超鏈接" tabindex="-1"><a class="header-anchor" href="#超鏈接" aria-hidden="true">#</a> 超鏈接</h2><ul><li><code>[鏈接名稱](地址)</code> //行內式 <ul><li><code>[鏈接文字](地址/ &quot;鏈接標題&quot;)</code> //加入鏈接標題</li><li><code>[鏈接文字](相對地址/ &quot;鏈接標題&quot;)</code> //使用相對地址</li></ul></li><li><code>[鏈接文字][序號](地址)</code>參考式鏈接（類似Word交叉引用） <ul><li><code>[鏈接文字][序號](地址/&quot;鏈接標題&quot;)</code> //加入鏈接標題</li><li><code>[鏈接文字][]</code>隱式鏈接標記，鏈接內容為<code>[鏈接文字]: 鏈接地址 &quot;鏈接標題&quot;</code></li></ul></li><li>鏈接內容 <ul><li><code>[序號]: 鏈接地址/ &quot;鏈接標題&quot;</code> //形式1</li><li><code>[序號]: 鏈接地址/ &#39;鏈接標題&#39;</code> //形式2</li><li><code>[序號]: 鏈接地址/(鏈接標題)</code> //形式3</li></ul></li></ul><hr><h2 id="圖片" tabindex="-1"><a class="header-anchor" href="#圖片" aria-hidden="true">#</a> 圖片</h2><ul><li><code>![圖片名稱](地址)</code></li><li>圖片名稱可省略</li></ul><hr><h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>|列標題1|列標題2|列標題3|列標題4|        //列標題，註意兩邊用|包住
|------|:------|:-----:|-----:|      //無對齊/左對齊/居中/右對齊
|內容|內容|內容|內容|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>列標題1</th><th style="text-align:left;">列標題2</th><th style="text-align:center;">列標題3</th><th style="text-align:right;">列標題4</th></tr></thead><tbody><tr><td>無對齊</td><td style="text-align:left;">左對齊</td><td style="text-align:center;">居中</td><td style="text-align:right;">右對齊</td></tr><tr><td>內容</td><td style="text-align:left;">內容</td><td style="text-align:center;">內容</td><td style="text-align:right;">內容</td></tr><tr><td>內容</td><td style="text-align:left;">內容</td><td style="text-align:center;">內容</td><td style="text-align:right;">內容</td></tr></tbody></table><hr><h2 id="引用塊" tabindex="-1"><a class="header-anchor" href="#引用塊" aria-hidden="true">#</a> 引用塊</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> 內容
<span class="token blockquote punctuation">&gt;&gt;</span> 多級引用
<span class="token blockquote punctuation">&gt;&gt;&gt;</span> 多級引用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>內容</p><blockquote><p>內容</p><blockquote><p>內容</p></blockquote></blockquote></blockquote><hr><h2 id="代碼" tabindex="-1"><a class="header-anchor" href="#代碼" aria-hidden="true">#</a> 代碼</h2><h3 id="單行代碼" tabindex="-1"><a class="header-anchor" href="#單行代碼" aria-hidden="true">#</a> 單行代碼</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code-snippet code keyword">\`code body\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>code body</code></p><h3 id="代碼塊" tabindex="-1"><a class="header-anchor" href="#代碼塊" aria-hidden="true">#</a> 代碼塊</h3><h4 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>\`\`\`語言名稱      //開始
內容
\`\`\`             //結束
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="舉例" tabindex="-1"><a class="header-anchor" href="#舉例" aria-hidden="true">#</a> 舉例</h4><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span>&quot;Hello World<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="流程圖" tabindex="-1"><a class="header-anchor" href="#流程圖" aria-hidden="true">#</a> 流程圖</h2><h3 id="使用markdown語法" tabindex="-1"><a class="header-anchor" href="#使用markdown語法" aria-hidden="true">#</a> 使用Markdown語法</h3><ul><li>用-&gt;連接各個部分，例如st-&gt;op1-&gt;cond</li><li>:後輸入內容</li><li>每個元素都可以自定義方向，如sub1(left/right)</li></ul>`,28),_={id:"typora編輯器",tabindex:"-1"},f=t("a",{class:"header-anchor",href:"#typora編輯器","aria-hidden":"true"},"#",-1),y={href:"https://www.typora.io/",target:"_blank",rel:"noopener noreferrer"},w={id:"xmind",tabindex:"-1"},q=t("a",{class:"header-anchor",href:"#xmind","aria-hidden":"true"},"#",-1),$={href:"https://www.xmind.cn/%22Xmind%22",target:"_blank",rel:"noopener noreferrer"},L=e('<ul><li>繪制流程圖</li><li>保存為Markdown格式</li></ul><table><thead><tr><th>語法</th><th>備註</th></tr></thead><tbody><tr><td>st=&gt;start:</td><td>開始</td></tr><tr><td>op1=&gt;operation:</td><td>操作/執行</td></tr><tr><td>cond=&gt;condition:</td><td>判斷</td></tr><tr><td>cond(yes/right)-&gt;結果</td><td>是</td></tr><tr><td>cond(no)-&gt;結果</td><td>否</td></tr><tr><td>sub1=&gt;subroutine:</td><td>子分支</td></tr><tr><td>io=&gt;inputoutput:</td><td>結束</td></tr><tr><td>:&gt; 鏈接地址</td><td>超鏈接</td></tr></tbody></table><hr><h2 id="html實體" tabindex="-1"><a class="header-anchor" href="#html實體" aria-hidden="true">#</a> HTML實體</h2><blockquote><p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/warning.svg" alt="" loading="lazy">實體對大小寫敏感</p></blockquote>',5),M=t("img",{src:"https://cdn.jsdelivr.net/gh/passwordgloo/icon/danger.svg",alt:"",loading:"lazy"},null,-1),T={href:"https://www.runoob.com/tag/ref-entities.html",target:"_blank",rel:"noopener noreferrer"},V=e("<table><thead><th>實體名稱</th><th>描述</th><th>結果</th><th>備註</th></thead><tbody><tr><td>&amp;amp;</td><td>and符號</td><td>&amp;</td><td>預留字符</td></tr><tr><td>&amp;apos;</td><td>單撇號</td><td>&#39;</td><td>預留字符</td></tr><tr><td>&amp;quot;</td><td>雙引號</td><td>&quot;</td><td>預留字符</td></tr><tr><td>&amp;lt;</td><td>小於</td><td>&lt;</td><td>預留字符</td></tr><tr><td>&amp;gt;</td><td>大於</td><td>&gt;</td><td>預留字符</td></tr><tr><td>&amp;reg;</td><td>註冊</td><td>®</td><td>符號實體</td></tr><tr><td>&amp;copy;</td><td>版權</td><td>©</td><td>符號實體</td></tr><tr><td>&amp;trade;</td><td>商標</td><td>™</td><td>符號實體</td></tr><tr><td>&amp;sect;</td><td>章節符號</td><td>§</td><td>符號實體</td></tr><tr><td>&amp;plusmn;</td><td>正負號</td><td>±</td><td>符號實體</td></tr><tr><td>&amp;times;</td><td>乘號</td><td>×</td><td>符號實體</td></tr><tr><td>&amp;divide;</td><td>除號</td><td>÷</td><td>符號實體</td></tr><tr><td>&amp;deg;</td><td>度</td><td>°</td><td>符號實體</td></tr></tbody></table>",1),X={id:"latex幫助文檔",tabindex:"-1"},N=t("a",{class:"header-anchor",href:"#latex幫助文檔","aria-hidden":"true"},"#",-1),B={href:"https://www.latexlive.com/help",target:"_blank",rel:"noopener noreferrer"},E=e(`<h2 id="技巧" tabindex="-1"><a class="header-anchor" href="#技巧" aria-hidden="true">#</a> 技巧</h2><ul><li>使用html語法<code>&lt;br&gt;</code>換行</li><li>縮進 <ul><li>多個轉義符號<code>&amp;nbsp;</code>，<code>&amp;emsp;</code></li><li>使用LaTeX語法，註意空格隔開文本</li></ul></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>$\\,$ 小空格     
$\\;$ 大空格
$\\quad$ 單空格
$\\qquad$ 雙空格     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function H(W,j){const l=i("font"),n=i("ExternalLinkIcon");return r(),o("div",null,[u,t("p",null,[d("使用"),p,d("鍵或者三個"),a(l,{color:"#ff00ff"},{default:c(()=>[m]),_:1}),d("縮進子列表內容")]),b,t("p",null,[t("a",g,[d("表情大全"),a(n)])]),k,v,x,t("h3",_,[f,d(),t("a",y,[d("Typora編輯器"),a(n)])]),t("h3",w,[q,d(),t("a",$,[d("Xmind"),a(n)])]),L,t("blockquote",null,[t("p",null,[M,d("只列出壹部分，全部實體參見"),t("a",T,[d("HTML 實體"),a(n)])])]),V,d(" --- "),t("h2",X,[N,d(),t("a",B,[d("LaTex幫助文檔"),a(n)])]),E])}const C=s(h,[["render",H],["__file","intro.html.vue"]]);export{C as default};
