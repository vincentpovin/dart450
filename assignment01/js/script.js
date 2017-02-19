



$(document).ready(function() {


    $('#cinq, #six').click(function () {
       
        if  (
                ($('#deux').width() == 150)
            ){
        
                $(this).animate({ width:"300px"}, 200 );
            }
    });
    
    
    
    $('#trois, #quatre').click(function () {
        
        if  (
                ($('#deux').width() == 150)
            ){
        
                $(this).animate({ height:"300px"}, 200 );
            }
    });    
    
    
    
    $('#un').click(function () {
        
        if  (
                ($('#trois').height() == 300) &&
                ($('#quatre').height() == 300) &&
                ($('#cinq').width() == 300) &&
                ($('#six').width() == 300)
            ){
                $(this).animate({ height:"150px", width:"150px"}, 200 );
                $('#trois').animate({ width:"25px", height:"425px", top:"0px"}, 200 );
                $('#quatre').animate({ width:"25px", height:"425px", bottom:"0px"}, 200 );
                $('#cinq').animate({ height:"25px", width:"425px", right:"0px"}, 200 );
                $('#six').animate({ height:"25px", width:"425px", left:"0px"}, 200 );
                $('#deux').animate({ height:"450px", width:"450px"}, 200 );
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
                $('#trois, #quatre').animate({ height:"0px"}, 200 );
                $('#cinq, #six').animate({ width:"0px"}, 200 );
                $('#un').animate({ width:"425px", height:"425px"}, 200 );
            }   
   
    });
    
        
    
    $('#un').click(function () {
        
        if  (
                ($(this).width() == 425) &&
                ($(this).height() == 425)
            ){
             
                $('#un').animate({ width:"300px", height:"300px"}, 200 ); 
            
                $('#deux').animate({ backgroundColor:"white"}, 200 );   


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
                $('.r').fadeOut(200, function(){ $('.r').remove();});
                $('#trois, #quatre').animate({ height:"225px", width:"225px"}, 200 );
                $('#cinq, #six').animate({ width:"225px", height:"225px"}, 200, function() {
                    $('#deux').animate({ backgroundColor:"black"}, 200 ); 
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
                $('#trois, #quatre').animate({ height:"0px"}, 200, function() {
                    $('#cinq, #six').animate({ width:"0px"}, 200, function() {
                        $('#un').animate({ width:"0px", height: "0px"}, 400);
                        $('body').append('<div id="rond"></div>');
                        $('#deux').animate({ width:"0px", height: "0px"}, 400 );
                        $('#grand').animate({ width:"0px", height: "0px"}, 400, function() {
                            $('#rond').animate({ width:"50px", height: "50px"}, 200);
                        });
                    });
                });
            }
    });
    
    
    $('#rond').click(function () {
        
        if  (
                ($(this).height() == 50) &&    
                ($('#un').height() == 0) &&
                ($('#deux').height() == 0)
            ){                
                $('#trois, #quatre').animate({ height:"0px"}, 200, function() {
                    $('#cinq, #six').animate({ width:"0px"}, 200, function() {
                        $('#un').animate({ width:"0px", height: "0px"}, 400);
                        $('body').append('<div id="rond"></div>');
                        $('#deux').animate({ width:"0px", height: "0px"}, 400 );
                        $('#grand').animate({ width:"0px", height: "0px"}, 400, function() {
                            $('#rond').animate({ width:"50px", height: "50px"}, 200);
                        });
                    });
                });
            }
    });
    
    

    


    
});

