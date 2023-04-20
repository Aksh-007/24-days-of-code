// 1.Remove Duplicate characters from String

let str = "hahaha"

let result = new Set(str.split(''));


//without using set

function removeDuplicateCharacters() {
    var string = 'priya riya supriya'
    let result = string.split('').filter((item, index, arr) => {
        return arr.indexOf(item) === index;
    }).join('');
    return result;
}
console.log(removeDuplicateCharacters());
/**
 * 
 * @param {str} str 
 * @returns uniqueChar []
 * 
 * step 1 - converting the string into array of elmenets using split()
 * step 2  - creating uniqueChar [] empty array to store the unique char 
 * step 3 -  looping over the string Arrays 
 * step 4 -  condition if element not includes  in uniqueChar then push it in array
 * step 5 -  converting a array back to string using join(';) method
 * step 6 - returning the string back and console loging it 
 */

// creating a function for unique string
let uniqueString = (str) => {
    // breaking a string into array
    // using split() method
    let string = str.split('');
    // Now creating an array to store unique values
    let uniqueChar = [];

    // looping through string array
    string.forEach(element => {
        // checking if uniqueChar doesnt includes the values then push it in array
        (!uniqueChar.includes(element))
            // if it doesnt contain then push it in uniqueChar
            ? uniqueChar.push(element)
            // else discard the value
            : ""

    });
    // here converting the array back to string and returning 
    return uniqueChar.join('');

}
console.log(uniqueString('akshay'));


// Remove Duplicate characters from array of element and find the count of an elements using set

/**
 * 
 * @param {array} arr 
 * @returns {countOfElement, unique}
 * step 1 - using set method to remove dplicate elemens from array
 * step 2 - 
 */

const removeDuplicateElement = (arr) =>{
    let uniqueElement = new Set(arr);
    let countOfElement = uniqueElement.size
    // here converting object into array
    let unique = Array.from(uniqueElement);
    return{ countOfElement, unique};
}
let {countOfElement, unique} = removeDuplicateElement([50,84,2,5,50,5,2,84])



console.log(`Element in Array is ${countOfElement}`);
console.log(` Array is ${unique}`);


//Remove Duplicate characters from array of element using filter

let functionFilter = (arr) =>{
    let result = arr.filter((value, index, arr) => arr.indexOf(value) === index);
    return result
}

console.log(functionFilter(['a', 1,2,3,'b',4,'a',1,2,'b']))
// output // ['a', 1, 2, 3, 'b', 4]



// String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split and then join


let reverseStringUsingArray = (str) =>{
        let Array= str.split('');
        return Array.reverse().join('').split(' ').reverse().join(' ')
}

console.log(reverseStringUsingArray("akshay afnf fnpfn npsfns"))











// String reverse without using inbult function

/**
 * 
 * @param {str} str 
 * @returns reverseString []
 * 
 * step 1 - converting a string into array using split()
 * step 2 - creating an array to store the unique value
 * step 3 - storing a string.length in a variable so that each time the loop 
 *          iterates doesnt call the length method
 * step 4 - looping in reverse order
 * step 5 - pushing the value in raverseString array
 * step 6 - returning the array and convrting it into string
 */

let reverseString = (str) => {

    let string = str.split('');
    let reverseString = [];
    stringLength = string.length
    for(i = stringLength;  1 >= 0; i --){

        reverseString.push(stringLength[i-1])
    }
    return reverseString.join('');
}

console.log(reverseString("Madam"))


//  string reverse using inbuilt function 
/**
 *  step 1 = convert string into Array by using split('')
 *  strp 2 =  then reverse the the array using reverse();
 *  step 3 = then convert a array back to string using join() methso
 */

let reverseString1 = (str) =>{
    let string = str.split('');
    let result = string.reverse().join('');
    return result;
}

console.log(reverseString1("Akshay"));
