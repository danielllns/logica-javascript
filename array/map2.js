const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços
/*
const dadosTratados = carrinho.map(function (e) {
    let objeto = JSON.parse(e)
    return objeto.preco
})

console.log(dadosTratados)
*/

/* Ou com Arrow Functions

const dadosTratados = carrinho.map(e => JSON.parse(e).preco)
console.log(dadosTratados)
*/

//Método do professor

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)