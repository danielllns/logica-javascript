function mediaAritimetica (vetorNumeros) {
    let soma = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        soma += vetorNumeros[i]
    }
    let media = soma / vetorNumeros.length

    return `A media dos valores é: ${media}`
}

let numerosTeste = [10, 20, 30, 40] 
console.log(mediaAritimetica(numerosTeste))
