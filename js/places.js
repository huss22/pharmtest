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

  var request2 = {
    location: pyrmont,
    radius: '500',
    query: 'GP'
  };

  var request3 = {
    location: pyrmont,
    radius: '500',
    query: 'Hospital'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
  service.textSearch(request2, callback2);
  service.textSearch(request3, callback3);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
      var place = results[0];
      createMarker(results[0]);
  }
}

function callback2(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
      var place = results[0];
      createMarker2(results[0]);
  }
}

function callback3(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
      var place = results[0];
      createMarker3(results[0]);
  }
}

function createMarker(place) {
  $('#pharmacyresult').empty();
   $('#pharmacyresult').append('<br><b>Closest Pharmacy: </b>' + place.name + ", located at " + place.formatted_address);
   $('#pharmacyresult').append(place.opening_hours);
   console.log(place);
}

function createMarker2(place) {
  $('#gpresult').empty();
   $('#gpresult').append('<br><b>Closest GP: </b>' + place.name + ", located at " + place.formatted_address);
   $('#gpresult').append(place.opening_hours);
   console.log(place);
}

function createMarker3(place) {
  $('#hospitalresult').empty();
   $('#hospitalresult').append('<br><b>Closest Hospital: </b>' + place.name + ", located at " + place.formatted_address);
   $('#hospitalresult').append(place.opening_hours);
   console.log(place);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initialize);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

google.maps.event.addDomListener(window, 'load', getLocation);
