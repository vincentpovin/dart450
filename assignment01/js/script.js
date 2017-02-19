
var temps = 300;


$(document).ready(function() {


    $('#cinq, #six').click(function () {
       
        if  (
                ($('#deux').width() == 150)
            ){
        
                $(this).animate({ width:"300px"}, temps );
            }
    });
    
    
    
    $('#trois, #quatre').click(function () {
        
        if  (
                ($('#deux').width() == 150)
            ){
        
                $(this).animate({ height:"300px"}, temps );
            }
    });    
    
    
    
    $('#un').click(function () {
        
        if  (
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
    
    
    
    
    $('#rond').click(function () {
        
        if  (
                ($(this).height() == 450)  
            ){                 
                $('#rond').animate({backgroundColor:"black"}, temps);
            }
    });
    
    
    
    
    $('#rond2').click(function () {
        
        if  (
                ($(this).height() == 375)  
            ){                 
                $('#rond2').animate({backgroundColor:"white"}, temps);
            }
    });
    
    
    
    $('#rond3').click(function () {
        
        if  (
                ($(this).height() == 375)  
            ){                 
                $('#rond2').animate({backgroundColor:"black"}, temps);
            }
    });
    
    
    
    
    
    
    
   
            
    

    


    
});

