$(document).ready(function () {

    $('.loadingDiv').animate({
         opacity: '1'
    });

    $('.loadingDiv').animate({
        rotation: 720
    }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotateY(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotateY(' + now + 'deg)');
            $(this).css('transform', 'rotateY(' + now + 'deg)');
        },
        duration: 3000,
        complete: function () {
            $('#loading').fadeOut();
            $('main').fadeIn();
        }
    }, 'easeInOutQuint');
});