//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // create empty array to store values
let array = [];
// use for in loop to iterate through object keys
for (let key in object){
    // push key values into array
    array.push(object[key])
} // return the array
return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
// create empty string to store output
let output = '';
// create new variable and assign it to the object keys
let keys = Object.keys(object);
// create for loop to iterate through object keys
for (var i = 0; i <= keys.length - 2; i++){
    // reassign output variable to add keys followed by a space
    output = output + keys[i] + " "

}  output += keys[keys.length - 1];
// return output 
return output;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
// create an output varaible as an empty string
let output = '';
// create another variable and assign it to the object values
let values = Object.values(object);
// create for loop to iterate through values
for (var i = 0; i <= values.length - 2; i++){
    // determine if the value is a string
    if (typeof values[i] === 'string'){
        // add value to the output variable
        output = output + values[i] + ' ';
    }
} output += values[values.length - 1];
    return output;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // determine if collection is an array by using isArraay method
    if (Array.isArray(collection) === true){
        // return array
        return 'array';
    } // else return object
    else {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // return the string capitalized using to uppercase and slice method
    // concatenate by using add operator
    return string[0].toUpperCase() + string.slice(1)
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
// create new variable and use split method to seperate string by space
  let words = string.split(" ");
    // use for loop to iterate through string
      for (let i = 0; i < words.length; i++){
        // reassign each word to be capitalized using toUpperCase and slice method
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
    // return words joined by space
    return words.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
 // create new variable and assign it to the objects name property uppecased
let name = object.name.charAt(0).toUpperCase() + object.name.slice(1)
// return welcome message
return "Welcome" + " " + name + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
 // create new variable and assign it to the objects name property uppecased
 let name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
 // create a varaible for the object species
 let species = object.species.charAt(0).toUpperCase() + object.species.slice(1);
 // return string 
return name + " " + "is a " + species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
// determine if object has the property of noises and if it is greater than 0
if (object.hasOwnProperty('noises') && object.noises.length > 0){
    // return noises joined by spaces
    return object.noises.join(' ');
} // determine if noises exist and array is empty
else if (object.hasOwnProperty('noises') && object.noises.length === 0){
    // return string
    return "there are no noises"
} // else return string
else {
    return "there are no noises"
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
// use .includes method to determine if string has the word
if (string.includes(word)){
    return true;
} // if else return false
else {
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
// use push method to add name to friends array
object.friends.push(name)
// return object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
 // determine if the object has a property of friends and friends is an array
 if (object.hasOwnProperty("friends") && Array.isArray(object.friends)) {
    // create for loop to iterate through friends array
    for(let i = 0; i < object.friends.length; i++) {
        // determine if name name is equal to the value of friends
      if (name === object.friends[i]) {
        // return true
        return true;  
      }
    }    
  }  // return false 
 return false;   
} 


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
// create an array to store names
let nonFriends = [];
// create an array to store output
let output = [];
 // assign new varaiable to null
 let nul = null;
 // create for loop to iterate through array
 for (let i = 0; i < array.length; i++){
     // determine if name equals name the current iteration of name in the array
     if (name === array[i].name){
         // if true assign nul variable to equal array
         nul = array[i];
         // else push the current name into the nonFriends array
     } else {
         nonFriends.push(array[i].name);
     }
 }
  // return the nonFriends array if nul = null
  if (nul === null){
    return nonFriends;
}
// create for loop to iterate through nonFriends array
for (let i = 0; i < nonFriends.length; i++){
    // determine if friends has an index of nonList array
    if (nul.friends.indexOf(nonFriends[i]) == -1){
        // push into output
        output.push(nonFriends[i]);
    }
}
// return the output
return output;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
// create for loop to iterate though the array
for (let i = 0; i < array.length; i++){
    // determine if object has property of array using hasOwnProperty method
if (object.hasOwnProperty(array[i])) {
    // use delete operator to delete property
    delete object[array[i]];
  }
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // create new array to store removed duplicates
let newArr = [];
// use for loop to iterate though the array
for (let i = 0; i < array.length; i++){
// determine if new array conatains the current element
if (newArr.indexOf(array[i]) === -1){
    // push element into the new array
    newArr.push(array[i])
}
} // return new arr
return newArr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}