
#### 数组

用来存储一系列有直接或间接联系的数据。多个变量的集合
let arr=[];
###  创建方式
1.直接赋值，调用
let arr=[1,Undefined,true,4,"abcd",funciton(){
  alert(1);
  }];
用逗号隔开代表一个单位,可以存任何类型的。
 调用方式
  arr[];    下标最大值=length-1
2. let=arr[];
   arr[0]=1; 先定义一个空的数值，再赋值。

       let  arr=["a","b", function(){alert(1);}];
          let arr1=[];
          arr1[0]=1;
          arr1[2]=2;
          arr1[1]=null;
          console.log(arr[2](),arr1[2],arr1.length,arr1[1],arr,arr[arr.length-1]);

3.以构造函数的方式去创建数组
   let arr=new  Array('a','b'); //new是一个一元运算符，用来创建对象

   console.log(arr)  ;
  当以 构造函数创建的时候，如果Array里面的参数只有一个并且只有一个数值的时候，那么这个数代表的是数值的长度。
  let arr=new Array(4);  输出Undefined*4
### 属性property
调用属性 ，加.
arr.length
arr.reverse(反转元素)
arr.constructor 表示创建对象的函数(Array)。
arr.sort(); //对数组元素排序，返回数组地址

### 方法
arr.push();数据可以向最后的追加元素
arr.unshift() 将一个或多个新元素添加到数组开始，数组中的元素自动后移，返回数组新长度
arr.join(""); //返回字符串，这个字符串将数组的每一个元素值连接在一起，中间用 separator 隔开。

#### typeof检测的结果值一定是string
typeof(typeof  num); 一定是string
typeof有6种检测结果string,number,boolean,object,function,Undefined
typeof检测null 的结果是Object
typeof检测对象,数组的结果是Object
typeof检测Undefined 的结果是Undefined
typeof检测function  的结果是function

#### 检测数组的方式
检测结果是boolean值
let arr[];
let result=arr instanceof  Array; 实例化数组
instanceof 用于判断一个变量是否某个对象的实例
console.log(result);

arr.constructor  属性用来判断构造函数是谁输出数组函数。
console.log(arr.constructor);

#### 数组的遍历
let arr=["a","b","c"];
for(let i=0;i<=arr.length-1,i++){
  console.log(arr[i]);
}
步进，最大值和最下值都走一遍，可以看是否错误了。
do{

  }while(i<arr.length);

####  二维数组
一维数组的每个变量都为数组的时候才是二维数组
arr=[[1,2],['a','b'],[]];
arr[0][0];  二维数组的访问方式

let arr=[];
arr[0]=[1,2];   不能直接给二维数组赋值eg: arr[0][0]=1;

#### 二维数组的遍历
let arr=[
        [1.2],
        ['a','c'],
        [true,false,1,2],
       ];
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
       console.log(arr[i][j]);
    }
}
#### ECMAscript6数组
* 模式匹配
* 解构赋值与解构赋值的默认值
数组的解构赋值可以是：数组，字符串
          let [a,b,c]="uek";
          console.log(a,b,c); //u e k

数组的解构赋值,两边模式匹配
let num1；
let num2;
[num1,num2]=[1,2];
console.log(num1,num2);//console.log 可同时输出很多值

let arr=[1];
let [num1,num2]=arr;
console.log(num1,num2);按顺序将1赋值给num1
* 默认值定义
let [num1='abc',num2='bcd']=arr; 设置了默认值，赋值后会按顺序覆盖默认值
let arr=[undefined];
let [num1='abc',num2='bcd']=arr;
console.log(num1,num2);
* 如果解构的赋值号右边全等于于Undefined,就不能赋值成功，默认值起作用或者右边没有值，默认值起作用。
