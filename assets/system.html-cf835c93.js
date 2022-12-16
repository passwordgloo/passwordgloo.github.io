import{_ as t,V as l,W as d,Z as n,Y as a,$ as e,X as i,D as c}from"./framework-1e9ccf99.js";const r={},o=i(`<h2 id="賬戶管理" tabindex="-1"><a class="header-anchor" href="#賬戶管理" aria-hidden="true">#</a> 賬戶管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span>	   //壹般用戶,有時需要用戶自己的密碼
<span class="token function">su</span>         //切換root用戶權限，輸入後需要rootpassword確認
<span class="token function">sudo</span> <span class="token function">su</span>    //臨時申請root權限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件管理" tabindex="-1"><a class="header-anchor" href="#文件管理" aria-hidden="true">#</a> 文件管理</h2><h3 id="訪問權限" tabindex="-1"><a class="header-anchor" href="#訪問權限" aria-hidden="true">#</a> 訪問權限</h3>`,4),u={href:"https://www.jianshu.com/p/4720cbedd790",target:"_blank",rel:"noopener noreferrer"},p={href:"https://blog.csdn.net/everything1209/article/details/22292025",target:"_blank",rel:"noopener noreferrer"},v=i(`<h3 id="cd傳送" tabindex="-1"><a class="header-anchor" href="#cd傳送" aria-hidden="true">#</a> cd傳送</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/                          //回到當前目錄上壹層目錄
<span class="token builtin class-name">cd</span> -                            //回到上壹次所在的目錄
<span class="token builtin class-name">cd</span> ~                            //回到當前用戶的宿主目錄
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ls列表命令" tabindex="-1"><a class="header-anchor" href="#ls列表命令" aria-hidden="true">#</a> ls列表命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span>                              //當前目錄列表（排除隱藏文件）
<span class="token function">ls</span> <span class="token parameter variable">-a</span>                           //當前目錄列表（包含隱藏文件）
<span class="token function">ls</span> <span class="token parameter variable">-l</span>                           //當前目錄文件詳細信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本操作-增刪重移" tabindex="-1"><a class="header-anchor" href="#基本操作-增刪重移" aria-hidden="true">#</a> 基本操作（增刪重移）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> 文件名                      //打開指定文件，並在終端顯示

tree                           //顯示當前路徑下所有文件，用樹形式
<span class="token function">mkdir</span> 目錄名                    //創建壹個目錄
<span class="token function">rmdir</span> 空目錄名                  //刪除壹個空目錄

<span class="token function">rm</span> 文件名<span class="token punctuation">..</span>.                    //刪除壹個或多個文件
<span class="token function">rm</span> <span class="token parameter variable">-rf</span>                         //刪除壹個非空目錄下的壹切

<span class="token function">cp</span> 原文件 目標文件               //拷貝
cp-i 原文件 目標文件             //帶提示的拷貝

<span class="token function">mv</span> 原文件路徑 目標路徑            //剪切
<span class="token function">mv</span> 文件名 新名字                 //當前目錄重命名
    
<span class="token function">touch</span> 文件名                    //修改文件或者目錄的時間屬性,文件不存在自動創建
<span class="token function">vi</span> 文件路徑                     //編輯文件，使用vim則為vim 文件路徑
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apt命令" tabindex="-1"><a class="header-anchor" href="#apt命令" aria-hidden="true">#</a> apt命令</h2><p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/Snapshot/support/info.svg" alt="" loading="lazy"> <code>apt</code>可以理解為Ubuntu對<code>apt-get</code>的封裝，因而二者命令相通</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> packagename			//安裝包
<span class="token function">sudo</span> <span class="token function">apt-get</span> remove packagename				//刪除包
<span class="token function">sudo</span> <span class="token function">apt-get</span> remove package -- purge		//刪除包以及配置文件
<span class="token function">sudo</span> <span class="token function">apt-get</span> update							//更新源
<span class="token function">sudo</span> <span class="token function">apt-get</span> upgrade						//更新已安裝軟件
<span class="token function">sudo</span> <span class="token function">apt-get</span> dist-upgrade					//升級系統
<span class="token function">sudo</span> <span class="token function">apt</span> autoremove							//刪除過時安裝包,註意檢查系統文件有無缺失
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ubuntu-restricted-extras	//安裝帶版權視頻編碼器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="開關機" tabindex="-1"><a class="header-anchor" href="#開關機" aria-hidden="true">#</a> 開關機</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemd-analyze blame	<span class="token comment">#開機啟動項時間降序</span>

systemctl disable <span class="token string">&quot;啟動項名&quot;</span>	取消啟動項
systemctl mask <span class="token string">&quot;啟動項名&quot;</span>	mask取消啟動項
systemctl unmask <span class="token string">&quot;啟動項名&quot;</span>	  恢復mask啟動項
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="snap命令" tabindex="-1"><a class="header-anchor" href="#snap命令" aria-hidden="true">#</a> Snap命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>snap list 					//列出已安裝的snap包
snap <span class="token function">install</span> package-name	//安裝指定snap包
snap remove package-name	//移除指定snap包
snap revert package-name	//還原指定snap包原先版本
snap refresh				//更新包，如果不填，默認所有
snap <span class="token function">find</span> package-name		//查找指定包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="報錯分類" tabindex="-1"><a class="header-anchor" href="#報錯分類" aria-hidden="true">#</a> 報錯分類</h2>`,14),m={href:"https://www.cnblogs.com/wenchaoz/p/8982122.html",target:"_blank",rel:"noopener noreferrer"};function h(b,k){const s=c("ExternalLinkIcon");return l(),d("div",null,[o,n("ul",null,[n("li",null,[n("p",null,[n("a",u,[a("Linux 文件訪問權限"),e(s)])])]),n("li",null,[n("p",null,[n("a",p,[a("Linux 文件所屬用戶及用戶組"),e(s)])])])]),v,n("ul",null,[n("li",null,[n("a",m,[a("Host SMBus controller not enabled"),e(s)])])])])}const g=t(r,[["render",h],["__file","system.html.vue"]]);export{g as default};
