var description = {
	"center" : "Elegant, sparkling and refreshing. PERRIER Sparkling Natural Mineral Water has delighted generations of beverage seekers for over 150 years, with its unique blend of distinctive bubbles and balanced mineral content. Originating in France, its effervescent spirit is known worldwide. It also offers a great alternative to carbonated soft drinks, with no sugar and zero calories. PERRIER is thirst-quenching on its own, but its crisp carbonation makes it the perfect partner for cocktails and drink recipes. It’s the ideal at-home or on-the-go beverage, making it a refreshing choice for every day.",
	"right" : "Imagine the subtle citrus flavor of lime paired with PERRIER’s sparkling bubbles. That’s PERRIER Lime, a refreshing variation on the beverage that has delighted consumers for over 150 years. PERRIER Lime flavor is thirst-quenching on its own, but its tangy lime twist makes it the perfect partner for cocktails and drink recipes. Originating in France, PERRIER’s effervescent spirit is known worldwide. The PERRIER collection also offers a great alternative to carbonated soft drinks, with no sugar and zero calories. It’s the ideal at-home or on-the-go beverage, making it a refreshing choice for every day.",
	"left" : "Imagine the subtle zest of lemon flavor paired with PERRIER’s sparkling bubbles. That’s PERRIER Lemon, a refreshing variation on the beverage that has delighted consumers for over 150 years. PERRIER Lemon flavor is thirst-quenching on its own, but its tangy lemon twist makes it the perfect partner for cocktails and drink recipes. Originating in France, PERRIER’s effervescent spirit is known worldwide. The PERRIER collection also offers a great alternative to carbonated soft drinks, with no sugar and zero calories. It’s the ideal at-home or on-the-go beverage, making it a refreshing choice for every day"
};

var s = skrollr.init({
	forceHeight: false,
	beforerender: function(obj){
		if(animate){
			return false;
		}
	}
});

$("#mainLogo").click(function(){
	$("body")
    .velocity("scroll", { duration: 1500, easing: "ease-in"})
});

$("#detail-btn").click(function(){
	$("#about")
    .velocity("scroll", { duration: 1500, easing: "ease-in", offset: -70 })
});

$("#aboutus").click(function(){
	$("#about")
    .velocity("scroll", { duration: 1500, easing: "ease-in", offset: -70 })
});

$("#product").click(function(){
	$("#product-a")
    .velocity("scroll", { duration: 1500, easing: "ease-in", offset: -70 })
});

$("#contest").click(function(){
	$("#contest-a")
    .velocity("scroll", { duration: 1500, easing: "ease-in", offset: -70 })
});

$("#contactus").click(function(){
	$("footer")
    .velocity("scroll", { duration: 1500, easing: "ease-in", offset: -70 })
});

$("#join-a").click(function(){
	$("#join")
    .velocity("scroll", { duration: 1500, easing: "ease-in", offset: 480 })
});

$("#join-b").click(function(){
	$("#join")
    .velocity("scroll", { duration: 1500, easing: "ease-in", offset: 930 })
});

var animate = false;
function viewDetail(bottle){
    var animationList = ["left", "center", "right"];
    var index = animationList.indexOf(bottle);
    if (index > -1) {
        animationList.splice(index, 1);
    }
    for(var i in animationList){
        switch(animationList[i]){
            case "left":
                if(animate){
                    $("#left").velocity("reverse");   
                }else{
                    $("#left").velocity({
                        translateX: "-300px",
                        opacity : 0
                    }, 1000);
                }
                break;
            case "right":
                if(animate){
                    $("#right").velocity("reverse");   
                }else{
                    $("#right").velocity({
                        translateX: "300px",
                        opacity : 0
                    }, 1000);
                }
                break;
            case "center":
                if(animate){
                    $("#center").velocity("reverse");   
                }else{
                    $("#center").velocity({
                        opacity : 0
                    }, 1000);
                }
                break;
        }
    }

    if(animate){
        $.Velocity.animate($("#" + bottle),"reverse").then(function(){
        	if(bottle == "right"){
        		$("#right" ).css("left", "auto");
        	}	
        });
        $("#table").velocity("reverse");
        $("#extra").velocity("reverse");
        $(".bottle-label").velocity("reverse");
        $("#tab1").text("");
        $(".bottle-background").velocity({
        	opacity: 0
        })
    }else{
    	$(".bottle-label").velocity({
    		opacity: 0,
    	})
        $("#"+bottle).velocity({
            left: "70px",
        });
        $("#table").velocity({
            translateX: "-200px",
        });
        $("#extra").velocity({
        	opacity: 1,
        },{
        	delay: 500
        })
        $("#tab1").text(description[bottle]);

        $("#"+bottle+"_background").velocity({
        	opacity: 1
        })
    }
    animate = !animate;
}

$(".love").mouseenter(function(){
	console.log("over");
	$(this).css("opacity", 1);
});

$(".love").mouseleave(function(){
	console.log("leave");
	$(this).css("opacity", $(this).data("visible"));
});

$(".love").click(function(){
	var num;
	if($(this).data("visible") == 1){
		num = 0;
	}else{
		num = 1;
	}
	$(this).data("visible", num);
	$(this).css("opacity", num);
});

