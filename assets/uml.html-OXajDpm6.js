import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as p,e as r,d as u,w as e,a as n,f as d,b as s}from"./app-Dh0Ds2zq.js";const m={},k=n("p",null,"支持从上下文中拆分内容的插件。",-1),v=n("h2",{id:"使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用"},[n("span",null,"使用")])],-1),b=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" MarkdownIt "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" uml "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@mdit/plugin-uml"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" mdIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("uml"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo'"),s(`
  open`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demostart'"),n("span",{class:"token punctuation"},","),s(`
  close`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demoend'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function-variable function"},"render"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),s("tokens"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// render content here"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`\\
@demostart
Content
Another content
@demoend
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" MarkdownIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" uml "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@mdit/plugin-uml"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" mdIt "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("uml"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demo'"),s(`
  `),n("span",{class:"token literal-property property"},"open"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demostart'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"close"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'demoend'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function-variable function"},"render"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("tokens"),n("span",{class:"token punctuation"},","),s(" index")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// render content here"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`\\
@demostart
Content
Another content
@demoend
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=d(`<p>该插件会将 <code>@openmarker</code> 和 <code>@closemarker</code> 之间的内容提取到单个 Token 中，然后使用 <code>render</code> 函数对其进行渲染。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该插件与容器插件不同，容器内的内容将被解析为 markdown，而 uml 内的内容将被解析为纯文本并转换为单个 Token。</p></div><div class="hint-container tip"><p class="hint-container-title">转义</p><ul><li><p>你可以使用 <code>\\</code> 来转义 <code>@</code>，因此以下内容不会被解析：</p><div class="language-MD" data-ext="MD" data-title="MD"><pre class="language-MD"><code>\\@demostart

\\@demoend
</code></pre></div></li></ul></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MarkdownItUMLOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * UML 名称
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 开始标记
   */</span>
  open<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 结束标记
   */</span>
  close<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 渲染函数
   */</span>
  render<span class="token operator">:</span> RenderRule<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function f(y,_){const o=i("CodeTabs");return l(),p("div",null,[k,r(" more "),v,u(o,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:e(({value:a,isActive:t})=>[s("TS")]),title1:e(({value:a,isActive:t})=>[s("JS")]),tab0:e(({value:a,isActive:t})=>[b]),tab1:e(({value:a,isActive:t})=>[g]),_:1}),h])}const x=c(m,[["render",f],["__file","uml.html.vue"]]),M=JSON.parse('{"path":"/zh/uml.html","title":"@mdit/plugin-uml","lang":"zh-CN","frontmatter":{"title":"@mdit/plugin-uml","icon":"context","description":"支持从上下文中拆分内容的插件。 使用 该插件会将 @openmarker 和 @closemarker 之间的内容提取到单个 Token 中，然后使用 render 函数对其进行渲染。 提示 该插件与容器插件不同，容器内的内容将被解析为 markdown，而 uml 内的内容将被解析为纯文本并转换为单个 Token。 转义 你可以使用 \\\\ 来转义 @，...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://mdit-plugins.mister-hope.com/uml.html"}],["meta",{"property":"og:url","content":"https://mdit-plugins.mister-hope.com/zh/uml.html"}],["meta",{"property":"og:site_name","content":"Markdown It 插件"}],["meta",{"property":"og:title","content":"@mdit/plugin-uml"}],["meta",{"property":"og:description","content":"支持从上下文中拆分内容的插件。 使用 该插件会将 @openmarker 和 @closemarker 之间的内容提取到单个 Token 中，然后使用 render 函数对其进行渲染。 提示 该插件与容器插件不同，容器内的内容将被解析为 markdown，而 uml 内的内容将被解析为纯文本并转换为单个 Token。 转义 你可以使用 \\\\ 来转义 @，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2022-12-31T03:56:10.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-31T03:56:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"@mdit/plugin-uml\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-31T03:56:10.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]}],"git":{"createdTime":1672301615000,"updatedTime":1672458970000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"readingTime":{"minutes":0.79,"words":237},"filePathRelative":"zh/uml.md","localizedDate":"2022年12月29日","autoDesc":true,"excerpt":"<p>支持从上下文中拆分内容的插件。</p>\\n"}');export{x as comp,M as data};
