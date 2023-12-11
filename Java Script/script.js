// comentario de una sola línea
/* Comentarios
Multilinea*/

//alert ("Hola mundo");

//console.log("Este es un menasje para mi consola")

/*var nombre = prompt("Ingresa tu nombre");
alert("Hola, "+ nombre + " bienvenido(a) al CH35");*/

//Operación en consola
/*var numero1 = parseInt (prompt("Ingresa el primer numero:"));
var numero2 = parseInt (prompt("Ingresa el segundo numero:"));

console.log("suma:" + (numero1 + numero2));
console.log("resta:" + (numero1 - numero2));
console.log("multiplicacion:" + (numero1 * numero2));
console.log("division:" + (numero1 / numero2));*/


/*var edad = prompt("Ingresa tu edad:");

if (edad >= 18) {
    alert("Bienvenido a Somos Poker. ¡Disfruta de la página!");
} else {
    alert("Lo siento, debes ser mayor de 18 años para acceder a Somos Poker. Acceso denegado.");
}*/

/*Scope es el alncance de nuestras variables*/
//scope es el alcance de nuestras variables
/*var, let, const la diferencia la diferencia es el alcance
var tiene un alcance global
let tiene un alcance local
const se mantiene sin ningún cambio
*/ 

/*string:cadena de texto (lleva comillas)
number: numero
noolena: true/false
null:nulo
undefinied:no esta asigando o definido*/

/*Todas las variables deben ser declaradass con nombres específicos y claros, sin espacios y no deben iniciar con múmero*/

/* let nombre = "Daniel";
let invitadxsExtra = 2;
let esMayorEdad = true;
let edad = 24;
let invitadoespecial = null;
let horaDeSalida = undefined; 

document.write(nombre); */

/*Encasillamiento o tipado 
Nos ayuda en el mantenimiento del código 
Fácil de entender
Ayuda a la prevención de errores 
Mejora el rendimiento de nuestro programa*/

/* let numero = 15;
let texto = "hola";
 //con encasillamiento 

 let numeroEncasillado = number = 5;
 let textoEncasillado = string = "hola"; */

 //typeof para sabe que tipo de dato tenemos 
/*  console.log(typeof(nombre));

CONVERSIÓN DE STRING A NUMBER

let funcionNumber = console.log(typeof Number (nombre));
metodoParseInt = console.log(typeof parseInt (nombre));
metodoParseFloat = console.log(typeof parseFloat (nombre));

parseInt y parseFloat son funciones que se utilizan para convertir cadenas de texto en números, ambas nos ayudan en este cambio */

//Conversión de number a string

/* console.log(typeof String(edad));
console.log(typeof edad.toString()); */

/* CONVERIÓN DE BOOLEAN A NUMBER
let numero = Number (esMayorEdad);
console.log(numero); */

/* let texto = String(esMayorEdad);
console.log(typeof(texto));
console.log(typeof esMayorEdad.toString()); */

/*
let negación = !esMayorEdad;
console.log (negación);
*/

//CONCATENAR (unir strings)

/* let saludo = "Hola humanx ";
let frase = "el futuro es hoy";
texto= saludo + frase;
document.write(texto); */

/* Tipos de datos 
>- String (texto)
>- Number (número)
>- Boolean (true or false)
>- Null (nulos)
>- Undefined (indefinido)
>- Objects (objects)
>- Object (Arrays)
*/ 

/*console.log(); Nos permite visualuizar en consola del navegador ek código de JS 
console.warn(): Muestra mensaje de advertencia
console.error(): Muestra un mensaje de error
console.table():
*/


let firstName;
firstName = 'Taylor';
let lastName;
lastName = 'Swift';

console.log(firstName + " " + lastName);
console.log('Mi nombre es ' + firstName +  'y mi apellido es ' + lastName);
/*ECMAScirpt 6 (ES6)
>- backtips ´´
>- Para variables ${}
>- Texto para string
*/
let age = 34
console.log(`Mi nombre es ${firstName}, mi apellido es ${lastName} y tengo ${age} años`);

//console.warning
console.warn('Precaución no es bueno dejar sin ;');

//console.error
console.error(`Status 404`);

/*Array. Se traduce como arreglo- Es un tipo de dato que pertence al JS, en el cual se almacena un colección de elememntos de manera ordenada. 
Los arras se pueden manipular mediante métodos específicos. 
Los elementos de un array se contabilizan como índices, empezando por índice cero, por lo cual, el primer elemento tiene índice 0
Un array posee n cantidad de elementos
Se declaran como va riables, segurido del signo iguak y corchetes. Dentro de cada corchete vive un elemento con un tipo de dato*/

let arreglo1 = []; //Array vacío
console.log(`Array vacío ${arreglo1}`); 


let cars = ["RayoMcQueen", "Mate", "Sally", "Doc"]; //Array string
console.log(cars);
//Longitud e índice son diferentes. La longitud (length) es el número de elementos y el índice corresponde a cada elemento a partir del 0

console.log(typeof(cars)); 
let salariesMxn = [15000, 1200, 18000, 25000, 28000, 10000, 23000, 27000, 40000, 32000]; 
console.log(salariesMxn.length);
console.log(salariesMxn);

/* Los objetos son tipos de datos en JS, con una estructura definida que nos permite almacenar información mediante llaves (claves) y valores. 
Su sintaxis es la siguiente:
const object = {
  clave1: valor1 (dato1),
  clave2: valor2 (dato2)
  }
  Los objetos pueden almacenar diferentes tipos de valores*/

  const employee = {
    firstName: 'Chalino',
    lastName: 'Sánchez',
    age: 31,
    country: 'Mexico'
  }

  console.log(employee);
  //Mostrando mi array como tabla
  console.table(cars);
  //Mostrando mi objeto como tabla
console.table(employee);
