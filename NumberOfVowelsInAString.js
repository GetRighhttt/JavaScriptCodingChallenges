/**
 * Given a string, count the number of vowels present.
 */

// Split the string into an array, and use a for loop to iterate through
// the letters. Use a switch statement for beginner purposes.

const getCount = str => {
    let vowelsCount = 0
    const arr = str.split("")

    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case 'a':
                vowelsCount++
                break;
            case 'e':
                vowelsCount++
                break;
            case 'i':
                vowelsCount++
                break;
            case 'o':
                vowelsCount++
                break;
            case 'u':
                vowelsCount++
                break;
        }
    }

    return vowelsCount
}

console.log(getCount("My name is Stefan Bayne"))
// prints 7 vowels

/**
 * We could also solve this using match() and includes() with a regex.
 */

// program to count the number of vowels in a string

const countVowel = stringInput => { 

    // find the count of vowels
    const count = stringInput.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

console.log(countVowel("My name is Stefan Lamario Bayne!"))
// prints 11 vowels