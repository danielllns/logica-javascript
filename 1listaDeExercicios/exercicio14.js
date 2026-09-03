function temOuNaoFruta (fruta) {
    switch (fruta) {
        case "maçã": 
            return "Não vendemos esta fruta aqui"
        case "kiwi": 
            return "Estamos com escassez de kiwis."
        case "melancia": 
            return "Aqui está, são 3 reais o quilo"
        default: 
            return"Erro: Fruta inválida"
    }
} 

    console.log(temOuNaoFruta("maçã"))
    console.log(temOuNaoFruta("kiwi"))
    console.log(temOuNaoFruta("melancia"))
    console.log(temOuNaoFruta("banana"))