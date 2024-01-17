1 + 80;
60 - 40;
2 * 3.4;
5.0 / 2.5;

function add() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}


function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }


  let number = 5;



function add5() {
  return (number += 5);
}

function divideBy3() {
  return (number /= 3);
}

divideBy3();

add5(); 


n

add5(); 

divideBy3(); 

parseInt("2.2222", 10);

// Increment function
function increment(n) {
    return n + 1;
  }
  
  // Decrement function
  function decrement(n) {
    return n - 1;
  }
  
  // Make Integer function
  function makeInt(n) {
    return parseInt(n, 10); // Base 10 is specified as the second argument
  }
  
  // Preserve Decimal function
  function preserveDecimal(n) {
    return parseFloat(n); // parseFloat parses a string as a floating point number
  }
 
  
  console.log(increment(5));         // 6
console.log(decrement(5));         // 4
console.log(makeInt("10"));        // 10
console.log(makeInt("10.5"));      // 10
console.log(preserveDecimal("10.5")); // 10.5
console.log(makeInt("abc"));       // NaN
console.log(preserveDecimal("abc"));  // NaN
