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

// var jieguo=0;
// var shuruzhi=prompt("请输入一个值");
// for(var i=0;i<=shuruzhi;i++){
//     jieguo=parseInt(shuruzhi)+parseInt(i);
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


//输入一个数，判断是否是质数(只能被1和自己整除)

// for(var renshu=100;renshu<200;renshu++){
//     if(renshu%3==1&&renshu%5==2){
//         console.log(renshu);
//     }
// }


var shuruzhi0=prompt("请输入一个值");
for(i=2;i<shuruzhi0;i++){
    if(shuruzhi0%i==0){
        console.log("此数不是质数");
        break;
    }
    else if(shuruzhi0%shuruzhi0==1){
        console.log("此数是质数");
    }
}
