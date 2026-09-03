const maiorOuIgual = (n1, n2) => typeof n1 === typeof n2 && n1 >= n2 

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))