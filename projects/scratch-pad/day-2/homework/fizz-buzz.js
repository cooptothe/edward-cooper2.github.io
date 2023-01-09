// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // create for loop that counts from 1 to 100
    for (var i = 1; i <= 100; i++){
    // use conditional chain to determine if the current number is a multiple of 3 or 5
    // if the number is a multiple of both 3 & 5
    if (i % 3 === 0 && i % 5 === 0){
        // print fizzbuzz to the console
    console.log("FizzBuzz");
    } // if number is a multiple of 5
     else if (i % 5 === 0){
        // print buzz 
        console.log("Buzz");
    } // if number is a multiple of 3
    else if (i % 3 === 0){
        // print fizz
        console.log("Fizz");}
    // else just print the current number
    else {
        console.log(i);
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}