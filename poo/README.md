# :star: Programación Orientada a Objetos

---

## :book: POO

JavaScript es un lenguaje **multiparadigma**, se pueden utilizar distintos paradigmas de programación (programación funcional, programación orientada a objetos, programación orientada a eventos).

En JavaScript la POO es muy diferente a otros lenguajes basados en clases, como C o Java.

A partid del 2015 JvaScript tiene clases, pero es una forma más fácil de hacer la programación basada en prototipos. El navegador **transforma las clases a funciones prototípicas**.

Algunos conceptos básicos de POO:

**Clases** - modelo a seguir.

**Objetos** - es una instancia de una clase. Es una copia de ese modelo, y se utiliza en el mundo real.

**Atributos** - es una característica o propiedad del objeto (son variables dentro de un objeto).
      
**Métodos** - son las acciones que un objeto puede realizar (son funciones dentro de un objeto).
     
Platón tiene "El tratado de las ideas", donde dice que vivimos en el mundo de las ideas, que los objetos que nos rodean no son más que la representación física de una idea que tenemos en la cabeza. Entonces, por ejemplo cuando vemos una silla, cada uno tiene su propia representación mental de la misma.

=> Las clases es el modelo a seguir, lo que para Platón es una idea.

=> Los objetos al cual físicamente, en el mundo real, le asignamos ese nombre, es el objeto, es la instancia de esa idea.

**JS es un lenguaje orientado a objetos, pero basado en PROTOTIPOS, no en clases**.

**PROTOTIPO** - es un mecanismo por el cual un objeto puede heredar de un objeto padre, característica (atributos) y métodos (funciones).


Ejemplo en código con el objeto *animal* y *animal2*:

```JavaScript
const animal = {
  nombre: "Snoopy",
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  }
}

const animal2 = {
  nombre: "Lola Bunny",
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  }
}

console.log(animal); 
// {nombre:"Snoopy", sonar: f}
// nombre: "Snoopy"
// sonar: f sonar()
// __proto__: Object

console.log(animal2); 
// {nombre:"Lola Bunny", sonar: f}
// nombre: "Lola Bunny"
// sonar: f sonar()
// __proto__: Object
```

En vez de copiar y pegar el código tantas veces como necesite crear un animal, entonces utilizo la  **Función constructora**, a partir de ella genero nuevas instancias (nuevos objetos):

- Se debe nombrar con UpperCamelCase a la función constructora

- Se pasan como parametros los atributos

- No utilizo arrow function, porque sino detectan al objeto window.

- Tantos los atributos como los métodos deben colgar del *objeto this*.

```JavaSCript
  function Animal(nombre, genero) {  
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
  //Métodos
  this.sonar = function () {
    console.log("Hago sonidos por que estoy vivo");
  }
  this.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
  }
} 
```

Ahora que tengo la función constructora, los nuevos objetos los creo de este modo, más simple:

```JavaSCript
const pipi = new Animal("Pipi", "Macho");
console.log(pipi);
// Animal {nombre: "Pipi", genero: "Macho", sonar: f}
```

- Ahora uso la función constructora *Animal*.

Función constructora donde asignamos los métodos al Prototipo, no a la función como tal, asi no duplico el método en cada nueva instancia del objeto, para no desperdiar memoria, en una aplicación, por ejemplo:

```JavaScript
function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
} 
```

Asi puedo tener miles de animales, y van a tener nombre y genero, pero no voy a tener miles de funciones saludar.

Métodos agregados al prototipo de la función constructora:

```JavaScript
Animal.prototype.sonar = function () {
  console.log("Hago sonidos por que estoy vivo");
}
Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
} 
```
---

## :book:  Herencia Prototípica 

**Herencia** -> el hijo hereda los atributos y metodos del padre.

- *Perro* hereda de *Animal*

- Animal hereda del objeto *Object* (que es el más general de JavaScript).

```JavaScript
function Perro(nombre, genero, tamanio) {
  this.super = Animal;  // el elemento padre de Perro es Animal
  this.super(nombre, genero);  // son atributos heredados del padre Animal
  this.tamanio = tamanio; // es un atributo propio del objeto Perro, no lo tiene Animal
} 
```

Perro está heredando de Animal, pero lo que hay que hacer es reasignar al prototipo de Perro que sea una instancia de animal ( sino me pasa como antes tenía los métdoos duplicados)

```JavaScript
Perro.prototype = new Animal();  // Perro está heredando de Animal
Perro.prototype.constructor = Perro;  // Le generosu propio constructor
```

### Sobreescritura de métodos del Prototipo padre en el hijo

```JavaScript
  Perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es un ladrido");
}
Perro.prototype.ladrar = function () {
  console.log("Guauuu Guauuu !!!!");
} 
```

```JavaScript
const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
  lolaBunny = new Animal("Lola Bunny", "Hembra");
console.log(snoopy);
console.log(lolaBunny);
snoopy.sonar();
snoopy.saludar();
snoopy.ladrar();
lolaBunny.sonar();
lolaBunny.saludar(); 
```

---

## :book:  Métodos estáticos, getters y setters

- El constructor es un método especial que se ejecuta en el momento de instanciar la clase

```JavaScript
class Animal {
  // Constructor
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  //Métodos
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  }
  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}
```

```JavaScript
Perro.queEres();
const mimi = new Animal("Mimi", "Hembra"),
  scooby = new Perro("Scooby", "Macho");

console.log(mimi);
// Animal {nombre: "Mimi", genero: "hembra"}
console.log(scooby));
// Animal {nombre: "Scooby", genero: "mecho"}

// Ahora los métodos sonar() y saludar() están en el propotipo
```

### :book: Herencia con constructor, getters y setters

- En JavaScript no se pueden crear métodos privados (que se pueden utilizar solo dentro de la clase). En JavaScript todas las clases son **públicas**.

- Se utiliza la palabra reservada */extends** para aplicar herencia.

- Con el método **super()** se manda a llamar el constructor de la clase padre.

- Los **setters** y **getters** son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase, pero JavaScript los convierte a propiedades, por eso la invocarlos se hace como atributo, no como método, no se usan los ().

- Un **método estático** se pueden ejecutar sin necesidad de instanciar la clase

```JavaScript
class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }
  sonar() { // sobreescritura de metodo heredado del objeto padre
    console.log("Soy un perro y mi sonido es un ladrido");
  }
  ladrar() {   // sobreescritura de metodo heredado del objeto padre
    console.log("Guauuu Guauuu!!!");
  }
  // método estático
  static queEres() {
    console.log("Los perros somos animales mamíferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre.");
  }
  // Geter y Seter para el atributo raza
  get getRaza() { // para obtener el valor de la propiedad (atributo)
    return this.raza;
  }
  set setRaza(raza) { // para modificar el valor de la propiedad (atributo)
    this.raza = raza;
  }
}
```

```JavaScript
Perro.queEres();
const mimi = new Animal("Mimi", "Hembra"),
  scooby = new Perro("Scooby", "Macho", "Gigante");
console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();  // metodo propio del Perro
console.log(scooby.getRaza);  // como es metodo obtenedor, JS lo convierte a propiedad, por lo que se trata como atributo, no como metodo, por eso no uso los ()
scooby.setRaza = "Grán Danés";
console.log(scooby.getRaza);
```


- JavaScript no tiene los modificadores de acceso: public, static y protected, porque todas las clase son publicas.

---

# :star: Objetos y Funciones del lenguaje

---

## :book:  Objeto console

```JavaScript
console.log(console);
console.error("Esto es un error");  // se ve con  x y en rojo
console.warn("Esto es un aviso"); // se ve con ! en amarillo
console.info("Esto es un mensaje informativo");  // similar al log, pero informativo
console.log("Un registro de lo que ha pasado en nuestra aplicación");
```

Todos estos métodos pueden recibir parámetros (que pueden ser variables). Y si entre los () separamos con como, se puede pasar más de un parámetro.

```JavaScript
let nombre = "Maria Eugenia",
  apellido = "Costa",
  edad = 37;
console.log(nombre);  // Maria Eugenia
console.log(apellido); // Costa
console.log(edad); // 37
console.log(nombre, apellido, edad); // Maria Eugenia Costa 37
```

Tamibén puedo usar Template String

```JavaScript
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`); // Hola mi nombre es Maria Eugenia y tengo 37 años
```

Y también puedo utilizar String format ( %s -> String | %d -> Number)

```JavaScript
console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);
```

Para **limpiar** la consola:

```JavaScript
console.clear();
```

Para ver el objecto window:

```JavasCript
console.log(window);
```

Para ver el objeto document, la representación del objeto html a través de JavaScript, y mediante los *nodos* podemos acceder a las etiquetas de html.

```JavaScript
console.log(document);
```

Con **console.dir()** veo todos los métodos y atributos

```JavaScript
console.dir(window);
console.dir(document);
```

Con **console.group()** formo grupos:

```JavaScript
console.group("Cursos de @jonmircha en YouTube");
console.log("Curso de JavaScript");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y Programación Web");
console.groupEnd();
// v Cursos de @jonmircha en Youtube
//     Curso de JavaScript
//     Curso de PWAs
//     Curso de Flexbox
//     Curso de Diseño y Programación Web
```

Con **console.groupCollapsed** la flecha está hacia la derecha y puedo colapsarlo o no

```JavaScript
console.groupCollapsed("Cursos de @jonmircha en YouTube");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y Programación Web");
console.groupEnd();
```

Con **console.table** lo represento como tabla, con **sort** los ordeno alfabéticamente de forma ascendente:

```JavaScript
console.log(console);
console.table(Object.entries(console).sort());
// console {debug: f, error: f, info: f, log: f, ...}
```

Lo veo como tabla:

```
| (index) | 0 | 1 |
| ------- | - | - |
| 0 | "debug" | f |
| 1 | "error" | f |
| 2 | "info" | f |
```

Para representar un objeto o array en forma de tabla:

```JavaScript
const numeros = [1, 2, 3, 4, 5],
  vocales = ["a", "e", "i", "o", "u"];
```

```JavaScript
console.table(numeros);
```

```
| (index) | Value |
| ------- | ----- |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |
```

```JavaScript
console.table(vocales);
```


```
| (index) | Value |
| ------- | ----- |
| 1 | "a" |
| 2 | "e" |
| 3 | "i" |
| 4 | "o" |
| 5 | "u" |
```

Para los objetos : 

```JavaScript
const perro = {
  nombre: "Boni",
  raza: "Boxer",
  color: "cafe"
}
```

```JavaSCript
console.table(perro);
```

Voy a ver la propiedad y el valor:

```
| (index) | Value |
| ------- | ----- |
| nombre | "Boni" |
| raza | "Boxer" |
| color | "cafe" |
```

Para calcular el rendimiento de una aplicación se puede utilizar el método **.time()** y **.timeEnd().

- lo que agrego como mensaje (bandera) en **.time()** y en **.timeEnd** debe ser igual.

```JavaScript
console.time('Cuanto tiempo tarda mi código');
const arreglo = Array(1000000);  // establezco la dimension del array, pero con posiciones vacias

for (let i = 0; i < arreglo.length; i++) { // a cada posicion (elemento) del array le asigno un valor
  arreglo[i] = i;
}
console.timeEnd('Cuanto tiempo tarda mi código');
```

En consola veo: ```Cuanto tiempo tarda mi codigo: 32.076171875ms```

Para saber cuantas veces se ejecuto un fragmento de código, con **console.count()**, para ver por ejemplo cuantas veces el usuario le hace click a un botón o cuantas peticiones hace para llegar a cierta solicitud, por ejemplo.

```JavaScript
for (let i = 0; i <= 5; i++) {
  console.count("código for");
  console.log(i);
}
```

```
0
codigo for: 1
1
codigo for: 2
2
codigo for: 3
3
codigo for: 4
4
codigo for: 5
```

**.assert()** es como una minilibrería para realizar pruebas.

```conosle.assert( <condicion>, {<variables>};)```

Ejemplo en código, espero que X siempre sea menor que Y:

```JavaScript
let x = 3,
  y = 2,
  pruebaXY = "Se espera que X siempre sea menor que Y";
console.assert(x < y, { x, y, pruebaXY }); 
// Assertion failes:
// {w: 3, y: 2, pruebaXY: "Se espera que X siempre sea menor que Y"}
```

---

## :book: Objeto Date 

Para la hora local: ``` DiaDeLaSemana MesDelAnio NumeroDeDia HoraConHora:Minuto:Segundos EnQueUsoHorarioDElGMTEstoy ```


```JavaScript
console.log(Date());  
```

Me la guardo en una variable **fecha**:

```JavaScript
let fecha = new Date();
console.log(fecha);
```

Para ver el **día del mes**:

```JavaScript
console.log(fecha.getDate());
```

Para ver **el día de la semana**:

Observación, empieza desde 0: 

D L M Mi J V S -> 0 1 2 3 4 5 6 

```JavaScript
console.log(fecha.getDay());
```

Para obtener el **mes**:

Observacion, empieza en 0: 

Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11


```JavaScript
console.log(fecha.getMonth());
```

Para obtener el **año**:

```JavaScript
console.log(fecha.getYear());  // 122 considera desde 1900 cuantos años pasaron
console.log(fecha.getFullYear()); // 2022 - este metodo es mejor utilizar
```

Para obtener la **hora**:

```JavaScript
console.log(fecha.getHours()); // 12 - en formato de 0 a 23
```

Para obtener los **minutos**:
```JavaScript
console.log(fecha.getMinutes()); // 19
```

Para obtener los **segundos**:
```JavaScript
console.log(fecha.getSeconds());  //10
```

Para obtener los **milisegundos**:
```JavaScript
console.log(fecha.getMilliseconds());  //715
```

Similar a new Date, pero para entender más fácil:

```JavaScript
console.log(fecha.toString());
```

Para ver solo la fecha: 
```JavaScript
console.log(fecha.toDateString());  // Thu Feb 02 2022 12:19:20 GMT-0003 (hora stándar central)
```

Para ver  la **hora local**:

```JavaScript
console.log(fecha.toLocaleString());  //Thu Feb 02 2022 12:19:20
```

Para solo ver **fecha**
```JavaScript
console.log(fecha.toLocaleDateString()); // 20/02/2022
```

Para solo ver **hora**:

```JavaScript
console.log(fecha.toLocaleTimeString()); // 12:19:20
```

Para ver el uso horario en que nos encontramos, en minutos:

```JavaScript
console.log(fecha.getTimezoneOffset());
```

Para ver la fecha de UTC0 - Meridiano de Greenwich:

```JavaScript
console.log(fecha.getUTCDate());
```

Para ver la hora de UTC0 - Meridiano de Greenwich:

```JavaScript
console.log(fecha.getUTCHours());
```


La fecha en formato Time Stamp, utilizando el constructor Date, son cuántos segundos pasan desde el 1 de Enero de 1970, que es la fecha Time Stamp (se usa para guardar fechas en Base de datos):

```JavaScript
console.log(Date.now());
```

Pra obetener el Time Stamp de mi fecha de nacimiento, me lo guardo en una variable que va a tener como parametros año, mes, fecha:

```JavaScript
let cumpleEuge = new Date(1984, 8, 1);
console.log(cumpleEEuge);
```

Y haciendo la difernecia con el Time Stamp averiguo mi edad.

- Hay una librería, **Moment.js** que calcula cuanto tiempo pasó, ya sea horas, días, meses, etc.

---

## :book:  Objeto Math

Ayuda cuando hay que hacer operaciones matemáticas especiales.

Para ver todos sus métodos:

```JavaScript
console.log(Math);
```

Trae como propiedades, algunos números fijos, como por ejemplo PI (está en mayúsuclas, por ser una constante):

```JavaScript
console.log(Math.PI);
```

Para calcular el valor absoluto, la cantidad como tal del número, sin considerar si es positivo o negativo -> **.abs()**

```JavaScript
console.log(Math.abs(-7.8));  // 7.8
```

Para redondear al número entero posterior inmediato (hacia arriba) -> **.ceil()**

```JavaScript
console.log(Math.ceil(7.2));  // 8
```

Para redondear al número inmediato entero menor (hacia abajo) -> **.floor()**

```JavaScript
console.log(Math.floor(7.8)); // 7
```

Para redondear al más cercano inmediato (redondea de a 0.50) -> **.round()**

```JavaScript
console.log(Math.round(7.49));
```

Se puede sacar la raiz cuadrada de un número -> **.sqrt()**

```JavaScript
console.log(Math.sqrt(81));  // 9
```

Para elevar potencias -> **.pow(base, expoennte)**

```JavaScript
console.log(Math.pow(2, 5));  // 2 x 2 x 2 x 2 x 2 = 32
```

Para indicar si el valor es positivo, negativo o cero -> **.sign()**

Los valores que me muestra son: **-1** si es negativo /  **0** si es cero / **1** si es un positivo
```JavaScript
console.log(Math.sign(-0.3)); // -1 
console.log(Math.sign(0.3)); // 1
console.log(Math.sign(0)); // 0  
```

Para obtener un valor aleatorio comprendido entre (0, 1) -> **.random()**

```JavaScript
console.log(Math.random());
```


Si por ejemplo necesito un número aleatorio entre 0 y 1000, utilizo **.random()** y lo multiplica por 1000, y para tener un número entero le aplico **.round()**:

```JavaScript
console.log(Math.round(Math.random() * 1000));
```

---

## :book: Operador de Cortocircuito


Gracias a los parámetros por defecto, ya no tenemos el inconveneitne de Undefined.

```JavaScript
function saludar(nombre) {
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}

saludar("Euge"); // Hola Euge
saludar();  // Hola Desconocido
```


Pero, antes de los parámetros por defecto, se utilizaba el *operador de cortocircuito*, recordr el uso de los truthy y falsy.

Sería en una asignación de variable, pero ahora para que sea más rápido lo hacemos en el console.log():
### OR

**Cortocircuito OR** -> cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto



```JavaScript
//truthy
console.log("cadena" || "Valor de la derecha");  // cadena
console.log(19 || "Valor de la derecha");  // 19
console.log(true || "Valor de la derecha");  // true
console.log([] || "Valor de la derecha");  // []
console.log({} || "Valor de la derecha");  // {}
//Falsy
console.log(false || "Valor de la derecha");  // Valor de la derecha
console.log(null || "Valor de la derecha");  // Valor de la derecha
console.log(undefined || "Valor de la derecha");  // Valor de la derecha
console.log("" || "Valor de la derecha");  // Valor de la derecha
console.log(-2 || "Valor de la derecha");   -2
console.log(0 || "Valor de la derecha");   // Valor de la derecha
```

### AND 


**Cortocircuito AND** -> cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto


Sería en una asignación de variable, pero ahora para que sea más rápido lo hacemos en el console.log():

```JavaScript
console.log("cadena" && "Valor de la derecha");  // Valor de la derecha
console.log(19 && "Valor de la derecha");  // Valor de la derecha
console.log(true && "Valor de la derecha");  // Valor de la derecha
console.log([] && "Valor de la derecha");  // Valor de la derecha
console.log({} && "Valor de la derecha");   // Valor de la derecha


console.log(false && "Valor de la derecha");  // false
console.log(null && "Valor de la derecha");  // null
console.log(undefined && "Valor de la derecha");  // undefined
console.log("" && "Valor de la derecha");  //
console.log(-2 && "Valor de la derecha");  // valor de la derecha
console.log(0 && "Valor de la derecha");  // 0
```


Cuando en React se hace renderizado de componentes dinámicos, que dependiendo del valor de uno o de otro cargas un componente u otro, se pueden aplicar los cortocircuitos.

---

## :book: alert, confirm y prompt


Todos cuelgan del objeto padre **window** (por eso no existen en Node.js), pero no es necesario invocarlos  así: ```window.alert()```, directamente ```alert()```

Sirven para poder interactuar con el usuario.


Para ver la lista de los métodos del objeto window y ver que tiene como funciones: alert, confirm, prompt:

```JavaSCript
console.log(window);
```

### Alert

```JavaScript
alert("Hola esto es una alerta");
```

Se va a ver el mensaje "Hola este es un aleta" con un **botón de aceptar**


### Confirm

```JavaScript
confirm("Hola esto es una confirmación");
```

Se va a ver el mensaje "Hola esto es una confirmación" con **dos botones**: **Aceptar** y **Cancelar**.

Y dependiendo de lo que el usuario pulse, va a validar a true o false.

### Prompt

```JavaScript
prompt("Hola esto es un aviso y le permite al usuario ingresar un valor");
```

Se va a mostrar el mensaje  "Hola esto es un aviso y le permite al usuario ingresar un valor" y me permite que el usuario interactué, ya que aparece **un input**. y **dos botones**: **Aceptar** y **Cancelar**.

Ahora los guardo en varaibles:

```JavaScript
let alerta = alert("Hola esto es una alerta"),
  confirmacion = confirm("Hola esto es una confirmación"),
  aviso = prompt("Hola esto es un aviso y le permite al usuario ingresar un valor");
console.log(alerta);  // undefined
console.log(confirmacion);  // true si hago click en Aceptar - false si hago click en Cancelar
console.log(aviso);  // puedo tener null si aunque completo el input pero le doy a cancelar. si completo y hago click en Aceptar guarda el valor
```

---

## :book: Expresiones Regulares

**Expresiones Regulares** : Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres.

Links para ampliar el tema:


[Definición de Expresiones Regulares en Wikipedia](https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular)

[Definición de Expresiones Regulares en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)


- Se utilizan para valir que se ingreso un cprreo electrónico / DNI válido.

- Están en todos los lenguajes de programación.


Ejemplo con código, tengo por ejemplo un texto guardado en la variable **cadena**:

```JavaScript
let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentium sit eaque recusandae id sapiente similique, laudantium voluptatum perferendis ea iure ad odio doloremque earum voluptate.";
```

Para buscar con **RegExp** dando un **patrón** y la **bandera**, como en el ejemplo que pongo la bandera **g** de global, asi no se queda con la primer coincidencia y corta, sino que me busca todas:

```JavaScript
let expReg = new RegExp("lorem", "ig");
```

Utilizándo el método **.test()**:

```JavaScript
console.log(expReg.test(cadena));  // true, porque la expresion regular aparece en la cadena
```

Utilizando el método **.exec()**, que me devuelve un arreglo, me aclara donde lo encuentra, y como es **casesensible** utilizo la bandera **ig** para que me ignore las mayusculas y minusculas :

```JavaScript
console.log(expReg.exec(cadena));
let expReg2 = /lorem{1,}/ig;  
// con ig deja de ser casesensible
// {1,} lo encuentra al menos una vez, se puede repetir infinitas veces
//{1,3} se repetiria entre 1 y 3 veces, pongo un rango
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));
```



**Alternación** : Una barra vertical separa las alternativas, las cuales son evaluadas de izquierda a derecha. Por ejemplo: ``` "amarillo|azul" ``` se corresponde con amarillo o azul.

**Cuantificación**: Un cuantificador tras un carácter especifica la frecuencia con la que este puede ocurrir. Los cuantificadores más comunes son : ``` ? , + y ```.

El signo de interrogación **?** indica que el carácter que le precede puede aparecer como mucho una vez. Por ejemplo: ```ob?scuro``` se corresponde con ```oscuro y obscuro```.

El signo más **+** indica que el carácter que le precede debe aparecer al menos una vez. Por ejemplo, ```ho+la``` describe el conjunto infinito ``` hola, hoola, hooola, hoooola, etcétera ```.

El asterisco * indica que el carácter que le precede puede aparecer cero, una, o más veces. Por ejemplo: ```0*42``` se corresponde con ```42, 042, 0042, 00042, etcétera```.

**Agrupación**: los **paréntesis** pueden usarse para definir el ámbito y precedencia de los demás operadores. Por ejemplo: ```(p|m)adre``` es lo mismo que ```padre|madre```, y ```(des)?amor``` se corresponde con ```amor``` y con ```desamor```.

Los constructores pueden combinarse libremente dentro de la misma expresión, por lo que ```H(ae?|ä)ndel``` equivale a ```H(a|ae|ä)ndel```. La sintaxis precisa de las expresiones regulares cambia según las herramientas y aplicaciones consideradas.


**El punto** : **.**, sl punto se interpreta por el motor de búsqueda como "cualquier carácter", es decir, busca cualquier carácter incluyendo los saltos de línea. 

**El signo de admiración**:  **!**, se utiliza para realizar una "búsqueda anticipada negativa". La construcción de la expresión regular es con el par de paréntesis, el paréntesis de apertura seguido de un signo de interrogación y un signo de exclamación. Dentro de la búsqueda tenemos la expresión regular. Por ejemplo, para excluir exactamente una palabra, habrá que utilizar ```^(palabra.+|(?!palabra).*)$```

**La barra inversa o contrabarra**: \, se utiliza para escapar el siguiente carácter de la expresión de búsqueda de forma que este adquiera un significado especial o deje de tenerlo. O sea, la barra inversa no se utiliza nunca por sí sola, sino en combinación con otros caracteres. 

```
| expresion | representacion |
| --------- | -------------- |
| \t | un tabulador |
| \r | el "retorno de carro" o "regreso al inicio" o sea el lugar en que la línea vuelve a iniciar |
| \n | la "nueva línea" el carácter por medio del cual una línea da inicio. Es necesario recordar que en Windows es necesaria una combinación de \r\n para comenzar una nueva línea, mientras que en Unix solamente se usa \n y en Mac_OS clásico se usa solamente \r |
| \a | una "campana" o "beep" que se produce al imprimir este carácter |
| \e | la tecla "Esc" o "Escape" |
| \f |  un salto de página |
| \v | un tabulador vertical |
| \x | Se utiliza para representar caracteres ASCII o ANSI si conoce su código. De esta forma, si se busca el símbolo de derechos de autor y la fuente en la que se busca utiliza el conjunto de caracteres latín-1 es posible encontrarlo utilizando \xA9".
| \u | Se utiliza para representar caracteres Unicode si se conoce su código. "| \u00A2" representa el símbolo de centavos. No todos los motores de Expresiones Regulares soportan Unicode. El .Net Framework lo hace, pero el EditPad Pro no, por ejemplo |
| \d | Representa un dígito del 0 al 9 |
| \w | Representa cualquier carácter alfanumérico |
| \s | Representa un espacio en blanco |
| \D | Representa cualquier carácter que no sea un dígito del 0 al 9 |
| \W | Representa cualquier carácter no alfanumérico |
| \S | Representa cualquier carácter que no sea un espacio en blanco |
| \A | Representa el inicio de la cadena | No un carácter sino una posición |
| \Z | Representa el final de la cadena | No un carácter sino una posición |
| \b | Marca la posición de una palabra limitada por espacios en blanco, puntuación o el inicio/final de una cadena |
| \B | Marca la posición entre dos caracteres alfanuméricos o dos no-alfanuméricos |
```

**Los corchetes**: **[]**  en el lenguaje de las expresiones regulares es representar "clases de caracteres", o sea, agrupar caracteres en grupos o clases. Son útiles cuando es necesario buscar uno de un grupo de caracteres. Dentro de los corchetes es posible utilizar el guion "-" para especificar rangos de caracteres.

**La barra** : **|**, sirve para indicar una de varias opciones. Por ejemplo, la expresión regular "a|e" encontrará cualquier "a" o "e" dentro del texto. La expresión regular "este|oeste|norte|sur" permitirá encontrar cualquiera de los nombres de los puntos cardinales. La barra se utiliza comúnmente en conjunto con otros caracteres especiales.

**El signo de dólar**: *$*, representa el final de la cadena de caracteres o el final de la línea, si se utiliza el modo multi-línea. No representa un carácter en especial sino una posición. Si se utiliza la expresión regular "\.$" el motor encontrará todos los lugares donde un punto finalice la línea, lo que es útil para avanzar entre párrafos.

**El acento circunflejo**: **^**, este carácter tiene una doble funcionalidad, que difiere cuando se utiliza individualmente y cuando se utiliza en conjunto con otros caracteres especiales

**Los paréntesis**: **()**, de forma similar que los corchetes, los paréntesis sirven para agrupar caracteres, sin embargo existen varias diferencias fundamentales entre los grupos establecidos por medio de corchetes y los grupos establecidos por paréntesis:

- Los caracteres especiales conservan su significado dentro de los paréntesis.

- Los grupos establecidos con paréntesis establecen una "etiqueta" o "punto de referencia" para el motor de búsqueda que puede ser utilizada posteriormente como se denota más adelante.

- Utilizados en conjunto con la barra "|" permite hacer búsquedas opcionales. Por ejemplo la expresión regular "al (este|oeste|norte|sur) de" permite buscar textos que den indicaciones por medio de puntos cardinales, mientras que la expresión regular "este|oeste|norte|sur" encontraría "este" en la palabra "esteban", no pudiendo cumplir con este propósito.

- Utilizados en conjunto con otros caracteres especiales que se detallan posteriormente, ofrece funcionalidad adicional.

**El signo de interrogación**: **?**, tiene varias funciones dentro del lenguaje de las expresiones regulares. La primera de ellas es especificar que una parte de la búsqueda es opcional. Por ejemplo, la expresión regular ```ob?scuridad``` permite encontrar tanto ```oscuridad``` como ```obscuridad```. 

**Las llaves**: **{}**, comúnmente las llaves son caracteres literales cuando se utilizan por separado en una expresión regular. Para que adquieran su función de metacaracteres es necesario que encierren uno o varios números separados por coma y que estén colocados a la derecha de otra expresión regular de la siguiente forma: ```\d{2}``` Esta expresión le dice al motor de búsqueda que encuentre dos dígitos contiguos. Utilizando esta fórmula podríamos convertir el ejemplo ```^\d\d/\d\d/\d\d\d\d$``` que servía para validar un formato de fecha en ```^\d{2}/\d{2}/\d{4}$``` para una mayor claridad en la lectura de la expresión.

```\d{2,4}``` Esta forma añade un segundo número separado por una coma, el cual indica al motor de búsqueda que como máximo debe aparecer 4 veces la expresión regular \d. Los posibles valores son:

```^\d\d$``` (mínimo 2 repeticiones)

```^\d\d\d$```(tiene 3 repeticiones, por lo tanto entra en el rango 2-4)

```^\d\d\d\d$``` (máximo 4 repeticiones)


**El asterisco**: *, sirve para encontrar algo que se encuentra repetido 0 o más veces. Por ejemplo, utilizando la expresión ```[a-zA-Z]\d*``` será posible encontrar tanto "H" como "H1", "H01", "H100" y "H1000", es decir, una letra seguida de un número indefinido de dígitos.

**El signo de suma**: +, se utiliza para encontrar una cadena que se encuentre repetida una o más veces. A diferencia del asterisco, la expresión ```[a-zA-Z]\d+``` encontrará "H1" pero no encontrará "H". 

---

## :book: Funciones Anónimas Autoejecutables

Es una función en la que se engloba todo el código que se quiere ejecutar.

Es la báse de los módulos actuales, se creaba una encapsulación en el código.

No solamente se definen, sino que se ejecutan al momento de nombrarlas. Y está protegido de los efectos secundarios que podría tener la invocación de librería de terceros u oros archivos de programación que tenga, que contengan nombres de variables muy similares.

Y permite pasar parámetros de una manera más amigable.


```JavaScript
(function () {
  console.log("Mi primer IIFE");
})();
(function (d, w, c) {
  console.log("Mi segunda IIFE");
  console.log(d);
  console.log(w);
  c.log("Este es un console.log")
})(document, window, console);
```

## Formas de escribir las funciones Anónimas Autoejecutables :

### Clásica

```JavaScript
(function () {
  console.log('versión Clásica')
})();
```

### La Crockford (JavaScript The Good Parts)

```JavaScript
((function () {
  console.log('versión Crockford')
})());
```

### Unaria

```JavaSCript
+function () {
  console.log('versión Unaria')
}();
```

### Facebook

```JavaScript
!function () {
  console.log('versión Facebook')
}(); 
```
---

## :book: Módulos: import / export

Se pueden mandar a llamar archivos JavaScript desde el HTML a un archivo externo JavaScript.

Por buena práctica invocarlo al final del body, asi primero se carga todo el HTML5 y luego invoca al código en JavaScript. Aunque ahora también se puede invocar en el *head* con el atributo *defer*.

```<script src="js/modulos.js" type="module"></script>``` en la invocación del *script* debo tener **type** = **"module"**.

```<script src="js/no-modulos.js" nomodule></script>``` con **nomudule** me lo carga si no es modulo, es para que no se me carguen ambos. Es para los navegadores modernos, que sí soportan los módulos.

---

Ejemplo con código: 

```html
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Módulos en JavaScript</title>
</head>

<body>
  <h1>Módulos en JavaScript</h1>
  <script src="js/modulos.js" type="module"></script>
  <script src="js/no-modulos.js" nomodule></script>
</body>

</html>
```

modulos.js:

```JavaScript
import saludar, { Saludar, PI, usuario } from "./constantes.js";
import { aritmetica as calculos } from "./aritmetica.js";

console.log("Archivo modulos.js");
console.log(PI, usuario);
//console.log(aritmetica.sumar(3, 4));
console.log(calculos.sumar(3, 4));
console.log(calculos.restar(3, 4));
saludar();
let saludo = new Saludar();
saludo;
```

no-modulos.js:

```JavaScript
console.log("Mi navegador no soporta Módulos +ES6");
```

constantes.js:

```JavaScript
export const PI = Math.PI;

export let usuario = "Jon";

const password = "qwerty";
//export default password;

const hello = () => console.log("Hola");

export default function saludar() {
  console.log("Hola Módulos +ES6");
}

export class Saludar {
  constructor() {
    console.log("Hola Clases +ES6");
  }
}
```

aritmetica.js:

```JavaScript
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

export const aritmetica = {
  sumar,
  restar
};
```

---

Recordar el orden en que debemos escribir el código, más al trabajar con módulos:

1- importación de módulos

2- declaración de variables

3- declaración de funciones

4- ejecución de código

---