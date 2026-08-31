function calculaAnoBisexto(ano) {
    if (ano % 400 === 0) {
        return true
    } else if (ano % 100 === 0) {
        return false
    } else if  (ano % 4 === 0) {
        return true
    }
    return false
}

console.log(calculaAnoBisexto(2000))
console.log(calculaAnoBisexto(1000))
console.log(calculaAnoBisexto(4000))