////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
  // determinen if start and end are equal
  if (start === end) {
    // return empty array
    return []
  }
  // create an empty array to store result
  let result = []
  // determiene if step is greater than 0
  if (step > 0) {
    // while i is less than or equal to end increment i by step
    for (let i = start; i <= end; i += step) {
      // push i into result
      result.push(i)
    } // else if step is less than 0
  } else {
    // while i is greater than or equal to end increment i by step
    for (let i = start; i >= end; i += step) {
      // push i into result
      result.push(i)
    }
  } // return result
  return result;
}



////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(nums) {
  // create a variable to store the sum
  let total = 0;
  // iterate through each number in the array
  for (let i = 0; i < nums.length; i++) {
      // add the current number to the total sum
      total += nums[i];
  }
  // return total
  return total;
}




////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  // create an empty array to store the reversed array
  let reversedArr = [];
  // iterate through the array in reverse order
  for (let i = arr.length - 1; i >= 0; i--) {
      // push the current element to the new array
      reversedArr.push(arr[i]);
  }
  // return reversedArr
  return reversedArr;
}


////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  // create a temporary variable to store an element while swapping
  let temp;
  // create left and right index
  let i = 0;
  let j = arr.length - 1;
  // iterate using a while loop until the left index is less than the right index
  while (i < j) {
      // store the left element in the temporary variable
      temp = arr[i];
      // set the left element to the right element
      arr[i] = arr[j];
      // set the right element to the temporary variable
      arr[j] = temp;
      // increment the left index and decrement the right index
      i++;
      j--;
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(arr) {
  let rest = null;

  for (let i = arr.length - 1; i >= 0; i--){
    rest = { value: arr[i], rest: rest};
  }
return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, outp=[]) {
// base
if (list === null){
  return outp;
}

// recursion
outp.push(list.value);
return listToArray(list.rest, outp)
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  return { value: value, rest: list };
}


////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, index) {
  // create a count variable 
  let count = 0;
  // iterate through the list using a while loop
  while (list) {
    // determine if the current index matches the given index
    if (count === index) {
      // return the value of the current element
      return list.value;
    }
    // move to the next element in the list
    list = list.rest;
    // increment count
    count++;
  }
  // if the given index is not found, return undefined
  return undefined;
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  // determine if x and y are both not objects
  if (typeof x !== 'object' && typeof y !== 'object'){
      return x === y;
  }
  // determine if either x or y are not objects
  if (typeof x !== 'object' || typeof y !== 'object'){
      return false;
  }
  // create arrays of each item keys
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);
  //determine if the lengths aren't equal
  if (xKeys.length !== yKeys.length){
      return false;
  }
  // iterate through the xKeys
  for (let i = 0; i < xKeys.length; i ++){ 
      if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
          return false;
      }
  }
  return true;
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
