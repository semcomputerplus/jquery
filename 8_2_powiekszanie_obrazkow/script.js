$(document).ready(function() {
	$("#okladkamala").hover(function(){
		var pozycja = $("#okladkamala").offset();
		$("#okladkaduza").css("left", pozycja.left+76).css("top", pozycja.top+68).css("display", "block").show();
	},
	function(){
		$("#okladkaduza").hide();
	}
	);
});
