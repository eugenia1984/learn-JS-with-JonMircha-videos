# :book: Aprende JavaScript

---

## Un poco de historia

- En 1995 **Brendan Eich** debe crear una tecnología para implementar cosas interactivas con HTML en el navegador, para la empresa Netscape.

- No tiene nada que ver Java con JavaScript, se le puso el nombre por marketing, ya que Java reinaba, antes tuvo otros nombres como: Mocha y LiveScript.

| Edicion | Publicacion | Cambios |
| ------- | ----------- | ------- |
| 1 | 1997 | 1ra edición |
| 2 | 1998 | cambios editoriales para mantener la especificación completa alineada con el estandar internacional ISO/TEC 16262 |
| 3 | 1999 | agregar RegEx(expresiones regulares), mejor manejo de String, nuevo control de declaraciones, manejo de excepciones con try/catch, definición más estricta de errores, formato para la salida numérica , etc |
| 4 | abandonado | por diferencias políticas en cuanto a la complejidad del lenguaje |
| 5 | 2009 | Strict mode (mejor comprobación de errores). Aclara ambiguedades. Getters y Setters. librería para soporte de JSON. Todos los patrones como MVC, etc. Desarrollo orientado a componentes. |
| 5.1 | 2011 | lineada ala 3ra edición del estandar internacional ISO/TEC 16262.2011 |
| 6 | 2015 | Ya Crhome destrono a Explorer, y están todos los navegadores que van soportando todas las características al mismo tiempo, se termina la guerra de los navegadores. Entonces cada año sale un nuevo standard con nuevas características. ES2015 a la ES 6|
| 7 | 2016 | ES2016 a la ES7  |
| 8 | 2017 | ES2017 a la ES8 |
| 9 | 2018 | ES2018 a la ES 9 |
| 10 | 2019 | ES2019 a la ES10 |

EsNext ... y así sucesivamente

---

## Características y gramática de JS


### Isomorfismo

Hoy JS es el único lenguaje capaz de ejecutarse en las 3 capas de una app: FrontEnd (JS), BackEnd (Node.js) y Persistencia de datos (MongoDB, Couch DB, Firebase, etc).

Con JavaScript puedes:

Diseño y Desarrollo Web.

Hacer Videojuegos.

Experiencias 3D, Realidad Aumentada, Realidad Virtual.

Controlar Hardware (drones, robots, electrodomésticos, wearables, etc).

Aplicaciones Híbridas y Móviles.

Aprendizaje Automático.





### JS no es Java

Solo tuvo nombre similar por marketing.

### Características

- **Lenguaje de alto nivel**, autogestión de memoria, garbage colector, etc.

- Es **interpretado** y **dinámico**, es decir que no necesita una fase de compilación y luego la fase de ejecusión; JS se compila en tiempo de ejecución.

- **Débilmente tipado** al crear la variable no es encesario declarar el dato, y en el flujo dle programa puede ir cambiando el tipo de dato que guarda. El tipo de dato no se casa con el identificador.

- **Multi paradigma** se puede utilizar POO, programación funcional, programación declarada. Puede tener sentencias declarativas y sentencias imperativas.

- **Case sensible** es sensible a mayúsculas y minúsculas.

- No necesita los **;** al final de cada línea, algunos desarrolladores dicen que se debe poner ; para buena práctica. Si es necesario si se hacen varias declaraciones en un mismo renglón.

---

### Escritura de código

- Los identificadores deben comenzar con: una **letra** o el signo **$** o un **_**. Nunca con números o caracteres especiales. Tampoco se puede repetir el nombre del identificador para declarar otra cosa.


- Usa **snake_case** en archivos, por ejemplo _ mi_archivo_javascript.js


- Usa **UPPER_CASE** en constantes, por ejemplo 
```
const UNA_CONSTANTE = "Soy una constante",
   PI = 3.141592653589793;
```


- Usa **UpperCamelCase** es clases, por ejemplo:

```
class SerHumano {
   constructor (nombre, genero) {
     this.nombre = nombre
     this.genero = genero
   }
   miNombreEs() {
     return `Mi nombre es ${this.nombre}`
   }
}
```

- Usa **lowerCamelCase** en:

*objetos*, por ejemplo:

```
const unObjetos = {
  nombre: 'María Eugenia',
  email: 'costamariaeugenia1@gmail.com'
}
```

*primitivos*, por ejemplo:

```
let unaCadena = 'Hola mundo',
   unNumero = 19,
   unBoolean = true;
```

*funciones*, por ejemplo:

```
function holaMundo (nombre) {
   alert(`Hola mundo $(nombre)`)
}

holaMundo('Euge')
```


*instancias*, por ejemplo:

```
const ajax = new XMLHttpRequest(),
   jon = new serHumano('Jonotan', 'Hombre')
```

### Palabras reservadas

A: abstract

B: boolean, break, byte

C: case, catch, char, class, const, continue

D: debugger, default, delete, do, double

E: else, enum, export, extends

F: false, final, finally, float, for, function

G: goto

I: if, implements, import, in, instanceof, int, interface

L: long

N: native, new, null

P: package, private, protected, public

R: return

S: short, static, super, switch, synchronized

T: this, throw, throws, transient, true, try, typeof

V: var, volatile, void

W: while, with


## Ordenamiento de código

1- importación de módulos

2- declaración de variables

3- declaración de funciones

4- ejecución de código, como crear una instancia de una clase, mandar a lalmar métodos de un objeto,  asignar eventos, etc.

---

## Tipos de datos en JS

1- **Primitivos**, se accede directamente al valor:

String

Number

Boolean

Null

Undefined

NaN

2- **Compuestos** se accede a la referencia del valor

object = {}

array = []

function () {}

Class {}

--

[Artículo: ¿Qué es ECMAScript?](https://jonmircha.com/ecmascript)

---