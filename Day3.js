// Q1. To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method

/**
 * step 1 - convert string into array to apply reverse because we canno
 *          reverse a string 
 *      1.1 - using split convert string into array
 *      1.2 - now we can apply reverse on array 
 *      1.3 - now the array is reverse so covert it into string using join
 * step 2 - compare string 1 and string 2 
 * step 3 - if both are same then palindrome else not
 */

const palindrome = (input) => {
    if (typeof input === 'number') input = input.toString();
    let strReverse = input.split('').reverse().join('');
    if (input === strReverse) {
        console.log(`${input} String is palindrome`)
    } else {
        console.log(`${input} is not palindrome`)
    }
}

palindrome('madam')


// Q2.To check the string or number is palindrome or not( ex: 121,madam,anna) using diving length by 2 and then comparing

const palindromeNumber = (input) => {

    if (typeof input === 'number') input = input.toString()
    let len = input.length
    for (i=0; i<len/2;i++){
        if (input[i]!==input[len-1-i]){
            console.log("Not Palindrome")
        }
        else{
            console.log(" Palindrome")
       }
      }

}
palindromeNumber(252)


//Q3.To find longest word from a string using (for of Loop) means iterate by an elements not by indexing

/**
 * 
 * @param {string} input 
 * @returns longestWord
 * 
 * step 1 = split(' ') our string into individual 
 *   example = "akshay is good prorammer".split(' ') 
 *      o/p = ['akshay','is', 'good', 'programmer']
 * 
 * step 2 - loop over them and check if length is greater 
 * step 3 - length is greater then assing it to longestWord
 * step 4 - return back it
 */

const longestWord = (input) => {
     input = input.split(' ');
    let longestWord = '';

    for (const word of input) {
        console.log(word)
        if (longestWord.length < word.length) {
            longestWord = word;
        } 
    }
    return longestWord;
}
 
longestWord('akshay is a good prorammer')

//Q4.To find longest word from a string using functions{like sort}

/**
 * 
 * @param {string} input
 * 
 * step 1 -  
 */
const longestWordSort = (input)=>{

    input = input.split(' ')
    let longestWord = input.sort((a,b)=> b.length - a.length);
    console.log(longestWord[0])
    return longestWord[0]
}

longestWordSort('akshay is a good prorammer')



// Q5. To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method {using for loop}

/**
 * 
 * @param {srting,number} input 
 * step 1 - check if input is number convert it to string
 * step 2 - loop through string using for to reverse and store it in Array
 * step 3 - now using join convert it into string
 * sep 4 - check whether if input and reverse equal then palindrome 
 */

const palindromefor = (input) => {
    if (typeof input === 'number') input = input.toString();

    let reverseArray = [];

    for (let i = input.length - 1; i >= 0; i--) {
        reverseArray.push(input[i])
    }
    console.log(reverseArray)
    reverseArray = reverseArray.join('');
    if (input === reverseArray) {
        console.log(`is palindrome`)
    } else {
        console.log(`not palindrome`)
    }

}

palindromefor(121)