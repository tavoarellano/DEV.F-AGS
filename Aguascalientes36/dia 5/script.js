//punto de partida

//       i= 0; 0 <=5;1
//       0
//       i: 1; 

//scope de i

//for (let i= 0; i<=5; i++) {
//console.log (i);

//for(let i= 1; i < 100; i++) {
//console.log(i);



//let e = 0;

//genera un ciclo que imprima los primeros 100 números
// si el número es múltiplo de 3 "fizz" ya
// si el número es múltiplo de 5 "buzz" ya
//si el número es múltiplo de 5 y 3 imprimir "fizzbuzz"

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        if (i % 5 == 0) {
            console.log("fizzbuzz")
        } else {
            console.log("fizz");
        }
    } else if (i % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}




