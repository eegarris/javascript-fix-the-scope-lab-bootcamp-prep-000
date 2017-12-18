var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
<<<<<<< HEAD
  var animal = 'cat'
=======
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat'

>>>>>>> ae83aeec23250c800a4e80a5dacc3f2d36b933bd
  return animal
}

function add2(n) {
<<<<<<< HEAD
 const two = 2
 return n + two
=======
  const two = 2

  return n + two
>>>>>>> ae83aeec23250c800a4e80a5dacc3f2d36b933bd
}

var funkyFunction = function() { // funkyFunction
  return function() { // funkyFunction()
    return "FUNKY!" // funkyFunction()()
  }
}

<<<<<<< HEAD
=======
// We want this to return "FUNKY!" -- how can we accomplish that?
>>>>>>> ae83aeec23250c800a4e80a5dacc3f2d36b933bd
var theFunk = funkyFunction()()
