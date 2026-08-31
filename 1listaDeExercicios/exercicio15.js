function carroIdeal (carro) {
    switch (carro) {
        case 'hatch':
            return 'Compra efetuada com sucesso'
        case 'sedan': 
        case 'motocicleta':
        case 'caminhonete' :
            return 'Tem certeza que não prefere esse modelo?' 
        default: 
            return'Não trabalhamos com este tipo de automóvel aqui'
    }   
}

console.log(carroIdeal('sedan'))
console.log(carroIdeal('caminhonete'))
console.log(carroIdeal('esportivo'))
console.log(carroIdeal('hatch'))