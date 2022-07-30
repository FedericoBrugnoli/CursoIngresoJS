/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo = prompt("Ingrese femenino ó masculino.").toLowerCase();

	while(sexo != "f" && sexo != "m")
	{
		sexo = prompt("Ingrese un sexo valido.").toLowerCase();

	}



	document.getElementById("txtIdSexo").value=sexo;
}//FIN DE LA FUNCIÓN