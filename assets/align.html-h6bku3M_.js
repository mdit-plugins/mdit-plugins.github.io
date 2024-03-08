import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as r,c as u,a as n,b as e,d as l,w as t,e as p,f as m}from"./app-Dh0Ds2zq.js";const v={},g=n("p",null,"Plugin to align contents.",-1),k={class:"hint-container note"},h=n("p",{class:"hint-container-title"},"Note",-1),b=n("h2",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage"},[n("span",null,"Usage")])],-1),y=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),e(" MarkdownIt "),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"import"),e(),n("span",{class:"token punctuation"},"{"),e(" align "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"from"),e(),n("span",{class:"token string"},'"@mdit/plugin-align"'),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"const"),e(" mdIt "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),e("align"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`\\
::: center
Contents to align center
:::
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js","data-title":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),e(" MarkdownIt "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"markdown-it"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token keyword"},"const"),e(),n("span",{class:"token punctuation"},"{"),e(" align "),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@mdit/plugin-align"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token keyword"},"const"),e(" mdIt "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"MarkdownIt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),e("align"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`

mdIt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`\\
::: center
Contents to align center
:::
`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=m(`<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax"><span>Syntax</span></a></h2><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: left
Contents to align left
:::

::: center
Contents to align center
:::

::: right
Contents to align right
:::

::: justify
Contents to align justify
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Nesting and escaping</p><ul><li><p>Nestings can be done by increasing marker number of outer container:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>:::: center
Center contents...
::: left
Left contents..
:::
Center contents...
::::
</code></pre></div><p>will be</p><div style="text-align:center;"><p>Center contents...</p><div style="text-align:left;"><p>Left contents..</p></div><p>Center contents...</p></div></li><li><p>Escaping can be done by adding <code>\\</code> to escape the marker:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>\\::: left

:::
</code></pre></div><p>will be</p><p>::: left</p><p>:::</p></li></ul></div><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>Demo</span></a></h2><div style="text-align:center;"><h3 id="twinkle-twinkle-little-star" tabindex="-1"><a class="header-anchor" href="#twinkle-twinkle-little-star"><span>Twinkle, Twinkle, Little Star</span></a></h3><div style="text-align:right;"><p>——Jane Taylor</p></div><p>Twinkle, twinkle, little star,</p><p>How I wonder what you are!</p><p>Up above the world so high,</p><p>Like a diamond in the sky.</p><p>When the blazing sun is gone,</p><p>When he nothing shines upon,</p><p>Then you show your little light,</p><p>Twinkle, twinkle, all the night.</p><p>Then the traveller in the dark,</p><p>Thanks you for your tiny spark,</p><p>He could not see which way to go,</p><p>If you did not twinkle so.</p><p>In the dark blue sky you keep,</p><p>And often thro&#39; my curtains peep,</p><p>For you never shut your eye,</p><p>Till the sun is in the sky.</p><p>&#39;Tis your bright and tiny spark,</p><p>Lights the trav’ller in the dark,</p><p>Tho&#39; I know not what you are,</p><p>Twinkle, twinkle, little star.</p></div><details class="hint-container details"><summary>Code</summary><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>:::: center

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,6);function T(_,x){const o=a("RouteLink"),c=a("CodeTabs");return r(),u("div",null,[g,n("div",k,[h,n("p",null,[e("This plugin is based on "),l(o,{to:"/container.html"},{default:t(()=>[e("@mdit/plugin-container")]),_:1}),e(".")])]),p(" more "),b,l(c,{id:"12",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:t(({value:i,isActive:s})=>[e("TS")]),title1:t(({value:i,isActive:s})=>[e("JS")]),tab0:t(({value:i,isActive:s})=>[y]),tab1:t(({value:i,isActive:s})=>[w]),_:1}),f])}const N=d(v,[["render",T],["__file","align.html.vue"]]),S=JSON.parse('{"path":"/align.html","title":"@mdit/plugin-align","lang":"en-US","frontmatter":{"title":"@mdit/plugin-align","icon":"align","description":"Plugin to align contents. Note This plugin is based on . Usage Syntax Nesting and escaping Nestings can be done by increasing marker number of outer container: will be Center co...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://mdit-plugins.mister-hope.com/zh/align.html"}],["meta",{"property":"og:url","content":"https://mdit-plugins.mister-hope.com/align.html"}],["meta",{"property":"og:site_name","content":"Markdown It Plugins"}],["meta",{"property":"og:title","content":"@mdit/plugin-align"}],["meta",{"property":"og:description","content":"Plugin to align contents. Note This plugin is based on . Usage Syntax Nesting and escaping Nestings can be done by increasing marker number of outer container: will be Center co..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-29T12:46:49.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-29T12:46:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"@mdit/plugin-align\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-29T12:46:49.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]}],"git":{"createdTime":1672301615000,"updatedTime":1672318009000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":1.34,"words":403},"filePathRelative":"align.md","localizedDate":"December 29, 2022","autoDesc":true,"excerpt":"<p>Plugin to align contents.</p>\\n<div class=\\"hint-container note\\">\\n<p class=\\"hint-container-title\\">Note</p>\\n<p>This plugin is based on <a href=\\"/container.html\\" target=\\"_blank\\">@mdit/plugin-container</a>.</p>\\n</div>\\n"}');export{N as comp,S as data};
