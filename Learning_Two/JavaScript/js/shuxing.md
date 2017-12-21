### string对象的属性
* "".length            字符串长度

* "".charAt(num)      返回指定位置的字符,根据下标决定位置

*  .charCodeAt(num)  返回指定位置的Unicode编码    ASCII
      ```javascript
       let str="uek";
       console.log(str.charCodeAt(1)); //返回e的ASCII
       ```
*  .concat("")       连接字符串
* "".constructor      构造函数
* "".endsWith("")     检测字符串是否是用指定字符结束，返回布尔型
*  .startsWith("")   检测字符串是否是用指定字符开始，返回布尔型   
*  .includes("")     检测字符串是否包含指定字符，返回布尔型
*  .indexOf("")      返回指定的字符首次出现的位置,若没有返回-1
*  .lastIndexOf("")   返回指定的字符最后一次出现的位置 ,若没有返回-1
*  .match            在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
*  .replace("before","after")  只能替换第一个匹配到的
*  .search         在正则里面讲
*  .slice(index,end)     从指定位置截取到指定位置，不包含
若不指定结束位置，还是截取后续所有,支持负数，负数从右往左走 ，对字符串不影响
*  .substr( index,length)   截取字符串，从指定的位置开始截取到指定长度,若没有指定长度，便截取后续所有
*  .substring(index,end)   从指定位置开始截取到指定位置，不包含，不支持负数，对原数组无影响 , 若不指定结束位置，还是截取后续所有
*  .toLowerCase    将字符转为小写
*  .toUpperCase    将字符转为大写
*  .trim           去除两边的空格
*  .trimLeft       去除左边的空格
*  .trimRight      去除右边的空格
*  .split(""，[length])      以指定字符将字符串拆分为数组,第2个参数用来指定数组的长度


      b 位  0 1  二进制位，一位表示0和1，2个状态

      B 字节    1B=8b    11111111   2^8  表示的范围0~255 有正负的情况，最高的表示正负-127~128

      k          1KB=1024B      1024=2^10
      M 兆       1MB=1024k
      G          1GB=1024M
      T          1TB=1024G

     ASCII码  0：48  A：48  a：97
String.fromCharCode(97);//从字符编码转为相对应的字符
### 数组对象的属性
*  [].length   数组的长度
*  [].concat   连接一个或多个数组，对于原数组无影响
*  [].constructor  构造函数
*  [].includes  检测是否包含某一个数组值，返回布尔值
*  [].join("")  用指定的字符连接链接数组成为字符串，默认的链接符是逗号
*  [].pop()     在数组的后面删除一个元素，返回值为删除的元素，对原数组有影响
*  [].shift()   在数组的前面删除一个元素，返回值为删除的元素，对原数组有影响
*  [].push("")      在数组的后面添加一个或者多个元素。返回值为新数组的长度，会影响原数组
*  [].unshift("")   在数组的前面添加一个或者多个元素。返回值为新数组的长度，会影响原数组
*  [].reverse()   数组反转,影响原数组
*  [].slice(index,end)     截取数组，从指定位置截取到结束位置，返回值为截取的数值，对于原数组没有影响，支持负数
*  [].sort()    排序，如果不传参数，按照ASCII顺序升序排序
*  传送参数，传回调函数，接收2个参数a,b，返回a-b，按升序排序，返回b-a,按降序排序
     ```javascript
      arr=["1"."2"."3"];
      arr.sort(function(a,b){
          return  a-b;  //升序
        })
      ```
*  [].splice(要操作的位置，要删除的个数,替换的元素)  万能添加删除
  第一个参数是值要操作的位置，第二个参数是要删除的个数，后续都是要添加的元素，返回值为要删除的元素组成的数组，会影响原数组
  #### 参数都为回调函数
  回调函数都有2个形参，分别为值和下标

*  [].every   判断，检测每个值都要满足条件 return true
*  [].some    判断，只要有一个满足条件   return true
*  [].filter  筛选 条件为真，值留下，假，值舍去，返回满足条件的数组
*  [].find    找到满足条件的值，只能处理第一个值，返回处理的第一个值
*  [].findIndex  找到返回满足条件的下标，只能处理第一个
*  [].forEach(function(value,index){});  循环遍历每个值
*  [].map()   映射（通过一定的表达式返回一定的值),return,对原数组无影响,返回为执行后的数组
    ```javascript
      let arr=[1,2,4,6,2,56];
          let b=function (value) {
              return value*3;
          }
          console.log(arr.map(b));
             console.log( arr.every(function(value){
                 return   value>=1;
             }));
          console.log( arr.find(function(value){
                  return   value>2;
              })); //4
          console.log( arr.findIndex(function(value){
              return   value>2;
              })); //2
          console.log( arr.filter(function(value){
              return   value>2;
          }));  //[4,6,56]
       ```
### Math数学对象的属性
* Math.abs    取绝对值
* Math.ceil   向上取整，只要有小数往上取整
* Math.cos    余铉
* Math.floor  向下取整,只要有小数往下取整
* Math.max    最大值  数组求最大值：Math.max(...arr)
* Math.min    最小值
* Math.pow    n次方    pow(a,n次)=a^n
* Math.random   随机数 Math.random();不传参数，返回产生0-1的随机数。
              Math.random()* 10  0-10的随机数
* Math.round   四舍五入
*  Math.sin     正铉    sin(Math.PI/6)=1/2              
             弧长/半径=弧度(角度)  即2πr/r=360  π=180°

* Math.sqrt    大于等于0的平方根，小于0输出NaN
* Math.tan     正切   tan45°=1
* Math.trunc   取整　
arr[]/num.toFixed 按四舍五入保留小数位数  //用数组或者number 类型对象去调用的
      ```javascript
        let nub=2.145
        console.log(nub.toFixed(2));
        ```


let {random：p}=Math;  解构赋值
  console.log(p());

>大写A和小写a相差32
