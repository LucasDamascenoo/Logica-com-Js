//array com constructor

let newarray = new Array("Lucas", "Tati", "Matheus")
console.log(newarray)  

// contanto elementos arrays

let lista = ["a","j","w","cotap"]
console.log(lista.length)
console.log(lista.sort())

// transformando strings em arrays

let transform = "transformação"

console.log(Array.from(transform).sort())

// add um item no fim

let techs = ["html","css"]
techs.push("js")
console.log(techs)

// add um intem no começo

let techs1 = ["html","css"]
techs1.unshift("logica")
console.log(techs1)

// remove um item do final

techs1.pop()

//remove do começo

techs1.shift()

// pegar somente alguns elementos

console.log(teste.slice(1,2)) // 1 = inicio / 2 = até onde quero ir

// removendo 1 ou mais itens aleatorios

techs1.splice(1,1) // 1 inicio // 1 = quantos elementos quero tirar = 1,2,3 (dependendo)

// encontrando a posição de uma elemento array

let index = techs1.indexOf("css") // vai puxar em qual posição está o "css" [2]
console.log(index)

