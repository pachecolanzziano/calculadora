const archivo = require('./json/funcionesDeTareas');

let accion = process.argv[2];

switch (accion) {
  case 'listar':
    let listaTareas = archivo.leerArchivo();
    for (let index = 0; index < listaTareas.length; index++) {
      console.log(`${index+1}. ${listaTareas[index].titulo} - ${listaTareas[index].descripcion}`); 
      
    }
    break;

  case undefined:
    console.log('no ingresaste ninguna accion');
    break;

  default:
    console.log('No entiendo que quieres hacer');
    break;
}

