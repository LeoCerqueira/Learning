$(document).ready(function () {
    $('.menu-icon').on('click', function(e) {
        e.preventDefault();
        $('menu').toggleClass('activated');
        $('header').toggleClass('activated');
        $('main').toggleClass('activated');
        $('footer').toggleClass('activated');



    });
});