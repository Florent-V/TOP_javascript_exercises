const sumAll = function(start, end) {
    rep = 0;
    if (
        (typeof start == "number") &&
        (typeof end == "number") &&
        (start > 0) &&
        (end > 0)
    ) {
        for (let i=Math.min(start,end); i <= Math.max(start,end) ; i++) {
            rep += i;
        }
        return rep;
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
