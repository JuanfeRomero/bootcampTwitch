// Empezando a probar tipos de variables:
let bloque = 'variable de bloque';
const constante = 'constante que no se puede cambiar';
var variable = 'variable global';
// el var se utiliza menos, porque es mejor especificar el scope en el que se está utilizando la variable con let o volver inmutable cuando tiene un solo uso con const.
// TIPOS DE DATOS.
//PRIMITIVOS
const NumberType = 2;
const StringType = 'cadena de caracteres';
const BooleanType1 = true;
const BooleanType2 = false;
const UndefinedType = undefined;
const NullType = null;
// todos los tipos primitivos son inmutables
/*
se dice que es de tipado debil porque podes reasignar una variable que tiene un tipo asignado a otro tipo distinto sin problemas
let name = 'un nombre' asignamos una variable con String
name = 42 y lo convertimos a Number sin problema
tambien tiene tipado dinamico porque el tipo de la variable es definido al momento de ser asignado.
let name = 'nombre' al terminar de escribirlo queda dinamicamnete definido como 
*/
const myName = 'Juanfe'
myName.toUpperCase();
const myNameUpper = myName.toUpperCase();

console.log('El string no se puede mutar aunque haya sido modificado por uno de sus metodos de prototipo:')
console.log(myName);
console.log('Al aplicar el metodo en otra variable se le asigna el string modificado que se agrega a la otra variable')
console.log(myNameUpper);

const list= []

console.log(`const list= ${list}`);
console.log('Si bien un array asignado en un const no puede ser reasignado, se le puede asignar por medio de sus metodos una modificacion a su valor');
list.push(1)
console.log(`list= ${list}`);

// OBJETOS
const persona = {
    name: 'Juanfe',
    twitter: '@romero_juanfe',
    age: 26,
    isDeveloper: true,
    links: ['un_link_para_entrar', 'github.com/JuanfeRomero']
}

const field = 'twitter'
console.log(`para acceder a una propiedad de un objeto usando otra variable podemos utilizar objeto[variable] ej: field = 'twitter':  persona[field]`);
console.log(persona[field]);

// esta es una funcion expresada
const sumar = (num1, num2) => num1+num2;
let num1 = 2020
let num2 = 2021
console.log(`la suma entre un numero y otro puede utilizarse con la funcion expresada sumar: sumar(${num1}, ${num2}):`);
console.log(sumar(num1, num2));

//esta es una funcion declarada
function restar(num1, num2){
    return num1 - num2
}

console.log(`la resta entre un numero y otro puede utilizarse con la funcion declarada restar: restar(${num1}, ${num2}):`);
console.log(restar(num1, num2));