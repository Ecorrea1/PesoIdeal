// JavaScript Document
//Calcular el peso ideal
var imagen="";
function calcularPesoIdeal(edad){
	var edadIngresada 	= edad;
	var pesoIdeal		= edadIngresada * 2 + 8 ; 
	return pesoIdeal;
}
function capturarDatos(){
	var nombre		= document.getElementById('txt_nombre').value;
	var edad			= document.getElementById('txt_edad').value;
	var pesoActual 	= document.getElementById('txt_peso_actual').value;
	var pesoIdeal	= calcularPesoIdeal(edad);
	var estadoPeso	= determinarEstadoPeso(pesoActual,pesoIdeal);
	mostrarResultado(nombre,pesoIdeal,estadoPeso);
	
}
function determinarEstadoPeso(pesoActual,pesoIdeal){
	var estadoPeso="";
	if(pesoActual == pesoIdeal){
		estadoPeso	= "Peso ideal";
		imagen 		= "emoji-peso-ideal.png";
	}else{
		if(pesoActual > pesoIdeal){
			estadoPeso 	= "Sobre peso";
			imagen 		="emoji-sobre-peso.png";
		}else{
			estadoPeso 	= "Bajo peso";
			imagen		= "emoji-bajo-peso.png";
		}
	}
	return estadoPeso;
}
function mostrarResultado(nombre,pesoIdeal,estadoPeso){
	var elemento = document.getElementById('resultado');
	elemento.innerHTML = "El peso ideal de "+ nombre +" es "+ pesoIdeal +". Su estado de peso es <b>"+ estadoPeso +"</b>";
	
	var contenedorImagen = document.getElementById('resultadoImagen');
	contenedorImagen.innerHTML ="<img src='img/"+ imagen + "'>";
	

}