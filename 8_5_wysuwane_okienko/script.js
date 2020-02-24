$(document).ready(function() {
	$("#slider").hover(function(){
		$(this).animate({left: "0px"});
	},
	function(){
		$(this).animate({left: "-292px"});
	}
	);
});
