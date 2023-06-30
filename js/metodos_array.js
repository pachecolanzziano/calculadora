//map
let numero = [2,4,6,20];
let elDoble = numero.map(function(num){
    return num * 2;
})

let listaMayores = numero.map(function(num){
    if (num > 10) {
        return true
    }
    return false;
})
//-----------------------------------------
// ej mixto con map y filter
let productos = [
    {'nombre':'futbol', 'precio':'2000', 'cantidad':'3'},
    {'nombre':'baloncesto', 'precio':'1000', 'cantidad':'4'}]

let listaProductos = productos.map((producto)=>{
    return (producto.nombre).toUpperCase();
})

let listaPrecios = productos.filter((producto)=>{
    return producto.precio >= 2000
})

// console.log(listaPrecios);
//----------------------------------------
//filter
let edades = [22,8,17,14,30];

let mayores = edades.filter((edad)=>{
    return edad > 18
})

let mayoress = edades.map((edad)=>{
    return edad > 18
})
// console.log(mayores);
// console.log(mayoress);

//----------------------------------------------
//reduce()
var nums = [5,7,16];
var suma = nums.reduce((acum, num)=>{
    return acum + num;
});
// console.log(suma);

//ej2
var letras = ['h','o','l','a'];
var componer = letras.reduce((acum, letra)=>{
    return acum + letra;
});
// console.log(componer);

//-----------------------------------------------

//forEach
var paises = ['Argentina', 'Colombia', 'Perú'];

// paises.forEach((pais)=>{
//     console.log(pais);
// })

//----------------------------------------------------

//ejercicios planteados
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter((estudiante)=>{
    return estudiante.aprobado == true
})

let desaprobados = estudiantes.filter((estudiante)=>{
    return estudiante.aprobado == false
})

console.log(aprobados);
console.log(desaprobados);

aprobados.forEach((estudiante)=>{
    console.log(`Felicitaciones ${estudiante.nombre} acá esta tu diploma`);
})

desaprobados.forEach((estudiante)=>{
    console.log(`${estudiante.nombre} tienes un recuperatorio ya que no aprobaste las materias`);
})
//--------------------------------------
let horariosPartida = [12, 14, 18, 21];
let horariosAtrasados= horariosPartida.map((valor)=>{
    return valor-1
})

//-------------------------------------
let vueltas = [5, 8, 12, 3, 22]
let totalVueltas=vueltas.reduce(function(acumuladora,valor){
    return acumuladora+valor
})

//------------------------------------
let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];
listaDeSuperMercado.forEach(function(valor){
    console.log(valor)
})