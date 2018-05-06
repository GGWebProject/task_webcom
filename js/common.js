$(document).ready(function(){
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
    //убираем событие при клике на имя фото
    $('.photo-name').click(function () {
        return false;
    });


});