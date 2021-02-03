//recurso do ES2015

const pessoa = {
  nome: "Lucas",
  idade: 25,
  endereço :{
    rua: "rua um",
    numero: 10,
    ref: "viela 1"
  } 

}

// como chamar? criar uma variavel com os nomes dos parametros do objt

const {nome,idade} = pessoa
console.log(nome,idade)

// tbm podemos alterar o nome das variaveis

const {nome : n, idade : i} = pessoa
console.log(n,i)


// função de numeros aleatorios
function rand(min = 0,max = 200){
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

console.log(rand(0,201))