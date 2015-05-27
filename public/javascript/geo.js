
var results;

window.onload = function() {
  results = document.getElementById("results");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      geolocationSuccess, geolocationFailure
    );

    results.innerHTML = "The search has begun.";
  } else {
    results.innerHTML = "This browser doesn't support geolocation.";
  }
}

function geolocationSuccess(position) {
        results.innerHTML = "You were last spotted at (" + 
         position.coords.latitude + "," + position.coords.longitude + ")" +
  " with an accuracy of " + position.coords.accuracy + " meters.";
}

function geolocationFailure(positionError) {
  switch (positionError.code) {
    case 1:
      results.innerHTML = "You decided not to share, but that's OK. ";
      break;
    case 2:
      results.innerHTML = "The network is down or the positioning service can't be reached.";
      break;
    case 3:
      results.innerHTML = "The attempt timed out before it could get the location data.";
      break;
    case 0:
      results.innerHTML = "This the mystery error. Something else happened, but we don't know what.";
      break;
  }
}
