const palindromes = function (mot) {
    let rep = mot;
    let punc = ["\\?",
              "\\.",
              ",",
              ";",
              "!",
              ":",
              "\\*",
             " "];
    for (p of punc) {
      re = new RegExp(p,'g');
      rep = rep.replace(re,"");
    }
    rep = rep.toLowerCase();
    if (rep === rep.split("").reverse().join("")) {
      return true;
    } else {
      return false;
    } 
  
};

const palindromes = function(string) {
  processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  return (
    processedString
      .split("")
      .reverse()
      .join("") == processedString
  );
};



// Do not edit below this line
module.exports = palindromes;


