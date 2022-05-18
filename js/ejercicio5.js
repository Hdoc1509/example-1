import { gid } from './utils/dom.js';
import { formInputs } from './utils/form.js';

/*
Ejercico 5: La calificación final de un estudiante de Informática se calcula con
base a las calificaciones de cuatro aspectos de su rendimiento académico:
participación, primer exámen parcial, segundo exámen parcial y exámen final.
Sabiendo que las calificaciones anteriores entran a la calificación final con
ponderaciones del 10%, 25%, 25% y 40%, hacer un programa que calcule e imprima
la califiación final obtenida por un estudiante.
*/
const PORCENTAJE_NOTAS = {
    participacion: 0.1,
    primerParcial: 0.25,
    segundoParcial: 0.25,
    examenFinal: 0.4,
};

gid('ej5').addEventListener('submit', (e) => {
    e.preventDefault();

    const { participacion, primerParcial, segundoParcial, examenFinal } =
        formInputs(e.target);

    const participacionNota = Number(participacion);
    const primerParcialNota = Number(primerParcial);
    const segundoParcialNota = Number(segundoParcial);
    const examenFinalNota = Number(examenFinal);

    const notaFinal =
        PORCENTAJE_NOTAS.participacion * participacionNota +
        PORCENTAJE_NOTAS.primerParcial * primerParcialNota +
        PORCENTAJE_NOTAS.segundoParcial * segundoParcialNota +
        PORCENTAJE_NOTAS.examenFinal * examenFinalNota;

    gid('res5').value = notaFinal.toFixed(2);
});
