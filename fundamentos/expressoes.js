// expressoes são qualquer linha de codigo que resolva algo:

let name = "lucas" // isso é uma expressão

// new = expressão para criar um novo objeto

let name1 = new String("lucas")
let age = new Number(25)
console.log(name1,age)

// unarios typeof / delete

console.log(typeof "lucas")

const person = {
  nome : "lucas",
  age : 25
}

delete person.age // deleta uma propriedade de um objeto

console.log(person)

