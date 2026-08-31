function calcularFatorial (num) {
    if (num === 0) return 1
    else {
        return num * calcularFatorial(num - 1)
    }
}

console.log(calcularFatorial(10))