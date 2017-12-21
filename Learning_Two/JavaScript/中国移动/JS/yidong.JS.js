/**
 * Created by 凯瑟琳 on 2017/6/20.
 */
window.onload=function () {
	let bannerbox=document.querySelector(".banner-center");
	let bannerimgli=document.querySelectorAll(".banner-center>li");
	let width = parseInt(getComputedStyle(bannerbox, null).width);
	let index=0;
	let next=0;
	let flag=true;
	let t=setInterval(move,2000);
	let left=document.querySelector(".left");
	let right=document.querySelector(".right");
	let lunbodian=document.querySelectorAll(".banner-centerulli");


	function move(way="r") {
		if (flag){
			flag=false;
			if(way=="r"){
				next=index+1;
				if (next>=bannerimgli.length) {
					next=0;
				}
				bannerimgli[next].style.left="100%";
				animate(bannerimgli[index],{left:-width},500);
				animate(bannerimgli[next],{left:0},500,function () {
					flag=true;
				});
			}else if(way=="l"){
				next=index-1;
				if (next<0){
					next=bannerimgli.length-1;
				}
				bannerimgli[next].style.left="-100%";
				animate(bannerimgli[index],{left:width},500);
				animate(bannerimgli[next],{left:0},500,function () {
					flag=true;
				});
			}
			lunbodian[index].classList.remove("lunbo-xuanzhong");
			lunbodian[next].classList.add("lunbo-xuanzhong");
			index=next;
		}

		bannerbox.onmouseover=function () {
			clearInterval(t);
		}
		bannerbox.onmouseout=function () {
			t=setInterval(move,2000);
		}
		right.onclick=function () {
			move();
		}
		left.onclick=function () {
			move("l");
		}

		lunbodian.forEach(function (value,n) {
			value.onclick=function () {
				if (n>index){
					bannerimgli[n].style.left="100%";
					animate(bannerimgli[index],{left:-width},500);
					animate(bannerimgli[n],{left:0},500,function () {
						flag=true;
					});
				}else if (n<index){
					bannerimgli[n].style.left="-100%";
					animate(bannerimgli[index],{left:width},500);
					animate(bannerimgli[n],{left:0},500,function () {
						flag=true;
					});
				}else if(n==index){
					return;
				}
				lunbodian[index].classList.remove("lunbo-xuanzhong");
				lunbodian[n].classList.add("lunbo-xuanzhong");
				index=n;
			}


		})

	}

	let fenleiddbox=document.querySelector(".fenleiddd")
	let fenleiul=document.querySelector(".fenleiul");
	let fenleiulli=document.querySelectorAll(".fenleiul>li");
	let f=setInterval(move1,1000);
	let findex=0;
	let fnext=0;
	let fleft=document.querySelector(".shangyizhang");
	let fright=document.querySelector(".xiayiye");
	function move1(way="r") {
		if (flag){
			flag=false;
			if (way=="r"){
				findex++;
				if(findex>=fenleiulli.length){
					findex=0;
				}
				animate(fenleiul,{left: -296},function () {
					let first=fenleiul.firstElementChild;
					fenleiul.appendChild(first);
					fenleiul.style.left=0;
					flag=true;
				});
			}else if(way=="l"){
				findex--;
				if(findex<0){
					findex=fenleiulli.length-1;
				}
				animate(fenleiul,{left: 0},function () {
					let first=fenleiul.firstElementChild;
					let last=fenleiul.lastElementChild;
					fenleiul.insertBefore(last,first);
					fenleiul.style.left=-296+"px";
					flag=true;
				});
			}

		}



	}

	fenleiddbox.onmouseover=function () {
		clearInterval(f);
	}
	fenleiddbox.onmouseout=function () {
		f=setInterval(move1,1000);
	}

	fright.onclick=function () {
		move1();
	}
	fleft.onclick=function () {
		move1("l");
	}




	let qianjin=document.querySelector(".qianjin");
	let houtui=document.querySelector(".houtui");
	let gonggao1=document.querySelectorAll(".gonggao1");
	let gonggaolan=document.querySelector(".gonggaolan");
	let gheight=gonggao1[0].offsetHeight;
	let g=0;
	let gflag=true;
	let gt=setInterval(move22,2000);
	function move22(way="r") {
		if(gflag){
			gflag=false;
			if (way=="r"){
				g++;
				if (g>=gonggao1.length){
					g==0;
				}
				animate(gonggaolan,{top: -gheight},function () {
					gflag=true;
					gonggaolan.appendChild(gonggaolan.firstElementChild);
					gonggaolan.style.top=0;
				});

			}
			if (way=="l"){
				if(g<0){
					g=gonggao1.length-1;
				}
				animate(gonggaolan,{top: 0},function () {
					gflag=true;
					gonggaolan.appendChild(gonggaolan.lastElementChild);
					gonggaolan.style.top=gheight;
				});
			}
		}
	}

	qianjin.onclick=function () {
		move22();
	}
	houtui.onclick=function () {
		move22("l");
	}


	let erweimabox=document.querySelector(".tou-you-2-1");
	let erweima=document.querySelector(".erweima");
	erweimabox.onmouseover=function () {
		erweimabox.style.cssText="background:#fff;color:#000;";
		erweima.classList.add("display-blcok");
	}
	erweimabox.onmouseout=function () {
		erweimabox.style.cssText="";
		erweima.classList.remove("display-blcok");
	}

	let diquanniu=document.querySelector(".diquanniu");
	let sousuokuang=document.querySelector(".sousuokuang");
	let	sousuokuangleft=document.querySelector(".sousuokuang-left");
	let diqu=document.querySelector(".diqu");
	let diquxiala=document.querySelector(".diquxiala");
	sousuokuangleft.onclick=function (e) {
		let mubiao=e.target||e.srcElement;
		if(mubiao.className=="diqu"){
			diquxiala.style.display="block";
		}else if(mubiao.className!="diqu"){
			diquxiala.style.display="none";
		}
	}


	let daohangxialabox=document.querySelectorAll(".daohangxialabox");
	let daohangxiala=document.querySelectorAll(".daohanglixiala");
	let lns=document.querySelectorAll(".lns");
	daohangxialabox.forEach(function (value,index) {
		value.onmouseover=function () {
			daohangxiala[index].style.display="block";
			lns[index].style.display="block";
		}
		value.onmouseout=function () {
			daohangxiala[index].style.display="none";
			lns[index].style.display="none";
		}
	})

	let shuruhaoma=document.querySelector(".inputbox>input");

	shuruhaoma.onfocus=function () {
		let value=shuruhaoma.value;
		if(value=="请输入手机号码"){
			shuruhaoma.value="";
		}

	}
	shuruhaoma.onblur=function () {
		let value=shuruhaoma.value;
		if(value==""){
			shuruhaoma.value="请输入手机号码";
		}
	}

	let baoyueliuliang=document.querySelector(".sousuokuang-right-1-input")
	baoyueliuliang.onfocus=function () {
		let value=baoyueliuliang.value;
		if(value=="包月流量包"){
			baoyueliuliang.value="";
		}

	}
	baoyueliuliang.onblur=function () {
		let value=baoyueliuliang.value;
		if(value==""){
			baoyueliuliang.value="包月流量包";
		}
	}


	//广告关闭
	let guanggao=document.querySelector(".guanggao");
	// guanggao.onclick=function (e) {
	// 	let obj=e.target||e.srcElement;
	// 	if(obj.className=="guanggaodel"){
	// 		guanggao.style.display="none";
	// 	}
	// }
	let guanggaodel=document.querySelector(".guanggaodel");
	guanggaodel.onclick=function () {
		guanggao.style.display="none";
		guanggaodel.style.display="none";
	}

}

