$(window).load(function(){
    $imgs = $(".pic_wrapper");
    var index;
    for(index = 0; index < $imgs.size(); index++){
	p = $($imgs[index]).parent()
	p.css('text-align', 'center');
    }
});
