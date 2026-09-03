function calculadora (num1,operacao, num2) {
    switch (operacao) {
        case '+': return num1 + num2
        case '-': return num1 - num2
        case '*': return num1 * num2
        case '/': return num1 / num2
        default: return "Opção inválida"
    }
}

console.log(calculadora(2,'+', 3))
console.log(calculadora(4,'-', 2))
console.log(calculadora(3,'*', 6))
console.log(calculadora(6,'/',3))
console.log(calculadora(1,'_',10))