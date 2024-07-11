/**De un vendedor se conoce su cédula y el monto total de sus ventas. 
 * Se sabe que el vendedor se gana una comisión del 20% del monto 
 * total de sus ventas. Se requiere un programa que muestre la cédula 
 * del vendedor y el monto a cobrar por comisiones.
 * */

import Vendedor from "./Vendedor.js";
import IVendedor from "./IVendedor.js";

let iVendedor = new IVendedor(),
    cedula = iVendedor.leerCedula(),
    monto = iVendedor.leerMonto(),

    vendedor = new Vendedor(cedula, monto),

    mostrarReporte = document.querySelector("#reporte");

mostrarReporte.innerText = iVendedor.mostrarReporte(vendedor.cedula, vendedor.montoPorComision())

