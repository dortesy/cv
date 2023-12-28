$(function() {




$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 104) {
        $('.mid-header-wrap').addClass('sticky-menu');
    } else {
        $('.mid-header-wrap').removeClass('sticky-menu');
    }
});

var executed = false;



let h2 = '<h2 class="preloader-header">Horizon Global</h2>';
let prediv = '<div class="preloader-h"></div>'
$('.pace-running').prepend(prediv);
$('.preloader-h').append(h2);

$("[data-fancybox]").fancybox({
	thumbs : {
		smallBtn : true
	}
});

  

    Pace.on('hide', function(){
      $('#wrap').css("display", "block");
      $('.preloader-header').remove();
      $('.preloader-h').remove();

$('.news-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        slidesToScroll: 1,
        slidesToShow: 1

      }
    },
    {
      breakpoint: 1025,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },


  ]
});
    });

startSlide = setInterval(function() {
	if($('.active-hero').next().length) {
		var el = $('.active-hero').next().addClass('active-hero');
	}
	else {
		var el = $('.hero').first().addClass('active-hero');
	}

	el.siblings('.hero').removeClass('active-hero')
	let bgNum = el.index();
	//$('.header-bg').css('background-image', `url(./img/slide${bgNum}.jpg)`)
  $(`.bg-slide${bgNum}`).siblings().removeClass('bg-active');
  $(`.bg-slide${bgNum}`).addClass('bg-active');
	$('.slider-buttons ul li').siblings().removeClass('active-slide');
	$(`.slider-buttons ul li:nth-child(${bgNum})`).addClass('active-slide');
	

}, 7000);




$('.load-bg').css('animation-duration', '2s');



	$('.slider-buttons ul li').on('click', function(e) {
		$(this).siblings().removeClass('active-slide');
		$(this).addClass('active-slide');
		let nchild = $(this).index()+2;
    let bgac = $(this).index()+1;
		let bg = $(this).index()+1
		$('.hero').removeClass('active-hero');
		$(`.hero:nth-child(${nchild})`).addClass('active-hero');
		//$('.header-bg').css('background-image', `url(./img/slide${bg}.jpg)`);
    $(`.bg-slide${bgac}`).siblings().removeClass('bg-active');
    $(`.bg-slide${bgac}`).addClass('bg-active');
    console.log(`.bg-slide${nchild}`);
		$('header .hero .left-hero-block span').css('animation-delay', '0.1s');
		$('header .hero .left-hero-block h1').css('animation-delay', '0.2s');
		$('header .hero .left-hero-block p').css('animation-delay', '0.5s');
		$('header .hero .left-hero-block a').css('animation-delay', '0.6s');
		$('header .hero .right-hero-block ul li:nth-child(1)').css('animation-delay', '0.7s');
		$('header .hero .right-hero-block ul li:nth-child(2)').css('animation-delay', '0.8s');
		$('header .hero .right-hero-block ul li:nth-child(3)').css('animation-delay', '0.9s');
	})


	$('.circles span').on('click', function(e) {
		$(this).siblings().removeClass('active-circle');
		$(this).addClass('active-circle');
		let nchild = $(this).index()+2;
		$('.news-list').removeClass('active-news');
		$(`.news-list:nth-child(${nchild})`).addClass('active-news');
	})

	  $('.phone-input').mask('+7 (999) 999 9999');

function addAnimation (slideName) {
	$(slideName).viewportChecker({
     classToAdd: '',
     offset: 100,
     callbackFunction: function() {
  //    	$(slideName + ' .slide .slide-info h2').addClass('animated fadeInUp')
		// $(slideName + ' .slide .slide-info .countries').children().addClass('visible animated fadeIn');

		// $(slideName + ' .slide .slide-info .countries li:nth-child(1)').css('animation-delay', '0.7s');
		// $(slideName + ' .slide .slide-info .countries li:nth-child(2)').css('animation-delay', '0.8s');
		// $(slideName + ' .slide .slide-info .countries li:nth-child(3)').css('animation-delay', '0.9s');
		// $(slideName + ' .slide .slide-info .countries li:nth-child(4)').css('animation-delay', '1s');
		// $(slideName + ' .slide .slide-info .countries li:nth-child(5)').css('animation-delay', '1.1s');

		$(slideName + ' .slide .slide-info span').addClass('visible animated fadeIn');
		$(slideName + ' .slide .slide-info span').css('animation-delay', '1.2s');

		$(slideName + ' .slide .slide-info .requires').children().addClass('visible animated fadeIn');
		$(slideName + ' .slide .slide-info .requires li:nth-child(1)').css('animation-delay', '1.3s');
		$(slideName + ' .slide .slide-info .requires li:nth-child(2)').css('animation-delay', '1.4s');
		$(slideName + ' .slide .slide-info .requires li:nth-child(3)').css('animation-delay', '1.5s');
		$(slideName + ' .slide .slide-info .requires li:nth-child(4)').css('animation-delay', '1.5s');	
		$(slideName + ' .slide .slide-info .requires li:nth-child(5)').css('animation-delay', '1.55s');


		$(slideName + ' .slide .slide-info .consul p').addClass('visible animated fadeInUp');
		$(slideName + ' .slide .slide-info .consul p:nth-child(1)').css('animation-delay', '1.6s')
		$(slideName + ' .slide .slide-info .consul p:nth-child(2)').css('animation-delay', '1.7s')

		$(slideName + ' .slide .slide-info .csl-button').addClass('visible animated bounceInRight');
		$(slideName + ' .slide .slide-info .csl-button').css('animation-delay', '1.8s');

		$(slideName + ' .slide .slide-img .abs-img .orange-block').addClass('visible animated fadeInLeft slower');
		$(slideName + ' .slide .slide-img .abs-img .orange-block').css('animation-delay', '0.1s');
		$(slideName + ' .slide .slide-img .abs-img img').addClass('visible animated fadeInLeft slower');
		$(slideName + ' .slide .slide-img .abs-img img').css('animation-delay', '0.6s');

		let  gap = (window.innerWidth - 1170) / 2 + $(slideName +  ' .slide .slide-info').width()
		let sumGap = window.innerWidth - gap

		$(slideName + ' .slide .slide-img .abs-img').css('height', $(slideName + ' .slide').height());
		$(slideName + ' .slide .slide-img .abs-img').css('width', sumGap);



		//$(slideName + ' .slide .slide-img .abs-img .orange-block').css('height', $(slideName + ' .slide .slide-img .abs-img img').height());
		$(slideName + ' .slide .slide-img .abs-img .orange-block').css('width', $(slideName + ' .slide .slide-img .abs-img img').width());
     },
});
}


addAnimation('.carib');

addAnimation('.euro');

addAnimation('.euro-life');


function onSlide(sldname) {
	$(sldname + ' .slide .countries li').on('click', function(){
		let nchild = $(this).index()+1;
		$(sldname + ' .slide .countries').children().removeClass('active-country');
		$(`${sldname} .slide .countries li:nth-child(${nchild})`).addClass('active-country');
		
		$(sldname + ' .slide').removeClass('active-con');
		$(`${sldname} .container .slide:nth-child(${nchild})`).addClass('active-con');
		$(`${sldname} .slide:nth-child(${nchild}) .slide-img .abs-img`).css('height', $(`${sldname} .slide:nth-child(${nchild})`).height());
		//$(`${sldname} .slide:nth-child(${nchild}) .slide-img .abs-img .orange-block`).css('height', $(`${sldname} .slide:nth-child(${nchild}) .slide-img .abs-img img`).height());
		//$(`${sldname} .slide:nth-child(${nchild}) .slide-img .abs-img .orange-block`).css('width', $(`${sldname} .slide:nth-child(${nchild}) .slide-img .abs-img img`).width());

	})
}
	
onSlide('.carib');
	
onSlide('.euro');

onSlide('.euro-life');


$('.mobile-bar').on('click', function(){
	$('.overlay').css("width", '100%');
})

$('.close-button').on('click', function(){
	$('.overlay').css("width", '0');
})






$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//hide it when clicking anywhere else except the popup and the trigger
$(document).on('click touch', function(event) {
  if (!$(event.target).parents().addBack().is('.popup_button')) {
    $('.popup').hide('slow');
  }
});
 
// Stop propagation to prevent hiding "#tooltip" when clicking on it
$('.popup').on('click touch', function(event) {
  event.stopPropagation();
});



$('[data-fancybox').fancybox({
    smallBtn : true,
    toolbar  : false,
    btnTpl   : {
      smallBtn : '<button data-fancybox-close="" class="fancybox-button fancybox-button--close" title="Close"><span></span></button>'
    }
});

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [55.75186, 37.59750],
            zoom: 14
        }),

        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.75186, 37.59750]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Наш офис',
                balloonContent: 'Меня можно перемещать'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'twirl#redStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),

        // Создаем метку с помощью вспомогательного класса.
        myPlacemark1 = new ymaps.Placemark([55.751862, 37.597501], {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            iconContent: '1',
            balloonContent: 'Балун',
            hintContent: 'Стандартный значок метки'
        }, {
            // Опции.
            // Стандартная фиолетовая иконка.
            preset: 'twirl#violetIcon'
        }),

        myPlacemark2 = new ymaps.Placemark([55.751862, 37.597501], {
            // Свойства.
            hintContent: 'Собственный значок метки'
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: '/maps/doc/jsapi/2.x/examples/images/myIcon.gif',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42]
        });
    
    myMap.controls.add('smallZoomControl');
    // Добавляем все метки на карту.
    myMap.geoObjects
       
        .add(myPlacemark2)
        .add(myGeoObject);
}

$('.office-next').on('click', function(){
  
  
  if($('.office-image .active-office').next('img').length) {
    $('.office-image .active-office').next('img').addClass('active-office');
    $('.office-image .active-office').prev('img').removeClass('active-office');
  } 
  else {
     $('.office-image').children().removeClass('active-office');
     $('.office-image img').first().addClass('active-office');
     
  }
})


$('.office-prev').on('click', function(){
  
  
  if($('.office-image .active-office').prev('img').length) {
    $('.office-image .active-office').prev('img').addClass('active-office');
    $('.office-image .active-office').next('img').removeClass('active-office');
   
  } 
  else {
     $('.office-image').children().removeClass('active-office');
     $('.office-image img').last().addClass('active-office');
    
  }
})


startSlideOffice = setInterval(function() {
  if($('.office-image .active-office').next('img').length) {
    $('.office-image .active-office').next('img').addClass('active-office');
    $('.office-image .active-office').prev('img').removeClass('active-office');
  } 
  else {
     $('.office-image').children().removeClass('active-office');
     $('.office-image img').first().addClass('active-office');
     
  }
  

}, 3000);




});


