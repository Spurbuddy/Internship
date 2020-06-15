mapboxgl.accessToken = 'pk.eyJ1IjoianVkZ2Vnb2R3aW5zIiwiYSI6ImNrYmR0NGYyMTBmM2Qyd20yNWc4bmN5bzEifQ.uHhT8TDbUxBSJk9hODDpSw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-28.6731, 0.0],
    zoom: window.innerWidth > 400 ? 1 :-1
});

var bringPopup = function(str) {
    return new mapboxgl.Popup({offset: 25}).setText(str);
}

var firstPopup = bringPopup('Lagos, The heart of Africa\'s tech scene. Lagos has the largest tech hub ecosystem in Africa. This ever bubbling city is also the economic capital of Nigeria.')
var secondPopup = bringPopup('As part of California\'s high-tech area known as Silicon Valley, Sunnyvale is the headquarters location of many technology companies and is a major operating center for many more.')
var thirdPopup = bringPopup('Lima. The capital of Peru and the focal point of Peru\'s ever growing tech scene.')

var marker = new mapboxgl.Marker().setLngLat([3.3792, 6.5244])
                .setPopup(firstPopup)
                .addTo(map);
var secondMarker = new mapboxgl.Marker().setLngLat([-122.0363, 37.3688])
                    .setPopup(secondPopup)
                    .addTo(map);
var thirdMarker = new mapboxgl.Marker().setLngLat([-77.0428, -12.0464])
                    .setPopup(thirdPopup)
                    .addTo(map);