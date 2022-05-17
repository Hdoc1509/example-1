import { gid } from './utils/dom.js';

/*
Ejercicio 3: Guillermo tiene N dólares. Luis tiene la mitad de lo que posee
Guillermo. Juan tiene la mitad de lo que poseen Luis y Guillermo juntos. Hacer
un programa que calcule e imprima la cantidad de dinero que tienen entre los
tres.
*/

gid('ej3').addEventListener('submit', (e) => {
    e.preventDefault();

    const guillermo = Number(e.target.guillermo.value);
    const luis = guillermo / 2;
    const juan = (guillermo + luis) / 2;

    const total = guillermo + juan + luis;

    e.target.luis.value = luis;
    e.target.juan.value = juan;
    gid('res3').value = total;
});
