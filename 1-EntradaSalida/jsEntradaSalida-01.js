/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	
	//defino las variables
	let ladosMayores;
	let ladosMenores;
	let varillasMayores;
	let varillasMenores;
	let perimetro;
	let mensaje;

	//asigno variables
	ladosMayores = prompt("Ingrese la medida de los lados mayores: ");
	ladosMayores = parseFloat(ladosMayores);
	ladosMenores = prompt("Ingrese la medida de los lados menores");
	ladosMenores = parseFloat(ladosMenores);

	perimetro = 2 * (ladosMayores + ladosMenores);

	mensaje = "La cantidad de papel a utilizar es de: " + perimetro;

	alert(mensaje);
}

