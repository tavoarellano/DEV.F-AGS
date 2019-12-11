//simulador de piedra papel o tijeras

let j1 = prompt ("escribe la opción de j1) ")
let j2 = prompt ("escribe la opción de j2) ")

if (j1 == "piedra") {
    if (j2 == "piedra") {
        console.log("Empate");
    } else if (j2 == "papel") {
        console.log("J2 Gana");
    } else if (j2 == "tijeras") {
        console.log("J1 Gana");
    }
} else if (j1 == "papel") {
    if (j2 == "piedra") {
        console.log("J1 Gana");
    } else if (j2 == "papel") {
        console.log("Empate");
    } else if (j2 == "tijeras") {
        console.log("J2 Gana");
    }
} else if (j1 == "tijeras") {
    if (j2 == "piedra") {
        console.log("J2 Gana");
    } else if (j2 == "papel") {
        console.log("J1 Gana");
    } else if (j2 == "tijeras") {
        console.log("Empate");
    }
}