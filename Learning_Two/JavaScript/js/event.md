### 事件
#### js是一种基于对象和事件驱动的解释性松散型语言
* 解释性：它是有浏览器解释运行
* 松散性：不用强制性说明变量的类型，
* 基于对象：一切皆对象
* 事件：用户的行为
#### 事件的构成
* 事件源（事件发生在谁身上）
* 事件处理程序（事件发生后，要做的事情，function ）
### 现代浏览器事件的添加方式（只支持现代浏览器，ie不支持）
1.直接作为属性只能执行最后一个事件
   ```javascript
   let div=document.querySelector('.box');
    div.onclick=aa; //不执行
    div.onclick=bb; //执行，覆盖了上个事件
    function aa() {
        alert(1);  
    }
    function bb(){
        alert(2);
    }
    div.onclick=null; //事件删除
   ```
2.事件绑定
事件源.addEventListener('事件'，function,false); //事件不加on。第三个参数是false。
#### ie的事件添加方式
事件源.attachEvent('事件',aa);//事件必须加on,没有第3个参数
事件源.detachEvent('事件',aa); //删除事件的方式
### 事件绑定的优点:
1.可以同时绑定多个事件
2.可以解除响应的绑定
### 事件删除
1.直接作为属性删除事件
  div.onclick=aa();
  div.onclick=null;
2.通过事件绑定的方式
直接用 .removeEventListener(); 只能删除用事件绑定的方式的事件。
#### 事件类型
 鼠标事件  键盘事件  滚动事件 加载事件  窗口大小的改变
 滚轮事件
* 关于用户鼠标
  * click  单击
  * dblclick 双击
  * mouseover 鼠标移入
  * mouseout  鼠标移出
  * mousedown 鼠标按下
  * mouseup   鼠标抬起
  * mousemove 鼠标移动
按下抬起触发1次单击，双击触发2次单击，事件相互关联的
* 关于键盘
  * keydown   键盘按下
  * keypress  键盘按住
  * keyup     键盘抬起
  * 键盘事件添加在document身上
  打印键(字母键)和非打印键
  非打印键只能触发按下，抬起
  打印件触发按下，抬起，按住
#### 添加事件
添加事件的监听   aa.addEventListener('必须是字符串，事件名'，执行的函数);

```javascript
 value.addEventListener('transitionend',function ()   {      
   flag=true;
 });
```
### 事件对象
在事件发生的时候会自动的创建一个对象，来保存事件发生时候的所有信息。
```javascript
  div.onclick=function(e){
      console.log(e)
  }
```
*  事件对象e的属性:
   * cancelBubble:
   * clientX:距离窗口左上角的左边的距离
   * clientY:距离窗口左上角上边的距离
   * detail
   * offsetX:距离事件源左边的距离
   * offsetY:距离事件源上边的距离
   * pageX:距离页面（body）左边的距离//body有滚动条时会变
   * pageY:距离页面（body）上边的距离
   * returnValue
   * srcElement
   * screenX:距离屏幕左边的距离
   * screenY:距离屏幕上边的距离
   * ctrlKey:按ctrl输出为true,其他键为false
   * altKey:按alt输出为true,其他键为false
   * shiftKey:按shfit输出为true,其他键为false
   * keyCode 输出键盘字母的ASCII码值
   * key 输出键盘字母

#### 滚轮事件
* 滚轮事件必须用事件绑定的方式添加
* 谷歌用mousewheel事件,火狐用DOMMouseScroll事件
* 事件对象e.preventDefault阻止默认动作
* 事件e.detail 谷歌的输出当前滚动状态
   谷歌是向上滚动是120,向下滚动是-120
* 事件e.wheelDelta 火狐的输出当前滚动状态
   火狐是向上滚动是-3，向下滚动是3

```javascript
let div=document.querySelector('.box');
    if(div.addEventListener){  //封装事件监听
        div.addEventListener('mousewheel',fun, false); //滚轮事件必须用事件绑定的方式添加,谷歌浏览器的滚轮
        div.addEventListener('DOMMouseScroll',fun,false);//火狐浏览器的滚轮
    }else{
        div.attachEvent('onmousewheel',fun);
    }

    function  fun(e) {
        e.preventDefault();//阻止默认动作
        console.log(e.detail); //输出当前滚动的状态，向上还是向下滚动
        console.log(e.wheelDelta);
        //向上滚动是120.向下滚动是-120  谷歌
        //向上滚动是 -3 ,向下滚动是 3 火狐
        let  way=e.detail||e.wheelDelta; //或判断
        if(way==120||way==-3){  
            alert("向上滚动");
        }else if(way==-120||way==3){
            alert('向下滚动');
        }
    }
```

#### 事件委派

#### 盒子移动事件
```javascript
//鼠标移动的时候事件对象e的属性不停的得到距离，并且赋值给left和top。
     div.onmousedown=function (e) {
         let ox=e.offsetX;
         let oy=e.offsetY;
         document.onmousemove=function (e) {
             let cx=e.clientX;
             let cy=e.clientY;
                 let left=cx-ox; //鼠标到页面的距离-鼠标到事件源的距离=盒子left的距离
                 let top=cy-oy;
             if(left>=maxWidth-boxWidth){  //视口的宽度-盒子的宽度是left最大的宽度
                 left=maxWidth-boxWidth;

             }else if(left<0){
                 left=0;

             }
             if(top>=maxHeight-boxHeight){
                 top=maxHeight-boxHeight;
             }else if(top<0){
                 top=0;
             }
             div.style.left=left+'px';
             div.style.top=top+'px';

         }
         div.onmouseup=function () {
             document.onmousemove=null;
         }
     }
```
###  html实体
用一些特定的符号代替html里的特殊符号
 * ```&lt;``` <  
 * ```&gt;``` >  
* ```&nbsp;``` 空格   
* 　```&copy;```圈c
> img[src=../img/350.jpg] 快捷方式
img src="img/2.png" alt="">
div.left+div.right 变为```<div class="left">·&lt;</div>
       <div class="right">&gt;</div>```

>绝对定位居中的方式可以是：
left：50%；margin-left:-50%的长度px;

#### 实现图片过度效果
用绝对定位将图片统一过度到同一个位置，通过改变不透明度，实现过度
   ```
   section#box >ul:nth-child(2) > li{
            width:100%;
            height:460px;
            position: absolute; //将四张图片定位在一处
            top:0px;
            left:0px;
            overflow: hidden;
            border:1px solid #000;

        }
        section#box >ul:nth-child(2) > li img{
            width:100%;
            opacity: 0;  //改变透明度
            transition: all 1s;//添加过度
        }
        section#box >ul:nth-child(2) > li > img.active{
            opacity: 1; //增加显示属性时透明度为1
        }
    ```

ctrl+shift+c 将页面js状态定住。

#### 如何学好？
1.心态，不能懒！该弄懂的一定要弄懂，相信自己一定能学好
2.找错误   console.log();
   1.从上到下的过程，一旦有错误，程序会立即停止运行，调错从代码第一句开始走，将你需要的数据（对象是否正确，数组元素是否正确，字符串，事件是否添加上），关键数据一个个输出，看是否满足你的需要
   2.调理逻辑性错误，element添加的效果都会出现在行内样式，添加的类，id，内容都可以元素内部找到。看是否是你想要的样式，一般的错误会有少加单位，没有定位的时候使用Left值。
   加注释帮助整理思路
3.基础语法问题
  流程控制、变量的作用域问题、函数（8,9个小问题）思想、
  对象（属性和方法操作）
  数组，字符串，数学的所有的方法（必须记住）
4.思路
思路是需要积累的。
js是基于对象的，dom操作里面只有2条路，
1条是对象，先有对象，后有方法和属性
1条是 事件，现有事件触发，才有事件响应
分析：从效果看到本质（操作的是什么）
