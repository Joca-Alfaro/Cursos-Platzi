function newUser(name, age, country) {
  var name = name || 'Oscar'
  var age = age || 34
  var country = country || 'MX'
  console.log(name, age, country)
}
newUser()
newUser('David', 15, 'CO')


function newAdmin1(name = 'David', age = 12, country = 'GT') {
  console.log(name, age, country)
}
newAdmin1('Ana', 12,  "USA");



// spread opertor

let person = {
  name: 'David',
  age: 28
}
let country = 'GT'

let data = {id: 1, ...person, country}
console.log(data)



// rest

function sum(num, ...values) {
  console.log(values)
  console.log(num + values[0])
  return num + values[0]
}

sum(1, 3, 2, 10, 4, 5)