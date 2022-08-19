const repeatString = function(string, num) {
    if (num >= 0) {
        let rep = "";
        for (let i=0; i<num ; i++) {
            rep += string;
    }
    return rep;
    } else {
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = repeatString;
