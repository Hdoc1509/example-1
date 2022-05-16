import { gid } from './utils/dom.js';
import { formInputs } from './utils/form.js';

/*
Ejercicio 2: Hacer un programa que calcule e imprima el salario semanal de un
empleado a partir de sus horas semanales trabajadas y de su salario por hora
*/

gid('ej2').addEventListener('submit', (e) => {
	e.preventDefault();

	const { horasSemanales, pagoHora } = formInputs(e.target);

	const salarioSemanal = Number(horasSemanales) * Number(pagoHora);

	gid('res2').value = salarioSemanal;
});
