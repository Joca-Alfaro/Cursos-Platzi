function newUser( name, age, country) {
  var name = name || 'Jose';
  var age = age || 15;
  var country = country || 'GT';
  console.log(name, age, country);
}

newUser();
newUser('Chester', 2, 'US')


//New default params

function nweAdmin(name = 'Jose', age = 21, country = 'GT') {
  console.log(name, age, country);
}

nweAdmin();
nweAdmin('Natalia', 13, 'MX' )