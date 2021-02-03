
// repetições - quando a gente não souber a quantidade indeterminada

// criar função para gerar numeroa aleatorios

function gerarNumero (max, min) {
  const valor = Math.random () * (max - min) + min
  return Math.floor(valor)
}

// criando estrutura while

let opção = 1


while(opção != 2){
  opção = gerarNumero(-1,12)
  console.log(`Opção escolhida foi ${opção}`)
}

console.log("até a proxima")