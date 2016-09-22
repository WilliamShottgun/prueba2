$(document).ready(function(){
   var contador = 4;
    $("div").on('click',function(e){
         

        $('ul').append('<li> elemento '+contador+'</li> <br>');
        contador++;
        
    });
    $('li').on('click',function(e){
    	e.stopPropagation();
					
				})

        
});