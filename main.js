
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
	if (document.body.scrollTop >= 400){
		document.getElementsByClassName("nav-bar")[0].classList.add("dark");
	}
	if (document.body.scrollTop < 400){
		document.getElementsByClassName("nav-bar")[0].classList.remove("dark");
	}
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
	imgArray[imgIndex].classList.add("show");
	imgArray[(imgIndex<=0 ? 4 : imgIndex-1)].classList.add("left");
	imgArray[(imgIndex>=4 ? 0 : imgIndex+1)].classList.add("right");
}
//-------------------------------------------------------------------