const numeroGanador = 16;
let numeroIngresado = 0;
let nombreDelJugador = prompt("Ingrese su nombre para empezar a jugar");
let continuar = true;

console.log("Empezo el juego " + nombreDelJugador);

do {
    numeroIngresado = parseInt(prompt("A ver si acertas el número. Ingrese un número del 1 al 20"));

    if (numeroIngresado == numeroGanador - 1 || numeroIngresado == numeroGanador + 1) {
        console.log("Estas muy cerca, segui intentando...");
    } else if (numeroIngresado < 1 || numeroIngresado > 20) {
        console.log("Ingrese un número del 1 al 20.");
    } else if (numeroIngresado == numeroGanador) {
        console.log("Felicitaciones " + nombreDelJugador + "! Has acertado el número.");
    } else {
        console.log("No acertaste, intenta de nuevo...");
    }
    
    if (numeroIngresado !== numeroGanador) {
        let confirmacion = prompt("¿Desea continuar jugando? (si/no)").toLocaleLowerCase();
        if (confirmacion == "no") {
            continuar = false;
        }
    }
   
} while (numeroIngresado !== numeroGanador && continuar);
