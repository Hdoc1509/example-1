/*
Ejercicio 7: Construir un programa que, dado un número total de horas, devuelve
el número de semanas, días y horas equivalentes. Por ejemplo, dado un total de
1000 horas debe mostrar 5 semanas, 6 días y 16 horas.
*/

document.getElementById("calculo7").addEventListener("click",function(){
	let totalHoras = parseInt(document.getElementById("totalHoras").value);

	let semanas = parseInt(totalHoras/168);
	let dias = parseInt((totalHoras%168)/24);
	let horas = totalHoras%24;

	if(isNaN(totalHoras)){
		semanas = "";
		dias = "";
		horas = "";
	}

	document.getElementById("semanas").value = semanas;
	document.getElementById("dias").value = dias;
	document.getElementById("restoHoras").value = horas;
});