var full_text1 = "At Stanford, her activities include serving on the board for Stanford Women in Computer Science and mentoring for groups like Girls Teaching Girls To Code and She++. She enjoys really bad puns. So if you hear one, you should tell her. By the way, GCC is a pun too!";
var full_text2 = "In high school, he spent much of his time as an educational aid, whether as a peer tutor introductory Latin and Computer Science, or as a general tutor for local, underprivileged youth. He is also a big fan of the Super Smash Bros. franchise, and challenges anyone to play him as Ness.";
var full_text3 = "In high school, she served as 1st Vice President of her Technology Student Association chapter and earned over 7 first place state awards in different competition categories in TSA. She was also an extra for the Steve Jobs movie being filmed this year! You should keep an eye out for her!";


var expand = function(button_id, full_text){
    var id = button_id + "_text";
    var curr_text = $(id).text();
    var full_text_index = curr_text.indexOf(full_text);
    if(full_text_index > -1){
	$(id).text(curr_text.substring(0, full_text_index));
	$(button_id).text("Find out more");
    } else {
	var new_text = curr_text + " " + full_text;
	$(id).text(new_text);
	$(button_id).text("Show less");
    }
};

$(document).ready(function(){
    $("#button1").click(function(){
	expand("#button1", full_text1);
    });
    $("#button2").click(function(){
	expand("#button2", full_text2);
    });
    $("#button3").click(function(){
	expand("#button3", full_text3);
    });
});
