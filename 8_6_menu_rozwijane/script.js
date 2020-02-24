$(document).ready(function() {
	$("ul#menu li").hover(function(){
		$(this).find(".podmenu").slideDown();
	},
	function(){
		$(this).find(".podmenu").slideUp();
	}
	);
});
