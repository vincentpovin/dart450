




// la durée des animations
var temps = 300;
var tempsmort = 2000;





// la durée entre chaque passage du dialogue
const LINE_DELAY = 1000;

// Indique la ligne du dialogue qui sera affichée
var currentLine = 0;










// Fonction débute lorsque le site est téléchargé
$(document).ready(function() {

    



// Change les dimensions des rectangles 5 et 6
    $('#cinq, #six').click(function () {
       
        if  (
                ($('#deux').width() == 150)
            ){
        
                $(this).animate({ width:"300px"}, temps );
            }
    });
 




// Change les dimensions des rectangles 3 et 4
    $('#trois, #quatre').click(function () {
        
        if  (
                ($('#deux').width() == 150)
            ){
        
                $(this).animate({ height:"300px"}, temps );
            }
    });    

    
    

    
// Change les dimensions de tous les rectangles
    $('#un').click(function () {
        
        if  (
                ($(this).height() == 50) &&
                ($('#trois').height() == 300) &&
                ($('#quatre').height() == 300) &&
                ($('#cinq').width() == 300) &&
                ($('#six').width() == 300)
            ){
                $(this).animate({ height:"150px", width:"150px"}, temps );
                $('#trois').animate({ width:"25px", height:"425px", top:"0px"}, temps );
                $('#quatre').animate({ width:"25px", height:"425px", bottom:"0px"}, temps );
                $('#cinq').animate({ height:"25px", width:"425px", right:"0px"}, temps );
                $('#six').animate({ height:"25px", width:"425px", left:"0px"}, temps );
                $('#deux').animate({ height:"450px", width:"450px"}, temps );
            }   
   
    });
    
    
    
    
    
// Change la couleur d'arrière-plan (noir) de tous les rectangles, à la fin du casse-tête
    $('#sept').click(function () {
        
        if  (
                ($(this).height() == 50) &&
                ($('#trois').height() == 300) &&
                ($('#quatre').height() == 300) &&
                ($('#cinq').width() == 300) &&
                ($('#six').width() == 300)
            ){
                $(this).animate({ backgroundColor:"#666666"}, temps );
                $('#trois').animate({ backgroundColor:"#666666"}, temps );
                $('#quatre').animate({ backgroundColor:"#666666"}, temps );
                $('#cinq').animate({ backgroundColor:"#666666"}, temps );
                $('#six').animate({ backgroundColor:"#666666"}, temps );
                $('#deux').animate({ backgroundColor:"#666666"}, temps );
            }   
   
    });

    



// Cache les rectangle 3,4,5 et 6. Agrandit le rectangle 1.
    $('#deux').click(function () {
        
        if  (
                ($('#trois').width() == 25) &&
                ($('#quatre').width() == 25) &&
                ($('#cinq').height() == 25) &&
                ($('#six').height() == 25) &&
                ($('#un').height() == 150)

            ){
                $('#trois, #quatre').animate({ height:"0px"}, temps );
                $('#cinq, #six').animate({ width:"0px"}, temps );
                $('#un').animate({ width:"425px", height:"425px"}, temps );
            }   
   
    });




 // Produit une LOOP jusqu'à ce que les carrées noirs remplissent l'espace disponible.
    $('#un').click(function () {
        
        if  (
                ($(this).width() == 425) &&
                ($(this).height() == 425)
            ){
             
                $('#un').animate({ width:"300px", height:"300px"}, temps ); 
            
                $('#deux').animate({ backgroundColor:"white"}, temps );   


                for (var i = 0; i < 9; i++) {
                    setTimeout(function(){
                    formeCarre();
                    }, 40*i);
                }
        
                function formeCarre() {
                $('#un').append('<div class="r"></div>');
                }   
            
            }
    });

    



// Produit une LOOP jusqu'à ce que les carrées noirs remplissent l'espace disponible.
    $('#un').click(function () {
        
        if  (
                ($(this).width() == 300)
            ){                
                $('#grand').animate({ backgroundColor:"#666666"}, temps );   
                $('.r').fadeOut(200, function(){ $('.r').remove();});
                $('#trois, #quatre').animate({ height:"225px", width:"225px"}, temps );
                $('#cinq, #six').animate({ width:"225px", height:"225px"}, temps, function() {
                    $('#deux').animate({ backgroundColor:"black"}, temps ); 
                    });

                }
    });






// Cache l'ensemble des rectangles et crée un cercle.
    $('#un').click(function () {
        
        if  (
                ($(this).height() == 300) &&    
                ($('#trois').height() == 225) &&
                ($('#quatre').height() == 225) &&
                ($('#cinq').height() == 225) &&
                ($('#six').height() == 225)
            ){                
                $('#trois, #quatre').animate({ height:"0px"}, temps, function() {
                    $('#cinq, #six').animate({ width:"0px"}, temps, function() {
                        $('#un').animate({ width:"0px", height: "0px"}, temps);
                        $('#deux').animate({ width:"0px", height: "0px"}, temps, function() {
                            $('#rond').animate({ width:"75px", height: "75px"}, temps);
                        });
                    });
                });
            }
    });

    



 // Enchainement d'animation formant plusieurs cercle.
    $('#rond').click(function () {
        
        if  (
                ($(this).height() == 75)  
            ){                 
                $('#rond').animate({ height:"150px", width:"150px", backgroundColor:"#black" }, temps);    
                $('#rond2').animate({ height:"75px", width:"75px" }, temps, function() {
                    
                    $('#rond').animate({ height:"225px", width:"225px", backgroundColor:"#FAFAD2"}, temps);
                    $('#rond2').animate({ height:"150px", width:"150px", backgroundColor:"black" }, temps);
                    $('#rond3').animate({ width:"75px", height: "75px"}, 200, function() {
                        
                        $('#rond').animate({ height:"300px", width:"300px", backgroundColor:"#90EE90"}, temps);
                        $('#rond2').animate({ height:"225px", width:"225px", backgroundColor:"#FAFAD2"}, temps);
                        $('#rond3').animate({ width:"150px", height: "150px", backgroundColor:"black"}, temps);
                        $('#rond4').animate({ width:"75px", height: "75px"}, temps, function() {
                            
                            $('#rond').animate({ height:"375px", width:"375px", backgroundColor:"#87CEFA"}, temps);
                            $('#rond2').animate({ height:"300px", width:"300px", backgroundColor:"#90EE90"}, temps);
                            $('#rond3').animate({ width:"225px", height: "225px", backgroundColor:"#FAFAD2"}, temps);
                            $('#rond4').animate({ width:"150px", height: "150px", backgroundColor:"black"}, temps);
                            $('#rond5').animate({ width:"75px", height: "75px"}, temps, function() {
                            
                                $('#rond').animate({ height:"450px", width:"450px", backgroundColor:"#FFB6C1"}, temps);
                                $('#rond2').animate({ height:"375px", width:"375px", backgroundColor:"#87CEFA"}, temps);
                                $('#rond3').animate({ width:"300px", height: "300px", backgroundColor:"#90EE90"}, temps);
                                $('#rond4').animate({ width:"225px", height: "225px", backgroundColor:"#FAFAD2"}, temps);
                                $('#rond5').animate({ width:"150px", height: "150px", backgroundColor:"black"}, temps);
                                $('#rond6').animate({ width:"75px", height: "75px"}, temps);
                                
                            });
                        });
                    });
                });
            }
    });




    
 // Change la couleur de certains cercles, pour former un oeil.
    $('#rond').click(function () {
        
        if  (
                ($(this).height() == 450)&&
                ($('#rond6').height() == 75)  
            ){                 
                $('#rond').animate({backgroundColor:"black"}, temps);
            }
    });




    
 // Change la couleur de certains cercles pour former un oeil.
    $('#rond2').click(function () {
        
        if  (
                ($(this).height() == 375)&&
                ($('#rond6').height() == 75)  

            ){                 
                $('#rond2').animate({backgroundColor:"white"}, temps);
            }
    });




    
 // Change la couleur de certains cercles pour former un oeil.
    $('#rond3').click(function () {
        
        if  (
                ($(this).height() == 300) &&
                ($('#rond6').height() == 75)  
            ){                 
                $('#rond3').animate({backgroundColor:"white"}, temps);
            }
    });

    



  // Change la couleur de certains cercles pour former un oeil.
    $('#rond4').click(function () {
        
        if  (
                ($(this).height() == 225)&&
                ($('#rond6').height() == 75)   
            ){                 
                $('#rond4').animate({backgroundColor:"#999999"}, temps);
            }
    });




// Change la dimension du cercle 6 pour former la pupille.
    $('#rond5').click(function () {
        
        if  (
                ($(this).height() == 150)&&
                ($('#rond6').height() == 75)  

            ){                 
                $('#rond6').animate({ height:"25px", width:"25px" }, temps);
            }
    });




// Change la dimension du cercle 6 pour former la pupille.
    $('#rond6').click(function () {
        
        if  (
                ($(this).height() == 25)  
            ){                 
                $('#rond6').animate({ height:"24px", width:"24px", left: '20%', top: '40%'}, temps);    
                $('#rond4').animate({ left: '70%', top: '40%'}, temps);
            }
    });




 
    $('#rond6').click(function () {
        
        if  (
                ($(this).height() == 24)  
            ){                 
                $('#rond6').animate({ height:"23px", width:"23px", left: '80%', top: '40%'}, temps);    
                $('#rond4').animate({ left: '30%', top: '60%'}, temps);
            }
    });




    
    $('#rond6').click(function () {
        
        if  (
                ($(this).height() == 23)  
            ){                 
                $('#rond6').animate({ height:"74px", width:"74px", left: '50%', top: '50%'}, temps);    
                $('#rond4').animate({ left: '50%', top: '50%'}, temps);
                $('#grand').animate({ height:"0px", width:"0px"}, temps);
            }
    });





    $('#rond2, #rond3').click(function () {
        
        if  (
                ($('#rond6').height() == 74)  
            ){                 
                $('#rond, #rond2, #rond3, #rond4, #rond5, #rond6').animate({height:"0px", width:"0px", backgroundColor:"white"}, temps);
                $('#web, #moi').animate({ height: "auto", width:"150px" });
                $('#grand').animate({ height:"150px", width:"150px" }, temps, function() {
                    $('#parole').animate({ height:"50px", width:"50px", backgroundColor: "black" }, temps);
                });
            }
    });

    
    
    

    $('#parole').click(function () {
        if  (
                ($(this).height() == 50) &&    
                ($('#grand').height() == 150)  
            ){
                $('#parole').animate({ height:"150px", width:"150px", backgroundColor: "white" }, temps);
                showLine();
            }
    });
    

    
});




function showLine () {

  // Set both divs to be blank
  $('#web, #moi').text('');

  // Get the name of the current speaker, which is the same
  // as the CSS id for the div to put their text in
  var speaker = dialog[currentLine].name

  // Get the line they should speak
  var line = dialog[currentLine].line

  // Set the appropriate div to have the line in it
  $('#' + speaker).text(line);

  // Increase our index into the array by one to advance the dialog
  currentLine++;

  // Check if there are still lines remaining in the array of dialog
  if (currentLine < dialog.length) {
    // If so, set another timeout to say the next line
    setTimeout(showLine,LINE_DELAY);
  }
    
    else{
        $('#moi, #web').animate({ height:"0px", width:"0px"}, temps);
        $('#parole').animate({ height:"50px", width:"50px"}, temps);
        $('#grand').animate({ height:"450px", width:"450px", backgroundColor: "#999999" }, tempsmort);
        $('#sept').animate({ height:"50px", width:"50px", backgroundColor: "white" }, tempsmort);
        $('#deux').animate({ height:"150px", width:"150px", backgroundColor: "black" }, tempsmort);
        $('#trois').animate({ height:"150px", width:"150px", backgroundColor: "#FFB6C1" }, tempsmort);
        $('#quatre').animate({ height:"150px", width:"150px", backgroundColor: "#90EE90" }, tempsmort);
        $('#cinq').animate({ height:"150px", width:"150px", backgroundColor: "#87CEFA" }, tempsmort);
        $('#six').animate({ height:"150px", width:"150px", backgroundColor: "#FAFAD2" }, tempsmort, function() {
            $('#parole').animate({ height:"0px", width:"0px" }, temps);
        });
    }
    


}





