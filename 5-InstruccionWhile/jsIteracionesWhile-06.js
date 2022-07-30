/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/function mostrar()
{
	let contador;
	let acumulador;
	let numero;
	let promedio;

	contador = 0;
	acumulador = 0

	while(contador < 5)
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
		acumulador += numero;

		contador ++;	
	}
		promedio = acumulador/contador
		document.getElementById("txtIdSuma").value = acumulador;
		document.getElementById("txtIdPromedio").value = promedio;
	
}//FIN DE LA FUNCIÓN

/*
	for(contador = 0; contador < 5; contador++)
	{
		
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
		acumulador += numero;

	}

	promedio = acumulador/contador
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;


for(valorvariablecontrol; condicionvariablecontrol; loquequieroquehaga)
*/
