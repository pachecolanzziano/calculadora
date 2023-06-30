let miFecha = new Date();

let diaDeMiFecha = miFecha.getDate();
// console.log(diaDeMiFecha);

let mesDeMiFecha = miFecha.getMonth();//return 0-11
// console.log(mesDeMiFecha+1);

let diaSemanaDeMiFecha = miFecha.getDay();//return 0-6, empieza el domingo
// console.log(diaSemanaDeMiFecha);

let anioDeMiFecha = miFecha.getFullYear(); 
// console.log(`Fecha ${diaDeMiFecha}/${mesDeMiFecha+1}/${anioDeMiFecha}`);

//objetos de fechas
let miFechaDeCumple =  new Date(1990,08,27);
// console.log(miFechaDeCumple.getFullYear());

// console.log(miFecha.toUTCString());
// console.log(miFecha.toISOString());
// console.log(miFecha.toLocaleDateString());
console.log(miFecha.toLocaleString());
console.log(miFecha.toLocaleTimeString());
console.log(miFecha.toString());
console.log(miFecha.toTimeString());
console.log(miFecha.toUTCString());

