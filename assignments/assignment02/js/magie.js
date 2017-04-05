// la durée des animations utilisant scrollmagic
var scrollTemps = 1000;


var grandScroll = "-=60";
var grandScrollPositif = "+=60";




// Fonction débute lorsque le site est téléchargé
$(document).ready(function() {


    


// Scrollmagic    

    var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: scrollTemps}});
    
    

// Scrollmagic animation 1
    
    var anim1 = new ScrollMagic.Scene({
        triggerElement: "#anim1",
    });

    anim1.setTween("#c2,#c5", {
        left: grandScroll
    });
    
    anim1.triggerHook(0.5);
    anim1.addTo(controller);
    
    
    var anim1b = new ScrollMagic.Scene({
        triggerElement: "#anim1"
    });
    anim1b.setTween("#a1,#a2,#a3,#a4,#a5,#a6,#b1,#b2,#b3,#b4,#b5,#b6,#c1,#c2,#c3,#c4,#c5,#c6,#d1,#d2,#d3,#d4,#d5,#d6,#e1,#e2,#e3,#e4,#e5,#e6,#f1,#f2,#f3,#f4,#f5,#f6", {
        backgroundColor: "black"
    });

    anim1b.triggerHook(0.5);
    anim1b.addTo(controller);
    
    

// Scrollmagic animation 2
    
    var anim2 = new ScrollMagic.Scene({
        triggerElement: "#anim2",
    });

    anim2.setTween("#c2,#c1", {
        top: grandScroll
    });

    anim2.triggerHook(0.5);
    anim2.addTo(controller);
    
    
    
    
    var anim2b = new ScrollMagic.Scene({
        triggerElement: "#anim2",
    });

    anim2b.setTween("#c4,#c5", {
        left: grandScroll
    });

    
    anim2b.triggerHook(0.5);
    anim2b.addTo(controller);
    
    

// Scrollmagic animation 3
    
    var anim3 = new ScrollMagic.Scene({
        triggerElement: "#anim3",
    });

    anim3.setTween("#c1,#c2,#b1", {
        top: grandScroll
    });

    anim3.triggerHook(0.5);
    anim3.addTo(controller);
    
    
    var anim3b = new ScrollMagic.Scene({
        triggerElement: "#anim3",
        duration: scrollTemps
    });

    anim3b.setTween("#c5,#c4,#c3", {
        top: grandScroll
    });

    anim3b.triggerHook(0.5);
    anim3b.addTo(controller);
    
    

// Scrollmagic animation 4
    
    var anim4 = new ScrollMagic.Scene({
        triggerElement: "#anim4",
    });

    anim4.setTween("#c1,#c2,#b1,#a1", {
        left: grandScrollPositif
    });

    anim4.triggerHook(0.5);

    anim4.addTo(controller);
    
    
    var anim4b = new ScrollMagic.Scene({
        triggerElement: "#anim4",
    });

    anim4b.setTween("#c5,#c4,#c3,#b3", {
        left: grandScroll
    });

    anim4b.triggerHook(0.5);
    anim4b.addTo(controller);
    
    
// Scrollmagic animation 5
    
    var anim5 = new ScrollMagic.Scene({
        triggerElement: "#anim5",
    });

    anim5.setTween("#c5,#c4,#c3,#b3,#b2", {
        top: grandScroll
    });

    anim5.triggerHook(0.5);
    anim5.addTo(controller);
    
    
// Scrollmagic animation 6
    
    var anim6 = new ScrollMagic.Scene({
        triggerElement: "#anim6",
    });
    anim6.setTween("#a1,#a2,#b1,#b2,#b3,#c1,#c2,#c3,#c4,#c5", {
        left: grandScrollPositif
    });

    anim6.triggerHook(0.5);
    anim6.addTo(controller);
    
    
    var anim6b = new ScrollMagic.Scene({
        triggerElement: "#anim6",
    });
    
    anim6b.setTween("#d1", {
        top: grandScrollPositif
    });

    anim6b.triggerHook(0.5);
    anim6b.addTo(controller);
    
    
   var anim6c = new ScrollMagic.Scene({
        triggerElement: "#anim6",
    });
    
    anim6c.setTween("#d3", {
        left: grandScroll
    });

    anim6c.triggerHook(0.5);
    anim6c.addTo(controller);
    
    
    
// Scrollmagic animation 7
    
    var anim7 = new ScrollMagic.Scene({
        triggerElement: "#anim7"
    });
    
    anim7.setTween("#a1,#a2,#a3,#b1,#b2,#b3,#c1,#c2,#c3,#c4,#c5", {
        left: grandScrollPositif
    });

    anim7.triggerHook(0.5);
    anim7.addTo(controller);
    
    
    var anim7b = new ScrollMagic.Scene({
        triggerElement: "#anim7",
    });
    anim7b.setTween("#d1,#e1", {
        top: grandScrollPositif
    });

    anim7b.triggerHook(0.5);
    anim7b.addTo(controller);
    
    
   var anim7c = new ScrollMagic.Scene({
        triggerElement: "#anim7"
    });
    anim7c.setTween("#d3,#d2", {
        top: grandScrollPositif
    });

    anim7c.triggerHook(0.5);
    anim7c.addTo(controller);
    
    

// Scrollmagic animation 8
    
    var anim8 = new ScrollMagic.Scene({
        triggerElement: "#anim8"
    });
    
    anim8.setTween("#a1,#a2,#a3,#a4,#b1,#b2,#b3,#c1,#c2,#c3,#c4,#c5", {
        top: grandScrollPositif
    });

    anim8.triggerHook(0.5);
    anim8.addTo(controller);
    
    


    var anim8b = new ScrollMagic.Scene({
        triggerElement: "#anim8",
    });
    anim8b.setTween("#d1,#e1,#f1", {
        left: grandScrollPositif
    });

    anim8b.triggerHook(0.5);
    anim8b.addTo(controller);
    
    
    var anim8c = new ScrollMagic.Scene({
        triggerElement: "#anim8"
    });
    anim8c.setTween("#d3,#d2,#e2", {
        top: grandScrollPositif
    });

    anim8c.triggerHook(0.5);
    anim8c.addTo(controller);
    
    
    
});





