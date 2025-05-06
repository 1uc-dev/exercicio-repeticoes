const A1 = 5
let resultado = 1
let sequencia = ''

for (let i = A1; i > 0; i--) {
  resultado *= i
  sequencia += i + (i > 1 ? ' x ' : '')
}

console.log(`${A1}! = ${sequencia} = ${resultado}`)

