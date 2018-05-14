$(document).ready(function(){
    chengeHeader();

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
    });

    // добавление имя фотографии в форму
    $('#photo').change(function(){
        var file = $(this).val().split('\\');
        var fileName = file[file.length - 1];
        $(this).parent().find('.photo-name').html(fileName);
    });

});

function chengeHeader() {
    if ($(window).scrollTop() > 0) {
        $('header').addClass('header-scroll');
        $('main').addClass('main-scroll');
    } else {
        $('header').removeClass('header-scroll');
        $('main').removeClass('main-scroll');
    }
}


// var sectionArray = $('main');
// console.log($('main').children().eq(2));
// console.log($('main').children().eq(2).position().top);
// console.log($('main').children().eq(2).outerHeight());
// console.log($('main').children().eq(2).offset());
// console.log($(window).scrollTop());
// scrollBar();
//
// function scrollBar() {
//     console.log(sectionArray);
//
// }

var countSec = $('main').prop('childElementCount');
console.log(countSec);
for(var i = 0; i <= countSec; i++){
    console.log($('main').children().eq(i));
    console.log(i);
}


$(window).on("scroll", function() {
    chengeHeader();
    console.log($(window).scrollTop());
});