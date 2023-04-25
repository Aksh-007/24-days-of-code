// Q1.String reverse with reversing of individual words

// we cannot reverse a string but we can reverse an array
// step 1 - convert string to array using split 
// step 2 - reverse an array 
// step 3 - convert array back to string using join 

const stringReverseAlgo = (str) =>{
    let strArray = str.split('');
    let reverseString = strArray.reverse().join('');
    return reverseString
}

console.log(stringReverseAlgo("akshay"))// 'yahska'


// Q2.String reverse without using inbult function
