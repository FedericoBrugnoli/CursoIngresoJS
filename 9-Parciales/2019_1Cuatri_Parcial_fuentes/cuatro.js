/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10"
*/
function mostrar()
{
	let primerNumero;
	let segundoNumero;
	let mensaje;
	let resta;
	let suma;

	primerNumero = prompt("Ingrese el primer número: ");
	primerNumero = parseInt(primerNumero);

	segundoNumero = prompt("Ingrese el segundo número: ");
	segundoNumero = parseInt(segundoNumero);

	if (primerNumero == segundoNumero) 
		{
			mensaje = primerNumero.toString() + segundoNumero.toString();
		}else if (primerNumero > segundoNumero) 
			{
				resta = primerNumero - segundoNumero;
			}else
				{
					suma = primerNumero + segundoNumero;
				}
	if (resta > 10) 
		{
			mensaje = "La resta da: " + resta + " y superó el 10";
		}
	alert(mensaje);
}
