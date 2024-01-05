import Map from '../node_modules/ol/Map.js';
import OSM from '../node_modules/ol/source/OSM.js';
import TileLayer from '../node_modules/ol/layer/Tile';
import View from '../node_modules/ol/View.js';

var map = new Map({
    layers: [
        new TileLayer({
            source: new OSM()
        })
    ],
    target: 'map',
    view: new View({
        center: [0, 0],
        zoom: 2
    }),
})


document.getElementById('map').addEventListener('mouseover', function  () {
    document.getElementById('map').classList.add('cursor-move');
});