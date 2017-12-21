### 节点
文档(html)树模型
####  每种类型的节点都包含
  *  节点的类型 nodeType
  * 节点的值   nodeValue
  * 节点的名字 nodeName
#### 节点的类型     * 节点类型    * 节点值   * 节点名字
* 元素节点：div        1           null     大写的标签名
* 文本节点  字,空格     3          文本内容       #text
* 注释节点  <-- >      8          注释内容       #comment
* 属性节点  id class   2          属性值        属性名
* 文档节点  document   9          null       #document
元1属2文3注8档9

* div.childNodes  获得所有子元素节点的集合

#### 节点的关系
```html
  <div>
      <!--注释-->
      <a href="">文本</a>
      <img src="" alt="">
  </div>
  <ul>
        <li></li>
        <li></li>
  </ul>
  ```
* 获得父节点  parentNode/ parentElement
```javascript
let n=document.querySelector('div'); //获取元素节点
console.log(n.parentNode);//<body>...</body>
console.log(n.parentElement);//<body>...</body>
```

* 获得子节点  childNodes
* 获得元素子节点children
```javascript
let n=document.querySelector('div'); //获取元素节点
console.log(n.childNodes);//[text, comment, text, a, text, img, text]
console.log(n.children);//[a, img]
```

* 获得最后一个子节点 lastChild
* 获得最后一个元素子节点 lastElementChild


* 获得第一个子节点   firstChild
* 获得第一个元素子节点 firstElementChild


* 获得下个兄弟子节点nextSibling
* 获得下个兄弟元素节点nextElementSibling
```javascript
console.log(n.nextSibling);//#text
console.log(n.nextElementSibling);//<ul>...</ul>
```


* 获得上个兄弟节点 previousSibling
* 获得上个兄弟元素节点previousElementSibling
```javascript
console.log(n.previousSibling);//null
console.log(n.previousElementSibling));//#text（空格属于文本节点）
```
### 创建节点
* 创建元素节点，这个对象在内存里。需要将她加到页面中

```javascript
    let div=document.createElement('div');
        div.innerHTML='123';
        document.body.appendChild(div);//将它加到页面中，页面输出123,在html中增加了个<div>123</div>
```
* 创建属性节点
```javascript
    let node=document.createAttribute('aa');//不属于某个对象的，单纯的创建个属性节点。
        node.nodeValue='bb';
        console.log(node);//aa='bb';
```
### 节点的增删改

节点的操作只要不是新创建的元素都会影响原来的元素的位置
如果操作的是原有的元素就会影响原来的位置
* 元素位置移动方式
  * 追加到某个元素内部
   appendChild方法：将一个元素添加到另一个元素的内容之后。影响原来的位置
语法：父节点.appendChild(要追加到父节点内部的最后的元素);
  * 插入到某个元素之前
   insertBefore方法，将一个元素插入到另一个元素之前，影响原来的位置
语法：父节点.insertBefore(要添加的元素,插入到哪个元素之前);
  * 插入到某个节点之后
  ```javascript
  function insertAfter(newdom,olddom) {
       let  parent=olddom.parentNode; //获得旧的父节点
      let next=olddom.nextElementSibling;//获得旧的下个兄弟节点
      if(next){
          parent.insertBefore(newdom,next);//将新的节点插入到旧的下个兄弟节点之前
      }else{
          parent.appendChild(newdom);//将节点插入到父节点之后
      }
}
  insertAfter(a,span); //调用函数
  ```
* 删除节点
  removeChild()将一个元素从页面中移出
语法:父节点.removeChild();

* 替换节点
  replaceChild();替换某一个元素
语法：父节点.replaceChild(替换的元素，原来的元素);

* 克隆节点(克隆谁就用谁调用)
  cloneNode()
语法：要克隆的节点.cloneNode();

要克隆的节点.cloneNode(true);//深克隆吗，true,克隆子元素,浅克隆false,不克
