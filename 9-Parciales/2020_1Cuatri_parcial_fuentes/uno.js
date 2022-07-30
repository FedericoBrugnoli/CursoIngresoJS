/*
a)pedir el ingreso de 10 mascotas
b)validar tipo ( gato , perro y otros)solo esos tres tipos
c)raza , si es perro (pastor, toy, callejero) y si es gato (siamés, turco, mestizo)
y si es de tipo "otros"  , pedir solo un texto.
d)edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100
e)nombre ( no se permite solo numero)
f)mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
g)mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza*/
function mostrar()
{
	let tipoMascota;
	let razaPerro;
	let razaGato;
	let razaOtros;
	let edadPerro;
	let edadGato;
	let edadOtro;
	let nombreGato;
	let nombrePerro;
	let nombreMascota;
	let i;
	let flagEdadPerro=0;
	let edadMaxPerro;
	let nombreMaxPerro;
	let razaMaxPerro;
	let flagEdadGato=0;
	let edadMaxGato;
	let nombreMaxGato;
	let razaMaxGato;
	let acumuladorSiames=0;
	let acumuladorSiamesEdad=0;
	let promedioSiames;
	let acumuladorTurco=0;
	let acumuladorTurcoEdad=0;
	let promedioTurco;
	let acumuladorMestizo=0;
	let acumuladorMestizoEdad=0;
	let promedioMestizo;
	let flagEdadOtro=0;
	let edadMaxOtro;
	let nombreMaxOtro;
	let razaMaxOtro;

	let mensaje;

	for(i=0;i<10;i++)//a
		{
			do{
				tipoMascota=prompt("Ingrese el tipo de mascota: ( gato , perro y otros)").toLowerCase();
			}while(!isNaN(tipoMascota) && (tipoMascota!="gato" && tipoMascota!="perro" && tipoMascota!="otros"));//b
		
			if(tipoMascota == "perro")//c
			{
				razaPerro=prompt("Ingrese la raza de su perro: (Pastor, Toy, Callejero)").toLowerCase();
			}
			else if(tipoMascota == "gato")
			{
				razaGato=prompt("Ingrese la raza de su gato: (Siames, turco, mestizo)").toLowerCase()
			}
			else
			{
				razaOtros=prompt("Ingrese que tipo de mascota es: ")
			}

			if(tipoMascota=="gato")//d
				{	
					do{
					nombreGato=prompt("Ingrese el nombre de su Gato:")
					}while(!isNaN(nombreGato));

					do{
					edadGato=prompt("Ingrese la edad de su gato: ");
					edadGato=parseInt(edadGato);
					}while(edadGato<0 && edadGato>20);
				}
				else if(tipoMascota=="perro")
				{
					do{
					nombrePerro=prompt("Ingrese el nombre de su Perro: ")
					}while(!isNaN(nombrePerro));

					do{
						edadPerro=prompt("Ingrese la edad de su perro: ");
						edadPerro=parseInt(edadPerro);
					}while(edadPerro<0 && edadPerro>20);
				}
				else
				{
					do{
					nombreMascota=prompt("Ingrese el nombre de su mascota: ")
					}while(!isNaN(nombreMascota));

					do{
						edadOtro=prompt("Ingrese la edad de su mascota: ");
						edadOtro=parseInt(edadOtro);
					}while(edadOtro<0 && edadOtro>100);
				}
			
				 
			if(flagEdadGato==0)
				{
					edadMaxGato=edadGato;
					nombreMaxGato=nombreGato;
					razaMaxGato=razaGato;
					flagEdadGato=1;
				}
				else
					{
						if(edadMaxGato<edadGato)
							{
								edadMaxGato=edadGato;
								nombreMaxGato=nombreGato;
								razaMaxGato=razaGato;
								mensaje="El gato mas viejo es " + nombreMaxGato + ", tiene " + edadMaxGato + " años y es raza " + razaMaxGato;
							}
					}
		
			if(flagEdadPerro==0)
				{
					edadMaxPerro=edadPerro;
					nombreMaxPerro=nombrePerro;
					razaMaxPerro=razaPerro;
					flagEdadPerro=1;
				}
				else
					{
						if(edadMaxPerro<edadPerro)
							{
								edadMaxPerro=edadPerro;
								nombreMaxPerro=nombrePerro;
								razaMaxPerro=razaPerro;
								mensaje+="<br> El Perro mas viejo es " + nombreMaxPerro + ", tiene " + edadMaxPerro + " años y es raza " + razaMaxPerro;
							}
					}

			if(flagEdadOtro==0)
				{
					edadMaxOtro=edadOtro;
					nombreMaxOtro=nombreMascota;
					flagEdadOtro=1;
				}
				else
					{
						if(edadMaxOtro<edadOtro)
							{
								edadMaxOtro=edadOtro;
								nombreMaxOtro=nombreMascota;
								mensaje+="<br> La mascota mas vieja es " + nombreMaxOtro + ", tiene " + edadMaxOtro + " años";
							}
					}

			if(razaGato == "siames")
				{
					acumuladorSiames+=1;
					acumuladorSiamesEdad+=edadGato;
				}
			
			else if(razaGato == "turco")
				{
					acumuladorTurco+=1;
					acumuladorTurcoEdad+=edadGato;
				}
			else
				{
					acumuladorMestizo+=1;
					acumuladorMestizoEdad+=edadGato;
				}
					
					mensaje+= "<br> La cantidad de siameses es " + acumuladorSiames;
					mensaje+= "<br> La cantidad de turcos es " + acumuladorTurco;
					mensaje+= "<br> La cantidad de mestizos es " + acumuladorMestizo;

			
		}

		promedioSiames=acumuladorSiamesEdad/acumuladorSiames;
		mensaje+= "<br> El promedio de siameses es de " + promedioSiames;
		promedioTurco=acumuladorTurcoEdad/acumuladorTurco;
		mensaje+= "<br> El promedio de turcos es de " + promedioTurco;
		promedioMestizo=acumuladorMestizoEdad/acumuladorMestizo;
		mensaje+= "<br> El promedio de mestizos es de " + promedioMestizo;

		document.write(mensaje);
}

/*(razaPerro!="pastor" && razaPerro!="toy" && razaPerro!="callejero")
(razaGato!="siames" && razaGato!="turco" && razaGato!="mestizo")










/*El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
genero (femenino-masculino-nobinario)
Nota (entre 1 y 10)
Se desconoce la cantidad de alumnos que se ingresaran.
Informar:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre  del mejor alumno no binario en la carrera de psicología.
F. ¿Cuál es la carrera que tiene más alumnos?
{
	let nombre;
	let carrera;
	let estadoCarrera;
	let genero;
	let nota;

	let acumuladorProg;
	let acumuladorPsico;
	let acumuladorDis;

	let acumuladorMujer;
	let acumuladorNoBin;

	let acumuladorFinalizantes;
	let acumuladorNotas;
	let promedioNotas;

	let flagNoBin;
	let mejorNoBinPsico;
	let mejorNotaNoBinPsico;

	let flagCarreraMas;
	let carreraMas;

	flagNoBin=0;

	flagCarreraMas=0;

	acumuladorNotas=0;
	acumuladorFinalizantes=0;

	acumuladorMujer=0;
	acumuladorNoBin=0;

	acumuladorProg=0;
	acumuladorPsico=0;
	acumuladorDis=0;

	let respuesta;

	respuesta=true;

	while(respuesta)
		{
			do{
				nombre = prompt("Ingrese su nombre: ");
			}while(!isNaN(nombre));

			do{
				carrera = prompt("Ingrese su carrera: (Programación, Psicología, Diseño gráfico)").toLowerCase();
			}while(!isNaN(carrera) && (carrera != "programacion" && carrera != "psicologia" && carrera != "diseño grafico"));

			do{
				estadoCarrera=prompt("Ingrese el estado de la carrera: (en curso-abandono-finalizado)").toLowerCase();
			}while(!isNaN(estadoCarrera) && (estadoCarrera != "en curso" && estadoCarrera != "abandono" && estadoCarrera != "finalizado"));

			do{
				genero=prompt("Ingrese su genero: (femenino-masculino-nobinario)").toLowerCase();
			}while(!isNaN(genero) && (genero != "femenino" && genero !="masculino" && genero != "nobinario"));

			do{
				nota = prompt("Ingrese su nota: (Entre 1 y 10)");
				nota=parseFloat(nota);
			}while(isNaN(nota) && (nota<0 && nota>10));


			if(carrera=="programacion")//A. Cantidad total de alumnos de cada carrera.
				{
					acumuladorProg+=1;
				}
			else if(carrera=="psicologia")
				{
					acumuladorPsico+=1;
				}	
			else
				{
					acumuladorDis+=1;
				}

			if(genero=="femenino" && carrera=="programacion")//B. Cantidad total de mujeres que cursan la carrera de programación
				{
					acumuladorMujer+=1;
				}
			
			if(genero=="nobinario")//C. Cantidad de alumnos no binarios.
				{
					acumuladorNoBin+=1;
				}

			if(estadoCarrera=="finalizado")
				{
					acumuladorNotas+=1;
					acumuladorFinalizantes+=1;
				}

			if(flagNoBin==0)//E. Nombre  del mejor alumno no binario en la carrera de psicología.
				{
					mejorNoBinPsico=nombre;
					mejorNotaNoBinPsico=nota;
				}
				else{
					if((genero=="nobinario") && (carrera=="psicologia") && (mejorNotaNoBinPsic<nota))
						{
							mejorNoBinPsico=nombre;
						}
			respuesta=confirm("¿Desea seguir ingresando alumnos?");
		}

	promedioNotas=acumuladorFinalizantes/acumuladorNotas;//D. Promedio de notas de los alumnos finalizantes.

}
*/




























/*Realizar el algoritmo que permita ingresar 5 paises:
del continente (validar entre america , asia , europa ,africa y oceania)
el nombre del país,
cantidad de habitantes en millones entre 1 y 2000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
Se debe Informar al usuario lo siguiente:
a)La cantidad de temperaturas pares.
b)El nombre del pais con menos habitantes
c)la cantidad de paises de america que tienen menos de 0 grados .
d)el promedio de habitantes entre los paises ingresados .
e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
{
	let pais;
	let continente;
	let cantidadHabitantes;
	let temperatura;
	
	let i;
	
	let temperaturaPar;
	
	let paisMenosHabitantes;
	let flagMenosHabit;
	let cantHabMenor;

	cantHabMenor=0;

	let promedioHabitantes;
	
	let americaNegativo;
	
	let temperaturaMinima;
	let paisTempMin;
	let flagTemp;
	
	let acumuladorHabitantes;

	let mensaje;

	acumuladorHabitantes=0;

	americaNegativo=0;

	flagTemp=0;
	flagMenosHabit=0;

	for(i=0;i<5;i++)
		{
			continente=prompt("Ingrese el continente: ").toLowerCase();
			
			pais=prompt("Ingrese el país: ");
			
			cantidadHabitantes=prompt("Ingrese la cantidad de habitantes en millones: (Entre 1 y 2000)");
			cantidadHabitantes=parseInt(cantidadHabitantes);
			
			temperatura=prompt("Ingrese la temperatura: (Entre -50 y 50)");
			temperatura=parseFloat(temperatura);

			while(!isNaN(continente) && (continente != "america" && continente != "europa" && continente != "asia"))
				{
					continente=prompt("Error, ingrese un continente valido: ");
				}
			
			while(!isNaN(pais))
				{
					pais=prompt("Error, ingrese un pais valido: ")
				}

			while(isNaN(cantidadHabitantes) && (cantidadHabitantes<0))
				{
					cantidadHabitantes=prompt("Error, reingrese la cantidad de habitantes en millones: (Entre 1 y 2000)");
					cantidadHabitantes=parseInt(cantidadHabitantes);
				}
			while(isNaN(temperatura) && (temperatura<-50 && temperatura>50))
				{
					temperaturaMinima=prompt("Error, reingrese la temperatura: (Entre -50 y 50)");
					temperaturaMinima=parseFloat(temperaturaMinima);
				}

			if(flagMenosHabit ==0)//b)El nombre del pais con menos habitantes
				{
					paisMenosHabitantes=pais;
					cantHabMenor=cantidadHabitantes
					flagMenosHabit=1;
				}
				else
					{
						if(cantHabMenor<cantidadHabitantes)
						{
							paisMenosHabitantes=pais;
						}
					}
				mensaje="<br> El pais con menos habitantes es: " + paisMenosHabitantes;

			if(temperatura<0 && continente=="america")//c)la cantidad de paises de america que tienen menos de 0 grados .
				{
					americaNegativo+=1;
				}

				mensaje+= "<br> La cantidad de paises americanos con temperatura negativa es: " + americaNegativo;

		
			if(flagTemp==0)
				{
					temperaturaMinima=temperatura;
					paisTempMin=pais;
					flagTemp=1;
				}
				else
					{
						if(temperaturaMinima<temperatura)//e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
							{
								paisTempMin=pais;
							}
					}
				mensaje+= "<br> La temperatura minima es " + temperaturaMinima + " y es de " + paisTempMin;

			acumuladorHabitantes+=cantidadHabitantes;
		}	

		promedio=acumuladorHabitantes/i;//d)el promedio de habitantes entre los paises ingresados .
		mensaje+= "<br> El promedio de habitantes es de " + promedio;

		document.write(mensaje);
}
*/
