// criar estrutura de repetição

function sorteador(min, max){
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
  opcao = sorteador(1,43)
  console.log(`numero sorteado foi ${opcao}`)
}

console.log("acabou")