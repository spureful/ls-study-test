let myMap;

const init = () =>{

    var myMap = new ymaps.Map('map',{
        center: [55.751688, 37.604105],
        zoom: 13,
        controls: []
    });

    var coords = [
        [55.74344831594532, 37.580411528507426],
        [55.75803366807345, 37.58317508517665],
        [55.74973712934959, 37.60500786680653],
        [55.75838518050675, 37.62380938245144]
    ];
    const myCollection = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: './img/map-icon.svg',
        iconImageSize: [58, 73],
        iconImageOffset: [-25, -55],
        draggable: false
    });
    for (var i = 0; i < coords.length; i++) {
        myCollection.add(new ymaps.Placemark(coords[i]));
    }

    myMap.geoObjects.add(myCollection);
    myMap.behaviors.disable('scrollZoom')
}

ymaps.ready(init);