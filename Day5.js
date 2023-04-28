// Q1.To find the largest pair of the 2 elements using indexing with sorted elements



// Q2.To find the index of an element from an array

/**
 * 
 * @param {array} array 
 * @param {element} element 
 * 
 * using inbuit method
 *  step :- indexOf - gives the index of given element in array
 *          by using that we can give index
 * 
 */
const findIndex = (array, element) => {

    console.log(array.indexOf(element));
}
findIndex([20, 50, 80, 40], 20);

/**
 * 
 * @param {array} array 
 * @param {element} element 
 * @returns index of element 
 * 
 * step 1 - takes two parameter array and elements
 * step 2 - itearte over arrayelement
 * step 3 - if given element and array element match
 * step 4 - return index of given element
 */

const findIndexUsingFor = (array, element) => {
    arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        if (element === array[i]) {
            return i
        }
    }
}
findIndexUsingFor([20, 50, 80, 40], 20);

//Q3.Fibonacci Series (0,1,1,2,3,5,8,13....)