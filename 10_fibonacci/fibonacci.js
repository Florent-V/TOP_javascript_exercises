const fibonacci = function(val) {
    if (val >= 0) {
      let n = parseInt(val);
    let a = 0,
        b = 1;
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      for (let i = 0; i < n-1; i++) {
        [a, b]=[b, a+b];
      }
      return b
    }
    } else {
      return "OOPS"
    }
    
  };
  

// Do not edit below this line
module.exports = fibonacci;
