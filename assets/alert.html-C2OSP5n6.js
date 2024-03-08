import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as d,c as k,a as n,b as a,d as l,e as o,w as s,f as i}from"./app-Dh0Ds2zq.js";const m={},v={href:"https://github.com/orgs/community/discussions/16925",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage"},[n("span",null,"Usage")])],-1),b=n("div",{class:"language-typescript","data-ext":"ts","data-title":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(" MarkdownIt "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" alert "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"@mdit/plugin-alert"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" mdIt "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a("alert"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`
> [!warning]
> Warning Text
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])])],-1),w=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(" MarkdownIt "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" alert "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@mdit/plugin-alert"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" mdIt "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),a("alert"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`
> [!warning]
> Warning Text
:::
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=i(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax"><span>Syntax</span></a></h2><p>With this plugin you can create block alerts with blockquote starting with <code>[!ALERT_NAME]</code> like:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> [!warning]
<span class="token blockquote punctuation">&gt;</span> This is warning text
</code></pre></div><p>The <code>ALERT_NAME</code> isn&#39;t case sensitive and can be the following string:</p><ul><li><code>note</code></li><li><code>tip</code></li><li><code>important</code></li><li><code>caution</code></li><li><code>warning</code></li></ul><div class="hint-container tip"><p class="hint-container-title">Nesting and escaping</p><ul><li><p>By default, GFM style alerts can only be placed at root, but you can use <code>deep: true</code> to enable deep and nesting support:</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code>md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>alert<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> [!warning]
<span class="token blockquote punctuation">&gt;</span> This is warning text
<span class="token blockquote punctuation">&gt;</span>
<span class="token blockquote punctuation">&gt; &gt;</span> [!warning]
<span class="token blockquote punctuation">&gt; &gt;</span> This is a nested warning

<span class="token list punctuation">-</span> &gt; [!warning]
  &gt; This is warning text
</code></pre></div><p>will be</p><div class="markdown-alert markdown-alert-warning"><p class="markdown-alert-title">Warning</p><p>This is warning text</p><div class="markdown-alert markdown-alert-warning"><p class="markdown-alert-title">Warning</p><p>This is a nested warning</p></div></div><ul><li><div class="markdown-alert markdown-alert-warning"><p class="markdown-alert-title">Warning</p><p>This is warning text</p></div></li></ul></li><li><p>Escaping can be done by adding <code>\\</code> to escape the <code>!</code> <code>[</code> or <code>]</code> marker:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> [\\!warning]
<span class="token blockquote punctuation">&gt;</span> This is warning text

<span class="token blockquote punctuation">&gt;</span> \\[!warning]
<span class="token blockquote punctuation">&gt;</span> This is warning text
</code></pre></div><p>will be</p><blockquote><p>[!warning] This is warning text</p></blockquote><blockquote><p>[!warning] This is warning text</p></blockquote></li></ul></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MarkdownItAlertOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Allowed alert names
   *
   * <span class="token keyword">@default</span> [&#39;important&#39;, &#39;note&#39;, &#39;tip&#39;, &#39;warning&#39;, &#39;caution&#39;]
   */</span>
  alertNames<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether handle deep alert syntax
   *
   * <span class="token keyword">@default</span> false
   */</span>
  deep<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Hint opening tag render function
   */</span>
  openRender<span class="token operator">?</span><span class="token operator">:</span> RenderRule<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Hint closing tag render function
   */</span>
  closeRender<span class="token operator">?</span><span class="token operator">:</span> RenderRule<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Hint title render function
   */</span>
  titleRender<span class="token operator">?</span><span class="token operator">:</span> RenderRule<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>Demo</span></a></h2><div class="markdown-alert markdown-alert-note"><p class="markdown-alert-title">Note</p><p>This is note text</p></div><div class="markdown-alert markdown-alert-important"><p class="markdown-alert-title">Important</p><p>This is important text</p></div><div class="markdown-alert markdown-alert-tip"><p class="markdown-alert-title">Tip</p><p>This is tip text</p></div><div class="markdown-alert markdown-alert-warning"><p class="markdown-alert-title">Warning</p><p>This is warning text</p></div><div class="markdown-alert markdown-alert-caution"><p class="markdown-alert-title">Caution</p><p>This is caution text</p></div>`,14),f=i(`<details class="hint-container details"><summary>Styles</summary><p>With default options, you can import and use the following styles in your project:</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.markdown-alert</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 8px 16px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> 0.25em solid <span class="token function">var</span><span class="token punctuation">(</span>--border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert &gt; :first-child</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert &gt; :last-child</span> <span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert .markdown-alert-title</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--base-text-weight-medium<span class="token punctuation">,</span> 500<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert .markdown-alert-title:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
  <span class="token selector">.markdown-alert .markdown-alert-title:before</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert.markdown-alert-note</span> <span class="token punctuation">{</span>
  <span class="token property">border-left-color</span><span class="token punctuation">:</span> #2f81f7<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert.markdown-alert-note .markdown-alert-title</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #2f81f7<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert.markdown-alert-note .markdown-alert-title::before</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 16 16&#39;%3E%3Cpath fill=&#39;%232f81f7&#39; d=&#39;M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z&#39;/%3E%3C/svg%3E&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert.markdown-alert-important</span> <span class="token punctuation">{</span>
  <span class="token property">border-left-color</span><span class="token punctuation">:</span> #a371f7<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert.markdown-alert-important .markdown-alert-title</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #a371f7<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert.markdown-alert-important .markdown-alert-title::before</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 16 16&#39;%3E%3Cpath fill=&#39;%23a371f7&#39; d=&#39;M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z&#39;/%3E%3C/svg%3E&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert.markdown-alert-tip</span> <span class="token punctuation">{</span>
  <span class="token property">border-left-color</span><span class="token punctuation">:</span> #3fb950<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert.markdown-alert-tip .markdown-alert-title</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #3fb950<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert.markdown-alert-tip .markdown-alert-title::before</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 16 16&#39;%3E%3Cpath fill=&#39;%233fb950&#39; d=&#39;M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z&#39;/%3E%3C/svg%3E&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert.markdown-alert-warning</span> <span class="token punctuation">{</span>
  <span class="token property">border-left-color</span><span class="token punctuation">:</span> #d29922<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert.markdown-alert-warning .markdown-alert-title</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #d29922<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert.markdown-alert-warning .markdown-alert-title::before</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 16 16&#39;%3E%3Cpath fill=&#39;%23d29922&#39; d=&#39;M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z&#39;/%3E%3C/svg%3E&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert.markdown-alert-caution</span> <span class="token punctuation">{</span>
  <span class="token property">border-left-color</span><span class="token punctuation">:</span> #f85149<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert.markdown-alert-caution .markdown-alert-title</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f85149<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.markdown-alert.markdown-alert-caution .markdown-alert-title::before</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;data:image/svg+xml;utf8,%3Csvg xmlns=&#39;http://www.w3.org/2000/svg&#39; viewBox=&#39;0 0 16 16&#39;%3E%3Cpath fill=&#39;%23f85149&#39; d=&#39;M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z&#39;/%3E%3C/svg%3E&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function y(x,_){const c=p("ExternalLinkIcon"),r=p("CodeTabs");return d(),k("div",null,[n("p",null,[a("Plugin to support GFM style alerts. ("),n("a",v,[a("Ref"),l(c)]),a(")")]),o(" more "),g,l(r,{id:"7",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:s(({value:t,isActive:e})=>[a("TS")]),title1:s(({value:t,isActive:e})=>[a("JS")]),tab0:s(({value:t,isActive:e})=>[b]),tab1:s(({value:t,isActive:e})=>[w]),_:1}),o(" markdownlint-disable MD028 "),h,o(" markdownlint-enable MD028 "),f])}const M=u(m,[["render",y],["__file","alert.html.vue"]]),E=JSON.parse(`{"path":"/alert.html","title":"@mdit/plugin-alert","lang":"en-US","frontmatter":{"title":"@mdit/plugin-alert","icon":"warn","description":"Plugin to support GFM style alerts. (Ref) Usage Syntax With this plugin you can create block alerts with blockquote starting with [!ALERT_NAME] like: The ALERT_NAME isn't case s...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://mdit-plugins.mister-hope.com/zh/alert.html"}],["meta",{"property":"og:url","content":"https://mdit-plugins.mister-hope.com/alert.html"}],["meta",{"property":"og:site_name","content":"Markdown It Plugins"}],["meta",{"property":"og:title","content":"@mdit/plugin-alert"}],["meta",{"property":"og:description","content":"Plugin to support GFM style alerts. (Ref) Usage Syntax With this plugin you can create block alerts with blockquote starting with [!ALERT_NAME] like: The ALERT_NAME isn't case s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-24T10:06:16.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-24T10:06:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"@mdit/plugin-alert\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-24T10:06:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]}],"git":{"createdTime":1700820376000,"updatedTime":1700820376000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":3.46,"words":1038},"filePathRelative":"alert.md","localizedDate":"November 24, 2023","autoDesc":true,"excerpt":"<p>Plugin to support GFM style alerts. (<a href=\\"https://github.com/orgs/community/discussions/16925\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Ref</a>)</p>\\n"}`);export{M as comp,E as data};
