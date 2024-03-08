import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as r,c as u,e as v,d as i,w as a,a as n,f as o,b as s}from"./app-Dh0Ds2zq.js";const m={},b=n("p",null,"用于创建块级自定义选项卡的插件。",-1),k=n("h2",{id:"使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用"},[n("span",null,"使用")])],-1),g=n("div",{class:"language-typescript","data-ext":"ts","data-title":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" MarkdownIt "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" tab "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@mdit/plugin-tab"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" mdIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("tab"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 你的选项，name 是必填的"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"tabs"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"content"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),h=n("div",{class:"language-javascript","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" MarkdownIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" tab "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@mdit/plugin-tab"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" mdIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("tab"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 你的选项，name 是必填的"),s(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"tabs"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"content"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),_=o(`<p>使用此插件，你可以使用 <code>::: name</code> 和 <code>:::</code> 来创建选项卡容器，其中 <code>name</code> 是你设置为名称的值。</p><p>在这个容器中，你可以使用 <code>@tab</code> 标记来标记和分隔选项卡内容。</p><p><code>@tab</code> 标记后面可以跟一个文本，该文本将用作选项卡标题，你可以使用 <code>@tab:active</code> 将选项卡标记为默认活动状态。</p><p><code>@tab</code> 标记之后和容器关闭标记或新的 <code>@tab</code> 标记之前的任何内容都将被视为选项卡内容。 并且第一个 <code>@tab</code> 标记之前的内容将被删除。</p><p>为了支持全局标签切换状态，该插件允许你在 <code>tabs</code> 容器中添加一个 id 后缀，它将用作标签 id，并且还允许你在 <code>@tab</code> 标记中添加一个 id 后缀，将被使用作为选项卡值。 因此，你可以让所有具有相同 ID 的选项卡共享相同的切换事件。</p><p>默认情况下，插件会为你呈现相关的标签 dom，如果你想自定义呈现，可以将 <code>tabsOpenRenderer</code>、<code>tabsCloseRenderer</code>、<code>tabOpenRenderer</code> 和 <code>tabCloseRenderer</code> 传递给插件选项。</p><p><code>tabsOpenRenderer</code> 和 <code>tabOpenRenderer</code> 接收额外信息作为第一个参数，有关更多详细信息，请参阅 <a href="#%E9%80%89%E9%A1%B9">选项</a>。</p><p>该插件不提供任何样式，也不会注册任何事件，需要你自行添加样式和事件。</p><div class="hint-container tip"><p class="hint-container-title">嵌套和转义</p><ul><li><p><strong>不</strong>支持嵌套，因为 <code>@tab</code> 不包含任何关于它标记的选项卡容器的信息。</p></li><li><p>如果你需要在行首使用 <code>@tab</code>，你可以使用 <code>\\</code> 将其转义为 <code>\\@tab</code></p></li><li><p>如果你的选项卡标题包含 <code>#</code>，你可以使用 <code>\\</code> 将其转义：</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>@tab c\\#
</code></pre></div></li></ul></div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MarkdownItTabData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Tab 标题
   */</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Tab 索引
   */</span>
  index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Tab 标识符
   */</span>
  id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Tab 是否激活
   */</span>
  isActive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MarkdownItTabInfo</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 激活的 Tab
   *
   * <span class="token keyword">@description</span> -1 表示没有 Tab 激活
   */</span>
  active<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Tab 数据
   */</span>
  data<span class="token operator">:</span> MarkdownItTabData<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MarkdownItTabOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Tab 容器的名称。
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Tabs open renderer
   */</span>
  tabsOpenRenderer<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>
    info<span class="token operator">:</span> MarkdownItTabInfo<span class="token punctuation">,</span>
    tokens<span class="token operator">:</span> Token<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    options<span class="token operator">:</span> Options<span class="token punctuation">,</span>
    env<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span>
    self<span class="token operator">:</span> Renderer<span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Tabs close renderer
   */</span>
  tabsCloseRenderer<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>
    tokens<span class="token operator">:</span> Token<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    options<span class="token operator">:</span> Options<span class="token punctuation">,</span>
    env<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span>
    self<span class="token operator">:</span> Renderer<span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * tab open renderer
   */</span>
  tabOpenRenderer<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>
    data<span class="token operator">:</span> MarkdownItTabData<span class="token punctuation">,</span>
    tokens<span class="token operator">:</span> Token<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    options<span class="token operator">:</span> Options<span class="token punctuation">,</span>
    env<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span>
    self<span class="token operator">:</span> Renderer<span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * tab close renderer
   */</span>
  tabCloseRenderer<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>
    tokens<span class="token operator">:</span> Token<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    options<span class="token operator">:</span> Options<span class="token punctuation">,</span>
    env<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span>
    self<span class="token operator">:</span> Renderer<span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>一个水果选项卡列表:</p>`,13),f=n("p",null,"Apple",-1),w=n("p",null,"Banana",-1),T=o(`<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个水果选项卡列表:</p>`,2),y=n("p",null,"Apple",-1),A=n("p",null,"Banana",-1),x=n("p",null,"Orange",-1),I=o(`<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个没有绑定 id 的水果选项卡列表:</p>`,2),O=n("p",null,"Apple",-1),R=n("p",null,"Banana",-1),M=n("p",null,"Orange",-1),C=o(`<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function B(N,S){const p=c("CodeTabs"),l=c("Tabs");return r(),u("div",null,[b,v(" more "),k,i(p,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s("TS")]),title1:a(({value:e,isActive:t})=>[s("JS")]),tab0:a(({value:e,isActive:t})=>[g]),tab1:a(({value:e,isActive:t})=>[h]),_:1}),_,i(l,{id:"69",data:[{id:"apple"},{id:"banana"}],"tab-id":"fruit"},{title0:a(({value:e,isActive:t})=>[s("apple")]),title1:a(({value:e,isActive:t})=>[s("banana")]),tab0:a(({value:e,isActive:t})=>[f]),tab1:a(({value:e,isActive:t})=>[w]),_:1}),T,i(l,{id:"85",data:[{id:"apple"},{id:"banana"},{id:"orange"}],"tab-id":"fruit"},{title0:a(({value:e,isActive:t})=>[s("apple")]),title1:a(({value:e,isActive:t})=>[s("banana")]),title2:a(({value:e,isActive:t})=>[s("orange")]),tab0:a(({value:e,isActive:t})=>[y]),tab1:a(({value:e,isActive:t})=>[A]),tab2:a(({value:e,isActive:t})=>[x]),_:1}),I,i(l,{id:"106",data:[{id:"apple"},{id:"banana"},{id:"orange"}]},{title0:a(({value:e,isActive:t})=>[s("apple")]),title1:a(({value:e,isActive:t})=>[s("banana")]),title2:a(({value:e,isActive:t})=>[s("orange")]),tab0:a(({value:e,isActive:t})=>[O]),tab1:a(({value:e,isActive:t})=>[R]),tab2:a(({value:e,isActive:t})=>[M]),_:1}),C])}const j=d(m,[["render",B],["__file","tab.html.vue"]]),V=JSON.parse('{"path":"/zh/tab.html","title":"@mdit/plugin-tab","lang":"zh-CN","frontmatter":{"title":"@mdit/plugin-tab","icon":"tab","description":"用于创建块级自定义选项卡的插件。 使用 使用此插件，你可以使用 ::: name 和 ::: 来创建选项卡容器，其中 name 是你设置为名称的值。 在这个容器中，你可以使用 @tab 标记来标记和分隔选项卡内容。 @tab 标记后面可以跟一个文本，该文本将用作选项卡标题，你可以使用 @tab:active 将选项卡标记为默认活动状态。 @tab 标记...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://mdit-plugins.mister-hope.com/tab.html"}],["meta",{"property":"og:url","content":"https://mdit-plugins.mister-hope.com/zh/tab.html"}],["meta",{"property":"og:site_name","content":"Markdown It 插件"}],["meta",{"property":"og:title","content":"@mdit/plugin-tab"}],["meta",{"property":"og:description","content":"用于创建块级自定义选项卡的插件。 使用 使用此插件，你可以使用 ::: name 和 ::: 来创建选项卡容器，其中 name 是你设置为名称的值。 在这个容器中，你可以使用 @tab 标记来标记和分隔选项卡内容。 @tab 标记后面可以跟一个文本，该文本将用作选项卡标题，你可以使用 @tab:active 将选项卡标记为默认活动状态。 @tab 标记..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-25T05:09:54.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-25T05:09:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"@mdit/plugin-tab\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-25T05:09:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1672330469000,"updatedTime":1692940194000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4}]},"readingTime":{"minutes":2.54,"words":762},"filePathRelative":"zh/tab.md","localizedDate":"2022年12月29日","autoDesc":true,"excerpt":"<p>用于创建块级自定义选项卡的插件。</p>\\n"}');export{j as comp,V as data};
