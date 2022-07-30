/*
Al presionar el botón pedir  números 
hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let contador;
	let acumulador;
	let respuesta;
	let promedio;

	respuesta = "s";
	acumulador = 0;
	contador = 0

	while(respuesta == "s")
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
		acumulador += numero;

		contador ++;	
		respuesta = prompt("desea continuar? s/n").toLowerCase();
	}

	promedio = acumulador/contador
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN