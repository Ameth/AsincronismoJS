// Callbakcs

function suma (num1, num2) {
  return num1 + num2
}

function calc (num1, num2, callbakc) {
  return callbakc(num1, num2)
}

console.log(calc(5, 5, suma))

// setTimeout ya de por si es una función que recibe un callback
setTimeout(() => {
  console.log('Hola JS World!')
}, 2000)

function saludar (name) {
  console.log(`Hola ${name}`)
}

// El último argumento que se le pasa a setTimeout son los parámetros de la función callback (handler) que se le pasa para ejecutar
setTimeout(saludar, 3000, 'Ameth')
