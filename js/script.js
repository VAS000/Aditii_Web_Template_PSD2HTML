$(function(){
    var navbar = $('.navbar');
    var header = $('.header');
    
    // Adjust Slider size to full window height 
    $('.slider').height($(window).height() - navbar.height() - header.height());

    $(window).resize(function(){
        $('.slider').height($(window).height() - navbar.height() - header.height());
        console.log($(window).width());
    });
    // Trigger BxSlider 

    $('.bxslider').bxSlider({
        minSlides: 2,
        maxSlides: 3,
        pager: false,
        nextSelector: '.slider-next',
        prevSelector: '.slider-prev',
        nextText: '<i class="glyphicon glyphicon-chevron-right arrow-right"></i>',
        prevText: '<i class="glyphicon glyphicon-chevron-left arrow-left"></i>',
        slideWidth: $('.bxslider > div').width(),
        slideMargin: 10,
        pager: true
    });
    /*
    $('button').hover(function(){
        var color = $(this).css('color');
        var bg = $(this).css('backgroundColor');
        $(this).css({
            color: bg,
            backgroundColor: color,
            border: '1px solid ' . bg
        });
    });
    */
    // For debug only
    //$('.slider').hide();
});