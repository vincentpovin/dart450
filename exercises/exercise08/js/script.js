/*

Scroll Blasting
Pippin Barr

Using Blast.js with ScrollMagic to make the text in a div have a
staticy effect as you scroll past it.

*/

// Colours to change the background colour of words to
var colors = [
  "rgba(240,240,240,1)","rgba(240,240,240,1)","#d8ff00","#000058", "white"
];

$(document).ready(function() {

  // Blast the content into words
  $('#content').blast({
    delimiter: 'character'
  });

  // Create our controller for ScrollMagic
  var controller = new ScrollMagic.Controller();

  // Make a new scene for handling scrolling in our #content element
  // Give it a duration based on its height
  var scene = new ScrollMagic.Scene({
    triggerElement: "body",
    duration: $('body').height()
  });

  // We want to change the css whenever there is scrolling happening
  // inside the content div, so we'll use the 'progress' event.
  scene.on("progress", function (e) {
    // Go through every element with the blast class (each word) and
    // give it a random background colour.
    $('.blast').each(function () {
      $(this).css('color',getRandomElement(colors));
    });
    // This will happen repeatedly (every frame) while the user is
    // scrolling, which will animate it.
  });

  // We want to turn the effect off when the scrolling leaves our
  // content div, so we need a 'leave' event where we just reset
  // the background colour to white.
  scene.on("leave", function (e) {
    $('.blast').css('background-color','white');
  });

  // Moving the trigger hook toward the top of the scrollbar
  scene.triggerHook(0.2);

  // scene.addIndicators();

  // Add the scene to our controller so it does something
  scene.addTo(controller);

});


// getRandomElement (array)
//
// Helper function get pull a random element from an array
function getRandomElement(array) {
  return (array[Math.floor(Math.random() * array.length)]);
}
