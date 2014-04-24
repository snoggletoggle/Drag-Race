$(function() {
	var length = $('#bg > option').length - 1;
	var rand = Math.floor(Math.random() * length);
	$('body').css({'background-image': 'url(images/bg' + rand + '.png)'});
	$('#bg').val(rand);
});
function bgChange(val) {
	$('body').css({'background-image': 'url(images/bg' + val + '.png)'});
}
function choosePkm(roll) {
	reroll(roll);
	gameDone();
}
function gameDone() {
	var elimNum = document.getElementById('elim').innerHTML;
	var totalNum = document.getElementById('total').innerHTML;
	var eliminated = +elimNum;
	var total = +totalNum;
	if(typeof eliminated == 'number' && total - eliminated == 1) {
		var btn = document.getElementsByClassName('pkmn')[1];
		$(btn).css("display","none");
		$("#egg").html("Your favorite Pok&eacute;mon is...");
	} else {
		var meh=1;
	}
}
/*
 * Image preview script 
 * powered by jQuery (http://www.jquery.com)
 * 
 * written by Alen Grakalic (http://cssglobe.com)
 * 
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */
 
this.imagePreview = function(){	
	/* CONFIG */
		
		xOffset = 206;
		yOffset = -96;
		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result
		
	/* END CONFIG */
	$("img.fav").hover(function(e){
		this.t = this.title;
		this.title = "";	
		var c = (this.t != "") ? "<br/>" + this.t : "";
		$("body").append("<p id='preview'><img id='tool' src='"+ this.src +"' />"+ c +"</p>");
		$("#preview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.css("position","absolute")
			.css("z-index","10000")
			.fadeIn("fast");
		$("#tool")
			.css("width","192px")
			.css("height","192px");
    },
	function(){
		this.title = this.t;	
		$("#preview").remove();
    });	
	$("img.fav").mousemove(function(e){
		$("#preview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
		$("#tool")
			.css("width","192px")
			.css("height","192px");
	});			
};


// starting the script on page load
$(document).ready(function(){
	imagePreview();
});