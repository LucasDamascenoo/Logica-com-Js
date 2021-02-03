
let weight;

console.log(typeof weight)

let student = {

   name : "Lucas",
   age : 25,
   weight : 81.2,
  isSubscribed : true

}

console.log(`Eu me chamo ${student.name}, tenho ${student.age} anos e peso ${student.weight} kgs. `)

let students = [
  student
]

console.log(students[0])

const tati = {
  name : "tati",
  age : 23,
  weight : 92,
  isSubscribed = true
}

students[1] = tati

console.log(students)

