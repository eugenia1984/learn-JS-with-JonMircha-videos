# Asincronía

En JavaScript tenemos

- **setTomeout()** que recibe una callback, una función que va a ejecuta y un tiempo expresado en milisegundos (es el tiempo que se v aa esperar hasta que se comience a ejecutar).

- **setInterval()** en base a un intervalo de tiempo quiero ejecutar determinadas acciones, se va a ejecutar más de una vez. También recibe una función y un intervalo de tiempo

Ejemplo en código:

Voy a ver en consola el mensaje *Inicio* y luego de 3 segundos veo el mensaje *Ejecutando un setTimeout, esto se ejecuta una sola vez* 

```JavaScript
console.log('Inicio');
setTimeout(() => {
  console.log('Ejecutando un setTimeout, esto se ejecuta una sola vez');
}, 3000);
```

Pero si agrego un setTimeOut lo voy a estar ejecutando más de una vez, con el intervalo de tiempo que aclaro como segundo parametro.

```JavaScript
setInterval(() => {
  console.log('Ejecutando un setInterval, esto se ejecuta indefinidamente, cada cierto intervalo de tiempo');
}, 1000);
```

Para mostrar como cambia la hora segundo a segundo, utilizando el método **.toLocaleTimeString()** del Object **Date** sería una especie de *reloj*:

```JavaScript
setInterval( () => {
  console.log(new Date().toLocaleTimeString());
}, 1000);
```

---

Tanto el **.setTimeout()** y el **.setInteval()** tienen sus funcniones que los cancelan.

Para que este funcionen tanto el .setTimeout() como el .setInterval() debe estar guardados en una variable.

- **.setTimeout** -> **.clearTimeout()**

Se estaría ejecutando la segundo este setTimeout, peor comoinmediatamente tengo el clearTimeout, entonces nunca se imprime en pantalla.

```JavaScript
let temporizador = setTimeout(() => {
  console.log('Un setTimeout que se cancela con clearTimeout');
}, 3000);

clearTimeout(temporizador);
```


- **.setInteval()** -> **.clearInterval()**

```JavaScript
let temporizador2 = setInterval(() => {
  console.log('Un setInterval que se cancela con un claerInterval');
}, 1000);

clearInterval(temporizador2);
```

---

## Asincronía

La asincronía es uno de los pilares fundamentales de Javascript, ya que es un lenguaje de programación de **un sólo subproceso o hilo** (**single thread**), lo que significa que *sólo puede ejecutar una cosa a la vez*.

Si bien los idiomas de un sólo hilo simplifican la escritura de código porque no tiene que preocuparse por los problemas de concurrencia, esto también significa que *no puede realizar operaciones largas como el acceso a la red sin bloquear el hilo principal*.

Imagina que solicitas datos de una API. Dependiendo de la situación, el servidor puede tardar un tiempo en procesar la solicitud mientras bloquea el hilo principal y hace que la página web no responda.

Ahí es donde entra en juego la asincronía que permite realizar largas solicitudes de red sin bloquear el hilo principal.

JavaScript fue diseñado para ser ejecutado en navegadores, trabajar con peticiones sobre la red y procesar las interacciones de usuario, al tiempo que mantiene una interfaz fluida.

Javascript usa un modelo asíncrono y no bloqueante, con un loop de eventos implementado en un sólo hilo, (single thread) para operaciones de entrada y salida (input/output).

Gracias a esta solución, Javascript es áltamente concurrente a pesar de emplear un sólo hilo.

Antes de explicar como funciona el modelo de JavaScript es importante entender algunos conceptos:


### Procesamiento Single thread (Hilo único) y Multi thread (Hilos múltples)

Un hilo la unidad básica de ejecución de un proceso, cada que abres un programa como el navegador o tu editor de código, se levanta un proceso en tu computadora e internamente este puede tener uno o varios hilos (threads) ejecutándose para que el proceso funcione.

### Operaciones de CPU y Operaciones de I/O (Entrada y Salida)

Operaciones CPU: Aquellas que pasan el mayor tiempo consumiendo Procesos del CPU, por ejemplo, la escritura de ficheros.
Operaciones de Entrada y Salida: Aquellas que pasan la mayor parte del tiempo esperando la respuesta de una petición o recurso, como la solicitud a una API o BD.

### Operaciones Concurrentes y Paralelas

Concurrencia: cuando dos o más tareas progresan simultáneamente.
Paralelismo: cuando dos o más tareas se ejecutan, al mismo tiempo.


## Operaciones Bloqueante y No Bloqueante

Se refiere a como la fase de espera de las operaciones afectan a nuestra aplicación:

Bloqueante: Son operaciones que no devuelven el control a nuestra aplicación hasta que se ha completado. Por tanto el thread queda bloqueado en estado de espera.

No Bloqueante: Son operaciones que devuelven inmediatamente el control a nuestra aplicación, independientemente del resultado de esta. En caso de que se haya completado, devolverá los datos solicitados. En caso contrario (si la operación no ha podido ser satisfecha) podría devolver un código de error.

### Síncrono y Asíncrono

Se refiere a ¿cuándo tendrá lugar la respuesta?:

Síncrono: La respuesta sucede en el presente, una operación síncrona esperará el resultado.

Asíncrono: La respuesta sucede a futuro, una operación asíncrona no esperará el resultado.

Con lo anterior en JavaScript podemos tener:

- Código síncrono y bloqueante 

- Código asíncrono y no bloquenate

### JavaScript Síncrono

Cada operación se hace de una vez, bloqueando el flujo de ejecución, el hilo es bloqueado mientras espera la respuesta, cuando esta se procesa pasa a la siguiente operación y así sucesivamente al terminar todas las operaciones.

```JavaScript
console.log("Inicio");

function dos() {
  console.log("Dos");
}

function uno() {
  console.log("Uno");
  dos();
  console.log("Tres");
}

uno();
console.log("Fin");
```

El resultado en consola es:
```
Inicio
Uno
Dos
Tres
Fin
```

### JavaScript Asíncrono

Cada operación se ejecuta y devuelve inmediatamente el control al hilo, evitando el bloqueo, cuando cada operación termine se enviará una notificación de que ha terminado, es entonces cuando la respuesta se encolará para ser procesada.

```JavaScript
console.log("Inicio");

function dos() {
  setTimeout(function () {
    console.log("Dos");
  }, 1000);
}

function uno() {
  setTimeout(function () {
    console.log("Uno");
  }, 0);
  dos();
  console.log("Tres");
}

uno();
console.log("Fin");
```


El resultado en consola es:
```
Inicio
Tres
Fin
Uno
Dos
Ver Video
```

### Mecanismos asíncronos en JavaScript

Para controlar la asincronía, JavaScript cuenta con algunos mecanismos:

- Callbacks

- Promises

- Async / Await

#### Callbacks

Una callback (llamada de vuelta) es una función que se ejecutará después de que otra lo haga.

Es un mecanismo para asegurar que cierto código no se ejecute hasta que otro haya terminado.

Al ser JavaScript un lenguaje orientado a eventos, las callbacks son una buena técnica para controlar la asíncronía, sin embargo... Callback Hell 😈🤘.

```JavaScript
function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}

cuadradoCallback(0, (value, result) => {
  console.log("Inicia Callback");
  console.log(`Callback: ${value}, ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log(`Callback: ${value}, ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(4, (value, result) => {
          console.log(`Callback: ${value}, ${result}`);
          cuadradoCallback(5, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            console.log("Fin Callback");
            console.log("Callback Hell !!!!!😈🤘");
            console.log("http://callbackhell.com/");
          });
        });
      });
    });
  });
});
```

#### Promises
Una promesa es un objeto que representa el resultado de una operación asíncrona y tiene 3 estados posibles:

1- Pendiente.

2- Resuelta.

3- Rechazada.

Tienen la particularidad de que se pueden encadenar (then), siendo el resultado de una promesa, los datos de entrada de otra posible función.

Las promesas mantienen un código más legible y mantenible que las callbacks, además tienen un mecanismo para la detección de errores (catch) que es posible usar en cualquier parte del flujo de datos.

```JavaScript
function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      `Error, el valor " ${value} " ingresado no es un número`
    );
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

cuadradoPromise(0)
  .then((obj) => {
    //console.log(obj);
    console.log("Inicio Promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise("4");
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Fin Promise");
  })
  .catch((err) => console.error(err));
```


#### Async / Await

Las promesas fueron una gran mejora respecto a las callbacks para controlar la asincronía en JavaScript, sin embargo pueden llegar a ser muy verbosas a medida que se requieran más y más métodos .then().

Las funciones asíncronas (async / await) surgen para simplificar el manejo de las promesas.

La palabra async declara una función como asíncrona e indica que una promesa será automáticamente devuelta.

Podemos declarar como async funciones con nombre, anónimas o funciones flecha.

La palabra await debe ser usado siempre dentro de una función declarada como async y esperará de forma asíncrona y no bloqueante a que una promesa se resuelva o rechace.

```JavaScript
function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      `Error, el valor " ${value} " ingresado no es un número`
    );
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

async function funcionAsincronaDeclarada() {
  try {
    console.log("Inicio Async Function");

    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise("3");
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(5);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    console.log("Fin Async Function");
  } catch (err) {
    console.error(err);
  }
}

funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async () => {
  try {
    console.log("Inicio Async Function");

    let obj = await cuadradoPromise(6);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(7);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(8);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise("9");
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(10);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    console.log("Fin Async Function");
  } catch (err) {
    console.error(err);
  }
};

funcionAsincronaExpresada();
```
