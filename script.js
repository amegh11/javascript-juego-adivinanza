let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0;

function revisarResultado(){
    intentos++;
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value);
    if(numeroIngresado < 1 || numeroIngresado >100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Porfavor, introduce un numero valido';
        return;
    }
    
    if(numeroIngresado === numeroAzar){
        mensaje.textContent = '¡Felicidades!, has adivinado el numero';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = '¡Mas alto!, ingresa un numero mayor';
        mensaje.style.color = 'red';
    }else{
        mensaje.textContent = '¡Mas bajo!, ingresa un numero menor';
        mensaje.style.color = 'red';
    }
}