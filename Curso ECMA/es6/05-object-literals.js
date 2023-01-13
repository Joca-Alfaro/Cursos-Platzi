// enhanced objet literals


function nerUser(user, age, country, uId){
  return{
    user,
    age,
    country,
    id: uId,
  }

}
console.log(nerUser("Nat", 13, "MX", 1));