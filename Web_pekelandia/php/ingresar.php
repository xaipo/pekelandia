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
	$nombre = $_GET['nombre'];
	$fecha_naci = $_GET['fecha_naci'];
	$anios = $_GET['anios'];
	$meses = $_GET['meses'];
	$sexo = $_GET['sexo'];
	$talla = $_GET['talla'];
	$peso = $_GET['peso'];
	$torax = $_GET['torax'];
	$id_jornada = $_GET['id_jornada'];
	$id_refrigerio = $_GET['id_refrigerio'];
	$alimentos_excluidos = $_GET['alimentos_excluidos'];
	$problemas_salud = $_GET['problemas_salud'];
	$alergias = $_GET['alergias'];
	$medicacion = $_GET['medicacion'];
	$pediatra = $_GET['pediatra'];
	$tel_pediatra = $_GET['tel_pediatra'];
	$perso_recibir_ninios = $_GET['perso_recibir_ninios'];
	$tel_emergencia = $_GET['tel_emergencia'];
	$observaciones = $_GET['observaciones'];
	$centro_edu_anterior = $_GET['centro_edu_anterior'];
	

//-----------------Toma la fecha de nacimiento y saca los años y meses que tiene el estudiante

    $date2 = date('Y-m-d');//
	$diff = abs(strtotime($date2) - strtotime($fecha_naci));
	$years = floor($diff / (365*60*60*24));
	$months = floor(($diff - $years * 365*60*60*24) / (30*60*60*24));
	$days = floor(($diff - $years * 365*60*60*24 - $months*30*60*60*24)/ (60*60*24));

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
		//-------------------Select ingresar un nuevo usuario

		$insertar_valores="INSERT INTO `ESTUDIANTES` ( `CEDULA`, `ID_REFRIGERIO`, `ID_JORNADA`, `NOMBRE`, `FECHA_NACIMIENTO`, `ANIOS`, `MESES`, `SEXO`, `TALLA`, `PESO`, `TORAX`, `ALIMENTOS_EXCLUIDOS`, `PROBLEMAS_SALUD`, `ALERGIAS`, `MEDICACION`, `PEDIATRA`, `TEL_PEDIATRA`, `PERSO_RECIBIR_NINIO`, `TEL_EMERGENCIA`, `OBSERVACIONES`, `CENTRO_EDU_ANTERIOR`) VALUES
		    (  '$cedula',$id_refrigerio, $id_jornada, '$nombre', '$fecha_naci', $years, $months, '$sexo', $talla, $peso, $torax, '$alimentos_excluidos', '$problemas_salud', '$alergias', '$medicacion', '$pediatra', '$tel_pediatra', '$perso_recibir_ninios', '$tel_emergencia', '$observaciones', '$centro_edu_anterior')";


		mysql_select_db($db_name, $db_connection);
		$retry_value = mysql_query($insertar_valores, $db_connection);
		//$num1 = mysql_num_rows($retry_value);

		if (!$retry_value) {
			
		   echo "error"; //lo que se envia de respuesta al ajax de javascript
		   
		}else 
		{
			echo "false"; //lo que se envia de respuesta al ajax de javascript
		}	
		
		//header('Location: ../matricula.html');
		
	

	}

	


mysql_close($db_connection);





?>