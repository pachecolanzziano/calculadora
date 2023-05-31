//TODO: APRENDIENDO JS - JSON Y STRING
//TODO: APRENDIENDO SOBRE JSON
let amigos = ["Jose", "Pedro", "Leo", "Hugo"];
let amigosJson = JSON.stringify(amigos);
let amigosOriginal = JSON.parse(amigosJson);

//TODO:CREANDO UN OBJETO DE OBJETO A JSON Y DE JSON A OBJETO
let persona = {
    nombre: "Luis Carlos",
    edad : "32",
    domicilio : "calle falsa 123"
}
let personaJson = JSON.stringify(persona)
// console.log(personaJson);
let i = 0;
for(const prop in personaJson){
    // console.log(`${prop} = ${personaJson[prop]}`);
}

let frase = "m hola mundo";
//➡️length -> contar los caracteres de un String.
// console.log(frase.length);
//➡️indexOf -> Buscar algo dentro de un string, de lo contrario retornara un -1.
// console.log(frase.indexOf("mundo"));
//➡️slice (tajada o porción) -> No cambia el String original y sustrae la porción dada.
// console.log(frase.slice(0, 5));
// console.log(frase.slice(-2)); -> también puede hacerlo de derecha a izquierda 
//➡️trim -> Elimina los espacios en blanco en la primera y ultima posición, si existen. 
// console.log(frase.trim());
//➡️split -> Convierte un String en un Array, divide el String según el parámetro delimitador enviado 
//➡️replace -> Remplaza un valor por otro (loQueBuscas, SuReemplazo) 
// console.log(frase.replace('m', 'Bienvenido,'));

//TODO: EJERCICIOS PLANTEADOS
// 1)
function dominio(name) {
    console.log("http://www."+name);
}
dominio("digitalhouse.com.ar")

// 2)
console.log(frase.length);

// 3)
function reemplazoFastFast(texto, palabraBuscar, palabraRemplazar) {
    console.log(texto.replace(palabraBuscar, palabraRemplazar));
}
reemplazoFastFast('Este texto es mala onda','mala','buena');

// 4)
function menciona(texto, palabra) {
    if (texto.indexOf(palabra)){
        return true;
    }else{
        return false;
    }
}
console.log(menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programación'));

// 5)
function soloNombre(frase) {
    return frase.slice(12)
}
let licenciada = soloNombre("¡Hola!, soy Carli");
console.log(licenciada);