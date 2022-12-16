import{_ as e,V as a,W as s,X as i}from"./framework-1e9ccf99.js";const d={},n=i(`<h2 id="編碼方式" tabindex="-1"><a class="header-anchor" href="#編碼方式" aria-hidden="true">#</a> 編碼方式</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SHOW VARIABLES LIKE &#39;%char%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="函數" tabindex="-1"><a class="header-anchor" href="#函數" aria-hidden="true">#</a> 函數</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select version； //查看mysql版本
select 10+20；
select 98%3;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="別名" tabindex="-1"><a class="header-anchor" href="#別名" aria-hidden="true">#</a> 別名</h2><h3 id="方法1" tabindex="-1"><a class="header-anchor" href="#方法1" aria-hidden="true">#</a> 方法1</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT
	IFNULL(commission_pct,0) AS 獎金率
FROM \`employees\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法2" tabindex="-1"><a class="header-anchor" href="#方法2" aria-hidden="true">#</a> 方法2</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT
	IFNULL(commission_pct,0) 獎金率
FROM \`employees\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="排除重復項" tabindex="-1"><a class="header-anchor" href="#排除重復項" aria-hidden="true">#</a> 排除重復項</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT
	DISTINCT job_id
FROM \`employees\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拼接字符" tabindex="-1"><a class="header-anchor" href="#拼接字符" aria-hidden="true">#</a> 拼接字符</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT
	CONCAT(\`last_name\`,\`first_name\`) AS 員工名字
FROM \`employees\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模糊查詢" tabindex="-1"><a class="header-anchor" href="#模糊查詢" aria-hidden="true">#</a> 模糊查詢</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM \`employees\`
	WHERE last_name LIKE &#39;%a%&#39;;
#%表示任意多個字符，_表示壹個任意字符，a可以任意
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分组查询" tabindex="-1"><a class="header-anchor" href="#分组查询" aria-hidden="true">#</a> 分组查询</h2><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT \`性别\`,COUNT(*) FROM student
	GROUP BY \`性別\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[n];function r(c,m){return a(),s("div",null,l)}const v=e(d,[["render",r],["__file","skill.html.vue"]]);export{v as default};
