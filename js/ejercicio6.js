import { gid } from './utils/dom.js';
import { formInputs } from './utils/form.js';

/*
Ejercicio 6: Hacer un programa que calcule el cuadrado de una suma.
(a+b)^2 = a^2 + b^2 + 2ab
*/

const sumaBinomioCuadrado = (n1, n2) => n1 ** 2 + n2 ** 2 + 2 * n1 * n2;

gid('ej6').addEventListener('submit', (e) => {
	e.preventDefault();

	const { num1, num2 } = formInputs(e.target);

	const cuadradoSuma = sumaBinomioCuadrado(Number(num1), Number(num2));

	gid('res6').value = cuadradoSuma;
});
