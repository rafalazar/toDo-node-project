const argv = require('./config/yargs').argv;
const toDo = require('./to-do/todo');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Listar los ToDo');
        break;
    case 'actualizar':
        console.log('Actualizar los ToDo');
        break;
    default:
        console.log('Comando no reconocido.');
        break;
}