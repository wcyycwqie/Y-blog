---
typora-root-url: ..\..\.vuepress\public
typora-copy-images-to: ..\..\.vuepress\public\Md-IMG
---

# HTML Object

HTML DOM中 每个元素的都是节点（node）

## DOM 元素对象

HTML 元素属性和方法参考手册地址：

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement)

- [菜鸟](https://www.runoob.com/jsref/dom-obj-all.html)

### 元素的坐标、位置属性

![html-dom](/Md-IMG/html-dom-position.png)

- **offsetParent**  获得被定位的最近祖先元素

- **offsetLeft/offsetTop** 当前元素相对于offsetParent左边界/顶部边界的偏移像素值
  
  - 当前元素向左的偏移，包括元素的外边距(margin)
  - 父元素的内边距(padding)、边框(border)以及滚动条

- **clientLeft/clientTop** 当前元素的左/顶部边框(border)的宽度像素值

- **scrollLeft/scrollTop** 当前视图中的实际元素的左/顶部边缘和左/顶部边缘之间的距离
