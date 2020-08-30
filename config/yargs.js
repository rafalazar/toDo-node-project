const argv = require('yargs')
    .command('crear', 'Crea un ToDo',{
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'Actualiza el estado de un ToDo', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        estado: {
            alias: 'e',
            default: true
        }
    })
    .help()
    .argv;

    module.exports = {
        argv
    }