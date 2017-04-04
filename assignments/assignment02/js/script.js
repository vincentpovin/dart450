// la durée des animations
var temps = 100;

// la durée des animations plus lente
var tempsLent = 100;

// la durée des animations utilisant scrollmagic
var scrollTemps = 100;

var grand = "60px";

var grandScroll = "-=60";
var grandScrollPositif = "+=60";


var texteDrop = "+=55";


var coul = "white";
var coulNoir = "black";


var serieA = '#a1,#a2,#a3,#a4,#a5,#a6';
var serieB = '#b1,#b2,#b3,#b4,#b5,#b6';
var serieC = '#c1,#c2,#c3,#c4,#c5,#c6';
var serieD = '#d1,#d2,#d3,#d4,#d5,#d6';
var serieE = '#e1,#e2,#e3,#e4,#e5,#e6';
var serieF = '#f1,#f2,#f3,#f4,#f5,#f6';

var serieInterrogation = '#a3,#a4,#b2,#b5,#c5,#d4,#f4';
var serieInterrogationVide = '#a1,#a2,#a5,#a6,#b1,#b3,#b4,#b6,#c1,#c2,#c3,#c4,#c6,#d1,#d2,#d3,#d5,#d6,#e1,#e2,#e3,#e4,#e5,#e6,#f1,#f2,#f3,#f5,#f6';








// Fonction débute lorsque le site est téléchargé
$(document).ready(function() {

$( "#texte1" ).animate({ top: texteDrop }, tempsLent);
    
$( serieInterrogation ).animate({ height:grand }, tempsLent);

   

// Animation du point d'interrogation    
$(serieInterrogation).click(function () {   
    if  (
            ($(serieInterrogationVide).height() == 0)
        ){
            $('#a3,#a4').animate({ height:"0px"}, temps);
            $('#a1,#a2,#a5').animate({ height:grand }, temps);     
            $('#a6').animate({ height:grand }, temps, function() {
                $('#b2,#b5').animate({ height:"0px" }, temps);
                $('#b1,#b3,#b4').animate({ height:grand }, temps);     
                $('#b6').animate({ height:grand }, temps, function() {
                    $('#c5').animate({ height:"0px" }, temps);
                    $('#c1,#c2,#c3,#c4').animate({ height:grand }, temps);         
                    $('#c6').animate({ height:grand }, temps, function() {
                        $('#d4').animate({ height:"0px" }, temps);
                        $('#d1,#d2,#d3,#d5').animate({ height:grand }, temps);         
                        $('#d6').animate({ height:grand }, temps, function() {
                            $('#e1,#e2,#e3,#e4,#e5').animate({ height:grand }, temps);         
                            $('#e6').animate({ height:grand }, temps, function() {
                                $('#f4').animate({ height:"0px" }, temps);
                                $('#f1,#f2,#f3,#f5').animate({ height:grand }, temps);         
                                $('#f6').animate({ height:grand }, temps, function() {
                                    $("#full").animate({ height:"100000px" }, temps, function() {
                                        $("body").removeClass("scrollhide");
                                        $(serieInterrogation).animate({ height:grand }, temps);
                                        $( "#texte1" ).animate({ top: texteDrop, opacity: 0.25 }, temps);
                                        $( "#texte2" ).animate({ top: texteDrop }, temps, function() {
                                            $("#image1").animate({ height:"360px" }, temps);
                                        });
                                    });
                                }); 
                            }); 
                        });    
                    });
                });
            });
        }
});

 
    
    


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





