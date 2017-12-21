
阻碍我们前进的不是路途的遥远，而是鞋子里的一粒沙

#### 函数
函数就是将实现一段特定功能的代码块封装起来重复调用。
#### 函数优点

*  可以使程序更简洁
*  使逻辑思路更清晰
*  使维护更加容易
*  调用更方便

####  写函数的步骤

1.确定函数的功能

2.由函数的功能确定函数的参数

3.实现 函数的功能

4.由功能确定是否需要返回值

#### 创建函数
1.通过关键字funciton  (最基本的方法)

 funciton 函数名([参数1],[参数2]....){
      函数体；
      [return;]  返回值
 }

   用中括号包裹的参数可有可无
* 不能重复命名函数。后面的会覆盖前面的
2.通过字面量(匿名函数，函数存储在变量中，不需要函数名称，通常通过变量名来调用)

var fun=funciton([参数1],[参数2]....){
     函数体；
     [return;]  返回值
}  

3.通过对象(new关键字)构造函数
var val=new Function([参数1],[参数2]....,函数体，[return])();


#### 调用函数的方式
函数调用一次相当于运行一次函数体
1.通过括号调用

 函数名();

2.函数自调用 ：先将函数整体 加个括号
匿名函数的自运行
(function(a){
    console.log(a);
})(1);
3.通过事件
对象.事件=funciton(){}

onlick; 点击事件
onmouseover;鼠标移入
onmouseout;鼠标移出

#### 注意问题
通过关键字function创建的函数，会在页面加载时提前优先解析到内存中，所以我们可以在创建之前就调用。(函数提升问题)
  aa();
  function aa(){
    alert(1);
  }
#### 扩展运算符 ...
* 可以将数组或者字符串转为用空格隔开的字符形式
let str="abcdef";
let brr=['a','b','c'];   
console.log(...str);...srt=a,b,c,d,e,f将字符串分割成用逗号隔开的字符串。
* 一般与字符串一起使用，转为字符串的集合
1.字符串转数组

console.log([...str]);将字符串转为数组。
2.传参的改变

function fun(a,...arr){
   console.log(arr);
}
fun('a','b','c','d'); 输出arr为[b,c,d]
3.字符或者数组的合并

function fun(arr,brr){
  consle.log([...arr,...brr]);
}
let a=[1,2,3,4];
let b=['a','b','c','d'];
fun(a,b);
#### rest参数(剩余参数)的用法
function fun(a,...arr){
   console.log(arr);
}
fun('a','b','c','d');
...[1,2,3,4 ]     // 1 2 3 4 将数组转为用空格隔开的字符串
扩展运算符的逆运算，将传进来多余的参数转为数组或者字符串
#### 参数
参数可以是任何类型的数据，参数默认是let声明的，所以直接下参数名即可

作用：参数可以动态的改变函数体内对应的变量的类型与值，使同一函数体实现不同效果。

分为实参和形参
1.形参：创建函数时，使用的参数是形参，用来接收实参。

2.实参：调用函数时，传的参数。

* 函数的参数可以指定默认值，一般放在后面
  function sum(a,b,c="uek"){
     console.log(a,b,c);
  }
 function(1,2);

       function sum([a,b]=[1,2]){  一种是传参的默认值
         console.log(a,b);
       }
       function arr([a=1,b=2]){    一种是解构的默认值
         console.log(a,b);
       }
       sum();    这种实参为undefined  
      [a,b]=undefined;    [a=1,b=2]=undefined  报错
       arr([]);  这种实参为数组[]
       [a,b]=[];          [a=1,b=2]=[]

* 参数个数可以无数，一般最多25个。
* 函数的参数也可以用rest参数，同时rest参数也是放在最后的。
* 函数的形式参数相当于在函数的内部定义一个变量。
* 实参个数和形参的个数是一一对应的。
* 在函数运行时，所有的实际参数都会被自动创建的集合arguments接收。
* 实参和形参没有关系，最多是一个赋值关系
  let a=1; b=1;
  fun(a,b);
  function fun(m,n){

  }

* 形参和实参个数可以不想等。
    * 实参个数  小于  形参的个数，多出来的形参是Undefined;
function aa(num1,num2){
  alert(num1);
  alert(num2);
}
aa(2);  输出2，Undefined;

    * 实参个数 大于  形参的个数

       * arguments对象/集合数组，用来接收函数运行时所有的实际参数的。
              function fun(){
                for(let i=0;i<arguments.length;i++){

                }
              }
              fun(1,2,3);
每创建一个函数，它都会隐式的创建一个arguments对象；

arguments对象身上保存的实际参数的所有信息。

arguments对象的属性：

* arguments.length 实参的个数
* arguments[下标]；从0开始，挨个访问每个实参。
* arguments.callee；返回的是函数本身,
* 函数的引用(栈区引用堆区如函数的地址)
let  fun=function(){}  fun基础数据在栈区，引用数据在堆区
function aa(num1,num2){
  alert(num1);
  alert(num2);
  alert(arguments[3]); 返回4
  alert(arguments.length); 返回5，5个参数
  alert(arguments.callee);
}
aa(2，3,4,5,6);

#### 函数的返回值 return
function fun(){
  console.log(1);
}
console.log(fun()); 输出函数运行完成的返回值。
* 每个函数都有返回值，默认的返回值 是undefined
* 函数可以定义返回值，但是同时只能返回1个值，可以返回任何值。
* 当函数执行返回语句时，整个函数立刻结束运行。
* 如果再外部需要访问函数本部的某个值，这个时候需要将这个值作为返回值返回。
* 作用：
1.可以给函数返回一个值

function sum(num1,num3){
    let sums=num1+num3;
    return sums;
}
function cheng(num1,num2){
    let cheng1=num1*num2;
    return cheng1;
}
alert(cheng(sum(2,3),5));

2.跳出并终止函数运行

function a(){
  return;
  alert(1);
}  不会运行alert(1);
a();
3.function sum(){
     return;  返回Undefined;
}


* 注意
1.一个return只返回一个值，当返回多个值的时候，返回的最后一个[解析逗号的时候，后面的会覆盖前面]
function sum(a,b,c,d);{
return a,b,c,d;
}
alert(sum(1,2,3,4));  返回4

2.一个函数中可以有多个return，但最终只执行一个。

    function sum(num){
    	if(typeof num=="string"){
    		return num+"是个string";
    	}else if(typeof  num=="boolean"){
            return  num+"是个boolean";
    	}else if(typeof num=="number"){
            return  num+"是个number";
    	}else{
    	  return num+"123";
    	}
    }
    document.write(sum(true));
    document.write(sum(prompt("请输入一个值")));


#### 模拟函数重载
在函数名字相同，同一个函数因为传入的参数的类型或个数的不同，可以对应多个函数的实现，而且每种实现对应一个函数体。

用来实现功能类似而所处理的数据类型不同的问题。

相当于一个函数里有多个函数体，常常实现功能类型。

        function  person(num){
         if(arguments[0]==1){
           alert("我今年"+arguments[0]+"岁了");
         }else if(arguments[1]==2){
           alert("我是"+arguments[1]+"生");
         }else{
           alert("我是"+arguments[2]+"生");
         }
        }
         person(18,"男","女");

       function arr(a){
      	  let type=typeof a;
      	  switch (type){
      		  case "string":return a/2;
      		  break;
      		  case "number":return  "这是个数字";
      		  break;
      		  case "boolean":return "这是个对错";
      		  break;
      		  case "undefined":return "这是undefined";
      		  break;
      		  case "object":return "这是个对象";
      		  break;
      		  case "function()":return"这是个函数";
      	  }
         }

         let b=arr(123);
         console.log(b);

#### 回调函数
当一个函数作为另一个函数的参数的时候，这个函数称为回调函数
function fun(fn){
   fn();
}
fun(function(){
  console.log(1);
  });

#### 递归函数
函数自己调用自己
阶乘  n!   n*(n-1) * (n-2) ,,,* 1
```javascript
        function jie(n){
             if(n==1){      
                return 1;   
             }else{
              return n*jie(n-1); //自己调用自己下面的函数
            }
        }
        console.log(jie(5));

        function jie(n){
                let result=1;
                for(let i=n;i>0;i--){
                    result=result*i;
                }
                return result;
            }
        console.log(jie(5));
```
斐波那契数
1,2,3,5,8,13,21,34....n
```javascript
          function feiBo(n) {
              if(n==1){
                  return 1;
            }else if(n==2){
                  return 2;
            }
            return  feiBo(n-1)+feiBo(n-2);
            }
            console.log(feiBo(5));
```
  1s=1000ms  1秒=1000毫秒
```javascript
        function feiBo(n) {
      	    if(n==1 ||n==2){
      	        return n;
      		}
      		return  feiBo(n-1)+feiBo(n-2);
          }
          let time1=new Date();
          console.log(feiBo(60));
          let time2=new Date();
          console.log(time2-time1);
```
遍历N维数组
```javascript
function  bianliang(arr,i) {
        if(i==-1){
            return;
        }
        if(arr[i] instanceof  Array){
            bianliang(arr[i],arr[i].length-1);
        }else{
            console.log(arr[i]);
        }
        return bianliang(arr,i-1);
    }
    bianliang([[1,2],[1,2,3]],bianliang.length-1);
```
```javascript
function arrN(arr) {
    for(let i=0;i<arr.length;i++){
        if(arr[i] instanceof  Array){
            arrN(arr[i]);
        }else{
            console.log(arr[i]);
        }
    }
}
//    arrN([[1,2],[ [1,3], [2,5] ],[null,"b"]]);
```
### 全局变量和局部变量
  * 宿主环境：浏览器
  *  执行环境：
       * 全局环境：全局在全局能访问到（BOM的全局环境是window也是最顶层对象）
       * 局部环境:每个函数都可构成一个局部环境。局部变量只能在局部访问到

  1.全局变量：小的能用大的，大的不能用小的，平时互不干涉，用到的时候才用
  变量定义在全局环境中，叫全局变量

  2.局部变量
  变量定义在局部环境中，叫局部变量

#### 作用域： 变量在某一个范围内有意义，我们称这个范围为作用域
*  全局变量拥有全局的作用域，局部变量有局部的作用域
*  块级作用域（Es6）
*  一个变量未声明直接赋值，系统默认识别为全局变量
#### 作用域链：当一个函数在运行的时候，它会自动创建一个集合，这个集合里面保存了可见范围内有意义的所有变量。这个集合我们称之为作用域链。
```javascript
  let  nub=1;
  funciton fun(){}
  funciton aa(){   aa相对于bb是全局
      let nub=2;
      funciton bb(){   
        let nub=3;
        console.log(nub1);
      }
      bb();
  }
aa();
作用域链的展示 aa()   作用域链的集合 [nub1,bb,fun]
             bb()    作用域链的集合[nub1,aa,nub,fun]
```
### 垃圾处理机制
* 对于局部变量，在函数运行完毕后会立刻清除
* 对于一个对象，当这个对象不在被引用的时候，javascript会在某一个时刻把对象给删除

#### 预解析
1.预解析是分块进行解析的（块指script标签对）。
2.在程序开始执行之前，js会将以var,以funciton声明的变量 和 函数提前加载到内存里面。声明的变量和函数提前解析到对应的环境里
执行时自己先在自己环境里找，由近及远的向上找。
```javascript
          var nub=200;
             function aa(){
          	   var  nub=300;
          	   function bb() {
                     console.log(nub); 1
                     var nub=400;
          		       console.log(nub); 2
                 }
              console.log(nub);     3
          	   bb();
             }
             aa();
             console.log(nub);
        //代码从上到下执行，先执行var nub=300
        因aa被调用了，会执行aa()函数
        进入aa函数，会预解析var nub和function bb,会先执行3，
        bb被调用了，bb会预解析var nub, 执行bb里的第一个console的时候，定义的nub并没有赋值，故1为undefined

        var nub1=200;
        if(nub1<100){
            var nub=300;
        }
        console.log(nub);
        //未执行前，先预解析nub1和nub到内存中
        执行中，nub1不满足条件，nub不执行，所以nub未赋值，输出undefined
```
#### 闭包
闭包就是能够读取其他函数内部变量的函数。定义在一个函数内部的函数"。
当一个函数包含另一个函数里面的时候用到了局部变量，当内存 函数用到了内存函数的参数，外部函数调用这个函数的时候这个局部变量会被保存。
bb内部的局部变量，对aa就是不可见的。这就是Javascript语言特有的"链式作用域"结构（chain scope），子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。
既然bb可以读取aa中的局部变量，那么只要把bb作为返回值，我们不就可以在aa外部读取它的内部变量了吗！,那么bb就是一个闭包
          function aa(){
            var sub=200;
            function bb(){
              console.log(sub);
            }
            return bb; //返回bb函数
          }
          var fun=aa();
          fun();

          function aa(){
            var sub=200;
            function bb(){
              console.log(sub);
            }
            return bb(); //当你return的是内部function时，就是一个闭包。内部function会close-over外部function的变量直到内部function结束。
          }
          var fun=aa();//fun是一个闭包
          console.log(fun);
原因就在于aa是bb的父函数，而bb被赋给了一个全局变量，这导致bb始终在内存中，而bb的存在依赖于aa，因此aa也始终在内存中，不会在调用结束后，被垃圾回收机制（garbage collection）回收。
### 内置顶层函数
*  number将其他类型转为数值类型，
  * 数值样子的字符串转为数值
  * 将null转为0
  * 剩余转化不了的转为NaN
* string
   将其他任何类型转为字符串
 * boolean
   * 数值0、NaN、""(空字符串)、false、Undefined、Null转为假，其余为真
* parseFloat() 将字符类型转为浮点型，若为整数转为整数，若为小数转为 小数

               let nub= parseFloat("123px");
                 console.log(nub);  //123
* parseInt()将字符类型转为数值类型，只转化能转化的部分

             let nub= parseInt("123px");
               console.log(nub);  //123
