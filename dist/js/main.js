
// function showMenu(){
// 	console.log('toggling Menu');
// 	document.getElementsByClassName("nav-bar")[0].classList.toggle("showList");
// }

function shiftLogo(){
	console.log('shifting Logo');
	document.getElementsByClassName("my-logo")[0].classList.toggle("my-logo-click");
}
function showNav(){
	console.log('showing Nav');
	document.getElementsByClassName("nav-bar")[0].classList.toggle("nav-bar-show");
}

function scrollNav(){
	console.log('scrolling');
	var topheight = $('.hero').height()- (2* $('.nav-bar').height());
	if (document.body.scrollTop >= 400){
		document.getElementsByClassName("nav-bar")[0].classList.add("dark");
	}
	if (document.body.scrollTop < 400){
		document.getElementsByClassName("nav-bar")[0].classList.remove("dark");
	}
}

function scrollTo(toSection){
	console.log('Jump to: '+toSection);
	$('body').animate({
		scrollTop: $(toSection).offset().top - $('.nav-bar').height()}, 500);
}

$(document).ready(function(){
	$(".nav-click").click(function(){
		//$("#nav-bar ul").hide();
		$("#nav-bar ul").slideToggle("slow");
	});
});

// $('.my-logo img').on('click', function(){
// 	console.log("clicked");
// 	$(this).toggleClass('shift');
// });


//CAROUSEL SCRIPT --------------------------------------------------
var imgIndex = 0;
var imgArray = document.getElementsByClassName("box");
var imgNum = imgArray.length;

function shiftCarousel(n){
	if (n > 0){ imgIndex = imgIndex>=4 ? 0 : imgIndex+1; }
	else { imgIndex = imgIndex<=0 ? 4 : imgIndex-1; }

	console.log(imgIndex);

	if (document.getElementsByClassName("show").length > 0){
		$(".show").css("z-index","1");
		document.getElementsByClassName("show")[0].classList.remove("show");
	}
	if (document.getElementsByClassName("left").length > 0){
		$(".left").css("z-index",(-1*n)+"");
		document.getElementsByClassName("left")[0].classList.remove("left");
	}
	if (document.getElementsByClassName("right").length > 0){
		$(".right").css("z-index",(1*n)+"");
		document.getElementsByClassName("right")[0].classList.remove("right");
	}
	console.log("index: "+imgIndex);
	console.log("img: "+imgArray[imgIndex]);
	imgArray[imgIndex].classList.add("show");
	imgArray[(imgIndex<=0 ? 4 : imgIndex-1)].classList.add("left");
	imgArray[(imgIndex>=4 ? 0 : imgIndex+1)].classList.add("right");
}
//-------------------------------------------------------------------

//HAMMER -------------

// var mc = new Hammer(document.getElementsByClassName('carousel')[0]);
// mc.on("panleft", function(){console.log("PANNING LEFT")});
// mc.on("panright", shiftCarousel(-1));

//JQUERY SWIPE
$(document).ready(function(){
	console.log("page created");
	$(".box").on("swipeleft", function(){
		console.log("shifting");
		shiftCarousel(1);
	});
});
// $(".carousel").on("swiperight", shiftCarousel(-1));







