var persona = {
    nombre: "Juan",
    edad: 45,
    ciudad: "Lima",
    esCasado: true,
    tecnologias: ["JS", "HTML", "CSS"]
}

var { edad:myAge, ciudad:myCity, ...atributosRestantes } = persona;
/*console.log(myAge);
console.log(myCity);
console.log(atributosRestantes);*/

var nombres = ["Ricardo", "Carlos", "Pedro", "Karla", "David"];
var [ ,human, ...itemsRestantes] = nombres;
console.log(human);
console.log(itemsRestantes);