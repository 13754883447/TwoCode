	window.onload=function () {
		let jticon = document.querySelectorAll(".jticon2>div");
		let jtleft=document.querySelector(".jtleft");
		let jtright=document.querySelector(".jtright");
		let pinyi=document.querySelector(".pinyi");
		// let jtwidth=pinyi[0].offsetWidth;
		let jtindex=0;
		let jtnetx=0;
		let jtflag=true;

		jtleft. onclick=function () {
			animate(pinyi,{left:-1200},500);
			jtleft.style.color="#ccc";
			jtright.style.color="#000";
		}
		jtright.onclick=function () {
			animate(pinyi,{left:0},500);
			jtleft.style.color="#000";
			jtright.style.color="#ccc";
		}
		let weinileft=document.querySelector(".weinileft");
		let weiniright=document.querySelector(".weiniright");
		let weini=document.querySelector(".weini");
		 weinileft.onclick=function () {
			 animate(weini,{left:-1200},500);
			 weinileft.style.color="#ccc";
			 weiniright.style.color="#000";
		}
		weiniright.onclick=function () {
			animate(weini,{left:0},500);
			weinileft.style.color="#000";
			weiniright.style.color="#ccc";
		}
		// jticon.forEach(function (value, index) {
		// 	value.onclick = function () {
		// 		jticon.forEach(function (a, b) {
		// 			a.classList.remove("jtxuanzhong");
		// 			mingxingtupain1[b].classList.remove("li-block")
		// 		})
		// 		this.classList.add("jtxuanzhong");
		// 		mingxingtupain1[index].classList.add("li-block")
		// 	}
		// })


		let bannershou = document.querySelectorAll(".main1>li");
		let bannerbai = document.querySelectorAll(".main1-1");
		bannershou.forEach(function (value,index) {
			value.onmouseover=function () {
				bannershou.forEach(function (a,b) {
					a.classList.remove("main1hover");
					bannerbai[b].classList.remove("li-block");
				})
				bannershou[index].classList.add("main1hover");
				bannerbai[index].classList.add("li-block");
			}
			value.onmouseout=function () {
				bannershou.forEach(function (a,b) {
					a.classList.remove("main1hover");
					bannerbai[b].classList.remove("li-block");
				})
			}
		})



		let jiadianli = document.querySelectorAll(".jiadian1>li");
		let jiadianlitu = document.querySelectorAll(".jdnr1>ul")
		jiadianli.forEach(function (value, index) {
			value.onmouseover = function () {
				jiadianli.forEach(function (a, b) {
					a.classList.remove("jiadianlise");
					jiadianlitu[b].classList.remove("li-block");
				})
				this.classList.add("jiadianlise");
				jiadianlitu[index].classList.add("li-block");
			}
		})


		let zhineng = document.querySelectorAll(".zhineng111>li");
		let zhinengneirong = document.querySelectorAll(".zhineng3");
		zhineng.forEach(function (value, index) {
			value.onmouseover = function () {
				zhineng.forEach(function (a, b) {
					a.classList.remove("jiadianlise");
					zhinengneirong[b].classList.remove("li-block");
				})
				this.classList.add("jiadianlise");
				zhinengneirong[index].classList.add("li-block");
			}
		})


		let dapei = document.querySelectorAll(".dapei>li");
		let dapeineirong = document.querySelectorAll(".dapei-box .zhineng3");
		dapei.forEach(function (value, index) {
			value.onmouseover = function () {
				dapei.forEach(function (a, b) {
					a.classList.remove("jiadianlise");
					dapeineirong[b].classList.remove("li-block");
				})
				this.classList.add("jiadianlise");
				dapeineirong[index].classList.add("li-block");
			}
		})

		let peijian = document.querySelectorAll(".peijian1>li");
		let peijianneirong = document.querySelectorAll(".peijian-box .zhineng3");
		peijian.forEach(function (value, index) {
			value.onmouseover = function () {
				peijian.forEach(function (a, b) {
					a.classList.remove("jiadianlise");
					peijianneirong[b].classList.remove("li-block");
				})
				this.classList.add("jiadianlise");
				peijianneirong[index].classList.add("li-block");
			}
		})


		let zhoubian = document.querySelectorAll(".zhoubian>li");
		let zhoubianneirong = document.querySelectorAll(".zhoubian-box .zhineng3");
		zhoubian.forEach(function (value, index) {
			value.onmouseover = function () {
				zhoubian.forEach(function (a, b) {
					a.classList.remove("jiadianlise");
					zhoubianneirong[b].classList.remove("li-block");
				})
				this.classList.add("jiadianlise");
				zhoubianneirong[index].classList.add("li-block");
			}
		})


		let main2 = document.querySelector(".main2");
		let bannerboxli = document.querySelectorAll(".banner-box>li");
		let imgs=document.querySelector('.banner-box');
		let arr = 0;
		let lunbodianli = document.querySelectorAll(".lunbodian>li")
		let t = window.setInterval(move, 2000);
		let flag=true;
		function move() {
			if (flag){
				flag=false;
				arr++;
				if (arr == bannerboxli.length) {
					arr = 0;
				}
				bannerboxli.forEach(function (value, index) {
					value.classList.remove("banner-box-xuanzhong");
					lunbodianli[index].classList.remove("lunbodian2");
				})
				bannerboxli[arr].classList.add("banner-box-xuanzhong");
				lunbodianli[arr].classList.add("lunbodian2");
			}
			bannerboxli.forEach(function (value) {
				value.addEventListener("transitionend",function () {
					flag=true;
				});
			})

		}


		main2.onmouseover = function () {
			clearInterval(t);
		}
		main2.onmouseout = function () {
			t = window.setInterval(move, 2000);
		}


		let bannerbox1 = document.querySelector(".bannerbox1");
		let bannerbox2 = document.querySelector(".bannerbox2");

		bannerbox2.onclick = function () {
			move();
		}

		bannerbox1.onclick = function () {
			if(flag){
				flag=false;
				arr--;
				if(arr<0){
					arr=bannerboxli.length-1;
				}
				bannerboxli.forEach(function (value,index) {
					value.classList.remove("banner-box-xuanzhong");
					lunbodianli[index].classList.remove("lunbodian2");
				})
				bannerboxli[arr].classList.add("banner-box-xuanzhong");
				lunbodianli[arr].classList.add("lunbodian2");
			}
			bannerboxli.forEach(function (value) {
				value.addEventListener("transitionend",function () {
					flag=true;
				});
			})
			}


		lunbodianli.forEach(function (brr,drr) {
			brr.onclick=function () {
				lunbodianli.forEach(function (a,b) {
					a.classList.remove("lunbodian2");
					bannerboxli[b].classList.remove("banner-box-xuanzhong");
				});
				this.classList.add("lunbodian2");
				bannerboxli[drr].classList.add("banner-box-xuanzhong");
				arr=drr;
			}
		})
		//logo旁边下拉
		let nav2li=document.querySelectorAll(".nav2>li>.nava");//导航
		console.log(nav2li);
		let nav2x=document.querySelectorAll(".nav2-divul");//下拉模块
		console.log(nav2x);
		let nav2box=document.querySelector(".nav2box");//下拉盒子
		let nav2box1=document.querySelector(".nav2box1")//包住所有ul的盒子
		let navbox=document.querySelector(".navabox")//7个盒子
		navbox.onmouseover=function () {
			nav2box.classList.add("nav2-block");
		}
		navbox.onmouseout=function () {
			nav2box.classList.remove("nav2-block");
		}
		nav2li.forEach(function (value,index) {
			value.onmouseover=function () {
				nav2li.forEach(function (a,b) {
					a.classList.remove("nav2ahover");
					// nav2box.style.display="none";
					// nav2box1.classList.remove("nav2xheight");
					nav2x[b].style.display="none";
				})
				nav2li[index].classList.add("nav2ahover");
				// nav2box.classList.add("nav2-block");
				// nav2box1.style.display="block";
				nav2x[index].style.display="block";
			}
			value.onmouseout=function () {
				nav2li[index].classList.remove("nav2ahover");
				// nav2box.classList.remove("nav2-block");
				// nav2box1.style.display="none";
				nav2x[index].style.display="none";
			}


			nav2box1.onmouseover=function () {
				nav2box.classList.add("nav2-block");
				nav2box1.style.display="block";
				nav2x[index].style.display="block";
			}


			nav2box1.onmouseout=function () {
				nav2box.classList.remove("nav2-block");
				nav2box1.style.display="none";
				nav2x[index].style.display="none";
			}
		})

		// nav2li.forEach(function (value,index) {
		// 	value.onmouseover=function(){
		// 		nav2li.forEach(function (a,b) {
		// 			a.classList.remove("nav2ahover");
		// 			nav2x[index].classList.remove("nav2-block");
		// 		})
		// 		nav2li[index].classList.add("nav2ahover");
		// 		nav2x[index].classList.add("nav2-block");
		// 		nav2box.classList.add("nav2boxactive");
		// 	}
		// 	value.onmouseout=function () {
		// 		nav2li.forEach(function (a,b) {
		// 			a.classList.remove("nav2ahover");
		// 			nav2x[index].classList.remove("nav2-block");
		// 			nav2box.classList.remove("nav2boxactive");
		// 		})
		// 	}
		// })
		// nav2x.forEach(function (value) {
		// 	value.onmouseover=function () {
		// 		value.classList.add("nav2-block");
		// 	}
		// 	value.onmouseout=function () {
		// 		value.classList.remove("nav2-block");
		// 	}
		// })


		let header3=document.querySelector(".header3");
		let hd3dingwei=document.querySelector(".header3dingwei");

		header3.onmouseover=function () {
			header3.classList.add("header3hover");
			hd3dingwei.classList.add("header3dingweiJS");
		}
		header3.onmouseout=function () {
			header3.classList.remove("header3hover");
			hd3dingwei.classList.remove("header3dingweiJS");
		}

		//封装
		function xiaomilist(parsent) {


	let neirong1ul=parsent.querySelector(".neironghuan");
	let neirongleft=parsent.querySelector(".neirong-left");
	let neirongright=parsent.querySelector(".neirong-right");
	let nlunbodianli=parsent.querySelectorAll(".nrlunbodian2");
	let neirongli=parsent.querySelectorAll(".neironghuan>li");
	let  nl=0;
	function moved(way="r") {
		if(flag){
			flag=false;
			if(way=="r"){
				nl++;
				if (nl>=neirongli.length){
					nl=0;
				}
			}
			if (way=="l"){
				nl--;
				if(nl<0){
					nl=neirongli.length-1;
				}
			}
			animate(neirong1ul,{left:-290},function () {
				flag=true;
				neirong1ul.appendChild(neirong1ul.firstElementChild);
				neirong1ul.style.left=0;
			});
			neirongli.forEach(function (value,n) {
				value.classList.remove("a1")
				nlunbodianli[n].classList.remove("n1-xuanzhong");
			})
			neirongli[nl].classList.add("a1");
			nlunbodianli[nl].classList.add("n1-xuanzhong");
		}

	}



	neirongright.onclick=function () {
		moved();
	}

	neirongleft.onclick=function () {
		moved("l");
	}


	nlunbodianli.forEach(function (value,n) {
		value.onclick=function () {
			nlunbodianli.forEach(function (a,b) {
				a.classList.remove("n1-xuanzhong");
			})
			this.classList.add("n1-xuanzhong");
			animate(neirong1ul, {left: -n * 290},Tween.Linear);
		}
	})




}

		//每一个   达到每一个互不干扰
		let neirong1=document.querySelector(".nrborder1");
		let neirong2=document.querySelector(".nrborder2");
		let neirong3=document.querySelector(".nrborder3");
		let neirong4=document.querySelector(".nrborder4");
		xiaomilist(neirong1);
		xiaomilist(neirong2);
		xiaomilist(neirong3);
		xiaomilist(neirong4);




	let sousuo1=document.querySelector(".sousuo1");
	let nav3mokuai=document.querySelector(".nav3mokuai");
	let sousuo=document.querySelector(".sousuo");
	let nav3xiala=document.querySelector(".nav3xiala");
	sousuo1.onfocus=function () {
		nav3mokuai.classList.add("display-none");
		sousuo1.style.border="1px solid red";
		sousuo1.style.borderRight="0";
		sousuo.style.border="1px solid red";
		nav3xiala.style.display="block";
	}
	sousuo1.onblur=function () {
		nav3mokuai.classList.remove("display-none");
		sousuo1.style.border="1px solid #ccc";
		sousuo1.style.borderRight="0";
		sousuo.style.border="1px solid #ccc"
		nav3xiala.style.display="none";
	}


	}