let impares = 0;
let contador = 0;
while (impares <=100) {
    if (impares%2 != 0) {
        contador = contador + 1
        console.log("impar",impares);
    }
    impares = impares + 1
};
console.log("hay " + contador + " impares");
