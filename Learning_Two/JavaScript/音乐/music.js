/**
 * Created by 凯瑟琳 on 2017/7/5.
 */
$(function () {
	let tuli = document.querySelectorAll(".section>ul>li")//内容图
	let txli = document.querySelectorAll(".touxiang>ul>li");//歌手图
	let left = $(".houtui");//后退
	let right = $(".qianjing");//前进
	let Gmli = document.querySelectorAll(".geming>ul>li");//歌名
	let Gsli = document.querySelectorAll(".geshou>ul>li");//歌手
	let index = 0;
	let shijian=$(".shijian");//进度条
	let audio=document.querySelector("audio");
//数据库
	let database = [
		{id:1,geming: "極楽浄土", geshou: "MARiA", src: "MARiA - 極楽浄土.mp3"},
		{id:2,geming: "创造者", geshou: "泽野弘之", src: "SawanoHiroyuki[nZk]：Tielle & Gemie - gravityWall.mp3"},
		{id:3,geming: "圣诞快乐劳伦斯", geshou: "坂本龙一", src: "坂本龍一 - Merry Christmas Mr.Lawrence.mp3"},
		{id:4,geming: "团子大家族", geshou: "古河渚", src: "茶太,真理絵,くない瓜 - だんご大家族.mp3"},
	];


	//歌名
	// function antoer() {
	// 	if(way=="r"){
	// 		index++;
	// 		if(index>=){
	//
	// 		}
	// 	}
		let geming=$(".geming");
		let GMing=database[index].geming;
		geming.innerHTML=`
	${GMing}
	`;

		//歌手
		let geshou=$(".geshou");
		let GSing=database[index].geshou;
		geshou.innerHTML=`${GSing}`;



	// }



	let musicStart=$(".musicStart");
	let bofangtiao=document.querySelector(".bofangtiao")
	let width=bofangtiao.offsetWidth;
	//总长度
	let musicEnd=$(".musicEnd");
	let musicduration=audio.duration;//总长度
	let fen=Math.trunc(musicduration/60);
	let miao=Math.trunc(musicduration%60);
	musicEnd.innerHTML=`${fen}:${miao}`;

	//进度条


	//歌单事件委派
	let gedan=document.querySelector(".gedan");
	gedan.ondblclick=function (e) {
		var mubiao=e.target||e.srcElement;
		if(mubiao.nodeName=="P"){
			// gedan.children.classList.remove("red");
			mubiao.classList.add("red");

		}
	}



	//时间
	//开始


	audio.ontimeupdate=function () {
		let musiccurrentTime=audio.currentTime;//获取当前audio 的播放时间
		let Sfen=Math.trunc(musiccurrentTime/60);
		Sfen=Math.trunc(musiccurrentTime/60>=10 ?Math.trunc(musiccurrentTime/60):+Math.trunc(musiccurrentTime/60));

		let Smiao=Math.trunc(musiccurrentTime%60);
		Smiao=Math.trunc(musiccurrentTime%60>=10 ?Math.trunc(musiccurrentTime%60):+Math.trunc(musiccurrentTime%60));
		musicStart.innerHTML=`${Sfen}:${Smiao}`;

			shijian.style.width=musiccurrentTime/musicduration*width+"px";


	}


	// let musiccurrentTime=audio.currentTime;//获取当前audio 的播放时间
	// let musicduration=audio.duration;//总长度
	// let m=musiccurrentTime/musicduration*width+"px";
	bofangtiao.onclick=function (e) {
		let weizhi=e.offsetX;
		shijian.style.width=weizhi+"px";
		audio.currentTime=weizhi/width*audio.duration;
		console.log(audio.currentTime);
	}









	//函数左右键
	function move(way) {
		if (way == "r") {
			index++;
			if (index >= tuli.length) {
				index = 0;
			}
		}
		if (way == "l") {
			index--;
			if (index < 0) {
				index = tuli.length - 1;
			}
		}
		tuli.forEach(function (value, n) {
			value.classList.remove("active");
			txli[n].classList.remove("abc");
			// Gmli[n].classList.remove("Gm");
			// Gsli[n].classList.remove("Gs");
		})
		tuli[index].classList.add("active");
		txli[index].classList.add("abc");
		// Gmli[index].classList.add("Gm");
		// Gsli[index].classList.add("Gs");
	}

	left.onclick = function () {
		move("l");
	}
	right.onclick = function () {
		move("r");
	}


	//暂停或者开始
	let stop = $(".zhanting");//暂停
	let start = $(".start");
	stop.onclick = function () {
		stop.style.display = "none";
		start.style.display = "block";
		audio.pause();
	}
	start.onclick = function () {
		start.style.display = "none";
		stop.style.display = "block";
		if(audio.paused){
			audio.play();
		}
	}


	let love=$(".love");
	love.onclick=function () {
			love.classList.toggle("red");
	}





	// 音量调
	let yinliang=$(".yinliang");//大条
	let yinwidth=yinliang.offsetWidth;
	let yinliangTiao=$(".yinliangTiao");//小条4

	let yinda=document.querySelector(".yinliang")
	let widthyin=yinda.offsetWidth
	let weiyin=audio.volume*10
	yinda.onclick=function (e) {
		weiyin=e.offsetX;
		yinliangTiao.style.width=weiyin+"px";
		audio.volume=weiyin/widthyin;
	}




	//音量icon
	let yinliangbox=document.querySelector(".yinliangbox");
	let yinliang1=document.querySelector(".yinliang1");
	let yinliang2=document.querySelector(".yinliang2");
	yinliangbox.onclick=function () {
		if(audio.volume!=0){
			yinliang1.style.display="none";
			yinliang2.style.display="block";
			audio.volume=0;
		}else {
			yinliang1.style.display="block";
			yinliang2.style.display="none";
			audio.volume=weiyin/yinwidth;
		}
	}











})

