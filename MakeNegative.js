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

console.log(makeNegative(9)) // prints negative 9

/*
Math.abs turns everything positive. So if we automatically make it negative,
we will always return a negative value.
*/

const absolutelyNegative = num => {
    return -Math.abs(num)
}
console.log(absolutelyNegative(10)) // prints negative 10
