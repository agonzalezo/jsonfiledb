const { insert, getall } = require('./controller/jsonbd.controller')
const myjson = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
};

// #region Insertar un objeto en la BD
insert(myjson)
    .then((msg) => {
        console.log(msg)
    })
    .catch((error) => {
        console.log(error)
    })

// #region  Obtener todos los objetos de la BD.
getall()
    .then((json) => {
        console.log(json);
    })
    .catch((error) => {
        console.log("Error leyendo la BD:\n", error)
    })



