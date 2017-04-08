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
var coulNoir = "#808080";
var coulFade = "0.4";


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

// Tous les carrés sauf A1
var serieZmoinsA1 = '#a2,#a3,#a4,#a5,#a6,#b1,#b2,#b3,#b4,#b5,#b6,#c1,#c2,#c3,#c4,#c5,#c6,#d1,#d2,#d3,#d4,#d5,#d6,#e1,#e2,#e3,#e4,#e5,#e6,#f1,#f2,#f3,#f4,#f5,#f6';

// Tous les déclencheur d'animation (scrollmagic)
var animZ = '#anim1,#anim2,#anim3,#anim4,#anim5,#anim6,#anim7,#anim8,#anim9,#anim10,#anim11,#anim12,#anim13,#anim14';











// Fonction débute lorsque le site est téléchargé
$(document).ready(function() {

    
    
    
// Enlève le son de la «plage»
var audio2 = document.getElementById("audio2");
audio2.volume = 0;  
 
// Texte descend à l'ouverture du site
$( "#texte1" ).animate({ top: texteDrop }, tempsLent);

// Fait apparaitre le point d'interrogation à l'ouverture du site
$( serieInterrogation ).animate({ height:grand }, tempsLent);

// Permet de faire apparaitre en fadeIn le gif animé et la photo de la fin
$("#imagez").fadeOut();
$("#imageplage").fadeOut();
 

// Animation du point d'interrogation    
$(serieInterrogation).click(function () {   
// Condition : point d'interrogation doit être vide (noir)
    if  (
            ($(serieInterrogationVide).height() == 0)
        ){
// Fait descendre le texte et les carrées de haut en bas, une rangé après l'autre
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
// Enlève le positionnement «fixed» du DIV (#full) comprenant les activateurs d'animation SCROLLMAGIC
// Le positionnement RELATIF permet de défiler la page vers le bas afin d'activer les fonctions SCROLLMAGIC
                                    $("#full").removeClass("fix");
                                    $("#full").addClass("relat", function() {
// Remplit le point d'interrogation
                                        $(serieInterrogation).animate({ height:grand }, temps);
                                        $( "#texte1,#texte2" ).animate({ top: texteDrop, opacity: coulFade }, temps);
                                        $( "#texte3" ).animate({ top: texteDrop }, temps, function() {
// Fait apparaitre l'image cachée derrière les carrés
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
// Condition : tout les carré se retrouvent au même endroit
    if  (
            ($(serieZ).position().top == 180)&&
            ($(serieZ).position().left == 300)
        ){
// Changement la couleur des carrés et les déplace en bas
            $(serieZ).animate({ backgroundColor:"white", top: 300 }, temps);
// Animation du texte vers le bas
            $( "#texte4" ).animate({ top: texteDrop }, temps);
            $( "#texte1,#texte2,#texte3" ).animate({ top: texteDrop, opacity: coulFade }, temps);
// Apparition de la nouvelle image
            $("#image2").animate({ height:"360px" }, temps);
            $("#image1").animate({ height:"0px" }, temps);
        }
});
    
    
// Le carré blanc active le positionnement des autres carrés
$("#f6").click(function () {   
    if  (
// Condition : tout les carré se retrouvent en bas à droite
            ($(serieZ).position().top == 300)&&
            ($(serieZ).position().left == 300)
        ){
// Animation du texte vers le bas
            $("#texte5").animate({ top: texteDrop }, temps);
            $("#texte1,#texte2,#texte3,#texte4").animate({ top: texteDrop, opacity: coulFade }, temps);    
            $("body").animate({ backgroundColor: coul, color: coulNoir},temps);
            $("#image2").animate({ width:"0px" }, temps);

// Chaque carré se déplace vers une position définie à la gauche de la fenêtre
            $("#a1").animate({ left: "-90px", top: "60px", backgroundColor:"black" }, temps);
            $("#a2").animate({ left: "-240px", top: "240px", backgroundColor:"#1f1611" }, temps);
            $("#a3").animate({ left: "-60px", top: "60px", backgroundColor:"#edceaf" }, temps);
            $("#a4").animate({ left: "-90px", top: "120px", backgroundColor:"#eccfcc" }, temps);
            $("#a5").animate({ left: "-90px", top: "30px", backgroundColor:"#ece6e6" }, temps);
            $("#a6").animate({ left: "-150px", top: "290px", backgroundColor:"#ececca" }, temps);
        
            $("#b1").animate({ left: "-90px", top: "90px", backgroundColor:"#2f221a" }, temps);
            $("#b2").animate({ left: "-90px", top: "0px", backgroundColor:"#130e0b" }, temps);
            $("#b3").animate({ left: "-120px", top: "30px", backgroundColor:"#e7ecd5" }, temps);
            $("#b4").animate({ left: "-90px", top: "120px", backgroundColor:"#eae4e4" }, temps);
            $("#b5").animate({ left: "-120px", top: "300px", backgroundColor:"#ebebe3" }, temps);
            $("#b6").animate({ left: "-60px", top: "180px", backgroundColor:"#eccfa3" }, temps);
        
            $("#c1").animate({ left: "-60px", top: "210px", backgroundColor:"#9e8a9a" }, temps);
            $("#c2").animate({ left: "-60px", top: "60px", backgroundColor:"#563830" }, temps);
            $("#c3").animate({ left: "-150px", top: "160px", backgroundColor:"#ebd1b8" }, temps);
            $("#c4").animate({ left: "-100px", top: "90px", backgroundColor:"#ecb4b3" }, temps);
            $("#c5").animate({ left: "-60px", top: "0px", backgroundColor:"#ecc0b5" }, temps);
            $("#c6").animate({ left: "-90px", top: "60px", backgroundColor:"#e99068" }, temps);
        
            $("#d1").animate({ left: "-120px", top: "90px", backgroundColor:"#aa9aa7" }, temps);
            $("#d2").animate({ left: "-210px", top: "30px", backgroundColor:"#ac8b92" }, temps);
            $("#d3").animate({ left: "-60px", top: "180px", backgroundColor:"#e58a91" }, temps);
            $("#d4").animate({ left: "-120px", top: "270px", backgroundColor:"#eb898a" }, temps);
            $("#d5").animate({ left: "-180px", top: "120px", backgroundColor:"#d57867" }, temps);
            $("#d6").animate({ left: "-90px", top: "30px", backgroundColor:"#904f39" }, temps);
        
            $("#e1").animate({ left: "-180px", top: "150px", backgroundColor:"#6d3027" }, temps);
            $("#e2").animate({ left: "-150px", top: "180px", backgroundColor:"#7b4140" }, temps);
            $("#e3").animate({ left: "-90px", top: "90px", backgroundColor:"#e66065" }, temps);
            $("#e4").animate({ left: "-60px", top: "240px", backgroundColor:"#e68c7d" }, temps);
            $("#e5").animate({ left: "-210px", top: "90px", backgroundColor:"#ae5b4c" }, temps);
            $("#e6").animate({ left: "-120px", top: "120px", backgroundColor:"#362e28" }, temps);

            $("#f1").animate({ left: "-90px", top: "150px", backgroundColor:"#521a18" }, temps);
            $("#f2").animate({ left: "-60px", top: "90px", backgroundColor:"#693327" }, temps);
            $("#f3").animate({ left: "-90px", top: "120px", backgroundColor:"#9a4c3a" }, temps);
            $("#f4").animate({ left: "-150px", top: "190px", backgroundColor:"#603123" }, temps);
            $("#f5").animate({ left: "-120px", top: "120px", backgroundColor:"#352823" }, temps);
            $("#f6").animate({ left: "-210px", top: "210px", backgroundColor:"#585046" }, temps);
        }
});
    

// Déplace le carré vers le bas
$("#a1").click(function () {   
    if  (
// Condition : tous les carrés doivent être à droite du DIV principal (#grand)
            ($(serieZmoinsA1).position().left >= 0)
        ){
            $(this).animate({ top: "0px", left: "0px", backgroundColor:"blue" }, temps);
            $("body").addClass("scrollhide");    
            $("#texte6").animate({ top: texteDrop }, temps); 
            $( ".texte0,#texte1,#texte2,#texte3,#texte4,#texte5" ).animate({ top: texteDrop, opacity: coulFade }, temps);
            $("body").animate({ backgroundColor:"black" }, temps, function() {
                $("#image3").animate({ height:"360px" }, 0, function() {
                    $(serieZmoinsA1).remove();
                    $("#a1").animate({ top: "300px", left: "0px", backgroundColor:"#c2dbfb" }, temps);
                    $("#texte7").animate({ top: texteDrop }, temps); 
                    $( ".texte0,#texte1,#texte2,#texte3,#texte4,#texte5,#texte6" ).animate({ top: texteDrop, opacity: coulFade }, temps);
                    $("#image3").animate({ height:"0px" }, temps);
                    $("#image4").animate({ height:"360px" }, temps, function() {
                        $("#a1").remove();
                        $("#a1-2").animate({ height: "60px" }, 0, function() {
                        });
                    });
                });
            });
        }
});

    

    
// Les carrés se repositionnent dans le DIV principal au survol de la souris
$("#a2").hover(function () {   
    if  (
// Condition : tout les carrés doivent être à gauche du DIV principal (#grand)
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "0px", left: "60px" }, temps);
// Fait apparaitre une image d'arrière plan dans le carré
            $(this).addClass("voirimage3");
        }
});
    
$("#a3").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "0px", left: "120px" }, temps);
            $(this).addClass("voirimage3");
        }
});

$("#a4").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "0px", left: "180px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
$("#a5").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "0px", left: "240px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
$("#a6").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "0px", left: "300px" }, temps);
            $(this).addClass("voirimage3");
        }
});    
    
    
    
    
$("#b1").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "60px", left: "0px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
$("#b2").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "60px", left: "60px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
$("#b3").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "60px", left: "120px" }, temps);
            $(this).addClass("voirimage3");
        }
});

$("#b4").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "60px", left: "180px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
$("#b5").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "60px", left: "240px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
$("#b6").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "60px", left: "300px" }, temps);
            $(this).addClass("voirimage3");
        }
});


    

$("#c1").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "120px", left: "0px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
$("#c2").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "120px", left: "60px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
$("#c3").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "120px", left: "120px" }, temps);
            $(this).addClass("voirimage3");
        }
});

$("#c4").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "120px", left: "180px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
$("#c5").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "120px", left: "240px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
$("#c6").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "120px", left: "300px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
    
    

$("#d1").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "180px", left: "0px" }, temps);
            $(this).addClass("voirimage3");
        }
});    
    
$("#d2").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "180px", left: "60px" }, temps);
            $(this).addClass("voirimage3");
        }
});    
    
$("#d3").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "180px", left: "120px" }, temps);
            $(this).addClass("voirimage3");
        }
});    
    
$("#d4").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "180px", left: "180px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
$("#d5").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "180px", left: "240px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
$("#d6").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "180px", left: "300px" }, temps);
            $(this).addClass("voirimage3");
        }
});

    
    
    
$("#e1").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "240px", left: "0px" }, temps);
            $(this).addClass("voirimage3");
        }
});

$("#e2").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "240px", left: "60px" }, temps);
            $(this).addClass("voirimage3");
        }
});

$("#e3").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "240px", left: "120px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
$("#e4").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "240px", left: "180px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
$("#e5").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "240px", left: "240px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
$("#e6").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "240px", left: "300px" }, temps);
            $(this).addClass("voirimage3");
        }
});



    
$("#f1").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "300px", left: "0px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
$("#f2").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "300px", left: "60px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
$("#f3").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "300px", left: "120px" }, temps);
            $(this).addClass("voirimage3");
        }
});
    
$("#f4").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "300px", left: "180px" }, temps);
            $(this).addClass("voirimage3");
        }
});      

$("#f5").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "300px", left: "240px" }, temps);
            $(this).addClass("voirimage3");
        }
});    
    
$("#f6").hover(function () {   
    if  (
            ($(this).position().left < 0)
        ){
            $(this).animate({ top: "300px", left: "300px" }, temps);
            $(this).addClass("voirimage3");
        }
});


    

// Fait descendre le texte «M'en fou.» à chaque survole d'un carré
$(serieZ).hover(function () {   
    if  (
// Condition : tous les carrés doivent être à droite du DIV principal (#grand)
            ($(this).position().left < 0)
        ){
            $("body").each(function(){
// Ajoute un DIV de texte dans le code html
                $(this).append("<div class='texte0'><p>M'en fou.</p></div>");   
                $(".texte0").animate({ top: texteDrop }, temps); 
                $( "#texte1,#texte2,#texte3,#texte4,#texte5" ).animate({ top: texteDrop, opacity: coulFade }, temps);
            });
        }
});
    

// Déplace le dernier carré visible
$("#a1-2").click(function () {
// Agrandit le gif animé, bien qu'il soit toujours invisible
    $("#imagez").animate({ height:"100%" }, 0);
// Agrandit la photo de plage, bien qu'elle soit toujours invisible
    $("#imageplage").animate({ height:"100%" }, 0);    
    $("body").animate({ backgroundColor:"black" }, temps);
    $(this).animate({left: "300px"}, temps);
// Redimensionne l'image visible
    $("#image4").animate({width: "60px", height: "60px", backgroundSize: "60px"}, temps, function(){
// FadeIn du gif animé
        $("#imagez").fadeIn(10000);
        $("#a1-2").animate({bottom: "180px"}, temps);
        $("#image4").animate({top: "180px"}, temps, function(){
            $("#a1-2").animate({left: "150px"}, temps);
            $("#image4").animate({left: "150px"}, temps, function(){
                $("#a1-2").animate({height: "0px"}, temps);
                $("#image4").animate({height: "0px"}, temps);
                $("#texte8").animate({ top: texteDrop }, temps); 
                $( ".texte0,#texte1,#texte2,#texte3,#texte4,#texte5,#texte6,#texte7" ).animate({ top: texteDrop, opacity: coulFade }, temps, function(){
// Enlève la bar de défilement
                   $("#full").remove();
// FadeOut du texte
                   $(".texte0,#texte1,#texte2,#texte3,#texte4,#texte5,#texte6,#texte7,#texte8").fadeOut(10000);
// FadeIn de la photo de plage
                   $("#imageplage").delay(10000).fadeIn(20000);
// FadeOut de la musique
                   $("#audio1").delay(10000).animate({volume: 0}, 20000);
// FadeIn du son de plage
                   $("#audio2").delay(10000).animate({volume: 0.5}, 20000);
                });
            });
        });
    });
});


    
    
});