function verificarLetras (string1, string2) {
    let str1 = string1.toLowerCase()
    let str2 = string2.toLowerCase()
    
    for (let i = 0; i < str1.length; i++) {
        let letraAtual = str1[i]

        if (!str2.includes(letraAtual)) {
            return false
        }
    }

    for (let i = 0; i < str2.length; i++) {
        let letraAtual = str2[i]
        
        if (!str1.includes(letraAtual)) {
            return false
        }
    }

    return true
}

console.log(verificarLetras("Amora", "roma"))
console.log(verificarLetras("Gato", "Toga"))
console.log(verificarLetras("Bola", "Bolo"))