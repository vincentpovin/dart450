// La durée des animations
var temps = 1000;

// La durée des animations plus lente
var tempsLent = 1000;

// La dimension des carrés
var grand = "60px";

// La distance du défilement du texte
var texteDrop = "+=55";

// Les couleurs principales
var coul = "white";
var coulNoir = "black";
var coulFade = "0.2";


// Les rangés de carrés
var serieA = '#a1,#a2,#a3,#a4,#a5,#a6';
var serieB = '#b1,#b2,#b3,#b4,#b5,#b6';
var serieC = '#c1,#c2,#c3,#c4,#c5,#c6';
var serieD = '#d1,#d2,#d3,#d4,#d5,#d6';
var serieE = '#e1,#e2,#e3,#e4,#e5,#e6';
var serieF = '#f1,#f2,#f3,#f4,#f5,#f6';

// Les carrés formant un point d'interrogation
var serieInterrogation = '#a3,#a4,#b2,#b5,#c5,#d4,#f4';
var serieInterrogationVide = '#a1,#a2,#a5,#a6,#b1,#b3,#b4,#b6,#c1,#c2,#c3,#c4,#c6,#d1,#d2,#d3,#d5,#d6,#e1,#e2,#e3,#e4,#e5,#e6,#f1,#f2,#f3,#f5,#f6';

// Tous les carrés
var serieZ = '#a1,#a2,#a3,#a4,#a5,#a6,#b1,#b2,#b3,#b4,#b5,#b6,#c1,#c2,#c3,#c4,#c5,#c6,#d1,#d2,#d3,#d4,#d5,#d6,#e1,#e2,#e3,#e4,#e5,#e6,#f1,#f2,#f3,#f4,#f5,#f6';
    









// Fonction débute lorsque le site est téléchargé
$(document).ready(function() {


$(serieZ).addClass("abso");   
    
$( "#texte1" ).animate({ top: texteDrop }, tempsLent);
    
$( serieInterrogation ).animate({ height:grand }, tempsLent);

   

// Animation du point d'interrogation    
$(serieInterrogation).click(function () {   
    if  (
            ($(serieInterrogationVide).height() == 0)
        ){
            $( "#texte1" ).animate({ top: texteDrop, opacity: coulFade }, temps);    
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
                                    $("#full").removeClass("fix");
                                    $("#full").addClass("relat", function() {
                                        $(serieInterrogation).animate({ height:grand }, temps);
                                        $( "#texte1,#texte2" ).animate({ top: texteDrop, opacity: coulFade }, temps);
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

    
// Le carré bleu se déplace vers le bas
$("#f6").click(function () {   
    if  (
            ($(serieZ).position().top == 180)&&
            ($(serieZ).position().left == 300)
        ){
            $(serieZ).animate({ backgroundColor:"white", top: 300 }, temps);
            $( "#texte4" ).animate({ top: texteDrop }, temps);
            $( "#texte1,#texte2,#texte3" ).animate({ top: texteDrop, opacity: coulFade }, temps);
            $("#image2").animate({ height:"360px" }, temps);
            $("#image1").animate({ height:"0px" }, temps);
        }
});
    
    
// Le carré blanc active le positionnement des autres carrés
$("#f6").click(function () {   
    if  (
            ($(serieZ).position().top == 300)&&
            ($(serieZ).position().left == 300)
        ){
            $( "#texte5" ).animate({ top: texteDrop }, temps);
            $( "#texte1,#texte2,#texte3,#texte4" ).animate({ top: texteDrop, opacity: coulFade }, temps);    
            $("body").animate({ backgroundColor: coul, color: coulNoir},temps);
            $("#grand").animate({ backgroundColor: coul},temps);
            $("#image2").animate({ width:"0px" }, temps);
        
            $("#a1").animate({ left: "-80px", top: "60px", backgroundColor:"#9e978f" }, temps);
            $("#a2").animate({ left: "-200px", top: "200px", backgroundColor:"#1f1611" }, temps);
            $("#a3").animate({ left: "-60px", top: "60px", backgroundColor:"#edceaf" }, temps);
            $("#a4").animate({ left: "-70px", top: "110px", backgroundColor:"#efe5e4" }, temps);
            $("#a5").animate({ left: "-90px", top: "40px", backgroundColor:"#ece6e6" }, temps);
            $("#a6").animate({ left: "-150px", top: "290px", backgroundColor:"#ececca" }, temps);
        
            $("#b1").animate({ left: "-90px", top: "100px", backgroundColor:"#2f221a" }, temps);
            $("#b2").animate({ left: "-70px", top: "0px", backgroundColor:"#130e0b" }, temps);
            $("#b3").animate({ left: "-120px", top: "20px", backgroundColor:"#e7ecd5" }, temps);
            $("#b4").animate({ left: "-80px", top: "140px", backgroundColor:"#eae4e4" }, temps);
            $("#b5").animate({ left: "-100px", top: "300px", backgroundColor:"#ebebe3" }, temps);
            $("#b6").animate({ left: "-60px", top: "200px", backgroundColor:"#eccfa3" }, temps);
        
            $("#c1").animate({ left: "-60px", top: "200px", backgroundColor:"#a89ea6" }, temps);
            $("#c2").animate({ left: "-60px", top: "60px", backgroundColor:"#563830" }, temps);
            $("#c3").animate({ left: "-150px", top: "160px", backgroundColor:"#ebd1b8" }, temps);
            $("#c4").animate({ left: "-100px", top: "100px", backgroundColor:"#ecb4b3" }, temps);
            $("#c5").animate({ left: "-70px", top: "0px", backgroundColor:"#ecc0b5" }, temps);
            $("#c6").animate({ left: "-80px", top: "50px", backgroundColor:"#e99068" }, temps);
        
            $("#d1").animate({ left: "-120px", top: "80px", backgroundColor:"#aa9aa7" }, temps);
            $("#d2").animate({ left: "-210px", top: "30px", backgroundColor:"#ac8b92" }, temps);
            $("#d3").animate({ left: "-60px", top: "160px", backgroundColor:"#e58a91" }, temps);
            $("#d4").animate({ left: "-130px", top: "260px", backgroundColor:"#eb898a" }, temps);
            $("#d5").animate({ left: "-160px", top: "120px", backgroundColor:"#d57867" }, temps);
            $("#d6").animate({ left: "-90px", top: "40px", backgroundColor:"#904f39" }, temps);
        
            $("#e1").animate({ left: "-180px", top: "150px", backgroundColor:"#6e3228" }, temps);
            $("#e2").animate({ left: "-160px", top: "180px", backgroundColor:"#6b3326" }, temps);
            $("#e3").animate({ left: "-80px", top: "80px", backgroundColor:"#994c38" }, temps);
            $("#e4").animate({ left: "-60px", top: "240px", backgroundColor:"#603223" }, temps);
            $("#e5").animate({ left: "-220px", top: "80px", backgroundColor:"#312620" }, temps);
            $("#e6").animate({ left: "-130px", top: "130px", backgroundColor:"#5b5348" }, temps);

            $("#f1").animate({ left: "-90px", top: "150px", backgroundColor:"#511a17" }, temps);
            $("#f2").animate({ left: "-60px", top: "70px", backgroundColor:"#6b3326" }, temps);
            $("#f3").animate({ left: "-100px", top: "110px", backgroundColor:"#994c38" }, temps);
            $("#f4").animate({ left: "-150px", top: "190px", backgroundColor:"#603223" }, temps);
            $("#f5").animate({ left: "-120px", top: "140px", backgroundColor:"#312620" }, temps);
            $("#f6").animate({ left: "-210px", top: "220px", backgroundColor:"#5b5348" }, temps);
        }
});
    
    
});





