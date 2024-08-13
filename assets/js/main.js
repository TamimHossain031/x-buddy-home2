(function ($) {
	"use strict";

	$('.testimonial_slider').owlCarousel({
		loop:true,
		enter: true,		
		margin:10,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

	$('.team_wrap').owlCarousel({
		loop:true,
		enter: true,				
		margin:10,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:2
			},
			800:{
				items:4
			},
			1000:{
				items:6
			}
		}
	});
	/*------------------------------------------
	= Accordion Box
	-------------------------------------------*/
	if ($(".accordion_box").length) {
		$(".accordion_box").on("click", ".acc-btn", function () {
			var outerBox = $(this).parents(".accordion_box");
			var target = $(this).parents(".accordion");
			

			if ($(this).next(".acc_body").is(":visible")) {
				$(this).removeClass("active");
				$(this).next(".acc_body").slideUp(300);
				$(outerBox).children(".accordion").removeClass("active-block");
			} else {
				$(outerBox).find(".accordion .acc-btn").removeClass("active");
				$(this).addClass("active");
				$(outerBox).children(".accordion").removeClass("active-block");
				$(outerBox).find(".accordion").children(".acc_body").slideUp(300);
				target.addClass("active-block");
				$(this).next(".acc_body").slideDown(300);
			}
		});
	}


})(jQuery);

function addCopyright(){
	let copyright = document.querySelector('.copyright');

	let getYear = new Date().getFullYear();
	
	let copyrightContext = `Copyright © ${getYear} Pets Zootopia. All rights reserved.`;
	
	copyright.innerHTML = copyrightContext;
}

addCopyright();
