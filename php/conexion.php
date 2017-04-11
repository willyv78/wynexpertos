<?php
//////////////////////////////////////////////////////////////////////////////////////
// Aplicación PHP usando Bootstrap, jquery, HTML5 y CSS - PH                        //
// Copyright 2014 Wilson Giovanny Velandia Barreto 3204274564 - willyv78@gmail.com  //
//////////////////////////////////////////////////////////////////////////////////////
function conexion(){
    $con = mysql_connect("localhost","wyn_admin","wynGemelo#22");
	if (!$con){die('No se pudo conectar: ' . mysql_error());}
	mysql_select_db("wynexpertos", $con);
	return $con;
}?>