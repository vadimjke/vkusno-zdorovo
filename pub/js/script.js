window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var navik = document.getElementById("navbar");
    // var shapochka = document.getElementById("shapochka");
    var logoz = document.getElementById("logoz");
    var glavnaya = document.getElementById("glavnaya");
    var bar = document.getElementById("vadikscrollbar");
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        navik.classList.add("fixed-nav-bar");
        // logoz.style.height = "50px";
        // shapochka.classList.add("hidden");
        bar.classList.add("s-block");
        bar.classList.remove("s-none");
    } else {
        navik.classList.remove("fixed-nav-bar");
        navik.style.padding = "0";
        // logoz.style.height = "80px";
        // shapochka.classList.remove("hidden");
        glavnaya.classList.add("active");
        bar.classList.add("s-none");
        bar.classList.remove("s-block");
    }
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

function VadikDenekFunc() {
    var rng = document.getElementById("denek");
    var p = document.getElementById("denek-label");


    var a2 = document.getElementById("a2")

    switch (rng.value) {
        case '1':
            p.innerHTML = "Понедельник";
            $("#a1").text("Салат Греческий");
            $("#a2").text("Суп-лапша куриный");
            $("#a3").text("Бифштекс с грибами и сыром");
            $("#a4").text("Картофельное пюре со шпинатом");
            $("#a5").text("Компот фруктовый");
            $("#a6").text("Хлеб");

            $("#b1").text("Салат помидоры с сыром");
            $("#b2").text("Борщ зеленый");
            $("#b3").text("Курица по-французски");
            $("#b4").text("Картофельное пюре");
            $("#b5").text("Компот фруктовый");
            $("#b6").text("Хлеб");

            $("#c1").text("Салат с ветчиной и кукурузой");
            $("#c2").text("Борщ зеленый");
            $("#c3").text("Говядина жареная с грибами и луком");
            $("#c4").text("Картофельное пюре");
            $("#c5").text("Компот фруктовый");
            $("#c6").text("Хлеб");

            break;
        case '2':
            p.innerHTML = "Вторник";

            $("#a1").text("Салат Крабовый");
            $("#a2").text("Суп гороховый с копчеными колбасками");
            $("#a3").text("Ростбиф из говядины с соусом деми-глас");
            $("#a4").text("Имбирные овощи");
            $("#a5").text("Компот ягодный");
            $("#a6").text("Хлеб");

            $("#b1").text("Малосольные огурцы");
            $("#b2").text("Суп-лапша куриный  ");
            $("#b3").text("Мясной рулет с грибами, сливочный соус");
            $("#b4").text("Гречка");
            $("#b5").text("Компот ягодный");
            $("#b6").text("Хлеб");

            $("#c1").text("Салат Мимоза");
            $("#c2").text("Суп-лапша куриный");
            $("#c3").text("Свиной бок запеченный в печи, сырный соус");
            $("#c4").text("Рис с овощами");
            $("#c5").text("Компот ягодный");
            $("#c6").text("Хлеб");

            break;
        case '3':
            p.innerHTML = "Среда";
            $("#a1").text("Салат из томатов со сметаной и базиликом");
            $("#a2").text("Борщ по-домашнему со сметаной");
            $("#a3").text("Свинина на шпажке с овощами, чесночный соус");
            $("#a4").text("Картофель запеченный");
            $("#a5").text("Морс ягодный");
            $("#a6").text("Хлеб");

            $("#b1").text("Салат помидоры с сыром");
            $("#b2").text("Борщ зеленый");
            $("#b3").text("Курица по-французски");
            $("#b4").text("Картофельное пюре");
            $("#b5").text("Компот фруктовый");
            $("#b6").text("Хлеб");

            $("#c1").text("Салат из печеной свеклы с сыром фета и орехами");
            $("#c2").text("Солянка домашняя");
            $("#c3").text("Куриное филе с беконом и сыром");
            $("#c4").text("Гречка с грибами");
            $("#c5").text("Компот ягодный");
            $("#c6").text("Хлеб");

            break;
        case '4':
            p.innerHTML = "Четверг";

            $("#a1").text("Салат Оливье с ветчиной");
            $("#a2").text("Суп Машхурда");
            $("#a3").text("Паста с курицей и беконом");
            $("#a4").text("Компот фруктовый");
            $("#a5").text("Хлеб");
            $("#a6").text("");

            $("#b1").text("Салат Корейский с кунжутом");
            $("#b2").text("Кукурузный крем-суп с сыром");
            $("#b3").text("Рыбная котлета, соус чесночный");
            $("#b4").text("Картофель отварной ");
            $("#b5").text("Компот ягодный");
            $("#b6").text("Хлеб");

            $("#c1").text("Салат с жареными грибами и свежими овощами");
            $("#c2").text("Кукурузный крем-суп с сыром");
            $("#c3").text("Рыба с овощами в сливочном соусе");
            $("#c4").text("Картофель айдахо (печеный с чесноком и розмарином)");
            $("#c5").text("Компот ягодный");
            $("#c6").text("Хлеб");
            break;
        case '5':
            p.innerHTML = "Пятница";

            $("#a1").text("Салат из свежих овощей со сметаной");
            $("#a2").text("Суп сырный соте с копчеными колбасками");
            $("#a3").text("Говядина по-строгановски");
            $("#a4").text("Картофель томленый в сливках с травами");
            $("#a5").text("Компот ягодный");
            $("#a6").text("Хлеб");

            $("#b1").text("Салат из свежих овощей со сметаной");
            $("#b2").text("Рассольник");
            $("#b3").text("Чахохбили из курицы");
            $("#b4").text("Рис с овощами");
            $("#b5").text("Компот фруктовый");
            $("#b6").text("Хлеб");

            $("#c1").text("Салат из свежих овощей со сметаной");
            $("#c2").text("Рассольник");
            $("#c3").text("Куриные колбаски, чесночный соус");
            $("#c4").text("Лапша отварная");
            $("#c5").text("Компот фруктовый");
            $("#c6").text("Хлеб");
            break;
        case '6':
            p.innerHTML = "Суббота";

            $("#a1").text("Салат с курицей и беконом");
            $("#a2").text("Суп картофельный с яйцом");
            $("#a3").text("Скоблянка из свинины с солеными огурцами и сладким перцем");
            $("#a4").text("Рис с овощами");
            $("#a5").text("Компот фруктовый");
            $("#a6").text("Хлеб");

            $("#b1").text("Салат с маринованными грибами и картофелем");
            $("#b2").text("Шурпа из курицы ");
            $("#b3").text("Биточки из курицы со сметанным соусом");
            $("#b4").text("Макароны отваные");
            $("#b5").text("Компот фруктовый");
            $("#b6").text("Хлеб");

            $("#c1").text("Салат с маринованными грибами и картофелем");
            $("#c2").text("Шурпа из курицы");
            $("#c3").text("Куриное бедро запеченое");
            $("#c4").text("Азиатский рис");
            $("#c5").text("Компот фруктовый");
            $("#c6").text("Хлеб");
            break;
        case '7':
            p.innerHTML = "Воскресенье";

            $("#a1").text("Грибы по-корейски");
            $("#a2").text("Суп Харчо");
            $("#a3").text("Куриный шницель, сырный соус");
            $("#a4").text("Макароны с овощами");
            $("#a5").text("Компот фруктовый");
            $("#a6").text("Хлеб");

            $("#b1").text("Салат капустный со свежим огурцом");
            $("#b2").text("Суп-лапша грибной");
            $("#b3").text("Поджарка из свинины");
            $("#b4").text("Картофельное пюре");
            $("#b5").text("Компот фруктовый");
            $("#b6").text("Хлеб");

            $("#c1").text("Салат капустный со свежим огурцом");
            $("#c2").text("Суп-лапша грибной");
            $("#c3").text("Азу по-татарски из говядины");
            $("#c4").text("Картофельное пюре");
            $("#c5").text("Компот фруктовый");
            $("#c6").text("Хлеб");
            break;
    }
}



/* Фикс ДжейКвери визибл функции */
(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function(partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

/* Добавляем анимацию при скролле */

$(window).scroll(function(event) {


    /* Карточка столовой полного цикла */
    $(".card1").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("animate__animated animate__fadeInLeft");
        } else {
            el.removeClass("animate__animated animate__fadeInLeft");
        }
    });

    /* Карточка столовой раздаточного цикла */
    $(".card2").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("animate__animated animate__fadeIn");
        } else {
            el.removeClass("animate__animated animate__fadeIn");
        }
    });


    /* Карточка столовой доготовочного цикла */

    if (/Mobi|Android/i.test(navigator.userAgent)) {

        $(".card3").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("animate__animated animate__fadeInLeft");
            } else {
                el.removeClass("animate__animated animate__fadeInLeft");
            }
        });
    } else {

        $(".card3").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("animate__animated animate__fadeInRight");
            } else {
                el.removeClass("animate__animated animate__fadeInRight");
            }
        });
    }

    /* Заголовок в меню */
    $(".menu_header").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("animate__animated animate__fadeIn");
        } else {
            el.removeClass("animate__animated animate__fadeIn");
        }
    });

    /* Заголовок в столовой */
    $(".kitchen_header").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("animate__animated animate__fadeIn");
        } else {
            el.removeClass("animate__animated animate__fadeIn");
        }
    });

    /* Заголовок в Производство */
    $(".production_header").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("animate__animated animate__fadeIn");
        } else {
            el.removeClass("animate__animated animate__fadeIn");
        }
    });

    /* Заголовок в Наши преимущества */
    $(".about_header").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("animate__animated animate__fadeIn");
        } else {
            el.removeClass("animate__animated animate__fadeIn");
        }
    });

    /* Заголовок в Наши преимущества */
    $(".contacts-header").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("animate__animated animate__fadeInLeft");
        } else {
            el.removeClass("animate__animated animate__fadeInLeft");
        }
    });

    /* Заголовок в Наши преимущества */
    $(".sec6-header").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("animate__animated animate__fadeInLeft");
        } else {
            el.removeClass("animate__animated animate__fadeInLeft");
        }
    });





});







/* AJAX отправка данных через форму */

$('#knopka').click(function(event) {
    event.preventDefault();
    var formName = $('#name').val();
    var formPhone = $('#phone').val();
    var formComment = $('#comment').val();

    $.ajax('/send/', {
        type: 'POST', // http method
        data: { name: formName, phone: formPhone, comment: formComment }, // data to submit
        success: function(data, status, xhr) {
            $('#modalForm').hide();
            $('#modal').html("Ваше сообщение успешно отправлено. Спасибо!");
        },
        error: function(jqXhr, textStatus, errorMessage) {
            $('#modalForm').addClass('vkusno-hide');
            $('#modal').html('Ошибка' + errorMessage);
        }
    });
});