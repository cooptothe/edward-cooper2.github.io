// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // return an object with key/value pairs that equals the intput
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            // use push method to add contact
        return contacts.push(contact)
    },
    findContact: function(fullName){ 
        // use for loop to iterae through contacts array
        for(var i = 0; i < contacts.length; i++) {
            // create conditional statement to determine if fullName equal to the conact's nameFirst & nameLast
            if(fullName === contacts[i].nameFirst + " " + contacts[i].nameLast){ 
                // return the conatct
            return contacts[i];
        }
    }
    },
    removeContact: function(contact){
        // use for loop to iterate through the contacts array
        for(var i = 0; i < contacts.length; i++){
            // create a conditional statement to determine if the input equals the contacts first and last name
           if(contact.nameFirst + " " + contact.nameLast === contacts[i].nameFirst + " " + contacts[i].nameLast) {
            // return contacts
            // use the splice method to remove the conact
        return contacts.splice(i, 1);
           };
        }
    },
    printAllContactNames: function(){
        // create an empty array to store names
      var fullName = [];
       // use for loop to iterate through contacts array
        for (var i = 0; i < contacts.length; i++){
        // push contact names into the fullName array
        fullName.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
        };
        // create a new variable to join the fullName array together,
        // then use the new line method "\n" to return each iteration seperated by a break
          var joinedNames = fullName.join("\n");
          // return fullNameJoined
          return joinedNames;
        } 
    } 
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
