// forEach method calls a function for each element in array

const numbers = [2, 4, 6, 8];

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
