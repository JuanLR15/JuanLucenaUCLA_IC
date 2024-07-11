export default class Estudiante {
    constructor(cedula, nota1, nota2, nota3){
        this._cedula = parseInt(cedula);
        this._nota1 = parseInt(nota1);
        this._nota2 = parseInt(nota2);
        this._nota3 = parseInt(nota3);
    }

    get cedula() {
        return this._cedula;
    }

    set cedula(c){
        this._cedula = cedula;
    }

    get nota1(){
        return this._nota1;
    }
    
    set nota1(n){
        this._nota1 = nota1;
    }

    get nota2(){
        return this._nota2;
    }

    set nota2(n){
        this._nota2 = nota2;
    }

    get nota3(){
        return this._nota3;
    }

    set nota3(n){
        this._nota3 = nota3;
    }

    calcularnotafinal(){
        return this._nota1 + this._nota2 + this._nota3
    }

}