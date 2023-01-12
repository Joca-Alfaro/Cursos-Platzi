// Arrays destructuring

let fruits = ['Apple', 'Orange', 'Kiwi', 'Banana'];
let [a, b, c, d] = fruits;
console.log(a, fruits[3]);


// Object destructuring

let user = { username: 'Alfaro',
age: 15,
};

let { username, age } = user;

console.log(user.username, user.age);

// spread operator
let person = {
  name: 'John', age: 15,
}
let country =  'GT'

let data = {id: 1, ...person, country}
console.log(data)


// rest

function sum(num, ...values){
  console.log(values)
  console.log(num + values[0]);
  return num + values[0];
}
sum(1,1,2,3)