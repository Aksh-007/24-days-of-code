// Q1.String reverse with reversing of individual words

// we cannot reverse a string but we can reverse an array
// step 1 - convert string to array using split 
// step 2 - reverse an array 
// step 3 - convert array back to string using join 

const stringReverseAlgo = (str) => {
    let strArray = str.split('');
    let reverseString = strArray.reverse().join('');
    return reverseString
}

console.log(stringReverseAlgo("akshay"))
// 'yahska'
// input - "India is my country"
// output - "yrtnuoc ym si aidnI"


// Q2.String reverse without using inbult function

/**
 * step 1 - we can iterate over string 
 * step 2 - we can loop backwards on the string
 * step 3 - and store the value in new string and show them
 */
const stringReverse = (str) => {
    let reverseArray = [];
    strlength = str.length
    for (let i = strlength - 1; i >= 0; i--) {
        reverseArray.push(str[i])
    }
    return reverseArray.join('');
}
stringReverse('akshay')

// Q3.Find factorial of user input number
// example the factorial of 6 is 1*2*3*4*5*6 = 720
/**
 * using for loop we can do that 
 * step 1 - create a functon which take  a number as input 
 * step 2 - for loop until the number and multiple each value
 */

const factorial = (num) => {

    if (num <= 0) prompt("enter number which is grater than 1 ")
    let factorial = 1
    for (let i = 1; i <= num; i++) {
        factorial *= i
    }
    return factorial
}
// need to convert prompt value to number
const num = parseInt(prompt("Enter the number"))
factorial(6)
//  the factorial of 6 is 1*2*3*4*5*6 = 720


// Q4.Check if a string is an Anagram
// anagram means by sorting a string it has same character as another string
// str1= "Army" str2 = "Mary"
/**
 * step 1 - we cannot directly sort out string
 *      1.1 - convert into array using split('')
 *      1.2 - then convert it into lowerCase and apply sort method
 *      1.3 - conert the array into string using join('')
 * step 2 -
 */

const anagramString = (str1, str2) => {

    if (str1.length !== str2.length) console.log('Not a Anagram String')
    str1 = str1.toLowerCase().split('').sort().join('')
    str2 = str2.toLowerCase().split('').sort().join('');

    if (str1 === str2) {
        console.log(`Anagram string bcoz Str1 : ${str1} and str2 : ${str2}`)
    } else {
        console.log('Not a Anagram String')
    }
}
anagramString('Army', 'Mary')

// Q5.Swapping of 2 numbers with third variable

/**
 * step 1 -
 * step 2 -
 */



// Q6.Swapping of 2 numbers without third variable

/**
 * step 1 - 
 * step 2 -
 */