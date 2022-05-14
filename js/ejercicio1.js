/*
Ejercicio1: Hacer un programa que calcule e imprima la suma de tres calificaciones.
*/

document.getElementById("calculo1").addEventListener("click",function(){
	let nota1 = document.getElementById("nota1").value;
	let nota2 = document.getElementById("nota2").value;
	let nota3 = document.getElementById("nota3").value;

	let resultado1 = parseInt(nota1)+parseInt(nota2)+parseInt(nota3);

	if (isNaN(resultado1)) {
		resultado1 = "";
	}

	document.getElementById("resultado1").value = resultado1;
});