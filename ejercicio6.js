/*
Ejercicio 6: Hacer un programa que calcule el cuadrado de una suma.
(a+b)^2 = a^2 + b^2 + 2ab
*/

document.getElementById("calculo6").addEventListener("click",function(){
	let n1 = parseInt(document.getElementById("num1").value);
	let n2 = parseInt(document.getElementById("num2").value);

	let cuadradoSuma = Math.pow(n1,2)+Math.pow(n2,2)+2*n1*n2;

	if (isNaN(cuadradoSuma)) {
		cuadradoSuma = "";
	}

	document.getElementById("cuadradoSuma").value = cuadradoSuma;
});