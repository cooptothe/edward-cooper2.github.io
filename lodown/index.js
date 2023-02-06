'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Returns input value unchanged.
 * 
 * @param { Any Value }: Function takes in any value.
 * @return { Any Value }: Function returns input unchanged.
 */

function identity (value){
    // return the value
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Takes in an input value and returns the type of value as a string.
 * 
 * @param { Any Value }: Function takes in any value.
 * @return { String }: Returns type of value as a string.
 */

function typeOf (value){
    // Check for null values separately
    if (value === null) {
        return "null";
    };
 // Use the typeof operator to check the basic type of the value
 switch (typeof value) {
    case "number":
        return "number";
    case "string":
        return "string";
    case "boolean":
        return "boolean";
    case "undefined":
        return "undefined";
    case "object":
        // Use the instanceof operator to check for specific object types
        if (value instanceof Array) {
            return "array";
        } else if (value instanceof Date) {
            return "date";
        } else if (value instanceof RegExp) {
            return "regexp";
        } else {
            return "object";
        }
    case "function":
        return "function";
    default:
        return "unknown";
}
}
module.exports.typeOf = typeOf;

/**
 * first: First determines the datatype of the array and number then loops over the array 
 * to determine the first number items of the array.
 * 
 * @param { Array }: The array over which to iterate.
 * @param { Number }: The number of values to return
 */

function first (array, num){
    // determine if array is not array
    if(Array.isArray(array) === false){
        return [];
    } // determine if number is NaN
    else if (num === NaN || num === undefined){
        return array[0];
    } // determine if numis greater than array.length
    else if (num > array.length){
        return array;
        // determine if num is negative
    } else if (num < 0){
        return [];
    } // return array using slice method from index 0 to num
    return array.slice(0, num)

}
module.exports.first = first;

/**
 * last: Last determines the datatype of the array and number and loops over the array to determine 
 * the last number items of the array. 
 * Last returns an array filled with the elements of the original array.
 * 
 * @param { Array }: The array over which to iterate.
 * @param { Number }: The number of values to return
 */

function last (array, num){
    // determine if array is not array
    if(Array.isArray(array) === false){
        return [];
    } // determine if number is NaN
    else if (num === NaN || num === undefined){
        return array[array.length - 1];
    } // determine if numis greater than array.length
    else if (num > array.length){
        return array;
        // determine if num is negative
    } else if (num < 0){
        return [];
    } 
    return array.slice(1)

}
module.exports.last = last;

/**
 * indexOf: IndexOf loops over the array and determines the index of the array that is the first occurrence 
 * of the given value. IndexOf returns the number of the index value that is the 
 * first occurrence of the given value.
 * 
 * @param { Array }: The array which to iterate.
 * @param { Value }: The given value we are trying to determine which index inside the array.
 */

function indexOf (array, value){
    // loop through array
    for (let i = 0; i < array.length; i++){
        // determine if value equal to current element
        if (array[i] === value){
            // return index
            return i;
        }
    } // return -1 if value isnt found in the array
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Contains is designed to loop over the array and determine if the index of the array equals the given value. 
 * Contains returns a boolean value of true or false.
 * 
 * @param { Array }: The array to iterate through.
 * @param { Value }: The value that will be determined if the array contains.
 */

function contains (array, value){
    // loop through array
    for (let i = 0; i < array.length; i++){
        // determine is value is in array
        if (array[i] === value){
            return true;
        }
    } // return false if value is not found
    return false;
}
module.exports.contains = contains;

/**
 * unique: Unique loops over the array and removes the duplicates. 
 * Unique returns a new array filled with all the elements from the original array, 
 * with the duplicates removed.
 * 
 * @param { Array }: The array that will be looped over.
 */

function unique (array){
    // create new array to store values
    let outp = [];
    // loop through array
    for (let i = 0; i < array.length; i++){
        // determine if element hasn't occured in new array
        if (_.indexOf(outp, array[i]) === -1){
            //push element in new array
            outp.push(array[i]);
        }
    } // return outp
    return outp;
}
module.exports.unique = unique;

/**
 * filter: Filter is designed to loop over the Array and test each value in the array with the given function. 
 * Filter returns a new array that is filled with all the elements from the array that passed the 
 * function test and equaled true.
 * 
 * @param { Array }: The array that will be looped through.
 * @param { Function }: The function that will test each value in the array.
 */

function filter (array, func){
    // create new array to store output
    let outp = [];
    // loop through array
    for (let i = 0; i < array.length; i++){
        // invoke callback function on element, index, and array
        if (func(array[i], i, array)){
            // push element into output array
            outp.push(array[i]);
        }
    } // return output
    return outp;
}
module.exports.filter = filter;

/**
 * reject: Reject is designed to loop over the Array and test each value in the array with the given function. 
 * Reject returns a new array that is filled with all of the elements from the original array that 
 * failed the function test and equaled false.
 * 
 * @param { Array }: The array that will be looped through.
 * @param { Function }: The function that will test each value in the array.
 */

function reject (array, func){
    // create new array to store output
    let outp = [];
    // loop through array
    for (let i = 0; i < array.length; i++){
        // determine if callback function is false
        if (!(func(array[i], i, array))){
            // push element into output array
            outp.push(array[i]);
        }
    } // return output
    return outp;
}
module.exports.reject = reject;

/**
 * partition: Partition is designed to loop over the Array and test the values in the array with the given function. 
 * Partition returns a nested array that has two arrays inside of it, and each inner array is filled with the 
 * elements that either passed or failed the function test, respectively.
 * 
 * @param { Array }: The array that will be looped through.
 * @param { Function }: The function that will test each value in the array.
 */

function partition (array, func){
    // create arrays for truthy and falsey
    let t = [];
    let f = [];
    // loop through array
    for (let i = 0; i < array.length; i++){
        // determine if callback function is true of false
        if (func(array[i], i, array)){
            // push element into truthy array if true
            t.push(array[i]);
        } // else push into falsey array
        else {
            f.push(array[i]);
        }
    } // return truthy and falsey arrays
    return [t, f];
}
module.exports.partition = partition;

/**
 * map: Map is designed to determine the datatype of the given collection, use the appropriate loop to loop over the collection, 
 * and then pushes the results into a new array. 
 * Map returns that new array filled with the return values of the two function calls.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection.
 */

function map (collection, func){
    // create an output array
    let outp = [];
    // determine if collection is an array
    if (Array.isArray(collection) === true){
        // loop through array
        for (let i = 0; i < collection.length; i++){
            // push callback function into output array
            outp.push(func(collection[i], i, collection))
        }
    } else { // if collection is an object
            // loop through object with for in loop
            for (let key in collection){
                // push function into output array
                outp.push(func(collection[key], key, collection))
            }
    } // return output
    return outp;
}
module.exports.map = map;

/**
 * pluck: Pluck is designed to use the map function, with the array and a property as it's parameters. 
 * Pluck returns an array containing the value of property for every element in the original array.
 * 
 * @param { Array of Objects }: This functiontakes in an array objects.
 * @param { Property }: The property to pluck out of the objects we are iterating through.
 */

function pluck (array, prop){
    // use map to find prop
    return _.map(array, function(value){
        // return array containing prop
        return value[prop];
    });
}
module.exports.pluck = pluck;

/**
 * every: Every is designed to test whether all elements in the array pass the test given by the provided function. 
 * Every returns a boolean value of true or false.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} Test: The Function to test to each value in the collection.
 */

function every (collection, func){
    // determine if function is undefined
        if (func === undefined ){
            // determine if collection is an array
            if(Array.isArray(collection)){
                // iterate through array
                for (let i = 0; i < collection.length; i++){
                    // determine if element is falsey
                    if (!collection[i]){
                        // return false;
                        return false;
                    }
                }
            } else { 
                // else, iterate through object using for in loop
                for (let key in collection){
                    // determine if value is falsey
                    if (!collection[key]){
                        // return false;
                        return false;
                    }
                }
            }
        } else { 
            // determine if collection is an array
            if (Array.isArray(collection)){
                // iterate through array
                for (let i = 0; i < collection.length; i++){
                    //determine if function is false
                    if (func(collection[i], i, collection) === false){
                        return false;
                    }
                }
            } else{ 
                // iterate through object using for in loop
                for (let key in collection){
                    // determine if function is false
                    if (func(collection[key], key, collection) === false){
                        return false;
                    }
                }
            }
        } // return true
        return true;
}
module.exports.every = every;

/**
 * some: Some is designed to test whether at least one element in the array passes the test 
 * given by the provided function. 
 * Some returns a boolean value of true or false.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} Test: The Function to test to each value in the collection.
 */

function some (collection, func){
    // determine if function is undefined
        if (func === undefined ){
            // determine if collection is an array
            if(Array.isArray(collection)){
                // iterate through array
                for (let i = 0; i < collection.length; i++){
                    // determine if element is true using non strict operator
                    if (collection[i] == true){
                        // return true;
                        return true;
                    }
                }
            } else { 
                // else, iterate through object using for in loop
                for (let key in collection){
                    // determine if value is true using non strict operator
                    if (collection[key] == true){
                        // return false;
                        return true;
                    }
                }
            }
        } else { 
            // determine if collection is an array
            if (Array.isArray(collection)){
                // iterate through array
                for (let i = 0; i < collection.length; i++){
                    //determine if function is true using non strict operator
                    if (func(collection[i], i, collection) == true){
                        return true;
                    }
                }
            } else { 
                // iterate through object using for in loop
                for (let key in collection){
                    // determine if function is true using non strict operator
                    if (func(collection[key], key, collection) == true){
                        return true;
                    }
                }
            }
        } // return false
        return false;
}
module.exports.some = some;

/**
 * reduce: Reduce is designed to loop over the array and apply the given function to the previous result, 
 * the element of the array, and the index. 
 * Reduce returns the return value of the final function call on the previous result, 
 * the element, and the index.
 * 
 * @param { Array }: The array that will be iterated through.
 * @param { Function } action: The Function to be applied to each value in the collection.
 * @param { Seed }: The initial value used for the reduce operation and is optional.
 */

function reduce (array, func, seed){
    // create result variable
    let result;
    // determine if seed is undefined
    if (seed === undefined){
        // reassign result to first index of array
        result = array[0];
        // iterate through array using for loop
        for (let i = 1; i < array.length; i++){
            // reassign result to equal func
            result = func(result, array[i], i, array)
        }
    } 
    else {
        // assign result to seed
        result = seed;
        // iterate through array
        for (let i = 0; i < array.length; i++){
            // reassign result to equal func
            result = func(result, array[i], i, array)
        }
    } // return result
    return result;
}
module.exports.reduce = reduce;

/**
 * extend: Extend is designed to copy properties, from every object from the second object onwards, 
 * into the first object in the order they are passed in. 
 * Extend returns the updated first object.
 * 
 * @param { Any Number of Objects }: This function takes in any number of arguments.
 */

function extend (object) {  
    // use for loop to iterate through arguments
    for (let i = 1; i < arguments.length; i++) {
        // use for in loop to iterate through keys of each element
      for (let key in arguments[i]) {
        // reassign object keys to equal arguments keys
        object[key] = arguments[i][key];
      }
    };
            // return object
    return object;
}
module.exports.extend = extend;