$(document).ready(function() {
	$("a.zakladki").click(function(){
		$(".aktywna").removeClass("aktywna");
		$(this).addClass("aktywna");
		$(".zawartosc").hide();
		var otwartaZakladka = $(this).attr("title");
		$("#"+otwartaZakladka).show();
	});
	
});
