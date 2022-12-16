import{_ as i,V as d,W as t,Z as a,Y as e,$ as l,X as s,D as c}from"./framework-1e9ccf99.js";const r={},h=s(`<h2 id="安裝" tabindex="-1"><a class="header-anchor" href="#安裝" aria-hidden="true">#</a> 安裝</h2><h3 id="更新ubnutu服務器" tabindex="-1"><a class="header-anchor" href="#更新ubnutu服務器" aria-hidden="true">#</a> 更新Ubnutu服務器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安裝apache-web服務器" tabindex="-1"><a class="header-anchor" href="#安裝apache-web服務器" aria-hidden="true">#</a> 安裝Apache Web服務器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> apache2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="檢查apache-web狀態" tabindex="-1"><a class="header-anchor" href="#檢查apache-web狀態" aria-hidden="true">#</a> 檢查Apache Web狀態</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl status apache2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="http://file.passwordgloo.xyz/lamp/Apache2状态.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>`,9),o={id:"apache環境設置",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#apache環境設置","aria-hidden":"true"},"#",-1),u={href:"https://blog.csdn.net/aaaaajiboke/article/details/82853480",target:"_blank",rel:"noopener noreferrer"},b=s(`<h3 id="防火墻設置-可選" tabindex="-1"><a class="header-anchor" href="#防火墻設置-可選" aria-hidden="true">#</a> 防火墻設置[可選]</h3><h4 id="查看可用應用程序配置文件" tabindex="-1"><a class="header-anchor" href="#查看可用應用程序配置文件" aria-hidden="true">#</a> 查看可用應用程序配置文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw app list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="http://file.passwordgloo.xyz/lamp/Apache2可用应用程序配置.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="列出配置文件及包含规则信息" tabindex="-1"><a class="header-anchor" href="#列出配置文件及包含规则信息" aria-hidden="true">#</a> 列出配置文件及包含规则信息</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw app info <span class="token string">&quot;Apache Full&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="允許http-https傳入通信" tabindex="-1"><a class="header-anchor" href="#允許http-https傳入通信" aria-hidden="true">#</a> 允許HTTP/HTTPS傳入通信</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow <span class="token keyword">in</span> <span class="token string">&quot;Apache Full&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="輸入localhost訪問測試頁面" tabindex="-1"><a class="header-anchor" href="#輸入localhost訪問測試頁面" aria-hidden="true">#</a> 輸入localhost訪問測試頁面</h4><figure><img src="http://file.passwordgloo.xyz/lamp/Apache2默认页面.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> Mysql</h2><h3 id="安裝-1" tabindex="-1"><a class="header-anchor" href="#安裝-1" aria-hidden="true">#</a> 安裝</h3><h4 id="安裝命令" tabindex="-1"><a class="header-anchor" href="#安裝命令" aria-hidden="true">#</a> 安裝命令</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="檢查mysql服務是否運行" tabindex="-1"><a class="header-anchor" href="#檢查mysql服務是否運行" aria-hidden="true">#</a> 檢查Mysql服務是否運行</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl status mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="http://file.passwordgloo.xyz/lamp/Mysql状态.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="phpmyadmin" tabindex="-1"><a class="header-anchor" href="#phpmyadmin" aria-hidden="true">#</a> Phpmyadmin</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> phpmyadmin
<span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/share/phpmyadmin /var/www/phpmyadmin   //软链接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h2><h3 id="安裝-2" tabindex="-1"><a class="header-anchor" href="#安裝-2" aria-hidden="true">#</a> 安裝</h3><h4 id="安裝命令-1" tabindex="-1"><a class="header-anchor" href="#安裝命令-1" aria-hidden="true">#</a> 安裝命令</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> php libapache2-mod-php php-mysql
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> php8.1-fpm                      //可選
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="測試" tabindex="-1"><a class="header-anchor" href="#測試" aria-hidden="true">#</a> 測試</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /var/www/html/index.php    //新建index.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>//index.php輸入以下代碼，按:wq保存退出
<span class="token php language-php"><span class="token delimiter important">&lt;?</span> php                            
<span class="token function">phpinfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart apache2    //重啟Apache服務
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="host" tabindex="-1"><a class="header-anchor" href="#host" aria-hidden="true">#</a> Host</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,29);function m(v,g){const n=c("ExternalLinkIcon");return d(),t("div",null,[h,a("h3",o,[p,e(),a("a",u,[e("Apache環境設置"),l(n)])]),b])}const x=i(r,[["render",m],["__file","lamp.html.vue"]]);export{x as default};
