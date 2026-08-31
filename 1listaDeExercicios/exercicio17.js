function aumentoSalarial (plano, salario) {
    switch(plano) {
        case 'A': return (salario + (salario * 10/100)).toFixed(2)
        case 'B': return (salario + (salario * 15/100)).toFixed(2)
        case 'C': return (salario + (salario * 20/100)).toFixed(2)
        default: return 'Opção inválida'
    }
}

console.log(aumentoSalarial('A', 1600))
console.log(aumentoSalarial('B', 1600))
console.log(aumentoSalarial('C', 1600))