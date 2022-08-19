const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(list) {
  rep = 0;
  for (let i of list) {
    rep += i;
  }
  return rep;
	
};

const multiply = function(list) {
  rep = 1;
  for (let i of list) {
    rep *= i;
  }
  return rep;

};

const power = function(a,b) {
  return a**b;
	
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  } else {
    return a * factorial(a-1);
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
