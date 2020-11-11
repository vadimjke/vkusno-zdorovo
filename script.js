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
