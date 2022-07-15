/*Pedir por prompt el precio y el porcentaje de descuento,
mostrar el precio final con descuento por id.
*/

function mostrar()
{

	let precio;
	let descuento;
	let precioFinal;

	precio = prompt('Inserte el precio: ');
	precio = parseInt(precio);
	descuento = prompt('Inserte el porcerntaje de descuento: ');
	descuento = parseInt(descuento);

	precioFinal = precio - (precio*descuento/100);

	document.getElementById("elPrecioFinal").value = precioFinal;
	
}
