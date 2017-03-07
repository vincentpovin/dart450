// JavaScript Document
$(document).ready(function(){
	

    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
        $('.menu').toggleClass('voir');
    });
    
    
    
    $('#nav-info').click(function(){
        $(this).toggleClass('rond');
    });
    
    $("body").mousewheel(function(event, delta) {
      this.scrollLeft -= (delta * 30);
      event.preventDefault();
   });
    
    
	
});