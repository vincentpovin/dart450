// la durée des animations utilisant scrollmagic
var scrollTemps = 1000;

var grandScroll = "-=60";
var grandScrollPositif = "+=60";

var trigScroll = 1;




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
    
    anim1.triggerHook(trigScroll);
    anim1.addTo(controller);
    
    
    var anim1b = new ScrollMagic.Scene({
        triggerElement: "#anim1"
    });
    anim1b.setTween("#a1,#a2,#a3,#a4,#a5,#a6,#b1,#b2,#b3,#b4,#b5,#b6,#c1,#c2,#c3,#c4,#c5,#c6,#d1,#d2,#d3,#d4,#d5,#d6,#e1,#e2,#e3,#e4,#e5,#e6,#f1,#f2,#f3,#f4,#f5,#f6", {
        backgroundColor: "black"
    });

    anim1b.triggerHook(trigScroll);
    anim1b.addTo(controller);
    
    
    

// Scrollmagic animation 2
    
    
    var anim2 = new ScrollMagic.Scene({
        triggerElement: "#anim2",
    });

    anim2.setTween("#c1,#c2", {
        top: grandScroll
    });

    anim2.triggerHook(trigScroll);
    anim2.addTo(controller);
    
        
    var anim2b = new ScrollMagic.Scene({
        triggerElement: "#anim2",
    });

    anim2b.setTween("#c4,#c5", {
        left: grandScroll
    });

    anim2b.triggerHook(trigScroll);
    anim2b.addTo(controller);
    
    

    
// Scrollmagic animation 3
    
    
    var anim3 = new ScrollMagic.Scene({
        triggerElement: "#anim3",
    });

    anim3.setTween("#b1,#c1,#c2", {
        top: grandScroll
    });

    anim3.triggerHook(trigScroll);
    anim3.addTo(controller);
    
    
    var anim3b = new ScrollMagic.Scene({
        triggerElement: "#anim3",
        duration: scrollTemps
    });

    anim3b.setTween("#c3,#c4,#c5", {
        top: grandScroll
    });

    anim3b.triggerHook(trigScroll);
    anim3b.addTo(controller);
    
    

    
// Scrollmagic animation 4
    
    
    var anim4 = new ScrollMagic.Scene({
        triggerElement: "#anim4",
    });

    anim4.setTween("#a1,#b1,#c1,#c2", {
        left: grandScrollPositif
    });

    anim4.triggerHook(trigScroll);

    anim4.addTo(controller);
    
    
    var anim4b = new ScrollMagic.Scene({
        triggerElement: "#anim4",
    });

    anim4b.setTween("#b3,#c3,#c4,#c5", {
        left: grandScroll
    });

    anim4b.triggerHook(trigScroll);
    anim4b.addTo(controller);
    
    
    
    
// Scrollmagic animation 5
    
    
    var anim5 = new ScrollMagic.Scene({
        triggerElement: "#anim5",
    });

    anim5.setTween("#c3,#c4,#c5,#b2,#b3", {
        top: grandScroll
    });

    anim5.triggerHook(trigScroll);
    anim5.addTo(controller);
    
    
    
    
// Scrollmagic animation 6
    
    
    var anim6 = new ScrollMagic.Scene({
        triggerElement: "#anim6",
    });
    anim6.setTween("#a1,#a2,#b1,#b2,#b3,#c1,#c2,#c3,#c4,#c5", {
        left: grandScrollPositif
    });

    anim6.triggerHook(trigScroll);
    anim6.addTo(controller);
    
    
    var anim6b = new ScrollMagic.Scene({
        triggerElement: "#anim6",
    });
    
    anim6b.setTween("#d1", {
        top: grandScrollPositif
    });

    anim6b.triggerHook(trigScroll);
    anim6b.addTo(controller);
    
    
   var anim6c = new ScrollMagic.Scene({
        triggerElement: "#anim6",
    });
    
    anim6c.setTween("#d3", {
        left: grandScroll
    });

    anim6c.triggerHook(trigScroll);
    anim6c.addTo(controller);
    
    
    
    
// Scrollmagic animation 7
    
    
    var anim7 = new ScrollMagic.Scene({
        triggerElement: "#anim7"
    });
    
    anim7.setTween("#a1,#a2,#a3,#b1,#b2,#b3,#c1,#c2,#c3,#c4,#c5", {
        left: grandScrollPositif
    });

    anim7.triggerHook(trigScroll);
    anim7.addTo(controller);
    
    
    var anim7b = new ScrollMagic.Scene({
        triggerElement: "#anim7",
    });
    anim7b.setTween("#d1,#e1", {
        top: grandScrollPositif
    });

    anim7b.triggerHook(trigScroll);
    anim7b.addTo(controller);
    
    
   var anim7c = new ScrollMagic.Scene({
        triggerElement: "#anim7"
    });
    anim7c.setTween("#d2,#d3", {
        top: grandScrollPositif
    });

    anim7c.triggerHook(trigScroll);
    anim7c.addTo(controller);
    
    

// Scrollmagic animation 8
    
    var anim8 = new ScrollMagic.Scene({
        triggerElement: "#anim8"
    });
    
    anim8.setTween("#a1,#a2,#a3,#a4,#b1,#b2,#b3,#c1,#c2,#c3,#c4,#c5", {
        top: grandScrollPositif
    });

    anim8.triggerHook(trigScroll);
    anim8.addTo(controller);
    
    
    var anim8b = new ScrollMagic.Scene({
        triggerElement: "#anim8",
    });
    anim8b.setTween("#d1,#e1,#f1", {
        left: grandScrollPositif
    });

    anim8b.triggerHook(trigScroll);
    anim8b.addTo(controller);
    
    
    var anim8c = new ScrollMagic.Scene({
        triggerElement: "#anim8"
    });
    anim8c.setTween("#d2,#d3,#e2", {
        top: grandScrollPositif
    });

    anim8c.triggerHook(trigScroll);
    anim8c.addTo(controller);
    
    
    var anim8d = new ScrollMagic.Scene({
        triggerElement: "#anim8"
    });
    anim8d.setTween("#d4", {
        left: grandScrollPositif
    });

    anim8d.triggerHook(trigScroll);
    anim8d.addTo(controller);   


    
    
// Scrollmagic animation 9
    
    
    var anim9 = new ScrollMagic.Scene({
        triggerElement: "#anim9"
    });
    
    anim9.setTween("#a1,#a2,#a3,#a4,#b1,#b2,#b3,#b4,#c1,#c2,#c3,#c4,#c5,#d1,#d2,#d3,#e1,#e2,#e3,#f1,#f2", {
        left: grandScrollPositif
    });

    anim9.triggerHook(trigScroll);
    anim9.addTo(controller);
    
    
    var anim9b = new ScrollMagic.Scene({
        triggerElement: "#anim9"
    });
    
    anim9b.setTween("#d4,#d5", {
        top: grandScrollPositif
    });

    anim9b.triggerHook(trigScroll);
    anim9b.addTo(controller);
    
    
    
    
// Scrollmagic animation 10
    
    
    var anim10 = new ScrollMagic.Scene({
        triggerElement: "#anim10"
    });
    
    anim10.setTween("#a1,#a2,#a3,#a4,#b1,#b2,#b3,#b4,#b5,#c1,#c2,#c3,#c4,#c5", {
        top: grandScroll
    });

    anim10.triggerHook(trigScroll);
    anim10.addTo(controller);
    
    
    var anim10b = new ScrollMagic.Scene({
        triggerElement: "#anim10"
    });
    
    anim10b.setTween("#e3,#e4", {
        top: grandScrollPositif
    });

    anim10b.triggerHook(trigScroll);
    anim10b.addTo(controller);
    
    
    var anim10c = new ScrollMagic.Scene({
        triggerElement: "#anim10"
    });
    
    anim10c.setTween("#d1,#d2,#d3,#e1,#e2,#f1,#f2,#f3", {
        left: grandScrollPositif
    });

    anim10c.triggerHook(trigScroll);
    anim10c.addTo(controller);
    


    
// Scrollmagic animation 11
    
    
    var anim11 = new ScrollMagic.Scene({
        triggerElement: "#anim11"
    });
    
    anim11.setTween("#d4,#d5,#e5", {
        top: grandScrollPositif
    });

    anim11.triggerHook(trigScroll);
    anim11.addTo(controller);
    
    
    var anim11b = new ScrollMagic.Scene({
        triggerElement: "#anim11"
    });
    
    anim11b.setTween("#d1,#d2,#d3,#e1,#e2,#e3,#e4,#f1,#f2,#f3,#f4", {
        left: grandScrollPositif
    });

    anim11b.triggerHook(trigScroll);
    anim11b.addTo(controller);
    

    var anim11c = new ScrollMagic.Scene({
        triggerElement: "#anim11"
    });
    
    anim11c.setTween("#a1,#a2,#a3,#a4,#a5,#b1,#b2,#b3,#b4,#b5,#c1,#c2,#c3,#c4,#c5", {
        left: grandScrollPositif
    });

    anim11c.triggerHook(trigScroll);
    anim11c.addTo(controller);
    

    
    
// Scrollmagic animation 12
    
    
    var anim12 = new ScrollMagic.Scene({
        triggerElement: "#anim12"
    });
    
    anim12.setTween("#d1,#d2,#d3,#d4,#d5,#e1,#e2,#e3,#e4,#e5,#f1,#f2,#f3,#f4,#f5", {
        left: grandScrollPositif
    });

    anim12.triggerHook(trigScroll);
    anim12.addTo(controller);
    
    
    var anim12b = new ScrollMagic.Scene({
        triggerElement: "#anim12"
    });
    
    anim12b.setTween("#a1,#a2,#a3,#a4,#a5,#a6,#b1,#b2,#b3,#b4,#b5,#c1,#c2,#c3,#c4,#c5", {
        top: grandScrollPositif
    });

    anim12b.triggerHook(trigScroll);
    anim12b.addTo(controller);
    
    
    
    
// Scrollmagic animation 13
    
    
    var anim13 = new ScrollMagic.Scene({
        triggerElement: "#anim13"
    });
    
    anim13.setTween("#d1,#d2,#d3,#d4,#d5,#e1,#e2,#e3,#e4,#e5,#f1,#f2,#f3,#f4,#f5,#f6", {
        top: grandScroll
    });

    anim13.triggerHook(trigScroll);
    anim13.addTo(controller);
    
    
    var anim13b = new ScrollMagic.Scene({
        triggerElement: "#anim13"
    });
    
    anim13b.setTween("#a1,#a2,#a3,#a4,#a5,#a6,#b1,#b2,#b3,#b4,#b5,#b6,#c1,#c2,#c3,#c4,#c5", {
        top: grandScrollPositif
    });

    anim13b.triggerHook(trigScroll);
    anim13b.addTo(controller);
    
    
    
    
// Scrollmagic animation 14
    
    
    var anim14 = new ScrollMagic.Scene({
        triggerElement: "#anim14"
    });
    
    anim14.setTween("#d1,#d2,#d3,#d4,#d5,#e1,#e2,#e3,#e4,#e5,#e6,#f1,#f2,#f3,#f4,#f5,#f6", {
        top: grandScroll
    });

    anim14.triggerHook(trigScroll);
    anim14.addTo(controller);
    
    
    var anim14b = new ScrollMagic.Scene({
        triggerElement: "#anim14"
    });
    
    anim14b.setTween("#a1,#a2,#a3,#a4,#a5,#a6,#b1,#b2,#b3,#b4,#b5,#b6,#c1,#c2,#c3,#c4,#c5,#c6", {
        top: grandScrollPositif
    });

    anim14b.triggerHook(trigScroll);
    anim14b.addTo(controller);
    
    
    var anim14c = new ScrollMagic.Scene({
        triggerElement: "#anim14"
    });
    
    anim14c.setTween("#a1,#a2,#a3,#a4,#a5,#a6,#b1,#b2,#b3,#b4,#b5,#b6,#c1,#c2,#c3,#c4,#c5,#c6,#d1,#d2,#d3,#d4,#d5,#d6,#e1,#e2,#e3,#e4,#e5,#e6,#f1,#f2,#f3,#f4,#f5,#f6", {
        backgroundColor: "blue"
    });

    anim14c.triggerHook(trigScroll);
    anim14c.addTo(controller);
    
    
    
});





