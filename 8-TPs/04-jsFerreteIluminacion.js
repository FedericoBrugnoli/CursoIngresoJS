/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 

B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %
y si es de otra marca el descuento es del 30%.

C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % 
y si es de otra marca el descuento es del 20%.

D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos 
en informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

*/
function CalcularPrecio () 
{
    //Asigno variables//
    let precioLamparas;
    let cantidadLamparas;
    let precioTotal;
    let descuento;
    let precioConDescuento;
    let precioFinal;
    let marcaLampara;
    let impuesto;
    let precioConImpuesto;

    precioLamparas = 35
    
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    marcaLampara = document.getElementById("Marca").value;

    precioTotal = cantidadLamparas * precioLamparas;

    if (cantidadLamparas >= 6)//punto a
        {
            descuento = 0.5;
        }
        else if (cantidadLamparas == 5) //punto b
            
                if (marcaLampara == "ArgentinaLuz") 
                {
                    descuento = 0.6;

                }
                else
                    {
                        descuento = 0.7;
                    }
            
                    else if (cantidadLamparas == 4) //punto c
                    {
                        if (marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas") 
                        {
                            descuento = 0.75;
                        }
                        else
                            {
                                descuento = 0.8;
                            }
                    }
            
            
                    else if (cantidadLamparas == 3) //punto d
                    {
                        if (marcaLampara == "ArgentinaLuz") 
                        {
                            descuento = 0.85;
                        }
                        else if (marcaLampara == "FelipeLamparas") 
                            {
                                descuento = 0.9;
                            }
                        else
                            {
                                descuento = 0.95;
                            }    
                    }   
    precioConDescuento = precioTotal * descuento;

                    if (precioConDescuento > 120) // punto e
                        {
                    descuento = 1.1;
                    precioConImpuesto = precioConDescuento * descuento;
                    impuesto = precioConImpuesto - precioConDescuento;
                    alert("Usted pagó " + impuesto + " de impuesto y abonó en total " + precioConImpuesto + ".");
                }
               
    
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
}



























/*   Defino variables.//
    let cantidadLamparas;
    let marcaLamparas;
    let precioLamparas;
    let precioFinalLamparas;
    let descuento;
    let impuesto;
    let precioConImpuesto;

    //Asigno las variables.//
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    marcaLamparas = document.getElementById("Marca").value;

    precioLamparas = cantidadLamparas * 35;

    descuento = 1

    if (cantidadLamparas >= 6) 
    {
        descuento = 0.5;
    }
    else
    {
        if (cantidadLamparas == 5) 
        {
            if (marcaLamparas == "ArgentinaLuz") 
            {
                descuento = 0.6;
            }
            else
            {
                descuento = 0.7;
            }
        }
        else
        {
            if (cantidadLamparas == 4) 
            {
                if (marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas") 
                {
                    descuento = 0.75;
                }
                else
                {
                    descuento = 0.8;
                }
            if (cantidadLamparas == 3) 
    {
    if (marcaLamparas == "ArgentinaLuz") 
    {
    descuento = 0.85;
    }
    else if (marcaLamparas == "FelipeLamparas") 
    {
    descuento = 0.9;
    } 
    if (marcaLamparas != "ArgentinaLuz" && marcaLamparas != "FelipeLamparas")
    {
    descuento = 0.95;
    }    
        
    }

    precioFinalLamparas = precioLamparas * descuento;

    if (precioFinalLamparas >= 120) 
    {
    impuesto = precioFinalLamparas * 0.1;
    precioConImpuesto = precioFinalLamparas + impuesto;
    alert("Usted pagó " + impuesto + " de IIBB, y terminó abonando " + precioConImpuesto);
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinalLamparas.toFixed(2);
*/