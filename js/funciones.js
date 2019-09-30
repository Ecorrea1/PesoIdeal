// JavaScript Document
//Calcular el peso ideal
let imagen="";
// function calcularPesoIdeal(edad){
// 	const edadIngresada 	= edad;
// 	const pesoIdeal		= edadIngresada * 2 + 8 ; 
// 	return pesoIdeal;
// }
function capturarDatos(){
	const nombre		= document.getElementById('txt_nombre').value;
	const edad			= document.getElementById('txt_edad').value;
	const pesoActual 	= document.getElementById('txt_peso_actual').value;
	const pesoIdeal	= calcularPesoIdeal(edad);
	const estadoPeso	= determinarEstadoPeso(pesoActual,pesoIdeal);
	mostrarResultado(nombre,pesoIdeal,estadoPeso);
	
}
function determinarEstadoPeso(pesoActual,pesoIdeal){
	let estadoPeso="";
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
	let elemento = document.getElementById('resultado');
	elemento.innerHTML = "El peso ideal de "+ nombre +" es "+ pesoIdeal +". Su estado de peso es <b>"+ estadoPeso +"</b>";
	
	let contenedorImagen = document.getElementById('resultadoImagen');
	contenedorImagen.innerHTML ="<img  id='imagen'src='img/"+ imagen + "'>";
	

}