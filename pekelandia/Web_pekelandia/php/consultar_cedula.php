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

	$sql= "SELECT * FROM `ESTUDIANTES` WHERE `CEDULA` = '0604262956'";
	mysql_select_db($db_name, $db_connection);
	$result = mysql_query($sql, $db_connection);
	$num = mysql_num_rows($result);

	$arr = array();
	if ($num >= 0 )
	{
		
		$row = mysql_fetch_assoc($result);
		


	}

# JSON-encode the response
	echo $json_response = json_encode($row);
    mysql_close($db_connection);





?>