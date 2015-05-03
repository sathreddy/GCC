$(document).ready(function(){
    var topOffset = $(".logo").height() - 15;
    var aboutOffset = 0;
    var missionOffset = parseInt($("#om").position().top);
    var whatOffset = parseInt($("#wwb").position().top);
    var galleryOffset = parseInt($("#gal_link").position().top) + $(".mission").height();
    var teamOffset = parseInt($("#team").position().top);
    
    var stickify = function(){
	var scrollOffset = $(window).scrollTop();

	if(scrollOffset > topOffset){
	    $("#nav").addClass("sticky");
	} else {
	    $("#nav").removeClass("sticky");
	}

	if(scrollOffset > aboutOffset){
	    $("#nav1").addClass("current");
	} else {
	    $("#nav1").removeClass("current");
	}

	if(scrollOffset > missionOffset){
	    $("#nav2").addClass("current");
	    $("#nav1").removeClass("current");
	} else {
	    $("#nav2").removeClass("current");
	}
	
	if(scrollOffset > whatOffset){
	    $("#nav3").addClass("current");
	    $("#nav2").removeClass("current");
	} else {
	    $("#nav3").removeClass("current");
	}

	if(scrollOffset > galleryOffset){
	    $("#nav4").addClass("current");
	    $("#nav3").removeClass("current");
	} else {
	    $("#nav4").removeClass("current");
	}

	if(scrollOffset > teamOffset){
	    $("#nav5").addClass("current");
	    $("#nav4").removeClass("current");
	} else {
	    $("#nav5").removeClass("current");
	}

    };

    $(window).scroll(function(){
	stickify();
    });
    
});
