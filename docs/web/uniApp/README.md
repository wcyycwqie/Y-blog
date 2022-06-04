# Uni-app 开发记录



### Nvue页面需要实现text文本首行开头带有多个空格

**text组件官方文档**

**属性说明**

| 属性名      | 类型    | 默认值 | 说明         | 平台差异说明        |
| :---------- | :------ | :----- | :----------- | :------------------ |
| selectable  | Boolean | false  | 文本是否可选 | App、H5、快手小程序 |
| user-select | Boolean | false  | 文本是否可选 | 微信小程序          |
| space       | String  |        | 显示连续空格 | App、H5、微信小程序 |
| decode      | Boolean | false  | 是否解码     | App、H5、微信小程序 |

**space 值说明**

| 值   | 说明                   |
| :--- | :--------------------- |
| ensp | 中文字符空格一半大小   |
| emsp | 中文字符空格大小       |
| nbsp | 根据字体设置的空格大小 |

遇到的问题: 

- text组件设置decode和space属性之后,并没有实现空格的效果

  `<text :decode='true' space='emsp'>&emsp;&emsp;&emsp;测试内容</text>`

解决方法:

需要通过模板语法的{{}}来实现

`<text :decode='true' space='emsp'>{{'&emsp;&emsp;&emsp;'}}测试内容</text>`

`<text :decode='true' space='emsp'>{{' '}}&emsp;&emsp;测试内容</text>`

