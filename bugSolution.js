function myFunction(a, b) {
  const numA = a === null || a === undefined ? 0 : a; // Handle null/undefined for a
  const numB = b === null || b === undefined ? 0 : b; // Handle null/undefined for b
  return numA - numB;
}

console.log(myFunction(5, 10)); // Output: -5
console.log(myFunction(null, 10)); // Output: -10
console.log(myFunction(5, null)); // Output: 5
console.log(myFunction(null, null)); // Output: 0
console.log(myFunction(undefined, 5)); // Output: -5