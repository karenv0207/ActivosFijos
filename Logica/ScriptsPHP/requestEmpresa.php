<?php
require_once 'HtmlControl.php';

  session_start();
  $empresa = $_POST['empresa'];
  $activo = $_POST['activo'];
  
  $control = new HtmlControl($_SESSION);
  
  if($empresa != null){
    $control->cargarEmpresa($empresa, $activo);
    try{
      $control->crearEmpresa();
    }catch(Exception $e){
      echo $e;
    }
  }else{
    //creacion de mensaje de respuesta (P)  
    echo("Ingrese el nombre de la empreza");
  }
?>