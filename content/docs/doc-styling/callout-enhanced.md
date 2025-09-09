---
title: "增强版 Callout 组件"
type: docs
sidebar:
  open: true
toc: true
---

现在你的callout组件支持更多功能，包括自定义颜色、emoji和完全的向后兼容！

## 🎯 功能特点

- ✅ **完全向后兼容** - 所有现有的callout都能正常工作
- ✅ **emoji支持** - 使用`emoji`参数添加自定义表情
- ✅ **自定义颜色** - 使用`color`参数选择喜欢的颜色
- ✅ **传统类型** - 继续支持`type`参数
- ✅ **段首缩进** - 结合CSS类实现中文段首缩进

## 📝 使用方法

### 1. 传统用法（完全兼容）

{{< callout type="info" >}}
这是传统的info类型callout，完全兼容现有用法。
{{< /callout >}}

{{< callout type="warning" >}}
这是传统的warning类型callout。
{{< /callout >}}

{{< callout type="error" >}}
这是传统的error类型callout。
{{< /callout >}}

### 2. Emoji用法（你的原有风格）

{{< callout emoji="🌟" >}}
生活的平淡，总会被突如其来的波折打破。那些看似曲折的麻烦，也许恰恰是感情升温的契机。
</br>
</br>
多年以后回望，你会发现，也许真正定义你们关系的，并非无数个平淡的日子，而正是当初那一次次坚定而温暖的守护。
{{< /callout >}}

{{< callout emoji="💡" >}}
这是使用emoji参数的callout，保持你原有的使用习惯。
{{< /callout >}}

{{< callout emoji="🎯" >}}
emoji参数让你可以使用任何表情符号作为图标。
{{< /callout >}}

### 3. 自定义颜色用法

{{< color-wrap color="purple" >}}
{{< callout emoji="💜" >}}
这是紫色主题的callout，使用了自定义颜色和emoji。
{{< /callout >}}
{{< /color-wrap >}}

{{< color-wrap color="pink" >}}
{{< callout emoji="🌸" >}}
这是粉色主题的callout，温馨而友好。
{{< /callout >}}
{{< /color-wrap >}}

{{< color-wrap color="teal" >}}
{{< callout emoji="🌊" >}}
这是青色主题的callout，清新而平静。
{{< /callout >}}
{{< /color-wrap >}}

{{< color-wrap color="indigo" >}}
{{< callout emoji="🔮" >}}
这是靛蓝主题的callout，深邃而智慧。
{{< /callout >}}
{{< /color-wrap >}}

### 4. 结合段首缩进

<div class="text-indent-2">

{{< callout emoji="📖" color="gray" >}}
这个callout结合了段首缩进功能。每个段落的首行都会自动缩进，营造出传统书籍的阅读体验。

这是第二个段落，同样具有首行缩进效果。自定义颜色让内容更加美观，段首缩进让阅读更加舒适。

这样的排版更符合中文阅读习惯，让内容看起来更加整齐美观。
{{< /callout >}}

</div>

## 🌈 可用颜色

### 预设颜色主题

- `blue` - 蓝色（默认info样式）
- `green` - 绿色（默认success样式）
- `yellow` - 黄色（默认warning样式）
- `red` - 红色（默认error样式）
- `purple` - 紫色（笔记风格）
- `indigo` - 靛蓝（深度思考）
- `pink` - 粉色（温馨友好）
- `teal` - 青色（清新平静）
- `orange` - 橙色（活力热情）
- `gray` - 灰色（中性专业）

### 颜色演示

{{< color-wrap color="blue" >}}
{{< callout emoji="ℹ️" >}}
蓝色主题 - 专业信息
{{< /callout >}}
{{< /color-wrap >}}

{{< color-wrap color="green" >}}
{{< callout emoji="✅" >}}
绿色主题 - 成功提示
{{< /callout >}}
{{< /color-wrap >}}

{{< color-wrap color="yellow" >}}
{{< callout emoji="⚠️" >}}
黄色主题 - 警告注意
{{< /callout >}}
{{< /color-wrap >}}

{{< color-wrap color="red" >}}
{{< callout emoji="🚨" >}}
红色主题 - 错误危险
{{< /callout >}}
{{< /color-wrap >}}

{{< color-wrap color="purple" >}}
{{< callout emoji="💜" >}}
紫色主题 - 笔记说明
{{< /callout >}}
{{< /color-wrap >}}

{{< color-wrap color="orange" >}}
{{< callout emoji="🔥" >}}
橙色主题 - 活力热情
{{< /callout >}}
{{< /color-wrap >}}

## 📋 参数说明

| 参数 | 说明 | 示例 | 优先级 |
|------|------|------|--------|
| `emoji` | 自定义表情图标 | `emoji="🌟"` | 最高 |
| `icon` | 自定义图标 | `icon="🎯"` | 中 |
| `color` | 自定义颜色主题 | `color="purple"` | - |
| `type` | 传统类型 | `type="info"` | 最低 |
| `title` | 自定义标题 | `title="重要提示"` | - |

## 🔄 迁移指南

### 从原有callout迁移

你的所有现有callout都无需修改，会自动工作：
很好。現在顏色是能夠對上了，但是整體的樣式上與原來傳統用法的效果還是有區別的。我很喜歡傳統用法的那個 callout 樣式，而你目前給出來的自定義顏色的用法，它的邊距顏色太深了，我覺得你應該好好學習一下原來傳統用法的顏色配置是怎樣的。 
<!-- 这些都会正常工作 -->
{{< callout emoji="🌟" >}}
原有的emoji用法
{{< /callout >}}

{{< callout type="info" >}}
原有的type用法
{{< /callout >}}


### 添加颜色支持

如果想为现有callout添加颜色，只需添加color参数：

<!-- 原来的 -->
{{< callout emoji="🌟" >}}
内容
{{< /callout >}}

<!-- 现在可以这样 -->
{{< callout color="pink" >}}
内容
{{< /callout >}}

## 💡 使用建议

1. **保持一致性** - 在同一篇文档中使用统一的风格
2. **语义化选择** - 根据内容性质选择合适的颜色
3. **适度使用** - 避免过度使用不同颜色造成视觉混乱
4. **emoji优先** - 使用emoji参数可以获得最佳的视觉效果

现在你可以继续使用原有的callout语法，同时享受更多的自定义选项！🎉
