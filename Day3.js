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

const palindrome = (str) =>{
  let strReverse = str.split('').reverse().join('');
  if (str === strReverse) {
    console.log(`${str} String is palindrome`)
  } else {
    console.log(`${str} is not palindrome`)
  }
}

palindrome('madam')


// Q2.To check the string or number is palindrome or not( ex: 121,madam,anna) using diving length by 2 and then comparing




//Q3.To find longest word from a string using (for of Loop) means iterate by an elements not by indexing



//Q4.To find longest word from a string using functions