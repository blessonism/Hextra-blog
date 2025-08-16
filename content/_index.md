---
title: Welcome
layout: hextra-home
---


{{< hextra/hero-badge link="https://github.com/blessonism">}}
  <div class="hx-w-2 hx-h-2 hx-rounded-full hx-bg-primary-400"></div>
  <span>About Me</span>
  {{< icon name="arrow-circle-right" attributes="height=20" >}}
{{< /hextra/hero-badge >}}


<div class="hx-mt-6"></div>


<div class="hx:mt-12 hx:mb-10"> 
{{< hextra/hero-headline >}}
  创建现代化网站&nbsp;<br class="hx:sm:block hx:hidden" />由 Markdown 和 Hugo 驱动
{{< /hextra/hero-headline >}}
</div>

<div class="hx-mt-6"></div>

<div class="hx:mb-6">
{{< hextra/hero-button text="查看文档" link="docs" >}}
</div>

<div class="hx-mt-6"></div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="知识库"
    subtitle="结构化的长期内容，按主题组织。"
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-md:hx-min-h-[340px]"
    image="/images/contents.webp"
    imageClass="hx-top-[40%] hx-left-[24px] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));"
    link="/docs"
  >}}
  {{< hextra/feature-card
    title="项目展示"
    subtitle="一些有代表性的作品与案例。"
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-lg:hx-min-h-[340px]"
    image="/images/showcase.webp"
    imageClass="hx-top-[40%] hx-left-[36px] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(142,53,74,0.15),hsla(0,0%,100%,0));"
    link="/showcase"
  >}}
  {{< hextra/feature-card
    title="技术博客"
    subtitle="记录日常与思考，支持 RSS 订阅。"
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-md:hx-min-h-[340px]"
    image="/images/blog.webp"
    imageClass="hx-top-[40%] hx-left-[36px] hx-w-[110%] sm:hx-w-[110%] dark:hx-opacity-80"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(221,210,59,0.15),hsla(0,0%,100%,0));"
    link="/blog"
  >}}
{{< /hextra/feature-grid >}}
