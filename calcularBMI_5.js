/*
Ejercicio 5

El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad
 de grasa de una persona.

El BMI se calcula con la siguiente formula:

peso / altura^2

Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima 
la frase "Tu BMI es X".

Por ejemplo, si el usuario ingresa 65 de peso y 1.8 de altura el programa debe imprimir en la consola la
 frase "Tu BMI es 20.061728395061728".
*/
//ejecutar en el navegador
const peso=parseFloat(prompt("ingrese su peso en kg"))
const estatura=parseFloat(prompt("ingrese su estatura en mts"))
console.log(`BMI: ${peso/(estatura*estatura)}`)