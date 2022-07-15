/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 
2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largo;
	let ancho;
	let alambre;

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	alambre = ((largo+ancho)*2)*3;

	document.getElementById("A- Rectangulo de alambre").value = alert(alambre);
}
function Circulo () 
{
	let radio;
	let alambre;
	let metrosAlambre;

	radio = document.getElementById("txtIdRadio").value;
	radio = parseInt(radio);

	alambre = (radio*2) *3.14;
	metrosAlambre = alambre * 3;

	document.getElementById("B- Circulo de alambre").value = alert("Se deben comprar " + metrosAlambre + " metros de alambre");


}
function Materiales () 
{
	let largo;
	let ancho;
	let bolsasAUsarDeCal;
	let bolsasAUsardeCemento;

	bolsaDeCemento = 2;
	bolsaDeCal = 3;

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	bolsasAUsardeCemento = bolsaDeCal *(largo+ancho);
	bolsasAUsardeCal = bolsaDeCemento * (largo+ancho);

	document.getElementById("C- Materiales contrapiso").value = alert("Se necesitan " + bolsasAUsardeCemento + " bolsas de cemento y " + bolsasAUsardeCal + " bolsas de cal para realizar el contrapiso.")




}