//Todo: OBJETOS LITERALES.

let curso = {
    //Propiedades
    cantidadAlumnos : 32,
    docentes : ["nacho", "Javier"],
    horario : "de 19 a 21 hs",
    //Métodos
    notificaciones : function () {
        return "El horario del curso es de "+this.horario
    }
}
// console.log(curso.horario);
// console.log(curso.notificaciones());


//Funciones constructoras empiezan en mayúsculas
function Curso(cantidadAlumnos, docentes, horario) {
    this.cantidadAlumnos = cantidadAlumnos;
    this.docentes = docentes;
    this.horario = horario;
}

let cursoProgramacion =  new Curso(12, ["Juan", "Pedro"], "de 6am a 10am")

console.log(cursoProgramacion);

//todo: EJERCICIOS

// 1)
let perro = {
    nombre : "Pichirilin",
    edad : 2,
    vacunado : false 
}

console.log(perro.vacunado);

// 2)
let deportista = {
    nombre : "Juan Pablo Montoya",
    energia : 100,
    experiencia : 0,
    entrenarHoras : function(cantidadHoras){
        this.energia = this.energia - (cantidadHoras*5);
        this.experiencia = this.experiencia + (cantidadHoras*2)

    }
}

deportista.entrenarHoras(2)
console.log(deportista);