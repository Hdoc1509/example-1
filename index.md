<?php

// Ochoa
// Héctor
// Computación e Informática
// VI Ciclo

$SalarioTrabajador = 3500;
$Incremento = 20; // Porcentaje

$cIncremento=(($SalarioTrabajador /100) * $Incremento);
$SueldoReal = $SalarioTrabajador + $cIncremento;

echo "Salario del trabajador: $SalarioTrabajador<BR>";
echo "Incremento: $Incremento"."%: $cIncremento<BR>";
echo "Nuevo sueldo: $SueldoReal";
?>
