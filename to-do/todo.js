const fs = require('fs');

let listToDo = [];

const guardarDb = () => {

    let data = JSON.stringify(listToDo);

    fs.writeFile('db/data.json',data, (err) =>{
        if(err){
            throw new Error('Ocurrió un problema :c', err);
        }

        console.log('La tarea ha sido creada satisfactoriamente!');
    });

}

const crear = (descripcion) => {

    let toDo = {
        descripcion,
        estado: false
    };

    listToDo.push(toDo);
    
    guardarDb();

    return toDo;

};

module.exports = {
    crear
}