// Dispositivo

/*
	Declaración de arreglos en JavaScrit
	var arr = new Array();
	var arr = (1,2,3,4,5);
	var arr = [];
*/
function dispositivo() {
	var disp=[];
	disp['name']=device.name;
	disp['phonegap']=device.cordova;
	disp['platform']=device.platform;
	disp['id']=device.uuid;
	disp['version']=device.version;
	disp['model']=device.model;
	
	return disp;
}

/*
	Forma de accesar a los elementos del arreglo
	
	dispositivo()['name'];
	var dev=dispositivo();
	dev['name'];
*/