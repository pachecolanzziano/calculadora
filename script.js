function sumar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    const rta = verificarDatos(num1, num2);
    console.log(rta);
    console.log(num1, num2);
    if (rta) {
        var resultado = num1 + num2;
        document.getElementById("result").value = resultado;
    }else{
        document.getElementById("result").value = "Falta un dato";
    }
}

function restar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    const rta = verificarDatos(num1, num2);
    if (rta) {
        var resultado = num1 - num2;
        document.getElementById("result").value = resultado;
    }else{
        document.getElementById("result").value = "Falta un dato";
    }
    
}

function multiplicar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    const rta = verificarDatos(num1, num2);
    if (rta) {
        var resultado = num1 * num2;
        document.getElementById("result").value = resultado;
    }else{
        document.getElementById("result").value = "Falta un dato";
    }
}

function dividir() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    const rta = verificarDatos(num1, num2);
    if (rta) {
        var resultado = num1 / num2;
        document.getElementById("result").value = resultado;
    }else{
        document.getElementById("result").value = "Falta un dato";
    }
}

// Obtén una referencia al botón
const button = document.getElementById('myButton');

// Desactivar el botón
function disableButton(){
    button.disabled = true;
}

function activarButton(){
    button.disabled = false;
}

function verificarDatos(num1, num2){
    if (!isNaN(num1) && num1 != "" && !isNaN(num2) && num2 != ""){
        return true;
    }else{
        return false
    } 
    
}