import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as l,c as p,e as r,d as u,w as a,a as n,f as d,b as s}from"./app-Dh0Ds2zq.js";const m={},k=n("p",null,"Plugin for creating block-level custom containers.",-1),v=n("h2",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage"},[n("span",null,"Usage")])],-1),g=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" MarkdownIt "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" container "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@mdit/plugin-container"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" mdIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("container"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your options, name is required"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"warning"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`
::: warning

Warning Text

:::
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" MarkdownIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" container "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@mdit/plugin-container"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" mdIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("container"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your options, name is required"),s(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"warning"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`
::: warning

Warning Text

:::
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=d(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax"><span>Syntax</span></a></h2><p>With this plugin you can create block containers like:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: warning
<span class="token italic"><span class="token punctuation">_</span><span class="token content">here be dragons</span><span class="token punctuation">_</span></span>
:::
</code></pre></div><p>and specify how they should be rendered. If no renderer defined, <code>&lt;div&gt;</code> with container name class will be created:</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>here be dragons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Markup is the same as for fenced code blocks. However by default the plugin use another character as marker and content is rendered as markdown markup by plugin.</p><div class="hint-container tip"><p class="hint-container-title">Nesting and escaping</p><ul><li><p>Nestings can be done by increasing marker number of outer container:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>:::: warning
Warning contents...
::: details
Some details
:::
::::
</code></pre></div><p>will be</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Warning contents...</p><details class="hint-container details"><summary>Details</summary><p>Some details</p></details></div></li><li><p>Escaping can be done by adding <code>\\</code> to escape the marker:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>\\::: warning

:::
</code></pre></div><p>will be</p><p>::: warning</p><p>:::</p></li></ul></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MarkdownItContainerOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Container name
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Container marker
   *
   * <span class="token keyword">@default</span> &quot;:&quot;
   */</span>
  marker<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Validate whether it should be regarded as this container type
   *
   * <span class="token keyword">@param</span> <span class="token parameter">params</span> the content after the marker
   * <span class="token keyword">@param</span> <span class="token parameter">markup</span> marker character
   * <span class="token keyword">@returns</span> is this container type or not
   *
   * <span class="token keyword">@default</span> params.trim().split(&quot; &quot;, 2)[0] === name
   */</span>
  validate<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> markup<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Opening tag render function
   */</span>
  openRender<span class="token operator">?</span><span class="token operator">:</span> RenderRule<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Closing tag render function
   */</span>
  closeRender<span class="token operator">?</span><span class="token operator">:</span> RenderRule<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>Demo</span></a></h2><h3 id="hint-container" tabindex="-1"><a class="header-anchor" href="#hint-container"><span>Hint container</span></a></h3><p>With some styles and:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;hint&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">openRender</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">tokens<span class="token punctuation">,</span> index<span class="token punctuation">,</span> _options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> info <span class="token operator">=</span> tokens<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>info<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div class=&quot;custom-container hint&quot;&gt;\\n&lt;p class=&quot;custom-container-title&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>
      info <span class="token operator">||</span> <span class="token string">&quot;Hint&quot;</span>
    <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p&gt;\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can write a hint like this:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: hint Here is a Hint
:::

::: hint

Here is a <span class="token bold"><span class="token punctuation">**</span><span class="token content">hint</span><span class="token punctuation">**</span></span> for you!

<span class="token list punctuation">-</span> Hint 1
  <span class="token list punctuation">-</span> Hint 1.1
  <span class="token list punctuation">-</span> Hint 1.2
<span class="token list punctuation">-</span> Hint 2

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container hint"><p class="custom-container-title">Here is a hint</p></div><div class="custom-container hint"><p class="custom-container-title">Hint</p><p>Here is a <strong>hint</strong> for you!</p><ul><li>Hint 1 <ul><li>Hint 1.1</li><li>Hint 1.2</li></ul></li><li>Hint 2</li></ul></div>`,17);function y(f,w){const i=c("CodeTabs");return l(),p("div",null,[k,r(" more "),v,u(i,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:t,isActive:e})=>[s("TS")]),title1:a(({value:t,isActive:e})=>[s("JS")]),tab0:a(({value:t,isActive:e})=>[g]),tab1:a(({value:t,isActive:e})=>[b]),_:1}),h])}const q=o(m,[["render",y],["__file","container.html.vue"]]),H=JSON.parse('{"path":"/container.html","title":"@mdit/plugin-container","lang":"en-US","frontmatter":{"title":"@mdit/plugin-container","icon":"box","description":"Plugin for creating block-level custom containers. Usage Syntax With this plugin you can create block containers like: and specify how they should be rendered. If no renderer de...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://mdit-plugins.mister-hope.com/zh/container.html"}],["meta",{"property":"og:url","content":"https://mdit-plugins.mister-hope.com/container.html"}],["meta",{"property":"og:site_name","content":"Markdown It Plugins"}],["meta",{"property":"og:title","content":"@mdit/plugin-container"}],["meta",{"property":"og:description","content":"Plugin for creating block-level custom containers. Usage Syntax With this plugin you can create block containers like: and specify how they should be rendered. If no renderer de..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-02T11:04:04.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-02T11:04:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"@mdit/plugin-container\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-02T11:04:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[{"level":3,"title":"Hint container","slug":"hint-container","link":"#hint-container","children":[]}]}],"git":{"createdTime":1672301615000,"updatedTime":1698923044000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4}]},"readingTime":{"minutes":1.19,"words":357},"filePathRelative":"container.md","localizedDate":"December 29, 2022","autoDesc":true,"excerpt":"<p>Plugin for creating block-level custom containers.</p>\\n"}');export{q as comp,H as data};
