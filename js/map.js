var hotspots = document.querySelectorAll('.hotspot');
var container = document.querySelector('#map_container');
var map = document.querySelector('#map');
var text = document.querySelector('#text');
var mobileCloser = document.querySelector('#mobile-closer');
var mobileTeller = document.querySelector('.teller');

function pointHotspots() {
    // var containerPadding = window.innerWidth > 600 ? 100 : 20;
    var mapWidth = map.getBoundingClientRect().width;
    var mapHeight = map.getBoundingClientRect().height;

    var positions = {
        "hotspot-one": {
            x: 0,
            y: 0,
            main_x: 521,
            main_y: 367,
        },
        "hotspot-two": {
            x: 0,
            y: 0,
            main_x: 276,
            main_y: 424,
        },
        "hotspot-three": {
            x: 0,
            y: 0,
            main_x: 143,
            main_y: 256,
        }
    };

    var mainWidth = 1090, mainHeight = 609

    hotspots.forEach(hotspot => {
        let left = (positions[hotspot.id].x = (positions[hotspot.id].main_x / mainWidth) * mapWidth) - hotspot.getBoundingClientRect().width / 2;
        let top = (positions[hotspot.id].y = (positions[hotspot.id].main_y / mainHeight) * mapHeight) - hotspot.getBoundingClientRect().height / 2;
        hotspot.style.top = `${top}px`;
        hotspot.style.left = `${left}px`;
    })
}

$(pointHotspots);

window.addEventListener('resize', pointHotspots);

hotspots.forEach(hotspot => {
    hotspot.addEventListener('click', function() {
        let txt = '';
        if(window.innerWidth < 600) {
            switch(this.id) {
                case 'hotspot-one': txt = 'Lagos, The heart of Africa\'s tech scene. Lagos has the largest tech hub ecosystem in Africa.'
                break;
                case 'hotspot-two': txt = 'Lima. The capital of Peru and the focal point of Peru\'s ever growing tech scene.'
                break;
                case 'hotspot-three': txt = 'As part of California\'s high-tech area known as Silicon Valley, Sunnyvale houses many tech companies.'
                break;
                default: return
            }
            text.innerHTML = txt;
            mobileTeller.classList.add('show');
        }
    })
});

var closeMobileTeller = function() {
    
    mobileTeller.classList.remove('show');
}


mobileCloser.onclick = closeMobileTeller;
