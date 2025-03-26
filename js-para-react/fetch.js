// Fetch é uma intefaco de javascript para trabalhar com requisições HTTP.

fetch("https://rickandmorty.com/api/character")
    .then((response) => response.json())
    .then((json) => console.log(json))

// ASYNC / AWAIT
// Fetch vai nos retornar uma promessa (promise). Podemos criar uma função assincrona que irão esperar o código resolver, antes de continuar com o código.

const fetchPersonagens = async (url) => {
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
}

fetch("https://rickandmorty.com/api/character")