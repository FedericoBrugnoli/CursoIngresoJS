/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".
*/

function mostrar()
{
	let numeroUno;
	let numeroDos;
	let suma;
	let resta;
	let mensaje;

	numeroUno = prompt("Ingrese el primer número: ");
	numeroUno = parseInt(numeroUno);
	numeroDos = prompt("Ingrese el segundo número: ");
	numeroDos = parseInt(numeroDos);

	if (numeroUno > numeroDos) 
	{
		resta = numeroUno - numeroDos;
	}else
		{
			suma = numeroUno + numeroDos;
		}
	if (suma > 10)
		{
			mensaje = "La suma es: " + suma + " y superó el 10.";
		}
	if (numeroUno == numeroDos) 
		{
			mensaje = "Los numeros son: " + numeroUno + " y " + numeroDos;
		}
	alert(mensaje);

}
