/* Cree un programa que muestre los números impares entre 1 y n. Use ciclo for */

let n = parseInt(prompt("ingrese limite"));
for (let contador = 0; contador < n; contador++) {
    if (contador%2 != 0) {
        console.log(contador);
    }
};