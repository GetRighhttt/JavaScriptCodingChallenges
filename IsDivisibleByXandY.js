/**
 * Checking to see if a number n is divisible by x and y.
 */



const isDivisible = (n, x, y) => {

    const firstResult = n / x
    const nextResult = n / y 

    if(firstResult % 1 === 0 && nextResult % 1 === 0) {
        return true
    }
    else {
        return false
    }
}

// prints true
console.log(isDivisible(8, 2, 2))

// also:
// return (n % x === 0 && n % y === 0) ? true : false