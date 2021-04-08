/* global L, carto */

var map = L.map('map', {
  center: [38.582526,-88.989258],
  zoom: 4
});

// Add base layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);


/*
 * Add event listener to the map that updates the latitude and longitude on the form
 */

var latitudeField = document.querySelector('.lat-field-focal');
var longitudeField = document.querySelector('.long-field-focal');

var markerLayer = L.featureGroup().addTo(map);

map.on('click', function (event) {
  // Clear the existing marker
  markerLayer.clearLayers();
  
  // Log out the latlng so we can see that it's correct
  console.log(event.latlng);
  
  // Add a marker to the map
  var marker = L.marker(event.latlng);
  markerLayer.addLayer(marker);
  
  // Update the form fields
  latitudeField.value = event.latlng.lat;
  longitudeField.value = event.latlng.lng;
});