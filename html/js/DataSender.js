/**
 * @author User
 */
var x;
x=$(document);
x.ready(events);

function events()
{
  var x = $("#botonGuardarEmpresa");
  x.click(pressButton);
}

function pressButton()
{
  /*var obj = jQuery.parseJSON( '{ "name": "John", "edad": 1 }' );
  alert( obj.name);
  alert( obj.edad);*/
  
  var e = $("#empresa").val();
  var a = $("#activo").prop("checked");
  
  /*var obj = jQuery.parseJSON( '{ "name": "'+a+'", "edad": 1 }' );
  alert( obj.name);*/
  
  if(a == true)
  {
  	a = 1;
  }
  else if(a == false)
  {
  	a = 0;
  }
  
  var StringJson = '{"nombre"= "'+e+'", "activo" = '+a+'}';
  var JSON = $.parseJSON('{"nombre":"'+e+'", "activo":'+a+'}'); 
  
  $.post("../logica/ScriptsPHP/requestEmpresa.php",{Json:JSON}, dataR); 
  return false;
}

function dataR(bandera)
{
  	if(bandera == 1)
	{
		setTimeout(location.href = "../html/main.html", 2000);
		alert("La empresa ha sido registrada");
	}
	else
	{
		document.write(bandera);
	}
	
}