// 1. Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.

for (let i = 1; i < 21; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// 2. Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

for (let j = 100; j >= 0; j--) {
  if (j % 3 == 0) {
    console.log(j);
  }
}

// 3. Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

for (let k = 4; k >= -4; k -= 1.5) {
  console.log(k);
}

// 4. Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

var sum = 0;

for (let l = 1; l <= 100; l++) {
  sum += l;
}
console.log(sum);

// 5. Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

var product = 1;

for (let m = 1; m <= 12; m++) {
  product *= m;
}
console.log(product);