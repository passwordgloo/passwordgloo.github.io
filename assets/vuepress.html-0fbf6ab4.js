import{_ as d,V as p,W as u,Z as n,Y as s,$ as a,a0 as e,X as m,D as t}from"./framework-1e9ccf99.js";const v={},b={href:"https://blog.csdn.net/passwordgloo/article/details/127111857",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"環境",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#環境","aria-hidden":"true"},"#"),s(" 環境")],-1),h=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"apt"),s(),n("span",{class:"token function"},"install"),s(),n("span",{class:"token function"},"curl"),s(`
`),n("span",{class:"token function"},"curl"),s(),n("span",{class:"token parameter variable"},"-sL"),s(" https://deb.nodesource.com/setup_18.x "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token parameter variable"},"-E"),s(),n("span",{class:"token function"},"bash"),s(` -  //数字为版本号
`),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"apt-get"),s(),n("span",{class:"token function"},"install"),s(),n("span",{class:"token parameter variable"},"-y"),s(` nodejs
`),n("span",{class:"token function"},"sudo"),s("  dpkg "),n("span",{class:"token parameter variable"},"-i"),s(" --force-overwrite "),n("span",{class:"token string"},'"/var/cache/apt/archives/nodejs_18.12.1-deb-1nodesource1_amd64.deb"'),s(" //dpkg-deb: 錯誤: 粘貼 子進程被信號"),n("span",{class:"token punctuation"},"("),s("斷開的管道"),n("span",{class:"token punctuation"},")"),s(` 終止了
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(),n("span",{class:"token parameter variable"},"-g"),s(),n("span",{class:"token function"},"pnpm"),s(`
`),n("span",{class:"token function"},"pnpm"),s(` create vuepress-theme-hope@next Vuepress
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=m(`<h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#空項目預置環境</span>

<span class="token comment"># 確保腳本拋出遇到的錯誤</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成靜態文件</span>
<span class="token function">pnpm</span> run docs:build

<span class="token comment"># 進入生成的文件夾</span>
<span class="token builtin class-name">cd</span> dist

<span class="token comment"># 如果是發布到自定義域名</span>
<span class="token comment"># echo &#39;passwordgloo.xyz&#39; &gt; CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> study

<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>

<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;0.0.0.0.0.6(alpha)&quot;</span>
<span class="token comment"># 如果發布到 https://&lt;USERNAME&gt;.github.io</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:passwordgloo/passwordgloo.github.io.git study

<span class="token comment"># 如果發布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span>

<span class="token builtin class-name">cd</span> -

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function _(x,E){const i=t("ExternalLinkIcon"),l=t("CodeTabs");return p(),u("div",null,[n("blockquote",null,[n("p",null,[s("Vuepress2.X請參考"),n("a",b,[s("Vuepress2.X从0-1保姆级入门教程"),a(i)])])]),k,a(l,{id:"8",data:[{title:"npm"},{title:"pnpm"}]},{tab0:e(({title:c,value:o,isActive:r})=>[h]),tab1:e(({title:c,value:o,isActive:r})=>[g]),_:1}),f])}const V=d(v,[["render",_],["__file","vuepress.html.vue"]]);export{V as default};
