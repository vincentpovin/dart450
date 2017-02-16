

    var toggleWidth = $(this).width() == "800px";



$(document).ready(function() {


    $('.cinq, .six').click(function () {
        $(this).animate({ width: "300"}, 200 );
    });
    
    $('.trois, .quatre').click(function () {
        $(this).animate({ height: "300px"}, 200 );
    });
    
    $('.un').click(function () {
        if ($('.trois, .quatre').height() == 300) {
        $(this).animate({ height: "150px", width: "150px"}, 200 );
        }    
    });
    
    $('.un').click(function () {
        if ($('.trois').height() == 300) {
        $(this).animate({ height: "150px", width: "150px"}, 200 );
        }    
    });
    
    
    
    
    


    
});

