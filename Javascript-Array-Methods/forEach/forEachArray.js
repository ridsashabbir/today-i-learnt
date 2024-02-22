// forEach method calls a function for each element in array

const numbers = [2, 4, 6, 8];
// call it as a arrow function

let sum = 0;
numbers.forEach((item, index, arr) => {
  sum += item;
});
// console.log("Sum of elements of array is: ", sum);

// call forEach method for three functions separately
numbers.forEach(myfuntion1);
numbers.forEach(myfuntion2);
numbers.forEach(myfuntion3);

// it will utilize all the 3 arguments
function myfuntion1(item, index, arr) {
  //   console.log((arr[index] = item * 10));
}

// it will utlize only two arguments and will still work fine
function myfuntion2(item, index, arr) {
  //   console.log(arr[index] + 2);
}

// if we will not pass three arguments it will throw error of undefined
function myfuntion3(index, arr) {
  //   console.log(arr[index]);
}

// Arrow functions don't have their own arguments object like regular functions. They lexically capture the arguments of their containing scope. So, even if you don't use all the parameters provided in the arrow function, they are still defined and accessible within the function body.
// Regular functions, on the other hand, strictly follow the parameters defined in their function signature. If you call them with fewer arguments than expected, the additional parameters will be undefined. This is why myfunction1 works differently from the arrow function.

// let's count elements in array
const letters = ["a", "b", "c", "a", "b", "d", "c"];
let count = {};
letters.forEach((item) => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
});

console.log(count);
