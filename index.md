<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Example 1</title>
</head>
<body>

<center>
	<h1>Colegio Particular New Program</h1>
</center>

<form action="" name="FrmPromedio" method="post">
	<h2>Calcula tu Promedio de notas</h2>
	Primer Bimestre:<input type="text" name="Nota1"><br><br>
	Segundo Bimestre:<input type="text" name="Nota2"><br><br>
	Tercer Bimestre:<input type="text" name="Nota3"><br><br>
	Cuarto Bimestre:<input type="text" name="Nota4"><br><br>
	Promedio:<input type="text" name="Promedio" value="<?php echo $p; ?>"><br><br>
	<input type="submit" value="Calcular">
</form>

</body>
</html>
