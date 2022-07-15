
/*
1. Ingresar el valor del dólar oficial y el valor del dólar blue.
Mostrar la diferencia expresada en porcentaje entre una cotización y otra.
*/
function sumar()
{

	// defino variables
	let dolarOficial;
	let dolarBlue;
	let diferencia;
	let diferenciaPorcentual;
	let mensaje;

	//asigno valores
	dolarOficial = document.getElementById('txtIdNumeroUno').value;
	dolarOficial = parseFloat(dolarOficial);
	dolarBlue = document.getElementById('txtIdNumeroDos').value;
	dolarBlue = parseFloat(dolarBlue);

	//defino la diferencia porcentual
	diferencia = dolarOficial/dolarBlue;
	diferenciaPorcentual = diferencia * 100

	//asigno el mensaje
	mensaje = "La diferencia es del: " + diferenciaPorcentual + "%.";

	alert(mensaje);

}



