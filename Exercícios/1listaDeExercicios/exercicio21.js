function PlanoDeSaude (idade) {
    
    
    if (idade < 10) {
        return 180
    } else if (idade >= 10 && idade < 30) {
        return 150
    } else if (idade >= 30 && idade < 60) {
        return 195
    } else {
        return 230
    }    
}

console.log(PlanoDeSaude(5))
console.log(PlanoDeSaude(17))
console.log(PlanoDeSaude(31))
console.log(PlanoDeSaude(71))