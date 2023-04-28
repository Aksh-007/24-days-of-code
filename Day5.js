// Q1.To find the largest pair of the 2 elements using indexing with sorted elements

/**
 * 
 * @param {array} array 
 * @returns largest and second largest
 * 
 * step 1 - sort the given array using sort method
 * step 2 - now the largest and second largest is at the end 
 * step 3 - extrascting the value from sortedArray
 * step 4 - return back the largest and secondlargest
 */
const largestSorted = (array) => {

    let sortedArray = array.sort((a, b) => a - b);
    console.log(sortedArray)
    let largest = sortedArray[sortedArray.length - 1]
    let secondLargest = sortedArray[sortedArray.length - 2]
    return [largest, secondLargest]
}

largestSorted([20, 10, 2, 4, 5, 30, 14])

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


function fibonacci(number) {
    let fibonacciValue = [0, 1]; // start with the first two numbers in the fibonacciValue
    for (let i = 2; i < number; i++) { // loop from the third number up to the nth number
      let nextNumber = fibonacciValue[i - 1] + fibonacciValue[i - 2]; // add the previous two numbers together
      fibonacciValue.push(nextNumber); // add the next number to the fibonacciValue
    }
    return fibonacciValue; // return the full fibonacciValue
  }
  
  console.log(fibonacci(5));
  // [0,1,1,2,3] 


