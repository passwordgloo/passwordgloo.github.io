import{_ as t,V as l,W as d,Z as n,Y as a,$ as e,X as i,D as c}from"./framework-1e9ccf99.js";const r={},o=i(`<h2 id="账户管理" tabindex="-1"><a class="header-anchor" href="#账户管理" aria-hidden="true">#</a> 账户管理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span>	   //一般用户,有时需要用户自己的密码
<span class="token function">su</span>         //切换root用户权限，输入后需要rootpassword确认
<span class="token function">sudo</span> <span class="token function">su</span>    //临时申请root权限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件管理" tabindex="-1"><a class="header-anchor" href="#文件管理" aria-hidden="true">#</a> 文件管理</h2><h3 id="访问权限" tabindex="-1"><a class="header-anchor" href="#访问权限" aria-hidden="true">#</a> 访问权限</h3>`,4),u={href:"https://www.jianshu.com/p/4720cbedd790",target:"_blank",rel:"noopener noreferrer"},p={href:"https://blog.csdn.net/everything1209/article/details/22292025",target:"_blank",rel:"noopener noreferrer"},v=i(`<h3 id="cd传送" tabindex="-1"><a class="header-anchor" href="#cd传送" aria-hidden="true">#</a> cd传送</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/                          //回到当前目录上一层目录
<span class="token builtin class-name">cd</span> -                            //回到上一次所在的目录
<span class="token builtin class-name">cd</span> ~                            //回到当前用户的宿主目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ls列表命令" tabindex="-1"><a class="header-anchor" href="#ls列表命令" aria-hidden="true">#</a> ls列表命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span>                              //当前目录列表（排除隐藏文件）
<span class="token function">ls</span> <span class="token parameter variable">-a</span>                           //当前目录列表（包含隐藏文件）
<span class="token function">ls</span> <span class="token parameter variable">-l</span>                           //当前目录文件详细信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本操作-增删重移" tabindex="-1"><a class="header-anchor" href="#基本操作-增删重移" aria-hidden="true">#</a> 基本操作（增删重移）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> 文件名                      //打开指定文件，并在终端显示

tree                           //显示当前路径下所有文件，用树形式
<span class="token function">mkdir</span> 目录名                    //创建一个目录
<span class="token function">rmdir</span> 空目录名                  //删除一个空目录

<span class="token function">rm</span> 文件名<span class="token punctuation">..</span>.                    //删除一个或多个文件
<span class="token function">rm</span> <span class="token parameter variable">-rf</span>                         //删除一个非空目录下的一切

<span class="token function">cp</span> 原文件 目标文件               //拷贝
cp-i 原文件 目标文件             //带提示的拷贝

<span class="token function">mv</span> 原文件路径 目标路径            //剪切
<span class="token function">mv</span> 文件名 新名字                 //当前目录重命名
    
<span class="token function">touch</span> 文件名                    //修改文件或者目录的时间属性,文件不存在自动创建
<span class="token function">vi</span> 文件路径                     //编辑文件，使用vim则为vim 文件路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apt命令" tabindex="-1"><a class="header-anchor" href="#apt命令" aria-hidden="true">#</a> apt命令</h2><p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/Snapshot/support/info.svg" alt="" loading="lazy"> <code>apt</code>可以理解为Ubuntu对<code>apt-get</code>的封装，因而二者命令相通</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> packagename			//安装包
<span class="token function">sudo</span> <span class="token function">apt-get</span> remove packagename				//删除包
<span class="token function">sudo</span> <span class="token function">apt-get</span> remove package -- purge		//删除包以及配置文件
<span class="token function">sudo</span> <span class="token function">apt-get</span> update							//更新源
<span class="token function">sudo</span> <span class="token function">apt-get</span> upgrade						//更新已安装软件
<span class="token function">sudo</span> <span class="token function">apt-get</span> dist-upgrade					//升级系统
<span class="token function">sudo</span> <span class="token function">apt</span> autoremove							//删除过时安装包,注意检查系统文件有无缺失
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ubuntu-restricted-extras	//安装带版权视频编码器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开关机" tabindex="-1"><a class="header-anchor" href="#开关机" aria-hidden="true">#</a> 开关机</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemd-analyze blame	<span class="token comment">#开机启动项时间降序</span>

systemctl disable <span class="token string">&quot;启动项名&quot;</span>	取消启动项
systemctl mask <span class="token string">&quot;启动项名&quot;</span>	mask取消启动项
systemctl unmask <span class="token string">&quot;启动项名&quot;</span>	  恢复mask启动项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="snap命令" tabindex="-1"><a class="header-anchor" href="#snap命令" aria-hidden="true">#</a> Snap命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>snap list 					//列出已安装的snap包
snap <span class="token function">install</span> package-name	//安装指定snap包
snap remove package-name	//移除指定snap包
snap revert package-name	//还原指定snap包原先版本
snap refresh				//更新包，如果不填，默认所有
snap <span class="token function">find</span> package-name		//查找指定包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="报错分类" tabindex="-1"><a class="header-anchor" href="#报错分类" aria-hidden="true">#</a> 报错分类</h2>`,14),m={href:"https://www.cnblogs.com/wenchaoz/p/8982122.html",target:"_blank",rel:"noopener noreferrer"};function h(b,k){const s=c("ExternalLinkIcon");return l(),d("div",null,[o,n("ul",null,[n("li",null,[n("p",null,[n("a",u,[a("Linux 文件访问权限"),e(s)])])]),n("li",null,[n("p",null,[n("a",p,[a("Linux 文件所属用户及用户组"),e(s)])])])]),v,n("ul",null,[n("li",null,[n("a",m,[a("Host SMBus controller not enabled"),e(s)])])])])}const g=t(r,[["render",h],["__file","system.html.vue"]]);export{g as default};
