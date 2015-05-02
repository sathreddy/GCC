var pageloadwidth;
var pageloadheight;
var first;

var resize = function($img, $gallery, first){
    //gwidth = $gallery.width();
    //gheight = $gallery.height();
    if(first){
	pageloadwidth = $gallery.width();
	pageloadheight = $gallery.height();
	localStorage.setItem("pwidth", pageloadwidth);
	localStorage.setItem("pheight", pageloadheight);
    } else {
	$gallery.css('width', pageloadwidth);
	$gallery.css('height', pageloadheight);
    }
    iwidth = $img.width;
    iheight = $img.height;
    wdivider = (pageloadwidth - iwidth) / 2;
    divider = (pageloadheight - iheight) / 2;
    if(iwidth > iheight){
	$($img).css('width', pageloadwidth);
	$($img).css('top', divider + "px");
	$($img).css('bottom', divider + "px");
    } else {
	$($img).css('height', pageloadheight);
	$($img).css('left', wdivider + "px");
	$($img).css('right', wdivider + "px");
    }
};

$(window).load(function(){

    $imgs = $(".gallery_img");
    $img = $imgs.filter(function(){
	return $(this).css('opacity') == '1';
    })[0];
    if(localStorage.getItem("first") == null){
	console.log("first");
	first = true;
    } else {
	pageloadwidth = localStorage.getItem("pwidth");
	pageloadheight = localStorage.getItem("pheight");
    }
    resize($img, $(".gallery"), first);
    localStorage.setItem("first", false);
    first = false;
    var index;
    for(index = 0; index < $imgs.size(); index++){
	resize($imgs[index], $(".gallery"), first);
    }

});

$(window).resize(function(){

    $imgs = $(".gallery_img");
    $img = $imgs.filter(function(){
	return $(this).css('opacity') == '1';
    })[0];
    resize($img, $(".gallery"), first);

});

$(document).ready(function(){
    
    $("#galButton1").click(function(){
	$imgs = $(".gallery_img");
	$img = $imgs.filter(function(){
	    return $(this).css('opacity') == '1';
	})[0];
	$imgs.each(function(index){
	    if(this == $img){
		$($img).css('opacity', '0');
		if(index == 0){
		    $($imgs[$imgs.size() - 1]).css('opacity', '1');
		    resize($imgs[$imgs.size() - 1], $(".gallery"), first);
		} else {
		    $($imgs[index-1]).css('opacity', '1');
		    resize($imgs[index-1], $(".gallery"), first);
		}
		return false;
	    }
	});	
    });
    
    $("#galButton2").click(function($imgs){
	$imgs = $(".gallery_img");

	$img = $imgs.filter(function(){
	    return $(this).css('opacity') == '1';
	})[0];
	$imgs.each(function(index){
	    if(this == $img){
		$($img).css('opacity', '0');
		if(index == ($imgs.size() - 1)){
		    $($imgs[0]).css('opacity', '1');
		    resize($imgs[0], $(".gallery"), first);
		} else {
		    $($imgs[index+1]).css('opacity', '1');
		    resize($imgs[index+1], $(".gallery"), first);
		}
		return false;
	    }
	});
    });
});
