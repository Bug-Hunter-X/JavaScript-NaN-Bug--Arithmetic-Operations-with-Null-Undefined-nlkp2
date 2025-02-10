# JavaScript NaN Bug: Arithmetic Operations with Null/Undefined

This repository demonstrates a common JavaScript bug where performing arithmetic operations with `null` or `undefined` values results in `NaN` (Not a Number).

## Bug Description
The provided `myFunction` subtracts two numbers. However, if either input is `null` or `undefined`, it incorrectly returns `NaN` instead of handling these cases appropriately.

## How to Reproduce
1. Clone the repository.
2. Open `bug.js`.
3. Run the script using Node.js or a browser's developer console.
4. Observe that the results for cases involving `null` or `undefined` are `NaN`.

## Solution
The solution is implemented in `bugSolution.js`.  It utilizes input validation to check for `null` or `undefined` values and provides a default value for these cases, preventing `NaN` from being produced.