import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

const postData = (urlAPI, data) => {
  const respuesta = fetch(urlAPI, {
    method: 'post',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return respuesta
}

const newProd = {
  title: 'JW Stream Studio',
  price: 10,
  description: 'Software to broadcast meetings',
  categoryId: 2,
  images: [
    'https://assetsnffrgf-a.akamaihd.net/assets/m/502012123/univ/art/502012123_univ_lsr_xl.jpg'
  ]
}

postData(`${API}/products/`, newProd)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(error => console.log(error))
