const reverseString = function(string) {
    rep = '';
    for (let i = string.length; i>0 ; i--) {
        rep += string[i-1];
    }
    return rep;

};

// Do not edit below this line
module.exports = reverseString;
