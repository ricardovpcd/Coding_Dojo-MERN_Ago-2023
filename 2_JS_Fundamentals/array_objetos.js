var persona = {
    nombre: "Ricardo",
    edad: 30,
    pais: "Peru"
}
var { nombre:myName } = persona;
// var myName = persona.nombre;

// LISTA DE OBJETOS
var listaPersonas = [
    {
        nombre: "Ricardo",
        edad: 30,
        pais: "Peru"
    },
    {
        nombre: "Juan",
        edad: 45,
        pais: "Colombia"
    },
    {
        nombre: "Maria",
        edad: 25,
        pais: "Chile"
    }
];

// FILTER
var listaNumeros = [10, 50, 4, -1, 5, 0];

var listaMenores = listaNumeros.filter((item) => item < 7);
//console.log(listaMenores);

var listaDivisiblesEntreDos = listaNumeros.filter((item) => (item % 2 == 0 && item > 5));
//console.log(listaDivisiblesEntreDos);

// MAP
var listaNombres = ["Ricardo", "Juan", "Maria"];
var listaNombresSaludos = listaNombres.map((nombre) => "Hola " + nombre + " Como estas?");
//console.log(listaNombresSaludos);

// ARRAY DE OBJETOS (EJERCICIO)
var carrosLista = [
    {
        marca: "subaru",
        modelo: "impreza",
        kilometraje: 30000,
        numeroPuertas: 4
    },
    {
        marca: "BMW",
        modelo: "X5",
        kilometraje: 50000,
        numeroPuertas: 4
    },
    {
        marca: "Mini Cooper",
        modelo: "GH56",
        kilometraje: 10000,
        numeroPuertas: 2
    }
];

/*console.log(carrosLista[2].modelo);
console.log(carrosLista[0].kilometraje);*/

var carrosConMenorKilometraje = carrosLista.filter((item) => item.kilometraje < 40000);
//console.log(carrosConMenorKilometraje);

var carrosConDosPuertas = carrosLista.filter((carro) => carro.numeroPuertas == 2);
//console.log(carrosConDosPuertas);

// MANIPULAR UN OBJETO
var carroSubaru = {
    marca: "subaru",
    modelo: "impreza",
    kilometraje: 30000,
    numeroPuertas: 4,
    cilindrada: 120
};

carroSubaru.color = "Rojo";
carroSubaru.kilometraje = 50000;

console.log(carroSubaru);

carroSubaru.kilometraje = 40000;

console.log(carroSubaru);