function MontanteJurosSimples (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return montante = (capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicacao)).toFixed(2).replace(".",",")
}

function JurosCompostos (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return montante = (capitalInicial * (1 + taxaDeJuros)**tempoDeAplicacao).toFixed(2).replace(',',",")
}

console.log(MontanteJurosSimples(1000,0.1,2))
console.log(JurosCompostos(1000,0.1,2))