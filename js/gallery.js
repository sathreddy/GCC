var resize = function($img, $gallery){
    gwidth = $gallery.width();
    gheight = $gallery.height();
    iwidth = $img.width;
    iheight = $img.height;
    wdivider = (gwidth - iwidth) / 2;
    divider = (gheight - iheight) / 2;
    if(iwidth > iheight){
	$($img).css('width', gwidth);
	$($img).css('top', divider + "px");
	$($img).css('bottom', divider + "px");
    } else {
	$($img).css('height', gheight);
	$($img).css('left', wdivider + "px");
	$($img).css('right', wdivider + "px");
    }
};

$(window).load(function(){
    
    $imgs = $(".gallery_img");
    var index;
    for(index = 0; index < $imgs.size(); index++){
	resize($imgs[index], $(".gallery"));
    }
    $img = $imgs.filter(function(){
	return $(this).css('opacity') == '1';
    })[0];
    resize($img, $(".gallery"));
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
		    resize($imgs[$imgs.size() - 1], $(".gallery"));
		} else {
		    $($imgs[index-1]).css('opacity', '1');
		    resize($imgs[index-1], $(".gallery"));
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
		    resize($imgs[0], $(".gallery"));
		} else {
		    $($imgs[index+1]).css('opacity', '1');
		    resize($imgs[index+1], $(".gallery"));
		}
		return false;
	    }
	});
    });
});
