// para achar os indices dos valores no array

const notas = [10.2,7.89,6.78,9.88]

for (i in notas){
  console.log(i , notas[i])
}

// para achar os indices dos valores no objeto

const pessoas = {
  nome: "kayk",
  sobrenome: "pereira",
  idade: 24,
}

for(j in pessoas){
  console.log(`${j} = ${pessoas[j]}`)
}