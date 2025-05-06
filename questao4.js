let contador1 = 0
let contador2 = 0
let contador3 = 0
let contador4 = 0
while (true) {
    const numero = prompt('Digite um numero: (para encerrar digite um valor menor que zero)')
    if (numero < 0) {
        break
    }
    switch (true) {
        case (numero >= 0 && numero <= 25):
            contador1++
            break
        case (numero >= 26 && numero <= 50):
            contador2++
            break
        case (numero >= 51 && numero <= 75):
            contador3++
            break
        case (numero >= 76 && numero <= 100):
            contador4++
            break
        default:
            console.log('o valor nao esta entre as opçoes')
    }
}
console.log(`Números no intervalo [0-25]: ${contador1}`)
console.log(`Números no intervalo [26-50]: ${contador2}`)
console.log(`Números no intervalo [51-75]: ${contador3}`)
console.log(`Números no intervalo [76-100]: ${contador4}`)