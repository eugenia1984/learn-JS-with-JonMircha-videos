# :book: Tipo de datos

---

# :star: Tipos de datos

## Variables vs. Let

**var** es de **ambito global**

var nombre = 'Maria Eugenia'

**let** es de **ambito de bloque**, tiene un alcance/scope local; solo existe dentro dle bloque que se declara (ya sea dentro de una función o de algún condicional).

Con esto de evita el hoisting.

let nombre2 = 'Ana'

**Es mala práctica usar VAR. Siempre utilizar LET o CONST**


Ejemplo del inconveniente de usar var, con el hoisting.

porque los navegadores tienen el **objeto global** : **window**.

```JavaScript
var musica = "Rock";
console.log("Variable Música antes del Bloque : ", musica);  //Rock
{
  var musica = "Pop";
  console.log("Variable Música dentro del Bloque : ", musica);  //Pop
}
console.log("Variable Música después del Bloque : ", musica);  //Pop
```

En cambio con **let**, no tengo el problema del hoisting, y el valor de Pop va a estar solo dentro del bloque, es decir entre los {}.

```JavaScript
let musica2 = "Rock";
console.log("Variable Música antes del Bloque : ", musica2);  //Rock
{
  let musica2 = "Pop";
  console.log("Variable Música dentro del Bloque : ", musica2);  //Pop
}
console.log("Variable Música después del Bloque : ", musica2);   // Rock
```


- Tanto *let* como *var* pueden ser primero declaradas y luego le puedo asignar un valor, porque son **variables**.

---

## Comentarios

Hay comentarios en línea y comentarios multilínea.

Ejemplo en código:

```JavaScript
//Esto es un bloque - comentario de una lines

/*
Esto es
un comentario
de varias
líneas */
```

---

## Maneras de poder ver el código e ir 'debugueando'


Con console, hay varios, algunos son:

- **console.log()**

- **console.info()**

- **console.warn()**

---

## Constantes

Las declaramos con **const** y usamos todo en mayúscula. 

Por ejemplo: ```JavaScript  const PI = 3.1416; ```

Al declararla, debemos asignarle el valor, y este valor se mantendrá durante todo el flujo del programa; no puedo a posterior cambiarle su valor. 

Esto es en el caso de los *valores primitivos*, pero para el caso de los *valores compuestos*, es decir los **objetos** esto no pasa, ya que sus pares *atributo - valor* si se pueden modificar.

```JavaScript
const objeto = {
  nombre: "Jon",
  edad: 35
}

const colores = ["blanco", "negro", "azul"];

console.log(objeto);  //{nombre: "Jon", edad: 35}
console.log(colores);  //["blanco", "negro", "azul"]

objeto.correo = "jonmircha@gmail.com";
colores.push("anaranjado");
console.log(objeto);  //{nombre: "Jon", edad: 35, correo: "jonmircha@gmail.com"}
console.log(colores);   //["blanco", "negro", "azul", "anaranjado"]
```

Esto pasa porque en los *valores compuestos* no estamos accediendo a un valor determinado, sino a una referencia de ese valor. Por eso al objeto le puedo agregar una nueva propiedad y valor, ya que el objeto sigue siendo el mismo. Lo mismo pasa con los **arrays** (arreglos).

---

## Cadenas de Texto (Strings)

Se crea con el constructor ```new String(cadena)```

```JavaScript
Declaracion con constructor
let saludo = new String("Hola mundo");
```

Una de sus propiedades es **.lenght**.

Y tiene varios métocod, como por ejemplo: 

**.repeat()**

**.replace()**

**.search()**

**.slice()**

**.split()** me va a separar la cadena acorde a lo que le indico, si por ejemplo entre los () coloco **" "**, cada vez que encuentre un espacio en blanco me lo va a separar, y me va a quedar un array con las palabras separadas. Puede separarlo por una **,**, por lo que tenga la cadena y puede separar.

**.substring()**

**.toUpperCase()** para pasar todo a mayuscula

**.toLoweCase()** para pasar todo a minuscula

**.includes()**

**.trim()** saca los espacios en blanco o los caracteres alrededor del texto, tanto al inicio como al final.


Siempre van entre **comillas**, pueden ser simples o dobles.

```JavaScript
let nombre = "Maria Eugenia";
let apellido = "Costa";
```

Concatenación

```JavaScript
let saludo = "Hola mi nombre es " + nombre + " " + apellido + ".";
console.log(saludo);  //Hola mi nombre es Maria Eugenia Costa
```

---

## Template Strings

Interpolación de variables (intercalo cadenas con variables), utilizando *back tick* (acento grave / acento invertido).

```JavaScript
let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`;  // Hola mi nombre es Maria Eugenia Costa
```

Si en vez de template string utilizaria las comillas simples o dobles, la lista desordenada debería escribirla toda junta en un renglón, pero al utilizar las template string si puedo tener saltos de lineae identaciones (esto es muy útil al querer generar codigo HTML generado dinamicamente, cuando programamos orientado a componentes, como con React. Además es más fácil a la vista).

Ejemplo en código:

```JavaScript
let ul = "<ul>< li > Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul > ";
console.log(ul);
let ul2 = `
  <ul>
    <li>Primavera</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
</ul>
`;
```

Otro modo, sin utilizar template string, sería concatenando, pero también se nota que es mucho más claro utilizando template string.

```JavaScript
console.log(ul2);
let ul3 = "<ul>";
ul3 += "<li> Primavera</li>";
ul3 += "<li>Verano</li>";
ul3 += "<li>Otoño</li>";
ul3 += "<li>Invierno</li>";
ul3 += "</ul>";
console.log(ul3);
```

---

## Numbers

```JavaScript
let a = 2;
let b = new Number(1);  // con el constructor
```

Algunos métodos son:

```JavaScript
let c = 7.19;
let d = "5.6";
console.log(a, b);
console.log(c.toFixed(1));  //Me redondea a la cantidad de decimales que especifico entre ()
console.log(c.toFixed(5));
console.log(parseInt(c));  //Me devuelve solo la parte entera. Se utiliza para convertir a Number lo que se ingresa como input en un form que ingresa como String
console.log(parseFloat(c));  // Me devuelve la parte entera y la flotante
console.log(typeof c, typeof d);
console.log(a + b);
console.log(c + parseInt(d));  // Si no usaba el paseInt me iba a concatenar el number con la String 5.6. Por eso CASTEO para SUMAR. Pero me va a sumar los enteros y dar inexacta la parte decimal -es mejor usar librerias o el ParseFloat-
console.log(c + parseFloat(d));  //Si no usaba el parseFloat me concatenaba, por eso necesito CASTEAR para poder SUMAR
```


Los métodos **parseInt()** y **parseFloat()** cuelgan del contructor, del objeto **Number**. Son métodos directos del constructor Number.

```JavaScript
console.log(c + Number.parseInt(d));
console.log(c + Number.parseFloat(d));
```

---

## Booleanos

Los posibles valores son: **true** o **false**.

```JavaScript
let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);
console.log(verdadero, falso, v, f);
console.log(typeof verdadero, typeof falso);  // boolean boolean
```

**Truthy** : expresiones que tienden a verdadero
```JavaScript
if(true)
if({})
if([])
if(42)
if("foo")
if(new Date())
if(-42)
if(-3.4)
if(Infinity)
if(-Infinity)
```

**Falsy** : expresiones que tienden a falso
```JavaScript
if(false)
if(null)
if(undefined)
if(0)
if(NaN)
if('')
if("")
if(document.all){1}  // un nodo no existente
```


```JavaScript
console.log(Boolean(0));   // 0 e tiende a falso
console.log(Boolean(-7));  // un numero negativo tiene a verdadero (porque está inicializado)
console.log(Boolean(""));  // Un String vacio tiende a falso
console.log(Boolean(" "));   //Un String con al menos un caracter tiende a verdadero
```

## Undefined, null & NaN 

Undefined y null representan un valor ausente, una variable que no tiene valor, pero undefined es una variable que no fue inicializada.

**Undefined** indica que no se ha inicializado una variable y que el valor está ausente.

```JavaScript

let indefinida;
console.log(indefinida); 
```

**null** es un valor especial que indica la ausencia de un valor, es un valor intensionamente asignado por el programador.

```JavaScript
let nulo = null
console.log(null);
```

**NaN** - Not a Number

```JavaScript
let noEsUnNumero = "hola" * 3.7;
console.log(noEsUnNumero); 
```

---

# :star: Objetos complejos

## Funciones

Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. 

Opcionalmente, una función puede aceptar parámetros y devolver un valor.

Las funciones en JavaScript son **objetos**, un tipo especial de objetos:

Se dice que las funciones son **ciudadanos de primera clase** porque *pueden asignarse a un valor*, y *pueden pasarse como argumentos* y *usarse como un valor de retorno*.


- Declaración de función declarada: con la palabra reservada **function**, lleva un nombre y entre los {} la línea de código que se ejecutará al invocar la función.

```JavaScript
function estoEsUnaFuncion() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
} 
```


- Invocación de función
  
```JavaScript
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion(); 
```


Declaro la función unaFuncionQueDevuelveValor :

```JavaScript
function unaFuncionQueDevuelveValor() {
  console.log("Uno");
  return 19;
  console.log("Dos");
  console.log("Tres");
  return "La función ha retornado una Cadena de texto";
} 
```

Asigno la función unaFuncionQueDevuelveValor a una variable:

```JavaScript
let valorDeFuncion = unaFuncionQueDevuelveValor();

console.log(valorDeFuncion);
``` 

Por consola voy a ver:

Uno

19

Al tener la palabra return me retorna el 19 e ignora todas las líneas de código que están debajo


- Una función puede aceptar parámetros, es decir, puede recibir valores por defecto (los mismos pueden tener un valor inicializado para luego no tener algún undefined).

```JavaScript
function saludar(nombre = "Desconocido", edad = 0) {
   console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
} 

```JavaScript
 añossaludar("kEnAi", 7); // Hola mi nombre es KenAi y tengo 
saludar();  // Hola mo nimbre es Desconocido y tengo  años
```

- Funciones declaradas VS funciones expresadas


**Función declarada** -> puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada . Hay **hoisting** de la función, es decir me la eleva al principio, donde declaro 1ro variables y luego funciones.

Si somos ordenados y tenemos el cósigo ordenado

1- variables

2- funciones

No vamos a tener problemas de hoisting.

**Función expresada** -> una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición JS nos dirá 'Cannot access 'funcionExpresada' before initialization ( porque no va a poder ser llamada, ya que no fue inicializada). Se utiliza **const** para asinarle la función anónima (sin nombre) y también con **arrow function**.

Es muy buena práctica utilizar funciones expresadas.

---

## Arreglos (Arrays)

Se declaran entre corchetes **[]**.

Se los puede declarar tanto con **let** como con **conts**.

Forma de declarar un array:

```JavaScript
const a = [];
const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];
```

El array es **una colección de elementos** y los elementos pueden ser de distintos tipos, como el array **b**.

```JavaScript
console.log(a);  //[]
console.log(b);  // [1, true, "Hola", Arrays(3)]
```

Tiene su propiedad **length**, que me indica la cantidad de elementos que tiene el array, me devuelve la longitud.

- Recordar que siempre comienza con el índica 0.

```JavaScript
console.log(b.length);  //4
```

Para acceder a un elemento (recuerdo que siempre va a tener su posición con un número anterior al del elemento)

```JavaScript
console.log(b[2]);  // Hola
console.log(b[0]);  // 1
console.log(b[3]);  // (3) ["A", "B", "c"]
```

Y para acceder al elemento dentro del arreglo que está dentro de **b** debo indicar las dos posiciones, la dle array y la del elamento dentro del mismo

```JavaScript
console.log(b[3][2]); // "C"
```
Y en el caso que dentor del array general tnego un array dentro y el mismo tiene otro adentro:

```JavaScript
console.log(b[3][3][0]); // 1
```
Nueva forma de crear un array, con el método **Array.of()**, y accedo al prototipo Array:

```JavaScript
const c = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(c);
```

Si quiero inicializar un array ya con un valor booleano, puedo utilizar el método **.fill()** con 100 posivciones, por eso utilizo ```JavaScript Array(100)````.

```JavaScript
const d = Array(100).fill(false);
```

Una forma de crear un array, que ya entró en desuso (no se utiliza más), es con el constructor:
```JavaScript
const e = new Array();  // [] va a ser un array vacío
```

Y si le querría asignar valores, sería así (igua recordar que ya no se utiliza de este modo):
```JavaScript
const f = new Array(1, 2, 3, true, false);
```

Métodos del array, hay muchos, pero acá solo nombramos dos:

```JavaScript
const colores = ["Rojo", "Verde", "Azul"];

// Con .push() AGREGO un eleento al FINAL
colores.push("Negro");  //  ["Rojo", "Verde", "Azul", "Negro"]

// Con .pop() quito el ÚLTIMO elemento
colores.pop();  //  ["Rojo", "Verde", "Azul"]
```

Hay un método funcional de los arreglos, que me permite ejecutar una función por cada elemento del mismo.

Por ejemplo voy a crear una lista y por cada **li** tenga un color, y si necesitaría que cada uno tenga una posición única con el index le agrego el número de id:

```JavaScript
colores.forEach(function (el, index) {
  console.log(`<li id="${index}">${el}</li>`);
```

---

## Objetos

En JS todo es un objeto.


Hsta para declarar una variable de tipo String puedo llamar a su prototipo.

```JavaScript
 let a = new String("Hola");
// String["Hola]
//  0: "H"
//  1: "o"
//  2: "l"
//  3:"a"
//  length: 4
//  > -proto_ : String
// [[PrimitiveValue]] : "Hola"
```

Se puede utilizar tanto **let** como **const** para declararlo como OBJETO, ya que puede cambiar su valor y clave, pero el objeto va a ser siempre el mismo.

Y al declarar el objeto con **conts** evito que otro objeto ocupe la referencia que en memoria tiene mi objeto.

Los objetos se declaran con **{}**.

```JavaScript
const b = {}
//no es recomendado, pero se pueden crear con el prototipo object
const c = new Object();

 ```

Dentro de un objeto a las variables se le van a llamar **atributos/propiedades** y a las funciones se les llama **métodos**.

Las propiedades tienen atributos - valor, los valores pueden ser: String, Number, Array, boolean, otro objeto, etc.

```JavaScript    
  const euge = {
  nombre: "Maria Eugenia",
  apellido: "Costa",
  edad: 36,
  pasatiempos: ["Correr", "Hacer ejercicio", "Pilates"],
  soltera: true,
  contacto: {
    email: "costamariaeugenia1@gmail.com",
    linkedin: "maríaeugeniacosta"
  },
  saludar: function () {
    console.log(`Hola :)`)
  },
  decirMiNombre: function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir como ${this.contacto.linkedin} en LinkedIn.`)
  }
}
```


```JavaScript
console.log(euge); // me va a imprimir todo el objeto
```

Par acceder a los valores del objeto, puedo utilizar **dot notation** :

````nombre_de_mi_objeto.propiedad```

```JavaScript
console.log(euge["nombre"]);
console.log(euge["apellido"]);
console.log(euge.nombre);
console.log(euge.apellido);
console.log(euge.edad);
console.log(euge.soltero);
console.log(euge.pasatiempos);
console.log(euge.pasatiempos[1]);
console.log(euge.contacto);
console.log(euge.contacto.linkedin);
```

Para acceder a los métodos del objeto:

```JavaScript
euge.saludar();  // En este método utilizo .this(), para el contexto en que me encuentro, para hacer refernecia al mismo objeto euge
```

```JavaScript
euge.decirMiNombre();
```

Métodos del objeto:

**.keys()** para listar las llaves del objeto. 
```JavaScript
console.log(Object.keys(euge));  // ["nomb", "apellido", "edad", "pasatiemps", "soltera", "contacto", "saludar", "decirNombre"]
```

**.values** para listar los valores del objeto:

```JavaScript
console.log(Object.values(euge));
```

**.hasOwnProperty()** para saber si el objeto tiene determinada propiedad.

```JavaScript
console.log(euge.hasOwnProperty("nombre"));  // true, porque tiene nombre como propiedad
console.log(euge.hasOwnProperty("nacimiento"));  // false, porque no tiene nacieeinto como propiedad
```

---

# :book: Estructuras de control

---
## Tipo de operadores


### Operadores Aritméticos 

suma: +

resta:  -

multiplicación:  * 

división: / 

módulo:  % 

agrupación: ()  

```JavaScript
 let a = 5 + (5 - 10) * 3;
let modulo = 5 % 2;
console.log(a);
console.log(modulo);
```

### Operadores Relacionales: 

mayor que: >

menor que: <

mayor o igual que: >=

menor o igual que: <=

igual que: ==

estrictamente igual que: ===

distinto que: !=

super distinto que:  !==

```JavaSCript
console.log(8 > 9);  // false
console.log(9 > 8);  // true
console.log(8 >= 9);  // false
console.log(9 >= 8);  // true
console.log(7 < 7);   //false
console.log(7 <= 7);   // true
```

= 1 igual es **asignación**  de *variable*

== 2 iguales es **comparacion** de *valores*

=== 3 iguales es **comparación** de *tipo de dato* y de *valor*


Por buena práctica, para comparar siempre utilizar ***====** asi evitamos los truthy y falsy.

```JavaScript
console.log(7 == 7);  // true
console.log("7" == 7);  // true
console.log(0 == false);  //false
console.log(7 === 7);  // true
console.log("7" === 7);  // false, porque también comparo el tipo de dato
console.log(0 === false);  // false
```
### Incremento - Decremento

```JavaScript
let i = 2;
i +=3;
console.log(i); // 5

i -=1;
cosole.log(i); //4

i *= 2;
console.log(i); // 8
```

### Operador unario

```JavaSCript
i++; // 9
i--;  // 8
++i; // va a aumentar el alor en uno, pero es mejor utilizar con el orden: variable incremento/decremento, porque utilizando ++i se pueden tener problemas al tiempo de ejecución
--i; 
console.log(i); 
```

### Operadores Lógicos

**!** - **Not** : Niega, es decir lo que es verdadero lo vuelve falso y viceversa

**||** - **Or**: Cuando tengo 2 o más condiciones, con que una se cumpla, es decir sea verdadera, el OR será verdadero.

**&&** - **And**: Cuando tengo 2 o más condiciones, todas tienen que cumplirse, es decir ser verdaderas, para que AND se valide 

```JavaScript
console.log(!true);  // false
console.log(!false);  // true
console.log((9 === 9) || ("9" === 9));  // true || false -> true
console.log((9 === 9) && ("9" === 9));  // true && false -> false
console.log((9 === 9) && ("9" === "9"));  // true && true -> true
```

---

## Tipo de operadores: Condicionales

**Estructura de control** : mecanismo que permite controlar el flujo de la programción, vamos a tomar ciertas acciones o no dependiendo del resultado de evaluar una condición (que nos va a dar un valor booleano).

###  IF - ELSE

Si la condición se cumple ejecuto el bloque de cósdigo que tengo  tengo dentro del IF y si no se cumple ejecuto el bloque de código  que tengo dentro del ELSE.


Utilizando **>** :

```JavaScript
let edad = 9;
if (edad > 17) {
  console.log("Eres mayor de Edad");
} else {
  console.log("Eres menor de Edad");
}
```

Utilizando **>=** :

```JavaScript
if (edad >= 18) {
  console.log("Eres mayor de Edad");
} else {
  console.log("Eres menor de Edad");
}
```

Utilizando **<** :

```JavaScript
if (edad < 18) {
  console.log("Eres menor de Edad");
} else {
  console.log("Eres mayor de Edad");
}
```

Utilizando **<=** :

```JavaScript
if (edad <= 17) {
  console.log("Eres menor de Edad");
} else {
  console.log("Eres mayor de Edad");
} 
```

### IF - ELSE IF - ELSE 

```
Déjame Dormir - 0hrs - 5hrs
Buenos dias 6hrs - 11hrs
Buenas tardes 12hrs - 18hrs
Buenas noches 19hrs - 23hrs
```

```JavaScript
let hora = 23;
if (hora >= 0 && hora <= 5) {
  console.log("Déjame dormir");
} else if (hora >= 6 && hora <= 11) {
  console.log("Buenos días");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}
if (hora < 6) {
  console.log("Déjame dormir");
} else if (hora > 5 && hora < 12) {
  console.log("Buenos días");
} else if (hora > 11 && hora < 19) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
} 
```

### OPERADOR TERNARIO


Es la simplificación del if / else.

**(condición) ? verdadero : falso**

Para que esté más declaratico, en vez de escribirlo todo a lo largo de un solo renglón, lo puedo separar así:

```JavaScript
console.log("Operador Ternario");
  let eresMayor = (edad >= 18)
    ? "Eres mayor de Edad"
    : "Eres menor de Edad";
  console.log(eresMayor); 
```

### SWITCH CASE

Es para cuando tenemos diferenctes valores para una misma variable.

Por ejemplo para determinar el día de la semana tengo:

```
domingo - 0
lunes - 1
martes - 2
miércoles - 3
jueves - 4
viernes - 5
sábado - 6
```

Entonces si el día es Martes:

```JavaScript
let dia = 2;
switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("El día no existe");
    break;
}
```

Es muy importante incluir la palbra **break**, para que una vez que se encontró el valor de la opción, se corta y se sale del ciclo (de no tener break va a seguir evaluando las demás opciones).

Y la opción **default** también es importante, ya que si el valor a evaluar no coincide con ninguna de las opciones en los casos, va a ir al default.

---

## Ciclos (loops)


Son estructuras repetitivas, voy a tener un incremento o decremento para que la variable vaya modificando su valor en cada iteración, asi en un momento deje de cumplirse la condición y se rompa el ciclo (sino entro en un loop infinito).

El **while** y el **do while** ya están entrando en desuso, porque 
son estructuras mas imperativas de programación estructurada, y JS está siendo cada vez más un lenguaje más declarativo.
### While

Para imprimir los números de 0 al 9 inclusive:

```JavaSCript
let contador = 0;
while (contador < 10) {
  console.log("while " + contador);
  contador++;
}
```

### Do while

La diferencia con el **while** es que el **do while** siempre se ejecuta al menos una vez, porque primero ejecuta el bloque de código y luego evalúa la condición; si es falsa la condición ahi se corta.

En cambio en el while siempre evalúa la condición primero, por lo que si la condición es false entonces nunca se va a ejecutar.

```JavaScript
let contador = 0;
do {
  console.log("do while " + contador);
  contador++;
} while (contador < 10); 
```

### For

Su estructura es así:

```
for (inicialización de variable; condición; decremento o incremento) {
  sentencias que ejecuta el for
  sentencias que ejecuta el for
  sentencias que ejecuta el for
} 
```

Ejemplo en código, imprmiendo numeros dle 0 al 9 inclusive:

```JavaScript
for (let i = 0; i < 10; i++) {
  console.log("for " + i);
}
```


Para imprimir todos los elementos del arreglo (sin usar el for each) y utilizando la propiedad .length():

```JavaScript    
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
```    

**FOR IN** me permite recorrer (iterar) las propiedades de un objeto.

Y para acceder al valor de la propiedad si utilizo dot notatio me da undefined, por eso accedo con los [].

```JavaScript    
const jon = {
  nombre: "Jon",
  apellido: "MirCha",
  edad: 35
}
for (const propiedad in jon) {
  console.log(`Key: ${propiedad}, Value: ${jon[propiedad]}`);
}
```

**FOR OF** permite recorrer todos los elementos de cualquier objeto que sea iterable ne JS, no solo en objetos, tambén en arrays o Strings.

```JavaScript
for (const elemento of numeros) {
  console.log(elemento);
}
let cadena = "Hola Mundo";
for (const caracter of cadena) {
  console.log(caracter);
} 
```

---

## Manejo de errores

**Try** - **Catch** - **Finally**

En este ejemplo de cósigo, intencionalmente genero el error con la variable noExiste que no fue declara, asi el mensaje "Segundo mensaje en el try" nunca se ejecutará, ni tampoco me dará error y se me corta o traba mi programa, sino que pasa el catch.

En la consola voy a ver:

```
En el Try se agrega el código a evaluar
Catch, captura cualquier error surgido en el try
El bloque Finally se ejecutará siempre al final de un bloque try-catch
```

```JavaScript
try {
 console.log("En el Try se agrega el código a evaluar");
 noExiste;
 console.log("Segundo mensaje en el try");
} catch (error) {
  cponsole.log("Catch, captura cualquier error surgido en el try");
} finally {
  console.log("El bloque Finally se ejecutará siempre al final de un bloque try-catch");
}
```

Y para lanzar un error personalizado se utiliza **throw**, une ejemplo en codigo:

```JavaSCript
try {
  let numero = 10;

  if(isNaN(numero)) {
    throw new Error("El caracter introducido no es un número");
  }
  console.log(numero * numero);
} catch(error) {
  conosle.log(`Se produjo el sigueinte error: ${error}`);
}
```

En este caso como la variable *numero* si es un numero, se va a ver el *100*, el resultado de 10 x 10.
pero si la variable *numero* sería por ejemplo el String "si", entonces tendría el error y se vería el mensaje personalizado:

*Se produjo el sigueinte error: Error: El caracter introducido no es un número.*

Se usa más del lado del Back End, cuando se abre la lectura de una base de datos o al abrir un archivo para leer. Para avisar si se abrio y cerro bien o no.

---

## Break & continue

El el **switch** para romper cada caso tenemos el **break**, lo que nos hace salir del switch y no evaluar los casos que le siguen (se rompe la estructura).

En cambio con el **continue** se sigue a la proxima iteración.

Break y Continue  **no** pueden ser utilizadas en **arrays**, son para uso en los **loops**, por esto en el ejemplo en código no puedo usar un for each.


```JavaScript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for(let i=0; i<numeros.length, i++) {
  if(i===5) {
    break;
  }
  console.log(numeros[i]);
}
```

Se va a imprimir: ```1 2 3 4 5 ```, cuando llega al **break** salta de la estructura de control donde está.

pero si en vez de **break**, tenía **continue**, eotnces se iba a imprimir: ```1 2 3 4 5 1 2 3 4 5 7 8 9 0```, se salta la posicion de numeros[5] que es el valor *6*, con el **continue** solo se salta ese valor, pero sigue las iteraciones y el ciclo, hasta que este termine.

Son el continue, se puede por ejemplo imprimir solo los núemros pares, los números impares, o hacer patrones, imprimir los números de 3 en 3, por ejemplo.

---

## Destructuración

Desde el 2015, con **ES6** tenemos la **destructuración** y es una nueva forma de asignar valores a un **array** o un **objeto**.

Ejemplo en código con un **array**.

sin destructuración:

```JavaScript
const numeros = [1, 2, 3, 4];
```

```JavaScript
let uno = numeros[0],
 dos = numeros[1],
 tres = numeros[2],
 cuatro = numeros[3];

console.log(uno, dos, tres, cuatro);  // 1 2 3 4 
```

Con destructuración:

```JavaScript
const[one, two, three, four] = numeros;
console.log(one, two, three, four); // 1 2 3 4 
```

Es mucho más sencillo, ya a cada variable le asigno un valor de los elementos del array.

Se utiliza con React Js con objetos, por ejemplo:

```JavaScript
const persona = {
  nombre: "Maria Eugenia",
  apellido: "Costa",
  edad: 37
}

let{nombre, apellido, edad} = persona;

console.log(nombre, apellido, edad); // Maria Eugenia Costa 37
```

*nombre*, *apellido* y *edad* con **propiedades** del objeto *persona*.

Un detalle en los **objetos**, la varaible que voy a crear en la destructuracion debe tener **el mismo nombre que la propiedad del objeto**, si a *edad* la definia como *age* iba a tener *undefined*.

Como busca en base al nombre de la variable la propieda, lo puedo destructurar en distinto orden y no voy a tener inconvenientes. Por ejemplo:

```JavaScript
let{nombre, edad, apellido} = persona;

console.log(nombre, apellido, edad); // Maria Eugenia Costa 37
```

---

## Objetos literales

Sin el objeto literal:

```JavaScript
let nombre = "Pipi",
 edad = 10;

const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function() {
    console.log("guauuu guauu !!!");
  }
} 

conosle.log(perro); // {nombre: "Pipi", edad: 10, ladrad: f}
perro.ladrad(); // guauuu guauuu !!!
```

Con el objeto literal:

```JavaScript
const dog = {
  nombre,
  edad,
  raza: "puro perro",
  ladrar() {
    console.log("guauuu guauu guauu !!!");
  }
}

console.log(dog); //{nombre: "Pipi", edad: 10, raza: "pero perro", ladrd: f}
dog.ladrar(); // guauuu guauu guauu !!!
```

---

## Parámetros REST y operador SPREAD

---

## Arrow functions

---

