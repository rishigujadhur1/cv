/* Fix for orienation change on iOS */

(function(doc) {

	var addEvent = 'addEventListener',
	    type = 'gesturestart',
	    qsa = 'querySelectorAll',
	    scales = [1, 1],
	    meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}

	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		fix();
		scales = [.25, 1.6];
		doc[addEvent](type, fix, true);
	}

}(document));

/* Hide Safari on Load */

window.addEventListener("load",function() {
  // Set a timeout...
  setTimeout(function(){
    // Hide the address bar!
    window.scrollTo(0, 1);
  }, 0);
});

/* Masonry */

$(function(){
	$('#speaker-list').masonry({
	  itemSelector: 'article',
	  columnWidth: 1
	});
});

/* Fancybox */

$(function(){
	$(".readmore").fancybox({
		maxWidth	: 800,
		maxHeight	: 800,
		fitToView	: true,
		width		: '98%',
		height		: '98%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

/* iPhone Menu Toggle */

$(function(){
	var modWidth = 700;
	$('#toggle').click(function(){
		$('nav ul').fadeToggle(200,"linear"); 	
	});
	$(window).bind('resize', function(){
    	if($(this).width() < modWidth)
	        $('nav ul a').click(function(){
		      $('nav ul').fadeOut(200,"linear");  
	        })
	   else 
       	$('div.wrap').css('left', '50%');
     }).resize();
});

/* Playing with Fading logo */

$(function(){
	$(this).scrollTop(0);
	$('#intro').bind('inview', function (event, visible) {
		if (visible !== true) {
		$('h1').fadeOut(200,'linear');
		} else {
		$('h1').fadeIn(200,'linear');
		}
	})
});

/* Nav and Scrolling */

$(function(){
	$('nav a[href*=#],a#toggle[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top + 1;
                $('html,body').animate({scrollTop: targetOffset}, 2000);   
                return false; 
            } 
        } 
    })
});    
    
/* Schedule Toggle */

$(function(){
	$("#schedule li").hover(function(){
		$(this).find(".cover").stop(true, true).fadeToggle(200,"linear");
	});
});

$(function(){
		carouselInstance = $(".slide-pane").touchCarousel({				
			itemsPerPage: 1,				
			scrollbar: true,
			scrollbarAutoHide: false,
			pagingNav: false,
			snapToItems: true,
			scrollToLast: false,
			useWebkit3d: false,				
			loopItems: false
		});				
	});

/* FitVidJS */

$("#video-wrap").fitVids();

