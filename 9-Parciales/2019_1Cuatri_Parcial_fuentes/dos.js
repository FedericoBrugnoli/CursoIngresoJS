/*
A una pareja se le pide los datos para mostrar un mensaje " 
ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, 
que sumados son xx kilos y
el promedio de peso xx 
*/

function mostrar()
{

	let nombreEl;
	let nombreElla;
	let pesoEl;
	let pesoElla;
	let pesoPromedio;
	let pesoSumado;
	let mensaje;

	nombreEl = prompt("Él se llama: ");
	nombreElla = prompt("Ella se llama: ");
	pesoEl = prompt("Él pesa: ");
	pesoEl = parseInt(pesoEl);
	pesoElla = prompt("Ella pesa: ");
	pesoElla = parseInt(pesoElla);
	pesoSumado = pesoEl + pesoElla;
	pesoPromedio = pesoSumado / 2;

	mensaje = "Él se llama " + nombreEl + " y ella se llama " + nombreElla;
	mensaje += " , él pesa " + pesoEl + " y ella pesa " + pesoElla;
	mensaje += ". Sumados pesan " + pesoSumado;
	mensaje += " y el promedio de peso es " + pesoPromedio;

	alert(mensaje);


}
