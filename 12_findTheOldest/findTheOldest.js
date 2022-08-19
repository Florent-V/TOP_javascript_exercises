const findTheOldest = function(people) {
    let age,
        rep,
        max = 0;
    for (let person of people) {
      if ("yearOfDeath" in person === false) {
        age = 2022 - person.yearOfBirth;
      } else {
        age = person.yearOfDeath - person.yearOfBirth;
      }
      if (age > max) {
        max = age;
        rep = person;
      }
    }
    return rep
};

// Do not edit below this line
module.exports = findTheOldest;
