import { gid } from './utils/dom.js';

/*
Ejercicio 7: Construir un programa que, dado un número total de horas, devuelve
el número de semanas, días y horas equivalentes. Por ejemplo, dado un total de
1000 horas debe mostrar 5 semanas, 6 días y 16 horas.
*/

gid('ej7').addEventListener('submit', (e) => {
	e.preventDefault();

	const totalHoras = Number(e.target.totalHoras.value);
	const semanas = parseInt(totalHoras / 168);
	const dias = parseInt((totalHoras % 168) / 24);
	const restoHoras = parseInt(totalHoras % 24);

	e.target.semanas.value = semanas;
	e.target.dias.value = dias;
	e.target.restoHoras.value = restoHoras;
});
