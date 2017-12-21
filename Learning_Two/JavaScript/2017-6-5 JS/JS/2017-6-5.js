/**
 * Created by 凯瑟琳 on 2017/6/5.
 */
// alert(333);
// alert("SB");
//
// console.log(1);
// console.log("你个呵呵呵呵呵");


// document.write("娃娃娃娃哇哇哇哇哇哇哇哇");
// document.write("<div>");
// document.write("<b><a href='http://www.baidu.com'>百度</a></b>");
// document.write("</div>");

// var nub="无fuck可说";
// alert(nub);

// var aa;
// aa=6;
//
//     console.log(++aa);
//     console.log(true+false);

// var girl=20;
// var boy=girl--;
// // alert("女生"+girl+"人,男生"+boy+"人，一共"+(boy+girl)+"人");
//
// // console.log("女生"+girl+"人,男生"+boy+"人，一共"+(boy+girl)+"人");
// console.log(11%5);
// var equal="a"<"b";
// console.log(equal);
// // console.log(undefined!==null);
// var dd=3==5? 1:10;
// console.log(dd);
//
// var ssb=7;
// var result=prompt("请输入","是");
// console.log(result);
// if (result=="是"){
//     ssb=12;
// }
// else {
//     ssb=8;
// }
// console.log(ssb);

// var pingfen="";
// var chengji=prompt("请输入你的成绩");
// if (chengji==100){
//     console.log(chengji="满分")
// }
// else{
//     if(chengji>=90){
//         console.log(chengji="优秀")
//     }
//     if(chengji>=80){
//         console.log(chengji="良好")
//     }
//     if(chengji>=60){
//         console.log(chengji="一般")
//     }
//     else{
//         console.log(chengji="不及格")
//     }
// }


// var zhengshu="";
// var shuru=prompt("请输入值");
// if (shuru%3==0){
//     console.log(zhengshu="是3的倍数");
// }
// else {
//     if (shuru%2==0){
//         console.log(zhengshu="是2的倍数");
//     }
//     else if (shuru%5==0){
//         console.log(zhengshu="是5的倍数");
//     }
// }

// var shuruzhi="";
// var shuru1=prompt("请输入第一个数")
// var shuru2=prompt("请输入第二个数");
// var chengji=shuru1*shuru2;
// if (chengji>0){
//     if(chengji>100){
//         console.log(shuruzhi="乘积大于100");
//     }
//     else if(chengji<100){
//         console.log(shuruzhi="乘积小于100");
//     }
// }
// else if(chengji<0){
//     if (chengji>-100){
//         console.log(shuruzhi="乘积大于-100");
//     }
//     else  if(chengji<-100){
//         console.log(shuruzhi="乘积小于-100");
//     }
// }
// 输入数字，输入运算符 算出结果

// var num1=prompt("请输入数值1");
// var fuhao=prompt("请输入运算符");
// var num2=prompt("请输入数值2");

// switch(fuhao){
//     case "+":alert(parseInt(num1)+parseInt(num2));        //特殊//
//         break;
//     case "-":alert(num1-num2);
//         break;
//     case "*":alert(num1*num2);
//         break;
//     case "/":alert(num1/num2);
//         break;
//     case "%":alert(num1%num2);
//         break;
// }

// for (var b=1; b<10;b++){
//     console.log(b);
// }



//
// 1+3+5+7+9+++++101;
// 2*4*6*8******100;
// 输入一个数,从零加到这个数字;
//1+2+3+4++++++100 不要加4的倍数的数字
// 操场有100多个人，每排三个人一队，剩余一个人，每排五个人，剩余两人，求人数。
//输入一个数，判断是否是质数(只能被1和自己整除)





// var sum=0;
// for(var numb1=1;numb1<=101;numb1+=2){
//     sum=sum+numb1;
// }
// console.log(sum);


// var sum2=1;
// for(var numb2=2;numb2<=100;numb2+=2){
//     sum2=sum2*numb2;
// }
// console.log(sum2);
//
// var jieguo=0;
// var shuruzhi=prompt("请输入一个值");
// for(var i=0;i<=shuruzhi;i++){
//     jieguo+=i;
// }
// console.log(jieguo);

// var sb=0;
// for(var b=1;b<=100;b++){
//     if(b%4==0){
//         continue;
//     }
//     sb=sb+b;
// }
// console.log(sb);



// for(var renshu=100;renshu<200;renshu++){
//     if(renshu%3==1&&renshu%5==2){
//         console.log(renshu);
//     }
// }


// var shuruzhi0=prompt("请输入一个值");
// for(i=2;i<shuruzhi0;i++){
//     if(shuruzhi0%i==0){
//         console.log("不是质数");
//         break;
//     }
//     else {
//         console.log("是质数");
//         break;
//     }
// }


// 十行十列

// document.write("<table width='100px' height='100' border='1'>");
// for (i=0;i<10;i++){
//     document.write("<tr>");
//     for (s=0;s<10;s++){
//         document.write("<td>1</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>");
//
// document.write("<table width='300px' height='300' border='1px solid #0000cc'>")
//     for(r=0;r<10;r++){
//         document.write("<tr>");
//         for(d=0;d<10;d++){
//             document.write("<td>1446464+7979</td>")
//         }
//         document.write("</tr>");
//     }
//
// document.write("</table>")



// document.write("<table>");
// for(i=0;i<10;i++){
//     document.write("这是第"+i+"次外层循环<br>");
//     for (j=0;j<10;j++){
//         document.write("&nbsp;&nbsp;这是第"+j+"次内层循环<br>");
//     }
//     for (k=0;k<5;k++){
//         document.write("&nbsp;&nbsp;&nbsp;&nbsp;这是第"+k+"次里层循环<br>");
//     }
// }
// document.write("</table>");


//
// for(var r=100;r<200;r++){
//     if(r%3==1&&r%4==2&&r%5==3){
//         console.log(r);
//     }
// }

// for(var j=0;j<10;j++){
//     for(var k=0;k<20;k++){
//         for(var h=0;h<100;h++){
//             if((10*j+5*k+0.5*h==100)&&(j+k+h==100)){
//                 console.log(j,k,h);
//             }
//         }
//     }
// }
// var n=0;
// for(var i=0;i<=20;i++){
//     for(var j=0;j<=10;j++){
//         for (var k=0;k<=4;k++){
//             if(i*1+j*2+k*5==20){
//                 n++;
//             }
//         }
//     }
// }
// console.log(n);

// for(i=1;i<=9;i++){
//     for(j=1;j<=9;j++){
//         document.write(j+"*"+i+"="+i*j+"&nbsp;&nbsp");
//     }
//     document.write("<br>");
// }

// var init=0.0001;
// var ci=0;
// do{
//     ci++;
//     init=init*2;
// } while(init<8848);
// console.log(ci);

// var i=1;
// while(i<=9){
//     var j=1;
//     while (j<=i){
//         document.write(j+"*"+i+"="+i*j+"&nbsp&nbsp");
//         j++;
//     }
//     document.write("<br>")
//     i++;
// }

// var i=0;
//
// do{
//     var j=1;
//     while(j<=i) {
//         document.write(j+"*"+i+"="+j*i+"&nbsp;&nbsp");
//         j++
//     }
//
//     document.write("<br>");
//     i++;
// }while (i<=9);

// sb:for(i=0;i<10;i++){
//     document.write("这是外层"+i+"循环<br>");
//     for(j=0;j<10;j++){
//      document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是内层"+j+"循环<br>");
//         if (j==5){
//             break sb;
//         }
//     }
// }

// let b=12;
// let s=20;
// console.log(`我是哈哈哈哈${b},我是啦啦啦${s},大家是${b*s}`);

// document.write("<table width='1000px height='1000px' border='1'>");
// for(let i=0;i<10;i++){
// 	document.write("<tr>");
// 	for(let j=0;j<10;j++){
// 		document.write(`<td>${j}*${i}=${i*j}</td>`);
// 	}
// 	document.write("</tr>");
// }
// document.write("</table>");
//


// let dd=[];
// dd=[1,2,3,4,5,6,7,8,9,10];
// console.log(dd[3]);



// let ss=["a","b","c"];
// let bb=ss;
//  ss[0]="beats";
// console.log(bb);

// let arr=["a","b","c","d"];
// for (i=0;i<arr.length;i++){
// 	console.log(arr[i]);
// }

// let arr=[1,2,4,89,54,101,579,3,5,2212544];
// let max=arr[0];
// for(let i=0;i<arr.length;i++){
// 	if(max<arr[i]){
// 		max=arr[i];
// 	}
// }
// console.log(max);


// let arr=["a",1,2,'b',3,43,'b'];
// let index;
// for(let i=0;i<=arr.length;i++){
// 	if(arr[i]=='b'){
// 		index=i;
// 	}
// }
// console.log(index);

// let arr=[1,true,null,undefined,1,2,3,4,43,12];
// let sum=0;
// for(i=0;i<arr.length;i++){
// 	if(typeof arr[i]=="number"){
// 		sum+=arr[i];
// 	}
// }
// console.log(sum);


// let arr1=[3,4,5,6,7,8,9,"a"];
// let arr2=[6,8,9,7,5,"b"];
// let len=arr1.length;
// let brr=arr1;
// for(let i=0;i<arr2.length;i++){
// 	brr[len+i]=arr2[i];
// }
// console.log(brr);

//
// let arr1="0,654,8,9,8,7,9,6";
// let arr2="0,8,89,6,8,666";
// let array3=[];
// for(let i=0;i<arr1.length;i++){
// 	for(let j=0;j<arr2.length;j++){
// 		arr1[i]=arr2[j];
// 		array3.push(arr1[0]+arr2[0]);
// 	}
// }
// console.log(array3);


// 遍历二维数组
// let arr=[[1,2],[1,2,3,4],[true,false]];
// for(let i=0;i<arr.length;i++){
// 	for(let j=0;j<arr[i].length;j++){
// 		console.log(arr[i][j]);
// 	}
// }
// 遍历混合数组
// let arr=[[1,2],[1,2,3,4],[true,false]];
// for(let i=0;i<arr.length;i++){
// 	if(typeof arr=="object"){
// 		for(let j=0;j<arr[i].length;j++){
// 			console.log(arr[i][j]);
// 		}
// 		console.log(arr);
// 	}

// }
// 求二维数组里面长度最长的数组
// let s1=[[1,2,3,4,5,6,78,9,8],[123,4],[3,5,4,6]];
// let max=s1[0];
// for (let i=0;i<s1.length;i++){
// 		if(max.length<s1[i].length){
// 			max=s1[i];
// 		}
// }
// console.log(max);
// 求二维数组的长度和
// let chang=[[1,2,3,5],[2,4,5,6,7,8,]];
// let changdu=0;
// for (let i=0;i<chang.length;i++){
// 	for(let j=0;j<chang[i].length;j++){
// 		changdu++;
// 	}
// }
// console.log(changdu);
// 求二维数组的数值元素和
// let num1=[[1,5,8,9,6],[2,5,9,8,6,8]];
// let he=0;
// for(let i=0;i<num1.length;i++){
// 	if(typeof num1[i]=="object"){
// 		for(let j=0;j<num1[i].length;j++){
// 			he+=num1[i][j];
// 		}
// 	}
// }
// console.log(he);
// 求混合数组的数值元素和
// let num1=[[1,5,8,9,6],1,3,4,6,[2,5,9,8,6,8]];
// let he=0;
// for(let i=0;i<num1.length;i++){
// 	if(typeof num1[i]=="object"){
// 		for(let j=0;j<num1[i].length;j++){
// 			he+=num1[i][j];
// 		}
// 	}else {
// 		he+=num1[i];
// 	}
// }
// console.log(he);

// 将一维数组进行排序
// let numb=[1,2,5,9,7,8,6,2];
// for (let i=0;i<numb.length;i++){
// 	for(let j=i+1;j<numb.length;j++){
// 		if(numb[i]>numb[j]){
// 			let temp=numb[i];
// 			numb[i]=numb[j];
// 			numb[j]=temp;
// 		}
// 	}
// }
// console.log(numb);

// let numb=[1,2,6,4,8,9,5,7,10];
// let temp;
// for (let i=0;i<numb.length;i++){
// 	for(let j=i+1;j<numb.length;j++){
// 		if(numb[i]>numb[j]){
// 				temp=numb[i];
// 				numb[i]=numb[j];
// 				numb[j]=temp;
// 		}
// 	}
// }
// console.log(numb);


//在数组的后面去添加一个元素，求新数组
// let numb=[1,2,3,4,5,8,9,4,2];
// let numb2=numb.push(4);
// console.log(numb);
//在数组的前面去添加一个元素，求新数组
// let numb=["a","b",7,8,9,8,2];
//
// let numb1=numb.unshift(4);
//
// console.log(numb);
//数组反转
//
// let numb=[1,2,3,4,5,8,9,4,2];
//
// let	numb2=numb.reverse();
//
// console.log(numb);

// 6在哪里
// let num=[1,2,3,5,8,9,7,5,6,7,85,6,"b"];
// console.log(num.indexOf(3));

// let num=[1,2,3,5,8,9,7,5,6,7,85,6,"b"];
// let num1=0;
// for (let i=0;i<num.length;i++){
// 	if(85==num[i]){
// 		// num1+=i;
// 		console.log(i);
// 	}
// }
// console.log(num1);


// function nub(n1,n2) {
// 	console.log(n1+n2);
// }
//
// for(let i=0;i<100;i++){
// 	nub(1,2);
// }

// function ba(m,h,f,w,w) {
// 	console.log(m,h,f,w,w);
// }
// ba=(1,5,9,9,6546,464);

//
// function fun() {
// 	for(let i=0;i<arguments.length;i++){
// 		console.log(arguments[i]);
// 	}
// }
// fun(15,9,74,5,6,98,47,98,98,7);
// function num(n=1,m=1) {
// 	console.log(n+m);
// }
// num(6,8);


// function numb(m,n,...arr) {
// 	console.log(m+n);
// 	console.log(arr);
// }
// numb(1,4,98,9,7,89,6,5,7,52);


// n阶乘法表,默认是9*9
// function n(a) {
// 	for(let i=1;i<a;i++){
// 		for(let j=1;j<i;j++){
// 			document.write(`&nbsp;&nbsp;${j}*${i}=${i*j}`);
//
// 		}
// 		document.write("<br>");
// 	}
// }
// n(12);
// n 表格 默认 红蓝香江
// 错的
// function biaoge(a=10,b=10) {
// 	let str='';
// 	str='<table>';
// 	for(let i=0;i<a;i++){
// 		document.write("<tr>");
// 		for (let j=0;j<b;j++){
// 			document.write("<td></td>");
// 		}
// 		document.write("</tr>");
// 	}
// 	str='</table>';
// }
// biaoge(10,10);
// 对任意数组的最大值
// function max(n) {
// 	let maxValue=n[0];
// 	for (let i=0;i<n.length;i++){
// 		if (n[i]>maxValue){
// 			maxValue=n[i];
// 		}
// 	}
// 	console.log(maxValue);
// }
// let str="164976474897";
// max([...str]);
// 对任意数组进行排序
// 错的
// function line(a) {
// 	for (let i=0;i<a.length;i++) {
// 		for (let j=0;j<i;j++) {
// 			if (a[i]>a[j]) {
// 				let temp=a[i];
// 				a[i]=a[j];
// 				a[j]=temp;
// 			}
// 		}
// 		console.log(a);
// 	}
// }
// 	line(1,5,9,8,2,6)

// function b(n) {
// 	console.log(n);
// 	// return n;
// }
// b(5,8,6);
// a=b(9);
// console.log(a);
// function text1(aa) {
// 	aa();
// }
// function text2() {
// 	console.log(123416546);
// }
// text1((text2));

// function text3(aa) {
// 	aa(2646);
// }
// text3(function () {
// 	console.log("我也执行了");
// })
// 1.求二维数组里面长度最长的数组，
// let arr=[[1,2,3,4,5,6],[1,52,3],[1,6,8,9,5,6,5,5,8]];
// function maxLong(arr){
// 	for(let i=0;i<arr.length-1;i++){
// 		if(arr[i].length>arr[i+1].length){
// 			arr[i+1]=arr[i];
// 		}
// 	}
// 	return arr[arr.length-1]
// }
// console.log(maxLong(arr));


// function fun(arr) {
// 	let max=arr[0];
// 	for(let i=0;i<arr.length;i++){
// 		if(arr[i].length>max.length){
// 			arr[i]=max;
// 		}
// 	}
// 	console.log(max);
// }
// fun([[1,2,3,6,6,2],[1,2,5,6,7],[1,1,2]]);

// 2.求二维数组的长度和
// function fun(arr) {
// 	let num=0;
// 	for(let i=0;i<arr.length;i++){
// 		for(let j=0;j<arr[i].length;j++){
// 			num+=1;
// 		}
// 	}
// 	console.log(num);
// }
// fun ([[12,5,6,8,9,5,3],[5,9,8,69,5],[1,6,6,5,9,5,6,5]]);
// function fun(arr) {
// 	let num=0;
// 	for(let i=0;i<arr.length;i++){
// 		for(let j=0;j<arr[i].length;j++){
// 			num+=1;
// 		}
// 	}
// 	console.log(num);
// }
// fun ([[12,5,6,8,9,5,3],[5,9,8,69,5],[1,6,6,5,9,5,6,5]]);
// 3. 求二维数组的数值元素和

// function he(arr) {
// 	console.log(arr);
// 	let  num=0;
// 	for(let i=0;i<arr.length;i++){
// 		for(let j=0;j<arr[i].length;j++){
// 			if(typeof arr[i][j]=="number"){
// 				num+=arr[i][j];
// 			}
// 		}
// 	}
// 	console.log(num);
// }
// he([[1,2,3,5,6,8,9,8],[2,5,6,8,9],["a","b"]]);
// 4. 求混合数组的数值元素和
// function fun(arr) {
// 	// console.log(arr);
// 	let numb=0;
// 	for(let i=0;i<arr.length;i++){
// 	if (typeof arr[i]=="object"){
// 		for(let j=0;j<arr[i].length;j++){
// 			if(typeof arr[i][j]=="number"){
// 				numb+=arr[i][j];
// 			}
// 		}
// 	}
// 	else{
// 		if (typeof arr[i]=="number"){
// 			numb+=arr[i];
// 		}
// 	}
// }
// 	console.log(numb);
// }
// fun([[1,2,2,3,5,6],1,2,3,[2,3,6],["b"]]);
// 5. 在数组的后面去添加一个元素，求新数组
// function fun(arr,b) {
// 	arr.push(b);
// 	console.log(arr);
// }
// fun([1,2,3,4],2);
// 6. 在数组的前面去添加一个元素，求新数组
// function fun(arr,b) {
// 	arr.unshift(arr);
// 	console.log(arr);
// }
// fun([1,2,3,4],3);
// 7. 数组反转
// function fun(arr,b) {
// 	arr.reverse();
// 	console.log(arr);
// }
// fun([1,2,3,4],);
// 8. 将一维数组进行排序
// function fun(arr) {
// 	for(let i=0;i<arr.length;i++){
// 		for(let j=i+1;j<arr.length;j++){
// 			if (arr[i]<arr[j]){
// 				temp=arr[i];
// 				arr[i]=arr[j];
// 				arr[j]=temp;
// 			}
// 		}
// 	}
// 	console.log(arr);
// }
// fun([1,2,5,96,89,7,66,58,9,4])
// 9.<!--四则运算-->
// function fun(num1,num2,fuhao) {
// 		switch(fuhao){
// 			case "+":alert(parseInt(num1)+parseInt(num2));
// 				break;
// 			case "-":alert(num1-num2);
// 				break;
// 			case "*":alert(num1*num2);
// 				break;
// 			case "/":alert(num1/num2);
// 				break;
// 			case "%":alert(num1%num2);
// 				break;
// 		}
// }
// fun(prompt("请输入第一个值"),prompt("请输入第二个值"),prompt("请输入运算符号"));
// 10.   数组最大值
// function max(arr) {
// 	// console.log(arr);
// 	let num=arr[0];
// 	for(let i=0;i<arr.length;i++){
// 			if(num<arr[i]){
// 				num=arr[i];
// 			}
// 		}
// 	console.log(num);
// }
// max([1,2,6,21,9,8,9,5])
// 11.	求n-m之间的数据和
// function fun(arr) {
// 	// console.log(arr);
// 	let sum=0;
// 	for(let i=1;i<arr.length-1;i++){
// 		sum+=arr[i];
// 	}
// 	console.log(sum);
// }
// fun(["n",1,5,6,47,8,9,8,6,5,2,"m"]);
// n+ n+1 + n+2 +……+..m
// function fun(m,n) {
// 	// console.log(m,n)
// 	let sum=0;
// 	for(let i=0;i<=n;i++){
// 		sum+=m+i;
// 	}
// 	console.log(sum);
// }
// fun(1,100);
// 12.	求圆的面积
// function fun(n) {
// 	const pai=3.14;
// 	console.log((n/2)*(n/2)*pai);
// }
// fun(prompt("请输入边长"))
// 13.	输入任何一个整数求位数
// Math.abs() 对数取绝对值
// parseInt() 转整数型
// function fun(num) {
// 	let i=0;
// 	// num=Math.abs(num);
// 	while(parseInt(num)>0){
// 		num=num/10;
// 		i++;
// 	}
// 	alert(i);
// }
//       fun(prompt("请输入一个数"));

// 14.	输入一个正整数求各位上的和
// function fun(num) {
// 	let i=0;
// 	num=Math.abs(num);
// 	while(parseInt(num)>0){
// 		i+=parseInt(num)%10;
// 		num=num/10;
// 	}
// 	alert(i);
// }
// fun(prompt("请输入一个数"));
//
// // 15.	编写函数fun(n),n为三位自然数，
// 判断n是否为水仙花数，是返回1，否返回0。
// function text(arr) {
// 	let i=arr%10;
// 	let j=((arr-i)%100)/10;
// 	let k=(arr-(j*10-i))/100;
// 	if(i*i*i+j*j*j+k*k*k==arr){
// 		console.log(`${arr}是水仙花数`);
// 	}else {
// 		console.log (`${arr}不是水仙花数`);
// 	}
// }
// text(prompt("请输入一个数"));
// 16.编写函数ss(n), 判断n是否为素数，
// 是返回1，否返回0。编写main函数，
// function numb(arr) {
// 	for(let i=2;i<arr;i++){
// 		if(arr%i==0){
// 			return 0;
// 		}
// 	}
// 	return 1;
//
// }
//       console.log(numb(prompt("请输入一个值")));
// 17.	设计一个函数，计算两个自然数的最大公约数
// function fun(n,m) {
//  let shu=1;
// 	let min=n>m? m:n;
// 	for(let i=2;i<=min;i++){
// 		if(m%i==0&&n%i==0){
// 			shu=i;
// 		}
// 	}
// 	return shu;
// }
//       console.log(fun(36,12));

// 18.找出元素 "b" 在给定数组 arr 中的位置

// function  fun(arr) {
// 	console.log(arr);
// 	for(let i=0;i<arr.length;i++){
// 		if(arr[i]=="b"){
// 			console.log(i);
// 		}
// 	}
// }
// fun(["a","b",1,2,3,5,6,"b"]);

// 19.计算给定数组 arr 中所有元素中数字的总和
// function  fun(arr) {
// 	// console.log(arr);
// 	let num=0;
// 	for(let i=0;i<arr.length;i++){
// 		if(typeof arr[i]=="number"){
// 			// console.log(arr[i]);
// 			num+=arr[i];
// 		}
// 	}
// 	// console.log(num);
// }
// fun(["a","b",1,2,3,5,6,"b"]);

// 20.统计数组 arr 中值等于 item 的元素出现的次数
// function  fun(arr) {
// 	// console.log(arr);
// 	let num=0;
// 	for(let i=0;i<arr.length;i++){
// 		if(arr[i]=="item"){
// 			num++;
// 		}
// 	}
// 	console.log(num);
// }
// fun(["item","a","b",1,2,3,5,6,"b","item"]);

// 21.移除数组 arr 中的所有与 item相等的元素。
// function  fun(arr) {
// 	let arr1=[];
// 	for(let i=0;i<arr.length;i++){
// 		if(arr[i]!="item"){
// 			arr1+=arr[i];
// 		}
// 	}
// 	console.log(...arr1);
// }
// fun(["item","a","b",1,2,3,5,6,"b","item"]);


// 斐波那契数列
// function fun(n) {
// 	if(n==0){
// 		renturn 1;
// 	}
// 	if(n==1){
// 		return 1;
// 	}
// 	if(n==2){
// 		return 2;
// 	}
// 	return fun(n-1)+fun(n-2);
// }
// console.log(fun(6));
//
// 遍历递归n位数组
// function fun(arr) {
// 	for(let i=0;i<arr.length;i++){
// 		if(typeof arr[i]=="object"){
// 			fun(arr[i]);
// 			// for (let j=0;j<arr[i].length;j++){
// 			// 	console.log(arr[i][j]);
// 			// }
// 		}else {
// 			console.log(arr[i]);
// 		}
// 	}
// }
// fun([[1,2,3],["a"],"b",]);

	
