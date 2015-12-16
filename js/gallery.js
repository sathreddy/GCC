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
    $img = $imgs.filter(function(){
	return $(this).css('opacity') == '1';
    })[0];
    resize($img, $(".gallery"));
    var index;
    for(index = 0; index < $imgs.size(); index++){
	resize($imgs[index], $(".gallery"));
    }

});

$(window).resize(function(){

    $imgs = $(".gallery_img");
    var index;
    for(index = 0; index < $imgs.size(); index++){
	resize($imgs[index], $(".gallery"));
    }
});

$(document).ready(function(){

  $(function() {
    $(".youtube").each(function() {  
      // Based on the YouTube ID, we can easily find the thumbnail image
      // Other image options are
      // default.jpg
      // mqdefault.jpg
      // hqdefault.jpg
      // sddefault.jpg
      // maxresdefault.jpg
      $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/maxresdefault.jpg)');
      // Magic number? Yep...
      $(this).css('width', $(".video-container").width() * 0.75)
      
      // Overlay the Play icon to make it look like a video player
      $(this).append($('<div/>', {'class': 'play'}));
      
      $(document).delegate('#'+this.id, 'click', function() {
        // Create an iFrame with autoplay set to true
        var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
        if ($(this).data('params')) iframe_url+='&'+$(this).data('params');
	
	var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': $(this).parent().width(), 'height': '480px' });
	
        // Replace the YouTube thumbnail with YouTube HTML5 Player
        $(this).replaceWith(iframe);
      });
    });
  });
  
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

// Added the youtube image code here to save on network requests
