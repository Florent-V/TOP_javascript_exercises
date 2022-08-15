const ftoc = function(temp) {
  let rep = Math.round(((temp-32)/1.8)*10)/10;
  return rep;

};

const ctof = function(temp) {
  return Math.round(((temp*1.8)+32)*10)/10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
