$(document).ready(function() {
	$(".wstep").append("<h4 class='usun'>"+"Usuń"+"</h4>");
	$(".usun").click(function(){
		$(this).parents(".artykul").fadeOut(600, function(){
			$(this).parents(".artykul").remove();
		});
	});
});
