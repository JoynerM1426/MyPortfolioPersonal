$(document).ready(function() {

	
	/* Navigation burger onclick side navigation show */
	$('.burger-container').on('click', function() {
		$('.main-navigation').toggle('slow');

		if($('#myBtn').hasClass('change')) {
			$('body').addClass('stop-scroll');
		} else {
			$('body').removeClass('stop-scroll');
		}
	});


	/* About me slider */
	$('.about-me-slider').slick({
		slidesToShow: 1,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>'
	});

	/* Blog slider */
	$('.blog-slider').slick({
		slidesToShow: 2,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});
	
});



var counta = 0;

$(window).scroll(function(e){


	/* Onscroll number counter */
	var statisticNumbers = $('.single-count');
	if(statisticNumbers.length) {
		var oTop = statisticNumbers.offset().top - window.innerHeight;
		if (counta == 0 && $(window).scrollTop() > oTop) {
			$('.count').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},

				{
					duration: 2000,
					easing: 'swing',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
					}
				});
			});
			counta = 1;
		}
	}

});

// sendInfo

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_o6wk6op';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      ;
    }, (err) => {
      btn.value = 'Send Email';
      ;
    });
});
// darkmode
const bdark = document.querySelector('#bdark')
const body = document.querySelector('body')
load()
bdark.addEventListener('click', e => {
	body.classList.toggle('darkmode');
	store(body.classList.contains('darkmode'))
})
function load(){
	const darkmode = localStorage.getItem('darkmode')

	if(!darkmode){
		store('false');
	}else if(darkmode == 'true'){
		body.classList.add('darkmode')
	}

}
function store(value){
	localStorage.setItem('darkmode', value)
}
// change lenguaje
function changeLanguage() {
  const espanolElements = document.querySelectorAll('.espanol');
  const inglesElements = document.querySelectorAll('.ingles');
  
  espanolElements.forEach(element => element.classList.toggle('hidden'));
  inglesElements.forEach(element => element.classList.toggle('hidden'));
}
