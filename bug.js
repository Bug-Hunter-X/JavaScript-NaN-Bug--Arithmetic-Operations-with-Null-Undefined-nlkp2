function myFunction(a, b) {
  return a - b;
}

console.log(myFunction(5, 10)); // Expected: -5, Actual: NaN
console.log(myFunction(null, 10)); // Expected: -10, Actual: NaN
console.log(myFunction(5, null)); // Expected: 5, Actual: NaN