function tipoDeTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado1 === lado3) {
        console.log("Equilátero")
    } else 
        if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            console.log("Isósceles")
        } else {
            console.log("Escaleno")
        }  
}

tipoDeTriangulo(3,3,3)
tipoDeTriangulo(4,8,8)
tipoDeTriangulo(5,7,9)