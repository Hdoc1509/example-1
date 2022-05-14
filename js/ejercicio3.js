/*
Ejercicio 3: Guillermo tiene N dólares. Luis tiene la mitad de lo que posee
Guillermo. Juan tiene la mitad de lo que poseen Luis y Guillermo juntos. Hacer
un programa que calcule e imprima la cantidad de dinero que tienen entre los
tres.
*/

document.getElementById("calculo3").addEventListener("click",function(){
    let guillermo = document.getElementById("guillermo").value;
    guillermo = parseInt(guillermo);

    let luis = guillermo/2;
    let juan = (luis+guillermo)/2;

    let total = guillermo+luis+juan;

    if (isNaN(total)) {
        luis = "";
        juan = "";
        total = "";
    }

    document.getElementById("luis").value = luis;
    document.getElementById("juan").value = juan;
    document.getElementById("total").value = total;
});