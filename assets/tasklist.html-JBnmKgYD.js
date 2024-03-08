import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as p,e as r,d,w as a,a as s,f as u,b as n}from"./app-Dh0Ds2zq.js";const m={},k=s("p",null,"Plugins to support tasklist.",-1),v=s("h2",{id:"usage",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#usage"},[s("span",null,"Usage")])],-1),b=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[s("pre",{class:"language-typescript"},[s("code",null,[s("span",{class:"token keyword"},"import"),n(" MarkdownIt "),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"markdown-it"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" tasklist "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"@mdit/plugin-tasklist"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"const"),n(" mdIt "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"MarkdownIt"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"use"),s("span",{class:"token punctuation"},"("),n("tasklist"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token comment"},"// your options, optional"),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`

mdIt`),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"render"),s("span",{class:"token punctuation"},"("),s("span",{class:"token template-string"},[s("span",{class:"token template-punctuation string"},"`"),s("span",{class:"token string"},`\\
- [x] task 1
- [ ] task 2
`),s("span",{class:"token template-punctuation string"},"`")]),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),h=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[s("pre",{class:"language-javascript"},[s("code",null,[s("span",{class:"token keyword"},"const"),n(" MarkdownIt "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"require"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"markdown-it"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"const"),n(),s("span",{class:"token punctuation"},"{"),n(" tasklist "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"require"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},'"@mdit/plugin-tasklist"'),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"const"),n(" mdIt "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"MarkdownIt"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"use"),s("span",{class:"token punctuation"},"("),n("tasklist"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token punctuation"},"{"),n(`
  `),s("span",{class:"token comment"},"// your options, optional"),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`

mdIt`),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"render"),s("span",{class:"token punctuation"},"("),s("span",{class:"token template-string"},[s("span",{class:"token template-punctuation string"},"`"),s("span",{class:"token string"},`\\
- [x] task 1
- [ ] task 2
`),s("span",{class:"token template-punctuation string"},"`")]),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=u(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax"><span>Syntax</span></a></h2><ul><li>Use <code>- [ ] some text</code> to render a unchecked task item.</li><li>Use <code>- [x] some text</code> to render a checked task item. (Capital <code>X</code> is also supported)</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MarkdownItTasklistOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Whether disable checkbox
   *
   * <span class="token keyword">@default</span> true
   */</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether use \`&lt;label&gt;\` to wrap text
   *
   * <span class="token keyword">@default</span> true
   */</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Class for tasklist container
   *
   * <span class="token keyword">@default</span> &#39;task-list-container&#39;
   */</span>
  containerClass<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Class for tasklist item
   *
   * <span class="token keyword">@default</span> &#39;task-list-item&#39;
   */</span>
  itemClass<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Class for tasklist item label
   *
   * <span class="token keyword">@default</span> &#39;task-list-item-label&#39;
   */</span>
  labelClass<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Class for tasklist item checkbox
   *
   * <span class="token keyword">@default</span> &#39;task-list-item-checkbox&#39;
   */</span>
  checkboxClass<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>Demo</span></a></h2><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Plan A</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Plan B</label></li></ul><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> [ ] Plan A
<span class="token list punctuation">-</span> [x] Plan B
</code></pre></div>`,7);function x(y,f){const i=o("CodeTabs");return c(),p("div",null,[k,r(" more "),v,d(i,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:a(({value:t,isActive:e})=>[n("TS")]),title1:a(({value:t,isActive:e})=>[n("JS")]),tab0:a(({value:t,isActive:e})=>[b]),tab1:a(({value:t,isActive:e})=>[h]),_:1}),g])}const C=l(m,[["render",x],["__file","tasklist.html.vue"]]),S=JSON.parse('{"path":"/tasklist.html","title":"@mdit/plugin-tasklist","lang":"en-US","frontmatter":{"title":"@mdit/plugin-tasklist","icon":"check","description":"Plugins to support tasklist. Usage Syntax Use - [ ] some text to render a unchecked task item. Use - [x] some text to render a checked task item. (Capital X is also supported) O...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://mdit-plugins.mister-hope.com/zh/tasklist.html"}],["meta",{"property":"og:url","content":"https://mdit-plugins.mister-hope.com/tasklist.html"}],["meta",{"property":"og:site_name","content":"Markdown It Plugins"}],["meta",{"property":"og:title","content":"@mdit/plugin-tasklist"}],["meta",{"property":"og:description","content":"Plugins to support tasklist. Usage Syntax Use - [ ] some text to render a unchecked task item. Use - [x] some text to render a checked task item. (Capital X is also supported) O..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-29T12:58:53.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-29T12:58:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"@mdit/plugin-tasklist\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-29T12:58:53.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]}],"git":{"createdTime":1672301615000,"updatedTime":1672318733000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"readingTime":{"minutes":0.61,"words":184},"filePathRelative":"tasklist.md","localizedDate":"December 29, 2022","autoDesc":true,"excerpt":"<p>Plugins to support tasklist.</p>\\n"}');export{C as comp,S as data};
