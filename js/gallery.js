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
				} else {
				         $($imgs[index-1]).css('opacity', '1');
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
				} else {
				         $($imgs[index+1]).css('opacity', '1');
				}
				return false;
			}
		});
	});
});