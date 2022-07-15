/*
Al ingresar una edad solo 
debemos informar si 
la persona NO es adolescente.

*/function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad < 13) 
		{
			alert("Usted no es adolescente");
		}else
			{if(edad > 18)	
				{
				alert("Usted no es adolescente");
				}
			}
}

//FIN DE LA FUNCIÓN