/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/
function mostrar()
{
	let hora;
	let mensaje;

	hora = document.getElementById("txtIdHora").value;

	switch(hora){
		case "8":
		case "9":
		case "10":
			mensaje = "Es de mañana"
		break;

		default:
			mensaje = "Nada";
		break;
	}	
	
	alert(mensaje);


}//FIN DE LA FUNCIÓN