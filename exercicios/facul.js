/*
    EXERCÍCIO 1:
    Implemente a função 'quadrado' que recebe um número e retorna o resultado
    desse número ao quadrado.
    Lembre-se que a função deve utilizar a instrução return, para devolver
    o resultado. Se você utilizar print dentro da função para mostrar o
*/

function quadrado(n){
 let num = n ** 2
  return num
}

console.log(quadrado(10))

/*EXERCÍCIO 2:
    Implmente a função 'soma_dos_quadrados' que receba dois numeros e devolve
    a soma dos seus quadrados.
    Você pode utilizar a função 'quadrado' definida anteriormente para
    facilitar a implementação.
*/

function soma_dos_quadrados(a1 , a2){
  let soma = a1 ** 2 + a2 ** 2
  return soma

}

console.log(soma_dos_quadrados(10,10))

/*
EXERCÍCIO 3:
    Implemente a função 'media', que recebe três valores numéricos e retorna
    a média dos valores.
*/

function media(nota,nota2,nota3){

  let mediana = (nota + nota2 + nota3) / 3

return mediana
 
}

console.log(media(6,8.8,10))

/*
EXERCÍCIO 4:
    Implemente a função 'calcular_salario', que recebe o salário atual de um
    funcionário e retorna o salário com um reajuste de aumento, sendo que:
    - Caso o salário atual seja maior que R$ 2.000,00, o funcionário receberá
      7% de aumento.
    - Caso contrário, o funcionário receberá 15% de aumento.
  */

 function calcular_salario(salario){
   if(salario >= 2000){
     let aumento7 = salario + (salario * 7) / 100
     return aumento7
   }else {
    let aumento15 = salario + (salario * 15) / 100 
    return aumento15
  }
   
 }
 
 console.log(calcular_salario(1900))


 /*EXERCÍCIO 6:
 Implemente a função 'fatorial' que recebe um número positivo e retorna
 o fatorial desse número.
 O fatorial de um número N é o produto dos números naturais consecutivos
 de 1 até N.
 Por exemplo:
 - O fatorial de 5 é 120 (1*2*3*4*5)
 - O fatorial de 10 é 3628800 (1*2*3*4*5*6*7*8*9*10)
 */

function fatorial(n){

  if(n == 0 || n == 1){
      return 1;
  
  }else{
      return n * fatorial(n-1);
  }
}
let n = 10;
answer = fatorial(n)
console.log("The fatorial of " + n + " is " + answer);


