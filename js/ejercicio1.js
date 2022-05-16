import { gid } from './utils/dom.js';
import { formInputs } from './utils/form.js';
import { sum } from './utils/arith.js';

/*
Ejercicio1: Hacer un programa que calcule e imprima la suma de tres calificaciones.
*/

gid('ej1').addEventListener('submit', (e) => {
	e.preventDefault();

	const data = formInputs(e.target);

	const notes = Object.values(data).map((n) => Number(n));

	gid('res1').value = sum(notes);
});
