---


typora-copy-images-to: Md-IMG
typora-root-url: ./
---

#  Javascript 总结

[[toc]]

## 数据类型

**基本数据类型：**

- Number 
- String
- Boolean
- Null（空）
- undefind（未定义）
- Symbol

**复杂数据类型：**

- Object
- Array
- Function

Number、String、Boolean、undefined、Function、Object可以用typeof()来判断数据类型

![image-20210421115457341](/Md-IMG/image-20210421115457341.png)

数组Array需要用 insteadsof () 来判断

![image-20210421144355686](/Md-IMG/image-20210421144355686.png)



## HTML DOM

DOM是Document Object Model。

文档对象模型 (DOM) 是HTML和XML文档的编程接口。它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容。

DOM 将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。简言之，它会将web页面和脚本或程序语言连接起来。

所以，我们可以通过JS去与HTML产生交互

### DOM元素操作

#### 查询元素

通过ID查询 getElementById()

```javascript
let element = document.getElementById("testId");
```

通过类名获取 getElementsByClassName()

```javascript
let element = docuement.getElementsByClassName('class')
```

通过标签查询 getElementsByTagName()

```javascript
let element = document.getElementsByTagName("div");
```

根据CSS选择器规则来获取元素 querySelector()

```javascript
let element = document.querySelector('#testID');
let element = document.querySelector('.class');
```

#### 创建元素

createElement() 方法通过指定名称创建一个元素

```javascript
let div = document.createElement('div');
let btn = document.createElement("BUTTON");
```

#### 插入元素

nsertBefore() 方法可在已有的子节点前插入一个新的子节点。

```javascript
document.getElementById("div").insertBefore(newItem,existingItem);
```

appendChild() 方法可向节点的子节点列表的末尾添加新的子节点。

```javascript
document.getElementById("myList").appendChild(newListItem);
```

#### 移除元素

removeChild() 方法可从子节点列表中删除某个节点，删除成功，返回被删除的节点，失败则返回null。

```javascript
let div = document.getElementById("divId");
div.removeChild(div.childNodes[0]);
```



#### 常用方法

| 方法                     |                             描述                             |
| ------------------------ | :----------------------------------------------------------: |
| getElementById()         |                   返回带有指定 ID 的元素。                   |
| getElementsByTagName()   | 返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。 |
| getElementsByClassName() |          返回包含带有指定类名的所有元素的节点列表。          |
| appendChild()            |                 把新的子节点添加到指定节点。                 |
| removeChild()            |                         删除子节点。                         |
| replaceChild()           |                         替换子节点。                         |
| insertBefore()           |              在指定的子节点前面插入新的子节点。              |
| createAttribute()        |                        创建属性节点。                        |
| createElement()          |                        创建元素节点。                        |
| createTextNode()         |                        创建文本节点。                        |
| getAttribute()           |                      返回指定的属性值。                      |
| setAttribute()           |               把指定属性设置或修改为指定的值。               |



## 字符串对象

字符串（String） 对象

- 长度属性length 计算字符串长度

  ```javascript
  var s = 'abc';
  s.length // 3
  ```

- split()  把一个字符串分割成字符串数组

  ```javascript
  var s = 'abc';
  s.split(''); // ['a', 'b', 'c']
  s.split('b'); // ['a', 'c']
  ```

- indexOf() 从首位开始定位第一个指定的字符首次出现的位置，返回索引，如果不存在则返回-1。

  ```javascript
  var s = 'abcabc';
  s.indexOf('a'); // 0
  s.indexOf('b'); // 1
  s.indexOf('c'); // 2
  s.indexOf('d'); // -1
  ```

- lastIndexOf() 从末位开始定位查找第一个指定的字符首次出现的位置，返回索引，如果不存在则返回-1。

    ```javascript
  var s = 'abccba'
  s.indexOf('a'); // 5
  s.indexOf('b'); // 4
  s.indexOf('c'); // 3
  s.indexOf('d'); // -1
  ```

- 

- 







## 数组方法













