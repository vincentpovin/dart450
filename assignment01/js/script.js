

    var toggleWidth = $(this).width() == "800px";



$(document).ready(function() {


    $('#cinq, #six').click(function () {
        $(this).animate({ width: "300"}, 200 );
    });
    
    $('#trois, #quatre').click(function () {
        $(this).animate({ height: "300px"}, 200 );
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
    
    
    
    
    


    
});

