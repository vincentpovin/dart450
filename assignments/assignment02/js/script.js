// la durée des animations
var temps = 1000;

// la durée des animations plus lente
var tempsLent = 1000;

var grand = "60px";


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
            $( "#texte1" ).animate({ top: texteDrop, opacity: 0.25 }, temps);    
            $( "#texte2" ).animate({ top: texteDrop }, temps);    
            $('#a3').animate({ height:"0px", backgroundColor:"#f8f4ed" }, temps);
            $('#a4').animate({ height:"0px", backgroundColor:"#fefbf8" }, temps);
            $('#a1,#a2,#a5').animate({ height:grand }, temps);     
            $('#a6').animate({ height:grand }, temps, function() {
                $('#b2').animate({ height:"0px", backgroundColor:"#d6cdc9" }, temps);
                $('#b5').animate({ height:"0px", backgroundColor:"#777472" }, temps);
                $('#b1,#b3,#b4').animate({ height:grand }, temps);     
                $('#b6').animate({ height:grand }, temps, function() {
                    $('#c5').animate({ height:"0px", backgroundColor:"#79818c"}, temps);
                    $('#c1,#c2,#c3,#c4').animate({ height:grand }, temps);         
                    $('#c6').animate({ height:grand }, temps, function() {
                        $('#d4').animate({ height:"0px", backgroundColor:"#b29589" }, temps);
                        $('#d1,#d2,#d3,#d5').animate({ height:grand }, temps);         
                        $('#d6').animate({ height:grand }, temps, function() {
                            $('#e1,#e2,#e3,#e4,#e5').animate({ height:grand }, temps);         
                            $('#e6').animate({ height:grand }, temps, function() {
                                $('#f4').animate({ height:"0px", backgroundColor:"#51332d" }, temps);
                                $('#f1,#f2,#f3,#f5').animate({ height:grand }, temps);         
                                $('#f6').animate({ height:grand }, temps, function() {
                                    $("body").removeClass("scrollhide");
                                    $("#full").removeClass("fix");
                                    $("#full").addClass("relat", function() {
                                        $(serieInterrogation).animate({ height:grand }, temps);
                                        $( "#texte1" ).animate({ top: texteDrop, opacity: 0.25 }, temps);
                                        $( "#texte2" ).animate({ top: texteDrop, opacity: 0.25 }, temps);
                                        $( "#texte3" ).animate({ top: texteDrop }, temps, function() {
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

    
    
    
});





