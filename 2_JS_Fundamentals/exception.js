function obtenerEdadDelObjeto(objeto){
    try{
        //console.log(objeto.pais.codigoZip);

        console.log(objeto.edad);

    }catch(error){
        console.log(error);
    }

    console.log("Siguiente Linea Ejecutada");
}

var persona = {
    nombre: "Juan",
    edad: 45,
    ciudad: "Lima",
    esCasado: true,
    tecnologias: ["JS", "HTML", "CSS"]
}

obtenerEdadDelObjeto(persona);