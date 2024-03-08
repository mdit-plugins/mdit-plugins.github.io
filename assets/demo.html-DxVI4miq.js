import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as d,c as r,e as u,d as i,w as e,a as n,b as s,f as m}from"./app-Dh0Ds2zq.js";const k={},v=n("p",null,"用于同时展示片段渲染和片段代码。",-1),b=n("h2",{id:"使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用"},[n("span",null,"使用")])],-1),g=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" MarkdownIt "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" demo "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@mdit/plugin-demo"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" mdIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("demo"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your options"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`
::: demo

# Heading 1

Text

:::
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" MarkdownIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" demo "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@mdit/plugin-demo"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" mdIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("demo"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your options"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`
::: demo

# Heading 1

Text

:::
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("h2",{id:"格式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#格式"},[n("span",null,"格式")])],-1),f=n("p",null,[s("使用此插件，你可以快速展示 Markdown 片段和其对应的源代码。你可以自定义渲染输出，默认情况下将会渲染出一个 "),n("code",null,"<details>"),s(" 块。")],-1),y=n("code",null,"name",-1),w=n("code",null,"demo",-1),x=m(`<h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MarkdownItDemoOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 容器名称
   *
   * <span class="token keyword">@default</span> &quot;demo&quot;
   */</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 代码是否显示在内容前
   *
   * <span class="token keyword">@default</span> true
   */</span>
  beforeContent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 开始标签渲染函数
   */</span>
  openRender<span class="token operator">?</span><span class="token operator">:</span> RenderRule<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 结束标签渲染函数
   */</span>
  closeRender<span class="token operator">?</span><span class="token operator">:</span> RenderRule<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 代码渲染函数
   */</span>
  codeRender<span class="token operator">?</span><span class="token operator">:</span> RenderRule<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><details><summary></summary><h2 id="heading-1" tabindex="-1"><a class="header-anchor" href="#heading-1"><span>Heading 1</span></a></h2><p>Text</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> Heading 1</span>

Text
</code></pre></div></details><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: demo

<span class="token title important"><span class="token punctuation">##</span> Heading 1</span>

Text

:::
</code></pre></div>`,5);function T(R,M){const l=o("CodeTabs"),c=o("RouteLink");return d(),r("div",null,[v,u(" more "),b,i(l,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:e(({value:a,isActive:t})=>[s("TS")]),title1:e(({value:a,isActive:t})=>[s("JS")]),tab0:e(({value:a,isActive:t})=>[g]),tab1:e(({value:a,isActive:t})=>[h]),_:1}),_,f,n("p",null,[s("语法与 "),i(c,{to:"/zh/container.html"},{default:e(()=>[s("container")]),_:1}),s(" 相同，只不过对应的 "),y,s(" 为 "),w,s("。")]),x])}const H=p(k,[["render",T],["__file","demo.html.vue"]]),N=JSON.parse('{"path":"/zh/demo.html","title":"@mdit/plugin-demo","lang":"zh-CN","frontmatter":{"title":"@mdit/plugin-demo","icon":"creative","description":"用于同时展示片段渲染和片段代码。 使用 格式 使用此插件，你可以快速展示 Markdown 片段和其对应的源代码。你可以自定义渲染输出，默认情况下将会渲染出一个 <details> 块。 语法与 相同，只不过对应的 name 为 demo。 选项 示例 Heading 1 Text","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://mdit-plugins.mister-hope.com/demo.html"}],["meta",{"property":"og:url","content":"https://mdit-plugins.mister-hope.com/zh/demo.html"}],["meta",{"property":"og:site_name","content":"Markdown It 插件"}],["meta",{"property":"og:title","content":"@mdit/plugin-demo"}],["meta",{"property":"og:description","content":"用于同时展示片段渲染和片段代码。 使用 格式 使用此插件，你可以快速展示 Markdown 片段和其对应的源代码。你可以自定义渲染输出，默认情况下将会渲染出一个 <details> 块。 语法与 相同，只不过对应的 name 为 demo。 选项 示例 Heading 1 Text"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-02T11:18:31.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-02T11:18:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"@mdit/plugin-demo\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-02T11:18:31.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"格式","slug":"格式","link":"#格式","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1698923266000,"updatedTime":1698923911000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":0.73,"words":219},"filePathRelative":"zh/demo.md","localizedDate":"2023年11月2日","autoDesc":true,"excerpt":"<p>用于同时展示片段渲染和片段代码。</p>\\n"}');export{H as comp,N as data};
