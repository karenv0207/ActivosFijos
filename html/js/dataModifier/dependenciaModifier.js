/**
 * @author User
 */

/**
 * @author User
 */
reportData();

function reportData()
{
	var nproceso = 2;
	$.post("../logica/ScriptsPHP/requestDependencia.php",{nproceso: nproceso}, responseReportData);	
	return false;
}

function responseReportData(data)
{
	var array = new Array();
	var dependencia = new Array();
	var empresa = new Array();
	array = $.parseJSON(data);
	
	empresa = array['empresa'];
	dependencia = array['dependencia'];
	
	$('#tablaDependencias').append('<table class="table table-hover" id = "tabla"><thead><tr><th>ID</th><th>Nombre Dependencia</th><th>Activo</th><th>Empresa</th></tr></thead><tbody id = "tbody">');
	
	for(i = 0; i < dependencia.length; i++)
	{
		$('#tbody').append('<tr id = "row'+i+'">');
		$('#row'+i).append('<td>'+dependencia[i].iddependencia+'</td>');
		$('#row'+i).append('<td>'+dependencia[i].nombre+'</td>');
		$('#row'+i).append('<td>'+((dependencia[i].activo == 1)?"activo":"inactivo")+'</td>');
		$('#row'+i).append('<td>'+empresa[parseInt(dependencia[i].idempresa)]+'</td>');
		$('#row'+i).append('<td><input value = "Modificar" type = "submit" id = "modificarEmpresa" onclick = "postModificar('+dependencia[i].iddependencia+')"  class="btn btn-primary"></td>');
	}
	$('#tablaDependencias').append('</table>');
	
}

function postModificar(iddependencia)
{
	var nproceso = 4;
	$.post("../logica/ScriptsPHP/requestDependencia.php",{nproceso: nproceso, id: iddependencia}, responseModifieData);	
	return false;
}

function responseModifieData(data)
{
	$('#tabla').remove();
	$('#tablaDependencias').append('<form class="form-horizontal" id = "form_1">');	
	$('#form_1').append('<fieldset id = "fieldset">');	
	$('#fieldset').append('<form class="form-horizontal">');	
	$('#tablaDependencias').append('<form class="form-horizontal">');	
	$('#tablaDependencias').append('<form class="form-horizontal">');	
	$('#tablaDependencias').append('<form class="form-horizontal">');	
	$('#tablaDependencias').append('<form class="form-horizontal">');	
	$('#tablaDependencias').append('<form class="form-horizontal">');	
	$('#tablaDependencias').append('<form class="form-horizontal">');	
}
