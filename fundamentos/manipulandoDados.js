//contando quantos caracteries tem em uma string
let name = "lucas"

console.log(name.length)

//colocando limite em casas descimais + trocando . por ,
let n1 = 1234.23355
console.log(n1.toFixed(2). replace(".",","))

// tudo maiscula ou tudo minuscula

let name1 = "lucas"
console.log(name1.toLowerCase())
console.log(name1.toUpperCase())

// para achar uma palavra em um teste

let teste = "hoje eu preciso de você"
console.log(teste.includes("De qualquer jeito"))

//

let phrase = " eu quero viver o amor"
let myarray = phrase.split(" ")
newarray = myarray.join("_")
console.log(newarray.toUpperCase())

