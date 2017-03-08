

$(document).ready(function() {

  var controller = new ScrollMagic.Controller();


  var scene = new ScrollMagic.Scene({
    triggerElement: "#yo2",
    duration: 1000000
  });


  scene.setTween("#yo", 1, {
      rotation: 180
  });

  scene.triggerHook(0.5);


  scene.addTo(controller);


  

});
