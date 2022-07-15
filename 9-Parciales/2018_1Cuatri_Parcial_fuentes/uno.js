/*
Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo
por prompt y que muestre el perímetro por alert.
*/
function mostrar()
{
	let ancho;
	let largo;
	let perimetro;

	ancho = prompt("Ingrese el ancho");
	ancho = parseFloat(ancho);
	largo = prompt("Ingrese el largo");
	largo = parseFloat(largo);

	perimetro = (largo*2) + (ancho*2);

	alert("El perimetro del rectangulo es de: " + perimetro );
	
	}
