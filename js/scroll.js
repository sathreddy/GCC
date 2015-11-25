$(window).load(function(){
    //the 15 makes the transition from unsticky to sticky navbar smoother
    var topOffset = $(".logo").height() - 15;


    //this below corrects for the sticky navbar
    var correction = $("#nav").height() + 30;
    
    var stickify = function(){
	var scrollOffset = $(window).scrollTop();
        var aboutOffset = 0;
        var hackOffset = parseInt($("#ghd").offset().top) - correction;
        var missionOffset = parseInt($("#om").offset().top) - correction;
	var whatOffset = parseInt($("#wwb").offset().top) - correction;
	var galleryOffset = parseInt($("#gal_link").offset().top) - correction;
	var teamOffset = parseInt($("#team").offset().top) - correction;
	var contactOffset = parseInt($("#footer").offset().top) - correction;
      
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

	if(scrollOffset > hackOffset){
	    $("#nav2").addClass("current");
	    $("#nav1").removeClass("current");
	} else {
	    $("#nav2").removeClass("current");
	}
	
	if(scrollOffset > missionOffset){
	    $("#nav3").addClass("current");
	    $("#nav2").removeClass("current");
	} else {
	    $("#nav3").removeClass("current");
	}

	if(scrollOffset > whatOffset){
	    $("#nav4").addClass("current");
	    $("#nav3").removeClass("current");
	} else {
	    $("#nav4").removeClass("current");
	}

	if(scrollOffset > galleryOffset){
	    $("#nav5").addClass("current");
	    $("#nav4").removeClass("current");
	} else {
	    $("#nav5").removeClass("current");
	}

	if(scrollOffset > teamOffset){
	    $("#nav6").addClass("current");
	    $("#nav5").removeClass("current");
	} else {
	    $("#nav6").removeClass("current");
	}

	if(scrollOffset > contactOffset){
	    $("#nav7").addClass("current");
	    $("#nav6").removeClass("current");
	} else {
	    $("#nav7").removeClass("current");
	}
    };

    $(window).scroll(function(){
	stickify();
    });
    
});
