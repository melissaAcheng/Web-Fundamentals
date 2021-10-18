function alwaysHungry(arr) {
  for (let i = 0; i < arr.length; i++) {
    var foodCount = 0;
    if (arr[i] == "food") {
      console.log("yummy");
      foodCount++;
    } 
  } 
  if (foodCount == 0) {
    console.log("I'm hungry");
  }
  }

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

function highPass(arr, cutoff) {
  var filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

function betterThanAverage(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var avg = sum / arr.length;

  var count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > avg) {
      count++;
    }
  }
  // count how many values are greated than the average
  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

function reverse(arr) {
  arr.reverse();
  return arr;
}
 
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
  // the [0, 1] are the starting values of the array to calculate the rest from
  var fibArr = [0, 1];
  for (let i=1; i < n-1; i++) {
    var fibNum = fibArr[i-1] + fibArr[i];
    fibArr.push(fibNum);
  }

  return fibArr;
}
 
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
