var s = skrollr.init();

$("#aboutus").click(function(){
	$("#img1")
    .velocity("scroll", { duration: 1500, easing: "ease-in" })
});

$("#product").click(function(){
	$("#img2")
    .velocity("scroll", { duration: 1500, easing: "ease-in" })
});

$("#contest").click(function(){
	$("#img3")
    .velocity("scroll", { duration: 1500, easing: "ease-in" })
});

$("#contactus").click(function(){
	$("#img4")
    .velocity("scroll", { duration: 1500, easing: "ease-in" })
});

