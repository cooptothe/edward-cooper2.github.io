// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // create a for loop to iterate through array
  for (var i = 0; i < array.length; i++){
    // print each value to the console incrementing by 1
    console.log(array[i])
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // create a for loop to iterate through array
  for (var i = array.length - 1; i >= 0; i--){
    // print each value to the console decrementing by 1
    console.log(array[i])
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // create an empty array
  var arr = [];
  // create for in loop to iterate through object keys
  for (var key in object){
    // push each key into array
    arr.push(key)
  }
  // return array
  return arr;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // create for in loop to iterate through object keys
  for (var key in object){
    // print each key to console
    console.log(key)
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // create an empty array
  var arr = [];
  // create for in loop to iterate through object keys
  for (var key in object){
    // push each key value into array
    arr.push(object[key])
  }
  // return array
  return arr;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // create for in loop to iterate through object keys
  for (var key in object){
    // print each key value to console
    console.log(object[key])
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // create count variable
  var count = 0;
  // create for in loop to iterate through object
  for (var key in object){
    // increment count by 1
    count += 1
  } // return count
  return count;

  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // create empty array
  var arr = [];
  // create for in loop to iterate through object
  for (var key in object){
    // push keys into array
    arr.push(object[key])
  } // use for loop to iterate through array in reverse
  for (var i = arr.length - 1; i >= 0; i--){
    // log keys to the console
    console.log(arr[i])
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
