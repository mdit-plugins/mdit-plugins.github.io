import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c as d,e as k,a as n,b as s,d as c,w as a,f as i}from"./app-Dh0Ds2zq.js";const m={},v=n("p",null,"用于在 Markdown 中导入代码片段的插件。",-1),b={id:"使用",tabindex:"-1"},g={class:"header-anchor",href:"#使用"},h=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" MarkdownIt "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" snippet "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@mdit/plugin-snippet"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" mdIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("snippet"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 你的选项，currentPath 是必填的"),s(`
  `),n("span",{class:"token function-variable function"},"currentPath"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("env"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" env"),n("span",{class:"token punctuation"},"."),s("filePath"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<<< example.ts"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  filePath`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"path/to/current/file.md"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" MarkdownIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" snippet "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@mdit/plugin-snippet"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" mdIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("snippet"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 你的选项，currentPath 是必填的"),s(`
  `),n("span",{class:"token function-variable function"},"currentPath"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"env"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" env"),n("span",{class:"token punctuation"},"."),s("filePath"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<<< example.js"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"filePath"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"path/to/current/file.md"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=i(`<p>由于 markdown-it 仅在 <code>render()</code> api 中接收 markdown 内容，因此插件不知道当前内容的文件路径，因此不知道在哪里可以找到包含文件。</p><p>要解决这个问题，你应该通过 env 对象传递信息，并在插件选项中设置 <code>currentPath</code>。</p><p><code>currentPath</code> 函数将接收 <code>env</code> 对象并返回当前文件的路径。</p><p>此外，要支持别名，你可以在插件选项中设置 <code>resolvePath</code>。</p><p>例如，以下代码添加了对 <code>@src</code> 别名的支持：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> MarkdownIt <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;markdown-it&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> snippet <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;@mdit/plugin-snippet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> mdIt <span class="token operator">=</span> <span class="token function">MarkdownIt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mdIt<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>snippet<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">currentPath</span><span class="token operator">:</span> <span class="token punctuation">(</span>env<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> env<span class="token punctuation">.</span>filePath<span class="token punctuation">,</span>
  <span class="token function-variable function">resolvePath</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token punctuation">,</span> cwd<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;@src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;@src&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;path/to/src/folder&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>cwd<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式"><span>格式</span></a></h2><p>使用 <code>&lt;&lt;&lt; filename</code> 截取代码片段。 如果你想突出显示特定的行，你可以使用 <code>{lines}</code> 来做到这一点。</p><p>您也可以在末尾使用 <code>#regionName</code> 截取文件区域。</p><p>例子:</p><ul><li><code>&lt;&lt;&lt; example.html</code> 导入 <code>example.html</code> 作为片段</li><li><code>&lt;&lt;&lt; example.js{1,3,7-9}</code>。 将 <code>example.js</code> 作为代码段导入并突出显示第 1、3、7 到 9 行</li><li><code>&lt;&lt;&lt; example.css#normalize</code> 在 <code>example.css</code> 中导入 <code>normalize</code> 片段</li><li><code>&lt;&lt;&lt; example.ts#plugin{2-5}</code> 在 <code>example.ts</code> 中导入 <code>plugin</code> 片段并突出显示第 1 到 3 行</li></ul><div class="hint-container note"><p class="hint-container-title">注</p><p>行高亮需要其他插件支持，插件只提供高亮信息给代码块。</p></div>`,12),w={class:"hint-container info"},_=n("p",{class:"hint-container-title"},"文件区域",-1),x=n("p",null,[s("文件区域是 vscode 中的一个概念，区域内容被 "),n("code",null,"#region"),s(" 和 "),n("code",null,"#endregion"),s(" 注释包围。")],-1),q=n("p",null,"这里有些例子：",-1),A=n("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"doctype"),s(),n("span",{class:"token name"},"html"),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("html")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("zh-CN"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("head")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("meta")]),s(),n("span",{class:"token attr-name"},"charset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("UTF-8"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("meta")]),s(),n("span",{class:"token attr-name"},"http-equiv"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("X-UA-Compatible"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("IE=edge"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("meta")]),s(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("viewport"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("width=device-width, initial-scale=1.0"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("title")]),n("span",{class:"token punctuation"},">")]),s("Document"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("title")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("head")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("body")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token comment"},"<!-- region snippet -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
      repellendus. Voluptatibus alias cupiditate at, fuga tenetur error officiis
      provident quisquam autem, porro facere! Neque quibusdam animi quaerat
      eligendi recusandae eaque.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token comment"},"<!-- endregion snippet -->"),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
      Veniam harum illum natus omnis necessitatibus numquam architecto eum
      dignissimos, quos a adipisci et non quam maxime repellendus alias ipsum,
      vero praesentium laborum commodi perferendis velit repellat? Vero,
      cupiditate sequi.
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("body")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("html")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md","data-title":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token title important"},[n("span",{class:"token punctuation"},"##"),s(" Hello world")]),s(`

`),n("span",{class:"token comment"},"<!-- #region snippet -->"),s(`

Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
inventore iure quo aut doloremque, ipsum ab voluptatem ipsa, velit laborum
illo quae omnis reiciendis hic, ut dolorem non debitis in!

`),n("span",{class:"token comment"},"<!-- #endregion snippet -->"),s(`

Veniam harum illum natus omnis necessitatibus numquam architecto eum
dignissimos, quos a adipisci et non quam maxime repellendus alias ipsum,
vero praesentium laborum commodi perferendis velit repellat? Vero,
cupiditate sequi.
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" MarkdownIt "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" snippet "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@mdit/plugin-snippet"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// #region snippet"),s(`
`),n("span",{class:"token keyword"},"const"),s(" mdIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("snippet"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 你的选项，currentPath 是必填的"),s(`
  `),n("span",{class:"token function-variable function"},"currentPath"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("env"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" env"),n("span",{class:"token punctuation"},"."),s("filePath"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// #endregion snippet"),s(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@snippet(./path/to/snippet/file.md)"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  filePath`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"path/to/current/file.md"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" MarkdownIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" snippet "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@mdit/plugin-snippet"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// #region snippet"),s(`
`),n("span",{class:"token keyword"},"const"),s(" mdIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("snippet"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 你的选项，currentPath 是必填的"),s(`
  `),n("span",{class:"token function-variable function"},"currentPath"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"env"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" env"),n("span",{class:"token punctuation"},"."),s("filePath"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// #endregion snippet"),s(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@snippet(./path/to/snippet/file.md)"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"filePath"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"path/to/current/file.md"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-css line-numbers-mode","data-ext":"css","data-title":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},`html,
body`),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"/* #region snippet */"),s(`
`),n("span",{class:"token selector"},"h1"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 1.5rem"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"/* #endregion snippet */"),s(`

`),n("span",{class:"token selector"},"h2"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 1.2rem"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-less line-numbers-mode","data-ext":"less","data-title":"less"},[n("pre",{class:"language-less"},[n("code",null,[n("span",{class:"token selector"},`html,
body`),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"/* #region snippet */"),s(`
`),n("span",{class:"token selector"},"h1"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 1.5rem"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"/* #endregion snippet */"),s(`

`),n("span",{class:"token selector"},"h2"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 1.2rem"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-scss line-numbers-mode","data-ext":"scss","data-title":"scss"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token selector"},`html,
body `),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"/* #region snippet */"),s(`
`),n("span",{class:"token selector"},"h1 "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 1.5rem"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"/* #endregion snippet */"),s(`

`),n("span",{class:"token selector"},"h2 "),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 1.2rem"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-java","data-ext":"java","data-title":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"HelloWorld"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// #region snippet"),s(`
  `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" args"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Hello World"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// #endregion snippet"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),z=n("div",{class:"language-python line-numbers-mode","data-ext":"py","data-title":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"MyClass"),n("span",{class:"token punctuation"},":"),s(`
    msg `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"world"'),s(`

    `),n("span",{class:"token comment"},"#region snippet"),s(`
    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"sayHello"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Hello "'),s(),n("span",{class:"token operator"},"+"),s(" self"),n("span",{class:"token punctuation"},"."),s("msg "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},'"!"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token comment"},"#region snippet"),s(`

    `),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"sayBye"),n("span",{class:"token punctuation"},"("),s("self"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Bye "'),s(),n("span",{class:"token operator"},"+"),s(" self"),n("span",{class:"token punctuation"},"."),s("msg "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},'"!"'),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-vb line-numbers-mode","data-ext":"vb","data-title":"vb"},[n("pre",{class:"language-vb"},[n("code",null,[n("span",{class:"token keyword"},"Imports"),s(` System

`),n("span",{class:"token keyword"},"Module"),s(` Module1
   `),n("span",{class:"token operator"},"#"),s(` Region snippet
   `),n("span",{class:"token keyword"},"Sub"),s(" Main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
     Console`),n("span",{class:"token punctuation"},"."),s("WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Hello World!"'),n("span",{class:"token punctuation"},")"),s(`
     Console`),n("span",{class:"token punctuation"},"."),s("WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Press Enter Key to Exit."'),n("span",{class:"token punctuation"},")"),s(`
     Console`),n("span",{class:"token punctuation"},"."),s("ReadLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
   `),n("span",{class:"token keyword"},"End"),s(),n("span",{class:"token keyword"},"Sub"),s(`
   `),n("span",{class:"token operator"},"#"),s(` EndRegion
`),n("span",{class:"token keyword"},"End"),s(),n("span",{class:"token keyword"},"Module"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-bat line-numbers-mode","data-ext":"bat","data-title":"bat"},[n("pre",{class:"language-bat"},[n("code",null,`>nul 2>&1 "%SYSTEMROOT%\\system32\\cacls.exe" "%SYSTEMROOT%\\system32\\config\\system"
if '%errorlevel%' NEQ '0' (
echo Requesting administrative privileges...
goto UACPrompt
) else ( goto gotAdmin )

::#region snippet
:UACPrompt
echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\\getadmin.vbs"
echo UAC.ShellExecute "%~s0", "", "", "runas", 1 >> "%temp%\\getadmin.vbs"
"%temp%\\getadmin.vbs"
exit /B
::#endregion snippet

:gotAdmin
if exist "%temp%\\getadmin.vbs" ( del "%temp%\\getadmin.vbs" )
pushd "%CD%"
CD /D "%~dp0"
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs","data-title":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token namespace"},"System"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"namespace"),s(),n("span",{class:"token namespace"},"HelloWorldApp"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Geeks"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token comment"},"// #region snippet"),s(`
        `),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"void")]),s(),n("span",{class:"token function"},"Main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),s(" args"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

            `),n("span",{class:"token comment"},"// statement"),s(`
            `),n("span",{class:"token comment"},"// printing Hello World!"),s(`
            Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Hello World!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token comment"},"// To prevents the screen from"),s(`
            `),n("span",{class:"token comment"},"// running and closing quickly"),s(`
            Console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// #endregion snippet"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=i(`<div class="hint-container tip"><p class="hint-container-title">Escaping</p><ul><li><p>You can escape <code>&lt;</code> by <code>\\</code></p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>\\&lt;&lt;&lt; test.js
</code></pre></div><p>will be</p><p>&lt;&lt;&lt; test.js</p></li></ul></div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MarkdownItSnippetOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 获得当前文件路径
   *
   * <span class="token keyword">@default</span> (path) =&gt; path
   */</span>
  <span class="token function-variable function">currentPath</span><span class="token operator">:</span> <span class="token punctuation">(</span>env<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 处理 include 文件路径
   *
   * <span class="token keyword">@default</span> (path) =&gt; path
   */</span>
  resolvePath<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> cwd<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p><code>&lt;&lt;&lt; @snippets/example.css</code>:</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">html,
body</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* #region snippet */</span>
<span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* #endregion snippet */</span>

<span class="token selector">h2</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;&lt;&lt; @snippets/example.ts#snippet</code>:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> mdIt <span class="token operator">=</span> <span class="token function">MarkdownIt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>snippet<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// your options, currentPath is required</span>
  <span class="token function-variable function">currentPath</span><span class="token operator">:</span> <span class="token punctuation">(</span>env<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> env<span class="token punctuation">.</span>filePath<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div><p><code>&lt;&lt;&lt; @snippets/example.html#snippet{2-5}</code>:</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
  repellendus. Voluptatibus alias cupiditate at, fuga tenetur error officiis
  provident quisquam autem, porro facere! Neque quibusdam animi quaerat
  eligendi recusandae eaque.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div></div></div>`,10);function H(L,W){const p=l("Badge"),o=l("CodeTabs");return r(),d("div",null,[v,k(" more "),n("h2",b,[n("a",g,[n("span",null,[s("使用 "),c(p,{text:"仅限 Node.js 环境"})])])]),c(o,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:t,isActive:e})=>[s("TS")]),title1:a(({value:t,isActive:e})=>[s("JS")]),tab0:a(({value:t,isActive:e})=>[h]),tab1:a(({value:t,isActive:e})=>[y]),_:1}),f,n("div",w,[_,x,q,c(o,{id:"77",data:[{id:"HTML"},{id:"Markdown"},{id:"TS"},{id:"JS"},{id:"css"},{id:"Less"},{id:"Sass"},{id:"Java"},{id:"Python"},{id:"Visual Basic"},{id:"Bat"},{id:"C"}],"tab-id":"language"},{title0:a(({value:t,isActive:e})=>[s("HTML")]),title1:a(({value:t,isActive:e})=>[s("Markdown")]),title2:a(({value:t,isActive:e})=>[s("TS")]),title3:a(({value:t,isActive:e})=>[s("JS")]),title4:a(({value:t,isActive:e})=>[s("css")]),title5:a(({value:t,isActive:e})=>[s("Less")]),title6:a(({value:t,isActive:e})=>[s("Sass")]),title7:a(({value:t,isActive:e})=>[s("Java")]),title8:a(({value:t,isActive:e})=>[s("Python")]),title9:a(({value:t,isActive:e})=>[s("Visual Basic")]),title10:a(({value:t,isActive:e})=>[s("Bat")]),title11:a(({value:t,isActive:e})=>[s("C")]),tab0:a(({value:t,isActive:e})=>[A]),tab1:a(({value:t,isActive:e})=>[P]),tab2:a(({value:t,isActive:e})=>[M]),tab3:a(({value:t,isActive:e})=>[S]),tab4:a(({value:t,isActive:e})=>[I]),tab5:a(({value:t,isActive:e})=>[C]),tab6:a(({value:t,isActive:e})=>[j]),tab7:a(({value:t,isActive:e})=>[T]),tab8:a(({value:t,isActive:e})=>[z]),tab9:a(({value:t,isActive:e})=>[E]),tab10:a(({value:t,isActive:e})=>[N]),tab11:a(({value:t,isActive:e})=>[V]),_:1})]),B])}const O=u(m,[["render",H],["__file","snippet.html.vue"]]),U=JSON.parse('{"path":"/zh/snippet.html","title":"@mdit/plugin-snippet","lang":"zh-CN","frontmatter":{"title":"@mdit/plugin-snippet","icon":"context","description":"用于在 Markdown 中导入代码片段的插件。 使用 由于 markdown-it 仅在 render() api 中接收 markdown 内容，因此插件不知道当前内容的文件路径，因此不知道在哪里可以找到包含文件。 要解决这个问题，你应该通过 env 对象传递信息，并在插件选项中设置 currentPath。 currentPath 函数将接收 e...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://mdit-plugins.mister-hope.com/snippet.html"}],["meta",{"property":"og:url","content":"https://mdit-plugins.mister-hope.com/zh/snippet.html"}],["meta",{"property":"og:site_name","content":"Markdown It 插件"}],["meta",{"property":"og:title","content":"@mdit/plugin-snippet"}],["meta",{"property":"og:description","content":"用于在 Markdown 中导入代码片段的插件。 使用 由于 markdown-it 仅在 render() api 中接收 markdown 内容，因此插件不知道当前内容的文件路径，因此不知道在哪里可以找到包含文件。 要解决这个问题，你应该通过 env 对象传递信息，并在插件选项中设置 currentPath。 currentPath 函数将接收 e..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-25T05:09:54.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-25T05:09:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"@mdit/plugin-snippet\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-25T05:09:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"格式","slug":"格式","link":"#格式","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1672548771000,"updatedTime":1692940194000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":5}]},"readingTime":{"minutes":3.43,"words":1028},"filePathRelative":"zh/snippet.md","localizedDate":"2023年1月1日","autoDesc":true,"excerpt":"<p>用于在 Markdown 中导入代码片段的插件。</p>\\n"}');export{O as comp,U as data};
