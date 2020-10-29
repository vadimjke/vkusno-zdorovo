
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navik = document.getElementById("navbar");
  var shapochka = document.getElementById("shapochka");
  var logoz = document.getElementById("logoz");
  var glavnaya = document.getElementById("glavnaya");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    navik.classList.add("fixed-nav-bar");
    // logoz.style.height = "50px";
    shapochka.classList.add("hidden");
  } else {
    navik.classList.remove("fixed-nav-bar");
    navik.style.padding = "0";
    // logoz.style.height = "80px";
    shapochka.classList.remove("hidden");
    glavnaya.classList.add("active");
  }
}


$('#menuExample').on('slide.bs.carousel', function (e) {


  var mHeader = $('#menuExampleHeader') ;

  if (e.to == 0) {
    mHeader.html("Понедельник");
  }
  else if (e.to == 1) {
    mHeader.html("Вторник");
  }
  else if (e.to == 2) {
    mHeader.html("Среда");
  }
  else if (e.to == 3) {
    mHeader.html("Четверг");
  }
  else if (e.to == 4) {
    mHeader.html("Пятница");
  }
  else if (e.to == 5) {
    mHeader.html("Суббота");
  }
  else if (e.to == 6) {
    mHeader.html("Воскресенье");
  }
  
})

