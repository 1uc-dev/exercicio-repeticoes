let numPar = 0
let numImpar = 0
let somaTotais = 0
let somaPares = 0
let valoresLidos = 0
while (true) {
    let num = parseFloat(prompt('Digite um valor: (digite 0 para encerrar)'))
    if (num == 0) {
        break
    }
    somaTotais += num
    valoresLidos++
    if (num % 2 === 0) {
        somaPares += num
        numPar++
      } else {
        numImpar++
      }
}
const mediaPares = numPar > 0 ? somaPares / numPar : 0
const mediaGeral = valoresLidos > 0 ? somaTotais / valoresLidos : 0

console.log(`Quantidade de numeros pares: ${numPar}`)
console.log(`Quantidade de numeros impares: ${numImpar}`)
console.log(`Media dos numeros pares: ${mediaPares}`)
console.log(`Media geral: ${mediaGeral}`)