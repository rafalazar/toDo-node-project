const argv = require('./config/yargs').argv;
const toDo = require('./to-do/todo');
const colors = require('colors');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = toDo.getListado();
        for(let tarea of listado){
            console.log('=========== Por Hacer ============');
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.estado}`);
            console.log('==================================');
        }
        break;
    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.estado);
        console.log('El ESTADO ha sido actualizado.');
        break;
    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido.');
        break;
}