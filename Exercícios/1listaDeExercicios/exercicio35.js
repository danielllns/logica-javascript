let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 9, 10]

/*for (let i = 0; i < vetorAdiciona.length; i++) {
    let numeroDaVez =  vetorAdiciona[i]
    vetorPilha.push(numeroDaVez)
}
*/
vetorPilha.push(...vetorAdiciona)

console.log("Vetor Pilha modificado: ", vetorPilha)
console.log("Vetor Adiciona original ", vetorAdiciona)