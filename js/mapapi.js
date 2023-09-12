import Map from './ol/Map.js';
import View from './ol/View.js';
import { fromLonLat, toLonLat } from './ol/proj.js';
import TileLayer from './ol/layer/Tile.js';
import OSM from './ol/source/OSM.js';
import Overlay from './ol/Overlay.js';

function openMap() {
  // Create a div element for the map and set its ID
  var mapDiv = document.createElement("div");
  mapDiv.setAttribute("id", "map-container");

  // Set width and height for the map container
  mapDiv.style.width = "100%"; // Adjust the width as needed
  mapDiv.style.height = "400px"; // Adjust the height as needed

  // Add the div to the document body
  document.body.appendChild(mapDiv);

  // Create a map inside the dynamically created div
  var map = new Map({
    target: 'map-container', // 'map-container' should match the ID of the dynamically created div
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View({
      center: fromLonLat([0, 0]), // Center of the map
      zoom: 2 // Initial zoom level
    })
  });

  // Create a div for the popup overlay
  var popupDiv = document.createElement("div");
  popupDiv.setAttribute("id", "popup");

  // Create an overlay for the popup
  var popup = new Overlay({
    element: popupDiv,
    positioning: 'bottom-center',
    stopEvent: false
  });

  // Add the popup overlay to the map
  map.addOverlay(popup);

  // Listen for the map click event.
  map.on("click", function(e) {
    // Get the coordinate of the click event.
    var coordinate = e.coordinate;

    // Convert the coordinate to lon/lat format
    var lonLat = toLonLat(coordinate);

    // Store the latitude and longitude in the delivery address JSON.
    var deliveryAddress = {
      latitude: lonLat[1],
      longitude: lonLat[0]
    };
    localStorage.setItem('deliveryAddress', JSON.stringify(deliveryAddress));
    console.log(deliveryAddress);

    // Remove the map div from the document
    document.body.removeChild(mapDiv);
  });
}

export { openMap };
