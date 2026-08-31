function cardapioLanchonete (codigo, quantidade) {
    switch (codigo) {
        case 100: 
        return `Cachorro Quente: R$ ${(3.00 * quantidade).toFixed(2)}`
        case 200: 
        return `Hambúrguer: R$ ${(4.00 * quantidade).toFixed(2)}`
        case 300: 
        return `Cheeseburguer: R$ ${(5,50 * quantidade).toFixed(2)}`
        case 400: 
        return `Bauru: R$ ${(7,50 * quantidade).toFixed(2)}`
        case 500: 
        return `Refrigerante: R$ ${(3.50 * quantidade).toFixed(2)}`
        case 600: 
        return  `Suco: R$ ${(2.80 * quantidade).toFixed(2)}`
        default: 
    }
        return 'Esse produto não existe'  
} 

console.log(cardapioLanchonete(100,2))
console.log(cardapioLanchonete(200,2))
console.log(cardapioLanchonete(300,2))
console.log(cardapioLanchonete(400,2))
console.log(cardapioLanchonete(500,2))
console.log(cardapioLanchonete(600,2))
console.log(cardapioLanchonete(700,2))