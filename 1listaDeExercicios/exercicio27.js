function comparativoDeCrescimento(altura1, taxa1, altura2, taxa2) {
let anos = 0

    while (altura1 >= altura2) {
        altura1 += taxa1
        altura2 += taxa2
        anos++
    }

    return `Levará ${anos} anos.`
}

console.log(comparativoDeCrescimento(150, 2, 130, 3))


