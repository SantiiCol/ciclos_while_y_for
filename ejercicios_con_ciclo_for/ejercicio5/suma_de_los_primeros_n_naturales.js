/*Cree un programa que calcula la suma de los primeros n números naturales. Use ciclo for*/

let numeros;
let suma = 0;
for (let contador = 0; contador < 10; contador++) {
    numeros = parseInt(prompt("ingrese numero"));
    suma += numeros
}
console.log("el promedio es: ",suma);