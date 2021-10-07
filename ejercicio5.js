/*
Ejercico 5: La calificación final de un estudiante de Informática se calcula con
base a las calificaciones de cuatro aspectos de su rendimiento académico:
participación, primer exámen parcial, segundo exámen parcial y exámen final.
Sabiendo que las calificaciones anteriores entran a la calificación final con
ponderaciones del 10%, 25%, 25% y 40%, hacer un programa que calcule e imprima
la califiación final obtenida por un estudiante.
*/

document.getElementById("calculo5").addEventListener("click",function(){
    let participacion = document.getElementById("participacion").value;
    let primerParcial = document.getElementById("primerParcial").value;
    let segundoParcial = document.getElementById("segundoParcial").value;
    let examenFinal = document.getElementById("examenFinal").value;

    participacion = 0.1*parseInt(participacion);
    primerParcial = 0.25*parseInt(primerParcial);
    segundoParcial = 0.25*parseInt(segundoParcial);
    examenFinal = 0.4*parseInt(examenFinal);
    let notaFinal = participacion+primerParcial+segundoParcial+examenFinal;

    if (isNaN(notaFinal)) {
        notaFinal = "";
    }

    document.getElementById("notaFinal").value = notaFinal;
});