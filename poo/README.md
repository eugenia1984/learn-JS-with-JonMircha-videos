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

---

## :book:  Objeto Math