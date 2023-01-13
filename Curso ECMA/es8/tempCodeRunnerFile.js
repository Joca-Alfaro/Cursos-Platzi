const fnAsync = () => {
 return new Promise((resolve, reject) => {
 (true)
 ? setTimeout(() => resolve('Async'), 50)
 : reject(new Error('Error'));
 })
}

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log('Hi');
}

console.log("before");
anotherFn();
console.log("After");