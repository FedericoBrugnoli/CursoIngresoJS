/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let sueldoAumentado;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);
	aumento = prompt("ingrese aumento");
	aumento = parseInt(aumento);
	
	sueldoAumentado = sueldo + aumento;
	document.getElementById("txtIdResultado").value = sueldoAumentado;


}


/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let sueldoAumentado;
	let aumento;
	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);
	aumento = sueldo * 10 / 100;
	sueldoAumentado = sueldo + aumento;
	document.getElementById("txtIdResultado").value = sueldoAumentado;

}
