// função liteal 

function name(params) {
  
}

// podemos criar uma função numa variavel

const func = function(){

}

// podemos armazenando uma função numa array

const teste = [function(a,b){return a + b}]

console.log(teste[0](2,3))

// função retornando uma outra função

function soma(a,b) {

  return function(c){
    console.log(a + b + c)
  }

  
  
}

soma(1,2)(5)

let a = "vermelho"
let b = "azul"
let c = a
a = b
b = c


console.log(a,b)