const array = [1,1,2,3,4, [1,2,3,4,5,6, [5,8,4]]]

console.log(array.flat(3))


const arr = ["mon", "tues", ["wed", "thurs", ["fri", "sat"]], "sun"] ;

console.log(arr.flat());

// expected output
["mon", "tues", "wed", "thurs", Array ["fri", "sat"], "sun"];