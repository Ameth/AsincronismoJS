/* Llamados a una API con XMLHTTP Request */

/*
Existen 5 estados en un llamado XMLHttpRequest:

    0 → Se ha inicializado.
    1 → Loading (cargando).
    2 → Se ha cargado, se ha llamado a send().
    3 → Procesamiento si existe alguna descarga.
    4 → Completado.

Métodos y propiedades:

    xmlhttp.open() → Prepara la petición para ser enviada tomando tres parámetros: prótocolo, url, asíncrono (true).
    xmlhttp.readyState → Retorna el estado de la petición.
    xmlhttp.onreadystatechange → Recibe una función, un eventHandler, que es llamado cuando la propiedad readyState cambia.
    xmlhttp.status → Retorna el estado de la respuesta de la petición. (200,400,500)
    xmlhttp.send() → Envía la petición.

*/
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://api.escuelajs.co/api/v1'

// Función principal que obtendrá la información del producto como un objeto
function fetchData (urlAPI, callback) {
  // Inicializamos un objeto con la instancia del XMLHttpRequest
  let xhttp = new XMLHttpRequest()

  // El metodo open() crea la solicitud de la petición, recibe 5 parámetros: el metodo (get, post, etc), la url, si es asincrono o no, el usuario y la contraseña
  // Es este ejemplo solo utilizaremos el metodo, la url y el async.
  xhttp.open('GET', urlAPI, true)

  // onreadystatechange recibe una función que se va a ejecutar cada vez que cambie el estado de la petición (estado 1, estado 2, estado 3..etc)
  xhttp.onreadystatechange = function (event) {
    // Si ya se ha completado (estado 4)
    if (xhttp.readyState === 4) {
      // Si la petición respondio exitosamente (statusCode 200-OK)
      if (xhttp.status === 200) {
        // Se ejecuta el callbakc recibido como argumento de la función principal (fetchData)
        // responseText recibe lo que entrega el servidor en texto plano, se hace la conversión a JSON para obtenerlo como objeto
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        // Si ocurre un error, creamos el mensaje de Error y al callback le pasamos en la respuesta de la información un null debido a que no se pudo obtener nada
        const error = new Error(`Error en la petición a ${urlAPI}`)
        return callback(error, null)
      }
    }
  }

  // Enviamos la petición
  xhttp.send()
}

// Llamamos a la función, pasandole como argumentos la API y una función anónima como callback que recibe dos parámetros: error y data.
// error -> Me devuelve un error si existe, sino viene null
// data -> Trae el objeto con la respuesta del servidor

// Este código es un ejemplo de callback hell (anidar callbacks dentro de otros callbacks), por lo que se debería evitar su uso por completo.
fetchData(`${API}/products`, (error1, data1) => {
  if (error1) {
    return console.error(error1)
  }
  //   console.log(data1[0])
  // Usamos de ejemplo el indice 2 del arreglo que trae la respuesta del servidor
  fetchData(`${API}/products/${data1[2].id}`, (error2, data2) => {
    if (error2) {
      return console.error(error2)
    }
    // Usamos el optional chaining '?' para que si no encuentra el valor, no arroje error
    fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
      if (error3) {
        return console.error(error3)
      }
      console.log(data1[2])
      console.log(data2.title)
      console.log(data3.name)
    })
  })
})
