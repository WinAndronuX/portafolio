$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 56) { /* Ajusta este valor según la distancia de scroll deseada */
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});
