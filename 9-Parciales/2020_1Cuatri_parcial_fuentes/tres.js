/*
En el ingreso a un viaje en crucero nos solicitan 
nombre , 
edad(mayores de 18), 
sexo("f" o "m") y 
estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros. 
*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	
	let flagEdad;
	let edadMaxima;
	let edadMinima;
	
	let casadoJoven;
	let masViejoSexo;
	let masViejoNombre
	
	let promedioEdadMujeres;
	let acumuladorEdadMujer;
	let cantidadMujeres;

	let cantidadMujeresCasadasViudas;
	
	let promedioEdadHombresSoltero;
	let acumuladorEdadHombreSoltero;
	let cantidadHombresSoltero;
	
	let respuesta;

	let mensaje;

	flagEdad = 0;

	cantidadMujeres = 0;
	cantidadHombresSoltero = 0;
	cantidadMujeresCasadasViudas = 0;
	
	acumuladorEdadHombreSoltero = 0;
	acumuladorEdadMujer = 0;

	respuesta = true;

	while(respuesta)
	{
		do{
		nombre = prompt("Ingrese su nombre: ");
		}while(!isNaN(nombre));

		do{
		edad = prompt("Ingrese su edad: ");
		edad = parseInt(edad);
		}while(isNaN(edad) && edad > 17);

		do{
		sexo = prompt("Ingrese su sexo: (f o m)").toLowerCase();
		}while(!isNaN(sexo) && (sexo != "f" || sexo != "m"));

		do{
		estadoCivil = prompt("Ingrese su estado civil: (soltero, casado o viudo)").toLowerCase();
		}while(!isNaN(estadoCivil) && (estadoCivil != "soltero" || estadoCivil != "casado" || estadoCivil != "viudo"))

		if(flagEdad == 0) 
			{
				casadoJoven = nombre;
				masViejoSexo = sexo;
				masViejoNombre = nombre;
				edadMaxima = edad;
				edadMinima = edad;
				flagEdad = 1;
			}
			else
				{	
					if(edadMaxima<edad)//b El sexo y nombre del pasajero/a más viejo
					{
						edadMaxima = edad;
						masViejoSexo = sexo;
						masViejoNombre = nombre;
					}
					if((edadMinima>edad) && (estadoCivil=="casado") && (sexo == "m"))//a El nombre del hombre casado más joven.
					{
						edadMinima = edad;
						casadoJoven = nombre;
					}
				}
			
		if(sexo == "f") 
			{
				cantidadMujeres += 1; 
				acumuladorEdadMujer += edad;
			}
		if(sexo == "m" && estadoCivil == "soltero")	
			{
				cantidadHombresSoltero += 1;
				acumuladorEdadHombreSoltero += edad;
			}

		if(sexo == "f" && (estadoCivil == "casado" || estadoCivil == "viudo"))
			{
				cantidadMujeresCasadasViudas += 1;//c La cantidad de mujeres que hay casadas o viudas
			}
		respuesta=confirm("¿Desea seguir ingresando datos?");

	}

	promedioEdadMujeres= acumuladorEdadMujer/cantidadMujeres;//d El promedio de edad entre las mujeres
	promedioEdadHombresSoltero = acumuladorEdadHombreSoltero/cantidadHombresSoltero;//e El promedio de edad entre los hombres solteros
	
	mensaje = "El hombre casado más joven es " + casadoJoven;//a
	mensaje += "<br> El/La pasajero/a más viejo/a es " + masViejoNombre + " y su sexo es " + masViejoSexo;// b
	mensaje += "<br> La cantidad de mujeres casadas o viudas es " + cantidadMujeresCasadasViudas;//c
	mensaje += "<br> El promedio de edad entre mujeres es de " + promedioEdadMujeres;//d
	mensaje += "<br> El promedio de edad entre hombres solteros es " + promedioEdadHombresSoltero//e

	document.write(mensaje);
	
}
