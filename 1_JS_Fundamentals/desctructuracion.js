var persona = {
    nombre: "Juan",
    edad: 45,
    ciudad: "Lima",
    esCasado: true,
    tecnologias: ["JS", "HTML", "CSS"]
};

/*var miNombre = persona.nombre;
var miEdad = persona.edad;*/

//var {nombre, edad, ciudad} = persona;

//var techs = persona.tecnologias;

//var { tecnologias : techs, nombre : myName } = persona;

/*console.log(techs);
console.log(myName);
*/

// EJERCICIO
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}

let { name: myName, age: edad } = person;
// let myName = person.name;
// let edad = person.age;

console.log(myName);
console.log(person.height);