import{_ as a,V as r,W as h,X as e,Z as t,Y as d}from"./framework-1e9ccf99.js";const i={},l=e('<h1 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h1><blockquote><p>!important&gt;行内样式&gt;id选择器&gt;类选择器&gt;标签选择器&gt;通配符选择器&gt;继承</p></blockquote><h2 id="一般选择器" tabindex="-1"><a class="header-anchor" href="#一般选择器" aria-hidden="true">#</a> 一般选择器</h2><ul><li>标签</li><li>id</li><li>class</li><li><ul><li></li></ul></li></ul><h2 id="复合选择器" tabindex="-1"><a class="header-anchor" href="#复合选择器" aria-hidden="true">#</a> 复合选择器</h2><h3 id="后代选择器" tabindex="-1"><a class="header-anchor" href="#后代选择器" aria-hidden="true">#</a> 后代选择器</h3>',6),n=t("p",{css:""},"选择器1 选择器2",-1),o=t("h3",{id:"子代选择器",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#子代选择器","aria-hidden":"true"},"#"),d(" 子代选择器")],-1),s=t("p",{css:""},[d("选择器1"),t("kbd",null,">"),d("选择器2")],-1),c=t("h3",{id:"并集选择器",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#并集选择器","aria-hidden":"true"},"#"),d(" 并集选择器")],-1),b=t("p",{css:""},[d("选择器1"),t("kbd",null,","),d("选择器2")],-1),u=e('<h3 id="交集选择器" tabindex="-1"><a class="header-anchor" href="#交集选择器" aria-hidden="true">#</a> 交集选择器</h3><p>标签名<kbd>.</kbd>选择器</p><h2 id="结构伪类选择器" tabindex="-1"><a class="header-anchor" href="#结构伪类选择器" aria-hidden="true">#</a> 结构伪类选择器</h2><table><thead><tr><th>选择器</th><th>说明</th></tr></thead><tbody><tr><td>E:first-child{}</td><td>匹配父元素第一个子元素，并且是E元素</td></tr><tr><td>E:last-child{}</td><td>匹配父元素最后一个子元素，并且是E元素</td></tr><tr><td>E:nth-child(n){}</td><td>匹配父元素中的第n个元素，并且是E元素</td></tr><tr><td>E:nth-last-child(n){}</td><td>匹配父元素中倒数第n个元素，并且是E元素</td></tr></tbody></table><blockquote><p>n的注意点</p></blockquote><table><thead><tr><th>功能</th><th>公式</th></tr></thead><tbody><tr><td>偶数</td><td>2n、even</td></tr><tr><td>奇数</td><td>2n-1、2n+1、odd</td></tr><tr><td>找到前5个</td><td>-n+5</td></tr><tr><td>找到从第五个往后</td><td>n+5</td></tr></tbody></table><h2 id="伪元素" tabindex="-1"><a class="header-anchor" href="#伪元素" aria-hidden="true">#</a> 伪元素</h2><table><thead><tr><th>伪元素</th><th>作用</th></tr></thead><tbody><tr><td>::before</td><td>在父元素内容的最前面添加一个伪元素</td></tr><tr><td>::after</td><td>在父元素内容的最后面添加一个伪元素</td></tr></tbody></table><blockquote><p>必须设置<code>content</code>属性才能生效 伪元素默认是行内样式</p></blockquote><h3 id="emmet语法" tabindex="-1"><a class="header-anchor" href="#emmet语法" aria-hidden="true">#</a> Emmet语法</h3><table><thead><tr><th>记忆</th><th>示例</th><th>效果</th></tr></thead><tbody><tr><td>标签名</td><td>div</td><td><div></div></td></tr><tr><td>类选择器</td><td>.red</td><td><div class="red"></div></td></tr><tr><td>id选择器</td><td>#one</td><td><div id="one"></div></td></tr><tr><td>交集选择器</td><td>p.red#one</td><td><p class="red" id="one"></p></td></tr><tr><td>子代选择器</td><td>ul&gt;li</td><td><ul><li></li></ul></td></tr><tr><td>内部文本</td><td>ul&gt;li(li的内容)</td><td><ul><li>li的内容</li></ul></td></tr><tr><td>创建多个</td><td>ul&gt;li*3</td><td><ul><li></li><li></li><li></li></ul></td></tr></tbody></table>',11),_=[l,n,o,s,c,b,u];function f(p,x){return r(),h("div",null,_)}const k=a(i,[["render",f],["__file","selector.html.vue"]]);export{k as default};
