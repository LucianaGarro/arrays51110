//Arrays
//Es un tipo de dato que sirve para almacenar valores en forma de lista. Sería como una colección de variables

//Sintaxis: 
let arrayLu = [1, 50, 90 , 75];
console.log(arrayLu)

//Los arrays no es necesario que contengan siempre dato de tipo number. Puede contener otro tipo de dato (string, booleano)

let arrayCombinado = ["Hola", 99, false];
console.log(arrayCombinado);

//Para poder organizarnos mejor, los elementos de un array tienen un índice que los identificando. 

const arrayLetras = ["a", "b", "c", "d"];
console.log(arrayLetras);

//¿Cómo hago para mostrar un elemento específico del array?

console.log(arrayLetras[2]);

//¿Puedo modificar un elemento del array? SI. 
arrayLetras [2] = 100;
console.log(arrayLetras);

//¿Puedo recorrer un array? SI, si queremos recorrerlo y acceder a cada elemento de forma individual vamos a usar un ciclos (for)

for (let i = 0; i<arrayLetras.length; i++){
    console.log(arrayLetras [i]);
}

//Métodos para array

//1) push: me permite agregar elementos al final del array

let familia = ["luciana", "luciana", "Eduardo", "alejandro"];
console.log(familia);
familia.push ("Gala");
console.log(familia);

//2) unshift(): es para agregar elementos al principio del array

familia.unshift("Firulais");
console.log(familia);

//3) pop(): me permite eliminar el último elemento del array

// familia.pop();
// console.log(familia);

//4) shift (): si quiero eliminar el primer el elemento de array

let eliminadoShift = familia.shift();
console.log(familia);
console.log(eliminadoShift);

//5) splice: me permite eliminar uno o VARIOS elementos de un array
//funciona con dos parámetros: el primero es el índice y el segundo es la cantidad de veces que tiene que eliminarse esa posición.

let integrantesEliminados= familia.splice(1,2);
console.log(familia);
console.log(integrantesEliminados);

//6) Join : me permite generar un string con todos los elementos del array

//Le paso un valor por parámetro y ese valor es el elemento que lo separa

let stringFamilia = familia.join("-");
console.log(stringFamilia);

//7) Concat: me permite unir dos arrays, retornando uno nuevo.

let familiaUnida = familia.concat(integrantesEliminados);
console.log(familiaUnida);

//8) IndexOf() : me retorna el índice de un elemento.
//si no encuentra el índice, retorna -1
//Si tengo varios elementos iguales, me retorna el primero que encuentra.

// ['luciana', 'Gala', 'Eduardo', 'alejandro']

let indiceLu = familiaUnida.indexOf("luciana")
console.log(indiceLu);

//9) Includes: retorno un booleano si lo encuentro.

let booleanoLuciana = familiaUnida.includes("Eduardo");
console.log(booleanoLuciana);

//10) Reverse: Invierte los elementos del array
//es llamado método destructivo porque modifica el array original

familiaUnida.reverse();
console.log(familiaUnida);






