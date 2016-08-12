var main = function() {

	window.setInterval(function() {
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();

		if (nextSlide.length === 0) {
			nextSlide = $('.img-slide').first();
		};

		currentSlide.fadeOut(0).removeClass('active-slide');
		nextSlide.fadeIn(300).addClass('active-slide');
	}, 4000);



	$('.tabb').click(function() {
		var currentTab = $('.active-tabs');
		var nextTab = $(this);

		currentTab.removeClass('active-tabs');
		nextTab.addClass('active-tabs');
		var stringNextTab = nextTab.text();

		var currentJumbo = $('.jumbotron-active');		
		var nextJumbo = $('.jumbotron-tabs');
		var stringTest =[
			$('#Jumbo-Home'),
			$('#Jumbo-Produtos'),
			$('#Jumbo-Localizacao'),
			$('#Jumbo-Contato')
		];

		if (stringNextTab === "Localização") { 
			stringNextTab = "Localizacao";
		};

		for (var i = 0; i < stringTest.length; i++) {
			if (stringTest[i].selector === "#Jumbo-" + stringNextTab) {
				currentJumbo.removeClass('jumbotron-active');
				stringTest[i].addClass('jumbotron-active'); 
			};
		}
	});

	$('#link-produtos').click(function(){
		$('.jumbotron-active').removeClass('jumbotron-active');
		$('#Jumbo-Produtos').addClass('jumbotron-active');

		$('.active-tabs').removeClass('active-tabs');
		$('#nav-produtos').addClass('active-tabs'); 
	});
	
	$('#link-contato').click(function(){
		$('.jumbotron-active').removeClass('jumbotron-active');
		$('#Jumbo-Contato').addClass('jumbotron-active');

		$('.active-tabs').removeClass('active-tabs');
		$('#nav-contato').addClass('active-tabs'); 
	});			
}
$(document).ready(main);