#### 变量
存储数据的容器。可以存储任何类型的数据

变量存储在内存中，是一块地址单元

变量的创建
* 通过let,var都可以创建一个变量
  const  b=20;  const声明的是一个常量

1.先声明后赋值

      var a;
      a = "我喜欢";
      console.log(typeof a);借用typeof可以查看变量类型
      typeof:运算符 判断数据类型

      声明未赋值，变量返回Undefined
2.声明的同时赋值
     var a=10;

3.先同时声明多个变量，后赋值，通过逗号隔开。

4.声明多个变量的同时进行赋值。
    var e="jfjfj",f="string";
#### var let 和const区别
1.var存在变量升级现象（没声明前就可以调用）
      let不存在变量升级现象

2.var命名可重复命名
  let不可以重复命名

3.const 声明的是一个常量，一旦声明赋值后不能再修改（并不是值不可以修改，而是在内存中的地址不可以修改）
      必须声明的同时进行赋值

#### 命名规范
* 严格区分大小写
* 变量名必须以字母、下划线_或者 ``$``  开头，后面部分可以跟任意的字母、数字、 _ 、 或 $
* 不能使用关键字或者是保留字命名
   JAVAscript的保留关键字不能用作变量、标签或者函数名。有些保留字是作为JAVAscript以后扩展使用。
*  javascript有自己的命名习惯
    * 驼峰命名法：getElementByld
    * 首字母大写法：Object
* 命名一定要有意义
####  表达式、操作符、语句
* 凡是已经赋值或者即将赋值的都是一个表达式
除了表达式以外的是操作符。
var a;
a = 10;其中a和10都是表达式。=是操作符
* 语句：if(){} else){}

#### 变量覆盖问题
1.重新声明赋值会覆盖。
2.重新赋值。
3.未定义的不会被覆盖
  var a=10;
  var a;

  alert(a);直接输出a
##### 可不可以不写关键字的问题
var a=10;
b;
alert(b);会报错，无法读出。
bb=20;
alert(bb);可以输出。
变量分为全局变量和局部变量


#### 数据类型
两大类
1.初始类型（简单类型）栈区
2.引用类型（复杂类型）堆区
内存分为栈区，堆区，代码块，静态区。
栈区：长度受限制的，长度固定的。且访问速度快
堆区：长度不受限制，访问速度慢。
初始类型：
1.number 数值类型
  * 值：
      * 支持整型和浮点型
      * 支持二进制(0b),八进制(0o),十六进制(0x)
     var a = 0b11;
     console.log(a); 输出3
      * 科学计数法
        * var a=number.MAX_VALUE;最大值
        *  var a=number.MIN_VALUE;最小值
            console.log(a);

    返回number

2.string  字符串类型
* 值
  * 单引号和双引号，区别在于嵌套时候可以区别
  * 特殊符号  \n换行   \t 制表符等

  返回string

3.boolean  布尔类型
* 值

  * true(1)
  * false(0)

返回boolean

4.Undefined 未定义
  变量已经创建。但是没有赋值，不含有值。
  值：Undefined
  返回:Undefined

5.null  占位符或清空一个对象
    var a=null;
    console.log(typeof a);
返回:Object

6.symbol

2.引用类型：

Object 对象
函数，数组，普通对象


#### 运算符
1.算数运算符

　+ 　-  　*　　／　　％（取余）　　＋＋自增）　　＿＿（自减）
* 加
   * 数值运算
   * 任何数据类型的数据和字符串进行字符串连接，当一个是数据，另一 个是任何类型可以字符串连接

* 减
  * 数值运算
  * 如果一个是number,一个是字符串，返回的是NaN(not a number)，判断number的状态
    如果字符串里是标准的值，还是正常 计算。
* 乘
  * 进行数值运算
  * 进行指数运算  var c=2**3;等于c=2^3;
* 除
  * 进行数值运算
* 取余
* a++ 先运行再自增

  ++a 先自增再运行

          for(var q=0; q++<5 ; q++){
               	alert(q);
               }运行3次，分别 为1,3,5

2.关系运算符（比较运算符）

    > <  >=  <= ==（数值）  ===(全等于)  ！=（不等于） ！==（不全等于）

* 结果一定是boolean类型值
* 等于与全等于区别：等于比较的是数值，全等于比较的是数值和类型
    * 全都是number类型的，返回的是一个布尔值
    * 全都是string类型的，先转换为对应的ASCII值，再进行比较，返回布尔值
    * 一个数值、一个字符串的时候，会先试着将字符串进行转换；如果转换不成功，返回false。
    * 一个数值，一个是boolean,先将Boolean转换为对应的值，再比较

3.赋值运算符

    = += -=  * =  /=   %=

      var num1=10;
      num1+=20;== num1=num1+20;
      num1-=5;== num1=num1-5;

4.逻辑运算符
&&  逻辑与  || 逻辑或   ！逻辑非

* 逻辑运算符的与和或的结果不一定是boolean类型值，判断结果为判断的值

    console.log("112"&&123);结果为123

    cosole.log(""&&123)；结果为空
* 非的结果一定是boolean 值

* ！（将真的结果变成假：将假的结果变成真）

   1.number(除了0和NaN都是真值。)

   2.string(除了空字符串外都是真值)

   3.boolean(还是本身)

   4.Undefined 假值

   5.null  假值

    数值0、NaN、""、false、Undefined、Null都是假值

   逻辑与：同真为真，有一个假为假

   逻辑或：同假为假，有一个真为真

* 短路原则：逻辑与里

* 若第一个变量能决定结果。不会计算第二个。

* 若第二个变量能决定结果。会输出第二个。

5.特殊运算符 ()

提高运算优先级  

6.一元运算符

只对一个变量进行操作

eg:typeof 、+(正号)、 -(负号)、 ++  — —   new 、delete

7.三元运算符

表达式 ？ 值1： 值2

如果表达式为真，执行值1

如果表达式为假，执行值2

var c= a > b ? a : b
#### 数据类型的转换
1.强制转换
 number()  perseint()  
2.隐形转换
 * 算数运算符都是隐式调用number函数进行转换
 * 比较运算符结果一定是boolean类型值，比较运算符调用number,如果转化不了，返回false
    * 特殊 null==undefined为真
* 逻辑运算符的与和或的结果不一定是boolean类型值，判断结果为判断的值
   eg:console.log(0&&123);先判断为假，故输出为0
      console.log("123"&&"234");先判断前面为真的时候，再判断后面的结果，判断值为234
#### 模板字符串
外边用 波浪线 包裹。变量用${}
* 作用
 *  帮助我们引入变量

 *  调用函数

     let a = 10;
     let b = 20;
     let bs = document.getElementsByTagName("div")[0];
     bs.innerHTML =`<ul><li>${a}</li><li>${b}</li></ul>`;

     document对象获取div集合
 *  变量的运算
 1个${}代表一个变量，如果要运算就放到同一个${}

 let a = 10;
 let b = 20;
 console.log(`${a}+${b}=${a+b}`);

#### 流程控制
* 程序：
为实现某一特定功能或某个目的通过计算机语言编写的命令的序列集合
* 程序语言：
指令，数据
* 流程
程序执行的顺序，一条一条代码的执行
* 流程控制：
通过规范的语句让代码在特定的条件下执行。

####  三大流程控制
  * 顺序结构
  * 选择结构 （成绩判断）
  如果判断的是范围，区间，就用if;如果判断的是单个的值，用switch
    * 分支结构
       * 单路分支

       if(){}
    ```javascript
        if(grade >=60){
         alert("及格");
       }
       ```
       * 多路分支
 ```javascript
       if(){}else{}
            ``if(grade >=90){
             		alert("优秀");
             	}else if(grade >=80){
             		alert("良好");
             	}else if(grade >=60){
             		alert("及格");
             	}else{
             		alert("不及格");
             	}
```
* 双路分支

* 嵌套
```javascript
              if(grade >=60 && grade <=100){
	             if(grade >=90){
		               alert("优秀");
	                  }else if(grade >=80){
		                    alert("良好");
	            }else{
	            	alert("及格");
	            }
	           }
	            else if(grade <60 && grade >=0){
              alert("不及格");	    
	           }
	           else  {
		           alert("请输入正确的值");
	            }
```

* 条件结构 （四则运算、星期天输出）
switch(要判断的变量){
  case"字符串":alert("");
  case值:alert("");
  case值:alert("");
  deafult;除了制定的情况的其他情况
}
break:终止代码执行
        let times = prompt("请输入时间");
          switch(times){
            case "1": alert("星期一");
            break;
            case "2": alert("星期二");
            break;
            case "3": alert("星期三");
            break;
            case "4": alert("星期四");
            break;
            default:alert("输入错误");
            }

数据转换：
parseInt将任何类型，只要是标准的数值都可以将她转换为整型数据。

  * 循环结构
  可以让一条代码不断地重复执行
    * 知道循环次数的（for循环表格变色）
for(表达式的初始值；表达式的结束值;变量的增减){
  console.log(1);
}
```javascript
        for(let i=1;i<=9;i++){
            for(let j=1;j<=i;j++){
               if(j==2 && (i==3||i==4)){　
                 　document.write(`${i}*${j}=${i*j}&nbsp;              &nbsp;&nbsp;  `);
               }
             else{
                document.write(`${i}*${j}=${i*j}&nbsp;&nbsp;&nbsp;`);
          　　}
           }
           document.write("<br>");
          }

                 限制密码输入次数
              let password=100;
              let a = prompt("请输入3位密码");
          for(let i=1;i<=3;i++){
            if(a==password){
              alert("密码正确");
              break;
            }else if(i==3){
            		alert("您无法再输入");
            		break;
            	 }else{
            	   alert(`你还有${3-i}次机会`);
            }
            a = prompt("请输入3位密码");
         }
    * 不知道循环次数 （九九乘法表）
while(条件){条件满足时停止执行，先判断再执行
  console.log(a);
  a++;
}
        let i=1;
        let j=1;
        while(i<10){
          while(j<=i){
          if((j==2) && (i==3||i==4)){
          	document.write(`${i}*${j}=${i*j}&nbsp;&nbsp;&nbsp;&nbsp;  `);
            j++;
            }else{
          	 document.write(`${i}*${j}=${i*j}&nbsp;&nbsp;&nbsp;`);
          	j++;
            }
             }document.write("<br>");
             j=1;
             i++;
             }
```
do{循环体；}
while(a>100);先执行再判断
    break  终止当前循环
    continue跳出当前这次循环
##### while和do while 区别
while:先判断，再执行。
do while:先执行，再判断。最少会执行一次。
##### for和while 区别
for:适合循环次数确定的情况
while ：适合循环次数不确定的情况




下载蓝灯可以翻墙
知乎，科技新闻
