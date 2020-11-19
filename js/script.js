window.onscroll = function () {
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

  switch (rng.value) {
    case '1':
      p.innerHTML = "Понедельник";
      break;
    case '2':
      p.innerHTML = "Вторник";
      break;
    case '3':
      p.innerHTML = "Среда";
      break;
    case '4':
      p.innerHTML = "Четверг";
      break;
    case '5':
      p.innerHTML = "Пятница";
      break;
    case '6':
      p.innerHTML = "Суббота";
      break;
    case '7':
      p.innerHTML = "Воскресенье";
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
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
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
    }
    else {
      el.removeClass("animate__animated animate__fadeInLeft");
    }
  });

  /* Карточка столовой раздаточного цикла */  
  $(".card2").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("animate__animated animate__fadeIn"); 
    }
    else {
      el.removeClass("animate__animated animate__fadeIn");
    }
  });


  /* Заголовок в меню */
  $(".menu_header").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("animate__animated animate__fadeIn"); 
    }
    else {
      el.removeClass("animate__animated animate__fadeIn");
    }
  });

  /* Заголовок в столовой */
  $(".kitchen_header").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("animate__animated animate__fadeIn"); 
    }
    else {
      el.removeClass("animate__animated animate__fadeIn");
    }
  });

  /* Заголовок в Производство */
  $(".production_header").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("animate__animated animate__fadeIn"); 
    }
    else {
      el.removeClass("animate__animated animate__fadeIn");
    }
  });

  /* Заголовок в Наши преимущества */
  $(".about_header").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("animate__animated animate__fadeIn"); 
    }
    else {
      el.removeClass("animate__animated animate__fadeIn");
    }
  });

    /* Заголовок в Наши преимущества */
  $(".contacts-header").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("animate__animated animate__fadeInLeft"); 
    }
    else {
      el.removeClass("animate__animated animate__fadeInLeft");
    }
  });

      /* Заголовок в Наши преимущества */
      $(".sec6-header").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass("animate__animated animate__fadeInLeft"); 
        }
        else {
          el.removeClass("animate__animated animate__fadeInLeft");
        }
      });
  
  /* Карточка столовой доготовочного цикла */  
  $(".card3").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("animate__animated animate__fadeInRight"); 
    }
    else {
      el.removeClass("animate__animated animate__fadeInRight");
    }
  });
  


});