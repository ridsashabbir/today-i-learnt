// forEach method calls a function for each element in array

const numbers = [2, 4, 6, 8];
// call it as a arrow function

let sum = 0;
numbers.forEach((item, index, arr) => {
  sum += item;
});
console.log("Sum of elements of array is: ", sum);

// Arrow functions don't have their own arguments object like regular
// functions. They lexically capture the arguments of their containing scope.
//  So, even if you don't use all the parameters provided in the arrow
//  function, they are still defined and accessible within the function
//  body.
