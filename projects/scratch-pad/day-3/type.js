// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */
 
/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // check if value is an array using isArray method
    if (Array.isArray(value)){
        // if test pass return true
        return true;
    } // is else return false
    else {
        return false;
    }
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // create conditional statement to determine if value is a type of object then use && operateor to make sure
    // value isnt null, an array, or a date
    if (typeof value === 'object' && !Array.isArray(value) && value !== null && !(value instanceof Date)){
        // if value pass condition return true
        return true;
    } // if else return false
    else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // create conditonnal statement to determine if value is an object or an array
    // just like the previous problem we will make sure value isn't a date pr null
    if (Array.isArray(value) || typeof value === 'object' && value !== null && !(value instanceof Date)){
        return true;
    } // if else return false
    else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // create a conditional chain to return the type of value as a string
    // to determine if value is array we'll use the isArray method
    if (Array.isArray(value)) {
        // return array as a string if true
        return "array";
    }
    // determine if the value is null
    else if (value === null) {
        // return null as a string
        return "null";
    }
    // detrmine if value is an instanceof Date
    else if (value instanceof Date) {
        // if true return date as a string
        return "date";
    }
    // determine if the value is a object as a collection
    else if (typeof value === "object") {
        // return object as a string
        return "object";
    }
    // else, return the type of the value as a string
    return typeof value;

    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
