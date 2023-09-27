var metodoPadre = (numero, xxxxyyy, metodo) => {
    metodo();
    return numero + xxxxyyy;
}

var metodoHijo = () => {
    console.log("Hola desde el Metodo Hijo");
}

var resultado = metodoPadre(10, 15, metodoHijo);
console.log(resultado);