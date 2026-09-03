let numeroAFormatar = 0.30000000000000004

function valorDecimal (numeroAFormatar) {
   return "R$ " + numeroAFormatar.toFixed(2).replace(".",",")
}

 console.log(valorDecimal(0.30000000000000004))