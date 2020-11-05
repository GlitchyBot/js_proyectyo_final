const tilesProvider = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

var myMap = L.map('myMap').setView([-34.584746600703845, -58.39317600185876], 15);

L.tileLayer(tilesProvider, {
    maxZoom: 88,
}).addTo(myMap);

L.marker([-34.584746600703845, -58.39317600185876]).addTo(myMap)
    .bindPopup('Plaza Francia')
    .openPopup();