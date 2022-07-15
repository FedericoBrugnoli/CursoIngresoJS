/*
Al ingresar una edad debemos informar si la persona es 
mayor de edad (mas de 18 años) o 
adolescente (entre 13 y 17 años) o 
niño (menor a 13 años).
*/
function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad > 17)
		{
			alert("Eres mayor de edad");
		} else 
		{
			if(edad <= 17 && edad >= 13)
			{
				alert("Usted es adolescente");
			} else
				{
					if (edad < 13)
					{
						alert("Usted es un niño");
					}
				}
		}



}//FIN DE LA FUNCIÓN