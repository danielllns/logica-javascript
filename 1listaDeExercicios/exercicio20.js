function totalDeNotas (valorSaque) {
    console.log('Qual o valorSaque do saque? R$ ' + valorSaque.toFixed(2))
    
    let notas100 = Math.floor(valorSaque / 100)
    
    valorSaque = valorSaque % 100

    let notas50 = Math.floor(valorSaque / 50)
    
    valorSaque = valorSaque % 50

    let notas10 = Math.floor(valorSaque / 10)

    valorSaque = valorSaque % 10

    let notas5 = Math.floor(valorSaque / 5)

    valorSaque = valorSaque % 5
    
    let notas1 = Math.floor(valorSaque / 1)

    valorSaque = valorSaque % 1

    let resultado = ""

    if (notas100 > 0) {
        resultado += `${notas100} nota(s) de R$ 100. `
    }
    if(notas50 > 0) {
        resultado += `${notas50} nota(s) de R$ 50. `
    }
    if(notas10 > 0) {
        resultado += `${notas10} nota(s) de R$ 10. `
    }
    if(notas5 > 0) {
        resultado += `${notas5} nota(s) de R$ 5. `
    }
    if(notas1 > 0) {
        resultado += `${notas1} nota(s) de R$ 1. `
    }

    console.log(resultado)
}

totalDeNotas(153)