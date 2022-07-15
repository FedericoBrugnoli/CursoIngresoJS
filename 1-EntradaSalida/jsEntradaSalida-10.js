/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let precio;
	let descuento;
	let nuevoPrecio;
	precio = document.getElementById("txtIdImporte").value;
	precio = parseInt(precio);
	descuento = prompt('Ingrese descuento');
	descuento = parseInt(descuento);
	descuento = precio*descuento/100;

	nuevoPrecio = precio - descuento;
	document.getElementById("txtIdResultado").value = nuevoPrecio;
	
}