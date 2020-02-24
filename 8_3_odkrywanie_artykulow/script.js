$(document).ready(function() {
	$(".rozwiniecie").hide();
	$(".rozwiniecie").after("<h4 class='pokaz'>"+"Rozwiń"+"</h4>");
	$(".pokaz").click(function(){
		$(this).prev("p").toggle();
		if($(this).text() == "Rozwiń")
		{
			$(this).text("Zwiń");
		}
		else
		{
			$(this).text("Rozwiń");
		}
	});
});
