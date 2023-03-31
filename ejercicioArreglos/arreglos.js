//Ejercicio 1. Obtener el numero menor de un arreglo
const obtenerMenor = (numeros) => { 
 menor = Infinity; //Recorre los datos del arreglo y los ordena de menor a mayor
 for ( let i = 0; i < numeros.length; i++){
    if (numeros[i] <= menor) {
        menor = numeros[i];
    }
 }
return menor;
}
console.log(obtenerMenor([5,6,7,1,5,0,-3]))
//Ejercicio 2. Obtener la suma de los números de un arreglo
const sumar = (numeros1) => {
   let final = 0;
    for (let i = 0; i < numeros1.length; i++){
        final = parseInt(final + numeros1[i]);
    }
    return final
}
console.log(sumar([5,6,7,1,5,0,-3]))
//Ejercicio 3. Funcion que toma un arreglo y devuelve true si un numero esta en el array y false si el número no está
const contieneIndex = (numero, numeros2) => { 
    for (let i = 0; i < numeros2.length; i++){
        if (numeros2[i] === numero){
            return true
        }
    }
    return false;
}
console.log(contieneIndex(34, [34, 65, 87, 1, -98, 23])) //return true
console.log(contieneIndex(16, [34, 65, 87, 1, -98, 23])) //return true
//Ejercicio 4. Funcion que separa string de emojis de perros y gatos
const separarPerrosGatos = (string) => { 
    const arrayEmoji = string.sort().reverse(); //sort para ordenar 
    return (arrayEmoji);
}
console.log(separarPerrosGatos(['🐶','🐱','🐶','🐶','🐶','🐶','🐱','🐱','🐱','🐱','🐶','🐶','🐱','🐱','🐱','🐱','🐶','🐶','🐶','🐶','🐶','🐱','🐱','🐱','🐱','🐱']));
//Ejercicio 5. Funcion que devuelve true si SAM y esta al lado de FRODO
const estamosJuntos = (personajes) => { 
    const frodo = personajes.indexOf('FRODO'); //Busca los nombres de los personajes o string en el arreglo
    const sam = personajes.indexOf('SAM'); //Busca los nombres
    return sam - frodo === 1 || sam - frodo === -1;
}
console.log(estamosJuntos(['SAM', 'FRODO', 'LEGOLAS']));
console.log(estamosJuntos(['ARAGORN', 'FRODO', 'FRODO']));
console.log(estamosJuntos(['SAM', 'FRODO', 'FRODO']));
//Ejercicio 7.  Funcion que devuelve el indice de un valor dentro de un array
const obtenerIndex = (valor, array) =>{
     return array.indexOf(valor);
}
console.log(obtenerIndex(1, [2, 5, 7, 1, 7]));
console.log(obtenerIndex(9, [2, 5, 1, 6, 7]));
//Ejercicio 8. Funcion que toma un valor (valor) y un num entero  (cantidad), y devuelva un array con el valor repetido cantidad de veces
const repetir = (valor, cantidad) => {
    let array = [];

    for (let i = 0; i < cantidad; i++){
        array.push(valor);
    }
    return array
}
console.log(repetir(4, 5));
console.log(('a', 5));
console.log(('html', 0));
