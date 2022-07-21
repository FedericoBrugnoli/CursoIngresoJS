/*
Al selecionar un destino , indicar el punto cardinal
de nuestro 
país en donde se encuentra 
Norte, Sur, 
Este u Oeste
*/
function mostrar()
{
	let destino;
	let mensaje = "El destino se encuentra al";

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			mensaje += " Oeste."
		break;

		case "Cataratas":
			mensaje += " Norte."
		break;

		case "Mar del plata":
			mensaje += " Este."
		break;

		default:
			mensaje += " Sur."
		break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN

	