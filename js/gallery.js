var resize = function($img, $gallery){
    divider = ($gallery.height() - $img.height) / 2;
    $($img).css('top', divider);
    $($img).css('bottom', divider);
};

$(window).load(function(){
    $imgs = $(".gallery_img");
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
		    $($imgs[43]).css('opacity', '1');
		    resize($imgs[43], $(".gallery"));
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
		if(index == 43){
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
