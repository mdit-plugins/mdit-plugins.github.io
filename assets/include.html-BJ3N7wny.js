import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as d,c as k,e as i,a as n,b as s,d as o,w as a,f as l}from"./app-Dh0Ds2zq.js";const m={},v=n("p",null,"Plugin to include other files in markdown.",-1),b={id:"usage",tabindex:"-1"},g={class:"header-anchor",href:"#usage"},h=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" MarkdownIt "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" include "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@mdit/plugin-include"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" mdIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("include"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your options, currentPath is required"),s(`
  `),n("span",{class:"token function-variable function"},"currentPath"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("env"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" env"),n("span",{class:"token punctuation"},"."),s("filePath"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<!-- @include: ./path/to/include/file.md -->"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  filePath`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"path/to/current/file.md"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" MarkdownIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" include "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@mdit/plugin-include"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" mdIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("include"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your options, currentPath is required"),s(`
  `),n("span",{class:"token function-variable function"},"currentPath"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"env"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" env"),n("span",{class:"token punctuation"},"."),s("filePath"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<!-- @include: ./path/to/include/file.md -->"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"filePath"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"path/to/current/file.md"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=l(`<p>Since markdown-it only receive markdown content in <code>render()</code> api, so the plugin don&#39;t know the file path of current content so don&#39;t know where to find the include files.</p><p>To solve this, you should pass the information via <code>env</code> object, and set <code>currentPath</code> in plugin options.</p><p><code>currentPath</code> function will receive <code>env</code> object and should return path to current file.</p><p>Also, to support alias, you can set <code>resolvePath</code> in plugin options.</p><p>For example, the following code add support for <code>@src</code> alias:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> MarkdownIt <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;markdown-it&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> include <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;@mdit/plugin-include&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> mdIt <span class="token operator">=</span> <span class="token function">MarkdownIt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mdIt<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>include<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">currentPath</span><span class="token operator">:</span> <span class="token punctuation">(</span>env<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> env<span class="token punctuation">.</span>filePath<span class="token punctuation">,</span>
  <span class="token function-variable function">resolvePath</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token punctuation">,</span> cwd<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;@src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;@src&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;path/to/src/folder&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>cwd<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Also, by default, images and links in included files will be resolved relative to the imported file, however you can change this behavior by setting <code>resolveImagePath</code> and <code>resolveLinkPath</code> to <code>false</code> in plugin options.</p><p>Moreover, the plugin support <code>deep</code> function, which will handle nested <code>@include</code> in included files if this option is set to <code>true</code>.</p><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax"><span>Syntax</span></a></h2><p>Use <code>&lt;!-- @include: filename --&gt;</code> to include a file.</p><p>To partially import the file, you can specify the range of lines to be included:</p><ul><li><code>&lt;!-- @include: filename{start-end} --&gt;</code></li><li><code>&lt;!-- @include: filename{start-} --&gt;</code></li><li><code>&lt;!-- @include: filename{-end} --&gt;</code></li></ul><p>Also you can include file region:</p><ul><li><code>&lt;!-- @include: filename#region --&gt;</code></li></ul>`,14),w={class:"hint-container info"},_=n("p",{class:"hint-container-title"},"File region",-1),x=n("p",null,[s("File region is a concept in vscode, where the region content is surrounded by "),n("code",null,"#region"),s(" and "),n("code",null,"#endregion"),s(" comments.")],-1),q=n("p",null,"Here are some examples:",-1),A=n("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"doctype"),s(),n("span",{class:"token name"},"html"),n("span",{class:"token punctuation"},">")]),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" MarkdownIt "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" include "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@mdit/plugin-include"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// #region snippet"),s(`
`),n("span",{class:"token keyword"},"const"),s(" mdIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("include"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your options, currentPath is required"),s(`
  `),n("span",{class:"token function-variable function"},"currentPath"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("env"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" env"),n("span",{class:"token punctuation"},"."),s("filePath"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// #endregion snippet"),s(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<!-- @include: ./path/to/include/file.md -->"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  filePath`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"path/to/current/file.md"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" MarkdownIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" include "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@mdit/plugin-include"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// #region snippet"),s(`
`),n("span",{class:"token keyword"},"const"),s(" mdIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("include"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your options, currentPath is required"),s(`
  `),n("span",{class:"token function-variable function"},"currentPath"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"env"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" env"),n("span",{class:"token punctuation"},"."),s("filePath"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// #endregion snippet"),s(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<!-- @include: ./path/to/include/file.md -->"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"filePath"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"path/to/current/file.md"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-css line-numbers-mode","data-ext":"css","data-title":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},`html,
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-less line-numbers-mode","data-ext":"less","data-title":"less"},[n("pre",{class:"language-less"},[n("code",null,[n("span",{class:"token selector"},`html,
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-scss line-numbers-mode","data-ext":"scss","data-title":"scss"},[n("pre",{class:"language-scss"},[n("code",null,[n("span",{class:"token selector"},`html,
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=n("div",{class:"language-java","data-ext":"java","data-title":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"HelloWorld"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// #region snippet"),s(`
  `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" args"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Hello World"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// #endregion snippet"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),j=n("div",{class:"language-python line-numbers-mode","data-ext":"py","data-title":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"MyClass"),n("span",{class:"token punctuation"},":"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-bat line-numbers-mode","data-ext":"bat","data-title":"bat"},[n("pre",{class:"language-bat"},[n("code",null,`>nul 2>&1 "%SYSTEMROOT%\\system32\\cacls.exe" "%SYSTEMROOT%\\system32\\config\\system"
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
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),W=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs","data-title":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token namespace"},"System"),n("span",{class:"token punctuation"},";"),s(`

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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=l(`<div class="hint-container tip"><p class="hint-container-title">Nesting and Escaping</p><ul><li><p>Nesting is supported by setting <code>deep: true</code> in the options, the plugin recursively process the <code>&lt;!-- @include: --&gt;</code> syntax for imported Markdown files.</p></li><li><p>Escaping can be done by adding zeo-width space (<code>U+200B</code> or <code>&amp;#8203;</code>) before <code>&lt;!-- @include: --&gt;</code> syntax:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token entity" title="​">&amp;#8203;</span><span class="token comment">&lt;!-- @include: ./demo.snippet.md --&gt;</span>
</code></pre></div><p>will be</p><p>​<!-- @include: ./demo.snippet.md --></p></li></ul></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MarkdownItIncludeOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Get current filePath
   *
   * <span class="token keyword">@default</span> (path) =&gt; path
   */</span>
  <span class="token function-variable function">currentPath</span><span class="token operator">:</span> <span class="token punctuation">(</span>env<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * handle include filePath
   *
   * <span class="token keyword">@default</span> (path) =&gt; path
   */</span>
  resolvePath<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> cwd<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether deep include files in included Markdown files
   *
   * <span class="token keyword">@default</span> false
   */</span>
  deep<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether use \`&lt;!-- @include: xxx --&gt;\` instead of \`@include: xxx\` to include files
   *
   * <span class="token keyword">@default</span> true
   */</span>
  useComment<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether resolve the image related path in the included Markdown file
   *
   * <span class="token keyword">@default</span> true
   */</span>
  resolveImagePath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether resolve the related file link path in the included Markdown file
   *
   * <span class="token keyword">@default</span> true
   */</span>
  resolveLinkPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>Demo</span></a></h2><p><code>&lt;!-- @include: ./demo.snippet.md--&gt;</code>:</p><h2 id="heading-2" tabindex="-1"><a class="header-anchor" href="#heading-2"><span>Heading 2</span></a></h2>`,6),N=n("p",null,[s("Contents containing "),n("strong",null,"bolded text"),s(" and some markdown enhance features:")],-1),V=l(`<div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Hey how are <strong>you</strong>? 😄</p></div><p><code>&lt;!-- @include: ./demo.snippet.md{9-13} --&gt;</code>:</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Hey how are <strong>you</strong>? 😄</p></div><p><code>&lt;!-- @include: ./demo.snippet.md#snippet --&gt;</code>:</p><p>Contents containing <strong>bolded text</strong> and some markdown enhance features:</p><details class="hint-container details"><summary>Contents of demo.snippet.md</summary><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> Heading 2</span>

<span class="token comment">&lt;!-- #region snippet --&gt;</span>

Contents containing <span class="token bold"><span class="token punctuation">**</span><span class="token content">bolded text</span><span class="token punctuation">**</span></span> and some markdown enhance features:

<span class="token comment">&lt;!-- #endregion snippet --&gt;</span>

::: tip

Hey how are <span class="token bold"><span class="token punctuation">**</span><span class="token content">you</span><span class="token punctuation">**</span></span>? :smile:

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,6);function z(L,D){const u=p("Badge"),c=p("CodeTabs");return d(),k("div",null,[v,i(" more "),n("h2",b,[n("a",g,[n("span",null,[s("Usage "),o(u,{text:"Node.js runtime only"})])])]),o(c,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s("TS")]),title1:a(({value:e,isActive:t})=>[s("JS")]),tab0:a(({value:e,isActive:t})=>[h]),tab1:a(({value:e,isActive:t})=>[f]),_:1}),y,n("div",w,[_,x,q,o(c,{id:"80",data:[{id:"HTML"},{id:"Markdown"},{id:"TS"},{id:"JS"},{id:"css"},{id:"Less"},{id:"Sass"},{id:"Java"},{id:"Python"},{id:"Visual Basic"},{id:"Bat"},{id:"C"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s("HTML")]),title1:a(({value:e,isActive:t})=>[s("Markdown")]),title2:a(({value:e,isActive:t})=>[s("TS")]),title3:a(({value:e,isActive:t})=>[s("JS")]),title4:a(({value:e,isActive:t})=>[s("css")]),title5:a(({value:e,isActive:t})=>[s("Less")]),title6:a(({value:e,isActive:t})=>[s("Sass")]),title7:a(({value:e,isActive:t})=>[s("Java")]),title8:a(({value:e,isActive:t})=>[s("Python")]),title9:a(({value:e,isActive:t})=>[s("Visual Basic")]),title10:a(({value:e,isActive:t})=>[s("Bat")]),title11:a(({value:e,isActive:t})=>[s("C")]),tab0:a(({value:e,isActive:t})=>[A]),tab1:a(({value:e,isActive:t})=>[P]),tab2:a(({value:e,isActive:t})=>[S]),tab3:a(({value:e,isActive:t})=>[M]),tab4:a(({value:e,isActive:t})=>[C]),tab5:a(({value:e,isActive:t})=>[I]),tab6:a(({value:e,isActive:t})=>[T]),tab7:a(({value:e,isActive:t})=>[H]),tab8:a(({value:e,isActive:t})=>[j]),tab9:a(({value:e,isActive:t})=>[E]),tab10:a(({value:e,isActive:t})=>[U]),tab11:a(({value:e,isActive:t})=>[W]),_:1})]),B,i(" #region snippet "),N,i(" #endregion snippet "),V])}const J=r(m,[["render",z],["__file","include.html.vue"]]),F=JSON.parse(`{"path":"/include.html","title":"@mdit/plugin-include","lang":"en-US","frontmatter":{"title":"@mdit/plugin-include","icon":"at","gitInclude":["../src/demo.snippet.md","../src/demo.snippet.md","../src/demo.snippet.md"],"description":"Plugin to include other files in markdown. Usage Since markdown-it only receive markdown content in render() api, so the plugin don't know the file path of current content so do...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://mdit-plugins.mister-hope.com/zh/include.html"}],["meta",{"property":"og:url","content":"https://mdit-plugins.mister-hope.com/include.html"}],["meta",{"property":"og:site_name","content":"Markdown It Plugins"}],["meta",{"property":"og:title","content":"@mdit/plugin-include"}],["meta",{"property":"og:description","content":"Plugin to include other files in markdown. Usage Since markdown-it only receive markdown content in render() api, so the plugin don't know the file path of current content so do..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-03T04:09:13.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-03T04:09:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"@mdit/plugin-include\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-03T04:09:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Heading 2","slug":"heading-2","link":"#heading-2","children":[]}],"git":{"createdTime":1672308345000,"updatedTime":1698984553000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":8}]},"readingTime":{"minutes":3.42,"words":1025},"filePathRelative":"include.md","localizedDate":"December 29, 2022","autoDesc":true,"excerpt":"<p>Plugin to include other files in markdown.</p>\\n"}`);export{J as comp,F as data};
