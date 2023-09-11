function openMap() {
    const mapOptions = {
        center: { lat: 0, lng: 0 }, // Default to a location (e.g., the equator)
        zoom: 15, // Adjust the initial zoom level
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Create a marker for the selected location
    const marker = new google.maps.Marker({
        position: map.getCenter(),
        map: map,
        draggable: true, // Allow the marker to be dragged
    });

    // Add an event listener to the marker for when it is dragged
    marker.addListener('dragend', function() {
        const position = marker.getPosition();
        const latitude = position.lat();
        const longitude = position.lng();

        // Save the latitude and longitude in local storage or your JSON delivery address
        const deliveryAddress = {
            latitude: latitude,
            longitude: longitude,
        };

        localStorage.setItem('deliveryAddress', JSON.stringify(deliveryAddress));
        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);
    });
}

export { openMap }
