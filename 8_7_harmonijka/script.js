$(document).ready(function() {
	$("#harm p:eq(3)").show();
	$("#harm h2").click(function(){
		$(this).next("p").slideToggle().siblings("p:visible").slideUp();
	});
});
