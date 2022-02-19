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

**Parámetros REST (...)**

Un ejemplo con código, si quiero sumar los números de una rray, pero no se cuantos elementos tengo:

```JavaScript
function sumar(a,b, ...c) {
  let resultado = a+b;
  c.forEach(function (n) {
    resultado +=n;
  });
  return resultado;
}

console.log(sumar(1, 2)); // 3
console.log(sumar(1, 2, 3)); // 6
console.log(sumar(1, 2, 3, 4)); // 10
console.log(sumar(1, 2, 3, 4, 5)); // 15
console.log(sumar(1, 2, 3, 4, 5, 6)); // 21
```

**Operador SPREAD**

Cuando hay que expandir una expresión, proque debemos guardar múltiples elementos; como en el caso de tener un arreglo con cierto numero de elementos pero en un determinaod momento recibe nuevos parametros, y en vez de contatenar o hacer push se agrega con el *spread operator*.


Ejmplo en código, teniendo los array arr1 y arr2, tengo que crear una array que sea el resultado de arr1+arr2, o sea crear un nuevo arreglo de 10 posiciones:

```JavaScript
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];
```

Sin el spread operator, si hago:

```JavaScript
const arr3 = [arr1,arr2];  // (2) [Array(5), Array(5)]
```

Pero con el Spread Operator:

```JavaScript
const arr3 = [...arr1, ...arr2];  // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
```

En React JS cuando actualizamos el estado (un objeto que centraliza todos los datos de la aplicaicón o del componente en que se está trabajando), y solo afectamos uno se hace una copia del objeto y se le modifica o agrega el nuevo valor del estado.

---

## Arrow functions


---
