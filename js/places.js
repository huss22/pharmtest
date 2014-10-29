var map;
var service;
var infowindow;
var x = document.getElementById("pharmacyresult");

function initialize(position) {
  getLocation();
  var pyrmont = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '500',
    query: 'pharmacy'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
      var place = results[0];
      createMarker(results[0]);
  }
}

function createMarker(place) {
  $('#pharmacyresult').empty();
   $('#pharmacyresult').append('<br><b>Closest Pharmacy: </b>' + place.name + ", located at " + place.formatted_address);
   $('#pharmacyresult').append(place.opening_hours);
   console.log(place);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initialize);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}


function initializegp(position) {
  getLocation();
  var pyrmont = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '500',
    query: 'GP'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
      var place = results[0];
      createMarker(results[0]);
  }
}

function createMarker(place) {
  $('#gpresult').empty();
   $('#gpresult').append('<br><b>Closest GP: </b>' + place.name + ", located at " + place.formatted_address);
   $('#gpresult').append(place.opening_hours);
   console.log(place);
   initializehospital(position);
}

function initializehospital(position) {
  getLocation();
  var pyrmont = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '500',
    query: 'Hospital'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
      var place = results[0];
      createMarker(results[0]);
  }
}

function createMarker(place) {
  $('#gpresult').empty();
   $('#gpresult').append('<br><b>Closest Hospital: </b>' + place.name + ", located at " + place.formatted_address);
   $('#gpresult').append(place.opening_hours);
   console.log(place);
   initializehospital(position);
}

google.maps.event.addDomListener(window, 'load', getLocation);
