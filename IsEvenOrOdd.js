/**
 * If a number is even or odd, print "Even", or "Odd".
 */

// Use an arrow function to do so.
 const evenOrOdd = a => {
    if(a % 2 == 0) {
        console.log("Even")
    }
    else {
        console.log("Odd")
    }
}

evenOrOdd(10) // prints even
evenOrOdd(9) // prints odd
evenOrOdd(52) // prints even
evenOrOdd(90) // prints even
evenOrOdd(93) // prints odd