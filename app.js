let intentos = 1;
let listaNumerosSorteados = [];
let numeroMax = 10;
let numeroSecreto = generarNumeroSecreto ();

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto) {
        asignarTexto('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if(numeroDeUsuario > numeroSecreto) {
            asignarTexto('p', 'El numero secreto es menor')
        } else {
            asignarTexto('p', 'El numero secreto es mayor')
        }
        intentos ++;
        limpiar();
    }

    return;
}

function limpiar() {
    document.querySelector('#valorUsuario').value = '';
} 

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;

    if(listaNumerosSorteados.length == numeroMax) {
        asignarTexto('p', 'Ya han sido sorteados todos los numeros disponibles')
    } else {

        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); 
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales () {
    asignarTexto('h1', 'Adivina el numero secreto');
    asignarTexto('p', `Indica un numero del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiar();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

