/**
 * Given an integer, write the summation of the numbers before the integer up until
 * its number.
 * 
 * 8 = 1 + 2 + .... + 8
 */

const sumArray = num => {
    let sum = 0

    for(let i = 1; i <= num; i++) {
        sum = sum + i
    }
    return sum
}

console.log(sumArray(10)) // prints 55
console.log(sumArray(8)) // prints 36