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