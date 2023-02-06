
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
// create variable to store string
let triangle = "";

// create for loop 
for (let i = 1; i <= num; i++) {
    // inner loop to build the string for each row
    for (let j = 1; j <= i; j++) {
        triangle += "#";
    }
    // log the row and add a new line
    console.log(triangle);
    triangle = "";
}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
 // loop through the numbers 1 to 15
 for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
  } else if (i % 3 === 0) {
      console.log("fizz");
  } else if (i % 5 === 0) {
      console.log("buzz");
  } else {
      console.log(i);
  }
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(n) {
  // create an empty string to store the chessboard
  let chessboard = "";

  // for loop to iterate over rows
  for (let i = 0; i < n; i++) {
      // for loop to iterate over columns
      for (let j = 0; j < n; j++) {
          // determine if the sum of the current row and column is even or odd
          if ((i + j) % 2 === 0) {
              // add a space character to the chessboard if the sum is even
              chessboard += " ";
          } else {
              // add a "#" character to the chessboard if the sum is odd
              chessboard += "#";
          }
      }
      // add a newline character to start a new row
      chessboard += "\n";
  }
  // log chessboard
  console.log(chessboard);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
