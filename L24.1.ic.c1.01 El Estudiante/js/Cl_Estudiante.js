export default class estudiante{
    constructor(cedula, nota1, nota2, nota3){
        this._cedula = parseInt(cedula);
        this._nota1 = parseInt(nota1);
        this._nota2 = parseInt(nota2);
        this._nota3 = parseInt(nota3);
    }

    set cedula(c){
        this._cedula = c;
    }
    
    get cedula(){
        return this._cedula;
    }

    set nota1(n){
        this._nota1 = n;
    }

    get nota1(){
        return this._nota1;
    }

    set nota2(n){
        this._nota2 = n;
    }

    get nota2(){
        return this._nota2;
    }

    set nota3(n){
        this._nota3 = n;
    }

    get nota3(){
        return this._nota3;
    }

    calcularNotaFinal(){
        return this._nota1 + this._nota2 + this._nota3;
    }


}