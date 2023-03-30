let multiplo = 1;
let contador = 0;
while (multiplo <= 100) {
    if(multiplo%6 == 0){
        contador = contador + 1;
        console.log("multiplo de 6",multiplo);
    };
    multiplo = multiplo +1;
};
console.log("hay " + contador + " multiplos de 6");