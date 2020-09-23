ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [44.692106, 37.768723],
            zoom: 17,
            controls: ['typeSelector',  'fullscreenControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.wixstatic.com/media/bcea6e_d6f09e42e43a47368e79d5e4cb37257f~mv2_d_2725_1261_s_2.jpg/v1/fill/w_324,h_150,al_c,q_80,usm_0.66_1.00_0.01/vkusno_zdorovo%20(1).webp',
            // Размеры метки.
            iconImageSize: [100, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    

    myMap.geoObjects
        .add(myPlacemark)


    myMap.behaviors.disable(['drag', 'scrollZoom']);
});