console.log('Inicio');

setTimeout(() => {
  console.log('Ejecutando un setTimeout, esto se ejecuta una sola vez');
}, 3000);

setInterval(() => {
  console.log('Ejecutando un setInterval, esto se ejecuta indefinidamente, cada cierto intervalo de tiempo');
}, 1000);

setInterval( () => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

// setTimeout y clearTimeout
let temporizador = setTimeout(() => {
  console.log('Un setTimeout que se cancela con clearTimeout');
}, 3000);

clearTimeout(temporizador);
console.log('Depués del clearTimeout');

// setInterval y clearInterval
let temporizador2 = setInterval(() => {
  console.log('Un setInterval que se cancela con un claerInterval');
}, 1000);

clearInterval(temporizador2);

console.log('Depués del clearInterval');