/**
 * Ways to remove white spaces from a string:
 */
const removeWhiteSpaces = (x) => {
    return x.replace(/\s+/g, '')
}

const newString = "This is a string."

console.log(removeWhiteSpaces(newString))
/**
 * Thisisastring.
 */

console.log(newString.split(' ').join(''))
/**
 * Thisisastring.
 */