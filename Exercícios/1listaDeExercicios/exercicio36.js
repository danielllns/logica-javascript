let vetor = [1, 2, 3, 4, 5, 6, 10]

function multiplicaVetor (vetor, multiplicador) {
    let vetorResultado1 = []
    vetor.forEach(elemento => {
        vetorResultado1.push(elemento * multiplicador)
    })

    return vetorResultado1
}

function multiplicaVetorSeMaiorQue5 (vetor, multiplicador) {
    let vetorResultado2 = []
    vetor.forEach(elemento => {
        if (elemento > 5) {
            vetorResultado2.push(elemento * multiplicador)
        } else {
            vetorResultado2.push(elemento)
        }
    })
    
    return vetorResultado2
}

console.log("Multiplica Todos x3: ", multiplicaVetor(vetor, 3))
console.log("Multiplica maior que 5 x11: ", multiplicaVetorSeMaiorQue5(vetor, 11))