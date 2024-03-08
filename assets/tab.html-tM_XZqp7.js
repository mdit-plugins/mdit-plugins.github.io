import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as r,c as u,e as v,d as i,w as s,a as n,f as o,b as a}from"./app-Dh0Ds2zq.js";const m={},b=n("p",null,"Plugin for creating block-level custom tabs.",-1),k=n("h2",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage"},[n("span",null,"Usage")])],-1),g=n("div",{class:"language-typescript","data-ext":"ts","data-title":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(" MarkdownIt "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" tab "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"@mdit/plugin-tab"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" mdIt "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a("tab"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// your options, name is required"),a(`
  name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"tabs"'),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"content"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])])],-1),h=n("div",{class:"language-javascript","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(" MarkdownIt "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" tab "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@mdit/plugin-tab"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" mdIt "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a("tab"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// your options, name is required"),a(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"tabs"'),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"content"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])])],-1),f=o(`<p>With this plugin, you can create tabs container with <code>::: name</code> and <code>:::</code>, with <code>name</code> is the value you set as name.</p><p>In this container, you can use <code>@tab</code> marker to mark and separate tab contents.</p><p><code>@tab</code> marker can be followed by a text, which will be used as tab title, and you can use <code>@tab:active</code> to mark the tab with default active state.</p><p>Any contents after a <code>@tab</code> marker and before container closing marker or new <code>@tab</code> marker will be considered as tab content. And contents before first <code>@tab</code> marker will be dropped.</p><p>To support global tab switching state, the plugin allows you to add an id suffix in <code>tabs</code> container, which will be used as tab id, and Also allows you to add an id suffix in <code>@tab</code> marker, which will be used as tab value. So it&#39;s possible for you to make all tabs with same id share same switch event.</p><p>By default the plugin renders related tabs dom for you, if you want to customize the rendering, you can pass <code>tabsOpenRenderer</code>, <code>tabsCloseRenderer</code>, <code>tabOpenRenderer</code> and <code>tabCloseRenderer</code> to the plugin options.</p><p><code>tabsOpenRenderer</code> and <code>tabOpenRenderer</code> receives extra information as first args, see <a href="#options">Options</a> for more details.</p><p>The plugin doesn&#39;t provide any styles, and will not register any events, so that you should add styles and events by yourself.</p><div class="hint-container tip"><p class="hint-container-title">Nesting and escaping</p><ul><li><p>Nesting is <strong>not</strong> supported because <code>@tab</code> does not contain any information about what tab container it&#39;s marking.</p></li><li><p>If you need to use <code>@tab</code> at the beginning of the line, you can use <code>\\</code> to escape it to <code>\\@tab</code></p></li><li><p>If your tab title contain <code>#</code>, you can escape it with <code>\\</code>:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>@tab c\\#
</code></pre></div></li></ul></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MarkdownItTabData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Title of tab
   */</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Tab index
   */</span>
  index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Identifier of tab
   */</span>
  id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether the tab is active
   */</span>
  isActive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MarkdownItTabInfo</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Which tab is active
   *
   * <span class="token keyword">@description</span> -1 means no tab is active
   */</span>
  active<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Data of tabs
   */</span>
  data<span class="token operator">:</span> MarkdownItTabData<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MarkdownItTabOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * The name of the tab container.
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>Demo</span></a></h2><p>A tab of fruit:</p>`,13),w=n("p",null,"Apple",-1),y=n("p",null,"Banana",-1),_=o(`<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Another tab of fruit:</p>`,2),A=n("p",null,"Apple",-1),T=n("p",null,"Banana",-1),x=n("p",null,"Orange",-1),I=o(`<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A tab of fruit without id:</p>`,2),O=n("p",null,"Apple",-1),R=n("p",null,"Banana",-1),M=n("p",null,"Orange",-1),B=o(`<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function C(D,N){const p=c("CodeTabs"),l=c("Tabs");return r(),u("div",null,[b,v(" more "),k,i(p,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:s(({value:e,isActive:t})=>[a("TS")]),title1:s(({value:e,isActive:t})=>[a("JS")]),tab0:s(({value:e,isActive:t})=>[g]),tab1:s(({value:e,isActive:t})=>[h]),_:1}),f,i(l,{id:"69",data:[{id:"apple"},{id:"banana"}],"tab-id":"fruit"},{title0:s(({value:e,isActive:t})=>[a("apple")]),title1:s(({value:e,isActive:t})=>[a("banana")]),tab0:s(({value:e,isActive:t})=>[w]),tab1:s(({value:e,isActive:t})=>[y]),_:1}),_,i(l,{id:"85",data:[{id:"apple"},{id:"banana"},{id:"orange"}],"tab-id":"fruit"},{title0:s(({value:e,isActive:t})=>[a("apple")]),title1:s(({value:e,isActive:t})=>[a("banana")]),title2:s(({value:e,isActive:t})=>[a("orange")]),tab0:s(({value:e,isActive:t})=>[A]),tab1:s(({value:e,isActive:t})=>[T]),tab2:s(({value:e,isActive:t})=>[x]),_:1}),I,i(l,{id:"106",data:[{id:"apple"},{id:"banana"},{id:"orange"}]},{title0:s(({value:e,isActive:t})=>[a("apple")]),title1:s(({value:e,isActive:t})=>[a("banana")]),title2:s(({value:e,isActive:t})=>[a("orange")]),tab0:s(({value:e,isActive:t})=>[O]),tab1:s(({value:e,isActive:t})=>[R]),tab2:s(({value:e,isActive:t})=>[M]),_:1}),B])}const U=d(m,[["render",C],["__file","tab.html.vue"]]),j=JSON.parse('{"path":"/tab.html","title":"@mdit/plugin-tab","lang":"en-US","frontmatter":{"title":"@mdit/plugin-tab","icon":"tab","description":"Plugin for creating block-level custom tabs. Usage With this plugin, you can create tabs container with ::: name and :::, with name is the value you set as name. In this contain...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://mdit-plugins.mister-hope.com/zh/tab.html"}],["meta",{"property":"og:url","content":"https://mdit-plugins.mister-hope.com/tab.html"}],["meta",{"property":"og:site_name","content":"Markdown It Plugins"}],["meta",{"property":"og:title","content":"@mdit/plugin-tab"}],["meta",{"property":"og:description","content":"Plugin for creating block-level custom tabs. Usage With this plugin, you can create tabs container with ::: name and :::, with name is the value you set as name. In this contain..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-25T05:09:54.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-25T05:09:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"@mdit/plugin-tab\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-25T05:09:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]}],"git":{"createdTime":1672330469000,"updatedTime":1692940194000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4}]},"readingTime":{"minutes":1.9,"words":570},"filePathRelative":"tab.md","localizedDate":"December 29, 2022","autoDesc":true,"excerpt":"<p>Plugin for creating block-level custom tabs.</p>\\n"}');export{U as comp,j as data};
