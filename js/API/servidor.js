//Conexión al servidor
function logSend(nombre,lugar,mail,tel){
	$.ajax({
		type: "POST",
		url: "http://www.igitsoft.com/pgtest.php",
		data: "nom="+nombre+"&lug="+lugar+"&mai="+mail+"&tel="+tel+"&uuid="+dipositivo()['id']
	}).done(function(msg){
		if(msg=="0")
			pgAlert('Error','Hubo un error al enviar datos');
		else{
			pgAlert('Registrado','Se ha registrado Satisfactoriamente');
			//Guardar Base de datos local	
		}
	});
}