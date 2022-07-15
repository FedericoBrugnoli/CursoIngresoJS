/*
Al ingresar una edad debemos informar 
si la persona es adolescente, edad 
entre 13 y 17 años (inclusive).
*/
function mostrar()
{
	let edad
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad <= 17 && edad >= 13)
		{
				alert("Usted es adolescente");

		}
}//FIN DE LA FUNCIÓN