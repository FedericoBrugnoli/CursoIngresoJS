/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let numeroUno;
	let numeroDos;
	let numeroTres;
	let resultado;

	numeroUno = document.getElementById('txtIdPrecioUno').value;
	numeroDos = document.getElementById('txtIdPrecioDos').value;
	numeroTres = document.getElementById('txtIdPrecioTres').value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);

	resultado = numeroUno + numeroDos + numeroTres;
	alert("La suma es: " + resultado);

}
function Promedio () 
{
	let numeroUno;
	let numeroDos;
	let numeroTres;
	let resultado;
	let promedio;

	numeroUno = document.getElementById('txtIdPrecioUno').value;
	numeroDos = document.getElementById('txtIdPrecioDos').value;
	numeroTres = document.getElementById('txtIdPrecioTres').value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);

	resultado = numeroUno + numeroDos + numeroTres;
	promedio = resultado / 3;

	alert("El promedio es: " + promedio);

}
function PrecioFinal () 
{
	let numeroUno;
	let numeroDos;
	let numeroTres;
	let resultado;
	let precioFinal;
	let precioMasIVA;

	numeroUno = document.getElementById('txtIdPrecioUno').value;
	numeroDos = document.getElementById('txtIdPrecioDos').value;
	numeroTres = document.getElementById('txtIdPrecioTres').value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);

	precioFinal = numeroUno + numeroDos + numeroTres;
	precioMasIVA = precioFinal + (precioFinal * 21 / 100);

	alert("El Precio Final + IVA es: " + precioMasIVA);

}
