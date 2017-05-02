<?php

//Conexion con la base de datos

$db_host="ceipekelandia.com";
$db_user="ceipeke2_root";
$db_password="123456";
$db_name="ceipeke2_pekelandia";
$db_table_name="ESTUDIANTES";
$db_connection = mysql_connect($db_host, $db_user, $db_password);

 if (!$db_connection) {
	die('No se ha podido conectar a la base de datos');
}

   //utf8_decode
//--------Datos Obtenidos desde el ajax el ajax de code.js

	$cedula = $_GET['cedula'];
	
//---------------Select comprobar si el usuario ya esta registrado

	$sql= "SELECT * FROM `ESTUDIANTES` WHERE `CEDULA` = '$cedula'";
	mysql_select_db($db_name, $db_connection);
	$retry_value = mysql_query($sql, $db_connection);
	$num = mysql_num_rows($retry_value);
	if ($num>0)
	{
		
		
		echo "true"; //lo que se envia de respuesta al ajax de javascript

		//echo '<script type="text/javascript">$("#resultado").html("<div style = background:green >Acceso correcto </div>");</script>';

	  
	}else
	{
		
		echo "false";

	}

	


mysql_close($db_connection);





?>