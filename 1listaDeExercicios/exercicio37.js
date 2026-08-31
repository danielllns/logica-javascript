function progressaoAritmetica(n, a1, r) {
    let termos = []
    let soma = 0
    let termoAtual = a1
    
    for (let i = 0; i < n; i++) {
        termos.push(termoAtual)
        soma += termoAtual
        termoAtual += r
    }
    
    console.log("--- Progressão Aritmética (PA) ---")
    console.log("Termos: ", termos)
    console.log(`Soma dos elementos: ${soma}\n`)
} 

function progressaoGeometrica(n, a1, r) {
    let termos = []
    let soma = 0
    let termoAtual = a1

    for (let i = 0; i < n; i++) {
        termos.push(termoAtual)
        soma += termoAtual
        termoAtual *= r
    }
    
    console.log("--- Progressão Geométrica (PG) ---")
    console.log("Termos: ", termos)
    console.log(`Soma dos elementos: ${soma}\n`)
}

progressaoAritmetica(10, 10, 15)
progressaoGeometrica(10, 5, 3)
