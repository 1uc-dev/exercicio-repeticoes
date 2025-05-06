soma = 0
for (let i = 0; i <= 500; i++) {
    if (i % 2 != 0 && i % 3 == 0) {
        soma += i
    }
}
console.log(`A soma dos numeros impares é: ${soma}`)