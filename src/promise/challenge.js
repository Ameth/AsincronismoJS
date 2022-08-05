/* 
Para que se pueda utilizar el import, se debe tratar como un módulo.
Para eso hay que agregar en el package.json la clave "type": "module"
*/
import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

const fetchData = urlAPI => {
  return fetch(urlAPI)
}

// fetchData(`${API}/products`)
//   .then((respuesta) => respuesta.json())
//   .then((prod) => console.log(prod))
//   .then(() => console.log("Otro then cualquiera"))
//   .catch((error) => console.log(error));

fetchData(`${API}/products`)
  .then(res => res.json())
  .then(productos => {
    console.log(productos[2])
    return fetchData(`${API}/products/${productos[2].id}`)
  })
  .then(res => res.json())
  .then(prod => {
    console.log(prod.title)
    return fetchData(`${API}/categories/${prod?.category?.id}`)
  })
  .then(res => res.json())
  .then(category => console.log(category.name))
  .catch(error => console.log(error))
