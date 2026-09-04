const simboloMais = quantidade => {
    let simbolo = ""
    for(let i = 0; i < quantidade; i++) {
        simbolo += "+"
    }
    return simbolo 
}

console.log(simboloMais(5))