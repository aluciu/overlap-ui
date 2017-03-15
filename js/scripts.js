$(document).ready( function() {

  $('.float-label .float-input').focusout(function(){
    var text_val = $(this).val();

    if(text_val === "") {
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }
  });


  $( '.search-toggle' ).on( 'click', function() {
  	$( '.site-search' ).addClass('visible');
  	$( '.input-search' ).focus();
	});

  $( '.input-search' ).on( 'blur', function() {
  	$( '.site-search' ).removeClass('visible');
	});


	$('.menu-toggle').on('click', function() {
		$('.site-nav').toggleClass('visible');
		$('.menu-label').toggle();
	});

  // display total images on init
  $('.product-slider').on('init', function(slick){
    var total = $(this).find('.slide').length;
    var counter = $(this).siblings('.counter');
    counter.html('1/' + total);
  });

  // slider on list products page
  $('.product-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  });

  // create custom next button
  $('.slide-next').on('click', function() {
    $(this).siblings('.product-slider').slick('slickNext');
	});


  // change current on counter
  $('.product-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    var total = $(this).find('.slide').length;
    var counter = $(this).siblings('.counter');
    counter.html( (currentSlide+1) + '/' + total );
  });
});

// Init Foundation
$(document).foundation();
