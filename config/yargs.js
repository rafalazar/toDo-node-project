const descripcion = {
    demand: true,
    alias: 'd'
};

const estado = {
    alias: 'e'
};

const argv = require('yargs')
    .command('crear', 'Crea un ToDo', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de un ToDo', {
        descripcion,
        estado
    })
    .command('borrar', 'Borra la tarea del listado To Do', {
        descripcion
    })
    .command('listar', 'Lista las tareas según el estado que se le envíe.', {
        estado
    })
    .help()
    .argv;

module.exports = {
    argv
}