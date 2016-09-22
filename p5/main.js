$(document).ready(function(){

			$("body").keydown(function(e) {
			  if(e.keyCode == 39) { // left
			    $('#foto').css({
			    	
			    	marginLeft: "+=50px"
			    });
			  }
			  else if(e.keyCode == 37) { // right
			    $('#foto').css({
			    	
			    	marginLeft: "-=50px"
			    });
			  }
			});

		});
	
