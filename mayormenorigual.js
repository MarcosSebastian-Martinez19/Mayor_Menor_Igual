/* 1. Programa que pida dos números y que nos diga cúal es el mayor, el menor y si son iguales. */

let num1 = parseInt(prompt("Ingrese un número"))
let num2 = parseInt(prompt("Ingrese otro número"))

function comparar() {
    if(num1 > num2) {
        alert(num1 + " es mayor que " + num2)
    } else if(num1 < num2) {
        alert(num1 + " es menor que " + num2)
    } else if(num1 === num2) {
        alert(num1 + " es igual a " + num2)
    }
}
comparar()
document.write("Si se pudo burro!!")

/* 2. Al programa anterior: si los valores ingresados no son un numero o son menores o iguales a cero, que vuelva a pedir el ingreso de los datos*/

let numero1 = parseInt(prompt("Ingrese un número"))
let numero2 = parseInt(prompt("Ingrese otro número"))

function comparar(num, num2) {
    while((isNaN(num1) || isNaN(num2)) || (num1 <= 0 || num2 <= 0)) {
        if(num1 <= 0 || num2 <= 0) {alert("Por favor, ingrese un número que sea mayor a 0")}
        else {alert("El valor que ingresó NO es un número")}
        num1 = parseInt(prompt("Ingrese un número"))
        num2 = parseInt(prompt("Ingrese otro número"))
    }
    if(num1 > num2) {alert(num1 + " es mayor que " + num2)}
    else if(num1 < num2) {alert(num1 + " es menor que " + num2)}
    else if(num1 === num2) {alert(num1 + " es igual a " + num2)}
}
comparar()
document.write("Si se pudo burro!!")