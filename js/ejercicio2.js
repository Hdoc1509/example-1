/*
Ejercicio 2: Hacer un programa que calcule e imprima el salario semanal de un
empleado a partir de sus horas semanales trabajadas y de su salario por hora
*/

document.getElementById("calculo2").addEventListener("click",function(){
	let horasSemanales = document.getElementById("horasSemanales").value;
	let pagoHora = document.getElementById("horas").value;

	let salarioSemanal = parseInt(horasSemanales)*parseInt(pagoHora);

	if (isNaN(salarioSemanal)) {
		salarioSemanal = "";
	}

	document.getElementById("salarioSemanal").value = salarioSemanal;
});