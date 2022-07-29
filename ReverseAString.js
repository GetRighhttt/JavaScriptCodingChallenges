/**
 * Given a string, reverse it!
 */

// This can be solved by splitting the string into an array. split("")
// Reversing the array, then joining it back together. reverse().join("")

const reverseString = inputString => {
    return inputString.split("").reverse().join("")
}

console.log(reverseString("Stefan"))
console.log(reverseString("Lamario"))
console.log(reverseString("Bayne"))

/**
 * Output:
 * 
 * nafetS
 * oiramaL 
 * enyaB
 */