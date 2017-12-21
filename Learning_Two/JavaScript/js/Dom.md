#### document 视口的尺寸
   console.log(document.documentElement.clientWidth);
   console.log(document.documentElement.clientHeight);
#### 获取屏幕分辨率
   console.log(window.screen.width);
   console.log(window.screen.height);
> 元素：一个标签加里面的内容组成元素
#### inner(获取元素内容的2种方式)

1.innerHtml 保存html标签，能够保存空格，可以修改内容，会识别标签
2.innerText 只能保存文本内容，可以修改内容，不会识别标签

    box.innerText="<b>这是我更改的内容</b>";
    //这是我更改的内容（加粗的字体）
    box.innerHTML="<b>这是我更改的内容</b>";
    //<b>这是我更改的内容</b>

## 属性设置
> 属性分为标准属性和非标准属性

* html属性里有个style属性是个对象，css属性先用html.style.属性
属性是分为标准属性和非标准属性(自定义属性),
* 对标准属性: obj.id、obj.src、obj.alt、obj.href去获取或者设置
    * .id
    * .className
* 对非标准属性，只能用getAttribute("")或者是setAttribute("属性名字",属性值)。
* .getAttribute('aa');获取非标准属性
* .setAttribute('aa'，'bb');设置非标准属性

* obj.getComputedStyle方法获取的是最终应用在元素上的所有CSS属性对象,
IE中用obj.currentStyle方法，有2个参数
 ```function  add() {
        let width=parseInt(getComputedStyle(box,null).width);
        //获得宽度这个属性的值
        let moveWidth=width+s;
        if(moveWidth>=400){
            moveWidth=400;
            s*=-1;
        }
        if(moveWidth<=200){
           moveWidth=200;
           s*=-1;
        }
        box.style.width=moveWidth+"px"; //将属性值赋给宽度

    }
```

## 样式设置
* 用JS添加的样式都会对应的添加进元素的行内样式中
    * 1.直接对style属性单个进行添加修改
    ```javascript
        one.style.width='600px';只能获取行内的样式

    ```
    * 2.直接对style属性进行多个添加修改
    ```javascript
        one.style.cssText='width:600px;height:600px;background-color:pink';
    ```
    * 3.添加预先声明好的样式的类名或者id名
    ```javascript
        one.className='bb';//直接替代原有的类名
        one.className+='cc';//在原有的类名的基础上添加一个类名
        one.id='dd';//添加id名
    ```
    * 4.利用classList进行增加类名或移除类名
    ```javascript
        one.classList.add("two");//添加类名two
        one.classList.remove("two");//移除类名two
    ```
    * 5.classList.toggle("")方法    
       若原先具有参数类名则删除，没有则添加。

#### 类名
       * 增加类名 标签类.classList.add("one");
       * 删除类名box.classList.remove("")
       * 类有就有，类无就无box.classList.toggle();

#### SEO
搜索引擎优化
* h1-h6、em、strong
* nav section(块)、header、footer、code（一段代码）
