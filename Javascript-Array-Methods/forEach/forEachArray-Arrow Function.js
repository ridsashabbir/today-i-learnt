// forEach method calls a function for each element in array

const numbers = [2, 4, 6, 8];
// call it as a arrow function

let sum = 0;
numbers.forEach((item, index, arr) => {
  sum += item;
});
console.log("Sum of elements of array is: ", sum);
