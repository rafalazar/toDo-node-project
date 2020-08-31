const fs = require('fs');

let listToDo = [];

const guardarDb = () => {

    let data = JSON.stringify(listToDo);

    fs.writeFile('db/data.json',data, (err) =>{
        if(err){
            throw new Error('Ocurrió un problema :c', err);
        }

        //console.log('La tarea ha sido creada satisfactoriamente!');
    });

}

const cargarDb = () => {

    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
    

}

const getListado = () => {
    cargarDb();

    return listToDo;
}

const actualizar = (descripcion, estado = true) => {

    cargarDb();
    let index = listToDo.findIndex( tarea =>{
        return tarea.descripcion === descripcion;
    });

    if(index >= 0){
        listToDo[index].estado = estado;
        guardarDb();
        return true;
    }else{
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDb();

    let newListToDo = listToDo.filter(tarea =>{
        return tarea.descripcion !== descripcion;
    });

    if (listToDo.length === newListToDo.length) {
        return false;
    } else {
        listToDo = newListToDo;
        guardarDb();
        return true;
    }

}

const crear = (descripcion) => {

    cargarDb();

    let toDo = {
        descripcion,
        estado: false
    };

    listToDo.push(toDo);
    
    guardarDb();

    return toDo;

};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}