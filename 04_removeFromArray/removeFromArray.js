const removeFromArray = function(array, ...pos) {
    for (let index of pos) {
        if (array.indexOf(index) === -1) {
            continue
        } else {
            array.splice(array.indexOf(index),1)
        }
    } 
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
