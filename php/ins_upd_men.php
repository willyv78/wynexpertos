<?php session_start();
require_once ("./conexion.php");
$sql_ins = "INSERT INTO wyn_contacto (wyn_contacto_nom, wyn_contacto_email, wyn_contacto_tel, wyn_contacto_men, wyn_contacto_fecha) VALUES ('".$_POST['nom']."', '".$_POST['email']."', ".$_POST['tel'].", '".$_POST['men']."', NOW())";
// echo $sql_ins;
$res_ins = mysql_query($sql_ins, conexion());
if($res_ins){
    $nombre = $_POST['nom'];
    $email = $_POST['email'];
    $celular = $_POST['tel'];
    $mensaje = $_POST['men'];
    $fecha = date('d-m-Y');

    // direccion que recibe el mensaje
    $para = "contacto@wynexpertos.com";
    // $para = "disenoydesarrollowebbogota@gmail.com";
    // asunto del mensaje
    $asunto = utf8_decode("Correo Contacto Página Web");
    // cabeceras del mensaje
    $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n\n\n";
    // direccion de envio del mensaje
    $cabeceras .= 'Nombre:  ' . $nombre . "\r\n\n";
    $cabeceras .= 'Correo electrónico:  ' . $email . "\r\n\n";
    $cabeceras .= 'Teléfono Celular:  ' . $celular . "\r\n\n";
    $cabeceras .= 'Fecha:  ' . $fecha . "\r\n\n";
    $cabeceras .= 'Mensaje:  ' . $mensaje . "\r\n\n";

    // direccion con copia
    //$cabeceras .= 'Cc: birthdayarchive@example.com' . "\r\n";
    // direccion con copia oculta
    //$cabeceras .= 'Bcc: ' . $dir_email . "\r\n";
    // en este espacio se puede colocar el replay o responder a
    // correo de quien envía el formulario

    // mensaje del formulario
    //$mensaje = $_POST['mensaje'];

    // Envio de correo electronico a los involucrados en la solicitud

    if (mail($para, $asunto, $cabeceras)) {
        echo $_POST['nom'];
    }
}
?>