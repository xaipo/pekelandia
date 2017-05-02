<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST["telefono"];

//$mensaje = $_POST['mensaje'];

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $email . " \r\n";
$mensaje .= "Su telefono es: " . $telefono . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());



// Varios destinatarios
$para  = 'lcvelastegui@gmail.com';

// título
$título = 'Pekelandia';


// Para enviar un correo HTML, debe establecerse la cabecera Content-type
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Cabeceras adicionales
$cabeceras .= 'To: Lenin <lcvelastegui@gmail.com>' . "\r\n";
$cabeceras .= 'From: Recordatorio <info@riobytes.com>' . "\r\n";


// Enviarlo
mail($email, $título, $mensaje, $cabeceras);

header("Location:../contactos.html");

?>