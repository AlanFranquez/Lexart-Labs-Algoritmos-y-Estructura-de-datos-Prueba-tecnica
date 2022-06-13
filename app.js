

// Ejercicio 1. Crear un algoritmo que recorra un array unidemensional contenidendo letras y numeros:
const arr = ['a', 10, 'b', 'hola', 122, 15];

// Ejercicio 1. a - Obtener un array que contenga solo letras
let arrayLetras = []
arr.map((elemento) => {
    if(typeof(elemento) == 'string') {
        arrayLetras.push(elemento)
       
    }
})
console.log(arrayLetras)

// Separación
console.log('=========')
console.log('=========')

// Ejercicio 1. b - Obtener un array que contenga solo numeros

let arrayNumeros = [];
arr.map((elemento) => {
    if(typeof(elemento) == 'number') {
        arrayNumeros.push(elemento)
       
    }
})
console.log(arrayNumeros)

// Separación
console.log('=========')
console.log('=========')

// Ejercicio 1. c - Obtener el mayor número del array anterior
let arrayNumeros2 = [];

arr.map((elemento) => {
    if(elemento === Number(elemento)) {
        arrayNumeros2.push(elemento)
       

    }
})
const resultado = Math.max(...arrayNumeros2);
console.log(`El número mayor del arreglo es ${resultado}`)

// Separación
console.log('=========')
console.log('=========')


// Ejercicio 2. Crear un algoritmo de búsqueda que verifique que el valor let a = 10 no esta dentro del array
let a = 10;
const arr2 = [1, 11, 'a', 'b', 123];


function busqueda(array, valor) {
    

    let estado = 'No existe ese valor en el array!';

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] == valor) {
            estado = 'Si existe ese valor en el array!';
            break;
        }
    }

    return estado;
}


console.log(busqueda(arr2, a))

// Separación
console.log('=========')
console.log('=========')


// Ejercicio 3 - Crear un algoritmo que genere el siguiente patrón de ID aleatorio: XXXX-AAAA-BBBB-CCCC

function generarID() {
    return 'XXXX-AAAA-BBBB-CCCC'.replace(/[XABC]/g, function(valor) {
      const r = Math.random() * 16 | 0 
      const v = valor == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


  console.log(generarID())

