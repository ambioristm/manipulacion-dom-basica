/*1 Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una variable y para qué sirve?
 Es un espacio reservado en memoria y sirve para almacenar datos.

¿Cuál es la diferencia entre declarar e inicializar una variable?
 Una variable se declara para especificar su nombre y sus características,
 y una variable se inicializa cuando le asignamos valores a dicha variable declarada. 

¿Cuál es la diferencia entre sumar números y concatenar strings?
 sumar es realizar una operación matemática, mientras que concatenar se agrupan valores ya sean números y strings 

¿Cuál operador me permite sumar o concatenar?
 el operador de suma + */

/*2 Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre = String
Apellido = String
Nombre de usuario en Platzi = String
Edad = numero
Correo electrónico = String
Mayor de edad = booleano
Dinero ahorrado = numero
Deudas = numero*/

/*3 Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
let nombre = "Antonio";
let apellidos = "Trinidad";
let nombreUsuarioPlatzi = "ambioristm";
let edad = 39;
let correoElectrónico = "ambioristm@*****.com";
let mayorEdad = true;
let dineroAhorrado = 1000;
let deudas = 150;

4 Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)*/

/*const nombreCompleto = "Antonio " + "Trinidad Mercedes";
console.log(nombreCompleto);
let dineroReal = (dineroAhorrado - deudas);*/

//Funciones
/*1 Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una función?
Las funciones nos permiten encapsular bloques de código para reutilizarlos y ejecutarlos en el futuro.

1-Declarativas 
function miFuncion(aqui los parametros separados por comas){
  aqui tu codigo...;
}
para llamar la funcion:
miFuncion();

2-De expresion
var miFuncion = function(aqui los parametros separados por comas){
  aqui tu codigo...;
}
para llamar la funcion:
miFuncion();

¿Cuándo me sirve usar una función en mi código?
Cuando nesecitamos validar algo o reutilizar codigo.
tambien nos sirve para ordenar y mejorar la legibilidad de nuestro codigo.

¿Cuál es la diferencia entre parámetros y argumentos de una función?
las funciones reciben parametros cuando las creamos,
y les enviamos los argumentos cuando las ejecutamos.
*/
/*2️ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

let name = "Antonio";
let lastname = "Trinidad Mercedes";
let completeName = name + lastname;
let nickname = "Ambioristm";

function presentarme(name, lastname, nickname){
  return console.log(`Mi nombre es  ${name} ${lastname},
    pero prefiero que me digas ${nickname}.`);
}
presentarme(name, lastname, nickname);

//console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

 1️ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un condicional?
Es una regla que aplicamos para validar si algo es verdadero o falso y generar ciertas acciones.

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
 existen condicionales if else if, switch, Con el condicional If podemos
 tener diferentes expresiones para evaluar dependiente del caso, y generar tantos If
 o else como sea necesario. Mientras que Switch case toma una sola expresión de entrada
 pero puede evaluar todos los casos como sea necesario de esa expresión de una forma más ordenada.

¿Puedo combinar funciones y condicionales? 
si. Las funciones pueden encapsular cualquier bloque de código incluyendo condicionales. 

2️ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if (tipoDeSuscripcion == "Free") {
  console.log ("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus") {
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

3️ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

function conseguirTipoSuscripcion(suscripcion) {
  if (suscripcion == "Free") {
  console.log ("Solo puedes tomar los cursos gratis");
  return;
  }
  if (suscripcion == "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
  return;
  }
  if (suscripcion == "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
  return;
  }
  if (suscripcion == "ExpertPlus") {
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
  return;
  }
  console.warn("Ese tipo de suscripcion no existe.")
}

conseguirTipoSuscripcion("Free");

Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

const tiposDeSuscripciones = {
  free: "Solo puedes tomar los cursos gratis",
  basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
  expertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

function conseguirTipoSuscripcion(suscripcion) {
  if (tiposDeSuscripciones[suscripcion]) {
    console.log(tiposDeSuscripciones[suscripcion]);
    return;
  }
  console.warn("Ese tipo de suscripcion no existe.")
}

conseguirTipoSuscripcion("free");

Ciclos
1️ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?
Es la forma de ejecutar cierto bloque de codigo hasta que se cumpla cierta condición.

¿Qué tipos de ciclos existen en JavaScript?
while, for, do while.

¿Qué es un ciclo infinito y por qué es un problema?
Es cuando la validacion de nuestros condicionales nunca se cumple y bugueamos nuestro programa o aplicacion.

¿Puedo mezclar ciclos y condicionales?
si, aunque los siclos son una especie de condicionales, nada nos impide agregar mas condicionales dentro del siclo.

2️ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0;

while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

while (i >= 2) {
  console.log("El valor de i es: " + i);
  i--;
}

3️ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.

let respuesta;

while (respuesta != '4') {
  let pregunta = prompt('¿Cuánto es 2 + 2?');
  respuesta = pregunta;
}

Listas
1️ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un array?
Es una lista de elementos.

¿Qué es un objeto?
Es una lista de elementos pero cada elemento tiene un nombre clave.

¿Cuándo es mejor usar objetos o arrays?
Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demas,
(la regla se puede icumplir). mientras que un objeto cuando los nombres de cada elemento son importantes
para nuestro algoritmo.

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Si, los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades. 

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function imprimPrimerElemnt(arra){
  console.log(arra[0]);
}
imprimPrimerElemnt(['Jose', 'Ramón', 'Miguel', 'Rosa']);

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function imprimaElementPorElement(arra){
  for (let i = 0; i < arra.length; i++) {
    console.log(arra[i]);
  }
}
imprimaElementPorElement(['Jose', 'Ramón', 'Miguel', 'Rosa']);


4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

let obj = {
  Nombre: 'Antonio',
  Apellido: 'Trinidad',
  Nacionalidad: 'Dominicano'
}

function imprimaElementPorElementObjeto(obj){
  let arra = Object.values(obj);
  for (let i = 0; i < arra.length; i++) {
    console.log(arra[i]);
  }
}
imprimaElementPorElementObjeto(obj);

*/