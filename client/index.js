const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker.js');
const fetch = require('./fetch');

mapboxgl.accessToken = 'pk.eyJ1Ijoic2l4eHRhIiwiYSI6ImNqOGMzNXYwczA1MDUyeHJsaHk4empoankifQ.totkL8Moz5WvblnyxSZm6g'

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/dark-v9' // mapbox has lots of different map styles available.
});

const marker = buildMarker('activities', [-74.009, 40.705]);
marker.addTo(map);
