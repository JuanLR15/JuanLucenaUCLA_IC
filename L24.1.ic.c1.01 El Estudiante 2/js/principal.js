/**Un estudiante cursa una asignatura de la carrera de Ingeniería 
 * en Informática de la UCLA, y ha recibido las notas de sus 3 
 * evaluaciones presentadas. Conociendo la cédula del estudiante y
las notas obtenidas, se requiere:
a) Calcular la nota final obtenida por el estudiante en la asignatura.
b) Muestre un reporte (salida) con la cédula del estudiante, las 3 notas obtenidas y la nota
final.*/

import Estudiante from "./Estudiante.js";
import IEstudiante from "./IEstudiante.js";

let IEstud = new IEstudiante(),
    c = IEstud.leerCedula(),
    n1 = IEstud.leerNota1(),
    n2 = IEstud.leerNota2(),
    n3 = IEstud.leerNota3(),

    estud = new Estudiante(c, n1, n2, n3),

    salida = document.getElementById("salida")

    salida.innerHTML = IEstud.reporteEstudiante(estud.cedula, estud.nota1, estud.nota2, estud.nota3, estud.calcularnotafinal())



