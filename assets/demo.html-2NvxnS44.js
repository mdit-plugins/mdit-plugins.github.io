import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as d,c as r,e as u,d as o,w as s,a as n,b as e,f as m}from"./app-Dh0Ds2zq.js";const k={},v=n("p",null,"Display snippet render result and code at the same time.",-1),g=n("h2",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage"},[n("span",null,"Usage")])],-1),b=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),e(" MarkdownIt "),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" demo "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"@mdit/plugin-demo"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"const"),e(" mdIt "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),e("demo"),n("span",{class:"token punctuation"},","),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token comment"},"// your options"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`
::: demo

# Heading 1

Text

:::
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),e(" MarkdownIt "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"const"),e(),n("span",{class:"token punctuation"},"{"),e(" demo "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@mdit/plugin-demo"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"const"),e(" mdIt "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),e("demo"),n("span",{class:"token punctuation"},","),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token comment"},"// your options"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`
::: demo

# Heading 1

Text

:::
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("h2",{id:"syntax",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#syntax"},[n("span",null,"Syntax")])],-1),f=n("p",null,[e("With this plugin, you can quickly display a Markdown snippet and its corresponding source code. You can customize the rendering output, by default it will render a "),n("code",null,"<details>"),e(" block")],-1),_=n("code",null,"name",-1),x=n("code",null,"demo",-1),w=m(`<h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MarkdownItDemoOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Container name
   *
   * <span class="token keyword">@default</span> &quot;demo&quot;
   */</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether code is displayed before result
   *
   * <span class="token keyword">@default</span> true
   */</span>
  beforeContent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Opening tag render function
   */</span>
  openRender<span class="token operator">?</span><span class="token operator">:</span> RenderRule<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Closing tag render function
   */</span>
  closeRender<span class="token operator">?</span><span class="token operator">:</span> RenderRule<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Code render function
   */</span>
  codeRender<span class="token operator">?</span><span class="token operator">:</span> RenderRule<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>Demo</span></a></h2><details><summary></summary><h2 id="heading-1" tabindex="-1"><a class="header-anchor" href="#heading-1"><span>Heading 1</span></a></h2><p>Text</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> Heading 1</span>

Text
</code></pre></div></details><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: demo

<span class="token title important"><span class="token punctuation">##</span> Heading 1</span>

Text

:::
</code></pre></div>`,5);function T(R,S){const l=i("CodeTabs"),c=i("RouteLink");return d(),r("div",null,[v,u(" more "),g,o(l,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:s(({value:a,isActive:t})=>[e("TS")]),title1:s(({value:a,isActive:t})=>[e("JS")]),tab0:s(({value:a,isActive:t})=>[b]),tab1:s(({value:a,isActive:t})=>[h]),_:1}),y,f,n("p",null,[e("The syntax is the same as "),o(c,{to:"/container.html"},{default:s(()=>[e("container")]),_:1}),e(", except that the corresponding "),_,e(" is "),x,e(".")]),w])}const I=p(k,[["render",T],["__file","demo.html.vue"]]),D=JSON.parse('{"path":"/demo.html","title":"@mdit/plugin-demo","lang":"en-US","frontmatter":{"title":"@mdit/plugin-demo","icon":"creative","description":"Display snippet render result and code at the same time. Usage Syntax With this plugin, you can quickly display a Markdown snippet and its corresponding source code. You can cus...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://mdit-plugins.mister-hope.com/zh/demo.html"}],["meta",{"property":"og:url","content":"https://mdit-plugins.mister-hope.com/demo.html"}],["meta",{"property":"og:site_name","content":"Markdown It Plugins"}],["meta",{"property":"og:title","content":"@mdit/plugin-demo"}],["meta",{"property":"og:description","content":"Display snippet render result and code at the same time. Usage Syntax With this plugin, you can quickly display a Markdown snippet and its corresponding source code. You can cus..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-02T11:18:31.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-02T11:18:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"@mdit/plugin-demo\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-02T11:18:31.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]}],"git":{"createdTime":1698923266000,"updatedTime":1698923911000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":0.59,"words":176},"filePathRelative":"demo.md","localizedDate":"November 2, 2023","autoDesc":true,"excerpt":"<p>Display snippet render result and code at the same time.</p>\\n"}');export{I as comp,D as data};
