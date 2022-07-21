/*
Al seleccionar un destino informar 
si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			mensaje = "El destino es un lugar frío."
		break;

		default:
			mensaje = "El destino es un lugar calido."
		break;
	}	

	alert(mensaje);
}//FIN DE LA FUNCIÓN





/*{
	let destino;
	let clima;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;

	if (destino == "Bariloche" || destino == "Ushuaia") 
		{
			clima = frio;
		}else
			{
				clima = caluroso;
			}
	mensaje = "El clima es " + clima;

	alert(mensaje);
}*/

















