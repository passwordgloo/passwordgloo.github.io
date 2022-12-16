const t=JSON.parse(`{"key":"v-600747e8","path":"/c/order-1.html","title":"顺序程序设计（1）","lang":"zh-CN","frontmatter":{"title":"顺序程序设计（1）","date":"2022-07-30T00:00:00.000Z","icon":"code","order":7,"description":"18.1转义字符 转义字符 字符值 输出结果 转义字符 字符值 输出结果 \\\\' 一个单撇号(') 具有此8进制的字符 \\\\\\" 一个双撇号(\\") 输出此字符 ? 一个问号(?) 输出此字符 \\\\\\\\ 一个反斜线(\\\\) 输出此字符 \\\\a 警告 产生视觉或声音信号 \\\\b 退格 将当前位置后退一个字符 \\\\f 换页 将当前位置移到下一页的开头 \\\\n 换行 将当前位置移到下一行的开头 \\\\r 回车 将当前位置移到本行的开头 \\\\t 水平制表符 将当前位置移到下一个Tab位置 \\\\v 垂直制表符 将当前位置移到下一个垂直制表对齐点 \\\\o、\\\\oo、\\\\ooo ASCII码 \\\\xh[h=……](16进制数字) 与该16进制码对的ASCII字符 与该16进制码对应的字符","head":[["meta",{"property":"og:url","content":"https://passwordgloo-github-io.vercel.app/c/order-1.html"}],["meta",{"property":"og:site_name","content":"麦田守望者文档库"}],["meta",{"property":"og:title","content":"顺序程序设计（1）"}],["meta",{"property":"og:description","content":"18.1转义字符 转义字符 字符值 输出结果 转义字符 字符值 输出结果 \\\\' 一个单撇号(') 具有此8进制的字符 \\\\\\" 一个双撇号(\\") 输出此字符 ? 一个问号(?) 输出此字符 \\\\\\\\ 一个反斜线(\\\\) 输出此字符 \\\\a 警告 产生视觉或声音信号 \\\\b 退格 将当前位置后退一个字符 \\\\f 换页 将当前位置移到下一页的开头 \\\\n 换行 将当前位置移到下一行的开头 \\\\r 回车 将当前位置移到本行的开头 \\\\t 水平制表符 将当前位置移到下一个Tab位置 \\\\v 垂直制表符 将当前位置移到下一个垂直制表对齐点 \\\\o、\\\\oo、\\\\ooo ASCII码 \\\\xh[h=……](16进制数字) 与该16进制码对的ASCII字符 与该16进制码对应的字符"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"zh-TW"}],["meta",{"property":"article:published_time","content":"2022-07-30T00:00:00.000Z"}],["link",{"rel":"alternate","hreflang":"zh-tw","href":"https://passwordgloo-github-io.vercel.app/tw/c/order-1.html"}]]},"headers":[{"level":2,"title":"18.1转义字符","slug":"_18-1转义字符","link":"#_18-1转义字符","children":[]},{"level":2,"title":"18.2字面常量","slug":"_18-2字面常量","link":"#_18-2字面常量","children":[]},{"level":2,"title":"18.3符号常量和常变量","slug":"_18-3符号常量和常变量","link":"#_18-3符号常量和常变量","children":[]},{"level":2,"title":"18.4补码","slug":"_18-4补码","link":"#_18-4补码","children":[{"level":3,"title":"n进制补码的整数范围","slug":"n进制补码的整数范围","link":"#n进制补码的整数范围","children":[]},{"level":3,"title":"整型数据常见的存储空间和值的范围","slug":"整型数据常见的存储空间和值的范围","link":"#整型数据常见的存储空间和值的范围","children":[]}]},{"level":2,"title":"18.5整型数据类型转换","slug":"_18-5整型数据类型转换","link":"#_18-5整型数据类型转换","children":[]}],"git":{},"readingTime":{"minutes":5.5,"words":1651},"filePathRelative":"c/order-1.md","localizedDate":"2022年7月30日","excerpt":"<h2> 18.1转义字符</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>转义字符</th>\\n<th>字符值</th>\\n<th>输出结果</th>\\n<th>转义字符</th>\\n<th>字符值</th>\\n<th>输出结果</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>\\\\'</td>\\n<td>一个单撇号(')</td>\\n<td>具有此8进制的字符</td>\\n<td>\\\\\\"</td>\\n<td>一个双撇号(\\")</td>\\n<td>输出此字符</td>\\n</tr>\\n<tr>\\n<td>?</td>\\n<td>一个问号(?)</td>\\n<td>输出此字符</td>\\n<td>\\\\\\\\</td>\\n<td>一个反斜线(\\\\)</td>\\n<td>输出此字符</td>\\n</tr>\\n<tr>\\n<td>\\\\a</td>\\n<td>警告</td>\\n<td>产生视觉或声音信号</td>\\n<td>\\\\b</td>\\n<td>退格</td>\\n<td>将当前位置后退一个字符</td>\\n</tr>\\n<tr>\\n<td><code>\\\\f</code></td>\\n<td>换页</td>\\n<td>将当前位置移到下一页的开头</td>\\n<td>\\\\n</td>\\n<td>换行</td>\\n<td>将当前位置移到下一行的开头</td>\\n</tr>\\n<tr>\\n<td><code>\\\\r</code></td>\\n<td>回车</td>\\n<td>将当前位置移到本行的开头</td>\\n<td>\\\\t</td>\\n<td>水平制表符</td>\\n<td>将当前位置移到下一个Tab位置</td>\\n</tr>\\n<tr>\\n<td>\\\\v</td>\\n<td>垂直制表符</td>\\n<td>将当前位置移到下一个垂直制表对齐点</td>\\n<td>\\\\o、\\\\oo、\\\\ooo</td>\\n<td>ASCII码</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>\\\\xh[h=……](16进制数字)</td>\\n<td>与该16进制码对的ASCII字符</td>\\n<td>与该16进制码对应的字符</td>\\n<td></td>\\n<td></td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}`);export{t as data};
