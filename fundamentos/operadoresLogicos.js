//operadores logicos : AND - OR - NOT

// AND (AS DUAS VERIFICAÇÕES DEVEM SER VERDADEIRAS) &&

let pão = true
let manteiga = false
console.log(pão && manteiga)

// OR (UMA DAS DUAS VERIFICAÇÕES PRECISAM SER VERDADEIRAS) ||

let cafe = true
let leite = false
console.log( cafe || leite)

// NOT (INVERTE A VERIFICAÇÃO) ! 

let queijo = false
let presunto = true

console.log(!queijo , !presunto)


// condições ternarias

let arroz = true
let carne = false

const niceRango = arroz || carne ? "nice rango" : "rango ruim"
console.log(niceRango)

age = 16
const drive = age >= 18 ? "cant drive" : "wait more"
console.log(drive)

//

function compras (t1,t2){
  const comprarSorvete = t1 || t2
  const comprarTv = t1 && t2
  const comprarTvmenor = t1 != t2
  const manterSaudavel = !comprarSorvete

  return {comprarSorvete,comprarTv,comprarTvmenor,manterSaudavel}
}

console.log(compras(true,true))
console.log(compras(false,true))
console.log(compras(true,false))
console.log(compras(false,false))


