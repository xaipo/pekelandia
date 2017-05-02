<?php
$db_host="ceipekelandia.com";
$db_user="ceipeke2_root";
$db_password="123456";
$db_name="ceipeke2_pekelandia";
$db_table_name="DISPONIBILIDAD_MATRI";
$db_connection = mysql_connect($db_host, $db_user, $db_password);

 if (!$db_connection) {
	die('No se ha podido conectar a la base de datos');
}

$sql= "SELECT * FROM `DISPONIBILIDAD_MATRI`";
	mysql_select_db($db_name, $db_connection);
	$result = mysql_query($sql, $db_connection);
	$num = mysql_num_rows($result);

$arr = array();
if ($num > 0 )
{

	while($row = mysql_fetch_assoc($result)) {
		$arr[] = $row;	

	}

}
# JSON-encode the response
echo $json_response = json_encode($arr);

?>