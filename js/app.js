
$("nav a").click(function() {
		$('.navbar-collapse').collapse('hide'); // esconde o menu
		var href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top - 76,
        easing: 'swing',
    }, 700);
});

