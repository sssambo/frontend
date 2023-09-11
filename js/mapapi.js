import Map from './ol/Map.js';
import TileLayer from './ol/layer/Tile.js';
import OSM from './ol/source/OSM.js';
import Overlay from './ol/Overlay.js';

function openMap() {
  // Create a div element for the popup window.
  var popup = document.createElement("div");
  popup.setAttribute("id", "delivery-popup");
   // Create a div element for the map and set its ID
   var mapDiv = document.createElement("div");
   mapDiv.setAttribute("id", "map-container");
    console.log("was here1");
   // Add the div to the document body
   document.body.appendChild(mapDiv);

  // Add the OpenStreetMap map to the popup window.
  var map = new Map({
    target: 'delivery-popup', // 'delivery-popup' should match the ID of an existing HTML element
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ]
  });
  console.log("was here2");
  // Create an overlay for the popup
  var popupOverlay = new Overlay({
    element: popup,
    positioning: 'bottom-center',
    stopEvent: false
  });

  map.addOverlay(popupOverlay);
  console.log("was here3");
  // Add a button to the popup window to close it.
  var closeButton = document.createElement("button");
  closeButton.innerHTML = "Close";
  closeButton.addEventListener("click", function() {
    popup.style.display = "none";
    console.log("was here4");
  });

  // Add the popup window to the document.
  popup.appendChild(closeButton);
  document.body.appendChild(popup);
  console.log("was here5");
  // Listen for the map click event.
  map.on("click", function(e) {
    // Get the latitude and longitude of the click event.
    var lat = e.coordinate[1];
    var lon = e.coordinate[0];

    // Store the latitude and longitude in the delivery address JSON.
    var deliveryAddress = {
      latitude: lat,
      longitude: lon
    };
console.log(deliveryAddress);
    // Hide the popup window.
    popup.style.display = "none";
  });
}

export { openMap };
