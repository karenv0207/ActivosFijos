<?php
require_once ('../controler/HClog.php');
session_start();

$usuario = $_REQUEST['user'];
$password = $_REQUEST['password'];

if(isset($usuario, $password)){
    try {
        $controlLog = new HClog($_SESSION, $usuario, $password);
		echo TRUE;
		
		/*["proceso":"true"]
		["Usuario":$_SESSION['usuario']]
		["Menu" :
		{"modulo":nombre,"submenu":[grabar: ..] }
		]*/
    }
	catch (exception $e) 
    {	
        echo ": " . $e->getMessage();
    }    
}else{
    echo "Campos requeridos en null";
}
?>