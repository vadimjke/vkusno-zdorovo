ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [44.692106, 37.768723],
            zoom: 17,
            controls: ['typeSelector',  'fullscreenControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Вкусно!Здорово',
            balloonContent: 'Производство и офис компании"Вкусно!Здорово" расположены по адресу: ул. Кунникова, 47Б'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/vkusno_zdorovo.png',
            // Размеры метки.
            iconImageSize: [18, 75],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [8, -75]
        });

    

    myMap.geoObjects
        .add(myPlacemark)


    myMap.behaviors.disable(['drag', 'scrollZoom']);
});