/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string){
    // create for loop to irterate through the array
    for (var i = 0; i < array.length; i++){
     // create if statment to see if the string matches an animals name
     if (string === array[i].name){
         return array[i];
     }
    }
    return null;
 }


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(array, string, object){
    // create for loop to iterate though the animals array
    for (var i = 0; i < array.length; i++){
        // create if statement to determine if the name matches the string
        if (string === array[i].name){
            // reassign the array to equal object
            array[i] = object; 
        }
    }
    }


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(array, string){
    // create for loop iterate though the array
for (var i = 0; i < array.length; i++){
    // create if statement to determine if the string matches the name
    if (string === array[i].name){
        // use the splice method to remove name from the array
        array.splice(i, 1)
    }
}
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(array, obj){
    // create for loop to iterate though the array
    for (var i = 0; i < array.length; i++) {
        // create if statement to determine if length of obj is greater than 0 
        // and to deterimine if it has a name that hasn't been given
        if (obj.name.length > 0 && obj.species.length > 0 && obj.name !== array[i].name){
            // use push method to add object to the array
          array.push(obj);
        } // return null if else
        else {
            return null;
        }
      }
    }


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
