/**
 * Make a number negative!
 */

// We're going to use a ternary operator that checks if the number is negative.
// if it is, return the number, else return the negative number.
const makeNegative = number => {
    return (number < 0) ? number: -number
}

console.log(makeNegative(9))