/* global L, carto */

var map = L.map('map', {
  center: [38.582526,-88.989258],
  zoom: 4
});

// Add base layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);