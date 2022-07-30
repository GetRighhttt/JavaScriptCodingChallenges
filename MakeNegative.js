/**
 * Make a number negative!
 */

// We're going to use a ternary operator that checks if the number is negative.
// if it is, return the number, else return the negative number.

/*
In JavaScript, to make a variable negative, we can just put a negative sign in front.
*/
const makeNegative = number => {
    return (number < 0) ? number: -number
}

console.log(makeNegative(9))