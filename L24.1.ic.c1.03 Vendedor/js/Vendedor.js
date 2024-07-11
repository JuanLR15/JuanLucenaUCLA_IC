export default class Vendedor {
    constructor(cedula, total_ventas){
        this._cedula = cedula;
        this._total_ventas = total_ventas;
    }

    set cedula(c){
        this._cedula = cedula;
    }

    get cedula(){
        return this._cedula;
    }

    set total_ventas(monto){
        this._total_ventas = total_ventas;
    }

    get total_ventas(){
        return this._total_ventas;
    }

    montoPorComision(){
        let comision = .20;
        return this._total_ventas * comision
    }




}