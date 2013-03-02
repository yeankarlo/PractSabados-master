// Captura Foto
function capturaImg() {
	// start image capture
	var ruta = navigator.device.capture.captureImage(captureSuccess, captureError, {limit:1});
	
	// Cambiamos de color el botón de tomar la foto
	$('#regFoto').attr('rel',mediaFiles[0].fullPath).css('background-color','#0F0');
	
	// Ponemos la foto debajo del botón "Tomar foto" y arriba del botón "Envar"
	$('#login div[data-role=content] #regSubmit').prepend('<img src="'+ruta+'" style="width:100%" />');
}

// capture callback
var captureSuccess = function(mediaFiles) {
	return mediaFiles[0].fullPath;
};

// capture error callback
var captureError = function(error) {
	return 'Error al tomar la foto'
};
