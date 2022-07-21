/*
una agencia de viajes debe sacar las tarifas de los viajes,
se cobra $15.000 por cada estadia como base,
se pide el ingreso de una estacion del año y
localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20%
cataratas y Cordoba tiene un descuento del 10%
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20%
cataratas y Cordoba tiene un aumento del 10%
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10%
cataratas tiene un aumento del 10%
Mar del plata tiene un aumento del 10%
y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	let estacion;
	let localidad;
	let mensaje;
	let tarifa;
	let tarifaModificada;

	estacion = document.getElementById("txtIdEstacion").value;
	localidad = document.getElementById("txtIdDestino").value;

	tarifa = 15000;

	switch(estacion)
		{
			case "Invierno":
				switch(localidad)
				{
					case "Bariloche":
						tarifaModificada = tarifa + (tarifa*0.2);
					break;

					case "Cataratas":
					case "Cordoba":
						tarifaModificada = tarifa - (tarifa*0.1);
					break;

					case "Mar del plata":
						tarifaModificada = tarifa - (tarifa*0.2);
					break;
				}
			break;

			case "Verano":
				switch(localidad)
				{
					case "Bariloche":
						tarifaModificada = tarifa - (tarifa*0.2);
					break;

					case "Cataratas":
					case "Cordoba":
						tarifaModificada = tarifa + (tarifa*0.1);
					break;

					case "Mar del plata":
						tarifaModificada = tarifa + (tarifa*0.2);
					break;
				}
			break;

			default:
				switch(localidad)
				{
					case "Bariloche":
					case "Cataratas":
					case "Mar del plata":
						tarifaModificada = tarifa + (tarifa*0.1);
					break;

					case "Cordoba":
						tarifaModificada = tarifa;
					break;
				}
			break;
		}

	mensaje = "El valor del viaje es de: " + tarifaModificada;

	alert(mensaje);

}//FIN DE LA FUNCIÓN