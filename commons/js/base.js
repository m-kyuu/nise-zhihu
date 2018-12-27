$(document).ready(function() {
    // TOPに戻るボタン
    $(window).scroll(function() {
        if($(this).scrollTop() > 300) {
            $('.top').fadeIn();
        }else{
            $('.top').fadeOut();
        };
    });

    $(document).on('click', '.top-btn', function() {
        $('html,body').animate({
            scrollTop: 0}, 300);
    });

});