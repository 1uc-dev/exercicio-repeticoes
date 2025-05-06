const N = 2

if (N >= 1 && N <= 10) {
  for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${N} = ${i * N}`)
  }
} else {
  console.log('Número inválido. Digite um valor entre 1 e 10.')
}