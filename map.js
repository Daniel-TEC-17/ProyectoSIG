
// initialize Leaflet
var map = L.map('map').setView({lat: 9.85316, lon: -83.91437},18);
map.options.minZoom = 18;
map.options.maxZoom = 20;
// show the scale bar on the lower left corner
L.control.scale({imperial: true, metric: true, position: 'bottomright'}).addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 21,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map);

