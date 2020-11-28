const
    path = require("path"),
    fs = require("fs"),
    db_dir = "data",
    db_name = "dbjson.json",
    db_path = path.join(__dirname, db_dir, db_name),
    separator = "\n============ ERROR TRACE ===============\n"
    ;
let mydb = {};

//#region Consultar todos los objetos de la BD
mydb.getall = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(db_path, "utf-8", (err, data) => {
            if (err) {
                return reject(err);
            }
            return resolve(JSON.parse(data));
        })
    })
}
//#endregion

//#region Insertar un objeto JSON sin parsear
mydb.insert = (obj_json) => {
    return new Promise((resolve, rejec) => {
        mydb.getall()
            .then((data) => {
                // console.log("data obtenida de la BD", data)
                data.push(obj_json);
                return JSON.stringify(data);
            })
            .then((toinsert) => {
                fs.writeFile(db_path, toinsert, "utf-8", (err) => {
                    if (err) rejec(err)
                    return resolve("Data insertada correctamente.");
                })
            })
            .catch((err) => {
                console.log(`La base de datos no existe, se procede a crear un array vacio: ${separator} ${err} ${separator}` )
                let memdb = [];
                memdb.push(obj_json);
                memdb = JSON.stringify(memdb);
                fs.writeFile(db_path,memdb,"utf-8",(err)=>{
                    if (err) return rejec(err);
                    return resolve(`Data insertada correctamente.`);
                })
            })
    })
}
//#endregion

module.exports = mydb;