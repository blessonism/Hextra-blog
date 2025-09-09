---
title: "Callout 自定义颜色"
type: docs
sidebar:
  open: true
toc: true
---


支持自定义颜色的Callout组件，让你可以选择喜欢的颜色而不局限于预定义类型。

## 使用方法

### 方法一：增强版Callout（立即可用）

{{< callout color="颜色名" emoji="图标" >}}
你的内容
{{< /callout >}}


### 方法二：CSS类（备用方案）

如果需要更多控制，也可以使用CSS类包装器：

```markdown
<div class="callout-purple">

> [!NOTE]
> 这是紫色主题的Callout内容。

</div>
```

**推荐使用方法一**，因为它更简洁且功能更强大。

## 可用颜色主题

### 蓝色系 (Blue) - 默认Info样式

> [!INFO]
> 这是蓝色主题的Callout，适合信息提示和说明内容。蓝色给人以专业、可信赖的感觉。

### 绿色系 (Green) - 默认Success样式

> [!TIP]
> 这是绿色主题的Callout，适合成功提示和正面信息。绿色代表成功、安全和积极。

### 黄色系 (Yellow) - 默认Warning样式

> [!WARNING]
> 这是黄色主题的Callout，适合警告和注意事项。黄色能够有效吸引注意力。

### 红色系 (Red) - 默认Danger样式

> [!DANGER]
> 这是红色主题的Callout，适合错误提示和重要警告。红色传达紧急和重要的信息。

### 紫色系 (Purple) - 自定义颜色

<div class="callout-purple">

> [!NOTE]
> 这是紫色主题的Callout，适合笔记和特殊说明。紫色给人以神秘、优雅的感觉。

</div>

### 靛蓝色系 (Indigo) - 自定义颜色

<div class="callout-indigo">

> [!NOTE]
> 这是靛蓝色主题的Callout，适合深度思考和技术内容。靛蓝色代表智慧和深度。

</div>

### 粉色系 (Pink) - 自定义颜色

<div class="callout-pink">

> [!NOTE]
> 这是粉色主题的Callout，适合温馨提示和友好内容。粉色传达温暖和友善。

</div>

### 青色系 (Teal) - 自定义颜色

<div class="callout-teal">

> [!NOTE]
> 这是青色主题的Callout，适合清新内容和创意想法。青色给人以清新、平静的感觉。

</div>

### 橙色系 (Orange) - 自定义颜色

<div class="callout-orange">

> [!NOTE]
> 这是橙色主题的Callout，适合活力内容和重点强调。橙色充满活力和热情。

</div>

### 灰色系 (Gray) - 自定义颜色

<div class="callout-gray">

> [!NOTE]
> 这是灰色主题的Callout，适合中性内容和补充说明。灰色显得专业和中性。

</div>

## 与段首缩进结合使用

<div class="callout-indigo text-indent-2">

> [!NOTE]
> **段首缩进演示**
>
> 这个Callout结合了自定义颜色和段首缩进功能。每个段落的首行都会自动缩进，营造出专业的排版效果。
>
> 这是第二个段落，同样具有首行缩进效果。自定义颜色让内容更加美观，段首缩进让阅读更加舒适。

</div>

## 使用技巧

### 组合使用

你可以同时使用颜色类和缩进类：

```markdown
<div class="callout-purple text-indent-2">

> [!NOTE]
> 紫色主题 + 段首缩进的组合效果

</div>
```

### 嵌套使用

<div class="callout-teal">

> [!NOTE]
> **外层青色主题**
>
> <div class="callout-pink">
>
> > [!NOTE]
> > **内层粉色主题**
> >
> > 可以嵌套使用不同颜色的Callout来创建层次感。
>
> </div>

</div>

## 快速参考

### 默认颜色（直接可用）
- `> [!INFO]` - 蓝色（信息）
- `> [!TIP]` - 绿色（成功）
- `> [!WARNING]` - 黄色（警告）
- `> [!DANGER]` - 红色（错误）

### 自定义颜色（需要CSS类包装）
- `.callout-purple` - 紫色（笔记）
- `.callout-indigo` - 靛蓝（深度）
- `.callout-pink` - 粉色（温馨）
- `.callout-teal` - 青色（清新）
- `.callout-orange` - 橙色（活力）
- `.callout-gray` - 灰色（中性）

### 使用模板

#### 增强版Callout用法：

{{< callout color="purple" emoji="💜" >}}
你的内容
{{< /callout >}}


#### 结合段首缩进：

<div class="text-indent-2">
{{< callout color="indigo" emoji="🔮" >}}
你的内容
{{< /callout >}}
</div>

#### CSS类备用方案：

<div class="callout-purple text-indent-2">

> [!NOTE]
> 你的内容

</div>


现在你可以根据内容的性质和个人喜好选择最合适的颜色主题了！🎨
