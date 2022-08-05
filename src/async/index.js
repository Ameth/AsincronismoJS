const fnAsync = () => {
  return new Promise((resolver, rechazar) => {
    true
      ? setTimeout(() => resolver('Async!!'), 2000)
      : rechazar(new Error('Error 😢'))
  })
}

const otraFunction = async () => {
  const name = await fnAsync()
  console.log(name)
  console.log('Hello!')
}

console.log('Antes')
otraFunction()
console.log('Despues')
