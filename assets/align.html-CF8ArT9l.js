import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as c,c as p,a as n,b as e,d as l,w as i,e as u,f as m}from"./app-Dh0Ds2zq.js";const v={},k=n("p",null,"用于控制内容对齐方式的插件。",-1),h={class:"hint-container note"},b=n("p",{class:"hint-container-title"},"注",-1),g=n("h2",{id:"使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用"},[n("span",null,"使用")])],-1),w=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),e(" MarkdownIt "),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" align "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"@mdit/plugin-align"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"const"),e(" mdIt "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),e("align"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`\\
::: center
居中的内容
:::
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),e(" MarkdownIt "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"const"),e(),n("span",{class:"token punctuation"},"{"),e(" align "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@mdit/plugin-align"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"const"),e(" mdIt "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),e("align"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`\\
::: center
居中的内容
:::
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=m(`<h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式"><span>格式</span></a></h2><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: left
左对齐的内容
:::

::: center
居中的内容
:::

::: right
右对齐的内容
:::

::: justify
两端对齐的内容
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">嵌套和转义</p><ul><li><p>嵌套可以通过增加外层容器的 marker 数量完成:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>:::: center
居中的内容...
::: left
左对齐的内容...
:::
居中的内容...
::::
</code></pre></div><p>会被渲染为</p><div style="text-align:center;"><p>居中的内容...</p><div style="text-align:left;"><p>左对齐的内容...</p></div><p>居中的内容...</p></div></li><li><p>转义可以通过在 marker 前添加 <code>\\</code> 转义来完成:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>\\::: left

:::
</code></pre></div><p>会被渲染为</p><p>::: left</p><p>:::</p></li></ul></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><div style="text-align:center;"><h3 id="twinkle-twinkle-little-star" tabindex="-1"><a class="header-anchor" href="#twinkle-twinkle-little-star"><span>Twinkle, Twinkle, Little Star</span></a></h3><div style="text-align:right;"><p>——Jane Taylor</p></div><p>Twinkle, twinkle, little star,</p><p>How I wonder what you are!</p><p>Up above the world so high,</p><p>Like a diamond in the sky.</p><p>When the blazing sun is gone,</p><p>When he nothing shines upon,</p><p>Then you show your little light,</p><p>Twinkle, twinkle, all the night.</p><p>Then the traveller in the dark,</p><p>Thanks you for your tiny spark,</p><p>He could not see which way to go,</p><p>If you did not twinkle so.</p><p>In the dark blue sky you keep,</p><p>And often thro&#39; my curtains peep,</p><p>For you never shut your eye,</p><p>Till the sun is in the sky.</p><p>&#39;Tis your bright and tiny spark,</p><p>Lights the trav’ller in the dark,</p><p>Tho&#39; I know not what you are,</p><p>Twinkle, twinkle, little star.</p></div><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>:::: center

<span class="token title important"><span class="token punctuation">###</span> Twinkle, Twinkle, Little Star</span>

::: right

——Jane Taylor

:::

Twinkle, twinkle, little star,

How I wonder what you are!

Up above the world so high,

Like a diamond in the sky.

When the blazing sun is gone,

When he nothing shines upon,

Then you show your little light,

Twinkle, twinkle, all the night.

Then the traveller in the dark,

Thanks you for your tiny spark,

He could not see which way to go,

If you did not twinkle so.

In the dark blue sky you keep,

And often thro&#39; my curtains peep,

For you never shut your eye,

Till the sun is in the sky.

&#39;Tis your bright and tiny spark,

Lights the trav’ller in the dark,

Tho&#39; I know not what you are,

Twinkle, twinkle, little star.

::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,6);function T(_,x){const o=a("RouteLink"),d=a("CodeTabs");return c(),p("div",null,[k,n("div",h,[b,n("p",null,[e("此插件基于 "),l(o,{to:"/zh/container.html"},{default:i(()=>[e("@mdit/plugin-container")]),_:1}),e(".")])]),u(" more "),g,l(d,{id:"12",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:i(({value:s,isActive:t})=>[e("TS")]),title1:i(({value:s,isActive:t})=>[e("JS")]),tab0:i(({value:s,isActive:t})=>[w]),tab1:i(({value:s,isActive:t})=>[y]),_:1}),f])}const z=r(v,[["render",T],["__file","align.html.vue"]]),L=JSON.parse('{"path":"/zh/align.html","title":"@mdit/plugin-align","lang":"zh-CN","frontmatter":{"title":"@mdit/plugin-align","icon":"align","description":"用于控制内容对齐方式的插件。 注 此插件基于 . 使用 格式 嵌套和转义 嵌套可以通过增加外层容器的 marker 数量完成: 会被渲染为 居中的内容... 左对齐的内容... 居中的内容... 转义可以通过在 marker 前添加 \\\\ 转义来完成: 会被渲染为 ::: left ::: 示例 Twinkle, Twinkle, Little Star...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://mdit-plugins.mister-hope.com/align.html"}],["meta",{"property":"og:url","content":"https://mdit-plugins.mister-hope.com/zh/align.html"}],["meta",{"property":"og:site_name","content":"Markdown It 插件"}],["meta",{"property":"og:title","content":"@mdit/plugin-align"}],["meta",{"property":"og:description","content":"用于控制内容对齐方式的插件。 注 此插件基于 . 使用 格式 嵌套和转义 嵌套可以通过增加外层容器的 marker 数量完成: 会被渲染为 居中的内容... 左对齐的内容... 居中的内容... 转义可以通过在 marker 前添加 \\\\ 转义来完成: 会被渲染为 ::: left ::: 示例 Twinkle, Twinkle, Little Star..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2022-12-29T12:46:49.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-29T12:46:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"@mdit/plugin-align\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-29T12:46:49.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"格式","slug":"格式","link":"#格式","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1672301615000,"updatedTime":1672318009000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":1.57,"words":472},"filePathRelative":"zh/align.md","localizedDate":"2022年12月29日","autoDesc":true,"excerpt":"<p>用于控制内容对齐方式的插件。</p>\\n<div class=\\"hint-container note\\">\\n<p class=\\"hint-container-title\\">注</p>\\n<p>此插件基于 <a href=\\"/zh/container.html\\" target=\\"_blank\\">@mdit/plugin-container</a>.</p>\\n</div>\\n"}');export{z as comp,L as data};
