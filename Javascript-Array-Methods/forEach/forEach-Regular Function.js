// call forEach method for three functions separately
numbers.forEach(myfuntion1);
numbers.forEach(myfuntion2);
numbers.forEach(myfuntion3);

// it will utilize all the 3 arguments
function myfuntion1(item, index, arr) {
  console.log((arr[index] = item * 10));
}

// it will utlize only two arguments and will still work fine
function myfuntion2(item, index, arr) {
  console.log(arr[index] + 2);
}

// if we will not pass three arguments it will throw error of undefined
function myfuntion3(index, arr) {
  console.log(arr[index]);
}

// Regular functions, on the other hand, strictly follow the parameters
// defined in their function signature. If you call them with fewer
// arguments than expected, the additional parameters will be undefined.
// This is why myfunction1 works differently from the arrow function.
