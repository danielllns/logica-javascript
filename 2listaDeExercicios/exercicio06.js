const inverso = parametro => typeof  parametro === "boolean" ? !parametro : typeof parametro === "number"
? -parametro : `booleano ou número esperados, mas o parâmetro é do tipo ${typeof parametro}`

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programação"))


const inversoo = param => {


if (typeof param === "boolean") 
    return!param
    if (typeof param === "number")
        return-param
    else
        `booleano ou número esperados, mas o parâmetro é do tipo ${typeof parametro}`
} 

console.log(inversoo(false))
console.log(inversoo(2000))
console.log(inverso("programação"))
