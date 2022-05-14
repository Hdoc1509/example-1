/*
Ejercicio 4: Una compañía de venta de carros usados paga a su personal de ventas
un salario de $1000 mensuales, más una comisión de $150 por cada carro vendido,
más el 5% del valor de la venta por carro. Cada mes el capturista de la empresa
ingresa en la computadora los datos pertinentes. Hacer un programa que calcule e
imprima el salario mensual de un vendedor dado.
*/

document.getElementById("calculo4").addEventListener("click",function(){
    let salarioBruto = 1000;
    let carrosVendidos = document.getElementById("carrosVendidos").value;
    let valorVentaCarro = document.getElementById("valorVentaCarro").value;

    let comision = 150*parseInt(carrosVendidos);
    let bono = 0.05*parseInt(valorVentaCarro);
    let salarioNeto = salarioBruto+comision+bono;

    if (isNaN(salarioNeto)){
        salarioBruto = "";
        comision = "";
        bono = "";
        salarioNeto = "";
    }

    document.getElementById("salarioBruto").value = salarioBruto;
    document.getElementById("comision").value = comision;
    document.getElementById("bono").value = bono;
    document.getElementById("salarioNeto").value = salarioNeto;
});