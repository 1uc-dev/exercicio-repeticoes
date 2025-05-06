const a = 2
const r = 3

console.log(`Sequência em P.G. com A = ${a} e R = ${r}:`)
for (let i = 0; i < 10; i++) {
  const termo2 = a * Math.pow(r, i) // fórmula da P.G.
  console.log(`Termo ${i + 1}: ${termo2}`)
}
