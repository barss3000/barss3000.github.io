$(document).ready(function(){

// часть скрипт файла взтого с сайта https://denis-creative.com/jquery-tabs/
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
            });

    // скрипт переключения контента в карточке
    function toggleSlide (item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide ('.catalog-item__link');
    toggleSlide ('.catalog-item__back');

    // Modal script

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    // $('.overlay').on('click', function () {
    //     $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    // });
    // $('.button_mini').on('click', function() {
    //     $('.overlay, #order').fadeIn('slow');
    // });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

// Начало кода до оптимизации
    // // $('.fform').validate();
    // $('#consultation-form').validate();
    // $('#consultation form').validate({
    //     rules: {
    //         name: {
    //             required: true,
    //             minlength: 2,
    //         },
    //         phone: "required",
    //         email: {
    //             required: true,
    //             email: true,
    //         }
    //     },
    //     messages: {
    //         name: {
    //             required: "Ну ка, введи имя!",
    //             minlength: jQuery.validator.format("Введите {0} символА")
    //         },
    //         phone: "И добавь номерок тела!",
    //         email: {
    //             required: "Без почты ни как!",
    //             email: "Почту правильно введи!",
    //         }
    //     }
    // });
    // $('#order form').validate();

// оптимизированный код валидации
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                phone: "required",
                email: {
                    required: true,
                    email: true,
                }
            },
            messages: {
                name: {
                    required: "Ну ка, введи имя!",
                    minlength: jQuery.validator.format("Введите {0} символА")
                },
                phone: "И добавь номерок тела!",
                email: {
                    required: "Без почты ни как!",
                    email: "Почту правильно введи!",
                }
            }
        });
    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    // масска ввода телефонного номера
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    //скрипт дляотправление писем с сайта через SMTP сервер
    $('form').submit(function(e) {        // выбираем все формы  submit-подтверждение заполнения формы функция с аргументом event
        e.preventDefault();               // отмена дефолтного поведения браузера
        $.ajax({                          // применение технологии ajax и настройка работы
            type: "POST",                 // тип отправка
            url: "mailer/smart.php",      // устанавливаем обработчика операции
            data: $(this).serialize()     // выбор данных для передачи и их подготовка для сервера
        }).done(function() {
            $(this).find("input").val(""); // функция очищения инпутов после отправки
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');     // очистка всех форм
        });
        return false;
    });

    //smooth scroll and page up
        //pageup     появление значка для скролла вверх 
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

        //универсальный скрипт для плавного скрола по сайту
    $("a[href=#up]").click(function(){   // "a[href^='#']" такая запись указывает на все ссылки а надо только на одну
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    //  Карусель сделана на основе кода tiny-slider
    const slider = tns ({
        container: '.carousel__inner',
        items: 1,
        autoplay: false,
        controls: false,
        nav: false,
        autoHeight: true,

    });

    document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev');
    });

    document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next');
    });

    // $(function(){
    //     new WOW().init();
    // });

    // $(window).on('load', function(){
    new WOW().init();
    // });

});











