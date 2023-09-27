var persona = {
    nombre: "Juan",
    edad: 45,
    ciudad: "Lima",
    esCasado: true,
    tecnologias: ["JS", "HTML", "CSS"]
};

// Index          0         1          2        4
var frutas = ["Manzana", "Platano", "Fresa", "Palta"];
var seleccion = frutas[2];
//console.log(seleccion);

var [primero, segundo, tercero] = frutas;
/*console.log(primero);
console.log(segundo);
console.log(tercero);*/

var [ , , , cuarto] = frutas;
//console.log(cuarto);

var nombres = ["Ricardo", "Carlos", "Pedro", "Karla", "David"];
var [ , , ,nombre] = nombres;
//console.log(nombre);

var [human1, ,human2] = nombres;
console.log(human1);
console.log(human2);



// EJERCICIO
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}

const { key } = lastTest;
// var key = lastTest.key;
const { secondKey } = lastTest;
// var secondKey = lastTest.secondKey;
// var secondKey = [1, 5, 1, 8, 3, 3];

const [ ,willThisWork] = secondKey;

//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);