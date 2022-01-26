// Add console.log to check if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//      .setview() has coordinats [lat, long] and zoom level on 0-18 scale
//      .setview() alternative is to { center: [lat,long], zoom: 4} -- useful when adding multiple tile layers or background image to maps
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Add tile layer to load and display a tile layer on the map
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// to change map's style (outdoors,sattelite, etc.) change the id mapbox/
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);