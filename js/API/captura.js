// Captura Foto
function capturaImg() {
	// start image capture
	// navigator.device.capture.captureImage(captureSuccess, captureError, {limit:1});
	navigator.device.capture.captureImage(
		function(mediaFiles) {
			pgAlert('Captura de foto', 'Foto tomada satisfactoriamente.');
			
			// Cambiamos de color el botón de tomar la foto
			$('#regFoto').attr('rel',mediaFiles[0].fullPath).css('background-color','#0F0');
			
			// Ponemos la foto debajo del botón "Tomar foto" y arriba del botón "Enviar"
			$('#login div[data-role=content] #regSubmit').prepend('<img src="'+mediaFiles[0].fullPath+'" style="width:100%" />');
		}, 
		function(error) {
			pgAlert('Captura de foto', 'Error al tomar foto.');
		}, 
		
		{limit:1});
}

// capture callback -Se asigna una función a la variabe
var captureSuccess = function(mediaFiles) {
	return mediaFiles[0].fullPath;
};

// capture error callback -Se asigna una función a la variable
var captureError = function(error) {
	return 'Error al tomar la foto';
};
