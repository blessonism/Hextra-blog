---
title: 链接展示方案
type: docs
sidebar:
  open: true
toc: true
---


本页面展示了多种美观的链接展示方式，适用于不同的使用场景。

## 1. Hextra 原生卡片组件

### 基础卡片
最常用的卡片布局，支持图标和标签：  
</br>

{{< hextra/feature-card 
  title="卡片标题"
  subtitle="卡片描述"
  image="/images/feature.webp"
  link="/feature"
>}}


{{< cards >}}
  {{< card link="https://github.com" title="GitHub" icon="github" >}}
  {{< card link="https://docs.github.com" title="GitHub Docs" icon="book-open" >}}
  {{< card link="https://github.com/features" title="GitHub Features" icon="sparkles" tag="推荐" >}}
{{< /cards >}}

### 双列布局
适合并排展示相关链接：

{{< cards cols="2" >}}
  {{< card link="https://gohugo.io" title="Hugo" subtitle="世界上最快的网站构建框架" icon="lightning-bolt" >}}
  {{< card link="https://github.com/imfing/hextra" title="Hextra" subtitle="现代化的 Hugo 文档主题" icon="template" >}}
{{< /cards >}}

### 带标签的卡片
使用不同颜色的标签来标识链接类型：

{{< cards cols="3" >}}
  {{< card link="https://tailwindcss.com" title="Tailwind CSS" icon="color-swatch" tag="CSS框架" tagType="info" >}}
  {{< card link="https://alpinejs.dev" title="Alpine.js" icon="code" tag="实验性" tagType="warning" >}}
  {{< card link="https://htmx.org" title="HTMX" icon="cursor-click" tag="已弃用" tagType="error" >}}
{{< /cards >}}

## 2. 友链展示卡片

### 横向友链布局
项目中包含自定义的友链组件，具有以下特点：

**特点**：
- **横向布局**：图标 + 标题 + 描述 + 状态指示器
- **网络状态检测**：自动检测链接可用性（绿色=正常，黄色=慢，红色=异常）
- **适合友情链接展示**：专门为友链页面设计

**使用方法**：
由于该组件为项目特定组件，建议查看项目中的友链页面实际使用示例。

**推荐替代方案**：
对于一般的链接展示需求，建议使用下面的 Hextra 原生卡片组件，更加稳定和通用。

## 3. Feature 卡片

### 大型展示卡片
适合重要功能或项目的突出展示：

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="文档中心"
    subtitle="完整的使用指南和API参考"
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-md:hx-min-h-[340px]"
    image="/images/contents.webp"
    imageClass="hx-top-[40%] hx-left-[24px] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));"
    link="/docs"
  >}}
  {{< hextra/feature-card
    title="示例项目"
    subtitle="实际应用案例和最佳实践"
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-lg:hx-min-h-[340px]"
    image="/images/showcase.webp"
    imageClass="hx-top-[40%] hx-left-[36px] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(142,53,74,0.15),hsla(0,0%,100%,0));"
    link="/showcase"
  >}}
{{< /hextra/feature-grid >}}

## 4. 徽章链接

### 内联徽章
适合在文本中嵌入的小型链接：

查看我们的 {{< badge content="GitHub 仓库" link="https://github.com" icon="github" >}} 获取最新代码。

访问 {{< badge content="官方文档" link="/docs" type="info" >}} 了解详细用法。

### 不同类型的徽章

{{< badge content="默认徽章" >}}
{{< badge content="信息" type="info" >}}
{{< badge content="警告" type="warning" >}}
{{< badge content="错误" type="error" >}}

## 使用建议

### 选择合适的方案

| 使用场景 | 推荐组件 | 语法示例 | 特点 |
|---------|---------|---------|------|
| **导航页面** | `cards` + `card` | `{{< cards >}}{{< card >}}{{< /cards >}}` | 标准、美观、功能完整 ⭐ |
| **友情链接** | 项目自定义组件 | 查看项目友链页面示例 | 横向布局、状态检测 |
| **重要功能** | `hextra/feature-card` | `{{< hextra/feature-card >}}` | 大型展示、视觉突出 |
| **文内链接** | `badge` | `{{< badge content="文本" link="链接" >}}` | 小巧、内联 |
| **行动号召** | `hextra/hero-button` | `{{< hextra/hero-button text="文本" link="链接" >}}` | 突出、引导性强 |

### 快速复制语法

#### 1. 标准卡片网格 ⭐ 最推荐
{{< cards cols="3" >}}
  {{< card link="/docs" title="文档" icon="book-open" >}}
  {{< card link="/blog" title="博客" icon="pencil" tag="推荐" >}}
  {{< card link="/about" title="关于" icon="user" >}}
{{< /cards >}}


#### 2. 友链展示
```markdown
<!-- 使用项目自定义组件，具体语法请参考项目中的友链页面 -->
<!-- 推荐使用上面的标准卡片组件作为替代方案 -->
```

#### 3. 大型功能卡片
```markdown
{{< hextra/feature-card
  title="功能标题"
  subtitle="功能描述"
  image="/images/feature.webp"
  link="/feature"
>}}
```

#### 4. 内联徽章
```markdown
访问 {{< badge content="官方文档" link="/docs" icon="book-open" >}} 了解更多。
```

### 响应式设计

所有卡片组件都支持响应式设计：
- **桌面端**：多列布局（可通过 `cols` 参数控制）
- **平板端**：自动调整列数
- **移动端**：单列布局

### 自定义样式

可以通过 `class` 和 `style` 参数自定义外观：

```markdown
{{< card
  title="自定义卡片"
  class="hx-bg-gradient-to-r hx-from-blue-500 hx-to-purple-600"
  style="border-radius: 1rem;"
>}}
```
