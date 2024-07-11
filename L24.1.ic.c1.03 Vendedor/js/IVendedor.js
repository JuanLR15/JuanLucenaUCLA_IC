export default class IVendedor {
    leerCedula(){
        return prompt("ingrese la cedula del vendedor");
    }

    leerMonto(){
        return prompt("ingrese el monto");
    }

    mostrarReporte(c, m){
        return ` Cedula del vendedor: ${c}\nMonto total ventas: $${m}`;
    }       

}