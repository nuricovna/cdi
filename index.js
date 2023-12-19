const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    autoHeight: true,

    



    // slidesPerView: 2,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});

/* swiper */

const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()

    slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    
}





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



