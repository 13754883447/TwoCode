
### ECMAscript 最顶层的对象是object
### 浏览器对象模型BOM

BOM最顶层的对象是window对象

window 对象

对象的属性的值是一个对象  

1.document 对象

2.history  对象（历史记录对象）

3.location 对象  地址栏
### 文档对象模型 DOM
即document对象，文档对象属于浏览器对象模型
*  doucument 对于元素的样式、属性、内容、位置的操作

### window对象
#### 时间函数

##### 在指定的时间内，不断的去做某一个事情
 但凡是要做的事情都是写函数
 * setInterval(要做的事情,间隔时间);
 * clearInterval();//清除事情，清除时间的id
       t=setInterval(add,60); //时间函数的返回值为时间的ID
       console.log(t);

##### 在指定的时间内，仅执行一次某个事情
 * setTimeout();
 * clearTimeout();
### location 对象  地址栏
location.href  获取完整路径
location.protocol  获得协议
location.hostname  获得主机名
location.port      获得端口号
location.host     获得主机名+端口号
location.hash    获得锚地址
location.pathname  获得路径
location.assign(页面地址)  加载一个页面，会留下历史记录
location.reload(true);    加参数 会缓存，不加不会缓存
location.replace();       替换页面，不会形成历史记录

#### 构成：协议，主机名端口号，路径，锚地址，查询字符串
##### 协议类型：
1.网络文件协议：http:超文本传输协议，（TCP/IP协议）
https:超文本传输协议增强版，传输更安全
2.file 本地文件协议
3.ftp:邮件协议
##### 主机名（主机/域名：端口号）
服务器（主机）
1.数据库服务器2.web服务器3.云服务器
##### 端口号（默认80）
##### 路径
##### 查询字符串（？键=值&键=值）
##### 锚地址
在查询字符串的后面，若不写则在问号后面。
<a name="#span">瞄链接</a>
<span class="span">这是我要跳转的地方</span>

http://  协议
localhost:63342   主机名端口号
/js%E5%AD%A6%E4%B9%A0%E9%98%B6%E6%AE%B5/5.22/5.22_1.html 路径
?_ ijt=fig88r8r4k3e04fieun6e75iv  查询字符串(?开头的)

### history  对象
从当前页面跳转
history.go();0为刷新，跳转到指定缓存下标的页面，正数往下，负数往上

history.forword();跳转到缓存的下个页面

history.back(); 跳转到缓存的上个页面

* dom对象，获取到的对象，文档里的对象

      console.log(document.URL); //获取地址，不能设置地址
       document.write();         //页面输出
      document.querySelector(); //  查询选择器获取元素，永远只能获取第一个元素
      document.querySelectorAll(); //获取多个元素，返回的是元素的集合,可以用所有的选择器

      带有elements返回的是元素的集合
      document.getElementsByClassName(); //通过类名获取元素
      document.getElementsByName();      //所有的表单元素必须有name属性
      document.getElementsByTagName();//通过标签名获取元素，带有elements返回的是元素的集合
      document.getElementById();//通过ID获取元素
      // dom对象，获取到的对象，文档里的对象

* "use strict";  //严格模式
* 用get获取的元素需要将元素转为数组才能遍历,用query获取的元素是可以直接用元素forEach();
* id只能用document调用，其他以前的获取方式可以用其他对象调用
*  window.onload=function () {  //页面加载完后才调用这个script
