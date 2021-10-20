var displayDiv = document.querySelector("#display"); // <div id="display">0</div>

// If user clicks on numbers 0-9 or operators, concatenate them with the previously displayed numbers
// If user clicks on the clear button, then clear everything on the display screen
// If user clicks on the equals button, then do the calcuation and display the answer to the display screen

var arr = [];
var string = '';

// If user clicks on numbers 0-9, show value in display screen and push value to array
function press(element) {
  console.log(element);
  displayDiv.innerText = element;
  arr.push(element);
}

// If user clicks on +, /, or *, push value to array
function setOP(element) {
  arr.push(element);
  console.log(arr);
}

// If user clicks on =, loop through each value in the array and concatenate as a string. Then evaluate the string and show the result on the display screen.
function calculate(element) {
  var result = 0;
  if (arr.length == 0) {
    result = 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      string += arr[i];
      console.log(string);
    }
    result = eval(string);
  }
  displayDiv.innerText = result;
}

function clr(element) {
  while (arr.length > 0) {
    arr.pop();
    string = '';
  }
  displayDiv.innerText = 0;
}
