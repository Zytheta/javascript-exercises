const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        console.log(oldestAge);
        const currentAge = getAge(
            currentPerson.yearOfBirth,
            currentPerson.yearOfDeath
        );
        return (currentAge > oldestAge) ? currentPerson : oldest;
        });
};

const getAge = function getAge(birth, death) {
    if(!death) {
        death = new Date().getFullYear()
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
