const catalogo = [
    {
        id: 1,
        titulo: 'Onde os Fracos Não Têm Vez',
        tipo: 'filme',
        ano: 2007,
        generos: ['Suspense'],
        nota: 8.1,
        assistido: true
    },
    {
        id: 2,
        titulo: 'Breaking Bad',
        tipo: 'série',
        ano: 2008,
        generos: ['Drama', 'Crime', 'Ação'],
        nota: 9.5,
        assistido: true
    },
    {
        id: 3,
        titulo: 'O Poderoso Chefão',
        tipo: 'filme',
        ano: 1972,
        generos: ['Crime', 'Drama'],
        nota: 9.2,
        assistido: false
    },
    {
        id: 4,
        titulo: 'Stranger Things',
        tipo: 'série',
        ano: 2016,
        generos: ['Drama', 'Fantasia', 'Terror'],
        nota: 8.7,
        assistido: true
    },
    {
        id: 5,
        titulo: 'Star Wars 2: O Império Contra-Ataca',
        tipo: 'filme',
        ano: 1980,
        generos: ['Ficção Científica'],
        nota: 8.8,
        assistido: false
    },
    {
        id: 6,
        titulo: 'Game of Thrones',
        tipo: 'série',
        ano: 2011,
        generos: ['Drama', 'Fantasia', 'Ação'],
        nota: 9.3,
        assistido: true
    }
];

console.log(catalogo[0].titulo)
console.log(catalogo[5].ano)
console.log(catalogo[2].generos[1])

catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`)
})

const titulosEmCaixaAlta = catalogo.map(item => {
    return item.titulo.toUpperCase()
})
console.log(titulosEmCaixaAlta)

const naoAssitidos = catalogo.filter(item => {
    return item.assistido === false
})
console.log(naoAssitidos)
console.log(`Existem ${naoAssitidos.length} itens não assistidos`)

const notaMaior9 = catalogo.find(item => {
    return item.nota >= 9
})

if (notaMaior9) {
    console.log(`Título: ${notaMaior9.titulo}`)
    console.log(`Nota: ${notaMaior9.nota}`)
} else {
    console.log("Nenhum item com nota maior ou igual a nove foi encontrado!")
}

const somaNotas = catalogo.reduce((acumulador, item) => {
    return acumulador + item.nota
}, 0)

const mediaGeral = somaNotas / catalogo.length
console.log(`Média geral: ${mediaGeral.toFixed(2)}`)

const assistidos = catalogo.filter(item => item.assistido === true)
const somaAssitidos = assistidos.reduce((acumulador, item) => {
    return acumulador + item.nota
}, 0)
const mediaAssistidos = somaAssitidos / assistidos.length
console.log(`Média dos assistidos: ${mediaAssistidos.toFixed(2)}`)

const existeItemAntigo = catalogo.some(item => item.ano < 2000)

const todosTemGenero = catalogo.every(item => {
    return item.generos.length >= 1
})

console.log(`Existe item anterior a 2000? ${existeItemAntigo}`)
console.log(`Todos possuem pelo menos 1 gênero? ${todosTemGenero}`)

const output = document.getElementById("output")
const totalItens = catalogo.length
const quantidadeFilmes = catalogo.filter(item => item.tipo === "filme").length
const quantidadeSeries = catalogo.filter(item => item.tipo === "série").length
const naoAssistidos = catalogo.filter(item => item.assistido === false).length
const mediaNotas = catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3)

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>
    <p>Total de itens: ${totalItens}</p>
    <p>Quantidade de filmes: ${quantidadeFilmes}</p>
    <p>Quantidade de séries: ${quantidadeSeries}</p>
    <p>Quantidade de não assistidos: ${naoAssistidos}</p>
    <p>Média geral das notas: ${mediaNotas.toFixed(2)}</p>
    <h3>Top 3 maiores notas</h3>
    <ol>
        ${ranking.map(item => `
            <li>
                ${item.titulo} - Nota ${item.nota}
            </li>
        `).join("")}
    </ol>
`;
