$(document).ready(function() {
	$("p").hide();
	$("h2").click(function(){
		$(this).next("p").toggle();
	});
	$("#zwin").click(function(){
		$("p").hide();
	});
	$("#rozwin").click(function(){
		$("p").show();
	});
});
