function trocaDePosicao (vetorA, vetorB) {
    for (i = 0; i < vetorA.length; i++) {
        [vetorA[i], vetorB[i]] = [vetorB[i], vetorA[i]] 
    }

    console.log("Moderno - Vetor A Novo: ", vetorA)
    console.log("Moderno - Vetor B Novo: ", vetorB)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaDePosicao(vetorA, vetorB)