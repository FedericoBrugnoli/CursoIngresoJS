/*
Al presionar el botón pedir  números 
hasta que el usuario quiera,
sumar los que son positivos y multiplicar
los negativos.*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;

	contador = 0;

	sumaPositivos = 0;
	
	multiplicacionNegativos = 1;
	
	respuesta = "s";

	while(respuesta == "s")
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
		if (numero > 0) 
			{
				sumaPositivos += numero;
			}else
				{
					multiplicacionNegativos *= numero;
				}

		contador ++;	
		respuesta = prompt("desea continuar? s/n").toLowerCase();
	
	}

	if (multiplicacionNegativos == 1) 
						{
							multiplicacionNegativos = 0;
						}
						
	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN

/*
Al presionar el botón pedir  números 
hasta que el usuario quiera,
sumar los que son positivos y multiplicar
los negativos.
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

	document.getElementById("txtIdSuma").value = acumulador

}//FIN DE LA FUNCIÓN*/