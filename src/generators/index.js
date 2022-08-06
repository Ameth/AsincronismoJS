/*
Un generador en JavaScript consta de una función generadora que muestra un objeto iterable Generator. 
La palabra reservada yield se usa para pausar y reanudar una función generadora.
*/

function * gen () {
  yield 1
  yield 2
  yield 3
}

const g = gen()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())

function * iterable (array) {
  for (let value of array) {
    yield value
  }
}

const it = iterable([
  'Ameth',
  'Andres',
  'Victor',
  'Ronald',
  'Juan',
  'Edward',
  'Elkin'
])

/*
next() permite acceder a la función del generador y obtener un objeto yield con dos valores: value y done.
  value -> El valor actual del yield
  done -> Indica si ya no hay más yields por recorrer, o si ya está completado
*/
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value) // undefined
