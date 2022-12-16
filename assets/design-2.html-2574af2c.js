import{_ as t,V as d,W as r,X as e}from"./framework-1e9ccf99.js";const o={},c=e('<h1 id="運算符" tabindex="-1"><a class="header-anchor" href="#運算符" aria-hidden="true">#</a> 運算符</h1><table><thead><tr><th>優先級</th><th>運算符</th><th>含義</th><th>運算對象個數</th><th>結合方向</th></tr></thead><tbody><tr><td>1</td><td>()</td><td>圓括號</td><td></td><td>自左向右</td></tr><tr><td>1</td><td>[]</td><td>下標運算符</td><td></td><td>自左向右</td></tr><tr><td>1</td><td>-&gt;</td><td>指向結構體成員運算符</td><td></td><td>自左向右</td></tr><tr><td>1</td><td>.</td><td>結構體成員運算符</td><td></td><td>自左向右</td></tr><tr><td>2</td><td>!</td><td>邏輯非運算符</td><td>單目運算符</td><td><code>自右向左</code></td></tr><tr><td>2</td><td>~</td><td>邏輯取反運算符</td><td>單目運算符</td><td><code>自右向左</code></td></tr><tr><td>2</td><td>++</td><td>自增運算符</td><td>單目運算符</td><td><code>自右向左</code></td></tr><tr><td>2</td><td>--</td><td>自減運算符</td><td>單目運算符</td><td><code>自右向左</code></td></tr><tr><td>2</td><td>-</td><td>負號運算符</td><td>單目運算符</td><td><code>自右向左</code></td></tr><tr><td>2</td><td>(類型)</td><td>類型轉換運算符</td><td>單目運算符</td><td><code>自右向左</code></td></tr><tr><td>2</td><td>*</td><td>指針運算符</td><td>單目運算符</td><td><code>自右向左</code></td></tr><tr><td>2</td><td>&amp;</td><td>取地址運算符</td><td>單目運算符</td><td><code>自右向左</code></td></tr><tr><td>2</td><td>sizeof</td><td>長度運算符</td><td>單目運算符</td><td><code>自右向左</code></td></tr><tr><td>3</td><td>*</td><td>乘法運算符</td><td>雙目運算符</td><td>自左向右</td></tr><tr><td>3</td><td>/</td><td>除法運算符</td><td>雙目運算符</td><td>自左向右</td></tr><tr><td>3</td><td>%</td><td>求余運算符</td><td>雙目運算符</td><td>自左向右</td></tr><tr><td>4</td><td>+</td><td>加法運算符</td><td>雙目運算符</td><td>自左向右</td></tr><tr><td>4</td><td>-</td><td>減法運算符</td><td>雙目運算符</td><td>自左向右</td></tr><tr><td>5</td><td>&lt;&lt;</td><td>左移運算符</td><td>雙目運算符</td><td>自左向右</td></tr><tr><td>5</td><td>&gt;&gt;</td><td>右移運算符</td><td>雙目運算符</td><td>自左向右</td></tr><tr><td>6</td><td>&lt;</td><td>關系運算符</td><td>雙目運算符</td><td>自左向右</td></tr><tr><td>6</td><td>&lt;=</td><td>關系運算符</td><td>雙目運算符</td><td>自左向右</td></tr><tr><td>6</td><td>&gt;</td><td>關系運算符</td><td>雙目運算符</td><td>自左向右</td></tr><tr><td>6</td><td>&gt;=</td><td>關系運算符</td><td>雙目運算符</td><td>自左向右</td></tr><tr><td>7</td><td>==</td><td>等於運算符</td><td>雙目運算符</td><td>自左向右</td></tr><tr><td>7</td><td>!=</td><td>不等於運算符</td><td>雙目運算符</td><td>自左向右</td></tr><tr><td>8</td><td>&amp;</td><td>按位與運算符</td><td>雙目運算符</td><td>自左向右</td></tr><tr><td>9</td><td>^</td><td>按位異或運算符</td><td>雙目運算符</td><td>自左向右</td></tr><tr><td>10</td><td>|</td><td>按位或運算符</td><td>雙目運算符</td><td>自左向右</td></tr><tr><td>11</td><td>&amp;&amp;</td><td>邏輯與運算符</td><td>雙目運算符</td><td>自左向右</td></tr><tr><td>12</td><td>||</td><td>邏輯非運算符</td><td>雙目運算符</td><td>自左向右</td></tr><tr><td>13</td><td>?:</td><td>條件運算符</td><td>三目運算符</td><td>自左向右</td></tr><tr><td>14</td><td>=</td><td>賦值運算符</td><td>雙目運算符</td><td><code>自右向左</code></td></tr><tr><td>14</td><td>+=</td><td>賦值運算符</td><td>雙目運算符</td><td><code>自右向左</code></td></tr><tr><td>14</td><td>-=</td><td>賦值運算符</td><td>雙目運算符</td><td><code>自右向左</code></td></tr><tr><td>14</td><td>*=</td><td>賦值運算符</td><td>雙目運算符</td><td><code>自右向左</code></td></tr><tr><td>14</td><td>/=</td><td>賦值運算符</td><td>雙目運算符</td><td><code>自右向左</code></td></tr><tr><td>14</td><td>%/</td><td>賦值運算符</td><td>雙目運算符</td><td><code>自右向左</code></td></tr><tr><td>14</td><td>&gt;&gt;=</td><td>賦值運算符</td><td>雙目運算符</td><td><code>自右向左</code></td></tr><tr><td>14</td><td>&lt;&lt;=</td><td>賦值運算符</td><td>雙目運算符</td><td><code>自右向左</code></td></tr><tr><td>14</td><td>&amp;=</td><td>賦值運算符</td><td>雙目運算符</td><td><code>自右向左</code></td></tr><tr><td>14</td><td>^=</td><td>賦值運算符</td><td>雙目運算符</td><td><code>自右向左</code></td></tr><tr><td>14</td><td>|=</td><td>賦值運算符</td><td>雙目運算符</td><td><code>自右向左</code></td></tr><tr><td>15</td><td>,</td><td>逗號運算符</td><td>雙目運算符</td><td>自左向右</td></tr></tbody></table>',2),a=[c];function h(s,l){return d(),r("div",null,a)}const _=t(o,[["render",h],["__file","design-2.html.vue"]]);export{_ as default};