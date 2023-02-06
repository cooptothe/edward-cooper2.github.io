// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./edward-cooper2.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) { 
let males = _.filter(array, function(customer){
    return customer.gender === "male";
}) // [<male>, <male>, <male>]
return males.length;
};

var femaleCount = function(array){ // return the number of female customers
let females = _.reduce(array, function(accumalator, current){
// accumalator = 0 | current = { gender: ??? }
if (current.gender === 'female'){
    accumalator += 1; // increment accumaltor
}
return accumalator; 
}, 0)
return females;
};

// invoke reduce
    // result = 0
    // for loop
        // 0
            // result = func(0, {...}, 0)


    // return result



var oldestCustomer = function(array){
    // create function expression
    let oldest = _.reduce(array, function(accumalator, current){
        // determine if accumalator age is older than the current age 
        if (accumalator.age > current.age){
            // if so return the accumalator
            return accumalator;
                } // if else return current
                else {
                    return current;
                }
    })
    // return oldest
    return oldest.name;
}; // use reduce with no seed 

var youngestCustomer = function(array){
    // create function expression
    let youngest = _.reduce(array, function(accumalator, current){
        // determine if accumalator is younger than current
        if (accumalator.age < current.age){
            // if so return the accumalator
            return accumalator;
        } // if not return current
        else {
            return current;
        }
    }) // return youngest
    return youngest.name;
}; // use reduce with no seed

var averageBalance = function(array){ // find a way to balance string to a number
    // create function expression
    let avg = _.reduce(array, function(accumalator, current){ // make seed a number
        // return accumalator plus current divided by the length of the array
        // use replace method to change balance string into number
        return accumalator + current.balance.replace(/[$,]/g, '') / array.length;
    }, 0)
    // return avg 
    return avg;
}; 

var firstLetterCount = function(array, letter){
    // create function expression 
    // use filter function to iterate through array to get access to customer name
    let count = _.filter(array, function(customer){
        // return the letters that match
       return customer.name.charAt(0).toLowerCase() === letter.toLowerCase();
    }); // return count.length 
    return count.length;
};

var friendFirstLetterCount = function(array, customer, letter){
    // loop through array 
    for (let i = 0; i < array.length; i++){
        // determine if the name matches the customers name
        if (array[i].name === customer){
            // use filter on array to only include those whose name starts with the given letter
    let friends = _.filter(array[i].friends, function(friend){
        if (friend.name.charAt(0).toLowerCase() === letter.toLowerCase()){
            return true;
        }
    });
    return friends.length;
        }
    }

};

var friendsCount = function(array, name){
    // create function expression using filter method on array
    let friends = _.filter(array, function(a){
        // return map to iterate through array friends
            return _.map(a.friends, function(b){
                // return friends name that includes the input name
                    return b.name}).includes(name)
})  // return map function on friends 
    return _.map(friends, function(friend){
        return friend.name;
    });
};

var topThreeTags = function(arr){
    // create output array
    let output = [];
    // create object for all tags
    let tagMap = {};
    // iterate through array using each
    _.each(arr, function(customer) {
        // iterate through each tag using each
      _.each(customer.tags, function(tag) {
        // for every tag in the array increment + 1
        if (tagMap[tag]){
            tagMap[tag]++;
        } else {
            tagMap[tag] = 1;
        }; 
      });
    }); 
    let max = 0;
    let mostCommonTags = [];
    // use for loop to iterate through keys 
    for (let tag in tagMap) {
        // determine if tagMap is greater than max
      if (tagMap[tag] > max) {
        // reassign max to equal tagMap
        max = tagMap[tag];
        // reassign mostCommonTags equal tag
        mostCommonTags = [tag];
      } // else push tag into array
      else if (tagMap[tag] === max) {
        mostCommonTags.push(tag);
      }
    } // return mostCommonTags array
    return mostCommonTags;
  };

var genderCount = function(array) {
// use reduce method on array
    return _.reduce(array, function(accumalator, current){
        // determine if male
            if (current.gender === 'male') {
                accumalator.male++;
                    } // determine if female
                        else if (current.gender === 'female') {
                            accumalator.female++;
                                 } // determine if non-binary
                                else {
                         accumalator["non-binary"]++;
                    }
                 return accumalator;
    }, {male: 0, female: 0, ["non-binary"]: 0});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
