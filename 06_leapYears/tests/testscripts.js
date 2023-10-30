//Testing for leap years
//If divisible by 4 === leap year
//If divisible by 100 != leap year
//If divisible by 400 === leap year

const year = 1900;

function checkLeapYear(year) {
    if ((year % 100 === 0) && (year % 400 !== 0)) {
        return false;
    } else if (year % 100 === 0 && year % 400 === 0 ) {
        return true;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
