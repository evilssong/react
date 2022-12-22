// window.addEventListener("DOMContentLoaded", function(){
// 	// video interface
// 	main_video.addEventListener("loadeddata", function(){
// 		main_video.muted=true;
// 		main_video.play();
// 	});
// 	main_video.addEventListener("ended", function(){
// 		main_video.currentTime=0;
// 		main_video.play();
// 	});

// 	// main swiper interface
// 	var c1_swiper=new Swiper(".c1_Swiper", {
// 		pagination: {
// 			el: ".swiper-pagination",
// 			clickable: true
// 		},
// 		speed: 1300,
// 		loop: true,
// 		autoplay: {
// 			delay: 5000,
// 			disableOnInteraction: true
// 		},
// 		spaceBetween: 20
// 	});
// 	var c2_swiper=new Swiper(".c2_Swiper", {
// 		slidesPerView:3,
// 		spaceBetween:10,
// 		speed: 1300,
// 		loop: true,
// 		slidesPerGroup: 3,
// 		autoplay: {
// 			delay: 5000,
// 			disableOnInteraction: true
// 		},
// 		breakpoints: {
// 			500: {
// 				slidesPerView: 3,
// 				slidesPerGroup: 3
// 			},
// 			350: {
// 				slidesPerView: 2,
// 				slidesPerGroup: 2
// 			},
// 			0: {
// 				slidesPerView: 2,
// 				slidesPerGroup: 2
// 			}
// 		},
// 		pagination: {
// 		el: ".c2_Swiper .swiper-pagination",
// 		clickable: true,
// 		}
// 	});
// 	var c3_swiper=new Swiper(".c3_Swiper", {
// 		slidesPerView: 4,
// 		spaceBetween: 10,
// 		speed: 1300,
// 		loop: true,
// 		slidesPerGroup: 3,
// 		autoplay: {
// 			delay: 5000,
// 			disableOnInteraction: true
// 		},
// 		breakpoints: {
// 			1400: {
// 				slidesPerView: 4,
// 				slidesPerGroup: 4
// 			},
// 			1000: {
// 				slidesPerView: 3,
// 				slidesPerGroup: 3
// 			},
// 			660: {
// 				slidesPerView: 2,
// 				slidesPerGroup: 2
// 			},
// 			0: {
// 				slidesPerView: 1,
// 				slidesPerGroup: 1
// 			}
// 		},
// 		pagination: {
// 		el: ".c3_Swiper .swiper-pagination",
// 		clickable: true,
// 		}
// 	});

// 	// index mousewheel interface
// 	let mainWheelAble=true;
// 	let t=0;
// 	let mainN=0;
// 	let mainTotal=3;
// 	let moving=false;
// 	let mainCategoryH, winW, winH, timer, pos, deviceStatus;

// 	let m_cont=document.querySelector(".m_cont");
// 	let wheelArea=m_cont.firstElementChild;
// 	let gnb=document.getElementById("gnb");
// 	let gnbLi=gnb.getElementsByTagName("li");
// 	let ctrN=document.querySelector(".ctrN");
// 	let ctrNli=ctrN.getElementsByTagName("li");
// 	let portfolio=document.getElementById("portfolio");
// 	let mainwheel=document.getElementById("mainwheel");
// 	let header=document.getElementById("header");
// 	let pagedown=document.querySelector(".pagedown");
// 	let project=document.getElementsByClassName("project");

// 	let poss;
// 	let c1=document.querySelector(".c1")
// 	let c2=document.querySelector(".c2")
// 	let c3=document.querySelector(".c3")
// 	let c4=document.querySelector(".c4")

// 	function buttonActive(n=mainN){
// 		for(let i=0; i < gnbLi.length; i++){
// 			if(i == n){
// 				gnbLi[i].classList.add("active");
// 				ctrNli[i].classList.add("active");
// 			}
// 			else{
// 				gnbLi[i].classList.remove("active");
// 				ctrNli[i].classList.remove("active");
// 			}
// 		}
// 	}
	
// 	function init(){
// 		winH=window.innerHeight;
// 		winW=window.innerWidth;
// 		mainCategoryH=m_cont.offsetHeight;
// 		gnbLi[mainN].classList.add("active");
// 		ctrNli[mainN].classList.add("active");
// 		project[0].classList.add("active");

// 		setTimeout(function(){
// 			gsap.to(window, {scrollTo: 0, duration: 0.5});
// 			gsap.to(m_cont, {scrollTo: 0, duration: 0.5})
// 			indexWheelMoving(mainN=0);
// 		}, 50);

// 		if(winW > 760){
// 			deviceStatus="pc";
// 		}
// 		else{
// 			deviceStatus="mobile";
// 			c2.classList.add("active");
// 			c3.classList.add("active");
// 			c4.classList.add("active");
// 			portfolio.classList.add("active");
// 		}
// 	}
// 	init();

// 	mainwheel.addEventListener("mousewheel", function(e){
// 		if(deviceStatus == "mobile" || mainWheelAble == false || moving == true) return;

// 		clearTimeout(timer);

// 		timer=setTimeout(function(){
// 			if(e.deltaY < 0){
// 				if(mainN > 0){
// 					mainN-=1;
// 				}
// 				else{
// 					return;
// 				}
// 			}
// 			else{
// 				if(mainN < mainTotal){
// 					mainN+=1;
// 				}
// 				else{
// 					pageScrollMoving(winH);
// 				}
// 			}
// 			indexWheelMoving();
// 		}, 50);
// 	});

// 	portfolio.addEventListener("mousewheel", function(e){
// 		if(deviceStatus == "mobile" || moving == true) return;

// 		t=portfolio.scrollTop;
// 		clearTimeout(timer);

// 		timer=setTimeout(function(){
// 			if(t == 0 && e.deltaY < 0){
// 				pageScrollMoving(0);
// 				header.classList.remove("active");
// 				buttonActive();
// 			}
// 		}, 50);
// 	});

// 	window.addEventListener("resize", function(){
// 		if(isMobile) return;
// 		winW=window.innerWidth;
// 		mainCategoryH=m_cont.offsetHeight;
// 		init();
// 		clearTimeout(timer);

// 		timer=setTimeout(function(){
// 			if(winW > 760){
// 				deviceStatus="pc";
// 				mainWheelAble=true;
// 				tab.classList.remove("active");
// 				gnb.removeAttribute("style");
// 				tab.removeAttribute("style");
// 				header.classList.remove("active");
// 				body.classList.remove("fixed");
// 				moving=false;
// 			}
// 			else{
// 				deviceStatus="mobile";
// 				mainWheelAble=false;
// 				c2.classList.add("active");
// 				c3.classList.add("active");
// 				c4.classList.add("active");
// 				portfolio.classList.add("active");
// 			}
// 		}, 10);
// 	});

// 	function indexWheelMoving(){
// 		let targetY=mainN*-1*mainCategoryH;
// 		moving=true;

// 		setTimeout(function(){
// 			gsap.to(wheelArea, {top: targetY, duration: 0.8, onComplete: function(){
// 				moving=false;
// 			}});
// 		}, 150);

// 		if(mainN === 0){
// 			pagedown.classList.remove("active");
// 		}
// 		else{
// 			pagedown.classList.add("active");
// 			if(deviceStatus=="pc"){
// 				if(mainN === 1){
// 					c2.classList.add("active");
// 				}
// 				if(mainN === 2){
// 					c3.classList.add("active");
// 				}
// 				if(mainN === 3){
// 					c4.classList.add("active");
// 				}
// 			}
// 		}
// 		buttonActive();
// 	}

// 	function pageScrollMoving(h){
// 		moving=true;
// 		gsap.to(portfolio, {scrollTo: 0 , duration: 0});
// 		if(h == 0){
// 			gsap.to(window, {scrollTo: 0, duration: 0.4, onComplete: function(){
// 				indexWheelMoving(mainN=3)
// 				moving=false;
// 				header.classList.remove("active");
// 				project[0].classList.add("active");
// 				project[1].classList.remove("active");
// 				mainWheelAble=true;
// 			}});
// 		}
// 		else{
// 			gsap.to(window, {scrollTo: h, duration: 0.4, onComplete: function(){
// 				mainWheelAble=false;
// 				moving=false;
// 				header.classList.add("active");
// 				buttonActive(mainTotal+1);
// 				portfolio.classList.add("active");
// 			}});
// 		}
// 	}

// 	// click interface
// 	for(let i=0; i < gnbLi.length; i++){
// 		gnbLi[i].index=i;
// 		ctrNli[i].index=i;
		
// 		gnbLi[i].addEventListener("click", function(e){
// 			e.preventDefault();
// 			mainN=e.currentTarget.index;
// 			if(deviceStatus=="pc"){
// 				if(mainN == mainTotal+1){
// 					indexWheelMoving(3);
// 					pageScrollMoving(winH);
// 					header.classList.add("active");
// 					project[0].classList.add("active");
// 					project[1].classList.remove("active");
// 					gsap.to(portfolio, {scrollTo: 0, duration: 0.4});
// 				}
// 				else{
// 					if(mainWheelAble){
// 						indexWheelMoving(mainN);
// 					}
// 					else{
// 						mainWheelAble=true;
// 						header.classList.remove("active");
// 						indexWheelMoving(mainN);
// 						gsap.to(window, {scrollTo: 0, duration: 0.4});
// 					}
// 				}
// 			}
// 		});
// 		ctrNli[i].addEventListener("click", function(e){
// 			e.preventDefault();
// 			mainN=e.currentTarget.index;
// 			if(deviceStatus=="pc"){
// 				if(mainN == mainTotal+1){
// 					indexWheelMoving(3);
// 					pageScrollMoving(winH);
// 					header.classList.add("active");
// 					project[0].classList.add("active");
// 					project[1].classList.remove("active");
// 					gsap.to(portfolio, {scrollTo: 0, duration: 0.4});
// 				}
// 				else{
// 					if(mainWheelAble){
// 						indexWheelMoving(mainN);
// 					}
// 					else{
// 						mainWheelAble=true;
// 						header.classList.remove("active");
// 						indexWheelMoving(mainN);
// 						gsap.to(window, {scrollTo: 0, duration: 0.4});
// 					}
// 				}
// 			}
// 		});
// 	}

// 	// footer video
// 	let sub_video=document.getElementById("sub_video");
// 	sub_video.addEventListener("loadeddata", function(){
// 		sub_video.muted=true;
// 		sub_video.play();
// 	});
// 	sub_video.addEventListener("ended", function(){
		
// 			sub_video.currentTime=0;
// 			sub_video.play();
// 	});

// 	// project list
// 	let projectN=0;
// 	for(let i=0; i < project.length; i++){
// 		project[i].index=i;
		
// 		project[i].firstElementChild.firstElementChild.addEventListener("click", function(e){
// 			e.preventDefault();
// 			projectN=e.currentTarget.parentElement.parentElement.index;
// 			for(let j=0; j < project.length; j++){
// 				if(projectN === j) {
// 					project[j].classList.add("active");
// 					if(deviceStatus=="mobile"){
// 						gsap.to(window, {scrollTo: winH+200, duration: 0.7});	
// 					}
// 					else{
// 						gsap.to(portfolio, {scrollTo: 200, duration: 0.7});
// 					}
// 				}
// 				else{
// 					project[j].classList.remove("active");
// 				}
// 			}
// 		})
// 	}

// 	// contact, top button
// 	let contact=document.querySelector(".contact");
// 	let top=document.querySelector(".top");
// 	let bottom;
// 	contact.addEventListener("click", function(e){
// 		e.preventDefault();
// 		bottom=portfolio.scrollHeight;
// 		if(header.classList.contains("active") == false){
// 			header.classList.add("active");
// 			pageScrollMoving(winH);
// 			buttonActive(4);
// 			if(deviceStatus=="pc"){
// 				gsap.to(portfolio, {scrollTo: bottom , duration: 0.7});
// 			}
// 			else{
// 				gsap.to(window, {scrollTo: bottom , duration: 0.7});
// 			}
// 		}
// 		else{
// 			if(deviceStatus=="pc"){
// 				gsap.to(portfolio, {scrollTo: bottom , duration: 0.7});
// 			}
// 			else{
// 				gsap.to(window, {scrollTo: bottom , duration: 0.7});
// 			}
// 		}
// 	});
// 	top.addEventListener("click", function(e){
// 		e.preventDefault();
// 		indexWheelMoving(mainN=0);
// 		header.classList.remove("active");
// 		project[0].classList.add("active");
// 		project[1].classList.remove("active");
// 		gsap.to(portfolio, {scrollTo: 0 , duration: 0});
// 		gsap.to(window, {scrollTo: 0, duration: 0.4, onComplete: function(){
// 			mainWheelAble=true;
// 		}});
// 		buttonActive(0);
// 		if(deviceStatus=="mobile"){
// 			gsap.to(m_cont, {scrollTo: 0, duration: 0.7});
// 		}
// 	});

	

// 	// mobile tab
// 	let tab=document.querySelector(".tab");
// 	let body=document.querySelector("body");
// 	tab.addEventListener("click", (e) => {
// 		e.preventDefault();
		
// 		if(moving==true) return;
// 			moving=true;
// 		if(tab.classList.contains("active") == false){
// 			body.classList.add("fixed");
// 			tab.classList.add("active");
// 			gsap.fromTo(gnb, {display: "block", opacity:0, y: "100%"}, {opacity: 1, y:0, duration: 0.8, onComplete: function() {
// 				moving=false;
// 				header.classList.remove("active");
// 			}});
// 		}
// 		else{
// 			body.classList.remove("fixed");
// 			tab.classList.remove("active");
// 			header.classList.remove("active");
// 			gsap.fromTo(gnb, {opacity:1, y: 0}, {opacity: 0, y:"-100%", duration: 1, onComplete: function() {
// 				moving=false;
// 			}});
// 			if(window.pageYOffset > portfolio.offsetTop-10) {
// 				header.classList.add("active");
// 			}
// 		}
// 	});

// 	// mobile scroll buttonActive
// 	document.addEventListener("scroll", function(){
// 		if(moving==true) return;

// 		clearTimeout(timer);

// 		timer=setTimeout(function(){
// 			if(deviceStatus=="mobile"){
// 				if(window.pageYOffset > portfolio.offsetTop-10) {
// 					header.classList.add("active");
// 					buttonActive(4);
// 				}
// 				else{
// 					header.classList.remove("active");
// 					buttonActive(3);
// 				}
// 			}
// 		}, 10);
// 	});
// 	m_cont.addEventListener("scroll", function(){
// 		clearTimeout(timer);

// 		timer=setTimeout(function(){
// 			if(deviceStatus=="mobile"){
// 				if(m_cont.scrollTop == 0){
// 					buttonActive(0);
// 				}
// 				if(m_cont.scrollTop > c2.offsetTop) {
// 					buttonActive(1);
// 				}
// 				if(m_cont.scrollTop > c3.offsetTop-100) {
// 					buttonActive(2);
// 				}
// 				if(m_cont.scrollTop > c4.offsetTop-100) {
// 					buttonActive(3);
// 				}
// 			}
// 		}, 10);
// 	});

// 	// mobile menu
// 	function m_scrollOffset(h){
// 		gsap.fromTo(gnb, {opacity:1, y: 0}, {opacity: 0, y:"-100%", duration: 1, onComplete: function() {
// 			gsap.to(m_cont, {scrollTo: poss, duration: 0.4});
// 			gsap.to(window, {scrollTo: 0, duration: 0.4});
// 			header.classList.remove("active");
// 			tab.classList.remove("active");
// 			body.classList.remove("fixed");
// 			moving=false;
// 		}});
// 	}

// 	for(let i=0; i < gnbLi.length; i++){
// 		gnbLi[i].index=i;
	
// 		gnbLi[i].addEventListener("click", function(e){
// 			moving=true;
// 			e.preventDefault();
// 			mainN=e.currentTarget.index;
// 			setTimeout(function(){
// 				buttonActive(mainN);
// 			}, 1500);
// 			if(deviceStatus=="mobile"){
// 				if(mainN==0){
// 					poss=c1.offsetTop;
// 					m_scrollOffset(0);
// 				}
// 				if(mainN==1){
// 					poss=c2.offsetTop;
// 					m_scrollOffset();
// 				}
// 				if(mainN==2){
// 					poss=c3.offsetTop;
// 					m_scrollOffset();
// 				}
// 				if(mainN==3){
// 					poss=c4.offsetTop;
// 					m_scrollOffset();
// 				}
// 				if(mainN==4){
// 					poss=portfolio.offsetTop;
// 					gsap.fromTo(gnb, {opacity:1, y: 0}, {opacity: 0, y:"-100%", duration: 1, onComplete: function() {
// 						gsap.to(window, {scrollTo: poss, duration: 0.4});
// 						header.classList.add("active");
// 						tab.classList.remove("active");
// 						body.classList.remove("fixed");
// 						project[0].classList.add("active");
// 						project[1].classList.remove("active");
// 						moving=false;
// 					}});
// 				}
// 			}
// 		});
// 	}
// });