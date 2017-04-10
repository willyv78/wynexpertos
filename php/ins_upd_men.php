<?php session_start();
require_once ("./conexion.php");
$sql_ins = "INSERT INTO wyn_contacto (wyn_contacto_nom, wyn_contacto_email, wyn_contacto_tel, wyn_contacto_men, wyn_contacto_fecha) VALUES ('".$_POST['nom']."', '".$_POST['email']."', ".$_POST['tel'].", '".$_POST['men']."', NOW())";
echo $sql_ins;
$res_ins = mysql_query($sql_ins, conexion());
if($res_ins){echo $_POST['nom'].$sql_ins;}
?>