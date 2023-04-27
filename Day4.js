

// Q1. To find longest word from a string using custom code

/**
 * 
 * @param {string} str 
 * @returns longestWord
 * 
 * step 1 - take input string
 * step 2 - split input string into array of string using split(' ')
 *   example = str = "I am Akshay" 
 *      using split(' ') = ["I", "am","Akshay"]
 * step 3 - iterate over it using for of
 * step 4 - create a varibale to store longest value
 * step 5 - if the length of word id grater than longestword 
 * step 6 - assign it to longest word
 */
const longestWord = (str) => {
    str = str.split(' ')
    let longestWord = '';
    for (const word of str) {
        if (word.length >= longestWord.length) {
            longestWord = word
        }
    }
    return longestWord
}
longestWord('akshay is a good prorammer')


// traditional for loop
/**
 * 
 * @param {string} str 
 * @returns longestWord
 * 
 * step 1 - take input string
 * step 2 - split input string into array of string using split(' ')
 *   example = str = "I am Akshay" 
 *      using split(' ') = ["I", "am","Akshay"]
 * step 3 - iterate over it using for of
 * step 4 - create a varibale to store longest value
 * step 5 - if the length of word id grater than longestword 
 * step 6 - assign it to longest word
 */
const longestWordFor = (input) => {
    input = input.split(' ');
    let longestWord = '';
    inputLength = input.length
    for (let i = 0; i < inputLength; i++) {
        if (input[i].length >= longestWord.length) {
            longestWord = input[i];
        }
    }
    return longestWord;
}

longestWordFor("akshay is a good prorammer")

// Q2. To find longest common string from array of strings

/**
 * 
 * @param {input} input 
 * @returns longestCommonWord
 * 
 * step 1 - 
 */
function longestCommonString() {
    array = ["go", "google", "gosh"];
    var arr = array.sort();
    var i;
    for (i = 0; i < arr[0].length && arr[0].charAt(i) === arr[arr.length - 1].charAt(i); i++);
    console.log(arr[0].substring(0, i)); // "go"
    return arr[0].substring(0, i);
}

longestCommonString();

// Q3. To find vowels and its count in a given string

const vowels = (input) => {
    let vowels = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
    };

    for (let character of input) {
        switch (character.toLowerCase()) {
            case 'a':
                vowels.a++;
                break;

            case 'e':
                vowels.e++;
                break;

            case 'i':
                vowels.i++;
                break;

            case 'o':
                vowels.o++;
                break;


            case 'u':
                vowels.u++;
                break;


            default:
                break;
        }
    }
    return vowels
}

vowels("akshay is a good programmer");

// Q4. To find character occurance from the string