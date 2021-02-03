// estrura condicional IF - else
// se isso foi x, então faça y -- se não for faça w



function soboaNoticia(nota){
  if (nota >= 9) {
    console.log(`aprovado com com HONRA ${nota}`)
  } else if (nota >= 6 && nota <= 8.99) {
    console.log(`você foi aprovado!!! ${nota}`)
  } else {
    console.log(`voce foi reprovado ${nota}`)
  }
}

soboaNoticia(11)

