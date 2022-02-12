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

# :start: Objetos complejos

## Funciones


 Funciones - #jonmircha     ********** */


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

```JavaScript
funcionDeclarada();

function funcionDeclarada() {
  console.log("Esto es un función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada");
} 

funcionDeclarada();

funcionExpresada();

//función anónima
const funcionExpresada = function () {
  console.log("Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición JS nos dirá 'Cannot access 'funcionExpresada' before initialization'")
} 

funcionExpresada();
```