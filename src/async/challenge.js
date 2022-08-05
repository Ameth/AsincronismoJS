import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

const fetchData = async urlAPI => {
  const res = await fetch(urlAPI)
  const data = await res.json()
  return data
}

const traerDatos = async () => {
  try {
    const productos = await fetchData(`${API}/products`)
    const prod = await fetchData(`${API}/products/${productos[2].id}`)
    const category = await fetchData(`${API}/categories/${prod?.category?.id}`)

    console.log(productos[2])
    console.log(prod.title)
    console.log(category.name)
  } catch (error) {
    console.log(error)
  }
}

traerDatos()
