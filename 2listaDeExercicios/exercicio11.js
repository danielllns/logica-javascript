const receberPrimeiroEUltimoElemento = (elementos) => {
    return [elementos[0], elementos[elementos.length -1]]
}

console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]))