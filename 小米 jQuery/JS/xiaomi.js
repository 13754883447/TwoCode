$(function () {
	//购物车
	let header3=$(".header3");
	let header3dingwei=$(".header3dingwei");
	header3.hover(function () {
		header3.css({
			background:"white",
			color:"red"
		},100)
		header3dingwei.slideDown(300);
	},
		function () {
			header3.css({
				background:"#424242",
				color:"#bfbfbf"
			},100)
			header3dingwei.slideUp(300);
		}
	)
	//list 菜单栏
	let main1li=$(".main1>li");
	let main1x=$(".main1-1");
	main1li.hover(function (index,value) {
		var i=$(this).index();
		main1li.eq(i).addClass("main1hover");
		main1x.eq(i).show();
	},
		function (index,value) {
			var i=$(this).index();
			main1li.eq(i).removeClass("main1hover");
			main1x.eq(i).hide();
		}
	);
	//搜索框
	let sousuo1=$(".sousuo1");
	let sousuo=$(".sousuo");
	let nav3mokuai=$(".nav3mokuai");
	let nav3xiala=$(".nav3xiala");
	sousuo1.focusin(function () {
		sousuo1.addClass("sousuo1focus");
		sousuo.addClass("sousuofocus");
		nav3mokuai.hide();
		nav3xiala.show();
	});
	sousuo1.focusout(function () {
		sousuo1.removeClass("sousuo1focus");
		sousuo.removeClass("sousuofocus");
		nav3mokuai.show();
		nav3xiala.hide();
	})
	//nav 导航栏下拉
	let nav2box=$(".nav2box");
	// 集合
	let nav2divul=$(".nav2-divul");
	let navabox=$(".navabox>li");
	let nfalg=true;
	navabox.hover(function (index,value) {
		if(nfalg){
			nfalg=false;
			var i=$(this).index();
			nav2box.slideDown(300);
			nav2divul.eq(i).slideDown(300);
		}
	},
		function (index,value) {
			var i=$(this).index();
			nav2box.slideUp(300);
			nav2divul.eq(i).slideUp(300,function () {
				nfalg=true;
			});
		}
	)
	//banner,没加开关
	let bannerli=$(".banner-box>li");
	let lunboli=$(".lunbodian>li");
	let n=0;
	let t=setInterval(move,3000);
	let flag=true;
	let main2=$(".main2");
	let bannerbox1=$(".bannerbox1");
	let bannerbox2=$(".bannerbox2");
	function move(way="r") {
			if(way=="r") {
				n++;
				if (n == bannerli.length) {
					n = 0;
				}
			}
				bannerli.eq(n)
				if(way=="l"){
					n--;
					if(n<0){
						n=bannerli.length-1;
					}
				}
		bannerli.removeClass("banner-box-xuanzhong").eq(n).addClass("banner-box-xuanzhong");
		lunboli.removeClass("lunbodian2").eq(n).addClass("lunbodian2");
	}
	main2.hover(function () {
		clearInterval(t);
	},
		function () {
			t=setInterval(move,3000);
		}
	);
	lunboli.click(function (index,value) {
		var i=$(this).index();
		bannerli.removeClass("banner-box-xuanzhong").eq(i).addClass("banner-box-xuanzhong");
		lunboli.removeClass("lunbodian2").eq(i).addClass("lunbodian2");
		n=i;
	})
	bannerbox1.click(function () {
			move("l");
	});
	bannerbox2.click(function () {
		move();
	})
	//小米明星单品
	let jtleft=$(".jtleft");
	let jtright=$(".jtright");
	let pinyi=$(".pinyi");
	function mxdp(box,left,right) {
		left.click(function () {
			$(this).css("color","#ccc");
			right.css("color","#000")
			box.animate({left:-1200},500)
		})
		right.click(function () {
			$(this).css("color","#ccc");
			left.css("color","#000")
			box.animate({left:0},500)
		})
	}
	mxdp(pinyi,jtleft,jtright);//明星单品
	let weinileft=$(".weinileft");
	let weiniright=$(".weiniright");
	let weini=$(".weini");
	mxdp(weini,weinileft,weiniright)
	// let pinyili=$(".pinyi>li");
	// let PYlength=pinyili.length/5;
	// let jtn=1;
	// let jt=setInterval(jtla,1000);
	// function jtla(way="r") {
	// 		jtn++;
	// 		pinyi.animate({left:-1200},500);
	// 		if (jtn==2){
	// 			jtn--;
	// 			if(jtn==1){
	// 				jtn++;
	// 				pinyi.animate({left:0},500);
	// 			}
	// 		}
	// }
	//家电 封装
	function jdfz(one,two) {
		one.hover(function (index,value) {
			var i=$(this).index();
			one.removeClass("jiadianlise").eq(i).addClass("jiadianlise");
			two.removeClass("li-block").eq(i).addClass("li-block");
		})
	}
	let jiadian1=$(".jiadian1>li");//
	let jiadianneirong=$(".jiadianneirong>ul");
	jdfz(jiadian1,jiadianneirong);//家电
	let zhineng111=$(".zhineng111>li");
	let zhinengneirong=$(".zhinengneirong>ul");
	jdfz(zhineng111,zhinengneirong);//智能
	let dapei=$(".dapei>li");
	let dapeineirong=$(".dapeineirong>ul");
	jdfz(dapei,dapeineirong);//搭配
	let peijian1=$(".peijian1>li");
	let peijianneirong=$(".peijianneirong>ul");
	jdfz(peijian1,peijianneirong);//配件
	let zhoubian=$(".zhoubian>li");
	let zhoubianneirong=$(".zhoubianneirong>ul");
	jdfz(zhoubian,zhoubianneirong);//周边
	//内容   有点问题
	function neirongList(parsent) {
		let nrul=parsent.first().children().last();
		let nrli = parsent.first().children().last().children();
		let lunbo = parsent.first().children().eq(2).children().children();
		let zuo = parsent.first().children().first();
		let you = parsent.first().children().eq(1);
		let index = 0;
		let next=0;
			zuo.click(function () {
				next = index - 1;
				if (next < 0) {
					next = nrli.length-1;
				}
				nrli.eq(index).removeClass("active");
				nrli.eq(next).addClass("active");
				lunbo.eq(index).removeClass("n1-xuanzhong");
				lunbo.eq(next).addClass("n1-xuanzhong");
				index = next;
			})
			you.click(function () {
				next = index + 1;
				if (next >= nrli.length) {
					next = 0;
				}
				nrli.eq(index).removeClass("active");
				nrli.eq(next).addClass("active");
				lunbo.eq(index).removeClass("n1-xuanzhong");
				lunbo.eq(next).addClass("n1-xuanzhong");
				index = next;
			})
		lunbo.click(function (index,value) {
			let i=$(this).index();
			lunbo.removeClass("n1-xuanzhong").eq(i).addClass("n1-xuanzhong");
			nrli.removeClass("active").eq(i).addClass("active");
			next=i;
		})
	}
	neirongList($(".nrborder1"));
	neirongList($(".nrborder2"));
	neirongList($(".nrborder3"));
	neirongList($(".nrborder"));
})