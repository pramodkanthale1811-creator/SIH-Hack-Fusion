function initMap() {
  // Jalandhar, Punjab center
  const center = { lat: 31.3260, lng: 75.5762 };

  // Create map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: center,
  });

  // Example bus marker
  const busMarker = new google.maps.Marker({
    position: { lat: 31.3260, lng: 75.5762 },
    map: map,
    label: "101",
    title: "Bus 101 Current Location",
  });
}

window.onload = initMap;
