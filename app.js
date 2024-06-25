
let contadorIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = 0;

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario == numeroSecreto) {
        asignarTexto('p',`¡Acertaste el numero! Lo hiciste en ${contadorIntentos} 
            ${contadorIntentos == 1 ? 'intento' : 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTexto('p','El numero secreto es menor');
        } else {
            asignarTexto('p', 'El numero secreto es mayor');
        }
        contadorIntentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generadorNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTexto('p','Ya se han sorteado todos los numeros secretos posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generadorNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales() {
    asignarTexto('h1','Juego del Numero Secreto');
    asignarTexto('p', `Indica un numero del 1 al ${numeroMaximo}`);
    contadorIntentos = 1;
    numeroSecreto = generadorNumeroSecreto();
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();