
	document.write('Estado: en espera');

	for(var i=0; i<10; i++){
		window.setTimeout('return 0',1000);
	}
	//location.reload(true);
	document.write('\n');
	document.write('Estado: entregado');
