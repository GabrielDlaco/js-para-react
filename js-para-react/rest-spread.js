// Spread ou espalhament

const frutas = ["banana", "maça", "uva", "melão"]

// frutas.pop()
// frutas.push("laranja")

const novasFrutas = ["melancia", "jabuticaba", ...frutas, "pitanga"]

console.log(novasFrutas)

//Utilizando o spread em uma nova função

numeros = [2,3,5]

const soma = (a,b,c) => {
    console.log(a + b + c);
}

soma(...numeros)

//rest

const SomaRest = (...valores) => {
    return valores.reduce((anterior, atual) => anterior + atual)
}

console.log(SomaRest(1,2,3,5))
console.log(SomaRest(10,25,40, 85))

//Exercicio

//Crie uma função que receba o nome e as notas dos alunos. O primeiro argumento será o nome e o segundo serão as notas. O retorno dessa função deve apresentar o nome e a média desse estudante.

const MediaAluno = (nome, ...notas) => {
    const media = notas.reduce((anterior, atual) => anterior + atual) / notas.length
    console.log(`Nome:${nome} Média:${media.toFixed(1)}`)
}

MediaAluno("Gabriel", 6, 7, 8)