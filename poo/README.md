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


---

# :star: Objetos y Funciones del lenguaje

---

## :book:  Objeto console

---

## :book: Objeto Date 

---

## :book:  Objeto Math