function anuidade (mes, valorDaAnuidade) {
    if (mes > 0 && mes < 13) {
        let atraso = mes - 1
        return (valorDaAnuidade * ((1 + 0.05) ** atraso)).toFixed(2)
    } else {
        return "Mês inválido"
    }
}

console.log(anuidade(4, 100))