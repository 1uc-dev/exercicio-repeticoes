let qtdPositivos = 0
let qtdNegativos = 0
let soma = 0
let totalValores = 0
while (true) {
    let entrada = prompt('Digite um valor: (ou digite 0 para sair)')
    if (entrada == 0) {
        break
    }

    let numero = parseFloat(entrada)

    if (isNaN(numero)) {
      alert('Insira um valor valido')
      continue
    }

    soma += numero
    totalValores++

    if (numero > 0) {
      qtdPositivos++
    } else if (numero < 0) {
      qtdNegativos++
    }

    if (totalValores === 0) {
       console.log('Nenhum valor foi inserido')
    }

    let media = soma / totalValores
    let percentualPositivos = (qtdPositivos / totalValores) * 100
    let percentualNegativos = (qtdNegativos / totalValores) * 100
    console.log(`Média dos valores: ${media.toFixed(2)}`)
    console.log(`Quantidade de valores positivos: ${qtdPositivos}`)
    console.log(`Quantidade de valores negativos: ${qtdNegativos}`)
    console.log(`Percentual de valores positivos: ${percentualPositivos.toFixed(2)}%`)
    console.log(`Percentual de valores negativos: ${percentualNegativos.toFixed(2)}%`)
}