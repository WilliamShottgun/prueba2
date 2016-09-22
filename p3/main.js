	var Juan = new Alumno("Juan",[3,4,5]);
	var Pedro = new Alumno("Pedro",[6,7,6]);
	
	

	function Alumno(nombre, notas, promedio){
			this.nombre = nombre;
			this.notas = notas;
			this.promedio = function(){
				
				var suma = 0;
				for(i=0; i < notas.length; i++) { 
					if(isNaN(Alumno.nombre)|| !isNaN(Alumno.notas) ){
					suma = (suma+notas[i]);
					promedio = suma;
				   console.log(promedio)   
					}
					
				}

			return (promedio/notas.length);

	}
}