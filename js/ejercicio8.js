/*
Ejercicio 8: Construir un programa que calcule y muestre por pantalla las raíces
de la ecuación de segundo grado de coeficientes reales.
a*x^2 + b*x + c = 0
x1 = (-b + Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a)
x2 = (-b - Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a)
*/

document.getElementById("calculo8").addEventListener("click",function(){
	let a = parseInt(document.getElementById("coeA").value);
	let b = parseInt(document.getElementById("coeB").value);
	let c = parseInt(document.getElementById("coeC").value);

	let x1 = (-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
	let x2 = (-b-Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);

	if(isNaN(x1)||isNaN(x2)){
		x1 = "No hay raíz";
		x2 = "No hay raíz";
	}

	document.getElementById("raiz1").value = x1;
	document.getElementById("raiz2").value = x2;
});