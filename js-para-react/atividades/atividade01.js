//Dado um array de números inteiros, utilize o método filter para criar um novo array apenas com os números pares

// const numeros = [10, 15, 20, 25, 30, 35, 40]

// const numerosPares = numeros.filter((numeros) => numeros%2 == 0)

// console.log(numerosPares)

// //Dado um array de nomes utilize o map para cirar um novo array onde todos os nomes estejam em letras maíusculas. Dica: Use o toUpperCase()

// const nomes = ["ana", "joão", "maria", "carlos"]

// const nomesMaiusculo = nomes.map ((nomes) => nomes.toUpperCase())

// console.log(nomesMaiusculo)

//Usando um reduce, calcule a soma de todos os números do array abaixo

// const numeros = [5, 10, 15, 20]

// const soma = numeros.reduce((a, b) => a + b)

// console.log(soma)

//Utilize includes para verificar se o nome "Carlos" está presente no array abaixo.

// const alunos = ["Ana", "Bruno", "Carlos", "Daniela"]

// const encotrar = alunos.map ((alunos) => alunos.includes("Carlos"))

// console.log(encotrar)

//Você tem um array de objetos representando produtos. Filtre apenas os produtos que custam menos de R$50

// const produtos = [
//     {nome: "Teclado", preco: 80},
//     {nome: "Mouse", preco: 40},
//     {nome: "Monitor", preco: 500},
//     {nome: "Cabo USB", preco: 25},
// ]

// const produtosAbaixoDe50 = produtos.filter ((produtos) => produtos.preco < 50)

// console.log(produtosAbaixoDe50)

//Usando map, crie um novo array onde todos os valores sejam o dobro do original

// const numeros = [2, 4, 6, 8]

// const dobro = numeros.map ((numeros) => numeros*2)

// console.log(dobro)

//Dado um array de palavras, use reduce para contar quantas letras existem no total

// const palavras = ["casa", "janela", "porta", "telhado"]

// const encotrarPalavras = palavras.map((palavras) => palavras.length)
// const soma = encotrarLetras.reduce((a, b) => a + b)

// console.log(soma)

//Considere um array de alunos com nome e nota. Filtre apenas os alunos que tem têm nota maior ou igual a 7.

const alunos = [
    {nome: "Ana", nota: 8},
    {nome: "João", nota: 5},
    {nome: "Marcos", nota: 7},
    {nome: "Carla", nota: 6},
]

const encontrarNotaMaiorOuIgual7 = alunos.filter((alunos) => alunos.nota >= 7)

console.log(encontrarNotaMaiorOuIgual7)

//Usando reduce, calcule o produto (multiplicação) de todos os números no array

const numeros = [2, 3, 4, 5]

const multiplicacao = numeros.reduce ((anterior, atual) => anterior * atual)

console.log(multiplicacao)