/* swiper */

const swiper = new Swiper('.swiper', {
    loop: true,

    autoHeight: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});

/* swiper_2 */

// const swiper = new Swiper('.js-hero-swiper', {
//   allowTouchMove: false,
//   loop: true,
//   effect: 'fade',
//   speed: 10000,
//   autoplay: {
//     delay: 10000
//   }
// });


/* slider */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
let timer;

timer = setInterval(() => changeSlide(slides[0]), 2000);

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");

    const innerSlides = slide.querySelectorAll(".inner-slide");
    innerSlides.forEach((slide) => (slide.style.transform = "translateX(0%)"));
    currentSlide = 0;
    if (timer) clearInterval(timer);
    timer = setInterval(() => changeSlide(slide), 2000);
  });
}

function clearActiveClasses() {
  for (const slide of slides) {
    slide.classList.remove("active");
  }
}

[...document.querySelectorAll("h3")].forEach((h3) => {
  h3.innerHTML = h3.textContent
    .split("")
    .map((l) => `<span>${l}</span>`)
    .join("");
});

function changeSlide(slide) {
  const innerSlides = slide.querySelectorAll(".inner-slide");
  currentSlide++;
  if (currentSlide === innerSlides.length) currentSlide = 0;
  innerSlides.forEach(
    (slide) => (slide.style.transform = `translateX(-${100 * currentSlide}%)`)
  );
}



/*  map  */


ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [54.903661, 52.308097],
    zoom: 16,
  });

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
//   myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
//   myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  myMap.controls.remove('default');

  var myPlacemark = new ymaps.Placemark([54.903661, 52.308097], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icon.png',
    iconImageSize: [40, 40],
  });

  myMap.geoObjects.add(myPlacemark);
}















