### 开关思想
如果开关是开着的，把开关关掉，改变状态，然后关掉
```let a=document.querySelector('.box');
     let flag=true;   //默认开关为开着的
     a.onclick=function () {  
         if(flag){     //是开着就改变样式
             this.style.background='blue';
             flag=false;
         }else{        //是关着就改变样式
             this.style.background='red';
             flag=true;
         }
     }
  ```

  添加事件的监听   aa.addEventListener('添加的事件'，执行的函数);
#### webstorm全局替换
ctrl+r


### 函数封装

### 动画函数的使用
```script
动画函数 animate (obj,attrObj,dur,fun,callback)
  obj   要动画的对象
  attrobj   要动画的属性对象{width:xxxx,height:xxx,left:xxxx,top:xxxx,opacity:xxx}
  dur   持续时间
  fun   动画方式
  callback 变化完成之后要处理的内容
```
1.引进animate.js
2.调用animate函数
    ```animate(box,{marginLeft:100,marginTop:200},5000,Tween.Bounce.easeIn,function () {
        document.write('游戏结束');
    });
    ```
