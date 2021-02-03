// no switch case, ele pega a condição (case) e valida,para parar a primeira validação usar o break
// e ir para a proxima

const notafinal = function soboaNoticia(nota){

  switch(Math.floor(nota)){

    case 9:
    case 10:
      console.log("aprovado com honra")
      break
    case 8 : case 7:
      console.log("aprovado")
      break
    case 6: case 5: case 4:
      console.log("recuperação")
      break
    case 3: case 2 : case 1 : case 0:
      console.log("reprovado")
      break
      default:
        console.log("nota invalida")

  }

 
  }



notafinal(9)
notafinal(10)
notafinal(2)
notafinal(4)
notafinal(11)