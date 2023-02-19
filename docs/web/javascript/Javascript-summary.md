---
typora-root-url: ..\..\.vuepress\public\
typora-copy-images-to: ..\..\.vuepress\public\
---

#  Javascript 总结

[[toc]]

## 数据类型

**基本数据类型：**

- Number 
- String
- Boolean
- Null（空）
- undefind（未定义）``
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



## 字符串对象(String)

字符串（String） 对象

- 长度属性length 计算字符串长度

  ```javascript
  var s = 'abc';
  s.length // 3
  ```

- split()  把一个字符串分割成字符串数组

  ```javascript
  //string.split(separator)
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

- substring()  返回字符串中介于两个指定下标之间的字符。(不改变原字符串);

    ```javascript
    //string.substring(start, end)
    var s = 'abc';
    s.substring(0, 2) // "ab"
    s.substring(1, 2) // "b"
    ```

- slice() 返回提取字符串的片段。(不改变原字符串)

    ```javascript
    //string.substring(start, end)
    var s = 'abc';
    s.slice(0, 2) // "ab"
    s.slice(1, 3) // "bc"
    ```

- substr()  返回字符串中从开始的下标开始的指定数目的字符。(不改变原字符串)

    ```javascript
    //string.substring(start, length)
    var s = 'abcde';
    s.substr(0, 3); // "abc"
    s.substr(1, 3); // "bcd"
    ```

- split() 把一个字符串分割成字符串数组

    ```javascript
    // string.split(separator)
    var s = 'abcabc';
    s.split('') // ["a", "b", "c", "a", "b", "c"]
    s.split('b') //  ["a", "ca", "c"]
    ```
    
    



## 数组对象(Array)

Array数组对象

- 长度属性length 计算数组长度

  ```javascript
  var arr = [1, 2, 3];
  arr.length // 3
  ```

- toString()  将数组转换为数组元素（逗号分隔）的字符串

  ```javascript
  var arr = [1, 2, 3];
  arr.toString() // "1,2,3"
  ```

-  join() 将数组转化为数组元素由可指定分隔符组成的字符串

  ```javascript
  // array.join(separator)
  var arr = [1, 2, 3];
  arr.join() // "1,2,3"
  arr.join('') // "123"
  arr.join('a') // "1a2a3"
  ```

-  concat() 连接两个或者多个数组，返回新数组，不改变原数组

  ```javascript
  // array1.concat(array2,array3,...,arrayX)
  var arr = [1, 2, 3];
  var arr2 = ['a', 'b', 'c'];
  arr.concat(arr2) // [1, 2, 3, "a", "b", "c"]
  var arr3 = arr.concat(arr2)
  arr // [1, 2, 3]
  arr3 // [1, 2, 3, "a", "b", "c"]
  ```

- .isArray()  用于判断一个对象是否为数组,如果是返回true,不是返回false

  ```javascript
  // Array.isArray(obj)
  var obj = {'a': 123};
  var arr = [1, 2, 3];
  Array.isArray(obj) // false
  Array.isArray(arr) // true
  ```

- includes() 用于判断数组(可选择初始位置开始检测)是否包含一个指定元素，如果是返回true,不是返回false

  ```javascript
  // array.includes(searchElement, ?fromIndex)
  var arr = [1, 2, 3];
  arr.includes(1) // true
  arr.includes(1, 2) // false
  arr.includes(4) // false
  ```

- indexOf() 可将从头到尾地检索数组指定的元素位置，返回对应的索引，如果不存在返回-1

  ```javascript
  // array.indexOf(searchElement, ?fromIndex)
  var arr = [1, 2, 3];
  arr.indexOf(1) // 0
  arr.indexOf(2) // 1
  arr.indexOf(3) // 2
  arr.indexOf(4) // -1
  arr.indexOf(1,1) // -1
  ```

- lastIndexOf()  可返回一个指定的元素在数组中最后出现的位置，返回对应的索引，从该字符串的后面向前查找，如果不存在返回-1

  ```javascript
  // array.lastIndexOf(searchElement, ?fromIndex)
  var arr = [1, 2, 3, 1, 2, 3];
  arr.lastIndexOf(1) // 3
  arr.lastIndexOf(2) // 4
  arr.lastIndexOf(3) // 5
  arr.lastIndexOf(4) // -1
  ```

- push() 可向数组的**末尾**添加一个或多个元素，并返回新的长度。

  ```javascript
  // array.push(item1, item2, ..., itemX)
  var arr = ['a', 'b'];
  arr.push('c'); // 3
  console.log(arr) // ["a", "b", "c"]
  ```

- unshift() 可向数组的**开头**添加一个或更多元素，并返回新的长度。

  ```javascript
  // array.unshift(item1, item2, ..., itemX)
  var arr = ['a', 'b'];
  arr.unshift('c'); // 3
  console.log(arr) // ["c", "a", "b"]
  ```

- pop() 用于删除数组的**最后一个**元素并返回删除的元素, 改变数组的长度。
  ```javascript
  // array.pop()
  var arr = ['a', 'b', 'c'];
  arr.pop(); // "c"
  console.log(arr) // ["a", "b"]
  ```
  
- shift() 用于把数组的**第一个**元素从其中删除，并返回第一个元素的值。
  ```javascript
  // array.shift()
  var arr = ['a', 'b', 'c'];
  arr.shift(); // "a"
  console.log(arr) // ["b", "c"]
  ```
  
- slice()  可从数组中返回含有选定位置的元素组成的新数组

  ```javascript
  // array.slice(start, end)
  var arr = ['a', 'b', 'c'];
  arr.slice(0,2) // ["a", "b"]
  ```

- splice() 用于添加或删除数组中的元素,返回含有删除元素的新数组，改变原数组。

  ```javascript
  /* array.splice(index,?howmany,?item1,.....,?itemX)
  index: 进行添加或删除的起始位置索引
  howmany： 删除元素的数量，如果未规定此参数，则从起始位置删除到最后位置。
  tem1, ..., itemX： 添加到数组的新元素
  */
  var arr = [1, 2, 3, 4, 5];
  var result = arr.splice(1, 2, 888);
  console.log(result) // [2, 3] 
  console.log(arr); // [1, 888, 4, 5]
  ```

- forEach()  循环遍历数组，调用数组的每个元素，并将元素传递给回调函数。

  ```javascript
  /* 
  array.forEach(function(currentValue, ?index, ?arr))
  currentValue ： 当前元素
  index ： 当前元素的索引值
  arr : 当前元素所属的数组对象
  */
  var arr = [1, 2, 3];
  var sum = 0;
  arr.forEach(function(el, index, arr) {
  	sum += el             
  });
  console.log(sum) // 6
  ```

- every()  用于检测数组所有元素是否都符合指定条件,如果检测到有一个元素不满足条件，则整个表达式返回 *false* ，且剩余的元素不会再进行检测； 如果所有元素都满足条件，则返回 true。

  ```javascript
  /* 
  array.every(function(currentValue, ?index, ?arr))
  currentValue ： 当前元素
  index ： 当前元素的索引值
  arr : 当前元素所属的数组对象
  */
  var arr = [10, 20, 30];
  var result = arr.every(function(el, index) {
      return el > 15
  })
  console.log(result) // false
  var result2 = arr.every(function(el, index) {
      return el > 5
  })
  console.log(result2) // true
  ```

- map() 对原数组的每个元素都通过函数的处理，返回一个新的数组

  ```javascript
  /* 
  array.map(function(currentValue, ?index, ?arr))
  currentValue ： 当前元素
  index ： 当前元素的索引值
  arr : 当前元素所属的数组对象
  */
  var arr = [1, 2, 3];
  var result = arr.map(function (el, index) {
      return el * 2
  })
  console.log(result) // [2, 4, 6]
  ```

- find() 循环遍历数组，当数组中的元素首次满足测试条件返回 true 时,  返回符合条件的元素，之后的值不会再调用执行函数，如果没有符合条件的元素返回 undefined

  ```javascript
  /* 
  array.find(function(currentValue, ?index, ?arr))
  currentValue ： 当前元素
  index ： 当前元素的索引值
  arr : 当前元素所属的数组对象
  */
  var arr = [10, 20, 30];
  var result = arr.find(function (el, index) {
      return el > 15
  })
  console.log(result) // 20
  ```

- some() 循环遍历数组，检测数组中的元素是否满足函数指定条件，如果有一个元素满足返回true, 并且不会继续执行函数,如果没有符合条件的元素返回false

  ```javascript
  /* 
  array.some(function(currentValue, ?index, ?arr))
  currentValue ： 当前元素
  index ： 当前元素的索引值
  arr : 当前元素所属的数组对象
  */
  var arr = [10, 20, 30];
  var result = arr.some(function (el, index) {
      return el > 15
  })
  console.log(result) // true
  var result2 = arr.some(function (el, index) {
      return el > 40
  })
  console.log(result) // false
  ```

- filter() 循环遍历数组，返回包含符合条件的所有元素的新数组。

  ```javascript
  /* 
  array.filter(function(currentValue, ?index, ?arr))
  currentValue ： 当前元素
  index ： 当前元素的索引值
  arr : 当前元素所属的数组对象
  */
  var arr = [10, 20, 30];
  var result = arr.filter(function (el, index) {
      return el > 15
  })
  console.log(result) // [20, 30]
  ```

- sort() 对原数组进行排序（改变原数组），默认升序排序

  ```javascript
  // array.sort(?sortfunction)
  var arr = [3, 5, 1, 6, 2]
  arr.sort() // [1, 2, 3, 5, 6] 
  console.log(arr) // [1, 2, 3, 5, 6]
  arr.sort(function(a,b){return b - a}) // [6, 5, 3, 2, 1]
  arr.sort(function(a,b){return a - b}) // [1, 2, 3, 5, 6]
  ```

- 伪数组转数组的各种方法记录
  - 使用数组方法Array.form(obj)

    `let arr = Array.from(obj)`

  - 使用拓展运算符`...`

    `let arr = [...obj] `

  - 使用数组方法 slice() 

    `let arr = Array.prototype.slice.call(obj)`

  



## 原型及原型链

原型链是javascript中非常重要的概念，它是js实现继承功能的基础。

- 在JS中， 每个实例对象都有一个原型```__proto__```， 这个原型指向它的构造函数的原型对象prototyoe，同理，这个原型对象prototyoe也有对应的原型```__proto__```并指向它的构造函数的原型对象，以此类推，可以形成由__```__proto__```__指向prototype再指向```__proto__```的循环，到 ```Object.prototype.__proto__```为止(因为```Object.prototype.__proto__==null```)的链。



## 微任务和宏任务（event loop)

#### 宏任务（MacroTask）

script全部代码、setTimeout、setInterval、setImmediate（浏览器暂时不支持，只有IE10支持，具体可见MDN）、I/O操作、UI Rendering。

#### 微任务（MicroTask）

Process.nextTick（Node独有）、Promise、Object.observe(废弃)、MutationObserver































