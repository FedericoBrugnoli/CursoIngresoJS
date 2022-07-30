/*
1.	Se ingresan 5 importes, marca del producto 
y pais de origen (China, Uruguay o Paraguay).
Calcular y mostrar:
a.	Minimo importe con su pais
b.	Maximo importe con su marca
c.	Promedio importe
d.	Cantidad de productos de China
e.	Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
*/
function mostrar()
{
	let importe;
	let marca;
	let origen;
	let minimoImporte;
	let maximoImporte;
	let acumuladorImporte;
	let promedioImporte;
	let cantidadProductos;
	let acumuladorChina;
	let productoMaximo;
	let productoMinimo;
	let prodConDescuento;
	let mensaje;
	let i;
	let flagImporte;

	acumuladorChina = 0;

	flagImporte = 0;

	acumuladorImporte = 0;

	for(i=0;i<5;i++)
	{
		origen = prompt("Ingrese el origen del producto: (China, Uruguay o Paraguay)").toLowerCase();
		
		importe = prompt("Ingrese el importe del producto: ");
		importe = parseFloat(importe);
		
		marca = prompt("Ingrese la marca del producto: ");

		cantidadProductos = prompt("Ingrese la cantidad de productos: ");
		cantidadProductos = parseInt(cantidadProductos);

		while(origen != "china" && origen != "uruguay" && origen != "paraguay")
		{
			origen = prompt("Error, reingrese el origen: (China, Uruguay o Paraguay)");
		}

		while(isNaN(importe) && importe > 0)
		{
			importe = prompt("Error, reingrese el importe: ");
			importe = parseFloat(importe);
		}

		while(isNaN(cantidadProductos) && cantidadProductos > 0)
		{
			cantidadProductos = prompt("Error, reingrese la cantidad de productos: ");
			cantidadProductos = parseInt(cantidadProductos);
		}

		if(flagImporte == 0)
			{
				productoMaximo = marca;
				productoMinimo = origen;
				maximoImporte = importe;
				minimoImporte = importe;
				flagImporte = 1;
			}
			else
				{
					if(maximoImporte<importe)
						{
							maximoImporte = importe;
							productoMaximo = marca;
							mensaje = "El maximo importe es " + maximoImporte + " y es de la marca " + productoMaximo;
						}
					if(minimoImporte>importe)
						{
							minimoImporte = importe;
							productoMinimo = origen;
							mensaje += "<br> El minimo importe es " + minimoImporte + " y proviene de " + productoMinimo;
						}
				}
		if(origen == "china")
			{
				acumuladorChina += cantidadProductos;
				mensaje += "<br> De China provienen " + acumuladorChina + " productos.";
			}

	acumuladorImporte += importe;
	}

	promedio = acumuladorImporte/i;
	mensaje += "<br> El promedio es " + promedio;
	prodConDescuento = maximoImporte*0.9;
	mensaje += "<br> El descuento a " + maximoImporte + " es " + prodConDescuento;

	document.write(mensaje);

}





/*{
	let paisDeOrigen;
	let importe;
	let marca;
	let importeMinimo;
	let importeMaximo;
	let productoMasCaro;
	let productoMasBarato;
	let mensaje;
	let flagImporte;
	let i;
	let promedio;
	let acumuladorImporte;
	let acumuladorChina;
	let cantidad;
	let maxConDesc;


	flagImporte = 0;

	for(i=0;i<5;i++)
	{
		
		paisDeOrigen = prompt("Ingrese de dónde viene el producto: (China, Uruguay o Paraguay).").toLowerCase();
		marca = prompt("Ingrese la marca del producto: ");
		importe = prompt("Ingrese el importe del producto: ");
		importe = parseFloat(importe);
		cantidad = prompt("Ingrese la cantidad: ");
		cantidad = parseInt(cantidad);
		  
		while(paisDeOrigen != "china" && paisDeOrigen != "uruguay" && paisDeOrigen != "paraguay")
		{

			paisDeOrigen=prompt("Error, no es un pais valido, reingrese: ");
		
		}

		while(isNaN(importe) && (importe>0))
		{

			importe = prompt("Error, reingrese el importe del producto: ");
			importe = parseInt(importe);

		}

		while(isNaN(cantidad) == true && cantidad < 0)
			{
				cantidad = prompt("Error, reingrese la cantidad de productos: ");
				cantidad = parseInt(cantidad)
			}

		if (flagImporte == 0) 
		{
			productoMasCaro = marca;
			productoMasBarato = paisDeOrigen;
			importeMaximo = importe;
			importeMinimo = importe;
			flagImporte = 1; 
		}
		else
			{
				if (importeMaximo<importe) 
				{
					importeMaximo = importe;
					productoMasCaro = marca;
					mensaje = "<br> el mas caro sale " + importeMaximo + " y es marca " + productoMasCaro;
				}
				if (importeMinimo>importe) 
				{
					importeMinimo = importe;
					productoMasBarato = paisDeOrigen;
					mensaje += "<br> el importe minimo es de " + importeMinimo + " y viene de " + productoMasBarato;
				}
			}

	if (paisDeOrigen == "China") 
		{
			acumuladorChina += cantidad;
			mensaje += "<br> la cantidad de productos de china es de " + acumuladorChina;
		}
	
	}

	acumuladorImporte += importe;
	promedio = acumuladorImporte/i;
	mensaje += "<br> el promedio es de " + promedio;

	maxConDesc = importeMaximo*0.9;
	mensaje += "<br> el descuento sobre " + importeMaximo + " es " + maxConDesc;
	document.write(mensaje);
}
*/

/*{
	let nombre;
	let apellido;
	let edad;
	let edadMayor;
	let edadMenor;
	let personaMasGrande;
	let flagEdad;
	let respuesta;

	respuesta = true;

	flagEdad = 0;

	while(respuesta){

		nombre = prompt("Ingrese su nombre: ");
		apellido = prompt("Ingrese su apellido: ");
		edad = prompt("Ingrese su edad: ");
		edad = parseInt(edad);
		
		if(flagEdad == 0) 
			{
				personaMasGrande = nombre + " " + apellido;
				edadMayor = edad;
				edadMenor = edad;
				flagEdad = 1;
			}
			else
				{
					if(edadMayor<edad) 
					{
						edadMayor = edad;
						personaMasGrande = nombre + " " + apellido;
					}
					if(edadMenor>edad) 
					{
						edadMenor = edad;
					}
				}
				respuesta = confirm("Desea continuar?");
			}
	alert("La persona mas grande es " + personaMasGrande + " y tiene " + edadMayor + " años.")
}
*/

/*{
	
	//defino las variables
	let ladosMayores;
	let ladosMenores;
	let varillasMayores;
	let varillasMenores;
	let perimetro;
	let mensaje;

	//asigno variables
	ladosMayores = prompt("Ingrese la medida de los lados mayores: ");
	ladosMayores = parseFloat(ladosMayores);
	ladosMenores = prompt("Ingrese la medida de los lados menores");
	ladosMenores = parseFloat(ladosMenores);

	perimetro = 2 * (ladosMayores + ladosMenores);

	mensaje = "La cantidad de papel a utilizar es de: " + perimetro;

	alert(mensaje);
}*/

