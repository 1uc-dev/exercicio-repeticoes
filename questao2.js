const pessoas = [
    { nome: 'Ana', altura: 1.65 },
    { nome: 'Bruno', altura: 1.72 },
    { nome: 'Carla', altura: 1.58 },
    { nome: 'Daniel', altura: 1.8 },
    { nome: 'Eduarda', altura: 1.75 },
    { nome: 'Felipe', altura: 1.68 },
    { nome: 'Giovana', altura: 1.6 },
    { nome: 'Henrique', altura: 1.77 },
    { nome: 'Isabela', altura: 1.7 },
    { nome: 'João', altura: 1.82 },
    { nome: 'Karina', altura: 1.55 },
    { nome: 'Lucas', altura: 1.66 },
    { nome: 'Marina', altura: 1.73 },
    { nome: 'Nicolas', altura: 1.79 },
    { nome: 'Olívia', altura: 1.69 }
]
const pessoaAlta = pessoas.reduce(
    (acumulador, pessoa) => {
      if (pessoa.altura > acumulador.pMaisAlta.altura) {
        acumulador.pMaisAlta = pessoa
      }
  
      if (pessoa.altura < acumulador.pMaisBaixa.altura) {
        acumulador.pMaisBaixa = pessoa
      }
  
      return acumulador
    },
    {
      pMaisAlta: pessoas[0],
      pMaisBaixa: pessoas[0]
    }
)
console.log('Pessoa mais alta:', pessoaAlta.pMaisAlta)
console.log('Pessoa mais Baixa:', pessoaAlta.pMaisBaixa)