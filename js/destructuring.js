// desestructurando array
let colores = ['rojo','amarillo','azul'];
//forma común
let azul = colores[2]
console.log(azul);
//desestructurando
let [rojo] = colores;
console.log(rojo);




// desestructurando objetos
let auto = { marca:'ford', anio:1998};
//forma común
let marcaAuto = auto.marca;
console.log(marcaAuto);
//desestructurando
let {anio} = auto;
console.log(anio);

//ejemplos
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
let [,bariloche,,china]=destinosDelMundo