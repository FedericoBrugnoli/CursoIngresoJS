/*
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/
function mostrar()
{
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Febrero":
			mensaje = "Este mes no tiene mas de 29 dias."
		break;

		default:
			mensaje = "Este mes tiene 30 dias o mas."
		break;

	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN