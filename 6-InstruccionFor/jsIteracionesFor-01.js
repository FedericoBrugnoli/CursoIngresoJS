/*
al presionar el botón mostrar 
10 repeticiones con números ASCENDENTE, desde el 1 al 10.
*/
function mostrar()
{
	let numero;
	let contador;
	let acumulador;

	numero = 0;

	for(contador = 0; contador < 10; contador++)
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
		acumulador += numero;

	}

	document.write(numero);
}