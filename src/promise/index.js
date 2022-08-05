/* Promesas en JavaScript */

const promise = new Promise(function (resolver, rechazar) {
  resolver('Genial!👍')
})

const vacas = 20

const contarVacas = new Promise((resolver, rechazar) => {
  if (vacas > 10) {
    resolver(`Tenemos ${vacas} vaca(s) en la granja 🐄`)
  } else {
    rechazar(`No contamos con suficientes vacas 😢`)
  }
})

contarVacas
  .then(resultado => {
    console.log(resultado)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => console.log('Promesa finalizada!')) // Se ejecuta independientemente del resultado
