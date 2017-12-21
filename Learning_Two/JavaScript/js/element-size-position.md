### 元素的尺寸和位置
##### 获取元素在页面中实际占的大小,只包含内容,padding ,border,如果元素是隐藏的状态（display:none），不在页面中，是获取不到的。
* 元素.offsetWidth
* 元素.offsetHeight

  ```javascript
  <body>
      <div class="box"  style="margin:20px;padding: 10px;border:1px solid green;width: 200px;height: 200px;">
      </div>
  </body>
  <script>
       let div=document.querySelector('div.box');
       console.log(div.offsetHeight); //margin不计算入内，border和padding计算入内，获取的是数值，可直接计算,隐藏状态获取不到  222
       console.log(div.offsetWidth);
  </script>
  ```
* box-sizing:border-box;
    呈现出带有指定宽度和高度的框，并把边框和内边距放入框中。
  ```javascript
  <style>
      div.box{
         width: 200px;
         height: 200px;
         background: pink;
         margin:10px;
         padding: 10px;
         box-sizing: border-box;
         /*相当于将border和padding都推回到内部，所有输出的结果为200*/
         border:1px solid yellow;
      }
  </style>
  <script>
       let div=document.querySelector('div.box');
       console.log(div.offsetHeight); //200
       console.log(div.offsetWidth);
  </script>
  ```
#### 元素的位置
* 元素.offsetLeft
* 元素.offsetTop
计算的距离是相对于页面左上角
还是父元素，取决于父元素是否定位。
* 如果上级元素没有定位，会一级一级 往上找，若找到body还没定位，计算的是相对于页面左上角的距离
* 如果上级元素有定位了，计算的是相对于这个上级元素的距离。

## window事件
### 窗口大小改变的时候会触发,加载到window上
window.onresize=function
### 窗口在滚动时会触发
window.onscroll
### 窗口在页面加载完后触发
window.onload
> overflow:scoll 当内容超出时盒子出现滚动条

### 元素滚动条的高度 元素.scollTop
### 元素滚动条的宽度 元素.scollLeft

* 获取页面的滚动条高度

谷歌是document.body.scrollTop;

火狐是document.documentElement.scollTop;

>li.floor{$$$$} * 10 可以快速创建几个有内容的li

```javascript

let div=document.querySelector('.box');
   window.onscroll=function () { //当滚动时触发事件
       console.log(document.body.scrollTop);//输出当前的滚动高度
       console.log(document.documentElement.scrollTop);
   }
   document.body.scrollTop='300';//设置页面滚动的高度
   div.onclick=function () {
       animate(document.body,{scrollTop:0},800);
       //在谷歌上实现滚动条高度为0，置顶
       animate(document.documentElement,{scrollTop:0},800);
       //在火狐上实现滚动条高度为0，置顶
   }
```

```jacascript
楼层效果的制作原理是：一楼距离页面顶端的距离== 滚动条的高度
```
