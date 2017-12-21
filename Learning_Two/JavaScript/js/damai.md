请输入成绩判断合格不合格
  let grade=prompt("请输入你的成绩");
   if(grade>=60 && grade<=100){
   	  if(grade>=90){
 		alert("优秀，你的成绩为"+grade);
  	   }else if(grade>=80){
         alert("良好" + "，你的成绩为"+grade);
  	  }else{
  	     alert("合格，你的成绩为"+grade);
  	   }
  }
      else if(grade<60 && grade >=0){
       alert("不及格"+grade);
   }else{
   	alert("请输入正确的成绩");
 let grade=prompt("请输入你的成绩");
 }
四则运算
 let num1=prompt("请输入一个值");
  let num2=prompt("请输入第二个值");
 let yunsuan=prompt("请输入运算符");
  switch(yunsuan){
  	case"+":document.write(num1+num2);
   	break;
   	case"-":document.write(num1-num2);
  	break;
     case" * " : document.write(num1*num2);
    break;
      case"/":document.write(num1/num2);
     default:document.write("您输入的运算符有误");
   }
  星期判断
 let time=prompt("几号星期几？");
 switch(time){
   case"1":console.log("星期一");
    break;
   case"2":console.log("星期二");
  break;
   case"3":console.log("星期三");
  default:alert("没有这样的星期");
   let time=prompt("几号星期几？");
 }
九九乘法表
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
 for(let i=1;i<10;i++){
 	for(let j=1;j<=i;j++){
		if((j==2)&&(i==3||i==4)){
 	      document.write(`${i}*${j}=${i*j}&nbsp;&nbsp;&nbsp;  `);
 		}else{
          document.write(`${i}*${j}=${i*j}&nbsp;&nbsp;`);
         }
  	}
  	document.write("</br>");
  }

 换色table
 let tab="<table width='600px'  height='600px' border='1' cellspacing='0'>";
 for(let i=1;i<=10;i++){
   tab+="<tr>"
   for(let j=1;j<=10;j++){
       if((i%2==1)&& (j%2==0)){
       tab+="<td style='background:pink';>";
         tab+="</td>";  
       }else if((i%2==0)&& (j%2==1)){
       tab+="<td style='background:green';>";
        tab+="</td>";  	
        }else{
          tab+="<td>";
          tab+="</td>"; 	
       }
        }
      tab+="</tr>"
 }
  document.write(tab);
 金子塔
   for(let i=1;i<10;i++){
 	for(let a=1;a<10-i;a++){
      document.write("&nbsp;");
 	}
 	for(let j=1;j<=i;j++){
		document.write("* &nbsp");
  	}document.write("</br>");
 }

let tab = "<table  border='1'  cellspacing='0' width='600px' height='600px'>"
for(let i = 1;i <= 10;i++){
	tab += "<tr>"
    for(let j = 1; j <=10; j++){
    	if((j%2==1)&&(i%2==0)){
    	tab+="<td bgcolor='pink'>"
    	tab+="</td>"
    }else if((j%2==0)&&(i%2==1)){
        tab+="<td bgcolor='green'>"
    	tab+="</td>"
    }else{
    	tab+="<td>"
    	tab+="</td>"
    }
    }
	tab+="</tr>"
}
 document.write(tab);

 for(let i=1;i<10;i++){
 	for(let a=1;a<=10-i;a++){
        document.write("&nbsp");
 	}
 	for(let j=1;j<=i;j++){
 		document.write("* &nbsp;");
 	}
 	document.write("<br>");
 }
 五角星
 let tab="&nbsp";
for(let i=1;i<8;i++){
	for(let j=1;j<=20-i;j++){
       tab+="&nbsp;";
	}
	for(let a=1;a<=i;a++){
       tab+="* &nbsp;";
	}
	tab+="<br>";
}
for(let i=1;i<6;i++){
	for(let a=1;a<=i;a++){
		tab+="&nbsp;";
	}
	for(let j=1;j<20-i;j++){
      tab+="* &nbsp;";
    }
	for(let a=1;a<=i;a++){
		tab+="&nbsp;";
	}
	tab+="<br>";
}
for(let i=1;i<8;i++){
	for(let a=1;a<=i;a++){
       tab+="&nbsp;";
	}
	for(let j=1;j<=8-i;j++){
       tab+="&nbsp;";
	}
	for(let a=1;a<=18-i;a++){
       tab+="* &nbsp;";
	}
	tab+="<br>";
}
   for(let u=1;u<i;u++){
        tab+="&nbsp";
    }

 document.write(tab);
  操场上有一百多个人，三排余一人，四排余二人，五排余三人，问一共有多少人？
     // for(let i=100;i<200;i++){
     //   if((i%3==1)&&(i%4==2)&(i%5==3)){
     //   	 alert(i);
     //   }
     // }

 教材10元/本，参考书5元/本，练习本0.5元/本。100元买了100本书，各种书各有几本？
 for(let x = 0;x <= 100;x++){
	for(let y = 0;y <= (100 - x);y++){
			for(let z = 0;z <= (100 - x - y);z++){
				if((10*x + 5*y + 0.5*z == 100) && (x + y + z == 100)){
             			alert(`教材有${x}本,参考书有${y}本,练习本有${z}本`);
               }
		}  
 	}
 }
鸡兔同笼，头有34，脚有96，有多少只鸡与兔？
    for(let x = 0;x <= 34;x++){
       for(let y = 0;y <= (34-x);y++){
           if((2*x + 4* y == 96) && (x + y == 34)){
               alert(`鸡有${x}只,兔有${y}只`);
          }
        }
}
 啤酒每罐2.3元，饮料每罐1.9元。小明买了若干啤酒和饮料，一共花了82.3元。       
 我们还知道他买的啤酒比饮料的数量少，请你计算他买了几罐啤酒。   注意：答案是一个整数。请通过浏览器提交答案。   不要书写任何多余的内容（例如：写了饮料的数量，添加说明文字等）
for(let x=0;x < 40;x++){
	for(let y=1;y < 50;y++){
   if((2.3* x + 1.9*y == 82.3) && (y > x)){
  	document.write(`买了${x}罐啤酒`);
   }
  }
 }
