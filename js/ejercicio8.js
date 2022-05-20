import { gid } from './utils/dom.js';
import { formInputs } from './utils/form.js';

/*
Ejercicio 8: Construir un programa que calcule y muestre por pantalla las raíces
de la ecuación de segundo grado de coeficientes reales.
a*x^2 + b*x + c = 0
x1 = (-b + Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a)
x2 = (-b - Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a)
*/

gid('ej8').addEventListener('submit', (e) => {
	e.preventDefault();

	const { coeA: a, coeB: b, coeC: c } = formInputs(e.target);
	const { raiz1, raiz2 } = e.target;

	const discriminant = Number(b) ** 2 - 4 * Number(a) * Number(c);

	if (discriminant < 0) {
		raiz1.value = 'No hay raíz';
		raiz2.value = 'No hay raíz';
		return;
	}

	const x1 = (-Number(b) + Math.sqrt(discriminant)) / (2 * Number(a));
	const x2 = (-Number(b) - Math.sqrt(discriminant)) / (2 * Number(a));

	raiz1.value = x1;
	raiz2.value = x2;
});
