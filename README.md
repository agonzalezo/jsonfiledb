# Iniciar la aplicacion con async await
async function main() {
     try {
          const ins = await insert(myjson);
          console.log("Insertado: \n", ins)
         const lec = await getall()
         console.log("Lectura: \n", lec)
     } catch (error) {
         console.log("Error abriendo la base de datos\n", error)
     }
 }
 main();


# Iniciar la aplicacion con then y catch
//#endregion
getall()
    .then((json) => {
        console.log(json);
    })
    .catch((error) => {
        console.log("Error leyendo la BD:\n", error)
    })

//#endregion
insert(myjson)
    .then((msg) => {
        console.log(msg)
    })
    .catch((error)=>{
        console.log(error)
    })