#### dxiag查配置
### 对象（在堆区）

* 类是对象的抽象，对象是类的实例化。
  先有的对象，再有的类。
  但在代码中，先创建类，再创建对象

 类可以判断对象。可以创建对象。

* 属性：对象的固有的特征
### 创建对象的3种方式
#### * 以json格式创建对象

{name:'lis',age:123,键:"值",键:"值"}被认为这是为一个对象

     键可以加引号也可以不加引号

    值要 加引号，不加会识别为变量，值可以是任何类型。

  * 方法：对象里的函数都叫方法

  * 调用属性值
     * 对象.属性/方法      person.name
     * 对象['属性']       person['name']
  * 添加/修改属性值
     * 对象.属性="";
     * 对象['属性']="";
  * 删除属性及值
     delete obj.name;
  * 删除对象直接赋值为null
     obj=null;
    当属性不存在时，不会报错，会返回Undefined
    ```javascript
            let person={
                      name:'ejjfj',
                      age:12,
                      height:'160cm',
                      weight:'50kg',
                      eat:funciton(){}
              }
              console.log(person);//将对象赋值为变量person
              person['name']="zhangsan";//修改属性值
             console.log(person.age,person['name']);
   ```
    * 若要访问变量里的值，只能用对象[变量]
    ```javascript
         let str='name';
         console.log(person[str]);
         //将键赋给变量str,但str不属于对象的属性，只能用person[str]输出
  ```
    * 对象的遍历
    ```javascript
       1. for(let 变量  in  对象  ){}
               for(let i in person){   //变量i代表键
                   console.log(person[i]);//取属性的值
                   cosole.log(i); //取属性
               }
```
```javascript
  let str=[{name:'abc'},{age:12},{height:'500cm'},{weight:'40kg'}];//常用的定义对象的方法
  //  console.log(str);   //输出对象
```              
  ```javascript
      //定义函数遍历这个对象的属性及属性值
      function  getPerson(num) {
          for(let i=0;i<str.length;i++){  //遍历数组
            for(let j in str[i]){       //遍历对象
              console.log(j);         //输出对象属性
                console.log(str[i][j]);  //输出对象属性值
              }
           }
    }
 getPerson(str);
 ```
      2 Object.entries   ，Object对象的属性,键和值，以数组的形式返回
              keys       键
              values   值
```javascript
    for(let i of Object.keys(person)){
        console.log(i);   //遍历 对象的键
    }
  for(let i of Object.values(person)){
        console.log(i);  //遍历对象的值
  }
  for(let i of Object.entries(person)){
        console.log(i[1]); //输出对象的值
        console.log(i); //以数组的形式输出对象的键和值
  }
```
### 以构造函数的方式创建对象
* 构造函数的作用是为了提供对象的初始化.

        function  Animal(name,age){  //构造函数与普通函数无区别，一般是首字母大写
            this.name=name;  //谁实例化对象，this代表谁
            this.name=age;  
        }
        let  obj=new  Animal("cat",5);  
        * new 函数 ==构造函数
        let  obj1=new  Animal("tom",4);
         创建个对象obj1为用构造函数为对象初始化赋值，实例化对象就是创建对象的过程

* this代表函数运行时，自动生成的一个内部对象，只能在函数内部使用,相当于封装
#### 通过new Object创建对象(几乎不用)
let obj=new Object();
obj.name="123";

* console.dir输出function的结构
#### 任何一个对象都有__proto__这个属性，
#### 只有函数对象有prototype这个属性，在Js,一切皆对象

#### 实例化对象new的时候会做3件事
  * 先创建一个空的对象  let obj={}
  * .获得指向
    obj.__proto__=Animal.prototype 将__proto__指向构造函数的prototype
  * 完成对象的初始化    Animal.call(obj);//call方法调用

####  继承通过__proto__实现的。

#####  原型对象prototype和构造函数

把方法写在原型中比写在构造函数中消耗的内存更小，因为在内存中一个类的原型只有一个，写在原型中的行为可以被所有实例共享，实例化的时候并不会在实例的内存中再复制一份
而写在类中的方法，实例化的时候会在每个实例中再复制一份，所以消耗的内存更高

构造函数中定义的属性和方法要比原型中定义的属性和方法的优先级高，如果定义了同名称的属性和方法，构造函数中的将会覆盖原型中的。
构造函数的方法prototype 的值 是一个原型对象,在静态区。

一般把属性写在构造函数中，把方法写在内存中
#### 继承链/原型链

  调用子方法时，会事先在内部寻找 方法，找不到就到属性__proto__中去找
  通过每个对象自带的属性对象__proto__来存储继承对象，从而实现继承

  所有的对象都是继承的Object,一级一级找

                // Animal.prototype.__proto__=Object.prototype
                // Object.prototype.__proto__=null

              //dog.__proto__=Animal.prototype
              //dog.prototype.__proto__=Animal.prototype

              //taidi.__proto__=dog.prototype
              function Animal(name,age) {
                    this.name=name;
                    this.age=age;
              }
              Animal.prototype.run=function () {
                    console.log(this.name+"can run");
              }
              function Dog(height) {
                    this.height=height;
              }
              Dog.prototype=new Animal("taidi",15);//继承了Animal的所有属性

              function taidi(color) {
              this.color=color;
              }
              taidi.prototype=new Dog();

              let obj=new taidi("red");
              console.log(obj);

              console.log(obj.run);
              console.log(obj.name);


#### call 方法和apply方法作用是：转换this指针
function  fun(name,age){
  this.name=name;
  this.age=age;
}
  let obj={};
    fun.call(obj,"wagn",123);  //传值方式不一样
    fun.apply(obj,["wang",123]); apply必须用[]赋值
  谁调用函数，this就指的是谁
  谁实例化对象，this就指的是谁


#### 面向过程的3个特征：封装、继承、多态
* 封装：通过函数
* 继承

### ES6 的语法
#### 类的使用方式，类的继承方式
```javascript
        class fun{                   //对象fun
             constructor(name,age){  //构造函数
                 this.name=name;
                 this.age=age;
             }
             eat(){   //存在在构造函数的prototype
                 return 1;
                 console.log(this.name+"can eat");
             }
         }
         class  aa  extends fun {    //继承类是没有this的
             constructor(name,age){     //类不用声明function,默认会声明为函数
                 super(name,age);     //super()方法必须有。先调用父类的方法
                 this.weight="123";         //   继承父类的this
             }
         }
         let obj=new aa("wang",123);
         console.log(obj.eat());
```
#### 对象的解构赋值
根据键一一对应，顺序可以调整
 属性起桥梁作用，可以转化数组(依靠下标)，对象，字符串
 ```javascript
  let arr=["u","e","k"]; //数组解构赋值为对象
  let {0:name,1:age}=arr;
  console.log(name,age);
  let str="uek";   //字符串解构为对象
  let {0:name,1:age}=str; //将字符串值赋给对象
  console.log(name,age);
```
#### 对象的简写方式
变量已经赋值，可以直接放到对象里
  ```javascript
      let num="123";
          num2="234";
      let a={num,num2};
          console.log(a); //{num: "123", num2: "234"}

    let  obj ={
         name:"seng",
        age:12
     }
      let {name:nub1,age:nub2}=obj;
      let {name,age}=obj;
      console.log(nub1,nub2);
      //( {name:nub1,age:nub2}=obj);
      ```
#### 对象赋初始值
1.若赋值为空对象，则初始值输出
          let {aa:name='abc',bb:age='uek'}={};
          console.log(name,age);   
2若赋值不为空对象，则输出正确值
          let aa={
                name:"abc",
                age:13,
                  }
              let {aa:name="wang",aa:age=12}=aa
              console.log(aa.name,aa.age);
