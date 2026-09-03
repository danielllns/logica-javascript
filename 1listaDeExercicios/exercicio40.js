function converterParaConceitos (vetorNotas) {
    console.log("--- Tabela de Conceitos ---")
    vetorNotas.forEach(nota => {
        let conceito = ""
        
        if(nota >= 9.0 && nota <= 10.0) {
            conceito = "A"
        } 
        else if (nota >= 7.0 && nota <= 9.0) {
            conceito = "B"
        }
        else if (nota >= 5.0 && nota <= 7.0) {
            conceito = "C"
        }
        else if (nota >= 0.0 && nota <= 5.0) {
            conceito = "D"
        } else {
            conceito = "Nota inválida (fora do range 0-10)"
        }

        console.log(`Nota: ${nota.toFixed(1)} -> Conceito: ${conceito}`)
    });

    console.log("------------------------\n")
}

let notasDaTurma = [10.0, 8.95, 7.3, 6.9, 5.0, 4.9, 2.5, -2]

converterParaConceitos(notasDaTurma)