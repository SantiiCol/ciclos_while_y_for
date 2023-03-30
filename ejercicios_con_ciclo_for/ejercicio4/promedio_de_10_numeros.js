/*Cree un programa que calcule el promedio de 10 números. Use ciclo for*/

let numeros;
let suma = 0;
let promedio;
for (let contador = 0; contador < 10; contador++) {
    numeros = parseInt(prompt("ingrese numero"));
    suma += numeros
}
promedio = suma/10
console.log("el promedio es: ",promedio);