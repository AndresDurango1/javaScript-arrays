/*function clima (estaLloviendo){
    if (estaLloviendo){
        console.log("Está Lloviendo")
    }
    else{
        console.log("No está Lloviendo")
        //console.log es para imprimir en la consola
    }
}
*/
/*clima(true);

function calcular (num1, num2, num3){
let suma = num1 + num3;
let resultado = suma + num2;
return resultado;
}
console.log(calcular(2, 1, 2)); */

/* function areaTriangulo (base, altura){
    let area = (base * altura)/2
    return area
}
console.log(areaTriangulo(6, 4)) */

/* let base = parseInt(prompt("Ingrese el valor de la base del triángulo"));
//parseInt es para que el valor ingresado en el cuadro de dialogo que es un string se convierta a 
//número y se pueda realizar la respectiva operación.

let altura = parseInt(prompt("Ingrese el valor de la altura del triángulo"));
let area;
area = (base * altura)/2;
document.write("El valor del área del triangulo es: " + area); */

/*
function calculadora (operacion, num1, num2){

operacion = prompt("Por favor ingrese la operación que desea realizar")
num1 = parseInt(prompt("Ingrese el valor del número 1"))
num2 = parseInt(prompt("Ingrese el valor del número 2, debe ser diferente de cero"))

let resultado;

    if(operacion == "suma"){
        resultado = num1 + num2;
    }
    else if (operacion == "resta"){
        resultado = num1 - num2;
    }
    else if (operacion == "multiplicacion"){
        resultado = num1 * num2;
    }
    else if (operacion == "division"){
        resultado = num1 / num2;
    }
 return document.write("El resultado de la operacion es: " + resultado);
}
calculadora();
*/
function calcularNota (nota1, nota2, nota3){
    nota1 = parseInt(prompt("Por favor ingrese la nota 1 del estudiante"));
    nota2 = parseInt(prompt("Por favor ingrese la nota 2 del estudiante"));
    nota3 = parseInt(prompt("Por favor ingrese la nota 3 del estudiante"));
    let promedio;

    promedio = (nota1 + nota2 + nota3) / 3

    if (promedio >= 3){
        
        return document.write("Dado que el promedio es: "+promedio.toFixed(2) +" el estudiante SI aprobó")
    }
    else if (promedio < 3){
        return document.write("Dado que el promedio es: "+promedio.toFixed(2) +" el estudiante NO aprobó")
    }
}
calcularNota();