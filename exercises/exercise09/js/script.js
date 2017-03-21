

$(document).ready(function() {

  $.getJSON('data/data.json', gotData);

});

// gotData (data)
//
// This function gets called by getJSON when the data has been loaded.
// The data itself will be in the 'data' argument as a JavaScript object.

function gotData (data) {

  var temps = getRandomElement(data.temps);
  $('#temps').text(temps);

  var chiffre = getRandomElement(data.chiffre);
  $('#chiffre').text(chiffre);

}



// getRandomElement ()

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
