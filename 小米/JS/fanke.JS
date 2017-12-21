		window.onload=function () {
			let bannerbox=document.querySelector(".bannerbox");
			let bannerboxulli=document.querySelectorAll(".bannerbox>ul>li");
			let left=document.querySelector(".bannerbox1");
			let right=document.querySelector(".bannerbox2");
			let yuanboxli=document.querySelectorAll(".yuanbox>li");
			let flag=true;
			let index=0;
			let bannert=setInterval(move,2000);

			function move(way="r") {
				if(flag){
					flag=false;
					if(way=="r"){
						index++;
						if(index>=bannerboxulli.length){
							index=0;
						}
						bannerboxulli.forEach(function (value,n) {
							value.classList.remove("active");
							yuanboxli[n].classList.remove("yuan1");
						})
						bannerboxulli[index].classList.add("active");
						yuanboxli[index].classList.add("yuan1");
					}
				if(way=="l"){
					index--;
					if(index<0){
						index=bannerboxulli.length-1;
					}
					bannerboxulli.forEach(function (value,n) {
						value.classList.remove("active");
						yuanboxli[n].classList.remove("yuan1");
					})
					bannerboxulli[index].classList.add("active");
					yuanboxli[index].classList.add("yuan1");
				}
				}
				bannerboxulli.forEach(function (value) {
					value.addEventListener("transitionend",function () {
						flag=true;
					})
				})
			}
			right.onclick=function () {
				move();
			}
			left.onclick=function () {
				move("l")
			}
			bannerbox.onmouseover=function () {
				clearInterval(bannert);
			}
			bannerbox.onmouseout=function () {
				bannert=setInterval(move,2000);
			}

			yuanboxli.forEach(function (value,m) {
				value.onmouseover=function () {
					yuanboxli.forEach(function (a,b) {
						a.classList.remove("yuan1");
						bannerboxulli[b].classList.remove("active");
					})
					this.classList.add("yuan1");
					bannerboxulli[m].classList.add("active");
					index=m;
				}
			})


			//input框内容
			let sousuoi1=document.querySelector(".sousuoi1");
			sousuoi1.onfocus=function () {
				let value=sousuoi1.value;
				if(value=="搜“休闲裤”,体验与众不同"){
					sousuoi1.value="";
				}
			}
			sousuoi1.onblur=function () {
				let value=sousuoi1.value;
				if(value==""){
					sousuoi1.value="搜“休闲裤”,体验与众不同";
				}
			}


			let sousuo1=document.querySelector(".sousuo1");
			let sousuo11=document.querySelector(".sousuo1-1");
			let sousuotext=document.querySelector(".sousuotext1")
			let sousuobaitiao=document.querySelector(".sousuobaitiao");
			sousuo1.onmouseover=function () {
				sousuo1.style.cssText="background-position:-153px -29px;border:1px solid red";
				sousuotext.classList.add("sousuoactive");
				sousuo11.classList.add("sousuo-1-1active");
				sousuobaitiao.classList.add("baitiaoactive");

			}
			sousuo1.onmouseout=function () {
				sousuo1.style.cssText="background-position:-153px 0";
				sousuotext.classList.remove("sousuoactive");
				sousuo11.classList.remove("sousuo-1-1active");
				sousuobaitiao.classList.remove("baitiaoactive");

			}











			//nav 拓展的第一种写法
			// let kuozhan=document.querySelectorAll(".kuozhan");
			// let d1=document.querySelectorAll(".d1");
			// d1.forEach(function (value,index) {
			// 	value.onmouseover=function () {
			// 		kuozhan[index].classList.add("kuozhanactive");
			// 	}
			// 	value.onmouseout=function () {
			// 		kuozhan[index].classList.remove("kuozhanactive");
			// 	}
			// })
			//第二种写法
			let kuozhanheight=document.querySelector(".kzul>li").offsetHeight;
			let d1=document.querySelectorAll(".d1");
			d1.forEach(function (value,index) {
				value.onmouseover=function () {
					let last=value.lastElementChild;
					let lastli=last.lastElementChild;
					hover(value,function () {
						animate(last,{height:lastli.children.length*kuozhanheight+15},500);
					},function () {
						animate(last,{height:0},500);
					})
				}
			})












			let notp=document.querySelector(".notp");
			let erweima=document.querySelector(".erweima");
			notp.onmouseover=function () {
				erweima.classList.add("displayblock");
			}
			notp.onmouseout=function () {
				erweima.classList.remove("displayblock");
			}
		}

		window.onscroll=function () {
			var dingbu=document.querySelector(".dingbu");
			dingbu.onclick=function () {
				animate(dingbu,{scrollTop:0},500);
			}


		}