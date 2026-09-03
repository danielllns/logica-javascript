function imprimirImpares (inicio = 0, fim = 100) {
    if (inicio > fim) {
        let variavelTemporaria = inicio
        inicio = fim
        fim = variavelTemporaria
    }
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}

imprimirImpares(15, 5)
imprimirImpares()