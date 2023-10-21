

//loading
$(document).ready(function () {
    $("#element").introLoader();
});

$(document).ready(function () {
    //Set the carousel options
    $('#quote-carousel').carousel({
        pause: true,
        interval: 4000,
    });
});

var current = 1; //keeps track of the current div
var height = $('.roles').height(); //the height of the roles div
var numberDivs = $('.roles').children().length; //the number of children of the roles div
var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
setInterval(function () {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2000);

$("document").ready()
{
    $("#AboutLink").click(function () {

        $('html, body').animate({ scrollTop: $('#about').position().top }, 'slow');
        $("li:nth-child(2)").addClass("active");
        $("li:first").removeClass("active");
        $("li:nth-child(3)").removeClass("active");
        $("li:nth-child(4)").removeClass("active");
        $('#about').focus();
               
    });

    $("#AwardsLink").click(function () {
        $('html, body').animate({ scrollTop: $('#awards').position().top }, 'slow');
        $('#awards').focus();
        $("li:nth-child(4)").addClass("active");
        $("li:first").removeClass("active");
        $("li:nth-child(3)").removeClass("active");
       
    });

    $("#HomeLink").click(function () {
        $('html, body').animate({ scrollTop: $('#home').position().top }, 'slow');
        $("li:first").addClass("active");
        $("li:nth-child(2)").removeClass("active");
        $("li:nth-child(3)").removeClass("active");
        $("li:nth-child(4)").removeClass("active");
        $('#home').focus();
    });

    $("#RandomLink").click(function () {
        $('html, body').animate({ scrollTop: $('#randomFacts').position().top }, 'slow');
        $("li:nth-child(3)").addClass("active");
        $("li:nth-child(2)").removeClass("active");
        $("li:first").removeClass("active");
        $("li:nth-child(4)").removeClass("active");
        $('#randomFacts').focus();
    });
}
