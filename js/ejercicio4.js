import { gid } from './utils/dom.js';
import { formInputs } from './utils/form.js';

/*
Ejercicio 4: Una compañía de venta de carros usados paga a su personal de ventas
un salario de $1000 mensuales, más una comisión de $150 por cada carro vendido,
más el 5% del valor de la venta por carro. Cada mes el capturista de la empresa
ingresa en la computadora los datos pertinentes. Hacer un programa que calcule e
imprima el salario mensual de un vendedor dado.
*/
const SALARIO_BRUTO = 1000;
const COMISION_POR_CARRO = 150;
const BONO_VALOR_CARRO = 0.05;

gid('ej4').addEventListener('submit', (e) => {
  e.preventDefault();

  const { carrosVendidos, valorVentaCarro } = formInputs(e.target);

  const comision = COMISION_POR_CARRO * Number(carrosVendidos);
  const bono =
    BONO_VALOR_CARRO * Number(valorVentaCarro) * Number(carrosVendidos);

  const salarioNeto = SALARIO_BRUTO + comision + bono;

  e.target.salarioBruto.value = SALARIO_BRUTO.toFixed(2);
  e.target.comision.value = comision.toFixed(2);
  e.target.bono.value = bono.toFixed(2);
  e.target.salarioNeto.value = salarioNeto.toFixed(2);
});
