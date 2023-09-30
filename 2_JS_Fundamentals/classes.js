/*var persona = {
    nombre: "Juan",
    edad: 13,
    pais: "Peru",
    ciudad: "Lima"
}

var persona2 = {
    nombre: "Ricardo",
    edad: 20,
    pais: "Chile"
}

var persona3 = {
    edad: 20
}

function calcularEdadEnDiez(objeto){
    return objeto.edad + 10;
}

function saludarPersona(objeto){
    return "Hola: " + objeto.nombre;
}

calcularEdadEnDiez(persona);
calcularEdadEnDiez(persona2);
calcularEdadEnDiez(persona3);

saludarPersona(persona);
saludarPersona(persona2);
saludarPersona(persona3);*/


// Clases = Objeto que tiene atributos y metodos (Tienen acceso a los atributos) (reutilizable)
/*class Persona{
    constructor(nombreAtr, edadAtr, paisAtr, ciudadAtr){
        this.nombre = nombreAtr;
        this.edad = edadAtr;
        this.pais = paisAtr;
        this.ciudad = ciudadAtr;
    }

    saludame(){
        console.log("Hola " + this.nombre);
    }

    calcularMiEdadEnDiez(){
        console.log("Tu edad en diez años es: " + (this.edad + 10));
    }
}

var persona1 = new Persona("Carlos", 25, "Colombia", "Lima");
persona1.saludame();
persona1.calcularMiEdadEnDiez();
console.log(persona1.pais);

var persona2 = new Persona("Maria", 28, "Peru", "Trujillo");
persona2.saludame();
persona2.calcularMiEdadEnDiez();

var persona3 = new Persona("Juan", 34, "Peru", "Huaraz");
persona3.saludame();
persona3.calcularMiEdadEnDiez();*/

/*class Animal{
    constructor(nombreAtr, nPatasAtr, tipoAtr, vuelaAtr){
        this.nombre = nombreAtr;
        this.nPatas = nPatasAtr;
        this.tipo = tipoAtr;
        this.vuela = vuelaAtr;
    }

    llamarAlAnimal(){
        console.log("Hey " + this.nombre);
    }

    verificarSiVuela(){
        if(this.vuela == true){
            console.log("Tu puedes volar");
        } else {
            console.log("Tu NO puedes volar");
        }
    }
}

var perro = new Animal("Perro", 4, "Domestico", false);
perro.llamarAlAnimal();
perro.verificarSiVuela();

var pajaro = new Animal("Pajaro", 2, "Salvaje", true);
pajaro.llamarAlAnimal();
pajaro.verificarSiVuela();*/

/*class Vehiculo{
    constructor(marcaAtr, kilometrajeAtr){
        this.marca = marcaAtr;
        this.kilometraje = kilometrajeAtr;
    }

    encender(){
        console.log("Encender el vehiculo " + this.marca);
    }
}

class Carro extends Vehiculo{
    constructor(marcaAtr, modeloAtr, numeroPuertasAtr, kilometrajeAtr){
        super(marcaAtr, kilometrajeAtr);
        this.modelo = modeloAtr;
        this.numeroPuertas = numeroPuertasAtr;
    }
}

class Moto extends Vehiculo{
    constructor(marcaAtr, cilindradaAtra, kilometrajeAtr){
        super(marcaAtr, kilometrajeAtr);
        this.cilindrada = cilindradaAtra;
    }
}

var subaru = new Carro("Subaru", "Impreza", 4, 30000);
subaru.encender();*/

// EJERCICIO
class Ninja{
    constructor(nombreAtr, saludAtr){
        this.nombre = nombreAtr;
        this.salud = saludAtr;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log("Hola " + this.nombre);
    }

    showStats(){
        console.log("Nombre: " + this.nombre);
        console.log("Salud: " + this.salud);
        console.log("Velocidad: " + this.velocidad);
        console.log("Fuerza: " + this.fuerza);
    }

    drinkSake(){
        this.salud = this.salud + 10;
        //this.salud += 10;
    }

    retornarSaludAgregando20(){
        this.salud = this.salud + 20;
        return this.salud;
    }
}

var ninja1 = new Ninja("Ninja Juan", 100);
//console.log(ninja1);
//ninja1.sayName();
/*ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();*/

var resultado = ninja1.retornarSaludAgregando20();
console.log(resultado);
