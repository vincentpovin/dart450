// la durée des animations utilisant scrollmagic
var scrollTemps = 100;


var grandScroll = "-=60";
var grandScrollPositif = "+=60";




// Fonction débute lorsque le site est téléchargé
$(document).ready(function() {


    


// Scrollmagic    

    var controller = new ScrollMagic.Controller();
    
    

// Scrollmagic animation 1
    
    var anim1 = new ScrollMagic.Scene({
        triggerElement: "#anim1",
        duration: scrollTemps
    });

    anim1.setTween("#c2,#c5", {
        left: grandScroll
    });
    
    anim1.triggerHook(0.5);

    anim1.addTo(controller);
    
    

// Scrollmagic animation 2
    
    var anim2 = new ScrollMagic.Scene({
        triggerElement: "#anim2",
        duration: scrollTemps
    });

    anim2.setTween("#c2,#c1", {
        top: grandScroll
    });

    anim2.triggerHook(0.5);

    anim2.addTo(controller);
    
    
    
    
    var anim2b = new ScrollMagic.Scene({
        triggerElement: "#anim2",
        duration: scrollTemps
    });

    anim2b.setTween("#c4,#c5", {
        left: grandScroll
    });

    
    anim2b.triggerHook(0.5);

    anim2b.addTo(controller);
    
    

// Scrollmagic animation 3
    
    var anim3 = new ScrollMagic.Scene({
        triggerElement: "#anim3",
        duration: scrollTemps
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
        duration: scrollTemps
    });

    anim4.setTween("#c1,#c2,#b1,#a1", {
        left: grandScrollPositif
    });

    anim4.triggerHook(0.5);

    anim4.addTo(controller);
    
    
    var anim4b = new ScrollMagic.Scene({
        triggerElement: "#anim4",
        duration: scrollTemps
    });

    anim4b.setTween("#c5,#c4,#c3,#b3", {
        left: grandScroll
    });

    anim4b.triggerHook(0.5);

    anim4b.addTo(controller);
    
    
// Scrollmagic animation 5
    
    var anim4 = new ScrollMagic.Scene({
        triggerElement: "#anim4",
        duration: scrollTemps
    });

    anim4.setTween("#c1,#c2,#b1,#a1", {
        left: grandScrollPositif
    });

    anim4.triggerHook(0.5);

    anim4.addTo(controller);
    
    
    var anim4b = new ScrollMagic.Scene({
        triggerElement: "#anim4",
        duration: scrollTemps
    });

    anim4b.setTween("#c5,#c4,#c3,#b3", {
        left: grandScroll
    });

    anim4b.triggerHook(0.5);

    anim4b.addTo(controller);

    
    
    
});





