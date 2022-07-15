/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit 
debemos mostrar la temperatura en Centígrados 
con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados 
debemos mostrar la temperatura en Fahrenheit 
(ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{

	let farenheit;
	let centigrados;

 	farenheit = document.getElementById("txtIdTemperatura").value;
 	farenheit = parseInt(farenheit);
 	centigrados = (farenheit - 32) * 5/9;


 	document.getElementById("A- de Fahrenheit a Centígrados").value = alert( + farenheit + " grados Farenheit son " + centigrados + " son grados centigrados");

	
}

function CentigradosFahrenheit () 
{
	let centigrados;
	let farenheit;

	centigrados = document.getElementById("txtIdTemperatura").value;
	centigrados = parseInt(centigrados);
	farenheit = (centigrados * 9/5) + 32;

	document.getElementById("B- de Centígrados a Fahrenheit").value = alert( + centigrados + " grados centigrados son " + farenheit + " grados Farenheit.");
}
