/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("Ingrese la clave: ");

	while(clave != "utn750")
		{
			clave = prompt("Error, reingrese la clave: ");

		}

	/*do{
		clave = prompt("Ingrese la clave correcta: ");
	}while(clave != "utn750");
	*/

}//FIN DE LA FUNCIÓN

/*let nombre;
	let apellido;
	let edad;// > a 18 años
	let legajo;// entre 1000 y 10000
	

	nombre = prompt("Ingrese su nombre: ").toLowerCase();
	apellido = prompt("Ingrese su apellido: ").toLowerCase();
	edad = prompt("Ingrese su edad: ");
	edad = parseInt(edad);

	while(edad < 18)
		{
			edad = prompt("Ingrese su edad: ");
			edad = parseInt(edad);

		}
	
	legajo = prompt("Ingrese su legajo: ");
	legajo = parseInt(legajo);

	while(legajo < 1000 || legajo > 10000)
		{
			legajo = prompt("Ingrese su legajo: ");
			legajo = parseInt(legajo);			
		}*/


/*	
*/