/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let resultado;
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroDos = parseInt(numeroDos);
	resultado = numeroUno+numeroDos;
	alert("El resultado es: " + resultado);	
}

function restar()
{
	let numeroUno;
	let numeroDos;
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroDos = parseInt(numeroDos);
	alert(numeroUno-numeroDos);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroDos = parseInt(numeroDos);
	alert(numeroUno*numeroDos);
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroUno = parseInt(numeroUno);
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroDos = parseInt(numeroDos);
	alert(numeroUno/numeroDos);
}

