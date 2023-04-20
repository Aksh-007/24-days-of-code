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


// creating a function for unique string
let uniqueString = (str) => {
    // breaking a string into array
    // using split() method
    let string = str.split('');
    // Now creating an array to store unique values
    let uniqueChar = [];

    // looping through string array
    string.array.forEach(element => {
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