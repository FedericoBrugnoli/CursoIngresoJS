/*
Bienvenidos.
(IF)Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los divido,
de lo contrario los sumo.
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y es menor a 50".*/
function mostrar()
{
	let primerNumero;
	let segundoNumero;
	let division;
	let suma;
	let mensaje;

	primerNumero = prompt("Ingrese el primer número: ");
	primerNumero = parseInt(primerNumero);
	segundoNumero = prompt("Ingrese el segundo número: ");
	segundoNumero = parseInt(segundoNumero);

	if (suma < 50) 
		{
			mensaje = "La suma es: " + suma + " y es menor a 50.";
		}
	if (primerNumero == segundoNumero) 
		{
			mensaje = "Los numeros son: " + primerNumero + " y " + segundoNumero;		
		}
	if (primerNumero > segundoNumero) 
		{
			division = primerNumero / segundoNumero;

			
		}else
			{
				suma = primerNumero + segundoNumero;
			}
		alert(mensaje);
}
