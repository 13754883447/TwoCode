
window.onload=function () {

let lunbobox=document.querySelector(".lunbotu");
let lunboul=document.querySelector(".lunbotuul");
let lunboli=document.querySelectorAll(".lunbotuul>li");
let lunbodian=document.querySelectorAll(".lunbodian1");
let t=setInterval(move,4000);
let index=0;
let flag=true;
//轮播
function move() {
	if(flag){
		flag=false;
	index++;
	if(index>=lunboli.length){
		index=0;
	}
	lunboli.forEach(function (value,n) {
		value.classList.remove("opacity");
		lunbodian[n].classList.remove("lunbodianxuanzhong");
	})
	lunboli[index].classList.add("opacity");
	lunbodian[index].classList.add("lunbodianxuanzhong");

	lunboli.forEach(function (value) {
		value.addEventListener("transitionend",function () {
			flag=true;
		})
	})
	}
}

lunbodian.forEach(function (value,n) {
	value.onmouseover=function () {
		lunbodian.forEach(function (a,b) {
			a.classList.remove("lunbodianxuanzhong");
			lunboli[b].classList.remove("opacity");
		})
		this.classList.add("lunbodianxuanzhong");
		lunboli[n].classList.add("opacity");
		index=n;
	}
})
	let banner1=document.querySelector(".banner1")
	banner1.onmouseover=function () {
		clearInterval(t);
}
	banner1.onmouseout=function () {
		t=setInterval(move,2000)
}



	let liebiao=document.querySelectorAll(".liebiao");
	let lbnr=document.querySelectorAll(".fenleineirong");
	liebiao.forEach(function (value,index) {
		value.onmouseover=function () {
			lbnr[index].style.display="block";
		}
		value.onmouseout=function () {
			lbnr[index].style.display="none";
		}
	})
	let xl=document.querySelectorAll(".xl");
	let xl1=document.querySelectorAll(".xl1");
	let hz=document.querySelectorAll(".hz")
	xl.forEach(function (value,index) {
		value.onmouseover=function () {
			xl.forEach(function (a,b) {
				a.classList.remove("xlactive");
				xl1[b].classList.remove("block1");
			})
			this.classList.add("xlactive");
			xl1[index].classList.add("block1");
			hz[index].style.display="block";
		}
		value.onmouseout=function () {
			xl[index].classList.remove("xlactive");
			xl1[index].classList.remove("block1");
			hz[index].style.display="none";
		}
	})

	let shoujiban=document.querySelector(".xl-1");
	let shoujiban1=document.querySelector(".xl-2");
	shoujiban.onmouseover=function () {
		shoujiban1.classList.add("block1");
	}
	shoujiban.onmouseout=function () {
		shoujiban1.classList.remove("block1");
	}




	let suoyin=document.querySelectorAll(".suoyin");
	let weizhi=document.querySelectorAll(".suoyinlan>div>a");
	let ssl=document.querySelector(".ssl");
	let suoyinlan=document.querySelector(".suoyinlan");
	let sslflag=true;
	let sslflag1=false;
	let dingbu=document.querySelector(".dingbu");
	let suoyindingbu=document.querySelector(".suoyindingbu");
	window.onscroll=function () {
			let scroll = document.body.scrollTop ? document.body : document.documentElement;
			let scrollTop = scroll.scrollTop;
			suoyin.forEach(function (value, index) {
				if (scrollTop >= value.offsetTop - 300) {
					suoyin.forEach(function (a, b) {
						weizhi[b].classList.remove("sactive");
					})
					weizhi[index].classList.add("sactive");
				}


			})

			if (scrollTop >= suoyin[0].offsetTop -1300) {
				if (sslflag) {
					sslflag = false;
					animate(ssl, {height: 50}, 200, function () {
						sslflag1 = true;
					});
					animate(suoyinlan, {height:387,width:36}, 500, function () {
						sslflag1 = true;
					});
				}

			}else {
				if(sslflag1){
					sslflag1=false;
					animate(ssl,{height:0},200,function () {
						sslflag=true;
					});
					animate(suoyinlan, {height:0,width:0}, 500, function () {
						sslflag1 = true;
					});
				}
			}
		dingbu.onclick=function () {
			animate(scroll,{scrollTop:0},500);
		}
		suoyindingbu.onclick=function () {
			animate(scroll,{scrollTop:0},500);
		}
	}


//黑条
	let hl=document.querySelectorAll(".hl");
	let heitiaoxiala=document.querySelectorAll(".heitiaoxiala");
	let sanjiao=document.querySelectorAll(".sanjiao");
	hl.forEach(function (value,index) {
		value.onmouseover=function () {
			value.classList.add("hlactive");
			heitiaoxiala[index].classList.add("htactive");
			sanjiao[index].classList.add("sjactive");
		}
		value.onmouseout=function(){
			value.classList.remove("hlactive");
			heitiaoxiala[index].classList.remove("htactive");
			sanjiao[index].classList.remove("sjactive");
		}
	})

	let erweimatwo=document.querySelector(".erweimatwo");
	let	erweimatwoimg2=document.querySelector(".erweimatwoimg2");
	erweimatwo.onmouseover=function () {
		erweimatwoimg2.style.display="block";
	}
	erweimatwo.onmouseout=function () {
		erweimatwoimg2.style.display="none";
	}


	//banner耳朵

	let daohangtext1=document.querySelectorAll(".daohangtext1");
	let erduo=document.querySelectorAll(".erduo");
	daohangtext1.forEach(function (value,index) {
		value.onmouseover=function () {
			erduo[index].classList.add("erduoactive");
		}
		value.onmouseout=function () {
			erduo[index].classList.remove("erduoactive");
		}
	})
}